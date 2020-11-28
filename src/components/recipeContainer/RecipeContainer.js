import './RecipeContainer.css'
import Recipe from '../recipe/Recipe'

const RecipeContainer = ({recipes}) => {
  const recipesList = recipes.map(item => {
    return(
      <Recipe key={Math.round(Math.random() * 100000000)} item={item.recipe} />
    )
  })

  return(
    <div className='recipe-container'>
      <h3>We have found {recipes.length} recipes</h3>
      <div className='recipes-list'>{recipesList}</div>
    </div>
  )
}

export default RecipeContainer