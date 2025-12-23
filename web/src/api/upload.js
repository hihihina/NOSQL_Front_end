import request from '../utils/request';

export function uploadFile(data, path) {
  return request({
    url: '/upload',
    method: 'post',
    data,
    params: { path },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
