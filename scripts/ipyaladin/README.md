ipyaladin
Aladin Lite

https://aladin.cds.unistra.fr/AladinLite/ipyaladin/
https://github.com/cds-astro/ipyaladin
https://github.com/cds-astro/ipyaladin/tree/master/examples

Aladin Widget
https://cds-astro.github.io/ipyaladin/autoapi/ipyaladin/widget/index.html

Astronomical Coordinate Systems
SkyCoord (astropy)
https://docs.astropy.org/en/stable/coordinates/index.html
ICRS (International Celestial Reference System) with RA [hr], DEC [degrees]
ICRSd (...in decimal)
GAL (Galactical)

Projection
https://cds-astro.github.io/aladin-lite/Aladin.html#setProjection



```python
from astropy.coordinates import Angle, SkyCoord
from ipyaladin import Aladin, Marker
from pathlib import Path

from ipyaladin import __version__, __aladin_lite_version__
print("version:", __version__, "running Aladin Lite:", __aladin_lite_version__)

aladin = Aladin(
    target=SkyCoord(10, 20, unit="deg"),
    fov=Angle(20, "deg"),
    reticle_size=64,
    reticle_color="#ff89ff",
)
aladin

aladin.target = "sgr a*"  # either an object name or a SkyCoord
#aladin.target

aladin.fov = 2.93  # either a number in degrees or an astropy angle
#aladin.fov

aladin.height = 640
#aladin.height

aladin.rotation = 180  # either a number in degrees or an astropy angle
#aladin.rotation

# Icon in the top right
aladin.projection = "TAN"  # supported projections: https://cds-astro.github.io/aladin-lite/Aladin.html#setProjection
#aladin.projection

# --------------------------------------------------------------------------

markers = []
for i in range(1, 11):
    name = f"M{i}"
    markers.append(
        Marker(
            position=name,
            title=name,
            # the title and description can be written as plain text or as html elements
            description=(
                '<a href="https://simbad.cds.unistra.fr/simbad/'
                f'sim-basic?Ident={name}&submit=SIMBAD+search"> '
                "Read more on SIMBAD</a>"
            ),
        )
    )
markers_overlay = aladin.add_markers(
    markers, name="M1-M10", color="pink", shape="cross", source_size=15
)
aladin.target = "M1"
aladin.fov = 0.2


```

