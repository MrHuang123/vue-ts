import constant from './constant' //学生平台

const login = (resolve: any) => require(['@/views/index/login.vue'], resolve)

export default {
  routes:[
    {
      path: '/login',
      component: login
    },
    constant
  ]
}
