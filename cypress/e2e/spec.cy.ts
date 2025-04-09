describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
  });

  it("should be possible view list of dogs", () => {
    cy.visit("/");
    cy.get('[data-cy="dog-list"]')
      .should("have.length.at.least", 1)
      .find('[data-cy="dogTore"]');
  });

  it("should be possible to check in a dog", () => {
    cy.visit("/");
    cy.get('[data-cy="dog-list"]')
      .find('[data-cy="dogOscar Jr."]')
      .find('[data-cy="check-box"]')
      .click();

    cy.get('[data-cy="dog-list"]')
      .find('[data-cy="dogOscar Jr."]')
      .find('[data-cy="check-box"]')
      .children(".chakra-checkbox__input")
      .should("be.checked");
  });

  it("should be possible to navigate to and view a dog detail page", () => {
    cy.visit("/");
    cy.get('[data-cy="dog-list"]').find('[data-cy="dogPixy"]').click();
    cy.url().should("include", "/dogs/");
    cy.get('[data-cy="dog-detailPixy"]').should("exist");
  });
});
