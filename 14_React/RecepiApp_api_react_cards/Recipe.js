import React, { Component } from 'react';
import "./recepi.css"
​
class Recipe extends Component {
    render(){
        const {title, img,instructions }=this.props;
        const ingredients = this.props.ingredients.map((ing)=>(
            <li key={index}>{ing}</li>
        ));
        return(
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title}/>
                </div>
                <div className="recipe-card-content">
        <h3 className="recipe-tite">{title}</h3>
                    <h4>Ingredients</h4>
                </div>
            <div>Recipe {title}</div>
            <ul>
                {ingredients}
            </ul>
            <h4>Instructions</h4>
        <p>{instructions}</p>
            </div>
        )
    }
}
​
export default Recipe;