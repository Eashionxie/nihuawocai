<template>
  <div class="home">
    <router-view class="full" />
    <div class="tab-bar">
      <router-link to="/game">paly</router-link>
      <router-link to="/setting">settings</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  .tab-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #cfcfcf;
    background-color: #fff;
    * {
      flex: 1;
      color: #666;
    }
    :first-of-type {
      border-right: 1px solid #dfdfdf;
    }
  }
}
</style>
