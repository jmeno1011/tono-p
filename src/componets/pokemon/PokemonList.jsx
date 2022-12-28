import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const PokemonListBlock = styled.div`
    padding: 16px;
    background-color: darkred;
    >div{
        max-width: 1264px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
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
    >span{
        border-radius: 8px;
        cursor: pointer;
        overflow: hidden;
    }
    >span:hover{
        transform: scale(1.1);
    }
`
const CardInfo = styled.div`
    width: 100%;
    padding: 4px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h4{
        font-size: 1rem;
    }
    h5{
        font-size: 0.875rem;
    }
`
const CardBottom = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    
`
const TypeSpan = styled.span`
    width: 100%;
    font-size: .875rem;
    font-weight: 500;
    background-color: ${(props) => (props.children === "노말" ? "#92999F" : "")};
    background-color: ${(props) => (props.children === "불꽃" ? "#EFA061" : "")};
    background-color: ${(props) => (props.children === "물" ? "#608FCF" : "")};
    background-color: ${(props) => (props.children === "풀" ? "#7ab766" : "")};
    background-color: ${(props) => (props.children === "전기" ? "#EDD259" : "")};
    background-color: ${(props) => (props.children === "얼음" ? "#8DCCC0" : "")};
    background-color: ${(props) => (props.children === "격투" ? "#BC4B6A" : "")};
    background-color: ${(props) => (props.children === "독" ? "#a16ec2" : "")};
    background-color: ${(props) => (props.children === "땅" ? "#CA7C50" : "")};
    background-color: ${(props) => (props.children === "비행" ? "#95A8D9" : "")};
    background-color: ${(props) => (props.children === "에스퍼" ? "#E57879" : "")};
    background-color: ${(props) => (props.children === "벌레" ? "#9BBF48" : "")};
    background-color: ${(props) => (props.children === "바위" ? "#C3B78F" : "")};
    background-color: ${(props) => (props.children === "고스트" ? "#5769A7" : "")};
    background-color: ${(props) => (props.children === "드래곤" ? "#336CBE" : "")};
    background-color: ${(props) => (props.children === "악" ? "#585365" : "")};
    background-color: ${(props) => (props.children === "강철" ? "#678D9E" : "")};
    background-color: ${(props) => (props.children === "페어리" ? "#DC94E1" : "")};
    color: white;
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 10px;
    cursor: pointer;
    &{
        margin-left: 8px;
    }
`


const PokemonList = ({ pokemons, setFilterPokemon }) => {
    const selectType = (e) => {
        const type = e.target.dataset.value;
        setFilterPokemon(pokemons.filter((item) => item.type.includes(type)));
    };
    return (
        <PokemonListBlock>
            <div>
                {pokemons.map((value) => (
                    <Card key={value.no}>
                        <Image src={value.url} height={100} width={100}  />
                        <CardInfo>
                            <h5>No. {attachZero(value.no)}</h5>
                            <h4>{value.name}</h4>
                        </CardInfo>
                        <CardBottom>
                            {value.type.split(",").map(types => (
                                <TypeSpan key={`${value.name}_${types}`} data-value={types} onClick={selectType}>
                                    {types}
                                </TypeSpan>
                            ))}
                        </CardBottom>
                    </Card>
                ))}
            </div>
        </PokemonListBlock>
    )
}

export default PokemonList;

function attachZero(num) {
    if (num / 10 < 1) {
        return "00" + num;
    } else if (num / 10 < 10) {
        return "0" + num;
    } else if (num / 10 >= 10) {
        return num;
    } else {
        return num;
    }
}