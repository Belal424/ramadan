(function () {
    var url_string = window.location;
    var url = new URL(url_string);
    var name = url.searchParams.get("name");
    var res = document.getElementById('name');
    res.innerHTML = name;
})();
 function fun() {
    var url_string = window.location;
    var _main = window.location.host;
    // var main_url = new URL(_main);
    var url = new URL(url_string);
    navigator.clipboard.writeText(`رمضان كريم وكل عام وانت بخير :
${url} 
لكتابة الاسم : 
${_main}`);
     alert("تم  النسخ");
}
function back() {
    var back = document.getElementById('back');
    back.href = `https://${window.location.host}`;
}
