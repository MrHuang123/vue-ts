<template>
  <div id="app" class="h-per-100 o-h">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import Decor from './components/Decor.vue'
import { Button } from 'ant-design-vue'
Vue.use(Button)
@Component({
  components: {
    HelloWorld,
    Test,
    Decor
  }
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
