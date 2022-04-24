<template>
  <div>
    <v-app-bar app clipped-left color="white" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <template v-for="(menu, index) in menus">
          <v-tab v-if="!menu.children" :key="index" :to="menu.path">
            {{ menu.title }}
          </v-tab>
          <v-menu v-if="menu.children" :key="index" offset-y open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text class="align-self-center" v-bind="attrs" v-on="on">
                <span>{{ menu.title }}</span>
                <v-icon right> mdi-menu-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="child in menu.children"
                :key="child.title"
                :to="child.path"
              >
                {{ child.title }}
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
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
import { menus } from "./menu";

export default {
  name: "NavbarDefault",
  data() {
    return {
      menus: menus,
    };
  },
};
</script>

<style scoped>
.v-app-bar {
  border-bottom: 1px solid lightgray !important;
}
</style>
