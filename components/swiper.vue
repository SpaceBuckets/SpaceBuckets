<template>
  <div
    id="swiper"
    ref="swiper"
    v-on:scroll.self="handleScroll"
    @touchstart="touchStart()"
    @touchend="touchEnd()"
    @touchmove="touchMove()"
  >
<!--     <div class="swipable sideswipe">
      <nuxt-link to="/materials">MATERIALS</nuxt-link>
      <nuxt-link to="/build">BUILDER</nuxt-link>
      <nuxt-link to="/gallery">GALLERY</nuxt-link>
      <nuxt-link to="/docs">DOCS</nuxt-link>
      <nuxt-link to="/designer">DESIGN</nuxt-link>
      <nuxt-link to="/drome">DROME</nuxt-link>
    </div>   -->

  <div class="swipable" ref="mainswipe">
    <slot name="main"></slot>
  </div>

    <client-only>
      <div class="onlymobile swipable">
        <slot name="next"></slot>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props: ['next','type'],
  data() {
    return {
      progressScroll: 0,
      moving: false,
    };
  },  
  created() {
    this.$nextTick(() => {

      });
    //this.$router.push({hash: '#mainswipe'});
  },
  methods: {
    touchStart() {
      this.moving = true;
      //this.$refs.swiper.style.willChange = "scroll-position"
    },
    touchEnd() {
      this.moving = false;
      //this.$refs.swiper.style.willChange = "initial"
    },
    touchMove() {
    },
    async handleScroll() {

      this.progressScroll = ((event.target.scrollLeft * 100) / event.target.offsetWidth).toFixed(2);
      if (this.progressScroll > 50 && !this.moving) {
        if (this.$props.type === "posts") {
          this.$router.push({ path: `/u/${this.$props.next.s}` });
        }
        if (this.$props.type === "docs") {
          this.$router.push({ path: `/docs/${this.$props.next.s}` });
        }        
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 980px) {
  #swiper {
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    //scroll-behavior: smooth;
    overscroll-behavior-x: contain;
    scroll-snap-stop: always;
    scroll-snap-type: x mandatory;
    height: 100vh;
    display: flex;
    min-height: 100vh;
    will-change: scroll-position;
    .swipable {
      flex: 1;
      scroll-snap-align: center;
      scroll-snap-stop: always;
      min-width: 100vw;
      max-width: 100vw;
      overflow: auto;


      &.sideswipe {
         min-width: 50vw;
        max-width: 50vw; 
        padding: 20px 15px;
        a {
          display: block;
          color: #fafafa;
          font-family: "Montserrat", sans-serif;
          font-size: 17px;
          font-weight: 600;
          display: block;
          text-decoration: none;
          margin-bottom: 15px;
          &.nuxt-link-active,
          &:hover {
            color: #fdd835;
          }          
        }
      }
      &.onlymobile {
        backface-visibility: hidden;
        min-height: calc(100vh - 50px);
        pointer-events: none;
      }
    }
  }
}
</style>
