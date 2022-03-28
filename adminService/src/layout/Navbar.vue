<template>
  <header>
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <i class="bi-alarm"></i>
          </a>
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <div class="flex-container stretch">
                <a class="bi-house-door-fill text-secondary flex-item text-sm-center" href="/"> Home</a>
              </div>
            </li>
            <li>
              <i class="bi-alarm col justify-content-center text-secondary"></i>
            </li>
            <li>
              <i class="bi-bullseye col justify-content-center text-secondary"></i>
            </li>
            <li>
              <i class="bi-alarm col justify-content-center text-secondary"></i>
            </li>
            <li>
              <i class="bi-alarm col justify-content-center text-secondary"></i>
            </li>
          </ul>
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/" class="nav-link text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/" class="nav-link text-secondary">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/" class="nav-link text-secondary">
                Orders
              </a>
            </li>
            <li>
              <a href="/" class="nav-link text-secondary">
                Products
              </a>
            </li>
            <li>
              <a href="/" class="nav-link text-secondary">
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
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

.flex-container {
  display: inline-flex;
  flex-flow: row wrap;
  height: 80px;
  width: 80px;
  padding: 10px;
  margin: 5px;
}

.flex-container.stretch {
  align-content: center;
}

.flex-container.flex-start {
  align-content: flex-start;
}

.flex-container.flex-end {
  align-content: flex-end;
}

.flex-container.center {
  align-content: center;
}

.flex-container.space-around {
  align-content: space-around;
}

.flex-container.space-between {
  align-content: space-between;
}

.flex-container.space-evenly {
  align-content: space-evenly;
}

.flex-item {
  width: 50px;
  height: 30px;
  margin: 5px;
  color: white;
  font-size: 22px;
  text-align: center;
}
</style>
