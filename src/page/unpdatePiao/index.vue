<template>
  <div class="unpdate">
    <div class="unpdate_bg">
      <div class="unpdate_logo">
        <img src="http://zlpl2.1230t.com/v1/wap/images/logo.png" class="unpdate_logo" alt="">
      </div>
      <div class="unpdate_input">
        <van-field placeholder="4993" label-align="left" label="取票机:" />
      </div>
      <van-button class="unpdate_button" type="default" size="large">更新余票</van-button>
    </div>
    <div class="free-home" @click="goHome">
      <van-icon class="free-home-icon" name="wap-home-o" />
    </div>
  </div>
</template>

<script>
  import {
    Field,
    Button,
    Icon
  } from 'vant';
  export default {
    components: {
      [Field.name]: Field,
      [Button.name]: Button,
      [Icon.name]: Icon
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
  .unpdate {
    width: 100%;
    height: 100%;
    text-align: center;
    background-image: url(/static/images/bag.png);
    background-repeat: no-repeat;
    position: relative;
    background-size: contain;

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

    .unpdate_bg {
      background-color: rgb(224, 235, 244);
      opacity: .9;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      .unpdate_logo {
        width: 30%;
        margin: .5rem auto;

        img {
          width: 100%;
        }
      }

      .unpdate_input {
        height: 1.28rem;
        width: 80%;
        margin: 0 auto;
        font-size: .426rem;
        color: #535353;
        display: flex;
        align-items: center;
        margin-top: .7rem;

        /deep/ .van-cell {
          border: 1PX solid rgb(193, 193, 193);
          border-radius: .2rem;
          background-color: rgba(255, 255, 255, .8);
          padding-left: 0;

          .van-field__label {
            width: 1.86rem;
            color: #535353;
            font-size: .426rem;
          }

          .van-field__control {
            font-size: .426rem;
            letter-spacing: .05rem;
          }
        }
      }

      .unpdate_button {
        width: 80%;
        height: 1.05rem;
        box-shadow: 0px 0px 20px rgb(143, 155, 173);
        background: rgba(255, 255, 255, .5) none repeat scroll 0% 0%;
        color: rgb(55, 71, 130);
        letter-spacing: .16rem;
        margin-top: 4.4em;
      }
    }

  }
</style>
