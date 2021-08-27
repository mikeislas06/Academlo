const APIURL = "https://pokeapi.co/api/v2/pokemon/";

const pokemonNameInput = document.getElementById("pokemonNameInput");
const pokeName = document.getElementById("pokeName");
const pokeType = document.getElementById("pokeType");
const pokeHeight = document.getElementById("pokeHeight");
const pokeWeight = document.getElementById("pokeWeight");
const pokeImage = document.getElementById("pokeImage");

const pokemonNameSearch = pokemonNameInput.nodeValue;
console.log(pokemonNameSearch);

const fetchAPI = () => {
    fetch(APIURL).then((response) =>
        response.json().then((result) => console.log(result))
    );
};

fetchAPI();
