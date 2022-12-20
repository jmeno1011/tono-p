import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const PokemonListBlock = styled.div`
    padding: 16px;
    background-color: darkred;
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    width: 150px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    margin-right: 8px;
    margin-bottom: 8px;

`

const PokemonList = ({pokemons}) => {
    // const selectType = (e) => {
    //     const type = e.target.dataset.value;
    //     setSearchResult(pokemons.filter((item) => item.type.includes(type)));
    //   };
  return (
    <PokemonListBlock>
        {pokemons.map((value)=>(
            <Card key={value.no}>
                <Image src={value.url} height={100} width={100} style={{objectFit:'cover'}}/>
            </Card>
        ))}
    </PokemonListBlock>
  )
}

export default PokemonList