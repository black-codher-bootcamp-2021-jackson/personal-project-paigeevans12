import React from 'react';
import "./results.css";

const Results = (props) => {

  return (
    <div >
      <ul className="resultsCList">
      <div className='innerResults'>
        {props.gameResults.map(game => (
          <li li className='resultsGamesCard' key={game.id}>
            <h3 className='resultsTitle'>{game.name}</h3>
            <div className="reultsImage">
            <img src={game.background_image} alt="game" />
            </div>
            <p>Released: {game.released}</p>
            <p className='gameRating'>Rating: {game.rating}</p>
            <h3>Genre(s):{game.genres.map(g => `${g.name} | `)}</h3>
            <h3>Platform(s): {game.platforms.map(p => `${p.platform.name} | `)}</h3>
            
              {/* {props.addToSavedGames && ( */}
                <button onClick={() => props.addToSavedGames(game)}>Add Game</button>
              {/* )} */}
              {/* {props.removeFromSavedGames && ( */}
                <button onClick={() => props.removeFromSavedGames(game)}>
                  Remove Game
                </button>
              {/* )} */}
            
          </li>
        ))
        }</div> 
      </ul>
      
    </div>

  )
}



export default Results;