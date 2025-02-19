export class CartPage {
  shoppingCartBadge = '[data-test="shopping-cart-badge"]';
  shoppingCartLink = '[data-test="shopping-cart-link"]';
  cartItems = '[class="cart_item"]';

  cartCounter() {
    return cy.get(this.shoppingCartBadge);
  }

  openCart() {
    cy.get(this.shoppingCartLink).click();
  }

  getCartItems() {
    return cy.get(this.cartItems);
  }
}
