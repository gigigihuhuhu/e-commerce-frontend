import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/home/HomeView.vue'
import Products from '../views/products/Products.vue'
import ProductRegistration from '../views/products/ProductRegistration.vue'
import Customers from '../views/customers/Customers.vue'
import Stores from '../views/stores/Stores.vue'
import Orders from '../views/orders/Orders.vue'
import Reviews from '../views/orders/Reviews.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        title: 'Home',
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
        icon: 'mdi-pizza',
        title: 'Products',
    },
    {
        path: '/product/registration',
        name: 'ProductRegistration',
        component: ProductRegistration,
        icon: 'mdi-archive-plus',
        title: '상품 등록',
    },
    {
        path: '/customers',
        name: 'Customers',
        component: Customers,
        icon: 'mdi-account-details-outline',
        title: 'Customers',
    },
    {
        path: '/stores',
        name: 'Stores',
        component: Stores,
        icon: 'mdi-storefront-outline',
        title: 'Stores',
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders,
        icon: 'mdi-emoticon-tongue-outline',
        title: 'Orders',
    },
    {
        path: '/reviews',
        name: 'Reviews',
        component: Reviews,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
