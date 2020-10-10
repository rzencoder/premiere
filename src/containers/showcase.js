import React from "react";
import { Showcase } from "../components";
import * as ROUTES from "../constants/routes";

export default function ShowcaseContainer() {
  return (
    <Showcase>
      <Showcase.Divider grey />
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
              <Showcase.Image src="/images/showcase/joker.png" />
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
              <Showcase.Image src="/images/showcase/devs.png" />
            </Showcase.ImageRow>
            <Showcase.ImageRow>
              <Showcase.ImageOverlay>
                <Showcase.TextContainer>
                  <Showcase.ItemTitle>Documentaries</Showcase.ItemTitle>
                  <Showcase.ItemName>Planet Earth</Showcase.ItemName>
                </Showcase.TextContainer>
              </Showcase.ImageOverlay>
              <Showcase.Image src="/images/showcase/planet-earth.png" />
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
              <Showcase.Image src="/images/showcase/bridesmaids.png" />
            </Showcase.ImageRow>
            <Showcase.ImageRow>
              <Showcase.ImageOverlay>
                <Showcase.TextContainer>
                  <Showcase.ItemTitle>Action</Showcase.ItemTitle>
                  <Showcase.ItemName>Mission Impossible</Showcase.ItemName>
                </Showcase.TextContainer>
              </Showcase.ImageOverlay>
              <Showcase.Image src="/images/showcase/mission-impossible.png" />
            </Showcase.ImageRow>
            <Showcase.ImageRow>
              <Showcase.ImageOverlay>
                <Showcase.TextContainer>
                  <Showcase.ItemTitle>Romance</Showcase.ItemTitle>
                  <Showcase.ItemName>500 Days of Summer</Showcase.ItemName>
                </Showcase.TextContainer>
              </Showcase.ImageOverlay>
              <Showcase.Image src="/images/showcase/summer.png" />
            </Showcase.ImageRow>
          </Showcase.ImageColumn>
        </Showcase.ImageContainer>
      </Showcase.Section>
      <Showcase.Section>
        <Showcase.Button to={ROUTES.SIGNUP}>Try it Now</Showcase.Button>
      </Showcase.Section>
      <Showcase.Divider />
    </Showcase>
  );
}
