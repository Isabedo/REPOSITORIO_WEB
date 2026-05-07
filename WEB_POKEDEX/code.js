input = Document.getElementById("search");
button = Document.getElementById("button");

button.addEventListener("click", function(){
    const pokemonName = input.value.trim().toLowerCase();
    
