window.onmessage = function(e){
	if (e && e.data ) {
		const data = e.data;
		if ( data.type == 'electron-pipe-auth') {
			const electrondata = JSON.parse(data.data);
			if ( electrondata.code === 'JWT') {
				pipeAuthentication(electrondata.JWT);
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
}