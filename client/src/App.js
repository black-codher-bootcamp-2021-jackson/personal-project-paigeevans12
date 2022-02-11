import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";


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
        <p>{game.description}</p>
      </li>
    );
  };

  return (
    <>
    <div>
      <ul>
        {games && games.length > 0 ? (
          games.map((game) => renderGame(game))
        ) : (
          <p>No Games found</p>
        )}
      </ul>
    </div>
    <BrowserRouter>
          <div className="wrapper">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Header />
                    <Login />
                  </>
                }
              />
              <Route
                exact
                path="/homepage"
                element={
                  <>
                    <Header />
                    <Login />
                  </>
                }
              />
              <Route
                exact
                path="/gameslist"
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
  );
}

export default App;
