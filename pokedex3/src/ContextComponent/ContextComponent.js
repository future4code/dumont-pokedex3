
import React, { useEffect, useState } from 'react';
import {BASE_URL} from '../Constants/Constants'
import useRequestData from '../Hooks/UseRequestData'
import ContextPokemons from '../Contexts/ContextPokemons';
import axios from 'axios'

function ContextComponents(props) {
    
    const [data, nextRequest] = useRequestData([], `${BASE_URL}?limit=20`)
    
    const informations = {
      data : data,
      nextRequest: nextRequest
    }

    
          
    return (
      <ContextPokemons.Provider value={informations}>
        {props.children}
        </ContextPokemons.Provider >
    );
  }
  
  export default ContextComponents;
  