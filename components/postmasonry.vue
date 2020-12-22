<template>
  <div class="post-masonry" :class="variation">
    <div class="progress" :style="{ '--value': progressValue * 100 }"></div>

    <div class="post-content">
      <h2>
        <span>{{ post.t }}</span>
        <button
          v-if="$profileStatus.isLogged"
          title="Save to Favorites"
          aria-label="Save to Favorites"
          @click="saveFavorite(post.t,post.s)"
          class="sav-fav"
          :class="{ savedActive }"
        >
          <svg
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 1.155c-1.672-1.534-4.383-1.534-6.055 0L9 2.197 7.864 1.155c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246L9 14l7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"
              fill="#fff"
            />
          </svg>
          <svg
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 1.156c-1.672-1.535-4.383-1.535-6.055 0L9 2.197 7.864 1.156c-1.672-1.535-4.382-1.535-6.054 0-1.881 1.726-1.881 4.519 0 6.245L9 14l7.19-6.599c1.88-1.726 1.88-4.52 0-6.245zm-1.066 5.219L9 12.09 2.875 6.375c-.617-.567-.856-1.307-.856-2.094 0-.787.138-1.433.756-1.999.545-.501 1.278-.777 2.063-.777.784 0 1.517.476 2.062.978L9 4.308l2.099-1.826c.546-.502 1.278-.978 2.063-.978.785 0 1.518.276 2.063.777.618.566.755 1.212.755 1.999 0 .787-.238 1.528-.856 2.095z"
              fill="#ccc"
            />
          </svg>
        </button>
      </h2>
      <div v-html="post.c"></div>
    </div>
    <div class="post-support">
      <div class="post-source listad-inline" v-if="post.a">
        <div class="avatar-container">
          <svg viewBox="0 0 1792 1792">
            <path
              d="M1792 846q0 58-29.5 105.5t-79.5 72.5q12 46 12 96 0 155-106.5 287t-290.5 208.5-400 76.5-399.5-76.5-290-208.5-106.5-287q0-47 11-94-51-25-82-73.5t-31-106.5q0-82 58-140.5t141-58.5q85 0 145 63 218-152 515-162l116-521q3-13 15-21t26-5l369 81q18-37 54-59.5t79-22.5q62 0 106 43.5t44 105.5-44 106-106 44-105.5-43.5-43.5-105.5l-334-74-104 472q300 9 519 160 58-61 143-61 83 0 141 58.5t58 140.5zm-1374 199q0 62 43.5 106t105.5 44 106-44 44-106-44-105.5-106-43.5q-61 0-105 44t-44 105zm810 355q11-11 11-26t-11-26q-10-10-25-10t-26 10q-41 42-121 62t-160 20-160-20-121-62q-11-10-26-10t-25 10q-11 10-11 25.5t11 26.5q43 43 118.5 68t122.5 29.5 91 4.5 91-4.5 122.5-29.5 118.5-68zm-3-205q62 0 105.5-44t43.5-106q0-61-44-105t-105-44q-62 0-106 43.5t-44 105.5 44 106 106 44z"
              fill="#fff"
            />
          </svg>
        </div>
        <div>
          by <strong>/u/{{ post.a }}</strong>
        </div>
        <div>
          <a
            style="padding: 0; height: auto"
            :href="`https://www.reddit.com/user/${post.a}`"
            >View on Reddit</a
          >
        </div>
        <p class="item-tag">
          <svg width="32" height="32" viewBox="0 0 100 100">
            <path
              d="M61.4 49.1L40 27.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l20.7 20.7-20.7 20.7c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l21.4-21.4c.2-.2.3-.4.3-.7s-.1-.5-.3-.7z"
              fill="#ccc"
            />
          </svg>
        </p>
      </div>
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
            <p class="item-price">
              <span class="sale-price"></span>
            </p>
            <p class="item-brand"></p>
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
    <div
      class="img-container"
      v-for="(img, ie) in post.i"
      :key="`section-${ie}`"
    >
      <img :src="`/builds/${post.s}/${img.h}`" alt />
      <div :style="{ 'padding-top': img.s + '%' }"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "postmasonry",
  props: ["post", "variation"],
  data() {
    return {
      amazonItems: [],
      relatedItems: [],
      swipeItem: [],
      progressScroll: 0,
      progressValue: 0,
      savedActive: false,
    };
  },
  updated() {
    if (process.client) {
      var savedFavs = this.$profile.favs;
      var i;
      if (savedFavs) {

      for (i = 0; i < savedFavs.length; i++) {
        if (savedFavs[i] === this.post.s) {
          this.savedActive = true;
        }
      }
            }

    }
  },
  async created() {
    if (process.client) {
      var savedFavs = JSON.parse(localStorage.getItem("favs"));
      var i;
            if (savedFavs) {

      for (i = 0; i < savedFavs.length; i++) {
        if (savedFavs[i].s === this.post.s) {
          this.savedActive = true;
        }
      }
            }

    }    
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
  methods: {
    saveFavorite(postTitle,postSlug) {
      var newFav = { t: postTitle, s: postSlug }
      var currFavs = this.$profile.favs;
      currFavs.push(newFav);
      this.progressValue = 0.7
      this.savedActive = true;
      var saveData =
        "name=" + this.$profile.name + "&obj=" + JSON.stringify(currFavs);
      var self = this;

       $.ajax({
        url: "https://boletinextraoficial.com/sb_fav_up.php",
        data: saveData,
        type: "POST",
        dataType: "json",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        complete: function (data) {
          console.log("SAVED FAVORITE ✓");
          self.progressValue = 1
          self.$profile.favs = currFavs;
          localStorage.setItem('favs',JSON.stringify(currFavs))
          setTimeout(() => { self.progressValue = 0; },2000);
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.progress {
  display: flex;
  height: 2px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  z-index: 9999;
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
  background: #fff;
  min-height: 150px;
  border-right: 1px solid #1a1a1b;
  overflow: auto;
  max-height: 5000px;
  margin-bottom: -1px;
  h2 {
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    font-size: 22px;
    color: #343536;
    font-weight: 600;
    padding: 10px 0 15px;
    overflow: auto;
    display: flex;
    text-transform: uppercase;
    > * {
      flex: 1;
    }
    span {
      max-width: max-content;
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
    line-height: 1.6em;
  }
}

.post-masonry {
  column-count: 3;
  column-gap: 0;
  font-size: 0;
  background: #000;
  border-top: 1px solid #1a1a1b;
  @media (max-width: 1220px) {
    column-count: 2;
    column-gap: 0;
  }
  @media (max-width: 660px) {
    column-count: auto;
    column-gap: 0;
  }
  .img-container {
    background: #151515;
    position: relative;
    overflow: auto;
    max-height: 3000px;
    border: 1px solid #1a1a1b;
    user-select: none;
    pointer-events: none;
    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  &.skeleton {
    /*     display: flex;
    flex-direction: column;
    .post-support,
    .post-content {
      min-height: initial;
      overflow: initial;
    } */
  }
}

.post-support {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  color: #343536;
  background: #fff;
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
    background: #fff;
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
