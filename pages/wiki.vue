<template>
  <div></div>
</template>

<script>
export default {
  fetch ({ params, redirect }) {
    redirect(301, '/docs')
  }
}
</script>
