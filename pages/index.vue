<template>
  <div class="main-wrap">
    <teparkHeader/>
    <teparkNav/>
    <teparkSearchForm/>
    <div class="product wrap">
      <a v-for="product in products" :href="product.href" :class="product.class">
        <img :src="product.img" />
        <h3>{{ product.title }}</h3>
      </a>
    </div>
    <div class="brands wrap">
      <a v-for="brand in brands" :href="brand.href" :class="brand.class">
        <img :src="brand.img" />
        <span>
          <h3>{{ brand.title }}</h3>
          <p v-html="brand.about"></p>
        </span>
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
    title: 'ООО «Тепарк»'
  },
  async asyncData ({ qwe, qwer, qwert }) {
    let [partsRes, productsRes, brandsRes] = await Promise.all([
      axios.get('http://185.125.219.111:3000/content/parts/parts.json'),
      axios.get('http://185.125.219.111:3000/content/main/main-products.json'),
      axios.get('http://185.125.219.111:3000/content/main/main-brands.json')
    ])
    return {
      sParts: partsRes.data.slice(0, 10),
      products: productsRes.data.slice(0, 6),
      brands: brandsRes.data.slice(0, 11)
    }
  }
}
</script>

<style>

</style>
