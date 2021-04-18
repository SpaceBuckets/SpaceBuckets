<template>
  <div></div>
</template>

<script>
export default {
   head() {
    return {
      title: `Space Buckets - WIKI`,
      meta: [{ hid: 'description', name: 'description', content: 'A Space Bucket is a DIY indoor garden</strong> that is made by stacking plastic containers alongside lighting (CFL or LED) and airflow (PC or other fans).' }],      
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },]
    };
  },  
  fetch ({ params, redirect }) {
    redirect(301, '/docs')
  }
}
</script>
