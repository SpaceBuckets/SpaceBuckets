<template>
  <swiper :next="swipeItem" type="docs">
    <template v-slot:main>
      <div class="docs-container">
        <div class="docs-sidebar onlydesktop">
          <div class="sidebar-content docs-links">
            <nuxt-link to="/docs/">
              <h2 style="margin:0">DOCS</h2>
            </nuxt-link>
            <docsnav />
          </div>
        </div>
        <div class="doc-single-content">
          <h2>Begin your Journey</h2>
          <br />
                    <div>

          <p>
            <b>A Space Bucket is a DIY indoor garden</b> that is made by stacking plastic containers alongside lighting (CFL or LED) and airflow (PC or other fans).
            <b>It is an enclosed growth chamber that can be used to garden many kinds of plants.</b> A Space Bucket is a versatile gardening tool that can be adapted to the users needs. Every variable of the bucket environment can be
            <b>tweaked and upgraded</b> at any time. For example, some plants require more light intensity than others, or different humidity conditions.
          </p>
          <p>
            Space Buckets is also
            <b>a movement of gardeners, a community of botanically inclined individuals</b> who like to grow plants indoors and share information freely. The
            <a
              href="https://www.reddit.com/r/SpaceBuckets"
            >/r/SpaceBuckets subreddit</a> is our main forum, and this website is its companion. Bucketeers are open, friendly and thorough, as the manifesto states.
          </p>
          <p>
            A Space Bucket can be used very effectively for cannabis cultivation, but that is not its only function.
            <b>All plants enjoy the bucket garden, especially herbs</b> (basil, chives, thyme, rosemary, mint and more) and fruits like cherry tomatoes and hot peppers. Bucket plant experimentation is encouraged! Why not some SB avocados, succulents or potatoes?
          </p>
            </div> 

             <div> 
              <h3>What plants can I grow with this setup?</h3>    
              <b>You can grow any plant you can imagine!</b> Space Buckets can be used for the entire life of most plants, and also works great for germinating seeds or maintaining clones. You will see that Cannabis is a very popular choice among bucketeers, but its not the only thing that thrives in a Space Bucket. Users from the subreddit community have grown <b>Tomatoes, Peppers, Dill, Chives, Basil, and even Wasabi and Avocado!</b> You are invited to try new types of plants, every species deserves a bucket.
            </div>
            <div>
              <h3>What type of lighting should I use?</h3>
              <b>You can choose CFL or LED for your bucket.</b> In both cases a minimum of 100w true watts is recommended. The LED option can be solved with a UFO light. The recommended size is the '180w' model for a typical Space Bucket. If you go the CFL route, about 4 bulbs will be needed. You can mix spectrums (2700K and 6500K) during the whole life of the plant, though warm-white is preferred in flowering. Either configuration can be used along 5050SMD LED light strips. These lights stick to the walls of the bucket for extra photosynthesis and higher yields.
              <br>
              A note on color temperature:
              Higher Color Temperature (CCT) is used for veg growth (4000k+), as bluer light helps inhibit stem elongation.
              Lower CCT is used for flowering (2700-4000k) as red/yellow light is associated with flowering growth.
              Lower CCT can be used for veg if compensated by higher light intensity (to inhibit stem elongation.)
            </div>
            <div>
              <h3>How much power does a bucket use? Will my electrical bill suffer?</h3>
              Great answer by /u/bent42: 'Two factors: <b>the wattage of your lights, and your cost per Kilowatt.</b> Electricity is billed by the Kilowatt/hour. So if you know the 'true' watts of your lights (and fans) and how long they are on, you can easily calculate the cost. For example: 150 watts total x 24 hours of veg = 3600 watts in 24 hours, or 3.6 kilowatts a day. The average price per kilowatt/hour in the US is around 12 cents, so 3.6*$0.12=$0.43/day in veg, or about $13/mo, and about half that in flower.'
            </div>
            <div>
              <h3>How much soil do I use? Can I plant directly in the bucket?</h3>
              <b>About 2 or 3 gallons of soil should be enough for a bucket plant.</b> Remember that you are growing in a tight space, and height can be an issue. You can put the plant directly in the bucket, but a separate pot (like a 10L mini bucket) is recommended. With a pot with handles you can remove the plant and water or train.
            </div>
            <div>
              <h3>Can I grow two plants at the same time?</h3>
              It is generally not recommended. <b>A single well-trained plant</b> with sufficient root space is the way to go.
            </div>
            <div>
              <h3>Which training techniques work best?</h3>
              <b>LST (low-stress training)</b> is a basic tool for keeping the height of the plant under control. You can use hooks to tie the branches to the soil or the side of the pot. You can even create a <b>SCROG net</b> to grow as horizontally as possible. <b>Topping</b> is another recommended training technique for a bucket grow: you have to cut the top-most growth of the plant. This will cause it to bush out, and two tops will appear from the 'shoulders' of the node. <b>Pruning</b> can be a good idea too: you can remove some leaves if they're blocking too much light from the tops. This is better done in moderation.
            </div>
            <div>
              <h3>What to do about smelly plants?</h3>
              To control odors from your plants, you will need <b>powerful ventilation and some type of carbon filter</b>. If you want to get rid of mostly all the smell, you should look into inline fans and filters, which can be connected with ducting to one or more buckets.

              Another option is <b>ONA gel</b>, as SAG says: 'ONA does wonders particularly during a harvest where a simple charcoal filter may not cut it'. You have to put the gel outside of the bucket, near the exhaust fan.
            </div>
         </div>
        <div class="docs-sidebar onlymobile">
          <docsnav />
        </div>
      </div>
    </template>
    <template v-slot:next>
      <div class="doc-single-content">
        <h2>{{swipeItem.t}}</h2>
        <div v-html="swipeItem.c"></div>
      </div>
    </template>
  </swiper>
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
      title: "Space Buckets - Docs",
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },],
      meta: [{ hid: 'description', name: 'description', content: 'A Space Bucket is a DIY indoor garden</b> that is made by stacking plastic containers alongside lighting (CFL or LED) and airflow (PC or other fans). It is an enclosed growth chamber that can be used to garden many kinds of plants.' }]      
    };
  },
};
</script>

<style lang="scss">

.floatedimg {
  max-width: 400px;
  min-width: 400px;
  float:right;
  margin-left:30px;
  margin-bottom: 30px;
  background:#fff;
  border:2px solid #eee;
  @media (max-width: 620px) {
    max-width: 100%;
    min-width: 100%;
  }  
  > img {
      padding:10px;
      padding-bottom: 0;
  }
  > div {
    background: #eee;
    color: #333;
    font-size: 14px;
    padding: 2px 10px;
  }
}

.doc-single-content {
  background: #fafafa;
  padding: 15px;
  min-height: 100vh;
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
  strong {
    background: rgba(253,216,53,0.7);
  }
  .quote {
    margin-bottom: 15px;
    background: #eee;
    display: block;
    padding: 15px;
    padding-right: 50px;
    font-style: italic;
    @media (max-width: 980px) {
      padding: 10px;
    }    
/*     &:before {
      content: open-quote;
      font-size: 40px;
      font-family: Georgia, "Times New Roman", Times, serif;
      color: #888;
    } */
    i {
      display: block;
      padding-top: 5px;
      font-style: normal;
      font-size: 14px;
    }
  }
  li,
  div {
    line-height: 1.6em;
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
