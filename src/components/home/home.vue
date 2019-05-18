<template>
  <div class="home-page">
    <div id="iframe-wrap" @click="clearIframe" v-show="showIframe">
      <iframe id="iframe" src="http://www.17sucai.com/preview/1528155/2019-04-11/heart/index.html" frameborder="0" width="100%" height="613px"></iframe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import home from './home.js'

  export default {
    ...home
  }
</script>

<style>
  @import "./home.css";
</style>
