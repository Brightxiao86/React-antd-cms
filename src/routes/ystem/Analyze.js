import React from 'react'

import { connect } from 'react-redux'
import { getLists } from '@/store/actions/goodList'

function mapStateToProps(store) {
  return {
    lists: store.shopp.list
  }
}

// 把外部的actions生成器方法，遇到到this.props
function mapActionToProps(dispatch) {
  return {
    //调接口 通知getLists这个函数 
    init: (params)=>dispatch(getLists(params))
  }
}


class Analyze extends React.Component {
  componentDidMount() {
    //执行
    this.props.init({})

  }
ceractList(){
    let { lists } = this.props
    return lists.map(ele=>(
          <div key={ele._id}>
              <span> {ele._id} </span>
              <span> {ele.name} </span>
              <span> {ele.desc} </span>
              <span> - </span>
              <span> {ele.price} </span>
          </div>
    ))
  }

  render() {
    console.log('props',this.props);
    return(
        <div>
            <h1>商品分析</h1>
            { this.ceractList() }
        </div>
    )
  }
}

export default connect(mapStateToProps, mapActionToProps)(Analyze)
