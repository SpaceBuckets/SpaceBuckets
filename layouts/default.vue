<template>
  <div>
    <header
      :class="{
        drome: $route.path.includes('/drome'),
      }"
    >
      <h1 class="nav-logo">
        <nuxt-link :to="{ name: 'index' }" exact>SPACE BUCKETS</nuxt-link>
      </h1>
      <button class="nav-toggle active" @click="openNav = !openNav">
        <icon-hamburger/>
      </button>
      <div class="nav-sep" :class="{ open: openNav }">
        <nuxt-link to="/new" class="onlymobile">SUBMIT</nuxt-link>
        <nuxt-link to="/materials">MATERIALS</nuxt-link>
        <nuxt-link to="/build">BUILDER</nuxt-link>
        <nuxt-link to="/docs">DOCS</nuxt-link>
        <nuxt-link to="/gallery/1">GALLERY</nuxt-link>
        <nuxt-link to="/designer" no-prefetch>DESIGN</nuxt-link>
        <nuxt-link to="/drome" no-prefetch>DROME</nuxt-link>
      </div>
      <div class="nav-backdrop onlymobile" @click="openNav = false"></div>
      <div
        class="nav-sep logger"
        style="padding: 0 15px"
      >
            <nuxt-link to="/new" no-prefetch>
              SUBMIT
            </nuxt-link>
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
    hitStat() {
      this.$nextTick(() => {
        if (process.client) {
          var src = document.getElementById("stat");
          if (src) {
            src.innerHTML = "";
            var img = document.createElement("img");
            img.src =
              "https://c.statcounter.com/8400951/0/f591167d/1/?t=" +
              new Date().getTime();
            src.appendChild(img);
          }
        }
      });
    },
  },
  created() {
    if (process.client && window) {
      this.hitStat();
    }    
  },
  updated() {
    this.hitStat();
  },
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
      display: block;
      padding-top: 5px;
      padding-bottom: 5px;
      min-height: calc(100vh - 50px);
      background: #151515;
      width: 220px;
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
      flex: 1;
      min-width: 33%;
    }
  }
}
</style>

<style lang="scss">
body {
      overflow-x: hidden !important;
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
  height: 100vh;
  max-width: 250px;
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
  width: 0;
  position: absolute;
  opacity: 0;
  img {
    width: auto;
  }
}
</style>
