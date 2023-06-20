import React from 'react';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{recipe.name}</td>
              <td>
                <ul>
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ol>
                  {recipe.instructions.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </td>
              <td>
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeList;
