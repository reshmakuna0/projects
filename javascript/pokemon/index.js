const input = document.getElementById("inp");
const btn = document.getElementById("btn");
const pokemonDiv = document.getElementById("pokemon");
const charDiv = document.getElementById("char");
const sugDiv = document.getElementById("sug");
let mypokeArr =[];
function getdata(){
    fetch(" https://pokeapi.co/api/v2/pokemon?limit=100")
    .then(res=>res.json())
    .then((data) => { mypokeArr = data.results; display(data.results) })
    .catch(err=>console.log(err));
}
getdata()
function display(pokemonData){ 
  for(let i=0;i<100;i++){
    let di = document.createElement("div");
   di.textContent=pokemonData[i].name;
   pokemonDiv.appendChild(di);
  }
}
btn.addEventListener("click",show);
function show(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    .then(res=>res.json())
    .then(data=>display1(data))
    .catch(err=>console.log(err));
}
function display1(pokemon){
    charDiv.textContent = '';
    const div = document.createElement('div');
    const image = document.createElement('img');
    image.src= pokemon.sprites.front_default
    const name = document.createElement('h2');
    name.textContent=pokemon.name
    const h = document.createElement('p');
    h.textContent="Height: " + pokemon.height
    const w = document.createElement("p")
    w.textContent="Weight: "+ pokemon.weight
    div.append(image, name, h, w)
    charDiv.appendChild(div)
}

input.addEventListener("input", suggest);

function suggest() {
    const searchValue = input.value.toLowerCase(); // Make it case-insensitive
    sugDiv.textContent = ""; // Clear previous suggestions
  
    // Find all matches
    const matches = mypokeArr.filter(el => el.name.toLowerCase().includes(searchValue));
  
    if (matches.length > 0) {
      matches.forEach(match => {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = match.name; // Display the matching name
        sugDiv.appendChild(suggestionItem); // Add it to the suggestion box
      });
    } 
  }