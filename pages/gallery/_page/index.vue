<template>
  <swiper :next="swipeItem" type="posts">
    <template v-slot:main>
      <div class="gallery-container">
        <div class="search-sidebar">
          <div class="sidebar-content">
            <h2>GALLERY</h2>
            <p>
              Select categories to filter and browse the builds in the community garden collection.
            </p>
          </div>
          <div class="filters-container">

          <h3>Filters</h3>
            <div class="select-filter-container" :key="`${parent}`" v-for="(items, parent) in filterOptions">
              <div class="filter-single-top">{{parent}}</div>
              <select :ref="`select${parent}`" @change="filterPosts(parent)">
                <option value="">All</option>
                <option v-for="option in items" :key="`${option}-${parent}`" :value="option">{{option}}</option>
              </select>
            </div>
          </div>
          <div class="perpage-container">
              <div class="results">Found {{ totalLength }} builds »</div>
          </div>
        </div>
          <div class="cards-wrapper">
            <div class="cards-container">
              <card v-for="post in posts" :key="post.s" :id="post" />
            </div>

            <div class="top-wrapper">
              <div class="pagination">
                <nuxt-link v-if="$route.params.page > 1" :to="{ name: 'gallery-page', params: { page: parseInt($route.params.page)-1 } }">
                  « Prev
                </nuxt-link>
                <nuxt-link :class="{active: page === $route.params.page }" :key="page" :to="{ name: 'gallery-page', params: { page: parseInt(page)} }" v-for="page in megapostLength">{{ page }}</nuxt-link>
                <nuxt-link v-if="$route.params.page < megapostLength" :to="{ name: 'gallery-page', params: { page: parseInt($route.params.page)+1 } }">
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
  singleRandom
} from "~/static/flatDB";
export default {
  async asyncData({route}) {
    
    var posts = await filterBuilds(36, route.params.page, "pop");
    var megaposts = await filterBuilds(-1, 0, "pop");
    var totalLength = megaposts.length
    var megapostLength = Math.ceil(megaposts.length / 36)      
  
    return { posts, totalLength,megapostLength };
  },
  data() {
    return {
      filterOptions: {
        container: ['bucket','brute','tote','barrel','bin'],
        lighting: ['cfl','ufo','ledbulb','ledcustom'],
        airflow: ['pcfan','linefan','inlinefan'],
      },
      swipeItem: [],
      loadingSwipe: true,
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

  methods: {
    filterPosts(type) {
            console.log(event.target.options[event.target.options.selectedIndex].value)

      this.filterQuery[type] = event.target.options[event.target.options.selectedIndex].value;
      this.filterQuery.selected = this.filterQuery.container + "-" + this.filterQuery.lighting + "-" + this.filterQuery.airflow;
      this.filterQuery.selected = this.filterQuery.selected.replace('--','-').replace(/-$/,'').replace(/^-/,'');

      if(this.filterQuery.selected === "") {
        this.$router.push({ name: 'gallery-page', params: { page: '1' } });
      } else {
        this.$router.push({ name: 'gallery-page-category', params: { page: '1', category: this.filterQuery.selected } });
      }
    },
  },
  head() {
    return {
      title: `Space Buckets - GALLERY - ${this.$route.params.page}`,
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

  a {
    margin: 0 2px;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 28px;
    height: 28px;
    color: #eee;
    text-decoration: none;
    width: max-content;
    font-size: 15px;
   &:hover {
      color: #fdd835;
      text-decoration: underline;
    }    
    &.nuxt-link-active {
      background: #fdd835;
      color: #333;
      border-radius: 50%;
      pointer-events: none;
    } 
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

.results {
  font-size: 14px;
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
