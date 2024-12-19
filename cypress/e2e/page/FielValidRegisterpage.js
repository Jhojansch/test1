import BasePage from "../base/BasePage";
class FielValidRegisterpage extends BasePage {
    //validacion de registro 

    
    xpathRegisterLink = "//a[normalize-space(text())='Sign up']"
    cssInputNombreCompleto = '#full-name'
    cssInputEmail = '#email'
    cssInputPassword = 'input#password'
    cssInputConfirmPassword = 'input#confirm-password'
    xpathSingInLink = "//a[@href='/auth/sign-in']"
    xpathMensajeAlerta = "//span[text()=' Passwords do not match ']"

    clickRegister() {
        this.clickElementByXpath(this.xpathRegisterLink);
    }
    registroNombre(nombre_completo) {
        this.typeTextByCss(this.cssInputNombreCompleto, nombre_completo);
    }
    registroEmail(correo) {
        this.typeTextByCss(this.cssInputEmail, correo);
    }
    registroClave(password) {
        this.typeTextByCss(this.cssInputPassword, password);
    }
    registroClaveConfirmacion(Confirmpassword) {
        this.typeTextByCss(this.cssInputConfirmPassword, Confirmpassword);
    }
    textAlertVerify(text) {
        this.wait(2)
        this.getElementByXpath(this.xpathMensajeAlerta).should('contain.text', text)
    }
    clickRegisterUser() {
        this.getElementByXpath(this.xpathSingInLink).should('not.be.disabled');
        this.clickElementByXpath(this.xpathSingInLink)
    }

}
export default new FielValidRegisterpage();