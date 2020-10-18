import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { Navigation, Feature } from "../components";
import { displayAgeRating, getRatingColor } from "../helpers/browse";
import Logo from "../logo.png";
import axios from "axios";

export default function FeatureContainer({
  selectedFeature,
  contentType,
  handleContentTypeChange,
  setSearchValue,
  searchValue,
}) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [openProfile, setOpenProfile] = useState(false);
  const [feature, setFeature] = useState({});
  const [storedFeatureData, setStoredFeatureData] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  // Initial useEffect on load
  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}=${selectedFeature.title}`
      )
      .then(({ data }) => {
        setFeature(data);
        setStoredFeatureData([data, ...storedFeatureData]);
      });
  }, []);

  // Api call when new film chosen
  useEffect(() => {
    const savedFeature = storedFeatureData.filter(
      (item) => item.Title === selectedFeature.title
    );
    if (savedFeature.length !== 0) {
      return setFeature(savedFeature[0]);
    }
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}=${selectedFeature.title}`
      )
      .then(({ data }) => {
        setFeature(data);
        setStoredFeatureData([data, ...storedFeatureData]);
      });
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
              />
              <Navigation.SearchIcon
                onClick={() =>
                  setShowSearchBar((showSearchBar) => !showSearchBar)
                }
                src="/images/icons/search.png"
              />
            </Navigation.Search>
            <Navigation.Profile open={openProfile}>
              <Navigation.ProfileImage
                onClick={() => setOpenProfile(!openProfile)}
              >
                <Navigation.ProfileImageText>
                  {user.displayName[0]}
                </Navigation.ProfileImageText>
              </Navigation.ProfileImage>
              <Navigation.ProfileMenu open={openProfile}>
                <Navigation.ProfileTitle>
                  {`${user.displayName}'s Account`}
                </Navigation.ProfileTitle>
                <Navigation.ProfileText>Billing</Navigation.ProfileText>
                <Navigation.ProfileText>Settings</Navigation.ProfileText>
                <Navigation.ProfileText>Help</Navigation.ProfileText>
                <Navigation.ProfileText
                  onClick={() => firebase.auth().signOut()}
                >
                  Sign Out
                </Navigation.ProfileText>
              </Navigation.ProfileMenu>
            </Navigation.Profile>
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
            <Feature.AgeRating src={displayAgeRating(feature.Rated)} />
            <Feature.Rating color={getRatingColor(feature.imdbRating)}>
              {feature.imdbRating}
            </Feature.Rating>
          </Feature.Details>
          <Feature.Text>{feature.Plot}</Feature.Text>
          <Feature.SubText>{feature.Actors}</Feature.SubText>
          <Feature.Button>▶{"  "}Watch Now</Feature.Button>
        </Feature.TextContainer>
      </Feature>
    </>
  );
}
