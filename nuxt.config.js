module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'tepark',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&amp;subset=cyrillic-ext' }
    ]
  },
  css: [
    // Load a node module directly (here it's a SASS file)
    // CSS file in the project
    '@/assets/css/x.css'
    // SCSS file in the project
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ff6d00', height: '5px' },
  plugins: [
    '~/plugins/tepark-search-form.js',
    '~plugins/vue-js-modal'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
