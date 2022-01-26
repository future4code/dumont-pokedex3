// Core
import React from 'react';

// Styled Components
import { MySelect } from '../../Screens/fightStyles'

export default function SelectPokemon (props) {
  return (
    <MySelect
      id="outlined-select-currency-native"
      select
      label="Pokemon"
      value={props.yourPokemon}
      onChange={props.onChangePokemon}
      SelectProps={{
        native: true,
      }}
      helperText="Please select your Pokemon"
      variant="outlined"
    > 
    <option value="default"></option>
      {props.data.map((pokemon) => (
        <option key={pokemon.id} value={pokemon.name}>
          {pokemon.name}
        </option >
      ))}
    </MySelect>
  );
}
