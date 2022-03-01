import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import About from "./components/About";
import Search from "./components/Search/Search";
import RecommendedGames from "./components/RecommendedGames.js";
// import GameCount from "./components/GameCount";
import "./styles/App.css";
import SavedGames from "./components/SavedGames";
import GameCount from "./components/GameCount";


function App() {
  const [gamelist, setGamelist] = useState();
  const [savedGames, setSavedGames] = useState([]);
  const [count, setCount] = useState(0);
  

  //add to savedGames
  const addToSavedGames = (addedGame) => {
    setSavedGames((prevState) => {
      return [...prevState, addedGame];
    })
  setCount((prevState) => {
    return prevState + 1;
  });
}
  

  //remove from savedGames
  const removeFromSavedGames = (removedGame) => {
    const filteredGameList = savedGames.filter(
      (game) => game.name !== removedGame.name
    );
    setSavedGames(filteredGameList);
  setCount((prevState) => {
    return prevState - 1;
  });
}
  

  return (
    <>

      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Header />
                  <Search component={Search} addToSavedGames={addToSavedGames}/>
                  <RecommendedGames />
                </>
              }
            />
            <Route
              exact
              path="/profile"
              element={
                <>
                  <Header />
                  <Profile />
                  <SavedGames savedGames={savedGames} removeFromSavedGames={removeFromSavedGames}/>
                </>
              }
            />
            <Route
              exact
              path="/registration"
              element={
                <>
                  <Header />
                  <Registration />
                </>
              }
            />
            <Route
              exact
              path="/about"
              element={
                <>
                  <Header />
                  <About />
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