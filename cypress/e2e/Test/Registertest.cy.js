import Registerpage from "../page/Registerpage";
describe(
    "registro de usurio", () => {
        it(
            "registro exitoso", () => {
                cy.log("Se inicia el Registro....")
                Registerpage.clickRegister()
                Registerpage.registroFormulario("jhojan choque", "jhojanschoquem@gmail.com", "Jchoque1622+")
                Registerpage.clickRegisterUser()
                Registerpage.textAlertVerify("Successful registration")
            }
        )
    }
)   