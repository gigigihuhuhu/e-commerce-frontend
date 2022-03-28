<template>
  <div class="container">
    <footer class="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top fixed-bottom">
      <p class="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>
      <a href="/"
         class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <i class="bi bi-globe" width="40" height="32" xlink:href="/"> Study Hard</i>
      </a>
      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Pricing</a></li>
        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">FAQs</a></li>
        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">About</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.bi {
  font-size: 1.5em;
  font-style: normal;
}

</style>
