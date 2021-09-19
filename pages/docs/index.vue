<template>
<div>

<!--   <swiper :next="swipeItem" type="docs">
    <template v-slot:main> -->
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
          <h2>Begin your Journey</h2>
          <br />
                    <div>
    <pre>
        <img src='https://spacebuckets.com/template/3e3d32.jpg'/>
        <div>A group of Space Buckets in their natural habitat</div>
    </pre>
          <p>
            <em>A Space Bucket is a DIY indoor garden</em> that is made by stacking plastic containers alongside lighting (CFL or LED) and airflow (PC or other fans).
            <b>It is an enclosed growth chamber that can be used to garden many kinds of plants.</b> A Space Bucket is a versatile gardening tool that can be adapted to the users needs. Every variable of the bucket environment can be
            <b>tweaked and upgraded</b> at any time. For example, some plants require more light intensity than others, or different humidity conditions.
          </p>



          <p>
            Space Buckets is also
            <em>a movement of gardeners, a community of botanically inclined individuals</em> who like to grow plants indoors and share information freely. The
            <a
              href="https://www.reddit.com/r/SpaceBuckets"
            >/r/SpaceBuckets subreddit</a> is our main forum, and this website is its companion. Bucketeers are open, friendly and thorough, as the manifesto states.
          </p>
     <ul>
                <li><nuxt-link to='/docs/main-container'>Start by choosing a main container »</nuxt-link></li>
                </ul>
            </div> 

            <div>

              <h3>What type of lighting should I use?</h3>
                    <pre>
        <img src='https://spacebuckets.com/template/19140e.jpg'/>
        <div>CFL bulbs are a low cost alternative to LED</div>
    </pre>            
              <em>You can choose CFL or LED for your bucket.</em> In both cases a minimum of 100w true watts is recommended. The LED option can be solved with a UFO light. The recommended size is the '180w' model for a typical Space Bucket. If you go the CFL route, about 4 bulbs will be needed. You can mix spectrums (2700K and 6500K) during the whole life of the plant, though warm-white is preferred in flowering. <b>Either configuration can be used along 5050SMD LED light strips</b>. These lights stick to the walls of the bucket for extra photosynthesis.
              <br>
         <ul>
                <li><nuxt-link to='/docs/lighting-solutions'>Learn more about lighting solutions »</nuxt-link></li>
                </ul>
            </div>
            <div>
              <h3>Will my electrical bill increase?</h3>
              Great answer by <a href='https://www.reddit.com/u/bent42'>/u/bent42</a>: <i>'There are two factors: <b>the wattage of your lights, and your cost per Kilowatt.</b> Electricity is billed by the Kilowatt/hour. So if you know the 'true' watts of your lights (and fans) and how long they are on, you can easily calculate the cost. For example: 150 watts total x 24 hours of veg = 3600 watts in 24 hours, or 3.6 kilowatts a day. The average price per kilowatt/hour in the US is around 12 cents, so 3.6*$0.12=$0.43/day in veg, or about $13/mo, and about half that in flower.'</i>
            </div>
 
                            <div> 
                 
              <h3>What plants can I grow with this setup?</h3>    
                  <pre>

 <img src='https://spacebuckets.com/u/cherry-tomato-journal/1e190b.jpg'/>
        <div>Cherry tomatoes love to grow in Space Buckets</div>
    </pre>      
              <em>You can grow any plant you can imagine!</em> Space Buckets can be used for the entire life of most plants, and also works great for germinating seeds or maintaining clones. You will see that Cannabis is a very popular choice among bucketeers, but its not the only thing that thrives in a Space Bucket. Users from the subreddit community have grown <b>Tomatoes, Peppers, Dill, Chives, Basil, and even Wasabi and Avocado!</b> All plants enjoy the bucket garden, especially herbs and fruits. You are invited to try new types of plants, every species deserves a bucket. Plant experimentation is encouraged! Why not some SB avocados, succulents or potatoes?
              <ul>
                <li><nuxt-link to='/docs/plant-species'>Learn more about bucket plant species »</nuxt-link></li>
                </ul>
            </div>
             <div>
                  
              <h3>Which training techniques work best?</h3>
                 <pre>
        <img src='https://spacebuckets.com/u/levitatingchicken/aba09f.jpg'/>
        <div>An inline filtered Space Bucket with 5gal buckets</div>
    </pre>
              <b>LST (low-stress training)</b> is a basic tool for keeping the height of the plant under control. You can use hooks to tie the branches to the soil or the side of the pot. You can even create a <b>SCROG net</b> to grow as horizontally as possible. <b>Topping</b> is another recommended training technique for a bucket grow: you have to cut the top-most growth of the plant. This will cause it to bush out, and two tops will appear from the 'shoulders' of the node. <b>Pruning</b> can be a good idea too: you can remove some leaves if they're blocking too much light from the tops. This is better done in moderation.
                            <br>
              <br>

                <li><nuxt-link to='/docs/plant-training'>Learn more about plant training »</nuxt-link></li>

            </div>
            <div>
              <h3>What to do about smelly plants?</h3>

   
              To control odors from your plants, you will need <em>powerful ventilation and some type of carbon filter</em>. If you want to get rid of mostly all the smell, you should look into inline fans and filters, which can be connected with ducting to one or more buckets.

              Another option is <b>ONA gel</b>, as SAG says: 'ONA does wonders particularly during a harvest where a simple charcoal filter may not cut it'. You have to put the gel outside of the bucket, near the exhaust fan.
                      <ul>
                <li><nuxt-link to='/docs/airflow-solutions'>Learn more about airflow solutions »</nuxt-link></li>
                <li><nuxt-link to='/docs/smell-control'>Learn more about smell control »</nuxt-link></li>
                </ul>
            </div>
         </div>
         </div>
        <div class="docs-sidebar onlymobile" id="docsluge">
          <docsnav />
        </div>
         <a class="navigator onlymobile" href="#docsluge"><svg fill='none' stroke='#0E1A27' stroke-width='8' stroke-dashoffset='0' stroke-dasharray='0' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><line x1="20" y1="80" x2="80" y2="80" />
<line x1="50" y1="15" x2="50" y2="65" />
<polyline fill="none" points="30,50 50,65 70,50" /></svg></a>
      </div>
<!--     </template>
    <template v-slot:next>
      <div class="doc-single-content">
        <h2>{{swipeItem.t}}</h2>
        <div v-html="swipeItem.c"></div>
      </div>
    </template>
  </swiper> -->
  </div>

</template>

<script>
import { getDocs } from "~/scripts/flatDB";

export default {
  async asyncData() {
    const docs = await getDocs();
    docs.sort(function(a, b) { return a.o- b.o; })
    const swipeItem = docs['1']
    return { docs, swipeItem };
  },
  head() {
    return {
      title: "Docs - Space Buckets: DIY Indoor Gardening",
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },],
      meta: [{ hid: 'description', name: 'description', content: 'A Space Bucket is a DIY indoor garden</b> that is made by stacking plastic containers alongside lighting (CFL or LED) and airflow (PC or other fans). It is an enclosed growth chamber that can be used to garden many kinds of plants.' }]      
    };
  },
};
</script>

<style lang="scss">

details {
  background: #eee;
  padding: 10px;
  ul {
    column-count: 2;
    margin-bottom: 0;
    @media (max-width: 980px) {
      column-count: 1;
    }
    li {
      margin-right: 20px;
      //border-bottom: 1px dashed #ccc;
      padding-bottom: 10px;
      margin-bottom: 0px !important;
        break-inside: avoid;
        font-size: 14px;
      line-height: 1.4;
    }
  }
  summary {
    cursor: pointer;
    padding-left: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
}

pre {
  margin: 0;
  max-width: 500px;
  min-width: 500px;
  min-height: 200px;
  float:right;
  margin-left:40px;
  margin-bottom: 40px;
  background:#fff;
  white-space: normal;
  //border:2px solid #eee;
  position: relative;
  @media (max-width: 720px) {
    max-width: 100%;
    min-width: 100%;
  }  
  > img {
    width: 100%;
      //padding:10px;
      padding-bottom: 0;
      border:2px solid #eee;
      float: left;
  }
  > div {
    background: #eee;
    color: #333;
    font-size: 14px;
    padding: 3px 10px;
      float: left;
      width: 100%;
   /*  position: absolute;
    bottom: -20px;
    left: 0;
    right: 0; */
  }
}

.doc-single-content {
 
  @media (max-width: 980px) {
    min-height: auto;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    background: #fff;
    img {
      max-width: 150px;
    }
    tr {
      border: 1px solid #888;
    }
    th {
      background: #000;
      color: #eee;
      text-align: left;
    }
    td, th {
      padding: 5px 10px;
    }
    td:last-child {
      padding: 0;
    }
    td:first-child {
      font-weight: bold;
    }
  }
  em {
    font-style: normal;
    font-weight: bold;
    background: rgba(253,216,53,0.7);
  }
  blockquote,
  .quote {
    margin: 0;
    background: #eee;
    display: block;
    padding: 15px;
    padding-right: 50px;
    font-style: italic;
    margin-bottom: 15px;
    p {
      margin-bottom: 0;
    }
    @media (max-width: 980px) {
      padding: 10px;
    }    
    i {
      display: block;
      padding-top: 5px;
      font-style: normal;
      font-size: 14px;
    }
  }
  li,
  div {
    line-height: 1.6;
  }
  ul {
    padding-left: 25px;
    padding-right: 25px;
  }
  li {
    margin-bottom: 5px;
  }
  h3 {
    margin: 15px 0 5px;
  }
  h2 {
    margin-bottom: 10px;
  }
}

.docs-container {
  @media (max-width: 980px) {
    padding: 0;
  }
}


.exploder {
  width: 100px;
  @media (max-width: 980px) {
    display: none;
  }
}
</style>
