import React from 'react';
import './App.css';
import AdminPanel from "./AdminPanel";
import FormPanel from "./FormPanel";
import FavouriteGames from "./FavouriteFruits";



function App() {
  const isLoggedIn = true;
  return (<>
      {isLoggedIn ? (<AdminPanel/>) : (<FormPanel/>)}
    <FavouriteGames />
    </>);
}

export default App;
