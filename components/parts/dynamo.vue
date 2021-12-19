<template>
  <svg
    height="100%"
    viewBox="-150 0 300 550"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="requipedbuild"
  >
  <g>
 <!-- Base container -->
      <component
        :is="`parts-${build.container}-base`"
        :style="{transform: `rotate(180deg) translateX(50%)`}"
      />

      <template v-if="build.container !== 'tote'">
          <!-- Spacers -->
          <component
            :is="`parts-${build.container}-spacer`"
            :key="`spacer-${i}`"
            v-for="(spacer, i) in build.parts.equipped"
            :style="{transform: `rotate(180deg) translateX(50%) translateY(-${container.items[build.container].height + container.items[build.container].spacerheight * (i+1)}px)`}"
          />
      </template>


      <!-- Lid  -->
      <component
        :is="`parts-${build.container}-lid`"
        :style="{transform: `rotate(180deg) translateX(50%) translateY(-${container.items[build.container].height + container.items[build.container].spacerheight * (build.parts.equipped + 1)}px)`}"
      />      

      <!-- Lighting -->
      <template v-for="(light, i) in build.parts.lighting">

       <component
        v-for="(lightpart, e) in light.equipped"
        :is="`parts-lighting-${light.rename}`"
        :key="`light-${e}-${i}`"
        :build="build"
        :style="{transform: `rotate(180deg) translateX(50%) translateY(-${container.items[build.container].height + container.items[build.container].lidheight + (container.items[build.container].spacerheight * (build.parts.equipped+1)) + (lighting.items[light.rename].height * e)}px)`}"
      /> 
       </template>

      <!-- Airflow -->
      <template v-for="(air, i) in build.parts.airflow">
       <component
        v-for="(airpart, e) in air.equipped"
        :is="`parts-airflow-${air.rename}`"
        :key="`air-${e}-${i}`"
        :style="{transform: `rotate(180deg) translateX(50%) translateX(-${(container.items[build.container].width/2.2)}px) translateY(-${container.items[build.container].height/1.4 * (e+1)}px)`}"
      /> 
      </template>
  </g>
      
    </svg>
</template>
<script>
export default {
  props: ["build"],
  data() {
    return {
  "container":{
     "name":"container",
     "items":{
        "bucket":{
           "name":"5gal Bucket",

           "power":1,
           "height": 150,
           "width": 140,
           "spacerheight": 70,
           "lidheight": 16
        },
        "brute":{
           "name":"10gal Brute",
 
           "height": 200,
           "width": 230,
           "spacerheight": 90,
           "lidheight": 25,           
           "power":2
        },
        "tote":{
           "name":"20gal Tote",
           "price":30,
 
           "height": 120,
           "width": 320,
           "spacerheight": 44,
           "lidheight": 220             
        }

     }
  },
  "lighting":{
     "name":"lighting",
     "items":{
        "CFL23":{
           "name":"23w CFL",
           "rename": "CFL23",
 
           "power":23,
           "height": 30
        },
        "CFL42":{
           "name":"42w CFL",
           "rename": "CFL42",
 
           "power":42,
           "height": 30
        },
        "UFO135":{
           "name":"135w UFO",
           "rename": "UFO135",
 
           "power":135,
           "height": 30
        },
        "UFO300":{
           "name":"300w UFO",
           "rename": "UFO300",
 
           "power":300,
           "height": 32
        },
        "PAR38":{
           "name":"50w COB",
           "rename": "PAR38",
 
           "power":50,
           "height": 30
        }
     }
  },
  "airflow":{
     "name":"airflow",
     "items":{
        "PCfan":{
           "name":"PC fan",
           "rename": "PCfan",
 
           "power":30
        },
        "linefan":{
           "name":"Line Fan",
           "rename": "linefan",
 
           "power":55
        },
        "boost":{
           "name":"Boost Fan",
           "rename": "boost",
               "power":180
        },
        "inline":{
           "name":"Inline",
           "rename": "inline",
            "power":300
        }
     }
  }      
    }
  },
  mounted() {
    console.log(this.build)
  }
 };
</script>

<style lang="scss" scoped>
svg {
  position: absolute;
  height: 340px;
  top: 0;
  //left: 50%;
  z-index: 9999;
  transform: scaleY(-1) translateZ(-15px);
  pointer-events: none;
  width: 100%;
  overflow: visible;
  
  > g > g {
    transform-origin: center;
    transform-box: fill-box;
    pointer-events: all;
    cursor: pointer;

  }
}
</style>