<template>
  <div>
    <header :class="{'drome': $route.path.includes('/drome') }">
      <div class="nav-logo">
        <nuxt-link :to="{name: 'index'}" exact>SPACE BUCKETS</nuxt-link>
      </div>
      <a class="nav-toggle active" href="#mobile-spacer">
        <svg id="Menu" width="21" height="21" viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" fill="#eee"></path></svg>
      </a>
<!--       <a class="nav-toggle" href="#" @click="toggleActive = !toggleActive" :class="{'active': toggleActive}"><svg id="Menu" width="21" height="21" viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" fill="#eee"></path></svg>
      </a>   -->    
      <div class="nav-sep">
        <nuxt-link to="/materials">MATERIALS</nuxt-link>
        <nuxt-link to="/build">BUILD</nuxt-link>
        <nuxt-link to="/gallery">GALLERY</nuxt-link>
        <nuxt-link to="/docs">DOCS</nuxt-link>
        <nuxt-link class="onlydesktop" to="/designer">DESIGN</nuxt-link>
        <nuxt-link to="/drome">DROME</nuxt-link>
      </div> 
      <div class="random-link">
          <button style="opacity: 0">
            <span>RANDOM</span><svg height="16" width="16" viewBox="0 0 1792 1792"><path d="M666 481q-60 92-137 273-22-45-37-72.5t-40.5-63.5-51-56.5-63-35-81.5-14.5h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224q250 0 410 225zm1126 799q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192q-32 0-85 .5t-81 1-73-1-71-5-64-10.5-63-18.5-58-28.5-59-40-55-53.5-56-69.5q59-93 136-273 22 45 37 72.5t40.5 63.5 51 56.5 63 35 81.5 14.5h256v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm0-896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-256q-48 0-87 15t-69 45-51 61.5-45 77.5q-32 62-78 171-29 66-49.5 111t-54 105-64 100-74 83-90 68.5-106.5 42-128 16.5h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224q48 0 87-15t69-45 51-61.5 45-77.5q32-62 78-171 29-66 49.5-111t54-105 64-100 74-83 90-68.5 106.5-42 128-16.5h256v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23z" fill="#eee"/></svg>
          </button>           
        <client-only>
          <button @click="randomLink()">
            <span>RANDOM</span><svg height="16" width="16" viewBox="0 0 1792 1792"><path d="M666 481q-60 92-137 273-22-45-37-72.5t-40.5-63.5-51-56.5-63-35-81.5-14.5h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224q250 0 410 225zm1126 799q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192q-32 0-85 .5t-81 1-73-1-71-5-64-10.5-63-18.5-58-28.5-59-40-55-53.5-56-69.5q59-93 136-273 22 45 37 72.5t40.5 63.5 51 56.5 63 35 81.5 14.5h256v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm0-896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-256q-48 0-87 15t-69 45-51 61.5-45 77.5q-32 62-78 171-29 66-49.5 111t-54 105-64 100-74 83-90 68.5-106.5 42-128 16.5h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224q48 0 87-15t69-45 51-61.5 45-77.5q32-62 78-171 29-66 49.5-111t54-105 64-100 74-83 90-68.5 106.5-42 128-16.5h256v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23z" fill="#eee"/></svg>
          </button>
        </client-only>     
      </div>       
    </header>
    <section>
      <nuxt />
    </section>
    <div id="mobile-spacer" style="height:50px">a</div>
      <div id="mobile-menu" class="onlymobile nav-sep">
        <div>
          <nuxt-link to="/materials">MATERIALS</nuxt-link>
          <nuxt-link to="/docs">DOCS</nuxt-link>
          <nuxt-link to="/build">BUILD</nuxt-link>
          <nuxt-link to="/gallery">GALLERY</nuxt-link>
          <nuxt-link to="/drome">DROME</nuxt-link>
        </div>
      </div> 
      <div id="stat"></div>    
  </div>
</template>

<script>
import { singleRandom } from "~/store/flatDB";

export default {
  scrollToTop: true,
  data() {
    return {
      randomPost: [],
      toggleActive: false,
    }
  },
  methods: {
    async randomLink() {
      this.randomPost = await singleRandom()
      this.$router.push({ path: `/u/${this.randomPost.s}` })
    }
  },
  updated() {
    var src = document.getElementById("stat");
    src.innerHTML = "" 
    this.$nextTick(() => {
      var img = document.createElement("img");
      img.src = "https://c.statcounter.com/8400951/0/f591167d/1/?t=" + new Date().getTime();
      src.appendChild(img);
		});
  }
};
</script>  
<style lang="scss" scoped>

header {
  background: #151515;
  color: #eee;
  z-index: 99;
  grid-area: sidebar;
  display: flex;
  position: fixed;
  backface-visibility: hidden;
  left: 0;
  top: 0;
  right: 0;
  min-height: 50px;
  border-bottom: 1px solid #222;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  & + section { grid-area: content; }
  &.drome {
    border-bottom: 2px solid #004d47;
  }
  @media (max-width: 980px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

  }    
  div,
  a {
    color: #fafafa;
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    font-weight: 600;
    display: block;
    text-decoration: none;
    &.nuxt-link-active,
    &:hover {
      color: #fdd835;
    }
  } 
  .nav-toggle {
    display: none;
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 15px 10px;
    cursor: pointer;
    @media (max-width: 980px) { 
          align-items: center;
          justify-content: center;
          &.active   {    display: flex;} 

      }     
  }
  .nav-logo {
    padding: 0 15px;
    min-height: 50px;
    display: flex;
    align-items: center;
    a {
      font-weight: 700;
      font-size: 21px;
      &.nuxt-link-active {
        color: #fafafa;
      }      
    }
  }
}

  .nav-sep {
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    a {
      display: block;
      flex: 1;
      padding: 0 20px;
    }    
    div,
    a {
      color: #fafafa;
      font-family: "Montserrat", sans-serif;
      font-size: 17px;
      font-weight: 600;
      display: block;
      text-decoration: none;
      &.nuxt-link-active,
      &:hover {
        color: #fdd835;
      }
    }    
    @media (max-width: 980px) {
      display: none;
      a {
        padding: 10px 0;
      }
    }    
  }

input::-webkit-input-placeholder {
  color: #eee;
}

input:-moz-placeholder {
  color: #eee;
}

input:-ms-input-placeholder {
  color: #eee;
}

input:focus {
  outline: 0;
}
</style>

<style lang="scss">

#mobile-menu {
  grid-area: footer;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  a { font-size: 18px !important; }
  > div {
    flex: 1;
  }
}
.onlydesktop {
  @media screen and (max-width: 1111px) {
    display: none !important;
  }
}
.onlymobile {
  display: none !important;
  @media screen and (max-width: 980px) {
    display: flex !important;
  }
}

.card i {
  position: absolute;
  right: 10px;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-family: arial, Arial, Helvetica, sans-serif;
  letter-spacing: 0;
}

.search-sidebar {
  height: 100vh;
  max-width: 250px;
  background: #000;
  color: #eee;
  padding: 15px;
  position: fixed;
  backface-visibility: hidden;
  left: 0;
  top: 50px;
  @media (max-width: 980px) {
    position: relative;
    height: auto;
    top: 0;
    max-width: 100%;
    padding-bottom: 0;
    padding: 15px 15px 0;
  }  
  p { color: #eee; line-height: 1.2em; }
  h2 {
    font-size: 20px;
    color: #eee;
    padding-bottom: 15px;
  }
}

html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #000;
  margin: 0;
  margin-top: 50px;
}

/*   .sb-grid {
    display: grid;
    grid-template-rows: 50px 1fr auto;
    grid-template-areas: "sidebar" "content" "footer";
    min-height: 100vh; 
  } */

a { color: #136baf; }

h1,
h2,
h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin: 0;
}

h3 {
  margin: 15px 0 5px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255,255,255,0) !important;
}

.__nuxt-error-page {
  background: #000 !important;
  svg { fill: #333 !important; }
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}

img {
  width: 100%;
}

p {
  margin: 0 0 15px;
  line-height: 1.6em;
}

.random-link {
  button {
    border: 0;
    background: transparent;
    display: flex !important;
    align-items: center;
    color: #fafafa;
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    + button { position: absolute; top: 0; padding: 15px 0; }
    &:hover { color: #fdd835; }
    &:focus { outline: 0; }
    span { display: inline-block; padding-right: 8px; }
    &:hover svg path { fill: #fdd835; }
  }
  @media (max-width: 980px) {
    position: fixed;
    bottom: 20px;
    right: 15px;
    background: #151515;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex !important;
    box-shadow: 0px 0px 2px #151515;
    button span { display: none; }
    button svg { width: 50px; height: auto; padding: 14px; }
    button + button { padding: 0; }
  }
}

#stat {
  img {
    width: auto;
  }
}

</style>
