<template lang="html">
<div class="store">
	<router-view></router-view>

  <v-find-swiper></v-find-swiper>
  <!-- <v-city v-if="isok"></v-city> -->
  <v-nav></v-nav>
  <v-tap></v-tap>
  <v-card></v-card>
  <v-tap></v-tap>
  <v-card></v-card>
  <v-tap></v-tap>
  <v-shop></v-shop>
  <v-tap></v-tap>
   <v-shop></v-shop>

</div>
</template>

<script>
// import City from '../components/city.vue';

import Swiper from '../components/swiper.vue';
import Nav from '../components/store_nav.vue';
import Card from '../components/store_card.vue';
import Tap from '../components/tap.vue';
import Shop from '../components/shop.vue';

export default {
	name:'store',
  	data(){
  		return{
  			 // isok: false
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
		
		'v-find-swiper':Swiper,
		'v-nav':Nav,
		'v-card':Card,
		'v-tap':Tap,
		'v-shop':Shop

	}
  
	
}
</script>

<style lang="css">
</style>
