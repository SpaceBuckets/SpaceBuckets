<template>
  <swiper :next="swipeItem" type="docs">
    <template v-slot:main>
      <div class="gallery-container">
        <div class="search-sidebar onlydesktop">
          <div class="sidebar-content docs-links">
            <nuxt-link to="/docs">
              <h2 style="padding-bottom: 15px;">DOCS</h2>
            </nuxt-link>
            <docsnav />
          </div>
        </div>
        <div class="doc-single-content">
          <h2>Begin your Journey</h2>
          <br />
          <explode style="float:right;margin: 0 20px;" />
          <p>
            <strong>A Space Bucket is a DIY indoor garden</strong> that is made by stacking plastic containers alongside lighting (CFL or LED) and airflow (PC or other fans).
            <strong>It is an enclosed growth chamber that can be used to garden many kinds of plants.</strong> A Space Bucket is a versatile gardening tool that can be adapted to the users needs. Every variable of the bucket environment can be
            <strong>tweaked and upgraded</strong> at any time. For example, some plants require more light intensity than others, or different humidity conditions.
          </p>
          <p>
            Space Buckets is also
            <strong>a movement of gardeners, a community of botanically inclined individuals</strong> who like to grow plants indoors and share information freely. The
            <a
              href="https://www.reddit.com/r/SpaceBuckets"
            >/r/SpaceBuckets subreddit</a> is our main forum, and this website is its companion. Bucketeers are open, friendly and thorough, as the manifesto states.
          </p>
          <p>
            A Space Bucket can be used very effectively for cannabis cultivation, but that is not its only function.
            <strong>All plants enjoy the bucket garden, especially herbs</strong> (basil, chives, thyme, rosemary, mint and more) and fruits like cherry tomatoes and hot peppers. Bucket plant experimentation is encouraged! Why not some SB avocados, succulents or potatoes?
          </p>
        </div>
        <div class="onlymobile">
          <docsnav />
        </div>
      </div>
    </template>
    <template v-slot:next>
      <div class="doc-single-content">
        <h2>{{swipeItem.t}}</h2>
        <div v-html="swipeItem.c"></div>
      </div>
    </template>
  </swiper>
</template>

<script>
import { getDocs } from "~/store/flatDB";

export default {
  async asyncData() {
    const docs = await getDocs();
    docs.sort(function(a, b) { return a.o- b.o; })
    const swipeItem = docs['1']
    return { docs, swipeItem };
  },
  head() {
    return {
      title: "Space Buckets - Docs",
    };
  },
};
</script>

<style lang="scss">
.doc-single-content {
  background: #fff;
  padding: 15px;
  min-height: 100vh;
  border-right: 1px solid #1a1a1b;
  @media (max-width: 980px) {
    min-height: auto;
  }
  div {
    line-height: 1.6em;
  }
  h3 {
    margin: 15px 0 5px;
  }
  h2 {
    margin-bottom: 10px;
  }
}

.gallery-container {
  margin: 0 auto;
  padding-left: 250px;
  @media (max-width: 980px) {
    padding: 0;
  }
}
</style>
