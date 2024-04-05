///<reference types="Cypress" />

describe("Ejemplo de page UP y down", () => {
  it("Type page UP", () => {
    cy.visit("https://opencart.abstracta.us/");
    cy.title().should("eq", "Your Store");
    cy.wait(1000);
    cy.get("#search").type(`{pageup}`);
    cy.wait(2000);
  });

  it.only("Type page Down", () => {
    cy.visit("https://opencart.abstracta.us/");
    cy.title().should("eq", "Your Store");
    cy.wait(1000);
    cy.get("#search").type(`{pagedown}`);
    cy.wait(2000);
  });
}); //cierre de decriben
/* only sirve para marcar el it que uno quiere correr*/
