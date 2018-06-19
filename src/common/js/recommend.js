import jsonp from '@/utils/jsonp'
export function getRecommend (data) {
  const url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su'
  const options = {
    param: 'cb'
  }
  return jsonp(url, data, options)
}
