<template lang="html">
  <footer>
    <router-link :to="{ name: 'home', params: {} }">
      <i class="iconfont icon-jiandao"></i>
      <span>专题</span>
    </router-link>
    <router-link :to="{ name: 'find', params: {} }">
      <i class="iconfont icon-zhalan"></i>
      <span>发现</span>
    </router-link>
    <router-link :to="{ name: 'tree', params: {} }">
      <i class="iconfont icon-yezi" id = "tree"></i>
    </router-link>
    <router-link :to="{ name: 'store', params: {} }">
      <i class="iconfont icon-shangcheng"></i>
      <span>商城</span>
    </router-link>
    <router-link :to="{ name: 'my', params: {} }">
      <i class="iconfont icon-pingzi"></i>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="css">
</style>
