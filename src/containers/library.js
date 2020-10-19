import React from "react";
import { Library } from "../components";
import contentData from "../data/content.json";
import Carousel from "nuka-carousel";
import { useWindowSize } from "../hooks/use-window-size";
import { slidesToShow } from "../helpers/browse";

export default function LibraryContainer({
  activeGenre,
  setActiveGenre,
  setSelectedFeature,
  contentType,
  genres,
  content,
  setContent,
}) {
  const size = useWindowSize();

  const handleGenreSelect = (genre) => {
    setActiveGenre(genre);
    if (genre === "All") {
      return setContent(contentData[contentType]);
    }
    const filteredContent = contentData[contentType].filter((item) =>
      item.genre.includes(genre)
    );
    setContent(filteredContent);
  };

  return (
    <>
      <Library.Divider />
      <Library>
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
              slidesToShow={slidesToShow(size)}
              wrapAround={true}
              withoutControls={content.length <= 1}
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
                    onClick={() => setSelectedFeature(item)}
                    onKeyDown={({ keyCode }) =>
                      keyCode === 13 && setSelectedFeature(item)
                    }
                  />
                );
              })}
            </Carousel>
            <Library.CarouselOverlay show={content.length > 4} />
          </Library.CarouselGroup>
        </Library.CarouselContainer>
      </Library>
    </>
  );
}
