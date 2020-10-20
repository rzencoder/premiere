import React, { useEffect, useState } from "react";
import { Navigation, Feature, Player } from "../components";
import { displayAgeRating, getRatingColor } from "../helpers/browse";
import Logo from "../logo.png";
import axios from "axios";
import { ProfileContainer } from "./profile";

export default function FeatureContainer({
  selectedFeature,
  contentType,
  handleContentTypeChange,
  setSearchValue,
  searchValue,
}) {
  const [feature, setFeature] = useState({});
  const [storedFeatureData, setStoredFeatureData] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [openPlayer, setOpenPlayer] = useState(false);

  const fetchFeature = () => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}=${selectedFeature.title}`
      )
      .then(({ data }) => {
        setFeature(data);
        setStoredFeatureData([data, ...storedFeatureData]);
      })
      .catch((error) => console.log(error));
  };

  // Api call when new film chosen
  useEffect(() => {
    const savedFeature = storedFeatureData.filter(
      (item) => item.Title === selectedFeature.title
    );
    if (savedFeature.length !== 0) {
      return setFeature(savedFeature[0]);
    }
    fetchFeature();
  }, [selectedFeature]);

  return (
    <>
      <Feature>
        <Feature.Background src={selectedFeature.slug} />
        <Feature.Overlay />
        <Navigation>
          <Navigation.Group>
            <Navigation.BrowseLogo src={Logo} alt="Premiere" />
            <Navigation.Section>
              <Navigation.Item
                active={contentType === "films"}
                onClick={() => handleContentTypeChange("films")}
              >
                Films
              </Navigation.Item>
              <Navigation.Item
                active={contentType === "series"}
                onClick={() => handleContentTypeChange("series")}
              >
                Series
              </Navigation.Item>
            </Navigation.Section>
          </Navigation.Group>
          <Navigation.Group>
            <Navigation.Search>
              <Navigation.SearchBox
                open={showSearchBar}
                value={searchValue}
                onChange={({ target }) => setSearchValue(target.value)}
                id="search"
              />
              <Navigation.SearchIcon
                onClick={() =>
                  setShowSearchBar((showSearchBar) => !showSearchBar)
                }
                tabIndex={0}
                onKeyDown={({ keyCode }) =>
                  keyCode === 13 &&
                  setShowSearchBar((showSearchBar) => !showSearchBar)
                }
                src="/images/icons/search.png"
                alt="Search"
              />
            </Navigation.Search>
            <ProfileContainer />
          </Navigation.Group>
        </Navigation>

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
          <Feature.Button onClick={() => setOpenPlayer(true)}>
            ▶{"  "}Watch Now
          </Feature.Button>
        </Feature.TextContainer>
        {openPlayer && (
          <Player setOpenPlayer={setOpenPlayer} src="/videos/placeholder.mp4" />
        )}
      </Feature>
    </>
  );
}
