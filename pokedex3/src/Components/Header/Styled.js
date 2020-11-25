import styled from "styled-components"
import {palletaCores} from '../../Constants/Constants'
const {red, yellow, black, blue, purple } = palletaCores

export const TopMenu = styled.nav`
  width: 97%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${purple.light};
  position: absolute;
  padding-left: 20px;
  padding-right: 20px;
  top: 0;
  left: 0;
  box-shadow: 5px 8px 0px ${purple.dark};
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  color: white;
  
`

export const Logo = styled.img`
  width: 60px;
  height: 60px; 
  margin-right: 15px;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PokedexButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 5px 5px 0px ${purple.dark};
  cursor: pointer;
  outline: none;
`