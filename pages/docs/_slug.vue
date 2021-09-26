<template>
 
      <div class="docs-container">
        <div class="docs-sidebar onlydesktop">
          <div class="sidebar-content docs-links">
            <nuxt-link to="/docs/begin-your-journey">
              <h2 style="margin:0">DOCS</h2>
            </nuxt-link>
            <docsnav />          
          </div>
        </div>
        <div class="doc-single-wrapper">
        <div class="doc-single-content">
          <h2>{{doc.t}}</h2>
          <h5 v-if="doc.a">
            by <a target="_blank" :href="`https://www.reddit.com/u/${doc.a}`">/u/{{doc.a}}</a> <span v-if="doc.a === 'SuperAngryGuy'">of <a target="_blank" :href="`https://www.reddit.com/r/HandsOnComplexity`">/r/HandsOnComplexity</a></span>

          </h5>
          <div v-html="doc.c"></div>

        </div>
     <!--      <section class='featured-docs'>
            <carddoc v-for="(redoc, i) in redocs" :doc="redoc" :key="`${i}-redoc`"/>
          </section> -->
        </div>

        <div class="docs-sidebar onlymobile" id="docslug">
          <docsnav />
        </div>
        <a class="navigator onlymobile" href="#docslug"><svg fill='none' stroke='#0E1A27' stroke-width='8' stroke-dashoffset='0' stroke-dasharray='0' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><line x1="20" y1="80" x2="80" y2="80" />
<line x1="50" y1="15" x2="50" y2="65" />
<polyline fill="none" points="30,50 50,65 70,50" /></svg></a>
      </div>
 
</template>

<script>
import { featuredDocs, getDocs, singleDoc } from "~/scripts/flatDB";

export default {
  async asyncData({ params }) {
    const doc = await singleDoc(params.slug);
    const docs = await getDocs();
    const redocs = await featuredDocs()
    docs.sort(function(a, b) { return a.o- b.o; })
    const swipeItem = docs[doc.o]
    return { doc, docs, swipeItem, redocs };
  },
  head() {
    return {
      title: `Space Buckets - ${this.doc.t}`,
      meta: [{ hid: 'description', name: 'description', content: this.doc.d }],
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },]
    };
  },
};
</script>

<style lang="scss">

.navigator {
  position: fixed;
  bottom: 18px;
  right: 18px;
  background: #000;
  color: #fff;
  border-radius: 50%;
  padding: 20px;
    width: 55px;
    height: 55px;  
    display: block;
    padding: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.5);
  svg {
    width: 100%;
    stroke:#fff;
    pointer-events: none;
  }
}

.docs-wrapper {
    @media (max-width: 980px) {
    padding-left: 0;
  }
}

:root {
  --padder: 45px;
}

.featured-docs {
  overflow: auto;
  background: #000;
  padding-top: 40px;
}

.doc-single-wrapper {
    width: calc(100% - 280px);
  max-width: max-content;
  float: left;
    background: #000;
  @media (max-width: 980px) {
    width: 100%;
  }  
}

.doc-single-content {
  background: #fafafa;
  padding: 40px 0 20px; 
  //border-right: 1px solid #1a1a1b;
  max-width: 1600px;
    @media (max-width: 980px) {
  padding: 15px 0 20px; 

  }  
  &:after { content: ""; display: table; clear: both; }


  p {
    padding-right: 100px;
    @media (max-width: 980px) {
      padding-right: 0;
    }    
  }
  > div {
    line-height: 1.65;
    font-size: 17px;
    margin-bottom: 40px;
    padding: 0 var(--padder);
    @media (max-width: 980px) {
      max-width: 100%;
      padding: 0 15px;
    }    
  }
  h3 {
    margin: 30px calc(var(--padder) * -1) 10px;
    padding: 0 var(--padder);
    padding-top: 25px;
    border-top: 1px dashed #ccc;
    @media (max-width: 980px) {
      padding: 15px 15px 0;
      margin: 20px -15px 10px;
    }    
  }
  h1,
  h2 {
    padding: 0 var(--padder);
    margin-bottom: 6px;
    @media (max-width: 980px) {
      padding: 0 15px;
    }    
  }
  h5 {
    padding: 0 var(--padder);
    margin: 0;
    font-weight: normal;
        margin-bottom: 20px;
    font-size: 15px;
    @media (max-width: 980px) {
      padding: 0 15px;
    }    
  }
}

strong {
  //background: #f5d134;
}
.docs-sidebar {
  padding: 0;
  position: relative;
  width: 280px;
  float: left;
  @media (max-width: 980px) {
    width: 100%;
  }  
  a {
    text-decoration: none;
  }
  h2 {
    font-size: 20px;
    color: #eee;
      text-align: left;
    padding: 15px;
  }

}
</style>
