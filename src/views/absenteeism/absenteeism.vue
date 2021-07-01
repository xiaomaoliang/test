<template>
  <div>
<!--    <el-row :gutter="20">-->
<!--      <el-col :span="8">-->
<!--        <el-input placeholder="请输入内容" v-model="filters.name">-->
<!--          <el-button slot="append" icon="el-icon-search" v-on:click="getUsers"></el-button>-->
<!--        </el-input>-->
<!--      </el-col>-->
<!--    </el-row>-->
    <el-table :data="userlist" border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="姓名" prop="username"></el-table-column>
      <el-table-column label="邮箱" prop="email"></el-table-column>
      <el-table-column label="电话" prop="mobile"></el-table-column>
      <el-table-column label="本月缺勤次数" prop="times"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope" width="180px">
          <!--          删除按钮-->
          <el-button type="danger" icon="el-icon-delete" size="medium " @click="remove(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageindex"
          :page-sizes="[10, 15, 20, 30]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {

      //获取用户列表参数对象
      queryInfo:{
        query:'',
      },
      userlist: [],
      pageindex:1,
      pagesize:15,
      total:1,
      id:1
    }
  },
  created() {
    this.getNewsList()
  },
  methods: {
    getNewsList() {
      axios.get('/api/get/show', {
        params:{
          pageindex:this.pageindex,
          pagesize:this.pagesize,
      }
      }).then(res => {
        console.log(res);
        this.userlist = res.data.page
        this.total = res.data.total
        this.id = res.data.page.id
      })
    },
    //监听pagesize改变事件
    handleSizeChange(newSize){
      console.log(newSize)
      this.pagesize = newSize
      this.getNewsList()
    },
    //监听页码改变
    handleCurrentChange(newPage){
      console.log(newPage)
      this.pageindex = newPage
      this.getNewsList()
    },
    //删除
    remove(id){
      console.log(id)
      axios.post('/api/delete/show',{
        id
      }).then(res=>{
     this.getNewsList()
      })

    },
  }
}
</script>

<style scoped>

</style>
