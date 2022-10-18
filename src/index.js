console.log(data.name)

// You can start simple and just render a single
// pokemon card from the first element
// console.log(data[0]);

// select the <ul> for placing pokemon cards

function createAndAppendPokemonCard(pokemonJSObject) {
  const cards = document.querySelector('.cards')
  const card = document.createElement('li')
  card.setAttribute('class', 'card')
  card.setAttribute('style', 'list-style: none')
  cards.appendChild(card)

  // create the HTML elements as defined in the template

  let cardTitle = document.createElement('h2')
  cardTitle.setAttribute('class', 'card--title')
  cardTitle.innerText = 'h2 text'
  card.appendChild(cardTitle)

  const sprite = document.createElement('img')
  sprite.setAttribute(
    'src',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  )
  card.appendChild(sprite)

  const cardText = document.createElement('ul')
  cardText.setAttribute('class', 'card--text')
  cardText.setAttribute('style', 'list-style:none')
  card.appendChild(cardText)

  // for (let i = 0; i < 6; i++) {}
  const HP = document.createElement('li')
  HP.innerText = 'HP: 45'
  cardText.appendChild(HP)

  const Att = document.createElement('li')
  Att.innerText = 'ATTACK: 49'
  cardText.appendChild(Att)

  const Def = document.createElement('li')
  Def.innerText = 'DEFENSE: 49'
  cardText.appendChild(Def)

  const spAtt = document.createElement('li')
  spAtt.innerText = 'SPECIAL-ATTACK: 65'
  cardText.appendChild(spAtt)

  const spDef = document.createElement('li')
  spDef.innerText = 'SPECIAL-DEFENSE: 65'
  cardText.appendChild(spDef)

  const Speed = document.createElement('li')
  Speed.innerText = 'SPEED: 45'
  cardText.appendChild(Speed)

  // ensure I put the right attribute values: class, src, width
  // ensure I append the right elements inside the correct ones

  // once the card <li> is created and fully built up
  // append it to the <ul>
  for (let i = 0; i < data.length; i++) {
    cardTitle.innerText = data[i].name
    console.log(cardTitle)
  }
}

// for loop, to go through each pokemon in `data`

// and for each pokemon, call createAndAppendPokemonCard
