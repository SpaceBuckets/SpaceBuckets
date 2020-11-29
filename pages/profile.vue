<template>
  <div
    class="login-inputs scene"
    :class="{ active: !userLogged, loading: isLoading }"
  >
    <client-only>
      <div class="loading-container" v-if="!isLogged && !notLogged">
        <div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>

      <div class="progress" :style="{ '--value': progressValue * 100 }"></div>
      <div v-if="notLogged" style="width: 100%">
        <div class="box" style="display: none">
          <div class="box__face box__face--back bac1"></div>
          <div class="box__face box__face--back"></div>
          <div class="box__face box__face--right"></div>
          <div class="box__face box__face--left"></div>
          <div class="box__face box__face--top"></div>
          <div class="box__face box__face--bottom"></div>
        </div>

        <div class="login-wrap">
          <h3>
            Login or Register
            <span
              style="
                transform: rotate(90deg);
                display: inline-block;
                position: relative;
                top: 1px;
              "
              >»</span
            >
          </h3>

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
              maxlength="4"
            />
            <div class="rememba">
              <label><input type="checkbox" /> Remember me</label>
            </div>
            <input ref="dataGame" name="data" type="hidden" />
            <div style="display: flex; justify-content: space-between">
              <button>Get Help</button>
              <button class="subbtn">Submit »</button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="isLogged" class="user-actions">
        <div class="headong">
          <div>
            Welcome, <strong>{{ profile.name }}</strong
            >. This is your bucket profile. From here you can submit your
            bucket, and manage your favorites and preferences.
          </div>
          <button @click="logOuter()">Logout!</button>
        </div>
        <div class="boxies">
          <div class="yourbucket">
            <nuxt-link
              :to="{
                name: 'new',
                params: {
                  loggedProfile: $route.params.loggedProfile || profile,
                },
              }"
            >
              <h4>SUBMIT YOUR BUCKET</h4>
              <p style="color: #eee">
                Add your bucket garden to the gallery! You just need a title,
                some content, and a few bucket images.
              </p>
              <p
                style="
                  font-size: 154px;
                  line-height: 120px;
                  transform: rotate(-90deg);
                  width: max-content;
                  color: #888;
                "
              >
                »
              </p>
            </nuxt-link>
          </div>
          <!--         <div class="favoritex">
          <h4>SAVED FAVORITES</h4>
          <p style="color: #eee">
            Select your favorites while browsing the bucket gallery. They will
            appear here for easier reference.
          </p>
          <p style="font-size: 154px; line-height: 100px; color: #888">»</p>
        </div> -->
        </div>
      </div>
    </client-only>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  name: "loginInputs",

  data: function () {
    return {
      userLogged: false,
      pinError: false,
      creatingUser: false,
      isLoading: false,
      welcomeHidden: false,
      currentMessage: [],
      progressValue: 0,
      notLogged: false,
      isLogged: false,
      nametest: "test",
      profile: {
        name: "",
        pin: "",
        prefs: "",
        drome: "",
        post: "",
        favs: "",
        images: ""
      },
    };
  },
  updated() {
    if (this.$route.params.loggedProfile) {
      this.profile = this.$route.params.loggedProfile;
      this.isLogged = true;
    }
  },
  mounted() {
    this.hitLog();
    console.log(this.profile)
  },
  methods: {
    logOuter() {
      if (process.client) {
        localStorage.removeItem("profile");
        this.$router.go();
      }
    },
    hitLog() {
      if (process.client) {
        var checkLog = localStorage.getItem("profile");
        var parsedLog = JSON.parse(checkLog);
        if (localStorage.getItem("profile")) {
          this.isLogged = true;
          this.profile = parsedLog;
        } else {
          this.notLogged = true;
        }
      }
    },
    registerUser() {
      this.profile.name = this.$refs.dataUser.value;
      this.profile.pin = this.$refs.dataPin.value;

      var formattedData = JSON.stringify(this.profile);
      var reformattedData = formattedData.replace(/"/g, "'");

      var usrArr = [];
      if (this.$refs.dataUser.value && this.$refs.dataPin.value) {
        var gameData =
          "name=" +
          this.$refs.dataUser.value +
          "&pin=" +
          this.$refs.dataPin.value +
          "&obj=" +
          encodeURIComponent(formattedData);
        var usrName = this.$refs.dataUser.value;
        var usrPin = this.$refs.dataPin.value;
        var self = this;
        self.progressValue = 0.4;

        $.ajax({
          url: "https://boletinextraoficial.com/drome_call.php",
          data: gameData,
          type: "POST",
          dataType: "json",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          complete: function (data) {
            self.progressValue = 0.6;
            if (data.responseJSON[0]) {
              if (data.responseJSON[0].name === usrName) {
                console.log("EXISTS ✓");
                self.progressValue = 0.8;
                if (data.responseJSON[0].pin === usrPin) {
                  console.log("PASS ✓");
                                    console.log(data.responseJSON[0].data)

                  var responseData = JSON.parse(data.responseJSON[0].data);
                  console.log(responseData)
                  localStorage.setItem("profile", JSON.stringify(responseData));
                  self.progressValue = 1;
                  self.userLogged = true;
                  self.$router.go();
                } else {
                  console.log("PASS 𐄂");
                  self.progressValue = 0;
                  self.pinError = true;
                  self.isLoading = false;
                }
              }
            } else {
              self.creatingUser = true;
              console.log("EXISTS 𐄂");
              self.progressValue = 0.6;
              $.ajax({
                url: "https://boletinextraoficial.com/drome_in.php",
                data: gameData,
                type: "POST",
                dataType: "json",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                complete: function (data) {
                  console.log("CREATED ✓");
                  var reformattedData = JSON.stringify(self.profile);
                  var megaData =
                    "name=" +
                    self.$refs.dataUser.value +
                    "&pin=" +
                    self.$refs.dataPin.value +
                    "&obj=" +
                    encodeURIComponent(reformattedData);
                  self.progressValue = 0.8;
                  $.ajax({
                    url: "https://boletinextraoficial.com/drome_up.php",
                    data: megaData,
                    type: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    dataType: "json",
                    complete: function (data) {
                      console.log("UPDATED ✓");
                      localStorage.setItem(
                        "profile",
                        JSON.stringify(self.profile)
                      );
                      self.progressValue = 1;
                      self.userLogged = true;
                      self.$router.go();
                    },
                  });
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

<style lang="scss" >
.user-actions {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  h4 {
    font-size: 17px;
    margin: 0;
    margin-bottom: 20px;
    color: #eee;
  }
}
.headong {
  border-bottom: 1px solid #222;
  margin: 0;
  margin-bottom: 20px;
  padding: 15px;
  background: #fdd835;
  width: auto;
  display: flex;
  button {
    margin-left: auto;
  }
}
.user-actions > .boxies {
  position: relative;
  z-index: 99;
  display: flex;
  justify-content: center;
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    div {
      margin-left: 20px;
    }
  }
  a {
    text-decoration: none;
  }
  div {
    border: 1px solid #222;
    margin: 0 20px 20px 0;
    padding: 20px 20px 0;
    color: #eee;
    background: #151515;
    max-width: 300px;
    flex: 1;
    &:first-child {
      margin-left: 20px;
    }
    &.yourbucket {
      background: #000;
      border: 2px dashed #222;
    }
  }
}

.progress {
  display: flex;
  height: 2px;
  position: fixed;
  top: -50px;
  left: 0;
  right: 0;
  padding: 0;
  z-index: 999;
}

.progress:before {
  content: "";
  width: calc(var(--value) * 1%);
  background: #fdd835;
  transition: width 0.5s linear;
}

.login-inputs {
  //border-bottom: 1px solid #222;
  height: 100vh;
  width: 100vw;
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
    button {
      padding: 9px 10px;
      background: #000;
      border: 2px solid #222;
      color: #eee;
      font-size: 18px;
      margin-bottom: 10px;

      cursor: pointer;
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
    line-height: 46px;
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

  .rememba {
    color: #ccc;
    margin-bottom: 20px;
    opacity: 0.5;
    display: none;
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

#loading-bar-spinner.spinner {
  left: 40px;
  top: 62%;
  position: absolute;
  z-index: -1;
  display: none !important;

  animation: loading-bar-spinner 600ms linear infinite;
}

#loading-bar-spinner.spinner .spinner-icon {
  width: 32px;
  height: 32px;
  border: solid 4px transparent;
  border-top-color: #004c46 !important;
  border-left-color: #004c46 !important;
  border-radius: 50%;
}

@keyframes loading-bar-spinner {
  0% {
    transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

:root {
  --depth: 150px;
  --height: 100%;
  --width: 100%;

  --depthTransform: calc(var(--depth) / 2);

  --widthTransform: calc(var(--width) / 2);
  --widthreTransform: calc(var(--widthTransform) - var(--depthTransform));

  --boxColor: #004d47;
}

@keyframes recaca {
  0% {
    perspective-origin: 300px center;
  }
  50% {
    perspective-origin: 350px center;
  }
  100% {
    perspective-origin: 300px center;
  }
}

.scene {
  width: 100%;
  height: calc(100vh - 50px);
  perspective: 600px;
  perspective-origin: center;
  transition: all 0.4s linear;
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
  position: absolute;
  top: 0;
  left: 0;
}

.box__face {
  position: absolute;
  border: 1px solid var(--boxColor);
  border-radius: 0px;
  transition: all 0.2s linear;
}

.box__face--back {
  width: 100%;
  height: var(--height);
  background-image: linear-gradient(var(--boxColor) 1px, transparent 1px),
    linear-gradient(90deg, var(--boxColor) 1px, transparent 1px);
  background-size: 1px 11px, 11px 11px;
  background-position: -1px -1px, -1px -1px;
  border: 3px solid var(--boxColor);
  //background: #000;
  opacity: 0.6;
}

.box__face--right,
.box__face--left {
  width: var(--depth);
  height: var(--height);
  left: var(--widthreTransform);
  background-image: linear-gradient(transparent 90%, var(--boxColor));
  background-size: 1px 11px;
  position: absolute;
  &:after {
    content: "";
    background: linear-gradient(to left, black, transparent);
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
  border-left-width: 0;
  border-top-width: 2px;
  border-right: 0;
  border-bottom-width: 2px;
  left: 0;
}

.box__face--right {
  border-right-width: 0;
  border-top-width: 2px;
  border-bottom-width: 2px;
  left: initial;
  right: 0;
}

.box__face--right {
  border-left: 0;
  &:after {
    content: "";
    background: linear-gradient(to right, black, transparent);
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
  background-image: linear-gradient(to right, transparent 90%, var(--boxColor));
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
  background-image: linear-gradient(to right, transparent 90%, var(--boxColor));
  background-size: 11px 1px;
  border-top: 0;
  border-bottom-width: 0;
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
  transform: rotateY(0) translateZ(0) !important;
  opacity: 1;
  border-color: var(--boxColor) !important;
  background: transparent;
  border-width: 1px;
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
</style> 
