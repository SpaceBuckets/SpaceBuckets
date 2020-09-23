<template>
  <div style="padding-top:50px">
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

    <div class="cards-container" v-if="relatedItems">
      <div class="card-skeleton" v-for="post in relatedItems" :key="post.s">
        <client-only>
          <nuxt-link class="card" :to="{name: 'u-slug', params: { slug: `${post.s}`, post } }">
            <h2>{{ post.t }}</h2>
            <img :src="`/builds/${post.s}/cover.jpg`" alt />
          </nuxt-link>
        </client-only>
      </div>
    </div>
    <nuxt-link class="load-more" :to="{name: 'gallery'}">View More</nuxt-link>
  </div>
</template>

<script>
import { singlePost, randomize } from "~/store/flatDB";

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
.related {
  margin-top: 20px;
  h3 {
    color: #fff;
    margin: 20px 0;
    text-transform: uppercase;
  }
}
.post-content {
  padding: 10px 15px 20px;
  background: #fff;
  min-height: 150px;
  border-right: 1px solid #1a1a1b;
  overflow: auto;
  max-height: 3000px;
  h2 {
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    font-size: 22px;
    color: #343536;
    font-weight: 600;
    padding: 10px 0 15px;
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

.cards-container {
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    width: 300px;
    height: 387px;
    margin: 10px;
    float: left;
    position: relative;
    color: #fff;
    background: #1a1a1b;
    h2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      color: #fafafa;
      font-family: "montserrat", Arial, Helvetica, sans-serif;
      text-decoration: none;
      font-size: 16px;
      letter-spacing: -1px;
      line-height: 32px;
      padding-left: 15px;
      background-color: rgba(0, 0, 0, 0.6);
      text-transform: uppercase;
    }
    p {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
}

</style>
