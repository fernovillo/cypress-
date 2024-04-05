///<reference types="cypress" />

import "cypress-plugin-tab";

describe("Ejemplo funcion tab ", () => {
  it("Type con Tab ", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.title().should("eq", "STORE");
    cy.wait(2000);
    cy.get("#itemc").click();
    cy.wait(2000);
    cy.get("#next2").click();
    cy.wait(2000);
    cy.get("#prev2").click();
    cy.wait(2000);
    cy.get("#next2").click(50, 3); //Cordenadas dentro de un elemento
    cy.wait(2000);
    cy.get(".carousel-control-prev-icon").click();
    cy.wait(1000);
    cy.get(".carousel-control-prev-icon").click();
    cy.wait(1000);
    cy.get(".carousel-control-next-icon").click({ force: true });

    //cy.get('[onclick="byCat("monitor")"]').should("be.visible").click();
    //cy.get("byCat('monitor')").should("be.visible").click();
  });
}); //cierre de decribe
