<template>
  <div class="orderExamine">
    <ticket></ticket>
    <div class="free-home" @click="goHome">
      <van-icon class="free-home-icon" name="wap-home-o" />
    </div>
  </div>
</template>

<script>
  import {
    Icon
  } from 'vant';
  import ticket from '@/components/ticketManage.vue'
  export default{
    components:{
      [Icon.name]:Icon,
      ticket
    },
    methods:{
      goHome(){
        this.$router.push({path:'/home'})
      }
    }
  }
</script>

<style lang="less" scoped>
  .orderExamine{
    background-color: #fff;
    position: relative;
    height: 100%;
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
