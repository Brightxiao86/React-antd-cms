import fetch from './fetch'

export function GoodDetails (params){
    return fetch({
        url:'/goods/list',
        method:'GET',
        params
    })
}