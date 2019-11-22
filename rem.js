window.onload = function(){
    serRem(750)
}

window.onresize = function(){
    serRem(750)
}

function serRem(uiPx){
    const html = document.getElementsByTagName("html")[0];
    const clientWidth = document.body.clientWidth || document.documentElement.clientWidth
    html.style.fontSize = clientWidth / uiPx * 200 +"px"
}