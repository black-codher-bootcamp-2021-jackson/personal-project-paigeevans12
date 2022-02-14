import React, {useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamesList from "./components/GamesList";
import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import About from "./components/About";
import Search from "./components/Search";
import axios from "axios";
import "./styles/App.css";

function App() {
  const [userInput, setTerm] = useState("");


  

  const search = (userInput) => {
    axios({
      url: "https://api.igdb.com/v4/search",
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Client-ID': 'tayr30mes439bymhib3hwd3ge4ggm4',
          'Authorization': 'Bearer 4afn2jsnamgpgm89xyozipznkrc79p',
        },     
        data:'search "' + (userInput) + '"; fields *;'
     
    })
      .then(response => {
          console.log(response.data);
      })
      .catch(err => {
          console.error(err);
      });
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
                    {/* <button onClick={searchGames}>Search</button> */}
                    <Search
                  userInput={userInput}
                  setTerm={setTerm}
                  search={search}
                />
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
