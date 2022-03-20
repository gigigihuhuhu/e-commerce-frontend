<template>
  <div class="col">
    <div class="card">
      <div class="row g-0">
        <div class="col-md-4">
          <img v-bind:src="getImgUrl(productInfo.imgFileName)" class="rounded float-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{productInfo.name}}</h5>
            <p class="card-text"><small class="text-muted">재고 수량 : {{productInfo.stackNumber}}개</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product1",
  props: ['productInfo'],
  mounted() {
    console.log('부모 컴포넌트 Product List 로 부터 전달 받은 상품 정보 : ', this.productInfo);
  },
  methods: {
    getImgUrl(productImgName) {
      const images = require.context('../assets/img/product/', false, /\.png$/);
      return images(`./${ productImgName }.png`);
    },
  },
}
</script>

<style scoped>

</style>
