<template>
  <div
    id="swiper"
    ref="swiper"
    v-on:scroll.self="handleScroll"
    @touchstart="touchStart()"
    @touchend="touchEnd()"
  >

  <div class="swipable" ref="mainswipe">
    <slot name="main"></slot>
  </div>

    <client-only>
      <div class="swipable" v-if="next">
        <slot name="next"></slot>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props: ['next','type'],
  scrollToTop: false,
  data() {
    return {
      progressScroll: 0,
      moving: false,
    };
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
    async handleScroll() {      
      this.progressScroll = ((event.target.scrollLeft * 100) / event.target.offsetWidth).toFixed(2);
      if (this.progressScroll > 50 && !this.moving) {
        if (this.$props.type === "posts") {
          this.$router.push({ name: 'u-slug', params: { 'slug': this.$props.next.s } });

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
/* @media (max-width: 980px) { */
  #swiper {
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    //scroll-behavior: smooth;
    overscroll-behavior-x: contain;
    scroll-snap-stop: always;
    scroll-snap-type: x mandatory;
    height: calc(100vh - 50px);
    display: flex;
    min-height: calc(100vh - 50px);
    will-change: scroll-position;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    * {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .swipable {
      flex: 1;
      scroll-snap-align: center;
      scroll-snap-stop: always;
      min-width: 100vw;
      max-width: 100vw;
      overflow: auto;
      + .swipable {
        content-visibility: auto;
      }
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
/* } */
</style>
