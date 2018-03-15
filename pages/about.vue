<template>
  <div class="main-wrap">
    <teparkHeader/>
    <teparkNav/>
    <teparkSearchForm/>
    <div class="page-wrap">
      <h1>О компании</h1>
      <p v-for="about of abouts" v-html="about.paragraph">
      </p>
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
    title: 'О компании — ООО «Тепарк»'
  },
  async asyncData ({ qwe, qwer }) {
    let [aboutRes] = await Promise.all([
      axios.get('http://185.125.219.111:3000/content/company/about.json')
    ])
    return {
      abouts: aboutRes.data
    }
  }
}
</script>

<style>

</style>
