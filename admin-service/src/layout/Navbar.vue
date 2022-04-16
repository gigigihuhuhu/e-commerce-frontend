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
            v-for="(menu,index) in menus"
            :key="index"
            :to="menu.path"
            @click="$emit('change-menu',$event.target.text.trim())"
        >
          {{ menu.title }}
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
import {menus} from "./menu"

export default {
  name: "NavbarDefault",
  data() {
    return {
      menus:menus
    }
  },
}
</script>

<style scoped>
.v-app-bar {
  border-bottom: 1px solid lightgray !important
}
</style>
