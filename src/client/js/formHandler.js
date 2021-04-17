export async function handleSubmit(event) {
	event.preventDefault();
	let response;
	// check what text was put into the form field
	let formText = document.getElementById('name').value
		? (response = await Client.MeaningAPI(formText))
		: alert('Cant be null');

	document.getElementById('results').innerHTML = `<ul>
	                                    <li>${response.model} </li>
										<li>${response.irony} </li>
										<li>${response.agreement} </li>
						 				<li>${response.confidence} </li>
										`;
}
