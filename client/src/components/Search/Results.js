import React from 'react';
import "./results.css";

const Results = (props) => {
  return (
    <div className='games'>
      <ul className="resultsList">
        <div className='innerResults'>
          {props.gameResults.map(game => (
            <li className='resultsGamesCard' key={game.id}>
              <h3 className='resultsTitle'>{game.name}</h3>
              <div className="resultsImage">
                <img src={game.background_image} alt="game" />
              </div>
              <p>Released: {game.released}</p>
              <p className='gameRating'>Rating: {game.rating}</p>
              <h3 className='gameGenre'>Genre(s):{game.genres.map(g => `${g.name} | `)}</h3>
              <h3 className='resultsPlatforms'>Platform(s): {game.platforms.map(p => `${p.platform.name} | `)}</h3>
              <button className='addButton' onClick={() => props.addToSavedGames(game)}>Add Game</button>
            </li>
          ))
          }</div>
      </ul>

    </div>

  )
}



export default Results;