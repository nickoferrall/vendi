const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-for-sale-js": hot(preferDefault(require("/Users/nick/vendi/src/templates/forSale.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/nick/vendi/src/templates/blog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nick/vendi/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nick/vendi/src/pages/404.js"))),
  "component---src-pages-for-sale-js": hot(preferDefault(require("/Users/nick/vendi/src/pages/for-sale.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nick/vendi/src/pages/index.js"))),
  "component---src-pages-learn-js": hot(preferDefault(require("/Users/nick/vendi/src/pages/learn.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/nick/vendi/src/pages/login.js"))),
  "component---src-pages-sign-up-js": hot(preferDefault(require("/Users/nick/vendi/src/pages/sign-up.js")))
}

