const API = "https://pokeapi.co/api/v2/";

const button = document.getElementById("searchPokemon");

const handleSearchPokemon = () => {
  fetch(`${API}pokemon?limit=20&offset=0`).then((response) =>
    response.json().then((result) => console.log(result))
  );
  //   console.log(`${API}pokemon?limit=20&offset=1`);
};

button.onclick = handleSearchPokemon;
