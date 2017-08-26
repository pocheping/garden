<template lang="html">
<div class="shop">
	<ul>
		<li v-for="o in data5.flower">
			<router-link :to="{ name: 'home', params: {} }">
				<div class="shopbox">
					<img :src="o.img">
					<p>{{o.p}}</p>
					<div class="shop_text">
						<s style="text-decoration: line-through;">{{o.s}}</s>
						<span>￥{{o.span}}</span>
					</div>
					
				</div>
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
			 "flower": [
				  {
				   
				  }
			  ]
			}	
		}	
	},
	mounted(){
		this.$http.get('./src/json/5.json').then((response) => {
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