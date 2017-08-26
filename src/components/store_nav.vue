<template lang="html">
<div class="store_nav">
	<ul>
		<li v-for="it in data5.nav">
			<router-link :to="{ name: 'home', params: {} }">
				<img :src="it.img">
				<span>{{it.span}}</span>
			</router-link>
		</li>
	</ul>
	 
</div>


</template>

<script>

export default{
	data:function(){
		return{
			data5:{
			 "nav": [
				  {
				   
				  }
			  ]
			}		
		}
	},
	mounted(){
		this.$http.get('./src/json/4.json').then((response) => {
		    // 响应成功回调
		    console.log(response.data);
		    this.data5= response.data
		 }, (response) => {
		   // 响应错误回调
		    console.log('服务器请求失败');
		});
	}
  
}

</script>

<style lang="css">

</style>