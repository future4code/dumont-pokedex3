import {palletaCores} from '../Constants/Constants'
import styled from 'styled-components'
const {yellow, red, green, blue, purple, black} = palletaCores


export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    

`

export const MainDiv = styled.div`

    min-height: 90vh;
    padding-top: 80px;
    position: relative;
    max-height: max-content;
    width: 100vw;
    background-color: ${black.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const ButtonFooter = styled.button`

    outline: none;
    border: none;
    position: fixed;
    bottom: 20px;
    right: 50px;
    padding-top: 5px;
    width:60px;
    border-radius: 50%;
    height: 60px;
    z-index: 5;
    background-color: ${yellow.primary};
    border: 2px solid ${black.dark} ;
    font-size: 30px;
    text-align: center;

   &:hover{
     background-color: ${yellow.dark}  
   } 
`
