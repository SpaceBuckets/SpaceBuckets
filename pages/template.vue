<template>
  <div>
    <postmasonry :post="post" />
    <cardrelated />
  </div>
</template>

<script>
import { singlePost, randomize } from "~/static/flatDB";

export default {
  async asyncData({ params }) {
    const post = await singlePost("simple-template");
    if (post.z !== "" || (post.z !== undefined && post.z.length > 0)) {
      post.itemCount = post.z.split(",").length;
    }
    return { post };
  },
  data() {
    return {
      amazonItems: [],
    };
  },
  head() {
    return {
      title: `Space Buckets - SIMPLE TEMPLATE`,
      meta: [{ hid: 'description', name: 'description', content: this.post.c.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "") }],
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },]
    };
  },
};
</script>
