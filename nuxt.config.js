import { getBuilds } from "./static/flatDB";

export default {
  target: "static",
   server: {
    host: '0', // default: localhost,
  },   
  generate: {
    //subFolders: false,
    concurrency: 1,
    routes() {
      return getBuilds().then(res => {
        return res.map(post => {
          return {
            route: '/u/' + post.s,
            payload: post
          }
        })
      })
    }    
  },
  head: {
    htmlAttrs: {
      lang: "en",
    },
    titleTemplate: (chunk) => {
      if (chunk) { return `${chunk}`; }
      return "DIY indoor gardening - Space Buckets";
    },
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: 'theme-color',
        name:"theme-color",
        content:"#151515"
      },
      {
        hid: 'description',
        name: 'description',
        content: 'DIY Indoor Gardening with stacked containers and LED or CFL lights. Grow plants indoors and join our community!'
      }      
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
  //plugins: ['~/plugins/profile.js'],
  build: {
    transpile: [
      'three',
    ],
  },  
  buildModules: [
    "@nuxtjs/eslint-module",
    ['@nuxtjs/google-fonts', {   
      display: 'auto',
      families: {
      Montserrat: [600, 700],
      },   
    }],
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
    routes() {
      return getBuilds().then(res => {
        return res.map(post => {
          return {
            route: '/u/' + post.s,
            payload: post
          }
        })
      })
    } 
  }, 
};
