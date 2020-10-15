import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Loader } from "../components";
import { filterGenres } from "../helpers/browse";
import contentData from "../data/content.json";
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
  const [searchValue, setSearchValue] = useState("");

  // Initial useEffect on load
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // Search function
  useEffect(() => {
    const fuse = new Fuse(content, {
      keys: ["title", "genre"],
      threshold: 0.4,
    });
    const results = fuse.search(searchValue).map(({ item }) => item);

    if (content.length > 0 && searchValue.length >= 3 && results.length > 0) {
      setContent(results);
    } else {
      setContent(contentData[contentType]);
    }
  }, [searchValue]);

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
        setSearchValue={setSearchValue}
        searchValue={searchValue}
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
