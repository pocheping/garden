<template lang="html">
<div class="card">
    <div class="circle_card" v-for="p in data6.card">
        <div class="data">
    		<img :src="p.img1">
            <div class="circle_text">
                <p>{{p.p}}</p>
                <span>{{p.span1}}</span>
            </div>

    		<s>{{p.s}}</s>
    	</div>
    	<div class="chat">
    		<span>{{p.span2}}</span>
    		<ul>
    			<li v-for="m in data6.image"><img :src="m.img1"></li>
                    
    		</ul>
    	</div>
    	 <div class="zan">
    	 	<ul>
    	 		<li><img src="../img/community_item_share.png"><span>0</span></li>
    	 		<li><img src="../img/community_item_pinglun.png"><span>0</span></li>
    	 		<li><img src="../img/community_item_collect.png"><span>0</span></li>
    	 	</ul>
    	 </div>
    </div>
    </div>
</template>

<script>
export default {
	data:function(){
		return{
			data6:{
			 "card": [{}],
             "image":[{}]
			},
            th: 1		
		}
	},
	mounted(){
		this.$http.get('./src/json/6.json').then((response) => {
		    // 响应成功回调
		    console.log(response.data);
		    this.data6= response.data
		 }, (response) => {
		   // 响应错误回调
		    console.log('服务器请求失败');
		});
	}
  
}
</script>

<style lang="css">
</style>