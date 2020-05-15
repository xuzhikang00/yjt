<template>
  <div class="account">

    <div class="account-content">
      <van-field label="新密码" placeholder="请输入密码" />
      <van-field label="确认密码" placeholder="请输入确认密码" />
      <van-field center clearable v-model="phones" label="手机号" placeholder="请输入短信验证码" readonly >
        <template #button>
          <div style="width: .8rem;" v-if="showIS">{{number}}</div>
          <van-button size="small" type="primary" v-else @click="startNum">发送验证码</van-button>
        </template>
      </van-field>
      <van-field label="手机验证码" placeholder="请输入验证码" />
      <div class="account-content-button">
        <van-button class="account-content-button-item" type="primary" style="width: 90%;" size="large" @click="toY('/accountSet')">提交</van-button>
      </div>
    </div>
    <div class="free-home" @click="goHome">
      <van-icon class="free-home-icon" name="wap-home-o" />
    </div>
  </div>
</template>

<script>
  import {
    Button,
    Icon,
    Cell,
    CellGroup,
    Field,
    Picker,
    Popup
  } from 'vant';
  export default {
    components: {
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Field.name]: Field,
      [Button.name]: Button,
      [Picker.name]: Picker,
      [Popup.name]: Popup
    },
    data() {
      return {
        phones:'138***88888',
        show: false,
        switchNum: 1,
        number: 120,
        timer: null,
        showIS: false,
        columns: ['见习运营', '是否会尽快', '收银员', '检票员', '微信购票', 'OTA电商', '旅行社', '运营管理', '营销经理', '网站编辑', '财务', '营销总监', '副总经理',
          '总经理'
        ],
      }
    },
    methods: {
      toY(val) {
        this.$router.push({
          path: val
        })
      },
      onConfirm() {
        this.show = false
      },
      goHome() {
        this.$router.push({
          path: '/home'
        })
      },
      startNum() {
        this.showIS = true
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          if (this.number <= 0) {
            clearInterval(this.timer)
            this.number = 10
            this.showIS = false
          }
          this.number--
        }, 1000)
      }
    }
  }
</script>

<style lang="less" scoped>
  .account {
    height: 100%;
    background-color: #eee;
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

    .account-content {
      padding-top: .5rem;

      /deep/ .van-cell__title {
        font-size: .453rem;
      }

      .account-content-button {
        margin-top: .5rem;
        text-align: center;

        .account-content-button-item {
          background-color: #1aad19;
          height: 1.226rem;
          border-radius: .15rem;
        }
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
