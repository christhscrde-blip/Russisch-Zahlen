/* Russisch Vokabel-App Deluxe – moderne Landingpage, Themes & optionale Imports */
const THEMES = {
  midnight: {
    label: 'Midnight Aurora',
    description: 'Nordische Nacht, Schimmer der Polarlichter',
    tone: 'dark',
    icon: 'icon-moon',
    music: 'https://cdn.pixabay.com/download/audio/2021/09/03/audio_3a8e8f302f.mp3?filename=ambient-astral-9644.mp3',
    image: 'url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #0b132e 0%, #1a3f6d 55%, #090b1c 100%)',
    overlay: 'linear-gradient(160deg, rgba(14,31,68,0.3), rgba(0,0,0,0.6))',
    vars: {
      '--bg': '#050a1b',
      '--bg-grad': 'radial-gradient(circle at 15% 20%, rgba(118,180,255,0.36), transparent 58%), radial-gradient(circle at 82% 10%, rgba(177,103,255,0.32), transparent 60%), #040715',
      '--bg-texture': 'radial-gradient(circle, rgba(120,180,255,0.15) 0%, transparent 58%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
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
    icon: 'icon-palace',
    music: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_1aa1aa811d.mp3?filename=grand-entrance-20551.mp3',
    image: 'url("https://images.unsplash.com/photo-1529429617124-aee0a37c56b3?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #f6e7d3 0%, #d7b06a 55%, #a0742a 100%)',
    overlay: 'linear-gradient(140deg, rgba(168,118,50,0.4), rgba(255,255,255,0.48))',
    vars: {
      '--bg': '#f4e9da',
      '--bg-grad': 'radial-gradient(circle at 20% 15%, rgba(255,214,153,0.55), transparent 58%), radial-gradient(circle at 80% 8%, rgba(197,163,107,0.4), transparent 60%), #f6ede0',
      '--bg-texture': 'radial-gradient(circle, rgba(255,228,180,0.16) 0%, transparent 58%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1529429617124-aee0a37c56b3?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
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
    icon: 'icon-forest',
    music: 'https://cdn.pixabay.com/download/audio/2021/11/23/audio_33aebca41a.mp3?filename=foggy-forest-ambient-9833.mp3',
    image: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #0f5b4c 0%, #4fa37e 60%, #c8f3d4 100%)',
    overlay: 'linear-gradient(160deg, rgba(14,63,54,0.35), rgba(255,255,255,0.35))',
    vars: {
      '--bg': '#0f2f2a',
      '--bg-grad': 'radial-gradient(circle at 80% 10%, rgba(110,200,160,0.45), transparent 58%), radial-gradient(circle at 15% 90%, rgba(60,180,150,0.35), transparent 60%), #0c221f',
      '--bg-texture': 'radial-gradient(circle, rgba(200,255,220,0.12) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
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
    icon: 'icon-masks',
    music: 'https://cdn.pixabay.com/download/audio/2021/09/13/audio_94c5a12cfa.mp3?filename=velvet-9679.mp3',
    image: 'url("https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #3d0f1d 0%, #742235 50%, #19060d 100%)',
    overlay: 'linear-gradient(160deg, rgba(125,41,64,0.45), rgba(0,0,0,0.6))',
    vars: {
      '--bg': '#16050c',
      '--bg-grad': 'radial-gradient(circle at 75% 10%, rgba(198,88,120,0.5), transparent 58%), radial-gradient(circle at 10% 80%, rgba(90,26,44,0.42), transparent 60%), #0f0308',
      '--bg-texture': 'radial-gradient(circle, rgba(255,214,214,0.1) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
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
    icon: 'icon-sunrise',
    music: 'https://cdn.pixabay.com/download/audio/2022/03/22/audio_5ba6c8efcc.mp3?filename=sunset-reverie-20962.mp3',
    image: 'url("https://images.unsplash.com/photo-1470509037663-253afd7f0f0b?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #ffb47d 0%, #ff6f91 45%, #1f1c47 100%)',
    overlay: 'linear-gradient(180deg, rgba(255,119,93,0.38), rgba(18,13,46,0.6))',
    vars: {
      '--bg': '#1e1635',
      '--bg-grad': 'radial-gradient(circle at 20% 10%, rgba(255,196,120,0.58), transparent 55%), radial-gradient(circle at 80% 5%, rgba(206,98,171,0.45), transparent 60%), #1a1531',
      '--bg-texture': 'radial-gradient(circle, rgba(255,200,150,0.14) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1470509037663-253afd7f0f0b?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
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
    icon: 'icon-compass-star',
    music: 'https://cdn.pixabay.com/download/audio/2022/03/07/audio_0d8c789a58.mp3?filename=northern-lights-20268.mp3',
    image: 'url("https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #17375e 0%, #2f6c88 45%, #f2c86a 100%)',
    overlay: 'linear-gradient(160deg, rgba(16,48,88,0.4), rgba(255,206,122,0.45))',
    vars: {
      '--bg': '#102132',
      '--bg-grad': 'radial-gradient(circle at 15% 20%, rgba(118,180,255,0.45), transparent 58%), radial-gradient(circle at 75% 10%, rgba(255,207,116,0.42), transparent 60%), #0b1829',
      '--bg-texture': 'radial-gradient(circle, rgba(255,233,170,0.14) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
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
    icon: 'icon-snowflake',
    music: 'https://cdn.pixabay.com/download/audio/2022/02/23/audio_d5d6b2e2ef.mp3?filename=royal-waltz-11075.mp3',
    image: 'url("https://images.unsplash.com/photo-1548777123-ec5aa862c16a?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #0e3b5e 0%, #3ba0c9 55%, #c8f3ff 100%)',
    overlay: 'linear-gradient(160deg, rgba(16,84,122,0.32), rgba(255,255,255,0.4))',
    vars: {
      '--bg': '#061a2c',
      '--bg-grad': 'radial-gradient(circle at 78% 12%, rgba(120,200,255,0.42), transparent 60%), radial-gradient(circle at 12% 88%, rgba(40,130,185,0.35), transparent 62%), #04121f',
      '--bg-texture': 'radial-gradient(circle, rgba(180,230,255,0.16) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1548777123-ec5aa862c16a?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
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
    icon: 'icon-porcelain',
    music: 'https://cdn.pixabay.com/download/audio/2022/02/16/audio_7a82c20a5c.mp3?filename=tea-room-10757.mp3',
    image: 'url("https://images.unsplash.com/photo-1521120098170-1e1c3f58c6f8?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(145deg, #f7c3d0 0%, #f5e6ff 55%, #9dc9ff 100%)',
    overlay: 'linear-gradient(160deg, rgba(250,210,230,0.45), rgba(120,160,255,0.3))',
    vars: {
      '--bg': '#f8edf3',
      '--bg-grad': 'radial-gradient(circle at 18% 20%, rgba(255,200,220,0.55), transparent 58%), radial-gradient(circle at 82% 6%, rgba(176,200,255,0.45), transparent 60%), #f6f0f8',
      '--bg-texture': 'radial-gradient(circle, rgba(255,210,235,0.16) 0%, transparent 58%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1521120098170-1e1c3f58c6f8?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
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
    icon: 'icon-river',
    music: 'https://cdn.pixabay.com/download/audio/2021/10/31/audio_dba7f2a7bc.mp3?filename=gentle-river-ambient-9603.mp3',
    image: 'url("https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #1d2d44 0%, #3b6c7a 55%, #b3d9d7 100%)',
    overlay: 'linear-gradient(160deg, rgba(32,78,108,0.4), rgba(196,220,215,0.35))',
    vars: {
      '--bg': '#0d1a26',
      '--bg-grad': 'radial-gradient(circle at 72% 12%, rgba(120,180,200,0.45), transparent 60%), radial-gradient(circle at 18% 86%, rgba(70,140,160,0.38), transparent 62%), #08121d',
      '--bg-texture': 'radial-gradient(circle, rgba(160,210,220,0.16) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
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
    icon: 'icon-troika',
    music: 'https://cdn.pixabay.com/download/audio/2021/12/14/audio_2b31a8b6ce.mp3?filename=winter-carriage-ambient-9959.mp3',
    image: 'url("https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #1a2740 0%, #4f7aa0 55%, #ffffff 100%)',
    overlay: 'linear-gradient(160deg, rgba(20,40,70,0.45), rgba(255,255,255,0.5))',
    vars: {
      '--bg': '#0a1524',
      '--bg-grad': 'radial-gradient(circle at 20% 15%, rgba(120,170,210,0.45), transparent 60%), radial-gradient(circle at 82% 10%, rgba(200,220,255,0.42), transparent 62%), #050e1a',
      '--bg-texture': 'radial-gradient(circle, rgba(200,230,255,0.14) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
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
  grade7: {
    label: 'Klasse 7',
    description: 'Dialog 1 – Alltag, Schule & Freunde',
    icon: 'icon-book',
    ribbon: 'linear-gradient(140deg, rgba(120,160,255,0.5), transparent 70%)'
  },
  grade8: {
    label: 'Klasse 8',
    description: 'Dialog 2 – Unterwegs, Reisen & Kultur',
    icon: 'icon-compass',
    ribbon: 'linear-gradient(140deg, rgba(255,168,120,0.48), transparent 70%)'
  },
  grade9: {
    label: 'Klasse 9',
    description: 'Dialog 3 – Zukunft, Umwelt & Medien',
    icon: 'icon-globe',
    ribbon: 'linear-gradient(140deg, rgba(140,230,190,0.48), transparent 70%)'
  },
  grade10: {
    label: 'Klasse 10',
    description: 'Dialog 4 – Gesellschaft, Politik & Kultur',
    icon: 'icon-laurel',
    ribbon: 'linear-gradient(140deg, rgba(255,210,140,0.52), transparent 70%)'
  }
};

const BUILT_IN_WORDS = {
  grade7: [
    { id: 'g7-001', cat: 'Begrüßung', ru: 'привет', de: 'hallo' },
    { id: 'g7-002', cat: 'Begrüßung', ru: 'здравствуйте', de: 'guten Tag' },
    { id: 'g7-003', cat: 'Begrüßung', ru: 'пока', de: 'tschüss' },
    { id: 'g7-004', cat: 'Begrüßung', ru: 'как дела?', de: 'wie geht es?' },
    { id: 'g7-005', cat: 'Höflichkeit', ru: 'спасибо', de: 'danke' },
    { id: 'g7-006', cat: 'Höflichkeit', ru: 'пожалуйста', de: 'bitte' },
    { id: 'g7-007', cat: 'Höflichkeit', ru: 'извините', de: 'entschuldigen Sie' },
    { id: 'g7-008', cat: 'Alltag', ru: 'да', de: 'ja' },
    { id: 'g7-009', cat: 'Alltag', ru: 'нет', de: 'nein' },
    { id: 'g7-010', cat: 'Schule', ru: 'школа', de: 'Schule' },
    { id: 'g7-011', cat: 'Schule', ru: 'урок', de: 'Unterrichtsstunde' },
    { id: 'g7-012', cat: 'Schule', ru: 'домашнее задание', de: 'Hausaufgabe' },
    { id: 'g7-013', cat: 'Schule', ru: 'класс', de: 'Klasse' },
    { id: 'g7-014', cat: 'Schule', ru: 'ученик', de: 'Schüler' },
    { id: 'g7-015', cat: 'Schule', ru: 'учительница', de: 'Lehrerin' },
    { id: 'g7-016', cat: 'Freunde', ru: 'друг', de: 'Freund' },
    { id: 'g7-017', cat: 'Freunde', ru: 'подруга', de: 'Freundin' },
    { id: 'g7-018', cat: 'Familie', ru: 'семья', de: 'Familie' },
    { id: 'g7-019', cat: 'Familie', ru: 'мама', de: 'Mama' },
    { id: 'g7-020', cat: 'Familie', ru: 'папа', de: 'Papa' },
    { id: 'g7-021', cat: 'Familie', ru: 'бабушка', de: 'Großmutter' },
    { id: 'g7-022', cat: 'Familie', ru: 'дедушка', de: 'Großvater' },
    { id: 'g7-023', cat: 'Zuhause', ru: 'квартира', de: 'Wohnung' },
    { id: 'g7-024', cat: 'Zuhause', ru: 'комната', de: 'Zimmer' },
    { id: 'g7-025', cat: 'Zuhause', ru: 'стол', de: 'Tisch' },
    { id: 'g7-026', cat: 'Zuhause', ru: 'стул', de: 'Stuhl' },
    { id: 'g7-027', cat: 'Schule', ru: 'книга', de: 'Buch' },
    { id: 'g7-028', cat: 'Schule', ru: 'тетрадь', de: 'Heft' },
    { id: 'g7-029', cat: 'Schule', ru: 'ручка', de: 'Kugelschreiber' },
    { id: 'g7-030', cat: 'Schule', ru: 'карандаш', de: 'Bleistift' },
    { id: 'g7-031', cat: 'Schule', ru: 'рюкзак', de: 'Rucksack' },
    { id: 'g7-032', cat: 'Stadt', ru: 'автобус', de: 'Bus' },
    { id: 'g7-033', cat: 'Stadt', ru: 'метро', de: 'U-Bahn' },
    { id: 'g7-034', cat: 'Stadt', ru: 'улица', de: 'Straße' },
    { id: 'g7-035', cat: 'Stadt', ru: 'город', de: 'Stadt' },
    { id: 'g7-036', cat: 'Stadt', ru: 'магазин', de: 'Geschäft' },
    { id: 'g7-037', cat: 'Freizeit', ru: 'кинотеатр', de: 'Kino' },
    { id: 'g7-038', cat: 'Kultur', ru: 'музей', de: 'Museum' },
    { id: 'g7-039', cat: 'Freizeit', ru: 'парк', de: 'Park' },
    { id: 'g7-040', cat: 'Sport', ru: 'спортзал', de: 'Sporthalle' },
    { id: 'g7-041', cat: 'Sport', ru: 'футбол', de: 'Fußball' },
    { id: 'g7-042', cat: 'Freizeit', ru: 'музыка', de: 'Musik' },
    { id: 'g7-043', cat: 'Schule', ru: 'уроки', de: 'Unterricht' },
    { id: 'g7-044', cat: 'Zeit', ru: 'время', de: 'Zeit' },
    { id: 'g7-045', cat: 'Zeit', ru: 'утром', de: 'am Morgen' },
    { id: 'g7-046', cat: 'Zeit', ru: 'вечером', de: 'am Abend' },
    { id: 'g7-047', cat: 'Zeit', ru: 'сегодня', de: 'heute' },
    { id: 'g7-048', cat: 'Zeit', ru: 'завтра', de: 'morgen' },
    { id: 'g7-049', cat: 'Schule', ru: 'любимый предмет', de: 'Lieblingsfach' },
    { id: 'g7-050', cat: 'Ferien', ru: 'каникулы', de: 'Ferien' },
    { id: 'g7-051', cat: 'Tagesablauf', ru: 'просыпаться', de: 'aufwachen' },
    { id: 'g7-052', cat: 'Tagesablauf', ru: 'завтракать', de: 'frühstücken' },
    { id: 'g7-053', cat: 'Tagesablauf', ru: 'обедать', de: 'zu Mittag essen' },
    { id: 'g7-054', cat: 'Tagesablauf', ru: 'ужинать', de: 'zu Abend essen' },
    { id: 'g7-055', cat: 'Tagesablauf', ru: 'делать уроки', de: 'Hausaufgaben machen' },
    { id: 'g7-056', cat: 'Freizeit', ru: 'играть в компьютерные игры', de: 'Computerspiele spielen' },
    { id: 'g7-057', cat: 'Freizeit', ru: 'кататься на велосипеде', de: 'Rad fahren' },
    { id: 'g7-058', cat: 'Sport', ru: 'плавать', de: 'schwimmen' },
    { id: 'g7-059', cat: 'Sport', ru: 'кататься на коньках', de: 'Schlittschuh laufen' },
    { id: 'g7-060', cat: 'Freizeit', ru: 'гулять с друзьями', de: 'mit Freunden spazieren gehen' },
    { id: 'g7-061', cat: 'Stadt', ru: 'библиотека', de: 'Bibliothek' },
    { id: 'g7-062', cat: 'Stadt', ru: 'почта', de: 'Post' },
    { id: 'g7-063', cat: 'Schule', ru: 'дневник', de: 'Schultagebuch' },
    { id: 'g7-064', cat: 'Schule', ru: 'расписание', de: 'Stundenplan' },
    { id: 'g7-065', cat: 'Schule', ru: 'перемена', de: 'Pause' },
    { id: 'g7-066', cat: 'Familie', ru: 'брат', de: 'Bruder' },
    { id: 'g7-067', cat: 'Familie', ru: 'сестра', de: 'Schwester' },
    { id: 'g7-068', cat: 'Familie', ru: 'тётя', de: 'Tante' },
    { id: 'g7-069', cat: 'Familie', ru: 'дядя', de: 'Onkel' },
    { id: 'g7-070', cat: 'Zuhause', ru: 'кухня', de: 'Küche' },
    { id: 'g7-071', cat: 'Zuhause', ru: 'ванная', de: 'Badezimmer' },
    { id: 'g7-072', cat: 'Zuhause', ru: 'диван', de: 'Sofa' },
    { id: 'g7-073', cat: 'Zuhause', ru: 'кровать', de: 'Bett' },
    { id: 'g7-074', cat: 'Tiere', ru: 'собака', de: 'Hund' },
    { id: 'g7-075', cat: 'Tiere', ru: 'кошка', de: 'Katze' },
    { id: 'g7-076', cat: 'Tiere', ru: 'хомяк', de: 'Hamster' },
    { id: 'g7-077', cat: 'Tiere', ru: 'рыбка', de: 'Fisch' },
    { id: 'g7-078', cat: 'Wetter', ru: 'погода', de: 'Wetter' },
    { id: 'g7-079', cat: 'Wetter', ru: 'солнечно', de: 'sonnig' },
    { id: 'g7-080', cat: 'Wetter', ru: 'облачно', de: 'bewölkt' },
    { id: 'g7-081', cat: 'Wetter', ru: 'идёт дождь', de: 'es regnet' },
    { id: 'g7-082', cat: 'Wetter', ru: 'снег', de: 'Schnee' },
    { id: 'g7-083', cat: 'Einkaufen', ru: 'сколько стоит?', de: 'wie viel kostet?' },
    { id: 'g7-084', cat: 'Einkaufen', ru: 'покупать', de: 'kaufen' },
    { id: 'g7-085', cat: 'Einkaufen', ru: 'цена', de: 'Preis' },
    { id: 'g7-086', cat: 'Einkaufen', ru: 'касса', de: 'Kasse' },
    { id: 'g7-087', cat: 'Essen', ru: 'суп', de: 'Suppe' },
    { id: 'g7-088', cat: 'Essen', ru: 'каша', de: 'Brei' },
    { id: 'g7-089', cat: 'Essen', ru: 'блины', de: 'Pfannkuchen' },
    { id: 'g7-090', cat: 'Essen', ru: 'чай', de: 'Tee' },
    { id: 'g7-091', cat: 'Essen', ru: 'сок', de: 'Saft' },
    { id: 'g7-092', cat: 'Freizeit', ru: 'чтение', de: 'Lesen' },
    { id: 'g7-093', cat: 'Freizeit', ru: 'рисовать', de: 'zeichnen' },
    { id: 'g7-094', cat: 'Kultur', ru: 'балет', de: 'Ballett' },
    { id: 'g7-095', cat: 'Kultur', ru: 'ансамбль', de: 'Ensemble' },
    { id: 'g7-096', cat: 'Kommunikation', ru: 'письмо', de: 'Brief' },
    { id: 'g7-097', cat: 'Kommunikation', ru: 'телефон', de: 'Telefon' },
    { id: 'g7-098', cat: 'Kommunikation', ru: 'разговор', de: 'Gespräch' },
    { id: 'g7-099', cat: 'Schule', ru: 'канцелярия', de: 'Schulbüro' },
    { id: 'g7-100', cat: 'Ausflug', ru: 'поездка', de: 'Ausflug' },
    { id: 'g7-101', cat: 'Feiertag', ru: 'Новый год', de: 'Neujahr' },
    { id: 'g7-102', cat: 'Feiertag', ru: 'подарок', de: 'Geschenk' },
    { id: 'g7-103', cat: 'Feiertag', ru: 'ёлка', de: 'Weihnachtsbaum' },
    { id: 'g7-104', cat: 'Tagesablauf', ru: 'вставать', de: 'aufstehen' },
    { id: 'g7-105', cat: 'Tagesablauf', ru: 'ложиться спать', de: 'schlafen gehen' },
    { id: 'g7-106', cat: 'Zeit', ru: 'понедельник', de: 'Montag' },
    { id: 'g7-107', cat: 'Zeit', ru: 'выходные', de: 'Wochenende' },
    { id: 'g7-108', cat: 'Schule', ru: 'контрольная работа', de: 'Klassenarbeit' },
    { id: 'g7-109', cat: 'Schule', ru: 'ответ', de: 'Antwort' },
    { id: 'g7-110', cat: 'Schule', ru: 'вопрос', de: 'Frage' },
    { id: 'g7-111', cat: 'Sehenswürdigkeit', ru: 'Красная площадь', de: 'Roter Platz' },
    { id: 'g7-112', cat: 'Sehenswürdigkeit', ru: 'Москва', de: 'Moskau' },
    { id: 'g7-113', cat: 'Natur', ru: 'река', de: 'Fluss' },
    { id: 'g7-114', cat: 'Transport', ru: 'трамвай', de: 'Straßenbahn' },
    { id: 'g7-115', cat: 'Transport', ru: 'станция', de: 'Station' },
    { id: 'g7-116', cat: 'Transport', ru: 'билет', de: 'Fahrschein' },
    { id: 'g7-117', cat: 'Transport', ru: 'водитель', de: 'Fahrer' },
    { id: 'g7-118', cat: 'Kleidung', ru: 'куртка', de: 'Jacke' },
    { id: 'g7-119', cat: 'Kleidung', ru: 'шапка', de: 'Mütze' },
    { id: 'g7-120', cat: 'Kleidung', ru: 'перчатки', de: 'Handschuhe' }
  ],
  grade8: [
    { id: 'g8-001', cat: 'Reise', ru: 'путешествие', de: 'Reise' },
    { id: 'g8-002', cat: 'Reise', ru: 'экскурсия', de: 'Exkursion' },
    { id: 'g8-003', cat: 'Reise', ru: 'гид', de: 'Reiseführer' },
    { id: 'g8-004', cat: 'Reise', ru: 'карта', de: 'Karte' },
    { id: 'g8-005', cat: 'Reise', ru: 'путеводитель', de: 'Reiseführerbuch' },
    { id: 'g8-006', cat: 'Unterkunft', ru: 'отель', de: 'Hotel' },
    { id: 'g8-007', cat: 'Unterkunft', ru: 'номер', de: 'Hotelzimmer' },
    { id: 'g8-008', cat: 'Unterkunft', ru: 'бронировать', de: 'reservieren' },
    { id: 'g8-009', cat: 'Unterwegs', ru: 'поезд', de: 'Zug' },
    { id: 'g8-010', cat: 'Unterwegs', ru: 'самолёт', de: 'Flugzeug' },
    { id: 'g8-011', cat: 'Unterwegs', ru: 'аэропорт', de: 'Flughafen' },
    { id: 'g8-012', cat: 'Unterwegs', ru: 'багаж', de: 'Gepäck' },
    { id: 'g8-013', cat: 'Unterwegs', ru: 'паспорт', de: 'Pass' },
    { id: 'g8-014', cat: 'Unterwegs', ru: 'граница', de: 'Grenze' },
    { id: 'g8-015', cat: 'Kultur', ru: 'музей', de: 'Museum' },
    { id: 'g8-016', cat: 'Kultur', ru: 'выставка', de: 'Ausstellung' },
    { id: 'g8-017', cat: 'Kultur', ru: 'театр', de: 'Theater' },
    { id: 'g8-018', cat: 'Kultur', ru: 'спектакль', de: 'Theaterstück' },
    { id: 'g8-019', cat: 'Kultur', ru: 'аплодисменты', de: 'Applaus' },
    { id: 'g8-020', cat: 'Kultur', ru: 'репетиция', de: 'Probe' },
    { id: 'g8-021', cat: 'Fotografie', ru: 'фотография', de: 'Fotografie' },
    { id: 'g8-022', cat: 'Freunde', ru: 'встреча', de: 'Treffen' },
    { id: 'g8-023', cat: 'Stadt', ru: 'площадь', de: 'Platz' },
    { id: 'g8-024', cat: 'Stadt', ru: 'фонтан', de: 'Springbrunnen' },
    { id: 'g8-025', cat: 'Stadt', ru: 'набережная', de: 'Uferpromenade' },
    { id: 'g8-026', cat: 'Stadt', ru: 'пригород', de: 'Vorstadt' },
    { id: 'g8-027', cat: 'Stadt', ru: 'деревня', de: 'Dorf' },
    { id: 'g8-028', cat: 'Gastfreundschaft', ru: 'приглашение', de: 'Einladung' },
    { id: 'g8-029', cat: 'Gastfreundschaft', ru: 'гостеприимный', de: 'gastfreundlich' },
    { id: 'g8-030', cat: 'Souvenirs', ru: 'сувенир', de: 'Souvenir' },
    { id: 'g8-031', cat: 'Souvenirs', ru: 'ярмарка', de: 'Jahrmarkt' },
    { id: 'g8-032', cat: 'Souvenirs', ru: 'ремесло', de: 'Handwerk' },
    { id: 'g8-033', cat: 'Souvenirs', ru: 'мастерская', de: 'Werkstatt' },
    { id: 'g8-034', cat: 'Souvenirs', ru: 'керамика', de: 'Keramik' },
    { id: 'g8-035', cat: 'Souvenirs', ru: 'резьба', de: 'Schnitzerei' },
    { id: 'g8-036', cat: 'Freizeit', ru: 'вязать', de: 'stricken' },
    { id: 'g8-037', cat: 'Reise', ru: 'путешествовать', de: 'reisen' },
    { id: 'g8-038', cat: 'Reise', ru: 'останавливаться', de: 'übernachten' },
    { id: 'g8-039', cat: 'Kulinarik', ru: 'пробовать', de: 'probieren' },
    { id: 'g8-040', cat: 'Kulinarik', ru: 'вкусный', de: 'lecker' },
    { id: 'g8-041', cat: 'Kulinarik', ru: 'меню', de: 'Speisekarte' },
    { id: 'g8-042', cat: 'Kulinarik', ru: 'борщ', de: 'Borschtsch' },
    { id: 'g8-043', cat: 'Kulinarik', ru: 'пельмени', de: 'Pelmeni' },
    { id: 'g8-044', cat: 'Kulinarik', ru: 'счёт', de: 'Rechnung' },
    { id: 'g8-045', cat: 'Kulinarik', ru: 'принесите', de: 'bringen Sie bitte' },
    { id: 'g8-046', cat: 'Tradition', ru: 'праздник', de: 'Fest' },
    { id: 'g8-047', cat: 'Tradition', ru: 'традиция', de: 'Tradition' },
    { id: 'g8-048', cat: 'Tradition', ru: 'народный костюм', de: 'Volkstracht' },
    { id: 'g8-049', cat: 'Musik & Tanz', ru: 'оркестр', de: 'Orchester' },
    { id: 'g8-050', cat: 'Musik & Tanz', ru: 'балалайка', de: 'Balalaika' },
    { id: 'g8-051', cat: 'Musik & Tanz', ru: 'ударные', de: 'Schlaginstrumente' },
    { id: 'g8-052', cat: 'Musik & Tanz', ru: 'танец', de: 'Tanz' },
    { id: 'g8-053', cat: 'Musik & Tanz', ru: 'песня', de: 'Lied' },
    { id: 'g8-054', cat: 'Reise', ru: 'маршрут', de: 'Route' },
    { id: 'g8-055', cat: 'Reise', ru: 'турист', de: 'Tourist' },
    { id: 'g8-056', cat: 'Reise', ru: 'страна', de: 'Land' },
    { id: 'g8-057', cat: 'Reise', ru: 'визит', de: 'Besuch' },
    { id: 'g8-058', cat: 'Unterkunft', ru: 'стойка регистрации', de: 'Rezeption' },
    { id: 'g8-059', cat: 'Unterkunft', ru: 'ключ', de: 'Schlüssel' },
    { id: 'g8-060', cat: 'Unterkunft', ru: 'завтрак включён', de: 'Frühstück inklusive' },
    { id: 'g8-061', cat: 'Unterwegs', ru: 'расписание поездов', de: 'Fahrplan' },
    { id: 'g8-062', cat: 'Unterwegs', ru: 'пересадка', de: 'Umstieg' },
    { id: 'g8-063', cat: 'Unterwegs', ru: 'компостировать билет', de: 'Fahrschein entwerten' },
    { id: 'g8-064', cat: 'Unterwegs', ru: 'отправление', de: 'Abfahrt' },
    { id: 'g8-065', cat: 'Unterwegs', ru: 'прибытие', de: 'Ankunft' },
    { id: 'g8-066', cat: 'Stadt', ru: 'исторический центр', de: 'historisches Zentrum' },
    { id: 'g8-067', cat: 'Stadt', ru: 'сквер', de: 'kleiner Park' },
    { id: 'g8-068', cat: 'Stadt', ru: 'каменный мост', de: 'Steinbrücke' },
    { id: 'g8-069', cat: 'Stadt', ru: 'собор', de: 'Kathedrale' },
    { id: 'g8-070', cat: 'Kultur', ru: 'музыкальный фестиваль', de: 'Musikfestival' },
    { id: 'g8-071', cat: 'Kultur', ru: 'дворец', de: 'Palast' },
    { id: 'g8-072', cat: 'Kultur', ru: 'крепость', de: 'Festung' },
    { id: 'g8-073', cat: 'Tradition', ru: 'народные песни', de: 'Volkslieder' },
    { id: 'g8-074', cat: 'Tradition', ru: 'народные танцы', de: 'Volkstänze' },
    { id: 'g8-075', cat: 'Tradition', ru: 'яркая одежда', de: 'bunte Kleidung' },
    { id: 'g8-076', cat: 'Fotografie', ru: 'фотоаппарат', de: 'Fotoapparat' },
    { id: 'g8-077', cat: 'Fotografie', ru: 'снимать', de: 'filmen' },
    { id: 'g8-078', cat: 'Fotografie', ru: 'памятник', de: 'Denkmal' },
    { id: 'g8-079', cat: 'Gastfreundschaft', ru: 'угощение', de: 'Bewirtung' },
    { id: 'g8-080', cat: 'Gastfreundschaft', ru: 'дружелюбный', de: 'freundlich' },
    { id: 'g8-081', cat: 'Kulinarik', ru: 'чаевые', de: 'Trinkgeld' },
    { id: 'g8-082', cat: 'Kulinarik', ru: 'заказывать', de: 'bestellen' },
    { id: 'g8-083', cat: 'Kulinarik', ru: 'официант', de: 'Kellner' },
    { id: 'g8-084', cat: 'Kulinarik', ru: 'столик', de: 'Tisch im Restaurant' },
    { id: 'g8-085', cat: 'Kulinarik', ru: 'бронь', de: 'Reservierung' },
    { id: 'g8-086', cat: 'Kulinarik', ru: 'салат оливье', de: 'Russischer Kartoffelsalat' },
    { id: 'g8-087', cat: 'Kulinarik', ru: 'квас', de: 'Kwass' },
    { id: 'g8-088', cat: 'Souvenirs', ru: 'матрёшка', de: 'Matrjoschka' },
    { id: 'g8-089', cat: 'Souvenirs', ru: 'хохлома', de: 'Chochloma-Malerei' },
    { id: 'g8-090', cat: 'Souvenirs', ru: 'береста', de: 'Birkenrinde' },
    { id: 'g8-091', cat: 'Reise', ru: 'путёвка', de: 'Reisepaket' },
    { id: 'g8-092', cat: 'Reise', ru: 'забронировать онлайн', de: 'online reservieren' },
    { id: 'g8-093', cat: 'Reise', ru: 'пешая прогулка', de: 'Stadtführung zu Fuß' },
    { id: 'g8-094', cat: 'Reise', ru: 'аудиогид', de: 'Audioguide' },
    { id: 'g8-095', cat: 'Reise', ru: 'бюджет', de: 'Budget' },
    { id: 'g8-096', cat: 'Reise', ru: 'путевые заметки', de: 'Reisetagebuch' },
    { id: 'g8-097', cat: 'Kommunikation', ru: 'разговорник', de: 'Sprachführer' },
    { id: 'g8-098', cat: 'Kommunikation', ru: 'приглашать', de: 'einladen' },
    { id: 'g8-099', cat: 'Kommunikation', ru: 'соглашаться', de: 'zustimmen' },
    { id: 'g8-100', cat: 'Kommunikation', ru: 'отказываться', de: 'ablehnen' },
    { id: 'g8-101', cat: 'Freizeit', ru: 'кататься на лодке', de: 'Boot fahren' },
    { id: 'g8-102', cat: 'Freizeit', ru: 'гулять по набережной', de: 'an der Promenade spazieren' },
    { id: 'g8-103', cat: 'Freizeit', ru: 'подниматься на башню', de: 'auf einen Turm steigen' },
    { id: 'g8-104', cat: 'Freizeit', ru: 'любоваться видом', de: 'den Ausblick genießen' },
    { id: 'g8-105', cat: 'Geschichte', ru: 'Пётр Первый', de: 'Peter der Erste' },
    { id: 'g8-106', cat: 'Geschichte', ru: 'Эрмитаж', de: 'Eremitage' },
    { id: 'g8-107', cat: 'Geschichte', ru: 'история города', de: 'Stadtgeschichte' },
    { id: 'g8-108', cat: 'Geschichte', ru: 'экспонат', de: 'Exponat' },
    { id: 'g8-109', cat: 'Geschichte', ru: 'гид рассказывает', de: 'der Guide erzählt' },
    { id: 'g8-110', cat: 'Reise', ru: 'путевые впечатления', de: 'Reiseeindrücke' }
  ],
  grade9: [
    { id: 'g9-001', cat: 'Zukunft', ru: 'профессия', de: 'Beruf' },
    { id: 'g9-002', cat: 'Zukunft', ru: 'карьера', de: 'Karriere' },
    { id: 'g9-003', cat: 'Zukunft', ru: 'университет', de: 'Universität' },
    { id: 'g9-004', cat: 'Zukunft', ru: 'экзамен', de: 'Prüfung' },
    { id: 'g9-005', cat: 'Zukunft', ru: 'стажировка', de: 'Praktikum' },
    { id: 'g9-006', cat: 'Zukunft', ru: 'практика', de: 'Praxis' },
    { id: 'g9-007', cat: 'Beruf', ru: 'предприятие', de: 'Betrieb' },
    { id: 'g9-008', cat: 'Beruf', ru: 'офис', de: 'Büro' },
    { id: 'g9-009', cat: 'Beruf', ru: 'сотрудник', de: 'Mitarbeiter' },
    { id: 'g9-010', cat: 'Beruf', ru: 'деловой', de: 'geschäftlich' },
    { id: 'g9-011', cat: 'Team', ru: 'команда', de: 'Team' },
    { id: 'g9-012', cat: 'Team', ru: 'проект', de: 'Projekt' },
    { id: 'g9-013', cat: 'Team', ru: 'успех', de: 'Erfolg' },
    { id: 'g9-014', cat: 'Kommunikation', ru: 'переговоры', de: 'Verhandlungen' },
    { id: 'g9-015', cat: 'Kommunikation', ru: 'информация', de: 'Information' },
    { id: 'g9-016', cat: 'Technologie', ru: 'компьютер', de: 'Computer' },
    { id: 'g9-017', cat: 'Technologie', ru: 'программа', de: 'Programm' },
    { id: 'g9-018', cat: 'Technologie', ru: 'интернет', de: 'Internet' },
    { id: 'g9-019', cat: 'Technologie', ru: 'сообщение', de: 'Nachricht' },
    { id: 'g9-020', cat: 'Technologie', ru: 'чат', de: 'Chat' },
    { id: 'g9-021', cat: 'Medien', ru: 'блог', de: 'Blog' },
    { id: 'g9-022', cat: 'Medien', ru: 'влог', de: 'Vlog' },
    { id: 'g9-023', cat: 'Medien', ru: 'подкаст', de: 'Podcast' },
    { id: 'g9-024', cat: 'Medien', ru: 'современный', de: 'modern' },
    { id: 'g9-025', cat: 'Umwelt', ru: 'технология', de: 'Technologie' },
    { id: 'g9-026', cat: 'Umwelt', ru: 'экология', de: 'Ökologie' },
    { id: 'g9-027', cat: 'Umwelt', ru: 'окружающая среда', de: 'Umwelt' },
    { id: 'g9-028', cat: 'Umwelt', ru: 'природа', de: 'Natur' },
    { id: 'g9-029', cat: 'Umwelt', ru: 'климат', de: 'Klima' },
    { id: 'g9-030', cat: 'Umwelt', ru: 'переработка', de: 'Recycling' },
    { id: 'g9-031', cat: 'Engagement', ru: 'волонтёр', de: 'Ehrenamtlicher' },
    { id: 'g9-032', cat: 'Engagement', ru: 'доброволец', de: 'Freiwilliger' },
    { id: 'g9-033', cat: 'Engagement', ru: 'кампания', de: 'Kampagne' },
    { id: 'g9-034', cat: 'Engagement', ru: 'инициатива', de: 'Initiative' },
    { id: 'g9-035', cat: 'Umwelt', ru: 'планета', de: 'Planet' },
    { id: 'g9-036', cat: 'Zukunft', ru: 'будущее', de: 'Zukunft' },
    { id: 'g9-037', cat: 'Zukunft', ru: 'ответственность', de: 'Verantwortung' },
    { id: 'g9-038', cat: 'Diskussion', ru: 'обсуждать', de: 'diskutieren' },
    { id: 'g9-039', cat: 'Diskussion', ru: 'решение', de: 'Lösung' },
    { id: 'g9-040', cat: 'Diskussion', ru: 'предлагать', de: 'vorschlagen' },
    { id: 'g9-041', cat: 'Diskussion', ru: 'участвовать', de: 'teilnehmen' },
    { id: 'g9-042', cat: 'Jugend', ru: 'молодёжь', de: 'Jugend' },
    { id: 'g9-043', cat: 'Jugend', ru: 'самоуправление', de: 'Selbstverwaltung' },
    { id: 'g9-044', cat: 'Wettbewerb', ru: 'конкурс', de: 'Wettbewerb' },
    { id: 'g9-045', cat: 'Wettbewerb', ru: 'олимпиада', de: 'Olympiade' },
    { id: 'g9-046', cat: 'Wissenschaft', ru: 'исследование', de: 'Forschung' },
    { id: 'g9-047', cat: 'Wissenschaft', ru: 'лаборатория', de: 'Labor' },
    { id: 'g9-048', cat: 'Wissenschaft', ru: 'опыт', de: 'Erfahrung' },
    { id: 'g9-049', cat: 'Wissenschaft', ru: 'эксперимент', de: 'Experiment' },
    { id: 'g9-050', cat: 'Wissenschaft', ru: 'открытие', de: 'Entdeckung' },
    { id: 'g9-051', cat: 'Literatur', ru: 'литература', de: 'Literatur' },
    { id: 'g9-052', cat: 'Literatur', ru: 'произведение', de: 'Werk' },
    { id: 'g9-053', cat: 'Literatur', ru: 'герой', de: 'Held' },
    { id: 'g9-054', cat: 'Literatur', ru: 'характер', de: 'Charakter' },
    { id: 'g9-055', cat: 'Literatur', ru: 'эмоция', de: 'Emotion' },
    { id: 'g9-056', cat: 'Technologie', ru: 'искусственный интеллект', de: 'künstliche Intelligenz' },
    { id: 'g9-057', cat: 'Technologie', ru: 'робот', de: 'Roboter' },
    { id: 'g9-058', cat: 'Technologie', ru: 'программирование', de: 'Programmierung' },
    { id: 'g9-059', cat: 'Technologie', ru: 'цифровой', de: 'digital' },
    { id: 'g9-060', cat: 'Technologie', ru: 'данные', de: 'Daten' },
    { id: 'g9-061', cat: 'Medien', ru: 'журналист', de: 'Journalist' },
    { id: 'g9-062', cat: 'Medien', ru: 'редакция', de: 'Redaktion' },
    { id: 'g9-063', cat: 'Medien', ru: 'репортаж', de: 'Reportage' },
    { id: 'g9-064', cat: 'Medien', ru: 'интервью', de: 'Interview' },
    { id: 'g9-065', cat: 'Kommunikation', ru: 'социальная сеть', de: 'soziales Netzwerk' },
    { id: 'g9-066', cat: 'Kommunikation', ru: 'подписчик', de: 'Abonnent' },
    { id: 'g9-067', cat: 'Kommunikation', ru: 'комментарий', de: 'Kommentar' },
    { id: 'g9-068', cat: 'Umwelt', ru: 'климатические изменения', de: 'Klimawandel' },
    { id: 'g9-069', cat: 'Umwelt', ru: 'возобновляемая энергия', de: 'erneuerbare Energie' },
    { id: 'g9-070', cat: 'Umwelt', ru: 'ветровая электростанция', de: 'Windkraftanlage' },
    { id: 'g9-071', cat: 'Umwelt', ru: 'солнечная батарея', de: 'Solarzelle' },
    { id: 'g9-072', cat: 'Umwelt', ru: 'экономить энергию', de: 'Energie sparen' },
    { id: 'g9-073', cat: 'Umwelt', ru: 'сортировать отходы', de: 'Abfälle trennen' },
    { id: 'g9-074', cat: 'Umwelt', ru: 'мусор', de: 'Müll' },
    { id: 'g9-075', cat: 'Umwelt', ru: 'пластик', de: 'Plastik' },
    { id: 'g9-076', cat: 'Engagement', ru: 'благотворительный', de: 'wohltätig' },
    { id: 'g9-077', cat: 'Engagement', ru: 'пожертвование', de: 'Spende' },
    { id: 'g9-078', cat: 'Engagement', ru: 'волонтёрский проект', de: 'Freiwilligenprojekt' },
    { id: 'g9-079', cat: 'Zukunft', ru: 'мечта', de: 'Traum' },
    { id: 'g9-080', cat: 'Zukunft', ru: 'цель', de: 'Ziel' },
    { id: 'g9-081', cat: 'Zukunft', ru: 'планировать', de: 'planen' },
    { id: 'g9-082', cat: 'Zukunft', ru: 'выбирать профессию', de: 'einen Beruf wählen' },
    { id: 'g9-083', cat: 'Bildung', ru: 'двойное образование', de: 'duale Ausbildung' },
    { id: 'g9-084', cat: 'Bildung', ru: 'обмен', de: 'Austausch' },
    { id: 'g9-085', cat: 'Bildung', ru: 'стипендия', de: 'Stipendium' },
    { id: 'g9-086', cat: 'Bildung', ru: 'курсы', de: 'Kurse' },
    { id: 'g9-087', cat: 'Bildung', ru: 'дополнительный', de: 'zusätzlich' },
    { id: 'g9-088', cat: 'Gesellschaft', ru: 'волонтёрский лагерь', de: 'Freiwilligenlager' },
    { id: 'g9-089', cat: 'Gesellschaft', ru: 'сообщество', de: 'Gemeinschaft' },
    { id: 'g9-090', cat: 'Gesellschaft', ru: 'инициатор', de: 'Initiator' },
    { id: 'g9-091', cat: 'Gesellschaft', ru: 'совместный проект', de: 'Gemeinschaftsprojekt' },
    { id: 'g9-092', cat: 'Diskussion', ru: 'аргументировать', de: 'argumentieren' },
    { id: 'g9-093', cat: 'Diskussion', ru: 'убеждать', de: 'überzeugen' },
    { id: 'g9-094', cat: 'Diskussion', ru: 'оппонировать', de: 'widersprechen' },
    { id: 'g9-095', cat: 'Diskussion', ru: 'искать компромисс', de: 'Kompromiss suchen' },
    { id: 'g9-096', cat: 'Technologie', ru: 'кибербезопасность', de: 'Cybersicherheit' },
    { id: 'g9-097', cat: 'Technologie', ru: 'пароль', de: 'Passwort' },
    { id: 'g9-098', cat: 'Technologie', ru: 'приватность', de: 'Privatsphäre' },
    { id: 'g9-099', cat: 'Medien', ru: 'фейковые новости', de: 'Fake News' },
    { id: 'g9-100', cat: 'Medien', ru: 'вести подкаст', de: 'einen Podcast moderieren' },
    { id: 'g9-101', cat: 'Karriere', ru: 'портфолио', de: 'Portfolio' },
    { id: 'g9-102', cat: 'Karriere', ru: 'собеседование', de: 'Vorstellungsgespräch' },
    { id: 'g9-103', cat: 'Karriere', ru: 'резюме', de: 'Lebenslauf' },
    { id: 'g9-104', cat: 'Karriere', ru: 'навык', de: 'Fähigkeit' },
    { id: 'g9-105', cat: 'Karriere', ru: 'компетенция', de: 'Kompetenz' },
    { id: 'g9-106', cat: 'Medien', ru: 'стримить', de: 'streamen' },
    { id: 'g9-107', cat: 'Medien', ru: 'подписка', de: 'Abonnement' },
    { id: 'g9-108', cat: 'Umwelt', ru: 'переработка бумаги', de: 'Papierrecycling' },
    { id: 'g9-109', cat: 'Umwelt', ru: 'чистая вода', de: 'sauberes Wasser' },
    { id: 'g9-110', cat: 'Umwelt', ru: 'зелёный город', de: 'grüne Stadt' }
  ],
  grade10: [
    { id: 'g10-001', cat: 'Gesellschaft', ru: 'общество', de: 'Gesellschaft' },
    { id: 'g10-002', cat: 'Gesellschaft', ru: 'гражданин', de: 'Bürger' },
    { id: 'g10-003', cat: 'Politik', ru: 'государство', de: 'Staat' },
    { id: 'g10-004', cat: 'Politik', ru: 'конституция', de: 'Verfassung' },
    { id: 'g10-005', cat: 'Politik', ru: 'выборы', de: 'Wahlen' },
    { id: 'g10-006', cat: 'Politik', ru: 'парламент', de: 'Parlament' },
    { id: 'g10-007', cat: 'Politik', ru: 'депутат', de: 'Abgeordneter' },
    { id: 'g10-008', cat: 'Politik', ru: 'закон', de: 'Gesetz' },
    { id: 'g10-009', cat: 'Politik', ru: 'дебаты', de: 'Debatte' },
    { id: 'g10-010', cat: 'Politik', ru: 'права человека', de: 'Menschenrechte' },
    { id: 'g10-011', cat: 'Politik', ru: 'обязанность', de: 'Pflicht' },
    { id: 'g10-012', cat: 'Gesellschaft', ru: 'инициатива', de: 'Initiative' },
    { id: 'g10-013', cat: 'Wirtschaft', ru: 'экономика', de: 'Wirtschaft' },
    { id: 'g10-014', cat: 'Wirtschaft', ru: 'рынок', de: 'Markt' },
    { id: 'g10-015', cat: 'Wirtschaft', ru: 'инвестиция', de: 'Investition' },
    { id: 'g10-016', cat: 'Wirtschaft', ru: 'предприниматель', de: 'Unternehmer' },
    { id: 'g10-017', cat: 'Wirtschaft', ru: 'инновация', de: 'Innovation' },
    { id: 'g10-018', cat: 'Wirtschaft', ru: 'стартап', de: 'Start-up' },
    { id: 'g10-019', cat: 'Wirtschaft', ru: 'конкуренция', de: 'Wettbewerb' },
    { id: 'g10-020', cat: 'Wirtschaft', ru: 'устойчивое развитие', de: 'nachhaltige Entwicklung' },
    { id: 'g10-021', cat: 'Global', ru: 'глобализация', de: 'Globalisierung' },
    { id: 'g10-022', cat: 'Global', ru: 'дипломатия', de: 'Diplomatie' },
    { id: 'g10-023', cat: 'Global', ru: 'сотрудничество', de: 'Zusammenarbeit' },
    { id: 'g10-024', cat: 'Global', ru: 'конфликт', de: 'Konflikt' },
    { id: 'g10-025', cat: 'Global', ru: 'переговорщик', de: 'Verhandlungsführer' },
    { id: 'g10-026', cat: 'Global', ru: 'компромисс', de: 'Kompromiss' },
    { id: 'g10-027', cat: 'Kultur', ru: 'культура', de: 'Kultur' },
    { id: 'g10-028', cat: 'Kultur', ru: 'наследие', de: 'Erbe' },
    { id: 'g10-029', cat: 'Kultur', ru: 'традиции', de: 'Traditionen' },
    { id: 'g10-030', cat: 'Kunst', ru: 'современное искусство', de: 'moderne Kunst' },
    { id: 'g10-031', cat: 'Kunst', ru: 'выразительность', de: 'Ausdruckskraft' },
    { id: 'g10-032', cat: 'Musik', ru: 'симфония', de: 'Sinfonie' },
    { id: 'g10-033', cat: 'Musik', ru: 'соната', de: 'Sonate' },
    { id: 'g10-034', cat: 'Musik', ru: 'опера', de: 'Oper' },
    { id: 'g10-035', cat: 'Musik', ru: 'постановка', de: 'Inszenierung' },
    { id: 'g10-036', cat: 'Theater', ru: 'режиссёр', de: 'Regisseur' },
    { id: 'g10-037', cat: 'Theater', ru: 'актёр', de: 'Schauspieler' },
    { id: 'g10-038', cat: 'Theater', ru: 'сцена', de: 'Bühne' },
    { id: 'g10-039', cat: 'Theater', ru: 'зритель', de: 'Zuschauer' },
    { id: 'g10-040', cat: 'Sprache', ru: 'перевод', de: 'Übersetzung' },
    { id: 'g10-041', cat: 'Sprache', ru: 'интерпретация', de: 'Interpretation' },
    { id: 'g10-042', cat: 'Analyse', ru: 'анализ', de: 'Analyse' },
    { id: 'g10-043', cat: 'Philosophie', ru: 'философия', de: 'Philosophie' },
    { id: 'g10-044', cat: 'Philosophie', ru: 'мировоззрение', de: 'Weltanschauung' },
    { id: 'g10-045', cat: 'Philosophie', ru: 'ценность', de: 'Wert' },
    { id: 'g10-046', cat: 'Argumentation', ru: 'аргумент', de: 'Argument' },
    { id: 'g10-047', cat: 'Argumentation', ru: 'доказательство', de: 'Beweis' },
    { id: 'g10-048', cat: 'Wissenschaft', ru: 'гипотеза', de: 'Hypothese' },
    { id: 'g10-049', cat: 'Wissenschaft', ru: 'исследователь', de: 'Forscher' },
    { id: 'g10-050', cat: 'Wissenschaft', ru: 'академик', de: 'Akademiker' },
    { id: 'g10-051', cat: 'Wissenschaft', ru: 'достижение', de: 'Leistung' },
    { id: 'g10-052', cat: 'Zukunft', ru: 'перспектива', de: 'Perspektive' },
    { id: 'g10-053', cat: 'Politik', ru: 'демократия', de: 'Demokratie' },
    { id: 'g10-054', cat: 'Politik', ru: 'гражданское общество', de: 'Zivilgesellschaft' },
    { id: 'g10-055', cat: 'Politik', ru: 'правительство', de: 'Regierung' },
    { id: 'g10-056', cat: 'Politik', ru: 'оппозиция', de: 'Opposition' },
    { id: 'g10-057', cat: 'Politik', ru: 'реформа', de: 'Reform' },
    { id: 'g10-058', cat: 'Politik', ru: 'конституционный суд', de: 'Verfassungsgericht' },
    { id: 'g10-059', cat: 'Recht', ru: 'правосудие', de: 'Rechtsprechung' },
    { id: 'g10-060', cat: 'Recht', ru: 'судья', de: 'Richter' },
    { id: 'g10-061', cat: 'Recht', ru: 'юрист', de: 'Jurist' },
    { id: 'g10-062', cat: 'Recht', ru: 'адвокат', de: 'Anwalt' },
    { id: 'g10-063', cat: 'Wirtschaft', ru: 'фондовый рынок', de: 'Aktienmarkt' },
    { id: 'g10-064', cat: 'Wirtschaft', ru: 'биржа', de: 'Börse' },
    { id: 'g10-065', cat: 'Wirtschaft', ru: 'налоги', de: 'Steuern' },
    { id: 'g10-066', cat: 'Wirtschaft', ru: 'бюджет государства', de: 'Staatshaushalt' },
    { id: 'g10-067', cat: 'Wirtschaft', ru: 'инфляция', de: 'Inflation' },
    { id: 'g10-068', cat: 'Wirtschaft', ru: 'производительность', de: 'Produktivität' },
    { id: 'g10-069', cat: 'Global', ru: 'устойчивость', de: 'Nachhaltigkeit' },
    { id: 'g10-070', cat: 'Global', ru: 'равенство', de: 'Gleichheit' },
    { id: 'g10-071', cat: 'Global', ru: 'мировая торговля', de: 'Welthandel' },
    { id: 'g10-072', cat: 'Global', ru: 'международное право', de: 'Völkerrecht' },
    { id: 'g10-073', cat: 'Gesellschaft', ru: 'гуманизм', de: 'Humanismus' },
    { id: 'g10-074', cat: 'Gesellschaft', ru: 'толерантность', de: 'Toleranz' },
    { id: 'g10-075', cat: 'Gesellschaft', ru: 'многообразие', de: 'Vielfalt' },
    { id: 'g10-076', cat: 'Gesellschaft', ru: 'социальная справедливость', de: 'soziale Gerechtigkeit' },
    { id: 'g10-077', cat: 'Kultur', ru: 'авангард', de: 'Avantgarde' },
    { id: 'g10-078', cat: 'Kultur', ru: 'символизм', de: 'Symbolismus' },
    { id: 'g10-079', cat: 'Kultur', ru: 'реализм', de: 'Realismus' },
    { id: 'g10-080', cat: 'Kultur', ru: 'постмодернизм', de: 'Postmodernismus' },
    { id: 'g10-081', cat: 'Kunst', ru: 'галерея', de: 'Galerie' },
    { id: 'g10-082', cat: 'Kunst', ru: 'куратор', de: 'Kurator' },
    { id: 'g10-083', cat: 'Kunst', ru: 'инсталляция', de: 'Installation' },
    { id: 'g10-084', cat: 'Literatur', ru: 'эссе', de: 'Essay' },
    { id: 'g10-085', cat: 'Literatur', ru: 'критика', de: 'Kritik' },
    { id: 'g10-086', cat: 'Literatur', ru: 'журнал', de: 'Zeitschrift' },
    { id: 'g10-087', cat: 'Kommunikation', ru: 'публичное выступление', de: 'öffentliche Rede' },
    { id: 'g10-088', cat: 'Kommunikation', ru: 'дискуссионный клуб', de: 'Debattierclub' },
    { id: 'g10-089', cat: 'Kommunikation', ru: 'риторика', de: 'Rhetorik' },
    { id: 'g10-090', cat: 'Wissenschaft', ru: 'научная конференция', de: 'wissenschaftliche Konferenz' },
    { id: 'g10-091', cat: 'Wissenschaft', ru: 'цитата', de: 'Zitat' },
    { id: 'g10-092', cat: 'Wissenschaft', ru: 'монография', de: 'Monografie' },
    { id: 'g10-093', cat: 'Wissenschaft', ru: 'исследовательский центр', de: 'Forschungszentrum' },
    { id: 'g10-094', cat: 'Zukunft', ru: 'социальный проект', de: 'soziales Projekt' },
    { id: 'g10-095', cat: 'Zukunft', ru: 'ответственное лидерство', de: 'verantwortungsvolle Führung' },
    { id: 'g10-096', cat: 'Zukunft', ru: 'глобальные вызовы', de: 'globale Herausforderungen' },
    { id: 'g10-097', cat: 'Zukunft', ru: 'перспектива карьеры', de: 'Karriereperspektive' },
    { id: 'g10-098', cat: 'Gesellschaft', ru: 'общественная инициатива', de: 'bürgerliche Initiative' },
    { id: 'g10-099', cat: 'Philosophie', ru: 'этика', de: 'Ethik' },
    { id: 'g10-100', cat: 'Philosophie', ru: 'мораль', de: 'Moral' },
    { id: 'g10-101', cat: 'Philosophie', ru: 'ценности общества', de: 'Werte der Gesellschaft' },
    { id: 'g10-102', cat: 'Philosophie', ru: 'идентичность', de: 'Identität' },
    { id: 'g10-103', cat: 'Argumentation', ru: 'полемика', de: 'Polemik' },
    { id: 'g10-104', cat: 'Argumentation', ru: 'контраргумент', de: 'Gegenargument' },
    { id: 'g10-105', cat: 'Argumentation', ru: 'логика', de: 'Logik' },
    { id: 'g10-106', cat: 'Politik', ru: 'международные отношения', de: 'internationale Beziehungen' },
    { id: 'g10-107', cat: 'Politik', ru: 'внешняя политика', de: 'Außenpolitik' },
    { id: 'g10-108', cat: 'Global', ru: 'миротворчество', de: 'Friedensmission' },
    { id: 'g10-109', cat: 'Kultur', ru: 'национальная память', de: 'kollektives Gedächtnis' },
    { id: 'g10-110', cat: 'Gesellschaft', ru: 'гражданская ответственность', de: 'bürgerliche Verantwortung' }
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
  grade: 'grade7',
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
  daily: { date: null, done: false },
  musicEl: null
};

const STORAGE_KEY = 'ru-vocab-deluxe-v2';

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    state.theme = data.theme || state.theme;
    state.grade = data.grade || state.grade;
    if (!GRADE_INFO[state.grade]) {
      const legacy = { beginner: 'grade7', intermediate: 'grade8', advanced: 'grade10' };
      state.grade = legacy[data.grade] || 'grade7';
    }
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
  setThemeMusic(state.theme);
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
  document.addEventListener('visibilitychange', () => syncThemeMusic(), { passive: true });
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
    audioBtn.setAttribute('aria-label', state.sfx ? 'Sound und Musik stummschalten' : 'Sound und Musik einschalten');
  }
  syncThemeMusic();
}

function ensureMusicEl() {
  if (state.musicEl && document.body.contains(state.musicEl)) return state.musicEl;
  const el = $('#theme-music');
  if (!el) return null;
  el.volume = 0.28;
  el.loop = true;
  el.setAttribute('aria-hidden', 'true');
  state.musicEl = el;
  return state.musicEl;
}

function setThemeMusic(themeKey) {
  const audio = ensureMusicEl();
  const theme = THEMES[themeKey];
  if (!audio || !theme || !theme.music) {
    if (audio) {
      audio.pause();
      audio.removeAttribute('data-theme');
      audio.removeAttribute('src');
    }
    return;
  }
  if (audio.dataset.theme === themeKey && audio.src) {
    syncThemeMusic();
    return;
  }
  audio.dataset.theme = themeKey;
  audio.src = theme.music;
  audio.load();
  if (state.sfx && !document.hidden) {
    const playPromise = audio.play();
    if (playPromise?.catch) playPromise.catch(() => {});
  }
}

function syncThemeMusic() {
  const audio = ensureMusicEl();
  if (!audio) return;
  const theme = THEMES[state.theme];
  if (!theme || !theme.music || !state.sfx || document.hidden) {
    audio.pause();
    return;
  }
  if (audio.dataset.theme !== state.theme) {
    setThemeMusic(state.theme);
    return;
  }
  const playPromise = audio.play();
  if (playPromise?.catch) playPromise.catch(() => {});
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
      const icon = theme.icon
        ? `<span class="theme-card__icon" aria-hidden="true"><svg class="icon"><use href="#${theme.icon}"></use></svg></span>`
        : '';
      card.innerHTML = `${icon}<div class="theme-card__body"><strong>${theme.label}</strong><span>${theme.description}</span></div>`;
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
  setThemeMusic(themeKey);
  syncThemeMusic();
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
      const ribbon = info.ribbon || 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.28), transparent 65%)';
      card.style.setProperty('--grade-ribbon', ribbon);
      const icon = info.icon
        ? `<span class="grade-card__icon" aria-hidden="true"><svg class="icon"><use href="#${info.icon}"></use></svg></span>`
        : '';
      card.innerHTML = `${icon}<div class="grade-card__body"><strong>${info.label}</strong><span>${info.description}</span></div>`;
      card.setAttribute('aria-pressed', 'false');
      card.onclick = () => setGrade(key);
      container.appendChild(card);
    });
  });
  highlightGrade();
}

function highlightGrade() {
  $$('.grade-card').forEach((card) => {
    card.classList.toggle('active', card.dataset.grade === state.grade);
    card.setAttribute('aria-pressed', String(card.dataset.grade === state.grade));
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
