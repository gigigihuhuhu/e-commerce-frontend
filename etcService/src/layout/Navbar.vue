<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><i class="bi bi-globe point-color"> Study</i> </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/url">Short Url</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/firstexample">Example</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/admin">관리자 Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/customer">고객 Page</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-warning" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar'
};
</script>

<style scoped>
.nav-item {
  font-size: 1.3em;
}

.bi {
  font-size: 1.5em;
  font-style: normal;
}

.point-color {
  color: gold;
}
</style>
