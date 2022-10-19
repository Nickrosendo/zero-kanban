describe("Check main structures", () => {
  it("should render without crashing", () => {
    // Start from the index page
    cy.visit("/");

    // match the heading element
    cy.get("body").should("be.visible");
  });

  it("should create a card", () => {
    // Start from the index page
    cy.visit("/");

    // click on the button that add the card
    cy.get("button[data-testid='add-card']:first").click();

    // checks if the card is rendered on DOM
    cy.get("div[data-testid='card']").should("be.visible");
  });

  it("should edit a card name and confirm with enter key", () => {
    // Start from the index page
    cy.visit("/");

    cy.get("button[data-testid='add-card']:first").click();

    cy.get("button[data-testid='edit-card']").should("be.visible");

    cy.get("button[data-testid='edit-card']").click();

    cy.get("input[data-testid='edit-card-name']")
      .should("be.visible")
      .type("{selectAll}{backspace}Foo with enter{enter}");

    cy.get("p[data-testid='card-name']").should(
      "contain.text",
      "Foo with enter"
    );
  });

  it("should edit a card and show the correct icon", () => {
    // Start from the index page
    cy.visit("/");

    cy.get("button[data-testid='add-card']:first").click();

    cy.get("button[data-testid='edit-card']").should("be.visible");
    cy.get("svg[data-testid='start-card-edit-icon']").should("be.visible");

    cy.get("button[data-testid='edit-card']").click();

    cy.get("input[data-testid='edit-card-name']")
      .should("be.visible")
      .type("{selectAll}{backspace}Foo with enter{enter}");

    cy.get("p[data-testid='card-name']").should(
      "contain.text",
      "Foo with enter"
    );

    cy.get("svg[data-testid='start-card-edit-icon']").should("be.visible");
    cy.get("svg[data-testid='confirm-card-edit-icon']").should("not.exist");
  });

  it("should edit a card name with the edit button", () => {
    // Start from the index page
    cy.visit("/");

    cy.get("button[data-testid='add-card']:first").click();

    cy.get("button[data-testid='edit-card']").should("be.visible");
    cy.get("svg[data-testid='start-card-edit-icon']").should("be.visible");

    cy.get("button[data-testid='edit-card']").click();

    cy.get("input[data-testid='edit-card-name']")
      .should("be.visible")
      .type("{selectAll}{backspace}Foo with button");

    cy.get("button[data-testid='edit-card']").click();

    cy.get("p[data-testid='card-name']").should(
      "contain.text",
      "Foo with button"
    );

    cy.get("svg[data-testid='start-card-edit-icon']").should("be.visible");
    cy.get("svg[data-testid='confirm-card-edit-icon']").should("not.exist");
  });

  it("should edit a card description the enter key", () => {
    // Start from the index page
    cy.visit("/");

    cy.get("button[data-testid='add-card']:first").click();

    cy.get("button[data-testid='edit-card']").should("be.visible");
    cy.get("svg[data-testid='start-card-edit-icon']").should("be.visible");

    cy.get("button[data-testid='edit-card']").click();

    cy.get("input[data-testid='edit-card-description']")
      .should("be.visible")
      .type("{selectAll}{backspace}Foo with button{enter}");

    cy.get("span[data-testid='card-description']").should(
      "contain.text",
      "Foo with button"
    );

    cy.get("svg[data-testid='start-card-edit-icon']").should("be.visible");
    cy.get("svg[data-testid='confirm-card-edit-icon']").should("not.exist");
  });

  it("should edit a card description with the edit button", () => {
    // Start from the index page
    cy.visit("/");

    cy.get("button[data-testid='add-card']:first").click();

    cy.get("button[data-testid='edit-card']").should("be.visible");
    cy.get("svg[data-testid='start-card-edit-icon']").should("be.visible");

    cy.get("button[data-testid='edit-card']").click();

    cy.get("input[data-testid='edit-card-description']")
      .should("be.visible")
      .type("{selectAll}{backspace}Foo with button");

    cy.get("button[data-testid='edit-card']").click();

    cy.get("span[data-testid='card-description']").should(
      "contain.text",
      "Foo with button"
    );

    cy.get("svg[data-testid='start-card-edit-icon']").should("be.visible");
    cy.get("svg[data-testid='confirm-card-edit-icon']").should("not.exist");
  });

  it("should remove a card", () => {
    // Start from the index page
    cy.visit("/");

    cy.get("button[data-testid='add-card']:first").click();

    cy.get("button[data-testid='remove-card']").should("be.visible");
    cy.get("svg[data-testid='remove-card-icon']").should("be.visible");

    cy.get("button[data-testid='remove-card']").click();
    cy.get("div[data-testid='card']").should("not.exist");
  });

  it("should search a card", () => {
    // Start from the index page
    cy.visit("/");

    cy.get("button[data-testid='add-card']:first").click();

    cy.get("button[data-testid='add-card']:first").click();

    cy.get("button[data-testid='edit-card']").should("be.visible");

    cy.get("button[data-testid='edit-card']:first").click();

    cy.get("input[data-testid='edit-card-name']")
      .should("be.visible")
      .type("{selectAll}{backspace}Foo{enter}");

    cy.get("input[data-testid='search-cards']:first").type("Foo");

    cy.get("div[data-testid='column-backlog']")
      .children()
      .should("have.length", 1);
  });

  it("should filter a column", () => {
    // Start from the index page
    cy.visit("/");

    cy.get("button[data-testid='filter-cards']").should("be.visible").click();
    cy.get("label[data-testid='select-filter-item']:first")
      .should("be.visible")
      .click();

    cy.get("div[data-testid='column-backlog']").should("not.exist");

    cy.get("label[data-testid='select-filter-item']:first")
      .should("be.visible")
      .click();

    cy.get("div[data-testid='column-backlog']").should("be.visible");
  });
});
