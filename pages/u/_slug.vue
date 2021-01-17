<template>
  <swiper :next="swipeItem" type="posts">
    <template v-slot:main>
      <postmasonry :post="post" />
      <cardrelated />
    </template>
    <template v-slot:next v-if="!loadingSwipe">
      <postmasonry :post="swipeItem" variation="skeleton" />
    </template>
  </swiper>
</template>

<script>
import { singlePost, singleRandom, randomize } from "~/static/flatDB";

export default {
  scrollToTop: false,
  async asyncData({ params }) {
    const post = await singlePost(params.slug);
    if (post.z !== "" || (post.z !== undefined && post.z.length > 0)) {
      post.itemCount = post.z.split(",").length;
    }
    return { post };
  },
  data() {
    return {
      swipeItem: [],
      loadingSwipe: true,
      disablePointers: false
    };
  },
  async created() {
    if (process.client && !(navigator.connection.effectiveType || '').includes('2g')) {
      this.swipeItem = await singleRandom();

      if (this.swipeItem.z !== "" || (this.swipeItem.z !== undefined && this.swipeItem.z.length > 0)) {
        this.swipeItem.itemCount = this.swipeItem.z.split(",").length;
      }
      //this.swipeItem.i = this.swipeItem.i.slice(0, 1);
      this.loadingSwipe = false
    }
  },

  head() {
    return {
      title: `Space Buckets - ${this.post.t}`,
    };
  },
};
</script>
