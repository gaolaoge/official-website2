import api from './index.js'

//list
// 获取资讯列表
export function getNewsList(data) {
  return api({
    url: `/informations?name=${data.name}&pageSize=${data.size}&pageIndex=${data.page}&hide=${data.hide}`,
    method: 'GET'
  })
}

export function pushJoinUs(data) {
  return api({
    url: '/joins',
    method: 'POST',
    data
  })
}
