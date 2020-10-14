export function filterGenres(data) {
  const genres = [...new Set(data.map((item) => item.genre))];
  return ["All", ...genres].sort();
}

export function displayAgeRating(rating) {
  const path = "../images/icons/";
  switch (rating) {
    case "PG-13":
      return `${path}12a.png`;
    case "PG":
      return `${path}pg.png`;
    case "R":
      return `${path}15.png`;
    case "NC-17":
      return `${path}18.png`;
    default:
      return `${path}universal.png`;
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
  console.log(rating);
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
