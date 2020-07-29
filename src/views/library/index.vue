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
            <a-date-picker @change="onChange" />
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
        <a-table
          bordered
          rowKey="id"
          :rowSelection="{
            selectedRowKeys: selectedRowKeys,
            onChange: onSelectChange
          }"
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
                v-show="
                  record.check_status !== '已通过' && record.type !== '机翻'
                "
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
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import vMenu from '@/components/library/menu.vue'
import vtitle from '@/components/layout/title.vue'
const columns = [
  {
    title: '编号',
    dataIndex: 'name'
  },
  {
    title: '原文',
    dataIndex: 'name1'
  },
  {
    title: '译文',
    dataIndex: 'name2'
  },
  {
    title: '数据状态',
    dataIndex: 'name4'
  },
  {
    title: '创建时间',
    dataIndex: 'age'
  },
  {
    title: '更新时间',
    dataIndex: 'address'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: '90px',
    scopedSlots: { customRender: 'operation' },
    align: 'center'
  }
]
@Component({
  components: {
    vMenu,
    vtitle
  }
})
export default class Library extends Vue {
  private title = '语料管理'
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
  private doubleArr = [] //

  private isLoadingPatent = false
  private showSizeChange(currentPage: number, pageSize: number) {
    this.currentPage = currentPage
    this.pageSize = pageSize
    this.getDataSource()
  }
  private getDataSource() {}
  private changeDate() {}
  private onSelectChange(selectedRowKeys: any, selectedRows: any) {
    this.selectedRowKeys = selectedRowKeys
    // this.doubleArr[this.currentPage ? this.currentPage - 1 : 0] = selectedRows //组合成双数组
    // this.selectedRowKeysArr = this.mapRows(this.doubleArr)
  }
  private mapRows(params: any) {
    // var res = [];
    // for(var i=0;i<params.length;i++){
    //     if(Array.isArray(params[i])){
    //         res = res.concat(this.mapRows(params[i]));
    //     }else{
    //         res.push(params[i])
    //     }
    // }
    // return res.filter(Boolean);   //去掉undefined的情况
  }
  private onChange(value: any, dateString: any) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }
  private editBtn(data: any) {
    console.log(data)
  }
  private delBtn(data: any) {
    console.log(data)
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
