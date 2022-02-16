import React, { useEffect, useState } from 'react';
import "../styles/Recommended.css";

const ReccomendedGames = () => {

  useEffect(() => {
    fetchGames()
  }, [])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch('https://rawg.io/api/collections/must-play/games')
      .then(resp => resp.json())
      .then(({ results }) => setGames(results))
  }

  return (
    <div>
      <h2>Games We Recommend..</h2>
      <ul className='recommendedGamesList'>
        <div className='inner'>{games.map(game => (
          <li className='recommendedGamesCard' key={game.id}>
            <h3 className='gameTitle'>{game.name}</h3>
            <p className='gameRating'>Rated : {game.rating}/5</p>
              <div className="image-container">
                  <img src={game.background_image} alt="game" />
              </div> 
           </li>
            ))}</div>
        
      </ul>
    </div>
  )
}

export default ReccomendedGames;