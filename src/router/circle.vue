<template lang="html">
  <div class="circle">
	<v-circleCard></v-circleCard>

  </div>
</template>

<script>
import CircleCard from '../components/circle_card.vue';
export default {
	name:'circle',
	data(){
		return{

		}
	},
	components:{
		'v-circleCard':CircleCard
	}
  
}
</script>

<style lang="css">
</style>