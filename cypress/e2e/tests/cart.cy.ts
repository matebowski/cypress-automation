/// <reference types="cypress" />

import { CartPage } from 'cypress/pageObjects/CartPage';
import { LoginPage } from 'cypress/pageObjects/LoginPage';
import { ProductsPage } from 'cypress/pageObjects/ProductsPage';

describe('Cart functionality', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();

  before(() => {
    cy.visit('/');
    cy.fixture('users').then((users) => {
      loginPage.enterUsername(users.validUser.username);
      loginPage.enterPassword(users.validUser.password);
      loginPage.clickLoginButton();
      cy.url().should('include', '/inventory.html');
    });
  });

  it('Verify adding product to cart', () => {
    productsPage.addProductToCart(0);
    cartPage.cartCounter().should('contain.text', '1');

    cartPage.openCart();
    cy.url().should('include', '/cart.html');

    cartPage.getCartItems().should('have.length', 1);
  });
});
