<template>
  <div class="sale-manage">
    <van-tabs v-model="active" animated title-active-color="#1aad19">
      <van-tab title="今日售票">
        <div class="sale-manage-btn">
          <van-button round type="info" class="sale-manage-button" @click="show=!show">所有窗口</van-button>
        </div>
        <div class="home-sale-price">
          <div class="home-sale-price-item">
            <div>
              <van-icon name="chat-o" color="#1989fa" />
              总购票人数
            </div>
            <div>12312</div>
          </div>
          <div class="home-sale-price-item">
            <div>
              <van-icon name="chat-o" color="#1989fa" />
              总售票金额
            </div>
            <div>¥15196.21</div>
          </div>
        </div>
        <sale></sale>
      </van-tab>
      <van-tab title="昨日售票">
        <div class="sale-manage-btn">
          <van-button round type="info" class="sale-manage-button" @click="show=!show">所有窗口</van-button>
        </div>
        <div class="home-sale-price">
          <div class="home-sale-price-item">
            <div>
              <van-icon name="chat-o" color="#1989fa" />
              总购票人数
            </div>
            <div>12312</div>
          </div>
          <div class="home-sale-price-item">
            <div>
              <van-icon name="chat-o" color="#1989fa" />
              总售票金额
            </div>
            <div>¥15196.21</div>
          </div>
        </div>
        <sale></sale>
      </van-tab>

      <van-tab title="全部售票">
        <div class="sale-manage-btn">
          <van-button round type="info" class="sale-manage-button" @click="show=!show">所有窗口</van-button>
        </div>
        <div class="home-sale-price">
          <div class="home-sale-price-item">
            <div>
              <van-icon name="chat-o" color="#1989fa" />
              总购票人数
            </div>
            <div>12312</div>
          </div>
          <div class="home-sale-price-item">
            <div>
              <van-icon name="chat-o" color="#1989fa" />
              总售票金额
            </div>
            <div>¥15196.21</div>
          </div>
        </div>
        <sale></sale>
      </van-tab>
    </van-tabs>
    <div class="orsale-manage-button">
      <van-button type="primary" size="large">搜素</van-button>
    </div>
    <div class="free-home" @click="goHome">
      <van-icon class="free-home-icon" name="wap-home-o" />
    </div>
    <van-popup v-model="show" position="bottom">
      <div class="pop-header">
        <div></div>
        <div>所有窗口</div>
        <div style="color: #04be02;" @click="show=false">关闭</div>
      </div>
      <div class="pop-header-content">
        <div class="pop-header-content-item">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu1">总</div>
          <div>所有窗口</div>
        </div>
        <div class="pop-header-content-item">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu2">2.0收</div>
          <div>2.0收银员</div>
        </div>
        <div class="pop-header-content-item">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu3">zhuo</div>
          <div>zhuo</div>
        </div>
      </div>

      <div class="pop-header-content">
        <div class="pop-header-content-item">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu4">取票</div>
          <div>取票机账号</div>
        </div>
        <div class="pop-header-content-item">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu5">4531</div>
          <div>45312</div>
        </div>
        <div class="pop-header-content-item">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu6">ceshi</div>
          <div>ceshi</div>
        </div>
      </div>

      <div class="pop-header-content">
        <div class="pop-header-content-item">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu7">123</div>
          <div>123</div>
        </div>
        <div class="pop-header-content-item">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu8">闸机</div>
          <div>闸机一号</div>
        </div>
        <div class="pop-header-content-item">
          <div class="pop-header-content-item-radiu pop-header-content-item-radiu9">chen</div>
          <div>chenfeng</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {
    Tab,
    Tabs,
    Button,
    Icon,
    Popup
  } from 'vant';
  import sale from '@/components/saleManage.vue';
  export default {
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [Button.name]: Button,
      [Icon.name]: Icon,
      [Popup.name]: Popup,
      sale
    },
    data() {
      return {
        show: false,
        active: 0,
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
      goHome() {
        this.$router.push({
          path: '/home'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .sale-manage {
    height: 100%;
    background-color: #eee;
    position: relative;

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

      .free-home-icon {
        font-size: .64rem;
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


    .orsale-manage-button {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: .2666rem;
      z-index: 5;
      background: #fff;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
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
  }
</style>
