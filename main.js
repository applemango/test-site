document.innerHTML += "<html></html>"
document.querySelector("html").innerHTML += "<head><meta charset='utf-8'></head>"
window.onload = function() {
    if(getUrlQueries()["q"] == undefined){
        document.querySelector("html").innerHTML += "<body><p>Example => <a href='https://applemango.github.io/test-site/?q=lJIrF4YjHfQ'>https://applemango.github.io/test-site/?q=lJIrF4YjHfQ</a></p><body>";
        document.querySelector("head").innerHTML += "<title>error</title>"
    } else {
        if(getUrlQueries()["q"] == "https://www.youtube.com/watch?v"){
            var id = getUrlQueries(location.search.slice(33))["v"]
        } else {
            var id = getUrlQueries()["q"]
        }
        console.log(id)
        document.querySelector("html").innerHTML += "<body><iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/"+id+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></body>"
        document.querySelector("head").innerHTML += "<title>"+id+"</title>"
    }
};

function getUrlQueries(q) {
    if(q == undefined){
        var queryStr = window.location.search.slice(1);
    } else {
        var queryStr = q
    }
    queries = {};
    if (!queryStr) {return queries;}
    queryStr.split('&').forEach(function(queryStr) {
        var queryArr = queryStr.split('=');
        queries[queryArr[0]] = queryArr[1];
    });
    return queries;
}