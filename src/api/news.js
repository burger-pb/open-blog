import request from '@/utils/request'
import { objectToFormData } from '@/utils/formDataFormat'

export function APIFetchGetNewsList(data) {
  return request({
    url: '/news-list',
    method: 'GET',
    params: data,
    data: objectToFormData(data)
  })
}
