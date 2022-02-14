import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamesList from "./components/GamesList";
import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import About from "./components/About";
import Search from "./components/Search";
import ReccomendedGames from "./components/ReccomendedGames";
import GameDetail from "./components/GameDetail";
import "./styles/App.css";


function App() {

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
                  <Search component={Search}/>
                  
                  <ReccomendedGames />
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
                  
                <GameDetail/>
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
            <Route path='/game/:name' component={GameDetail} />
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

