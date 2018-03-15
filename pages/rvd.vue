<template>
  <div class="main-wrap">
    <teparkHeader/>
    <teparkNav/>
    <teparkSearchForm/>
    <div class="product-page wrap">
      <h1>Производим рукава высокого давления (РВД)</h1>
      <p>Компания «Технопарк» разработала и зарегистрировала свои Технические условия (ТУ 2554-001-63373305-11) по производству рукавов высокого давления (РВД) и добровольно сертифицировала свое производство. Теперь, помимо 12-месячной гарантии, Вы получите копию сертификата соответствия установленного образца.</p>
      <p>Используем резину Dunlop, Continental, TeсhnoPower или другую по вашему желанию.</p>
      <p>«Технопарк» — единственная компания в России освоила производство РВД с наконечниками БРС Komatsu.</p>
      <p>Ваша выгода от 50% относительно цены оригинала!</p>
      <div class="brands wrap">
        <a href="#" class="brand-item bi1">
          <img src="img/brands/technopower-text.jpg">
          <span>
            <h3>TechnoPower</h3>
            <p>Муфты, фитинги, БРС, рукава высокого давлени</p>
          </span>
        </a>
        <a href="#" class="brand-item bi2">
          <img src="img/brands/dunlop.svg">
          <span>
            <h3>Dunlop</h3>
            <p>Премиальные гидравлические рукава из Европы</p>
          </span>
        </a>
        <a href="#" class="brand-item bi3">
          <img src="img/brands/uniflex.jpg">
          <span>
            <h3>Uniflex</h3>
            <p>Оборудование для произ­водства РВД</p>
          </span>
        </a>
        <a href="#" class="brand-item bi6">
          <img src="img/brands/contitech.png">
          <span>
            <h3>Continental ContiTech</h3>
            <p>Гидравлические рукава — премиальный сегмент</p>
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
    title: 'Производим рукава высокого давления (РВД) — ООО «Тепарк»'
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
