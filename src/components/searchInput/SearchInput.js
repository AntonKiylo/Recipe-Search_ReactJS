import './SearchInput.css'

const SearchInput = ({inputText, setInputText}) => {
  const onHandlerChange = e => {
    setInputText(e.target.value)
  } 

  return (
    <input
      className='input'
      type='text'
      onChange={onHandlerChange}
      value={inputText}
    />
  )
}

export default SearchInput