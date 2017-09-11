window.onmessage = function(e){
	const data = JSON.parse(e.data);
	if ( data.code === 'JWT') {
		alert('It works! this is your JWT: ' + data.JWT);
	}
};