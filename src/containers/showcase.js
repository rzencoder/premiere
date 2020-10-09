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
              <Showcase.Image src="/images/joker.png" />
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
              <Showcase.Image src="/images/devs.webp" />
            </Showcase.ImageRow>
            <Showcase.ImageRow>
              <Showcase.ImageOverlay>
                <Showcase.TextContainer>
                  <Showcase.ItemTitle>Documentaries</Showcase.ItemTitle>
                  <Showcase.ItemName>Planet Earth</Showcase.ItemName>
                </Showcase.TextContainer>
              </Showcase.ImageOverlay>
              <Showcase.Image src="/images/planet-earth.jpg" />
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
              <Showcase.Image src="/images/bridesmaids.jpg" />
            </Showcase.ImageRow>
            <Showcase.ImageRow>
              <Showcase.ImageOverlay>
                <Showcase.TextContainer>
                  <Showcase.ItemTitle>Action</Showcase.ItemTitle>
                  <Showcase.ItemName>Mission Impossible</Showcase.ItemName>
                </Showcase.TextContainer>
              </Showcase.ImageOverlay>
              <Showcase.Image src="/images/mission-impossible.webp" />
            </Showcase.ImageRow>
            <Showcase.ImageRow>
              <Showcase.ImageOverlay>
                <Showcase.TextContainer>
                  <Showcase.ItemTitle>Romance</Showcase.ItemTitle>
                  <Showcase.ItemName>500 Days of Summer</Showcase.ItemName>
                </Showcase.TextContainer>
              </Showcase.ImageOverlay>
              <Showcase.Image src="/images/summer.webp" />
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
