<template>
  <div>
    <header
      :class="{
        drome: $route.path.includes('/drome'),
        login: $route.path.includes('/profile'),
      }"
    >
      <div class="nav-logo">
        <nuxt-link :to="{ name: 'index' }" exact>SPACE BUCKETS</nuxt-link>
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
        <nuxt-link
          to="/profile"
          class="onlymobile"
          v-if="$profileStatus.isLogged"
          >PROFILE</nuxt-link
        >
        <nuxt-link
          to="/profile"
          class="onlymobile"
          v-if="!$profileStatus.isLogged"
          >LOGIN</nuxt-link
        >
        <nuxt-link to="/materials">MATERIALS</nuxt-link>
        <nuxt-link to="/build">BUILDER</nuxt-link>
        <nuxt-link to="/docs">DOCS</nuxt-link>
        <nuxt-link to="/gallery" no-prefetch>GALLERY</nuxt-link>
        <nuxt-link to="/designer" no-prefetch>DESIGN</nuxt-link>
        <nuxt-link to="/drome" no-prefetch>DROME</nuxt-link>
      </div>
      <div class="nav-backdrop onlymobile" @click="openNav = false"></div>
      <div
        class="nav-sep logger"
        :class="{ logged: $profileStatus.isLogged }"
        style="padding: 0 15px"
      >
        <client-only>
          <template v-if="$profileStatus.isLogged">
            <nuxt-link :to="{ name: 'profile' }" no-prefetch>
              <span>PROFILE</span>
              <svg
                style="height: auto; width: 24px; display: none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#FFF"
                  d="M6.803 18.998c-.194-.127 3.153-7.16 3.038-7.469-.116-.309-3.665-1.436-3.838-1.979-.174-.543 7.007-8.707 7.196-8.549.188.158-3.129 7.238-3.039 7.469.091.23 3.728 1.404 3.838 1.979.111.575-7.002 8.676-7.195 8.549z"
                />
              </svg>
            </nuxt-link>
          </template>
          <template v-if="!$profileStatus.isLogged">
            <nuxt-link to="/profile" no-prefetch>
              <span style="display: inline-block"> LOGIN </span>
              <svg
                style="height: auto; width: 24px; display: none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#FFF"
                  d="M6.803 18.998c-.194-.127 3.153-7.16 3.038-7.469-.116-.309-3.665-1.436-3.838-1.979-.174-.543 7.007-8.707 7.196-8.549.188.158-3.129 7.238-3.039 7.469.091.23 3.728 1.404 3.838 1.979.111.575-7.002 8.676-7.195 8.549z"
                />
              </svg>
            </nuxt-link>
          </template>
          <span id="stat"></span>
        </client-only>
      </div>

      <!--       <button class="randomer onlydesktop" @click="swipeRandom()">
        RANDOM <icon-random/>
      </button> -->
    </header>
    <nuxt />
  </div>
</template>

<script>
import { singleRandom } from "~/static/flatDB";

export default {
  //scrollToTop: true,
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
    swipeRandom() {
      document.getElementById("swiper").scrollBy(100, 0);
    },
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
  mounted() {
    this.hitStat();
    if (process.client) {
      this.$profile.name = JSON.parse(localStorage.getItem("name"));
      this.$profile.pin = JSON.parse(localStorage.getItem("pin"));
      if (this.$profile.name) {
        this.$profile.post = JSON.parse(localStorage.getItem("post"));
        if (localStorage.getItem("favs")) {
          this.$profile.favs = JSON.parse(localStorage.getItem("favs"));
        }
        this.$profileStatus.isLogged = true;
      }
    }
  },
  updated() {
    this.hitStat();
    if (process.client) {
      this.$profile.name = JSON.parse(localStorage.getItem("name"));
      this.$profile.pin = JSON.parse(localStorage.getItem("pin"));

      if (this.$profile.name) {
        this.$profileStatus.isLogged = true;
      }
    }
  },
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: "https://spacebuckets.com" + this.$route.path,
        },
      ],
    };
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
  &.login {
    //background: transparent;
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

.randomer {
  border: 0;
  background: transparent;
  color: #fafafa;
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
  font-weight: 600;
  padding: 0;
  padding-right: 15px;
  cursor: pointer;
  &:hover {
    color: #fdd835 !important;
    svg {
      fill: #fdd835 !important;
    }
  }
  svg {
    width: 16px;
    height: auto;
    position: relative;
    top: 2px;
  }
}

.nav-sep {
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  //svg path { transition: all 0.3s linear; }
  &.logger {
    position: relative;
    min-width: 110px;
    cursor: pointer;
    text-align: center;
    &:hover {
      a {
        color: #fdd835;
      }
      svg path {
        fill: #fdd835;
      }
    }
    a {
      padding: 0;
      position: relative;
      color: #fff;
      /* display: flex;
      align-items: center;
      top: 1px; */
    }
  }
  &.logged {
    svg path {
      fill: #fdd835;
    }
  }
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
  h2 {
    font-size: 20px;
    color: #eee;
    padding-bottom: 0px;
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
