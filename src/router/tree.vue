<template lang="html">
  <div class="tree">
   	<v-login></v-login>

  </div>
</template>

<script>
import Login from '../components/login.vue';
export default {

	data(){
		return{
			name:'tree'
			
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