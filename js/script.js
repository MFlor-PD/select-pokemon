const pokemonSelect = document.getElementById("pokemon-select");
const getPokemonButton = document.getElementById("get-pokemon"); 

// crear el contenedor de la info del Pokemon
const pokemonInfoContainer = document.createElement("div");
pokemonInfoContainer.id = "pokemon-info-container"; // Asignar Id al contenedor
document.body.appendChild(pokemonInfoContainer); // Ingresar el container al DOM

function fetchPokemonInfo(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => { 
      if (!response.ok) {
        throw new Error("No se pudo obtener el Pokémon");
      }
      return response.json();
    })

    .then((data) => {
      const pokemonName = data.name;
      const pokemonImage = data.sprites.front_default;
      const pokemonTypes = data.types.map((type) => type.type.name).join(', ');
      const pokemonHeight = data.height;
      const pokemonWeight = data.weight;

      // crear y mostrar los elementos de informacion del pokemon
      pokemonInfoContainer.innerHTML = `
      <h2>${pokemonName}</h2>
      <img src="${pokemonImage}" alt="${pokemonName}">
      <p>Tipos: ${pokemonTypes}</p>
      <p>Altura: ${pokemonHeight}</p>
      <p>Peso: ${pokemonWeight}</p>`;
    })
    .catch((error) => {
      console.log(error);
      pokemonInfoContainer.innerHTML = 'No se pudo cargar la pagina'
    });
  }
    // Evento 
getPokemonButton.addEventListener("click", () => {
  const selectedPokemon = pokemonSelect.value; // para obtener el valor del pokemon seleccionado
  fetchPokemonInfo(selectedPokemon); // Llama a la f(x) con el pokemon sleeccionado.
});




 