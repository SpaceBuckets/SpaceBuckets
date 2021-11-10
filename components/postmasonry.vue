<template>
  <div class="post-masonry" :class="variation">
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
      <div class="real-items" v-if="variation != 'skeleton'">
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
      :href="`/u/${post.s}/${img.h}`">
      <img :src="`/u/${post.s}/${img.h}`" alt />
     </a>
  </div>
</template>

<script>

export default {
  name: "postmasonry",
  props: ["post", "variation"],
  data() {
    return {
      amazonItems: [],
      relatedItems: [],
      swipeItem: [],
      progressScroll: 0,
       savedActive: false,
    };
  },
  async created() {  
    if (process.client && this.$props.variation != "skeleton") {
      if (
        this.post.z !== "" ||
        (this.post.z !== undefined && this.post.z.length > 0)
      ) {
        const zItems = fetch(
          `https://bucket-builder.herokuapp.com/bucket-builder/${this.post.z}`
        )
          .then((response) => response.json())
          .then((data) => (this.amazonItems = data.ItemsResult.Items));
      }
    }
  },
};
</script>

<style lang="scss">
.progress {
  display: flex;
  height: 2px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  z-index: 999999;
  pointer-events: none;
}

.progress:before {
  content: "";
  width: calc(var(--value) * 1%);
  background: #fdd835;
  transition: width 0.5s linear;
}

.post-content {
  padding: 10px 15px 20px;
  background: #fafafa;
  min-height: 150px;
  border-right: 1px solid #1a1a1b;
  overflow: auto;
  max-height: 5000px;
  margin-bottom: -1px;
  h1,
  h2 {
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    font-size: 22px;
    color: #343536;
    font-weight: 600;
    padding: 10px 0 15px;
    margin-bottom: 0;
    overflow: auto;
     text-transform: uppercase;
    > * {
      flex: 1;
    }
    span {
      max-width: max-content;
      + span {
        display: block;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        text-transform: none;
        font-weight: normal;
        padding-top: 3px;
      }
    }
    .sav-fav {
      background: none;
      border: 0;
      padding: 0;
      cursor: pointer;
      position: relative;
      max-width: 50px;

      svg {
        position: absolute;
        left: 0;
        top: 4px;
        width: 25px;
        height: auto;
        margin-left: 10px;
      }
      &.savedActive {
        pointer-events: none;
      }
      &.savedActive,
      &:hover {
        svg {
          fill: #a33426;
        }
        svg path {
          fill: #a33426;
        }
      }
    }
  }
  p,
  div {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    color: #343536;
    line-height: 1.6;
  }
}

.post-masonry {
  column-count: 4;
  column-gap: 0;
  font-size: 0;
  background: #000;
  border-top: 1px solid #1a1a1b;
   @media (max-width: 1220px) {
    column-count: 3;
    column-gap: 0;
    &.template { column-count: 3; }    
  }
  @media (max-width: 660px) {
    column-count: auto;
    column-gap: 0;
    &.template { column-count: auto; }    
  }
  .img-c {
    background: #151515;
    position: relative;
    overflow: auto;
    max-height: 3000px;
    border: 1px solid #1a1a1b;
    user-select: none;
    //pointer-events: none;
    display: block;
    width: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100%;
    }
  }
}

.post-support {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  color: #343536;
  background: #fafafa;
  border-right: 1px solid #1a1a1b;
  border-bottom: 1px solid #1a1a1b;
  overflow: auto;
  max-height: 3000px;
  position: relative;
  .real-items {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 1px;
  }
  h3 {
    font-size: 16px;
    border-bottom: 1px solid #eee;
    text-transform: uppercase;
    padding: 10px 20px;
  }
  .listad-inline {
    background: #fafafa;
    width: 100%;
    float: left;
    border-top: 1px solid #eee;
    &:after {
      display: table;
      content: "";
      clear: both;
    }
    .listad-img-container {
      width: 60px;
      margin-top: 3px;
      float: left;
      max-height: 50px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 5px;
      img {
        padding: 5px;
      }
    }
    p {
      margin: 0;
    }
    a {
      text-decoration: none;
      display: block;
      position: relative;
      padding-left: 70px;
      height: 60px;
      background: white;
      padding-right: 130px;
      &:after {
        display: table;
        content: "";
        clear: both;
      }
    }
    .item-title {
      float: left;
      margin: 10px 0 0 5px;
      max-height: 40px;
      overflow: hidden;
      line-height: 20px;
      padding: 0;
      color: #1d6ebf;
      font-size: 15px;

      &::first-line {
        font-weight: bold;
      }
    }
    .item-price {
      position: absolute;
      top: 10px;
      width: auto;
      right: 30px;
      font-size: 14px;
      margin: 0;
      color: #a33426;
      font-weight: bold;
    }
    .item-brand {
      font-size: 14px;
      position: absolute;
      right: 30px;
      width: 95px;
      bottom: 11px;
      font-weight: normal;
      text-align: right;
      color: #34353675;
      overflow: hidden;
      height: 18px;
    }
    .item-tag {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
    }
  }
}
@keyframes progress {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

.post-source {
  font-size: 14px;
  padding: 10px 20px 10px;
  border-top: 1px solid #eee;
  line-height: 20px;
  height: 60px;
  position: relative;
  padding-left: 75px;
  .avatar-container {
    padding: 8px;
    max-height: 60px;
    width: 60px;
    position: absolute;
    left: 5px;
    top: 0;
    svg {
      background: #eee;
      border-radius: 50%;
      padding: 7.5px;
      width: 100%;
    }
  }
}
.listad-inline.placeholder {
  .listad-img-container {
    overflow: visible;
  }
  .img-placeholder {
    height: 45px;
    width: 45px;
    background: #34353610;
    display: block;
    border-radius: 50%;
    position: relative;
    top: 5px;
    left: 5px;
    animation: progress 2s linear infinite;
  }
  .item-title {
    &:before,
    &:after {
      content: "";
      min-height: 12px;
      background: #34353610;
      display: block;
      position: absolute;
      right: 120px;
      left: 75px;
      top: 14px;
      animation: progress 2s linear infinite;
    }
    &:before {
      top: initial;
      bottom: 14px;
      right: 150px;
    }
  }
}
</style>
