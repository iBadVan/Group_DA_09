import reflex as rx

config = rx.Config(
    app_name="EXP_P3",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)