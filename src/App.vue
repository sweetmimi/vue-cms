<template>
  <div class="app-container">
     <!-- 顶部header区域 -->
      <mt-header fixed title="家居商城"></mt-header>

     <!-- 中间的路由 router-view区域 -->
			<router-view></router-view>


     <!-- 底部区域 Tabbar -->

		<nav class="mui-bar mui-bar-tab">
			<routerLink class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</routerLink>
			<routerLink class="mui-tab-item" to="/menber">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</routerLink>
			<routerLink class="mui-tab-item" to="/shopCar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</routerLink>
			<routerLink class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</routerLink>
		</nav>
  </div>
</template>

<script>

</script>

<style lang='less' scoped>
  .app-container{
    padding-top: 40px;
  }
  
</style>
