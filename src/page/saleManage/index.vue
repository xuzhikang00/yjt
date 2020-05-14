<template>
  <div class="sale-manage">
    <div v-if="!ssSwitch">

      <van-tabs v-model="active" animated title-active-color="#1aad19" sticky v-if="!titleFont">
        <van-tab title="今日售票">
          <div class="sale-manage-btn">
            <van-button round type="default" class="sale-manage-button" @click="show=!show">所有窗口</van-button>
          </div>
          <div class="home-sale-price">
            <div class="home-sale-price-item">
              <div>
                <van-icon name="chat-o" color="#1989fa" />
                总购票人数
              </div>
              <div style="font-size: .453rem;color: #ff5346;">12312</div>
            </div>
            <div class="home-sale-price-item">
              <div style="display: flex;align-items: center;justify-content: center;">
                <van-icon name="gold-coin" color="#f7ab07" size=".586rem" style="margin-right: .1rem;" />
                总售票金额
              </div>
              <div style="font-size: .453rem;color: #ff5346;">¥15196.21</div>
            </div>
          </div>
          <sale></sale>
        </van-tab>
        <van-tab title="昨日售票">
          <div class="sale-manage-btn">
            <van-button round type="default" class="sale-manage-button" @click="show=!show">所有窗口</van-button>
          </div>
          <div class="home-sale-price">
            <div class="home-sale-price-item">
              <div>
                <van-icon name="chat-o" color="#1989fa" />
                总购票人数
              </div>
              <div style="font-size: .453rem;color: #ff5346;">12312</div>
            </div>
            <div class="home-sale-price-item">
              <div style="display: flex;align-items: center;justify-content: center;">
                <van-icon name="gold-coin" color="#f7ab07" size=".586rem" style="margin-right: .1rem;" />
                总售票金额
              </div>
              <div style="font-size: .453rem;color: #ff5346;">¥15196.21</div>
            </div>
          </div>
          <sale></sale>
        </van-tab>

        <van-tab title="全部售票">
          <div class="sale-manage-btn">
            <van-button round type="default" class="sale-manage-button" @click="show=!show">所有窗口</van-button>
          </div>
          <div class="home-sale-price">
            <div class="home-sale-price-item">
              <div>
                <van-icon name="chat-o" color="#1989fa" />
                总购票人数
              </div>
              <div style="font-size: .453rem;color: #ff5346;">12312</div>
            </div>
            <div class="home-sale-price-item">
              <div style="display: flex;align-items: center;justify-content: center;">
                <van-icon name="gold-coin" color="#f7ab07" size=".586rem" style="margin-right: .1rem;" />
                总售票金额
              </div>
              <div style="font-size: .453rem;color: #ff5346;">¥15196.21</div>
            </div>
          </div>
          <sale></sale>
        </van-tab>
      </van-tabs>

      <div class="sale-manage-content" v-if="titleFont">
        <!-- <div class="sale-manage-content-title" sticky> -->
        <van-tabs v-model="active2" animated title-active-color="#333" sticky>
          <van-tab :title="titleFont">
            <div class="sale-manage-btn">
              <van-button round type="default" class="sale-manage-button" @click="show=!show">所有窗口</van-button>
            </div>
            <div class="home-sale-price">
              <div class="home-sale-price-item">
                <div>
                  <van-icon name="chat-o" color="#1989fa" />
                  总购票人数
                </div>
                <div style="font-size: .453rem;color: #ff5346;">12312</div>
              </div>
              <div class="home-sale-price-item">
                <div style="display: flex;align-items: center;justify-content: center;">
                  <van-icon name="gold-coin" color="#f7ab07" size=".586rem" style="margin-right: .1rem;" />
                  总售票金额
                </div>
                <div style="font-size: .453rem;color: #ff5346;">¥15196.21</div>
              </div>
            </div>
            <sale></sale>
            <ticket></ticket>
          </van-tab>
        </van-tabs>
      </div>
      <div class="no-data">
        没有更多数据了
      </div>
      <div class="orsale-manage-button">
        <van-button class="orsale-manage-button-item" type="primary" size="large" @click="ssSwitch=true;">搜索</van-button>
      </div>
    </div>
    <div style="padding-top: .5rem;" v-else>
      <van-cell title="开始日期" :value="startDate" @click="showS = true" />
      <van-cell title="结束日期" :value="endDate" @click="showS1 = true" />
      <van-cell title="票种" @click="showS2 = true" is-link :value="xz1" />
       <van-cell title="渠道" @click="showS7 = true" is-link :value="xz7" />
      <van-field placeholder="请输入订单号" label="订单号" />
      <van-field placeholder="请输入票号" label="票号" />
      <van-field placeholder="请输入游客姓名" label="游客姓名" />
      <van-field placeholder="请输入游客电话" label="游客电话" />
      <van-cell title="售票员" @click="showS3 = true" is-link :value="xz2" />
      <van-cell title="支付状态" @click="showS4 = true" is-link :value="xz3" />
       <van-cell title="售票类型" @click="showS5 = true" is-link :value="xz4" />
        <van-cell title="打折面单人" @click="showS6 = true" is-link :value="xz5" />
        <van-cell title="收款类型" @click="showS8 = true" is-link :value="xz6" />
        <div class="ss-button">
          <van-button class="ss-button-item" type="primary" size="large" @click="ssjgBnt()">搜索</van-button>
        </div>
    </div>


    <div class="free-home" @click="goHome">
      <van-icon class="free-home-icon" name="wap-home-o" />
    </div>
    <van-popup v-model="show" position="bottom">
      <div class="pop-header">
        <div></div>
        <div>所有窗口</div>
        <div style="color: #04be02;margin-right: .3rem;" @click="show=false">关闭</div>
      </div>
      <div class="pop-header-content">
        <div class="pop-header-content-item" @click="getName('所有窗口')">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu1">总</div>
          <div>所有窗口</div>
        </div>
        <div class="pop-header-content-item" @click="getName('2.0收银员')">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu2">2.0收</div>
          <div>2.0收银员</div>
        </div>
        <div class="pop-header-content-item" @click="getName('zhuo')">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu3">zhuo</div>
          <div>zhuo</div>
        </div>
      </div>

      <div class="pop-header-content">
        <div class="pop-header-content-item" @click="getName('取票机账号')">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu4">取票</div>
          <div>取票机账号</div>
        </div>
        <div class="pop-header-content-item" @click="getName('45312')">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu5">4531</div>
          <div>45312</div>
        </div>
        <div class="pop-header-content-item" @click="getName('ceshi')">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu6">ceshi</div>
          <div>ceshi</div>
        </div>
      </div>

      <div class="pop-header-content">
        <div class="pop-header-content-item" @click="getName('123')">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu7">123</div>
          <div>123</div>
        </div>
        <div class="pop-header-content-item" @click="getName('闸机一号')">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu8">闸机</div>
          <div>闸机一号</div>
        </div>
        <div class="pop-header-content-item" @click="getName('chenfeng')">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu9">chen</div>
          <div>chenfeng</div>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="showS" position="bottom">
      <van-datetime-picker @change="changeShowS" @confirm="closeBtn" cancel="closeBtn" v-model="dates" type="date" title="开始日期" />
    </van-popup>
    <van-popup v-model="showS1" position="bottom">
      <van-datetime-picker @change="changeShowS1"  @confirm="closeBtn" cancel="closeBtn" v-model="date1" type="date" title="开始日期" />
    </van-popup>
    <van-popup v-model="showS2" position="bottom">
      <van-picker
        title="选择票种"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
    <van-popup v-model="showS7" position="bottom">
      <van-picker
        title="选择渠道"
        show-toolbar
        :columns="columns0"
        @confirm="onConfirm7"
        @cancel="onCancel7"
        @change="onChange7"
      />
    </van-popup>
    <van-popup v-model="showS3" position="bottom">
      <van-picker
        title="售票员"
        show-toolbar
        :columns="columns5"
        @confirm="onConfirm3"
        @cancel="onCancel3"
        @change="onChange3"
      />
    </van-popup>
    <van-popup v-model="showS4" position="bottom">
      <van-picker
        title="支付状态"
        show-toolbar
        :columns="columns1"
        @confirm="onConfirm4"
        @cancel="onCancel4"
        @change="onChange4"
      />
    </van-popup>
    <van-popup v-model="showS5" position="bottom">
      <van-picker
        title="售票类型"
        show-toolbar
        :columns="columns2"
        @confirm="onConfirm5"
        @cancel="onCancel5"
        @change="onChange5"
      />
    </van-popup>
    <van-popup v-model="showS6" position="bottom">
      <van-picker
        title="打折面单人"
        show-toolbar
        :columns="columns3"
        @confirm="onConfirm6"
        @cancel="onCancel6"
        @change="onChange6"
      />
    </van-popup>
    <van-popup v-model="showS8" position="bottom">
      <van-picker
        title="收款类型"
        show-toolbar
        :columns="columns4"
        @confirm="onConfirm8"
        @cancel="onCancel8"
        @change="onChange8"
      />
    </van-popup>
  </div>
</template>

<script>
  import {
    Tab,
    Tabs,
    Button,
    Icon,
    Popup,
    Sticky,
    Calendar,
    Cell,
    DatetimePicker,
    Picker,
    Field
  } from 'vant';
  import sale from '@/components/saleManage.vue';
  import ticket from '@/components/ticketDeatil.vue';
  export default {
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [Button.name]: Button,
      [Icon.name]: Icon,
      [Popup.name]: Popup,
      [Sticky.name]: Sticky,
      [Calendar.name]: Calendar,
      [Cell.name]: Cell,
      [DatetimePicker.name]: DatetimePicker,
      [Picker.name]: Picker,
      [Field.name]: Field,
      sale,
      ticket
    },
    data() {
      return {
        ssSwitch:false,
        dates: null,
        date1:null,
        startDate:'2020-1-23',
        endDate:'2020-5-23',
        showS: false,
        showS1:false,
        showS2:false,
        showS3:false,
        showS4:false,
        showS5:false,
        showS6:false,
        showS7:false,
        showS8:false,
        xz1:'全部[票种]',
        xz2:'不限',
        xz3:'不限',
        xz4:'不限',
        xz5:'不限',
        xz6:'不限',
        xz7:'全部[渠道]',
         columns:['不限','成人票','项目2'],
          columns0:['全部[渠道]','官网','欢乐旅行社'],
        columns1:['不限','景区代收','提前预付'],
        columns2:['不限','原价','打折'],
        columns3:['不限','脱单','1折'],
        columns4:['不限','现金支付','刷卡支付','微信支付'],
         columns5:['全部[票种]','2.0收银员','zhou'],
        titleFont: "",
        show: false,
        active: 0,
        active2: 0,
        tableData: [{
            data1: '预订成年联票B（含欢乐大马戏）人数',
            data2: '预订成年联票B（含欢乐大马戏）人数'
          },
          {
            data1: '到访成年联票B（含欢乐大马戏）人数',
            data2: '到访成年联票B（含欢乐大马戏）人数'
          },
          {
            data1: '预约成人票数',
            data2: '预约成人票数'
          },
          {
            data1: '预约成人票数',
            data2: '预约成人票数'
          },
          {
            data1: '预约成人票数',
            data2: '预约成人票数'
          }
        ]
      }
    },
    methods: {
      ssjgBnt(){
        this.ssSwitch=false;
        this.titleFont='搜索结果'
      },
         onConfirm(value, index) {
            this.xz1=value
            this.showS2=false
          },
          onChange(picker, value, index) {
          },
          onCancel() {
            this.showS1=false
          },

          onConfirm7(value, index) {
             this.xz7=value
             this.showS7=false
           },
           onChange7(picker, value, index) {
           },
           onCancel7() {
             this.showS7=false
           },


           onConfirm3(value, index) {
              this.xz2=value
              this.showS3=false
            },
            onChange3(picker, value, index) {
            },
            onCancel3() {
              this.showS3=false
            },


              onConfirm4(value, index) {
                 this.xz3=value
                 this.showS4=false
               },
               onChange4(picker, value, index) {
               },
               onCancel4() {
                 this.showS4=false
               },

               onConfirm5(value, index) {
                  this.xz4=value
                  this.showS5=false
                },
                onChange5(picker, value, index) {
                },
                onCancel5() {
                  this.showS5=false
                },

                onConfirm6(value, index) {
                   this.xz5=value
                   this.showS6=false
                 },
                 onChange6(picker, value, index) {
                 },
                 onCancel6() {
                   this.showS5=false
                 },

                 onConfirm8(value, index) {
                    this.xz6=value
                    this.showS8=false
                  },
                  onChange8(picker, value, index) {
                  },
                  onCancel8() {
                    this.showS7=false
                  },

      changeShowS() {
        let data = new Date(this.dates)
        this.startDate=`${data.getFullYear()}-${data.getMonth()+1}-${data.getDay()}`
      },
      changeShowS1() {
        let data = new Date(this.date1)
        this.endDate=`${data.getFullYear()}-${data.getMonth()+1}-${data.getDay()}`
      },
      getName(val) {
        this.titleFont = val;
        this.show = false
        console.log(this.titleFont)
      },
      closeBtn(){
        this.showS = false
        this.showS1 = false
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
  .no-data {
    font-size: .346rem;
    color: #666666;
    text-align: center;
    background-color: #fff;
    padding: .5rem 0 2.2rem 0;
  }

  .sale-manage {
    height: 100%;
    background-color: #eee;
    position: relative;
    /deep/ .van-cell__title,.van-cell__value{
      font-size: .4533rem;
      color: #333333;
    }
    /deep/ input::-webkit-input-placeholder {
      /* WebKit browsers */
      font-size: .4533rem;
    }

    /deep/ input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      font-size: .4533rem;
    }

    /deep/ input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      font-size: .4533rem;
    }

    /deep/ input:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      font-size: .4533rem;
    }

    .free-home {
      background: rgba(73, 225, 50, 0.5);
      width: 1.06rem;
      height: 1.06rem;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      border-radius: 3px;
      bottom: 4rem;
      left: .4rem;

      .free-home-icon {
        font-size: .54rem;
      }
    }

    .sale-manage-btn {
      background-color: #fff;
      text-align: center;
      padding-top: .4rem;

      .sale-manage-button {
        height: .72rem;
        width: 3.46rem;
        background-color: #1aad19;
        color: #fff;
        border: none;
      }
    }

    .home-sale-price {
      background-color: #fff;
      height: 1.2rem;
      text-align: center;
      padding: .24rem 0 .24rem 0;
      font-size: 0.4rem;
      width: 100%;
      display: flex;
      box-sizing: content-box;
      border-bottom: 1PX solid #eee;

      .home-sale-price-item {
        flex: 1;
        font-size: .38rem;
        border-right: 1PX solid #eee;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        &:last-child {
          border-radius: none;
        }
      }
    }
    .ss-button{
      width: 90%;
      margin: .5rem auto;
      .ss-button-item{
        background-color: #1aad19;
        border-radius: .15rem;
        font-size: .48rem;
      }
    }

    .orsale-manage-button {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: .2666rem;
      z-index: 5;
      background: #fff;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);

      .orsale-manage-button-item {
        background-color: #1aad19;
        border-radius: .15rem;
        font-size: .48rem;
      }
    }

    /deep/ .van-tabs__line {
      background-color: #1aad19;
    }

    .pop-header {
      display: flex;
      border-bottom: 1PX solid #eee;
      height: 1.17rem;
      align-items: center;
      justify-content: space-between;
      font-size: .453rem;
    }

    .pop-header-content {
      display: flex;

      .pop-header-content-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: .343rem;
        color: #000;
        height: 2.5rem;
        align-items: center;
        justify-content: center;
        border-bottom: 1PX solid #eee;
        border-right: 1PX solid #eee;

        .pop-header-content-item-radiu {
          width: 1.06rem;
          height: 1.06rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .426rem;
          color: #fff;
        }

        .pop-header-content-item-radiu1 {
          background-color: #fd9189;
        }

        .pop-header-content-item-radiu2 {
          background-color: #84aaf5;
        }

        .pop-header-content-item-radiu3 {
          background-color: #fecf7f;
        }


        .pop-header-content-item-radiu4 {
          background-color: #69e5c3;
        }

        .pop-header-content-item-radiu5 {
          background-color: #fec665;
        }

        .pop-header-content-item-radiu6 {
          background-color: #6dc5f3;
        }

        .pop-header-content-item-radiu7 {
          background-color: #b6b8ff;
        }

        .pop-header-content-item-radiu8 {
          background-color: #84aaf5;
        }

        .pop-header-content-item-radiu9 {
          background-color: #84aaf5;
        }


      }
    }

    .sale-manage-content {
      background-color: #fff;

      /deep/ .van-tabs__line {
        background-color: transparent;
      }

      .sale-manage-content-title {
        height: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #555;
        font-size: .4266rem;
        border-bottom: 1PX solid #eee;
      }
    }
  }
</style>
