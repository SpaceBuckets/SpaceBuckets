<template>

      <div class="search-filters">
        <label for="first">
          <div>Getting Started</div>
          <div>
            <nuxt-link to="/docs/main-container">Main Container</nuxt-link>
            <nuxt-link to="/docs/light-top">Light Top</nuxt-link>
            <nuxt-link to="/docs/airflow-solutions">Airflow Solutions</nuxt-link>
            <nuxt-link to="/docs/electrical-basics">Electrical Basics</nuxt-link>
            <nuxt-link to="/docs/safety-guidelines">Safety Guidelines</nuxt-link>
          </div>
        </label>

        <label for="second">
          <div>Advanced Stuff</div>
          <div>
            <nuxt-link to="/docs/side-lighting">Side-Lighting</nuxt-link>            
            <nuxt-link to="/docs/heat-control">Heat Control</nuxt-link>
            <nuxt-link to="/docs/smell-control">Smell Control</nuxt-link>
            <nuxt-link to="/docs/led-basics">LED Basics</nuxt-link>
            <nuxt-link to="/docs/led-bulbs">LED Bulbs</nuxt-link>
          </div>
        </label>

        <label for="third">
          <div>Plant Advice</div>
          <div>
            <nuxt-link to="/docs/coco-coir">Coco Coir</nuxt-link>            
            <nuxt-link to="/docs/pest-control">Pest Control</nuxt-link>            
            <nuxt-link to="/docs/plant-species">Plant Species</nuxt-link>            
            <nuxt-link to="/docs/plant-training">Plant Training</nuxt-link>            
          </div>
        </label>
      </div>
</template>

<script>
export default {
  name: "postmasonry",
  props: ["post"],
  data() {
    return {
      amazonItems: [],
      relatedItems: [],
      swipeItem: [],
      progressScroll: 0,
    };
  },
};
</script>

<style lang="scss" scoped>

.search-filters {
  color: #eee;
  padding: 10px 0;
  @media (max-width: 980px) {
    padding: 15px;
  }
  a { 
    color: #eee; 
    text-decoration: none;
    display: block;
    margin-bottom: 5px;
    &.nuxt-link-active {
      color: #fdd835;
      font-weight: bold;
    }
  }
  label > div:first-child {
    padding: 10px 0;
    color: #eee;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    text-transform: uppercase;    
    &:hover {
      color: #fdd835;
    }
    + div {
      div.active,
      div:hover {
        color: #fdd835;
      }
    }
  }
  label {
    display: block;
    border-bottom: 1px solid rgba(52, 53, 54, 0.31373);
    cursor: pointer;
    padding-bottom: 12px;
    &:last-child {
      border: none;
    }
  }
}
</style>
