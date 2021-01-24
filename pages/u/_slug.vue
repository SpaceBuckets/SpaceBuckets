<template>
  <swiper :next="swipeItem" type="posts">
    <template v-slot:main>
      <postmasonry :post="post" />
      <cardrelated />
    </template>
    <template v-slot:next>
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
    console.log(data)
    this.swipeItem = data
  },  
  data() {
    return {
      swipeItem: [],
      loadingSwipe: false,
      disablePointers: false
    };
  },
/*   async created() {
    if (process.client) {
      this.swipeItem = await singleRandom();

      if (this.swipeItem.z !== "" || (this.swipeItem.z !== undefined && this.swipeItem.z.length > 0)) {
        this.swipeItem.itemCount = this.swipeItem.z.split(",").length;
      }
      //this.swipeItem.i = this.swipeItem.i.slice(0, 1);
      console.log(this)

      this.loadingSwipe = false
    }
  }, */

  head() {
    return {
      title: `Space Buckets - ${this.post.t}`,
    };
  },
};
</script>
