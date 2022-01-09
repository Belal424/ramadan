(function () {
    var url_string = window.location;
    var url = new URL(url_string);
    var name = url.searchParams.get("name");
    var res = document.getElementById('name');
    res.innerHTML = name;
})();
 function fun() {
    var url_string = window.location;
    var url = new URL(url_string);
    navigator.clipboard.writeText(url);
}