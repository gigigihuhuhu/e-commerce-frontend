<template>
  <div>
    <h3>상품 등록</h3>
    <v-form class="mt-5" v-model="valid">
      <v-row :key="index+100" v-for="(rowforms, index) in displayForms">
        <v-col  :key="form.name" v-for="(form) in rowforms">
          {{ form.name }}
          <v-combobox
            v-model="form.value"
            :items="form.items"
            :label="form.name"
            :multiple="form.multiple"
            v-if="form.type == 'combobox'"
          />
          <v-text-field
            v-model="form.value"
            :label="form.name"
            :placeholder="form.name"
            v-if="form.type == 'text-field'"
          ></v-text-field>
        </v-col>
      </v-row>

      상품 이미지 (최대 4개)
      <div :key="renderImage">
        <v-avatar
          class="profile ma-3 uploadImg"
          size="238"
          rounded
          :key="imageUrl"
          v-for="(imageUrl) in imageUrls"
        >
          <v-img :src="imageUrl"></v-img>
        </v-avatar>
        <v-avatar
          class="profile ma-2"
          color="light-blue lighten-5"
          size="238"
          rounded
          v-if="imageUrls.length < maxImageNum"
        >
          <v-file-input
            class="pl-13 ml-14 mb-7"
            hide-input
            prepend-icon="mdi-camera"
            :rules="rules"
            accept="image/png, image/jpeg, image/bmp"
            @change="uploadImage"
            full-width
          ></v-file-input>
        </v-avatar>
      </div>
      <div class="text-right">
        <v-btn class="mr-4" @click="submit" outlined> submit </v-btn>
        <v-btn @click="clear" outlined> clear </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import ProductDto from './ProductDto'

export default {
  name: "ProductRegistration",
  data: () => ({
    valid: false,
    rules: [
      (value) =>
        !value ||
        value.size <= 2000000 ||
        "이미지 파일 최대 크기는 2MB 입니다.",
    ],

    displayForms: [],

    forms: {
      name : {
        name: "상품명",
        type: "text-field",
        value: "",
      },
      productType : {
        name: "상품 유형",
        type: "combobox",
        value: "",
        items: ["A", "B", "C"],
        codeGroup:"ProductType",
        multiple: false,
      },
      price : {
        name: "상품 가격",
        type: "text-field",
        value: "",
      },
      cost: {
        name: "비용",
        type: "text-field",
        value: "",
      },
      sellingStatus: {
        name: "판매 상태",
        type: "combobox",
        value: "",
        items: ["판매중", "판매금지"],
        codeGroup:"SellingStatus",
        multiple: false,
      },
      giftPossibleYn:{
        name: "선물 가능 여부",
        type: "combobox",
        value: "",
        items: ["Y", "N"],
        multiple: false,
      },
      possibleOrderOptions:{
        name: "주문 옵션",
        type: "combobox",
        value: [],
        items: ["A", "B", "C"],
        multiple: true,
      },
      possibleProductOptions:{
        name: "상품 옵션",
        type: "combobox",
        value: [],
        items: ["A", "B", "C"],
        multiple: true,
      },
    },

    maxImageNum: 4,
    imageUrls: [],
    imageFiles: [],
    renderImage: 0,
  }),

  methods: {
    uploadImage(file) {
      const idx = this.imageUrls.length;
      this.imageFiles[idx] = file;
      this.imageUrls[idx] = URL.createObjectURL(this.imageFiles[idx]);
      this.renderImage++;
    },

    clear() {
      console.log('this.displayForms',this.displayForms)
      console.log('this.forms',this.forms)
    },

    submit() {
      const productDto = this.getProductDtoFromUserInput()
      console.log('productDto',productDto)
      this.$axios.post("/api/product",productDto).then(response => {
        console.log(response)
      })
    },

    getProductDtoFromUserInput(){
      let productDto = new ProductDto()
      productDto.name = this.forms.name.value
      return productDto
    },

    setDisplayForm(cols) {
      this.displayForms = []
      const keys = Object.keys(this.forms)
      for(let i = 0 ; i < keys.length/cols ; i++){
        this.displayForms[i] = [];
      }
      for(let i = 0 ; i < keys.length ; i++){
        this.displayForms[Math.floor(i/cols)][i%cols] = this.forms[keys[i]]
      }
    },
  },

  mounted() {
    this.setDisplayForm(10)
  },
};
</script>

<style scoped>
.uploadImg {
  border: 2px solid transparent;
  border-image: linear-gradient(to right, lightblue 0%, cyan 100%);
  border-image-slice: 1;
}
.max-form-width{
  max-width: 1000px;
}
</style>
