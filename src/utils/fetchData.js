//nota: instalar dependencia para hacer request, xmlHttpRequest
/* creado por MICROSOFT, fue una forma estandar de hacer peticiones */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const fetchData = (url_api) => {
	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		xhttp.open('GET', url_api, true)
		xhttp.onreadystatechange = (() => {
			if (xhttp.readyState === 4) {
				(xhttp.status === 200) 
					? resolve(JSON.parse(xhttp.responseText))
					: reject(new Error('Error ', url_api));
			}
		});
		xhttp.send();
	});
}

module.exports = fetchData;