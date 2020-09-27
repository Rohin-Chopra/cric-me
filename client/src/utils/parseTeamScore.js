import React from "react";

export default (score = "", teams) => {
  if (score === "") return "";
  const scoreArray = score.split(" ");
  let prevEl = 0;
  const scoresForTeams = [];
  for (let i = 0; i < scoreArray.length; i++) {
    if (scoreArray[i].includes("/")) {
      if (prevEl === 0) {
        scoresForTeams.push(scoreArray.slice(i, i + 1).join(" "));
      } else {
        scoresForTeams.push(
          scoreArray.slice(i, i.length).find((el) => {
            return el.includes("/");
          })
        );
      }
      prevEl = i + 1;
      scoreArray.splice(scoreArray.indexOf("v"), 1);
    }
  }
  return scoresForTeams;
};
