import './Recipe.css'

//item.url

const Recipe = ({item}) => {
  const ingredients = item.ingredientLines.map(ing => <li key={Math.round(Math.random() * 100000000)}>{ing}</li>)

  return(
    <div className='recipe'>
      <h3>{item.label}</h3>
      <p>Calories: {Math.ceil(item.calories)}</p>
      <a href={item.url} target='blank'>
        <img src={item.image} alt={item.label} className='recipe-image' />
      </a>
      <ul>{ingredients}</ul>
    </div>
  )
}

export default Recipe