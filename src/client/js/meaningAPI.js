async function MeaningAPI(inputText) {
	let API_KEY = await fetch('http://localhost:8081/api').then((response) => {
		return response.text();
	});
	const formdata = new FormData();
	formdata.append('key', API_KEY);
	formdata.append('txt', inputText);
	formdata.append('lang', 'en');

	const requestOptions = {
		method: 'POST',
		body: formdata,
	};

	let response = await fetch(
		'https://api.meaningcloud.com/sentiment-2.1',
		requestOptions,
	)
		.then((response) => ({
			status: response.status,
			body: response.json(),
		}))
		.catch((error) => console.log('error', error));

	return response.body;
}

export { MeaningAPI };
