import request from '../utils/request';

export function getOrderPage(data) {
  return request({
    url: '/order/page',
    method: 'post',
    data,
  });
}

export function getOrderDetail(id) {
  return request({
    url: `/order/${id}`,
    method: 'get',
  });
}

export function deleteOrder(id) {
  return request({
    url: `/order/${id}`,
    method: 'delete',
  });
}

export function createOrder(data) {
  return request({
    url: '/order',
    method: 'post',
    data,
  });
}

export function updateOrderStatus(data) {
  return request({
    url: '/order/status',
    method: 'put',
    data,
  });
}
