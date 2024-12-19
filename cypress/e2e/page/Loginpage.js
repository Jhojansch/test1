import BasePage from "../base/BasePage";
class Loginpage extends BasePage {
    cssInputEmailLogin = 'input#email'
    cssInputPasswordLogin = 'input#password'
    xpathLoginLink = "//button[normalize-space(text())='Sign in']"
    xpathDesplegarLink = "//img[@alt='Rengoku']"
    xpathLogoutLink = "//a[normalize-space(text())='Logout']"
    xpathMensajeAlerta = "//h2[text()='jhojan choque']"

    loginFormulario(correo, password) {
        this.typeTextByCss(this.cssInputEmailLogin, correo);
        this.typeTextByCss(this.cssInputPasswordLogin, password);
    }
    clickLoginUser() {
        this.clickElementByXpath(this.xpathLoginLink)
    }

    textAlertVerify(text) {
        this.wait(2)
        this.getElementByXpath(this.xpathMensajeAlerta).should('contain.text', text)
    }

    ClickDesplegar() {
        this.wait(5)
        this.clickElementByXpath(this.xpathDesplegarLink)
    }
    ClickLogout() {
        this.wait(5)
        this.clickElementByXpath(this.xpathLogoutLink)
    }


}
export default new Loginpage();
