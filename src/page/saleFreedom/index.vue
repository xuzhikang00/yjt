<template>
  <div class="free">
    <div class="free-title">
      免费票快速下单
    </div>
    <van-cell-group>
      <van-cell title="出游日期" @click="show=!show" icon="location-o" is-link />
    </van-cell-group>
    <div class="free-piao">
      <div class="free-piao-title">
        成年联票B（含欢乐大马戏）
      </div>
      <div class="free-piao-font">选择张数</div>
      <div class="free-piao-font-ste">
        <van-stepper v-model="value" />
      </div>
    </div>
    <van-cell-group class="free-bottom">
      <van-field label="购票人电话" placeholder="请输入电话" />
    </van-cell-group>
    <van-field v-model="message" rows="2" autosize label="备注(选填)" type="textarea" maxlength="50" placeholder="请输入内容"
      show-word-limit />
    <van-calendar v-model="show" type="range" />
    <div class="free-footer">
      <van-button type="primary" class="free-footer-button">提交订单</van-button>
    </div>
    <div class="free-home" @click="goHome">
      <van-icon class="free-home-icon" name="wap-home-o" />
    </div>
  </div>
</template>

<script>
  import {
    Calendar,
    Cell,
    CellGroup,
    Field,
    Stepper,
    Button,
    Icon
  } from 'vant';
  export default {
    components: {
      [Calendar.name]: Calendar,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Field.name]: Field,
      [Stepper.name]: Stepper,
      [Button.name]: Button,
      [Icon.name]: Icon
    },
    data() {
      return {
        show: false,
        value: 1,
        message: ''
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
  .free {
    background-color: #eee;
    height: 100%;
    position: relative;

    .free-bottom {
      margin-bottom: .7rem;
    }

    .free-title {
      background-color: #fff;
      color: #666;
      font-size: .426rem;
      height: 1.86rem;
      display: flex;
      align-items: center;
      padding-left: .45rem;
      margin-bottom: .7rem;
    }

    .free-piao {
      height: 4.88rem;
      border-radius: .2rem;
      margin: .7rem auto;
      background-color: #fff;
      width: 90%;

      .free-piao-title {
        font-size: .48rem;
        color: #000;
        font-weight: 500;
        padding: .4rem;
        border-bottom: 1PX dashed #eee;
      }

      .free-piao-font {
        color: #919191;
        font-size: .426rem;
        padding: .4rem;
      }

      .free-piao-font-ste {
        text-align: center;
      }
    }

    .free-footer {
      position: absolute;
      width: 100%;
      height: 1.36rem;
      background-color: #fff;
      bottom: 0;
      display: flex;
      justify-content: flex-end;

      .free-footer-button {
        height: 100%;
        padding: 0 1rem;
      }
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
      .free-home-icon{
        font-size: .64rem;
      }
    }
  }
</style>
