<template>
  <div class="order-manage" v-if="ssSwitch">
    <div style="padding-top: .5rem;">
      <van-cell title="开始日期" :value="startDate" @click="showS = true" />
      <van-cell title="结束日期" :value="endDate" @click="showS1 = true" />
      <van-cell title="票种" @click="showS2 = true" is-link :value="xz1" />
      <van-field placeholder="请输入订单号" label="订单号" />
      <van-field placeholder="请输入票号" label="票号" />
      <van-field placeholder="请输入游客姓名" label="游客姓名" />
      <van-field placeholder="请输入游客电话" label="游客电话" />
      <van-cell title="售票员" @click="showS3 = true" is-link :value="xz2" />
      <van-cell title="支付状态" @click="showS4 = true" is-link :value="xz3" />
      <van-cell title="售票类型" @click="showS5 = true" is-link :value="xz4" />
      <div class="ss-button">
        <van-button class="ss-button-item" type="primary" size="large" @click="ssjgBnt()">搜索</van-button>
      </div>
    </div>
    <div class="free-home" @click="goHome">
      <van-icon class="free-home-icon" name="wap-home-o" />
    </div>
     <van-calendar v-model="showS" @select="onConfirmS" :show-confirm="false" />
     <van-calendar v-model="showS1" @select="onConfirm1" :show-confirm="false" />
    <!-- <van-popup v-model="showS" position="bottom">
      <van-datetime-picker @change="changeShowS" @confirm="closeBtn" cancel="closeBtn" v-model="dates" type="date" title="开始日期" />
    </van-popup> -->
   <!-- <van-popup v-model="showS1" position="bottom">
      <van-datetime-picker @change="changeShowS1"  @confirm="closeBtn" cancel="closeBtn" v-model="date1" type="date" title="开始日期" />
    </van-popup> -->
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
    Calendar,
    Cell,
    DatetimePicker,
    Picker,
    Field
  } from 'vant';
  import ticket from '@/components/ticketManage.vue';
  export default {
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [Button.name]: Button,
      [Icon.name]: Icon,
      ticket,
      [Popup.name]: Popup,
      [Calendar.name]: Calendar,
      [Cell.name]: Cell,
      [DatetimePicker.name]: DatetimePicker,
      [Picker.name]: Picker,
      [Field.name]: Field
    },
    data() {
      return {
        ssSwitch:false,
        titleFont:'',
        dates: null,
        date1: null,
        startDate: null,
        endDate: null,
        showS: false,
        showS1: false,
        showS2: false,
        showS3: false,
        showS4: false,
        showS5: false,
        showS6: false,
        showS7: false,
        showS8: false,
        xz1: '全部[票种]',
        xz2: '不限',
        xz3: '不限',
        xz4: '不限',
        xz5: '不限',
        xz6: '不限',
        xz7: '全部[渠道]',
        columns: ['不限', '成人票', '项目2'],
        columns0: ['全部[渠道]', '官网', '欢乐旅行社'],
        columns1: ['不限', '景区代收', '提前预付'],
        columns2: ['不限', '原价', '打折'],
        columns3: ['不限', '脱单', '1折'],
        columns4: ['不限', '现金支付', '刷卡支付', '微信支付'],
        columns5: ['全部[票种]', '2.0收银员', 'zhou'],
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
    mounted() {
      this.ssSwitch=this.$route.query.ld
    },
    methods: {
      formatDate(date) {
        let y=''
        let r=''
        if(date.getMonth() + 1<10){
          y=`0${date.getMonth() + 1}`
        }else{
           y=`${date.getMonth() + 1}`
        }
        if(date.getDate()<10){
          r=`0${date.getDate()}`
        }else{
          r=`${date.getDate()}`
        }
        return `${date.getFullYear()}-${y}-${r}`;
      },
      onConfirmS(date) {
        this.showS = false;
        this.startDate = this.formatDate(date);
      },
      onConfirm1(date) {
        this.showS1 = false;
        this.endDate = this.formatDate(date);
      },
      ssjgBnt(){
         this.$router.push({path:'/orderManageDetails',query:{ld:'搜索结果'}})
      },
      goHome() {
        this.$router.push({
          path: '/home'
        })
      },
      onConfirm(value, index) {
        this.xz1 = value
        this.showS2 = false
      },
      onChange(picker, value, index) {},
      onCancel() {
        this.showS1 = false
      },

      onConfirm7(value, index) {
        this.xz7 = value
        this.showS7 = false
      },
      onChange7(picker, value, index) {},
      onCancel7() {
        this.showS7 = false
      },


      onConfirm3(value, index) {
        this.xz2 = value
        this.showS3 = false
      },
      onChange3(picker, value, index) {},
      onCancel3() {
        this.showS3 = false
      },


      onConfirm4(value, index) {
        this.xz3 = value
        this.showS4 = false
      },
      onChange4(picker, value, index) {},
      onCancel4() {
        this.showS4 = false
      },

      onConfirm5(value, index) {
        this.xz4 = value
        this.showS5 = false
      },
      onChange5(picker, value, index) {},
      onCancel5() {
        this.showS5 = false
      },

      onConfirm6(value, index) {
        this.xz5 = value
        this.showS6 = false
      },
      onChange6(picker, value, index) {},
      onCancel6() {
        this.showS5 = false
      },

      onConfirm8(value, index) {
        this.xz6 = value
        this.showS8 = false
      },
      onChange8(picker, value, index) {},
      onCancel8() {
        this.showS7 = false
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
    }
  }
</script>

<style lang="less" scoped>
  .clearfloat:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
  }

  .order-manage {
    height: 100%;
    background-color: #eee;
    position: relative;
    .ss-button{
      width: 90%;
      margin: .5rem auto;
      .ss-button-item{
        background-color: #1aad19;
        border-radius: .15rem;
        font-size: .48rem;
      }
    }
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
      bottom: 4rem;
      left: .4rem;
      border-radius: 3PX;

      .free-home-icon {
        font-size: .54rem;
      }
    }

    .order-manage-button {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: .2666rem;
      z-index: 5;
      background: #fff;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
      .order-manage-button-item{
         background-color: #1aad19;
         font-size: .48rem;
         border-radius: .15rem;
         height: 1.226rem;
      }
    }

    /deep/ .van-tabs__line {
      background-color: #1aad19;
    }

    .order-manage-today-top {
      background-color: #fff;

      .order-manage-today-top-last {
        padding: .5rem 0 !important;
      }

      .order-manage-today-top-item {
        width: 50%;
        display: flex;
        justify-content: center;
        padding: .5rem 0 0 0;
        float: left;
        align-items: center;

        .order-manage-today-top-item-gard {
          color: #999999;
          font-size: 0.346rem;
        }

        img {
          width: .9333rem;
          height: .9333rem;
        }

        .order-manage-today-top-item-word {
          text-align: center;
          margin-left: .266rem;

          .order-manage-today-top-item-word-number {
            font-size: .426rem;
            margin-top: .2rem;
          }

          .order-manage-today-top-item-word-person {
            font-size: .426rem;
            color: #ff5346;
            margin-top: .2rem;
          }
        }
      }
    }

    .home-sale-price {
      background-color: #fff;
      height: 2.13rem;
      text-align: center;
      padding: .45rem 0 .45rem 0;
      font-size: 0.4rem;
      width: 100%;
      border-top: 2PX solid #feafb3;
      display: flex;
      box-sizing: content-box;
      width: 98%;
      margin: .1rem auto;

      .home-sale-price-item {
        flex: 1;
        font-size: .38rem;
        border-right: 1PX dashed #eee;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 0 .1rem;

        &:last-child {
          border-radius: none;
        }

        .home-sale-price-item-number {
          color: #1AAD19;
          font-size: .48rem;
          height: .8rem;
          line-height: .8rem;
          font-weight: bolder;
        }

        .home-sale-price-item-word {
          color: #999999;
          font-size: .346rem;
        }
      }
    }

    .order-manage-today-top-bottom {
      margin-top: .2rem;
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
