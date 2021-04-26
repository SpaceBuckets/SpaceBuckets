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

            <div class="perpage-container">
              <div class="results">{{ relatedInfo.total }} builds</div>
<!--              <div class="sort-filters">
              <div
                ref="sortAsc"
                :class="{ active: sort === 'asc' }"
                @click="handleSort('asc')"
              >
                New
              </div>
              <div
                ref="sortPop"
                :class="{ active: sort === 'pop' }"
                @click="handleSort('pop')"
              >
                Popular
              </div>
            </div> -->
            </div>

            <h3>Filters</h3>
            <div class="select-filter-container">
              <div class="filter-single-top">Container</div>
              <select ref="selectContainer" @change="handleChange('container')">
                <option value="">All</option>
                <option v-for="option in containerOptions" :key="option">{{option}}</option>
              </select>
            </div>
            <div class="select-filter-container">
              <div class="filter-single-top">Lighting</div>
              <select ref="selectLighting" @change="handleChange('lighting')">
                <option value="">All</option>
                <option v-for="option in lightingOptions" :key="option">{{option}}</option>
              </select>
            </div>
            <div class="select-filter-container">
              <div class="filter-single-top">Airflow</div>
              <select ref="selectAirflow" @change="handleChange('airflow')">
                <option value="">All</option>
                <option v-for="option in airflowOptions" :key="option">{{option}}</option>
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
                <nuxt-link v-if="$route.params.page !== 1" :to="{ name: 'gallery-page-category', params: { page: parseInt($route.params.page)-1, category: $route.params.category } }">
                  « Prev
                </nuxt-link>
                <span>Page {{ $route.params.page }} of {{ relatedInfo.pages }}</span>
                <nuxt-link v-if="$route.params.page !== undefined" :to="{ name: 'gallery-page-category', params: { page: parseInt($route.params.page)+1, category: $route.params.category } }">
                  Next »
                </nuxt-link>
                <nuxt-link v-if="$route.params.page === undefined" :to="{ name: 'gallery-page-category', params: { page: 2 } }">
                  Next »
                </nuxt-link>                
              </div>
            </div>
          </div>

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
} from "~/static/flatDB";
export default {
  async asyncData({route}) {
    var posts = await filterBuilds(36, 1, "pop");
    if (route.params.page) {
      posts = await filterBuilds(36, route.params.page, "pop");
    }
    if (route.params.page && route.params.category) {
      posts = await filterBuilds(36, route.params.page, "pop",route.params.category.replace(/-/g,','));
    }
    const allPosts = await getBuilds();
    return { posts, allPosts };
  },
  data() {
    return {
      containerOptions: ['bucket','brute','tote','barrel','bin'],
      lightingOptions: ['cfl','ufo','ledbulb','ledcustom'],
      airflowOptions: ['pcfan','linefan','inlinefan'],
      swipeItem: [],
      loadingGallery: true,
      loadingSwipe: true,
      relatedInfo: [],
      allReposts: "",
      filterQuery: {
        container: "",
        lighting: "",
        airflow: "",
        selected: "",
      },
    };
  },
  async created() { 

    if (process.client) {
      this.swipeItem = await singleRandom();
      if (
        this.swipeItem.z !== "" ||
        (this.swipeItem.z !== undefined && this.swipeItem.z.length > 0)
      ) {
        this.swipeItem.itemCount = this.swipeItem.z.split(",").length;
      }
       this.loadingSwipe = false;
    }
  },
  updated() {
    if (this.$route.params.category) {
      var slugCat = this.$route.params.category.split('-');
      for (let i = 0; i < slugCat.length; i++) {
        for (let e = 0; e < this.containerOptions.length; e++) {
          if (slugCat[i] === this.containerOptions[e]) { 
            this.$refs.selectContainer.value = slugCat[i] 
            this.filterQuery.container = slugCat[i]  
            
          }
        }
        for (let c = 0; c < this.lightingOptions.length; c++) {
          if (slugCat[i] === this.lightingOptions[c]) { 
            this.$refs.selectLighting.value = slugCat[i] 
            this.filterQuery.lighting = slugCat[i]  
          }
        }
        for (let d = 0; d < this.airflowOptions.length; d++) {
          if (slugCat[i] === this.airflowOptions[d]) { 
            this.$refs.selectAirflow.value = slugCat[i] 
            this.filterQuery.airflow = slugCat[i]  
          }
        }  
      }
    }
  },  
  methods: {
    async handleChange(type) {
      this.$refs.searchInput.value = ""
      this.filterQuery[type] = event.target.options[event.target.options.selectedIndex].value;
      await this.filterPosts();
    },
    async handleSort(name) {
      this.page = 1;
      this.sort = name;
      await this.filterPosts();
    },
    filterPosts() {
      this.filterQuery.selected = this.filterQuery.container + "-" + this.filterQuery.lighting + "-" + this.filterQuery.airflow;
      this.filterQuery.selected = this.filterQuery.selected.replace('--','-');
      this.filterQuery.selected = this.filterQuery.selected.replace(/-$/,'');
      this.filterQuery.selected = this.filterQuery.selected.replace(/^-/,'');
      this.$router.push({ name: 'gallery-page-category', params: { page: '1', category: this.filterQuery.selected } });
    },
  },
  head() {
    return {
      title: `Space Buckets - GALLERY`,
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },],
      meta: [{ hid: 'description', name: 'description', content: 'Browse the collection of DIY indoor gardens from the community. More than 350 builds await!' }],

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
    padding: 10px 10px;
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
  a[disabled] {
    opacity: 0.5;
    pointer-events: none;
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

select,
select option {
  text-transform: capitalize;
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
