<template >
<!-- 轮播图 -->
    <mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
</template>

<script>
    export default {
        data(){
            return {}
        },
        created(){
            this.getLunbotu()
        },
        methods: {
            getLunbotu() {
      // 获取轮播图数据的方法
      this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
        // console.log(result.body);
        if (result.body.status === 0) {
          // 成功了
          this.lunbotuList = result.body.message;
        } else {
          // 失败的
          Toast("加载轮播图失败。。。");
        }
      });
                

            }
        }    
    }
</script>

<style lang="less" scoped>
    .mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: cyan;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
