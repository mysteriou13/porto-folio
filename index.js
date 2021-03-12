const Foo = { template: '<div>foo</div>' }
const projet = {template: '<div>projet</div>'}


const routes = [
        
	{path:'/', component: projet},
	{path:'/projet', component: Foo}

]

  const router =  new VueRouter({
  
  routes
  
  })

 const app = new Vue({
 
 router
 
 }).$mount('#app')
