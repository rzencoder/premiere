import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "../../components";

describe("<Footer />", () => {
  it("renders <Footer /> component", () => {
    const { container, getByText } = render(
      <>
        <Footer.Break />
        <Footer>
          <Footer.Section>
            <Footer.Column>
              <Footer.Subtitle>Browse</Footer.Subtitle>
              <Footer.Link href="#">TV Shows</Footer.Link>
              <Footer.Link href="#">Films</Footer.Link>
              <Footer.Link href="#">Documentaries</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Subtitle>Help</Footer.Subtitle>
              <Footer.Link href="#">Account</Footer.Link>
              <Footer.Link href="#">Pricing</Footer.Link>
              <Footer.Link href="#">Accessibility</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Subtitle>About</Footer.Subtitle>
              <Footer.Link href="#">Contact</Footer.Link>
              <Footer.Link href="#">Jobs</Footer.Link>
              <Footer.Link href="#">Press</Footer.Link>
            </Footer.Column>
          </Footer.Section>
          <Footer.Divider />
          <Footer.Section>
            <Footer.Link href="#">Premiere</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Legal</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link
              href="https://github.com/rzencoder/premiere"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </Footer.Link>
          </Footer.Section>
        </Footer>
      </>
    );

    expect(getByText("Browse")).toBeTruthy();
    expect(getByText("TV Shows")).toBeTruthy();
    expect(getByText("Films")).toBeTruthy();
    expect(getByText("Documentaries")).toBeTruthy();
    expect(getByText("Account")).toBeTruthy();
    expect(getByText("Help")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
