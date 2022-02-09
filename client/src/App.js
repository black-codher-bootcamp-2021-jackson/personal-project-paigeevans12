import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes} from "react-router-dom";


// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllGames } from "./services/gameService";
function App() {
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
        <h2>{game.release_date}</h2>
        <h2>{game.game_developers}</h2>
        <p>{game.description}</p>
      </li>
    );
  };

  return (
    <>
    <>
    <div>
      <ul>
        {games && games.length > 0 ? (
          games.map((game) => renderGame(game))
        ) : (
          <p>No games found</p>
        )}
      </ul>
    </div>
    </>
    <>
     <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route exact path="/" element={
            <>
          <Login/>
          <Header/>
          </>
          }
          />
          <Route
            exact
            path="/games"
            element={
              <>
                <h1>Your Games</h1>
                <Header />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <h1>About Page</h1>
                <Header />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
    </>
    </>
  );
}

export default App;