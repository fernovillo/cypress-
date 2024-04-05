///<reference types="Cypress" />

describe("Function para Type", () => {
  // Open Cypress|Set `.only`
  it(" Type ---> ENTER ", () => {
    cy.visit("https://www.google.com/?hl=es"),
      cy.title().should("eq", "Google"),
      cy.wait(1500);

    cy.log("El titulo esta ok");
    cy.wait(3000);

    /* Cap50.- ComboBox Select P-4 me queda armar este ejemplo de multi select */
  });
});
