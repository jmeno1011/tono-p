import React, { useState } from 'react'
import axios from "axios"
import SearchBar from '../componets/pokemon/SearchBar';
import PokemonList from '../componets/pokemon/PokemonList';

const pokemon = ({ pokemons }) => {
  const [filterPokemon, setFilterPokemon] = useState([]);
  return (
    <div>
      <SearchBar pokemons={pokemons} setFilterPokemon={setFilterPokemon} />
      <PokemonList pokemons={filterPokemon.length === 0 ? pokemons : filterPokemon} setFilterPokemon={setFilterPokemon} />
    </div>
  )
}

export default pokemon

export async function getStaticProps() {
  const apiUrl = process.env.POKEMON_API_URL;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      pokemons: data,
    }
  }
}