<template>
  <div class="order-manage">
    <van-tabs v-model="active" animated title-active-color="#1aad19">
      <van-tab title="今日订单">
        <div class="order-manage-today-top clearfloat">
          <div class="order-manage-today-top-item">
            <img src="http://zlpl2.1230t.com/v1/wap_admin/images/s1.png" alt="">
            <div class="order-manage-today-top-item-word">
              <div>到付到访金额</div>
              <div class="order-manage-today-top-item-word-number">¥0</div>
            </div>
          </div>
          <div class="order-manage-today-top-item">
            <img src="http://zlpl2.1230t.com/v1/wap_admin/images/s2.png" alt="">
            <div class="order-manage-today-top-item-word">
              <div>预付到访金额</div>
              <div class="order-manage-today-top-item-word-number">¥0</div>
            </div>
          </div>

          <div class="order-manage-today-top-item">
            <img src="http://zlpl2.1230t.com/v1/wap_admin/images/s3.png" alt="">
            <div class="order-manage-today-top-item-word">
              <div>预订总人数</div>
              <div class="order-manage-today-top-item-word-person">2人</div>
            </div>
          </div>

          <div class="order-manage-today-top-item">
            <img src="http://zlpl2.1230t.com/v1/wap_admin/images/s4.png" alt="">
            <div class="order-manage-today-top-item-word">
              <div>到访总人数</div>
              <div class="order-manage-today-top-item-word-person">0人</div>
            </div>
          </div>

          <div class="order-manage-today-top-item order-manage-today-top-last">
            <div class="order-manage-today-top-item-gard">(到付:1,预付:1)</div>
          </div>

          <div class="order-manage-today-top-item order-manage-today-top-last">
            <div class="order-manage-today-top-item-gard">(到付:1,预付:1)</div>
          </div>

        </div>
        <div class="home-sale-price">
          <div class="home-sale-price-item">
            <div>
              预订随时订测试票人数
            </div>
            <div class="home-sale-price-item-number">2</div>
            <div class="home-sale-price-item-word">(到付:1,预付:1)</div>
          </div>
          <div class="home-sale-price-item">
            <div>
              到访随时订测试票人数
            </div>
            <div class="home-sale-price-item-number">0</div>
            <div class="home-sale-price-item-word">(到付:1,预付:1)</div>
          </div>
        </div>
        <div class="order-manage-today-top-bottom">
          <ticket></ticket>
        </div>
      </van-tab>
      <van-tab title="明日订单">
        <div class="order-manage-today-top clearfloat">
          <div class="order-manage-today-top-item">
            <img src="http://zlpl2.1230t.com/v1/wap_admin/images/s3.png" alt="">
            <div class="order-manage-today-top-item-word">
              <div>预订总人数</div>
              <div class="order-manage-today-top-item-word-person">2人</div>
            </div>
          </div>

          <div class="order-manage-today-top-item">
            <img src="http://zlpl2.1230t.com/v1/wap_admin/images/s4.png" alt="">
            <div class="order-manage-today-top-item-word">
              <div>到访总人数</div>
              <div class="order-manage-today-top-item-word-person">0人</div>
            </div>
          </div>

          <div class="order-manage-today-top-item order-manage-today-top-last">
            <div class="order-manage-today-top-item-gard">(到付:1,预付:1)</div>
          </div>

          <div class="order-manage-today-top-item order-manage-today-top-last">
            <div class="order-manage-today-top-item-gard">(到付:1,预付:1)</div>
          </div>

        </div>
        <div class="home-sale-price">
          <div class="home-sale-price-item">
            <div>
              预订随时订测试票人数
            </div>
            <div class="home-sale-price-item-number">2</div>
            <div class="home-sale-price-item-word">(到付:1,预付:1)</div>
          </div>
          <div class="home-sale-price-item">
            <div>
              到访随时订测试票人数
            </div>
            <div class="home-sale-price-item-number">0</div>
            <div class="home-sale-price-item-word">(到付:1,预付:1)</div>
          </div>
        </div>

        <div class="home-sale-price">
          <div class="home-sale-price-item">
            <div>
              预订盐城成人体验票人数
            </div>
            <div class="home-sale-price-item-number">2</div>
            <div class="home-sale-price-item-word">(到付:1,预付:1)</div>
          </div>
          <div class="home-sale-price-item">
            <div>
              到访盐城成人体验票人数
            </div>
            <div class="home-sale-price-item-number">0</div>
            <div class="home-sale-price-item-word">(到付:1,预付:1)</div>
          </div>
        </div>

        <div class="order-manage-today-top-bottom">
          <ticket></ticket>
        </div>
      </van-tab>

      <van-tab title="全部订单">
        <div class="order-manage-today-top clearfloat">
          <div class="order-manage-today-top-item">
            <img src="http://zlpl2.1230t.com/v1/wap_admin/images/s1.png" alt="">
            <div class="order-manage-today-top-item-word">
              <div>到付到访金额</div>
              <div class="order-manage-today-top-item-word-number">¥0</div>
            </div>
          </div>
          <div class="order-manage-today-top-item">
            <img src="http://zlpl2.1230t.com/v1/wap_admin/images/s2.png" alt="">
            <div class="order-manage-today-top-item-word">
              <div>预付到访金额</div>
              <div class="order-manage-today-top-item-word-number">¥0</div>
            </div>
          </div>

          <div class="order-manage-today-top-item">
            <img src="http://zlpl2.1230t.com/v1/wap_admin/images/s3.png" alt="">
            <div class="order-manage-today-top-item-word">
              <div>预订总人数</div>
              <div class="order-manage-today-top-item-word-person">2人</div>
            </div>
          </div>

          <div class="order-manage-today-top-item">
            <img src="http://zlpl2.1230t.com/v1/wap_admin/images/s4.png" alt="">
            <div class="order-manage-today-top-item-word">
              <div>到访总人数</div>
              <div class="order-manage-today-top-item-word-person">0人</div>
            </div>
          </div>

          <div class="order-manage-today-top-item order-manage-today-top-last">
            <div class="order-manage-today-top-item-gard">(到付:1,预付:1)</div>
          </div>

          <div class="order-manage-today-top-item order-manage-today-top-last">
            <div class="order-manage-today-top-item-gard">(到付:1,预付:1)</div>
          </div>

        </div>
        <div class="home-sale-price" v-for="item in tableData">
          <div class="home-sale-price-item">
            <div>
              {{item.data1}}
            </div>
            <div class="home-sale-price-item-number">2</div>
            <div class="home-sale-price-item-word">(到付:1,预付:1)</div>
          </div>
          <div class="home-sale-price-item">
            <div>
               {{item.data2}}
            </div>
            <div class="home-sale-price-item-number">0</div>
            <div class="home-sale-price-item-word">(到付:1,预付:1)</div>
          </div>
        </div>
        <div class="order-manage-today-top-bottom">
          <ticket></ticket>
        </div>
      </van-tab>
    </van-tabs>
    <div class="order-manage-button">
      <van-button type="primary" size="large">搜素</van-button>
    </div>
    <div class="free-home" @click="goHome">
      <van-icon class="free-home-icon" name="wap-home-o" />
    </div>
  </div>
</template>

<script>
  import {
    Tab,
    Tabs,
    Button,
    Icon
  } from 'vant';
  import ticket from '@/components/ticketManage.vue';
  export default {
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [Button.name]: Button,
      [Icon.name]: Icon,
      ticket
    },
    data() {
      return {
        active: 0,
        tableData:[
          {data1:'预订成年联票B（含欢乐大马戏）人数',data2:'预订成年联票B（含欢乐大马戏）人数'},
          {data1:'到访成年联票B（含欢乐大马戏）人数',data2:'到访成年联票B（含欢乐大马戏）人数'},
          {data1:'预约成人票数',data2:'预约成人票数'},
          {data1:'预约成人票数',data2:'预约成人票数'},
          {data1:'预约成人票数',data2:'预约成人票数'}
        ]
      }
    },
    methods:{
      goHome(){
        this.$router.push({path:'/home'})
      }
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
      .free-home-icon{
        font-size: .64rem;
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
          }

          .order-manage-today-top-item-word-person {
            font-size: .426rem;
            color: #ff5346;
          }
        }
      }
    }

    .home-sale-price {
      background-color: #fff;
      height: 2.13rem;
      text-align: center;
      padding: .45rem 0 .24rem 0;
      font-size: 0.4rem;
      width: 100%;
      border-top: 2PX solid #feafb3;
      display: flex;
      box-sizing: content-box;
      width: 98%;
      margin: 0 auto;
      margin-top: .2rem;

      .home-sale-price-item {
        flex: 1;
        font-size: .38rem;
        border-right: 1PX dashed #eee;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        &:last-child {
          border-radius: none;
        }

        .home-sale-price-item-number {
          color: #1aada9;
          font-size: .48rem;
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
  }
</style>
