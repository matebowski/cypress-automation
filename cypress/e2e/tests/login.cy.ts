/// <reference types="cypress" />

import { LoginPage } from 'cypress/pageObjects/LoginPage';

describe('Login functionality tests', () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    cy.visit('/');
  });

  it('Login with valid credentials', () => {
    cy.fixture('users').then((users) => {
      loginPage.enterUsername(users.validUser.username);
      loginPage.enterPassword(users.validUser.password);
      loginPage.clickLoginButton();
      cy.url().should('include', '/inventory.html');
    });
  });

  it('Login with invalid credentials', () => {
    cy.fixture('users').then((users) => {
      loginPage.enterUsername(users.validUser.username);
      loginPage.enterPassword(users.validUser.wrongPassword);
      loginPage.clickLoginButton();
      loginPage
        .getErrorMessage()
        .should('be.visible')
        .should(
          'contain.text',
          'Epic sadface: Username and password do not match any user in this service'
        );
    });
  });
});
