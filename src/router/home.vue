<template lang="html">
	<div id ="home">
		<v-header></v-header>
		<v-home-header></v-home-header>
		<v-home-list></v-home-list>
		<v-home-wall></v-home-wall>
		<v-home-pubu></v-home-pubu>

	</div>
</template>

<script>
import Header from '../components/header.vue';
import HomeHead from '../components/home_head.vue';
import HomeList from '../components/home_list.vue';
import HomeWall from '../components/home_wall.vue';
import HomePubu from '../components/home_pubu.vue';

export default {
	name:'home',
	components:{
		'v-header':Header,
		'v-home-header':HomeHead,
		'v-home-list':HomeList,
		'v-home-wall':HomeWall,
		'v-home-pubu':HomePubu
	},
	data(){
		return {
			tit: {'花田小憩':"home"}
		}
	},
	mounted(){
		this.$children[0].title = this.tit;
	}
}
</script>

<style lang="css">
#home{
	height:100%;
	overflow: auto;
	overflow-x:hidden;
	top:0;
}

</style>
