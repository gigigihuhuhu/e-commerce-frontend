<template>
  <div>
    <v-app-bar
        app
        clipped-left
        hide-on-scroll
        color="white"
        flat
    >
      <v-avatar
          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
          size="32"
      ></v-avatar>

      <v-tabs
          centered
          class="ml-n9"
          color="grey darken-1"
      >
        <v-tab
            v-for="(route,index) in $router.options.routes"
            :key="index"
            :to="route.path"
        >
          {{ route.title }}
        </v-tab>
      </v-tabs>

      <v-avatar
          class="hidden-sm-and-down"
          color="grey darken-1 shrink"
          size="32"
      ></v-avatar>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavbarDefault",
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.v-app-bar {
  border-bottom: 1px solid lightgray !important
}
</style>
