<template>
<!--  路由部分-->
<div id="app">
  <router-view/>
<!--  导航部分-->
<!--  v-show控制在注册的时候不显示footer,可以在route对象的meta属性中添加一个属性,只有在属性为
true时才去显示-->
  <FooterGuide v-show="$route.meta.showFooter"/>
</div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
