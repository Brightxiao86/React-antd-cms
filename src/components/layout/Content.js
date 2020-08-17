import React from 'react'

//引入菜单的数据
import routes from '@/routes'

//引入路由
import { Route, Switch, Redirect} from 'react-router-dom'


// 只有被Route容器包裹过的组件中，才能以下API：
// this.props.history.push() / replace() / go() / goBack()
// this.props.match.params  动态路由取参

// 那些未被Route进行直接包裹的组件中，是没有 this.props.history等API的。
// 也想拥有这些API，怎么办？可以用withRouter

//Switch必须是Route直接父组件，中间不能任何其它组件间隔

//Redirect 重定向
export default class Content extends React.Component{

    creactMenu (){
        let res= []
      function creact(arr){
         arr.map(ele=>{
             res.push( 
                <Route 
                key={ele.id} 
                path={ele.path} 
                component={ele.component}
                //精准匹配
                exact 
                 />
              )
              //递归 当有子菜单是就在调用 重新运行ceract的代码 这样反复的运行
              if(ele.children){
                  creact(ele.children)
              }
         //箭头函数都要返回一个值 
        return false
         })
      }
      routes.map(ele=>{
        creact(ele.children)
          return false
    })
  
    return res
    }
   
    render(){
        return(
             <div className="xm-content">
              {/* Switch必须是Route直接父组件，中间不能任何其它组件间隔 */}
                 <Switch>
                    { this.creactMenu() } 
                    {/* 设置重定向 */}
                   <Redirect from='*' to='/home' />

                 </Switch>
              
             </div>
        )
    }
}