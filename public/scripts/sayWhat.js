(function(search) {
	var params = search.slice(1).split('&'),
		query = {};

	for(var i=0; i<params.length; i++) {
		p = params[i].split("=").map(decodeURIComponent);
		query[p[0]] = p[1];
	}

	if(query.what) {
		speak(query.what);
	}
}(window.location.search))