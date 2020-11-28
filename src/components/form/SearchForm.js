import SearchInput from '../searchInput/SearchInput'
import SearchButton from '../searchButton/SearchButton'

const SearchForm = ({inputText, setInputText, onHandlerSubmit}) => {


  return (
    <form onSubmit={onHandlerSubmit}>
      <SearchInput
        inputText={inputText}
        setInputText={setInputText}
      />
      <SearchButton />
    </form>
  )
}

export default SearchForm