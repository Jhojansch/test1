import Loginpage from "../page/Loginpage";
describe('Test Login User', () => {
    it('El usuario se Logea correctamente el usuario', () => {
        cy.log("Se inicia el Logeo....")
        Loginpage.loginFormulario("jhojanschoquem@gmail.com", "Jchoque1622+")
        Loginpage.clickLoginUser()
        Loginpage.ClickDesplegar()
        Loginpage.ClickLogout()
    })
}) 