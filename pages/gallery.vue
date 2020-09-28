<template>
  <div class="gallery-container">
    <div class="search-sidebar">
      <div class="sidebar-content">
        <h2>GALLERY</h2>
        <p>Select categories to filter the buckets. Amazon links help support this website ♥</p>
      </div>

      <div class="filters-container">
        <div class="sort-filters">
          <div :class="{'active': sort === 'asc'}" @click="handleSort('asc')">Latest</div>
          <div :class="{'active': sort === 'popular'}" @click="handleSort('popular')">Popular</div>
        </div>
        <div class="perpage-container">
          <div class="results">{{ relatedInfo.total }} builds</div>
          <div class="select-filter-container">
            <div class="filter-single-top">Per Page</div>
            <select name id @change="handlePerPage()">
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
          <select name id @change="handleChange('container')">
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
          <select name id @change="handleChange('lighting')">
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
          <select name id @change="handleChange('side')">
            <option value class="active">All</option>
            <option value="5050">5050SMD</option>
            <option value="5630">5630SMD</option>
            <option value="7020">7020SMD</option>
          </select>
        </div>
        <div class="select-filter-container">
          <div class="filter-single-top">Airflow</div>
          <select name id @change="handleChange('airflow')">
            <option value class="active">All</option>
            <option value="pcfan">PC fan</option>
            <option value="110v">110v fan</option>
            <option value="linefan">Inline fan</option>
          </select>
        </div>
        <div class="select-filter-container">
          <div class="filter-single-top">Other</div>
          <select name id @change="handleChange('other')">
            <option value class="active">All</option>
            <option value="pcfan">PC fan</option>
            <option value="110v">110v fan</option>
            <option value="linefan">Inline fan</option>
          </select>
        </div>
      </div>
    </div>

    <div class="cards-wrapper">
      <div class="cards-container">
        <card v-for="post in posts" :key="post.s" :id="post" />
      </div>

      <div class="top-wrapper">
        <div class="pagination">
          <button :disabled="page === 1" @click="fetchNew('prev')">« Prev</button>
          <span>Page {{ page }} of {{ relatedInfo.pages }}</span>
          <button :disabled="page === parseInt(relatedInfo.pages)" @click="fetchNew('next')">Next »</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { filterBuilds, getBuilds, randomize } from "~/store/flatDB";
export default {
  async asyncData() {
    const posts = await filterBuilds(24, 1, "asc");
    const allPosts = await getBuilds();
    return { posts, allPosts };
  },
  data() {
    return {
      relatedInfo: [],
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
  created() {
    this.num = 24;
    this.page = 1;
    this.sort = "asc";
    var numberPosts = this.allPosts.length;
    var infoArr = {};
    infoArr.total = numberPosts;
    infoArr.pages = (numberPosts / this.num).toFixed();
    this.relatedInfo = infoArr;
  },
  methods: {
    async fetchNew(type) {
      if (type === "next") {
        this.page = this.page + 1;
      }
      if (type === "prev") {
        this.page = this.page - 1;
      }
      this.filterPosts();
      window.scrollTo(0, 0);
    },
    async handleChange(type) {
      this.page = 1;
      this.filterQuery[type] = event.target.options[event.target.options.selectedIndex].value;
      this.filterPosts();
      this.relatedInfo.total = this.posts.length;
      this.relatedInfo.pages = (this.relatedInfo.total / this.num).toFixed();
    },
    async handleSort(name) {
      this.page = 1;
      this.sort = name;
      this.filterPosts();
    },
    async handlePerPage() {
      this.page = 1;
      this.num = event.target.options[event.target.options.selectedIndex].value;
      this.filterPosts();
      this.relatedInfo.pages = (this.allPosts.length / this.num).toFixed();
    },
    async filterPosts() {
      this.syncQuery();
      this.posts = await filterBuilds(
        this.num,
        this.page,
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
  margin: 10px auto;
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
  margin: 0 auto 5px;
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
        .results { margin-right: 0; }
        .select-filter-container { display: none }
        + h3 { display: none }
      }      
      > div { 
        border: 1px solid #333; 
        flex: 1; 
        margin-right: 10px; 
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &:last-child { margin: 0; }
      }
    }
  }
  select {
    width: 100%;
    background: #000;
    color: #fff;
    border: 0;
    border-radius: 3px;
    padding: 5px 10px;
    height: 35px;
-moz-appearance: none;
-webkit-appearance: none;    
    &:focus {
      outline: 0;
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
}
.select-filter-container:after {
    content: "▼";
    position: absolute;
    right: 5px;
    top: 0;
    line-height: 35px;
    font-size: 10px;
    color: #333;
}

</style>
