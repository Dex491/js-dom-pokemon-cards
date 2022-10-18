
console.log('hello');

//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0]);

// select the <ul> for placing pokemon cards


function createAndAppendPokemonCard(pokemonJSObject) {
  const ul = document.querySelector('.cards')
  const li = document.createElement('li')
  li.innerText('Hello')
  ul.appendChild(li)
  
  // create the HTML elements as defined in the template
  // ensure I put the right attribute values: class, src, width
  // ensure I append the right elements inside the correct ones

  // once the card <li> is created and fully built up
  // append it to the <ul>
}

// for loop, to go through each pokemon in `data`
// and for each pokemon, call createAndAppendPokemonCard