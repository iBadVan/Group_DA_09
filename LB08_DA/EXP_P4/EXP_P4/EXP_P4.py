import reflex as rx
import httpx
from typing import List, Dict

API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10"

class ApiState(rx.State):
    datos: List[Dict] = []
    cargando: bool = False
    error: str = ""

    async def cargar(self):
        self.cargando = True
        self.error = ""
        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                r = await client.get(API_URL)
                r.raise_for_status()
                self.datos = r.json()
        except Exception as e:
            self.error = f"Error al obtener datos: {e.__class__.__name__}"
            self.datos = []
        finally:
            self.cargando = False


def tarjeta_post(p: Dict):
    return rx.card(
        rx.vstack(
            rx.heading(p.get("title", "(sin título)"), size="4"),
            rx.text(p.get("body", ""), size="3"),
            spacing="2",
            align="start",
        ),
        class_name="w-full"
    )


def listado_posts():
    return rx.cond(
        ApiState.cargando,
        rx.vstack(
            rx.spinner(size="3"),
            rx.text("Cargando datos…"),
            align="center",
            spacing="2",
        ),
        rx.cond(
            ApiState.error != "",
            rx.callout(ApiState.error, color_scheme="red"),
            rx.vstack(
                rx.foreach(
                    ApiState.datos,
                    lambda p: rx.box(
                        rx.heading(p["title"], size="4"),
                        rx.text(p["body"], size="3"),
                        class_name="p-4 rounded-xl border shadow-sm w-full"
                    ),
                ),
                spacing="3",
                align="stretch",
            ),
        ),
    )


@rx.page(title="API Externa – JSONPlaceholder")
def index() -> rx.Component:
    return rx.container(
        rx.vstack(
            rx.heading("Práctica 04: Consumo de API externa", size="7"),
            rx.text(
                "Ejemplo con JSONPlaceholder (GET /posts?_limit=10). Usa httpx.AsyncClient y estado reactivo.",
                size="3",
            ),
            rx.hstack(
                rx.button("Cargar datos", on_click=ApiState.cargar, size="3"),
                rx.button("Recargar", on_click=ApiState.cargar, variant="soft", size="3"),
                spacing="3",
            ),
            listado_posts(),
            spacing="5",
            align="stretch",
        ),
        size="4",
    )


app = rx.App()
app.add_page(index)
