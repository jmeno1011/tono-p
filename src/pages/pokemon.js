import React, { useState } from 'react'
import axios from "axios"
import SearchBar from '../componets/pokemon/SearchBar';

const pokemon = ({pokemons, types}) => {
  const [filterPokemon, setFilterPokemon] = useState([]);
  console.log(filterPokemon);
  return (
    <div>
      {/* <h2>pokemon</h2> */}
      <SearchBar pokemons={pokemons} setFilterPokemon={setFilterPokemon} />
    </div>
  )
}

export default pokemon

export async function getStaticProps(){
  const apiUrl = process.env.POKEMON_API_URL;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return{
    props:{
      pokemons: data,
      types: data.map(value=>value.type.split(","))
    }
  }
}