<template>
  <div class="h-per-100">
    <vTitle title="用户管理" />
    <div class="f-s-c  f-wrap">
      <div class="f-s-c m-r-20 m-b-20">
        <label class="d-i-b w-b-keep f-s-14 m-r-10">用户名:</label>
        <a-input placeholder="Basic usage" @keyup.enter="getDataSource(1)" />
      </div>
      <div class="f-s-c  m-l-40 m-b-20">
        <a-button type="primary" icon="plus" @click="addBtn">新增用户</a-button>
      </div>
    </div>
    <a-table
      bordered
      rowKey="id"
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
            @click="isDisabledFn(record)"
            class="c-c63639  d-i-b w-b-keep c-p"
            v-if="record.isDisabled"
            >禁用</span
          >
          <span
            @click="isDisabledFn(record)"
            class="c-32ba59 d-i-b w-b-keep c-p"
            v-else
            >启用</span
          >
          <span
            @click="editBtn(record)"
            class="c-1C71B7  d-i-b w-b-keep c-p m-l-8 "
            >编辑</span
          >
          <span
            @click="delBtn(record)"
            class="c-1C71B7 c-p d-i-b w-b-keep m-l-8"
            >重置密码</span
          >
        </div>
      </span>
    </a-table>
    <div class="f-e-c m-tb-16">
      <a-pagination
        v-model="currentPage"
        :pageSize.sync="pageSize"
        :total="total"
        :showTotal="total => `共 ${total} 条`"
        @change="showSizeChange"
        @showSizeChange="showSizeChange"
        showSizeChanger
      />
    </div>
    <a-modal
      :width="540"
      :footer="null"
      :title="title"
      v-model="addVisible"
      @cancel="addVisible = false"
    >
      <div class="m-b-20">
        <a-form :form="form">
          <a-form-item
            label="Note"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 18 }"
          >
            <a-input
              v-decorator="[
                'note',
                {
                  rules: [
                    { required: true, message: 'Please input your note!' }
                  ]
                }
              ]"
            />
          </a-form-item>
          <a-form-item
            label="Gender"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 18 }"
          >
            <a-input
              v-decorator="[
                'note1',
                {
                  rules: [
                    { required: true, message: 'Please input your note!' }
                  ]
                }
              ]"
            />
          </a-form-item>
          <a-form-item
            label="Gender"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 18 }"
          >
            <a-input v-decorator="['not21', {}]" />
          </a-form-item>
          <a-form-item class="f-c">
            <div class="f-c m-t-20">
              <a-button @click="handleSubmit" type="primary" html-type="submit">
                Submit
              </a-button>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
    <tipModal
      ref="tipModal"
      :tipTitle="tipTitle"
      :okText="okText"
      @submit="isDisabledBtn"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation, namespace } from 'vuex-class'
import vTitle from '@/components/layout/title.vue'
import tipModal from '@/components/modal/tipModal.vue'
const columns = [
  {
    title: '编号',
    dataIndex: 'name'
  },
  {
    title: '用户名',
    dataIndex: 'name1'
  },
  {
    title: '创建时间',
    dataIndex: 'name2'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: '150px',
    scopedSlots: { customRender: 'operation' },
    align: 'center'
  }
]
@Component({
  components: {
    vTitle,
    tipModal
  }
})
export default class UserMangement extends Vue {
  @State private currentKey?: string
  private title = '' //模态框标题
  private addVisible = false //模态框显影
  private total = 0
  private currentPage = 1
  private pageSize = 10
  private columns = columns
  private selectedRowKeys = []
  private selectedRowKeysArr = []
  private dataSource = [
    {
      id: '1',
      name: 1,
      isDisabled: false
    }
  ]
  private isLoadingPatent = false
  private form: any = null
  private okText = ''
  private tipTitle = ''
  private mounted(): void {
    console.log(this.currentKey)
    this.getDataSource()
  }
  private created() {
    this.form = this.$form.createForm(this)
  }
  private isDisabledFn(data: any): void {
    console.log(11111)
    this.tipTitle = '启用'
    this.okText = '启用'
    console.log(this.$refs.tipModal.tipMsg)
    this.$refs.tipModal.visible = true
    this.$refs.tipModal.tipMsg = '确定启用此用户吗？'
  }
  private isDisabledBtn() {}
  private showSizeChange(currentPage: number, pageSize: number): void {
    this.currentPage = currentPage
    this.pageSize = pageSize
    this.getDataSource()
  }
  private getDataSource(page?: number): void {
    if (page) {
      this.currentPage = page
    }
    console.log(this.currentPage)
  }
  //保存
  private handleSubmit(e: any) {
    e.preventDefault()
    console.log(this.form)
    this.form.validateFields((err: any, values: any) => {
      if (!err) {
        if (this.title == '新增用户') {
          return
        }
      }
    })
  }
  private addBtn() {
    this.title = '新增用户'
    this.addVisible = true
    this.form.resetFields()
  }
  private editBtn(data: any) {
    this.title = '编辑用户'
    this.addVisible = true
    this.form.resetFields()
    this.$nextTick(() => {
      // 设置初始值
      this.form.setFieldsValue({
        note: '2',
        note1: '21',
        not21: '3w131'
      })
    })
  }
  private importantBtn() {}
  private ExportExcelCorpus() {}
  private delBtn() {}
}
</script>
