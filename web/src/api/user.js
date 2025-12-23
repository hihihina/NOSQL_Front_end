import request from '../utils/request';

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  });
}

export function loginByCode(data) {
  return request({
    url: '/user/loginByCode',
    method: 'post',
    data,
  });
}

export function sendCode(data) {
  return request({
    url: '/user/sendCode',
    method: 'post',
    data,
  });
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post',
  });
}
