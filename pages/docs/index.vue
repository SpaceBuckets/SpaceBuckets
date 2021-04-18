<template>
  <swiper :next="swipeItem" type="docs">
    <template v-slot:main>
      <div class="gallery-container">
        <div class="search-sidebar onlydesktop">
          <div class="sidebar-content docs-links">
            <nuxt-link to="/docs">
              <h2 style="padding-bottom: 15px;">DOCS</h2>
            </nuxt-link>
            <docsnav />
          </div>
        </div>
        <div class="doc-single-content">
          <h2>Begin your Journey</h2>
          <br />
          <p>
            <strong>A Space Bucket is a DIY indoor garden</strong> that is made by stacking plastic containers alongside lighting (CFL or LED) and airflow (PC or other fans).
            <strong>It is an enclosed growth chamber that can be used to garden many kinds of plants.</strong> A Space Bucket is a versatile gardening tool that can be adapted to the users needs. Every variable of the bucket environment can be
            <strong>tweaked and upgraded</strong> at any time. For example, some plants require more light intensity than others, or different humidity conditions.
          </p>
          <p>
            Space Buckets is also
            <strong>a movement of gardeners, a community of botanically inclined individuals</strong> who like to grow plants indoors and share information freely. The
            <a
              href="https://www.reddit.com/r/SpaceBuckets"
            >/r/SpaceBuckets subreddit</a> is our main forum, and this website is its companion. Bucketeers are open, friendly and thorough, as the manifesto states.
          </p>
          <p>
            A Space Bucket can be used very effectively for cannabis cultivation, but that is not its only function.
            <strong>All plants enjoy the bucket garden, especially herbs</strong> (basil, chives, thyme, rosemary, mint and more) and fruits like cherry tomatoes and hot peppers. Bucket plant experimentation is encouraged! Why not some SB avocados, succulents or potatoes?
          </p>
          <div class="faq-flex">
            <div> 
              <h3>What plants can I grow with this setup?</h3>    
              <strong>You can grow any plant you can imagine!</strong> Space Buckets can be used for the entire life of most plants, and also works great for germinating seeds or maintaining clones. You will see that Cannabis is a very popular choice among bucketeers, but its not the only thing that thrives in a Space Bucket. Users from the subreddit community have grown <strong>Tomatoes, Peppers, Dill, Chives, Basil, and even Wasabi and Avocado!</strong> You are invited to try new types of plants, every species deserves a bucket.
            </div>
            <div>
              <h3>What type of lighting should I use?</h3>
              <strong>You can choose CFL or LED for your bucket.</strong> In both cases a minimum of 100w true watts is recommended. The LED option can be solved with a UFO light. The recommended size is the '180w' model for a typical Space Bucket. If you go the CFL route, about 4 bulbs will be needed. You can mix spectrums (2700K and 6500K) during the whole life of the plant, though warm-white is preferred in flowering. Either configuration can be used along 5050SMD LED light strips. These lights stick to the walls of the bucket for extra photosynthesis and higher yields.
              <br>
              A note on color temperature:
              Higher Color Temperature (CCT) is used for veg growth (4000k+), as bluer light helps inhibit stem elongation.
              Lower CCT is used for flowering (2700-4000k) as red/yellow light is associated with flowering growth.
              Lower CCT can be used for veg if compensated by higher light intensity (to inhibit stem elongation.)
            </div>
            <div>
              <h3>Target Lighting Levels</h3>
              <strong>There are several different 'ideal' levels of light intensity, depending on the stage of growth your plant is in.</strong> The following information is useful when figuring out how much 'headroom' you need, or distance between your light source and the canopy of your plant (many people use 'bucket spacers' to gain distance)
              (NOTE:: Lux meters in general should only be used for white light. (not mixed/monochromatic light sources e.g. 660nm red LED, 440 blue LED etc).
              <br>
              Using a lux meter, measured from the top of the canopy.<br>
              <strong>5,000-7,000 Lux</strong> - Seedling<br>
              <strong>15,000-20,000 Lux</strong> - Vegetative Growth<br>
              <strong>35,000-45,000 Lux</strong> - Flower<br>
              <strong>75,000 Lux</strong>- Point of saturation and pointless to exceed.<br>
            </div>
            <div>
              <h3>How much power does a bucket use? Will my electrical bill suffer?</h3>
              Great answer by /u/bent42: 'Two factors: <strong>the wattage of your lights, and your cost per Kilowatt.</strong> Electricity is billed by the Kilowatt/hour. So if you know the 'true' watts of your lights (and fans) and how long they are on, you can easily calculate the cost. For example: 150 watts total x 24 hours of veg = 3600 watts in 24 hours, or 3.6 kilowatts a day. The average price per kilowatt/hour in the US is around 12 cents, so 3.6*$0.12=$0.43/day in veg, or about $13/mo, and about half that in flower.'
            </div>
            <div>
              <h3>How much soil do I use? Can I plant directly in the bucket?</h3>
              <strong>About 2 or 3 gallons of soil should be enough for a bucket plant.</strong> Remember that you are growing in a tight space, and height can be an issue. You can put the plant directly in the bucket, but a separate pot (like a 10L mini bucket) is recommended. With a pot with handles you can remove the plant and water or train.
            </div>
            <div>
              <h3>Can I grow two plants at the same time?</h3>
              It is generally not recommended. <strong>A single well-trained plant</strong> with sufficient root space is the way to go.
            </div>
            <div>
              <h3>Which training techniques work best?</h3>
              <strong>LST (low-stress training)</strong> is a basic tool for keeping the height of the plant under control. You can use hooks to tie the branches to the soil or the side of the pot. You can even create a <strong>SCROG net</strong> to grow as horizontally as possible. <strong>Topping</strong> is another recommended training technique for a bucket grow: you have to cut the top-most growth of the plant. This will cause it to bush out, and two tops will appear from the 'shoulders' of the node. <strong>Pruning</strong> can be a good idea too: you can remove some leaves if they're blocking too much light from the tops. This is better done in moderation.
            </div>
            <div>
              <h3>What to do about smelly plants?</h3>
              To control odors from your plants, you will need <strong>powerful ventilation and some type of carbon filter</strong>. If you want to get rid of mostly all the smell, you should look into inline fans and filters, which can be connected with ducting to one or more buckets.

              Another option is <strong>ONA gel</strong>, as SAG says: 'ONA does wonders particularly during a harvest where a simple charcoal filter may not cut it'. You have to put the gel outside of the bucket, near the exhaust fan.
            </div>
          </div>
        </div>
        <div class="onlymobile">
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
import { getDocs } from "~/static/flatDB";

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
      meta: [{ hid: 'description', name: 'description', content: 'A Space Bucket is a DIY indoor garden</strong> that is made by stacking plastic containers alongside lighting (CFL or LED) and airflow (PC or other fans). It is an enclosed growth chamber that can be used to garden many kinds of plants.' }]      
    };
  },
};
</script>

<style lang="scss">
.doc-single-content {
  background: #fff;
  padding: 15px;
  min-height: 100vh;
  border-right: 1px solid #1a1a1b;
  @media (max-width: 980px) {
    min-height: auto;
  }
  div {
    line-height: 1.6em;
  }
  h3 {
    margin: 15px 0 5px;
  }
  h2 {
    margin-bottom: 10px;
  }
}

.gallery-container {
  margin: 0 auto;
  padding-left: 250px;
  @media (max-width: 980px) {
    padding: 0;
  }
}

.faq-flex {
  column-count: 3;
  > div {
    padding: 15px;
    overflow: auto;
    max-height: 3000px;   
    border: 1px solid rgba(0,0,0,0.5); 
    margin-bottom: 15px;
    h3 {
      margin: 0;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 980px) {
    column-count: 1;
  }  
}

.exploder {
  width: 100px;
  @media (max-width: 980px) {
    display: none;
  }
}
</style>
