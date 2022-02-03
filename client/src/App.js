import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import  Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      <div className="routes">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <h1>Game Tracker</h1>
                <Header />
                <Login />
                {/* <BasketTotal basketTotal={total} />
                <BasketCount basketCount={count} />
                <Search
                  userInput={userInput}
                  setTerm={setTerm}
                  search={search}
                />
                <ProductList products={tracklist} addToBasket={addToBasket} /> */}
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
                {/* <BasketCount basketCount={count} />
                <BasketTotal basketTotal={total} />
                <Search
                  userInput={userInput}
                  setTerm={setTerm}
                  search={search}
                />
                <Basket basket={basket} removeFromBasket={removeFromBasket} /> */}
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
                {/* <About /> */}
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