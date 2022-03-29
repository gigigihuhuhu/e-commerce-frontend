<template>
  <v-app>
    <Navbar/>
    <NavDrawer v-if="$route.name != 'Home'"/>
    <v-main class="grey lighten-3">
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
};
</script>
