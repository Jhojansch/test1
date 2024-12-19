import BasePage from "../base/BasePage";
class Registerpage extends BasePage {
    xpathRegisterLink = "//a[normalize-space(text())='Sign up']"
    cssInputNombreCompleto = '#full-name'
    cssInputEmail = '#email'
    cssInputPassword = 'input#password'
    cssInputConfirmPassword = 'input#confirm-password'
    xpathSingInLink = "//button[normalize-space(text())='Sign up']"
    xpathMensajeAlerta = "//*[@role='alert']/div[2]"

    clickRegister() {
        this.clickElementByXpath(this.xpathRegisterLink);
    }

    registroFormulario(nombre_completo, correo, password) {
        this.typeTextByCss(this.cssInputNombreCompleto, nombre_completo);
        this.typeTextByCss(this.cssInputEmail, correo);
        this.typeTextByCss(this.cssInputPassword, password);
        this.typeTextByCss(this.cssInputConfirmPassword, password);
    }

    clickRegisterUser() {
        this.getElementByXpath(this.xpathSingInLink).should('not.be.disabled');
        this.clickElementByXpath(this.xpathSingInLink)
    }

    getAlertaRegistro() {
        this.wait(2)
        return this.getTextByXpath(this.xpathRegisterLink);
    }

    textAlertVerify(text) {
        this.wait(2)
        this.getElementByXpath(this.xpathMensajeAlerta).should('contain.text', text)
    }

}
export default new Registerpage();