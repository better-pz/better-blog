// // css跟less 并存使用
// // const withCSS = require('@zeit/next-css')
// // const withLess = require('@zeit/next-less')
// // module.exports = withLess(withCSS({}))
// const withCss = require('@zeit/next-less');
// const lessToJS = require('less-vars-to-js');
// const fs = require('fs');
// const path = require('path');

// const themeVariables = lessToJS(
// fs.readFileSync(path.resolve(__dirname, './static/modifyVars.less'), 'utf8')
// )

// // fix: prevents error when .css files are required by node
// if (typeof require !== 'undefined') {
// require.extensions['.less'] = file => {}
// }

// const conf = {
// lessLoaderOptions: {
// javascriptEnabled: true,
// modifyVars: themeVariables // make your antd custom effective
// },
// distDir: 'build',
// generateEtags: false,
// generateBuildId: async () => {
// return 'build-' + Date.now();
// }
// };
// module.exports = withCss(conf);

