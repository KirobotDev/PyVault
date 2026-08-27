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
        mermaid.run({ querySelector: ".mermaid" });
    }

});
