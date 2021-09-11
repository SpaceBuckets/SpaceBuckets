<template>
  <nuxt-link class="card" :to="`/docs/${doc.s}`">
<!--   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Info" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
<path fill="#ddd" d="M12.432,0c1.34,0,2.01,0.912,2.01,1.957c0,1.305-1.164,2.512-2.679,2.512c-1.269,0-2.009-0.75-1.974-1.99  C9.789,1.436,10.67,0,12.432,0z M8.309,20c-1.058,0-1.833-0.652-1.093-3.524l1.214-5.092c0.211-0.814,0.246-1.141,0-1.141  c-0.317,0-1.689,0.562-2.502,1.117L5.4,10.48c2.572-2.186,5.531-3.467,6.801-3.467c1.057,0,1.233,1.273,0.705,3.23l-1.391,5.352  c-0.246,0.945-0.141,1.271,0.106,1.271c0.317,0,1.357-0.392,2.379-1.207l0.6,0.814C12.098,19.02,9.365,20,8.309,20z"/>
</svg> -->
    <div class="img-container">
      <img :src="`/docs/${doc.s}/cover.jpg`" :alt="doc.t" />
    </div>
    <h2>{{ doc.t }}</h2>
    <p v-html="doc.f"></p>
    <i>Learn more in the Docs »</i>
  </nuxt-link>
</template>

<script>
export default {
  name: 'carddoc',
  props: ['doc'],
};
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  height: 387px;
  margin: 10px;
  float: left;
  position: relative;
  color: #222;
  background: #fff;
  user-select: none;
  padding-top: 42px;
  border-radius: 2px;
    text-decoration: none;
  overflow: hidden;
  > h2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #222;
    font-family: "montserrat", Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-size: 16px;
    letter-spacing: -1px;
    line-height: 32px;
    padding-left: 15px;
    background-color: #eee;
     padding: 5px 15px;
     font-size: 17px;
    font-weight: 600;    
  }
  > p {
    font-size: 15px;
    padding: 5px 20px 0 15px;
    margin-bottom: 10px;
    line-height: 1.5;
    color: #333;
  }
  > i {
    font-style: normal;
    color: #136baf;
    text-decoration: underline;
    padding: 0 15px;
    &:hover {
      color: #093557;
    }
  }
  > .img-container {
    padding: 0 5px 5px 5px;
    max-height: 200px;
    min-height: 200px;
    overflow: hidden;
    margin-bottom: 5px;
    img {
      height: auto;
      width: 100%;
    margin: 0 auto;
    pointer-events:none;
    display: block;          
    }
  }
}

 svg {
   width: 15px;
   height: auto;
   position: absolute;
   top: 13px;
   right: 13px;
 }
.card:hover i {
      color: #093557;
 
}

</style>
