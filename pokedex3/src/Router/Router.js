import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../Screens/HomePage'
import PokedexPage from '../Screens/PokedexPage'
import PokemonDetailsPage from '../Screens/PokemonDetailsPage'


export default function Router (){


    return (
        <BrowserRouter>
            <Switch>
                <Route component={HomePage} exact path={'/'}/>
                <Route component={PokedexPage} exact path={'/pokedex'}/>
                <Route component={PokemonDetailsPage} exact path={'/pokemon_details'}/>
            </Switch>
        </BrowserRouter>
    )
}