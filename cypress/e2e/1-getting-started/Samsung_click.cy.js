///<reference types="cypress" />

import "cypress-plugin-tab";

describe("Ejemplo funcion tab ", () => {
  it("Type con Tab ", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.title().should("eq", "STORE");
    cy.wait(2000);
    cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch")
      .should("be.visible")
      .click({ force: true }); //Obliga a realizar el click
    cy.wait(2000);
    cy.get(".col-sm-12 > .btn").should("be.visible").click();
    //cy.get('a[onclick="addToCart(1)"]').click();
    //cy.get('[data-top="427.578125"]').click();
    cy.wait(1000);
  });
}); //cierre de decribe
