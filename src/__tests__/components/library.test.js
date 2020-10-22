import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Library } from "../../components";
import Carousel from "nuka-carousel";

const genres = ["Action", "Comedy", "Drama"];

const content = [
  {
    title: "Blade Runner 2049",
    genre: ["Action", "Drama", "Mystery"],
    slug: "blade-runner-2049",
  },
  {
    title: "Inception",
    genre: ["Action", "Sci Fi"],
    slug: "inception",
  },
  {
    title: "500 Days of Summer",
    genre: ["Comedy", "Romance", "Drama"],
    slug: "days-of-summer",
  },
  {
    title: "Sunshine",
    genre: ["Sci Fi"],
    slug: "sunshine",
  },
  {
    title: "Amélie",
    genre: ["Comedy", "Romance"],
    slug: "amelie",
  },
];

describe("<Library />", () => {
  it("renders <Library /> component", () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <>
        <Library.Divider />
        <Library>
          <Library.Selector>
            {genres.map((item) => (
              <Library.SelectorItem active={true} key={item} onClick={() => {}}>
                {item}
              </Library.SelectorItem>
            ))}
          </Library.Selector>
          <Library.CarouselContainer>
            <Library.Panel>Streaming on Premiere</Library.Panel>
            <Library.CarouselGroup>
              <Carousel
                slidesToShow={4}
                wrapAround={true}
                withoutControls={false}
                renderBottomCenterControls={null}
                renderCenterLeftControls={({ previousSlide }) => (
                  <Library.CarouselButton onClick={previousSlide}>
                    {"<"}
                  </Library.CarouselButton>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <Library.CarouselButton onClick={nextSlide}>
                    {">"}
                  </Library.CarouselButton>
                )}
              >
                {content.map((item) => {
                  return (
                    <Library.Image
                      src={`../images/content/${item.slug}-poster.jpg`}
                      alt={item.title}
                      key={item.slug}
                      onClick={() => {}}
                      onKeyDown={() => {}}
                    />
                  );
                })}
              </Carousel>
              <Library.CarouselOverlay show={true} />
            </Library.CarouselGroup>
          </Library.CarouselContainer>
        </Library>
      </>
    );

    expect(getByText("Action")).toBeTruthy();
    expect(getByText("Comedy")).toBeTruthy();
    expect(getByText("Drama")).toBeTruthy();
    expect(getByAltText("Blade Runner 2049")).toBeTruthy();
    expect(getByAltText("Inception")).toBeTruthy();
    expect(getByAltText("500 Days of Summer")).toBeTruthy();
    expect(getByAltText("Sunshine")).toBeTruthy();
    expect(getByAltText("Amélie")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("shows/hides items when carousel button is pressed", () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <Library>
        <Library.CarouselContainer>
          <Library.Panel>Streaming on Premiere</Library.Panel>
          <Library.CarouselGroup>
            <Carousel
              slidesToShow={4}
              wrapAround={true}
              withoutControls={false}
              renderBottomCenterControls={null}
              renderCenterLeftControls={({ previousSlide }) => (
                <Library.CarouselButton onClick={previousSlide}>
                  {"<"}
                </Library.CarouselButton>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <Library.CarouselButton
                  data-testid="carousel-right"
                  onClick={nextSlide}
                >
                  {">"}
                </Library.CarouselButton>
              )}
            >
              {content.map((item) => {
                return (
                  <Library.Image
                    src={`../images/content/${item.slug}-poster.jpg`}
                    alt={item.title}
                    key={item.slug}
                    onClick={() => {}}
                    onKeyDown={() => {}}
                  />
                );
              })}
            </Carousel>
            <Library.CarouselOverlay show={true} />
          </Library.CarouselGroup>
        </Library.CarouselContainer>
      </Library>
    );

    expect(getByAltText("Blade Runner 2049")).toBeTruthy();
    expect(getByAltText("Amélie")).toBeTruthy();
    expect(getByAltText("Amélie").getAttribute("aria-hidden")).toEqual("true");
    expect(
      getByAltText("Blade Runner 2049").getAttribute("aria-hidden")
    ).toEqual("false");
    fireEvent.click(getByTestId("carousel-right"));
    expect(getByAltText("Amélie").getAttribute("aria-hidden")).toEqual("false");
    expect(
      getByAltText("Blade Runner 2049").getAttribute("aria-hidden")
    ).toEqual("true");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders a different style to unselected genres", () => {
    const { container, getByText } = render(
      <Library>
        <Library.Selector>
          {genres.map((item) => (
            <Library.SelectorItem active={false} key={item} onClick={() => {}}>
              {item}
            </Library.SelectorItem>
          ))}
        </Library.Selector>
      </Library>
    );

    expect(getByText("Action")).toBeTruthy();
    expect(getByText("Comedy")).toBeTruthy();
    expect(getByText("Drama")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("hides overlay when show is false", () => {
    const { container, getByText } = render(
      <Library>
        <Library.CarouselContainer>
          <Library.Panel>Streaming on Premiere</Library.Panel>
          <Library.CarouselGroup>
            <Library.CarouselOverlay show={false} />
          </Library.CarouselGroup>
        </Library.CarouselContainer>
      </Library>
    );

    expect(getByText("Streaming on Premiere")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
