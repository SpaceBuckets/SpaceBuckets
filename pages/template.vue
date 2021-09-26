<template>  <div>

<!--   <swiper :next="swipeItem" type="posts">
    <template v-slot:main> -->

  <div class="post-masonry template">
    <div class="post-content">
      <h2>
        <span>{{ post.t }}</span>
        <span v-if="post.a">by <a style="padding: 0; height: auto" :href="`https://www.reddit.com/user/${post.a}`">/u/{{ post.a }}</a></span>

      </h2>
      <div v-html="post.c"></div>
    </div>
    <div class="post-support">
   
      <div class="placeholder-items">
        <div
          v-for="(placeholder, ee) in post.itemCount"
          :key="`placeholder-${ee}`"
          class="listad-inline placeholder"
        >
          <a class="ad-ad ad-ad-inline" target="_blank" href="#">
            <div class="listad-img-container">
              <div class="img-placeholder"></div>
            </div>
            <p class="item-title"></p>
      
           </a>
        </div>
      </div>
      <div class="real-items">
        <div
          v-for="(item, e) in amazonItems"
          :key="`item-${e}`"
          class="listad-inline"
        >
          <a
            class="ad-ad ad-ad-inline"
            target="_blank"
            :href="item.DetailPageURL"
          >
            <div class="listad-img-container">
              <img :src="item.Images.Primary.Medium.URL" />
            </div>
            <p class="item-title">{{ item.ItemInfo.Title.DisplayValue }}</p>
            <p class="item-price" v-if="item.Offers">
              <span class="sale-price"
                >${{ item.Offers.Listings[0].Price.Amount }}</span
              >
            </p>
            <p class="item-price" v-if="!item.Offers">
              <span class="sale-price"></span>
            </p>
            <template v-if="item.ItemInfo.ByLineInfo">
              <p class="item-brand" v-if="item.ItemInfo.ByLineInfo.Brand">
                {{ item.ItemInfo.ByLineInfo.Brand.DisplayValue }}
              </p>
              <p class="item-brand" v-if="!item.ItemInfo.ByLineInfo.Brand">
                {{ item.ItemInfo.ByLineInfo.Manufacturer.DisplayValue }}
              </p>
            </template>
            <template v-if="!item.ItemInfo.ByLineInfo">
              <p class="item-brand"></p>
            </template>

            <p class="item-tag">
              <svg width="32" height="32" viewBox="0 0 100 100">
                <path
                  d="M61.4 49.1L40 27.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l20.7 20.7-20.7 20.7c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l21.4-21.4c.2-.2.3-.4.3-.7s-.1-.5-.3-.7z"
                  fill="#ccc"
                />
              </svg>
            </p>
          </a>
        </div>
      </div>
    </div>

    <a
      class="img-c"
      v-for="(img, ie) in post.i"
      target="_blank"
      :key="`section-${ie}`"
      :style="{ 'display':'block','padding-top': img.s + '%', 'background': '#'+img.h.replace('.jpg', '') }"
      :href="`/template/${img.h}`">
      <img :src="`/template/${img.h}`" alt />
     </a>
  </div>


      <cardrelated :cat="post.g"/>
<!--     </template>
    <template v-slot:next v-if="!loadingSwipe">
      <postmasonry :post="swipeItem" variation="skeleton" />
    </template>
  </swiper> -->
    
  </div>
</template>

<script>
import { singlePost, singleRandom } from "~/scripts/flatDB";

export default {
  scrollToTop: false,
  async asyncData({ params }) {
    const post = {
      t:"SIMPLE TEMPLATE",
      s:"simple-template",
      a:"ekrof",
      d:"2014-12-15",
      c:"The classic Space Bucket design is composed of two parts: a main container for the plant, and a light-top with a <a href='https://www.amazon.com/dp/B077YK18TP/ref=as_li_ss_tl?creativeASIN=B077YK18TP&imprToken=j-ovNtjoPgOVHR3PCCMFiw&slotNum=5&&th=1&psc=1&linkCode=w61&tag=spacbuck-20&linkId=cb67c296dd4063215169e07ad58010cd'>UFO LED</a> or with <a href='https://www.amazon.com/Philips-433557-100-watt-Equivalent-Bright/dp/B00M6SR1JM/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=sb-desi-20&linkId=60f24dd82292316290d8220eaba0bfe2'>CFL bulbs</a> alongside ventilation (like PC fans). <strong>With a SB you’ll be able to grow any kind of plant indoors</strong>. Knowledge of the dangers of electricity is essential, so please follow <a href='/docs/safety-guidelines'>SAGs electrical safety guidelines</a>. The shopping list below serves as a starting point for one basic 5gal Space Bucket. You can find a more diverse selection of bucket parts at the <a href='/materials'>Materials</a> and <a href='/docs/grow-lights'>Docs section</a>.<ul><li>Three <a href='https://www.amazon.com/dp/B071WCRN9W/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=spacbuck-20&linkId=e343966eb2966fb8028e37fdb039eb31'>5gal (20l) buckets</a>, and one lid.</li><li>One <a href='https://www.amazon.com/dp/B077YK18TP/ref=as_li_ss_tl?creativeASIN=B077YK18TP&imprToken=j-ovNtjoPgOVHR3PCCMFiw&slotNum=5&&th=1&psc=1&linkCode=w61&tag=spacbuck-20&linkId=cb67c296dd4063215169e07ad58010cd'>UFO LED light</a> - OR - Four <a href='http://www.amazon.com/s/?_encoding=UTF8&amp;camp=1789&amp;creative=390957&amp;field-keywords=23w%20cfl&amp;linkCode=ur2&amp;rh=i%3Aaps%2Ck%3A23w%20cfl&amp;tag=spacbuck-20&amp;url=search-alias%3Daps&amp;linkId=TOD5YZ7WINHSD7WK'>23w CFL bulbs</a>.</li><li>Two <a href='http://amzn.to/2f0MxnO'>PC Fans</a> and a <a href='http://amzn.to/2mGyDKT'>12v 2A power supply</a>.</li><li>A <a href='http://amzn.to/2nc8JCy'>power strip</a>, and a 24h timer.</li></ul><h3>MAIN CONTAINER</h3>Pick your best looking bucket and make some holes in the bottom with a hot piece of metal (a screwdriver will work). <strong>You can also use a rotary tool (like a <a href='http://amzn.to/2nTNq5I'>Dremel</a>)</strong>. The holes will enable water drainage once the plant is inside. You can choose put reflective material on the walls. This will optimize the lighting once the light-top is stacked. <a href='http://amzn.to/2nTVcg9'>Mylar</a> sticks neatly with most glues. <strong>If you have white buckets, this covering is optional</strong>, the walls will be already reflective.Cover the outside of your main bucket with black tape, this will make it lightproof. You’re looking for lumen tightness. Finally, get your extra buckets and cut the top off: the resulting spacers can be <strong>stacked to the main bucket to add height</strong> to the garden.<ul><li><a href='/docs/main-container'>Read more about main containers alternatives »</a></li></ul><h3>AIRFLOW</h3>Once you have prepared your main container, cut holes on the sides to fit the PC Fans (8x8 are preferred). <strong>Two fans per bucket is a standard recommendation.</strong> Use the lower fan as intake, and keep the exhaust close to the lights to extract the heat. If you have only one fan, use it an active exhaust and keep the intake passive. Wire the fans with a <a href='http://amzn.to/2mGyDKT'>12v power supply</a> (a standard 2A PSU can run two fans). You can <strong>glue a <a href='http://amzn.to/2nc8JCy'>power strip</a> to one side of the main bucket.</strong> Here you will connect the lights (and timer) and the 12v power supply for the fans, among other things.<ul><li><a href='/docs/airflow-solutions'>Read more about fans and airflow alternatives »</a></li></ul><h3>LIGHTING CONFIGURATION</h3>It is time to build the light-top. <strong>We recommend at least 100 true Watts of CFL</strong>, 4 or 5 bulbs that can be arranged in many configurations. Mixing warm and cool spectrums is encouraged.Start by picking the best bucket-top and lid you have available. This process can be simplified using this <a href='http://www.amazon.com/gp/product/B0091HO0FY/ref=as_li_ss_tl?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=B0091HO0FY&amp;linkCode=as2&amp;tag=spacbuck-20'>easy 4 way adapter</a>. If you prefer custom wiring, make holes on the walls of the bucket-top to fit E27 bulb sockets, and connect them in parallel. <strong>Always solder and tape your wires!</strong> Twisting the leads is not safe enough (wire nuts can be used too). If you want an easier installation, you can use a <a href='http://amzn.to/2nU13lr'>180w UFO LED light</a> for your bucket.<ul><li><a href='/docs/lighting-solutions'>Read more about lighting configuration alternatives »</a></li></ul>",
      v:"264491",
      g:"bucket,cfl,pcfan",
      z:"B000VBW17S,B002QVFN7G,B00M6SR1JM,B01339F5ZO,B077YK18TP",
      i:[
        {h:"19140e.jpg",s:"70.1"},
        {h:"352f2f.jpg",s:"100"},
        {h:"432b1c.jpg",s:"69"},
        {h:"8a7446.jpg",s:"100"},
        {h:"cbcdce.jpg",s:"100"},

        {h:"3e3d32.jpg",s:"56.4"},

        {h:"46484a.jpg",s:"56.4"},

        {h:"262223.jpg",s:"100"},
        {h:"908e8a.jpg",s:"100"},
        ]}
      post.itemCount = post.z.split(",").length;
    return { post };
  },
  
  data() {
    return {
      swipeItem: [],
      amazonItems: [],
      loadingSwipe: true,
    };
  },
  async created() {
    if (process.client) {
      this.swipeItem = await singleRandom();
      const zItems = fetch(`https://bucket-builder.herokuapp.com/bucket-builder/${this.post.z}`)
          .then((response) => response.json())
          .then((data) => (this.amazonItems = data.ItemsResult.Items));
      
      if (this.swipeItem.z !== "" || (this.swipeItem.z !== undefined && this.swipeItem.z.length > 0)) {
        this.swipeItem.itemCount = this.swipeItem.z.split(",").length;
      }
      //this.swipeItem.i = this.swipeItem.i.slice(0, 1);

      this.loadingSwipe = false
    }
  },

  head() {
    return {
      title: `${this.post.t} - Space Buckets: DIY Indoor Gardening`,
      meta: [{ hid: 'description', name: 'description', content: this.post.c.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "") }],
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },]
    };
  },
};
</script>
