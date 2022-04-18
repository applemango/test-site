function getUrlQueries() {
    var queryStr = window.location.search.slice(1);
        queries = {};
    if (!queryStr) {return queries;}
    queryStr.split('&').forEach(function(queryStr) {
        var queryArr = queryStr.split('=');
        queries[queryArr[0]] = queryArr[1];
    });
    return queries;
}

window.onload = function() {
    /*document.querySelector("body").innerHTML += "<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/lJIrF4YjHfQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"*/
    document.querySelector("body").innerHTML += "<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/"+getUrlQueries()["q"]+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
};
