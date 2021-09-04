<template>
  <div>
    <h2 style="opacity: 0;position:absolute">BUCKET DESIGNER</h2>
    <svg class="reload" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" overflow="visible" fill="#ffffff"><defs>     <rect id="spinner" x="46.5" y="40" width="7" height="20" rx="2" ry="2" transform="translate(0 -30)"></rect></defs> <use xlink:href="#spinner" transform="rotate(0 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0s" repeatCount="indefinite"></animate>    </use><use xlink:href="#spinner" transform="rotate(30 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.08s" repeatCount="indefinite"></animate>    </use><use xlink:href="#spinner" transform="rotate(60 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.16s" repeatCount="indefinite"></animate>    </use><use xlink:href="#spinner" transform="rotate(90 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.24s" repeatCount="indefinite"></animate>    </use><use xlink:href="#spinner" transform="rotate(120 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.32s" repeatCount="indefinite"></animate>    </use><use xlink:href="#spinner" transform="rotate(150 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.4s" repeatCount="indefinite"></animate>    </use><use xlink:href="#spinner" transform="rotate(180 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.48s" repeatCount="indefinite"></animate>    </use><use xlink:href="#spinner" transform="rotate(210 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.56s" repeatCount="indefinite"></animate>    </use><use xlink:href="#spinner" transform="rotate(240 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.64s" repeatCount="indefinite"></animate>    </use><use xlink:href="#spinner" transform="rotate(270 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.72s" repeatCount="indefinite"></animate>    </use><use xlink:href="#spinner" transform="rotate(300 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.8s" repeatCount="indefinite"></animate>    </use><use xlink:href="#spinner" transform="rotate(330 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.88s" repeatCount="indefinite"></animate>    </use> </svg>
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
  .reload {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    margin: auto;
    pointer-events: none;
    opacity: 0.8;
  }
  iframe {
  width: 100%;
  height: 100vh;
  border: 0;
  position: fixed;
  top: 50px;
  left: 0;
}
</style>