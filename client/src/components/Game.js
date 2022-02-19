 import React from "react";

 const Game = (props, addToSavedGames) => {
  const game = {
    id: game.id,
    name: game.name,
    thumbnail: game.background_image,
    genre: game.genres,
    rating: game.rating,
    platforms: game.platforms,

  }

   return (
     <div className="games">
       <h3>{props.name}</h3>
       <h3>{game.genres.map(g => `${g.name} | `)}</h3>
       <img src={props.background_image} alt={`This is the title: ${props.name}`} />
        <h3>{game.platforms.map(p => `${p.platform.name} | `)}</h3>
       <br />
        <div>
        {props.addToSavedGames && (
          <button onClick={() => props.addToSavedGames(game)}>Add</button>
        )}
        {props.removeFromSavedGames && (
         <button onClick={() => props.removeFromSavedGames(game)}>
            Remove
          </button>
        )};
        </div> 
     </div>
   );
 };

 export default Game;
