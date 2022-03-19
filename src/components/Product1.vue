<template>
  <div class="col">
    <div class="card">
      <div class="row g-0">
        <div class="col-md-4">
          <img v-bind:src="getImgUrl(img)" class="rounded float-start" alt="...">
          <!--          <a v-bind:href="imgsrc"> asas </a>-->
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product1",
  props: ['img'],
  mounted() {
    console.log('이미지 파일 이름 입니다.', this.img);
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
