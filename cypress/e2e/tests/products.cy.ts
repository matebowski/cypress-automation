/// <reference types="cypress" />

import { LoginPage } from '../../pageObjects/LoginPage';
import { ProductsPage } from '../../pageObjects/ProductsPage';
import { SortOptions } from '../../enums/SortOption';

describe('Products page functionality', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    cy.visit('/');
    cy.fixture('users').then((users) => {
      loginPage.enterUsername(users.validUser.username);
      loginPage.enterPassword(users.validUser.password);
      loginPage.clickLoginButton();
      cy.url().should('include', '/inventory.html');
    });
  });

  it('Verify if every product has name, item price and Add to cart button', () => {
    productsPage.verifyAllProductsHaveDetails();
  });

  it('Verify sorting by name in ascending order', () => {
    productsPage.selectSortingOption(SortOptions.NAME_ASC);
    productsPage.getProductNames().then(($names) => {
      const names = [...$names].map((el) => el.innerText);
      const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
      expect(names).to.deep.eq(sortedNames);
    });
  });
});
