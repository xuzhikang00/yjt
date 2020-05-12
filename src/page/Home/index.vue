<template>
  <div class="home">
    <div class="home-header">
      <van-button class="home-header-button" plain size="small" type="primary">退出</van-button>
    </div>
  </div>
</template>

<script>
  import {
    Button
  } from 'vant';
  export default {
    components: {
      [Button.name]: Button
    }
  }
</script>

<style lang="less" scoped>
  .home {
    .home-header {
      display: flex;
      justify-content: flex-end;
      padding: .3rem .3rem 0 0;
      .home-header-button {
        border-radius: .2rem;
      }
    }
  }
</style>
