<template lang="html">
<div class="home_wall">
	<span>每日壁纸</span>
	<div class="home_wall_box" >
		<div class="home_wall_imgbox" v-for="img in imgs">
			<router-link :to="{ name: 'home', params: {} }">
				<img v-preview="img" :src="img" >
			</router-link>
		</div>
		
	</div>
</div>
</template>

<script>
export default {
    data () {
    return {
        imgs: ["../src/img/home_wall.jpg", "../src/img/home_wall1.jpg","../src/img/home_wall2.jpg","../src/img/home_wall3.jpg" ,"../src/img/home_wall4.jpg","../src/img/home_wall5.jpg" ,"../src/img/home_wall6.jpg","../src/img/home_wall7.jpg" ,"../src/img/home_wall8.jpg", "../src/img/home_wall9.jpg" ]
    }
}
}
</script>

<style lang="css">
</style>
