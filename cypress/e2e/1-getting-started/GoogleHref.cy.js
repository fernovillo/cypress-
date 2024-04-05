///<reference types="Cypress" />

describe("Function para Type", () => {
  // Open Cypress|Set `.only`
  it(" Type ---> ENTER ", () => {
    cy.visit("https://www.google.com/?hl=es"),
      cy.title().should("eq", "Google"),
      cy.wait(1500);

    cy.log("El titulo esta ok");
    cy.wait(3000);

    cy.get("[name='q']")
      .type("cypress")
      .type("{enter}"); /* copiando el selector
    /* cy.get("#APjFqb").type("cypress io"); 
    cy.get("[name='q']").type("cypress io {enter}");
    cy.wait(3000);
    cy.get("[href = '#']").click();*/
  });
});
