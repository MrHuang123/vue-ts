const admin = (resolve: any) => require(['@/views/admin.vue'], resolve)
const corpusMange = (resolve: any) => require(['@/views/library/index.vue'], resolve)
const corpus = (resolve: any) => require(['@/views/library/corpus.vue'], resolve)
const hotWord = (resolve: any) => require(['@/views/hotWord/index.vue'], resolve)
const userMangement = (resolve: any) => require(['@/views/userMangement/index.vue'], resolve)

export default {
  path: '/admin',
  component: admin,
  redirect: '/admin/library',
  children: [
    {
      path: '/admin/library',
      component: corpusMange,
    },
    {
      path: '/admin/corpus',
      component: corpus,
    },
    {
      path: '/admin/hotWord',
      component: hotWord,
    },
    {
      path: '/admin/userMangement',
      component: userMangement,
    }
  ]
}
