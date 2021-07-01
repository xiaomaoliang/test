<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>统计</el-breadcrumb-item>
      <el-breadcrumb-item>柱状图</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="com-chart" :style="{width: '975px', height: '650px'}" ref="seller">
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
         chartInstance:null,
      allData:null//服务器返回的数据
    };
  },
  // 子组件转换
  components: {},
  mounted() {
    this.initChart();
    this.getData()
  },

  //点击函数事件
  methods: {
    //初始化chartInstance对象
    initChart(){
      this.chartInstance=this.$echarts.init(this.$refs.seller)
    },
    //获取服务器的数据
    getData(){
      axios.get('/api/get/news').then(res=>{
            console.log(res.data.list);
            this.allData = res.data.list
            this.updateChart()
    })
    },
    //更新图标
    updateChart(){
      const sellerNames = this.allData.map((item)=>{
        return item.name
      })
      const sellerValue = this.allData.map((item)=>{
        return item.value
      })
      const option = {
        title:{
          text:'个人考勤次数（月）',
          left:80
        },
       xAxis:{
         type:'value'
       },
        yAxis:{
         type:'category',
          data:sellerNames
        },
        series:[
          {
            type:'bar',
            data:sellerValue
          }
        ]
      }
      this.chartInstance.setOption(option)
    }
}
}
</script>

<style scoped>
.com-chart{
  margin-top: 30px;
}
</style>