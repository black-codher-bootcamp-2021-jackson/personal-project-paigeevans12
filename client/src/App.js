import React, {useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamesList from "./components/GamesList";
import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import About from "./components/About";
import Axios from "axios";
import "./styles/App.css";

function App() {

  const searchGames = () => {
    Axios.get("https://api.rawg.io/api/games?key=dacfe382cb3247fb8c4ed234fbb45980").then(
      (response) => {
        console.log(response);
      }
    )
    
  };

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
                    <Login />
                    <button onClick={searchGames}>Search</button>
                   </>
                }
              />
              <Route
                exact
                path="/profile"
                element={
                  <>
                    <h1>Your Games</h1>
                    <Header />
                    <Profile />
                    <GamesList />
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
