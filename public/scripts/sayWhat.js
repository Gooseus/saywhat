(function(search) {
	var params = search.slice(1).split('&'),
		query = {};

	for(var i=0; i<params.length; i++) {
		p = params[i].split("=").map(decodeURIComponent);
		query[p[0]] = p[1];
	}

	if(query.what) {
		document.addEventListener("DOMContentLoaded", function(event) { 
			document.getElementById("what").innerHTML = query.what;
			window.speak(query.what, { noWorker: true });
		});
	}
}(window.location.search));