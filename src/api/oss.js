import request from '@/utils/request';
export function policy() {
  return request({
    url: '/api/sys/upload/signature',
    method: 'get',
  });
}
