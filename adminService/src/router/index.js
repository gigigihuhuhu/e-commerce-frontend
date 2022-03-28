import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import FirstExample from '@/components/FirstExample';
import ProductList from '@/components/ProductList';

import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import Product1 from '../components/Product';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home, header: Navbar, footer: Footer,
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
      path: '/customer',
      name: 'customer page',
      components: {
        default: ProductList, header: Navbar, footer: Footer,
      },
    },
  ],
});
