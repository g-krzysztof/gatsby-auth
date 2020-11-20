/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`

    // Update the page.
    createPage(page)
  }
}

const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // if (stage === "build-html" || stage === "develop-html") {
  //   const regex = [
  //     /node_modules\/leaflet/,
  //     /node_modules\\leaflet/
  //   ]
    actions.setWebpackConfig({
      node: {
        fs: 'empty',
      },
      // module: {
      //   rules: [
      //     {
      //       test: regex,
      //       use: loaders.null()
      //     }
      //   ]
      // }
    })
  // }
}