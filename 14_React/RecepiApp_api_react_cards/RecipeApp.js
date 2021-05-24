import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './Recipe';
​
class RecipeApp extends Component {
 render() {
   return (
     <div className="App">
       <Navbar/>
       <Recipe title="pasta" ingredients={['Flour', 'Water']} 
       instructions='Mix ingredients'
       img="https://i.imgur.com/2q2OnC.jpg" />
     </div>
   );
 }
}
​
export default RecipeApp;