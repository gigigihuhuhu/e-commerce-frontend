<template>

</template>

<script>
export default {
  name: 'RedirectURL',
  mounted(){
    window.location.href = this.$axios.defaults.baseURL + "/api/url/redirect" + this.$route.fullPath;
  },
};
</script>

<style scoped>

</style>
