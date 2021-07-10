MathJax.Hub.Config({
  config: ["MMLorHTML.js"],
  jax: ["input/TeX", "input/MathML", "output/HTML-CSS", "output/NativeMML"],
  extensions: ["tex2jax.js", "mml2jax.js", "MathMenu.js", "MathZoom.js"],
  tex2jax: {
    inlineMath: [['$', '$']],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true
  },
  TeX: { extensions: ["mhchem.js", "AMScd.js", "AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js"] },
  "HTML-CSS": { availableFonts: ["TeX"] },
  styles: { ".MathJax_Preview": { visibility: "hidden" } },
  MathML: { extensions: ["content-mathml.js"] },
});

document$.subscribe(() => {
  MathJax.typesetPromise()
})