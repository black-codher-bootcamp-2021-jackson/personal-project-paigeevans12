import React from "react";
import "../styles/savedgames.css"

const SavedGames = (props) => {
  return props.savedGames.map((game) => {
    return (
      <div className="savedGames">
      <ul className="savedList">
        <div className="innerSavedGames">
        <li className="savedGamesCard">
          <h3 className="savedTitle">{game.name}</h3>
          <div className="savedImgContainer">
            <img className="savedImg" src={game.background_image} alt="game" />
          </div>
          <button onClick={() => props.removeFromSavedGames(game)}>
                Remove Game
              </button>
        </li>
        </div>
      </ul>
      </div>
    );
  });
};

export default SavedGames;