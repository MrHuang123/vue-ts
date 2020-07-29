<template>
  <div class="h-per-100">
    <vTitle title="语音识别热词" />
    <div class="f-s-c  f-wrap">
      <div class="f-s-c m-r-20 m-b-20">
        <label class="d-i-b w-b-keep f-s-14 m-r-10">热词:</label>
        <a-input placeholder="Basic usage" />
      </div>
      <div class="f-s-c  m-b-20">
        <label class="d-i-b w-b-keep f-s-14 m-r-10">创建人:</label>
        <a-input placeholder="Basic usage" />
      </div>
      <div class="f-s-c  m-l-40 m-b-20">
        <a-button type="primary" icon="download" @click="addBtn">添加</a-button>
        <a-button
          type="primary"
          class="m-lr-20"
          icon="download"
          @click="importantBtn"
          >导入</a-button
        >
        <a-button type="primary" icon="export" @click="ExportExcelCorpus"
          >导出Excel</a-button
        >
      </div>
    </div>
    <a-table
      bordered
      :columns="columns"
      :dataSource="dataSource"
      :pagination="false"
      :loading="isLoadingPatent"
      :locale="{
        emptyText: '无符合条件的数据'
      }"
    >
      <span slot="operation" slot-scope="text, record">
        <div class="f-c">
          <span
            @click="editBtn(record)"
            class="c-1C71B7 f-f-PingFangSC-Regular c-p "
            >修改</span
          >
          <span
            @click="delBtn(record)"
            v-show="record.check_status !== '已通过' && record.type !== '机翻'"
            class="c-1C71B7 f-f-PingFangSC-Regular c-p m-l-8"
            >删除</span
          >
        </div>
      </span>
    </a-table>
    <div class="f-e-c m-tb-16">
      <p class="m-0 m-r-8">共 {{ total }} 条</p>
      <a-pagination
        v-model="currentPage"
        :pageSize.sync="pageSize"
        :total="total"
        @change="showSizeChange"
        @showSizeChange="showSizeChange"
        showSizeChanger
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import vTitle from '@/components/layout/title.vue'
const columns = [
  {
    title: '编号',
    dataIndex: 'name'
  },
  {
    title: '识别语种',
    dataIndex: 'name1'
  },
  {
    title: '热词',
    dataIndex: 'name2'
  },
  {
    title: '创建人',
    dataIndex: 'name4'
  },
  {
    title: '创建时间',
    dataIndex: 'age'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: '95px',
    scopedSlots: { customRender: 'operation' },
    align: 'center'
  }
]
@Component({
  components: {
    vTitle
  }
})
export default class HotWord extends Vue {
  private total = 0
  private currentPage = 1
  private pageSize = 10
  private columns = columns
  private selectedRowKeys = []
  private selectedRowKeysArr = []
  private dataSource = [
    {
      name: 1
    }
  ]
  private isLoadingPatent = false
  private showSizeChange(currentPage: number, pageSize: number) {
    this.currentPage = currentPage
    this.pageSize = pageSize
    this.getDataSource()
  }
  private getDataSource() {}
  private addBtn() {}
  private importantBtn() {}
  private ExportExcelCorpus() {}
}
</script>
