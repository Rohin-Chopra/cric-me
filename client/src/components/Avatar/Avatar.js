import React from "react";

const Avatar = ({ playerId, playerName }) => {
  return (
    <img
      src={`https://www.cricapi.com/playerpic/${playerId}.jpg`}
      style={{ height: "50px", width: "50px", borderRadius: "50%" }}
      className="align-self-center"
      alt={`${playerName} `}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://a.espncdn.com/combiner/i?img=/i/headshots/cricket/players/default-player-logo-500.png&w=80&h=80&cquality=40&scale=crop";
      }}
    />
  );
};
export default Avatar;
