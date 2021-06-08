const https = require('https');
const axios = require('axios');

import webpack from 'webpack'

export default {
  // mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        property: 'og:locale',
        content: 'es_PE',
      },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: "60x60", href: '/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: "72x72", href: '/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: "76x76", href: '/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: "114x114", href: '/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: "120x120", href: '/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: "144x144", href: '/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: "152x152", href: '/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/favicon/apple-icon-180x180.png' },
      { rel: 'icon', type: "image/png", sizes: "192x192" , href: '/favicon/android-icon-192x192.png' },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png"},
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon/favicon-96x96.png"},
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png"},
      { rel: "shortcut icon", type: "image/x-icon", href: "/favicon/favicon.ico"},
      { rel: "manifest", href: "/favicon/manifest.json"},
      { 
        rel: 'stylesheet', 
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,700;0,800;1,300;1,400;1,600;1,700&family=Oswald:wght@200;400;500;600;700&display=swap"
      },
      { 
        rel: 'stylesheet', 
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800&display=swap"
      },
      { 
        rel: 'stylesheet', 
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
      },
      { 
        rel: 'stylesheet', 
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
      },
    ],
    script: [
      {
        src: "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js",
      },
    ],
    
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/sass/main.sass'
  ],
  styleResources: {
    sass: './assets/sass/main.sass'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/icon-boostrap-vue', ssr: false },
    { src: '@/plugins/vue-carousel', ssr: false },
    {
      src: '@/plugins/vue-gtag.js',
      mode: 'client'
    },
    { src: '@/plugins/vue-persistedstate.js', ssr: false },
    { src: '@/plugins/validate.js'},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@aceforth/nuxt-optimized-images',
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true, // este por defecto siempre esta en false,
    imageminMozjpeg: true,
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['nuxt-google-maps-module', {
      /* module options */
      key: 'AIzaSyCEaGvnx5jch4RwsxwZn9D0CWUssPEyaMg', // Default
    }],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://admin.floreriasumaq.pe/api/v1/',
    proxyHeaders: false,
    credentials: false,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        $: 'jquery',
      })
    ],
    babel: {
      // envName: server, client, modern
      presets({ envName }) {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: { version: 3 }
            }
          ]
        ]
      }
    },
  }
}
