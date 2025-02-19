export class LoginPage {
  private usernameField = '[data-test="username"]';
  private passwordField = '[data-test="password"]';
  private loginButton = '[data-test="login-button"]';
  private errorMessage = '[data-test="error"]';

  enterUsername(username: string) {
    cy.get(this.usernameField).type(username);
  }

  enterPassword(password: string) {
    cy.get(this.passwordField).type(password);
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}
