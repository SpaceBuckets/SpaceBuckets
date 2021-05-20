<template>
  <div class="gallery-container">
        <div class="search-sidebar">
          <div>
            <h2>SEARCH RESULTS: "{{ $route.query.q }}"</h2>
            <p>Find and filter buckets from the community collection. </p>
          </div>
          <div class="filters-container">
            <div class="select-filter-container search">
              <button @click="submitSearch()"><icon-search /></button>
              <input ref="searchInput" :value="$route.query.q" @keyup.enter="submitSearch()" type="text" placeholder="Search..." name="search">
            </div>

    
          </div>
          <div class="perpage-container">
            <div class="results">Found {{ posts.length }} builds »</div>
          </div> 
        </div>
          <div class="cards-wrapper">
            <div class="cards-container">
              <card v-for="post in posts" :key="post.s" :id="post" />
            </div>

            <div class="top-wrapper">
              <div class="pagination">
                <nuxt-link v-if="$route.params.page > 1" :to="{ name: 'gallery-page-category', params: { page: parseInt($route.params.page)-1, category: $route.params.category } }">
                  « Prev
                </nuxt-link>
                <nuxt-link v-if="megapostLength > 1" :class="{active: page === $route.params.page }" :key="page" :to="{ name: 'gallery-page-category', params: { page: parseInt(page), category: $route.params.category } }" v-for="page in megapostLength">{{ page }}</nuxt-link>
                <nuxt-link v-if="$route.params.page < megapostLength" :to="{ name: 'gallery-page-category', params: { page: parseInt($route.params.page)+1, category: $route.params.category } }">
                  Next »
                </nuxt-link>       
              </div>
            </div>
          </div>

      </div>
</template>

<script>

export default {
  name: "postgallery",
  props: ["posts","totalLength","megapostLength","titler", "query"],
  data() {
    return {
      filterOptions: {
        container: ['bucket','brute','tote','barrel','bin'],
        lighting: ['cfl','ufo','ledbulb','ledcustom'],
        airflow: ['pcfan','linefan','inlinefan'],
      },
      filterQuery: {
        container: "",
        lighting: "",
        airflow: "",
        selected: "",
      },
    };
  },
 created() {
  this.$nextTick(() => {
    if(this.$route.params.category && process.client && window) {
      var slugCat = this.$route.params.category.split('-');
        for (let i = 0; i < slugCat.length; i++) {
          for (let e = 0; e < this.filterOptions.container.length; e++) {
            if (slugCat[i] === this.filterOptions.container[e]) { 
              this.$refs.selectcontainer[0].value = slugCat[i]
              this.filterQuery.container = slugCat[i]  
            }
          }
          for (let c = 0; c < this.filterOptions.lighting.length; c++) {
            if (slugCat[i] === this.filterOptions.lighting[c]) { 
              this.$refs.selectlighting[0].value = slugCat[i] 
              this.filterQuery.lighting = slugCat[i]  
            }
          }
          for (let d = 0; d < this.filterOptions.airflow.length; d++) {
            if (slugCat[i] === this.filterOptions.airflow[d]) { 
              this.$refs.selectairflow[0].value = slugCat[i] 
              this.filterQuery.airflow = slugCat[i]  
            }
          }  
        }
      }
   });
  },    
  methods: {
    submitSearch() {
      this.$router.push({ name: 'search', query: { 'q': this.$refs.searchInput.value } });
    },        

  },
};
</script>

<style lang="scss">

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

}
  .results {
    color: #eee;
    line-height: 35px;

  }

  a[disabled] {
    opacity: 0.5;
    pointer-events: none;
  } 
.pagination {
  font-size: 20px;
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
    font-size: 16px;
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
  margin: 0px auto;
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
  .select-filter-container {
    position: relative;

    input {
      padding-left: 35px;
    }
    button {
      position: absolute;
      background: transparent;
      border: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;      
      svg {
        width: 20px;
        path { fill: #666 !important; }
      }
    }
  }
  h3 {
    text-transform: uppercase;
    margin-bottom: 15px;
    margin-top: 0;
    font-size: 16px;
    display: block;
    width: 100%;
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

    }
  }
  > div {
    margin-bottom: 15px;
    position: relative;
    border: 1px solid #333;
    width: 100%;
    max-width: 200px;
    margin-right: 10px;

  }
  input,
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
  text-transform: capitalize;
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
.select-filter-container.search { max-width: 100%; }
.select-filter-container.search:after { display: none; }
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
