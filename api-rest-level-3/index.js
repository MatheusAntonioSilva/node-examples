const express = require('express')
const app = express()

app.listen(3000, () => console.log('Listening on port 3000'))
app.use(express.json())

let pokemonsFirstVersion = require('./data/pokemon_first_version.json')

let pokemonsSecondVersion = require('./data/pokemon_second_version.json')

let pokemonsThirdVersion = require('./data/pokemon_third_version.json')

app.get('/pokemons/first/version', (_req, res) => {
  data = [
    { uri: '/pokemons/first/version/1' },
    { uri: '/pokemons/first/version/2' },
    { uri: '/pokemons/first/version/3' }
  ]
  res.send(data)
})

app.get('/pokemons/first/version/:id', (req, res) => {
  let pokemon = pokemonsFirstVersion.find(order => order.id == req.params.id)

  if (!pokemon) {
    res.status(404).send()
    return
  }

  pokemon['other_versions'] = []
  let pokemonSecondVersion = pokemonsSecondVersion.find(order => order.id == pokemon.second_version_id)
  if (pokemonSecondVersion) {
    pokemon['other_versions'].push({ link: '/pokemons/second/version/' + pokemonSecondVersion.id })
  }

  let pokemonThirdVersion = pokemonsThirdVersion.find(order => order.id == pokemon.third_version_id)
  if (pokemonThirdVersion) {
    pokemon['other_versions'].push({ link: '/pokemons/third/version/' + pokemonThirdVersion.id })
  }

  res.send(pokemon)
})

app.get('/pokemons/second/version/:id', (req, res) => {
  let pokemon = pokemonsSecondVersion.find(order => order.id == req.params.id)

  if (!pokemon) {
    res.status(404).send()
    return
  }

  pokemon['other_versions'] = []
  let pokemonFirstVersion = pokemonsFirstVersion.find(order => order.id == pokemon.first_version_id)
  if (pokemonFirstVersion) {
    pokemon['other_versions'].push({ link: '/pokemons/first/version/' + pokemonFirstVersion.id })
  }

  let pokemonThirdVersion = pokemonsThirdVersion.find(order => order.id == pokemon.third_version_id)
  if (pokemonThirdVersion) {
    pokemon['other_versions'].push({ link: '/pokemons/third/version/' + pokemonThirdVersion.id })
  }

  res.send(pokemon)
})

app.get('/pokemons/third/version/:id', (req, res) => {
  let pokemon = pokemonsThirdVersion.find(order => order.id == req.params.id)

  if (!pokemon) {
    res.status(404).send()
    return
  }

  pokemon['other_versions'] = []
  let pokemonFirstVersion = pokemonsFirstVersion.find(order => order.id == pokemon.first_version_id)
  if (pokemonFirstVersion) {
    pokemon['other_versions'].push({ link: '/pokemons/first/version/' + pokemonFirstVersion.id })
  }

  let pokemonSecondVersion = pokemonsSecondVersion.find(order => order.id == pokemon.second_version_id)
  if (pokemonSecondVersion) {
    pokemon['other_versions'].push({ link: '/pokemons/second/version/' + pokemonSecondVersion.id })
  }

  res.send(pokemon)
})