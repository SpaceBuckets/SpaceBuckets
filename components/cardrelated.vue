<template>
  <div>
    <div class="cards-container" v-if="relatedItems">
      <div class="card-skeleton" v-for="post in relatedItems" :key="post.s">
        <client-only>
          <card :id="post" />
        </client-only>
      </div>
    </div>
    <nuxt-link class="load-more" :to="{name: 'gallery'}">View More</nuxt-link>
  </div>
</template>

<script>
import { randomize } from "~/store/flatDB";

export default {
  name: "cardrelated",
  data() {
    return {
      relatedItems: [],
    };
  },
  async created() {
    if (process.client) {
      this.relatedItems = await randomize(8);
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
  max-width: 1280px;
  margin: 50px auto 0;
}
</style>
