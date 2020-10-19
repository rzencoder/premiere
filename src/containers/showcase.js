import React from "react";
import { Showcase } from "../components";
import * as ROUTES from "../constants/routes";

export default function ShowcaseContainer() {
  return (
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
              <Showcase.Image src="/images/showcase/joker.png" alt="joker" />
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
              <Showcase.Image src="/images/showcase/devs.png" alt="devs" />
            </Showcase.ImageRow>
            <Showcase.ImageRow>
              <Showcase.ImageOverlay>
                <Showcase.TextContainer>
                  <Showcase.ItemTitle>Documentaries</Showcase.ItemTitle>
                  <Showcase.ItemName>Planet Earth</Showcase.ItemName>
                </Showcase.TextContainer>
              </Showcase.ImageOverlay>
              <Showcase.Image
                src="/images/showcase/planet-earth.png"
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
                src="/images/showcase/bridesmaids.png"
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
                src="/images/showcase/mission-impossible.png"
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
                src="/images/showcase/summer.png"
                alt="500 days of summer"
              />
            </Showcase.ImageRow>
          </Showcase.ImageColumn>
        </Showcase.ImageContainer>
      </Showcase.Section>
      <Showcase.Section>
        <Showcase.Button to={ROUTES.SIGNUP}>Try it Now</Showcase.Button>
      </Showcase.Section>
    </Showcase>
  );
}
