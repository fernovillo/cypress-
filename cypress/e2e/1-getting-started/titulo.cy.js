///<reference types="Cypress" />

describe(" Validando el título ", () => {
  // Open Cypress|Set `.only`
  it(" Test validar el titulo ", () => {
    cy.visit("https://www.demoblaze.com/"), cy.title().should("eq", "STORE");

    cy.log("El titulo esta ok");
  });
});
