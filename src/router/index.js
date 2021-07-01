import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Statistic from '../views/statistic/statistic'
import Line from '../views/statistic/line'
import Absenteeism from  '../views/absenteeism/absenteeism'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/statistic',//重定向
    },
        ////子菜单一
        {
          path: '/statistic',
          name: '柱状图',
          component: Statistic,
        },
        ////子菜单二
        {
          path: '/line',
          name: '折线图',
          component: Line,
        },
    {

          path: '/absenteeism',
          name: '柱状图',
          component: Absenteeism,
    }
  ]
})
