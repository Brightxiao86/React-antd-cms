import { GOOD_LIST } from '@/store/actionType'

//引入接口文件
import { GoodDetails } from '@/utils/api'


// 异步数据，相当于vuex中的actions
export function getLists(params) {
   return function(dispatch){
      //调接口
      GoodDetails(params).then(res=>{
      // 调接口时，派发这个action
         dispatch({
            type:GOOD_LIST,
            payload:res
         })
      }).catch(err=>{
         //如果失败 就派发这个action
         dispatch({
            type:GOOD_LIST,
            payload: []
         })
      })

   }
}