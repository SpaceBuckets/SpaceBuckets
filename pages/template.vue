<template>
  <div style="padding-top:50px">
    <postmasonry :post="post" />


    <div class="cards-container" v-if="relatedItems">
      <div class="card-skeleton" v-for="post in relatedItems" :key="post.s" >
        <client-only>
          <nuxt-link class="card" :to="{name: 'u-slug', params: { slug: `${post.s}`, post } }">
            <h2>{{ post.t }}</h2>
            <img :src="`/builds/${post.s}/cover.jpg`" alt="" />
          </nuxt-link>
        </client-only>
      </div>
        <nuxt-link class="load-more" :to="{name: 'gallery'}">View More</nuxt-link>
    </div>

  </div>
</template>

<script>
import { singlePost, randomize } from "~/store/flatDB";

export default {

  async asyncData({ params }) {
    const loading = true
    const post = await singlePost("simple-template") 
    if (post.z !== "" || post.z !== undefined && post.z.length > 0) { post.itemCount = post.z.split(",").length }
    return { post, loading }
  },  
  data() {
    return {
      amazonItems: [],
      relatedItems: [],
    };
  },
  async created() {
    if (process.client) {
      this.relatedItems = await randomize(10) 
      if (this.post.z !== "") {
        const zItems = fetch(`https://bucket-builder.herokuapp.com/bucket-builder/${this.post.z}`)
        .then(response => response.json())
        .then(data => this.amazonItems = data.ItemsResult.Items)
        .then( data => console.log(this.amazonItems))
      }

    }
  },
  mounted() {
    this.loading = false
  },
  head() {
    return {
      title: `Space Buckets - SIMPLE TEMPLATE`,
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
    background: #1A1A1B;
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
