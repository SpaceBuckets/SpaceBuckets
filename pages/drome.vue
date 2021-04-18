<template>
  <div class="builder" id="iframe-container">
    <h1 style="opacity: 0;position:absolute">BUCKET DROME</h1>
  </div>
</template>

<script>
export default {
  methods: {
    createIframe() {
      this.$nextTick(() => {
        var iframeContainer = document.getElementById("iframe-container");
        iframeContainer.innerHTML = "";
        var iframe = document.createElement("iframe");
        iframe.src = `https://bucketdrome.netlify.app/`
        iframeContainer.appendChild(iframe);
      });
    }
  },
  mounted() {
    this.createIframe();
  },
  updated() {
    this.createIframe();  
  },  
   head() {
    return {
      title: `Space Buckets - DROME`,
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },],
      meta: [{ hid: 'description', name: 'description', content: 'Try the DIY indoor gardening simulator, from digital seed to flower.' }],
    };
  },
};
</script>

<style lang="scss">
iframe {
  width: 100%;
  height: 100vh;
  border: 0;
  position: fixed;
  top: 50px;
  left: 0;
}
</style>