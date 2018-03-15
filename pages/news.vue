<template>
  <div class="main-wrap">
    <teparkHeader/>
    <teparkNav/>
    <teparkSearchForm/>
    <div class="news-wrap">
      <h2>Новости</h2>
      <paginate name="tnews" :list="tnews" :per="5" class="paginate-list">
        <div v-for="tnew in paginated('tnews')" class="news-item">
          <span v-html="tnew.date" class="news-date"></span>
          <h3 v-html="tnew.title" class="news-title"></h3>
          <p v-html="tnew.text" class="news-text"></p>
        </div>
      </paginate>
      <span>Страницы:</span>
      <paginate-links for="tnews"></paginate-links>
    </div>
    <div class="stock-wrap">
      <h2>Акции</h2>
      <div v-for="tstock of tstocks" class="stock-item">
        <span v-html="tstock.date" class="stock-date"></span>
        <span @click="$modal.show(tstock.name)" v-html="tstock.title" class="stock-title"></span>
        <p v-html="tstock.text" class="stock-text"></p>
        <modal v-bind:name="tstock.name" :adaptive="true" width="50%" height="auto" :scrollable="true">
          <p v-html="tstock.date" class="stock-date"></p>
          <p v-html="tstock.title" class="stock-title"></p>
          <img :src="tstock.image" class="stock-image" />
          <p v-html="tstock.text" class="stock-text"></p>
          <p v-html="tstock.fulltext" class="stock-text"></p>
          <button @click="$modal.hide(tstock.name)" class="stock-close">
            ❌
          </button>
        </modal>
      </div>
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
    title: 'Новости — ООО «Тепарк»'
  },
  async asyncData ({ qwe, qwer }) {
    let [newsRes, stockRes] = await Promise.all([
      axios.get('http://185.125.219.111:3000/content/news/news.json'),
      axios.get('http://185.125.219.111:3000/content/news/stock.json')
    ])
    return {
      tnews: newsRes.data,
      tstocks: stockRes.data,
      paginate: ['tnews']
    }
  },
  methods: {
    show () {
      this.$modal.show()
    },
    hide () {
      this.$modal.hide()
    }
  }
}
</script>

<style>
.news-wrap {
  padding-right: 5px;
}
.paginate-list {
  margin: 0;
  padding: 0;
}
.paginate-links {
  display: inline-block;
  margin: 0 0 20px;
  padding: 0 0 0 10px;
}
.number {
  display: inline-block;
  margin-right: 10px;
}
.number a {
  display: block;
  padding: 5px 10px;
  border: 1px dashed rgba(1,87,155,.3);
  cursor: pointer;
}
.number a:hover{
  border: 1px dashed rgba(255,109,0,.3);
}
.stock-item {
  margin-bottom: 10px;
  padding: 10px 15px;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 3px;
}
.stock-item p {
  margin-top: 0;
}
.stock-text {
  margin-bottom: 0;
}
.news-date,
.stock-date {
  margin-right: 5px;
  font-size: 86%;
  color: #858489;
}
.news-title {
  display: inline;
}
.stock-title {
  color: #01579b;
  border-bottom: 1px dashed rgba(1,87,155,.3);
  cursor: pointer;
}
.stock-title:hover {
  color: #ff6d00;
  border-bottom: 1px dashed rgba(255,109,0,.3);
}
.stock-image {
  width: 35%;
  float: left;
  margin-right: 15px;
}
.v--modal-box {
  padding: 20px;
}
.stock-close {
  position: absolute;
  top: -1px;
  right: -1px;
}
</style>
