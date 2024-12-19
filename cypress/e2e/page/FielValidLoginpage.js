import BasePage from "../base/BasePage";
class FielValidLoginpage extends BasePage {
   //validacion de login
   cssInputEmailLogin = 'input#email'
   cssInputPasswordLogin = 'input#password'
   xpathLoginLink = "//button[normalize-space(text())='Sign in']"
   xpathDesplegarLink = "//img[@alt='Rengoku']"
   xpathLogoutLink = "//a[normalize-space(text())='Logout']"

   loginEmail(correo,) {
      this.wait(2)
      this.typeTextByCss(this.cssInputEmailLogin, correo);
   }
   loginpassword(password) {
      this.wait(2)
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
      this.wait(2)
      this.clickElementByXpath(this.xpathLogoutLink)
   }
}
export default new FielValidLoginpage();