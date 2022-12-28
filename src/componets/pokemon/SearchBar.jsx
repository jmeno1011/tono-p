import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';

const SearchBarBlock = styled.div`
  height: 65px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: darkslategray;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 16px;

  h3{
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 500;
    margin-left: 8px;
  }
  @media(max-width: 468px) {
    h3{
      display: none;
    }
  }
`
const Input = styled.input`
  height: 32px;
  padding: 16px;
  font-size: 1rem;
  outline: none;
`
const Button = styled.button`
  width: 36px;
  height: 36px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const SearchBar = ({pokemons, setFilterPokemon}) => {
  const [keyword, setKeyword] = useState("");
  function search(){
    const selectedPokemons = pokemons.filter(
      (item)=> item.type.includes(keyword) || item.name.includes(keyword)
    );
    setFilterPokemon(selectedPokemons);
    setKeyword("")
  }
  function reset(){
    setFilterPokemon(pokemons)
    setKeyword("")
  }
  function onKeyPressHandle(e){
    if(e.key === "Enter"){
      search()
    }
  }
  return (
    <SearchBarBlock>
      <Logo>
        <Image src={"/icon_ball_b.png"} width={33} height={33} />
        <h3>포켓몬 도감</h3>
      </Logo>
      <Input type={"text"} placeholder="search your pokemon!" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyPress={onKeyPressHandle}/>
      <Button onClick={search}>
        <Icon icon="ant-design:search-outlined" />
      </Button>
      <Button onClick={reset}>
        <Icon icon="ep:refresh-right" />
      </Button>
    </SearchBarBlock>
  )
}

export default SearchBar