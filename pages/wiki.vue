<template>
  <div></div>
</template>

<script>
export default {
   head() {
    return {
      title: `Space Buckets - WIKI`,
    };
  },  
  fetch ({ params, redirect }) {
    redirect(301, '/docs')
  }
}
</script>
