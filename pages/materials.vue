 <template>
  <div id="app">
    <div class="">
     <div style="padding: 10px 15px 20px;background: #fff;">
       <br>

      <p style="background:#fafafa;">
        Welcome! You have reached the home of the Space Buckets movement. We're an
        <a href="https://www.reddit.com/r/SpaceBuckets">open community of indoor gardeners</a> who like to build DIY grow chambers. Space Buckets are easy to make, and only require common items for construction.
        <strong>Total cost is about $100</strong>, depending on what materials you can recycle. Your support is appreciated! Amazon suggestions help maintain this site.
      </p>
      <p style="background:#fafafa;">
        <strong>This website is built to be explored</strong>.
        <a href="https://spacebuckets.com/gallery/">In our Gallery</a> you'll find over 300 examples of great setups: the style of the containers is variable, but their gardening function is the same. Ready to start your build?
        <strong>
          <a href="https://spacebuckets.com/template">Take the next step</a>
        </strong> with the DIY guide. Feeling adventurous?
        <a href="https://spacebuckets.com/random">Try a random bucket!</a>
      </p>
    </div> 


    <div class="search-sidebar">
      <div class="sidebar-content">
        <h2>MATERIALS</h2>
        <p>Select categories to filter the products. Amazon links help support this website ♥</p>
      </div>
      <div class="search-filters">
        <input type="radio" name="toggle" id="first" checked />
        <label for="first">
          <div>Lighting</div>
          <div>
            <div :class="{ active: filterActive == 'cfl'}" @click="selectFilter('cfl');">CFL</div>
            <div :class="{ active: filterActive == 'led'}" @click="selectFilter('led');">LED</div>
            <div :class="{ active: filterActive == 'ufo'}" @click="selectFilter('ufo');">UFO</div>
            <div :class="{ active: filterActive == 'cob'}" @click="selectFilter('cob');">COB</div>
          </div>
        </label>
        <input type="radio" id="second" name="toggle" />

        <label for="second">
          <div>Container</div>
          <div>
            <div
              :class="{ active: filterActive == 'buckets'}"
              @click="selectFilter('buckets');"
            >Buckets</div>
            <div :class="{ active: filterActive == 'bins'}" @click="selectFilter('bins');">Bins</div>
            <div
              :class="{ active: filterActive == 'brutes'}"
              @click="selectFilter('brutes');"
            >Brutes</div>
            <div :class="{ active: filterActive == 'totes'}" @click="selectFilter('totes');">Totes</div>
          </div>
        </label>
        <input type="radio" id="third" name="toggle" />

        <label for="third">
          <div>Airflow</div>
          <div>
            <div
              :class="{ active: filterActive == 'pcfans'}"
              @click="selectFilter('pcfans');"
            >PC Fans</div>
            <div :class="{ active: filterActive == 'line'}" @click="selectFilter('line');">Line</div>
            <div
              :class="{ active: filterActive == 'inline'}"
              @click="selectFilter('inline');"
            >Inline</div>
          </div>
        </label>
        <input type="radio" id="fourth" name="toggle" />

        <label for="fourth">
          <div>Extras</div>
          <div>
            <div :class="{ active: filterActive == 'tools'}" @click="selectFilter('tools');">Tools</div>
            <div
              :class="{ active: filterActive == 'monitoring'}"
              @click="selectFilter('monitoring');"
            >Monitoring</div>
          </div>
        </label>
      </div>
      <div class="total-price" style="display:none">
        <div class="wishlist-container">
          <div>Wishlist</div>
          <div class="wishlist-items"></div>
          <div class="amazon-btn">
            <form method="GET" target="_blank" action="https://www.amazon.com/gp/aws/cart/add.html">
              <!--        <input type="hidden" name="AWSAccessKeyId" value="AKIAI365CXUPWOUYITYQ" />
              <input type="hidden" name="AssociateTag" value="sb-post-20" />
              <input type="hidden" :value="wishlist[0].asin" name="ASIN.1" />
              <input type="hidden" value="1" name="Quantity.1" />
              <input type="hidden" :value="wishlist[1].asin" name="ASIN.2" />
              <input type="hidden" value="1" name="Quantity.2" />
              <input type="hidden" :value="wishlist[2].asin" name="ASIN.3" />
              <input type="hidden" value="1" name="Quantity.3" />
              <input type="hidden" :value="wishlist[3].asin" name="ASIN.4" />
              <input type="hidden" value="1" name="Quantity.4" />
              <input type="hidden" :value="wishlist[4].asin" name="ASIN.5" />
              <input type="hidden" value="1" name="Quantity.5" />
              -->
              <input type="submit" name="add" value="Add items to Amazon Cart »" />
            </form>
          </div>
        </div>

        <!--           <div>{{total}}</div>
        -->
      </div>
    </div>

    <section class="shopping-list">
      <a
        v-for="(item, i) in filterItems"
        :key="`section-${i}`"
        :href="`${item.url}`"
        target="_blank"
        class="item-title-container item-title-container-shopping"
      >
        <div class="product-title">{{item.title}}</div>
        <div class="product-brand-container">
          <i class="product-brand">by {{item.brand}}</i>

          <div class="product-price">{{item.price}}</div>
        </div>
        <div class="product-image">
          <img :src="`${item.img}`" />
        </div>
        <!--         <div class="product-wish" @click.prevent="toggleWishlist(item)">{{ wishlist.includes(item) ? "Remove from wishlist" : "Add to wishlist" }}</div>
        -->
      </a>
    </section>
        <div class="shopping-diy-container">
      <div class="shopping-diy">
        <div class="shopping-header">
          <div class="shopping-desc">
            <span>
              <a href="https://spacebuckets.com/u/DebaucherousEggplant">UFO Space Bucket</a>
            </span>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Container</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/Gallon-White-Plastic-Bucket-Only/dp/B071WCRN9W/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=spacbuck-20&linkId=90500158f356652450ee49b240ed130d"
            >5gal bucket</a>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Lighting</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/dp/B077YK18TP/ref=as_li_ss_tl?&th=1&psc=1&linkCode=ll1&tag=spacbuck-20&linkId=cb67c296dd4063215169e07ad58010cd"
            >150w UFO LED</a>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Side-Lighting</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/LEDMO-Flexible-Daylight-Waterproof-brightness/dp/B01339G2F6/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=spacbuck-20&linkId=1740e670056b153e79a7991b54d3ee7b"
            >5630SMD LEDs</a>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Airflow</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/Cooler-Master-Bearing-Cooling-Computer/dp/B002R9RBO0/ref=as_li_ss_tl?s=electronics&ie=UTF8&qid=1478903449&sr=1-5&keywords=pc+fan&linkCode=ll1&tag=sb-material-20&linkId=1789431129178350001c6e1f6ad2ab8b"
            >12v PC Fan</a>
          </div>
        </div>
      </div>

      <div class="shopping-diy">
        <div class="shopping-header">
          <div class="shopping-desc">
            <span>
              <a href="https://spacebuckets.com/bruteLED">Brute Bucket</a>
            </span>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Container</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/Rubbermaid-Commercial-FG261000GRAY-Heavy-Duty-Container/dp/B005KD72CG/ref=as_li_ss_tl?ie=UTF8&qid=1478901138&sr=8-2&keywords=brute+container&linkCode=ll1&tag=sb-material-20&linkId=3a9cf61fda461ae10d6187460934e5b1"
            >10gal brute</a>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Lighting</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/dp/B077YK18TP/ref=as_li_ss_tl?&th=1&psc=1&linkCode=ll1&tag=spacbuck-20&linkId=cb67c296dd4063215169e07ad58010cd"
            >180w UFO LED</a>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Side-Lighting</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/LEDMO-Flexible-Daylight-Waterproof-brightness/dp/B01339G2F6/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=spacbuck-20&linkId=1740e670056b153e79a7991b54d3ee7b"
            >5630SMD LEDs</a>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Airflow</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/dp/B001TJUX30/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=sb-material-20&linkId=155a84bced18d9ff291aaae882fc2849"
            >110v/220v Fan</a>
          </div>
        </div>
      </div>

      <div class="shopping-diy">
        <div class="shopping-header">
          <div class="shopping-desc">
            <span>
              <a href="https://spacebuckets.com/GNKtote">Space Tote</a>
            </span>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Container</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/dp/B001B1C4G0/ref=as_li_ss_tl?_encoding=UTF8&psc=1&linkCode=ll1&tag=sb-material-20&linkId=d9984c4f6e42838ad9660be0cace8051"
            >20gal tote</a>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Lighting</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/MarsHydro-Mars300-Spectrum-Hydroponic-Greenhouse/dp/B00XC3LBI2/ref=as_li_ss_tl?ie=UTF8&qid=1478903178&sr=8-4&keywords=300w+led&linkCode=ll1&tag=sb-material-20&linkId=224b8515b0b34c07b1d62c73fbd01426"
            >300w UFO LED</a>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Side-Lighting</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/LEDMO-Flexible-Daylight-Waterproof-brightness/dp/B01339G2F6/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=spacbuck-20&linkId=1740e670056b153e79a7991b54d3ee7b"
            >5630SMD LEDs</a>
          </div>
        </div>
        <div class="shopping-item-container">
          <div class="shopping-item-cat">Airflow</div>
          <div class="shopping-item">
            <a
              href="https://www.amazon.com/dp/B001TJUX30/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=sb-material-20&linkId=401cc62caa91f14822bffbdd3cfd4de3"
            >110v/220v Fan</a>
          </div>
        </div>
      </div>
          </div>

    </div>
  </div>
</template>
    <script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=8235a492-f9c9-44c2-b5a3-fde706d65bf4"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js" integrity="sha512-3oappXMVVac3Ge3OndW0WqpGTWx9jjRJA8SXin8RxmPfc8rg87b31FGy14WHG/ZMRISo9pBjezW9y00RYAEONA==" crossorigin="anonymous"></script>
<script>

const asins = {
  cfl: ["B00M6SR1JM", "B005LFME8K", "B071FCPR3C","B002KEL4EA", "B071HLLMRF","B00OGPF85M","B088B3G7YN","B07BFNLJDL","B005TIDDLG","B073ZMLZGW"],
  led: ["B01MZBXL28","B0758GXHQK", "B07H9W1TSZ", "B07NNT3G7J", "B07NNZXGMW", "B07428QCCZ","B076WTFZ8W","B07BRKG7X1","B078B8HGRR","B0744GY7TP"],
  ufo: [
    "B07315FTRS",
    "B07VRPCBRL",
    "B07D3LW3MH",
    "B07VL8FZS1",
    "B07P8L4LLH",
    "B07KR2S65L",
    "B01B4GQ6MO",
    "B07T47G2L2",
    "B07VRNBLTR",
    "B08B8T8C72"
  ],
  cob: ["B073QXXNN8","B073QYT1GF","B0083KMCQ4","B01DJ41EQ2", "B00CZ75TWA", "B01DBZHUXA","B01NBXZUS3","B01D1LD68C","B07SR26W5Q","B07T1YJN6L"],
  buckets: ["B079H1HVZ5", "B01BLKPDHM", "B01GETA5J6", "B071WCRN9W"],
  brutes: ["B00RD9E340", "B005KDALGA", "B005V9B3HY", "B005KDAQ3I"],
  totes: ["B015DZJNOA", "B08575M7ZK", "B001B1C4G0", "B00V87CQYM"],
  bins: ["B01GZ1UT8A", "B001RMOA42"],
  pcfans: ["B0007Y5HIY", "B002QVFN7G", "B002R9RBO0", "B07R52RY3P"],
  line: ["B009OXDAWY", "B004YTSB7C", "B07SDDSCY1", "B07GTQ1TQP", "B073PVPSRR"],
  inline: ["B01CTM0JF2", "B01C82SYZ0", "B07B3RNW35", "B01M7S46YZ"],
  tools: [
    "B00UOU6OVU",
    "B00009MDBU",
    "B0714FFG4F",
    "B00QLBVP74",
    "B005A0ETXY",
    "B01JKPS44E",
    "B002L3RUVG",
    "B00BDGHJK4",
    "B00JXOKQVW",
  ],
  monitoring: [
    "B00C9NWMYS",
    "B0131V0WYI",
    "B01M0BJ139",
    "B00K9M6PZ8",
    "B01F6GJVL6",
    "B00SK6932C",
  ],
};

function createItem(asin, type) {
  return { asin, price: "", title: "", img: "", type: "" };
}

function itemFromAmazon(json) {
  return {
    asin: json.ASIN,
    price: json.Offers.Listings[0].Price.Amount,
    url: json.DetailPageURL,
    title: json.ItemInfo.Title.DisplayValue,
    /*     brand: json.ItemInfo.ByLineInfo?.Brand?.DisplayValue ?? 
           json.ItemInfo.ByLineInfo?.Manufacturer?.DisplayValue ?? "Unknown", */
    img: json.Images.Primary.Large.URL,
  };
}

const cachedItems = [];

async function fetchItems(itemsArr) {
  const res = await fetch(
    "https://bucket-builder.herokuapp.com/bucket-materials/" +
      itemsArr.join(",")
  );
  const json = await res.json();
  return Object.values(json.ItemsResult.Items);
}

// This is caching requested items
async function getItems(asins) {
  let items = cachedItems.filter((ci) => asins.includes(ci.asin));
  const missingAsins = asins.filter(
    (asin) => !items.some((item) => item.asin === asin)
  );
  if (missingAsins.length > 0) {
    const newAmazonItems = await fetchItems(missingAsins);
    const newItems = newAmazonItems.map(itemFromAmazon);
    cachedItems.push(...newItems);
    items = [...newItems, ...items];
  }
  return items;
}

async function searchItems(query) {
  const res = await fetch(
    "https://bucket-builder.herokuapp.com/bucket-search/" + query
  );
  const json = await res.json();
  return Object.values(json.ItemsResult.Items).map(itemFromAmazon);
}

export default {
  name: "app",
  data() {
    return {
      filterItems: [],
      wishlist: [],
      filterActive: "",
    };
  },
  mounted() {
    this.selectFilter("ufo");
  },
  head() {
    return {
      title: `Space Buckets - MATERIALS`,
    };
  },  
  methods: {
    toggleWishlist(item) {
      if (this.wishlist.includes(item)) {
        this.wishlist.splice(
          this.wishlist.findIndex((i) => i === item),
          1
        );
      } else {
        this.wishlist.push(item);
      }
    },
    async selectSearch(query) {
      this.filterItems = await searchItems(query);
      this.filterActive = "search";
    },
    async selectFilter(type) {
      this.filterItems = await getItems(asins[type]);
      this.filterActive = type;
    },
  },
};
</script>

<style lang="scss" scoped>
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
 // background: #000;
}

.item-title-container {
  padding: 14px 20px 14px 15px;
  font-size: 14px;
  line-height: 20px;
  user-select: none;
  color: #222;
  cursor: pointer;
  position: relative;
  padding: 0;
  position: relative;
  display: block;
  text-decoration: none;
  flex: 1;
  opacity: 1;
  flex-basis: calc(320px - 10px);
  margin: 0 20px 20px 0;
  border-radius: 2px;
  background: #fff;
  max-width: 250px;
  height: 300px;
  img {
    display: block;
    margin: 0 auto;
    width: 200px;
    height: auto;
    padding: 12px;
  }  
      @media (max-width: 980px) {
flex-basis: calc(50% - 10px);
    max-width: calc(50% - 10px);
    margin: 5px;
    height: auto;
    img { width: 100% }
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
}

.product-title {
  height: 50px;
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
  padding: 12px;
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
  color: #888;
}

.product-image {
  height: 195px;
  overflow: hidden;
}

section.shopping-list {
  display: flex;
  flex-wrap: wrap;
  margin: 15px auto;
  max-width: 1400px;
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
      > i {
        font-size: 10px;
        font-style: normal;
      }
    }
  }
}

#app {
  align-items: flex-start;
  padding-left: 250px;
  @media (max-width: 980px) {
    padding-left: 0;
  }
}

.search-filters > div {
  border-bottom: 1px solid rgba(52, 53, 54, 0.31373);
  > div {
    padding-left: 0px;
    font-family: "montserrat";
    font-size: 16px;
    > div {
      cursor: pointer;
      &.active {
        background: rgba(253, 216, 53, 0.9);
        color: #222;
      }
      &:hover {
        background: #333;
      }
      &.active:hover {
        background: rgba(253, 216, 53, 0.9);
        color: #222;
      }
    }
  }
}

.total-price {
  padding: 10px;
}

.product-brand-container {
  display: flex;
  justify-content: space-between;
  padding: 2px 12px;
}

.product-wish {
  border-top: 1px solid rgba(52, 53, 54, 0.31373);
  padding: 5px 12px;
  color: #888;
}

.search-filters {
  color: #eee;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  input,
  label > div + div {
    display: none;
  }
  input:checked + label > div + div {
    display: block;
  }
  input:checked + label > div:first-child {
    padding: 10px 0;
    opacity: 1;
  }
  label > div:first-child {
    padding: 10px 0 0 0;
    &:hover {
      color: #fdd835;
    }
    + div {
      padding: 0 15px;
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

.amazon-btn input {
  background: transparent;
  color: #eee;
  border: 0;
  padding: 10px 0;
}

.shopping-text-container {
  width: 39%;
  display: inline-block;
}
.shopping-table-container {
  width: 55%;
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  border-radius: 2px;
}
@media only screen and (max-width: 1150px) {
  .shopping-text-container {
    width: 100%;
  }
  .shopping-table-container {
    width: 100%;
    display: none;
  }
}
.shopping-table-container .shopping-table-row {
  font-size: 0;
}
.shopping-table-container .shopping-table-row div {
  width: 17%;
  text-align: center;
  font-size: 14px;
  display: inline-block;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  position: relative;
  line-height: 42px;
}
.shopping-table-container .shopping-table-row div a {
  text-decoration: none;
  line-height: 42px;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
}
.shopping-table-container .shopping-table-row div a:hover {
  background: #eee;
}
.shopping-table-container .shopping-table-row div:first-child {
  background: #000;
  color: #eee;
  width: 15%;
  border-bottom: 1px solid #333;
}
.shopping-table-container .shopping-table-row.titles div {
  background: #000;
  color: #eee;
  line-height: 30px;
  border-right: 1px solid #333;
}
.post__content {
  background: #000;
}
.searcher-content-container {
  background: #000 url("https://i.imgur.com/FYNqk6h.jpg");
  max-width: 1215px;
  margin: 0 auto;
}
.searcher-content-container:after {
  content: "";
  display: table;
  clear: both;
}

.single-subtitle {
  display: none;
}

.search-container {
  position: relative;
  width: 300px;
  float: left;
  background: #212121;
  padding: 15px;
  height: auto;
  margin: 10px 20px 10px 0px;
}

@media screen and (max-width: 600px) {
  .search-actions {
    margin-top: 15px;
  }
  .search-container {
    width: calc(100% - 20px);
    margin: 0 10px 10px;
    padding: 10px 15px 15px;
  }
}

.search-container #filter-count,
.search-container h5 {
  color: #fff !important;
}
.search-container h5 {
  line-height: 20px;
  margin: 10px 0px 5px;
  font-weight: normal;
  font-size: 18px;
}
.search-container hr {
  margin: 15px 0 20px;
}
.search-container input {
  width: 100%;
  height: 35px;
  border: 0;
  border-radius: 2px;
  padding-left: 34px;
  padding-right: 65px;
  font-size: 16px;
}

.searcher-content-container h2 {
  color: #fff;
  font-size: 18px;
  font-family: montserrat;
  text-align: center;
  margin: 10px 10px 0;
  background: #000;
  padding: 10px;
  display: none;
}
.search-container input:focus {
  outline: 0;
}
.search-container input:focus ~ .search-logo {
  color: #111;
}
.search-container .search-logo {
  position: absolute;
  top: 14px;
  left: 22px;
  line-height: 35px;
  transform: rotate(-45deg);
  font-size: 22px;
  color: #888;
  transition: 0.2s ease-in;
}
.search-container .search-button {
  position: absolute;
  top: 17px;
  cursor: pointer;
  right: 17px;
  height: 31px;
  font-size: 13px;
  line-height: 30px;
  background: #446cb3;
  border-radius: 2px;
  color: #fff;
  border: 0;
  transition: 0.2s ease-in;
}
.search-container .search-button:hover {
  background: #365690;
}

.search-actions div {
  overflow: auto;
}
.search-actions div div {
  padding: 0px;
  color: #fff;
  line-height: 32px;
  width: 50%;
  float: left;
  margin: 0px;
  padding-left: 5px;
  font-size: 16px;
  border-radius: 2px;
  cursor: pointer;
}
.search-actions div div:hover {
  background: #666;
}

#filter-count {
  display: none;
}

.products-container {
  text-align: center;
  font-size: 0;
  float: left;
  width: calc(100% - 320px);
}

@media screen and (max-width: 600px) {
  .products-container {
    width: 100%;
  }
}

.products-container .single-product {
  width: 200px;
  font-size: 14px;
  margin: 10px;
  background: #fff;
  border-radius: 2px;
  min-height: 280px;
  display: inline-block;
  vertical-align: top;
}

@media screen and (max-width: 600px) {
  .products-container .single-product {
    width: calc(50% - 10px);
    margin: 5px;
    min-height: 248px;
  }
  .products-container {
    padding: 0 5px;
  }
  .products-container .single-product .single-product-title {
    padding: 12px 15% 0px 15px !important;
  }
}

.products-container .single-product.active {
  display: inline-block;
}
.products-container .single-product.inactive {
  display: none;
}
.products-container .single-product .single-product-title {
  padding: 12px 24% 0px 15px;
  font-size: 16px;
  text-align: left;
}
.products-container .single-product img {
  width: 100%;
  padding: 10px;
  position: relative;
  top: 8px;
}
.products-container .single-product {
  text-decoration: none !important;
}
.single-product-subtitle {
  text-align: left;
  padding-left: 15px;
  color: #999;
}
@media screen and (max-width: 1160px) {
  body > article > p {
    width: 100% !important;
  }
}

.shopping-diy-container {
  text-align: center;
  background:  url("https://i.imgur.com/FYNqk6h.jpg");
  padding: 15px 0 0px;
}
.shopping-diy {
  background-color: #fff;
  width: 300px;
  margin: 10px;
  border-radius: 4px;
  display: inline-block;
  text-align: left;
  padding-bottom: 10px;
}
@media screen and (max-width: 600px) {
  .shopping-diy {
    width: calc(100% - 20px);
  }
}
.shopping-header a,
.shopping-item a {
  text-decoration: none !important;
}
.shopping-header a {
  color: #fff;
}

.shopping-item a:hover {
  text-decoration: underline !important;
}
.shopping-header {
  background: #000;
  padding: 10px 15px 10px;
  margin-bottom: 5px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  font-family: "montserrat";
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}
.shopping-diy-container hr {
  border: 0;
  border-bottom: 1px solid #ccc;
}
.shopping-header:after {
  content: "";
  display: table;
  clear: both;
}
.shopping-header img {
  width: 85px;
  box-shadow: 0 0 2px #202020;
  border-radius: 50%;
  float: left;
}
.shopping-header .shopping-desc {
  width: 100%;
  float: left;
}
.shopping-header span {
  display: block;
}
.poste-viewer {
  display: none;
}
.shopping-item-container:after {
  content: "";
  display: table;
  clear: both;
}

.shopping-item-container {
  line-height: 28px;
  padding: 0 15px;
}

.shopping-item-container .shopping-item {
  float: left;
  width: 50%;
}
.shopping-item-container .shopping-item-cat {
  float: left;
  width: 50%;
}

.masonred {
  column-count: 2;
  .single-content {
    padding: 15px;
    background: #fff;
  }
}

</style>
