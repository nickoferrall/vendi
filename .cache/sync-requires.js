const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nick/gatsby-link-state-test/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nick/gatsby-link-state-test/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nick/gatsby-link-state-test/src/pages/index.js"))),
  "component---src-pages-learn-js": hot(preferDefault(require("/Users/nick/gatsby-link-state-test/src/pages/learn.js"))),
  "component---src-pages-for-sale-js": hot(preferDefault(require("/Users/nick/gatsby-link-state-test/src/pages/for-sale.js")))
}

