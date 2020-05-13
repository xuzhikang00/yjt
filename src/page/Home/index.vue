<template>
  <div class="home">
    <div class="home-top">
      <div class="home-header">
        <van-button class="home-header-button" plain size="small" type="primary">退出</van-button>
      </div>
      <div class="home-user">
        <img class="home-user-img" src="http://zlpl2.1230t.com/v1/wap_newadmin/images/touxiang.jpg" alt="">
        <div class="home-user-title">153548544</div>
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
            总购票人数
          </div>
          <div>12312</div>
        </div>
      </div>
    </div>

    <div class="home-bottom">
      <div class="home-bottom-item">
        <div class="home-bottom-item-data">
          <img class="home-bottom-item-data-img" src="http://zlpl2.1230t.com/v1/wap_newadmin/images/n3.png" alt="">
          <div>更新取票机余票</div>
        </div>
        <div class="home-bottom-item-data">
          <img class="home-bottom-item-data-img" src="http://zlpl2.1230t.com/v1/wap_newadmin/images/n3.png" alt="">
          <div>出免费票</div>
        </div>
        <div class="home-bottom-item-data">
          <img class="home-bottom-item-data-img" src="http://zlpl2.1230t.com/v1/wap_newadmin/images/n3.png" alt="">
          <div>套票查车</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {
    Button,
    Icon
  } from 'vant';
  export default {
    components: {
      [Button.name]: Button,
      [Icon.name]: Icon
    }
  }
</script>

<style lang="less" scoped>
  .home {
    background-color: #eee;

    .home-top {
      height: 13.8rem;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .home-header {
        display: flex;
        justify-content: flex-end;
        padding: .3rem .3rem 0 0;

        .home-header-button {
          border-radius: .2rem;
        }
      }

      .home-user {
        text-align: center;

        .home-user-img {
          height: 2rem;
          width: 2rem;
          border-radius: 50%;
        }

        .home-user-title {
          margin-top: .32rem;
          font-size: .42rem;
        }
      }

      .home-sale-price {
        height: 1.2rem;
        text-align: center;
        padding: .24rem 0 0 0;
        font-size: 0.4rem;
        width: 100%;
        border-top: 1PX solid #ebebeb;
        display: flex;

        .home-sale-price-item {
          flex: 1;
          font-size: .38rem;
        }
      }
    }

    .home-bottom {
      background-color: #fff;
      margin-top: .17rem;

      .home-bottom-item {
        height: 2.56rem;
        font-size: .38rem;
        color: #000;
        display: flex;

        .home-bottom-item-data {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .home-bottom-item-data-img {
            width: .746rem;
            height: .746rem;
          }
        }
      }
    }

  }
</style>
