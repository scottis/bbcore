var __bbb={};!function(o) {
    "use strict";
    (function(e, n) {
        var r = __bbb, t = r[n];
        return t !== o ? t instanceof Promise ? t : Promise.resolve(t) : (t = new Promise(function(i, c) {
            var a = document.createElement("script"), l = setTimeout(s, 12e4);
            function s() {
                a.onload = a.onerror = o, clearTimeout(l), r[n] === t ? (r[n] = o, c(Error("Fail to load " + e))) : i(r[n]);
            }
            a.charset = "utf-8", a.onload = a.onerror = s, a.src = e, document.head.appendChild(a);
        }), r[n] = t);
    })("lib.js", "a").then(function(o) {
        console.log(o.hello());
    });
}();