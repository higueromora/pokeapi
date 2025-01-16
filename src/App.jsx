import {  useState } from 'react';
import './App.css'
import logo from './assets/img/logo.png';
import { Logo } from './components/Logo';
import { typeColors } from './constants/typeColors';
import { PokemonGrid } from './components/PokemonGrid';
import Pagination from './components/Pagination';
import SearchForm from './components/SearchForm';
import { usePokemon } from './hooks/usePokemon';


function App() {
  
  const [page, setPage] = useState([1,9])
  const [search, setSearch] = useState({ number: '', name: '' });
  
  const {pokemon, error} = usePokemon(search,page)

  const resetPage = () => {
    setSearch({ number: '', name: '' });
    setPage([1,9])
  };

  const nextPage = () => {
    if(page[0]==10200) return
    setPage(prevPage => [prevPage[0] + 9, prevPage[1] + 9]);
  };

  const previousPage = () => {
    if(page[0]==1) return
    setPage(prevPage => [prevPage[0] - 9, prevPage[1] - 9]);
  };

  const handleInputSearch = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value })
  }
  
  return (
    <>
      <Logo logo={logo} />
      <SearchForm search={search} handleInputSearch={handleInputSearch} />
      <Pagination resetPage={resetPage} nextPage={nextPage} previousPage={previousPage} />
      <PokemonGrid pokemon={pokemon} typeColors={typeColors} error={error}/>
      
    </>
  )
}

export default App
