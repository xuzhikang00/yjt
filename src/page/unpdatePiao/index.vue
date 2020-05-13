<template>
  <div class="unpdate">
    <div class="unpdate_bg">
      <div>2124</div>
       <!-- <img src="http://zlpl2.1230t.com/v1/wap/images/logo.png" class="unpdate_logo" alt=""> -->
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .unpdate {
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(224, 235, 244,.9) none repeat scroll 0% 0%;
    position: relative;

    .unpdate_bg {
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(0, 0, 0, 0) url(/static/images/bag.png) no-repeat center center;
      top: 0px;
      left: 0px;
      opacity: 0.35;
      .unpdate_logo {}
    }

  }
</style>
