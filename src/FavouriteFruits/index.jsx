import React from 'react';
import './style.css';
 function FavouriteGames() {
   const fruits = [
   {id: 1, name: 'football'},
   {id: 2, name: 'basketball'},
   {id: 3, name: 'swimming'},
 ];
   const fruitItems = fruits.map(fruit =>
   <li key={fruit.id}>
     {fruit.name}
   </li>
   )
   return(
     <ul className = "list">{fruitItems}</ul>
   )
 };

 export default FavouriteGames;