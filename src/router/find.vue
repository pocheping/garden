<template lang="html">
<div id="find">
	<v-header></v-header>
	<transition :name="transitionName"> 
		<router-view></router-view>
	</transition>
</div>
	
</template>

<script>
import Header from '../components/header.vue';
import Recommend from './recommend.vue';
export default {
	name:'find',
	data(){
		return{
			tit:{"推荐":"recommend","活动":"active","圈子":"circle","订阅":"take"},
			name:["recommend","active","circle","take"],
			transitionName: 'slide-left' 
		}
	},
	mounted(){

		this.$children[0].title = this.tit;
		this.$children[0].name = this.name;

		

	},
	components:{
		'v-header':Header
	},
    watch: {  
	    '$route' (to, from) {  
        if(to.path == '/'){  
          this.transitionName = 'slide-right';  
        }else{  
          this.transitionName = 'slide-left';  
        
        }
      }  
    }
}
</script>

<style lang="css">

.slide-left-enter, .slide-right-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(300px, 0);  
  transform: translate(30px, 0);  
}  
.slide-left-leave-active, .slide-right-enter {  
  opacity: 0;  
  -webkit-transform: translate(-300px, 0);  
  transform: translate(-30px, 0);  
}  
</style>
