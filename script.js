
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    "userid": "",
    "language": "th",
    "listing_pagetype": "home",
    "website_section": "generalist"
});

! function () {
    var e = document,
        t = e.createElement("script");
    if (!("noModule" in t) && "onbeforeload" in t) {
        var n = !1;
        e.addEventListener("beforeload", function (e) {
            if (e.target === t) n = !0;
            else if (!e.target.hasAttribute("nomodule") || !n) return;
            e.preventDefault()
        }, !0), t.type = "module", t.src = ".", e.head.appendChild(t), t.remove()
    }
}();
