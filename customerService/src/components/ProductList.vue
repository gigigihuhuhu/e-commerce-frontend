<template>
  <div>
    <ul id="v-for-object" class="demo">
      <li v-bind:key=productInfo.id v-for="productInfo in productInfoList">
        <Product1 :productInfo=productInfo></Product1>
      </li>
    </ul>
  </div>
</template>

<script>
import Product1 from './Product1';

export default {
  name: 'ProductList',
  components: {
    Product1,
  },
  data() {
    return {
      productInfoList: [{
        id: 0,
        imgFileName : 'logo',
        name : '피자가 아님',
        stackNumber : 0,
      },
      {
        id: 1,
        imgFileName : 'pizza',
        name : '마가리타 피자',
        stackNumber : 10,
      },
      {
        id: 1,
        imgFileName : 'pizza',
        name : '마가리타 피자',
        stackNumber : 10,
      },{
        id: 1,
        imgFileName : 'pizza',
        name : '마가리타 피자',
        stackNumber : 10,
      },{
        id: 1,
        imgFileName : 'pizza',
        name : '마가리타 피자',
        stackNumber : 10,
      },{
        id: 1,
        imgFileName : 'pizza',
        name : '마가리타 피자',
        stackNumber : 10,
      }] 
    };
  },
};
</script>

<style scoped>

</style>
