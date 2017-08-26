<template lang="html">
<div id="login">
	<div class="login_back">
		<router-link :to="{ name: 'home', params: {} }"><img src="../img/regedit_back.png" alt=""></router-link>
		<router-link :to="{ name: 'home', params: {} }"><img src="../img/regedit_close.png"></router-link>
	</div>
	<div class="logo"><img src="../img/regedit_logo.png" alt=""></div>
	<div class="login_btn">
		<button>登录</button>
		<button>注册</button>
	</div>
	
</div>


</template>

<script>

export default{
  data(){
    return{

    }    
  }
  
}

</script>

<style lang="css">

</style>