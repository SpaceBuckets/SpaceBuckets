<template>
<div>

<!-- 
  <swiper :next="swipeItem" type="posts">

    <template v-slot:main> -->
      <div class="intro-home">
        <nuxt-link :to="item.link" v-for="(item, i) in introItems" :key="i">
          <h2>{{item.title}}</h2>
          <div><component :is="item.icon"/>{{item.desc}}</div>
        </nuxt-link>        

        <a href="https://www.reddit.com/r/SpaceBuckets" title="/r/SpaceBuckets">
          <h2>Join our subreddit</h2>
          <div><icon-reddit/>118.000+ bucketeers await.</div>
        </a>        
      </div>
      <div class="post-wrapper">  
        <card :id="randItem" />
        <nuxt-link class="recard" to="/docs/begin-your-journey"> 
            <img :src="`/index/docs2.jpg`" />
            <h2>SB KNOWLEDGE BASE</h2>
          </nuxt-link>

        <cardindex title="Start Here: simple DIY template" link="template" variation="doubled"/>

        <cardindex title="Bucket Builder" link="build" />


        <card :id="mad" />
        <carddoc :doc="randDoc"/>


        <carddocindex title="Grow your own food" link="begin-your-journey" variation="doubled" img="docs"/>

        <cardindex title="Tools and Parts" link="materials" />
          <card :id="simpleLED" />
        <carddoc :doc="randDoc2"/>

        <cardindex title="Play the Bucketdrome" link="play" variation="doubled"/>

<!--         <cardindex title="Space Buckets Manifesto" link="manifesto" />
 -->

        <card :id="sag" />
 
        <card :id="gnk" />
        <card :id="exactly" />

        <card :id="ekrof" />
        <card :id="forever" />
         <card :id="nosolder" />
        <card :id="tridi" />

        <card :id="hydro" />
        <card :id="garbo" />
        <card :id="tito" />

      </div>
<!--     </template>
    <template v-slot:next v-if="!loadingSwipe">
      <postmasonry :post="swipeItem" variation="skeleton" />
    </template>
  </swiper> -->
  </div>

</template>

<script>
import { singlePost, singleRandom, singleRandomDoc } from "~/scripts/flatDB";

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
    const exactly = await singlePost("exactly");
    const meepsi = await singlePost("meepsi");
        const nosolder = await singlePost("no-solder-led");
        const tridi = await singlePost("3drenders");

    const garbo = await singlePost("doublejallday-bin");
    const randItem = await singleRandom();
    const randItem2 = await singleRandom();
    const randDoc = await singleRandomDoc();
    const randDoc2 = await singleRandomDoc();
     var introItems = [
        {
          link: "/docs/begin-your-journey",
          title: "SB Knowledge Base",
          desc: "Browse the Space Bucket Docs",
          icon: "icon-flask"
        },
        {
          link: "/materials",
          title: "Begin your journey",
          desc: "Become a DIY gardener.",
          icon: "icon-plant"
        },
        {
          link: "/gallery/1",
          title: "Try a random bucket",
          desc: "Infinite space bucket loop!",
          icon: "icon-random"
        },
                         
      ]
    introItems = introItems.sort(() => Math.random() - 0.5)

    return { tridi,nosolder,meepsi,exactly,randDoc,randDoc2,introItems, randItem2,randItem,garbo,tito,morri,hydro, sag, ekrof, simpleLED, gnk, mad, forever };
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
      title: "Space Buckets: DIY indoor gardening - Grow plants with LEDs",
      link: [ { rel: "canonical", href: "https://spacebuckets.com" },],
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'DIY Indoor Garden with LED lights or CFL bulbs. Learn how to build a DIY grow bucket, train plants for small spaces and join our community! '
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
  margin-top: 10px;
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



.recard {
  width: 300px;
  height: 387px;
  margin: 10px;
  float: left;
  position: relative;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  user-select: none;
  > h2 {
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #fafafa;
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-size: 16px;
    letter-spacing: -1px;
    line-height: 32px;
    padding-left: 15px;
    background-color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;  
  }
  > p {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 16px;
    padding: 0 20px;
    line-height: 1.5em;
    color: #aaa;
  }
}
 
</style>
