#!/usr/bin/env python

# pip install astropy plotly pandas
# AI Coding Assistant Gemini

import numpy as np
import pandas as pd
import plotly.express as px
from astropy.coordinates import EarthLocation, AltAz, SkyCoord
import astropy.units as u
from astropy.time import Time

# 1. STANDORT UND ZEIT DEFINIEREN (Beispiel: Hungen, Deutschland)
location = EarthLocation(lat=50.47*u.deg, lon=8.90*u.deg, height=140*u.m)
beobachtungs_zeit = Time.now()  # Nutzt die aktuelle Echtzeit

# 2. IHRE BEISPIEL-DATEN (Sterne/Objekte mit Ihren Fotolinks)
# Ersetzen Sie die URLs durch die Pfade zu Ihren echten Fotos
poi_daten = {
    "Name": ["Polarstern (Polaris)", "Wega (Vega)", "Arktur (Arcturus)"],
    "RA": ["02h31m49s", "18h36m56s", "14h15m39s"],      # Rektaszension
    "DEC": ["+89d15m51s", "+38d47m01s", "+19d10m56s"],   # Deklination
    "Foto_URL": [
        "https://ihre-website.de",
        "https://ihre-website.de",
        "https://ihre-website.de"
    ]
}

df = pd.DataFrame(poi_daten)

# 3. KOORDINATEN TRANSFORMIEREN (SkyCoord zu AltAz)
sky_coords = SkyCoord(ra=df['RA'], dec=df['DEC'], frame='icrs')
altaz_frame = AltAz(obstime=beobachtungs_zeit, location=location)
lokale_koordinaten = sky_coords.transform_to(altaz_frame)

# Daten für Plotly aufbereiten
# Für All-Sky-Maps wird der Abstand vom Zentrum oft als (90° - Höhe) dargestellt
df['Alt'] = lokale_koordinaten.alt.deg
df['Az'] = lokale_koordinaten.az.deg
df['Zenit_Abstand'] = 90 - df['Alt']  # 0° = Zenit (Mitte), 90° = Horizont (Rand)

# Nur Objekte anzeigen, die aktuell über dem Horizont (Alt > 0) sind
df = df[df['Alt'] > 0]

# 4. INTERAKTIVE ALL-SKY-MAP ERSTELLEN
fig = px.scatter_polar(
    df, 
    r="Zenit_Abstand", 
    theta="Az", 
    hover_name="Name",
    hover_data={"Zenit_Abstand": False, "Alt": ":.2f", "Az": ":.2f"},
    title=f"All-Sky-Map (Hungen) - {beobachtungs_zeit.iso[:16]}"
)

# Ansicht anpassen: Norden oben (0°), Uhrzeigersinn für Osten (90°)
fig.update_polars(
    angularaxis=dict(direction="clockwise", rotation=90),
    radialaxis=dict(range=[0, 90], tickvals=[30, 60, 90], ticktext=["60° Alt", "30° Alt", "Horizont"])
)

# Marker-Größe und Aussehen anpassen
fig.update_traces(marker=dict(size=12, color='gold', symbol='star'))

# 5. JAVASCRIPT FÜR DIE FOTO-VERLINKUNG HINZUFÜGEN
# Dieser Code sorgt dafür, dass sich bei einem Klick auf den Stern die Foto-URL öffnet
urls = df['Foto_URL'].tolist()
javascript_click = f"""
var urls = {urls};
var graph = document.getElementById('{{plot_id}}');
graph.on('plotly_click', function(data) {{
    var pointIndex = data.points[0].pointNumber;
    if (urls[pointIndex]) {{
        window.open(urls[pointIndex], '_blank');
    }}
}});
"""

# Karte als HTML-Datei speichern
fig.write_html("sternkarte_mit_fotos.html", post_script=javascript_click)
print("Die Datei 'sternkarte_mit_fotos.html' wurde erfolgreich erstellt!")
