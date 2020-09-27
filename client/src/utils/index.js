import formatDate from "./formatDate";
import parseTeamScore from "./parseTeamScore";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export { getRandomInt, formatDate, parseTeamScore };
