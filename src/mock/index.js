import Mock from 'mockjs'

//统计图数据
const { list } = Mock.mock({
    'list|10':[{
        name:'@cname()',
        'value|18-30': 1,

    }]

})
//折线图数据
const { listtwo } = Mock.mock({
    'listtwo|10':[{
        'value|20-50': 1,
    }]

})

//缺勤人员数据
const { newsList }  =  Mock.mock({
    'newsList|75': [{
        'username':'@cname()',
        'email':'@email',
        'mobile|1':['13531544954','13632250649','15820292420','15999905612','13832995356','15562505698'], //在数组中随机找一个
        'times|0-10': 1,
        'id|+1':1
    }]
})

//定义get请求
Mock.mock('/api/get/news','get',()=>{
    return {
        status: 200,
        message: '获取数据成功',
        list: list,
    }
})
//折线图
Mock.mock('/api/get/line','get',()=>{
    return {
        status: 200,
        message: '获取数据成功',
        listtwo: listtwo,
    }
})

//根据url获取query参数
const getQuery = (url,name)=>{

    const index = url.indexOf('?')
    if(index !== -1){
        const queryStrArr = url.substr(index+1).split('&')
          for(var i =0;i<queryStrArr.length;i++){
              const itemArr = queryStrArr[i].split('=')
              if(itemArr[0] === name)
              {
                  return itemArr[1]
              }
          }
    }
   return null
}

Mock.mock(/\/api\/get\/show/,'get',(options)=>{
    //获取传递的参数

    const pageindex = getQuery(options.url,'pageindex')
    const pagesize = getQuery(options.url,'pagesize')

    //截取数组起始位置
    const start = (pageindex-1)*pagesize
    //截取数组终点位置
    const end = pageindex*pagesize
    //计算总页数
        const totalPage = Math.ceil(newsList.length/pagesize)

    const listt = pageindex>totalPage?[]:newsList.slice(start,end)
    return {
        status: 200,
        message: '获取数据成功',
        list:newsList,
        page:listt,
        total: newsList.length,

    }
})

//定义添加数据
Mock.mock('/api/delete/show','post',(options)=>{
    const body = JSON.parse(options.body)
    const index = newsList.findIndex(item=>item.id === body.id)
    newsList.splice(index,1)
    return {
        status:200,
        meg:'删除成功',
        list:newsList,
        total:newsList
    }
    })
