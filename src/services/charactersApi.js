export function getCharactersApi() {
  return fetch('https://hp-api.onrender.com/api/characters')
   .then(response =>response.json())
  
}