<template>
  <v-app>
    <Navbar @change-menu="updateSubmenus" />
    <NavDrawer ref="sideNavBar" v-if="$route.name != 'Home'"/>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './layout/Footer.vue'
import Navbar from './layout/Navbar.vue'
import NavDrawer from './layout/NavDrawer.vue'

export default {
  name: 'App',
  components: {Footer, Navbar, NavDrawer},
  data(){
    return {}
  },
  methods: {
    updateSubmenus(menuName){
      if(menuName !== 'Home'){
        this.$refs.sideNavBar.updateMenus(menuName)
      }
    }
  },
};
</script>
