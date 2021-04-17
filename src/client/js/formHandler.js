export async function handleSubmit(event) {
	event.preventDefault();
	let response;
	let Regex = '^[a-zA-Z0-9]*$';
	// check what text was put into the form field
	let formText = document.getElementById('name').value;
	formText.match(Regex)
		? (response = await Client.MeaningAPI(formText))
		: alert('Only Letters and Numbers ');

	document.getElementById('results').innerHTML = `<ul>
	                                    <li>${response.model} </li>
										<li>${response.irony} </li>
										<li>${response.agreement} </li>
										<li>${response.confidence} </li>
										`;
}
