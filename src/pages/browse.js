import React, { useEffect, useState } from "react";
import { Loader, Library } from "../components";
import { filterGenres } from "../helpers/browse";
import contentData from "../data/content.json";
import Carousel from "nuka-carousel";
import FooterContainer from "../containers/footer";
import FeatureContainer from "../containers/feature";
import LibraryContainer from "../containers/library";

export default function Browse() {
  const [loading, setLoading] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState(contentData.films[0]);
  const [contentType, setContentType] = useState("films");
  const [genres, setGenres] = useState(filterGenres(contentData.films));
  const [activeGenre, setActiveGenre] = useState("All");
  const [content, setContent] = useState(contentData.films);

  // Initial useEffect on load
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const handleContentTypeChange = (category) => {
    setContentType(category);
    setSelectedFeature(contentData[category][0]);
    setGenres(filterGenres(contentData[category]));
    setContent(contentData[category]);
  };

  if (loading) {
    return (
      <Loader>
        <Loader.Spinner />
      </Loader>
    );
  }

  return (
    <>
      <FeatureContainer
        selectedFeature={selectedFeature}
        contentType={contentType}
        handleContentTypeChange={handleContentTypeChange}
      />
      <LibraryContainer
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        setSelectedFeature={setSelectedFeature}
        contentType={contentType}
        genres={genres}
        content={content}
        setContent={setContent}
      />
      <FooterContainer />
    </>
  );
}
