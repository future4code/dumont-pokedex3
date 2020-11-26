import React, {useContext, useState, useEffect} from 'react';
import Header from '../Components/Header/Header'
import ContextPokemons from '../Contexts/ContextPokemons'
import CardPokemon from '../Components/CardPokemon/CardPokemon'
import {Div, MainDiv} from './styles'


export default function PokedexPage() {

  const { myPokedex, setMyPokedex} = useContext(ContextPokemons)

  const RemovePokemonToList = (newPokemon) => {
    // const PokemonPosition = myPokedex.findIndex((i) => i.id === newPokemon.id)
    // if (PokemonPosition > -1) {
    //   setMyPokedex(myPokedex=> myPokedex.splice(PokemonPosition, 1))
    //   alert(`${newPokemon.name.toUpperCase()} Libertado Com Sucesso!`)
    // }
    const newPokedex = myPokedex.filter(pokemon=>{
      return pokemon.id !== newPokemon.id
    })
    setMyPokedex(newPokedex)
  }
  console.log(myPokedex)
 return (
   <MainDiv>
      <Header
      pokelist={true}/>

   <Div>
      
      {myPokedex && myPokedex.map(pokemon=>{
        return <CardPokemon key={pokemon.id}
        color={pokemon.color}
        name={pokemon.name}
        id={pokemon.id}
        type={pokemon.type}
        image={pokemon.image_front}
        onClickPokeball={()=>RemovePokemonToList(pokemon)}
        messageButton='Let go'
        />
      })}
   </Div>
   </MainDiv>
  );
}
