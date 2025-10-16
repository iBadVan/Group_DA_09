import reflex as rx

class EstadoTareas(rx.State):
    tareas: list[str] = ["Tarea 1", "Tarea 2"]
    nueva_tarea: str = ""

    def actualizar_nueva_tarea(self, valor: str):
        self.nueva_tarea = valor

    def agregar_tarea(self):
        if self.nueva_tarea.strip():
            self.tareas.append(self.nueva_tarea.strip())
            self.nueva_tarea = ""

def lista_tareas():
    return rx.fragment(
        rx.heading("Lista de Tareas"),
        rx.vstack(
            rx.foreach(EstadoTareas.tareas, lambda tarea: rx.text(tarea))
        )
    )

def agregar_tarea():
    return rx.hstack(
        rx.input(
            placeholder="Agregar tarea...",
            value=EstadoTareas.nueva_tarea,
            on_change=EstadoTareas.actualizar_nueva_tarea,
        ),
        rx.button("Agregar", on_click=EstadoTareas.agregar_tarea),
    )

def pagina_principal():
    return rx.vstack(
        lista_tareas(),
        agregar_tarea(),
    )

app = rx.App()
app.state = EstadoTareas
app.add_page(pagina_principal, route="/", title="Lista de Tareas")

if __name__ == "__main__":
    app.run()
