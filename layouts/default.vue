<template>
  <div class="thaswipe" ref="scroller" v-on:scroll.self="handleScroll" :key="componentKey" @touchend.self="touchEnded">
    <header :class="{'drome': $route.path.includes('/drome') }">
      <div class="nav-logo">
        <nuxt-link :to="{name: 'index'}" exact>SPACE BUCKETS</nuxt-link>
      </div>
      <a class="nav-toggle active" href="#mobile-spacer">
        <svg id="Menu" width="21" height="21" viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" fill="#eee"/></svg>
      </a>
      <div class="nav-sep">
        <nuxt-link to="/materials">MATERIALS</nuxt-link>
        <nuxt-link to="/build">BUILD</nuxt-link>
        <nuxt-link to="/gallery">GALLERY</nuxt-link>
        <nuxt-link to="/docs">DOCS</nuxt-link>
        <nuxt-link class="onlydesktop" to="/designer">DESIGN</nuxt-link>
        <nuxt-link to="/drome">DROME</nuxt-link>
      </div>
      <div id="stat"></div>
    </header>
    <div class="scroll-container" >
      <nuxt class="swipable" :style="[ progressScroll > 0 ? {pointerEvents:'none'} : '']"/>
      <div class="rand-container swipable" v-if="swipeItem" style="backface-visibility:hidden" :style="[ progressScroll > 0 ? {pointerEvents:'none'} : '']">
        <div class="rand-skeleton" >
          <client-only>
            <div class="post-masonry">
              <div class="post-content">
                <h2>{{ swipeItem.t }}</h2>
                <div v-html="swipeItem.c"></div>
              </div>
              <div class="post-support">
                <div class="post-source" v-if="swipeItem.a">
                  <div class="avatar-container">
                    <svg viewBox="0 0 1792 1792"><path d="M1792 846q0 58-29.5 105.5t-79.5 72.5q12 46 12 96 0 155-106.5 287t-290.5 208.5-400 76.5-399.5-76.5-290-208.5-106.5-287q0-47 11-94-51-25-82-73.5t-31-106.5q0-82 58-140.5t141-58.5q85 0 145 63 218-152 515-162l116-521q3-13 15-21t26-5l369 81q18-37 54-59.5t79-22.5q62 0 106 43.5t44 105.5-44 106-106 44-105.5-43.5-43.5-105.5l-334-74-104 472q300 9 519 160 58-61 143-61 83 0 141 58.5t58 140.5zm-1374 199q0 62 43.5 106t105.5 44 106-44 44-106-44-105.5-106-43.5q-61 0-105 44t-44 105zm810 355q11-11 11-26t-11-26q-10-10-25-10t-26 10q-41 42-121 62t-160 20-160-20-121-62q-11-10-26-10t-25 10q-11 10-11 25.5t11 26.5q43 43 118.5 68t122.5 29.5 91 4.5 91-4.5 122.5-29.5 118.5-68zm-3-205q62 0 105.5-44t43.5-106q0-61-44-105t-105-44q-62 0-106 43.5t-44 105.5 44 106 106 44z" fill="#fff" /></svg>
                  </div>
                  <div><strong>Gardener:</strong><a :href="`https://www.reddit.com/user/${swipeItem.author}`">{{ swipeItem.author }}</a></div>
                  <div><a :href="`https://www.reddit.com/user/${swipeItem.author}`">View on Reddit</a></div>
                </div>
                <div class="placeholder-items">
                  <div v-for="(placeholder, ee) in swipeItem.itemCount" :key="`placeholder-${ee}`" class="listad-inline placeholder">
                    <a class="ad-ad ad-ad-inline" target="_blank" href="#">
                      <div class="listad-img-container"><div class="img-placeholder"></div></div>
                      <p class="item-title"></p>
                      <p class="item-price"><span class="sale-price"></span></p>
                      <p class="item-brand"></p>
                    </a>
                  </div>
                </div>
              </div>
              <div class="img-container" v-for="(img,i) in swipeItem.i" :key="`section-${i}`">
                <img :src="`/builds/${swipeItem.s}/${img.h}`" alt />
                <div :style="{'padding-top': img.s +'%'}"></div>
              </div>
            </div>
          </client-only>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="onlymobile nav-sep">
      <div>
        <nuxt-link to="/materials">MATERIALS</nuxt-link>
        <nuxt-link to="/docs">DOCS</nuxt-link>
        <nuxt-link to="/build">BUILD</nuxt-link>
        <nuxt-link to="/gallery">GALLERY</nuxt-link>
        <nuxt-link to="/drome">DROME</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { singleRandom } from "~/store/flatDB";

export default {
  scrollToTop: true,
  data() {
    return {
      toggleActive: false,
      amazoneItems: [],
      swipeItem: [],
      componentKey: 0,
      progressScroll: 0,
      lastPosition: 0,
    };
  },
  methods: {
    touchEnded() {

      if (this.progressScroll < 50) {
     //this.$refs.scroller.scrollLeft = 0
     console.log(this.$refs.scroller.scrollLeft)

  }
      },
    async handleScroll() {
      this.progressScroll = ((event.target.scrollLeft * 100) / event.target.offsetWidth).toFixed(2);
      if (this.progressScroll > 99) {
        this.$router.push({ path: `/u/${this.swipeItem.s}` });
        this.componentKey += 1;
        this.progressScroll = 0;
        if (process.client) {
          this.swipeItem = await singleRandom();
          this.swipeItem.itemCount = this.swipeItem.z.split(",").length;
        }
      } 
      this.$refs.scroller.style.overflowY = "hidden"

    },
  },
  async created() {
    if (process.client) {
      this.swipeItem = await singleRandom();
      if (
        this.swipeItem.z !== "" ||
        (this.swipeItem.z !== undefined && this.swipeItem.z.length > 0)
      ) {
        this.swipeItem.itemCount = this.swipeItem.z.split(",").length;
      }
    }
  },
  /*   updated() {
    var src = document.getElementById("stat");
    src.innerHTML = "" 
    this.$nextTick(() => {
      var img = document.createElement("img");
      img.src = "https://c.statcounter.com/8400951/0/f591167d/1/?t=" + new Date().getTime();
      src.appendChild(img);
		});
  } */
};
</script>  
<style lang="scss" scoped>
header {
  background: #151515;
  color: #eee;
  z-index: 99;
  //grid-area: header;
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
/*   & + section {
    grid-area: content;
  } */
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
.listad-inline.placeholder {
  .listad-img-container {
    overflow: visible;
  }
  .img-placeholder {
    height: 45px;
    width: 45px;
    background: #34353610;
    display: block;
    border-radius: 50%;
    position: relative;
    top: 5px;
    left: 5px;
    animation: progress 2s linear infinite;
  }
  .item-title {
    &:before,
    &:after {
      content: "";
      min-height: 15px;
      background: #34353610;
      display: block;
      position: absolute;
      right: 120px;
      left: 75px;
      top: 10px;
      animation: progress 2s linear infinite;
    }
    &:before {
      top: initial;
      bottom: 10px;
      right: 150px;
    }
  }
}

#mobile-menu {
  grid-area: footer;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  a {
    font-size: 18px !important;
  }
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
}

/*   .sb-grid {
    display: grid;
    grid-template-rows: 50px 1fr auto;
    grid-template-areas: "sidebar" "content" "footer";
    min-height: 100vh; 
  } */

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
    + button {
      position: absolute;
      top: 0;
      padding: 15px 0;
    }
    &:hover {
      color: #fdd835;
    }
    &:focus {
      outline: 0;
    }
    span {
      display: inline-block;
      padding-right: 8px;
    }
    &:hover svg path {
      fill: #fdd835;
    }
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
    button span {
      display: none;
    }
    button svg {
      width: 50px;
      height: auto;
      padding: 14px;
    }
    button + button {
      padding: 0;
    }
  }
}

#stat {
  img {
    width: auto;
  }
}

.thaswipe {
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  scroll-behavior: smooth;
  overscroll-behavior-x: contain;

  scroll-snap-stop: always;
  scroll-snap-type: x mandatory;
  display: grid;
  height: 100vh;
}

.scroll-container {
  display: flex;
  min-height: 100vh;
  padding-top: 50px;
  .swipable {
    flex: 1;
    scroll-snap-align: center;
    scroll-snap-stop: always;
      overscroll-behavior-x: contain;

    min-width: 100vw;
    max-width: 100vw;
    overflow: auto;
  }
}

.post-source {
  font-size: 14px;
  padding: 10px 20px 10px;
  border-top: 1px solid #eee;
  line-height: 20px;
  height: 60px;
  position: relative;
  padding-left: 75px;
  .avatar-container {
    padding: 8px;
    max-height: 60px;
    width: 60px;
    position: absolute;
    left: 5px;
    top: 0;
    svg {
      background: #eee;
      border-radius: 50%;
      padding: 7.5px;
      width: 100%;
    }
  }
}

.post-support {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  background: #fff;
  border-right: 1px solid #1a1a1b;
  border-bottom: 1px solid #1a1a1b;
  overflow: auto;
  max-height: 3000px;
  position: relative;
  .real-items {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  h3 {
    font-size: 16px;
    border-bottom: 1px solid #eee;
    text-transform: uppercase;
    padding: 10px 20px;
  }

  .listad-inline {
    background: #fff;
    width: 100%;
    z-index: 999;
    float: left;
    border-top: 1px solid #eee;
    &:after {
      display: table;
      content: "";
      clear: both;
    }
    .listad-img-container {
      width: 60px;
      margin-top: 3px;
      float: left;
      max-height: 50px;
      overflow: visible;
      position: absolute;
      top: 0;
      left: 5px;
      img {
        padding: 5px;
      }
    }
    p {
      margin: 0;
    }
    a {
      text-decoration: none;
      display: block;
      position: relative;
      padding-left: 70px;
      height: 60px;
      background: white;
      padding-right: 130px;
      &:after {
        display: table;
        content: "";
        clear: both;
      }
    }
    .item-title {
      float: left;
      margin: 10px 0 0 5px;
      max-height: 40px;
      overflow: hidden;
      line-height: 20px !important;
      padding: 0 !important;
      color: #1d6ebf !important;
      font-size: 15px !important;

      &::first-line {
        font-weight: bold;
      }
    }
    .item-price {
      position: absolute;
      top: 10px;
      width: auto !important;
      right: 30px;
      font-size: 14px !important;
      margin: 0 !important;
      color: #a33426 !important;
      font-weight: bold;
    }
    .item-brand {
      font-size: 14px !important;
      position: absolute;
      right: 30px;
      width: 95px !important;
      bottom: 11px;
      font-weight: normal !important;
      text-align: right;
      color: #34353675 !important;
      overflow: hidden;
      height: 18px;
    }
    .item-tag {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
    }
  }
}

.rand-container {
  overflow: hidden;
}
</style>
