var __bbb={};!function(e) {
    "use strict";
    var o = function(o, n) {
        var r = __bbb, t = r[n];
        return t !== e ? t instanceof Promise ? t : Promise.resolve(t) : (t = new Promise(function(u, c) {
            var i = document.createElement("script"), s = setTimeout(a, 12e4);
            function a() {
                i.onload = i.onerror = e, clearTimeout(s), r[n] === t ? (r[n] = e, c(Error("Fail to load " + o))) : u(r[n]);
            }
            i.charset = "utf-8", i.onload = i.onerror = a, i.src = o, document.head.appendChild(i);
        }), r[n] = t);
    };
    function n() {
        console.log("shared");
    }
    function r() {
        return "unused";
    }
    n(), o("lib.js", "a").then(function(e) {
        console.log(e.hello());
    }), __bbb.b = {
        shared: n,
        unused: r
    };
}();