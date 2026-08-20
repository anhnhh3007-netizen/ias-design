// Resolves any --color-* custom property (including chained aliases, e.g.
// --color-bg-page: var(--color-neutral-100)) to its final rendered value and
// writes it into the nearest [data-token] element's `.hex` span. Keeps these
// guideline cards synced to tokens/colors.css without hand-typed hex.
(function () {
  function resolve(token) {
    var probe = document.createElement("span");
    probe.style.cssText = "position:absolute;visibility:hidden;color:var(" + token + ")";
    document.body.appendChild(probe);
    var rgb = getComputedStyle(probe).color;
    probe.remove();
    var m = (rgb.match(/[\d.]+/g) || []).map(Number);
    var r = Math.round(m[0] || 0), g = Math.round(m[1] || 0), b = Math.round(m[2] || 0);
    var a = m[3] === undefined ? 1 : m[3];
    if (a < 1) return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    return "#" + [r, g, b].map(function (x) { return x.toString(16).padStart(2, "0"); }).join("").toUpperCase();
  }

  document.querySelectorAll("[data-token]").forEach(function (el) {
    var hexEl = el.querySelector(".hex");
    if (hexEl) hexEl.textContent = resolve(el.getAttribute("data-token"));
  });
})();
