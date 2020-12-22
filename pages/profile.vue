<template>
  <div class="login-inputs" :class="{ loading: isLoading }">
    <client-only>
      <div class="progress" :style="{ '--value': progressValue * 100 }"></div>

      <!-- LOGIN FORM -->
      <div v-if="!$profileStatus.isLogged" style="width: 100%">
        <div class="login-wrap">
          <h3>Login or Register »</h3>
          <form autocomplete="new-password" @submit.prevent="registerUser()">
            <input
              ref="dataUser"
              autocomplete="new"
              name="user"
              type="text"
              placeholder="Username"
            />
            <input
              @focus="pinError = false"
              :class="{ error: pinError }"
              ref="dataPin"
              autocomplete="new"
              name="pin"
              type="password"
              placeholder="Password"
            />
            <input ref="dataGame" name="data" type="hidden" />
            <div style="display: flex; justify-content: space-between">
              <nuxt-link to="/">Back</nuxt-link>
              <button class="subbtn">Submit »</button>
            </div>
          </form>
        </div>
      </div>

      <!-- LOGGED ACTIONS -->
      <template v-if="$profileStatus.isLogged">
        <div class="profile-container">
          <div class="yourbucket">
            <div class="avatar">
              <input type="text" :value="$profile.name.charAt(0)" />
            </div>
            <h4>WELCOME, {{ $profile.name }}</h4>

            <p>
              This is your personal bucket profile. It contains your submitted
              and favorite posts.
            </p>
            <div class="yourbucket-actions">
              <button @click="logOuter()">
                LOG OUT
                <icon-logout />
              </button>
            </div>
          </div>
          <div class="recards-container">
            <div>
            <nuxt-link
              class="bucketdrome design"
              :to="{
                name: 'new',
              }"
            >
              <h2>SUBMIT YOUR BUILD</h2>
              <explode />
              <p>Upload a new bucket to the gallery.</p>
            </nuxt-link>
            <nuxt-link to="/drome" class="bucketdrome">
              <h2>PLAY BUCKETDROME</h2>

              <div class="scene buildActiveGarage">
                <div class="explode-container">
                  <machine />
                  <frame />
                </div>
                <div class="box">
                  <div class="box__face box__face--back"></div>
                  <div class="box__face box__face--right"></div>
                  <div class="box__face box__face--left"></div>
                  <div class="box__face box__face--top"></div>
                  <div class="box__face box__face--bottom"></div>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link class="bucketdrome designer onlydesktop-in" :to="{ name: 'designer' }">
              <h2>3D DESIGNER</h2>
              <img :src="`/index/designer.jpg`" />
            </nuxt-link>
            </div>
            <!-- USER POSTS -->
            <template>
              <h2 class="title-separator">
                Submitted ({{ $profile.post.length }}) »
              </h2>
              <div class="bucket-builds" v-if="$profile.post && loadKey">
                <template v-for="(post, ee) in $profile.post.slice().reverse()">
                  <div class="recard" v-if="post.title" :key="`post-${ee}`">
                    <!-- POST STATUS -->

                    <template v-for="(pending, eer) in authorTitles">
                      <div
                        class="pending-bucket"
                        :key="`post-${eer}`"
                        v-if="pending.toLowerCase() === post.title.toLowerCase()"
                      >
                        PENDING REVIEW
                      </div>
                      <div
                        class="pending-bucket approved"
                        v-else
                        :key="`post-${eer}`"
                      >
                        APPROVED
                      </div>
                    </template>

                    <!-- POST ACTIONS -->
                    <div class="actions-container">
                      <button
                        class="remove-btn"
                        @click.prevent="removeBuild(post.title)"
                      >
                        <icon-remove />
                        REMOVE
                      </button>
                    </div>

                    <!-- POST -->
                    <h2>
                      {{ post.title }}
                    </h2>
                    <nuxt-link :to="{ name: 'edit', params: { post } }">
                      <img :src="post.cover" alt />
                    </nuxt-link>
                  </div>
                </template>
              </div>
            </template>
            <template>
              <h2 class="title-separator">
                Favorites ({{ $profile.favs.length }}) »
              </h2>
              <div class="bucket-builds" v-if="favKey">
                <template v-for="(post, ee) in $profile.favs">
                  <nuxt-link
                    class="recard"
                    v-if="post"
                    :key="`post-${ee}`"
                    :to="{ name: 'u-slug', params: { slug: `${post.s}` } }"
                  >
                    <!-- FAV -->
                    <h2>
                      {{ post.t }}
                    </h2>
                    <img :src="`/builds/${post.s}/cover.jpg`" alt />

                    <!-- FAV ACTIONS -->
                    <div class="actions-container">
                      <button
                        class="remove-btn"
                        @click.prevent="removeFav(post.t)"
                      >
                        <icon-remove />
                        REMOVE
                      </button>
                    </div>

                  </nuxt-link>
                </template>
              </div>
            </template>
          </div>
        </div>
      </template>
    </client-only>
  </div>
</template>
<script>
import $ from "jquery";
import { getAuthor } from "~/store/flatDB";

export default {
  head() {
    return {
      title: "Space Buckets - SUBMIT!",
    };
  },
  data: function () {
    return {
      pinError: false,
      creatingUser: false,
      isLoading: false,
      welcomeHidden: false,
      currentMessage: [],
      progressValue: 0,
      favKey: true,
      loadKey: true,
      nametest: "test",
      imageAvatar: "",
      currentPosts: [],
      authorPosts: [],
      authorTitles: [],
    };
  },
  async created() {
    if (process.client) {
      var authorGetPosts = await getAuthor(
        JSON.parse(localStorage.getItem("name"))
      );
      this.currentPosts = this.$profile.post;

      if (this.currentPosts !== null) {
        var i;
        for (i = 0; i < authorGetPosts.length; i++) {
          this.authorPosts.push(authorGetPosts[i].t.toLowerCase());
        }
        var ia;
        for (ia = 0; ia < this.currentPosts.length; ia++) {
          this.authorTitles.push(this.currentPosts[ia].title.toLowerCase());
        }

        this.authorTitles = this.authorTitles.filter(
          (val) => !this.authorPosts.includes(val)
        );
      }
    }
  },
  methods: {
    logOuter() {
      if (process.client) {
        this.$profile.name = "";
        this.$profile.pin = "";
        this.$profile.prefs = "";
        this.$profile.drome = "";
        this.$profile.post = "";
        this.$profile.favs = "";
        localStorage.clear();
        this.$router.go();
      }
    },
    removeFav(favTitle) {
      var myFav = this.$profile.favs;
      for (let [key, value] of Object.entries(myFav)) {
        if (value.t === favTitle) {
          myFav[key] = "";
        }
      }
      Object.keys(myFav).forEach(
        (k) => !myFav[k] && myFav[k] !== undefined && delete myFav[k]
      );

      this.$profile.favs = myFav.flat();

      var delFavData =
        "name=" + this.$profile.name + "&obj=" + JSON.stringify(myFav.flat());
      var self = this;

      $.ajax({
        url: "https://boletinextraoficial.com/sb_fav_up.php",
        data: delFavData,
        type: "POST",
        dataType: "json",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        complete: function (data) {
          console.log("DELETED ✓");
          localStorage.setItem("favs", JSON.stringify(self.$profile.favs));
          self.favKey = false;
          self.$nextTick().then(() => {
            self.favKey = true;
          }); //self.$router.go();
        },
      });
    },
    removeBuild(postTitle) {
      var delData = "name=" + this.$profile.name + "&title=" + postTitle;
      var self = this;

      $.ajax({
        url: "https://boletinextraoficial.com/sb_del.php",
        data: delData,
        type: "POST",
        dataType: "json",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        complete: function (data) {
          console.log("DELETED ✓");
          var myObj = self.$profile.post;
          for (let [key, value] of Object.entries(myObj)) {
            if (value.title === postTitle) {
              myObj[key] = "";
            }
          }
          Object.keys(myObj).forEach(
            (k) => !myObj[k] && myObj[k] !== undefined && delete myObj[k]
          );

          self.$profile.post = myObj.flat();

          localStorage.setItem("post", JSON.stringify(self.$profile.post));
             self.loadKey = false;
          self.$nextTick().then(() => {
            self.loadKey = true;
          });
          //self.$router.go();
        },
      });
    },
    registerUser() {
      this.$profile.name = this.$refs.dataUser.value;
      this.$profile.pin = this.$refs.dataPin.value;

      var usrArr = [];
      if (this.$refs.dataUser.value && this.$refs.dataPin.value) {
        var gameData =
          "name=" +
          this.$refs.dataUser.value +
          "&pin=" +
          this.$refs.dataPin.value;

        var usrName = this.$refs.dataUser.value.toLowerCase();
        var usrPin = this.$refs.dataPin.value;
        var self = this;
        self.progressValue = 0.3;

        $.ajax({
          url: "https://boletinextraoficial.com/sb_call.php",
          data: gameData,
          type: "POST",
          dataType: "json",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          complete: function (data) {
            self.progressValue = 0.5;
            console.log(data);
            if (data.responseJSON[0]) {
              if (
                data.responseJSON[0].name.toLowerCase() ===
                usrName.toLowerCase()
              ) {
                console.log("EXISTS ✓");
                self.progressValue = 0.6;
                var checkData =
                  "name=" +
                  self.$refs.dataUser.value +
                  "&pin=" +
                  self.$refs.dataPin.value +
                  "&hash=" +
                  data.responseJSON[0].pin;
                $.ajax({
                  url: "https://boletinextraoficial.com/sb_check.php",
                  data: checkData,
                  type: "POST",
                  dataType: "json",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  complete: function (data) {
                    if (data.status === 200) {
                      console.log("PASS ✓");
                      var checkPosts = "name=" + self.$refs.dataUser.value;
                      self.progressValue = 0.8;

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

                            var postArr = [];
                            var iae;
                            for (
                              iae = 0;
                              iae < data.responseJSON.length;
                              iae++
                            ) {
                              postArr.push({
                                title: data.responseJSON[iae].title,
                                content: data.responseJSON[iae].content,
                                cover: data.responseJSON[iae].cover,
                                images: {
                                  0: data.responseJSON[iae].image1,
                                  1: data.responseJSON[iae].image2,
                                  2: data.responseJSON[iae].image3,
                                  3: data.responseJSON[iae].image4,
                                  4: data.responseJSON[iae].image5,
                                },
                              });
                            }
                            self.$profile.name = self.$refs.dataUser.value;
                            self.$profile.pin = self.$refs.dataPin.value;
                            self.$profile.post = postArr;
                            self.progressValue = 0.9;
                            localStorage.setItem(
                              "name",
                              JSON.stringify(self.$profile.name)
                            );
                            localStorage.setItem(
                              "post",
                              JSON.stringify(self.$profile.post)
                            );
                          }
                          var checkFavs = "name=" + self.$refs.dataUser.value;
                          self.progressValue = 0.9;
                          $.ajax({
                            url:
                              "https://boletinextraoficial.com/sb_call_fav.php",
                            data: checkFavs,
                            type: "POST",
                            dataType: "json",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                            complete: function (data) {
                              console.log("FAVORITES ✓");

                              localStorage.setItem(
                                "favs",
                                data.responseJSON[0].data
                              );
                              self.progressValue = 1;
                              self.$router.go();
                            },
                          });
                        },
                        error: function (request, status, error) {
                          console.log("POSTS 𐄂");
                          self.progressValue = 0;
                          self.pinError = true;
                          self.isLoading = false;
                          self.$profileStatus.isLogged = false;
                        },
                      });
                    }
                  },
                  error: function (request, status, error) {
                    console.log("PASS 𐄂");
                    self.progressValue = 0;
                    self.pinError = true;
                    self.isLoading = false;
                    self.$profileStatus.isLogged = false;
                  },
                });
              }
            } else {
              self.creatingUser = true;
              console.log("EXISTS 𐄂");
              self.progressValue = 0.6;
              $.ajax({
                url: "https://boletinextraoficial.com/sb_in.php",
                data: gameData,
                type: "POST",
                dataType: "json",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                complete: function (data) {
                  console.log("CREATED ✓");
                  console.log(data);
                  self.$profile.name = self.$refs.dataUser.value;
                  self.$profile.pin = self.$refs.dataPin.value;
                  self.progressValue = 1;
                  localStorage.setItem(
                    "name",
                    JSON.stringify(self.$profile.name)
                  );
                  localStorage.setItem(
                    "post",
                    JSON.stringify(self.$profile.post)
                  );
                  localStorage.setItem(
                    "favs",
                    JSON.stringify(self.$profile.favs)
                  );
                  self.$router.go();
                },
              });
            }
          },
        });
        this.isLoading = true;
        this.creatingUser = false;
      }
    },
  },
};
</script>

<style lang="scss">
:root {
  --depth: 150px;
  --height: 380px;
  --width: 300px;

  --depthTransform: calc(var(--depth) / 2);

  --widthTransform: calc(var(--width) / 2);
  --widthreTransform: calc(var(--widthTransform) - var(--depthTransform));
}
</style>

<style lang="scss" scoped>
.progress {
  display: flex;
  height: 50px;
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
  background: rgba(253, 216, 53, 0.4);
  transition: width 0.5s linear;
}

.login-inputs {
  height: 100vh;
  width: 100%;
  display: flex;
  .login-wrap {
    height: 100%;
    width: 100%;
    min-width: 320px;
    max-width: 360px;
    height: max-content;
    margin: 50px auto;
    position: relative;
    z-index: 999;
    padding: 0 20px;
    a,
    button {
      padding: 9px 10px;
      background: #000;
      border: 2px solid #222;
      color: #eee;
      font-size: 18px;
      margin-bottom: 10px;
      display: block;
      cursor: pointer;
      text-decoration: none;
      border-radius: 4px;
      &:hover {
        color: #fdd835;
      }
      &.subbtn {
        background: #fdd835;
        color: #333;
        &:hover {
          color: #000;
        }
      }
    }
  }
  h3 {
    font-size: 21px;
    color: #eee;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 30px;
    span {
      cursor: pointer;
      &:hover,
      &.active {
        color: #fdd835;
      }
      &.active {
        text-decoration: underline;
      }
    }
  }
  input[type="text"],
  input[type="password"] {
    background: #000;
    border: 2px solid #222;
    color: #ccc;
    padding: 9px 10px;
    margin-bottom: 10px;
    font-size: 18px;
    width: 100%;
    &.error {
      border: 2px solid red;
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

.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.recards-container {
  overflow: auto;
  display: block;
  text-align: center;
  margin: 10px auto 0;
  width: 100%;
  max-width: 960px;
  font-size: 0;
}

.profile-container {
  width: 100%;
}

.yourbucket {
  background: #000;
  //border-bottom: 1px dashed #444;
  position: relative;
  color: #fff;
  text-decoration: none;
  display: flex;
  min-height: 50px;
  margin-bottom: 20px;
  align-items: center;
  padding: 0 15px;
  background: #151515;
  z-index: 99;
  border: 1px solid #222;
  .avatar {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #555;
    margin: 0;
    margin-right: 15px;
    box-shadow: 0 0 30px inset #333;
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.1s ease-in;
    display: none;
    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: auto;
    }
    input[type="file"] {
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      cursor: pointer;
      display: none;
    }
    input[type="text"] {
      background: none;
      border: 0;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      text-align: center;
      font-family: "montserrat", Arial, Helvetica, sans-serif;
      text-decoration: none;
      font-size: 20px;
      text-transform: uppercase;
      color: #666;
      pointer-events: none;
    }
  }
  h4 {
    text-transform: uppercase;
    margin: 0;
    color: #eee;
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-size: 17px;
    font-weight: normal;
    text-align: center;
  }
  p {
    margin: 0;
    line-height: 1.4em;
    text-align: left;
    font-size: 16px;
    color: #eee;
    margin: 0 auto;
  }
  button,
  a {
    display: flex;
    text-decoration: none;
    color: #eee;
    background: none;
    width: 100%;
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-size: 17px;
    align-items: center;
    border: 0;
    cursor: pointer;
    padding: 0;
    &:hover {
      color: #fdd835;
    }
    svg {
      width: 14px;
      margin-left: 10px;
      display: none;
      path {
        fill: #fafafa;
      }
    }
  }
  @media (max-width: 980px) {
    padding: 20px 15px;
    flex-direction: column;
    align-items: flex-start;
    h4 {
      margin-bottom: 15px;
    }
    button {
      padding: 0;
      margin-top: 15px;
      font-size: 14px;
    }
  }
}

.recard {
  width: 300px;
  height: 380px;
  //flex: 1;
  margin: 10px;
  position: relative;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  user-select: none;
  overflow: hidden;
  display: inline-block;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  > h2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #eee;
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-size: 16px;
    letter-spacing: -1px;
    line-height: 32px;
    padding-left: 15px;
    background-color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    pointer-events: none;
    text-align: left;
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
  &:hover h2 {
    color: #fdd835;
  }
}

.actions-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.edit-btn,
.remove-btn {
  display: flex;
  height: 40px;
  padding: 0 20px;
  color: #fafafa;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  font-family: "montserrat", Arial, Helvetica, sans-serif;
  text-decoration: none;
  font-size: 16px;
  align-items: center;
  border: 0;
  border-top: 1px dashed #555;
  cursor: pointer;
  opacity: 1;
  svg {
    width: 20px;
    margin-right: 10px;
    path {
      fill: #fafafa;
    }
  }
  &:hover {
    color: #fdd835;
    svg path {
      fill: #fdd835 !important;
    }
  }
}

.pending-bucket {
  position: absolute;
  top: 32px;
  left: 0;
  width: 100%;
  color: #222;
  font-family: "montserrat", Arial, Helvetica, sans-serif;
  text-decoration: none;
  font-size: 16px;
  letter-spacing: -1px;
  line-height: 32px;
  padding-left: 15px;
  background-color: #fdd835;
  border-bottom: 1px solid #e3c22f;
  text-transform: uppercase;
  pointer-events: none;
  &.approved {
    /* background-color: green;
    color: #fff;
    border: 0; */
    display: none;
  }
}

.bucketdrome {
  display: inline-block;
  width: 300px;
  height: 380px;
  margin: 10px;
  color: #eee;
  position: relative;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  text-decoration: none;
  &:hover {
    h2 {
      color: #fdd835;
    }
  }
  &.designer {
    overflow: hidden;
    img {
      top: 15px;
    }
  }
  &.design {
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 77, 71, 0.3);
    border: 2px solid #004d47;

    svg {
      width: 120px;
      height: auto;
      margin: auto;
      stroke-width: 1px;
      stroke: rgba(255, 255, 255, 0.2);
    }
    p {
      color: #eee;
      font-size: 16px;
      margin: 0;
      width: 100%;
      padding: 20px;
    }
    h2 {
      width: 100%;
    }
    &:hover svg {
    }
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  h2 {
    text-transform: uppercase;
    padding: 20px;
    margin: 0;
    color: #fafafa;
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-size: 17px;
    font-weight: normal;
    text-align: center;
    position: relative;
    z-index: 99;
  }
}

.scene {
  width: 100%;
  height: var(--height);
  perspective: 250px;
  perspective-origin: center 250px;
  transition: all 0.4s linear;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;

  &.shopActive {
    perspective: 250px;
    perspective-origin: center 220px;
    //animation: 10s recaca linear infinite;
  }
  &.buildActive {
    perspective: 300px;
  }
  &.growActive {
    perspective: 350px;
    perspective-origin: center 400px;
  }
  &.loginIn {
    perspective: 400px;
  }
}

.box {
  width: 100%;
  height: var(--height);
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(calc(-1 * var(--depthTransform)));
}

.box__face {
  position: absolute;
  border: 1px solid rgba(0, 77, 71, 1);
  border-radius: 0px;
  transition: all 0.2s linear;
}

.box__face--back {
  width: 100%;
  height: var(--height);
  background-image: linear-gradient(rgba(0, 77, 71, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 77, 71, 0.3) 1px, transparent 1px);
  background-size: 1px 11px, 11px 11px;
  background-position: -1px -1px, -1px -1px;
}

.box__face--right,
.box__face--left {
  width: var(--depth);
  height: var(--height);
  left: var(--widthreTransform);
  background-image: linear-gradient(transparent 90%, #004d47);
  background-size: 1px 11px;
  position: absolute;
  &:after {
    content: "";
    background: linear-gradient(to bottom, black, transparent);
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}
.box__face--left {
  border-left-width: 2px;
  border-top-width: 2px;
  border-right: 0;
  border-bottom-width: 2px;
  left: 0;
}

.box__face--right {
  border-right-width: 2px;
  border-top-width: 2px;
  border-bottom-width: 2px;
  left: initial;
  right: 0;
}

.box__face--right {
  border-left: 0;
  &:after {
    content: "";
    background: linear-gradient(to top, black, transparent);
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}

.box__face--top {
  position: absolute;
  background-image: linear-gradient(to right, transparent 90%, #004d47);
  background-size: 11px 1px;
  border-bottom: 0;
  top: 0;
  &:after {
    content: "";
    background: linear-gradient(to top, black 10%, transparent);
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}

.box__face--bottom {
  position: absolute;
  background-image: linear-gradient(to right, transparent 90%, #004d47);
  background-size: 11px 1px;
  border-top: 0;
  border-bottom-width: 1px;
  bottom: 0;
  &:after {
    content: "";
    background: linear-gradient(to bottom, black, transparent);
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}

.box__face--top,
.box__face--bottom {
  width: 100%;
  height: var(--depth);
  border-top-width: 2px;
}

.box__face--back {
  transform: rotateY(180deg) translateZ(var(--depthTransform));
}
.box__face--right {
  transform: rotateY(90deg) translateZ(var(--depthTransform));
}
.box__face--left {
  transform: rotateY(-90deg) translateZ(var(--depthTransform));
}
.box__face--top {
  transform: rotateX(90deg) translateZ(var(--depthTransform));
}
.box__face--bottom {
  transform: rotateX(-90deg) translateZ(var(--depthTransform));
}

.box__face.box__face--back.bac2 {
  transform: rotateY(180deg) translateZ(20px);
  opacity: 0.4;
  background: transparent;
  border-width: 2px;
}

@keyframes identifier {
  0% {
    transform: perspective(550px) rotateY(-15deg);
  }
  50% {
    transform: perspective(550px) rotateY(15deg);
  }
  100% {
    transform: perspective(550px) rotateY(-15deg);
  }
}

.box__face.box__face--back.bac1 {
  transform: rotateY(0) translateZ(48px) !important;
  opacity: 1;
  border-color: #004d4740 !important;
  background: transparent;
  border-width: 2px;
  display: flex;
  .exploremons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    > div {
      font-size: 36px;
    }
  }
  span {
    text-decoration: underline;
    color: #fdd835;
  }
  img {
    display: block;
    width: 50%;
    transform: perspective(550px) translateZ(-50px) rotateY(-15deg);
    animation: 8s identifier infinite linear;
    opacity: 0.9;
  }
}

.buildActiveGarage {
  .box__face.box__face--left,
  .box__face.box__face--right {
    background-color: #abaaac;
    background-image: linear-gradient(transparent 90%, #004d4775);
    background-size: 1px 11px;
    border-color: #333;
    &:after {
      background: linear-gradient(to left, rgba(0, 0, 0, 0.3), transparent);
    }
  }
  .box__face.box__face--left {
    &:after {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent);
    }
  }
  .box__face.box__face--back {
    background-color: #565556;
    border-color: #333;

    &.bac2,
    &.bac1 {
      background: transparent;
      opacity: 0.2;
    }
  }
  .box__face.box__face--top {
    background: #3a383f;
    background-image: linear-gradient(to right, transparent 90%, #004d4775);
    background-size: 11px 1px;
    border-color: #333;

    &:after {
      opacity: 0;
    }
  }
  .box__face.box__face--bottom {
    background-color: #96959b;
    border-color: #333;

    background-image: linear-gradient(to right, transparent 90%, #004d4775);
    background-size: 11px 1px;
    &:after {
      opacity: 0;
    }
  }
}

.explode-container {
  position: absolute;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  opacity: 1;
  transform: translateZ(calc(-1 * var(--depthTransform)));
  svg {
    height: 350px;
  }
}

.buildActiveGarage {
  .box__face.box__face--left,
  .box__face.box__face--right {
    background-color: #abaaac;
    background-image: linear-gradient(transparent 90%, #004d4775);
    background-size: 1px 11px;
    border-color: #333;
    &:after {
      background: linear-gradient(to left, rgba(0, 0, 0, 0.3), transparent);
    }
  }
  .box__face.box__face--left {
    &:after {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent);
    }
  }
  .box__face.box__face--back {
    background-color: #565556;
    border-color: #333;

    &.bac2,
    &.bac1 {
      background: transparent;
      opacity: 0.2;
    }
  }
  .box__face.box__face--top {
    background: #3a383f;
    background-image: linear-gradient(to right, transparent 90%, #004d4775);
    background-size: 11px 1px;
    border-color: #333;

    &:after {
      opacity: 0;
    }
  }
  .box__face.box__face--bottom {
    background-color: #96959b;
    border-color: #333;

    background-image: linear-gradient(to right, transparent 90%, #004d4775);
    background-size: 11px 1px;
    &:after {
      opacity: 0;
    }
  }
}

h2.title-separator {
  color: #fff;
  text-transform: uppercase;
  margin: 20px 10px 20px;
  font-size: 17px;
  text-align: left;
  border-top: 1px solid #004d47;
  padding-top: 20px;
}

.bucket-builds {
  text-align: left;
}
</style> 


