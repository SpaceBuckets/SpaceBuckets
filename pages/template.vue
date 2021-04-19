
<template>
  <div></div>
</template>

<script>
export default {
  head() {
    return {
      title: `Space Buckets | SIMPLE TEMPLATE`,
      meta: [{ hid: 'description', name: 'description', content: 'Learn how to build a DIY indoor garden with stacked buckets and LED lights. Join the bucketeers!' }],
      link: [ { rel: "canonical", href: "https://spacebuckets.com" + this.$route.path, },]
    };
  }, 
  fetch ({ params, redirect }) {
    redirect(301, '/u/simple-template')
  }
}
</script>
