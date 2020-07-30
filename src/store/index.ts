import { Common } from '@/interface/common'
import { Store } from '@/interface/store'
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     features: [
//       { id: 1, name: '类型注解' },
//       { id: 2, name: '编译型语言' }
//     ]
//   },
//   mutations: {
//     addFeatureMutation(state, featureName) {
//       state.features.push({ id: state.features.length + 1, name: featureName })
//     }
//   },
//   actions: {
//     addFeatureAction({ commit }, featureName) {
//       commit('addFeatureMutation', featureName)
//     }
//   },
//   modules: {}
// })
const STATE = {
  height: window.innerHeight,
  width: window.innerWidth,
  features: [
    { id: 1, name: '类型注解' },
    { id: 2, name: '编译型语言' }
  ],
  currentKey: '/admin/userMangement',
  token: localStorage.getItem('token') || '',
  //头像
  picUrl: localStorage.getItem('picUrl') || '',
  //logo
  logoUrl: localStorage.getItem('logoUrl') || '',
  //用户id
  accountId: localStorage.getItem('accountId') || '',
  //用户名称
  accountName: localStorage.getItem('accountName') || '',
  title: '',
  secretStatus: localStorage.getItem('secretStatus') || '',
  collegeId: localStorage.getItem('collegeId') || '',
  toggled: Boolean(localStorage.isToggled),
  secretList: [
    {
      name: '公开',
      value: '0'
    },
    {
      name: '内部',
      value: '1'
    },
    {
      name: '秘密',
      value: '2'
    }
  ],
  langList: localStorage.getItem('langList') || [] //语言列表
}

const GETTERS = {
  containerHeight(state: Store.State) {
    return state.height - 150
  },
  listHeight(state: Store.State) {
    return state.height - 248
  }
}

const MUTATIONS = {
  changeKey(state: Store.State, payload: Common) {
    for (const i in payload) {
      state[i] = null
      state[i] = payload[i]
    }
  },
  changeSize(state: Store.State) {
    state.height = window.innerHeight
    state.width = window.innerWidth
  },
  changeTitle(state: Store.State, title: string) {
    state.title = title
  }
}

const ACTIONS = {}
const store = {
  state: STATE,
  getters: GETTERS,
  mutations: MUTATIONS,
  actions: ACTIONS,
  modules: {}
}

export default store
