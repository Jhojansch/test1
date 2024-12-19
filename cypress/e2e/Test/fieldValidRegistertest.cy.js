import FielValidRegisterpage from "../page/FielValidRegisterpage";
describe(
  "Validacion de campos", () => {
    it("validacion de registro", () => {
      cy.log("Se inicia el Registro....")
      FielValidRegisterpage.clickRegister()
      FielValidRegisterpage.registroNombre("123 456")
      FielValidRegisterpage.registroEmail("@gmail.com")
      FielValidRegisterpage.registroClave("Jchoque1")
      FielValidRegisterpage.registroClaveConfirmacion("Jchoque11")
      FielValidRegisterpage.textAlertVerify("Passwords do not match")
      FielValidRegisterpage.clickRegisterUser()
    }
    )
  }
)