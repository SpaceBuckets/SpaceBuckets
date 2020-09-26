<template>
  <div class="docs-wrapper">
     <div class="search-sidebar">
      <div class="sidebar-content docs-links">
        <nuxt-link to="/docs"><h2>DOCS</h2></nuxt-link>
<!--         <p>Browse these articles and how-to guides to learn the best bucket building tips.</p>
 -->        <div>
          <nuxt-link v-for="doc in docs" :key="doc.s" :to="{name: 'docs-slug', params: { slug: `${doc.s}`, doc } }">
            {{ doc.t }}
          </nuxt-link>
        </div>
      </div>   
        </div>
        <div class="doc-single-content">
          <h2>{{doc.t}}</h2> 
          <div v-html="doc.c"></div>    
        </div>
<!--         <div class="docs-card-container">
          <nuxt-link class="docs-card" v-for="doc in docs" :key="doc.s" :to="{name: 'docs-slug', params: { slug: `${doc.s}`, doc } }">
            <h2>{{ doc.t }}</h2> 
            <img :src="`/docs/${doc.s}/cover.jpg`" alt="" />
          </nuxt-link>
        </div>     -->    
  </div>
</template>

<script>
import { getDocs, singleDoc } from "~/store/flatDB";

 export default {

  async asyncData({ params }) {
    const doc = await singleDoc(params.slug) 
    const docs = await getDocs()
    return { doc, docs }
  },    
  head() {
    return {
      title: `Space Buckets - ${this.doc.t}`,
    };
  },
}; 
</script>

<style lang="scss">
.docs-card-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
}
.docs-card {
  background: #fff;
  border-radius: 2px;
  flex: 1;
  display: flex;
  flex-basis: 20%;
  margin: 5px;
  text-decoration: none;
  position: relative;
  padding-top: 40px;
  padding-bottom: 20px;
  color:#000;
  h2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-size: 16px;
    letter-spacing: -1px;
    line-height: 40px;
    padding-left: 15px;
    text-transform: uppercase;
  }
  img {
    flex: 1;
    margin: auto;
    max-width: 65%;
    border-radius: 50%;
    display: block;
    filter: grayscale(75%);
    transition: 0.2s linear;
  }
  &:hover img { filter: grayscale(0) }
}
.docs-links {
  a {
    display:block;
    font-size: 16px;
    color: #eee;
    text-decoration: none;
    padding-bottom: 10px;
    &:hover,
    &.nuxt-link-active {
      color: #fdd835;
    }
  }
}
.docs-wrapper {
  padding-left: 250px;
    @media (max-width: 980px) {
  padding-left: 0;

  }  
}

.doc-single-content {
  background: #fff;
  padding: 20px;
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

.cards-container {
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  
}
</style>
