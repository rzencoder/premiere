import React, { useState } from "react";
import { Library } from "../components";
import { filterGenres } from "../helpers/browse";
import contentData from "../data/content.json";
import Carousel from "nuka-carousel";

export default function LibraryContainer({
  activeGenre,
  setActiveGenre,
  setSelectedFeature,
  contentType,
  genres,
  content,
  setContent,
}) {
  const handleGenreSelect = (genre) => {
    setActiveGenre(genre);
    if (genre === "All") {
      return setContent(contentData[contentType]);
    }
    const filteredContent = contentData[contentType].filter(
      (item) => item.genre === genre
    );
    setContent(filteredContent);
  };

  return (
    <Library>
      <Library.Divider />
      <Library.Selector>
        {genres.map((item) => (
          <Library.SelectorItem
            active={item === activeGenre}
            key={item}
            onClick={() => handleGenreSelect(item)}
          >
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
            withoutControls={content.length <= 1}
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
                  src={`../images/content/${item.slug}-poster.png`}
                  onClick={() => setSelectedFeature(item)}
                />
              );
            })}
          </Carousel>
          <Library.CarouselOverlay />
        </Library.CarouselGroup>
      </Library.CarouselContainer>
    </Library>
  );
}
