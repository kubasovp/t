<template>
  <div class="menu wrap">
    <ul class="nav">
      <li><router-link to="/">Продукция</router-link></li>
      <li><router-link to="/about">Компания</router-link></li>
      <li><router-link to="/news">Новости и акции</router-link></li>
      <li><router-link to="/service">Сервис</router-link></li>
      <li><router-link to="/contacts">Контакты</router-link></li>
    </ul>
  </div>
</template>

<style>
.nuxt-link-exact-active {
  color: #ff6d00;
}
</style>