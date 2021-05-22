import getCats from "./json/categories.json"
import getuRoutes from "./json/u-routes.json"
import getDocsRoutes from "./json/docs-routes.json"

const reRoutes = getDocsRoutes.concat(getuRoutes)

export default {
  target: "static",
   server: {
    host: '0', // default: localhost,
  },   
  generate: {
    //subFolders: false,
    concurrency: 1,
    exclude: [
      /^\/gallery/ // path starts with /admin
    ],    
    routes: getCats,  
  },
  head: {
    htmlAttrs: { lang: "en", },
    titleTemplate: (chunk) => {
      if (chunk) { return `${chunk}`; }
      return "DIY indoor gardening - Space Buckets";
    },  
    script: [
      { src: 'https://spacebuckets.com/statvars.js', type: 'text/javascript' },
      { src: 'https://statcounter.com/counter/counter.js', type: 'text/javascript' }
    ],    
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: 'theme-color', name:"theme-color", content:"#151515" },
      { hid: 'description', name: 'description', content: 'DIY Indoor Gardening with stacked containers and LED or CFL lights. Grow plants indoors and join our community!' }      
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=auto' }      
    ],
  }, 
  components: true,
  loading: { color: "#fdd835" },
  vueMeta: { refreshOnceOnNavigation: true },
  features: { transitions: false },
  modules: ['@nuxtjs/axios'],
  axios: {
    proxyHeaders: false,
    credentials: false
  },  
  cssSourceMap: false,
  build: {
    extractCSS: {ignoreOrder: true},
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },  
  buildModules: [
    "@nuxtjs/eslint-module",
    ['@nuxtjs/google-analytics', {
      id: 'UA-35759103-1',
      autoTracking: {
        pageviewTemplate: route => {
          return {
            page: route.path,
            title: window.document.title,
            location: window.location.href,
          };
        }
      }      
    }],
    "@nuxtjs/sitemap",
  ],   
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://spacebuckets.com',
    exclude: [],
    routes: reRoutes
  },  
};
