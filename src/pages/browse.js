import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { Loader, Navigation, Feature, Library } from "../components";
import {
  filterGenres,
  displayAgeRating,
  getRatingColor,
} from "../helpers/browse";
import Logo from "../logo.png";
import axios from "axios";
import contentData from "../data/content.json";
import Carousel from "nuka-carousel";
import FooterContainer from "../containers/footer";

export default function Browse() {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [loading, setLoading] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(contentData.films[0]);
  const [feature, setFeature] = useState({});
  const [storedFeatureData, setStoredFeatureData] = useState([]);
  const [contentType, setContentType] = useState("films");
  const [genres, setGenres] = useState(filterGenres(contentData.films));
  const [content, setContent] = useState(contentData.films);
  const [activeGenre, setActiveGenre] = useState("All");

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
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // Api call when new film chosen
  useEffect(() => {
    const savedFeature = storedFeatureData.filter(
      (item) => item.Title === selectedFeature.title
    );
    console.log(savedFeature);
    if (savedFeature.length !== 0) {
      return setFeature(savedFeature[0]);
    }
    console.log("api");
    axios
      .get(`http://www.omdbapi.com/?apikey=12350c73&t=${selectedFeature.title}`)
      .then(({ data }) => {
        setFeature(data);
        setStoredFeatureData([data, ...storedFeatureData]);
      });
  }, [selectedFeature]);

  const handleContentTypeChange = (category) => {
    setContentType(category);
    setSelectedFeature(contentData[category][0]);
    setGenres(filterGenres(contentData[category]));
    setContent(contentData[category]);
  };

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

  if (loading) {
    return (
      <Loader>
        <Loader.Spinner />
      </Loader>
    );
  }

  return (
    <>
      <Feature>
        <Feature.Background src={selectedFeature.slug} />
        <Feature.Overlay />
        <Navigation>
          <div>
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
          </div>
          <div>
            <Navigation.Search>
              <Navigation.SearchBox></Navigation.SearchBox>
              <Navigation.SearchIcon src="/images/icons/search.png" />
            </Navigation.Search>
            <Navigation.Profile>
              <Navigation.ProfileImage
                onClick={() => setOpenProfile(!openProfile)}
              >
                <Navigation.ProfileImageText>
                  {user.displayName[0]}
                </Navigation.ProfileImageText>
              </Navigation.ProfileImage>
              <Navigation.ProfileMenu open={openProfile}>
                <Navigation.Button onClick={() => firebase.auth().signOut()}>
                  Sign out
                </Navigation.Button>
              </Navigation.ProfileMenu>
            </Navigation.Profile>
          </div>
        </Navigation>

        <Feature.TextContainer>
          <Feature.Title>{feature.Title}</Feature.Title>
          <Feature.Details>
            <Feature.Year>{feature.Year}</Feature.Year>
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
      <FooterContainer />
    </>
  );
}
