 import React from "react";

 const Game = (props, addToSavedGames) => {
  {/* const { game } = props.location.gameProps, {
     id: props.id,
     name: props.name,
     image: props.background_image,
     genre: props.genre,
     rating: props.rating,
     platforms: props.platforms,
     } */}

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




{/*const Game = (props) => {
  const { game } = props.location.gameProps
  return (
    <div className="games">
      <>
        <h1>{game.name}</h1>
        <p>Released: {game.released}</p>
        <p>Rating: {game.rating}</p>
        <h3>Genre(s):</h3>
        {
          game.genres.map(g => `${g.name} | `)
        }
        <h3>Platform(s):</h3>
        {
          game.platforms.map(p => `${p.platform.name} | `)
        }
        <ul>
          {
            game.short_screenshots.map(ss => <li><img src={ss.image} alt='screenshot'></img></li>)
          }
        </ul>
        {/* <div>
          {props.addToSavedGames && (
            <button onClick={() => props.addToSavedGames(game)}>Add</button>
          )}
          {props.removeFromSavedGames && (
            <button onClick={() => props.removeFromSavedGames(game)}>
              Remove
            </button>
          )};
        </div> 

      </>
    </div>
  )}

export default Game;*/}