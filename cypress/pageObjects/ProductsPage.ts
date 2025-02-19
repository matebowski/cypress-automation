import { SortOptions } from 'cypress/enums/SortOption';

export class ProductsPage {
  private inventoryItem = '[data-test="inventory-item"]';
  private inventoryItemName = '[data-test="inventory-item-name"]';
  private inventoryItemPrice = '[data-test="inventory-item-price"]';
  private sortProductsDropdown = '[data-test="product-sort-container"]';
  private addToCartButton = 'button';

  selectSortingOption(option: SortOptions) {
    cy.get(this.sortProductsDropdown).select(option);
  }

  verifyAllProductsHaveDetails() {
    cy.get(this.inventoryItem).each((element) => {
      cy.wrap(element).find(this.inventoryItemName).should('be.visible');
      cy.wrap(element).find(this.inventoryItemPrice).should('be.visible');
      cy.wrap(element).find('button').should('be.visible');
    });
  }

  getProducts() {
    return cy.get(this.inventoryItem);
  }

  getProductNames() {
    return cy.get(this.inventoryItemName);
  }

  addProductToCart(index: number) {
    this.getProducts()
      .eq(index)
      .within(() => {
        cy.get(this.addToCartButton).click();
      });
  }
}
