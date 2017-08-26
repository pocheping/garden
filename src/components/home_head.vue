<template lang="html">
<div class="cardbox">
	<div class="card" v-for="item in data2.sites">
		<div class="imgbox">
			<router-link :to="{ name: 'my', params: {} }">
				<img :src="item.img">
			</router-link>
		</div>
		<p>{{item.p}}</p>
		<span>{{item.span}}</span>
	</div>

</div>
</template>

<script>
export default {
	data:function(){
		return{
			data2:{
			 "sites": [
				  {
				   
				  }
			  ]
			}		
		}
	},
	mounted(){
		this.$http.get('./src/json/2.json').then((response) => {
		    // 响应成功回调
		    console.log(response.data);
		    this.data2= response.data
		 }, (response) => {
		   // 响应错误回调
		    console.log('服务器请求失败');
		});
	}
}
</script>

<style lang="css">
</style>
