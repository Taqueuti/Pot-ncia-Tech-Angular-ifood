


   const pokeApi = {}


   function convertPokeApiStatsToStats(stats) {
    const pokeStats = {}
    stats.forEach((stat) => {
       pokeStats[stat.stat.name] = stat.base_stat
    })
    return pokeStats
 }
 
    

       function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
   
    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeDetail.sprites.other.home.front_default;

    pokemon.stats = convertPokeApiStatsToStats(pokeDetail.stats); // Adiciona os atributos de status

    pokemon.height = pokeDetail.height; // Adiciona a altura
    pokemon.weight = pokeDetail.weight; // Adiciona o peso

    return pokemon;
}


   pokeApi.getPokemonDetail = (pokemon) => {
       return fetch(pokemon.url)
          .then((response) => response.json())
          .then(convertPokeApiDetailToPokemon)
   }


   pokeApi.getPokemons =  (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

   return fetch(url)
       .then((response) => response.json())
       .then((jsonBody) => jsonBody.results)
       .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
       .then((detailRequest) => Promise.all(detailRequest))
       .then((pokemonsDetails) => pokemonsDetails )
   }
