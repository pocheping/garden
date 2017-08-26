<template lang="html">
<div class="home_pubu">
	<span>今日推荐</span>
	<div class="bigbox">
		<div class="pubu_box" v-for="i in data3.pubu">
			<router-link :to="{ name: 'my', params: {} }">
				<img :src="i.img2" >
				<div class="pubu_text">
					<p>{{i.p}}</p>
					<ul>
						<li>#花艺学堂</li>
						<li><i class="iconfont icon-icons64x6416"></i></li>
						<li>{{i.li}}</li>
					</ul>
				</div>
			</router-link>
		</div>
		
		
	</div>
</div>
</template>

<script>
export default {
	data:function(){
		return{
			data3:{
			 "pubu": [
				  {
				   
				  }
			  ]
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
	}
}
</script>

<style lang="css">
</style>
