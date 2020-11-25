
import React, { useEffect, useState } from 'react';
import {BASE_URL} from '../Constants/Constants'
import useRequestData from '../Hooks/UseRequestData'
import ContextPokemons from '../Contexts/ContextPokemons';
import axios from 'axios'
import {selectColorByType, palletaCores} from '../Constants/Constants'

function ContextComponents(props) {
    
    const [data, nextRequest] = useRequestData(`${BASE_URL}?limit=10`)
    const [pokemons, setPokemons] = useState([])
    const [newRequest, setNewRequest] = useState('')

    useEffect(() => {
      setPokemons(data)
      setNewRequest(nextRequest)
    }, [data])

    //Paginacao para da Api, pegar mais pokemons
    const getMorePokemons = ()=>{
      axios.get(newRequest).then(response=>{
       setNewRequest(response.data.next)
       const array = response.data.results.map(objeto=>{
           axios.get(objeto.url).then(response=>{
               let pokemonObj = {
                   id: response.data.id,
                   name: response.data.name,
                   height: response.data.height,
                   weight: response.data.weight,
                   image_front: response.data.sprites.other.dream_world.front_default,
                   type: response.data.types[0].type.name,
                   moves: response.data.moves,
                   color: selectColorByType(response.data.types[0].type.name, palletaCores)
                   }
                   response.data.stats.forEach(stat=>{
                   pokemonObj[stat.stat.name]=[stat.base_stat]
                   })
                   setPokemons(pokemons=> [...pokemons, pokemonObj])
               })
       })
   }).catch(err=>{
       //console.log(err)
   })
     
  }
    
    const informations = {
      data : pokemons,
      nextRequest: newRequest,
      getMorePokemons: getMorePokemons
    }
         
    return (
      <ContextPokemons.Provider value={informations}>
        {props.children}
        </ContextPokemons.Provider >
    );
  }
  
  export default ContextComponents;
  