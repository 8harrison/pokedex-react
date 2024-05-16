import React from 'react';
import '../styles/pokemon.css';

const backGround = (type) => {
  const types = {
    Electric: 'yellow',
    Fire: 'red',
    Bug: 'pink',
    Poison: 'purple',
    Psychic: '#CBC3E3',
    Normal: '#f5f5dc',
    Dragon: 'darkgrey',
  };

  return types[type];
};
function Pokemon(props) {
  const { pokemon } = props;
  return (
    <div key={ pokemon.id }>
      <li
        className="pokemon-container"
        style={ { background: backGround(pokemon.type) } }
      >
        <img src={ pokemon.image } alt={ pokemon.name } />
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>
            {pokemon.averageWeight.value}
            {' '}
            {pokemon.averageWeight.measurementUnit}
          </p>
        </div>
      </li>

    </div>
  );
}

export default Pokemon;
