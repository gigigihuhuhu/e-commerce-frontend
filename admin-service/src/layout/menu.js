export const menus = [{
    name: 'Home',
    title: 'Home',
    path: '/',
},
{
    name: 'Products',
    title: 'Products',
    children: [{
        path: '/products',
        name: 'Products',
        icon: 'mdi-pizza',
        title: '상품 목록',
    },
    {
        path: '/product/registration',
        name: 'ProductRegistration',
        icon: 'mdi-archive-plus',
        title: '상품 등록',
    },]
},
{
    name: 'Customers',
    title: 'Customers',
    path: '/customers',
},
{
    name: 'Stores',
    title: 'Stores',
    path: '/stores',
},
{
    name: 'Orders',
    title: 'Orders',
    children: [{
        path: '/orders',
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