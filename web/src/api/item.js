import request from '../utils/request';

export function getItemPage(data) {
  return request({
    url: '/item/page',
    method: 'post',
    data,
  });
}

export function getItemDetail(id) {
  return request({
    url: `/item/${id}`,
    method: 'get',
  });
}

export function deleteItem(id) {
  return request({
    url: `/item/${id}`,
    method: 'delete',
  });
}

export function createItem(data) {
  return request({
    url: '/item',
    method: 'post',
    data,
  });
}

export function updateItem(data) {
  return request({
    url: '/item',
    method: 'put',
    data,
  });
}

export function getHotItems(params) {
  return request({
    url: '/item/hot',
    method: 'get',
    params,
  });
}

export function getViewHistory() {
  return request({
    url: '/item/view-history',
    method: 'get',
  });
}
