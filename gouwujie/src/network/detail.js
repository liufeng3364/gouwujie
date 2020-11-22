import {request} from './request'

export function getDetailMessage(iid){
    return request({
      url:'/detail',
      params:{
        iid
      }
    })
  }