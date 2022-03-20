import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import FirstExample from '@/components/FirstExample';
import ShortenURL from '@/components/ShortenURL';
import ProductList from '@/components/ProductList';

import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import Product1 from "../components/Product1";


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld, header: Navbar, footer: Footer,
      },
    },
    {
      path: '/firstexample',
      name: 'FirstExample',
      components: {
        default: FirstExample, header: Navbar, footer: Footer,
      },
    },
    {
      path: '/secondexample',
      name: 'SecondName',
      components: {
        default: Product1, header: Navbar, footer: Footer,
      },
    },
    {
      path: '/admin',
      name: 'admin page',
      components: {
        default: ShortenURL, header: Navbar, footer: Footer,
      },
    },

    {
      path: '/customer',
      name: 'customer page',
      components: {
        default: ProductList, header: Navbar, footer: Footer, 
      },
    },

    {
      path: '/url',
      name: 'url',
      components: {
        default: ShortenURL, header: Navbar, footer: Footer,
      },
    },
  ],
});
