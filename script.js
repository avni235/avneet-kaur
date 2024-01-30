document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();

	// Get form data
	const email = document.querySelector('#email').value;
	const date = document.querySelector('#date').value;
	const password = document.querySelector('#password').value;
	const accountType = document.querySelector('input[name="account-type"]:checked');

	// Validate form data
	if (!email || !password || !accountType || !date) {
		alert('Please fill out all required fields.');
		return;
	}

	// Create account
	alert(`Account created for ${email} with account type ${accountType.value}.`);
});
