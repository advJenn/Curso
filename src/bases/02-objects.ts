export const pokemonIds = [1, 2, 3, 5];
/*
export const pokemon = {
    id: 1, 
    name: 'Bulbasaur'
}
console.log(pokemon)
*/

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: undefined
}
export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 1
}


export const pokemons: Pokemon[] = [];

pokemons.push( bulbasaur, charmander);

console.log(pokemons);
/*
pokemonIds.push('jjajf');

console.log(pokemonIds)
*/


