// Core
import React from 'react';
import { useHistory} from 'react-router-dom';

// Style Components
import {
  Image,
  Div,
  Name,
  TitleContainer,
  TypeContainer,
  ButtonContainer,
  ImageButton,
  ButtonPrimary,
} from './Styled';

// Media
import pokeball from '../../img/pokeball.png';

const CardPokemon = (props) => {
  const {
    name,
    image,
    type,
    messageButton,
    color,
    onClickPokeball,
    id,
  } = props;

  const history = useHistory();

  return (
    <Div >
      <TitleContainer>
        <Name>{name}</Name>
        <Name>#0{id}</Name>
      </TitleContainer>
      <Image
        onClick={()=> history.push(`/pokemon_details/${name}`)}
        src={image}
        alt={name}
      />
      <ButtonContainer>
        <TypeContainer color={color}>
          {type}
        </TypeContainer>
        <ButtonPrimary onClick={onClickPokeball}>
            {messageButton}
          <ImageButton src={pokeball}/>
        </ButtonPrimary> 
      </ButtonContainer>
    </Div>
  );
}

export default CardPokemon;
