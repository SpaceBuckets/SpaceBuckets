<template>
<!--   <swiper :next="swipeItem" type="posts">
    <template v-slot:main> -->
      <postgallery :posts="posts" :totalLength="totalLength" :megapostLength="megapostLength"/>
<!--     </template>
    <template v-slot:next v-if="!loadingSwipe">
      <postmasonry :post="swipeItem" variation="skeleton" />
    </template>
  </swiper> -->
</template>

<script>
import {
  filterBuilds,
  singleRandom
} from "~/scripts/flatDB";
export default {
  async asyncData({route}) {
    
    var posts = await filterBuilds(36, route.params.page, "pop");
    var megaposts = await filterBuilds(-1, 0, "pop");
    var totalLength = megaposts.length
    var megapostLength = Math.ceil(megaposts.length / 36)      
  
    return { posts, totalLength,megapostLength };
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
      if (
        this.swipeItem.z !== "" ||
        (this.swipeItem.z !== undefined && this.swipeItem.z > 0)
      ) {
        this.swipeItem.itemCount = this.swipeItem.z;
      }
       this.loadingSwipe = false;
    }
  },

  head() {
    return {
      title: `Space Buckets - GALLERY - ${this.$route.params.page}`,
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },],
      meta: [{ hid: 'description', name: 'description', content: 'Browse the collection of DIY indoor gardens from the community. More than 350 builds await!' }],

    };
  },
};
</script>
