<template>
  <div>
    <template v-if="isNaN(this.id)">
      <nuxt-link class="card" :to="{name: 'u-slug', params: { slug: `${id.s}`} }">
        <h2>
          {{ id.t }}
        </h2>
        <i v-if="id.v">{{ id.v }}</i>
        <img :src="`/u/${id.s}/cover.jpg`" alt />
      </nuxt-link>    
    </template>
    <template v-if="!isNaN(this.id)">
      <div style="width:300px;height:387px;margin:10px;float:left;background:#1a1a1a;"></div>        
    </template>  
  </div>

</template>

<script>
export default {
  name: 'card',
  props: ['id'],
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
  top: 0;
  line-height: 32px;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-family: arial, Arial, Helvetica, sans-serif;
  letter-spacing: 0;
  opacity: 0.8;
}

.card:hover h2 {
  color: #fdd835 !important;
 }
</style>
