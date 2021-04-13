export async function handleSubmit(event) {
	event.preventDefault();

	// check what text was put into the form field
	let formText = document.getElementById('name').value;
	let response = await Client.MeaningAPI(formText);

	document.getElementById('results').innerHTML = response.model;

	console.log('::: Form Submitted :::');
	fetch('http://localhost:8081/test').then((res) => res.json());
}
