<template>
  <div>
    <div class="cards-container" v-if="relatedItems">
      <h2 v-if="relatedItems.length > 0">RELATED BUILDS</h2>
      <div class="card-skeleton" v-for="post in relatedItems" :key="post.s">
        <client-only>
          <card :id="post" />
        </client-only>
      </div>


      <h2>RANDOM BUILDS</h2>

      <div class="card-skeleton" v-for="post in randomItems" :key="post.s">
        <client-only>
          <card :id="post" />
        </client-only>
      </div>      
    </div>
    <nuxt-link class="load-more" :to="{name: 'gallery'}">View All</nuxt-link>
  </div>
</template>

<script>
import { randomize, filterBuilds } from "~/scripts/flatDB";

export default {
  name: "cardrelated",
  props: ["cat"],
  data() {
    return {
      relatedItems: [],
      randomItems: [],
    };
  },
  async created() {
    if (process.client) {
      var currCat = this.cat.split(',')
         this.randomItems = await randomize(4);

   
        if (currCat.includes('5gal')) {
          this.relatedItems = await filterBuilds(4, 1, 'rand', '5gal');
        }
        if (currCat.includes('brute')) {
          this.relatedItems = await filterBuilds(4, 1, 'rand', 'brute');
        }
        if (currCat.includes('tote')) {
          this.relatedItems = await filterBuilds(4, 1, 'rand', 'tote');
        }
        if (currCat.includes('barrel')) {
          this.relatedItems = await filterBuilds(4, 1, 'rand', 'barrel');
        }                
        if (currCat.includes('bin')) {
          this.relatedItems = await filterBuilds(4, 1, 'rand', 'bin');
        }  
     }
  }, 
};
</script>

<style lang="scss" scoped>
.load-more {
  color: #eee;
  border: 1px solid #333;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  width: 300px;
  margin: 20px auto 30px;
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
  max-width: 1280px;
  margin: 50px auto 0;
}

h2 {
  color: #fff;
  display: block;
  width: 100%;
  margin: 20px 10px 5px;
  font-size: 22px;
}
</style>
