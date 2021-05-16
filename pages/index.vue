<template>

  <swiper :next="swipeItem" type="posts">

    <template v-slot:main>
      <div class="intro-home">
        <nuxt-link to="/new" class="submit-link">
          <h2>Submit your build!</h2>
          <div><icon-flask/>Add a bucket to the gallery.</div>
        </nuxt-link>        
        <nuxt-link to="/materials">
          <h2>Begin your journey</h2>
          <div>
            <div class="onlydesktop"><icon-plant/><span>Become a DIY gardener.</span></div>
            <div class="onlymobile"><icon-random/><span>Swipe for a random build.</span></div>
          </div>
        </nuxt-link>
        <nuxt-link to="/gallery/1">
          <h2>Try a random build</h2>
          <div><icon-random/>Infinite bucket loop!</div>
        </nuxt-link>
        <a href="https://www.reddit.com/r/SpaceBuckets" title="/r/SpaceBuckets">
          <h2>Join our subreddit</h2>
          <div><icon-reddit/>110.000+ bucketeers await.</div>
        </a>
        <nuxt-link to="/feedback">
          <h2>Contact us!</h2>
          <div><icon-mail/>info@spacebuckets.com</div>
        </nuxt-link>
      </div>
      <div class="post-wrapper">  
        <card :id="randItem" />

        <card :id="mad" />
        
        <cardindex title="Start Here: simple DIY template" link="u/simple-template" variation="doubled"/>
        <cardindex title="Tools and Parts" link="materials" />
        
        <card :id="randItem2" />

        <card :id="gnk" />

        <cardindex title="Grow your own food" link="docs" variation="doubled"/>
        <cardindex title="Bucket Builder" link="build" />

        <card :id="simpleLED" />
        <card :id="sag" />

        <cardindex title="Play the Bucketdrome" link="drome" variation="doubled"/>
        <cardindex title="Space Buckets Manifesto" link="manifesto" />
        <card :id="ekrof" />
        <card :id="forever" />

        <card :id="hydro" />
        <card :id="garbo" />
        <card :id="tito" />

      </div>
    </template>
    <template v-slot:next v-if="!loadingSwipe">
      <postmasonry :post="swipeItem" variation="skeleton" />
    </template>
  </swiper>
</template>

<script>
import { singlePost, singleRandom } from "~/scripts/flatDB";

export default {
  async asyncData({ params }) {
    const mad = await singlePost("the-mad-scientist");
    const forever = await singlePost("budsforever");
    const ekrof = await singlePost("green-top-tower");
    const simpleLED = await singlePost("bruteled");
    const gnk = await singlePost("gnktote");
    const sag = await singlePost("superangryguy");
    const hydro = await singlePost("haplessastronaut");
    const morri = await singlePost("morrigan-disapproves");
    const tito = await singlePost("titobin");
    const garbo = await singlePost("doublejallday-bin");
    const randItem = await singleRandom();
    const randItem2 = await singleRandom();

    return { randItem2,randItem,garbo,tito,morri,hydro, sag, ekrof, simpleLED, gnk, mad, forever };
  },
  data() {
    return {
      swipeItem: [],
      loadingSwipe: true,
    };
  },
  async created() {
    if (process.client) {
      this.swipeItem = await singleRandom();
      if (this.swipeItem.z !== "" || (this.swipeItem.z !== undefined && this.swipeItem.z.length > 0)) {
        this.swipeItem.itemCount = this.swipeItem.z.split(",").length;
      }
      //this.swipeItem.i = this.swipeItem.i.slice(0,1)
      this.loadingSwipe = false 

    }    
  },
  head() {
    return {
      title: "Space Buckets - DIY indoor garden - Grow plants with LEDs",
      link: [ { rel: "canonical", href: "https://spacebuckets.com" },],
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'DIY Indoor Gardening with stacked containers and LED or CFL lights. Build your garden, grow bucket plants indoors and join our community!'
      }]           
    };
  },
};
</script>

<style lang="scss" scoped>

.post-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
}

.intro-home {
  text-align: center;
  font-size: 0;
  overflow: hidden;
  margin-top: 15px;
  margin-bottom: 5px;
  width: 100%;
  height: 75px;
  position: relative;
  > a {
    text-decoration: none;
    width: 300px;
    margin: 0 10px 15px;
    display: inline-flex;
    text-align: left;
    position: relative;
    height: 74px;
    padding: 15px 0;
    flex-direction: column;
    justify-content: center;
    &:hover h2 {
      color: #fdd835;
    }
    &.submit-link {
    background: rgba(0, 77, 71, 0.3);
    border: 2px solid #004d47;    }
    h2 {
      margin: 0 0 2px;
      padding-left: 78px;
      color: #eee;
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
    }  
    h2 + div {
      color: #eee;
      font-size: 15px;
      padding-left: 78px;
      font-family: Arial, Helvetica, sans-serif;
    }  
    svg {
      position: absolute;
      top: 20px;
      left: 25px;
      height: 32px;
      width: auto;
    }  
  }
}
 
</style>
