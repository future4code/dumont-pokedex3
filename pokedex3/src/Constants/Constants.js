

export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'



//cores
/*
Usage: 
primary: para cores principais de background.
ligth: para background de elemntos secundarios ou hover de botoes
dark: pode ser usado para uma borda ou para &:focus de algum elemento.
text: cor para o texto dentro do elemtento.
exemplo de uso:

const Button = styled.button`
    background-color: ${yellow.primary};
    color: ${yellow.text};
    border: 1px solid ${yellow.dark};
    &:hover{
        background-color: ${yellow.light};
    }
`
*/


export const palletaCores = {

     yellow : {primary:'#F2DA5E', light: '#ffff8f', dark: '#bda92c', text:'#000000'},
     red : {primary:'#F52C33', light: '#ff695e', dark: '#ba000b', text:'#000000'},
     green : {primary:'#7ABF5A', light: '#acf289', dark: '#498e2c', text:'#000000'},
     blue : {primary:'#05DBF2', light: '#6cffff', dark: '#00a9bf', text:'#000000'},
     purple : {primary:'#451659', light: '#734186', dark: '#1f002f', text:'#ffffff'},
     black :  {primary:'#232323', light: '#30333A', dark: '#020202', text:'#ffffff'}
}