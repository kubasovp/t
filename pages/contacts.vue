<template>
  <div class="main-wrap">
    <teparkHeader/>
    <teparkNav/>
    <teparkSearchForm/>
    <div class="contacts-page wrap">
      <h1>Контакты</h1>
      <h2>Екатеринбург</h2>
      <p>Офис и склад  ООО «Тепарк» расположены по адресу:<br>  620034, г. Екатеринбург ул. Труда, 10, офисы 36–38</p>
      <p><strong>Отдел продаж:</strong></p>
      <ul>
        <li>8 (800) 775-12-01</li>
        <li>+7 (343) 286-13-71</li>
        <li>+7 (343) 286-13-72</li>
        <li>E-mail: <a href="#">info@tepark.ru</a></li>
      </ul>
      <h2>Красноярск</h2>
      <ul>
        <li>Адрес:  660020, г. Красноярск, ул. Караульная, 31, оф. 503</li>
        <li>+7 (391) 219-99-24</li>
        <li>E-mail: <a href="mailto:hof@tepark.ru">hof@tepark.ru</a></li>
      </ul>

    </div>
    <div class="contacts-page-maps wrap">
      <p><strong>Схема проезда в Екатеринбургe:</strong></p>
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3AnbqCG37BRNR1kXxVcVofoIh9CO51C7IZ&amp;width=100%25&amp;height=240&amp;lang=ru_RU&amp;scroll=true"></script>
      <p><strong>Схема проезда в Красноярскe:</strong></p>
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A33e9972c48fa8e1fc579865196ff309799eff9895ed2852316d7c101db459675&amp;width=100%25&amp;height=240&amp;lang=ru_RU&amp;scroll=true"></script>

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
    title: 'Контакты — ООО «Тепарк»'
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
.contacts-page-maps {
  padding-top: 1.4em;
}
</style>
