console.log('hello')

// You can start simple and just render a single
// pokemon card from the first element
// console.log(data[0]);

// select the <ul> for placing pokemon cards

function createAndAppendPokemonCard(pokemonJSObject) {
  const ul = document.querySelector('.cards')
  const li = document.createElement('li')
  li.setAttribute('class:', 'card')
  li.innerText = 'Hello'
  ul.appendChild(li)

  // create the HTML elements as defined in the template

  const h2 = document.createElement('h2')
  h2.setAttribute('class:', 'card--title')
  h2.innerText = 'h2 text'
  li.appendChild(h2)

  // ensure I put the right attribute values: class, src, width
  // ensure I append the right elements inside the correct ones

  // once the card <li> is created and fully built up
  // append it to the <ul>
}

// for loop, to go through each pokemon in `data`
// and for each pokemon, call createAndAppendPokemonCard
