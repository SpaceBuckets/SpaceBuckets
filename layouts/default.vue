<template>
  <div>
    <header
      :class="{
        drome: $route.path.includes('/drome'),
        docs: $route.path.includes('/docs')
      }"
    >
      <h1 class="nav-logo">
        <span style="display:none">SPACE BUCKETS</span>
        <nuxt-link :to="{ name: 'index' }" exact><svg width="183" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.57 15.25a12.4 12.4 0 01-3.38-.46 8.06 8.06 0 01-2.6-1.24L1.74 11a8.44 8.44 0 004.85 1.53c.97 0 1.68-.14 2.15-.42.46-.3.69-.68.69-1.15 0-.35-.14-.64-.42-.86a2.88 2.88 0 00-1.05-.57c-.42-.14-1-.3-1.72-.46a23.95 23.95 0 01-2.75-.8 4.55 4.55 0 01-1.85-1.28 3.49 3.49 0 01-.76-2.35c0-.86.23-1.63.7-2.31A4.64 4.64 0 013.64.66 8.6 8.6 0 017.08.05c.94 0 1.85.11 2.75.33.9.23 1.68.55 2.35.97l-1.05 2.58a8.2 8.2 0 00-4.07-1.15c-.96 0-1.66.15-2.13.46-.44.3-.67.71-.67 1.22 0 .5.26.88.78 1.13.53.24 1.34.48 2.42.72 1.11.26 2.03.53 2.75.8.71.26 1.32.68 1.82 1.25.52.58.78 1.36.78 2.34 0 .84-.24 1.6-.71 2.3a4.69 4.69 0 01-2.1 1.64c-.94.4-2.08.61-3.43.61zM21.5.3c1.3 0 2.43.22 3.38.65.96.44 1.7 1.05 2.22 1.85.52.8.78 1.74.78 2.83 0 1.08-.26 2.03-.78 2.84a5.03 5.03 0 01-2.22 1.85c-.95.42-2.08.63-3.38.63h-2.96V15h-3.4V.3h6.36zm-.2 7.88c1.03 0 1.8-.22 2.34-.66.53-.44.8-1.07.8-1.89 0-.82-.27-1.45-.8-1.89-.53-.44-1.3-.67-2.33-.67h-2.77v5.1h2.77zm17.95 3.67h-6.82L31.13 15h-3.49L34.19.3h3.36L44.13 15h-3.57l-1.3-3.15zm-1.07-2.58l-2.33-5.63-2.33 5.63h4.66zm14.3 5.98c-1.5 0-2.86-.32-4.07-.96a7.49 7.49 0 01-2.86-2.71 7.58 7.58 0 01-1.03-3.93 7.28 7.28 0 013.89-6.62 8.48 8.48 0 014.1-.98 8.5 8.5 0 013.44.67 6.9 6.9 0 012.6 1.93l-2.18 2.02a4.7 4.7 0 00-3.7-1.72c-.91 0-1.72.2-2.44.6-.71.4-1.27.95-1.68 1.66-.39.72-.58 1.53-.58 2.44 0 .91.2 1.72.58 2.44.4.71.97 1.27 1.68 1.68.72.39 1.53.58 2.44.58 1.47 0 2.7-.58 3.7-1.74l2.18 2.02a6.8 6.8 0 01-2.6 1.95c-1.04.45-2.2.67-3.47.67zm19.75-2.98V15H60.85V.3h11.1v2.73h-7.72v3.2h6.82v2.64h-6.82v3.4h8zm19.45-4.91a3.63 3.63 0 012.69 3.63c0 1.29-.5 2.28-1.52 2.98-1 .69-2.45 1.03-4.37 1.03h-7.6V.3h7.18c1.8 0 3.17.34 4.12 1.03a3.25 3.25 0 011.45 2.8 3.53 3.53 0 01-1.95 3.23zm-7.42-4.5v3.47h3.38c.84 0 1.48-.15 1.92-.44.43-.3.65-.73.65-1.3 0-.58-.22-1-.65-1.29a3.41 3.41 0 00-1.92-.44h-3.38zm3.97 9.58c.9 0 1.57-.15 2.02-.44.46-.3.7-.75.7-1.37 0-1.22-.91-1.83-2.72-1.83h-3.97v3.64h3.97zm15.24 2.81c-2.1 0-3.74-.58-4.91-1.74-1.16-1.16-1.75-2.82-1.75-4.98V.3h3.4v8.1c0 2.64 1.1 3.95 3.28 3.95 1.07 0 1.88-.31 2.44-.94.56-.64.84-1.65.84-3V.3h3.36v8.23c0 2.16-.59 3.82-1.77 4.98-1.16 1.16-2.79 1.74-4.89 1.74zm17.06 0c-1.5 0-2.86-.32-4.08-.96a7.49 7.49 0 01-2.86-2.71 7.58 7.58 0 01-1.02-3.93 7.28 7.28 0 013.88-6.62 8.48 8.48 0 014.1-.98 8.5 8.5 0 013.44.67 6.9 6.9 0 012.6 1.93l-2.18 2.02a4.7 4.7 0 00-3.7-1.72c-.9 0-1.72.2-2.43.6-.72.4-1.28.95-1.68 1.66-.4.72-.59 1.53-.59 2.44 0 .91.2 1.72.59 2.44.4.71.96 1.27 1.68 1.68.71.39 1.52.58 2.43.58 1.47 0 2.7-.58 3.7-1.74l2.18 2.02a6.8 6.8 0 01-2.6 1.95c-1.04.45-2.2.67-3.46.67zm13.72-6.03l-1.98 2.06V15h-3.38V.3h3.38v6.87L138.78.3h3.78l-6.09 6.55 6.45 8.15h-3.97l-4.7-5.78zm21.57 3.05V15h-11.38V.3h11.1v2.73h-7.72v3.2h6.82v2.64h-6.82v3.4h8zm5.75-9.2h-4.7V.3h12.8v2.77h-4.7V15h-3.4V3.07zm14.66 12.18a12.4 12.4 0 01-3.38-.46 8.06 8.06 0 01-2.6-1.24L171.4 11a8.44 8.44 0 004.85 1.53c.97 0 1.69-.14 2.15-.42.46-.3.69-.68.69-1.15 0-.35-.14-.64-.42-.86a2.88 2.88 0 00-1.05-.57c-.42-.14-1-.3-1.72-.46a23.95 23.95 0 01-2.75-.8 4.55 4.55 0 01-1.85-1.28 3.49 3.49 0 01-.76-2.35c0-.86.23-1.63.7-2.31A4.64 4.64 0 01173.3.66a8.6 8.6 0 013.43-.61c.94 0 1.85.11 2.75.33.9.23 1.68.55 2.35.97l-1.05 2.58a8.2 8.2 0 00-4.07-1.15c-.96 0-1.66.15-2.12.46-.45.3-.68.71-.68 1.22 0 .5.26.88.78 1.13.53.24 1.34.48 2.42.72 1.12.26 2.03.53 2.75.8.71.26 1.32.68 1.82 1.25.52.58.78 1.36.78 2.34 0 .84-.24 1.6-.71 2.3a4.69 4.69 0 01-2.1 1.64c-.94.4-2.08.61-3.43.61z" fill="#fff"/></svg></nuxt-link>
      </h1>
      <button class="nav-toggle active" @click="openNav = !openNav">
        <icon-hamburger v-if="!openNav"/>
        <icon-cross v-if="openNav"/>
      </button>
      <div class="nav-sep" :class="{ open: openNav }">
        <div class="research onlymobile">
          <button @click="submitSearch()"><icon-search /></button>
          <input ref="searchInputMobile" :value="$route.query.q" @keyup.enter="submitSearchMobile()" type="text" placeholder="Search..." name="search">
        </div>        
        <nuxt-link to="/materials"><icon-tools/>MATERIALS</nuxt-link>
        <nuxt-link to="/docs/begin-your-journey"><icon-docz/>DOCS</nuxt-link>
        <nuxt-link to="/gallery/1"><icon-images/>GALLERY</nuxt-link>
<!--         <a href="#" class="onlydesktop" style="opacity: 0.2;pointer-events:none">|</a>
 -->        <nuxt-link to="/build"><icon-mix/>BUILD</nuxt-link>
        <nuxt-link to="/design" class="onlydesktop" no-prefetch>DESIGN</nuxt-link>
        <nuxt-link to="/play" no-prefetch><icon-game/>PLAY</nuxt-link>
        <a class="onlymobile" href="https://www.reddit.com/r/SpaceBuckets" title="/r/SpaceBuckets"><icon-reddit/>SUBREDDIT</a>
 
      </div>
      <div class="nav-backdrop onlymobile" @click="openNav = false"></div>
      <div
        class="nav-sep logger"
        style="padding: 0"
      >
        <button @click="submitSearch()"><icon-search /></button>
        <input ref="searchInput" :value="$route.query.q" @keyup.enter="submitSearch()" type="text" placeholder="Search..." name="search">
        <span id="stat"></span>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<script>


export default {
  scrollToTop: false,
  data() {
    return {
      openNav: false,
    };
  },
  watch: {
    $route(to, from) {
      this.openNav = false;      
    },
  },
  methods: {
    submitSearch() {
      this.$router.push({ name: 'search', query: { 'q': this.$refs.searchInput.value } });
    },
    submitSearchMobile() {
      this.$router.push({ name: 'search', query: { 'q': this.$refs.searchInputMobile.value } });
    }          
  },
};
</script>  
<style lang="scss">
#statcount {
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
}
header {
  background: #151515;
  color: #eee;
  display: flex;
  position: fixed;
  backface-visibility: hidden;
  left: 0;
  top: 0;
  right: 0;
  max-height: 50px;
  border-bottom: 1px solid #222;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
  user-select: none;
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
    &.nuxt-link-active {
      color: #fdd835;
    }
    @media (max-width: 980px) {
      &.nuxt-link-active {
        background: #fdd835 !important;
        color: #222;
        path { fill: #222; }
      }      
    }
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
    background: transparent;
    border: 0;
    @media (max-width: 980px) {
      align-items: center;
      justify-content: center;
      &.active {
        display: flex;
      }
    }
  }
  .nav-logo {


    margin: 0;
    a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    min-height: 50px;      
    &:hover svg path{
        fill: #fdd835 !important;
      }
      &.nuxt-link-active {
        color: #fafafa;
        background: transparent !important;
        path {
                  fill: #fff !important;

        }
      }
    }
  }
}
.nav-sep {
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
  &.logger {
    height: 50px;
    position: relative;
    button {
      position: absolute;
      left: 12px;
      top: 14px;
      border: 0;
      background: transparent;
      cursor: pointer;
      padding: 0;
      svg {
        width: 20px;
        path { fill: #004d47 }
      }
    }
    input {
      background: rgba(0, 77, 71, 0.3);
      border: 0;
      border-left: 2px solid #004d47;
      color: #fff;
      padding-left: 35px;
      width: 200px;
      &:focus {
        outline: 0;
      }
    }
  }
  a {
    display: block;
    flex: 1;
    padding: 15px 20px;
    svg {
      display: none;
    }
  }

  @media (max-width: 980px) {
    display: none;
    padding: 0;
    &.open {
      display: block;
      padding-top: 0;
      background: #151515;
      width: 100vw;
      z-index: 9999;
      + .nav-backdrop:before {
        content: "";
        display: block !important;
        position: fixed;
        background: rgba(0, 0, 0, 0.65);
        left: 0;
        bottom: 0;
        right: 0;
        top: 50px;
        z-index: -1;
      }
    }
    a {
      padding: 10px 0;
      float: left;
      width: 50%;
      height: 115px;
      text-align: center;
      align-items: center;
      justify-content: center;   
      display: flex;   
      border-bottom: 1px solid #222;
      border-right: 1px solid #222;
      flex-direction: column;
      svg {
        display: block;
        height: 24px;
        margin-bottom: 12px;
      }
    }
  }
}

a.feedback-item {
  min-width: 100%;
  height: 50px;
}

</style>

<style lang="scss">

header {
  & + div {
    background: #000;
  }
  &.docs + div {
    //background: #fafafa;
  }
}



body {
      overflow-x: hidden !important;
          background: #000;

}
button:focus {
  outline: 0;
}
.onlydesktop-in {
  display: none !important;
  @media screen and (min-width: 980px) {
    display: inline-block !important;
  }
}
.onlydesktop {
  display: none !important;
  @media screen and (min-width: 980px) {
    display: block !important;
  }
}
.onlymobile {
  display: none !important;
  @media screen and (max-width: 980px) {
    display: flex !important;
  }
}

.search-sidebar {
  bottom: 0;
  overflow: auto;
  padding-bottom: 100px;
  max-width: 250px;
  width: 100%;
  background: #000;
  color: #eee;
  padding: 15px;
  position: fixed;
  backface-visibility: hidden;
  left: 0;
  top: 50px;
  a {
    text-decoration: none;
  }
  @media (max-width: 980px) {
    position: relative;
    height: auto;
    top: 0;
    max-width: 100%;
    padding-bottom: 0;
    padding: 15px 15px 0;
  }
  p {
    color: #eee;
    line-height: 1.2em;
  }
  h1,
  h2 {
    font-size: 20px;
    color: #eee;
    padding-bottom: 0px;
    margin-bottom: 10px;
    text-align: left;
  }
}

html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding-top: 50px;
 
}

a {
  color: #136baf;
  &:hover {
          color: #093557;

  }
}

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
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
}

.__nuxt-error-page {
  background: #000 !important;
  svg {
    fill: #333 !important;
  }
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

#stat {
  width: 0;
  position: absolute;
  opacity: 0;
  img {
    width: auto;
  }
}

.research {
  width: 100%;
  position: relative;
  height: 50px;
  button {
    position: absolute;
    border: 0;
    background: transparent;  
    top: 0;
    bottom: 0;
    left: 10px;
    svg { width: 20px; }  
  }
  input {
    width: 100%;
    background: rgba(0, 77, 71, 0.3);
    border: 0;
    padding-left: 45px;
    color: #fff;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
}
</style>
