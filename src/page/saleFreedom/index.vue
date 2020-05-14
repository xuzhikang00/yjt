<template>
  <div class="free">
    <div class="free-title">
      免费票快速下单
    </div>
    <van-cell-group>
      <van-cell title="出游日期" @click="show=!show" value="2010-02-23" icon="location-o" is-link>
        <template #icon>
          <van-icon class="iconfont" color="#10aeff" size=".533rem" style="margin-right: .3rem;" class-prefix='icon'
            name="rili" />
        </template>
      </van-cell>
    </van-cell-group>
    <div class="free-piao">
      <div class="free-piao-title">
        成年联票B（含欢乐大马戏）
      </div>
      <div class="free-piao-font">选择张数</div>
      <div class="free-piao-font-ste">
        <div :class="inputNum<=0?'free-piao-font-ste-box free-piao-font-ste-box-g':'free-piao-font-ste-box-a free-piao-font-ste-box'"
          @click="jian()">-</div>
        <div class="free-piao-font-ste-box">
          <input type="text" v-model="inputNum">
        </div>
        <div class="free-piao-font-ste-box free-piao-font-ste-box-a" @click="jia">+</div>
      </div>
    </div>
    <van-cell-group class="free-bottom">
      <van-field label="购票人电话" placeholder="请输入电话" />
    </van-cell-group>
    <van-field class="xt" v-model="message" rows="2" autosize label="备注(选填)" type="textarea" maxlength="50" placeholder="请输入内容"
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
    Button,
    Icon
  } from 'vant';
  export default {
    components: {
      [Calendar.name]: Calendar,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Field.name]: Field,
      [Button.name]: Button,
      [Icon.name]: Icon
    },
    data() {
      return {
        show: false,
        value: 1,
        message: '',
        inputNum: 1
      }
    },
    methods: {
      goHome() {
        this.$router.push({
          path: '/home'
        })
      },
      jian() {
        if (this.inputNum <= 0) {
          return
        }
        this.inputNum--
      },
      jia() {
        this.inputNum++
      }
    }
  }
</script>

<style lang="less" scoped>
  .free {
    background-color: #eee;
    height: 100%;
    position: relative;

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

    /deep/ textarea {
      font-size: .4533rem;
    }

    /deep/ .van-cell__title,
    .van-cell__value {
      font-size: .453rem;
    }

    .xt {

      /deep/ .van-cell__title,
      .van-cell__value {
        font-size: .453rem;
        color: #969799;
      }
    }

    .free-bottom {
      margin-bottom: .5rem;
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
      margin: 0.5rem auto 1.2rem auto;
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
        font-size: .4265rem;
        padding: .4rem;
      }

      .free-piao-font-ste {
        display: flex;
        justify-content: center;

        .free-piao-font-ste-box-g {
          background-color: #c8c8c8;
          color: #fff;
        }

        .free-piao-font-ste-box-a {
          background-color: #1aad19;
          color: #fff;
        }

        .free-piao-font-ste-box {
          margin-right: .3rem;
          border: 1PX solid #eee;
          border-radius: .1rem;
          height: 1.2rem;
          width: 1.3333rem;
          font-size: .8rem;
          display: flex;
          align-items: center;
          justify-content: center;

          input {
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: .5333rem;
          }
        }
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
        background-color: #1aad19;
        width: 2.986rem;
        height: 1.333rem;
        font-size: .42666rem;
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
      border-radius: 3px;

      .free-home-icon {
        font-size: .54rem;
      }
    }
  }
</style>
