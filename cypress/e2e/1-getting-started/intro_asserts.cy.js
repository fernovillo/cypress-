///<reference types="cypress" />

describe("instroduccion de los asserts  ", () => {
  it("Demo de los asserts ", () => {
    cy.visit(
      "https://testpages.eviltester.com/styled/validation/input-validation.html"
    );
    cy.title().should("eq", "Input Validation");
    cy.wait(1000);

    cy.get("#firstname").should("be.visible").type("Juan");
    cy.wait(2000);

    cy.get("#surname").should("be.visible").type("NOvillo");
    cy.wait(1000);

    cy.get("#age").should("be.visible").should("be.enabled").type("-38");
  });
}); //cierre de decribe
