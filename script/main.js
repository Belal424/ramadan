var share = document.getElementById('share'),
link = document.getElementById('link'),
url_string = window.location,
_main = window.location.host,
url = new URL(url_string),
share = document.getElementById('share'),
url_string = window.location,
url = new URL(url_string),
name = url.searchParams.get("name"),
res = document.getElementById('name'),
whats = document.getElementById('wa'),
messenger = document.getElementById('ms');
(function () {
    res.innerHTML = name;
    whats.href = `whatsapp://send?text=رمضان كريم وكل عام وانت بخير :
    ${url} 
    لكتابة الاسم : 
    ${_main}`;
    messenger.href = `fb-messenger://share?text= كريم وكل عام وانت بخير :
    ${url} 
    لكتابة الاسم : 
    ${_main}`
})();
 function fun() {
        link.innerHTML = url;
        share.style.display = "block";
}
function link1() {
    navigator.clipboard.writeText(`رمضان كريم وكل عام وانت بخير :
    ${url} 
    لكتابة الاسم : 
    ${_main}`);
    alert("Text copied")
}
function back() {
    var back = document.getElementById('back');
    back.href = `https://${window.location.host}`;
}