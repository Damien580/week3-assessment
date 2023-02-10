console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

const feelGood = evt => {
	evt.preventDefault;

	alert('You might be dateable in the right light!!!');
}


let form = document.querySelector('#contact');
document.getElementById('maineCoon').addEventListener('mouseover', feelGood)

form.addEventListener('submit', handleSubmit);
