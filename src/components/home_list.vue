<template lang="html">
<div class="home_list">
	<span>专题分类</span>
	<div class="home_list_box">
		<div class="home_list_imgbox" v-for="j in data3.list">
			<router-link :to="{ name: 'home', params: {} }">
				<img :src="j.img">
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
			 "list": [
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
