/* Vokabel-App Deluxe (vanilla JS, keine externen Libs) */
const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => [...el.querySelectorAll(sel)];
const state = {
  dark: false,
  sfx: true,
  dyslexic: false,
  voice: null,
  voices: [],
  dataset: [],
  categories: [],
  currentSet: [],
  currentIndex: 0,
  mode: 'mc',
  score: 0,
  total: 0,
  accuracy: 0,
  streak: 0,
  learned: new Set(),
  srs: {},          // id: {box: 1..5, due: timestamp}
  favs: new Set(),
  hard: new Set(),
  achievements: {},
  daily: { date: null, done: false },
};

const STORAGE_KEY = 'ru-vocab-deluxe-v1';
const load = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    Object.assign(state, data, {
      learned: new Set(data.learned || []),
      favs: new Set(data.favs || []),
      hard: new Set(data.hard || []),
    });
  } catch {}
};
const save = () => {
  const toSave = {...state,
    learned: [...state.learned],
    favs: [...state.favs],
    hard: [...state.hard],
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
};

function randInt(n){ return Math.floor(Math.random()*n); }
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=randInt(i+1); [a[i],a[j]]=[a[j],a[i]];} return a; }

async function init(){
  load();
  bindUI();
  themeApply();
  await loadData();
  buildCategories();
  buildAlphabetGrid();
  updateStats();
  registerSW();
  drawChartDummy();
  setupInstall();
  scanVoices();
}

async function loadData(){
  const base = await fetch('data/vocab.ru.json').then(r=>r.json());
  state.dataset = base;
  state.categories = [...new Set(base.map(x=>x.cat))];
  // init SRS map
  for (const item of base){
    if (!state.srs[item.id]) state.srs[item.id] = {box:1, due: Date.now()};
  }
}

function buildCategories(){
  const sel = $('#category-select');
  sel.innerHTML = '';
  for (const c of state.categories){
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    sel.appendChild(opt);
  }
}

function selectSet(){
  const cat = $('#category-select').value;
  const arr = state.dataset.filter(x=>x.cat===cat);
  state.currentSet = shuffle(arr.slice());
  state.currentIndex = 0;
  state.score = 0; state.total = state.currentSet.length;
  $('#bar').style.width = '0%';
}

function nextCard(){
  const item = state.currentSet[state.currentIndex];
  if (!item) { endSession(); return; }
  $('#feedback').textContent = '';
  $('#answer').value = '';
  $('#choices').innerHTML = '';
  const mode = state.mode;
  const promptSide = Math.random() < 0.5 ? 'ru' : 'de';
  $('#prompt').textContent = promptSide==='ru' ? item.ru : item.de;
  $('#prompt').dataset.answer = promptSide==='ru' ? item.de : item.ru;
  if (mode === 'mc'){
    const pool = shuffle(state.dataset.filter(x=>x.id!==item.id)).slice(0,3).map(x => promptSide==='ru' ? x.de : x.ru);
    const correct = $('#prompt').dataset.answer;
    const opts = shuffle([...pool, correct]);
    for (const txt of opts){
      const b = document.createElement('button');
      b.className = 'choice-btn';
      b.textContent = txt;
      b.onclick = () => checkAnswer(txt, correct, item);
      $('#choices').appendChild(b);
    }
    $('#answer').style.display = 'none';
    $('#choices').style.display = 'grid';
  } else {
    $('#answer').style.display = 'block';
    $('#choices').style.display = 'none';
    $('#answer').focus();
  }
  $('#progress #bar').style.width = `${Math.round((state.currentIndex)/state.total*100)}%`;
}

function checkAnswer(given, correct, item){
  const ok = given.trim().toLowerCase() === correct.trim().toLowerCase();
  feedback(ok, correct);
  updateStatsAfterAnswer(ok, item);
}

function feedback(ok, correct){
  const el = $('#feedback');
  if (ok){
    el.textContent = 'Richtig!';
    confetti();
    ping(true);
  } else {
    el.textContent = `Falsch. Richtig wäre: ${correct}`;
    ping(false);
  }
}

function updateStatsAfterAnswer(ok, item){
  state.accuracy = Math.round(((state.accuracy*state.learned.size) + (ok?1:0)) / (state.learned.size+1) * 100);
  state.learned.add(item.id);
  if (ok){
    promoteSRS(item.id);
    unlockAchievements();
  } else {
    demoteSRS(item.id);
  }
  state.currentIndex++;
  $('#bar').style.width = `${Math.round((state.currentIndex)/state.total*100)}%`;
  save();
}

function endSession(){
  $('#feedback').textContent = 'Session beendet.';
}

function promoteSRS(id){
  const s = state.srs[id] || {box:1, due:Date.now()};
  s.box = Math.min(5, s.box+1);
  const days = [0,1,2,4,7,14][s.box];
  s.due = Date.now() + days*24*3600*1000;
  state.srs[id] = s;
}
function demoteSRS(id){
  const s = state.srs[id] || {box:1, due:Date.now()};
  s.box = Math.max(1, s.box-1);
  s.due = Date.now() + 12*3600*1000;
  state.srs[id] = s;
}

function srsDueSet(){
  const now = Date.now();
  return state.dataset.filter(x => (state.srs[x.id]?.due ?? 0) <= now);
}

function startDuePractice(){
  const due = srsDueSet();
  if (!due.length){
    $('#practice-feedback').textContent = 'Heute nichts fällig. Luxus.';
    return;
  }
  state.currentSet = shuffle(due);
  state.currentIndex = 0;
  nextPractice();
}

function nextPractice(){
  const item = state.currentSet[state.currentIndex];
  if (!item){ $('#practice-feedback').textContent = 'Fertig.'; return; }
  $('#practice-answer').value='';
  $('#practice-prompt').textContent = Math.random()<0.5 ? item.ru : item.de;
  $('#practice-prompt').dataset.answer = $('#practice-prompt').textContent===item.ru ? item.de : item.ru;
}

function gradePractice(grade){
  const item = state.currentSet[state.currentIndex];
  const given = $('#practice-answer').value.trim().toLowerCase();
  const correct = $('#practice-prompt').dataset.answer.trim().toLowerCase();
  const ok = given === correct || grade >= 5;
  if (ok) promoteSRS(item.id); else demoteSRS(item.id);
  $('#practice-feedback').textContent = ok ? 'Gut!' : `Nope. Richtig: ${correct}`;
  state.currentIndex++;
  save();
  nextPractice();
}

/* UI Binds */
function bindUI(){
  $$('.tab').forEach(b => b.addEventListener('click', () => {
    $$('.tab').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const id = b.dataset.tab;
    $$('.panel').forEach(p => p.classList.remove('visible'));
    $('#'+id).classList.add('visible');
  }));
  $('#btn-dark').onclick = () => { state.dark = !state.dark; themeApply(); save(); };
  $('#toggle-dark').onchange = e => { state.dark = e.target.checked; themeApply(); save(); };
  $('#toggle-sfx').onchange = e => { state.sfx = e.target.checked; save(); };
  $('#toggle-dyslexic').onchange = e => { state.dyslexic = e.target.checked; document.body.classList.toggle('dyslexic', state.dyslexic); save(); };

  $('#btn-start').onclick = () => { state.mode = $('#mode-select').value; selectSet(); nextCard(); };
  $('#btn-next').onclick = () => nextCard();
  $('#btn-reveal').onclick = () => { $('#feedback').textContent = 'Lösung: ' + $('#prompt').dataset.answer; };
  $('#btn-say').onclick = () => speak($('#prompt').textContent, 'ru-RU');
  $('#answer').addEventListener('keydown', e => { if (e.key==='Enter') checkAnswer($('#answer').value, $('#prompt').dataset.answer, state.currentSet[state.currentIndex]); });

  $('#btn-alpha-quiz').onclick = () => startAlphabetQuiz();
  $('#btn-alpha-audio').onclick = () => {
    const sel = $('.alpha-item.selected'); if (sel) speak(sel.dataset.ru, 'ru-RU');
  };

  $('#btn-due').onclick = () => startDuePractice();
  $('#practice .actions').addEventListener('click', e => {
    const g = e.target.dataset.grade; if (!g) return;
    gradePractice(Number(g));
  });

  $('#btn-import').onclick = () => $('#file-input').click();
  $('#file-input').onchange = async (e) => {
    const file = e.target.files[0]; if (!file) return;
    const text = await file.text();
    try {
      const data = JSON.parse(text);
      if (!Array.isArray(data)) throw new Error('JSON muss ein Array sein.');
      state.dataset = data;
      state.categories = [...new Set(data.map(x=>x.cat))];
      buildCategories();
      save();
      alert('Import erfolgreich.');
    } catch(err){
      alert('Fehler beim Import: '+err.message);
    }
  };
  $('#btn-export').onclick = () => {
    const blob = new Blob([JSON.stringify(state.dataset, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'vocab-export.json'; a.click();
    URL.revokeObjectURL(url);
  };

  $('#btn-voice-scan').onclick = scanVoices;
  $('#voice-select').onchange = e => {
    const idx = Number(e.target.value);
    state.voice = state.voices[idx] || null; save();
  };

  $('#btn-reset').onclick = () => {
    if (confirm('Wirklich alles löschen?')){
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  };
}

/* Theme */
function themeApply(){
  document.body.classList.toggle('light', !state.dark);
  document.body.classList.toggle('dark', state.dark);
  $('#toggle-dark').checked = state.dark;
}

/* Alphabet */
async function buildAlphabetGrid(){
  const alpha = await fetch('data/alphabet.ru.json').then(r=>r.json());
  const grid = $('#alphabet-grid'); grid.innerHTML = '';
  alpha.forEach(ch => {
    const div = document.createElement('div');
    div.className = 'alpha-item';
    div.dataset.ru = ch.ru;
    div.innerHTML = `<strong lang="ru">${ch.ru}</strong><small>${ch.name}</small>`;
    div.onclick = () => {
      $$('.alpha-item').forEach(x=>x.classList.remove('selected'));
      div.classList.add('selected');
      speak(ch.ru, 'ru-RU');
    };
    grid.appendChild(div);
  });
}

function startAlphabetQuiz(){
  const items = $$('.alpha-item');
  if (!items.length) return;
  const idx = Math.floor(Math.random()*items.length);
  items[idx].click();
}

/* Audio TTS + simple SFX */
function scanVoices(){
  const voices = speechSynthesis.getVoices();
  if (!voices.length){
    speechSynthesis.onvoiceschanged = scanVoices;
    return;
  }
  state.voices = voices.filter(v => v.lang.toLowerCase().startsWith('ru'));
  const sel = $('#voice-select');
  sel.innerHTML = '';
  state.voices.forEach((v, i) => {
    const opt = document.createElement('option');
    opt.value = String(i); opt.textContent = `${v.name} (${v.lang})`;
    sel.appendChild(opt);
  });
  if (state.voice){
    const idx = state.voices.findIndex(v => v.name === state.voice.name);
    sel.value = String(idx);
  }
}

function speak(text, lang='ru-RU'){
  if (!text) return;
  const u = new SpeechSynthesisUtterance(text);
  if (state.voice) u.voice = state.voice;
  u.lang = lang;
  speechSynthesis.speak(u);
}

function ping(ok){
  if (!state.sfx) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = ok ? 'triangle' : 'sawtooth';
    o.frequency.value = ok ? 660 : 220;
    g.gain.value = 0.0001;
    o.connect(g); g.connect(ctx.destination);
    o.start();
    const t = ctx.currentTime;
    g.gain.exponentialRampToValueAtTime(0.05, t+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t+0.25);
    o.stop(t+0.26);
  } catch {}
}

/* Confetti (tiny) */
function confetti(){
  const n = 20;
  for (let i=0;i<n;i++){
    const s = document.createElement('span');
    s.textContent = '•';
    s.style.position='fixed';
    s.style.left = Math.random()*100+'vw';
    s.style.top = '10px';
    s.style.fontSize = (8+Math.random()*16)+'px';
    s.style.opacity = '0.9';
    s.style.pointerEvents='none';
    s.style.transition='transform 0.9s ease, opacity 0.9s ease';
    document.body.appendChild(s);
    requestAnimationFrame(()=>{
      s.style.transform = `translateY(${60+Math.random()*120}vh) rotate(${Math.random()*360}deg)`;
      s.style.opacity = '0';
    });
    setTimeout(()=>s.remove(), 1000);
  }
}

/* Simple chart without libs */
function drawChartDummy(){
  const can = $('#chart-dummy');
  const ctx = can.getContext('2d');
  ctx.clearRect(0,0,can.width,can.height);
  ctx.lineWidth = 2;
  ctx.beginPath();
  const pts = [...Array(14)].map((_,i)=>({x: i*(can.width/13), y: 20 + Math.sin(i/2)*20 + 100 + Math.random()*20}));
  ctx.moveTo(pts[0].x, pts[0].y);
  pts.forEach(p=>ctx.lineTo(p.x,p.y));
  ctx.stroke();
}

/* Install (PWA) */
function registerSW(){
  if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js');
  }
}
let deferredPrompt=null;
function setupInstall(){
  window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault();
    deferredPrompt = e;
    $('#btn-install').style.display = 'inline-block';
  });
  $('#btn-install').onclick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  };
}

/* Start */
window.addEventListener('load', init);
