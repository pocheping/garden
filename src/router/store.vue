<template lang="html">
<div class="store">
  <v-header></v-header>
	<router-view></router-view>
</div>
</template>

<script>
import Header1 from '../components/header1.vue';

export default {
	name:'store',
  	data(){
  		return{
  			 isok: false
  		}
       
    },
    methods: {

    },
	mounted(){
		// this.$http.get('./src/json/1.json').then((response) => {
		//     // 响应成功回调
		//     console.log(response.data);
		//     this.dataa= response.data
		//  }, (response) => {
		//    // 响应错误回调
		//     console.log('服务器请求失败');
		// });
	},components:{
		// 'v-city':City,
		// 'v-header':Header1,
		// 'v-find-swiper':Swiper,
		// 'v-nav':Nav
		'v-header':Header1
	}
  
	
}
</script>

<style lang="css">
</style>
