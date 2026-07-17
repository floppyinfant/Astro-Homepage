// =====================
// STARFIELD ANIMATION
// =====================
class Starfield {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.stars = [];
    this.resize();
    this.init();
    this.animate();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const count = Math.min(250, Math.floor((this.canvas.width * this.canvas.height) / 6000));
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 1.8 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.stars.forEach(star => {
      star.y += star.speed;
      star.opacity += star.twinkle * star.twinkleDir;
      if (star.opacity > 1 || star.opacity < 0.2) star.twinkleDir *= -1;
      if (star.y > this.canvas.height) {
        star.y = 0;
        star.x = Math.random() * this.canvas.width;
      }

      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      this.ctx.fill();
    });
    requestAnimationFrame(() => this.animate());
  }
}

// =====================
// GALLERY DATA
// =====================
const galleryItems = [
  {
    id: 1,
    title: "Orion Nebula",
    category: "nebulae",
    src: "pics/M42_Orionnebel_Canon_415s_Siril_2026-03-05.jpg",
    description: "M42 - Der Orionnebel ist ein Emissionsnebel im Sternbild Orion. Er befindet sich, wie das Sonnensystem selbst, im Orionarm der Milchstraße. Durch die große scheinbare Helligkeit seines Zentrums oberhalb der 4. Magnitude ist der Nebel mit bloßem Auge sternähnlich als Teil des Schwertes des Orions südlich der drei Sterne des Oriongürtels gut sichtbar. Insgesamt besitzt er eine Winkelausdehnung von etwa einem Grad.  Seine Entfernung beträgt etwa 414 Parsec (1350 LJ) und sein Durchmesser 24 LJ.",
    meta: "Canon EOS 60D, exposure 415*1s, ISO 6400, f/5.6, focal lenght 300 mm, Siril",
    desc_link: "https://de.wikipedia.org/wiki/Orionnebel",
    date: "2026-03-05"
  },
  {
    id: 2,
    title: "Andromeda Galaxy",
    category: "galaxies",
    src: "pics/M31_Andromeda-Galaxy_Canon_668s_Siril_2026-03-12.jpg",
    description: "M31 - Die Andromedagalaxie ist mit rund 2,5 Mio. LJ Entfernung die am nächsten zur Milchstraße gelegene Spiralgalaxie. Sie ist zugleich das entfernteste Objekt, das unter guten Bedingungen ohne technische Hilfsmittel mit bloßem Auge beobachtet werden kann. Sie liegt im Sternbild Andromeda. Sie ist das größte Mitglied der Lokalen Gruppe, einer Ansammlung gravitativ gebundener Galaxien. Die Andromedagalaxie nähert sich mit einer Radialgeschwindigkeit von etwa 114 km/s und wird in 4 bis 10 Mrd. Jahren mit der Milchstraße kollidieren.",
    meta: "Canon EOS 60D, exposure 209*3.2s, ISO 6400, f/5.6, focal lenght 75 mm, Siril",
    desc_link: "https://de.wikipedia.org/wiki/Andromedagalaxie",
    date: "2026-03-12"
  },
  {
    id: 3,
    title: "Pleiades Cluster",
    category: "clusters",
    src: "pics/M45_Pleiades_Canon_408s_Siril_2026-03-12.jpg",
    description: "M45 - Die Plejaden (auch Atlantiden, Atlantiaden, Siebengestirn, Taube, Sieben Schwestern, Gluckhenne) sind ein offener Sternhaufen, der mit bloßem Auge gesehen werden kann. Der Sternhaufen liegt knapp 140 Parsec (444 LJ) entfernt im Sternbild Stier, umfasst mindestens 400 Sterne mit einer Gesamtmasse von mindestens 760 Sonnenmassen.",
    meta: "Canon EOS 60D, exposure 408*1s, ISO 6400, f/5.6, focal lenght 300 mm, Siril",
    desc_link: "https://de.wikipedia.org/wiki/Plejaden",
    date: "2026-03-12"
  },
  {
    id: 4,
    title: "Praesepe Cluster / Bienenkorb",
    category: "clusters",
    src: "pics/M44_Praesepe_Cluster_Bienenkorb_DWARF3_15m_Astro_StellarStudio_2026-04-23.jpg",
    description: "M44 - Praesepe (lateinisch für Krippe, im Englischen auch „Beehive“ für „Bienenkorb“) ist ein Offener Sternhaufen, der am abendlichen Winter- und Frühlingshimmel schon freiäugig als Nebelfleckchen zu sehen ist, als eine Art Schimmer zwischen zwei Sternen im Sternbild Krebs. Dieser Sternhaufen ist nach den Plejaden der zweithellste Sternhaufen des Messier-Katalogs.",
    meta: "DWARF3, exposure 15m, Astro-Filter, StellarStudio",
    desc_link: "https://de.wikipedia.org/wiki/Messier_44",
    date: "2026-04-23"
  },
  {
    id: 5,
    title: "Herkuleshaufen",
    category: "clusters",
    src: "pics/M13_Herkuleshaufen_DWARF3_9m_Astro_Spike-Mask_StellarStudio_2026-05-10.jpg",
    description: "M13 - Kugelsternhaufen im Sternbild Herkules. Er umfasst mindestens 500.000 Sterne. Er ist etwa 25.100 LJ von der Sonne entfernt und hat die 300.000-fache Leuchtkraft der Sonne sowie einen Durchmesser von 150 LJ.",
    meta: "Astro-Filter mit Spike-Maske",
    desc_link: "https://de.wikipedia.org/wiki/Messier_13",
    date: "2026-05-01"
  },
  {
    id: 6,
    title: "Whirlpool Galaxy",
    category: "galaxies",
    src: "pics/M51_Whirlpool_Galaxy_DWARF3_2h43m_Astro_StellarStudio_2026-05-09.jpg",
    description: "M51 - Die Whirlpool-Galaxie | Strudelgalaxie ist eine große Spiralgalaxie in 24 Mio. LJ Entfernung im Sternbild Jagdhunde. Sie hat einen nahen, wechselwirkenden Begleiter, der im New General Catalogue als NGC 5195 verzeichnet ist (M 51 selbst hat die Nummer NGC 5194).",
    meta: "",
    desc_link: "https://de.wikipedia.org/wiki/Whirlpool-Galaxie",
    date: "2026-05-09"
  },
  {
    id: 7,
    title: "Bodes Galaxy",
    category: "galaxies",
    src: "pics/M81_Bodes_Galaxy_DWARF3_1h50m_Duo_2026-04-21.jpg",
    description: "M81 - Bodes Galaxie ist eine Spiralgalaxie im Sternbild Großer Bär. Verglichen mit dem Andromedanebel (M31) erscheint M81 mit etwa einem Dreißigstel von dessen Fläche merklich kleiner und ist etwa viermal weiter entfernt, rund 12 Mio. LJ. Der Durchmesser beträgt ca. 82.000 LJ; sie enthält etwa 200 Mrd. Sterne.",
    meta: "Duo-Schmalband-Filter",
    desc_link: "https://de.wikipedia.org/wiki/Messier_81",
    date: "2026-04-21"
  },
  {
    id: 8,
    title: "Ring Nebula",
    category: "nebulae",
    src: "pics/M57_Ring-Nebula_DWARF3_55m_Astro_StellarStudio_2026-05-10.jpg",
    description: "M57 - Der Ringnebel ist ein planetarischer Nebel im Sternbild Leier. Der Nebel ist der Überrest eines Sterns, der vor etwa 20.000 Jahren seine äußere Gashülle abgestoßen hat. Die Gashülle dehnt sich mit einer Geschwindigkeit von 19 km/s aus und hat derzeit einen scheinbaren Durchmesser von etwa 118 Bogensekunden, was bei einer Entfernung von 2300 Lichtjahren einen absoluten Durchmesser von ca. 1,3 Lichtjahren bedeutet.",
    meta: "",
    desc_link: "https://de.wikipedia.org/wiki/Ringnebel",
    date: "2026-05-10"
  },
  {
    id: 9,
    title: "Moon",
    category: "solar",
    src: "pics/Moon_DWARF3_StellarStudio_2026-04-22.jpg",
    description: "Mond | Luna - Der Mond umkreist die Erde bezüglich der Fixsterne in durchschnittlich 27 Tagen, 7 Stunden und 43,7 Minuten in einem mittleren Abstand von rund 384.400 Kilometern (etwa 30 Erddurchmesser). Er umläuft von Westen nach Osten die Erde im gleichen Drehsinn, mit dem die Erde um ihre Achse rotiert, was als prograder Umlauf bezeichnet wird. Er umkreist für einen irdischen Beobachter die Erde wegen ihrer viel schnelleren Rotation scheinbar an einem Tag – wie auch die Sonne, die Planeten und die Fixsterne – und geht wie diese im Osten auf und im Westen unter. Der Mond bewegt sich vor dem Hintergrund der Fixsterne im prograden (rechtläufigen) Drehsinn der Erdrotation, so dass sein scheinbarer Erdumlauf etwa 50 Minuten länger als 24 Stunden dauert. Sein Durchmesser beträgt etwa 3475 km.",
    meta: "",
    desc_link: "https://de.wikipedia.org/wiki/Mond",
    date: "2026-04-22"
  },
  {
    id: 10,
    title: "Pinwheel Galaxy | Feuerradgalaxie",
    category: "galaxies",
    src: "pics/M101_Pinwheel_Galaxy_Feuerradgalaxie_DWARF3_1h19m_Astro_StellarStudio_2026-04-29.jpg",
    description: "M101 - Die Pinwheel Galaxy ist eine Spiralgalaxie im Sternbild Großer Bär mit einer Entfernung von 22 Mio. LJ und einem Durchmesser von 170.000 LJ. Sie hat fünf prominente Begleitgalaxien: NGC 5204, NGC 5474, NGC 5477, NGC 5585 und Holmberg IV.",
    meta: "Astro-Filter",
    desc_link: "https://de.wikipedia.org/wiki/Messier_101",
    date: "2026-04-29"
  },
  {
    id: 11,
    title: "Pinwheel Galaxy | Feuerradgalaxie",
    category: "galaxies",
    src: "pics/M101_Pinwheel_Galaxy_Feuerradgalaxie_DWARF3_1h46m_Duo_StellarStudio_2026-04-29.jpg",
    description: "M101 - Die Pinwheel Galaxy ist eine Spiralgalaxie im Sternbild Großer Bär mit einer Entfernung von 22 Mio. LJ und einem Durchmesser von 170.000 LJ. Sie hat fünf prominente Begleitgalaxien: NGC 5204, NGC 5474, NGC 5477, NGC 5585 und Holmberg IV.",
    meta: "Duo-Schmalband-Filter",
    desc_link: "https://de.wikipedia.org/wiki/Messier_101",
    date: "2026-04-29"
  },
  {
    id: 12,
    title: "Eulennebel mit M108",
    category: "nebulae",
    src: "pics/M97_Eulennebel_und_M108_DWARF3_2h6m_Astro_StellarStudio_2026-04-23.jpg",
    description: "M97 und M108 - Der Eulennebel ist einer der etwa 1600 planetarischen Nebel in unserer Milchstraße. Er liegt er im Sternbild Großer Bär. Die vom Zentralstern ausgestoßene Hülle hat etwa 2 Lichtjahre Durchmesser und dehnt sich mit etwa 40 km/s im Weltraum aus.",
    meta: "",
    desc_link: "https://de.wikipedia.org/wiki/Eulennebel",
    date: "2026-04-23"
  },
  {
    id: 13,
    title: "Moon",
    category: "solar",
    src: "pics/Moon_DWARF3_StellaStudio_2026-05-01.jpg",
    description: "Mond | Luna - Der Mond umkreist die Erde bezüglich der Fixsterne in durchschnittlich 27 Tagen, 7 Stunden und 43,7 Minuten in einem mittleren Abstand von rund 384.400 Kilometern (etwa 30 Erddurchmesser). Er umläuft von Westen nach Osten die Erde im gleichen Drehsinn, mit dem die Erde um ihre Achse rotiert, was als prograder Umlauf bezeichnet wird. Er umkreist für einen irdischen Beobachter die Erde wegen ihrer viel schnelleren Rotation scheinbar an einem Tag – wie auch die Sonne, die Planeten und die Fixsterne – und geht wie diese im Osten auf und im Westen unter. Der Mond bewegt sich vor dem Hintergrund der Fixsterne im prograden (rechtläufigen) Drehsinn der Erdrotation, so dass sein scheinbarer Erdumlauf etwa 50 Minuten länger als 24 Stunden dauert. Sein Durchmesser beträgt etwa 3475 km.",
    meta: "",
    desc_link: "https://de.wikipedia.org/wiki/Mond",
    date: "2026-05-01"
  },
  {
    id: 14,
    title: "Sun",
    category: "solar",
    src: "pics/Sun_2026-04-22.jpg",
    description: "Die Sonne ist ein Zwergstern (Gelber Zwerg) und liegt im äußeren Drittel der Milchstraße. Sie enthält 99,86 % der Masse des Sonnensystems. Ihr Durchmesser ist mit 1,4 Millionen Kilometern etwa 110-mal so groß wie der der Erde.",
    meta: "",
    desc_link: "https://de.wikipedia.org/wiki/Sonne",
    date: "2026-04-22"
  },
  {
    id: 15,
    title: "Herznebel",
    category: "nebulae",
    src: "pics/IC1805_Herznebel_DWARF3_1h10m_VIS_StellarStudio_2026-04-24.jpg",
    description: "IC 1805 - Der Herznebel ist ein Emissionsnebel mit einem offenen Sternhaufen im Inneren und befindet sich im Sternbild Kassiopeia.",
    meta: "",
    desc_link: "https://de.wikipedia.org/wiki/Herznebel",
    date: "2026-04-24"
  },
  {
    id: 16,
    title: "Seelennebel",
    category: "nebulae",
    src: "pics/IC1848_Seelennebel_DWARF3_2h_Astro_StellarStudio_2026-04-24.jpg",
    description: "",
    meta: "IC 1848 - Der Seelennebel ist ein Emissionsnebel im Sternbild der Kassiopeia; Entfernung etwa 7500 LJ",
    desc_link: "https://de.wikipedia.org/wiki/Seelennebel",
    date: "2026-04-24"
  },
  {
    id: 17,
    title: "Omeganebel",
    category: "nebulae",
    src: "pics/M17_Omeganebel_DWARF3_22m_Astro_StellarStudio_2026-04-26.jpg",
    description: "M17 - Der Omeganebel | Schwanennebel ist ein Emissionsnebel im Nordteil des Sternbilds Schütze. Er erstreckt sich über 15 LJ.",
    meta: "",
    desc_link: "https://de.wikipedia.org/wiki/Omeganebel",
    date: "2026-04-26"
  },
  {
    id: 18,
    title: "Nord-Amerika-Nebel",
    category: "nebulae",
    src: "pics/NGC7000_North-America-Nebula_DWARF3_55m_Duo_StellarStudio_2026-05-10.jpg",
    description: "",
    meta: "NGC 7000 ist ein  diffuser Gasnebel im Sternbild Schwan. Seine Form erinnnert an Nordamerika. Am Himmel ist der Nebel mit 120 mal 100 Bogenminuten sehr ausgedehnt (der Vollmond hat einen Durchmesser von ca. 30').",
    desc_link: "https://de.wikipedia.org/wiki/Nordamerikanebel",
    date: "2026-05-10"
  },
  {
    id: 19,
    title: "Leo Triplet",
    category: "galaxies",
    src: "pics/NGC3628_Leo-Triplet_DWARF3_19m30s_StellarStudio_2026-05-01.jpg",
    description: "M65, M66, NGC 3628 - Das Leo-Triplett, ist eine kleine Galaxiengruppe in Sternbild Löwe. Sie liegt ungefähr 35 Millionen Lichtjahre entfernt.",
    meta: "",
    desc_link: "https://de.wikipedia.org/wiki/M66-Gruppe",
    date: "2026-05-01"
  },
  {
    id: 20,
    title: "Cirrusnebel | Schleiernebel | Veil Nebula",
    category: "nebulae",
    src: "pics/NGC6992_Schleiernebel_DWARF3_Astro_StellarStudio_2026-06-18b.jpg",
    description: "NGC 6992 - Eine Ansammlung von Emissions- und Reflexionsnebeln im Sternbild Schwan in 2500 LJ Entfernung",
    meta: "",
    desc_link: "https://de.wikipedia.org/wiki/Cirrusnebel",
    date: "2026-06-16"
  },
  {
    id: 21,
    title: "Andromeda Galaxy",
    category: "galaxies",
    src: "pics/M31_Andromeda-Galaxy_51m_Astro_2026-07-10.jpg",
    description: "M31 - Die Andromedagalaxie ist mit rund 2,5 Mio. LJ Entfernung die am nächsten zur Milchstraße gelegene Spiralgalaxie. Sie ist zugleich das entfernteste Objekt, das unter guten Bedingungen ohne technische Hilfsmittel mit bloßem Auge beobachtet werden kann. Sie liegt im Sternbild Andromeda. Sie ist das größte Mitglied der Lokalen Gruppe, einer Ansammlung gravitativ gebundener Galaxien. Die Andromedagalaxie nähert sich mit einer Radialgeschwindigkeit von etwa 114 km/s und wird in 4 bis 10 Mrd. Jahren mit der Milchstraße kollidieren.",
    meta: "",
    desc_link: "https://de.wikipedia.org/wiki/Andromedagalaxie",
    date: "2026-07-10"
  },
  {
    id: 22,
    title: "Milky Way Galaxy | Milchstraße",
    category: "galaxies",
    src: "pics/MilkyWay_2026-07-11.jpg",
    description: "Die Milchstraße ist eine Balkenspiralgalaxie, die unser Sonnensystem enthält. Sie hat einen Durchmesser von etwa 100.000 Lichtjahren und eine Dicke von etwa 1.000 Lichtjahren. Die Milchstraße enthält zwischen 100 und 400 Milliarden Sterne.",
    meta: "Sternbild Schwan",
    desc_link: "https://de.wikipedia.org/wiki/Milchstraße",
    date: "2026-07-11"
  },
  {
    id: 23,
    title: "Milky Way Galaxy | Milchstraße",
    category: "galaxies",
    src: "pics/MilkyWay-Adler_2026-07-11.jpg",
    description: "Die Milchstraße ist eine Balkenspiralgalaxie, die unser Sonnensystem enthält. Sie hat einen Durchmesser von etwa 100.000 Lichtjahren und eine Dicke von etwa 1.000 Lichtjahren. Die Milchstraße enthält zwischen 100 und 400 Milliarden Sterne.",
    meta: "Sternbild Adler (Aquila)",
    desc_link: "https://de.wikipedia.org/wiki/Milchstraße",
    date: "2026-07-11"
  },
  {
    id: 24,
    title: "Milky Way Galaxy | Milchstraße",
    category: "galaxies",
    src: "pics/MilkyWay-South_2026-07-11.jpg",
    description: "Die Milchstraße ist eine Balkenspiralgalaxie, die unser Sonnensystem enthält. Sie hat einen Durchmesser von etwa 100.000 Lichtjahren und eine Dicke von etwa 1.000 Lichtjahren. Die Milchstraße enthält zwischen 100 und 400 Milliarden Sterne.",
    meta: "Blick nach Süden, Richtung Sternbild Schütze (Sagittarius) und dem Zentrum der Milchstraße",
    desc_link: "https://de.wikipedia.org/wiki/Milchstraße",
    date: "2026-07-11"
  }
];
// TODO
// https://de.wikipedia.org/wiki/Adlernebel mit "The Pillars of Creation (Säulen der Schöpfung)" (M16, NGC 6611) im Sternbild Schlange (Serpens) bei den Koordinaten 18h19m (Rektaszension) und −13°47' (Deklination).
// https://de.wikipedia.org/wiki/Pferdekopfnebel IC434 im Sternbild Orion
// https://de.wikipedia.org/wiki/Orionnebel

// -------------------------------------------------------------------------------------

let currentFilter = 'all';
let currentLightboxIndex = 0;

// =====================
// NASA APOD
// =====================
async function loadNASAAPOD() {
  const container = document.getElementById('apod-container');

  try {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    if (!response.ok) throw new Error('API limit or error');
    const data = await response.json();

    const isImage = data.media_type === 'image';
    const mediaContent = isImage
      ? `<img src="${data.url}" alt="${data.title}" class="w-full h-full object-cover absolute inset-0 hover:scale-105 transition duration-700">`
      : `<div class="w-full h-full flex items-center justify-center bg-space-900"><div class="text-center p-8"><i data-lucide="film" class="w-12 h-12 mx-auto mb-4 text-gray-500"></i><p class="text-gray-400">Video content available at NASA APOD</p></div></div>`;

    container.innerHTML = `
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-3/5 relative aspect-video lg:aspect-auto lg:min-h-[550px] bg-black overflow-hidden group">
          ${mediaContent}
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>
        <div class="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-space-800">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs font-mono text-space-gold uppercase tracking-wider">NASA APOD</span>
            <span class="text-xs text-gray-600">•</span>
            <span class="text-xs font-mono text-gray-500">${data.date}</span>
          </div>
          <h3 class="text-2xl lg:text-3xl font-bold mb-4">${data.title}</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">${data.explanation}</p>
          ${data.copyright ? `<p class="text-xs text-gray-600 mb-6 font-mono">© ${data.copyright}</p>` : ''}
          <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank" class="inline-flex items-center gap-2 text-sm font-semibold text-space-accent hover:text-white transition w-fit group">
            View on NASA APOD 
            <i data-lucide="external-link" class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
          </a>
        </div>
      </div>
    `;
    lucide.createIcons();
  } catch (error) {
    container.innerHTML = `
      <div class="p-16 flex flex-col items-center justify-center text-center">
        <div class="p-4 bg-space-700/50 rounded-full mb-4">
          <i data-lucide="image-off" class="w-10 h-10 text-gray-500"></i>
        </div>
        <h3 class="text-xl font-bold mb-2">NASA API Temporarily Unavailable</h3>
        <p class="text-gray-500 max-w-md mx-auto text-sm mb-6">The demo API key has reached its rate limit. Visit NASA APOD directly for today's stunning astronomy image.</p>
        <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank" class="px-6 py-3 bg-space-accent rounded-full text-sm font-semibold hover:bg-indigo-500 transition">
          Visit NASA APOD
        </a>
      </div>
    `;
    lucide.createIcons();
  }
}

// =====================
// GALLERY LOGIC
// =====================
function getFilteredItems() {
  return currentFilter === 'all' ? galleryItems : galleryItems.filter(item => item.category === currentFilter);
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const items = getFilteredItems();

  grid.innerHTML = items.map(item => `
    <div class="gallery-item group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-space-700 fade-in" onclick="openLightbox(${item.id})">
      <img src="${item.src}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
        <div class="absolute bottom-0 left-0 right-0 p-5">
          <span class="text-xs font-mono text-space-gold uppercase tracking-wider">${item.category}</span>
          <h3 class="text-lg font-bold mt-1 leading-tight">${item.title}</h3>
        </div>
      </div>
      <div class="absolute top-4 right-4 p-2 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-sm border border-white/10">
        <i data-lucide="maximize-2" class="w-4 h-4"></i>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
  observeElements();
}

function initFilters() {
  const filterContainer = document.getElementById('gallery-filters');
  filterContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      renderGallery();
    }
  });
}

// =====================
// LIGHTBOX
// =====================
function openLightbox(id) {
  const items = getFilteredItems();
  currentLightboxIndex = items.findIndex(item => item.id === id);
  if (currentLightboxIndex === -1) return;
  updateLightboxContent(items[currentLightboxIndex]);

  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('opacity-0', 'pointer-events-none');
  lightbox.classList.add('opacity-100', 'pointer-events-auto');
  document.body.style.overflow = 'hidden';
}

function updateLightboxContent(item) {
  document.getElementById('lightbox-img').src = item.src;
  document.getElementById('lightbox-title').textContent = item.title;
  document.getElementById('lightbox-desc').textContent = item.description;

  document.getElementById('lightbox-desc_meta').textContent = item.meta;  // Neu
  if (item.desc_link === "") {
    document.getElementById('lightbox-desc_link').textContent = '';
  } else {
    document.getElementById('lightbox-desc_link').textContent = "lies mehr"; // Neu
    document.getElementById('lightbox-desc_link').href = item.desc_link;  // Neu
  }
  document.getElementById('lightbox-date').textContent = item.date;
  document.getElementById('lightbox-category').textContent = item.category;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('opacity-0', 'pointer-events-none');
  lightbox.classList.remove('opacity-100', 'pointer-events-auto');
  document.body.style.overflow = '';
}

function nextLightbox() {
  const items = getFilteredItems();
  currentLightboxIndex = (currentLightboxIndex + 1) % items.length;
  updateLightboxContent(items[currentLightboxIndex]);
}

function prevLightbox() {
  const items = getFilteredItems();
  currentLightboxIndex = (currentLightboxIndex - 1 + items.length) % items.length;
  updateLightboxContent(items[currentLightboxIndex]);
}

// =====================
// UI & UTILITIES
// =====================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
  });
}

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// =====================
// EVENT LISTENERS
// =====================
document.addEventListener('DOMContentLoaded', () => {
  new Starfield(document.getElementById('starfield'));
  lucide.createIcons();
  initNavbar();
  initMobileMenu();
  renderGallery();
  initFilters();
  loadNASAAPOD();
  observeElements();

  // Lightbox controls
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-overlay').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-next').addEventListener('click', (e) => { e.stopPropagation(); nextLightbox(); });
  document.getElementById('lightbox-prev').addEventListener('click', (e) => { e.stopPropagation(); prevLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });
});

// ---------------------------------------------------------------------------------------

// =====================
// Scale of the Universe (Dimensions, Orders of Magnitude)
// =====================

const container = document.getElementById('scrollContainer');
const cards = document.querySelectorAll('.scale-card');
const modal = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');

const galleryViewer = document.getElementById('galleryViewer');
const modalImg = document.getElementById('modalImg');
const modalDesc = document.getElementById('modalDesc');
const modalWikiLink = document.getElementById('modalWikiLink');
const modalCounter = document.getElementById('modalCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let subcardsArray = [];
let currentSubcardIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// 1. INDIKATOR-PUNKTE GENERIEREN
cards.forEach(card => {
    const subcards = JSON.parse(card.getAttribute('data-subcards'));
    const dotsContainer = card.querySelector('.card-indicator-dots');
    subcards.forEach(() => {
        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        dotsContainer.appendChild(dot);
    });
});

// 2. DIAGONALER HINTERGRUND-SMOOTH-WECHSEL
container.addEventListener('scroll', () => {
    let activeCard = cards[0];
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.left < window.innerWidth / 2 && rect.right > window.innerWidth / 2) {
            activeCard = card;
        }
    });
    document.body.style.setProperty('--bg-current', activeCard.getAttribute('data-bg'));
});

// 3. EVENT: KARTE ANKLICKEN
cards.forEach(card => {
    card.addEventListener('click', () => {
        const badge = card.querySelector('.exponent-badge').innerHTML;
        const title = card.querySelector('.card-title').innerText;
        
        subcardsArray = JSON.parse(card.getAttribute('data-subcards'));
        currentSubcardIndex = 0;

        document.getElementById('modalBadge').innerHTML = badge;
        document.getElementById('modalTitle').innerText = title;
        
        updateModalSlide();
        modal.classList.add('active');
    });
});

// 4. RENDERING DER AKTUELLEN UNTERKARTE
function updateModalSlide() {
    const currentSlide = subcardsArray[currentSubcardIndex];
    modalImg.src = currentSlide.img;
    modalDesc.innerHTML = currentSlide.text;  // Formatierungen im Text erlauben mit innerHTML statt innerText; data-subcards = '' in einfachen Anführungszeichen (im HTML-Code).
    modalWikiLink.href = currentSlide.wiki;
    modalCounter.innerText = `${currentSubcardIndex + 1} / ${subcardsArray.length}`;
}

function nextSlide() {
    if (!modal.classList.contains('active')) return;
    currentSubcardIndex = (currentSubcardIndex + 1) % subcardsArray.length;
    updateModalSlide();
}

function prevSlide() {
    if (!modal.classList.contains('active')) return;
    currentSubcardIndex = (currentSubcardIndex - 1 + subcardsArray.length) % subcardsArray.length;
    updateModalSlide();
}

nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); });
prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); });

// 5. TASTATUR-SUPPORT
window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'ArrowRight') nextSlide();
    else if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'Escape') modal.classList.remove('active');
});

// 6. SMARTPHONE TOUCH-SWIPE LOGIK
galleryViewer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

galleryViewer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
}, { passive: true });

function handleSwipeGesture() {
    const swipeThreshold = 40;
    if (touchStartX - touchEndX > swipeThreshold) nextSlide();
    else if (touchEndX - touchStartX > swipeThreshold) prevSlide();
}

// CLOSE LOGIC
// CLOSE LOGIC (Firefox kompatibel über exakte Klick-Abfangung)
closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => { 
  if (e.target === modal) modal.classList.remove('active'); 
});

// ---------------------------------------------------------------------------------------

