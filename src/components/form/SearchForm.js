import SearchInput from '../searchInput/SearchInput'
import SearchButton from '../searchButton/SearchButton'
import './SearchForm.css'

const SearchForm = ({inputText, setInputText, onHandlerSubmit}) => {

  return (
    <form onSubmit={onHandlerSubmit} className='form'>
      <SearchInput
        inputText={inputText}
        setInputText={setInputText}
      />
      <SearchButton />
    </form>
  )
}

export default SearchForm