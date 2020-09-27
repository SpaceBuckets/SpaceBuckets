<template>
  <div
    class="swiper"
    ref="swiper"
    v-on:scroll.self="handleScroll"
    @touchstart="touchStart()"
    @touchend="touchEnd()"
  >
  <div class="swipable">
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
  props: ['next'],
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
        this.$router.push({ path: `/u/${this.$props.next.s}` });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 980px) {
  .swiper {
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
      &.onlymobile {
        backface-visibility: hidden;
        min-height: calc(100vh - 50px);
        pointer-events: none;
      }
    }
  }
}
</style>
