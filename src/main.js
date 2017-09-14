window.onmessage = function(e){
	console.log(e);
	if (e && e.data ) {
		const electrondata = JSON.parse(e.data);
		if ( electrondata.type == 'electron-pipe-auth') {
			if ( electrondata.code === 'JWT') {
				pipeAuthentication(electrondata.data.JWT);
			}
		}
	}
};

document.addEventListener('DOMContentLoaded', function() {
	// const spinner = document.querySelector('#spinner');
	desactivateSpinner();

	const loginBtn = document.querySelector('#loginBtn');
	// TODO: REMOVE IT JUST FOR TEST
	loginBtn.addEventListener('click', function(event) {
		event.preventDefault();
		pipeAuthentication();
	});
});

function pipeAuthentication(jwt) {
	const data = decodeJWT(jwt);
	const sdata = JSON.stringify(data)
	localStorage.setItem('user', sdata);
	activateSpinner();
	setTimeout(function() {
		desactivateSpinner()
		window.location.href= '/dashboard.html';
	}, 1500);
}

function activateSpinner() {
	const spinner = document.querySelector('#spinner');
	spinner.removeAttribute('style', 'display:none');
}

function desactivateSpinner() {
	const spinner = document.querySelector('#spinner');
	spinner.setAttribute('style', 'display:none');
}

function decodeJWT(jwt) {
	const base64Url = jwt.split('.')[1];
	const base64 = base64Url.replace('-', '+').replace('_', '/');
	const payload = JSON.parse(window.atob(base64));
	return payload;
}