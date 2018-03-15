<template>
  <div class="main-wrap">
    <teparkHeader/>
    <teparkNav/>
    <teparkSearchForm/>
    <div class="product-page wrap">
      <h1>Буровое оборудование</h1>
      <p>Буровое оборудование.</p>
      <div class="brands wrap">
        <a href="#" class="brand-item bi6">
          <img src="img/brands/mincon.jpg">
          <span>
            <h3>Mincon</h3><p>Пневмоударники, буровые коронки лучшего в мире качества</p>
          </span>
        </a>
      </div>
    </div>
    <div class="product-page-all wrap">
      <a v-for="product in products" :href="product.href" :class="product.class">
        <img :src="product.img" />
        <h3>{{ product.title }}</h3>
      </a>
    </div>
  </div>
</template>

<script>
import teparkHeader from '~/components/teparkHeader.vue'
import teparkNav from '~/components/teparkNav.vue'
import axios from 'axios'

export default {
  components: {
    teparkHeader,
    teparkNav
  },
  head: {
    title: 'Буровое оборудование — ООО «Тепарк»'
  },
  async asyncData ({ qwe, qwer }) {
    let [productsRes] = await Promise.all([
      axios.get('http://185.125.219.111:3000/content/main/main-products.json')
    ])
    return {
      products: productsRes.data.slice(0, 6)
    }
  }
}
</script>

<style>
.product-page-all {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr;
}
.product-page-all a {
  padding: 10px;
  border: 1px solid rgba(0,0,0,.15);
}
.product-page-all img {
  display: block;
  max-width: 100%;
  margin: auto;
}
.product-page-all h3 {
  max-width: 206px;
  margin: auto;
  text-align: center;
  font-weight: 400;
}
.brand-item p {
  max-width: 100%;
}
</style>
