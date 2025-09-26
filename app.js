/* Russisch Vokabel-App Deluxe – moderne Landingpage, Themes & optionale Imports */
const THEMES = {
  midnight: {
    label: 'Midnight Aurora',
    description: 'Nordische Nacht, Schimmer der Polarlichter',
    tone: 'dark',
    image: 'url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #0b132e 0%, #1a3f6d 55%, #090b1c 100%)',
    overlay: 'linear-gradient(160deg, rgba(14,31,68,0.3), rgba(0,0,0,0.6))',
    vars: {
      '--bg': '#050a1b',
      '--bg-grad': 'radial-gradient(circle at 15% 20%, rgba(118,180,255,0.36), transparent 58%), radial-gradient(circle at 82% 10%, rgba(177,103,255,0.32), transparent 60%), #040715',
      '--bg-texture': 'radial-gradient(circle, rgba(120,180,255,0.15) 0%, transparent 58%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center top',
      '--bg-art-filter': 'saturate(1.12) brightness(0.85)',
      '--bg-art-opacity': '0.62',
      '--fg': '#f4f7ff',
      '--muted': '#9fb8df',
      '--primary': '#82a7ff',
      '--primary-2': '#98bcff',
      '--danger': '#ff7a9b',
      '--card': 'rgba(7,13,34,0.82)',
      '--input-surface': 'rgba(12,20,44,0.82)',
      '--card-border': 'rgba(130,165,255,0.38)',
      '--input-border': 'rgba(130,165,255,0.32)',
      '--border': 'rgba(255,255,255,0.12)',
      '--accent': '#cbd9ff',
      '--glass': 'rgba(6,10,28,0.64)',
      '--shadow': '0 30px 65px rgba(3,6,18,0.6)'
    }
  },
  imperial: {
    label: 'Imperial Ballroom',
    description: 'Goldene Details, klassisches St. Petersburg',
    tone: 'light',
    image: 'url("https://images.unsplash.com/photo-1529429617124-aee0a37c56b3?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #f6e7d3 0%, #d7b06a 55%, #a0742a 100%)',
    overlay: 'linear-gradient(140deg, rgba(168,118,50,0.4), rgba(255,255,255,0.48))',
    vars: {
      '--bg': '#f4e9da',
      '--bg-grad': 'radial-gradient(circle at 20% 15%, rgba(255,214,153,0.55), transparent 58%), radial-gradient(circle at 80% 8%, rgba(197,163,107,0.4), transparent 60%), #f6ede0',
      '--bg-texture': 'radial-gradient(circle, rgba(255,228,180,0.16) 0%, transparent 58%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1529429617124-aee0a37c56b3?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center',
      '--bg-art-filter': 'saturate(1.05) brightness(1.05)',
      '--bg-art-opacity': '0.38',
      '--fg': '#2f1d0e',
      '--muted': '#7a5837',
      '--primary': '#b17535',
      '--primary-2': '#d29a52',
      '--danger': '#c65151',
      '--card': 'rgba(255,250,244,0.82)',
      '--input-surface': 'rgba(255,255,255,0.85)',
      '--card-border': 'rgba(185,132,66,0.4)',
      '--input-border': 'rgba(136,98,52,0.28)',
      '--border': 'rgba(120,82,43,0.24)',
      '--accent': '#f0c27d',
      '--glass': 'rgba(255,248,236,0.72)',
      '--shadow': '0 24px 50px rgba(147,110,58,0.32)'
    }
  },
  birch: {
    label: 'Birkenwald',
    description: 'Frische Morgenluft & russische Natur',
    tone: 'light',
    image: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #0f5b4c 0%, #4fa37e 60%, #c8f3d4 100%)',
    overlay: 'linear-gradient(160deg, rgba(14,63,54,0.35), rgba(255,255,255,0.35))',
    vars: {
      '--bg': '#0f2f2a',
      '--bg-grad': 'radial-gradient(circle at 80% 10%, rgba(110,200,160,0.45), transparent 58%), radial-gradient(circle at 15% 90%, rgba(60,180,150,0.35), transparent 60%), #0c221f',
      '--bg-texture': 'radial-gradient(circle, rgba(200,255,220,0.12) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center',
      '--bg-art-filter': 'saturate(1.05) brightness(0.95)',
      '--bg-art-opacity': '0.46',
      '--fg': '#f4fff5',
      '--muted': '#9ec7b0',
      '--primary': '#4fba9c',
      '--primary-2': '#74d5b7',
      '--danger': '#f46d6d',
      '--card': 'rgba(10,32,28,0.82)',
      '--input-surface': 'rgba(14,40,34,0.78)',
      '--card-border': 'rgba(120,210,170,0.35)',
      '--input-border': 'rgba(110,210,170,0.32)',
      '--border': 'rgba(140,200,170,0.28)',
      '--accent': '#8be5c5',
      '--glass': 'rgba(12,36,30,0.68)',
      '--shadow': '0 26px 52px rgba(2,22,18,0.48)'
    }
  },
  velvet: {
    label: 'Velvet Theatre',
    description: 'Burgunder Vorhänge & warme Kerzen',
    tone: 'dark',
    image: 'url("https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #3d0f1d 0%, #742235 50%, #19060d 100%)',
    overlay: 'linear-gradient(160deg, rgba(125,41,64,0.45), rgba(0,0,0,0.6))',
    vars: {
      '--bg': '#16050c',
      '--bg-grad': 'radial-gradient(circle at 75% 10%, rgba(198,88,120,0.5), transparent 58%), radial-gradient(circle at 10% 80%, rgba(90,26,44,0.42), transparent 60%), #0f0308',
      '--bg-texture': 'radial-gradient(circle, rgba(255,214,214,0.1) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center',
      '--bg-art-filter': 'saturate(1.1) brightness(0.85)',
      '--bg-art-opacity': '0.58',
      '--fg': '#fbe9f0',
      '--muted': '#c49aa8',
      '--primary': '#d66280',
      '--primary-2': '#f07ea0',
      '--danger': '#f76a6a',
      '--card': 'rgba(40,10,22,0.85)',
      '--input-surface': 'rgba(40,12,26,0.82)',
      '--card-border': 'rgba(214,98,128,0.4)',
      '--input-border': 'rgba(214,98,128,0.32)',
      '--border': 'rgba(214,98,128,0.25)',
      '--accent': '#ff9dbd',
      '--glass': 'rgba(36,8,20,0.72)',
      '--shadow': '0 28px 54px rgba(39,7,17,0.55)'
    }
  },
  sunset: {
    label: 'Sunset Steppe',
    description: 'Weite Horizonte & warme Pastelltöne',
    tone: 'light',
    image: 'url("https://images.unsplash.com/photo-1470509037663-253afd7f0f0b?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #ffb47d 0%, #ff6f91 45%, #1f1c47 100%)',
    overlay: 'linear-gradient(180deg, rgba(255,119,93,0.38), rgba(18,13,46,0.6))',
    vars: {
      '--bg': '#1e1635',
      '--bg-grad': 'radial-gradient(circle at 20% 10%, rgba(255,196,120,0.58), transparent 55%), radial-gradient(circle at 80% 5%, rgba(206,98,171,0.45), transparent 60%), #1a1531',
      '--bg-texture': 'radial-gradient(circle, rgba(255,200,150,0.14) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1470509037663-253afd7f0f0b?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center',
      '--bg-art-filter': 'saturate(1.08) brightness(0.9)',
      '--bg-art-opacity': '0.5',
      '--fg': '#fff4f2',
      '--muted': '#e2b5ad',
      '--primary': '#ff7c8d',
      '--primary-2': '#ff9fa7',
      '--danger': '#ff5c72',
      '--card': 'rgba(34,20,54,0.85)',
      '--input-surface': 'rgba(38,24,60,0.78)',
      '--card-border': 'rgba(255,140,160,0.35)',
      '--input-border': 'rgba(255,140,160,0.32)',
      '--border': 'rgba(255,158,180,0.22)',
      '--accent': '#ffd1a1',
      '--glass': 'rgba(30,20,53,0.7)',
      '--shadow': '0 26px 52px rgba(12,9,26,0.55)'
    }
  },
  midnightSun: {
    label: 'Midnight Sun',
    description: 'Nordisches Licht zwischen Tag und Nacht',
    tone: 'dark',
    image: 'url("https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #17375e 0%, #2f6c88 45%, #f2c86a 100%)',
    overlay: 'linear-gradient(160deg, rgba(16,48,88,0.4), rgba(255,206,122,0.45))',
    vars: {
      '--bg': '#102132',
      '--bg-grad': 'radial-gradient(circle at 15% 20%, rgba(118,180,255,0.45), transparent 58%), radial-gradient(circle at 75% 10%, rgba(255,207,116,0.42), transparent 60%), #0b1829',
      '--bg-texture': 'radial-gradient(circle, rgba(255,233,170,0.14) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center',
      '--bg-art-filter': 'saturate(1.08) brightness(0.92)',
      '--bg-art-opacity': '0.48',
      '--fg': '#f3fbff',
      '--muted': '#a2bed4',
      '--primary': '#6bc4ff',
      '--primary-2': '#8cd8ff',
      '--danger': '#ff7a7a',
      '--card': 'rgba(12,31,52,0.82)',
      '--input-surface': 'rgba(16,32,52,0.8)',
      '--card-border': 'rgba(107,196,255,0.38)',
      '--input-border': 'rgba(107,196,255,0.32)',
      '--border': 'rgba(255,255,255,0.12)',
      '--accent': '#ffd07a',
      '--glass': 'rgba(11,26,42,0.7)',
      '--shadow': '0 24px 50px rgba(8,22,38,0.55)'
    }
  },
  winterPalace: {
    label: 'Winter Palace',
    description: 'Eisblaues Petersburg & barocker Glanz',
    tone: 'cool',
    image: 'url("https://images.unsplash.com/photo-1548777123-ec5aa862c16a?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #0e3b5e 0%, #3ba0c9 55%, #c8f3ff 100%)',
    overlay: 'linear-gradient(160deg, rgba(16,84,122,0.32), rgba(255,255,255,0.4))',
    vars: {
      '--bg': '#061a2c',
      '--bg-grad': 'radial-gradient(circle at 78% 12%, rgba(120,200,255,0.42), transparent 60%), radial-gradient(circle at 12% 88%, rgba(40,130,185,0.35), transparent 62%), #04121f',
      '--bg-texture': 'radial-gradient(circle, rgba(180,230,255,0.16) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1548777123-ec5aa862c16a?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center',
      '--bg-art-filter': 'saturate(1.05) brightness(0.9)',
      '--bg-art-opacity': '0.52',
      '--fg': '#e9f6ff',
      '--muted': '#9bc4db',
      '--primary': '#78c9ff',
      '--primary-2': '#9bdfff',
      '--danger': '#ff7fa1',
      '--card': 'rgba(10,34,48,0.82)',
      '--input-surface': 'rgba(16,42,60,0.8)',
      '--card-border': 'rgba(120,200,255,0.38)',
      '--input-border': 'rgba(120,200,255,0.34)',
      '--border': 'rgba(132,190,220,0.3)',
      '--accent': '#b9f1ff',
      '--glass': 'rgba(6,24,40,0.7)',
      '--shadow': '0 30px 60px rgba(4,18,36,0.55)'
    }
  },
  porcelain: {
    label: 'Porzellan Garten',
    description: 'Pastellblüten & zarte Ornamentik',
    tone: 'light',
    image: 'url("https://images.unsplash.com/photo-1521120098170-1e1c3f58c6f8?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(145deg, #f7c3d0 0%, #f5e6ff 55%, #9dc9ff 100%)',
    overlay: 'linear-gradient(160deg, rgba(250,210,230,0.45), rgba(120,160,255,0.3))',
    vars: {
      '--bg': '#f8edf3',
      '--bg-grad': 'radial-gradient(circle at 18% 20%, rgba(255,200,220,0.55), transparent 58%), radial-gradient(circle at 82% 6%, rgba(176,200,255,0.45), transparent 60%), #f6f0f8',
      '--bg-texture': 'radial-gradient(circle, rgba(255,210,235,0.16) 0%, transparent 58%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1521120098170-1e1c3f58c6f8?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center',
      '--bg-art-filter': 'saturate(1.08) brightness(1.05)',
      '--bg-art-opacity': '0.35',
      '--fg': '#2f2a3a',
      '--muted': '#7c6e8f',
      '--primary': '#c768a1',
      '--primary-2': '#de89ba',
      '--danger': '#d45b7c',
      '--card': 'rgba(255,252,255,0.78)',
      '--input-surface': 'rgba(255,255,255,0.88)',
      '--card-border': 'rgba(215,160,210,0.35)',
      '--input-border': 'rgba(160,140,190,0.26)',
      '--border': 'rgba(164,140,190,0.22)',
      '--accent': '#9ec8ff',
      '--glass': 'rgba(255,248,255,0.72)',
      '--shadow': '0 26px 52px rgba(172,148,196,0.28)'
    }
  },
  volga: {
    label: 'Volga Dawn',
    description: 'Morgendunst über stillen Flussufern',
    tone: 'mist',
    image: 'url("https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #1d2d44 0%, #3b6c7a 55%, #b3d9d7 100%)',
    overlay: 'linear-gradient(160deg, rgba(32,78,108,0.4), rgba(196,220,215,0.35))',
    vars: {
      '--bg': '#0d1a26',
      '--bg-grad': 'radial-gradient(circle at 72% 12%, rgba(120,180,200,0.45), transparent 60%), radial-gradient(circle at 18% 86%, rgba(70,140,160,0.38), transparent 62%), #08121d',
      '--bg-texture': 'radial-gradient(circle, rgba(160,210,220,0.16) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center',
      '--bg-art-filter': 'saturate(1.02) brightness(0.9)',
      '--bg-art-opacity': '0.5',
      '--fg': '#ecf4f7',
      '--muted': '#9eb7c3',
      '--primary': '#5bb5c5',
      '--primary-2': '#7ad0d6',
      '--danger': '#ff7f86',
      '--card': 'rgba(12,32,44,0.82)',
      '--input-surface': 'rgba(18,36,48,0.8)',
      '--card-border': 'rgba(120,180,200,0.36)',
      '--input-border': 'rgba(120,180,200,0.32)',
      '--border': 'rgba(150,200,210,0.22)',
      '--accent': '#b7e6e0',
      '--glass': 'rgba(10,28,40,0.68)',
      '--shadow': '0 28px 58px rgba(5,16,26,0.55)'
    }
  },
  troika: {
    label: 'Troika Trail',
    description: 'Winterliche Kutschfahrt durch den Schnee',
    tone: 'frost',
    image: 'url("https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #1a2740 0%, #4f7aa0 55%, #ffffff 100%)',
    overlay: 'linear-gradient(160deg, rgba(20,40,70,0.45), rgba(255,255,255,0.5))',
    vars: {
      '--bg': '#0a1524',
      '--bg-grad': 'radial-gradient(circle at 20% 15%, rgba(120,170,210,0.45), transparent 60%), radial-gradient(circle at 82% 10%, rgba(200,220,255,0.42), transparent 62%), #050e1a',
      '--bg-texture': 'radial-gradient(circle, rgba(200,230,255,0.14) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center',
      '--bg-art-filter': 'saturate(1.05) brightness(0.92)',
      '--bg-art-opacity': '0.55',
      '--fg': '#f0f6ff',
      '--muted': '#a9bfd6',
      '--primary': '#6faee8',
      '--primary-2': '#8bc5f2',
      '--danger': '#ff7284',
      '--card': 'rgba(12,30,50,0.8)',
      '--input-surface': 'rgba(16,36,56,0.8)',
      '--card-border': 'rgba(140,190,230,0.36)',
      '--input-border': 'rgba(140,190,230,0.32)',
      '--border': 'rgba(160,200,230,0.22)',
      '--accent': '#d5f0ff',
      '--glass': 'rgba(8,20,36,0.7)',
      '--shadow': '0 28px 56px rgba(6,14,26,0.55)'
    }
  }
};

const GRADE_INFO = {
  beginner: {
    label: 'Anfänger',
    description: 'Grundlagen, Zahlen und erste Gespräche'
  },
  intermediate: {
    label: 'Fortgeschritten',
    description: 'Reisen, Stadtleben und Gefühle beschreiben'
  },
  advanced: {
    label: 'Meisterklasse',
    description: 'Kultur, Politik und anspruchsvokabular'
  }
};

const BUILT_IN_WORDS = {
  beginner: [
    { id: 'beg-001', cat: 'Begrüßung', ru: 'привет', de: 'hallo' },
    { id: 'beg-002', cat: 'Begrüßung', ru: 'здравствуйте', de: 'guten Tag' },
    { id: 'beg-003', cat: 'Begrüßung', ru: 'доброе утро', de: 'Guten Morgen' },
    { id: 'beg-004', cat: 'Begrüßung', ru: 'добрый вечер', de: 'Guten Abend' },
    { id: 'beg-005', cat: 'Höflichkeit', ru: 'пожалуйста', de: 'bitte' },
    { id: 'beg-006', cat: 'Höflichkeit', ru: 'спасибо', de: 'danke' },
    { id: 'beg-007', cat: 'Höflichkeit', ru: 'извините', de: 'entschuldigen Sie' },
    { id: 'beg-008', cat: 'Alltag', ru: 'да', de: 'ja' },
    { id: 'beg-009', cat: 'Alltag', ru: 'нет', de: 'nein' },
    { id: 'beg-010', cat: 'Alltag', ru: 'дом', de: 'Haus' },
    { id: 'beg-011', cat: 'Alltag', ru: 'вода', de: 'Wasser' },
    { id: 'beg-012', cat: 'Alltag', ru: 'работа', de: 'Arbeit' },
    { id: 'beg-013', cat: 'Zahlen', ru: 'один', de: 'eins' },
    { id: 'beg-014', cat: 'Zahlen', ru: 'два', de: 'zwei' },
    { id: 'beg-015', cat: 'Zahlen', ru: 'три', de: 'drei' },
    { id: 'beg-016', cat: 'Reise', ru: 'где?', de: 'wo?' },
    { id: 'beg-017', cat: 'Reise', ru: 'поезд', de: 'Zug' },
    { id: 'beg-018', cat: 'Zeit', ru: 'сейчас', de: 'jetzt' },
    { id: 'beg-019', cat: 'Zeit', ru: 'сегодня', de: 'heute' },
    { id: 'beg-020', cat: 'Familie', ru: 'семья', de: 'Familie' }
  ],
  intermediate: [
    { id: 'int-001', cat: 'Stadtleben', ru: 'площадь', de: 'Platz' },
    { id: 'int-002', cat: 'Stadtleben', ru: 'переулок', de: 'Gasse' },
    { id: 'int-003', cat: 'Stadtleben', ru: 'перекрёсток', de: 'Kreuzung' },
    { id: 'int-004', cat: 'Unterwegs', ru: 'расписание', de: 'Fahrplan' },
    { id: 'int-005', cat: 'Unterwegs', ru: 'путешествие', de: 'Reise' },
    { id: 'int-006', cat: 'Unterwegs', ru: 'багаж', de: 'Gepäck' },
    { id: 'int-007', cat: 'Kulinarik', ru: 'варенье', de: 'Marmelade' },
    { id: 'int-008', cat: 'Kulinarik', ru: 'пирог', de: 'Pastete' },
    { id: 'int-009', cat: 'Kulinarik', ru: 'кисель', de: 'Kissel' },
    { id: 'int-010', cat: 'Gefühle', ru: 'волнение', de: 'Aufregung' },
    { id: 'int-011', cat: 'Gefühle', ru: 'удивление', de: 'Verwunderung' },
    { id: 'int-012', cat: 'Gefühle', ru: 'печаль', de: 'Traurigkeit' },
    { id: 'int-013', cat: 'Natur', ru: 'берёза', de: 'Birke' },
    { id: 'int-014', cat: 'Natur', ru: 'снегопад', de: 'Schneefall' },
    { id: 'int-015', cat: 'Natur', ru: 'луга', de: 'Wiesen' },
    { id: 'int-016', cat: 'Kultur', ru: 'балалайка', de: 'Balalaika' },
    { id: 'int-017', cat: 'Kultur', ru: 'сказка', de: 'Märchen' },
    { id: 'int-018', cat: 'Kultur', ru: 'купола', de: 'Zwiebeltürme' }
  ],
  advanced: [
    { id: 'adv-001', cat: 'Literatur', ru: 'наследие', de: 'Erbe' },
    { id: 'adv-002', cat: 'Literatur', ru: 'повествование', de: 'Erzählung' },
    { id: 'adv-003', cat: 'Literatur', ru: 'притча', de: 'Parabel' },
    { id: 'adv-004', cat: 'Philosophie', ru: 'сознание', de: 'Bewusstsein' },
    { id: 'adv-005', cat: 'Philosophie', ru: 'мышление', de: 'Denken' },
    { id: 'adv-006', cat: 'Philosophie', ru: 'целостность', de: 'Ganzheit' },
    { id: 'adv-007', cat: 'Politik', ru: 'достоинство', de: 'Würde' },
    { id: 'adv-008', cat: 'Politik', ru: 'наследник', de: 'Thronfolger' },
    { id: 'adv-009', cat: 'Politik', ru: 'постановление', de: 'Verordnung' },
    { id: 'adv-010', cat: 'Kunst', ru: 'витраж', de: 'Buntglas' },
    { id: 'adv-011', cat: 'Kunst', ru: 'натюрморт', de: 'Stillleben' },
    { id: 'adv-012', cat: 'Kunst', ru: 'гравюра', de: 'Kupferstich' },
    { id: 'adv-013', cat: 'Geschichte', ru: 'древность', de: 'Antike' },
    { id: 'adv-014', cat: 'Geschichte', ru: 'летописец', de: 'Chronist' },
    { id: 'adv-015', cat: 'Geschichte', ru: 'княжество', de: 'Fürstentum' },
    { id: 'adv-016', cat: 'Wissenschaft', ru: 'исследование', de: 'Forschung' },
    { id: 'adv-017', cat: 'Wissenschaft', ru: 'явление', de: 'Phänomen' },
    { id: 'adv-018', cat: 'Wissenschaft', ru: 'формула', de: 'Formel' }
  ]
};

const ALPHABET = [
  { ru: 'А а', name: 'A' },
  { ru: 'Б б', name: 'Be' },
  { ru: 'В в', name: 'We' },
  { ru: 'Г г', name: 'Ge' },
  { ru: 'Д д', name: 'De' },
  { ru: 'Е е', name: 'Je' },
  { ru: 'Ё ё', name: 'Jo' },
  { ru: 'Ж ж', name: 'Sche' },
  { ru: 'З з', name: 'Se' },
  { ru: 'И и', name: 'I' },
  { ru: 'Й й', name: 'Kurzes I' },
  { ru: 'К к', name: 'Ka' },
  { ru: 'Л л', name: 'El' },
  { ru: 'М м', name: 'Em' },
  { ru: 'Н н', name: 'En' },
  { ru: 'О о', name: 'O' },
  { ru: 'П п', name: 'Pe' },
  { ru: 'Р р', name: 'Er' },
  { ru: 'С с', name: 'Es' },
  { ru: 'Т т', name: 'Te' },
  { ru: 'У у', name: 'U' },
  { ru: 'Ф ф', name: 'Ef' },
  { ru: 'Х х', name: 'Cha' },
  { ru: 'Ц ц', name: 'Zé' },
  { ru: 'Ч ч', name: 'Tsche' },
  { ru: 'Ш ш', name: 'Sch' },
  { ru: 'Щ щ', name: 'Schtsch' },
  { ru: 'Ъ ъ', name: 'Hartes Zeichen' },
  { ru: 'Ы ы', name: 'Y' },
  { ru: 'Ь ь', name: 'Weiches Zeichen' },
  { ru: 'Э э', name: 'E' },
  { ru: 'Ю ю', name: 'Ju' },
  { ru: 'Я я', name: 'Ja' }
];

const ACHIEVEMENTS = [
  { id: 'first-word', title: 'Erstes Wort', desc: 'Du hast dein erstes russisches Wort gemeistert!', test: (s) => s.learned.size >= 1 },
  { id: 'dozen', title: 'Dutzend Worte', desc: 'Zwölf Vokabeln wandern in dein Repertoire.', test: (s) => s.learned.size >= 12 },
  { id: 'consistent', title: 'Konstanz', desc: 'Halte deinen Streak über mehrere Tage.', test: (s) => s.streak >= 3 },
  { id: 'accuracy', title: 'Treffsicher', desc: 'Über 80 % deiner Antworten sitzen.', test: (s) => s.answersTotal >= 10 && (s.answersCorrect / s.answersTotal) >= 0.8 }
];

const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

const state = {
  theme: 'midnight',
  grade: 'beginner',
  showLanding: true,
  useCustomData: false,
  customDataset: [],
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
  answersTotal: 0,
  answersCorrect: 0,
  streak: 0,
  learned: new Set(),
  srs: {},
  favs: new Set(),
  hard: new Set(),
  achievements: {},
  daily: { date: null, done: false }
};

const STORAGE_KEY = 'ru-vocab-deluxe-v2';

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    state.theme = data.theme || state.theme;
    state.grade = data.grade || state.grade;
    state.showLanding = data.showLanding ?? state.showLanding;
    state.useCustomData = data.useCustomData ?? state.useCustomData;
    state.customDataset = data.customDataset || [];
    state.sfx = data.sfx ?? state.sfx;
    state.dyslexic = data.dyslexic ?? state.dyslexic;
    state.voice = data.voice || null;
    state.answersTotal = data.answersTotal || 0;
    state.answersCorrect = data.answersCorrect || 0;
    state.streak = data.streak || 0;
    state.learned = new Set(data.learned || []);
    state.srs = data.srs || {};
    state.favs = new Set(data.favs || []);
    state.hard = new Set(data.hard || []);
    state.achievements = data.achievements || {};
    state.daily = data.daily || state.daily;
  } catch (err) {
    console.warn('Konnte Speicher nicht laden:', err);
  }
}

function save() {
  const toSave = {
    theme: state.theme,
    grade: state.grade,
    showLanding: state.showLanding,
    useCustomData: state.useCustomData,
    customDataset: state.customDataset,
    sfx: state.sfx,
    dyslexic: state.dyslexic,
    voice: state.voice,
    answersTotal: state.answersTotal,
    answersCorrect: state.answersCorrect,
    streak: state.streak,
    learned: [...state.learned],
    srs: state.srs,
    favs: [...state.favs],
    hard: [...state.hard],
    achievements: state.achievements,
    daily: state.daily
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
}

function init() {
  load();
  bindUI();
  buildThemeSelectors();
  buildGradeSelectors();
  themeApply();
  refreshDataset();
  buildCategories();
  buildAlphabetGrid();
  updateStats();
  unlockAchievements();
  toggleLanding(state.showLanding);
  updateAudioIcon();
  registerSW();
  drawChartDummy();
  setupInstall();
  scanVoices();
}

function bindUI() {
  $$('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      if (!id) return;
      $$('.tab').forEach((t) => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', String(t === tab));
      });
      $$('.panel').forEach((panel) => panel.classList.remove('visible'));
      const target = $('#' + id);
      if (target) target.classList.add('visible');
    });
  });

  const startBtn = $('#btn-start');
  if (startBtn) {
    startBtn.onclick = () => {
      state.mode = $('#mode-select').value;
      if (!state.categories.length) {
        $('#feedback').textContent = 'Bitte zuerst eine Wortliste wählen.';
        return;
      }
      selectSet();
      nextCard();
      toggleLanding(false);
      state.showLanding = false;
      save();
    };
  }

  const nextBtn = $('#btn-next');
  if (nextBtn) nextBtn.onclick = () => nextCard();

  const revealBtn = $('#btn-reveal');
  if (revealBtn) {
    revealBtn.onclick = () => {
      const prompt = $('#prompt');
      if (prompt) {
        $('#feedback').textContent = 'Lösung: ' + (prompt.dataset.answer || '');
      }
    };
  }

  const sayBtn = $('#btn-say');
  if (sayBtn) sayBtn.onclick = () => speak($('#prompt')?.textContent ?? '', 'ru-RU');

  const answerInput = $('#answer');
  if (answerInput) {
    answerInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const current = state.currentSet[state.currentIndex];
        if (!current) return;
        checkAnswer($('#answer').value, $('#prompt').dataset.answer, current);
      }
    });
  }

  const practiceActions = $('#practice .actions');
  if (practiceActions) {
    practiceActions.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-grade]');
      if (!btn) return;
      gradePractice(Number(btn.dataset.grade));
    });
  }

  const dueBtn = $('#btn-due');
  if (dueBtn) dueBtn.onclick = () => startDuePractice();

  const alphaQuiz = $('#btn-alpha-quiz');
  if (alphaQuiz) alphaQuiz.onclick = () => startAlphabetQuiz();

  const alphaAudio = $('#btn-alpha-audio');
  if (alphaAudio) {
    alphaAudio.onclick = () => {
      const sel = $('.alpha-item.selected');
      if (sel) speak(sel.dataset.ru, 'ru-RU');
    };
  }

  const themeBtn = $('#btn-theme');
  if (themeBtn) themeBtn.onclick = () => cycleTheme();

  const audioBtn = $('#btn-audio');
  if (audioBtn) {
    audioBtn.onclick = () => {
      state.sfx = !state.sfx;
      $('#toggle-sfx').checked = state.sfx;
      updateAudioIcon();
      save();
    };
  }

  const landingEnter = $('#landing-enter');
  if (landingEnter) {
    landingEnter.onclick = () => {
      state.showLanding = false;
      toggleLanding(false);
      save();
    };
  }

  const toggleSfx = $('#toggle-sfx');
  if (toggleSfx) {
    toggleSfx.checked = state.sfx;
    toggleSfx.onchange = (e) => {
      state.sfx = e.target.checked;
      updateAudioIcon();
      save();
    };
  }

  const toggleDys = $('#toggle-dyslexic');
  if (toggleDys) {
    toggleDys.checked = state.dyslexic;
    toggleDys.onchange = (e) => {
      state.dyslexic = e.target.checked;
      document.body.classList.toggle('dyslexic', state.dyslexic);
      save();
    };
    document.body.classList.toggle('dyslexic', state.dyslexic);
  }

  const customToggle = $('#toggle-custom-data');
  if (customToggle) {
    customToggle.checked = state.useCustomData;
    customToggle.onchange = (e) => {
      state.useCustomData = e.target.checked;
      updateCustomDataTools();
      refreshDataset();
      buildCategories();
      save();
    };
  }
  updateCustomDataTools();

  const importBtn = $('#btn-import');
  const exportBtn = $('#btn-export');
  const fileInput = $('#file-input');
  if (importBtn && fileInput) {
    importBtn.onclick = () => fileInput.click();
    fileInput.onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (!Array.isArray(data)) throw new Error('JSON muss ein Array sein.');
        state.customDataset = normalizeDataset(data, 'custom');
        state.useCustomData = true;
        $('#toggle-custom-data').checked = true;
        updateCustomDataTools();
        refreshDataset();
        buildCategories();
        save();
        alert('Import erfolgreich – deine Liste ist aktiv.');
      } catch (err) {
        console.error(err);
        alert('Fehler beim Import: ' + err.message);
      } finally {
        fileInput.value = '';
      }
    };
  }
  if (exportBtn) {
    exportBtn.onclick = () => {
      const blob = new Blob([JSON.stringify(state.dataset, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'vocab-export.json';
      a.click();
      URL.revokeObjectURL(url);
    };
  }

  const voiceScan = $('#btn-voice-scan');
  if (voiceScan) voiceScan.onclick = () => scanVoices();

  const voiceSelect = $('#voice-select');
  if (voiceSelect) {
    voiceSelect.onchange = (e) => {
      const idx = Number(e.target.value);
      state.voice = state.voices[idx] || null;
      save();
    };
  }

  const resetBtn = $('#btn-reset');
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm('Wirklich alle Daten löschen?')) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
      }
    };
  }
}

function updateCustomDataTools() {
  const tools = $('#custom-data-tools');
  if (!tools) return;
  tools.classList.toggle('hidden', !state.useCustomData);
}

function updateAudioIcon() {
  const useEl = $('#icon-audio-use');
  if (!useEl) return;
  useEl.setAttribute('href', state.sfx ? '#icon-audio' : '#icon-audio-off');
  const audioBtn = $('#btn-audio');
  if (audioBtn) {
    audioBtn.setAttribute('aria-label', state.sfx ? 'Soundeffekte stummschalten' : 'Soundeffekte einschalten');
  }
}

function buildThemeSelectors() {
  const containers = [$('#landing-theme-grid'), $('#settings-theme-grid')].filter(Boolean);
  containers.forEach((container) => {
    container.innerHTML = '';
    Object.entries(THEMES).forEach(([key, theme]) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'theme-card';
      card.dataset.themeId = key;
      card.style.setProperty('--theme-bg', theme.preview);
      card.style.setProperty('--theme-overlay', theme.overlay);
      card.style.setProperty('--theme-image', theme.image || theme.vars['--bg-art'] || 'none');
      card.innerHTML = `<strong>${theme.label}</strong><span>${theme.description}</span>`;
      card.setAttribute('aria-pressed', 'false');
      card.onclick = () => {
        setTheme(key);
      };
      container.appendChild(card);
    });
  });
  highlightActiveTheme();
}

function highlightActiveTheme() {
  $$('.theme-card').forEach((card) => {
    const isActive = card.dataset.themeId === state.theme;
    card.classList.toggle('active', isActive);
    card.setAttribute('aria-pressed', String(isActive));
  });
}

function setTheme(themeKey) {
  if (!THEMES[themeKey]) return;
  state.theme = themeKey;
  themeApply();
  highlightActiveTheme();
  save();
}

function cycleTheme() {
  const keys = Object.keys(THEMES);
  const idx = keys.indexOf(state.theme);
  const next = keys[(idx + 1) % keys.length];
  setTheme(next);
}

function themeApply() {
  const theme = THEMES[state.theme] || THEMES.midnight;
  Object.entries(theme.vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
  document.body.dataset.theme = state.theme;
  document.body.classList.toggle('dyslexic', state.dyslexic);
}

function buildGradeSelectors() {
  const containers = [$('#landing-grade-grid'), $('#settings-grade-grid')].filter(Boolean);
  containers.forEach((container) => {
    container.innerHTML = '';
    Object.entries(GRADE_INFO).forEach(([key, info]) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'grade-card';
      card.dataset.grade = key;
      const ribbon = key === 'beginner'
        ? 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3), transparent 65%)'
        : key === 'intermediate'
          ? 'radial-gradient(circle at 70% 40%, rgba(170,140,255,0.35), transparent 60%)'
          : 'radial-gradient(circle at 20% 40%, rgba(255,200,120,0.38), transparent 65%)';
      card.style.setProperty('--grade-ribbon', ribbon);
      card.innerHTML = `<strong>${info.label}</strong><span>${info.description}</span>`;
      card.onclick = () => setGrade(key);
      container.appendChild(card);
    });
  });
  highlightGrade();
}

function highlightGrade() {
  $$('.grade-card').forEach((card) => {
    card.classList.toggle('active', card.dataset.grade === state.grade);
  });
}

function setGrade(grade) {
  if (!GRADE_INFO[grade]) return;
  state.grade = grade;
  highlightGrade();
  if (!state.useCustomData) {
    refreshDataset();
    buildCategories();
  }
  save();
}

function toggleLanding(show) {
  const landing = $('#landing');
  if (!landing) return;
  landing.classList.toggle('visible', show);
  landing.setAttribute('aria-hidden', String(!show));
  document.body.classList.toggle('no-scroll', show);
}

function normalizeDataset(list, prefix) {
  return list.map((item, idx) => ({
    id: item.id || `${prefix}-${idx}`,
    cat: item.cat || 'Allgemein',
    ru: item.ru,
    de: item.de
  })).filter((item) => item.ru && item.de);
}

function refreshDataset() {
  const source = state.useCustomData && state.customDataset.length
    ? state.customDataset
    : BUILT_IN_WORDS[state.grade] || [];
  state.dataset = normalizeDataset(source, state.useCustomData ? 'custom' : state.grade);
  state.categories = [...new Set(state.dataset.map((item) => item.cat))];
  ensureSrsIntegrity();
}

function ensureSrsIntegrity() {
  const valid = new Set(state.dataset.map((item) => item.id));
  Object.keys(state.srs).forEach((id) => {
    if (!valid.has(id)) delete state.srs[id];
  });
  state.dataset.forEach((item) => {
    if (!state.srs[item.id]) state.srs[item.id] = { box: 1, due: Date.now() };
  });
}

function buildCategories() {
  const select = $('#category-select');
  if (!select) return;
  select.innerHTML = '';
  if (!state.categories.length) {
    const opt = document.createElement('option');
    opt.textContent = 'Keine Vokabeln verfügbar';
    opt.value = '';
    select.appendChild(opt);
    return;
  }
  state.categories.forEach((cat) => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}

function selectSet() {
  const select = $('#category-select');
  const cat = select?.value || state.categories[0];
  const arr = state.dataset.filter((item) => item.cat === cat);
  state.currentSet = shuffle(arr.slice());
  state.currentIndex = 0;
  state.score = 0;
  state.total = state.currentSet.length;
  $('#bar').style.width = '0%';
}

function nextCard() {
  const item = state.currentSet[state.currentIndex];
  if (!item) {
    endSession();
    return;
  }
  $('#feedback').textContent = '';
  $('#answer').value = '';
  $('#choices').innerHTML = '';
  const mode = state.mode;
  const promptSide = mode === 'audio' ? 'ru' : (Math.random() < 0.5 ? 'ru' : 'de');
  const promptText = promptSide === 'ru' ? item.ru : item.de;
  $('#prompt').textContent = promptText;
  $('#prompt').dataset.answer = promptSide === 'ru' ? item.de : item.ru;

  if (mode === 'mc') {
    const pool = shuffle(state.dataset.filter((x) => x.id !== item.id)).slice(0, 3)
      .map((x) => (promptSide === 'ru' ? x.de : x.ru));
    const correct = $('#prompt').dataset.answer;
    const opts = shuffle([...pool, correct]);
    opts.forEach((txt) => {
      const button = document.createElement('button');
      button.className = 'choice-btn';
      button.type = 'button';
      button.textContent = txt;
      button.onclick = () => checkAnswer(txt, correct, item);
      $('#choices').appendChild(button);
    });
    $('#answer').style.display = 'none';
    $('#choices').style.display = 'grid';
  } else {
    $('#answer').style.display = 'block';
    $('#choices').style.display = 'none';
    $('#answer').focus();
    if (mode === 'audio') {
      speak(item.ru, 'ru-RU');
      $('#prompt').textContent = '🔈 Höre zu und tippe die Übersetzung';
    }
  }
  const progress = state.total ? Math.round((state.currentIndex) / state.total * 100) : 0;
  $('#bar').style.width = `${progress}%`;
}

function checkAnswer(given, correct, item) {
  const normalized = (str) => str.trim().toLowerCase();
  const ok = normalized(given) === normalized(correct);
  feedback(ok, correct);
  updateStatsAfterAnswer(ok, item);
}

function feedback(ok, correct) {
  const el = $('#feedback');
  if (!el) return;
  if (ok) {
    el.textContent = 'Richtig!';
    confetti();
    ping(true);
  } else {
    el.textContent = `Falsch. Richtig wäre: ${correct}`;
    ping(false);
  }
}

function updateStatsAfterAnswer(ok, item) {
  state.answersTotal += 1;
  if (ok) {
    state.answersCorrect += 1;
    promoteSRS(item.id);
    state.learned.add(item.id);
    unlockAchievements();
  } else {
    demoteSRS(item.id);
  }
  state.currentIndex += 1;
  const progress = state.total ? Math.round((state.currentIndex) / state.total * 100) : 0;
  $('#bar').style.width = `${progress}%`;
  save();
  updateStats();
}

function endSession() {
  $('#feedback').textContent = 'Session beendet. Großartig gemacht!';
}

function promoteSRS(id) {
  const entry = state.srs[id] || { box: 1, due: Date.now() };
  entry.box = Math.min(5, entry.box + 1);
  const days = [0, 1, 2, 4, 7, 14][entry.box];
  entry.due = Date.now() + days * 24 * 3600 * 1000;
  state.srs[id] = entry;
}

function demoteSRS(id) {
  const entry = state.srs[id] || { box: 1, due: Date.now() };
  entry.box = Math.max(1, entry.box - 1);
  entry.due = Date.now() + 12 * 3600 * 1000;
  state.srs[id] = entry;
}

function srsDueSet() {
  const now = Date.now();
  return state.dataset.filter((item) => (state.srs[item.id]?.due ?? 0) <= now);
}

function startDuePractice() {
  const due = srsDueSet();
  if (!due.length) {
    $('#practice-feedback').textContent = 'Heute nichts fällig. Genieße deine freie Zeit!';
    return;
  }
  state.currentSet = shuffle(due);
  state.currentIndex = 0;
  nextPractice();
}

function nextPractice() {
  const item = state.currentSet[state.currentIndex];
  if (!item) {
    $('#practice-feedback').textContent = 'Fertig. Gut gemacht!';
    return;
  }
  $('#practice-answer').value = '';
  const showRussian = Math.random() < 0.5;
  $('#practice-prompt').textContent = showRussian ? item.ru : item.de;
  $('#practice-prompt').dataset.answer = showRussian ? item.de : item.ru;
}

function gradePractice(grade) {
  const item = state.currentSet[state.currentIndex];
  if (!item) return;
  const given = $('#practice-answer').value.trim().toLowerCase();
  const correct = $('#practice-prompt').dataset.answer.trim().toLowerCase();
  const ok = given === correct || grade >= 5;
  if (ok) {
    promoteSRS(item.id);
    state.answersCorrect += 1;
    state.learned.add(item.id);
  } else {
    demoteSRS(item.id);
  }
  state.answersTotal += 1;
  $('#practice-feedback').textContent = ok ? 'Sehr gut!' : `Richtig wäre: ${correct}`;
  state.currentIndex += 1;
  save();
  updateStats();
  nextPractice();
}

function updateStats() {
  $('#stat-learned').textContent = state.learned.size;
  const accuracy = state.answersTotal ? Math.round((state.answersCorrect / state.answersTotal) * 100) : 100;
  $('#stat-accuracy').textContent = `${accuracy}%`;
  $('#stat-due').textContent = srsDueSet().length;
  $('#stat-streak').textContent = state.streak;
  $('#version').textContent = 'v2.0.0';
  unlockAchievements();
}

function unlockAchievements() {
  const container = $('#achievements');
  if (!container) return;
  ACHIEVEMENTS.forEach((ach) => {
    if (ach.test(state)) {
      state.achievements[ach.id] = state.achievements[ach.id] || Date.now();
    }
  });
  container.innerHTML = '';
  ACHIEVEMENTS.forEach((ach) => {
    const unlocked = Boolean(state.achievements[ach.id]);
    const card = document.createElement('div');
    card.className = 'achievement' + (unlocked ? ' unlocked' : '');
    card.innerHTML = `<strong>${ach.title}</strong><p>${ach.desc}</p>`;
    container.appendChild(card);
  });
}

function buildAlphabetGrid() {
  const grid = $('#alphabet-grid');
  if (!grid) return;
  grid.innerHTML = '';
  ALPHABET.forEach((ch) => {
    const div = document.createElement('div');
    div.className = 'alpha-item';
    div.dataset.ru = ch.ru;
    div.innerHTML = `<strong lang="ru">${ch.ru}</strong><small>${ch.name}</small>`;
    div.onclick = () => {
      $$('.alpha-item').forEach((x) => x.classList.remove('selected'));
      div.classList.add('selected');
      speak(ch.ru, 'ru-RU');
    };
    grid.appendChild(div);
  });
}

function startAlphabetQuiz() {
  const items = $$('.alpha-item');
  if (!items.length) return;
  const idx = Math.floor(Math.random() * items.length);
  items[idx].click();
}

function scanVoices() {
  const voices = speechSynthesis.getVoices();
  if (!voices.length) {
    speechSynthesis.onvoiceschanged = scanVoices;
    return;
  }
  state.voices = voices.filter((voice) => voice.lang.toLowerCase().startsWith('ru'));
  const select = $('#voice-select');
  if (!select) return;
  select.innerHTML = '';
  state.voices.forEach((voice, index) => {
    const opt = document.createElement('option');
    opt.value = String(index);
    opt.textContent = `${voice.name} (${voice.lang})`;
    select.appendChild(opt);
  });
  if (state.voice) {
    const idx = state.voices.findIndex((v) => v.name === state.voice.name);
    if (idx >= 0) select.value = String(idx);
  }
}

function speak(text, lang = 'ru-RU') {
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  if (state.voice) utterance.voice = state.voice;
  utterance.lang = lang;
  speechSynthesis.speak(utterance);
}

function ping(ok) {
  if (!state.sfx) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = ok ? 'triangle' : 'sawtooth';
    osc.frequency.value = ok ? 720 : 240;
    gain.gain.value = 0.0001;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    const t = ctx.currentTime;
    gain.gain.exponentialRampToValueAtTime(0.05, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    osc.stop(t + 0.26);
  } catch (err) {
    console.warn('Audio konnte nicht abgespielt werden:', err);
  }
}

function confetti() {
  const n = 22;
  for (let i = 0; i < n; i += 1) {
    const piece = document.createElement('span');
    piece.style.position = 'fixed';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.top = '10px';
    piece.style.width = `${4 + Math.random() * 6}px`;
    piece.style.height = `${10 + Math.random() * 14}px`;
    piece.style.borderRadius = '2px';
    piece.style.background = `linear-gradient(${Math.random() * 180}deg, hsla(${Math.random() * 360}, 75%, 65%, 0.9), hsla(${Math.random() * 360}, 85%, 55%, 0.9))`;
    piece.style.pointerEvents = 'none';
    piece.style.opacity = '0.9';
    piece.style.transition = 'transform 1s ease, opacity 1s ease';
    document.body.appendChild(piece);
    requestAnimationFrame(() => {
      piece.style.transform = `translateY(${60 + Math.random() * 120}vh) rotate(${Math.random() * 360}deg)`;
      piece.style.opacity = '0';
    });
    setTimeout(() => piece.remove(), 1100);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function drawChartDummy() {
  const canvas = $('#chart-dummy');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 2;
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, 'rgba(255,255,255,0.35)');
  gradient.addColorStop(1, 'rgba(255,255,255,0.05)');
  ctx.fillStyle = gradient;
  const baseY = canvas.height - 40;
  ctx.beginPath();
  const points = [...Array(14)].map((_, i) => ({ x: i * (canvas.width / 13), y: baseY - Math.sin(i / 2) * 30 - Math.random() * 25 }));
  ctx.moveTo(points[0].x, canvas.height);
  points.forEach((p) => ctx.lineTo(p.x, p.y));
  ctx.lineTo(points[points.length - 1].x, canvas.height);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.55)';
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  points.forEach((p) => ctx.lineTo(p.x, p.y));
  ctx.stroke();
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch((err) => console.warn('SW Registrierung fehlgeschlagen', err));
  }
}

let deferredPrompt = null;
function setupInstall() {
  const installBtn = $('#btn-install');
  if (installBtn) installBtn.style.display = 'none';
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    $('#btn-install').style.display = 'inline-flex';
  });
  if (installBtn) {
    installBtn.onclick = async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
    };
  }
}

window.addEventListener('load', init);
