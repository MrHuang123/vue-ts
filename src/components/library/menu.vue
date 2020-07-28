<template>
  <div class="layout-list-box">
    <div class="layout-list-search">
      <div class="f-s-c m-b-20">
        <a-select default-value="lucy" style="width: 80px">
          <a-select-option value="jack">创建者</a-select-option>
          <a-select-option value="lucy">库名称</a-select-option>
        </a-select>
        <a-input-search
          placeholder="input search text"
          class="m-l-20"
          style="width: 120px"
          @search="onSearch"
        />
      </div>
      <div class="f-b-c">
        <span class="c-169BD5">添加术语库</span>
        <div class="f-s-c">
          <a-icon type="form" />
          <a-icon type="form" class="m-l-10" />
        </div>
      </div>
    </div>
    <div class="layout-list-item h-per-100">
        <vue-scroll>
            <ul>
                <li v-for='i in 100' :key='i' class="p-lr-18 p-t-18 c-p">
                    <div class="m-b-10">
                        <h5>测试语料库{{i}}</h5>
                    </div>
                    <p>英语/日语</p>
                    <div class=''>
                        <p class="t-r f-s-12">隗嚣魏</p>
                        <p class="t-r f-s-12" >2020/07/29</p>
                    </div>
                </li>
            </ul>
        </vue-scroll>
    </div>
    <!-- <div class="layout-list-item">
      <ul>
        <li
          class="c-p border-bottom"
          v-for="(item,index) in libraryListGetter"
          :key="index"
          v-show="item.library_name.includes(searchName)"
          :class="{'active' : library.active == index}"
          @click="handleSelect(index)"
        >
          <a-row class="margin-b-5 font-size-12 text-color-6">
            <a-col :span="17" class="padding-r-10">
              <h5 class="text-nowrap">
                <span :title="item.library_name">
                  <strong v-html="searchFilter(item.library_name)" class="width-max-200 white-1"></strong>
                </span>
              </h5>
            </a-col>
            <a-col :span="7" class="text-nowrap text-right">
              <span
                :title="item.create_time*1000 | timeFilter('y/m/d')"
              >{{item.create_time*1000 | timeFilter('y/m/d')}}</span>
            </a-col>
          </a-row>
          <a-row class="margin-b-5 font-size-12 text-color-6">
            <a-col
              class="text-nowrap"
              :span="12"
              v-if="languageListByKey.LanguageId[item.target_language_id]"
            >
              <span
                :title="languageListByKey.LanguageId[item.source_language_id].languageName + '--' + languageListByKey.LanguageId[item.target_language_id].languageName"
              >{{languageListByKey.LanguageId[item.source_language_id].languageName}}--{{languageListByKey.LanguageId[item.target_language_id].languageName}}</span>
            </a-col>
            <a-col class="text-nowrap text-right" :span="12">
              <span :title="item.create_user_nickname">{{item.create_user_nickname}}</span>
            </a-col>
          </a-row>
          <a-row class="font-size-12 text-color-6">
            <a-col :span="12" class="text-nowrap padding-r-10">
              <span
                :title="industryListByKey.industryId[item.industryId].industryName"
                v-if="industryListByKey.industryId[item.industryId]"
              >{{industryListByKey.industryId[item.industryId].industryName}}</span>
            </a-col>
            <a-col :span="12" class="text-right">
              <span v-if="item.create_user_id == iolcode">
                <a-tooltip :title="$t('Published')" v-if="item.share == 1">
                  <icon-font type="icon-gongkaiku" style="color:#00e0d6;font-size:16px;" />
                </a-tooltip>
                <a-tooltip :title="$t('Shared')" v-if="item.is_team_share_to_user == 1">
                  <icon-font type="icon-gongxiangku" style="color:#F56C6C;font-size:16px;" />
                </a-tooltip>
              </span>
              <span v-if="item.create_user_id != iolcode">
                <a-tooltip :title="$t('Addible')" v-if="item.shareType == 1">
                  <icon-font type="icon-ketianjia" style="color:#00C6F3;font-size:16px;" />
                </a-tooltip>
                <a-tooltip :title="$t('ReadOnly')" v-if="item.shareType == 2">
                  <icon-font type="icon-zhidu" style="color:#cccccc;font-size:16px;" />
                </a-tooltip>
                <a-tooltip :title="$t('Editable')" v-if="item.shareType == 3">
                  <icon-font type="icon-kebianji" style="color:#fabe6a;font-size:16px;" />
                </a-tooltip>
              </span>
            </a-col>
          </a-row>
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button, Input, Icon, Select } from 'ant-design-vue'
Vue.use(Button)
  .use(Input)
  .use(Icon)
  .use(Select)
export default class VMenu extends Vue {
  private onSearch() {}
}
</script>
<style lang="stylus">
.layout-list-box {
  display: flex;
  flex-direction: column;
  height: 100%;
  .layout-list-search {
    flex-shrink: 0;
    padding: 18px;
    border-bottom: solid 1px #DCDFE6;
  }
  .layout-list-item{
    flex-shrink:1;
    flex-grow:1;
    position: relative;
    height: 0;
    overflow-y: auto;
    ul{
        li{
            padding:16px;
            position: relative;
            border-bottom: solid 1px #DCDFE6;
            box-sizing: border-box;
            &:hover{
                background: #f6f6f6;
            }
            &.active{
                background:linear-gradient(270deg,rgba(235,253,255,1) 0%,rgba(215,248,255,1) 100%);
            &:after{
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                width: 3px;
                background: #00C6F3;
            }
         }
        }
    }
  }
}
</style>
