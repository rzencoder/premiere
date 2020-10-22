import React from "react";
import { render } from "@testing-library/react";
import { Feature } from "../../components";
import { displayAgeRating, getRatingColor } from "../../helpers/browse";

const feature = {
  Title: "Inception",
  Year: "2010",
  imdbRating: "8.8",
  Rated: "R",
  Plot: "A team tries to plant a memory into a business man",
  Actors: ["Leonardo DiCaprio", "Ellen Page", "Cillian Murphy"],
};

describe("<Feature />", () => {
  it("renders <Feature /> component", () => {
    const { container, getByText, getByAltText } = render(
      <Feature>
        <Feature.Background src="images/background.png" />
        <Feature.Overlay />
        <Feature.TextContainer>
          <Feature.Title>{feature.Title}</Feature.Title>
          <Feature.Details>
            <Feature.Year>
              {feature.totalSeasons
                ? feature.totalSeasons + " Seasons"
                : feature.Year}
            </Feature.Year>
            <Feature.AgeRating
              src={displayAgeRating(feature.Rated)}
              alt={feature.Rated}
            />
            <Feature.Rating color={getRatingColor(feature.imdbRating)}>
              {feature.imdbRating}
            </Feature.Rating>
          </Feature.Details>
          <Feature.Text>{feature.Plot}</Feature.Text>
          <Feature.SubText>{feature.Actors}</Feature.SubText>
          <Feature.Button onClick={() => {}}>▶{"  "}Watch Now</Feature.Button>
        </Feature.TextContainer>
      </Feature>
    );

    expect(getByText("Inception")).toBeTruthy();
    expect(getByText("2010")).toBeTruthy();
    expect(
      getByText("A team tries to plant a memory into a business man")
    ).toBeTruthy();
    expect(getByText("8.8")).toBeTruthy();
    expect(getByAltText("R").getAttribute("src")).toEqual(
      "../images/icons/15.png"
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders default background when src is blank", () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Background src="" />
        <Feature.Overlay />
        <Feature.TextContainer>
          <Feature.Title>{feature.Title}</Feature.Title>
          <Feature.Details>
            <Feature.Year>
              {feature.totalSeasons
                ? feature.totalSeasons + " Seasons"
                : feature.Year}
            </Feature.Year>
            <Feature.AgeRating
              src={displayAgeRating(feature.Rated)}
              alt={feature.Rated}
            />
            <Feature.Rating color={getRatingColor(feature.imdbRating)}>
              {feature.imdbRating}
            </Feature.Rating>
          </Feature.Details>
          <Feature.Text>{feature.Plot}</Feature.Text>
          <Feature.SubText>{feature.Actors}</Feature.SubText>
          <Feature.Button onClick={() => {}}>▶{"  "}Watch Now</Feature.Button>
        </Feature.TextContainer>
      </Feature>
    );

    expect(getByText("Inception")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
