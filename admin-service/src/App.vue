<template>
  <v-app>
    <Navbar/>
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

export default {
  name: 'App',
  components: {Footer, Navbar},
  data(){
    return {}
  },
};
</script>
