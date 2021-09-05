<template>

      <div class="search-filters">
        <section ref="section-1" :class="{ractive: $state.docsActive === 1}" @click="$state.docsActive = 1">
          <div>Getting Started <span>(9)</span></div>
          <div ref="content-1" @scroll="$state.docsScroll = $refs[`content-${$state.docsActive}`].scrollTop">
             <nuxt-link to="/docs/begin-your-journey">Begin your Journey</nuxt-link>
             <nuxt-link to="/docs/main-container/">Main Container</nuxt-link>
            <nuxt-link to="/docs/lighting-solutions/">Lighting Solutions</nuxt-link>
            <nuxt-link to="/docs/led-sidelighting/">Side-Lighting</nuxt-link>  
            <nuxt-link to="/docs/led-bulbs/">LED bulbs</nuxt-link>
            <nuxt-link to="/docs/airflow-solutions/">Airflow Solutions</nuxt-link>
            <nuxt-link to="/docs/heat-control/">Heat Control</nuxt-link>
            <nuxt-link to="/docs/smell-control/">Smell Control</nuxt-link>
             <nuxt-link to="/docs/electrical-basics/">Electrical Basics</nuxt-link>
            <nuxt-link to="/docs/safety-guidelines/">Safety Guidelines</nuxt-link>
          </div>
        </section>

        <section ref="section-2" :class="{ractive: $state.docsActive === 2}"  @click="$state.docsActive = 2">
          <div>SAG Knowledge Base <span>(18)</span></div>
          <div ref="content-2" @scroll="$state.docsScroll = $refs[`content-${$state.docsActive}`].scrollTop">
            <nuxt-link to="/docs/core-lighting-concepts/">Core Lighting Concepts</nuxt-link>   
            <nuxt-link to="/docs/lux-meters">Lux Meters and Sensors</nuxt-link>            
            <nuxt-link to="/docs/color-rendering-index/">Color Rendering Index (CRI)</nuxt-link>            
            <nuxt-link to="/docs/daily-lighting-integral/">Daily Lighting Integral (DLI)</nuxt-link>    
            <nuxt-link to="/docs/lux-ppfd-conversion/">Lux-PPFD Conversions</nuxt-link>            
            <nuxt-link to="/docs/lux-lighting-levels/">Lux Lighting Levels</nuxt-link>    
            <nuxt-link to="/docs/equivalent-wattage/">Equivalent Wattage</nuxt-link>    
            <nuxt-link to="/docs/luminous-efficiency/">Luminous Efficiency</nuxt-link>            
            <nuxt-link to="/docs/luminous-efficacy/">Luminous Efficacy</nuxt-link> 
            <nuxt-link to="/docs/efficacy-limits/">Efficacy Limits</nuxt-link>                     
            <nuxt-link to="/docs/macadam-ellipses/">MacAdam Ellipses</nuxt-link>            
            <nuxt-link to="/docs/mccree-curve/">McCree Curve</nuxt-link>          
            <nuxt-link to="/docs/emerson-enhancement-effect/">Emerson Enhancement Effect</nuxt-link>    
            <nuxt-link to="/docs/light-colors/">Light Colors Effects</nuxt-link>            
            <nuxt-link to="/docs/mixing-colors/">Mixing Light Colors</nuxt-link>            
            <nuxt-link to="/docs/ultraviolet-growing/">Ultraviolet Growing</nuxt-link>            
            <nuxt-link to="/docs/led-heat-sinks/">LED Heat Sinks</nuxt-link>            
            <nuxt-link to="/docs/led-power-supplies/">LED Power Supplies</nuxt-link>            
          </div>
        </section>   
        <section ref="section-3" :class="{ractive: $state.docsActive === 3}" @click="$state.docsActive = 3">
          <div>Plant Advice <span>(4)</span></div>
          <div ref="content-3" @scroll="$state.docsScroll = $refs[`content-${$state.docsActive}`].scrollTop">
            <nuxt-link to="/docs/plant-species/">Plant Species</nuxt-link>            
            <nuxt-link to="/docs/plant-training/">Plant Training</nuxt-link>       
            <nuxt-link to="/docs/pest-control/">Pest Control</nuxt-link>            
            <nuxt-link to="/docs/coco-coir/">Coco Coir</nuxt-link>            

          </div>
        </section>             
      </div>
</template>

<script>
export default {
  name: "docsnav",
  props: [""],
  mounted() {
    this.$refs[`content-${this.$state.docsActive}`].scrollTop = this.$state.docsScroll
   }
 
};
</script>

<style lang="scss" scoped>
section > div + div {
  display: none
}
section.ractive > div + div {
  display: block;
  //max-height: 400px;
  overflow: auto;
  padding-bottom: 12px;
}

.search-filters {
  color: #eee;
  padding: 0 0;
  @media (max-width: 980px) {
    padding: 15px;
  }
  a { 
    color: #eee; 
    text-decoration: none;
    display: block;
    padding: 5px 15px;
    &:hover {
      color: #fdd835;
    }
    &.ractive {
 color: #fdd835 !important;
      font-weight: bold !important;      
    }
    &.nuxt-link-active {
      color: #fdd835;
      font-weight: bold;
/*       &:first-child {
        font-weight:normal;
        color: #eee;
        &:after {
          display: none;
        }
      } */
      &:after {
        content: "»";
        margin-left: 5px;
      }
    }
  }
  section > div:first-child {
    color: #eee;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    text-transform: uppercase; 
     padding: 15px; 
     span {
       font-weight: normal;
       color: #888;
       font-family: Arial, Helvetica, sans-serif;
     }
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
  section {
    display: block;
    border-top: 1px solid #333;
    cursor: pointer;
  
  }
}
</style>
