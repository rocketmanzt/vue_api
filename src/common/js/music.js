import jsonp from '@/utils/jsonp'
export function getMusic () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp'
  }
  const options = {
    param: 'jsonpCallback'
  }
  return jsonp(url, data, options)
}
