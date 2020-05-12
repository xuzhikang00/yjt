<template>
  <div class="home">
  <van-button plain type="primary">朴素按钮</van-button>
  </div>
</template>

<script>
  import { Button } from 'vant';
  export default{
    components:{
      [Button.name]:Button
    }
  }
</script>

<style lang="less" scoped>
</style>
