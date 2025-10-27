import reflex as rx
from typing import List, Dict

SURFACE_COL = "#0b1220"
PANEL_COL   = "#0f172a"
BORDER_COL  = "#1f2937"
TEXT_MUTED  = "#94a3b8"

class State(rx.State):
    mostrar_solo_pendientes: bool = False
    tareas_en_progreso: List[Dict] = [
        {"id": 1, "titulo": "Aprobar GDI", "estado": "Pendiente", "owner": "Mauricio"},
        {"id": 2, "titulo": "Estudiar para la expo de DA", "estado": "En curso", "owner": "Ivancito"},
        {"id": 3, "titulo": "Ponerle 20 a Mauricio y Ivan en DA", "estado": "Pendiente", "owner": "Analu"},
    ]
    tareas_completadas: List[Dict] = [
        {"id": 4, "titulo": "Quedar 2do en el ideaton", "estado": "Completada", "owner": "Ivancito"},
        {"id": 5, "titulo": "Tomar el cafecito del día", "estado": "Completada", "owner": "Analu"},
    ]

    def toggle_pendientes(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes

    @rx.var
    def en_progreso_filtradas(self) -> List[Dict]:
        if self.mostrar_solo_pendientes:
            return [t for t in self.tareas_en_progreso if t.get("estado") == "Pendiente"]
        return self.tareas_en_progreso

    @rx.var
    def completadas_filtradas(self) -> List[Dict]:
        if self.mostrar_solo_pendientes:
            return [t for t in self.tareas_completadas if t.get("estado") == "Pendiente"]
        return self.tareas_completadas

    @rx.var
    def en_progreso_count(self) -> int:
        return len(self.en_progreso_filtradas)

    @rx.var
    def completadas_count(self) -> int:
        return len(self.completadas_filtradas)


card_style = dict(
    width="100%",
    padding="14px",
    border=f"1px solid {BORDER_COL}",
    border_radius="14px",
    box_shadow="0 6px 16px rgba(0,0,0,0.25)",
    background_color=PANEL_COL,
)

col_style = dict(
    width=rx.breakpoints(sm="100%", md="48%", lg="48%", xl="32%"),
    display="flex",
    flex_direction="column",
    gap="3",                    # token
    padding="16px",
    background_color=SURFACE_COL,
    border_radius="16px",
    border=f"1px solid {BORDER_COL}",
)

def tarjeta_tarea(tarea: Dict) -> rx.Component:
    return rx.box(
        rx.text(tarea.get("titulo", "(Sin título)"), weight="bold"),
        rx.text(f"Estado: {tarea.get('estado', '-')}", size="2", color=TEXT_MUTED),
        rx.text(f"Responsable: {tarea.get('owner', '-')}", size="2", color=TEXT_MUTED),
        style=card_style,
        key=f"tarea-{tarea.get('id', id(tarea))}",
    )

def header_col(nombre: str, count_var) -> rx.Component:
    return rx.hstack(
        rx.heading(nombre, size="4"),
        rx.spacer(),
        rx.badge(f"{count_var} tareas", color_scheme="gray"),
        align="center",
        width="100%",
    )

def columna_kanban(nombre: str, tareas_var, count_var) -> rx.Component:
    return rx.box(
        header_col(nombre, count_var),
        rx.cond(
            count_var == 0,
            rx.callout("Sin tareas para mostrar.", icon="info", color_scheme="gray"),
            rx.foreach(tareas_var, tarjeta_tarea),
        ),
        style=col_style,
    )

def filtro_button() -> rx.Component:
    return rx.hstack(
        rx.button(
            rx.cond(State.mostrar_solo_pendientes, "Ver todas", "Mostrar pendientes"),
            on_click=State.toggle_pendientes,
            size="3",
            variant="solid",
        ),
        rx.text(
            rx.cond(
                State.mostrar_solo_pendientes,
                "Mostrando solo ‘Pendiente’.",
                "Mostrando todas las tareas.",
            ),
            color=TEXT_MUTED,
        ),
        align="center",
        gap="3",
    )

def index() -> rx.Component:
    return rx.container(
        rx.vstack(
            rx.heading("Filtro de Tareas Pendientes en el Tablero Kanban", size="6"),
            rx.text("Ejercicio 1 hecho con reflex con estado global y filtrado de tareas", color=TEXT_MUTED),
            filtro_button(),
            rx.flex(
                columna_kanban("En Progreso", State.en_progreso_filtradas, State.en_progreso_count),
                columna_kanban("Completadas", State.completadas_filtradas, State.completadas_count),
                direction=rx.breakpoints(sm="column", md="row"),
                wrap="wrap",
                gap="4",                # token
                width="100%",
                align="start",
                justify="start",
            ),
            spacing="5",                # token
            width="100%",
        ),
        size="4",
        padding_y="5",                 # token
        style={"max_width": "1100px"},
    )

app = rx.App()
app.add_page(index, route="/")
