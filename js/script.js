//nombre, imagen, tipo, altura y peso.
// endpoint fetch(`https://pokeapi.co/api/v2/pokemon`)
//Consejo: Usa el "value" del selector para poder sacar el valor del pokemon que queremos que nos de la información. 
//`document.getElementById('pokemon-select').value` 

/*
<div class="container">
    <h1>Información de Pokémon</h1>
    <div class="pokemon-form">
      <select id="pokemon-select">
        <option value="bulbasaur">Bulbasaur</option>
        <option value="charmander">Charmander</option>
        <option value="squirtle">Squirtle</option>
      </select>
      <button id="get-pokemon">Obtener Información</button>
    </div>
    
  </div> */
function fetchPokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
 .then((response) => {
    if (!response.ok) {
        throw new Error('No se pudo obtener el pokemon');
    }
        return response.json();
    })
    
 .then((data) => {                       //console.log (data)
    const arrayPokemon = data.results;  //console.log(arrayPokemon)
    const pokemones = [0, 3, 6];
    const pokemonesFiltrados = arrayPokemon.filter((_, index) => pokemones.includes(index)); //console.log(pokemonesFiltrados);

    const divContainer = document.querySelector("container");
    const pokemonForm = document.querySelector("pokemon-form");
    const bulbasaur = document.querySelector("bulbasaur");
    const charmander = document.querySelector("charmander");
    const squirtle = document.querySelector("squirtle");
    const selector = document.getElementById("pokemon-select");
    const button = document.getElementById("get-pokemon");

   
 }
}
      /*
      -El DATA.RESULT me da un array de 20 elementos, C/U con 2 clave (nombre y Url)-valor. 
      -la url tiene el numero de pokemon que te lleva a toda la info de ese poke.
      -Yo necesito traer esos 3 pokemones a mi codigo
      -Luego filtrar la info
      -luego exponerla en DOM
      */
      
     
     //const peliculasGenero = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoID))
    
  
/* 1 selecciones un Pokémon
   2 click en boton obtener info
   3 mostrar la información en pantalla del Pokémon: nombre, imagen, tipo, altura y peso.

  1- Fetch 
  2- clasificar info ( eejmplo; bolbasur nombre imagen tipo etc)
  3- Introducirlo al DOM
  4- evento click */


 /*        .then(data => {
            document.getElementById('pokemonInfo').innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join(", ")}</p>
                <p><strong>Altura:</strong> ${data.height / 10} m</p>
                <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
            `;
        })
        .catch(error => {
            document.getElementById('pokemonInfo').innerHTML = `<p style="color:red;">Pokémon no encontrado</p>`;
            console.error(error);
        });
}
*/



 