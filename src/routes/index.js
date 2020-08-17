

//引入代码拆分的库
import loadable from '@loadable/component'
import React from 'react'

import {
    QrcodeOutlined,
    StarOutlined,
    ReadOutlined,
    BlockOutlined,
    BranchesOutlined,
    LayoutOutlined,
  } from '@ant-design/icons';

  //按需加载 也叫代码拆分
const Home = loadable(() =>import ('./ystem/Home'))
const Analyze = loadable (()=> import ('./ystem/Analyze'))

const Analysis = loadable (()=> import ('./goods/Analysis'))
const Entrepot = loadable (()=> import ('./goods/Entrepot'))


const routes = [

    {
        id :1 , 
        text: '管理系统',
        icon: <QrcodeOutlined />,
        children: [
           { id : 11,
            text : '系统首页',
            path:'/hone',
            component:Home,
            icon: <StarOutlined />,
           },
           {  id : 12,
            text : '商品分析',
            path:'/analyze',
            component:Analyze,
            icon:<ReadOutlined />,
           }
        ]
    },
    {
        id :2 , 
        text: '商品竞品',
        icon:<BlockOutlined />,
        children: [
           { id : 21,
            text : '商品数据',
            path:'/analysis',
            component:Analysis,
            icon: <BranchesOutlined />,
           },
           {  id : 22,
            text : '商品仓库',
            path:'/entrepot',
            component:Entrepot,
            icon:<LayoutOutlined />,
           }
        ]
    },
 
]

export default routes