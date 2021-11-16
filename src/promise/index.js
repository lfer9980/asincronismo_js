const somethingWillHappen = () => {
	return new Promise((resolve, reject) => {
		if(true) {
			resolve('Hey! es correcto')
		} else {
			reject('Whoops!, algo salio mal')
		}
	})
}

somethingWillHappen()
	.then(response => console.log(response))
	.catch(err => console.log(err))


const somethingWillHappen2 = () => {
	return new Promise((resolve, reject) => {
		if(true) {
			setTimeout(() => {
				resolve('True')
			}, 2000)
		} else {
			const error = new Error("Whooops!")
			reject(error)
		}
	})
}

somethingWillHappen2()
	.then(response => console.log(response))
	.then(()=> console.log('hola'))
	.catch(err => console.error(err))


/* promesas encadenadas */
Promise.all([somethingWillHappen(), somethingWillHappen2()])
	.then(response => {
		console.log('Array of results', response)
	})
	.catch(err => {
		console.log(err)
	})

