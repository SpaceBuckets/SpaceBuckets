<template>
  <swiper :next="swipeItem" type="docs">
    <template v-slot:main>
      <div class="docs-wrapper">
        <div class="search-sidebar onlydesktop">
          <div class="sidebar-content docs-links">
            <nuxt-link to="/docs">
              <h1 style="padding-bottom: 15px;">DOCS</h1>
            </nuxt-link>
            <docsnav />          
          </div>
        </div>
        <div class="doc-single-content">
          <h2>{{doc.t}}</h2>
          <div v-html="doc.c"></div>
        </div>
        <div class="onlymobile">
          <docsnav />
        </div>
      </div>
    </template>
    <template v-slot:next>
        <div class="doc-single-content">
          <h1>{{swipeItem.t}}</h1>
          <div v-html="swipeItem.c"></div>
        </div>
    </template>
  </swiper>
</template>

<script>
import { getDocs, singleDoc } from "~/static/flatDB";

export default {
  async asyncData({ params }) {
    const doc = await singleDoc(params.slug);
    const docs = await getDocs();
    docs.sort(function(a, b) { return a.o- b.o; })
    const swipeItem = docs[doc.o]
    return { doc, docs, swipeItem };
  },
  head() {
    return {
      title: `Space Buckets - ${this.doc.t}`,
      meta: [
        { hid: 'description', name: 'description', content: this.doc.d }
      ]      
    };
  },
};
</script>

<style lang="scss">
.docs-wrapper {
  padding-left: 250px;
  @media (max-width: 980px) {
    padding-left: 0;
  }
}

.doc-single-content {
  background: #fff;
  padding: 15px;
  border-right: 1px solid #1a1a1b;
  div {
    line-height: 1.6em;
  }
  h3 {
    margin: 15px 0 5px;
  }
  h1,
  h2 {
    margin-bottom: 10px;
  }
}
</style>
