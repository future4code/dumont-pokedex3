import { useState, useEffect } from 'react';
import axios from 'axios'



export default function useRequestData (innitialState, url){

    const [data, setData]= useState(innitialState)

    useEffect(()=>{

        axios.get(url).then(response=>{
            setData(response.data)
        }).catch(err=>{
            console.log(err)
        })
    },[data, url])

    return [data]
}