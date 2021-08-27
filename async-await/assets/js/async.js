//Async - Await

async function fetchTriviaAPI2() {}

const fetchTriviaAPI = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const result = await response.json();
        const response2 = await fetch(result.location_area_encounters);
        const result2 = await response2.json();
        const response3 = await fetch(result2[0].location_area.url);
        const result3 = await response3.json();
        console.log(result3);
    } catch (error) {
        console.log(error);
    }
};

fetchTriviaAPI();
