<template lang="html">
  <div class="">
    <h1>列表</h1>
    <div class="">

      <router-link :to="{ name: 'user.userdetail', params: {uid:'1'} }">用户1</router-link>
      <router-link :to="{ name: 'user.userdetail', params: {uid:'2'} }">用户2</router-link>
      <router-link :to="{ name: 'user.userdetail', params: {} }">用户3</router-link>
      <router-link :to="{ name: 'user.userdetail', params: {} }">用户4</router-link>
    </div>


  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
