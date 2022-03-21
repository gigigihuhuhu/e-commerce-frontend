<template>
 
</template>

<script>
export default {
  name: 'RedirectURL',
  mounted(){
    window.location.href = this.$axios.defaults.baseURL + "/api" + this.$route.fullPath;
  },
};
</script>

<style scoped>

</style>
