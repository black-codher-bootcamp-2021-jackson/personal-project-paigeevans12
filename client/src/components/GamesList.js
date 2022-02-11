import React, { useState, useEffect } from "react";
import { getAllGames } from "../services/gameService";

function GamesList() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    async function getGames() {
      if (!games) {
        const response = await getAllGames();
        setGames(response);
      }
    }

    getGames();
  }, [games]);

  const renderGame = (game) => {
    return (
      <li key={game._id}>
        <h3>
          {`${game.game_title}`}
        </h3>
        <p>{game.description}</p>
      </li>
    );
  }

  return (
    <div>
    <ul>
      {games && games.length > 0 ? (
        games.map((game) => renderGame(game))
      ) : (
      <p>No Games found</p>
        
      )}
    </ul>
  </div>
  );

  };

  export default GamesList;