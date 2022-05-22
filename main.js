window.onload = function() {
    if(getUrlQueries()["q"] == undefined){
        inner("<p>Example => <a href='https://applemango.github.io/test-site/?q=lJIrF4YjHfQ'>https://applemango.github.io/test-site/?q=lJIrF4YjHfQ</a></p>","error")
    } else {
        if(getUrlQueries()["q"] == "https://www.youtube.com/watch?v"){
            var id = getUrlQueries(location.search.slice(33))["v"]
        } else if(getUrlQueries()["q"] == "https://www-youtube-com.translate.goog/watch?v") {
            var id = getUrlQueries(location.search.slice(48))["v"]
        } else {
            var id = getUrlQueries()["q"]
        }
        inner("<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/"+id+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",id)
        document.querySelector("body").innerHTML += "<br><a target='blank_' href='https://www-youtube-com.translate.goog/watch?v="+id+"&_x_tr_sl=en&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=op,wapp'>page(google translate</a>";
        document.querySelector("body").innerHTML += "<br><a target='blank_' href='https://www.youtube.com/watch?v="+id+"'>page(youtube</a>";
    }
    add_input_btn();
    add_search_btn();
};
function add_input_btn(){
    el = document.createElement("input");
    el.setAttribute("type","text");
    el.setAttribute("id","input_url");

    el2 = document.createElement("button");
    el2.setAttribute("id","btn_url");
    el2.setAttribute("onclick","btn_go()");
    el2.innerHTML = "go";

    document.querySelector("body").innerHTML += "<br>";
    document.querySelector("body").appendChild(el);
    document.querySelector("body").appendChild(el2);
}

function add_search_btn(){
    el = document.createElement("input");
    el.setAttribute("type","text");
    el.setAttribute("id","input_search");

    el2 = document.createElement("button");
    el2.setAttribute("id","btn_search");
    el2.setAttribute("onclick","btn_search()");
    el2.innerHTML = "search";

    document.querySelector("body").innerHTML += "<br>";
    document.querySelector("body").appendChild(el);
    document.querySelector("body").appendChild(el2);
}

function btn_search(){
    var search = document.querySelector("#input_search").value;
    var url = "https://www-youtube-com.translate.goog/results?search_query="+search+"&_x_tr_sl=auto&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=op,wapp";
    window.open(url);
}

function btn_go(){
    var url = document.querySelector("#input_url").value;
    location.href = location.origin+location.pathname+"?q="+url;
}
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