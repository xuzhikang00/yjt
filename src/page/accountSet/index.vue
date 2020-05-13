<template>
  <div class="account">
    <div class="account-content" v-if="switchNum==1">
      <van-cell-group>
        <van-cell title="修改登录密码" @click="switchNum=2" is-link />
        <van-cell title="修改支付密码"  @click="switchNum=3" is-link />
        <van-cell title="绑定微信"  @click="switchNum=4" is-link />
        <van-cell title="添加成员"  @click="switchNum=4" is-link />
      </van-cell-group>
    </div>

    <div class="account-content" v-if="switchNum==2">
      <van-field label="原密码" />
      <van-field label="新密码" />
      <van-field label="确认密码" />
      <div class="account-content-button">
        <van-button type="primary" style="width: 90%;" size="large">提交</van-button>
      </div>
    </div>

    <div class="account-content" v-if="switchNum==3">
      <van-field label="新密码" />
      <van-field label="确认密码" />
      <van-field center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <div style="width: .8rem;" v-if="showIS">{{number}}</div>
          <van-button size="small" type="primary" v-else @click="startNum">发送验证码</van-button>
        </template>
      </van-field>
      <van-field label="手机验证码" />
      <div class="account-content-button">
        <van-button type="primary" style="width: 90%;" size="large">提交</van-button>
      </div>
    </div>


    <div class="account-content" v-if="switchNum==4">
      <van-cell-group>
        <van-cell title="所属角色" @click="show=!show" is-link />
        <van-field label="登录账户" />
        <van-field label="用户姓名" />
        <van-field label="手机号" />
        <van-field label="密码" />
        <van-field label="确认密码" />
      </van-cell-group>
      <div class="account-content-button">
        <van-button type="primary" style="width: 90%;" size="large">保存</van-button>
      </div>
    </div>

    <van-popup v-model="show" position="bottom">
      <van-picker
        title="所属角色"
        show-toolbar
        :columns="columns"
          @confirm="onConfirm"
          @cancel="onConfirm"
      />
    </van-popup>
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
      [Picker.name]:Picker,
      [Popup.name]:Popup
    },
    data() {
      return {
        show:false,
        switchNum: 1,
        number: 120,
        timer: null,
        showIS: false,
        columns: ['见习运营', '是否会尽快', '收银员', '检票员', '微信购票','OTA电商','旅行社','运营管理','营销经理','网站编辑','财务','营销总监','副总经理','总经理'],
      }
    },
    methods: {
      onConfirm(){
        this.show=false
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

    .account-content {
      padding-top: .5rem;

      .account-content-button {
        margin-top: .5rem;
        text-align: center;
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

      .free-home-icon {
        font-size: .64rem;
      }
    }
  }
</style>
