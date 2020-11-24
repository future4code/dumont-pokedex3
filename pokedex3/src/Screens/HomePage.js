import React, {useContext} from 'react';
import Header from '../Components/Header/Header'
import ContextPokemons from '../Contexts/ContextPokemons'


export default function HomePage() {

  const {data, nextRequest} = useContext(ContextPokemons)
  //console.log(nextRequest)
 return (
   <div>
      <Header/>
      
      {data && data.map(pokemon=>{
        return <p>{pokemon.name}, {pokemon.id}</p>
      })}

   </div>
  );
}
