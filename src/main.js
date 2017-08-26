import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { RadonInstall } from 'radon-ui'
require('./styles/main.scss');
import Home from "./router/home.vue"
import Find from "./router/find.vue"
import Store from "./router/store.vue"
import My from "./router/my.vue"
import Recommend from "./router/recommend.vue"
import Circle from "./router/circle.vue"
import Active from "./router/active.vue"
import Take from "./router/take.vue"
import Tree from "./router/tree.vue"
import City from "./router/city.vue"
import StoreIndex from "./router/store_index.vue"
import vueAjax from "../js/vue-resource.min.js"




import App from './App.vue'
import { Swipe, SwipeItem } from 'mint-ui';
import { IndexList, IndexSection } from 'mint-ui';


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);

Vue.use(MintUI);
Vue.use(vueAjax);
Vue.use(RadonInstall, {
    Modal: true,
    Notification: true,
    LoadingBar: true,
    Preview: true
})


const router = new vueRouter({
  routes:[{
    path:'/home',
    name:'home',
    component:Home
  },{
    path:"/find",
    name:'find',
    component:Find,
    'children':[{
        path:'',
        name:'recommend',
        component:Recommend
      },{
        path:'active',
        name:'active',
        component:Active
      },{
        path:'circle',
        name:'circle',
        component:Circle
      },{
        path:'take',
        name:'take',
        component:Take
      }]
  },{
    path:'/tree',
    name:'tree',
    component:Tree
  },{
    path:'/store',
    name:'store',
    component:Store,
    'children':[{
      path:'',
      name:'StoreIndex',
      component:StoreIndex
    },{
      path:'city',
      name:'city',
      component:City
    }]
  },{
    path:'/my',
    name:'my',
    component:My
  },{
    path:'*',
    redirect:'/home'
  }]
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
