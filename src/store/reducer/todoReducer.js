
import { 
    CHANGE_MSG,
    TODO_ADD,
    TODO_DEL,
    TODO_UPD,
    TODO_CLEAR,

} from '../../store/actionType'


//定义初始化数据 可以被共享
const initState = {
    msg : '1000',
    list : [
        {id: 1, name : '音乐'},
        {id: 2, name : '编程'},
        {id: 3, name : '绘画'},
    ]
}

export default function todoReducer ( state = initState ,action){
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_MSG:
             newState.msg = action.payload
             return newState
        case TODO_ADD:
            console.log('收到了');
            newState.list.push(action.payload)
            //当 action.type==add时 向list添加一条数据 
            // 在添加数据之前首先要进行深复制 得到一个全新的newState
            //最后把值返回回去  newState.list.push(action.payload)
            //最后返回state
            return newState
        case TODO_DEL:
            let id = action.payload
            newState.list= newState.list.filter(ele=>ele.id!==id)
            //删除
            return newState
        case TODO_UPD:
            newState.list.map((ele,idx,arr)=>{
                if(ele.id === action.payload.id){
                    arr[idx].name = action.payload.name
                }
                return false  
            })
            //更新
            return newState

            
        case TODO_CLEAR:
            newState.list=[]
            //清空
            return newState
        default:
            //其他
            return state
    }
}