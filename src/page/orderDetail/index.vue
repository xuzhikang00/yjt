<template>
  <div class="orderExamine">
   
    <div class="orderExamine-xg">
      <van-cell title="订单号" value="2211">
        <template #icon>
            <van-icon name="card" color="#ffa312" size=".48rem" style="line-height: inherit;margin-right: .3rem;" />
          </template>
      </van-cell>
     <van-cell title="游玩日期" value="2020-05-14">
       <template #icon>
           <van-icon name="column" color="#95e1bc" size=".48rem" style="line-height: inherit;margin-right: .3rem;" />
         </template>
     </van-cell>
     <van-cell title="产品类型" value="成都">
       <template #icon>
           <van-icon name="info" color="#95e1bc" size=".48rem" style="line-height: inherit;margin-right: .3rem;" />
         </template>
     </van-cell>
    </div>
    <div class="orderExamine-xg">
      <van-cell title="类型" value="免单票">
        <template #icon>
            <van-icon name="card" color="#ffa312" size=".48rem" style="line-height: inherit;margin-right: .3rem;" />
          </template>
      </van-cell>
     <van-cell title="预订单价" value="0">
       <template #icon>
           <van-icon name="column" color="#95e1bc" size=".48rem" style="line-height: inherit;margin-right: .3rem;" />
         </template>
     </van-cell>
     <van-cell title="预订票数" value="1">
       <template #icon>
           <van-icon name="info" color="#95e1bc" size=".48rem" style="line-height: inherit;margin-right: .3rem;" />
         </template>
     </van-cell>
    </div>
    <div class="orderExamine-xg">
      <van-cell title="订单状态" value="未使用" />
      <van-cell title="游客姓名" value="免费下单" />
      <van-cell title="游客电话" value="123141" />
      <van-cell title="支付方式" class="l" value="支付成功" />
      <van-cell title="付款类型" class="l" value="提前预付" />
      <van-cell title="收款类型" class="l" value="现金" />
      <van-cell title="订单类型" value="无导游" />
      <van-cell title="渠道客户" value="无" />
      <van-cell title="订单总价" class="h" value="0元" />
      <van-cell title="下单时间" value="2020-06-14 22:40:11" />
      <van-cell title="下单电话" value="414124151" />
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
    <div class="free-home" @click="goHome">
      <van-icon class="free-home-icon" name="wap-home-o" />
    </div>
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

      /deep/ .van-cell__title {
        font-size: .4533rem;
        color: #95e1bc;
      }
      /deep/ .van-cell__value {
        font-size: .4533rem;
        color: #999;
      }
      .l{
        /deep/ .van-cell__value {
          font-size: .4533rem;
          color: #1aad19;
        }
      }
      .h{
        /deep/ .van-cell__value {
          font-size: .4533rem;
          color: #E64340;
        }
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
