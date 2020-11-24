import { useState, useEffect } from 'react';
import axios from 'axios'



export default function useRequestData (innitialState, url){

    const [data, setData]= useState(innitialState)
    const [arrayPokemon, setArrayPokemon] = useState([])
    const [nextRequest, setNextResquest] = useState('')

    useEffect(()=>{

        axios.get(url).then(response=>{
            setNextResquest(response.data.next)
            const array = response.data.results.map(objeto=>{
                axios.get(objeto.url).then(response=>{
                    let pokemonObj = {
                        id: response.data.id,
                        name: response.data.name,
                        height: response.data.height,
                        weight: response.data.weight,
                        image_front: response.data.sprites.other.dream_world.front_default,
                        type1: response.data.types[0].type.name,
                        moves: response.data.moves
                        }
                        response.data.stats.forEach(stat=>{
                        pokemonObj[stat.stat.name]=[stat.base_stat]
                        })
                        setArrayPokemon(arrayPokemon=> [...arrayPokemon, pokemonObj])
                    })
            })
        }).catch(err=>{
            console.log(err)
        })
    },[url])
    
    
    return [arrayPokemon, nextRequest]
}