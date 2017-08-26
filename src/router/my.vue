<template lang="html">
  <div class="my">

	<v-login></v-login>


 

   
  </div>
</template>

<script>
import Login from '../components/login.vue';
export default {
	name:'my',
	data(){
		return {
			
		}
	},components:{
		'v-login':Login
	}
}
</script>

<style lang="css">
#my{
	width:100%;
	height:3rem;
}
</style>
