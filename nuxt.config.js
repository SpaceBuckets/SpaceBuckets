import { getBuilds } from "./store/flatDB";


export default {
  target: "static",
/*   router: {
    base: '/nuxt/'
  },   */
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
 build: {
    extractCSS: true,
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
  head: {
    htmlAttrs: {
      lang: "en",
    },
     script: [
/*       { src: "/statcounter.js", type: "text/javascript", async: true },
      { src: "https://www.statcounter.com/counter/counter.js", type: "text/javascript", async: true } */
    ],  
    titleTemplate: (chunk) => {
      if (chunk) { return `${chunk}`; }
      return "Space Buckets - DIY indoor gardeners";
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
        content: 'Space Buckets: DIY Indoor Gardening with stacked containers. Start your journey and join the community!'
      }      
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  }, 
  components: true,
  loading: { color: "#fdd835" },
  vueMeta: { refreshOnceOnNavigation: true },
  features: { transitions: false },
  buildModules: [
    "@nuxtjs/eslint-module",
   // '@nuxtjs/pwa',
    ['@nuxtjs/google-fonts', {   
      display: 'auto',
      families: {
      Montserrat: [600, 700],
      },   
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-35759103-1',
    /*  debug: {
        enabled: true,
        sendHitTask: true
      }, */
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
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.spacebuckets.com',
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
