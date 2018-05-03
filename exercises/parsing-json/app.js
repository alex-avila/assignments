var xhr = new XMLHttpRequest();
var namesDiv = document.getElementById('pokemon-names');

function parsePokemon(pokemons) {
    var pokemonName;
    for (var pokemonIndex in pokemons) {
        pokemonName = pokemons[pokemonIndex].name
        pokemonName = pokemonName.slice(0, 1).toUpperCase() + pokemonName.slice(1);
        namesDiv.innerHTML += `<p>${pokemonName}</p>`;
        // var newP = document.createElement('p');
        // var textNode = document.createTextNode(pokemonName);
        // newP.appendChild(textNode);
        // namesDiv.appendChild(newP);
    }
}

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var pokemons = data.objects[0].pokemon
        parsePokemon(pokemons);
    };
}

xhr.open('GET', 'http://api.vschool.io:6543/pokemon.json', true);
xhr.send();