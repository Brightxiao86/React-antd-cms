
import { 
    CHANGE_MSG ,
    TODO_ADD,
    TODO_DEL,
    TODO_UPD,
    TODO_CLEAR,


} from '@/store/actionType'

//action生成器 
export function changHander(payload){

     return{
        type:CHANGE_MSG,
        payload
     }
}

//TODOLIST
export function todoadd(payload){
    return{
        type:TODO_ADD,
        payload
    }
}

export function tododel(payload){
    return{
        type:TODO_DEL,
        payload
    }
}

export function todoupd(payload){
    return{
        type:TODO_UPD,
        payload
    }
}
export function todoclear(payload){
    return {
        type:TODO_CLEAR,
        payload
    }
}