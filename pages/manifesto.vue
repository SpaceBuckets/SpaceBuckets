<template>
  <div>
    <div class="post-content">
      <h2>SPACE BUCKETS MANIFESTO</h2>
      <div>
        Humans of the Earth! Hear the Space Buckets calling. It is time for a DIY indoor gardening revolution. We stand at the vanguard:
        <ul>
          <li><strong>I. Bucket culture is open.</strong> We are a community of learners, a movement of tinkerers. Our goal is to spread information about how to grow plants inside small containers with artificial lighting. Anyone can join us.</li>
          <li><strong>II. Bucket knowledge is free.</strong> We believe in the free flow of ideas and the unparalleled power of the Internet. We are part of the web, and we contribute to it. Profit is not our motivation, innovation is.</li>
          <li><strong>III. All plants are inside our law.</strong> We do not judge species based on their political situation. We are a melting pot of photosynthesis enthusiasts.</li>
          <li><strong>IV. Bucketeers matter.</strong> Every gardener can make an impact in his inner self and social circle. Watching a plant thrive is a perspective-gaining experience. This bucket mindset pushes us forward.</li>
        </ul>
      </div>
    </div>

    <cardrelated />

  </div>
</template>

<script>
import { singlePost, randomize } from "~/static/flatDB";

export default {
  data() {
    return {
      relatedItems: [],
    };
  },
  async created() {
    if (process.client) {
      this.relatedItems = await randomize(10);
    }
  },
  mounted() {
    this.loading = false;
  },
  head() {
    return {
      title: `Space Buckets - MANIFESTO`,
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },],
      meta: [{ hid: 'description', name: 'description', content: 'Humans of the Earth! Hear the Space Buckets calling. It is time for a DIY indoor gardening revolution. We stand at the vanguard' }]      
    };
  },
};
</script>

<style scoped lang="scss">

.post-content {
  padding: 10px 15px 20px;
  background: #fff;
  min-height: 150px;
  border-right: 1px solid #1a1a1b;
  overflow: auto;
  max-height: 3000px;
  h1,
  h2 {
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    font-size: 22px;
    color: #343536;
    font-weight: 600;
    padding: 10px 0 15px;
    margin-bottom: 0px;

    overflow: auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    span {
      float: right;
      font-size: 16px;
      font-family: arial, helvetica, sans-serif;
      font-weight: normal;
    }
  }
  p,
  div {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    color: #343536;
    line-height: 1.6em;
  }
}

</style>
