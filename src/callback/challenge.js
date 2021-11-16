//nota: instalar dependencia para hacer request, xmlHttpRequest
/* creado por MICROSOFT, fue una forma estandar de hacer peticiones */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function fetchData(url_api, callback) {
	let xhttp = new XMLHttpRequest();
	/* el 3er valor activa el asincronismo */
	xhttp.open('GET', url_api, true)
	xhttp.onreadystatechange = function (event) {
		if (xhttp.readyState === 4) {
			/* si todo esta ok, ejecutamos nuestro callback */
			if(xhttp.status === 200) {
				return callback(null, JSON.parse(xhttp.responseText))
			} else {
				const error = new Error (`Error ${url_api}`)
				return callback(error, null)
			}
		}
	}
	xhttp.send()
}

