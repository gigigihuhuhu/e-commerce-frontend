<template>
  <v-navigation-drawer
      app
      clipped
  >
    <v-list dense>
      <v-list-item
          v-for="(child, index) in $router.options.routes.filter(x=>x.path==$router.currentRoute.path)[0].children"
          :key="index"
          link
          :to="child.path"
      >
        <v-list-item-icon>
          <v-icon>{{ child.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ child.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawer",

}
</script>

<style scoped>

</style>
