(function(search) {
	var params = search.slice(1).split('&'),
		query = {};

	for(var i=0; i<params.length; i++) {
		p = params[i].split("=").map(decodeURIComponent);
		query[p[0]] = p[1];
	}

	var playEvt = function(event) { 
		document.getElementById("what").innerHTML = query.what;
		window.speak(query.what, { noWorker: true });
	}

	if(query.what) {
		document.addEventListener("DOMContentLoaded", playEvt);
		document.addEventListener("click", playEvt);
	}
}(window.location.search));