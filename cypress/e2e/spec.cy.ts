describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
  });
  it("should have the brand inside an h1 tag", () => {
    cy.visit("/");
    cy.get("h1").contains("Welcome to Four legged bunch").should("be.visible");
  });
});

