<template lang="html">
	<div class="find">
	  <v-find-swiper></v-find-swiper>
	  <ul class="hot">
	  	<li>
	  		<div><h4>热门讨论</h4><span>更多热门讨论</span></div>
	  	</li>
	  	<li>有知道这是什么品种？</li>
	  	<li>花的意义</li>
	  	<li>你最爱的花</li>
	  </ul>
	  <div class="rec_bg">
	  	<h3>今日红人</h3>
	  	<ul class="person">
	  		<li v-for="k in data3.rec">
	  			<div>
		  			<img :src="k.img">
		  			<p>{{k.p}}</p>
		  			<span>{{k.span}}</span>
		  			<button>订阅Ta</button>
		  		</div>
	  		</li>
  			
	  	</ul>

	  	<h3>精选内容</h3>
	  	<ul class="selection">
	  		<li v-for="l in data3.selection"><img :src="l.img"></li>
	  	</ul>
	  </div>
	</div>
</template>

<script>
import Swiper from '../components/swiper.vue';
export default {
	name:'find',
	data(){
		return{
			data3:{
				"rec":[{}],
				"selection":[{}]
			}
		}
	},
	mounted(){
		this.$http.get('./src/json/3.json').then((response) => {
		    // 响应成功回调
		    console.log(response.data);
		    this.data3= response.data
		 }, (response) => {
		   // 响应错误回调
		    console.log('服务器请求失败');
		});
	},components:{
		'v-find-swiper':Swiper
	}
}
</script>

<style lang="css">
 
</style>