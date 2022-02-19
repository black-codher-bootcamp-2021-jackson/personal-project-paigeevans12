import React from "react";
import Game from "./Game";

const SavedGames = (props) => {
  return props.savedGames.map((game) => {
    return (
      <>
        <Game
          name={game.name}
          thumbnail={game.background_image}
          game={game.genre}
          rating={game.rating}
          platforms= {game.platforms}
          removeFromSavedGames={props.removeFromSavedGames}
        />
      </>
    );
  });
};

export default SavedGames;