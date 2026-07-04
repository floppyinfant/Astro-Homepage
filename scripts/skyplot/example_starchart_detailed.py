from datetime import datetime
from zoneinfo import ZoneInfo

from starplot import ZenithPlot, Observer, _
from starplot.styles import PlotStyle, extensions


tz = ZoneInfo("Europe/Berlin")
# https://de.wikipedia.org/wiki/Mondphasen_(Tabelle)
#dt = datetime(2023, 7, 13, 22, 0, tzinfo=tz)  # July 13, 2023 at 10pm PT
# dt = datetime(2026, 1, 18, 22, 0, tzinfo=tz)
# dt = datetime(2026, 2, 17, 22, 0, tzinfo=tz)
# dt = datetime(2026, 3, 19, 22, 0, tzinfo=tz)
# dt = datetime(2026, 4, 17, 22, 0, tzinfo=tz)
dt = datetime(2026, 5, 16, 22, 0, tzinfo=tz)
# dt = datetime(2026, 6, 15, 22, 0, tzinfo=tz)
# dt = datetime(2026, 7, 14, 22, 0, tzinfo=tz)
# dt = datetime(2026, 8, 12, 22, 0, tzinfo=tz)
# dt = datetime(2026, 9, 11, 22, 0, tzinfo=tz)
# dt = datetime(2026, 10, 10, 22, 0, tzinfo=tz)
# dt = datetime(2026, 11, 9, 22, 0, tzinfo=tz)
# dt = datetime(2026, 12, 9, 22, 0, tzinfo=tz)


observer = Observer(
    dt=dt,
    lat=50.587222,  # Giessen
    lon=8.669722,
)


p = ZenithPlot(
    observer=observer,
    style=PlotStyle().extend(
        extensions.BLUE_GOLD,
        extensions.GRADIENT_PRE_DAWN,
    ),
    resolution=3600,
    autoscale=True,
)

p.horizon()
p.constellations()

p.stars(
    where=[_.magnitude < 4.6], 
    where_labels=[_.magnitude < 2.1]
)

p.galaxies(
    where=[_.magnitude < 9],
    where_labels=[False],
    where_true_size=[False],
)

p.open_clusters(
    where=[_.magnitude < 9],
    where_labels=[False],
    where_true_size=[False],
)

p.ecliptic()
p.celestial_equator()
p.milky_way()


# targets see Photos
p.marker(
    ra=12.36 * 15,
    dec=25.85,
    style={
        "marker": {
            "size": 60,
            "symbol": "circle",
            "fill": "none",
            "color": None,
            "edge_color": "hsl(44, 70%, 73%)",
            "edge_width": 2,
            "line_style": [1, [2, 3]],
            "alpha": 1,
            "zorder": 100,
        },
        "label": {
            "zorder": 200,
            "font_size": 22,
            "font_weight": 700,
            "font_color": "hsl(44, 70%, 64%)",
            "font_alpha": 1,
            "offset_x": "auto",
            "offset_y": "auto",
            "anchor_point": "top right",
        },
    },
    label="Mel 111",
)
p.constellation_labels()

p.export("star_chart_detail.png", transparent=True, padding=0.1)
