describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
  });
  it("should have the brand inside an h1 tag", () => {
    cy.visit("/");
    cy.get('[data-cy="dog-list"]')
      .find('[data-cy="dogOscar Jr."]')
      .find('[data-cy="check-box"]')
      .click();

    cy.get('[data-cy="dog-list"]')
      .find('[data-cy="dogOscar Jr."]')
      .find('[data-cy="check-box"]').children(".chakra-checkbox__input").should("be.checked");
  });
});
