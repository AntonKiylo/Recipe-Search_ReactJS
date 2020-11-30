import './RecipeContainer.css'
import Recipe from '../recipe/Recipe'
import Loader from '../loader/Loader'

const RecipeContainer = ({ recipes }) => {
  const recipesList = recipes.map(item => {
    return (
      <Recipe key={Math.round(Math.random() * 100000000)} item={item.recipe} />
    )
  })

  return (
    <div className='recipe-container'>
      <h2>We have found {recipes.length} recipes</h2>
      {recipes.length === 0 ? <Loader /> : <div className='recipes-list'>{recipesList}</div>}
    </div>
  )
}

export default RecipeContainer