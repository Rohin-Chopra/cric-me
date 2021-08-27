import formatDate from "./formatDate";
import parseTeamScore from "./parseTeamScore";
import camelize from "./camelize";
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export { camelize, getRandomInt, formatDate, parseTeamScore };
