<template>
  <div class="wrapper">
    <video src="@/assets/nm.mp4" controls class="videoNm"></video>
  </div>
</template>

<script>
  export default {
    name: 'videoMoudle',
    data(){
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
    .videoNm {
      width: 1000px;
    }
  }
</style>
