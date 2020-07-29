<template>
  <div id="app" class="h-per-100 d-f o-h">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class App extends Vue {
  private msg = ''
  handleAddFeature(feature: any): void {
    console.log(feature.name)
  }
  created() {
    // 为了触发子组件的 watch
    setTimeout(() => {
      this.msg = 'This is a msg'
    }, 1000)
  }
}
</script>

<style lang="stylus"></style>
