<template>
  <div class="loging">
    <div class="loging-logo">
      <img src="../../../static/images/loging-logo.jpg" alt="">
    </div>
    <div class="loging-word">
      <img src="../../../static/images/loging-word.jpg" alt="">
    </div>
    <div class="loging-item">
       <van-field
          clearable
          left-icon="manager"
          placeholder="显示清除图标"
        />
    </div>
    <div class="loging-item">
       <van-field
          clearable
          left-icon="warning"
          placeholder="显示清除图标"
        />
    </div>
    <div class="loging-item">
      <van-button type="default" class="loging-item-button" @click="goHome">登陆</van-button>
    </div>
  </div>
</template>

<script>
  import { Field,Button } from 'vant';
  export default{
    components:{
      [Field.name]:Field,
      [Button.name]:Button
    },
    methods:{
      goHome(){
        this.$router.push({path:"/home"})
      }
    }
  }
</script>

<style lang="less" scoped>
  .loging{
    height: 100%;
    background-image: url(/static/images/loging-bg.jpg);
    background-repeat: no-repeat;
    background-size:  100% 100%;
    .loging-logo{
      text-align: center;
      padding-top: 2rem;
    }
    .loging-word{
      text-align: center;
      margin-top: 1.6rem;
      img{
        width: 80%;
      }
    }
    .loging-item{
      width: 80%;
      margin: .8rem auto;
      text-align: center;
      .loging-item-button{
        background-color: #ffd961;
        border-radius: .2rem;
        width: 2.58rem;
        font-size: .48rem;
      }
    }
  }
</style>
