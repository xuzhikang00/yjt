<template>
  <div class="ticket">
    <div class="ticket-box" style="border-bottom: 1PX solid #eee;padding: .2rem 0;">
      <div class="ticket-item-top-kong .font-title">售票端口</div>
      <div class="ticket-item ticket-item-top-word" v-for="item in top1">
        {{item}}
      </div>
    </div>
    <div v-for="item in tablea" style="margin-top: .5rem;display: flex;">
      <div class="ticket-item-top-kong">{{item.address}}</div>
      <div style="flex: 1;">
        <div class="ticket-box">
          <div class="ticket-item ticket-item-top-title" v-for="item1 in item.tableData1">
            {{item1}}
          </div>
        </div>
       <!-- <div class="ticket-box">
          <div class="ticket-item ticket-item-top-title" v-for="item2 in item.tableData2">
            {{item2}}
          </div>
        </div> -->
      </div>
    </div>
    
  </div>
</template>

<script>
  import { Loading } from 'vant';
  export default {
    components:{
      [Loading.name]:Loading
    },
    data() {
      return {
        top1: ['微信', '支付宝', '现金', '旅行社余额支付', 'OTA余额支付','总金额'],
        tablea: [{
            address: '自助机',
            tableData1: ['300人', '300人', '300人', '300人', '300人'],
          },
          {
            address: '闸机闪付',
            tableData1: ['300人', '300人', '300人', '300人', '300人'],
          },
          {
            address: '售票员A',
            tableData1: ['300人', '300人', '300人', '300人', '300人'],
          },
          {
            address: '售票员B',
            tableData1: ['300人', '300人', '300人', '300人', '300人'],
          },
          {
            address: '合计',
            tableData1: ['300人', '300人', '300人', '300人', '300人'],
          },
        ]

      }
    },

  }
</script>

<style lang="less" scoped>
  .ticket-item-top-kong {
    width: 1.2rem;
    line-height: .7rem;
    padding-left: .2rem;
    font-size: .373rem;
    text-align: center;
  }
  .font-title{
    color: #999999;
  }

  .ticket {
    background-color: #fff;

    .ticket-box {
      display: flex;

      .ticket-item-top-word {
        color: #999999;
        font-size: .426rem;
        text-align: center;
        // height: .9866rem;
        // line-height: .9866rem;
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

    .no-data {
      font-size: .346rem;
      color: #666666;
      text-align: center;
      padding: 2rem 0;
    }
  }
</style>
