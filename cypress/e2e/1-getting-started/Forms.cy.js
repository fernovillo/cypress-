///<reference types="cypress" />

describe("Verificación del título de la página", () => {
  it("Verifica el título de la página", () => {
    // Visita la URL de la página
    cy.visit("https://letcode.in/forms");

    // Verifica que el título sea igual al esperado
    cy.title().should("eq", "LetCode with Koushik");
    cy.wait(1000);

    cy.get("#firstname").should("be.visible").type("Fernando");
    cy.wait(1000);
    cy.get("#lasttname").should("be.visible").type("Novillo");
    cy.wait(1000);
    cy.get("#email").should("be.visible").clear();
    cy.wait(1000);
    cy.get("#email").should("be.visible").type("fer@gmail.com");
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > :nth-child(2) > .field > .control > .select > select"
    )
      .should("be.visible")
      .select("Argentina (+54)")
      .should("have.value", "54");

    cy.wait(1000);
    cy.get("#Phno").should("be.visible").type("9123456789");
    cy.wait(1000);
    cy.get("#Addl1").should("be.visible").type("Rodeo del Medio");
    cy.wait(1000);
    cy.get("#Addl2").should("be.visible").type("Maipú");
    cy.wait(1000);
    cy.get("#state").should("be.visible").type("Mendoza");
    cy.wait(1000);
    cy.get("#postalcode").should("be.visible").type("5529");
    cy.wait(1000);
    cy.get(
      ":nth-child(5) > :nth-child(2) > .field > .control > .select > select"
    )
      .should("be.visible")
      .select("Argentina");
    cy.get('input[type="date"]').type("2024-03-28");
    cy.wait(1000);
    cy.get(
      ":nth-child(6) > :nth-child(2) > .field > .control > :nth-child(1)"
    ).click();
    cy.wait(1000);
    cy.get(".checkbox > input").click();
    cy.wait(1000);
    cy.get('input[type="submit"].button.is-primary').click();
  });
});
