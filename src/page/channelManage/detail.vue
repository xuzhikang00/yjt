<template>
  <div class="orderExamine">
    <div class="free-home" @click="goHome">
      <van-icon class="free-home-icon" name="wap-home-o" />
    </div>
    <div class="orderExamine-xg">
      <van-cell title="所属角色" is-link :value="user" @click="show=!show" />
      <van-cell title="登录账号" value="hdah1" />
      <van-field label="用户姓名" placeholder="请输入用户姓名" />
      <van-field label="手机号" placeholder="请输入手机号" />
      <van-field label="密码" placeholder="*留空则不修改" />
      <van-field label="支付密码" placeholder="*留空则不修改" />
      <van-cell title="授权票种" is-link :value="pzval" @click="show1=!show1" />
      <div class="orderExamine-xg-button">
        <van-button class="orderExamine-xg-button-item" type="primary" size="large" @click='ssd'>保存</van-button>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker title="所属角色" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </van-popup>
    <van-popup v-model="show1" position="bottom">
      <div class="sy">
        <div class="sy-top">
          <div></div>
          <div>授权票种</div>
          <div class="sy-top-word" @click="getPZ()">确定</div>
        </div>
        <div class="sy-content">
          <van-checkbox-group v-model="result" checked-color="#09bb07">
            <van-checkbox :name="item.value" v-for="item in datas">{{item.value}}</van-checkbox>
          </van-checkbox-group>
        </div>
      </div>
    </van-popup>

  </div>
</template>

<script>
  import {
    Icon,
    Button,
    Cell,
    CellGroup,
    Picker,
    Popup,
    Field,
    Checkbox,
    CheckboxGroup,
    Notify,
  } from 'vant';
  import channel from '@/components/channelItem.vue'
  export default {
    components: {
      [Icon.name]: Icon,
      [Button.name]: Button,
      channel,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Picker.name]: Picker,
      [Popup.name]: Popup,
      [Field.name]: Field,
      [Checkbox.name]: Checkbox,
      [CheckboxGroup.name]: CheckboxGroup,
      [Notify.name]:Notify,
    },
    data() {
      return {
        xgSwitch: false,
        show: false,
        columns: ['旅行社'],
        user: '旅行社',
        show1: false,
        result: [],
        datas: [{
            name: 'a',
            value: '成年联票B（含欢乐大马戏）'
          },
          {
            name: 'b',
            value: '景区大门票+儿童票套票'
          },
          {
            name: 'c',
            value: '成人票'
          },
          {
            name: 'd',
            value: '漂流+滑道'
          },
          {
            name: 'f',
            value: '随时订测试票'
          },
          {
            name: 'g',
            value: '小石湖成人票2'
          },
          {
            name: 'h',
            value: '旅行社专票'
          },
          {
            name: 'i',
            value: '漂流'
          },
          {
            name: 'k',
            value: '两大一小'
          },
          {
            name: 'l',
            value: '漂流单票'
          },
          {
            name: 'y',
            value: '漂流+成人套票'
          },
        ],
        pzval:'成人票',
      }
    },
    methods: {
      ssd(){
        let _this=this
        Notify({
          type: 'success',
          message: '保存成功',
          duration: 1000,
          onOpened(){
            _this.$router.push({path:'channelManage'})
          }
        });
      },
      xgDefine(data){
        this.xgSwitch=data;
      },
      save(){
        let _this=this
        Notify({
          type: 'success',
          message: '保存成功',
          duration: 1000,
          onOpened(){
            console.log(1)
            _this.xgSwitch=false
          }
        });
        // Notify({ type: 'success', message: '保存成功' });
      },
      getPZ(){
        console.log(this.result)
        this.pzval=this.result.join(',')
        this.show1=false
      },
      onConfirm(value, index) {
        this.show = false
      },
      onChange(picker, value, index) {
        this.show = false
      },
      onCancel() {
        this.show = false
      },
      goHome() {
        this.$router.push({
          path: '/home'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .orderExamine {
    background-color: #eee;
    position: relative;
    height: 100%;

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
        height: 1.226rem;
        border-radius: .15rem;
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

    .orderExamine-xg {
      padding-top: .5rem;

      /deep/ .van-cell__title,
      .van-cell__value {
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
    }
    .orderExamine-xg-button{
      margin: .5rem auto;
      width: 90%;
      .orderExamine-xg-button-item{
        background-color: #1aad19;
        height: 1.226rem;
        border-radius: .15rem;
      }
    }
    .sy {
      display: flex;
      flex-direction: column;
      height: 9rem;

      .sy-top {
        height: 1.173rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .453rem;
        border-bottom: 1px solid #eee;

        .sy-top-word {
          margin-right: .3rem;
          color: #04BE02;
        }
      }

      .sy-content {
        flex: 1;
        overflow-y: auto;

        /deep/ .van-cell__title {
          font-size: .453rem;
        }

        /deep/ .van-checkbox {
          flex-direction: row-reverse;
          justify-content: space-between;
          padding: 0 .3rem;
          font-size: .453rem;
          height: 1.2rem;
          align-items: center;
          border-bottom: 1px solid #eee;
        }
        /deep/ .van-icon{

        }
      }
    }

  }
</style>
