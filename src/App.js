import { useEffect, useState } from 'react'
import './App.css'
import SearchForm from './components/form/SearchForm'
import RecipeContainer from './components/recipeContainer/RecipeContainer'

const APP_ID = 'ae32b08b'
const APP_KEY = '778d9eb4efcea07b1871a45a6189c7de'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [product, setProduct] = useState('chicken')
  const [recipes, setRecipes] = useState([])

  const onHandlerSubmit = e => {
    e.preventDefault()
    setProduct(inputText)
    setInputText('')
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${product}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(res => res.json())

      setRecipes(response.hits)
    }
    
    fetchData()
  }, [product])

  return (
    <>
      <SearchForm
        inputText={inputText}
        setInputText={setInputText}
        onHandlerSubmit={onHandlerSubmit}
      />
      <RecipeContainer recipes={recipes}/>
    </>
  )
}

export default App