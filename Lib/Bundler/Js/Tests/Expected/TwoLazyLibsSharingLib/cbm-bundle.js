var __bbb={};!function(e) {
    "use strict";
    var n = function(n, o) {
        var r = __bbb, t = r[o];
        return t !== e ? t instanceof Promise ? t : Promise.resolve(t) : (t = new Promise(function(c, i) {
            var s = document.createElement("script"), a = setTimeout(l, 12e4);
            function l() {
                s.onload = s.onerror = e, clearTimeout(a), r[o] === t ? (r[o] = e, i(Error("Fail to load " + n))) : c(r[o]);
            }
            s.charset = "utf-8", s.onload = s.onerror = l, s.src = n, document.head.appendChild(s);
        }), r[o] = t);
    };
    n("shared.js", "a").then(function() {
        return n("lib.js", "b");
    }).then(function(e) {
        console.log(e.hello());
    }), n("shared.js", "a").then(function() {
        return n("lib2.js", "c");
    }).then(function(e) {
        console.log(e.world());
    });
}();