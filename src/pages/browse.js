import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { Loader, Navigation, Feature, Library } from "../components";
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

  // Initial one time useEffect
  useEffect(() => {
    console.log(selectedFeature);

    axios
      .get(`http://www.omdbapi.com/?apikey=12350c73&t=${selectedFeature.title}`)
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

  if (loading) {
    return (
      <Loader>
        <Loader.Spinner />
      </Loader>
    );
  }
  console.log(feature);
  return (
    <>
      <Feature>
        <Feature.Background src={selectedFeature.slug} />
        <Feature.Overlay />
        <Navigation>
          <Navigation.BrowseLogo src={Logo} alt="Premiere" />

          <Navigation.Section>
            <Navigation.Item>Films</Navigation.Item>
            <Navigation.Item>Series</Navigation.Item>
          </Navigation.Section>
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
        </Navigation>

        <Feature.TextContainer>
          <Feature.Title>{feature.Title}</Feature.Title>
          <Feature.Details>
            <div>{feature.Year}</div>
            <div>{feature.Rated}</div>
            <div>{feature.imdbRating}</div>
          </Feature.Details>
          <Feature.Text>{feature.Plot}</Feature.Text>
          <Feature.SubText>{feature.Actors}</Feature.SubText>
          <Feature.Button>Watch Now</Feature.Button>
        </Feature.TextContainer>
      </Feature>
      <Library>
        <Library.Divider />
        <Library.CarouselContainer>
          <Library.CarouselGroup>
            <Carousel
              slidesToShow={4}
              wrapAround={true}
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
              {contentData["films"].map((item) => {
                return (
                  <Library.Image
                    src={`../images/content/${item.slug}-poster.png`}
                    onClick={() => setSelectedFeature(item)}
                  />
                );
              })}
            </Carousel>
          </Library.CarouselGroup>
        </Library.CarouselContainer>
      </Library>
      <FooterContainer />
    </>
  );
}
