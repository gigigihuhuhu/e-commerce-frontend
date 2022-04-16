export const menus = [{
    path: '/',
    name: 'Home',
    title: 'Home',
},
{
    path: '/products',
    name: 'Products',
    title: 'Products',
    children: [{
        path: '',
        name: 'Products',
        icon: 'mdi-pizza',
        title: '상품 목록',
    },
    {
        path: '/registration',
        name: 'ProductRegistration',
        icon: 'mdi-archive-plus',
        title: '상품 등록',
    },]
},
{
    path: '/customers',
    name: 'Customers',
    title: 'Customers',
    children: [{
        path: '',
        name: 'Customers',
        icon: 'mdi-account-details-outline',
        title: '고객 목록',
    },]
},
{
    path: '/stores',
    name: 'Stores',
    title: 'Stores',
    children: [{
        path: '',
        name: 'Stores',
        icon: 'mdi-storefront-outline',
        title: '매장 목록',
    },]
},
{
    path: '/orders',
    name: 'Orders',
    title: 'Orders',
    children: [{
        path: '',
        name: 'Orders',
        icon: 'mdi-emoticon-tongue-outline',
        title: '주문 목록',
    }, {
        path: '/reviews',
        name: 'Reviews',
        icon: 'mdi-message-text-outline',
        title: '리뷰 목록',
    },]
},
]