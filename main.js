window.onload = function() {
    if(getUrlQueries()["q"] == undefined){
        inner("<p>Example => <a href='https://applemango.github.io/test-site/?q=lJIrF4YjHfQ'>https://applemango.github.io/test-site/?q=lJIrF4YjHfQ</a></p>","error")
    } else {
        var id = getUrlQueries()["q"] == "https://www.youtube.com/watch?v" ? getUrlQueries(location.search.slice(33))["v"] : getUrlQueries()["q"];
        inner("<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/"+id+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",id)
    }
};

function inner(html,title) {
    document.querySelector("body").innerHTML += html;
    document.querySelector("head").innerHTML += "<meta charset='utf-8'><title>"+title+"</title>";
}
function getUrlQueries(q) {
    var queryStr = q == undefined ? location.search.slice(1) : q;
    queries = {};
    if (!queryStr) {return queries;}
        queryStr.split('&').forEach(function(queryStr) {
            var queryArr = queryStr.split('=');
            queries[queryArr[0]] = queryArr[1];
    });
    return queries;
}