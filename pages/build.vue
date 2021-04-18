 <template>
  <div id="app">
        <div class="search-sidebar">
      <div class="sidebar-content">
        <h1>BUCKET BUILDER</h1>
          <p>Select a combination of bucket parts to create your custom build. Shopping list, similar buckets and general tips will adapt to your preferences.</p>
      </div>
   
    </div>
    <div class="new-builder">
      <div class="new-builder-accordion">
        <section>
          <span>CONTAINER</span>
          <div
            class="item-title-container"
            @click="clickContainer('bucket')"
            :class="{ active: containerActive == 'bucket'}"
          >
            <illus-bucket/>
            <div class="item-title">Classic Bucket</div>
            <div>A standard 5gal container: perfect match for UFO LEDs.</div>
          </div>
          <div
            class="item-title-container"
            @click="clickContainer('brute')"
            :class="{ active: containerActive == 'brute'}"
          >
            <illus-brute/>
            <div class="item-title">Supersized</div>
             <div>Useful to get more yield and a bigger workspace.</div>
          </div>
          <div
            class="item-title-container"
            @click="clickContainer('tote')"
            :class="{ active: containerActive == 'tote'}"
          >
            <illus-tote/>
            <div class="item-title">Totes</div>
            <div>These have an ideal rectangular shape for powerful lighting.</div>
          </div>
        </section>
        <section>
          <span>LIGHTING</span>
          <div
            class="item-title-container"
            @click="clickLight('cfl')"
            data-asin="B00M6SR1JM"
            data-light="cfl"
            :class="{ active: lightActive == 'cfl'}"
          >
            <illus-cfl/>
            <div class="item-title">CFL bulbs</div>
            <div>The cheapest option. Use them if LEDs are not an available.</div>
          </div>

          <div
            class="item-title-container"
            @click="clickLight('ufo')"
            data-asin="B00RWYCRB2"
            data-light="ufo"
            :class="{ active: lightActive == 'ufo'}"
          >
            <illus-ufo/>
            <div class="item-title">UFO LED</div>
            <div>The best fit for a Space Bucket, with plug and play installation.</div>
          </div>
          <div
            class="item-title-container"
            @click="clickLight('led')"
            :class="{ active: lightActive == 'led'}"
          > 
            <illus-led/>
            <div class="item-title">High-Power LED</div>
            <div>Custom chips can result in powerful lighting solutions.</div>
          </div>
        </section>
        <section>
          <span>AIRFLOW</span>
          <div
            class="item-title-container"
            @click="clickAir('pcfan')"
            :class="{ active: airActive == 'pcfan'}"
          >
            <illus-pcfan/>
            <div class="item-title">PC fan</div>
            <div>Easy to find and recycle, and they provide enough airflow.</div>
          </div>
          <div
            class="item-title-container"
            @click="clickAir('linefan')"
            :class="{ active: airActive == 'linefan'}"
          >
            <illus-linefan/>
            <div class="item-title">110v/220v fan</div>
            <div>Better than PC fans, they run at line voltage (110v or 220v).</div>
          </div>
          <div
            class="item-title-container"
            @click="clickAir('inline')"
            data-asin="B004Q2ER5C"
            data-air="inline"
            :class="{ active: airActive == 'inline'}"
          >
            <illus-inlinefan/>
            <div class="item-title">Inline fan</div>
            <div>The most poweful ernative for airflow and smell control.</div>
          </div>
        </section>
      </div>

      <section class="shopping-list">
        <span>SELECTED SHOPPING LIST <i>Product links help support this website <i>♥</i></i></span>

          <a
            v-for="(item, i) in items"
            :key="`section-${i}`"
            :href="`${item.url}`"
            target="_blank"
            class="item-title-container item-title-container-shopping"
          >
            <div class="product-image">
              <img :src="`${item.img}`" />
            </div>
            <div class="product-title">{{item.title}}</div>
            <div class="product-brand-container">
              <i class="product-brand">by {{item.brand}}</i>
              <div class="product-price">{{item.price}}</div>
            </div>
          </a>          
        <div class="total-price">
          <div class="amazon-btn">
            <form method="GET" target="_blank" action="https://www.amazon.com/gp/aws/cart/add.html">
              <input type="hidden" name="AWSAccessKeyId" value="AKIAI365CXUPWOUYITYQ" />
              <input type="hidden" name="AssociateTag" value="sb-post-20" />
              <input type="hidden" :value="items[0].asin" name="ASIN.1" />
              <input type="hidden" value="1" name="Quantity.1" />
              <input type="hidden" :value="items[1].asin" name="ASIN.2" />
              <input type="hidden" value="1" name="Quantity.2" />
              <input type="hidden" :value="items[2].asin" name="ASIN.3" />
              <input type="hidden" value="1" name="Quantity.3" />
              <input type="hidden" :value="items[3].asin" name="ASIN.4" />
              <input type="hidden" value="1" name="Quantity.4" />
              <input type="hidden" :value="items[4].asin" name="ASIN.5" />
              <input type="hidden" value="1" name="Quantity.5" />
              <input type="submit" name="add" value="Add items to Amazon Cart »" />
            </form>
          </div>
          <div>{{total}}</div>

        </div>
      </section>
      <div class="recomend-container">
        <section class="recommended">
          <span>TIPS FOR THIS BUILD</span>
          <div class="recommend-stuff">
            Always follow
            <a target="_blank" href="https://www.reddit.com/r/HandsOnComplexity/comments/18fn67/space_bucket_electrical_safety_tips_posted_to/">SAGs Electrical Safety Guidelines!</a>
          </div>
          <div class="recommend-stuff">
            A
            <a target="_blank" href="https://www.amazon.com/Dr-Meter-LX1330B-Digital-Illuminance-Light/dp/B005A0ETXY/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=spacbuck-20&linkId=4801a3fd2b69a2bfd0e8240f3a70115c&language=en_US">lux meter</a> can be a great tool to measure your builds performance and tweak accordingly. View this <a target="_blank" href="https://www.reddit.com/r/HandsOnComplexity/comments/17nxpy/using_a_lux_meter_as_a_plant_light_meter/">SAG guide</a> for more information.
          </div>          
          <div class="recommend-stuff" v-if="lightActive == 'led' ">
            See
            <a target="_blank" href="https://www.reddit.com/r/HandsOnComplexity">/r/HandsOnComplexity</a> for in-depth knowledge on LEDs.
          </div>
          <div
            class="recommend-stuff"
            v-if="containerActive == 'bucket'"
          >A classic Space Bucket has enough room to fit exactly one plant. The best kind of buckets to build Space Buckets are of the 5gal variety. This size has a very small footprint and allows for one plant cultivation.</div>

         
          <div class="recommend-stuff" v-if="containerActive == 'brute'">
            Supersized containers are great for gardeners that
            <strong>wish to grow bigger plants</strong>
, or for those who feel constrained by the dimensions of the 5gal bucket. There are 10gal, 20gal and 32gal options, which can all be used for Space Buckets.
          </div>

          <div
            class="recommend-stuff"
            v-if="containerActive == 'tote'"
          >You can fit multiple plants inside stacked totes.</div>
          <div
            class="recommend-stuff"
            v-if="containerActive == 'tote'"
          >These rectangular containers are even bigger than supersized Brutes, and usually come in 32gal or 44gal versions. Given their massive size, SB totes need powerful lighting from all sides, with a 300w LED panel being the most recommended option.</div>

          <div
            class="recommend-stuff"
            v-if="lightActive == 'ufo' "
          >LED heatshinks should be installed on the outside of the container when possible.</div>
          <div
            class="recommend-stuff"
            v-if="lightActive == 'ufo' "
          >UFOs come with a plug for easy installation, and they have fans on the back. There are many UFOs available, but most are rebrands of generic products from China. You will find them in 90w, 135w and 180w, all of which can be used in a Space Bucket.</div>
          <div
            class="recommend-stuff"
            v-if="lightActive == 'cfl' "
          >CFL bulbs should be installed facing horizontally.</div>

          <div
            class="recommend-stuff"
            v-if="lightActive == 'cfl' "
          >These kind of bulbs are known to produce more heat inside the bucket. Typical installations require the use of electrical splices, so proceed with caution.</div>
        </section>
        <section class="similar-bucket">

          <nuxt-link to="/u/the-mad-scientist" v-if="containerActive == 'bucket' && airActive == 'linefan' && lightActive == 'ufo'">
            <img src="/builds/the-mad-scientist/cover.jpg" />
            <h2>THE MAD SCIENTIST</h2>
          </nuxt-link>

          <nuxt-link to="/u/ekrof" v-if="containerActive == 'bucket' && airActive == 'pcfan' && lightActive == 'cfl'">
            <img src="/builds/ekrof/cover.jpg" />
            <h2>EKROF SPACE BUCKET</h2>
          </nuxt-link>

          <nuxt-link to="/u/SantiagoSentMe" v-if="containerActive == 'bucket' && airActive == 'linefan' && lightActive == 'cfl'">
            <img src="/builds/SantiagoSentMe/cover.jpg" />
            <h2>SANTIAGO'S BUILD</h2>
          </nuxt-link>

          <nuxt-link to="/u/levitatingchicken" v-if="containerActive == 'bucket' && airActive == 'inline' && lightActive == 'cfl'">
            <img src="/builds/levitatingchicken/cover.jpg" />
            <h2>LEVITATING BUCKET</h2>
          </nuxt-link>

          <nuxt-link to="/u/Kazel93" v-if="containerActive == 'bucket' && airActive == 'pcfan' && lightActive == 'ufo'">
            <img src="/builds/Kazel93/cover.jpg" />
            <h2>THE BULLET</h2>
          </nuxt-link>

          <nuxt-link to="/u/ranger737" v-if="containerActive == 'bucket' && airActive == 'inline' && lightActive == 'ufo'">
            <img src="/builds/ranger737/cover.jpg" />
            <h2>RANGER BUILD</h2>
          </nuxt-link>

          <nuxt-link to="/articles/no-solder" v-if="containerActive == 'bucket' && airActive == 'pcfan' && lightActive == 'led'">
            <img src="/builds/no-solder-led/cover.jpg" />
            <h2>NO SOLDER LED</h2>
          </nuxt-link>

          <nuxt-link to="/u/ekrof-vero" v-if="containerActive == 'bucket' && airActive == 'linefan' && lightActive == 'led'">
            <img src="/builds/ekrof-vero/cover.jpg" />
            <h2>EKROF VERO LED</h2>
          </nuxt-link>

          <nuxt-link to="/u/Mr_Markheim" v-if="containerActive == 'bucket' && airActive == 'inline' && lightActive == 'led'">
            <img src="/builds/Mr_Markheim/cover.jpg" />
            <h2>MARKHEIM BUCKET</h2>
          </nuxt-link>

          <nuxt-link to="/u/buckettoss" v-if="containerActive == 'brute' && airActive == 'inline' && lightActive == 'ufo'">
            <img src="/builds/buckettoss/cover.jpg"/>
            <h2>TOSS BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/Gosu-Sheep" v-if="containerActive == 'brute' && airActive == 'pcfan' && lightActive == 'ufo'">
            <img src="/builds/Gosu-Sheep/cover.jpg"/>
            <h2>GOSU BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/SpaceBidet" v-if="containerActive == 'brute' && airActive == 'linefan' && lightActive == 'ufo'">
            <img src="/builds/SpaceBidet/cover.jpg" />
            <h2>BIDET BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/Southernspaceweed" v-if="containerActive == 'brute' && airActive == 'pcfan' && lightActive == 'cfl'">
            <img src="/builds/Southernspaceweed/cover.jpg" />
            <h2>SOUTHERN BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/shaddo" v-if="containerActive == 'brute' && airActive == 'linefan' && lightActive == 'cfl'">
            <img src="/builds/shaddo/cover.jpg" />
            <h2>SHADDO'S BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/G_DuBs_brute" v-if="containerActive == 'brute' && airActive == 'inline' && lightActive == 'cfl'">
            <img src="/builds/G_DuBs_brute/cover.jpg" />
            <h2>DUBS BRUTE BUILD</h2>
          </nuxt-link>

          <nuxt-link to="/u/bruteled" v-if="containerActive == 'brute' && airActive == 'pcfan' && lightActive == 'led'">
            <img src="/builds/bruteLED/cover.jpg" />
            <h2>SIMPLE LED BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/doublejallday_bin" v-if="containerActive == 'brute' && airActive == 'inline' && lightActive == 'led'">
            <img src="/builds/doublejallday_bin/cover.jpg"/>
            <h2>GARBO LED BUILD</h2>
          </nuxt-link>

          <nuxt-link to="/u/HaplessAstronaut" v-if="containerActive == 'brute' && airActive == 'linefan' && lightActive == 'led'">
            <img src="/builds/HaplessAstronaut/cover.jpg" />
            <h2>HYDRO LED BRUTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/getitguh" v-if="containerActive == 'tote' && airActive == 'pcfan' && lightActive == 'cfl'">
            <img src="/builds/getitguh/cover.jpg" />
            <h2>GETGUH'S TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/SpaceBucket_Sue" v-if="containerActive == 'tote' && airActive == 'linefan' && lightActive == 'cfl'">
            <img src="/builds/SpaceBucket_Sue/cover.jpg" />
            <h2>SUE SPACE TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/Arrrr32" v-if="containerActive == 'tote' && airActive == 'inline' && lightActive == 'cfl'">
            <img src="/builds/Arrrr32/cover.jpg" />
            <h2>PIRATE TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/dangerzone710" v-if="containerActive == 'tote' && airActive == 'pcfan' && lightActive == 'ufo'">
            <img src="/builds/dangerzone710/cover.jpg" />
            <h2>DANGERZONE TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/spacetotebuilder" v-if="containerActive == 'tote' && airActive == 'linefan' && lightActive == 'ufo'">
            <img src="/builds/spacetotebuilder/cover.jpg" />
            <h2>SPACE TOTE v3</h2>
          </nuxt-link>

          <nuxt-link to="/u/funforpun" v-if="containerActive == 'tote' && airActive == 'inline' && lightActive == 'ufo'">
            <img src="/builds/funforpun/cover.jpg"/>
            <h2>PUN'S EURO BOX</h2>
          </nuxt-link>

          <nuxt-link to="/u/vahpors-tote" v-if="containerActive == 'tote' && airActive == 'pcfan' && lightActive == 'led'">
            <img src="/builds/vahpors-tote/cover.jpg" />
            <h2>VAHPOR'S TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/SpaceBucketFu" v-if="containerActive == 'tote' && airActive == 'linefan' && lightActive == 'led'">
            <img src="/builds/SpaceBucketFu/cover.jpg"/>
            <h2>STRAWBERRY TOTE</h2>
          </nuxt-link>

          <nuxt-link to="/u/cottonparachute" v-if="containerActive == 'tote' && airActive == 'inline' && lightActive == 'led'">
            <img src="/builds/cottonparachute/cover.jpg" />
            <h2>COTTON'S TOTE</h2>
          </nuxt-link>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
function getItems(itemsArr) {
  return fetch(
    "https://bucket-builder.herokuapp.com/bucket-builder/" + itemsArr.join(",")
  ).then(res => res.json());
}

const asins = {
  container: {
    bucket: "B008DRMUS2",
    brute: "B005KDAK8O",
    tote: "B06ZZNLLP5"
  },
  light: {
    cfl: "B00M6SR1JM",
    ufo: "B07312WKX2",
    led: "B01DBZHUXA",
    ledbulb: "B01BFCGBN6"
  },
  air: {
    pcfan: "B0007Y5HIY",
    linefan: "B07SDDSCY1",
    inline: "B01CTM0H6I"
  },
  lightextra: {
    powersupply: "B015G8E1Q4"
  },
  ropeextra: {
    ledstrip: "B01D2CUNQ8"
  }
};

function createItem(asin) {
  return { asin, price: "", title: "", img: "" };
}

export default {
  name: "app",
  components: {},
  head() {
    return {
      title: `Space Buckets - BUILDER`,
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
      containerActive: "bucket",
      lightActive: "ufo",
      airActive: "linefan"
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
    });
  },

  methods: {
    clickContainer(type) {
      this.containerActive = type;
      this.items[0].asin = asins.container[type];
    },
    clickLight(type) {
      this.lightActive = type;
      this.items[1].asin = asins.light[type];
    },
    clickAir(type) {
      this.airActive = type;
      this.items[2].asin = asins.air[type];
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  padding-left: 250px;
  @media (max-width: 980px) {
    padding-left: 0;
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
  margin: 15px auto;
  overflow: hidden;
  position: relative;
  padding: 0 15px;
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
  margin: 0 auto;
  max-width: 960px;
}
section {
  flex: 1;
  margin: 0 10px 15px 0;
  border-radius: 2px;
  align-self: flex-start;
  background: #fff;
  flex-basis: calc(320px - 10px);
  @media screen and (max-width: 630px) {
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
  }
}
.item-title-container {
  padding: 14px 20px 14px 15px;
  font-size: 14px;
  line-height: 20px;
  border-right: 1px solid #eee;
  user-select: none;
  color: #222;
  cursor: pointer;
  position: relative;
  opacity: 0.8;
  &:nth-of-type(1) {
    border-bottom: 1px solid #eee;
  }
  &:nth-of-type(2) {
    border-bottom: 1px solid #eee;
  }

  &:nth-of-type(3) {
    border-right: 0;
        border-bottom: 1px solid #eee;

  }
  @media screen and (max-width: 630px) {
        border-bottom: 1px solid #eee;

    img { height: 60px !important;width: auto; } 
    .product-title { height: 20px; -webkit-line-clamp: 1; padding-right: 20px; }
   &.active { min-height: 94px; }
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
    float: right;
    margin-right: -5px;
    margin-left: 5px;
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
    &:last-child {
      border-bottom: 1px solid #eee;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    img {
      height: 75px;
      display: block;
      border-radius: 50%;
      margin: 0 auto;
    }
  }
}

.product-title {
  height: 40px;
  display: block;
  overflow: hidden;
  padding-right: 30px;
  line-height: 19px;
  text-decoration: none;
  color: #0066c0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
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
  margin-right: 12px;
  width: 75px;
}

.recommend-stuff {
  font-size: 15px;
  padding: 10px 40px 10px 15px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border: 0;
  }
  &:before {
    content: "";
    background: #000;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 3px;
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
  background: rgba(253, 216, 53, 0.9);
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
  > div:last-child:before {
    content: "$";
  }
  > div:first-child {     border-bottom: 1px solid #eee;
 }
  > div:last-child {
        padding: 14px 15px 13px;
  }
  > div:last-child:after {
    content: "BUILD TOTAL";
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
      background: #fafafa;
      color: #0066c0;
      text-decoration: underline;
    }
 
  }
}

section.shopping-list {
  background: #fff;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto 15px;
  span {
    flex: none;
    display: block;
    width: 100%;
    text-align: left;
    padding-left: 25px;
    position: relative;
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
@media screen and (max-width: 630px) {
section.shopping-list span i { display: none; }
.total-price { width: 100%; }
}
.recomend-container {
  margin: 10px;
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  section {
    flex: 1;
  }
  section:first-child {
    max-width: 650px;
    min-width: 320px;

  }
  section:last-child {
    flex-basis: 300px;
    max-width: 300px;
    background: transparent;
    border-radius: 2px;
    overflow: hidden;
  }
}
</style>
