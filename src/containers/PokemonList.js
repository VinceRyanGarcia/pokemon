import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import {Link} from "react-router-dom";

const PokemonList = (props) => {
  const [search,setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);
  
  const FetchData = (page) => {
    dispatch(GetPokemonList (page))
}
  useEffect((page) => {
    FetchData(page)
  },);



  const ShowData = () => {
      if (!_.isEmpty(pokemonList.data)) {
          return(
              <div className={"list-wrapper"}>
               {pokemonList.data.map( el => {
            return(
                <div className={"pokemon-item"}> 
                <p>{el.name}</p>
                <Link to ={`/pokemon/${el.name}`}>View</Link>
            </div>
               )
          })}
          </div>
        )
    }
      if (pokemonList.loading) {
            return <p>Loading...</p>
    }
      if (pokemonList.errorMsg !== "") {
          return <p>{pokemonList.errorMsg}</p>
      }
     return <p>unable to get data</p>
      };
     return(
    <div>
      <div className={"search-wrapper"}>
        <p>Search:</p>
        <input type="text" onChange={e => setSearch(e.target.value)}/>
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
      </div>
        {ShowData()}
        {!_.isEmpty(pokemonList.data)}
    </div>
  )
};
export default PokemonList