<template>
  <div>
    <a-row>
      <Header></Header>
    </a-row>
    <a-row>
      <a-col :span="4">
        <navLeft />
      </a-col>
      <a-col :span="20">
        <router-view />
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/layout/header.vue'
import navLeft from '@/components/layout/nav.vue'
import { Row, Col } from 'ant-design-vue'
Vue.use(Row).use(Col)
@Component({
  components: {
    Header,
    navLeft
  }
})
export default class Admin extends Vue {}
</script>
