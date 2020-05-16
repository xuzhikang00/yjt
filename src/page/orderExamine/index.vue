<template>
  <div class="orderExamine">
    <div class="ticket" style="display: flex;flex-direction: column;">
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
      <div style="flex: 1;overflow-y: auto;padding: 0 .1rem;" @scroll="scol($event)">
        <div v-for="item in tablea" style="margin-top: .3rem;">
          <div class="ticket-box">
            <div v-for="(item1,index) in item.tableData1" @click="goS(index)" :class="index==0?'ticket-item ticket-item-top-name':'ticket-item ticket-item-top-title'">
              {{item1}}
            </div>
          </div>
          <div class="ticket-box">
            <div class="ticket-item ticket-item-top-title" v-for="item2 in item.tableData2">
              {{item2}}
            </div>
            <div class="ticket-item ticket-item-top-title">
               <van-button type="primary" size="small" @click="djBtn()">审核</van-button>
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

    </div>
    <div class="free-home" @click="goHome">
      <van-icon class="free-home-icon" name="wap-home-o" />
    </div>
  </div>
</template>

<script>
  import {
    Icon,
    Loading,
    Button,
    Dialog,
    Notify
  } from 'vant';
  // import ticket from '@/components/ticketManage.vue'
  export default {
    components: {
      [Icon.name]: Icon,
      [Loading.name]: Loading,
      [Button.name]: Button,
      [Dialog.name]: Dialog,
      [Notify.name]: Notify,
    },
    data() {
      return {
        loging:false,
        nodata:false,
        top1: ['姓名', '电话', '日期', '订单号', '订单数'],
        top2: ['票型', '支付状态', '订单状态', '渠道', '操作'],
        tablea: []

      }
    },
    mounted() {
      this.loging=true;
      setTimeout(()=>{
        this.tablea =[{
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          }, {
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          }
        ]
        this.loging=false;
      },1000)
    },
    methods: {
      djBtn() {
        let _this = this
        Dialog.confirm({
            cancelButtonText:'拒绝',
            message: '您确定要审核通过该订单吗？',
          })
          .then(() => {
            Notify({
              type: 'success',
              message: '操作成功',
              duration: 1000,
              onOpened() {
               _this.$router.push({path:"/orderExamine"})
              }
            });
          })
          .catch(() => {
            // on cancel
          });
      },
      goS(index){
        if(index==0){
          this.$router.push({path:"/personDetail"})
        }
      },
      getData(){
          this.tablea.push({
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          }, {
            tableData1: ['真真', 15515151, '2020-20-03', 214, 1],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          })
      },
      scol(e){
        if(e.target.scrollTop+e.target.clientHeight>=e.target.scrollHeight){
          if(this.tablea.length>20){
            this.loging=false;
            this.nodata=true;
            return
          }else{
            this.loging=true;
            setTimeout(()=>{
              this.getData()
            },2000)
          }

        }
      },
      goHome() {
        this.$router.push({
          path: '/home'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .ticket {
    background-color: #fff;
    height: 100%;
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
        font-size: .4rem;
        text-align: center;
        margin-top: .2rem;
      }

      .ticket-item-top-title {
        color: #333333;
        font-size: .4rem;
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
      padding: 1rem 0 .2rem 0;
    }
  }

  .orderExamine {
    background-color: #fff;
    position: relative;
    height: 100%;

    .free-home {
      background: rgba(73, 225, 50, 0.5);
      width: 1.06rem;
      height: 1.06rem;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      bottom: 4rem;
      left: .4rem;
      border-radius: 3px;

      .free-home-icon {
        font-size: .54rem;
      }
    }
  }
</style>
