import React, {useContext, useState, useEffect} from 'react';
import Header from '../Components/Header/Header'
import ContextPokemons from '../Contexts/ContextPokemons'
import CardPokemon from '../Components/CardPokemon/CardPokemon'
import {Div, MainDiv} from './styles'


export default function HomePage() {

  const {data, getMorePokemons} = useContext(ContextPokemons)
  
 return (
   <MainDiv>
      <Header/>

   <Div>
      
      {data && data.map(pokemon=>{
        return <CardPokemon key={pokemon.id}
        color={pokemon.color}
        name={pokemon.name}
        id={pokemon.id}
        type={pokemon.type}
        image={pokemon.image_front}
        />
       
      })}
   </Div>
    <button onClick={getMorePokemons}>more</button>
   </MainDiv>
  );
}
