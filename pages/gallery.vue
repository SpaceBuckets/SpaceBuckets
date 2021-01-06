<template>
  <swiper :next="swipeItem" type="posts">
    <template v-slot:main>
      <div class="gallery-container">
        <div class="search-sidebar">
          <div class="sidebar-content">
            <h2>GALLERY</h2>
            <p>
              Select categories to filter the buckets. Amazon links help support
              this website ♥
            </p>
          </div>
          <div class="filters-container">
            <div class="search-container">
              <div class="filter-single-top">Search</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Magnifying_glass"
                x="0px"
                y="0px"
                viewBox="0 0 20 20"
                enable-background="new 0 0 20 20"
                xml:space="preserve"
              >
                <path
                  fill="#FFFFFF"
                  d="M17.545,15.467l-3.779-3.779c0.57-0.935,0.898-2.035,0.898-3.21c0-3.417-2.961-6.377-6.378-6.377  C4.869,2.1,2.1,4.87,2.1,8.287c0,3.416,2.961,6.377,6.377,6.377c1.137,0,2.2-0.309,3.115-0.844l3.799,3.801  c0.372,0.371,0.975,0.371,1.346,0l0.943-0.943C18.051,16.307,17.916,15.838,17.545,15.467z M4.004,8.287  c0-2.366,1.917-4.283,4.282-4.283c2.366,0,4.474,2.107,4.474,4.474c0,2.365-1.918,4.283-4.283,4.283  C6.111,12.76,4.004,10.652,4.004,8.287z"
                />
              </svg>
              <input
                v-on:keyup.enter="customSearch($refs.searchInput.value)"
                ref="searchInput"
                type="text"
              />
            </div>
            <div class="sort-filters">
              <div
                ref="sortAsc"
                :class="{ active: sort === 'asc' }"
                @click="handleSort('asc')"
              >
                Latest
              </div>
              <div
                ref="sortPop"
                :class="{ active: sort === 'pop' }"
                @click="handleSort('pop')"
              >
                Popular
              </div>
            </div>
            <div class="perpage-container">
              <div class="results">{{ relatedInfo.total }} builds</div>
              <div class="select-filter-container">
                <div class="filter-single-top">Per Page</div>
                <select ref="selectPerPage" @change="handlePerPage()">
                  <option value="10">10</option>
                  <option value="25" selected>25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>

            <h3>Filters</h3>
            <div class="select-filter-container">
              <div class="filter-single-top">Container</div>
              <select ref="selectContainer" @change="handleChange('container')">
                <option value>All</option>
                <option value="5gal">Bucket</option>
                <option value="brute">Brute</option>
                <option value="tote">Tote</option>
                <option value="barrel">Barrel</option>
                <option value="bin">Bin</option>
              </select>
            </div>
            <div class="select-filter-container">
              <div class="filter-single-top">Lighting</div>
              <select ref="selectLighting" @change="handleChange('lighting')">
                <option value class="active">All</option>
                <option value="ufo180">180w UFO</option>
                <option value="ufo300">300w UFO</option>
                <option value="cfl">CFL bulbs</option>
                <option value="ledbulb">LED bulbs</option>
                <option value="custom">Custom LED</option>
              </select>
            </div>
            <div class="select-filter-container">
              <div class="filter-single-top">Side-lighting</div>
              <select ref="selectSide" @change="handleChange('side')">
                <option value class="active">All</option>
                <option value="5050">5050SMD</option>
                <option value="5630">5630SMD</option>
                <option value="7020">7020SMD</option>
              </select>
            </div>
            <div class="select-filter-container">
              <div class="filter-single-top">Airflow</div>
              <select ref="selectAirflow" @change="handleChange('airflow')">
                <option value class="active">All</option>
                <option value="pcfan">PC fan</option>
                <option value="110v">110v fan</option>
                <option value="linefan">Inline fan</option>
              </select>
            </div>
          </div>
        </div>
        <client-only>
        <template v-if="!loadingGallery">
          <div class="cards-wrapper">
            <div class="cards-container">
              <card v-for="post in posts" :key="post.s" :id="post" />
            </div>

            <div class="top-wrapper">
              <div class="pagination">
                <button :disabled="page === 1" @click="fetchNew('prev')">
                  « Prev
                </button>
                <span>Page {{ page }} of {{ relatedInfo.pages }}</span>
                <button
                  :disabled="page === parseInt(relatedInfo.pages)"
                  @click="fetchNew('next')"
                >
                  Next »
                </button>
              </div>
            </div>
          </div>
        </template>
        </client-only>

      </div>
    </template>
    <template v-slot:next v-if="!loadingSwipe">
      <postmasonry :post="swipeItem" variation="skeleton" />
    </template>
  </swiper>
</template>

<script>
import {
  filterBuilds,
  singleRandom,
  getBuilds,
  getSearch,
  randomize,
} from "~/store/flatDB";
export default {
  async asyncData() {
    const posts = await filterBuilds(24, 1, "pop");
    const allPosts = await getBuilds();
    return { posts, allPosts };
  },
  data() {
    return {
      swipeItem: [],
      loadingGallery: true,
      loadingSwipe: true,
      relatedInfo: [],
      allReposts: "",
      filterQuery: {
        container: "",
        lighting: "",
        airflow: "",
        side: "",
        extra: "",
        selected: "",
      },
    };
  },
  async created() {
    this.num = 25;
    this.page = 1;
    this.sort = "pop";

    var numberPosts = this.allPosts.length;
    var infoArr = {};
    infoArr.total = numberPosts;
    infoArr.pages = (numberPosts / this.num).toFixed();
    this.relatedInfo = infoArr;
 
    
    if (Object.keys(this.$route.query).length == 0) {
      this.loadingGallery = false;
    } else {
      await this.getURL();
      this.loadingGallery = false;
    }    

    if (process.client) {
      this.swipeItem = await singleRandom();
      if (
        this.swipeItem.z !== "" ||
        (this.swipeItem.z !== undefined && this.swipeItem.z.length > 0)
      ) {
        this.swipeItem.itemCount = this.swipeItem.z.split(",").length;
      }
      //this.swipeItem.i = this.swipeItem.i.slice(0, 1);
      this.loadingSwipe = false;
    }
  },
  methods: {
    async getURL() {
      if (this.$route.query.container) { this.filterQuery.container = this.$route.query.container; }
      if (this.$route.query.light) { this.filterQuery.lighting = this.$route.query.light; }
      if (this.$route.query.air) { this.filterQuery.airflow = this.$route.query.air; }
      if (this.$route.query.side) { this.filterQuery.side = this.$route.query.side; }
      if (this.$route.query.p) { this.page = parseInt(this.$route.query.p); }
      if (this.$route.query.n) { this.num = parseInt(this.$route.query.n); }
      if (this.$route.query.s) { this.sort = this.$route.query.s; }
      if (this.$route.query.search) { await this.customSearch(this.$route.query.search); }

      this.$nextTick(() => {
        if (this.$route.query.container) { this.$refs.selectContainer.value = this.$route.query.container; }
        if (this.$route.query.light) { this.$refs.selectLighting.value = this.$route.query.light; }
        if (this.$route.query.air) { this.$refs.selectAirflow.value = this.$route.query.air; }
        if (this.$route.query.side) { this.$refs.selectSide.value = this.$route.query.side; }
        if (this.$route.query.search) { this.$refs.searchInput.value = this.$route.query.search; }
        if (this.$route.query.n) { this.$refs.selectPerPage.value = this.$route.query.n; }
        if (this.$route.query.s === "asc") { this.$refs.sortAsc.classList = "active"; }
        if (this.$route.query.s === "pop") { this.$refs.sortPop.classList = "active"; }
      });
      if (!this.$route.query.search) {
        await this.filterPosts();
        this.relatedInfo.total = this.allposts.length;
        this.relatedInfo.pages = (this.relatedInfo.total / this.num).toFixed();
           console.log(this.allposts.length)   
           console.log(this.num)   
           console.log(this.relatedInfo.total / this.num)   

        if (this.relatedInfo.pages == 0) {
          this.relatedInfo.pages = 1;
        }
      }

    },
    setURL() {
      var newURL = "?p="+this.page+"&n="+this.num+"&s="+this.sort + 
        (this.filterQuery.container ? "&container=" + this.filterQuery.container : "") +
        (this.filterQuery.lighting ? "&light=" + this.filterQuery.lighting : "") +
        (this.filterQuery.airflow ? "&air=" + this.filterQuery.airflow : "") +
        (this.filterQuery.side ? "&side=" + this.filterQuery.side : "");

      newURL = newURL.replace("?&", "?");
      if (newURL === "?") {
        history.pushState(null, null, window.location.pathname);
      } else {
        history.pushState(null, null, newURL);
      }
    },
    async customSearch(query) {
      this.$nextTick(() => {
        this.$refs.selectContainer.value = "";
        this.$refs.selectLighting.value = ""; 
        this.$refs.selectAirflow.value = ""; 
        this.$refs.selectSide.value = ""; 
      });
      this.posts = await getSearch(query.toLowerCase());
      this.relatedInfo.total = this.posts.length;
      this.relatedInfo.pages = (this.relatedInfo.total / this.num).toFixed();
      if (query === "") {
        history.pushState(null, null, window.location.pathname);
      } else {
        history.pushState(null, null, "?search="+query.toLowerCase());
      }
    },
    async fetchNew(type) {
      if (type === "next") {
        this.page = this.page + 1;
      }
      if (type === "prev") {
        this.page = this.page - 1;
      }
      await this.filterPosts();
      window.scrollTo(0, 0);
    },
    async handleChange(type) {
      this.$refs.searchInput.value = ""
      this.page = 1;
      this.filterQuery[type] = event.target.options[event.target.options.selectedIndex].value;
      await this.filterPosts();
      this.relatedInfo.total = this.allposts.length;
      this.relatedInfo.pages = (this.relatedInfo.total / this.num).toFixed();
      if (this.relatedInfo.pages == 0) {
        this.relatedInfo.pages = 1;
      }
    },
    async handleSort(name) {
      this.page = 1;
      this.sort = name;
      await this.filterPosts();
    },
    async handlePerPage() {
      this.num = parseInt(event.target.options[event.target.options.selectedIndex].value);
      this.page = 1;
      await this.filterPosts();
      //await this.getURL();
      this.relatedInfo.total = this.allposts.length;
      this.relatedInfo.pages = (this.relatedInfo.total / this.num).toFixed();
      if (this.relatedInfo.pages == 0) {
        this.relatedInfo.pages = 1;
      }
    },
    async filterPosts() {
      this.setURL();
      this.syncQuery();
      this.posts = await filterBuilds(
        this.num,
        this.page,
        this.sort,
        this.filterQuery.selected
      );
      this.allposts = await filterBuilds(
        -1,
        0,
        this.sort,
        this.filterQuery.selected
      );

    },
    syncQuery() {
      this.filterQuery.selected =
        this.filterQuery.container +
        "," +
        this.filterQuery.airflow +
        "," +
        this.filterQuery.lighting +
        "," +
        this.filterQuery.side +
        "," +
        this.filterQuery.extra;
      this.filterQuery.selected = this.filterQuery.selected
        .split(",")
        .join(",");
      this.filterQuery.selected = this.filterQuery.selected
        .replace(/,+/g, ",")
        .replace(/,\s*$/, "")
        .replace(/^,|,$/g, "");
    },
  },
  head() {
    return {
      title: `Space Buckets - GALLERY`,
    };
  },
};
</script>

<style lang="scss">
.load-more {
  color: #eee;
  border: 1px solid #333;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  width: 300px;
  margin: 20px auto 30px;
  color: #fafafa;
  background: transparent;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  &:focus {
    outline: 0;
  }
  &:hover {
    color: #fdd835;
  }
}
.top-wrapper {
  display: flex;
  width: 100%;
  max-width: 1280px;
  padding: 0 15px;
  margin: 20px auto 40px;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    flex-direction: row-reverse;
  }
  > div {
    flex: 1;
    max-width: max-content;
  }
  .results {
    color: #eee;
    line-height: 35px;
  }
}
.sort-filters {
  display: flex;
  text-align: center;
  max-width: 250px;
  border: 1px solid #333;
  align-content: center;
  background: #101010;

  div {
    flex: 1;
    color: #eee;
    padding: 10px 15px;
    cursor: pointer;
    &:first-of-type {
      border-right: 1px solid #333;
    }
    &:hover {
      color: #fdd835;
    }
    &.active {
      background: #fdd835;
      color: #151515;
    }
  }
}

.pagination {
  font-size: 16px;
  color: #eee;
  span {
    display: inline-block;
    margin: 0 10px;
  }
  button {
    padding: 10px 15px;
    background: #101010;
    border: 1px solid #333;
    color: #eee;
    border-radius: 2px;
    font-size: 16px;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
    &:hover {
      color: #fdd835;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
}

.gallery-container {
  margin: 0 auto;
  padding-left: 250px;
  @media (max-width: 980px) {
    padding: 0;
  }
}

.cards-container {
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &.active {
    .skeleton {
      display: block;
    }
    .card {
      display: none;
    }
  }
}

.filters-container {
  color: #eee;
  h3 {
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: 16px;
  }
  @media (max-width: 980px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    > div {
      flex: 1;
      margin-right: 10px;
      flex-basis: 100%;
      max-width: calc(50% - 10px);
      &:last-of-type {
        display: none;
      }
    }
  }
  > div {
    margin-bottom: 15px;
    position: relative;
    border: 1px solid #333;
    width: 100%;
    &.sort-filters {
      border-radius: 3px;
      overflow: hidden;
    }
    &.perpage-container {
      border: 0;
      display: flex;
      @media (max-width: 980px) {
        .results {
          margin-right: 0;
        }
        .select-filter-container {
          display: none;
        }
        + h3 {
          display: none;
        }
      }
      > div {
        border: 1px solid #333;
        flex: 1;
        margin-right: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
  select {
    width: 100%;
    background: #000;
    color: #fff;
    border: 0;
    border-radius: 3px;
    padding: 5px 0 5px 10px;
    height: 35px;
    -moz-appearance: none;
    -webkit-appearance: none;
    &:focus {
      outline: 0;
    }
  }
}
.filter-single-top {
  position: absolute;
  top: -9px;
  left: 3px;
  padding: 0 5px;
  font-size: 13px;
  color: #eee;
  background: #000;
  z-index: 9;
}
.select-filter-container:after {
  content: "▼";
  position: absolute;
  right: 5px;
  top: 0;
  line-height: 35px;
  font-size: 10px;
  color: #333;
  pointer-events: none;
}

.search-container {
  margin-top: 20px;
  @media (max-width: 980px) {
    max-width: 100% !important;
  }
  input {
    width: 100%;
    background: #000;
    color: #fff;
    border: 0;
    border-radius: 3px;
    padding: 5px 0 5px 10px;
    height: 35px;
    &:focus {
      outline: 0;
    }
  }
  svg {
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: 0;
    width: 20px;
    height: auto;
    opacity: 0.6;
  }
}
</style>
