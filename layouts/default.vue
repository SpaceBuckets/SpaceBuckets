<template>
  <div>
    <header
      :class="{
        drome: $route.path.includes('/drome'),
        docs: $route.path.includes('/docs')
      }"
    >
      <h1 class="nav-logo">
        <nuxt-link :to="{ name: 'index' }" exact>SPACE BUCKETS</nuxt-link>
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
    padding: 0 15px;
    min-height: 50px;
    display: flex;
    align-items: center;
    margin: 0;
    a {
      font-weight: 700;
      font-size: 21px;
      &:hover {
        color: #fdd835 !important;
      }
      &.nuxt-link-active {
        color: #fafafa;
        background: transparent !important;
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
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
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
