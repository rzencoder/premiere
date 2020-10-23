describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Can navigate between home, sign in and sign up pages when not logged in", () => {
    cy.contains("Subscribe free for 30 days. Cancel anytime");
    cy.get("#nav-signin").click();
    cy.contains("New to Premiere? Create an account");
    cy.get("#signin-link-to-signup").click();
    cy.contains("Already a member? Sign in now");
    cy.get("#signup-link-to-signin").click();
    cy.contains("New to Premiere? Create an account");
    cy.get("#home-logo").click();
    cy.contains("Blockbusters");
  });

  it("home page call to actions navigate to sign up page", () => {
    cy.contains("Subscribe free for 30 days. Cancel anytime");
    cy.get("#jumbotron-cta").click();
    cy.contains("Already a member? Sign in now");
    cy.get("#home-logo").click();
    cy.contains("Blockbusters");
    cy.get("#showcase-cta").click();
    cy.contains("Already a member? Sign in now");
  });

  it("navigates to the browse page when logged in.", () => {
    cy.get("#nav-signin").click();
    cy.get("#signin-email").type("t@test.com");
    cy.get("#signin-password").type("test123");
    cy.get("#signin-submit").click();
    cy.contains("Streaming on Premiere", { timeout: 8000 });
    cy.get("#sign-out").click();
    cy.contains("Subscribe free for 30 days. Cancel anytime");
  });

  it("unable to navigate to other pages bar browse when signed in", () => {
    cy.get("#nav-signin").click();
    cy.get("#signin-email").type("t@test.com");
    cy.get("#signin-password").type("test123");
    cy.get("#signin-submit").click();
    cy.contains("Streaming on Premiere", { timeout: 8000 });
    cy.visit("http://localhost:3000");
    cy.contains("Subscribe free for 30 days. Cancel anytime").should(
      "not.exist"
    );
    cy.contains("Streaming on Premiere");
    cy.visit("http://localhost:3000/signin");
    cy.contains("New to Premiere? Create an account").should("not.exist");
    cy.contains("Streaming on Premiere");
    cy.visit("http://localhost:3000/signup");
    cy.contains("Already a member? Sign in now").should("not.exist");
    cy.contains("Streaming on Premiere");
    cy.get("#sign-out").click();
    cy.contains("Subscribe free for 30 days. Cancel anytime");
  });
});
