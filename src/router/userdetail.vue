<template lang="html">
  <div class="">
    用户详情页{{uid}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      uid:this.$route.params.uid
    }
  },mounted(){
    console.log(this.$route.params.uid);
  }
}
</script>

<style lang="css">
</style>
