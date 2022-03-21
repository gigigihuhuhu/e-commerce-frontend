<template>
  <div>
    <h1 class="row justify-content-center mt-5">단축 URL 서비스</h1>
    <form class="p-3">
      <div class="form-floating">
        <input ref="inputUrl" type="text" class="form-control"
               placeholder=placeholder id="floatingText">
        <label class="text-muted" for="floatingText">{{ placeholder }}</label>
      </div>
    </form>
    <span class="row justify-content-center p-3">
      <button type="summit" class="btn btn-warning btn-lg col-2"
              v-on:click="createShortUrlAndGetShortenedUrl">Create</button>
    </span>
    <div class="accordion" id="accordionExample" v-show=isGotUrl>
      <div class="accordion-item">
        <h4 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h4>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Congratulations!! you've got your shortened url.</strong>
            <p>{{shortenUrl}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShortenURL',
  data() {
    return {
      placeholder: 'http:// URL that wants to be shorten',
      isGotUrl: false,
      shortenUrl: '',
    };
  },
  methods: {
    createShortUrlAndGetShortenedUrl() {
      const originUrl = this.$refs.inputUrl.value;
      const hashAlgorithm = 'CRC-32';
      const param = { originUrl, hashAlgorithm };
      this.$axios.post('/api/url', param)
        .then((response) => {
          this.isGotUrl = true;
          this.shortenUrl = response.config.baseURL + "/" + response.data;
        })
        .catch((reason) => {
          alert(reason);
        });
    },
  },
};
</script>

<style scoped>

</style>
