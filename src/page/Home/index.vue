<template>
  <div class="home">
    <div class="home-top">
      <div class="home-header">
        <van-button class="home-header-button" plain size="small" type="primary" @click="goRouter('/loging')">退出</van-button>
      </div>
      <div class="home-user">
        <img class="home-user-img" src="http://zlpl2.1230t.com/v1/wap_newadmin/images/touxiang.jpg" alt="">
        <div class="home-user-title">
          <van-icon name="passed" class="home-user-title-icon" />
          153548544
          </div>
      </div>
      <div class="home-sale-price">
        <div class="home-sale-price-item">
          <div style="display: flex;align-items: center;justify-content: center;">
            <img src="/static/images/1.png" alt="" style="height: .5rem;
    width: .5rem;
    margin-right: .2rem;">
            <!-- <van-icon class="iconfont" class-prefix='icon' name='ziyuan' color="#639eff" size=".586rem" style="margin-right: .1rem;"  /> -->
            今日购票张数
          </div>
          <div style="font-size: .4rem;" >12312</div>
        </div>
        <div class="home-sale-price-item">
          <div style="display: flex;align-items: center;justify-content: center;">
            <img src="/static/images/2.png" alt="" style="height: .5rem;
    width: .5rem;
    margin-right: .2rem;">
            <!-- <van-icon name="gold-coin" color="#f7ab07" size=".586rem" style="margin-right: .1rem;" /> -->
            今日售票金额
          </div>
          <div style="font-size: .4rem;">¥15196.21</div>
        </div>
      </div>
    </div>

    <div class="home-bottom">
      <div class="home-bottom-item">
        <div class="home-bottom-item-data" @click="goRouter('/saleManage')">
          <img class="home-bottom-item-data-img" src="/static/images/i7.png" alt="">
          <div>售票管理</div>
        </div>
        <div class="home-bottom-item-data" @click="goRouter('/orderManage')">
          <img class="home-bottom-item-data-img" src="/static/images/i6.png" alt="">
          <div>订单管理</div>
        </div>
        <div class="home-bottom-item-data" @click="goRouter('/orderExamine')">
          <img class="home-bottom-item-data-img" src="/static/images/i9.png" alt="">
          <div>订单审核</div>
        </div>





      </div>

      <div class="home-bottom-item">
        <div class="home-bottom-item-data" @click="goRouter('/saleFreedom')">
          <img class="home-bottom-item-data-img" src="/static/images/i2.png" alt="">
          <div>出免费票</div>
        </div>
        <div class="home-bottom-item-data">
          <img class="home-bottom-item-data-img" src="/static/images/i3.png" alt="">
          <div>套票查车</div>
        </div>
        <div class="home-bottom-item-data" @click="goRouter('/unpdatePiao')">
          <img class="home-bottom-item-data-img" src="/static/images/i1.png" alt="">
          <div>更新取票机余票</div>
        </div>
      </div>
      <div class="home-bottom-item">
        <div class="home-bottom-item-data" @click="goRouter('/channelManage')" >
          <img class="home-bottom-item-data-img" src="/static/images/i10.png" alt="">
          <div>渠道管理</div>
        </div>
        <div class="home-bottom-item-data">
          <img class="home-bottom-item-data-img" src="/static/images/i4.png" alt="">
          <div>报表统计</div>
        </div>
        <div class="home-bottom-item-data">
          <img class="home-bottom-item-data-img" src="/static/images/i5.png" alt="">
          <div>OTA销售表</div>
        </div>
      </div>
      <div class="home-bottom-item">
       <div class="home-bottom-item-data">
         <img class="home-bottom-item-data-img" src="/static/images/i8.png" alt="">
         <div>财务管理</div>
       </div>
        <div class="home-bottom-item-data" @click="goRouter('/accountSet')" >
          <img class="home-bottom-item-data-img" src="/static/images/i11.png" alt="">
          <div>账户设置</div>
        </div>
        <div class="home-bottom-item-data">
          <img class="home-bottom-item-data-img" src="/static/images/i12.png" alt="">
          <div>日志记录</div>
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
    },
    methods:{
      goRouter(url){
        this.$router.push({path:url})
      }
    }
  }
</script>

<style lang="less" scoped>
  .home {
    background-color: #eee;

    .home-top {
      height: 6.5rem;
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
          margin-top: .52rem;
          font-size: .42rem;
          display: flex;
          align-items: center;
          justify-content: center;
          .home-user-title-icon{
            font-size: .52rem;
            color: #1aad19;
            margin-right: .12rem;
          }
        }
      }

      .home-sale-price {
        height: 1.2rem;
        text-align: center;
        padding: .24rem 0 .24rem 0;
        font-size: 0.4rem;
        width: 100%;
        border-top: 1PX solid #ebebeb;
        display: flex;
        box-sizing: content-box;

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
          border-bottom: 1PX solid #eee;
          border-right: 1PX solid #eee;

          &:last-child {
            border-right: none;
          }

          .home-bottom-item-data-img {
            width: .746rem;
            height: .746rem;
            margin-bottom: .2rem;
          }
        }
      }
    }

  }
</style>
