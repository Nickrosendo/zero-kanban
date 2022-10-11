describe("Check main structures", () => {
  it("should render the body", () => {
    // Start from the index page
    cy.visit("/");

    // match the heading element
    cy.get("body").should("be.visible");
  });
});
