import React from 'react'
//框架
import { Menu } from 'antd'

//路由
import routes from '@/routes'
///跳转
import { Link } from 'react-router-dom'
//tup
import IMG from '../../utils/img'
const { SubMenu } = Menu;

export default class Sider extends React.Component{

creactChildre(children){
    //判断如果有子菜单就运行这里的 否则就不运行
  if(children){
   return children.map(ele=>(
         <Menu.Item
            key={ele.id}
            icon={ele.icon}>
               {/* 当这里用link的时候要在app里面引用hashRouter 把loyout包起来 不然会报错 */}
              <Link to={ele.path}> {ele.text} </Link>
              
          </Menu.Item>   
    ))
  }

}

 //运行循环父菜单
  creactMenu(){
    let arr = []
    routes.map(ele=>{
      arr.push(
          <SubMenu
            key={ele.id}
            icon={ele.icon}
            title={ele.text}>
            {/* 传值给子菜单 */}
            { this.creactChildre(ele.children)}
          </SubMenu>   
      )
      //箭头函数都要返回一个值 
      return false
  })
  return arr
}
    render(){
        return(   
        <div className="xm-sider">
            <div className="log"> <img src={IMG.logo} alt="img" /></div>
          <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
              >
             { this.creactMenu()}   
          </Menu>
        </div>
        )
    }
}