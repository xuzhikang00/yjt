<template>
  <div class="ticket">
    <div class="ticket-box">
      <div class="ticket-item ticket-item-top-word" v-for="item in top1">
        {{item}}
      </div>
    </div>
    <div class="ticket-box">
      <div class="ticket-item ticket-item-top-word" v-for="item in top2">
        {{item}}
      </div>
    </div>
    <div v-for="item in tablea" style="margin-top: .5rem;">
      <div class="ticket-box" >
        <div class="ticket-item ticket-item-top-title" v-for="item1 in item.tableData1">
          {{item1}}
        </div>
      </div>
      <div class="ticket-box">
        <div class="ticket-item ticket-item-top-title" v-for="item2 in item.tableData2">
          {{item2}}
        </div>
      </div>
    </div>
    <div class="no-data">
      没有更多数据了
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        top1: ['姓名', '电话', '日期', '订单号', '订单数'],
        top2: ['票型', '支付状态', '订单状态', '渠道', '到访数'],
        tablea:[
          {
            tableData1:['真真',15515151,'2020-20-03',214,1],
            tableData2:['随时订测试','景区到付','未使用','陈思诚',0]
          },
         {
           tableData1:['真真',15515151,'2020-20-03',214,1],
           tableData2:['随时订测试','景区到付','未使用','陈思诚',0]
         },
         {
           tableData1:['真真',15515151,'2020-20-03',214,1],
           tableData2:['随时订测试','景区到付','未使用','陈思诚',0]
         },
         {
           tableData1:['真真',15515151,'2020-20-03',214,1],
           tableData2:['随时订测试','景区到付','未使用','陈思诚',0]
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
