import React from 'react';

const Results = (props) => {

  return (
    <div className="results-container">
      <ul>
        {props.gameResults.map(game => (
          <li key={game.id}>
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game" />
            <p>Released: {game.released}</p>
            <p>Rating: {game.rating}</p>
            <h3>Genre(s):{game.genres.map(g => `${g.name} | `)}</h3>
            <h3>Platform(s): {game.platforms.map(p => `${p.platform.name} | `)}</h3>
            
              {/* {props.addToSavedGames && ( */}
                <button onClick={() => props.addToSavedGames(game)}>Add</button>
              {/* )} */}
              {/* {props.removeFromSavedGames && ( */}
                <button onClick={() => props.removeFromSavedGames(game)}>
                  Remove
                </button>
              {/* )} */}
            
          </li>
        ))
        }
      </ul>
    </div>

  )
}



export default Results;




{/* <div>
          {props.addToSavedGames && (
            <button onClick={() => props.addToSavedGames(game)}>Add</button>
          )}
          {props.removeFromSavedGames && (
            <button onClick={() => props.removeFromSavedGames(game)}>
              Remove
            </button>
          )}
        </div> */}