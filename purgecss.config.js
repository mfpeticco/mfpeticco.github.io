module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Keep nav-link rules that use attribute selectors — e.g. the two-line
  // "Personal Projects" rule targets [href$="/projects/"], which purgecss
  // strips because it can't see the selector referenced in the HTML.
  safelist: {
    greedy: [/nav-link/],
  },
};
