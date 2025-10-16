import reflex as rx

config = rx.Config(
    app_name="EXP_P2",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)