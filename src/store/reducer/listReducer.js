import {
   GOOD_LIST
  } from '@/store/actionType'
  
  const initState = {
    list: []
  }
  
  export default function listReducer(state=initState, action) {
    //深复制  
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
      case GOOD_LIST:
        //赋值
        newState.list = action.payload
        return newState
      default:
        return state
    }
  }
  