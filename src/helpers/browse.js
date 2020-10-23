export function filterGenres(data) {
  const genres = [...new Set(data.map((item) => item.genre))];
  const genresSet = [...new Set(genres.flat())].sort();
  return ["All", ...genresSet];
}

export function displayAgeRating(rating) {
  const path = "../images/icons/";
  switch (rating) {
    case "PG-13":
      return `${path}12a.png`;
    case "PG":
    case "TV-PG":
      return `${path}pg.png`;
    case "R":
    case "TV-14":
      return `${path}15.png`;
    case "NC-17":
    case "TV-MA":
      return `${path}18.png`;
    case "G":
      return `${path}universal.png`;
    default:
      return null;
  }
}
const ratingColors = [
  "#227b08",
  "#6a9d0f",
  "#b5cc13",
  "#dfd31d",
  "#d59110",
  "#dd7122",
  "#e12121",
];

export function getRatingColor(data) {
  const rating = parseFloat(data);
  switch (true) {
    case rating > 8.5:
      return ratingColors[0];
    case rating > 7.9:
      return ratingColors[1];
    case rating > 7.3:
      return ratingColors[2];
    case rating > 6.7:
      return ratingColors[3];
    case rating > 6.1:
      return ratingColors[3];
    case rating > 5.5:
      return ratingColors[3];
    default:
      return ratingColors[4];
  }
}

export const slidesToShow = (size) => {
  switch (true) {
    case size.width > 900:
      return 5;
    case size.width > 620:
      return 4;
    case size.width > 470:
      return 3;
    case size.width > 350:
      return 2;
    default:
      return 1;
  }
};
