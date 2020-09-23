<template>
  <div>
    <header :class="{'drome': $route.path.includes('/drome') }">
      <div class="nav-logo" >
        <nuxt-link :to="{name: 'index'}" exact>SPACE BUCKETS</nuxt-link>
      </div>
      <button class="nav-toggle active" @click="openNav = !openNav">
        <svg id="Menu" width="21" height="21" viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" fill="#eee"/></svg>
      </button>
      <div class="nav-sep" :class="{ open: openNav }">
        <nuxt-link @click="openNav = false" to="/materials">MATERIALS</nuxt-link>
        <nuxt-link to="/build">BUILDER</nuxt-link>
        <nuxt-link to="/gallery">GALLERY</nuxt-link>
        <nuxt-link to="/docs">DOCS</nuxt-link>
        <nuxt-link to="/designer">DESIGN</nuxt-link>
        <nuxt-link to="/drome">DROME</nuxt-link>
      </div>
      
      <div style="position:absolute" id="stat"></div>
    </header>
      <nuxt/>


<!--      <div id="mobile-menu" class="onlymobile nav-sep">
      <div>
        <nuxt-link to="/materials">MATERIALS</nuxt-link>
        <nuxt-link to="/docs">DOCS</nuxt-link>
        <nuxt-link to="/build">BUILD</nuxt-link>
        <nuxt-link to="/gallery">GALLERY</nuxt-link>
        <nuxt-link to="/drome">DROME</nuxt-link>
      </div>
    </div>  -->
  </div>
</template>

<script>
import { singleRandom } from "~/store/flatDB";

export default {
  scrollToTop: true,
  data() {
    return {  
      openNav: false
    };
  },  
  watch:{
    $route (to, from){
          this.openNav = false
    }
}, 
      mounted() {

    this.$nextTick(() => {
    var src = document.getElementById("stat");
    src.innerHTML = ""       
      var img = document.createElement("img");
      img.src = "https://c.statcounter.com/8400951/0/f591167d/1/?t=" + new Date().getTime();
      src.appendChild(img);
		});
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
    background: transparent;
    border: 0;
    &:focus { outline: 0 }
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
    &.open { 
      display: flex;
&:after  {
  content: "";
        display: block !important;
        position: fixed;
        background:rgba(0,0,0,0.65);
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
}/* 
::-webkit-scrollbar
{
  background-color: #000;
}
::-webkit-scrollbar-thumb
{
    background-color: #555;
}
  .sb-grid {
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
  @media (max-width: 980px) {

.thaswipe {
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  //scroll-behavior: smooth;
  overscroll-behavior-x: contain;

  scroll-snap-stop: always;
  scroll-snap-type: x mandatory;
  height: 100vh;
    display: flex;
  min-height: 100vh;
  padding-top: 50px;
  .swipable {
    flex: 1;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    
    min-width: 100vw;
    max-width: 100vw;
    overflow: auto;
  }
}
}

.scroll-container {
  display: flex;
  min-height: 100vh;

  .swipable {
    flex: 1;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    
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

</style>
