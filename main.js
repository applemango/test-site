window.onload = function() {
    //https://translate.google.com/translate?sl=en&tl=ja&hl=ja&u=https://www.youtube.com/results?search_query%3Dncs%26sp%3DCAMSAhAB&client=webapp
    //https://translate.google.com/translate?sl=en&tl=en&hl=ja&u=https://www.youtube.com/results?search_query%3Dncs%26sp%3DCAMSAhAB&client=webapp
    html_b()
    if(getUrlQueries()["q"] == undefined){
        //inner("<p>Example => <a href='https://applemango.github.io/test-site/?q=lJIrF4YjHfQ'>https://applemango.github.io/test-site/?q=lJIrF4YjHfQ</a></p>","error")
        //document.querySelector("body > #main").innerHTML += "<p>Example => <a href='https://applemango.github.io/test-site/?q=lJIrF4YjHfQ'>https://applemango.github.io/test-site/?q=lJIrF4YjHfQ</a></p>";
        document.querySelector("head").innerHTML += "<title>yt player</title>";
    } else {
        if(getUrlQueries()["q"] == "https://www.youtube.com/watch?v"){
            var id = getUrlQueries(location.search.slice(33))["v"]
        } else if(getUrlQueries()["q"] == "https://www-youtube-com.translate.goog/watch?v") {
            var id = getUrlQueries(location.search.slice(48))["v"]
        } else if(getUrlQueries()["q"].match(/https:/) && getUrlQueries()["q"].match(/youtu.be/)){
            var id = location.search.slice(20);
        }else {
            var id = getUrlQueries()["q"]
        }
        var width = document.body.clientWidth < 620 ? document.body.clientWidth-(10+20)*2 : 560;
        var height = document.body.clientWidth < 620 ? width*0.5625 : 315;
        //inner("<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/"+id+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",id)
        //document.querySelector("body > #main").innerHTML += "<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/"+id+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
        document.querySelector("body > #main").innerHTML += "<iframe width='"+width+"' height='"+height+"' src='https://www.youtube-nocookie.com/embed/"+id+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
        document.querySelector("body > #main").innerHTML += "<div></div>"
        document.querySelector("body > #main > div").innerHTML += "<div class='a'><a target='blank_' href='https://www-youtube-com.translate.goog/watch?v="+id+"&_x_tr_sl=en&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=op,wapp'>youtube translate</a></div>";
        document.querySelector("body > #main > div").innerHTML += "<div class='a'><a style='margin-left: 20px;' target='blank_' href='https://www.youtube.com/watch?v="+id+"'>youtube</a></div>";
        document.querySelector("head").innerHTML += "<title>"+id+"</title>";
    }
    html_a()
};
/*
function inner(html,title) {
    document.querySelector("body > #main").innerHTML += html;
    document.querySelector("head").innerHTML += "<meta charset='utf-8'><title>"+title+"</title>";
}
*/
function html_b(){
    document.querySelector("head").innerHTML = "<link rel='stylesheet' href='main.css'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta charset='utf-8'>";
    document.querySelector("body").innerHTML = "<div id='main'><h1>youtube player</h1></div>";
}
function html_a(){
    add_input_btn();
    add_search_btn();
    add_translate_btn();
}

function add_input_btn(){
    el = document.createElement("input");
    el.setAttribute("type","text");
    el.setAttribute("id","input_url");
    el.setAttribute("placeholder","https://youtu.be/");

    el2 = document.createElement("button");
    el2.setAttribute("id","btn_url");
    el2.setAttribute("onclick","btn_go()");
    el2.innerHTML = "go";

    //document.querySelector("body > #main").innerHTML += "<br>";
    document.querySelector("body > #main").appendChild(el);
    document.querySelector("body > #main").appendChild(el2);
}

function add_search_btn(){
    el = document.createElement("input");
    el.setAttribute("type","text");
    el.setAttribute("id","input_search");
    el.setAttribute("placeholder","search");

    el2 = document.createElement("button");
    el2.setAttribute("id","btn_search");
    el2.setAttribute("onclick","btn_search()");
    el2.innerHTML = "search";

    document.querySelector("body > #main").innerHTML += "<br>";
    document.querySelector("body > #main").appendChild(el);
    document.querySelector("body > #main").appendChild(el2);
}

function add_translate_btn(){
    el = document.createElement("input");
    el.setAttribute("type","text");
    el.setAttribute("id","input_translate");
    el.setAttribute("placeholder","translate site");

    el2 = document.createElement("button");
    el2.setAttribute("id","btn_translate");
    el2.setAttribute("onclick","btn_translate()");
    el2.innerHTML = "translate";

    document.querySelector("body > #main").innerHTML += "<br>";
    document.querySelector("body > #main").appendChild(el);
    document.querySelector("body > #main").appendChild(el2);
}

function btn_translate(){
    var url = document.querySelector("#input_translate").value;
    if(url != ""){
        var url_ = "https://translate.google.com/translate?sl=en&tl=en&hl=ja&u="+encodeURIComponent(url);+"&client=webapp"
        window.open(url_);
    }
}

function btn_search(){
    var search = document.querySelector("#input_search").value;
    if(search != ""){
        var url = "https://www-youtube-com.translate.goog/results?search_query="+search+"&_x_tr_sl=auto&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=op,wapp";
        window.open(url);
    }
}

function btn_go(){
    var url = document.querySelector("#input_url").value;
    if(url != ""){
    location.href = location.origin+location.pathname+"?q="+url;
    }
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