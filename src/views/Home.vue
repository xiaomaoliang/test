<template>
  <!--    布局容器-->
  <el-container class="home-container">
    <el-header class="homeHeader">
      <div class="title">考勤平台</div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="this.$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-data-line"></i>
              <span>统计</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="/statistic">柱状图</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/line">折线图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-check"></i>
              <span>缺勤显示</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="/absenteeism">显示</el-menu-item>
            </el-menu-item-group>

          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>

        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      list:[],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style scoped>
.home-container{
  height: 100%;
}
.homeHeader {
  background-color: #373d41;
  border-bottom: 1px solid lightcyan;
  /*设置元素垂直居中*/
  display: flex;
  /*设置元素垂直居中*/
  align-items: center;
  /*在弹性盒对象的 <div> 元素中的各项周围留有空白*/
  justify-content: space-between;
}

.homeHeader .title {
  font-size: 14px;
  font-family: 华文行楷;
  color: #409eff;
}

</style>

