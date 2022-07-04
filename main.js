var resizeType = null
window.onload = function() {
    document.querySelector("head").innerHTML = "<link rel='stylesheet' href='main.css'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta charset='utf-8'>";
    document.querySelector("body").innerHTML = "<div id='main'></div>";
    if(getUrlQueries()["q"] == undefined){
        document.querySelector("head").innerHTML += "<title>yt player</title>";
        var width = document.body.clientWidth < 620 ? document.body.clientWidth-(10+20)*2 : 560;
        var height = document.body.clientWidth < 620 ? width*0.5625 : 315;
        document.querySelector("#main").innerHTML += "<div id='no_id' style='width: "+width+"px;height: "+height+"px;'></div><div id='btn'><div></div></div>"
        resizeType = false
        add_input_btn();
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
        document.querySelector("body > #main").innerHTML += "<iframe width='"+width+"' height='"+height+"' src='https://www.youtube-nocookie.com/embed/"+id+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
        resizeType = true
        document.querySelector("body > #main").innerHTML += "<div></div><div id='btn'><div></div></div>"
        document.querySelector("head").innerHTML += "<title>"+id+"</title>";
        add_input_btn()
    }
};
window.addEventListener("resize", resize)
function resize() {
    var width = document.body.clientWidth < 620 ? document.body.clientWidth-(10+20)*2 : 560;
    var height = document.body.clientWidth < 620 ? width*0.5625 : 315;
    if (resizeType) {
        document.querySelector("#main > iframe").width = width
        document.querySelector("#main > iframe").height = height
    } else {
        document.querySelector("div#no_id").style.width = width
        document.querySelector("div#no_id").style.height = height
    }
}
function add_input_btn(){
    el = document.createElement("input");
    el.setAttribute("type","text");
    el.setAttribute("id","input_url");
    el.setAttribute("placeholder","https://youtu.be/");
    el2 = document.createElement("button");
    el2.setAttribute("id","btn_url");
    el2.setAttribute("onclick","btn_go()");
    el2.innerHTML = "";
    document.querySelector("body > #main > #btn > div").appendChild(el);
    document.querySelector("body > #main > #btn").appendChild(el2);
    document.querySelector("#input_url").addEventListener("keydown", function(e){
        if(e.keyCode == 13){
            btn_go();
        }
    });
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
        queries[queryArr[0]] = queryArr[1]});
    return queries;
}