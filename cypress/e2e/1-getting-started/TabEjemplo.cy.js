///<reference types="cypress" />

import "cypress-plugin-tab";

describe("Ejemplo funcion tab ", () => {
  it("Type con Tab ", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.title().should("eq", "STORE");
    cy.wait(1000);
    cy.get(":nth-child(2) > .nav-link")
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
    cy.get("#recipient-email")
      .type("fer@gmail.com")
      .tab()
      .type("Fernando")
      .tab()
      .type("Novillo");
    cy.wait(2000);
    cy.get(
      "#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
  });
}); //cierre de decribe
