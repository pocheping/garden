<template lang="html">
<div class="city" >
 <mt-index-list>
  <mt-index-section  index="a" >
    <mt-cell  :title="u.n" v-for="u in data4"></mt-cell>
  <!--   <mt-cell title="Alden"></mt-cell>
    <mt-cell title="Austin"></mt-cell> -->
  </mt-index-section>
 <!--  <mt-index-section index="B">
    <mt-cell title="Baldwin"></mt-cell>
    <mt-cell title="Braden"></mt-cell>
  </mt-index-section>

  <mt-index-section index="Z">
    <mt-cell title="Zack"></mt-cell>
    <mt-cell title="Zane"></mt-cell>
  </mt-index-section> -->
</mt-index-list>
</div>
</template>

<script>

export default {
  name:'city',
  data:function(){
    return{
      data4:[{}], 
    }
  },
  mounted(){
    this.$http.get('./src/json/mycity.json').then((response) => {
        // 响应成功回调
        // console.log(response.data);
        this.data4= response.data;
        // console.log(this.data4.length);
        // for(var i=0;i <this.data4.length;i++){
        //   if(this.data4[i].f == "a"){
        //     console.log(this.data4[i].n)
        //   }
        // }
     }, (response) => {
       // 响应错误回调
        console.log('服务器请求失败');
    });
  }
}
</script>

<style lang="css">

</style>
