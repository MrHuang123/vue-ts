<template>
  <div class="h-per-100">
    <a-row>
      <Header></Header>
    </a-row>
    <section class="f-s h-per-100">
      <navLeft />
      <router-view class="f-1 p-20" />
    </section>
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
