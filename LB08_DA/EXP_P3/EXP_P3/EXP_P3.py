import reflex as rx

class EstadoFormulario(rx.State):
    nombre: str = ""
    email: str = ""
    mensaje: str = ""

    def set_nombre(self, value: str):
        self.nombre = value

    def set_email(self, value: str):
        self.email = value

    def set_mensaje(self, value: str):
        self.mensaje = value

    def enviar_formulario(self):
        print(f"Nombre: {self.nombre}")
        print(f"Email: {self.email}")
        print(f"Mensaje: {self.mensaje}")
        self.nombre = ""
        self.email = ""
        self.mensaje = ""

def formulario_contacto():
    return rx.vstack(
        rx.input(
            placeholder="Nombre",
            value=EstadoFormulario.nombre,
            on_change=EstadoFormulario.set_nombre,
        ),
        rx.input(
            placeholder="Email",
            value=EstadoFormulario.email,
            on_change=EstadoFormulario.set_email,
        ),
        rx.text_area(
            placeholder="Mensaje",
            value=EstadoFormulario.mensaje,
            on_change=EstadoFormulario.set_mensaje,
        ),
        rx.button(
            "Enviar",
            on_click=EstadoFormulario.enviar_formulario,
        ),
        spacing="4",  # <- Aquí corregido (sin px)
        width="400px",
    )


@rx.page()   # ✅ OJO: con paréntesis
def index():
    return rx.center(
        formulario_contacto(),
        padding="20px",
    )

app = rx.App()
# app.add_state(EstadoFormulario) ❌ no se necesita en 0.8.15
# app.compile() ❌ tampoco se usa
# No pongas add_state, Reflex ya reconoce el estado automáticamente
