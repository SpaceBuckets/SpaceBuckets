<template>
  <div>
    <header :class="{'drome': $route.path.includes('/drome') }">
      <div class="nav-logo">
        <nuxt-link :to="{name: 'index'}" exact>SPACE BUCKETS</nuxt-link>
      </div>
      <button class="nav-toggle active" @click="openNav = !openNav">
        <svg id="Menu" width="21" height="21" viewBox="0 0 1792 1792">
          <path
            d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
            fill="#eee"
          />
        </svg>
      </button>
      <div class="nav-sep" :class="{ open: openNav }">
        <nuxt-link @click="openNav = false" to="/materials">MATERIALS</nuxt-link>
        <nuxt-link to="/build">BUILDER</nuxt-link>
        <nuxt-link to="/gallery">GALLERY</nuxt-link>
        <nuxt-link to="/docs">DOCS</nuxt-link>
        <nuxt-link to="/designer">DESIGN</nuxt-link>
        <nuxt-link to="/drome">DROME</nuxt-link>
        <div class="nav-backdrop onlymobile" @click="openNav = false"></div>
      </div>

      <div id="stat"></div>
    </header>
    <nuxt />
  </div>
</template>

<script>
import { singleRandom } from "~/store/flatDB";

export default {
  scrollToTop: true,
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
    hitStat() {
      this.$nextTick(() => {
        var src = document.getElementById("stat");
        src.innerHTML = "";
        var img = document.createElement("img");
        img.src =
          "https://c.statcounter.com/8400951/0/f591167d/1/?t=" +
          new Date().getTime();
        src.appendChild(img);
      });
    },
  },
/*   mounted() { this.hitStat() },
  updated() { this.hitStat() }, */
};
</script>  
<style lang="scss" scoped>
header {
  background: #151515;
  color: #eee;
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
    background: transparent;
    border: 0;
    &:focus {
      outline: 0;
    }
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
    a {
      font-weight: 700;
      font-size: 21px;
      &:hover {
        color: #fdd835 !important;
      }
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

  @media (max-width: 980px) {
    display: none;
    &.open {
      display: flex;
      .nav-backdrop {
        content: "";
        display: block !important;
        position: fixed;
        background: rgba(0, 0, 0, 0.65);
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        z-index: -1;
      }
    }
    a {
      padding: 10px 0;
      flex: 1;
      min-width: 33%;
    }
  }
}
</style>

<style lang="scss">
.onlydesktop {
  display: none !important;
  @media screen and (min-width: 981px) {
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
  p {
    color: #eee;
    line-height: 1.2em;
  }
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
  width: 100px;
  img {
    width: auto;
  }
  @media (max-width: 980px) {
    position: absolute;
  }
}
</style>
