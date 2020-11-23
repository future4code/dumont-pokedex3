import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../Screens/HomePage'
import PokedexPage from '../Screens/PokedexPage'
import PokemonDetaisPage from '../Screens/PokemonDetaisPage'


export default function Router (){


    return (
        <BrowserRouter>
            <Switch>
                <Route component={HomePage} exact path={'/'}/>
                <Route component={PokedexPage} exact path={'/pokedex'}/>
                <Route component={PokemonDetaisPage} exact path={'/pokemon_details'}/>
            </Switch>
        </BrowserRouter>
    )
}