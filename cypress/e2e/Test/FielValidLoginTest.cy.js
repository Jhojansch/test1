import FielValidLoginpage from "../page/FielValidLoginpage";
describe(
  "Validacion de campo", () => {

    it('Validacion de Login', () => {
      cy.log("Se inicia el Logeo....")
      FielValidLoginpage.loginEmail("jhojanschoquem@gmail.com")
      FielValidLoginpage.loginpassword("Jchoque1622+")
      FielValidLoginpage.clickLoginUser()
      FielValidLoginpage.ClickDesplegar()
      FielValidLoginpage.ClickLogout()
    })
  }
)