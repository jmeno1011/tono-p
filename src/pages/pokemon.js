import React from 'react'
import axios from "axios"

const pokemon = ({pokemons}) => {
  return (
    <div>pokemon</div>
  )
}

export default pokemon

export async function getStaticProps(){
  const apiUrl = process.env.POKEMON_API_URL;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return{
    props:{
      pokemons: data
    }
  }
}