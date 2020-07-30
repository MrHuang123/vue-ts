<template>
  <div class="w-200 h-per-100 p-r bg-color-fff o-a">
    <vue-scroll>
      <a-menu
        :selectedKeys="selectedKeys"
        :openKeys="openKeys"
        mode="inline"
        @click="handleClick"
        :inline-collapsed="collapsed"
      >
        <template v-for="item in menuList">
          {{ item.children }}
          <a-menu-item v-if="!item.children" :key="item.key">
            <router-link
              :to="item.key"
              tag="span"
              class="d-i-b w-per-100 h-per-100"
            >
              <a-icon v-if="item.icon" :type="item.icon" />
              <span>{{ item.title }}</span>
            </router-link>
          </a-menu-item>
          <a-sub-menu v-else :key="item.key">
            <span slot="title">
              <a-icon v-if="item.icon" :type="item.icon" />
              <span>{{ item.title }}</span>
            </span>
            <a-menu-item v-for="i in item.children" :key="i.children">
              <router-link
                :to="i.key"
                tag="span"
                class="d-i-b w-per-100 h-per-100"
              >
                <span>{{ i.title }}</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </template>
        <!-- <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="inbox" />
          <span>Option 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"
            ><a-icon type="mail" /><span>Navigation One</span></span
          >
          <a-menu-item key="5">
            Option 5
          </a-menu-item>
          <a-menu-item key="6">
            Option 6
          </a-menu-item>
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="appstore" /><span>Navigation Two</span></span
          >
          <a-menu-item key="9">
            Option 9
          </a-menu-item>
          <a-menu-item key="10">
            Option 10
          </a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11">
              Option 11
            </a-menu-item>
            <a-menu-item key="12">
              Option 12
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu> -->
      </a-menu>
    </vue-scroll>
    <!-- <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation, namespace } from 'vuex-class'
import { Common } from '@/interface/common'
import Login from '@/views/index/login.vue'
const menuList = [
  {
    title: '术语管理',
    key: '/admin/library',
    icon: ''
  },
  {
    title: '语料管理',
    key: '/admin/corpus',
    icon: ''
  },
  {
    title: '语音识别热词',
    key: '/admin/hotWord',
    icon: ''
  },
  {
    title: '用户管理',
    key: '/admin/userMangement',
    icon: ''
  }
]
@Component
export default class NavLeft extends Vue {
  @State private currentKey?: string
  private selectedKeys: string[] = localStorage.selectedKeys
    ? JSON.parse(localStorage.selectedKeys)
    : []
  private openKeys: string[] =
    localStorage.openKeys && !localStorage.isToggled
      ? JSON.parse(localStorage.openKeys)
      : []
  private menuList = menuList
  private collapsed = false
  private toggleCollapsed() {
    this.collapsed = !this.collapsed
  }
  private handleClick({ item, key }: Common) {
    console.log(item, key)
  }
}
</script>
