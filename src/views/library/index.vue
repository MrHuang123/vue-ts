<template>
  <div class="h-per-100 library">
    <vtitle title="语料管理" />
    <div class="f-s content">
      <div class="h-per-100 w-240">
        <vMenu class="bg-color-EEF0F6 m-r-10" />
      </div>
      <div class="f-1 p-10">
        <h6 class="f-w-600 f-s-14 m-b-20">时事新闻</h6>
        <div class="f-s-c  f-wrap">
          <div class="f-s-c m-r-20 m-b-20">
            <label class="d-i-b w-b-keep f-s-14 m-r-10">原文:</label>
            <a-input placeholder="Basic usage" />
          </div>
          <div class="f-s-c m-r-20 m-b-20">
            <label class="d-i-b w-b-keep f-s-14 m-r-10">译文:</label>
            <a-input placeholder="Basic usage" />
          </div>
          <div class="f-s-c m-r-20 m-b-20">
            <label class="d-i-b w-b-keep f-s-14 m-r-10">数据状态:</label>
            <a-select default-value="lucy" style="width: 120px">
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                Lucy
              </a-select-option>
            </a-select>
          </div>
          <div class="f-s-c m-r-20 m-b-20">
            <label class="d-i-b w-b-keep f-s-14 m-r-10">创建时间:</label>
            <!-- <a-range-picker
              :placeholder="['开始时间', '结束时间']"
              class="m-r-10"
              showTime
              @change="changeDate"
              allowClear
            /> -->
            <div class="f-s-c  m-l-40">
              <a-button type="primary" icon="download" @click="importantBtn"
                >导入</a-button
              >
              <a-button
                type="primary"
                class="m-l-20"
                icon="export"
                @click="ExportExcelCorpus"
                >导出</a-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import vMenu from '@/components/library/menu.vue'
import vtitle from '@/components/layout/title.vue'
@Component({
  components: {
    vMenu,
    vtitle
  }
})
export default class Library extends Vue {
  private title = '语料管理'
  private changeDate() {
    
  }
  private onChange(value: any, dateString: any) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }
  private onOk(value: any) {
    console.log('onOk: ', value)
  }
  //导入
  private importantBtn() {
    console.log('导入')
  }
  //导出
  private ExportExcelCorpus() {
    console.log('导出')
  }
}
</script>
<style lang="stylus">
.library {
  .content {
    height: calc(100% - 65px);
  }
}
</style>
