import React from "react";
import { render } from "@testing-library/react";
import { Showcase } from "../../components";
jest.mock("react-router-dom");

describe("<Showcase />", () => {
  it("renders <Showcase /> component", () => {
    const { container, getByText, getByAltText } = render(
      <Showcase>
        <Showcase.Section>
          <Showcase.ImageContainer>
            <Showcase.ImageColumn>
              <Showcase.ImageRow>
                <Showcase.ImageOverlay>
                  <Showcase.TextContainer>
                    <Showcase.ItemTitle>Blockbusters</Showcase.ItemTitle>
                    <Showcase.ItemName>Joker</Showcase.ItemName>
                  </Showcase.TextContainer>
                </Showcase.ImageOverlay>
                <Showcase.Image src="/images/showcase/joker.jpg" alt="joker" />
              </Showcase.ImageRow>
            </Showcase.ImageColumn>
            <Showcase.ImageColumn>
              <Showcase.ImageRow>
                <Showcase.ImageOverlay>
                  <Showcase.TextContainer>
                    <Showcase.ItemTitle>Latest Series</Showcase.ItemTitle>
                    <Showcase.ItemName>Devs</Showcase.ItemName>
                  </Showcase.TextContainer>
                </Showcase.ImageOverlay>
                <Showcase.Image src="/images/showcase/devs.jpg" alt="devs" />
              </Showcase.ImageRow>
              <Showcase.ImageRow>
                <Showcase.ImageOverlay>
                  <Showcase.TextContainer>
                    <Showcase.ItemTitle>Documentaries</Showcase.ItemTitle>
                    <Showcase.ItemName>Planet Earth</Showcase.ItemName>
                  </Showcase.TextContainer>
                </Showcase.ImageOverlay>
                <Showcase.Image
                  src="/images/showcase/planet-earth.jpg"
                  alt="planet earth"
                />
              </Showcase.ImageRow>
            </Showcase.ImageColumn>
            <Showcase.ImageColumn largerScreensOnly>
              <Showcase.ImageRow>
                <Showcase.ImageOverlay>
                  <Showcase.TextContainer>
                    <Showcase.ItemTitle>Comedies</Showcase.ItemTitle>
                    <Showcase.ItemName>Bridesmaids</Showcase.ItemName>
                  </Showcase.TextContainer>
                </Showcase.ImageOverlay>
                <Showcase.Image
                  src="/images/showcase/bridesmaids.jpg"
                  alt="bridesmaids"
                />
              </Showcase.ImageRow>
              <Showcase.ImageRow>
                <Showcase.ImageOverlay>
                  <Showcase.TextContainer>
                    <Showcase.ItemTitle>Action</Showcase.ItemTitle>
                    <Showcase.ItemName>Mission Impossible</Showcase.ItemName>
                  </Showcase.TextContainer>
                </Showcase.ImageOverlay>
                <Showcase.Image
                  src="/images/showcase/mission-impossible.jpg"
                  alt="mission impossible"
                />
              </Showcase.ImageRow>
              <Showcase.ImageRow>
                <Showcase.ImageOverlay>
                  <Showcase.TextContainer>
                    <Showcase.ItemTitle>Romance</Showcase.ItemTitle>
                    <Showcase.ItemName>500 Days of Summer</Showcase.ItemName>
                  </Showcase.TextContainer>
                </Showcase.ImageOverlay>
                <Showcase.Image
                  src="/images/showcase/summer.jpg"
                  alt="500 days of summer"
                />
              </Showcase.ImageRow>
            </Showcase.ImageColumn>
          </Showcase.ImageContainer>
        </Showcase.Section>
        <Showcase.Section>
          <Showcase.Button>Try it Now</Showcase.Button>
        </Showcase.Section>
      </Showcase>
    );

    expect(getByText("Blockbusters")).toBeTruthy();
    expect(getByText("Joker")).toBeTruthy();
    expect(getByAltText("joker")).toBeTruthy();
    expect(getByText("Comedies")).toBeTruthy();
    expect(getByText("Bridesmaids")).toBeTruthy();
    expect(getByAltText("bridesmaids")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
