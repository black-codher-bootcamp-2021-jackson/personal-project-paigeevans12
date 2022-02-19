import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import About from "./components/About";
import Search from "./components/Search/Search";
import Game from "./components/Game";
import RecommendedGames from "./components/RecommendedGames.js";
import "./styles/App.css";


function App() {
  const [savedGames, setSavedGames] = useState([]);

  const addToSavedGames = (addedGame) => {
    setSavedGames((prevState) => {
      return [...prevState, addedGame];
    })
  }

  const removeFromSavedGames = (removedGame) => {

     // const [savedGames, setSavedGames] = useState([]);
  // const [gamelist, setGamelist] = useState(gamelist);


  // //add to savedGames
  // const addToSavedGames = (addedGame) => {
  //   setSavedGames((prevState) => {
  //     return [...prevState, addedGame];
  //   })
  // }
  // //remove from savedGames
  // const removeFromSavedGames = (removedGame) => {
  //   const filteredGameList = savedGames.filter(
  //     (game) => game.name !== removedGame.name
  //   );
  //   setGamelist([ ...game, removedGame]);
  //   console.log(gamelist);
  //   setSavedGames(filteredGameList);
  // }


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
                  <Search component={Search} addToSavedGames={addToSavedGames} component={Game} />
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

//const [userInput, setTerm] = useState("");
// const search = (userInput) => {
  //   axios({
  //     url: "https://api.igdb.com/v4/search",
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Client-ID': 'tayr30mes439bymhib3hwd3ge4ggm4',
  //       'Authorization': 'Bearer 4afn2jsnamgpgm89xyozipznkrc79p',
  //     },
  //     data: 'search "' + (userInput) + '"; fields *;'

  //   })
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

