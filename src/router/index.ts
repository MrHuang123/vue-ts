const login = (resolve: any) => require(['@/views/login.vue'], resolve)

export default {
  routes:[
    {
      path: '/login',
      component: login
    }
  ]
}
