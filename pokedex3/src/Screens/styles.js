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

    min-height: 100vh;
    max-height: max-content;
    width: 100vw;
    background-color: ${black.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`