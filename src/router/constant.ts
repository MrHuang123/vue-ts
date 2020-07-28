const admin = (resolve: any) => require(['@/views/admin.vue'], resolve)
const corpusMange = (resolve: any) => require(['@/views/library/index.vue'], resolve)

export default {
  path: '/admin',
  component: admin,
  redirect: '/admin/library',
  children: [
    {
      path: '/admin/library',
      component: corpusMange,
    }
  ]
}
