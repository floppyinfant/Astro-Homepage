Astronomy und Astrophotography Site


Live Server (VScode Extension): 
http://127.0.0.1:5500/html/index.html

Open in Firefox F12 (Developer Tools): 
Bildschirmgrößen testen (Ctrl + Shift + M) # right top Icon


# Alternativen

## WordPress (WP)

Block-Theme

Elementor Editor Plugin

FooGallery (Photo Gallery)

### Caveats

@see docs.google.com

- Site-Editor
- Block-Editor
- Elementor (Plugin)

- Customizer (Anpassen)
- Website bearbeiten
- Seite bearbeiten

- Template bearbeiten
- Vorlage hinzufügen
- Block hinzufügen

- Global Style bearbeiten (theme.json)

### Themes

- Space Exploration (paid)
- Formula Dark
- Coral Dark
- Dark Photography

- Recreate the NASA Website in WordPress
- https://youtu.be/-afMM8ykemw 

## Piwigo

## Zenphoto

---

# Git Workflow

```bash
# neuen Branch direkt im Workspace-Repository erstellen
cd /l/SPACES/Webspace/Astro-Homepage
git checkout -b ai-refact

# Änderungen am Code durchführen und commmiten
# ...

# merge den aktuellen Branch zurück in den Master-Branch
git checkout master
git merge ai-refact
# Die Git-Ausgabe zeigt einen erfolgreichen Fast-Forward-Merge mit 44 Dateien und den aktualisierten Inhalten.

# ---

# neuen Branch erstellen und darauf wechseln
Set-Location 'L:\SPACES\Webspace\Astro-Homepage'
git checkout -b ai-refact-dimensions

# Anderungen durchführen
# ...

# Status überprüfen
git status --short --branch
echo '---'
git branch --all --verbose --no-abbrev

# Zusammenführung auf dem lokalen Master-Branch durchführen
git checkout master
git merge --no-edit ai-refact-dimensions

# aktueller Stand des Repos
git status --short --branch
echo '---'
git log --oneline --decorate -5

# lokalen Master-Stand auf den Remote-Server übertragen
git push origin master

# Feature-Branch bereinigen und schliessen
git branch -d ai-refact-dimensions
git branch -d ai-refact
```

---

# TODO - 2026-06-15

- Footer: (c), Impressum, Bildnachweis
- Foto-Galerie: Beschreibungen (in script.js)
- Bilder für "Skala des Universums" von KI erstellen lassen (img2img)
- Sternenkarte für POI zeichnen (oder KI, oder public domain finden)
- email-Adresse für Impressum erstellen: info@floppyinfant.com
- SSL aktivieren (mit htaccess Weiterleiten)
- Formelsammlung, Foto / Optik Begriffe (s.a. Space Koala, iPhone Fotos)


Gallery
- neue Bilder (optimieren 1920px)
- Bildunterschriften


Dimensionen
- yottameter, attometer etc. ausschreiben
- Bilder für Cards
- Bilder für Subcards
- Bildnachweis führen (copy embedded link, copa attribution)

```
				{
                    "img": "",
                    "attribution": "",
                    "text": "",
                    "wiki": ""
                },
                
185 attribution
118 attribution fehlen noch
"attribution": "",

<img class="card-image" src=""
"img": "",

```
- use wikimedia thumbs 960px


Section Sternkarte / POI
- section anlegen
- POI mit div verlay (siehe z.B. Physikerbild in wikimedia commons; suche andere Beispiele)


Überschriften und Mission überarbeiten


Icon (oben links): nicht DeepsSky, sondern ...

---

# Website

## Favicon

## Impressum

siehe unten

## Bildnachweise

für "Dimensionen" (Space, Lenght, Orders of Magnitude, Scale of the Universe)

siehe unten

## Ladezeiten

Ladezeiten beobachten, optimieren:
- Bilder optimieren
- andere Bilddateien embedden
- sectionen später laden (lazy loading) oder auf andere Subpages aufteilen

---

## Pages

### Slider

3D Star Field Generator (Animated 3D Video)

https://youtu.be/rWOcwRU11Fw

https://zedastro.lovable.app/

https://zedastro.lovable.app/star-field-generator


NASA Picture of the Day ?

---

### Photo Gallery

using Lightbox, Modal

#### Foto

TODO:

https://de.wikipedia.org/wiki/Adlernebel mit "The Pillars of Creation (Säulen der Schöpfung)" (M16, NGC 6611) im Sternbild Schlange (Serpens) bei den Koordinaten 18h19m (Rektaszension) und −13°47' (Deklination).

https://de.wikipedia.org/wiki/Pferdekopfnebel IC434 im Sternbild Orion

https://de.wikipedia.org/wiki/Orionnebel


#### Beschreibung

- Beschreibung des Typs, der Größe, der Entfernung, des Sternbilds (und/ oder Koordinaten)
- Link zu Wikipedia
- Link zu SkyAtlas (Stellarium, Aladin Lite)

---

### Sternenkarte

Skymap, SkyAtlas

- Starplot
- ipyaladin (Aladin Lite)
- Stellarium
- Google Sky

Marker
- AstroPy für SkyCoord und units

#### POI auf Sternenkarte

88 Sternbilder (constellations) der IAU
- https://de.wikipedia.org/wiki/Internationale_Astronomische_Union

SkyAtlas

SkyMaps
- https://de.wikipedia.org/wiki/Sternkarte

- Sternenkarte von IAU (OpenSource, Wikipedia)
- abmalen von der Kosmos-Sternenkarte | Astlas (Buch)
- Screenshot von Stellarium-Web, Google Sky (copyright)

https://de.wikipedia.org/wiki/Astronomieprogramm

https://stellarium-web.org/

#### interactive Map with Hotspots (POI)
- Marker
- Hover-Effect, Mouseover, Tooltip
- Plotly
- SVG | PNG Overlay: coordinates from Gimp, Affinity, Inscape, Krita
- Hotspot-Generator-Tools: Image-Map.net, Image-Maps.com, DrawSVG.org, Photopea, Figma

---

### Dimensions (Skala des Universums)

Timeline | Orders of Magnitude

Naturwissenschaften, Science, Existenz

Life Sciences, Bioinformatik

#### logarithmische Längen: Objektgrößen und Entfernungen

Linkliste Wikipedia: siehe text/regex.txt --> ergebnis.txt

andere Projekte:
- Scale of the Universe
- Cosmic Eye

##### Bilder

TODO
- PNG Transparenz --> JPEG Weißer Hintergrund
- Bildgröße optimieren oder dynamisch laden von Wikimedia ?
- Bildnachweis

AI Generated Pictures
- img2img
- txt2img

##### Bildnachweis

@see Homepage 2026 (Google Docs)

#### Time 

and time-dependend Values (Velocity , Acceleration)

History of the Universe, Life, Humanity

#### [Energy]

String Theory, Quantum Mechanics, Allgemeine Relativitätstherorie

Theory of Everything

Singularität: Everything, Everywhere, All-at-once

Materie == Energie

---

### Licht

Spektrum der elektromagnetischen Wellen

Spektroskopie

Quantenzahlen, Jablonski Termschema

Photon als Elementarteilchen

Welle-Teilchen-Dualismus

---

### Foto / Optik

Teleskope & Fotografie

Begriffe:
- Sensor Size, Crop-factor
- FOV
- Auflösung, Seeing
- Pixelsize
- Over- and Undersampling

Probleme:
- Lichtverschmutzung: Kunstlicht, Mond
- Wetter, Wolken
- Seeing (atmosphärische Verwirbelungen, Jetstreams, Temperaturgradienten, Staub und Eispartikel), Deklination > 30°

Fehler:
- chromatische Aberationen
- Vignetting
- ...
- @Bildbearbeitung, Calibration frames

Quellen:
- Space Koala
- Buch: Fotografie, Astronomie
- Website Apps: FOV, Bokeh, Astro

---

### FAQ

#### How-Tos, Guides

##### Navigation am Himmel

##### Astrophotography

- Smartphone
- DSLR, DSLM
- Montierung: Nachführung (Star-Tracker), GoTo
- Smart Telescope
- Rig
- Remote Telescopes

- Sternwarte | Observatory
- Radiotelescopes, Arrays
- Space Telescopes

#### Formelsammlung

Science

---

### Links

siehe unten

#### Apps | Software

siehe unten

#### Development

##### AstroPy

Workshop | Tutorial

- CoLab
- Jupyter Notebook
- vscode.dev
- REPL (ipython)

- Linux, WSL, VM, Docker
- AI: ollama, Google Gemini, OpenRouter.ai

- IDE: VScode, Jetbrains PyCharm

Themen:
- SkyCoord, units
- Starplot
- ipyaladin
- ...
- ?

#### MAKE

@Astronomy, Frank Sackenheim

- All-Sky-Camera
- DeepSky-Camera (Android)
- Montierung | Nachführung
- Spektroskop
- ... // original websites
- ?   // deep search

---

### About us

Mission statement (motivation)

---

### Impressum

https://www.e-recht24.de/impressum-generator.html

https://impressum-generator.de/

Rein private Webseiten: Betreiben Sie eine Seite, die ausschließlich privat und familiär genutzt wird, benötigen Sie kein Impressum. Sobald aber Werbung geschaltet wird, Affiliate-Links genutzt werden oder Sie Einnahmen erzielen, gilt die Seite als geschäftsmäßig und benötigt zwingend ein Impressum. 

#### Footer

© 2026 [Ihr Name]. Alle Inhalte und Fotos auf dieser Website sind urheberrechtlich geschützt.

#### Fotos

Foto: © 2026 [Ihr Name]

#### email

info@floppyinfant.com erstellen / anlegen und abrufen (iPhone, Thunderbird, Weiterleitung)

#### Telefonnummer

Voicemail, Weiterleitung ?

#### DSGVO

Datenschutzerklärung bei Kommentaren, Foren, Uploads, Newsletter

ausserdem:
- Personenrechte, Persönlichkeitsrechte (auf Fotos)
- Urheberrechte (s. Bildnachweise)
- Abmahnungen, Unterlassungsklagen, Schadenersatzforderungen

---

### Bildnachweise

---

### Links & References

#### Links

@see Astronomie (Google Docs)

##### Apps | Software

SkyAtlas:
- Stellarium
- SkySafari
- Google Sky (in Google Earth)

Tools:
- PhotoPills
- Meteoblue (besser als Website | WebApp)
- Xasteria+, PS Align PW
- ...

Aufnahme-Software:
- DWARF
- Seestar
- Deep Sky Camera (Android)
- AstroShader (iOS)
- Blackmagic Camera
- Pro-Cam

- SharpCap
- NINA
- Astroberry
- ...

Development:
- NASA Software
- universe2go+

- SIMBAD
- GAIA
- Aladin Lite (ipyaladin)

##### People | Places

Vorlesung Prof. Jo Ohlert, Sternwarte Trebur

Planetarium Athen

Planetarium Mannheim

AstroGC

Christine E. (Canon EOS 60D)

Astronomische Arbeitsgemeinschaft Heuchelheim (AAG)
- http://www.aag-heuchelheim.de/
- https://www.facebook.com/aagheuchelheim/

##### Organisationen

NASA
- Hubble
- JWST

ESA

#### References

alle verwendeten Websites und Tools

v.a.
- Wikipedia
- Starplot

- DWARFLabs
- Siril
- Affinity by Canva

- VScode, Jetbrains PyCharm, Jupyter Notebook

#### ahnliche Seiten

https://www.heute-am-himmel.de/

https://scaleofuniverse.com/de

https://en.wikipedia.org/wiki/The_Scale_of_the_Universe

https://learn.genetics.utah.edu/content/cells/scale/

https://en.wikipedia.org/wiki/Cosmic_Eye

https://youtu.be/pSHVbLPWA28

https://pablocarlosbudassi.com/

https://commons.wikimedia.org/wiki/File:Observable_Universe_Logarithmic_Map_(horizontal_layout_english_annotations_scale_bar).png

https://commons.wikimedia.org/wiki/File:Observable_Universe_German_Annotations.png

https://www.redbubble.com/i/photographic-print/VERTICAL-MAP-OF-THE-UNIVERSE-ENG-2024-Update-RECOMMENDED-by-pablocbudassi/37090437.Y8UA9 

---

---

---

