<template>
  <div class="builder" id="iframe-container">

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
        iframe.src = `https://bucketdrome.netlify.app/?name=${this.$profile.name}&pin=${this.$profile.pin}`
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
    };
  },
};
</script>

<style lang="scss">
iframe {
  width: 100%;
  height: 100vh;
  border: 0;
}
</style>