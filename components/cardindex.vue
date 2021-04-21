<template>
  <nuxt-link class="card" :class="variation" :to="`/${link}/`">
    <img :src="`/index/${link}.jpg`" :alt="title" />
    <h2>{{ title }}</h2>
  </nuxt-link>
</template>

<script>
export default {
  name: 'cardindex',
  props: ['title','link', 'variation'],
};
</script>

<style lang="scss" scoped>
.card {
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
    padding: 3px 0;
    text-align: center;
    font-size: 17px;
    font-weight: 600;    
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

.card i {
  position: absolute;
  right: 10px;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-family: arial, Arial, Helvetica, sans-serif;
  letter-spacing: 0;
}

.card:hover h2 {
  color: #fdd835 !important;
  i {
    color: #eee !important;
  }
}

.doubled {
  width: 620px;
  position: relative;
  @media (max-width: 1600px) {
    display: none;
  }
  @media (max-width: 980px) {
    & + li {
      display: none;
    }
  }
}

</style>
