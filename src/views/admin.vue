<template>
  <div class="h-per-100 admin w-per-100">
    <!-- <a-row>
      <Header></Header>
    </a-row>
    <section class="f-s main">
      <navLeft />
      <div class="h-per-100 w-per-100 p-20">
        <router-view class="w-per-100 bg-color-fff p-10 " />
      </div>
    </section> -->
    <a-range-picker />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/layout/header.vue'
import navLeft from '@/components/layout/nav.vue'
@Component({
  components: {
    Header,
    navLeft
  }
})
export default class Admin extends Vue {}
</script>
<style lang="stylus">
.admin
  .main
    height calc(100% - 60px)
</style>
