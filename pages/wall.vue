<template>
  <div class="gallery-container">
    <div class="search-sidebar">
      <div class="sidebar-content">
        <h2>WALL</h2>
        <p>
          Are you enjoying this website? Want to see something changed? Your feedback is always welcome! Use this section to voice your opinion.
        </p>
      </div>
    </div>
    <div class="textarea-content" :class="{active: sendingFeedback}">
      <div v-for="post in posts">
    <a
      class="img-container"
      :href="`/u/${post.s}/${post.i[0].h}`">
      <img :src="`/u/${post.s}/${post.i[0].h}`" alt />
      <div :style="{ 'padding-top': post.i[0].s + '%', 'background': '#'+post.i[0].h.replace('.jpg', '') }"></div>
    </a>
      </div>
    </div>
  </div>
</template>

<script>

import { singlePost, singleRandom,getBuilds } from "~/scripts/flatDB";


export default {
  
  data() {
    return {
      sendingFeedback: false,
      posts: []
    };
  },  
  async created() {
    var reposts = await getBuilds()
const shuffled = reposts.sort(() => 0.5 - Math.random());
let selected = shuffled.slice(0, 50);
this.posts = selected


  },

  head() {

    return {
      title: `Space Buckets - WALL`,
      link: [
        {
          rel: "canonical",
          href: "https://spacebuckets.com" + this.$route.path,
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Check out the experimental wall of space bucket grows! More than 350 builds await.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .img-container {
    background: #151515;
    position: relative;
    overflow: auto;
    max-height: 3000px;
    border: 1px solid #1a1a1b;
    user-select: none;
    //pointer-events: none;
    display: block;
    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }

.textarea-content {
  padding: 0px;
  column-count:5;
  column-gap: 0;
  background: transparent;
  &.active {
    form {
      position: relative;
    }
    form:after {
      content: "Sending feedback...";
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      color: #fff;
      background: rgba(0,0,0,0.5);
    }
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    font-family: monospace;
  }
  textarea {
    min-height: 150px;
  }
  button {
    border: 0;
    padding: 10px 20px;
    background: rgba(253, 216, 53, 0.8);
    color: #222;
    border-radius: 2px;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;    
    &:hover {
      background: rgba(253, 216, 53, 1);
    }
  }
}
</style>