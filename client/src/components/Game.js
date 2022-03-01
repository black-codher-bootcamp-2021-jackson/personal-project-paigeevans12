 import React from "react";

 const Game = (props, addToSavedGames) => {
  const game = {
    id: props.id,
    name: props.name,
    img: props.img,
    genres: props.genres,
    rating: props.rating,
    platforms: props.platforms,

  }
   return (
     <div className="games">
       <h3>{props.name}</h3>
       <h3>{props.genres.map(g => `${g.name} | `)}</h3>
       <img src={props.img} alt={`This is the title: ${props.name}`} />
       <h3>{props.platforms.map(p => `${p.platform.name} | `)}</h3>
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
