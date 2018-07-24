import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import Postlist from '../components/Postlist'
import userinfo from '../components/userinfo'
import sidebar from '../components/sidebar'

Vue.use(Router)

export default new Router({
  routes: [{
    name:'root',
    path:'/',
    components:{
      main:Postlist,
    }
  },{
    name:'Article',
    path:'/topic/:id&author=:name',
    components:{
      main:Article,
      sidebar
    }
  },{
    name:'user_info',
    path:'/userinfo/:name',
    components:{
      main:userinfo
    }
  }]
})
