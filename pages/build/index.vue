 <template>
  <div id="app">

    <div class="new-builder">
      
      <div class="intro-banner">
        <div class="sidebar-content">
          <h2>BUCKET BUILDER</h2>
          <p>Select a combination of bucket parts to <strong>create your custom Space Bucket build</strong>. A shopping list, similar examples from the Gallery and build tips will adapt to your preferences.</a></p>
        </div>
      </div>

      <div class="new-builder-accordion">
        <section v-for="(items, parent) in options">
          <span>{{parent}}</span>
          <div
            class="item-title-container"
            @click="clickMaster(child, parent)"
            :class="{ active: active[parent] == child}"
            v-for="(item, child) in items"
          >
            <component :is="item.illus"/>
            <div class="item-title">{{ item.title }}</div>
            <div>{{ item.description}}</div>
          </div>
        </section>
                
        <section class="shopping-list" style="min-width:320px;">
          <span v-if="active.container == 'bucket' && active.light == 'cfl'">CLASSIC SPACE BUCKET</span>
          <span v-if="active.container == 'bucket' && active.light == 'ufo'">UFO LED SPACE BUCKET</span>
          <span v-if="active.container == 'bucket' && active.light == 'led'">PAR38 LED SPACE BUCKET</span>
          <span v-if="active.container == 'brute' && active.light == 'ufo'">UFO LED BRUTE BUCKET</span>
          <span v-if="active.container == 'brute' && active.light == 'cfl'">CFL BRUTE BUCKET</span>
          <span v-if="active.container == 'brute' && active.light == 'led'">PAR38 LED BRUTE BUCKET</span>
          <span v-if="active.container == 'tote' && active.light == 'cfl'">CFL SPACE TOTE</span>
          <span v-if="active.container == 'tote' && active.light == 'ufo'">UFO LED SPACE TOTE</span>
          <span v-if="active.container == 'tote' && active.light == 'led'">PAR38 LED SPACE TOTE</span>

          <div class="scene">
            <div class="box">
              <div class="box__face box__face--back"> </div>
              <div class="box__face box__face--right"> </div>
              <div class="box__face box__face--left"> </div>
              <div class="box__face box__face--top"> </div>
              <div class="box__face box__face--bottom"> </div>
            </div>
            <parts-dynamo :build="build"/>
          </div>
        </section>
 
        <div class="recomend-container">
          <div class="producter" style="float:right;width:320px;">
            <span>SHOPPING LIST</span>
            <aside>
              <a
                v-for="(item, i) in items"
                :key="`section-${i}`"
                :class="{getting: i === loading}"
                :href="`${item.url}`"
                target="_blank"
                class="item-title-container item-title-container-shopping"
              >
                <div class="product-image" v-if="item.img">
                  <img :src="`${item.img}`" />
                </div>
                <div class="product-title">{{item.title}}</div>
                <div class="product-brand-container">
                  <i class="product-brand" v-if="item.img">{{item.brand}}</i>
                  <div class="product-price" v-if="item.img">{{item.price}}</div>
                </div>
              </a>   
            </aside>

            <div class="total-price">
              <div>~${{total}}</div>
            </div>
            <p style="margin:0;border: 1px solid #fedc4f;padding: 10px;background: rgb(254 244 203);">
              This shopping list is a starting point for your SB build. Local prices might be cheaper, and most parts can be recycled.
            </p>            

            <br>
                  <buildsimilar v-if="num" :active="active"/>
      
          </div>

          <section class="recommended">
            <h2 v-if="active.container == 'bucket' && active.light == 'cfl'">CLASSIC SPACE BUCKET</h2>
            <h2 v-if="active.container == 'bucket' && active.light == 'ufo'">UFO LED SPACE BUCKET</h2>
            <h2 v-if="active.container == 'bucket' && active.light == 'led'">PAR38 LED SPACE BUCKET</h2>
            <h2 v-if="active.container == 'brute' && active.light == 'ufo'">UFO LED BRUTE BUCKET</h2>
            <h2 v-if="active.container == 'brute' && active.light == 'cfl'">CFL BRUTE BUCKET</h2>
            <h2 v-if="active.container == 'brute' && active.light == 'led'">PAR38 LED BRUTE BUCKET</h2>
            <h2 v-if="active.container == 'tote' && active.light == 'cfl'">CFL SPACE TOTE</h2>
            <h2 v-if="active.container == 'tote' && active.light == 'ufo'">UFO LED SPACE TOTE</h2>
            <h2 v-if="active.container == 'tote' && active.light == 'led'">PAR38 LED SPACE TOTE</h2>
            <br>
            
            <p>
              You have built a 
              <i v-if="active.container == 'bucket' && active.light == 'cfl'">Classic Space Bucket</i>
              <i v-if="active.container == 'bucket' && active.light == 'ufo'">UFO LED Space Bucket</i>
              <i v-if="active.container == 'bucket' && active.light == 'led'">PAR38 LED Space Bucket</i>
              <i v-if="active.container == 'brute' && active.light == 'ufo'">UFO LED Brute Bucket</i>
              <i v-if="active.container == 'brute' && active.light == 'cfl'">CFL Brute Bucket</i>
              <i v-if="active.container == 'brute' && active.light == 'led'">PAR38 LED Brute Bucket</i>
              <i v-if="active.container == 'tote' && active.light == 'cfl'">CFL Space Tote</i>
              <i v-if="active.container == 'tote' && active.light == 'ufo'">UFO LED Space Tote</i>
              <i v-if="active.container == 'tote' && active.light == 'led'">PAR38 LED Space Tote</i>              
              with a 
              <i v-if="active.container == 'bucket'">5gal container,</i>
              <i v-if="active.container == 'brute'">supersized brute bucket,</i>
              <i v-if="active.container == 'tote'">tote container,</i>
              <i v-if="active.light == 'cfl'">CFL bulbs</i>
              <i v-if="active.light == 'ufo'">a UFO LED light</i>
              <i v-if="active.light == 'led'">PAR38 LED bulbs</i>
              and 
              <i v-if="active.airflow == 'pcfan'">PC fans.</i>
              <i v-if="active.airflow == 'linefan'">line fans.</i>
              <i v-if="active.airflow == 'inline'">an inline fan.</i></p>

            <p v-if="active.container == 'bucket'">This kind of indoor garden is ideal <em>to grow a single plant in a controlled environment</em>. This size of grow bucket has a very small footprint and it is a great way to start your journey. It is the original design that inspired this community, and has been proven to work effectively. The best feature of 5gal buckets is that they are easily stackable, which makes them naturally modular.</p>
            
            <ul v-if="active.container == 'bucket'">
              <li><a href="/gallery/1/bucket">View over 200 bucket build examples in the Gallery »</a></li>
            </ul>

            <p v-if="active.container == 'brute'">Supersized containers are great for <em>gardeners that wish to grow bigger plants</em>, or for those who feel constrained by the dimensions of the 5gal bucket. There are 10gal, 20gal and 32gal options, which can all be used to build an indoor garden. The Brute brand is sturdy and usually a great choice, but sometimes expensive; <strong>you can also use barrels, bins or whatever supersized container</strong> you have available.
            </p>
            
            <ul v-if="active.container == 'brute'">
              <li><a href="/gallery/1/brute">View 27 brute build examples in the Gallery »</a></li>
              <li><a href="/gallery/1/barrel">View 13 barrel build examples in the Gallery »</a></li>
              <li><a href="/gallery/1/bin">View 27 bin build examples in the Gallery »</a></li>  
            </ul>

            <p v-if="active.container == 'tote'"><strong>You can fit multiple plants inside stacked totes</strong>. These rectangular containers are even bigger than supersized Brutes, and usually come in 32gal or 44gal versions. Given their massive size, <em>tote builds need powerful lighting</em> from all sides, with a 300w LED panel being the most usual option.</p>
            
            <ul v-if="active.container == 'tote'">
              <li><a href="/gallery/1/tote">View 43 bucket build examples in the Gallery »</a></li>
            </ul>

            <h3>Lighting tips</h3>

            <template v-if="active.light == 'cfl' ">
              <p><em>CFL bulbs can be the cheapest option, but also the hardest to optimize</em>. They emit a lot of heat that needs to be extracted from the plant chamber, so extra airflow is needed. These lights also use the E27 socket, so unless you use an adapter there is extra complexity in the wiring.</p>
              <p>The best CFL bulbs for Space Buckets are the <strong>23 and 42 watt versions</strong>, which feature a good balance between heat and lumen output. Bulbs over 42w can be a safety hazard in an enclosed container, while bulbs under 23w are not an effective alternative for gardening. No matter the wattage, they should be installed facing horizontally.</p>

              <ul>
                <li><a href="/gallery/1/cfl">View over 135 CFL build examples in the Gallery »</a></li>
                <li><a href="/docs/lighting-solution">Learn more about lighting options »</a></li>
              </ul>
            </template>

            <template v-if="active.light == 'ufo'">
              <p>
                UFO LED grow lights feature a <em>round shape that fits a bucket perfectly</em>. With this option, it is just a matter of putting the light on top of the lid and plugging it into the wall. UFO LED grow light are <strong>the easiest lighting solution</strong> for Space Buckets. You will find them in 90w, 135w and 180w, all of which can be used in a SB.
              </p>

              <p>
                Some bucketeers install the UFO inside the bucket, <strong>which is not recommended</strong> and usually requires the reversal of the light fans. Though this is a viable option, <strong>it is better to install the UFO light outside of the container</strong>, which keeps the heat away from the growing chamber.
              </p> 

              <ul>
                <li><a href="/gallery/1/ufo">View 161 UFO build examples in the Gallery »</a></li>
              </ul>

            </template>

            <template v-if="active.light == 'led'">
              <p>
                PAR38 LED bulbs have <strong>gained a lot of popularity</strong> among bucketeers in the past year. This build design was introduced by /u/SuperAngryGuy as a no-hassle, low-cost solution for lighting in a 5gal bucket. <em>These bulbs have a great balance between price and performance</em>: these bulbs are usually recommended as the budget alternative, as they are even cheaper than CFL bulbs. Heat output is also an advantage.
              </p>

              <p>
                Keep in mind that these bulbs <strong>should be installed vertically inside the bucket to optimize the lumen output.</strong> When possible, try to get the 120w equivalent version for extra photosynthesis. <i v-if="active.container == 'bucket'">Two bulbs is more than enough for a 5gal Space Bucket.</i> <i v-if="active.container == 'brute' || active.container == 'tote'">For a brute or tote build you will need more than two bulbs, and in that case a UFO LED might be a better choice..</i>
              </p> 

              <ul>
                <li><a href="https://www.reddit.com/r/SpaceBuckets/comments/gn4iut/a_low_cost_no_hassle_lighting_setup_for_a_five/">View /u/SuperAngryGuy's PAR38 LED tutorial »</a></li>
              </ul>

            </template>

            <h3>Airflow stuff</h3>

            <p><em>Proper air circulation is essential for Space Buckets</em> (and every other kind of indoor garden). If airflow is insufficient, temperature and humidity problems will arise.</p>

            <p v-if="active.airflow == 'pcfan'">
              <strong>PC fans are a cheap solution for ventilation and cooling</strong>. They are easy to find and recycle, and provide enough airflow to extract the heat from your bucket. In order to run PC fans you need a 12v power supply, which are also cheap and readily available. With 1A you can run 2 fans safely, though your mileage may vary and testing is always recommended. 
            </p>

            <p v-if="active.airflow == 'pcfan'">
              A typical 12v PC fan works at about 30 CFM (Cubic Feet per Minute) with a noise level of 26 dBA. As such these are usually not b enough to handle carbon filters.
            </p>

            <ul v-if="active.airflow == 'pcfan'">
              <li><a href="/gallery/1/pcfan">View 195 PC fan build examples in the Gallery »</a></li>
            </ul>            

            <p v-if="active.airflow == 'linefan'">
              Line fans are a step up from standard PC fans, as they run at line voltage (110v or 220v). This cooling solution is solid and reliable, protected with a metal frame. <strong>Most of these fans also come wired with a plug</strong> for easy installation. 
            </p>

            <p v-if="active.airflow == 'linefan'">
              A typical 110v fan works at about 50CFM, with a noise level of 40dBA. <em>These units have 40% more airflow than PC fans</em>, which makes them a good choice for cooling small spaces.
            </p>
            <ul v-if="active.airflow == 'linefan'">
              <li><a href="/gallery/1/pcfan">View 9 line fan build examples in the Gallery »</a></li>
            </ul>                 

            <p v-if="active.airflow == 'inline'">
              <em>Inline fans are the most powerful option available for Space Buckets</em>. They move a lot of air and are designed to work with carbon filters: if you want to eliminate smells, inline fans are the way to go. These fans can also be pretty loud, so it can be useful to install a speed regulator as well.
            </p>            
            <ul v-if="active.airflow == 'inline'">
              <li><a href="/gallery/1/pcfan">View 25 inline fan build examples in the Gallery »</a></li>
            </ul>     
          </section>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
 function getItems(itemsArr) {
  return fetch(
    "https://sb-amz-c75cae75c764.herokuapp.com/bucket-builder/" + itemsArr.join(",")
  ).then(res => res.json());
}

const asins = {
  container: {
    bucket: "B01GETA5J6",
    brute: "B005KDAK8O",
    tote: "B06ZZNLLP5"
  },
  light: {
    cfl: "B00M6SR1JM",
    ufo: "B07312WKX2",
    led: "B086Z826QC",
    ledbulb: "B01BFCGBN6"
  },
  air: {
    pcfan: "B0007Y5HIY",
    linefan: "B07NVLL3L5",
    inline: "B01CTM0H6I"
  },
  lightextra: {
    powersupply: "B015G8E1Q4"
  },
  ropeextra: {
    ledstrip: "B00UI1DVUW"
  }
};

function createItem(asin) {
  return { asin, price: "", title: "", img: "" };
}

export default {
  name: "app",
   head() {
    return {
      title: `BUILDER - Space Buckets: DIY Indoor Gardening`,
      meta: [{ hid: 'description', name: 'description', content: 'Try the Bucket builder to plan your next DIY indoor garden. Mix containers, lighting and airflow and build your bucket!' }],
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },]
    };
  },    
  computed: {
    total() {
      var pricesArr = [];

      for (let i = 0; i < this.items.length; i++) {
        var itemPrice = this.items[i].price;

        itemPrice = parseFloat(itemPrice, 10);

        pricesArr.push(itemPrice);
      }
      var totalNum = pricesArr.reduce(function(a, b) {
        return a + b;
      });
      var retotalNum = totalNum.toFixed(2);
      if (!isNaN(retotalNum)) {
        return retotalNum;
      }
    }
  },
  data() {
    return {
      items: [
        createItem(asins.container.bucket),
        createItem(asins.light.ufo),
        createItem(asins.air.linefan),
         createItem(asins.lightextra.powersupply),
         createItem(asins.ropeextra.ledstrip)
      ],
      num: true,
      loading: '',
      active: {
        container: "bucket",
        light: "ufo",
        airflow: "linefan"
      },
      build: {
        parts: {
          equipped: 1,
          lighting: [{
            rename: "UFO135",
            equipped: 1
          }],
          airflow: [{
            rename: "linefan",
            equipped: 1
          }]
        },
        container: "bucket",
        color: "#151515"
      },
      options: {
        container: {
          bucket: {
            title: "Classic bucket",
            description: "A standard 5gal container: perfect match for UFO LEDs.",
            illus: "illus-bucket"
          },
          brute: {
            title: "Supersized",
            description: "Useful to get more yield and a bigger workspace.",
            illus: "illus-brute"
          },
          tote: {
            title: "Totes",
            description: "Featuring an ideal rectangular shape for powerful lights.",
            illus: "illus-tote"
          }          
        },
        light: {
          cfl: {
            title: "CFL Bulbs",
            description: "The oldschool option. Use them if LEDs are not around.",
            illus: "illus-cfl"            
          },
          ufo: {
            title: "UFO LED",
            description: "The best fit for a plug and play Space Bucket light.",
            illus: "illus-ufo"                  
          },
          led: {
            title: "PAR38 LED",
            description: "Emerging budget LED lighting. Recommended for 5gal builds.",
            illus: "illus-par"
          }
        },
        airflow: {
          pcfan: {
            title: "PC Fans",
            description: "Easy to find and recycle, these provide enough airflow.",
            illus: "illus-pcfan"            
          },
          linefan: {
            title: "110v/220v Fans",
            description: "Better than PC fans, they run at line voltage (110v or 220v).",
            illus: "illus-linefan"                
          },
          inline: {
            title: "Inline Fans",
            description: "The most poweful alternative for airflow and smell control.",
            illus: "illus-inlinefan"                
          }
        }
      }      
    };
  },
  mounted() {
     getItems(this.items.map(item => item.asin)).then(json => {
      const Item = json.ItemsResult.Items;

      Object.keys(Item).forEach((key, index) => {
        this.items[index].price = Item[key].Offers.Listings[0].Price.Amount;
        this.items[index].url = Item[key].DetailPageURL;
        this.items[index].title = Item[key].ItemInfo.Title.DisplayValue;
        this.items[index].brand =
          Item[key].ItemInfo.ByLineInfo.Brand.DisplayValue;
        this.items[index].img = Item[key].Images.Primary.Medium.URL;
      });
    });
  },
  updated() {
    getItems(this.items.map(item => item.asin)).then(json => {
      const Item = json.ItemsResult.Items;

      Object.keys(Item).forEach((key, index) => {
        this.items[index].price = Item[key].Offers.Listings[0].Price.Amount;
        this.items[index].url = Item[key].DetailPageURL;
        this.items[index].title = Item[key].ItemInfo.Title.DisplayValue;
        this.items[index].brand =
          Item[key].ItemInfo.ByLineInfo.Brand.DisplayValue;
        this.items[index].img = Item[key].Images.Primary.Medium.URL;
      });
        this.loading = '';
    });
  },

  methods: {
    clickMaster(type, parent) {
      this.num = false
        this.active[parent] = type;
        console.log(type)
       if (type === 'cfl') { this.build.parts.lighting[0].rename = "CFL23" } 
       if (type === 'ufo') { this.build.parts.lighting[0].rename = "UFO135" } 
       if (type === 'led') { this.build.parts.lighting[0].rename = "PAR38" } 
       if (type === 'pcfan') { this.build.parts.airflow[0].rename = "PCfan" } 
       if (type === 'inline') { this.build.parts.airflow[0].rename = "inline" } 
       if (type === 'linefan') { this.build.parts.airflow[0].rename = "linefan" } 
       if (type === 'tote') { this.build.container = "tote" } 
       if (type === 'bucket') { this.build.container = "bucket" } 
       if (type === 'brute') { this.build.container = "brute" } 
       this.num = true
 


      if (parent === 'container') {
        this.loading = 0;
        this.items[0].asin = asins.container[type];
      }
      if (parent === 'light') {
        this.loading = 1;
        this.items[1].asin = asins.light[type];
      }
      if (parent === 'airflow') {
        this.loading = 2;
        this.items[2].asin = asins.air[type];
      }            
    },    

  }
};
</script>

<style lang="scss" scoped>

p i {
  font-style: normal;
}

body { font-family: sans-serif; }
/* 
.scene {
  width: 320px;
  height: 343px;
    perspective: 200px;
    background: #000;
    position: relative;
    @media screen and (max-width: 700px) {
      width: 100%;
    }
}

.box {
  width: 320px;
  height: 343px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-50px);
  transition: transform 1s;
      @media screen and (max-width: 700px) {
      width: 100%;
    }
}

.plante {
  position: absolute;
  bottom: 0;
  right: 5px;
  z-index: 999;
  transform: translateZ(-60px);
  width: 75px;
  height: auto;
  display: none;
}


.box.show-front  { transform: translateZ( -50px) rotateY(   0deg); }
.box.show-back   { transform: translateZ( -50px) rotateY(-180deg); }
.box.show-right  { transform: translateZ(-150px) rotateY( -90deg); }
.box.show-left   { transform: translateZ(-150px) rotateY(  90deg); }
.box.show-top    { transform: translateZ(-100px) rotateX( -90deg); }
.box.show-bottom { transform: translateZ(-100px) rotateX(  90deg); }

.box__face:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .5;
    background-image: url(data:image/png;base64,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);
}
.box__face {
  position: absolute;
  border: 1px solid #000;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.box__face--front,
.box__face--back {
  width: 100%;
  height: 343px;
    background-image: linear-gradient(0deg,hsla(0,0%,40%,.4) 1px,transparent 0);
    background-size: 1px 11px,11px 11px;
    background-position: -1px -1px,-1px -1px;  
 }

.box__face--right,
.box__face--left {
  width: 100px;
  height: 343px;
  left: 100px;
  background-image: linear-gradient(0deg,hsla(0,0%,40%,.4) 1px,transparent 0);
    background-size: 1px 11px,11px 11px;
    background-position: -1px -1px,-1px -1px;
 }

.box__face--right {
    background-image: linear-gradient(0deg,transparent 90%,#999);
    left: 0;
    right: 0;
  }

.box__face--top,
.box__face--bottom {
  width: 100%;
  height: 100px;
  top: 50px;
  background-image: linear-gradient(90deg,transparent 90%,#666);
    background-size: 11px 1px;
 }

 .box__face--bottom {
    background-image: linear-gradient(90deg,transparent 90%,#999);
  }

 .box__face--right  { background-color: #aaa; }
.box__face--back   { background-color: #555; }
.box__face--left   { background-color: #555; }
.box__face--top    { background-color: #555; }
.box__face--bottom { background-color: #AAA; }

.box__face--front  { transform: rotateY(  0deg) translateZ( 50px); }
.box__face--back   { transform: rotateY(180deg) translateZ( 50px); }

.box__face--right  { transform: rotateY( 90deg) translateZ(0); }
.box__face--left   { transform: rotateY(-90deg) translateZ(150px); }

.box__face--top    { transform: rotateX( 90deg) translateZ(100px); }
.box__face--bottom { transform: rotateX(-90deg) translateZ(243px); }
 */


:root {

}

.scene {
    --bgColor: #042733;
  --textColor: #f8f3dc;
  --depth: 100px;

  --height: 343px;

  --width: 100%;

  --depthTransform: calc(var(--depth) / 2);

  --widthTransform: calc(var(--width) / 2);
  --widthreTransform: calc(var(--widthTransform) - var(--depthTransform));
  width: 100%;
  height: var(--height);
  perspective: 230px;
  transition: perspective 0.2s linear;
   position: relative;
  top: 0;
  left: 0;
  cursor: crosshair;

  background: #000;
}
.box {
  width: 100%;
  height: var(--height);
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(calc(-1 * var(--depthTransform)));

  //pointer-events: none;
}

.box__face {
  position: absolute;
  border: 1px solid #000;
  border-radius: 0px;
  transition: all 0.2s linear;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4) inset;
  background-color: #555;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    background-image: url(data:image/png;base64,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);
  }
}

.box__face--back {
  width: 100%;
  height: var(--height);
  background-image: linear-gradient(to top, rgba(102, 102, 102, 0.4) 1px, transparent 1px);
  background-size: 1px 11px, 11px 11px;
  background-position: -1px -1px, -1px -1px;
 
 
}

.box__face--right,
.box__face--left {
  width: var(--depth);
  height: var(--height);
  left: var(--widthreTransform);
  background-image: linear-gradient(transparent 90%, #999);
  background-size: 1px 11px;
  position: absolute;
  box-shadow: none;
}
.box__face--left {
 
   left: 0;
  background-image: linear-gradient(0deg,hsla(0,0%,40%,.4) 1px,transparent 0);
    background-size: 1px 11px,11px 11px;
    background-position: -1px -1px,-1px -1px; 
}

.box__face--right {
  left: initial;
  right: 0;
 
 background-color: #aaa;
     background-image: linear-gradient(0deg,transparent 90%,#999);

}

.box__face--top {
  position: absolute;
  background-image: linear-gradient(to right, transparent 90%, #666);

  background-size: 11px 1px;
  top: 0;
  background-color: #555555;
 
}

.box__face--bottom {
  position: absolute;
  background-image: linear-gradient(to right, transparent 90%, #999);
  background-size: 11px 1px;
  bottom: 0;
  background-color: var(--grey);
   background: #aaa;

}

.box__face--top,
.box__face--bottom {
  width: 100%;
  height: var(--depth);

}

.box__face--back {
  transform: rotateY(180deg) translateZ(var(--depthTransform));
}
.box__face--right {
  transform: rotateY(90deg) translateZ(var(--depthTransform));
}
.box__face--left {
  transform: rotateY(-90deg) translateZ(var(--depthTransform));
}
.box__face--top {
  transform: rotateX(90deg) translateZ(var(--depthTransform));
}
.box__face--bottom {
  transform: rotateX(-90deg) translateZ(var(--depthTransform));
}

label { margin-right: 10px; }
  em {
    font-style: normal;
    font-weight: bold;
    background: rgba(253,216,53,0.7);
  }

@keyframes progress {
  0% {
    background: #fafafa;
  }
  50% {
    background: #eee;
  }
  100% {
    background: #fafafa;
  }
}
.getting {
  background: #fafafa;
    animation: progress 1s linear infinite;

  * { opacity: 0; }
}

.intro-banner {
  color: #eee;
  border: 1px solid #444;
  border-radius: 2px;
  padding: 15px;
  margin-bottom: 20px;
  h2 {
    font-size: 20px;
    color: #eee;
    padding-bottom: 0px;
    margin-bottom: 10px;
    text-align: left;
  }
  p {
    margin: 0;
    padding-right: 20px;
  }
  a {
    text-decoration: underline;
    color: #eee;
  }
}

 
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  background: #000;
}

.new-builder {
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  padding: 15px;
   max-width: 1343px;  
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.new-builder-accordion {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}
section {
  flex: 1;
  margin: 0 10px 20px 0;
  border-radius: 2px;
  align-self: flex-start;
  background: #fff;
    flex-basis: calc(240px - 10px);
  min-width: 320px;
   @media screen and (max-width: 700px) {
    margin-right: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  span {
    display: block;
    background: #141414;
    border-top: 1px solid #444;
    border-right: 1px solid #444;
    border-left: 1px solid #444;
    color: #eee;
    padding: 10px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    text-transform: uppercase;
    user-select: none;
  }
}
.item-title-container {
  padding: 14px 20px 14px 15px;
  font-size: 14px;
  line-height: 20px;
  user-select: none;
  color: #222;
  cursor: pointer;
  position: relative;
  opacity: 0.75;
  min-height: 101px;
    border-bottom: 1px solid #eee;

  @media screen and (max-width: 700px) {
    border-bottom: 1px solid #eee;

    img { height: 60px !important;width: auto; } 
    .product-title { height: 20px; -webkit-line-clamp: 1; padding-right: 20px; }
   &.active { min-height: 101px; }
  }
  &:hover {
    opacity: 1;

    .product-title {
      text-decoration: underline;
    }
  }
  &.active {
    background: rgba(253, 216, 53, 0.9);
    color: #222;
    cursor: initial;
    opacity: 1;
    pointer-events: none;
    svg {
      opacity: 1;
    }
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 0 10px 8px;
      border-color: transparent transparent transparent #000;
      left: -1px;
      top: 12px;
    }
  }
  &:last-child {
    border-bottom: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  &:after {
    content: "";
    clear: both;
    display: table;
  }
  svg {
    width: 65px;
    height: auto;
    float: left;
    margin-right: 5px;
    margin-left: -5px;
    margin-top: 0;
    opacity: 0.6;
    pointer-events: none;
  }
  .item-title {
    font-size: 16px;
    font-weight: 600;
    padding: 0 0 5px;
    pointer-events: none;
  }
  &.item-title-container-shopping {
    padding: 10px 5px;
    position: relative;
    padding: 10px 5px;
    position: relative;
    display: block;
    text-decoration: none;
    min-height: 63px;
    opacity: 1;
    &:last-child {
      border-radius: 0;
    }
    img {
      height: 42px;
      display: block;
      border-radius: 50%;
      margin: 0 auto;
    }
  }
}

.product-title {
  //height: 40px;
  display: block;
  overflow: hidden;
  padding-right: 30px;
   text-decoration: none;
  color: #0066c0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: bold;
}
.product-title:first-line {
  font-weight: bold;
}
.product-price {
  font-size: 14px;
  color: #a33426;
  font-weight: bold;
  max-width: max-content;
  i {
    font-style: normal;
    position: relative;
  }
  &:before {
    content: "$";
  }
}

.product-brand {
  display: block;
  font-size: 14px;
  font-style: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 112px;
}

.product-image {
  float: left;
  margin-right: 10px;
  width: 42px;
}

.recomend-container {
  //display: flex;
  overflow: auto;
  .img-contain {
    max-width: 320px;
    margin-left: 30px;
    position: relative;
  svg {
    position: absolute;
    width: 20px;
    z-index: 999;
    top: 0;
    bottom: 0;
    height: 100%;
    left: -30px;
    opacity: 0.6;
    transform: scaleX(-1);

  }
  } 
}

.recommended {
    padding: 25px;
    float: left;
    width: calc(100% - 330px);
    @media screen and (max-width: 700px) {
      width: 100%;
    }
    ul { padding-left: 25px; }
    ul li {
      margin-bottom: 5px;
      line-height: 1.6;
    }
    p {
      padding-right: 100px;
      @media screen and (max-width: 700px) {
        padding-right: 20px;
      }
    }
    h3 {
          margin: 30px 0 15px calc(25px * -1);
    padding: 0 0 0 25px;
    padding-top: 25px;
    border-top: 1px dashed #ccc;
    }
 }
.new-builder-accordion section.similar-bucket {
  height: 387px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border-radius: 2px;
}
.similar-bucket a {
  position: relative;
  display: block;
  h2 {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -1px;
    padding-left: 15px;
    text-align: left;
  }
}

.total-price {
  text-align: right;
  width: 320px;
  background: rgba(253, 216, 53, 1);
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 8px 10px 0;
    border-color: transparent #000 transparent transparent;
    right: -1px;
    bottom: 15px;
  }
 
 
  > div:last-child {
        padding: 16px 20px 16px 15px;
  }
  > div:last-child:after {
    content: "BUILD BUDGET";
    font-family: "Montserrat", sans-serif;
    float: left;
    font-size: 14px;
    font-weight: 600;
  }
}

.amazon-btn {
  overflow: auto;
  input[type="submit"],
  button {
    border: 0;
    padding: 10px 15px;
    border-radius: 2px;
    cursor: pointer;
    display: block;
    width: 100%;
    height: 50px;
    background: #fff;
    font-size: 14px;
    &:hover {
      background: #fff;
      color: #0066c0;
      text-decoration: underline;
    }
 
  }
}

section.shopping-list {
  background: #fff;
   display: flex;
  flex-wrap: wrap;
  flex: 1;
  //margin-left: 30px;
  position: relative;
  margin-right: 0;
      @media screen and (max-width: 700px) {
      min-width: 100% !important;
    }
  svg.arrowete {
    position: absolute;
    width: 20px;
    z-index: 999;
    top: 0;
    bottom: 0;
    height: 100%;
    left: -30px;
    opacity: 0.6;
    display: none;
  }
   span {
    flex: none;
    display: block;
    width: 100%;
    padding-left: 25px;
    position: relative;
position: absolute;
    z-index: 9;
    background: transparent;
    border: 0;
    padding: 10px 0;
    
    > i {
      position: absolute;
      right: 20px;
      font-size: 12px;
      font-weight: normal;
      font-style: normal;
      line-height: 20px;
      color: #aaa;
      > i { font-size: 10px;      font-style: normal;
 }
    }    
  }
  .item-title-container.item-title-container-shopping {
    flex: 1;
    opacity: 1;
    flex-basis: calc(320px - 10px);
    &:last-of-type img {
      border-radius: 50%;
    }
  }
}
@media screen and (max-width: 700px) {
section.shopping-list span i { display: none; }
.total-price { width: 100%; }
}

.floater {
  display: flex;
  * {
    flex: 1;
  }
}

.product-brand-container {
  display: flex;
    justify-content: space-between;
    padding-right: 15px;  
  * { 
    flex: 1;
  }
}

.producter {
  //background: #fff;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
     @media screen and (max-width: 700px) {
       width: 100% !important;
     
     }
   span {
    display: block;
    background: #141414;
    border-top: 1px solid #444;
    border-right: 1px solid #444;
    border-left: 1px solid #444;
    color: #eee;
    padding: 10px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    text-transform: uppercase;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
   }
   aside a {
     background: #fff;
   }
}

</style>
