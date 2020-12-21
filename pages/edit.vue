<template>
  <div>
    <!--     <div class="loading-container" v-if="!isLogged && !notLogged">
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div> -->
    <div v-if="!$profileStatus.isLogged" class="logged-notice">
      You must be logged in to publish your bucket.
    </div>
    <div v-if="$profileStatus.isLogged">
      <form @submit="submit" ref="formHTML" class="post-masonry">
        <client-only>
          <div class="post-content">
            <h2>
              <input
                type="text"
                name="title"
                v-model="form.title"
                placeholder="Enter Bucket Title..."
                @input="updateTitle($event)"
                style="pointer-events: none"
              />
            </h2>
            <div
              contenteditable="true"
              ref="dataContent"
              @input="updateContent($event)"
            ></div>
          </div>
          <div class="post-support">
            <div class="post-source listad-inline">
              <div class="avatar-container">
                <svg viewBox="0 0 1792 1792">
                  <path
                    d="M1792 846q0 58-29.5 105.5t-79.5 72.5q12 46 12 96 0 155-106.5 287t-290.5 208.5-400 76.5-399.5-76.5-290-208.5-106.5-287q0-47 11-94-51-25-82-73.5t-31-106.5q0-82 58-140.5t141-58.5q85 0 145 63 218-152 515-162l116-521q3-13 15-21t26-5l369 81q18-37 54-59.5t79-22.5q62 0 106 43.5t44 105.5-44 106-106 44-105.5-43.5-43.5-105.5l-334-74-104 472q300 9 519 160 58-61 143-61 83 0 141 58.5t58 140.5zm-1374 199q0 62 43.5 106t105.5 44 106-44 44-106-44-105.5-106-43.5q-61 0-105 44t-44 105zm810 355q11-11 11-26t-11-26q-10-10-25-10t-26 10q-41 42-121 62t-160 20-160-20-121-62q-11-10-26-10t-25 10q-11 10-11 25.5t11 26.5q43 43 118.5 68t122.5 29.5 91 4.5 91-4.5 122.5-29.5 118.5-68zm-3-205q62 0 105.5-44t43.5-106q0-61-44-105t-105-44q-62 0-106 43.5t-44 105.5 44 106 106 44z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div>
                by <strong>{{ $profile.name }}</strong>
              </div>
              <div>
                <a
                  style="padding: 0; height: auto"
                  href="mailto:info@spacebuckets.com"
                  >Got stuck? info@spacebuckets.com</a
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
                v-for="(placeholder, ee) in 1"
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
            <div class="post-source listad-inline submit">
              <div class="avatar-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    fill="#FFF"
                    d="M15.213 6.639c-.276 0-.546.025-.809.068C13.748 4.562 11.716 3 9.309 3c-2.939 0-5.32 2.328-5.32 5.199 0 .256.02.508.057.756a3.567 3.567 0 00-.429-.027C1.619 8.928 0 10.51 0 12.463S1.619 16 3.617 16H8v-4H5.5L10 7l4.5 5H12v4h3.213C17.856 16 20 13.904 20 11.32c0-2.586-2.144-4.681-4.787-4.681z"
                  />
                </svg>
              </div>
              <div
                class="submit-container"
                :class="{ submitting, submiterror, submitsuccess }"
              >
                <span>{{ submitText }}</span>
                <input id="submit-btn" type="submit" name="submit" />
              </div>
            </div>
          </div>
          <div
            class="img-container"
            v-for="(img, ie) in 5"
            :key="`section-${ie}`"
          >
            <div class="pre-img">
              <input
                type="file"
                :name="`section-${ie}`"
                @change="fileChange($event, ie)"
                accept="image/png, image/jpeg, image/gif"
              />
              <img class="preview" :src="imageData[ie]" />
              <button @click.prevent="removeImg(ie)" v-if="imageData[ie]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    fill="#FFF"
                    d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 111.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </client-only>
      </form>
    </div>
  </div>
</template>

<script>
import { singlePost, randomize } from "~/store/flatDB";
import $ from "jquery";

export default {
  data() {
    return {
      imageData: {
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
      },
      imageCover: "",
      dataPlaceholder: `Enter bucket content...\n(Markdown formatting is supported)`,
      form: {
        title: "",
        slug: "",
        author: "",
        date: "",
        content: "",
        views: "",
        tags: "",
        amazon: "",
      },
      imgItems: false,
      submitText: "Submit your bucket!",
      submitting: false,
      submiterror: false,
      submitsuccess: false,
    };
  },
  updated() {
        this.$refs.dataContent.innerHTML = this.form.content;

  },
  mounted() {
    this.submitting = false;
        if (process.client) {
        this.imageData = {
        0: this.$route.params.post.images[0],
        1: this.$route.params.post.images[1],
        2: this.$route.params.post.images[2],
        3: this.$route.params.post.images[3],
        4: this.$route.params.post.images[4]
      }
      this.form.title = this.$route.params.post.title
      this.form.content = this.$route.params.post.content
    }
  },
  methods: {
    removeImg(img) {
      this.imageData[img] = null;
    },
    resizeImage() {
      var arr = Object.values(this.imageData);
      arr = arr.filter(function (e) {
        return e;
      });

      var img = new Image();
      img.src = arr[0];
      this.imageCover = arr[0].replace(/\+/g, "%2B");

      var canvas = document.createElement("canvas");
      var MAX_WIDTH = 300;
      var MAX_HEIGHT = 387;
      var width = img.width;
      var height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      return canvas.toDataURL();
    },
    updateTitle(event) {
      this.submitText = "Submit your bucket!";
      this.submiterror = false;
      this.submitsuccess = false;
    },
    updateContent(event) {
      this.dataPlaceholder = "";
      this.form.content = event.target.innerHTML;
      if (event.target.innerHTML === "") {
        this.dataPlaceholder = `Enter bucket content...\n(Markdown formatting is supported)`;
      }
      this.submitText = "Submit your bucket!";
      this.submiterror = false;
      this.submitsuccess = false;
    },
    fileChange(event, pos) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData[pos] = e.target.result.replace(/\+/g, "%2B");

          this.imgItems = true;
        };
        reader.readAsDataURL(input.files[0]);
      }
      this.submitText = "Submit your bucket!";
      this.submiterror = false;
    },
    async submit(e) {
      e.preventDefault();
      this.makePostRequest();
    },
    async makePostRequest() {
      this.submitting = true;
      var uuid = Math.random().toString(36).slice(-6);

      var redate = new Date().toLocaleDateString();
      var reslug = this.form.title
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
      var mdContent = `---
t: "${this.form.title}"
s: "${reslug}"
a: "${this.$profile.name}"
d: "${redate}"
c: "${this.form.content}"
v: ""
g: ""
z: ""`;

      this.submitText = "Submitting! Please wait...";
      var self = this;
      await this.$axios
        .post(
          "https://github-sb.herokuapp.com/post",
          {
            title: this.form.title,
            slug: reslug,
            author: this.$profile.name,
            content: mdContent,
            images: this.imageData,
            cover: this.resizeImage(),
            uuid: uuid,
          },
          { progress: false }
        )
        .then(function (response) {
          if (response.data === "OK") {
          } else {
            self.submitText = "Error! Could not submit your bucket";
            self.submiterror = true;
          }
        })
        .catch(function (error) {});

      var megapost = [];
      var postContent = {
        title: this.form.title,
        content: this.form.content,
        images: this.imageData,
        cover: this.imageCover,
      };
      if (this.$profile.post) {
        megapost.push(...this.$profile.post);
      }

      var i;
      for (i = 0; i < megapost.length; i++) {
        if (megapost[i].title === postContent.title) {
          megapost[i] = postContent;
        }
      }
      var ir;
      for (ir = 0; ir < megapost.length; ir++) {
        megapost[ir].cover = megapost[ir].cover.replace(/\+/g, "%2B");

        Object.keys(megapost[ir].images).forEach(function (key) {
          megapost[ir].images[key] = megapost[ir].images[key].replace(
            /\+/g,
            "%2B"
          );
        });
      }
      this.$profile.post = megapost;
      localStorage.setItem("post", JSON.stringify(this.$profile.post));
      var self = this;
      var formattedData = this.$profile;

      var checkPosts = "name=" + this.$profile.name;

      $.ajax({
        url: "https://boletinextraoficial.com/sb_call_post.php",
        data: checkPosts,
        type: "POST",
        dataType: "json",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        complete: function (data) {
          if (data.status === 200) {
            console.log("POSTS ✓");
            var daleID;
            var ia;
            for (ia = 0; ia < data.responseJSON.length; ia++) {
              if (
                data.responseJSON[ia].title === self.$route.params.post.title
              ) {
                daleID = data.responseJSON[ia].ID;
              }
            }
            var gameData =
              "id=" +
              daleID +
              "&name=" +
              self.$profile.name +
              "&title=" +
              self.form.title +
              "&content=" +
              self.form.content +
              "&cover=" +
              self.imageCover +
              "&image1=" +
              self.imageData[0] +
              "&image2=" +
              self.imageData[1] +
              "&image3=" +
              self.imageData[2] +
              "&image4=" +
              self.imageData[3] +
              "&image5=" +
              self.imageData[4];
            $.ajax({
              url: "https://boletinextraoficial.com/sb_up_post.php",
              data: gameData,
              type: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              dataType: "json",
              complete: function (data) {
                console.log("UPDATED ✓");
                self.submitText =
                  "Success! Your bucket has been submitted for review";
                self.submitsuccess = true;
                self.submitting = false;
              },
            });
          }
        },
        error: function (request, status, error) {
          console.log("POSTS 𐄂");
        },
      });
    },
  },
  head() {
    return {
      title: `Space Buckets - EDIT!`,
    };
  },
};
</script>
<style lang="scss" scoped>
.logged-notice {
  font-size: 17px;
  font-family: "montserrat", Arial, Helvetica, sans-serif;
  color: #fff;
  text-align: center;
  margin: 60px 0;
  text-transform: uppercase;
}

input,
textarea {
  border: 0;
  resize: none;
}
.post-content {
  padding: 10px 15px 20px;
  background: #fff;
  min-height: 150px;
  border-right: 1px solid #1a1a1b;
  overflow: auto;
  max-height: 5000px;
  margin-bottom: -1px;
  h2 input {
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    font-size: 22px;
    color: #343536;
    font-weight: 600;
    padding: 10px 0 15px;
    overflow: auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    text-transform: uppercase;
    padding-left: 0;
    width: 100%;
    &:focus {
      outline: 0;
    }
    span {
      float: right;
      font-size: 16px;
      font-family: arial, helvetica, sans-serif;
      font-weight: normal;
    }
  }
  p,
  div {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    color: #343536;
    line-height: 1.6em;
    width: 100%;
    padding: 0;
    &::first-letter {
      text-transform: uppercase;
    }
    &:focus {
      outline: 0;
    }
    &:before {
      content: attr(data-placeholder);
      white-space: pre-wrap;
      color: #757575;
    }
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
    //pointer-events: none;
    button {
      position: absolute;
      top: 0;
      right: 0;
      border: 0;
      background: none;
      background: #000;
      z-index: 999;
      padding: 5px;
      height: 30px;
      border-bottom-left-radius: 2px;
      cursor: pointer;
      &:hover {
        background: #222;
      }
      svg {
        width: 20px;
      }
    }
    img {
      position: relative;
      z-index: 9;
      /*       position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0; */
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
      background: #ddd;
      border-radius: 50%;
      padding: 7.5px;
      width: 100%;
    }
  }
  &.submit {
    padding: 0;
    height: 40px;
    .avatar-container {
      display: none;
    }
    #submit-btn {
      color: transparent;
      width: 100%;
      height: 40px;
      display: block;
      cursor: pointer;
      background: transparent;
      z-index: 999;
      position: relative;
      &[disabled="disabled"] {
        cursor: not-allowed;
        opacity: 0.5;
      }
      &:focus {
        outline: 0;
      }
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
    //animation: progress 2s linear infinite;
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
      //animation: progress 2s linear infinite;
    }
    &:before {
      top: initial;
      bottom: 14px;
      right: 150px;
    }
  }
}

.pre-img {
  min-height: 309px;
  position: relative;
  cursor: pointer;
  &:hover {
    background: #111;
  }
  &:before {
    content: "Select image";
    position: absolute;
    padding-top: 90px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #444;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23333' d='M19 2H1a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zm-1 14H2V4h16v12zm-3.685-5.123l-3.231 1.605-3.77-6.101L4 14h12l-1.685-3.123zM13.25 9a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z'/%3E%3C/svg%3E");
    background-position: center 45%;
    background-size: 75px;
    background-repeat: no-repeat;
  }
  input {
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    label {
      background: none;
    }
  }
}

.spinner {
  margin: 50px auto;
  width: 80px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color: #ccc;
  height: 100%;
  width: 6px;
  display: inline-block;

  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}

@keyframes megaload {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.nuxt-progress {
  display: none !important;
}

.submit-container {
  position: relative;
  background: rgba(253, 216, 53, 0.9);
  &:hover {
    background: rgba(253, 216, 53, 1);
  }
  span {
    z-index: 99999;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    pointer-events: none;
  }
  &.submitting:after {
    content: "";
    width: 0;
    background: rgba(76, 175, 80, 0.3);
    animation: megaload 8s linear infinite;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  &.submitting:hover {
    background: rgba(253, 216, 53, 0.9);
  }
  &.submitsuccess {
    background: #50b83c;
    cursor: not-allowed;
    pointer-events: none;
    span {
      color: #fff;
    }
  }
  &.submiterror {
    background: #d84315;
    cursor: not-allowed;
    pointer-events: none;
    span {
      color: #fff;
    }
  }
}
</style>