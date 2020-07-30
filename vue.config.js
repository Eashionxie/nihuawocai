const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
    productionSourceMap: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new PrerenderSPAPlugin({
                        staticDir: path.join(__dirname, './dist'),
                        // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
                        routes: ['/', '/game','/setting'],
                        // 这个很重要，如果没有配置这段，也不会进行预编译
                        renderer: new Renderer({
                            inject: {
                                foo: 'bar'
                            },
                            headless: false,
                            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                            renderAfterDocumentEvent: 'render-event'
                        })
                    }),
                    // new CompressionPlugin({
                    //     test: /\.js$|\.html$|\.css/,
                    //     threshold: 5120,
                    //     deleteOriginalAssets: true
                    // }),
                ]
            }
        }
    }
}