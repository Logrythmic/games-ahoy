import { useState } from 'react';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }
  return <input onChange={handleChange} value={searchTerm} />;
}

export default SearchForm;