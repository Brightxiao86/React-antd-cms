
// createStore 接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
//combineReducers 辅助函数 作用是 把一个由多个不同的reducer函数作为value的object，
// 合并成一个reducer函数然后就可以对reducer调用createStore方法
import { createStore , combineReducers, applyMiddleware} from 'redux'

import GoodReducer from  './reducer/GoodReducer'
import todoReducer  from  './reducer/todoReducer'
import listReducer  from './reducer/listReducer'

// 是一个中间件，用于支持redux中的异步action
import thunk from 'redux-thunk'

const reducer = combineReducers({
    good: GoodReducer,
    todo: todoReducer,
    shopp:listReducer,
})


const store = createStore(reducer, applyMiddleware(thunk))
export default store