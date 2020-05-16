<template>
  <div class="ticket">
    <div style="border-bottom: 1PX solid #eee;padding-bottom: .2rem;display: flex;">
      <div style="flex: 1;">
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
      </div>
      <div class="ticket-item-top-cz">
        管理操作
      </div>
    </div>
    <div style="flex: 1;overflow-y: auto;"  @scroll="scol($event)">
      <div v-for="(item,index) in tablea" style="margin-top: .5rem;">
        <div class="ticket-box">
          <div class="ticket-item ticket-item-top-title" v-for="item1 in item.tableData1">
            {{item1}}
          </div>
          <div class="ticket-item ticket-item-top-title">
            <van-button type="danger" size="small" @click="xgBtn()">修改</van-button>
          </div>
        </div>
        <div class="ticket-box">
          <div class="ticket-item ticket-item-top-title" v-for="item2 in item.tableData2">
            {{item2}}
          </div>
          <div class="ticket-item ticket-item-top-title">
            <van-button type="danger" size="small" @click="djBtn(index)" v-if="item.switch">冻结</van-button>
            <van-button type="primary" size="small" @click="jdBtn(index)" v-if="!item.switch">解冻</van-button>
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
</template>

<script>
  import {
    Button,
    Dialog,
    Notify,
    Loading
  } from 'vant';
  export default {
    components: {
      [Button.name]: Button,
      [Dialog.name]: Dialog,
      [Notify.name]: Notify,
       [Loading.name]: Loading
    },
    data() {
      return {
        loging:false,
        nodata:false,
        top1: ['用户', '最后登录IP', '手机号', '余额(元)'],
        top2: ['所属角色', '最后登录时间', '真实姓名', '授信额(元)'],
        tablea: []

      }
    },
    mounted(){
      this.loging=true;
      setTimeout(()=>{
        this.tablea= [{
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },
          {
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          }
        ]
        this.loging=false;
      },1000)
    },
    methods: {
      getData(){
          this.tablea.push({
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
            tableData2: ['随时订测试', '景区到付', '未使用', '陈思诚']
          },{
            switch: true,
            tableData1: ['真真', 15515151, '2020-20-03', 214],
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
      xgBtn() {
        this.$emit("xgDefine", true)
      },
      djBtn(index) {
        let _this = this
        Dialog.confirm({
            message: '您确定要冻结该成员吗？',
          })
          .then(() => {
            Notify({
              type: 'success',
              message: '冻结成功',
              duration: 1000,
              onOpened() {
                console.log(1)
                _this.tablea[index].switch = false
              }
            });
          })
          .catch(() => {
            // on cancel
          });
      },
      jdBtn(index) {
        let _this = this
        Dialog.confirm({
            message: '您确定要解冻该成员吗？',
          })
          .then(() => {
            Notify({
              type: 'success',
              message: '解冻成功',
              duration: 1000,
              onOpened() {
                console.log(1)
                _this.tablea[index].switch = true
              }
            });
          })
          .catch(() => {
            // on cancel
          });
      }
    }
  }
</script>

<style lang="less" scoped>
  .ticket {
    background-color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;

    .ticket-item-top-cz {
      color: #999999;
      width: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ticket-box {
      display: flex;

      .ticket-item-top-word {
        color: #999999;
        text-align: center;
        height: .8rem;
        line-height: .8rem;
      }

      .ticket-item-top-title {
        color: #333333;
        margin-top: .2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .ticket-item {
        flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
      }
    }

    .no-data {
      color: #666666;
      text-align: center;
      padding: 1rem 0 2.2rem 0;
    }
  }
</style>
