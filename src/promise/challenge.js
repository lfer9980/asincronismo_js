let fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';


//peticion count
fetchData(API)
	.then(data => {
		console.log(data.info.count);
		return fetchData(`${API}${data.results[0].id}`);
	})
	//llamar primer personaje
	.then(data => {
		console.log(data.name);
		return fetchData(data.origin.url);
	})
	//traer el nombre de la dimension
	.then(data => {
		console.log(data.dimension)
	})
	.catch(err => {
		console.error(err)
	})



