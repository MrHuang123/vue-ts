<template>
  <div class="exitModal">
    <a-modal
      :title="tipTitle"
      :visible="visible"
      :footer="null"
      @cancel="handleCancel"
    >
      <div class="f-s-c f-column">
        <p
          class="c-333 f-f-PingFangSC-Regular m-b-60 m-t-30 t-c"
          slot
          v-html="tipMsg.replace(/\n/, '<br>')"
        ></p>
        <slot></slot>
        <div class="f-c m-b-30">
          <button
            class="w-120 h-40 c-1C71B7 b-1C71B7 b-r-20 c-p m-r-20"
            v-if="isShowCanceBtn"
            @click="handleCancel"
          >
            {{ cancelText }}
          </button>
          <button
            v-if="isShowOKBtn"
            class="w-120 h-40 b-r-20 bg-color-1C71B7 c-fff c-p"
            @click="submit"
          >
            {{ okText }}
          </button>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator'
@Component
export default class TipModal extends Vue {
  private visible = false
  private tipMsg = ''
  @Prop({ type: String, default: '' }) tipTitle!: string
  @Prop({ type: String, default: '取消' }) cancelText!: string
  @Prop({ type: Boolean, default: true }) isShowCanceBtn!: boolean
  @Prop({ type: String, default: '确定' }) okText!: string
  @Prop({ type: Boolean, default: true }) isShowOKBtn!: boolean
  private handleCancel() {
    this.visible = false
  }
  private submit() {
    this.$emit('submit')
  }
}
</script>
