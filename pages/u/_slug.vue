<template>
  <div style="padding-top:50px" class="thaswipe" v-on:scroll.self="handleScroll" @touchstart="touchStart()" @touchend="touchEnd()">
    <div class="swipable">
        <postmasonry :post="post" />
      <div class="cards-container" v-if="relatedItems">
        <div class="card-skeleton" v-for="post in relatedItems" :key="post.s" >
          <client-only>
            <card :id="post" />
          </client-only>
        </div>
      </div>
      <nuxt-link class="load-more" :to="{name: 'gallery'}">View More</nuxt-link>
    </div>
    
    <div class="rand-container onlymobile swipable" v-if="swipeItem" style="backface-visibility:hidden" :style="[ progressScroll > 0 ? {pointerEvents:'none'} : '']">
      <client-only>
        <postmasonry :post="swipeItem" variation="skeleton" />
      </client-only>
    </div>
  </div>


</template>

<script>
import { singlePost, singleRandom, randomize } from "~/store/flatDB";

export default {
  async asyncData({ params }) {
    const post = await singlePost(params.slug);
    if (post.z !== "" || (post.z !== undefined && post.z.length > 0)) {
      post.itemCount = post.z.split(",").length;
    }
    return { post };
  },
  data() {
    return {
      amazonItems: [],
      relatedItems: [],
      swipeItem: [],
      progressScroll: 0,
      moving: false,
    };
  },
  async created() {
    if (process.client) {
      this.swipeItem = await singleRandom();
      if (this.swipeItem.z !== "" || (this.swipeItem.z !== undefined && this.swipeItem.z.length > 0)) {
        this.swipeItem.itemCount = this.swipeItem.z.split(",").length;
      }
      this.swipeItem.i = this.swipeItem.i.slice(0,1)
      this.relatedItems = await randomize(8);
    }
  },
  methods: {
    touchStart() {
      this.moving = true
    },
    touchEnd() {
      this.moving = false
    },    
    async handleScroll() {
      this.progressScroll = ((event.target.scrollLeft * 100) / event.target.offsetWidth).toFixed(2);
      if (this.progressScroll > 50 && !this.moving) {
        this.$router.push({ path: `/u/${this.swipeItem.s}` });
      }
    },
  },
  head() {
    return {
      title: `Space Buckets - ${this.post.t}`,
    };
  },
};
</script>

<style scoped lang="scss">
.load-more {
  color: #eee;
  border: 1px solid #333;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  width: 300px;
  margin: 10px auto;
  color: #fafafa;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: #fdd835;
  }
}

.cards-container {
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
}


</style>
