import React from "react";
import game from "./game";

const SavedGames = (props) => {
  return props.savedGames.map((game) => {
    return (
      <>
        <game
          key={game.id}
          trackName={game.name}
          artistName={game.artist}
          thumbnail={game.thumbnail}
          kind={game.kind}
          trackPrice={game.price}
          removeFromBasket={props.removeFromBasket}
        />
      </>
    );
  });
};

export default SavedGames;