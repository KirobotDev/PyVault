document.addEventListener("DOMContentLoaded", function () {

    var links = document.querySelectorAll("[data-goto]");
    var views = document.querySelectorAll(".view");

    function show(name) {
        links.forEach(function (l) {
            l.classList.toggle("active", l.getAttribute("data-goto") === name);
        });
        views.forEach(function (v) {
            v.classList.toggle("active", v.getAttribute("data-panel") === name);
        });
    }

    links.forEach(function (l) {
        l.addEventListener("click", function (e) {
            var href = l.getAttribute("href");
            if (href && href.charAt(0) === "#") {
                e.preventDefault();
                var target = l.getAttribute("data-goto");
                show(target);
                history.replaceState(null, "", "#" + target);
                window.scrollTo(0, 0);
            }
        });
    });

    var known = ["accueil", "readme", "test", "idees", "a-propos"];
    var h = window.location.hash.replace("#", "");
    show(known.indexOf(h) !== -1 ? h : "accueil");

    applyI18n();

    var langSwitch = document.getElementById("lang-switch");
    if (langSwitch) {
        langSwitch.addEventListener("click", function (e) {
            var b = e.target && e.target.closest ? e.target.closest("[data-lang]") : null;
            if (!b) return;
            var lang = b.getAttribute("data-lang");
            if (lang && lang !== i18nGetLang()) {
                i18nSetLang(lang);
                applyI18n();
                renderMermaid(lang);
            }
        });
    }

    var mermaidEls = document.querySelectorAll("[data-mermaid]");
    for (var mi = 0; mi < mermaidEls.length; mi++) {
        mermaidEls[mi].setAttribute("data-mermaid-src", mermaidEls[mi].textContent);
    }

    function renderMermaid(lang) {
        if (!window.mermaid) return;
        for (var i = 0; i < mermaidEls.length; i++) {
            var el = mermaidEls[i];
            el.innerHTML = "";
            var src = el.getAttribute("data-mermaid-src");
            if (src) el.textContent = src;
            el.hidden = el.getAttribute("data-mermaid") !== lang;
        }
        try {
            mermaid.run({ querySelector: ".mermaid:not([hidden])" });
        } catch (e) {
            return;
        }
    }

    if (window.mermaid) {
        mermaid.initialize({
            startOnLoad: false,
            theme: "dark",
            themeVariables: {
                darkMode: true,
                background: "#131313",
                primaryColor: "#1c1c1c",
                primaryBorderColor: "#3a3a3a",
                primaryTextColor: "#e6e6e6",
                lineColor: "#ff6b1a",
                edgeLabelBackground: "#131313",
                tertiaryColor: "#161616"
            },
            fontFamily: "Source Sans 3, sans-serif"
        });
        renderMermaid(i18nGetLang());
    }

});
