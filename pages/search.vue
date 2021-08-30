<template>
<!--   <swiper :next="swipeItem" type="posts">
    <template v-slot:main> -->
      <client-only>
        <postsearch :query="$route.query.q" titler="SEARCH" :posts="posts"/>
      </client-only>
<!--     </template>
    <template v-slot:next v-if="!loadingSwipe">
      <postmasonry :post="swipeItem" variation="skeleton" />
    </template>
  </swiper> -->
</template>

<script>
import {
  getSearch,
  singleRandom
} from "~/scripts/flatDB";
export default {

  data() {
    return {
      swipeItem: [],
      loadingSwipe: true,
      posts: []
    };
  },

  watch: {
    $route(to, from) {
      this.updatePosts(); 
    },
  },  
  async created() { 
    this.updatePosts(); 
    if (process.client) {
      this.swipeItem = await singleRandom();
      if (
        this.swipeItem.z !== "" ||
        (this.swipeItem.z !== undefined && this.swipeItem.z > 0)
      ) {
        this.swipeItem.itemCount = this.swipeItem.z;
      }
       this.loadingSwipe = false;
    }
  },
  methods: {
    async updatePosts() {
      if (process.client && window && this.$route.query.q) {
        this.posts = await getSearch(this.$route.query.q.toLowerCase());   
      }
    }
  },
  head() {
    return {
      title: `Space Buckets - SEARCH - ${this.$route.query.q}`,
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },],
      meta: [{ hid: 'description', name: 'description', content: 'Browse the collection of DIY indoor gardens from the community. More than 350 builds await!' }],

    };
  },
};
</script>