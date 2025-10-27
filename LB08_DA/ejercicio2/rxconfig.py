import reflex as rx

config = rx.Config(
    app_name="ejercicio2",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)