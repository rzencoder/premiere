describe("Browse", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#nav-signin").click();
    cy.get("#signin-email").type("t@test.com");
    cy.get("#signin-password").type("test123");
    cy.get("#signin-submit").click();
  });

  afterEach(() => {
    cy.get("#sign-out").click();
    cy.contains("Subscribe free for 30 days. Cancel anytime");
  });

  it("open and close profile", () => {
    cy.get("#profile-menu", { timeout: 8000 }).should(
      "have.css",
      "opacity",
      "0"
    );
    cy.get("#open-profile").click();
    cy.get("#profile-menu").should("have.css", "opacity", "1");
  });

  it("changes the feature when new film picked", () => {
    cy.contains("Inception", { timeout: 8000 }).should("not.exist");
    cy.get('[alt="Inception"]').click();
    cy.contains("Blade Runner 2049", { timeout: 2000 }).should("not.exist");
    cy.contains("Inception");
  });

  it("search function returns a film", () => {
    cy.contains("Inception", { timeout: 8000 }).should("not.exist");
    cy.get("#search-button").click();
    cy.get("#search").type("incep");
    cy.get('[alt="Inception"]').click();
    cy.contains("Inception");
    cy.contains("Blade Runner 2049").should("not.exist");
  });

  it("content selection changes feature", () => {
    cy.contains("Twin Peaks", { timeout: 8000 }).should("not.exist");
    cy.get("#series-toggle").click();
    cy.contains("Twin Peaks");
    cy.contains("Blade Runner 2049").should("not.exist");
    cy.get("#films-toggle").click();
    cy.contains("Twin Peaks").should("not.exist");
    cy.contains("Blade Runner 2049");
  });
});
