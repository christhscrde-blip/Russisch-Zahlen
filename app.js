/* Russisch Vokabel-App Deluxe – moderne Landingpage, Themes & optionale Imports */
const THEMES = {
  midnight: {
    label: 'Midnight Aurora',
    description: 'Polarlichter über verschneiten Fjorden',
    tone: 'dark',
    icon: 'icon-moon',
    music: 'https://cdn.pixabay.com/download/audio/2021/09/03/audio_3a8e8f302f.mp3?filename=ambient-astral-9644.mp3',
    image: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #0a1633 0%, #223a6f 55%, #050914 100%)',
    overlay: 'linear-gradient(160deg, rgba(12,28,58,0.45), rgba(2,6,18,0.75))',
    vars: {
      '--bg': '#040813',
      '--bg-grad': 'radial-gradient(circle at 18% 22%, rgba(136,186,255,0.42), transparent 62%), radial-gradient(circle at 82% 12%, rgba(92,124,255,0.34), transparent 60%), #050a17',
      '--bg-texture': 'radial-gradient(circle, rgba(120,170,255,0.14) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2400&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
      '--bg-art-filter': 'saturate(1.12) brightness(0.9)',
      '--bg-art-opacity': '0.62',
      '--bg-art-mobile': 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80")',
      '--bg-art-mobile-position': 'center top',
      '--bg-art-mobile-size': 'cover',
      '--bg-art-mobile-filter': 'saturate(1.1) brightness(0.88)',
      '--bg-art-mobile-opacity': '0.7',
      '--fg': '#f2f6ff',
      '--muted': '#9fb7d8',
      '--primary': '#6ea7ff',
      '--primary-2': '#8cbcff',
      '--danger': '#ff6c97',
      '--card': 'rgba(6,14,32,0.82)',
      '--input-surface': 'rgba(8,18,38,0.82)',
      '--card-border': 'rgba(110,160,255,0.35)',
      '--input-border': 'rgba(110,160,255,0.3)',
      '--border': 'rgba(255,255,255,0.12)',
      '--accent': '#b6d4ff',
      '--glass': 'rgba(4,12,30,0.66)',
      '--shadow': '0 34px 70px rgba(3,8,22,0.6)'
    }
  },
  imperial: {
    label: 'Imperial Ballroom',
    description: 'Goldene Säle im Herzen von St. Petersburg',
    tone: 'light',
    icon: 'icon-palace',
    music: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_1aa1aa811d.mp3?filename=grand-entrance-20551.mp3',
    image: 'url("https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #f8e4c0 0%, #d7a04f 55%, #9f5a1f 100%)',
    overlay: 'linear-gradient(150deg, rgba(188,132,54,0.45), rgba(255,255,255,0.52))',
    vars: {
      '--bg': '#f8ead5',
      '--bg-grad': 'radial-gradient(circle at 18% 18%, rgba(255,220,168,0.55), transparent 60%), radial-gradient(circle at 78% 10%, rgba(214,164,102,0.42), transparent 62%), #f6e5cf',
      '--bg-texture': 'radial-gradient(circle, rgba(255,220,170,0.18) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=2200&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
      '--bg-art-filter': 'saturate(1.08) brightness(1.04)',
      '--bg-art-opacity': '0.42',
      '--bg-art-mobile': 'url("https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80")',
      '--bg-art-mobile-position': 'center top',
      '--bg-art-mobile-size': 'cover',
      '--bg-art-mobile-filter': 'saturate(1.08) brightness(1.06)',
      '--bg-art-mobile-opacity': '0.46',
      '--fg': '#2c1d0f',
      '--muted': '#765330',
      '--primary': '#b27736',
      '--primary-2': '#d99b51',
      '--danger': '#c34d4d',
      '--card': 'rgba(255,250,242,0.85)',
      '--input-surface': 'rgba(255,255,255,0.9)',
      '--card-border': 'rgba(190,140,80,0.38)',
      '--input-border': 'rgba(150,110,60,0.28)',
      '--border': 'rgba(150,110,70,0.24)',
      '--accent': '#f2c989',
      '--glass': 'rgba(255,248,236,0.78)',
      '--shadow': '0 28px 54px rgba(150,110,68,0.32)'
    }
  },
  birch: {
    label: 'Birkenwald',
    description: 'Frische Morgenluft zwischen Birken',
    tone: 'light',
    icon: 'icon-forest',
    music: 'https://cdn.pixabay.com/download/audio/2021/11/23/audio_33aebca41a.mp3?filename=foggy-forest-ambient-9833.mp3',
    image: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #0f5b3f 0%, #3f9664 55%, #b9e6c6 100%)',
    overlay: 'linear-gradient(150deg, rgba(18,84,60,0.4), rgba(220,255,230,0.4))',
    vars: {
      '--bg': '#0f2d24',
      '--bg-grad': 'radial-gradient(circle at 78% 12%, rgba(116,200,150,0.45), transparent 60%), radial-gradient(circle at 16% 88%, rgba(60,170,130,0.36), transparent 62%), #0b211c',
      '--bg-texture': 'radial-gradient(circle, rgba(186,246,210,0.14) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2200&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
      '--bg-art-filter': 'saturate(1.08) brightness(0.94)',
      '--bg-art-opacity': '0.48',
      '--bg-art-mobile': 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80")',
      '--bg-art-mobile-position': 'center top',
      '--bg-art-mobile-size': 'cover',
      '--bg-art-mobile-filter': 'saturate(1.06) brightness(0.96)',
      '--bg-art-mobile-opacity': '0.55',
      '--fg': '#f0fff5',
      '--muted': '#9cc8ad',
      '--primary': '#4eb68e',
      '--primary-2': '#6fd1a8',
      '--danger': '#f36f72',
      '--card': 'rgba(12,34,28,0.82)',
      '--input-surface': 'rgba(16,40,32,0.8)',
      '--card-border': 'rgba(120,210,170,0.36)',
      '--input-border': 'rgba(110,200,160,0.3)',
      '--border': 'rgba(130,190,160,0.26)',
      '--accent': '#87e6bf',
      '--glass': 'rgba(12,34,30,0.7)',
      '--shadow': '0 28px 54px rgba(4,20,16,0.5)'
    }
  },
  velvet: {
    label: 'Velvet Theatre',
    description: 'Burgunder Vorhänge & goldenes Rampenlicht',
    tone: 'dark',
    icon: 'icon-masks',
    music: 'https://cdn.pixabay.com/download/audio/2021/09/13/audio_94c5a12cfa.mp3?filename=velvet-9679.mp3',
    image: 'url("https://images.unsplash.com/photo-1527356926128-12f6e6f02747?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #3a0c18 0%, #702038 52%, #12040a 100%)',
    overlay: 'linear-gradient(160deg, rgba(118,40,62,0.5), rgba(8,4,12,0.7))',
    vars: {
      '--bg': '#16040c',
      '--bg-grad': 'radial-gradient(circle at 76% 12%, rgba(190,78,110,0.5), transparent 60%), radial-gradient(circle at 12% 84%, rgba(86,26,44,0.42), transparent 62%), #0d0207',
      '--bg-texture': 'radial-gradient(circle, rgba(255,190,210,0.12) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1527356926128-12f6e6f02747?auto=format&fit=crop&w=2200&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
      '--bg-art-filter': 'saturate(1.12) brightness(0.86)',
      '--bg-art-opacity': '0.6',
      '--bg-art-mobile': 'url("https://images.unsplash.com/photo-1527356926128-12f6e6f02747?auto=format&fit=crop&w=1200&q=80")',
      '--bg-art-mobile-position': 'center top',
      '--bg-art-mobile-size': 'cover',
      '--bg-art-mobile-filter': 'saturate(1.12) brightness(0.9)',
      '--bg-art-mobile-opacity': '0.64',
      '--fg': '#fbe6ee',
      '--muted': '#c793a3',
      '--primary': '#d55f7e',
      '--primary-2': '#ef7fa2',
      '--danger': '#f46a78',
      '--card': 'rgba(38,8,20,0.84)',
      '--input-surface': 'rgba(40,12,24,0.82)',
      '--card-border': 'rgba(206,90,122,0.4)',
      '--input-border': 'rgba(206,90,122,0.32)',
      '--border': 'rgba(206,90,122,0.25)',
      '--accent': '#ff9ab9',
      '--glass': 'rgba(34,8,18,0.74)',
      '--shadow': '0 30px 58px rgba(28,4,12,0.6)'
    }
  },
  sunset: {
    label: 'Sunset Steppe',
    description: 'Weite Horizonte im goldenen Abendlicht',
    tone: 'light',
    icon: 'icon-sunrise',
    music: 'https://cdn.pixabay.com/download/audio/2022/03/22/audio_5ba6c8efcc.mp3?filename=sunset-reverie-20962.mp3',
    image: 'url("https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #ffb47a 0%, #ff7f72 50%, #2c1f4a 100%)',
    overlay: 'linear-gradient(170deg, rgba(255,130,90,0.45), rgba(30,22,60,0.65))',
    vars: {
      '--bg': '#1f1734',
      '--bg-grad': 'radial-gradient(circle at 24% 14%, rgba(255,188,124,0.56), transparent 58%), radial-gradient(circle at 76% 8%, rgba(206,104,152,0.42), transparent 62%), #1a142f',
      '--bg-texture': 'radial-gradient(circle, rgba(255,196,150,0.16) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=2200&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
      '--bg-art-filter': 'saturate(1.08) brightness(0.92)',
      '--bg-art-opacity': '0.52',
      '--bg-art-mobile': 'url("https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=1200&q=80")',
      '--bg-art-mobile-position': 'center top',
      '--bg-art-mobile-size': 'cover',
      '--bg-art-mobile-filter': 'saturate(1.08) brightness(0.94)',
      '--bg-art-mobile-opacity': '0.58',
      '--fg': '#fff3f0',
      '--muted': '#e2b3ad',
      '--primary': '#ff7c85',
      '--primary-2': '#ff9b9f',
      '--danger': '#ff5d73',
      '--card': 'rgba(34,20,54,0.84)',
      '--input-surface': 'rgba(36,22,56,0.8)',
      '--card-border': 'rgba(255,140,150,0.34)',
      '--input-border': 'rgba(255,140,150,0.3)',
      '--border': 'rgba(255,150,170,0.22)',
      '--accent': '#ffd3a4',
      '--glass': 'rgba(28,18,50,0.72)',
      '--shadow': '0 28px 56px rgba(14,8,28,0.58)'
    }
  },
  midnightSun: {
    label: 'Midnight Sun',
    description: 'Nordisches Licht zwischen Tag und Nacht',
    tone: 'dark',
    icon: 'icon-compass-star',
    music: 'https://cdn.pixabay.com/download/audio/2022/03/07/audio_0d8c789a58.mp3?filename=northern-lights-20268.mp3',
    image: 'url("https://images.unsplash.com/photo-1440956485060-7e8a1c5a2d5c?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(135deg, #173a5c 0%, #2a6b83 48%, #f0c76a 100%)',
    overlay: 'linear-gradient(160deg, rgba(20,56,96,0.42), rgba(255,210,126,0.48))',
    vars: {
      '--bg': '#0f2232',
      '--bg-grad': 'radial-gradient(circle at 20% 24%, rgba(122,184,240,0.46), transparent 60%), radial-gradient(circle at 80% 12%, rgba(252,206,124,0.42), transparent 60%), #0a1926',
      '--bg-texture': 'radial-gradient(circle, rgba(250,222,150,0.16) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1440956485060-7e8a1c5a2d5c?auto=format&fit=crop&w=2200&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
      '--bg-art-filter': 'saturate(1.08) brightness(0.94)',
      '--bg-art-opacity': '0.5',
      '--bg-art-mobile': 'url("https://images.unsplash.com/photo-1440956485060-7e8a1c5a2d5c?auto=format&fit=crop&w=1200&q=80")',
      '--bg-art-mobile-position': 'center top',
      '--bg-art-mobile-size': 'cover',
      '--bg-art-mobile-filter': 'saturate(1.06) brightness(0.96)',
      '--bg-art-mobile-opacity': '0.58',
      '--fg': '#f2fbff',
      '--muted': '#a3bed3',
      '--primary': '#6cc5ff',
      '--primary-2': '#8dd7ff',
      '--danger': '#ff7a82',
      '--card': 'rgba(12,32,52,0.82)',
      '--input-surface': 'rgba(16,36,54,0.8)',
      '--card-border': 'rgba(112,200,255,0.36)',
      '--input-border': 'rgba(112,200,255,0.3)',
      '--border': 'rgba(220,240,255,0.16)',
      '--accent': '#ffd07c',
      '--glass': 'rgba(10,26,42,0.7)',
      '--shadow': '0 28px 56px rgba(6,18,32,0.56)'
    }
  },
  winterPalace: {
    label: 'Winter Palace',
    description: 'Eisblaues Petersburg & barocker Glanz',
    tone: 'cool',
    icon: 'icon-snowflake',
    music: 'https://cdn.pixabay.com/download/audio/2022/02/23/audio_d5d6b2e2ef.mp3?filename=royal-waltz-11075.mp3',
    image: 'url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #0e3b5e 0%, #3a98c4 55%, #c9f0ff 100%)',
    overlay: 'linear-gradient(160deg, rgba(18,94,136,0.38), rgba(255,255,255,0.42))',
    vars: {
      '--bg': '#051726',
      '--bg-grad': 'radial-gradient(circle at 80% 16%, rgba(132,210,255,0.42), transparent 60%), radial-gradient(circle at 18% 86%, rgba(48,140,190,0.36), transparent 62%), #04121f',
      '--bg-texture': 'radial-gradient(circle, rgba(180,226,255,0.18) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2200&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
      '--bg-art-filter': 'saturate(1.06) brightness(0.92)',
      '--bg-art-opacity': '0.52',
      '--bg-art-mobile': 'url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80")',
      '--bg-art-mobile-position': 'center top',
      '--bg-art-mobile-size': 'cover',
      '--bg-art-mobile-filter': 'saturate(1.04) brightness(0.95)',
      '--bg-art-mobile-opacity': '0.58',
      '--fg': '#e8f6ff',
      '--muted': '#9dc4dc',
      '--primary': '#78c7ff',
      '--primary-2': '#97dcff',
      '--danger': '#ff7fa6',
      '--card': 'rgba(10,34,50,0.82)',
      '--input-surface': 'rgba(16,42,60,0.8)',
      '--card-border': 'rgba(130,205,255,0.36)',
      '--input-border': 'rgba(130,205,255,0.32)',
      '--border': 'rgba(140,200,230,0.28)',
      '--accent': '#b8f0ff',
      '--glass': 'rgba(6,24,40,0.72)',
      '--shadow': '0 30px 60px rgba(4,18,36,0.55)'
    }
  },
  porcelain: {
    label: 'Porzellan Garten',
    description: 'Pastellblüten & zarte Ornamentik',
    tone: 'light',
    icon: 'icon-porcelain',
    music: 'https://cdn.pixabay.com/download/audio/2022/02/16/audio_7a82c20a5c.mp3?filename=tea-room-10757.mp3',
    image: 'url("https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(145deg, #f9cad4 0%, #f6eaff 55%, #a8ccff 100%)',
    overlay: 'linear-gradient(160deg, rgba(248,210,228,0.45), rgba(132,170,255,0.3))',
    vars: {
      '--bg': '#f9eef5',
      '--bg-grad': 'radial-gradient(circle at 20% 18%, rgba(255,206,226,0.52), transparent 58%), radial-gradient(circle at 78% 8%, rgba(184,206,255,0.42), transparent 60%), #f7f1f9',
      '--bg-texture': 'radial-gradient(circle, rgba(255,210,230,0.18) 0%, transparent 58%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=2200&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
      '--bg-art-filter': 'saturate(1.08) brightness(1.04)',
      '--bg-art-opacity': '0.36',
      '--bg-art-mobile': 'url("https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80")',
      '--bg-art-mobile-position': 'center top',
      '--bg-art-mobile-size': 'cover',
      '--bg-art-mobile-filter': 'saturate(1.08) brightness(1.06)',
      '--bg-art-mobile-opacity': '0.4',
      '--fg': '#2e283a',
      '--muted': '#7b6f8b',
      '--primary': '#c96aa4',
      '--primary-2': '#de8fba',
      '--danger': '#d45a78',
      '--card': 'rgba(255,252,255,0.82)',
      '--input-surface': 'rgba(255,255,255,0.9)',
      '--card-border': 'rgba(210,160,210,0.34)',
      '--input-border': 'rgba(170,145,195,0.26)',
      '--border': 'rgba(176,150,200,0.22)',
      '--accent': '#a6ceff',
      '--glass': 'rgba(255,248,255,0.76)',
      '--shadow': '0 26px 52px rgba(178,150,198,0.3)'
    }
  },
  volga: {
    label: 'Volga Dawn',
    description: 'Morgendunst über stillen Flussufern',
    tone: 'mist',
    icon: 'icon-river',
    music: 'https://cdn.pixabay.com/download/audio/2021/10/31/audio_dba7f2a7bc.mp3?filename=gentle-river-ambient-9603.mp3',
    image: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #1c2b44 0%, #3a6f81 55%, #b9dfe0 100%)',
    overlay: 'linear-gradient(160deg, rgba(34,82,112,0.42), rgba(196,224,220,0.38))',
    vars: {
      '--bg': '#0c1a25',
      '--bg-grad': 'radial-gradient(circle at 72% 14%, rgba(124,188,208,0.48), transparent 60%), radial-gradient(circle at 20% 86%, rgba(68,140,160,0.36), transparent 62%), #08121d',
      '--bg-texture': 'radial-gradient(circle, rgba(168,214,220,0.16) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2200&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
      '--bg-art-filter': 'saturate(1.06) brightness(0.94)',
      '--bg-art-opacity': '0.52',
      '--bg-art-mobile': 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80")',
      '--bg-art-mobile-position': 'center top',
      '--bg-art-mobile-size': 'cover',
      '--bg-art-mobile-filter': 'saturate(1.04) brightness(0.96)',
      '--bg-art-mobile-opacity': '0.58',
      '--fg': '#edf6f8',
      '--muted': '#9fb9c5',
      '--primary': '#5ab3c4',
      '--primary-2': '#76ced6',
      '--danger': '#ff7e88',
      '--card': 'rgba(12,32,46,0.82)',
      '--input-surface': 'rgba(18,36,48,0.8)',
      '--card-border': 'rgba(124,188,208,0.36)',
      '--input-border': 'rgba(124,188,208,0.3)',
      '--border': 'rgba(150,204,214,0.22)',
      '--accent': '#bae7e3',
      '--glass': 'rgba(10,28,40,0.7)',
      '--shadow': '0 28px 58px rgba(5,16,26,0.55)'
    }
  },
  troika: {
    label: 'Troika Trail',
    description: 'Winterliche Kutschfahrt durch den Schnee',
    tone: 'frost',
    icon: 'icon-troika',
    music: 'https://cdn.pixabay.com/download/audio/2021/12/14/audio_2b31a8b6ce.mp3?filename=winter-carriage-ambient-9959.mp3',
    image: 'url("https://images.unsplash.com/photo-1606820087567-efd6e5e6fe26?auto=format&fit=crop&w=1600&q=80")',
    preview: 'linear-gradient(140deg, #192641 0%, #4a7fa6 55%, #f1f6ff 100%)',
    overlay: 'linear-gradient(160deg, rgba(22,46,78,0.48), rgba(255,255,255,0.52))',
    vars: {
      '--bg': '#091524',
      '--bg-grad': 'radial-gradient(circle at 24% 18%, rgba(130,176,216,0.46), transparent 60%), radial-gradient(circle at 80% 12%, rgba(206,226,255,0.42), transparent 62%), #050d1a',
      '--bg-texture': 'radial-gradient(circle, rgba(200,230,255,0.16) 0%, transparent 60%)',
      '--bg-art': 'url("https://images.unsplash.com/photo-1606820087567-efd6e5e6fe26?auto=format&fit=crop&w=2200&q=80")',
      '--bg-art-position': 'center center',
      '--bg-art-size': 'cover',
      '--bg-art-filter': 'saturate(1.08) brightness(0.94)',
      '--bg-art-opacity': '0.55',
      '--bg-art-mobile': 'url("https://images.unsplash.com/photo-1606820087567-efd6e5e6fe26?auto=format&fit=crop&w=1200&q=80")',
      '--bg-art-mobile-position': 'center top',
      '--bg-art-mobile-size': 'cover',
      '--bg-art-mobile-filter': 'saturate(1.06) brightness(0.96)',
      '--bg-art-mobile-opacity': '0.6',
      '--fg': '#f0f7ff',
      '--muted': '#abc1d8',
      '--primary': '#6fb1e9',
      '--primary-2': '#8cc6f3',
      '--danger': '#ff7287',
      '--card': 'rgba(12,30,50,0.82)',
      '--input-surface': 'rgba(16,36,56,0.8)',
      '--card-border': 'rgba(140,194,230,0.36)',
      '--input-border': 'rgba(140,194,230,0.32)',
      '--border': 'rgba(158,204,236,0.24)',
      '--accent': '#d4f0ff',
      '--glass': 'rgba(8,20,36,0.72)',
      '--shadow': '0 30px 58px rgba(6,14,26,0.56)'
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


const CATEGORY_ART = {
  'Freunde treffen': {
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
    accent: '#74c0ff'
  },
  'Im Klassenzimmer': {
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80',
    accent: '#ffd166'
  },
  'Im Café': {
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=80',
    accent: '#ff9f68'
  },
  'Zu Hause bei der Familie': {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1600&q=80',
    accent: '#f4a261'
  },
  'Freizeit planen': {
    image: 'https://images.unsplash.com/photo-1529158062015-cad636e69505?auto=format&fit=crop&w=1600&q=80',
    accent: '#9d4edd'
  },
  'Unterwegs in der Stadt': {
    image: 'https://images.unsplash.com/photo-1470123808288-1e59739f54da?auto=format&fit=crop&w=1600&q=80',
    accent: '#2ec4b6'
  },
  'Stadtrundfahrt in Moskau': {
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1600&q=80',
    accent: '#ff6f91'
  },
  'Reisevorbereitung': {
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80',
    accent: '#48bfe3'
  },
  'Im Gastfamilienhaus': {
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
    accent: '#ffb5a7'
  },
  'Kultur & Theater': {
    image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1600&q=80',
    accent: '#b5179e'
  },
  'Kulinarische Pause': {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    accent: '#f77f00'
  },
  'Projektarbeit Schule': {
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80',
    accent: '#4361ee'
  },
  'Klimaprojekt': {
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    accent: '#2ec4b6'
  },
  'Medienlabor': {
    image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&w=1600&q=80',
    accent: '#ffb703'
  },
  'Freiwilligenarbeit': {
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80',
    accent: '#06d6a0'
  },
  'Technologie-Workshop': {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    accent: '#4895ef'
  },
  'Berufsberatung': {
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80',
    accent: '#ffba08'
  },
  'Internationale Begegnung': {
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80',
    accent: '#ef476f'
  },
  'Gesellschaftliche Debatte': {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    accent: '#f94144'
  },
  'Politisches Planspiel': {
    image: 'https://images.unsplash.com/photo-1530031669806-38fef3f0d1cf?auto=format&fit=crop&w=1600&q=80',
    accent: '#577590'
  },
  'Wirtschaft & Innovation': {
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
    accent: '#43aa8b'
  },
  'Kulturelles Symposium': {
    image: 'https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&w=1600&q=80',
    accent: '#f3722c'
  },
  'Medienkritik': {
    image: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1600&q=80',
    accent: '#4d908e'
  },
  'Zukunftsvisionen': {
    image: 'https://images.unsplash.com/photo-1482192597420-4817fdd7e8b0?auto=format&fit=crop&w=1600&q=80',
    accent: '#9d4edd'
  }
};

const BUILT_IN_WORDS = {
  grade7: [
    { id: 'g7-001', cat: 'Freunde treffen', ru: 'Привет, давай встретимся у метро в пять часов.', de: 'Hallo, lass uns um fünf Uhr an der U-Bahn treffen.' },
    { id: 'g7-002', cat: 'Freunde treffen', ru: 'Я купил билеты в кино, приходи пораньше, чтобы успеть за попкорном.', de: 'Ich habe Kinokarten gekauft, komm etwas früher, damit wir Popcorn schaffen.' },
    { id: 'g7-003', cat: 'Freunde treffen', ru: 'После уроков пойдём гулять вдоль набережной, там сегодня красиво.', de: 'Nach dem Unterricht gehen wir an der Promenade spazieren, dort ist es heute schön.' },
    { id: 'g7-004', cat: 'Freunde treffen', ru: 'Может быть, сыграем в настольные игры у меня дома вечером?', de: 'Vielleicht spielen wir abends bei mir zuhause Brettspiele?' },
    { id: 'g7-005', cat: 'Freunde treffen', ru: 'Напиши в чат, если задержишься, мы подождём у фонтана.', de: 'Schreib in den Chat, wenn du dich verspätest, wir warten am Brunnen.' },
    { id: 'g7-006', cat: 'Im Klassenzimmer', ru: 'Учитель просил нас подготовить короткую презентацию о своём хобби.', de: 'Der Lehrer bat uns, eine kurze Präsentation über unser Hobby vorzubereiten.' },
    { id: 'g7-007', cat: 'Im Klassenzimmer', ru: 'Ты можешь одолжить мне тетрадь по истории? Я пропустил прошлый урок.', de: 'Kannst du mir das Geschichtsheft leihen? Ich habe die letzte Stunde verpasst.' },
    { id: 'g7-008', cat: 'Im Klassenzimmer', ru: 'На перемене пойдём к библиотеке, там открылась новая выставка.', de: 'In der Pause gehen wir zur Bibliothek, dort hat eine neue Ausstellung eröffnet.' },
    { id: 'g7-009', cat: 'Im Klassenzimmer', ru: 'Контрольная работа перенесена на пятницу, так что есть время повторить.', de: 'Die Klassenarbeit wurde auf Freitag verschoben, also haben wir Zeit zu wiederholen.' },
    { id: 'g7-010', cat: 'Im Klassenzimmer', ru: 'После звонка не забудь отдать учителю подписанный дневник.', de: 'Vergiss nach dem Klingeln nicht, dem Lehrer das unterschriebene Tagebuch zu geben.' },
    { id: 'g7-011', cat: 'Im Café', ru: 'Здравствуйте, нам, пожалуйста, два какао и один сырник со сметаной.', de: 'Guten Tag, für uns bitte zwei Kakao und einen Syrnik mit Sauerrahm.' },
    { id: 'g7-012', cat: 'Im Café', ru: 'У вас есть свободный столик у окна? Мы хотим любоваться улицей.', de: 'Haben Sie einen freien Tisch am Fenster? Wir möchten die Straße betrachten.' },
    { id: 'g7-013', cat: 'Im Café', ru: 'Можно добавить в чай немного мёда, он слишком горячий.', de: 'Können Sie etwas Honig in den Tee geben? Er ist zu heiß.' },
    { id: 'g7-014', cat: 'Im Café', ru: 'Принесите счёт, пожалуйста, мы торопимся на спектакль.', de: 'Bringen Sie die Rechnung bitte, wir beeilen uns zum Theater.' },
    { id: 'g7-015', cat: 'Im Café', ru: 'Давай поделим десерт поровну, торт выглядит слишком вкусным.', de: 'Lass uns das Dessert gerecht teilen, der Kuchen sieht zu lecker aus.' },
    { id: 'g7-016', cat: 'Zu Hause bei der Familie', ru: 'Мама просит тебя помочь накрыть на стол к ужину.', de: 'Mama bittet dich, beim Tischdecken fürs Abendessen zu helfen.' },
    { id: 'g7-017', cat: 'Zu Hause bei der Familie', ru: 'Бабушка рассказывает историю о своей школьной жизни, слушай внимательно.', de: 'Die Großmutter erzählt eine Geschichte über ihre Schulzeit, hör aufmerksam zu.' },
    { id: 'g7-018', cat: 'Zu Hause bei der Familie', ru: 'Не забудь покормить кота и поменять ему воду.', de: 'Vergiss nicht, die Katze zu füttern und ihr Wasser zu wechseln.' },
    { id: 'g7-019', cat: 'Zu Hause bei der Familie', ru: 'Давай вместе подготовим гостиную к приходу друзей.', de: 'Lass uns gemeinsam das Wohnzimmer für die Freunde vorbereiten.' },
    { id: 'g7-020', cat: 'Zu Hause bei der Familie', ru: 'Папа установил новую полку, туда можно поставить книги по русскому.', de: 'Papa hat ein neues Regal angebracht, dort können wir die Russisch-Bücher hinstellen.' },
    { id: 'g7-021', cat: 'Freizeit planen', ru: 'После школы мы хотим покататься на роликах в парке.', de: 'Nach der Schule wollen wir im Park Inlineskates fahren.' },
    { id: 'g7-022', cat: 'Freizeit planen', ru: 'Запишись на мастер-класс по рисованию, он начнётся в субботу.', de: 'Melde dich für den Zeichenworkshop an, er beginnt am Samstag.' },
    { id: 'g7-023', cat: 'Freizeit planen', ru: 'В субботу состоится школьный концерт, не забудь пригласить друзей.', de: 'Am Samstag findet das Schulkonzert statt, vergiss nicht deine Freunde einzuladen.' },
    { id: 'g7-024', cat: 'Freizeit planen', ru: 'Я скачал новое приложение для изучения языков, давай попробуем вместе.', de: 'Ich habe eine neue Sprachlern-App heruntergeladen, lass sie uns gemeinsam ausprobieren.' },
    { id: 'g7-025', cat: 'Freizeit planen', ru: 'Если будет дождь, устроим дома киновечер с русскими субтитрами.', de: 'Wenn es regnet, machen wir zuhause einen Filmabend mit russischen Untertiteln.' },
    { id: 'g7-026', cat: 'Unterwegs in der Stadt', ru: 'Автобус задерживается, поэтому поедем на метро до центра.', de: 'Der Bus verspätet sich, daher fahren wir mit der U-Bahn in die Innenstadt.' },
    { id: 'g7-027', cat: 'Unterwegs in der Stadt', ru: 'Спроси у прохожего, где ближайший книжный магазин.', de: 'Frag einen Passanten, wo der nächste Buchladen ist.' },
    { id: 'g7-028', cat: 'Unterwegs in der Stadt', ru: 'На площади проходит ярмарка, там продают ремёсла и пирожки.', de: 'Auf dem Platz findet ein Markt statt, dort gibt es Handwerk und Piroggen.' },
    { id: 'g7-029', cat: 'Unterwegs in der Stadt', ru: 'Давай сделаем фото на фоне старинного театра.', de: 'Lass uns ein Foto vor dem alten Theater machen.' },
    { id: 'g7-030', cat: 'Unterwegs in der Stadt', ru: 'Перед выходом проверим расписание трамваев на табло.', de: 'Vor dem Losgehen prüfen wir den Straßenbahnfahrplan auf der Anzeigetafel.' }
  ],
  grade8: [
    { id: 'g8-001', cat: 'Stadtrundfahrt in Moskau', ru: 'Добро пожаловать на экскурсию, наш автобус отправляется от Кремля через пять минут.', de: 'Willkommen zur Stadtrundfahrt, unser Bus fährt in fünf Minuten vom Kreml ab.' },
    { id: 'g8-002', cat: 'Stadtrundfahrt in Moskau', ru: 'Посмотрите направо, там открывается вид на Москва-реку и парк Зарядье.', de: 'Schaut nach rechts, dort eröffnet sich der Blick auf die Moskwa und den Park Sarjadje.' },
    { id: 'g8-003', cat: 'Stadtrundfahrt in Moskau', ru: 'Мы сделаем остановку у Третьяковской галереи, чтобы вы могли сделать фотографии.', de: 'Wir machen einen Halt an der Tretjakow-Galerie, damit ihr Fotos machen könnt.' },
    { id: 'g8-004', cat: 'Stadtrundfahrt in Moskau', ru: 'Не отходите далеко от группы, в центре много туристов и легко потеряться.', de: 'Entfernt euch nicht weit von der Gruppe, im Zentrum gibt es viele Touristen und man kann sich leicht verirren.' },
    { id: 'g8-005', cat: 'Stadtrundfahrt in Moskau', ru: 'После экскурсии у вас будет свободный час для сувениров на Арбате.', de: 'Nach der Führung habt ihr eine freie Stunde für Souvenirs auf dem Arbat.' },
    { id: 'g8-006', cat: 'Reisevorbereitung', ru: 'Проверим, все ли взяли загранпаспорт и страховой полис.', de: 'Wir prüfen, ob alle den Reisepass und die Versicherungspolice dabeihaben.' },
    { id: 'g8-007', cat: 'Reisevorbereitung', ru: 'Я отправил маршрут в общий чат, распечатайте карту на всякий случай.', de: 'Ich habe die Route im Gruppenchat geschickt, druckt zur Sicherheit eine Karte aus.' },
    { id: 'g8-008', cat: 'Reisevorbereitung', ru: 'Не забудь зарядное устройство и переходник для розетки.', de: 'Vergiss das Ladegerät und den Steckdosenadapter nicht.' },
    { id: 'g8-009', cat: 'Reisevorbereitung', ru: 'Мы договаривались встретиться на вокзале за полчаса до отправления поезда.', de: 'Wir wollten uns eine halbe Stunde vor Abfahrt des Zuges am Bahnhof treffen.' },
    { id: 'g8-010', cat: 'Reisevorbereitung', ru: 'Положи в ручную кладь тёплую кофту, в поезде ночью бывает прохладно.', de: 'Packe einen warmen Pullover ins Handgepäck, nachts wird es im Zug kühl.' },
    { id: 'g8-011', cat: 'Im Gastfamilienhaus', ru: 'Хозяйка приготовила борщ, обязательно похвали её кулинарные таланты.', de: 'Die Gastgeberin hat Borschtsch gekocht, lobe unbedingt ihre Kochkünste.' },
    { id: 'g8-012', cat: 'Im Gastfamilienhaus', ru: 'Не забудь снять обувь у входа, в их доме так принято.', de: 'Vergiss nicht, am Eingang die Schuhe auszuziehen, so ist es in ihrem Haus üblich.' },
    { id: 'g8-013', cat: 'Im Gastfamilienhaus', ru: 'Спросим, чем мы можем помочь накрыть к чаю и достанем варенье.', de: 'Fragen wir, wie wir beim Teetisch helfen können, und holen wir die Marmelade.' },
    { id: 'g8-014', cat: 'Im Gastfamilienhaus', ru: 'Вечером семья предлагает сыграть в настольные игры, согласись обязательно.', de: 'Am Abend schlägt die Familie vor, Brettspiele zu spielen – sag unbedingt zu.' },
    { id: 'g8-015', cat: 'Im Gastfamilienhaus', ru: 'Если что-то непонятно, вежливо переспроси, они любят объяснять.', de: 'Wenn etwas unklar ist, frag höflich nach, sie erklären es gern.' },
    { id: 'g8-016', cat: 'Kultur & Theater', ru: 'Перед спектаклем мы обсудим сюжет пьесы, чтобы легче было понимать.', de: 'Vor dem Stück besprechen wir die Handlung, damit das Verständnis leichter fällt.' },
    { id: 'g8-017', cat: 'Kultur & Theater', ru: 'В театре нужно выключить телефоны и говорить шёпотом.', de: 'Im Theater müssen die Handys ausgeschaltet und nur geflüstert werden.' },
    { id: 'g8-018', cat: 'Kultur & Theater', ru: 'После представления у нас встреча с актёром, подготовьте вопросы.', de: 'Nach der Vorstellung haben wir ein Treffen mit einem Schauspieler, bereitet Fragen vor.' },
    { id: 'g8-019', cat: 'Kultur & Theater', ru: 'Обратите внимание на костюмы, они воссоздают моду XIX века.', de: 'Achtet auf die Kostüme, sie rekonstruieren die Mode des 19. Jahrhunderts.' },
    { id: 'g8-020', cat: 'Kultur & Theater', ru: 'В программке есть краткая биография автора, прочитайте её в антракте.', de: 'Im Programmheft steht eine kurze Biografie des Autors, lest sie in der Pause.' },
    { id: 'g8-021', cat: 'Kulinarische Pause', ru: 'Закажем блины с творогом и мятный чай, это фирменное блюдо.', de: 'Bestellen wir Blini mit Quark und Minztee, das ist eine Spezialität.' },
    { id: 'g8-022', cat: 'Kulinarische Pause', ru: 'Спросите официанта, можно ли расплатиться картой МИР.', de: 'Fragt den Kellner, ob man mit der MIR-Karte bezahlen kann.' },
    { id: 'g8-023', cat: 'Kulinarische Pause', ru: 'Если будет очередь, предложи занять столик на улице под зонтом.', de: 'Falls es eine Schlange gibt, schlage vor, draußen unter dem Schirm Platz zu nehmen.' },
    { id: 'g8-024', cat: 'Kulinarische Pause', ru: 'Не забудь оставить чаевые, сервис был очень доброжелательный.', de: 'Vergiss nicht, Trinkgeld zu geben, der Service war sehr freundlich.' },
    { id: 'g8-025', cat: 'Kulinarische Pause', ru: 'Сфотографируем витрину с пирожными для школьного блога.', de: 'Fotografieren wir die Kuchentheke für den Schulblog.' },
    { id: 'g8-026', cat: 'Projektarbeit Schule', ru: 'Наша команда готовит видеорепортаж о российской музыке.', de: 'Unser Team bereitet einen Videobericht über russische Musik vor.' },
    { id: 'g8-027', cat: 'Projektarbeit Schule', ru: 'Давай разделим обязанности: ты монтируешь видео, а я озвучиваю текст.', de: 'Lass uns die Aufgaben teilen: Du schneidest das Video, und ich spreche den Text ein.' },
    { id: 'g8-028', cat: 'Projektarbeit Schule', ru: 'Срок сдачи проекта – следующая среда, нужно закончить за выходные.', de: 'Abgabe des Projekts ist nächsten Mittwoch, wir müssen es am Wochenende fertigstellen.' },
    { id: 'g8-029', cat: 'Projektarbeit Schule', ru: 'Учитель просил добавить цитаты из интервью с музыкантом.', de: 'Der Lehrer bat darum, Zitate aus dem Interview mit dem Musiker einzubauen.' },
    { id: 'g8-030', cat: 'Projektarbeit Schule', ru: 'Перед показом проверим звук на колонках, чтобы не было помех.', de: 'Vor der Präsentation testen wir den Ton auf den Lautsprechern, damit es keine Störungen gibt.' }
  ],
  grade9: [
    { id: 'g9-001', cat: 'Klimaprojekt', ru: 'Мы измеряем качество воздуха возле школы и записываем результаты в таблицу.', de: 'Wir messen die Luftqualität nahe der Schule und tragen die Ergebnisse in eine Tabelle ein.' },
    { id: 'g9-002', cat: 'Klimaprojekt', ru: 'Не забудь взять перчатки, мы будем сажать молодые деревья во дворе.', de: 'Vergiss die Handschuhe nicht, wir pflanzen junge Bäume im Hof.' },
    { id: 'g9-003', cat: 'Klimaprojekt', ru: 'На собрании мы обсудим, как сократить использование пластика в столовой.', de: 'In der Besprechung diskutieren wir, wie wir den Plastikverbrauch in der Mensa senken.' },
    { id: 'g9-004', cat: 'Klimaprojekt', ru: 'Подготовь короткую речь о том, почему сортировка мусора важна.', de: 'Bereite eine kurze Rede darüber vor, warum Mülltrennung wichtig ist.' },
    { id: 'g9-005', cat: 'Klimaprojekt', ru: 'После уроков мы развесим плакаты с советами по экономии энергии.', de: 'Nach dem Unterricht hängen wir Plakate mit Energiespartipps auf.' },
    { id: 'g9-006', cat: 'Medienlabor', ru: 'Сегодня мы записываем радиопередачу о школьных новостях.', de: 'Heute nehmen wir eine Radiosendung über Schulnachrichten auf.' },
    { id: 'g9-007', cat: 'Medienlabor', ru: 'Проверь уровень микрофона, чтобы звук был чистым.', de: 'Überprüfe den Mikrofonpegel, damit der Ton klar ist.' },
    { id: 'g9-008', cat: 'Medienlabor', ru: 'Для монтажа интервью используй плавные переходы и титры.', de: 'Verwende für den Schnitt des Interviews weiche Übergänge und Untertitel.' },
    { id: 'g9-009', cat: 'Medienlabor', ru: 'Опубликуем подкаст в полдень, чтобы подписчики успели послушать его по пути домой.', de: 'Wir veröffentlichen den Podcast mittags, damit die Abonnenten ihn auf dem Heimweg hören können.' },
    { id: 'g9-010', cat: 'Medienlabor', ru: 'Напиши краткое описание выпуска и добавь ссылку на опрос.', de: 'Schreibe eine kurze Episodenbeschreibung und füge den Link zur Umfrage hinzu.' },
    { id: 'g9-011', cat: 'Freiwilligenarbeit', ru: 'Завтра мы помогаем в приюте, нужно разобрать коробки с одеждой.', de: 'Morgen helfen wir im Obdachlosenheim, wir müssen Kleiderkartons sortieren.' },
    { id: 'g9-012', cat: 'Freiwilligenarbeit', ru: 'Составим список задач, чтобы распределить работу между волонтёрами.', de: 'Wir erstellen eine Aufgabenliste, um die Arbeit unter den Freiwilligen aufzuteilen.' },
    { id: 'g9-013', cat: 'Freiwilligenarbeit', ru: 'Поговори с координатором, если нужна дополнительная помощь.', de: 'Sprich mit dem Koordinator, wenn zusätzliche Hilfe nötig ist.' },
    { id: 'g9-014', cat: 'Freiwilligenarbeit', ru: 'После мероприятия поблагодарим гостей и раздадим информационные буклеты.', de: 'Nach der Veranstaltung danken wir den Gästen und verteilen Infobroschüren.' },
    { id: 'g9-015', cat: 'Freiwilligenarbeit', ru: 'Не забудь заполнить отчёт о волонтёрских часах для школы.', de: 'Vergiss nicht, den Bericht über die freiwilligen Stunden für die Schule auszufüllen.' },
    { id: 'g9-016', cat: 'Technologie-Workshop', ru: 'Мы программируем робота, чтобы он смог проехать лабиринт.', de: 'Wir programmieren einen Roboter, damit er das Labyrinth durchfährt.' },
    { id: 'g9-017', cat: 'Technologie-Workshop', ru: 'Настрой датчик расстояния, иначе он столкнётся со стеной.', de: 'Stell den Abstandssensor ein, sonst stößt er gegen die Wand.' },
    { id: 'g9-018', cat: 'Technologie-Workshop', ru: 'После теста обсудим, какие алгоритмы сработали лучше.', de: 'Nach dem Test besprechen wir, welche Algorithmen besser funktionierten.' },
    { id: 'g9-019', cat: 'Technologie-Workshop', ru: 'Подготовь презентацию о том, как использовать 3D-принтер в школьных проектах.', de: 'Bereite eine Präsentation vor, wie man den 3D-Drucker in Schulprojekten nutzt.' },
    { id: 'g9-020', cat: 'Technologie-Workshop', ru: 'Сделаем короткое видео, чтобы показать наш эксперимент на ярмарке науки.', de: 'Wir drehen ein kurzes Video, um unser Experiment auf der Wissenschaftsmesse zu zeigen.' },
    { id: 'g9-021', cat: 'Berufsberatung', ru: 'Консультант попросил нас заполнить анкету о наших интересах.', de: 'Der Berater bat uns, einen Fragebogen über unsere Interessen auszufüllen.' },
    { id: 'g9-022', cat: 'Berufsberatung', ru: 'Мы изучим разные профили университетов и сравним программы.', de: 'Wir schauen uns verschiedene Studienprofile an und vergleichen die Programme.' },
    { id: 'g9-023', cat: 'Berufsberatung', ru: 'Запиши вопросы для онлайн-встречи с выпускниками.', de: 'Notiere Fragen für das Online-Treffen mit den Absolventen.' },
    { id: 'g9-024', cat: 'Berufsberatung', ru: 'Проверь резюме на ошибки, прежде чем отправлять его наставнику.', de: 'Überprüfe den Lebenslauf auf Fehler, bevor du ihn an den Mentor sendest.' },
    { id: 'g9-025', cat: 'Berufsberatung', ru: 'После мастер-класса мы обсудим, какие навыки нужно развивать дальше.', de: 'Nach dem Workshop besprechen wir, welche Fähigkeiten wir weiterentwickeln sollten.' },
    { id: 'g9-026', cat: 'Internationale Begegnung', ru: 'Сегодня мы готовим презентацию о своём городе для гостей из Польши.', de: 'Heute bereiten wir eine Präsentation über unsere Stadt für Gäste aus Polen vor.' },
    { id: 'g9-027', cat: 'Internationale Begegnung', ru: 'Давай выучим несколько приветствий на их языке, чтобы сделать сюрприз.', de: 'Lass uns einige Grüße in ihrer Sprache lernen, um sie zu überraschen.' },
    { id: 'g9-028', cat: 'Internationale Begegnung', ru: 'Во время культурного вечера мы покажем народный танец.', de: 'Während des Kulturabends zeigen wir einen Volkstanz.' },
    { id: 'g9-029', cat: 'Internationale Begegnung', ru: 'Запланируй совместную игру, чтобы команды быстро познакомились.', de: 'Plane ein gemeinsames Spiel, damit die Teams sich schnell kennenlernen.' },
    { id: 'g9-030', cat: 'Internationale Begegnung', ru: 'После встречи обменяемся контактами и создадим общий фотоколлаж.', de: 'Nach dem Treffen tauschen wir Kontakte aus und erstellen eine gemeinsame Fotocollage.' }
  ],
  grade10: [
    { id: 'g10-001', cat: 'Gesellschaftliche Debatte', ru: 'Мы обсуждаем, как молодёжь может влиять на решения в своём городе.', de: 'Wir diskutieren, wie Jugendliche Entscheidungen in ihrer Stadt beeinflussen können.' },
    { id: 'g10-002', cat: 'Gesellschaftliche Debatte', ru: 'Подготовь аргументы за и против добровольного социального года.', de: 'Bereite Argumente für und gegen ein freiwilliges soziales Jahr vor.' },
    { id: 'g10-003', cat: 'Gesellschaftliche Debatte', ru: 'Во время дебатов важно уважительно реагировать на критику.', de: 'Während der Debatte ist es wichtig, respektvoll auf Kritik zu reagieren.' },
    { id: 'g10-004', cat: 'Gesellschaftliche Debatte', ru: 'Модератор попросит каждого спикера уложиться в три минуты.', de: 'Der Moderator bittet jeden Sprecher, sich auf drei Minuten zu beschränken.' },
    { id: 'g10-005', cat: 'Gesellschaftliche Debatte', ru: 'После обсуждения мы составим резолюцию с общими предложениями.', de: 'Nach der Diskussion verfassen wir eine Resolution mit gemeinsamen Vorschlägen.' },
    { id: 'g10-006', cat: 'Politisches Planspiel', ru: 'Наша фракция готовит поправку к законопроекту об экологии.', de: 'Unsere Fraktion bereitet einen Änderungsantrag zum Umweltgesetz vor.' },
    { id: 'g10-007', cat: 'Politisches Planspiel', ru: 'Договоримся о коалиции, чтобы набрать большинство голосов.', de: 'Wir vereinbaren eine Koalition, um die Mehrheit der Stimmen zu erreichen.' },
    { id: 'g10-008', cat: 'Politisches Planspiel', ru: 'Перед голосованием мы представим краткое обоснование наших идей.', de: 'Vor der Abstimmung präsentieren wir eine kurze Begründung unserer Ideen.' },
    { id: 'g10-009', cat: 'Politisches Planspiel', ru: 'Секретарь заседания записывает все решения в протокол.', de: 'Der Sitzungssekretär protokolliert alle Beschlüsse.' },
    { id: 'g10-010', cat: 'Politisches Planspiel', ru: 'После игры сравним наши выводы с реальными примерами из новостей.', de: 'Nach dem Planspiel vergleichen wir unsere Ergebnisse mit realen Beispielen aus den Nachrichten.' },
    { id: 'g10-011', cat: 'Wirtschaft & Innovation', ru: 'Мы анализируем бизнес-модель стартапа, который разрабатывает умные дома.', de: 'Wir analysieren das Geschäftsmodell eines Start-ups, das Smart Homes entwickelt.' },
    { id: 'g10-012', cat: 'Wirtschaft & Innovation', ru: 'Рассчитай бюджет проекта и учти расходы на маркетинг.', de: 'Berechne das Projektbudget und berücksichtige die Marketingkosten.' },
    { id: 'g10-013', cat: 'Wirtschaft & Innovation', ru: 'Инвестор хочет услышать, какую социальную пользу принесёт наше решение.', de: 'Der Investor möchte hören, welchen gesellschaftlichen Nutzen unsere Lösung bringt.' },
    { id: 'g10-014', cat: 'Wirtschaft & Innovation', ru: 'Подготовь слайды с графиками роста и потенциальными рисками.', de: 'Bereite Folien mit Wachstumskurven und potenziellen Risiken vor.' },
    { id: 'g10-015', cat: 'Wirtschaft & Innovation', ru: 'После презентации ответь на вопросы о конкурентах на рынке.', de: 'Beantworte nach der Präsentation Fragen zu den Wettbewerbern auf dem Markt.' },
    { id: 'g10-016', cat: 'Kulturelles Symposium', ru: 'Мы организуем круглые столы о влиянии литературы на общество.', de: 'Wir organisieren Roundtables über den Einfluss der Literatur auf die Gesellschaft.' },
    { id: 'g10-017', cat: 'Kulturelles Symposium', ru: 'Приглашённый историк расскажет о развитии русской архитектуры.', de: 'Der eingeladene Historiker berichtet über die Entwicklung der russischen Architektur.' },
    { id: 'g10-018', cat: 'Kulturelles Symposium', ru: 'Для выставки нужно подготовить аннотации к каждому произведению искусства.', de: 'Für die Ausstellung müssen wir Anmerkungen zu jedem Kunstwerk vorbereiten.' },
    { id: 'g10-019', cat: 'Kulturelles Symposium', ru: 'Во время перерыва прозвучит живая музыка студентов консерватории.', de: 'In der Pause spielt Live-Musik von Konservatoriumsstudenten.' },
    { id: 'g10-020', cat: 'Kulturelles Symposium', ru: 'После завершения симпозиума участники обменяются издательскими планами.', de: 'Nach dem Symposium tauschen die Teilnehmer Verlagspläne aus.' },
    { id: 'g10-021', cat: 'Medienkritik', ru: 'Мы анализируем, как новостные порталы формулируют заголовки.', de: 'Wir analysieren, wie Nachrichtenportale ihre Überschriften formulieren.' },
    { id: 'g10-022', cat: 'Medienkritik', ru: 'Сравни факты в статье с официальными данными и отметь расхождения.', de: 'Vergleiche die Fakten des Artikels mit offiziellen Daten und markiere Abweichungen.' },
    { id: 'g10-023', cat: 'Medienkritik', ru: 'Подготовь комментарий о роли блогеров в общественных дискуссиях.', de: 'Bereite einen Kommentar zur Rolle von Bloggern in öffentlichen Debatten vor.' },
    { id: 'g10-024', cat: 'Medienkritik', ru: 'На семинаре мы обсудим, как распознавать манипулятивные фотографии.', de: 'Im Seminar besprechen wir, wie man manipulative Fotos erkennt.' },
    { id: 'g10-025', cat: 'Medienkritik', ru: 'В конце занятия каждый представит короткую рецензию на выбранный материал.', de: 'Zum Schluss präsentiert jeder eine kurze Rezension zum gewählten Material.' },
    { id: 'g10-026', cat: 'Zukunftsvisionen', ru: 'Представь город будущего, где общественный транспорт работает на водороде.', de: 'Stell dir eine Stadt der Zukunft vor, in der der öffentliche Verkehr mit Wasserstoff fährt.' },
    { id: 'g10-027', cat: 'Zukunftsvisionen', ru: 'Опиши, как технологии помогут решить проблему доступного жилья.', de: 'Beschreibe, wie Technologie helfen wird, das Problem des bezahlbaren Wohnraums zu lösen.' },
    { id: 'g10-028', cat: 'Zukunftsvisionen', ru: 'Нарисуй карту районов, где природа и архитектура соединены гармонично.', de: 'Zeichne eine Karte von Vierteln, in denen Natur und Architektur harmonisch verbunden sind.' },
    { id: 'g10-029', cat: 'Zukunftsvisionen', ru: 'После мозгового штурма выберем три идеи и разработаем прототипы.', de: 'Nach dem Brainstorming wählen wir drei Ideen aus und entwickeln Prototypen.' },
    { id: 'g10-030', cat: 'Zukunftsvisionen', ru: 'Подготовь вдохновляющую речь о том, почему важно мечтать смело.', de: 'Bereite eine inspirierende Rede darüber vor, warum es wichtig ist, mutig zu träumen.' }
  ]
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
  updateLandingPreview();
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
      syncThemeMusic();
      save();
    };
  }

  const nextBtn = $('#btn-next');
  if (nextBtn) nextBtn.onclick = () => nextCard();

  const revealBtn = $('#btn-reveal');
  if (revealBtn) {
    revealBtn.onclick = () => {
      const prompt = $('#prompt');
      if (!prompt) return;
      const answer = prompt.dataset.answer;
      $('#feedback').textContent = answer ? `Lösung: ${answer}` : 'Keine Lösung gefunden.';
    };
  }

  const sayBtn = $('#btn-say');
  if (sayBtn) {
    sayBtn.onclick = () => {
      const prompt = $('#prompt');
      const text = prompt?.dataset.ru || prompt?.textContent || '';
      speak(text, 'ru-RU');
    };
  }

  const practiceSayBtn = $('#btn-practice-say');
  if (practiceSayBtn) {
    practiceSayBtn.onclick = () => {
      const prompt = $('#practice-prompt');
      const text = prompt?.dataset.ru || prompt?.textContent || '';
      speak(text, 'ru-RU');
    };
  }

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
      syncThemeMusic();
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
  el.volume = 0.35;
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

function updateLandingPreview() {
  const preview = $('#landing-preview');
  if (!preview) return;
  const theme = THEMES[state.theme] || THEMES.midnight;
  const overlayFallbackDark = 'linear-gradient(160deg, rgba(8,12,28,0.65), rgba(3,5,12,0.88))';
  const overlayFallbackLight = 'linear-gradient(155deg, rgba(255,255,255,0.7), rgba(240,230,210,0.4))';
  const overlay = theme.overlay || (theme.tone === 'light' ? overlayFallbackLight : overlayFallbackDark);
  const image = theme.image || theme.vars['--bg-art'] || '';
  preview.dataset.tone = theme.tone || 'dark';
  preview.style.setProperty('--preview-overlay', overlay);
  preview.style.setProperty('--preview-image', image || 'none');
  const art = $('#landing-preview-art');
  if (art) art.style.backgroundImage = image || 'none';
  const overlayEl = $('#landing-preview-overlay');
  if (overlayEl) overlayEl.style.background = overlay;
  const title = $('#landing-preview-title');
  if (title) title.textContent = theme.label;
  const desc = $('#landing-preview-desc');
  if (desc) desc.textContent = theme.description;
  const iconUse = $('#landing-preview-icon');
  if (iconUse) iconUse.setAttribute('href', `#${theme.icon || 'icon-palette'}`);
}

function setTheme(themeKey) {
  if (!THEMES[themeKey]) return;
  state.theme = themeKey;
  themeApply();
  setThemeMusic(themeKey);
  syncThemeMusic();
  highlightActiveTheme();
  updateLandingPreview();
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
  if (show) updateLandingPreview();
}

function normalizeDataset(list, prefix) {
  return list.map((item, idx) => {
    const art = CATEGORY_ART[item.cat] || {};
    return {
      id: item.id || `${prefix}-${idx}`,
      cat: item.cat || 'Allgemein',
      ru: item.ru,
      de: item.de,
      image: item.image || art.image || '',
      accent: item.accent || art.accent || '#7f8cff'
    };
  }).filter((item) => item.ru && item.de);
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

function updateScene(prefix, item) {
  const visual = document.getElementById(`${prefix}-visual`);
  const category = document.getElementById(`${prefix}-category`);
  const accent = item?.accent || CATEGORY_ART[item?.cat]?.accent || '#7f8cff';
  if (visual) {
    if (item?.image) {
      visual.style.setProperty('--scene-image', `url("${item.image}")`);
    } else {
      visual.style.setProperty('--scene-image', 'none');
    }
    visual.style.setProperty('--scene-accent', accent);
  }
  if (category) {
    if (item?.cat) {
      category.hidden = false;
      category.textContent = item.cat;
      category.style.setProperty('--tag-accent', accent);
    } else {
      category.hidden = true;
      category.textContent = '';
      category.style.removeProperty('--tag-accent');
    }
  }
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
  const promptEl = $('#prompt');
  if (promptEl) {
    promptEl.textContent = promptText;
    promptEl.dataset.answer = promptSide === 'ru' ? item.de : item.ru;
    promptEl.dataset.ru = item.ru;
  }
  updateScene('prompt', item);

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
  const practicePrompt = $('#practice-prompt');
  if (practicePrompt) {
    practicePrompt.textContent = showRussian ? item.ru : item.de;
    practicePrompt.dataset.answer = showRussian ? item.de : item.ru;
    practicePrompt.dataset.ru = item.ru;
  }
  updateScene('practice', item);
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
