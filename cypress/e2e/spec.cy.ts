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

  it("should be possible to check out a dog", () => {
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

    cy.get('[data-cy="dog-list"]')
      .find('[data-cy="dogOscar Jr."]')
      .find('[data-cy="check-box"]')
      .children(".chakra-checkbox__input")
      .click({ force: true });

    cy.get('[data-cy="dog-list"]')
      .find('[data-cy="dogOscar Jr."]')
      .find('[data-cy="check-box"]')
      .children(".chakra-checkbox__input")
      .should("not.be.checked");
  });

  it("should be possible to navigate to and view a dog detail page", () => {
    cy.visit("/");
    cy.get('[data-cy="dog-list"]').find('[data-cy="dogPixy"]').click();
    cy.url().should("include", "/dogs/");
    cy.get('[data-cy="dog-detailPixy"]').should("exist");
  });

  it("should be possible to check in a dog from the detail page", () => {
    cy.visit("/");
    cy.get('[data-cy="dog-list"]').find('[data-cy="dogDella"]').click();
    cy.url().should("include", "/dogs/");
    cy.get('[data-cy="dog-detailDella"]')
      .should("exist")
      .find('[data-cy="check-box"]')
      .first()
      .click();

    cy.get('[data-cy="dog-detailDella"]')
      .find('[data-cy="check-box"]')
      .children(".chakra-checkbox__input")
      .should("be.checked");
  });

  it("should be possible to check out a dog from the detail page", () => {
    cy.visit("/");
    cy.get('[data-cy="dog-list"]').find('[data-cy="dogDella"]').click();
    cy.url().should("include", "/dogs/");
    cy.get('[data-cy="dog-detailDella"]')
      .should("exist")
      .find('[data-cy="check-box"]')
      .first()
      .click();

    cy.get('[data-cy="dog-detailDella"]')
      .find('[data-cy="check-box"]')
      .children(".chakra-checkbox__input")
      .should("be.checked");

    cy.get('[data-cy="dog-detailDella"]')
      .find('[data-cy="check-box"]')
      .children(".chakra-checkbox__input")
      .click({ force: true });

    cy.get('[data-cy="dog-detailDella"]')
      .find('[data-cy="check-box"]')
      .children(".chakra-checkbox__input")
      .should("not.be.checked");
  });

  it("should be possible to delete a dog from the detail page", () => {
    cy.visit("/");
    cy.get('[data-cy="dog-list"]').find('[data-cy="dogBuster"]').click();
    cy.url().should("include", "/dogs/");
    cy.get('[data-cy="dog-detailBuster"]').should("exist");

    cy.get("[data-cy=manage-dog]").click();
    cy.get("[data-cy=delete-button]").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
    cy.get('[data-cy="dog-detailBuster"]').should("not.exist");
  });

  it("should be possible to edit a dog from the detail page", () => {
    cy.visit("/");
    cy.get('[data-cy="dog-list"]').find('[data-cy="dogOscar Jr."]').click();
    cy.url().should("include", "/dogs/");
    cy.get('[data-cy="dog-detailOscar Jr."]').should("exist");

    cy.get("[data-cy=manage-dog]").click();
    cy.get("[data-cy=edit-button]").click();
    cy.get("[data-cy=dog-name]").clear().type("Oscar");
    cy.get("[data-cy=submit-button]").click();
    cy.url().should("include", "/dogs/");
    cy.get("[data-cy=name]").should("contain", "Oscar");
  });
});
