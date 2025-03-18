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
      pokemonInfoContainer.innerHTML = "";
      
        // Crear elementos
        const nameElement = document.createElement("h2");
        nameElement.textContent = pokemonName;
  
        const imageElement = document.createElement("img");
        imageElement.src = pokemonImage;
        imageElement.alt = pokemonName;
  
        const typesElement = document.createElement("p");
        typesElement.textContent = `Tipos: ${pokemonTypes}`;
  
        const heightElement = document.createElement("p");
        heightElement.textContent = `Altura: ${pokemonHeight}`;
  
        const weightElement = document.createElement("p");
        weightElement.textContent = `Peso: ${pokemonWeight}`;
  
        // Agregar los elementos al contenedor
        pokemonInfoContainer.append(nameElement, imageElement, typesElement, heightElement, weightElement);
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




 