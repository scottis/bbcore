var __bbb={};!function(o) {
    "use strict";
    var e = function(e, n) {
        var r = __bbb, t = r[n];
        return t !== o ? t instanceof Promise ? t : Promise.resolve(t) : (t = new Promise(function(c, i) {
            var a = document.createElement("script"), l = setTimeout(s, 12e4);
            function s() {
                a.onload = a.onerror = o, clearTimeout(l), r[n] === t ? (r[n] = o, i(Error("Fail to load " + e))) : c(r[n]);
            }
            a.charset = "utf-8", a.onload = a.onerror = s, a.src = e, document.head.appendChild(a);
        }), r[n] = t);
    };
    function n() {
        console.log("shared");
    }
    n(), e("lib.js", "a").then(function(o) {
        console.log(o.hello());
    }), __bbb.b = n;
}();