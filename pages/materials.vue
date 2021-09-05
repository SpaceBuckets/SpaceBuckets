 <template>
    <div class="gallery-container">
     <div style="padding: 10px 15px 20px;background: #fafafa;">
      <br>
      <p>
        Welcome! You have reached the home of the Space Buckets movement. We're an <a href="https://www.reddit.com/r/SpaceBuckets">open community of indoor gardeners</a> who like to build DIY grow chambers. Space Buckets are easy to make, and only require common items for construction.
        <strong>Total cost is about $100</strong>, depending on what materials you recycle. Your support is appreciated! Amazon suggestions help maintain this site. <strong>This website is built to be explored</strong>. <a href="https://spacebuckets.com/gallery/">In our Gallery</a> you'll find over 300 examples of great setups: the style of the containers is variable, but their gardening function is the same. Ready to start your build? <strong><a href="https://spacebuckets.com/template">Take the next step</a></strong> with the DIY guide. 
      </p>
    </div> 
    <div class="search-sidebar">
      <div class="sidebar-content">
        <h2>MATERIALS</h2>
        <p>Select categories to filter the products. Amazon links help support this website ♥</p>
      </div>

      <section class="search-filters" v-for="(items, parent) in options">   
        <div>{{parent}}</div>
        <div><div v-for="item in items" :class="{ active: filterActive == item}" @click="selectFilter(item);">{{item}}</div></div>
        <hr>
      </section>
    </div>

    <section class="shopping-list">
      <a
        v-for="(item, i) in filterItems"
        :key="`section-${i}`"
        :href="`${item.url}`"
        target="_blank"
        class="item-title-container"
      >
        <div class="product-title">{{item.title}}</div>
        <div class="product-brand-container">
          <i class="product-brand">by {{item.brand}}</i>
          <div class="product-price">{{item.price}}</div>
        </div>
        <div class="product-image">
          <img :src="`${item.img}`" />
        </div>

      </a>
    </section>
 <recommendtable/>

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
    "B07VL8FZS1",
    "B07P8L4LLH",
    "B07KR2S65L",
    "B01B4GQ6MO",
    "B07T47G2L2",
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
    if(!json.Offers) { 
      json.Offers = {}
      json.Offers.Listings = {}
      json.Offers.Listings[0] = {}
      json.Offers.Listings[0].Price = {}
      json.Offers.Listings[0].Price.Amount = "-"
    } 

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
  const res = await fetch("https://bucket-builder.herokuapp.com/bucket-materials/" + itemsArr.join(","));
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
  const res = await fetch("https://bucket-builder.herokuapp.com/bucket-search/" + query);
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
      options: {
        lighting: ["cfl","led","ufo","cob"],
        container: ["buckets","bins","brutes","totes"],
        airflow: ["pcfans","line","inline"],
        extras: ["tools","monitoring"],
      }      
    };
  },
  mounted() {
    this.selectFilter("ufo");
  },
  head() {
    return {
      title: `Space Buckets - MATERIALS`,
      meta: [{ hid: 'description', name: 'description', content: 'Browse the collection of recommended items for DIY indoor gardening.' }],
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },]
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
  background: #fafafa;
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

.search-filters {
  border-bottom: 1px solid rgba(52, 53, 54, 0.31373);
  hr {
    border-color: #333;
  }
  > div {
    padding-left: 0px;
    font-family: "montserrat";
    font-size: 16px;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 5px;
    > div {
      cursor: pointer;
      color: #fff;
      margin-top: 2px;
      &.active {
        color: rgba(253, 216, 53, 1);
      }
      &:hover {
        color: rgba(253, 216, 53, 1);
      }
    }
  }
}

.product-brand-container {
  display: flex;
  justify-content: space-between;
  padding: 2px 12px;
}
</style>
