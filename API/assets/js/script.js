const API = "https://pokeapi.co/api/v2/";

const button = document.getElementById("searchPokemon");
const triviaButton = document.getElementById("triviaBtn");

const handleSearchPokemon = () => {
  fetch(`${API}pokemon/charizard`).then((response) =>
    response
      .json()
      .then((result) => console.log(result.sprites.front_default))
      .catch((err) => console.log(err))
  );
};

const handleRespTrivia = () => {
  fetch("https://opentdb.com/api.php?amount=10").then((response) =>
    response
      .json()
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
  );
};

button.onclick = handleSearchPokemon;
triviaButton.onclick = handleRespTrivia;
