import React, { useState } from 'react';
import Results from './Results';
import "./search.css"

const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`https://rawg.io/api/games?&search=${slug}&key=dacfe382cb3247fb8c4ed234fbb45980`)
    .then(resp => resp.json())
    .then(({results}) => {
      results === undefined ? alert('no games found') : setGameResults(results)
    })
    setSearchTerm("")
  }
  console.log(gameResults)
  return (
    <div className="gameSearch">
      <h1 className='searchHeading'>Search For Games Here..</h1>
        <form onSubmit={onSubmit}>
          <input type="text" className="searchInput" value={searchTerm} onChange={handleChange}/>
          <br></br>
          <input className='searchSubmit' type="submit" />
        </form>
        <Results gameResults={gameResults} addToSavedGames={props.addToSavedGames}/>
        
    </div>
    
  )
}

export default Search;