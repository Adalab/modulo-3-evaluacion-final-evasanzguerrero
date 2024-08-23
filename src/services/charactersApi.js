export function getCharactersApi() {
  return fetch('https://hp-api.onrender.com/api/characters')
   .then(response =>response.json())
}

export function getCharacterByID(id) {
  return fetch(`https://hp-api.onrender.com/api/character/${id}`)
   .then(response =>response.json())
}