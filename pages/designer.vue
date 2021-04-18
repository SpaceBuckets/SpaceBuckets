<template>
  <div>
    <h1 style="opacity: 0;position:absolute">BUCKET DESIGNER</h1>
    <iframe src="https://bucket-designer.netlify.app/" style="width:100%; height:100vh;border:0;"></iframe>
  </div>
</template>

<script>
export default {
   head() {
    return {
      title: `Space Buckets - DESIGNER`,
      meta: [{ hid: 'description', name: 'description', content: 'Check out our tridimensional designer for DIY indoor gardens. Create your 3D build!' }],
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },]
    };
  },  
}</script>

<style lang="scss" scoped>

</style>