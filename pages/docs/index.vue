<template>
  <div class="gallery-container">
     <div class="search-sidebar">
      <div class="sidebar-content docs-links">
        <nuxt-link to="/docs"><h2>DOCS</h2></nuxt-link>
        <p>Browse these articles and how-to guides to learn the best bucket building tips.</p>
        <div>
           <nuxt-link v-for="doc in docs" :key="doc.s" :to="{name: 'docs-slug', params: { slug: `${doc.s}`, doc } }">
            {{ doc.t }}
          </nuxt-link> 
        </div>
      </div>   
        </div>
        <div class="doc-single-content">

          <h2>Documentation</h2> 
          <p><strong>A Space Bucket is a DIY indoor garden</strong> that is made by stacking plastic containers alongside lighting (CFL or LED) and airflow (PC or other fans). <strong>It is an enclosed growth chamber that can be used to garden many kinds of plants.</strong> A Space Bucket is a versatile gardening tool that can be adapted to the users needs. Every variable of the bucket environment can be <strong>tweaked and upgraded</strong> at any time. For example, some plants require more light intensity than others, or different humidity conditions.</p>
          <p>Space Buckets is also <strong>a movement of gardeners, a community of botanically inclined individuals</strong> who like to grow plants indoors and share information freely. The <a href="https://www.reddit.com/r/SpaceBuckets">/r/SpaceBuckets subreddit</a> is our main forum, and this website is its companion. Bucketeers are open, friendly and thorough, as the manifesto states.</p>
          <p>A Space Bucket can be used very effectively for cannabis cultivation, but that is not its only function. <strong>All plants enjoy the bucket garden, especially herbs</strong> (basil, chives, thyme, rosemary, mint and more) and fruits like cherry tomatoes and hot peppers. Bucket plant experimentation is encouraged! Why not some SB avocados, succulents or potatoes?</p>
        </div>
<!--         <div class="docs-card-container">
          <nuxt-link class="docs-card" v-for="doc in docs" :key="doc.s" :to="{name: 'docs-slug', params: { slug: `${doc.s}`, doc } }">
            <h2>{{ doc.t }}</h2> 
            <img :src="`../docs/${doc.s}/cover.jpg`" alt="" />
          </nuxt-link>
        </div> -->

  </div>
</template>

<script>
import { getDocs } from "~/store/flatDB";

export default {
  async asyncData() {
    const docs = await getDocs()
    return { docs }
  },
  head() {
    return {
      title: "Docs",
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

.cards-wrapper {
  margin: 20px;
      @media (max-width: 980px) {
        margin: 0 10px;
      }
}
.pagination {
  font-size: 16px;
  color: #eee;
}

.gallery-container {
  margin: 0 auto;
  padding-left: 250px;
  @media (max-width: 980px) {
    padding: 0;
  }
}

.cards-container {
  overflow: auto;
display: flex;
    flex-wrap: wrap;
    justify-content: center;  
    &.active {
    .skeleton { display: block;   }
    .card { display: none; }
  }
  .card {
    width: 300px;
    height:387px;
    margin: 10px;
    float: left;
    position: relative;
    color: #fff;
    background: rgba(255,255,255,0.1);
    > h2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      color: #fafafa;
      font-family: 'montserrat', Arial, Helvetica, sans-serif;
      text-decoration: none;
      font-size: 16px;
      letter-spacing: -1px;
      line-height: 32px;
      padding-left: 15px;
      background-color: rgba(0, 0, 0, 0.6);
      text-transform: uppercase;
    }
    > p {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
}

</style>
