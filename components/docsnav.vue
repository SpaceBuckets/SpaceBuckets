<template>
  <div class="search-filters">
    <section :ref="`section-${item.order}`" class="tes" v-for="(item, i) in nav" :key="`parent-${i}`" :class="{ractive: $state.docsActive === item.order}" @click="$state.docsActive = item.order">
      <div>{{i}} <span>({{item.items.length}})</span> </div>
      <div :ref="`content-${item.order}`" @scroll="$state.docsScroll = $refs[`content-${$state.docsActive}`].scrollTop">
        <nuxt-link v-for="(single, o) in item.items" :to="single.url" :key="`single-${o}`" > {{single.title}}</nuxt-link>
      </div>
    </section>           
  </div>
</template>

<script>
export default {
  name: "docsnav",
  props: [""],
  data() {
    return {
      "nav": {
        "GETTING STARTED":{
            order: 1,
            items: [{
              url:"/docs/begin-your-journey",
              title:"Begin your Journey"
            },
            {
              url:"/docs/main-container",
              title:"Main Container"
            },
            {
              url:"/docs/lighting-solutions",
              title:"Lighting Solutions"
            },
            {
              url:"/docs/led-sidelighting",
              title:"Side-Lighting"
            },
            {
              url:"/docs/led-bulbs",
              title:"LED bulbs"
            },
            {
              url:"/docs/airflow-solutions",
              title:"Airflow Solutions"
            },
            {
              url:"/docs/heat-control",
              title:"Heat Control"
            },
            {
              url:"/docs/smell-control",
              title:"Smell Control"
            },
            {
              url:"/docs/electrical-basics",
              title:"Electrical Basics"
            },
            {
              url:"/docs/safety-guidelines",
              title:"Safety Guidelines"
            },
            {
              url:"/docs/manifesto",
              title:"SB Manifesto"
            }]
        },
        "SAG's KNOWLEDGE BASE":{
           order: 2,
            items: [
            {
              url:"/docs/grow-lights",
              title:"Grow Lights Reviews"
            },               
            {
              url:"/docs/core-lighting-concepts",
              title:"Core Lighting Concepts"
            },
            {
              url:"/docs/photosynthesis",
              title:"Photosynthesis"
            },            
            {
              url:"/docs/photomorphogenesis",
              title:"Photomorphogenesis"
            },            
            {
              url:"/docs/mccree-curve",
              title:"McCree Curve"
            },
            {
              url:"/docs/emerson-enhancement-effect",
              title:"Emerson Enhancement Effect"
            },
            {
              url:"/docs/green-leaves-green-light",
              title:"Green Leaves and Green Light"
            },   
            {
              url:"/docs/mixing-colors",
              title:"Mixing Light Colors"
            },           
            {
              url:"/docs/ultraviolet-growing",
              title:"Ultraviolet Growing"
            },              
            {
              url:"/docs/color-rendering-index",
              title:"Color Rendering Index (CRI)"
            },
            {
              url:"/docs/daily-lighting-integral",
              title:"Daily Lighting Integral (DLI)"
            },
            {
              url:"/docs/lux-ppfd-conversion",
              title:"Lux-PPFD Conversions"
            },
            {
              url:"/docs/lux-lighting-levels",
              title:"Lux Lighting Levels"
            },
            {
              url:"/docs/macadam-ellipses",
              title:"MacAdam Ellipses"
            },                 
            {
              url:"/docs/equivalent-wattage",
              title:"Equivalent Wattage"
            },
            {
              url:"/docs/luminous-efficiency",
              title:"Luminous Efficiency"
            },
            {
              url:"/docs/luminous-efficacy",
              title:"Luminous Efficacy"
            },
            {
              url:"/docs/efficacy-limits",
              title:"LED Efficacy Limits"
            },               
            {
              url:"/docs/lux-meters",
              title:"Lux Meters and Sensors"
            },          
            {
              url:"/docs/canopy-penetration",
              title:"Canopy Penetration"
            },                           
            {
              url:"/docs/led-heatsinks",
              title:"LED Heatsinks Tips"
            },
            {
              url:"/docs/mount-heatsinks",
              title:"How to Mount Heatsinks"
            },            
            {
              url:"/docs/led-power-supplies",
              title:"LED Power Supplies"
            }]
        },
        "PLANT ADVICE":{
           order: 3,
            items: [{          
              url:"/docs/plant-species",
              title:"Plant Species"
            },
            {
              url:"/docs/plant-training",
              title:"Plant Training"
            },
            {
              url:"/docs/pest-control",
              title:"Pest Control"
            },
            {
              url:"/docs/coco-coir",
              title:"Coco Coir"
            }]
        }
      }      
    }
  },
  mounted() {
   this.$nextTick(() => {

    this.$refs[`content-${this.$state.docsActive}`].scrollTop = this.$state.docsScroll

      Object.keys(this.nav).forEach((key, index) => {
         for (let e = 0; e < this.nav[key].items.length; e++) {
          if(this.nav[key].items[e].url === this.$route.path.replace(/\/$/, '')) {
            this.$state.docsActive = this.nav[key].order
          } 
        }
      });
 
   });
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
    width: 100%;
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
