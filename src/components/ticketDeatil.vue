<template>
  <div class="ticket">
    <div style="border-bottom: 1PX solid #eee;">
      <div class="ticket-box">
        <div class="ticket-item ticket-item-top-word"  v-for="(item,index) in top1">
          {{item}}
        </div>
      </div>
    </div>

    <div v-for="item in tablea" style="margin-top: .3rem;">
      <div class="ticket-box" >
        <div v-for="(item1,index) in item.tableData1" :class="index==0?'ticket-item ticket-item-top-name':'ticket-item ticket-item-top-title'">
          {{item1}}
        </div>
      </div>
      <div class="ticket-box">
        <div class="ticket-item ticket-item-top-title" v-for="item2 in item.tableData2">
          {{item2}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        top1: ['时间', '检票人', '购票人数', '售票金额', '付款方式'],
        tablea:[
          {
            tableData1:['2020-01-02',425,'21','￥8','￥现金'],
            tableData2:['09:23','','','','']
          },
        {
          tableData1:['2020-01-02',425,'21','￥8','￥现金'],
          tableData2:['09:23','','','','']
        },
        {
          tableData1:['2020-01-02',425,'21','￥8','￥现金'],
          tableData2:['09:23','','','','']
        },
       {
         tableData1:['2020-01-02',425,'21','￥8','￥现金'],
         tableData2:['09:23','','','','']
       }
        ]

      }
    },

  }
</script>

<style lang="less" scoped>
  .ticket {
    background-color: #fff;

    .ticket-box {
      display: flex;

      .ticket-item-top-word {
        color: #999999;
        font-size: .426rem;
        text-align: center;
        height: .9866rem;
        line-height: .9866rem;
      }
      .ticket-item-top-name{
        color: #00923f;
        font-size: .346rem;
        text-align: center;
        margin-top: .2rem;
      }
      .ticket-item-top-title {
        color: #333333;
        font-size: .346rem;
        text-align: center;
        margin-top: .2rem;
      }
      .ticket-item {
        flex: 1;
      }
    }
    .no-data{
      font-size: .346rem;
      color: #666666;
      text-align: center;
      padding: 2rem 0;
    }
  }
</style>
