<template lang="html">
  <div class="header">
	   <router-link  :to="{ name:'city', params: {} }">
	   		<span class="home">青岛∨</span>
	   </router-link>
 		<input type="text" placeholder="搜索你喜欢的宝贝">
 		<router-link  :to="{ name:'store', params: {} }">
 			<i class="iconfont icon-gouwuche"></i>
		</router-link>

  </div>
</template>

<script>

export default {
	data(){
		return{
			// title:null,
			// name:null
			// isok:true

		}
	},mounted(){

		// console.log(name);

	},methods:{
      // city: function () {	
   		 // this.$parent._data.isok = ! this.$parent._data.isok;
   		 // // console.log(this.$parent._data.isok)
      //  }
	}
}
</script>

<style lang="css">

</style>
