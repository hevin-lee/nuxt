const apiConfig = require('./api.config')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: 'Nuxt.js project'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*cache components*/
  cache: {
    max: 20,
    maxAge: 600000
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#2196f3'
  },
  dev: (process.env.NODE_ENV !== 'production'),
  env: {
    baseUrl: apiConfig.baseUrl
  },
  /*
   ** Build configuration
   */
  build: {
    // analyze: true,
    // or
    // analyze: {
    //   analyzerMode: 'static',
    //   analyzerPort:8001,
    //   openAnalyzer:true
    // },
    vendor: ['axios'],
    /*
     **自定义文件名
     */
    filenames: {
      vendor: 'vendor.[hash].js',
      app: 'app.[chunkhash].js'
    },
    /*
     ** loader
     */
    loaders: [
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader!postcss-loader'
      // }, 
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // 1KO
          name: 'images/[name].[hash:7].[ext]'
        }
      }, 
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    postcss: [
      require('postcss-cssnext')({
        browsers: ['>5% in CN','last 3 versions']
      }),
      require('postcss-import')()
      // require('autoprefixer')({
      //   browsers: ['>5% in CN','last 3 versions']
      // })
    ],
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}