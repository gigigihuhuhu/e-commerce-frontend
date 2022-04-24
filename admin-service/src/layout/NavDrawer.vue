<template>
  <v-navigation-drawer app clipped hide-overlay>
    <v-list :key="render" dense>
      <v-list-item
        v-for = "(child, index) in children"
        :key="index"
        link
        :to="parentPath + child.path"
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
import { menus } from "./menu";

export default {
  name: "NavDrawer",
  data() {
    return {
      render: 0,
      menus: menus,
      parentPath:"",
      children:[]
    };
  },

  methods: {
    updateMenus(menuName) {
      this.menus.forEach((menu) => {
        if(menu.name === menuName){
          this.children = menu.children
          this.parentPath = menu.path
          return
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
