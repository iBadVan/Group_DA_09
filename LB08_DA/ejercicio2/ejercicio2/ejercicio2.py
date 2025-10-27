import reflex as rx
from enum import Enum
from dataclasses import dataclass
from typing import List, Dict


# -----------------------------
# Dominio
# -----------------------------
class Estado(str, Enum):
    PENDIENTE = "Pendiente"
    EN_PROGRESO = "En Progreso"
    COMPLETADA = "Completada"


@dataclass
class Tarea:
    id: int
    titulo: str
    estado: Estado


# -----------------------------
# Estado (State) de Reflex
# -----------------------------
class KanbanState(rx.State):
    """Estado reactivo del tablero Kanban."""

    # Dataset de ejemplo (en una app real esto podría venir de BD o API)
    tareas: List[Tarea] = [
        Tarea(1, "Configurar entorno", Estado.PENDIENTE),
        Tarea(2, "Diseñar UI", Estado.EN_PROGRESO),
        Tarea(3, "Escribir tests", Estado.PENDIENTE),
        Tarea(4, "Deploy inicial", Estado.COMPLETADA),
        Tarea(5, "Documentación", Estado.EN_PROGRESO),
    ]

    # -------------------------
    # (a) Contar tareas por estado
    # -------------------------
    @rx.var
    def contadores(self) -> Dict[str, int]:
        """Devuelve un dict {estado: cantidad} calculado de forma reactiva.
        Se recalcula cuando `tareas` cambia.
        """
        cont: Dict[str, int] = {}
        for t in self.tareas:
            cont[t.estado] = cont.get(t.estado, 0) + 1
        # Garantiza claves presentes aunque no haya elementos
        for e in Estado:
            cont.setdefault(e.value, 0)
        return cont

    # Utilidad opcional por si quieres cambiar el estado de una tarea
    def mover(self, tarea_id: int, nuevo_estado: Estado):
        self.tareas = [
            Tarea(t.id, t.titulo, nuevo_estado if t.id == tarea_id else t.estado)
            for t in self.tareas
        ]


# -----------------------------
# UI Helpers
# -----------------------------

def columna(estado: Estado):
    """Renderiza una columna de Kanban para el `estado` dado."""
    return rx.card(
        rx.vstack(
            rx.heading(estado.value, size="5"),
            rx.divider(),
            rx.foreach(
                KanbanState.tareas,
                lambda t: rx.cond(
                    t.estado == estado,
                    rx.box(
                        rx.text(t.titulo, weight="medium"),
                        rx.badge(estado.value, variant="soft"),
                        class_name="p-3 rounded-xl shadow-sm border"
                    )
                ),
            ),
            spacing="3",
            align="stretch",
        ),
        class_name="w-full md:w-1/3"
    )


def panel_contadores():
    c = KanbanState.contadores
    return rx.hstack(
        rx.badge(f"Pendientes: {c.get(Estado.PENDIENTE.value, 0)}"),
        rx.badge(f"En Progreso: {c.get(Estado.EN_PROGRESO.value, 0)}"),
        rx.badge(f"Completadas: {c.get(Estado.COMPLETADA.value, 0)}"),
        spacing="4",
        wrap="wrap",
        class_name="mt-4"
    )


# -----------------------------
# Página principal
# -----------------------------
@rx.page(route="/", title="Kanban – Contadores")
def index() -> rx.Component:
    return rx.container(
        rx.vstack(
            rx.heading("Tablero Kanban (contadores nativos)", size="7"),
            rx.text(
                "Ejercicio: calcular y mostrar la cantidad de tareas por estado sin librerías de gráficos.",
                size="3",
            ),
            rx.hstack(
                columna(Estado.PENDIENTE),
                columna(Estado.EN_PROGRESO),
                columna(Estado.COMPLETADA),
                align="start",
                spacing="4",
                wrap="wrap",
                class_name="mt-6"
            ),
            panel_contadores(),
            spacing="5",
        ),
        size="4",
    )


# -----------------------------
# App
# -----------------------------
app = rx.App()
app.add_page(index)
