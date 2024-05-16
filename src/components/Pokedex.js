import React from 'react';
import pokemonList from '../data';
import Pokemon from './Pokemon';

function Pokedex() {
  return (
    <div>
      <h1>Pokédex</h1>
      <ul>
        {pokemonList.map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />)}
      </ul>
    </div>
  );
}

export default Pokedex;
