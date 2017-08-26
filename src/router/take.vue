<template lang="html">
  <div class="take">
   	<v-login></v-login>

  </div>
</template>

<script>
import Login from '../components/login.vue';
export default {

	data(){
		return{
			name:'take'
			
		}
	},
	mounted(){

		this.$parent.$children[0].name = this.name;
	},components:{
		'v-login':Login
	}
}
</script>

<style lang="css">
</style>