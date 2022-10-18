console.log(data[0].name)

// You can start simple and just render a single
// pokemon card from the first element
// console.log(data[0]);

// select the <ul> for placing pokemon cards

function createAndAppendPokemonCard(index) {
  const cards = document.querySelector('.cards')
  const card = document.createElement('li')
  card.setAttribute('class', 'card')
  card.setAttribute('style', 'list-style: none')
  cards.appendChild(card)

  // create the HTML elements as defined in the template

  let cardTitle = document.createElement('h2')
  cardTitle.setAttribute('class', 'card--title')
  cardTitle.innerText = data[index].name
  card.appendChild(cardTitle)

  let sprite = document.createElement('img')
  sprite.setAttribute(
    'src',
    data[index].sprites.other["official-artwork"].front_default
  )
  card.appendChild(sprite)

  let cardText = document.createElement('ul')
  cardText.setAttribute('class', 'card--text')
  cardText.setAttribute('style', 'list-style:none')
  card.appendChild(cardText)

  // for (let i = 0; i < 6; i++) {}
  let HP = document.createElement('li')
  HP.innerText = "HP: " + data[index].stats[0].base_stat
  cardText.appendChild(HP)

  let Att = document.createElement('li')
  Att.innerText = "ATTACK: " + data[index].stats[1].base_stat
  cardText.appendChild(Att)

  let Def = document.createElement('li')
  Def.innerText = "DEFENSE: " + data[index].stats[2].base_stat
  cardText.appendChild(Def)

  let spAtt = document.createElement('li')
  spAtt.innerText = "SPECIAL ATTACK: " + data[index].stats[3].base_stat
  cardText.appendChild(spAtt)

  let spDef = document.createElement('li')
  spDef.innerText = "SPECIAL DEFENSE: " + data[index].stats[4].base_stat
  cardText.appendChild(spDef)

  let Speed = document.createElement('li')
  Speed.innerText = "SPEED: " + data[index].stats[5].base_stat
  cardText.appendChild(Speed)
}
// ensure I put the right attribute values: class, src, width
// ensure I append the right elements inside the correct ones

// once the card <li> is created and fully built up
// append it to the <ul>

for (let i = 0; i < data.length; i++) {
  createAndAppendPokemonCard(i)
  // cardTitle.innerText = data[i].name
  // console.log(cardTitle.innerText)

  // sprite = data[i].sprite
}



// for loop, to go through each pokemon in `data`

// and for each pokemon, call createAndAppendPokemonCard
