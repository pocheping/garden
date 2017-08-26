<template>
  <div id="app">
      
      <transition :name="transitionName">  
       <router-view class="child-view"></router-view>  
      </transition> 
      <v-footer></v-footer>
      <rd-preview></rd-preview>

  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tit: "home",
      transitionName: 'slide-left'  
    }
  },
  components:{
    'v-footer':Footer,
    'v-header':Header
  },
  mounted(){

  },
  //监听路由的路径，可以通过不同的路径去选择不同的切换效果  
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

<style lang="scss">
#app {
  width:100%;
  height:100%;
  background: white;
}
footer .router-link-active{
  color:rgb(242, 184, 10);
}
.child-view {  
  position: absolute;  
  left: 0;    
  width: 100%;  
  height: 100%;  
  transition: all .5s cubic-bezier(.55,0,.1,1);  
  z-index:2;
}  
.rd-preview-img{
  z-index:10;
}
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
body{
  position: relative;
}

</style>
