<template>
  <div>
    <postmasonry :post="post" />
    <cardrelated :cat="post.g"/>
  </div>
</template>

<script>
import { singlePost, singleRandom } from "~/scripts/flatDB";

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
    };
  },
  async created() {
    if (process.client) {
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
      title: `${this.post.t} - Space Buckets: DIY Indoor Gardening`,
      meta: [{ hid: 'description', name: 'description', content: this.post.c.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "").substring(0, 160) + '...' }],
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },]
    };
  },
};
</script>
