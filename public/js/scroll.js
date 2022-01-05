let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "vh";

}

function myFunction() {
    var x = document.getElementById("btn1").innerHTML;
    document.getElementById("demo").innerHTML = x;

}