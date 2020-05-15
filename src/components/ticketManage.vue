<template>
  <div class="ticket">
    <div style="border-bottom: 1PX solid #eee;">
      <div class="ticket-box">
        <div class="ticket-item ticket-item-top-word" v-for="(item,index) in top1">
          {{item}}
        </div>
      </div>
      <div class="ticket-box">
        <div class="ticket-item ticket-item-top-word" v-for="item in top2">
          {{item}}
        </div>
      </div>
    </div>

    <div v-for="item in tablea" style="margin-top: .3rem;">
      <div class="ticket-box">
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
    <div class="no-data" v-if="loging">
      <van-loading size=".64rem">加载中...</van-loading>
    </div>
    <div class="no-data" v-if="nodata">
      没有更多数据了
    </div>

  </div>
</template>

<script>
  import {
    Loading
  } from 'vant';
  export default {
    components: {
      [Loading.name]: Loading
    },
    data() {
      return {
        loging: false,
        nodata: false,
        top1: ['姓名', '电话', '日期', '订单号', '订单数'],
        top2: ['票型', '支付状态', '订单状态', '渠道', '到访数'],
        tablea: []
      }
    },
    mounted() {

    },
    methods: {
      setData(){
        this.tablea=[]
        this.loging=true;
        setTimeout(()=>{
          this.tablea=[{
              tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
              tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
            },
            {
              tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
              tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
            },
            {
              tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
              tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
            },
            {
              tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
              tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
            },
            {
              tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
              tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
            },
            {
              tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
              tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
            },
            {
              tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
              tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
            },
            {
              tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
              tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
            },
            {
              tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
              tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
            }, {
              tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
              tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
            }
          ]
          this.loging=false;
        },1000)
      },
      getData() {
        this.loging=true;
        if (this.tablea.length > 20) {
          this.loging = false;
          this.nodata = true;
          return
        }
        this.tablea.push({
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
          },{
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚', 0]
          })
      },
    }
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

      .ticket-item-top-name {
        color: #2AA4f7;
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

    .no-data {
      font-size: .346rem;
      color: #666666;
      text-align: center;
      padding: 1rem 0 2.2rem 0;
    }
  }
</style>
