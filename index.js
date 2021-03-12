const routes = [
        
	{path:'/', component:  httpVueLoader('./component/home.vue')},
	{path:'/projet', component: httpVueLoader('./component/project.vue')}

]

  const router =  new VueRouter({
  
  routes
  
  })

 const app = new Vue({
 
 router
 
 }).$mount('#app')
