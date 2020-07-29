<template>
  <header class="f-b-c p-tb-10 b-ccc b-no-lr b-no-t m-b-20">
    <h3 class="f-w-600 m-0">{{title}}</h3>
    <slot></slot>
  </header>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class Title extends Vue {
  @Prop({
    default: ''
  })
  public title!: string
}
</script>
