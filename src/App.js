import './App.css';
import {Switch, Route, NavLink, Redirect} from "react-router-dom"
import PokemonList from "../src/containers/PokemonList"
import Pokemon from "../src/containers/Pokemon"

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/pokemon/test"}>NavLink Test</NavLink>
      </nav>
      <Switch>
        <Route path ={"/"} exact component={PokemonList} />
        <Route path ={"/pokemon/:pokemon"} exact component={Pokemon}/>
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
