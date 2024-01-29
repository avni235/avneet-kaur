document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	// Get form data
	const email = document.querySelector('#email').value;
	const dobMonth = document.querySelector('#dob-month').value;
	const dobYear = document.querySelector('#dob-year').value;
	const password = document.querySelector('#password').value;
	const accountType = document.querySelector('input[name="account-type"]:checked').value;
	
	// Validate form data
	if (!email || !dobMonth || !dobYear || !password || !accountType) {
		alert('Please fill out all fields.');
		return;
	}
	
	// Create account
	alert(`Account created for ${email} with account type ${accountType}.`);
});