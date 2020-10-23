describe("Auth", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Close the note", () => {
    cy.get("#nav-signin").click();
    cy.contains(
      "Don't want to sign up? Use these credentials to test the site:"
    );
    cy.get("#note-close").click();
    cy.contains(
      "Don't want to sign up? Use these credentials to test the site:"
    ).should("not.exist");
  });

  it("Can log in and out", () => {
    cy.get("#nav-signin").click();
    cy.get("#signin-email").type("t@test.com");
    cy.get("#signin-password").type("test123");
    cy.get("#signin-submit").click();
    cy.contains("Streaming on Premiere", { timeout: 8000 });
    cy.get("#sign-out").click();
    cy.contains("Subscribe free for 30 days. Cancel anytime");
  });

  it("shows error message when wrong password entered", () => {
    cy.get("#nav-signin").click();
    cy.get("#signin-error").should("not.exist");
    cy.get("#signin-email").type("t@test.com");
    cy.get("#signin-password").type("error123");
    cy.get("#signin-submit").click();
    cy.get("#signin-error");
  });
});
