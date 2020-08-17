import React from 'react'
// 高阶组件又称（高阶函数）
import { connect } from 'react-redux'

import { 
    changHander,
    todoadd,
    tododel,
    todoupd, 
    todoclear,

} from '@/store/actions/todoAction'



// 把store中需要共享的数据变成 this.props的方式进行访问
function mapStateToProps(store) {
    return {
      msg: store.todo.msg,
      list: store.todo.list
    }
  }
  
// 把外部的actions生成器方法，遇到到this.props
function mapActionToProps(dispatch){
    return{
        //改变值
        change: (payload)=>dispatch(changHander(payload)),
        add: (payload)=>dispatch(todoadd(payload)),
        del: (payload)=>dispatch(tododel(payload)),
        upd: (payload)=>dispatch(todoupd(payload)),
        clear: (payload)=>dispatch(todoclear(payload)),

    }
}


class Home extends React.Component{

    changHander(){
        console.log('props',this.props);
        this.props.change('666666')
    }
  
    createList(){
       let { list } = this.props
       return list.map(ele=>(
           <div key={ ele.id }>
               <span>{ ele.id }</span>
               <span>——</span>
               <span onClick={this.updHandle.bind(this,ele.id)}>{ele.name}</span>
               <span onClick={this.delHandle.bind(this,ele.id)}>——X</span>
           </div>
       ))
   }
   addHandle(){
    this.props.add({
        id: Date.now(),
        name: '运动'
      })
   }
   updHandle(id){
    this.props.upd({
        id,
        name: '书法'
      })
   }
   delHandle(id){
      this.props.del(id)
   }
   clearHandle(){
       this.props.clear()
   }
   render(){
       console.log(this.props);
       return(
           <div>
               <h1>首页</h1>
               <h2>{this.props.msg }</h2>
                <button onClick={this.changHander.bind(this)}>改变</button>
                <hr></hr>
                <button onClick={this.addHandle.bind(this)}>新增</button>
                <button onClick={this.clearHandle.bind(this)}>清空</button>

                
                { this.createList() }
           </div>
       )
   }

}
export default connect(mapStateToProps, mapActionToProps)(Home)