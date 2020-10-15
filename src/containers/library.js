import React, { useEffect, useState } from "react";
import { Library } from "../components";
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

  const size = useWindowSize();

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match

    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

    const [windowSize, setWindowSize] = useState({
      width: undefined,

      height: undefined,
    });

    useEffect(() => {
      // Handler to call on window resize

      function handleResize() {
        // Set window width/height to state

        setWindowSize({
          width: window.innerWidth,

          height: window.innerHeight,
        });
      }

      // Add event listener

      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size

      handleResize();

      // Remove event listener on cleanup

      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }

  const slidesToShow = () => {
    switch (true) {
      case size.width > 900:
        return 5;
      case size.width > 750:
        return 4;
      case size.width > 600:
        return 3;
      case size.width > 450:
        return 2;
      default:
        return 1;
    }
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
            slidesToShow={slidesToShow()}
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
