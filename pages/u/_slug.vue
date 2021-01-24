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
  fetchOnServer: false,
  async asyncData({ params }) {
    const post = await singlePost(params.slug);
    if (post.z !== "" || (post.z !== undefined && post.z.length > 0)) {
      post.itemCount = post.z.split(",").length;
    }
    return { post };
  },
  async fetch() {
      const data = await singleRandom();
      this.swipeItem = data
      if (this.swipeItem.z !== "" || (this.swipeItem.z !== undefined && this.swipeItem.z.length > 0)) {
        this.swipeItem.itemCount = this.swipeItem.z.split(",").length;
      }
  },  
  data() {
    return {
      swipeItem: [],
      loadingSwipe: true,
      disablePointers: false
    };
  },
  mounted() {

      
  },

  head() {
    return {
      title: `Space Buckets - ${this.post.t}`,
    };
  },
};
</script>
