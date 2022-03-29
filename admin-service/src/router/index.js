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
        name: 'ProductsCategory',
        component: Products,
        title: 'Products',
        children:[
            {
                path: '/products',
                name: 'Products',
                component: Products,
                icon: 'mdi-pizza',
                title: '상품 목록',
            },
            {
                path: '/products/registration',
                name: 'ProductsRegistration',
                component: ProductRegistration,
                icon: 'mdi-archive-plus',
                title: '상품 등록',
            },
        ]
    },
    {
        path: '/customers',
        name: 'CustomersCategory',
        component: Customers,
        title: 'Customers',
        children:[
            {
                path: '/customers',
                name: 'Customers',
                component: Customers,
                icon: 'mdi-pizza',
                title: '고객 목록',
            },
        ]
    },
    {
        path: '/stores',
        name: 'StoresCategory',
        component: Stores,
        title: 'Stores',
        children:[
            {
                path: '/stores',
                name: 'Stores',
                component: Stores,
                icon: 'mdi-pizza',
                title: '매장 목록',
            },
        ]
    },
    {
        path: '/orders',
        name: 'OrdersCategory',
        component: Orders,
        title: 'Orders',
        children:[
            {
                path: '/orders',
                name: 'Orders',
                component: Orders,
                icon: 'mdi-pizza',
                title: '주문 목록',
            },
            {
                path: '/orders/reviews',
                name: 'Reviews',
                component: Reviews,
                icon: 'mdi-archive-plus',
                title: '리뷰 목록',
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
