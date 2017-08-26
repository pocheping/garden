<template lang="html">
  <header>
	   <router-link  v-for="(value,key) in title" :to="{ name: value, params: {} }">
	   		<span class="home">{{key}}</span>
	   </router-link>
 		<i class="iconfont icon-sousuo"></i>


  </header>
</template>

<script>

export default {
	data(){
		return{
			title:null,
			name:null

		}
	},mounted(){

		console.log(name);

	}
}
</script>

<style lang="css">

</style>
