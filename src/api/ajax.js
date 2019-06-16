/*
封装一个ajax请求函数模块
返回值:promise对象(异步返回的数据是:response.data)
 */
import axios from 'axios'
export default function ajax(url,data={},type='GET') {
  //这里和之前不同的是这里return了一个Promise(在promise后面在包装一层promise),目的是之前返回的是response对象,
  //需要调用response.data来得到想要的数据,这里这样封装是为了以后使用直接得到data
return new Promise(function (resolve, reject) {//resolve为成功返回,reject为失败返回
    let promise
  if (type === 'GET') {
// 准备 url query 参数数据(拼参数)
    let dataStr = '' //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    if (dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
// 发送 get 请求
    promise = axios.get(url)
  } else {
// 发送 post 请求
    promise = axios.post(url, data)//这个返回的是response
  }
  //成功返回
  promise.then(response => {
    //***直接把data传出去***
    resolve(response.data)
  })
    //失败返回
    .catch(error => {
      reject(error)
    })
})
}
