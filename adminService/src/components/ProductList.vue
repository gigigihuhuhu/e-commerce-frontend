<template>
  <div>
    <ul id="v-for-object" class="demo">
      <li v-bind:key=productInfo.id v-for="productInfo in productInfoList">
        <Product :productInfo=productInfo></Product>
      </li>
    </ul>
  </div>
</template>

<script>
import Product from './Product';

export default {
  name: 'ProductList',
  components: {
    Product,
  },
  data() {
    return {
      productInfoList: [{
        id: 0,
        imgFileName: 'pizza',
        name: '피자가 아님',
        stackNumber: 0,
      },
      {
        id: 1,
        imgFileName: 'pizza',
        name: '마가리타 피자',
        stackNumber: 10,
      },
      {
        id: 1,
        imgFileName: 'pizza',
        name: '마가리타 피자',
        stackNumber: 10,
      }, {
        id: 1,
        imgFileName: 'pizza',
        name: '마가리타 피자',
        stackNumber: 10,
      }, {
        id: 1,
        imgFileName: 'pizza',
        name: '마가리타 피자',
        stackNumber: 10,
      }, {
        id: 1,
        imgFileName: 'pizza',
        name: '마가리타 피자',
        stackNumber: 10,
      }],
    };
  },
};
</script>

<style scoped>

</style>
