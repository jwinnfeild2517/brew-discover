import React, {useState} from 'react';

const SearchForm = (props) => {

  const [searchquery, setSearchQuery] = useState('')

  const onSearchChange = (e) => setSearchQuery(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    props.onSearch(searchquery)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search"></label>
      <input type="search"
        onChange={onSearchChange}
        name="search"
        placeholder="Enter Brewery..."
      />
      <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
    </form>
  );
}

export default SearchForm;