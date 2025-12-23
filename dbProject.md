---
title: 默认模块
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# 默认模块

Base URLs:

# Authentication

# 商品管理

## POST 分页查询商品

POST /item/page

> Body 请求参数

```json
{
  "pageNum": 1,
  "pageSize": 5,
  "name": "",
  "category": ""
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sa_token|header|string| 否 |none|
|body|body|[ItemPageQueryDTO](#schemaitempagequerydto)| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": {
    "data": [
      {
        "id": 0,
        "name": "",
        "description": "",
        "price": 0,
        "stock": 0,
        "userId": 0,
        "category": "",
        "imageUrl": "",
        "status": 0,
        "viewCount": 0,
        "createTime": "",
        "updateTime": "",
        "delFlag": 0
      }
    ],
    "total": 0,
    "pageNum": 0,
    "pageSize": 0
  }
}
```

```json
{
  "code": 0,
  "msg": "查询成功",
  "error": null,
  "data": {
    "data": [
      {
        "id": 3,
        "name": "华为平板123",
        "description": "华为平板123123",
        "price": 7800.52,
        "stock": 10,
        "category": "华为平板",
        "imageUrl": "https://sssycamore.cn-beijing/克劳德.png",
        "status": 0,
        "viewCount": 0,
        "createTime": "2025-12-23T18:40:36",
        "updateTime": "2025-12-23T18:40:36",
        "delFlag": 0
      },
      {
        "id": 2,
        "name": "笔记本电脑321",
        "description": "暗影精灵321",
        "price": 6424.52,
        "stock": 77,
        "category": "笔记本电脑",
        "imageUrl": "https://sssycamore.cn-beijing/克劳德.png",
        "status": 0,
        "viewCount": 9,
        "createTime": "2025-12-23T18:20:36",
        "updateTime": "2025-12-23T18:23:14",
        "delFlag": 0
      }
    ],
    "total": 2,
    "pageNum": 1,
    "pageSize": 5
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultPageResultItem](#schemaresultpageresultitem)|

## GET 根据id查询商品详情

GET /item/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |none|
|sa_token|header|string| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": {
    "id": 0,
    "name": "",
    "description": "",
    "price": 0,
    "stock": 0,
    "userId": 0,
    "category": "",
    "imageUrl": "",
    "status": 0,
    "viewCount": 0,
    "createTime": "",
    "updateTime": "",
    "delFlag": 0
  }
}
```

```json
{
  "code": 0,
  "msg": "查询成功",
  "error": null,
  "data": {
    "id": 3,
    "name": "华为平板123",
    "description": "华为平板123123",
    "price": 7800.52,
    "stock": 10,
    "category": "华为平板",
    "imageUrl": "https://sssycamore.cn-beijing/克劳德.png",
    "status": 0,
    "viewCount": 2,
    "createTime": "2025-12-23T18:40:36",
    "updateTime": "2025-12-23T18:40:36",
    "delFlag": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultItem](#schemaresultitem)|

## DELETE 删除商品

DELETE /item/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |none|
|sa_token|header|string| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": ""
}
```

```json
{
  "code": 0,
  "msg": "",
  "error": null,
  "data": "删除成功"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultString](#schemaresultstring)|

## POST 新增商品

POST /item

> Body 请求参数

```json
{
  "name": "华为平板123",
  "description": "华为平板123123",
  "price": 7800.52,
  "stock": 10,
  "imageUrl": "https://sssycamore.cn-beijing/克劳德.png",
  "category": "华为平板",
  "status": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sa_token|header|string| 否 |none|
|body|body|[ItemDTO](#schemaitemdto)| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": {
    "id": 0,
    "name": "",
    "description": "",
    "price": 0,
    "stock": 0,
    "userId": 0,
    "category": "",
    "imageUrl": "",
    "status": 0,
    "viewCount": 0,
    "createTime": "",
    "updateTime": "",
    "delFlag": 0
  }
}
```

```json
{
  "code": 0,
  "msg": "创建成功",
  "error": null,
  "data": {
    "id": 3,
    "name": "华为平板123",
    "description": "华为平板123123",
    "price": 7800.52,
    "stock": 10,
    "category": "华为平板",
    "imageUrl": "https://sssycamore.cn-beijing/克劳德.png",
    "status": 0,
    "viewCount": 0,
    "createTime": null,
    "updateTime": null,
    "delFlag": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultItem](#schemaresultitem)|

## PUT 更新商品

PUT /item

> Body 请求参数

```json
{
  "id": 2,
  "name": "笔记本电脑321",
  "description": "暗影精灵321",
  "price": 5800,
  "imageUrl": "123.png",
  "stock": 77,
  "category": "笔记本电脑",
  "status": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sa_token|header|string| 否 |none|
|body|body|[ItemUpdateDTO](#schemaitemupdatedto)| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": ""
}
```

```json
{
  "code": 0,
  "msg": "",
  "error": null,
  "data": "更新成功"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultString](#schemaresultstring)|

## GET 获取热门商品

GET /item/hot

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|limit|query|integer| 是 |none|
|sa_token|header|string| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": [
    {
      "id": 0,
      "name": "",
      "description": "",
      "price": 0,
      "stock": 0,
      "userId": 0,
      "category": "",
      "imageUrl": "",
      "status": 0,
      "viewCount": 0,
      "createTime": "",
      "updateTime": "",
      "delFlag": 0
    }
  ]
}
```

```json
{
  "code": 0,
  "msg": "查询成功",
  "error": null,
  "data": [
    {
      "id": 2,
      "name": "笔记本电脑321",
      "description": "暗影精灵321",
      "price": 6424.52,
      "stock": 73,
      "category": "笔记本电脑",
      "imageUrl": "https://sssycamore.cn-beijing/克劳德.png",
      "status": 0,
      "viewCount": 10,
      "createTime": "2025-12-23T18:20:36",
      "updateTime": "2025-12-23T18:23:14",
      "delFlag": 0
    },
    {
      "id": 3,
      "name": "华为平板123",
      "description": "华为平板123123",
      "price": 7800.52,
      "stock": 10,
      "category": "华为平板",
      "imageUrl": "https://sssycamore.cn-beijing/克劳德.png",
      "status": 0,
      "viewCount": 3,
      "createTime": "2025-12-23T18:40:36",
      "updateTime": "2025-12-23T18:40:36",
      "delFlag": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultListItem](#schemaresultlistitem)|

## GET 查询用户浏览记录

GET /item/view-history

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sa_token|header|string| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": [
    {
      "id": 0,
      "name": "",
      "description": "",
      "price": 0,
      "stock": 0,
      "userId": 0,
      "category": "",
      "imageUrl": "",
      "status": 0,
      "viewCount": 0,
      "createTime": "",
      "updateTime": "",
      "delFlag": 0
    }
  ]
}
```

```json
{
  "code": 0,
  "msg": "查询成功",
  "error": null,
  "data": [
    {
      "id": 3,
      "name": "华为平板123",
      "description": "华为平板123123",
      "price": 7800.52,
      "stock": 10,
      "category": "华为平板",
      "imageUrl": "https://sssycamore.cn-beijing/克劳德.png",
      "status": 0,
      "viewCount": 3,
      "createTime": "2025-12-23T18:40:36",
      "updateTime": "2025-12-23T18:40:36",
      "delFlag": 0
    },
    {
      "id": 2,
      "name": "笔记本电脑321",
      "description": "暗影精灵321",
      "price": 6424.52,
      "stock": 73,
      "category": "笔记本电脑",
      "imageUrl": "https://sssycamore.cn-beijing/克劳德.png",
      "status": 0,
      "viewCount": 10,
      "createTime": "2025-12-23T18:20:36",
      "updateTime": "2025-12-23T18:23:14",
      "delFlag": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultListItem](#schemaresultlistitem)|

# 用户管理

## POST 通过密码登录

POST /user/login

> Body 请求参数

```json
{
  "username": "admin",
  "password": "123456"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sa_token|header|string| 否 |none|
|body|body|[UserDTO](#schemauserdto)| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": {
    "tokenInfo": {
      "tokenName": "",
      "tokenValue": "",
      "isLogin": false,
      "loginId": {},
      "loginType": "",
      "tokenTimeout": 0,
      "sessionTimeout": 0,
      "tokenSessionTimeout": 0,
      "tokenActiveTimeout": 0,
      "loginDeviceType": "",
      "tag": ""
    }
  }
}
```

```json
{
  "code": 0,
  "msg": "登陆成功",
  "error": null,
  "data": {
    "tokenInfo": {
      "tokenName": "satoken",
      "tokenValue": "ee6d3a71-8cb8-4f03-84cb-03e759fc95c7",
      "isLogin": true,
      "loginId": "admin",
      "loginType": "login",
      "tokenTimeout": 2591999,
      "sessionTimeout": 2591999,
      "tokenSessionTimeout": -2,
      "tokenActiveTimeout": -1,
      "loginDeviceType": "DEF",
      "tag": null
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultLoginResultVO](#schemaresultloginresultvo)|

## POST 发送验证码

POST /user/sendCode

> Body 请求参数

```json
{
  "username": "admin"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sa_token|header|string| 否 |none|
|body|body|[UserDTO](#schemauserdto)| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": ""
}
```

```json
{
  "code": 0,
  "msg": "验证码发送成功",
  "error": null,
  "data": "741005"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultString](#schemaresultstring)|

## POST 登出

POST /user/logout

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sa_token|header|string| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": ""
}
```

```json
{
  "code": 0,
  "msg": "",
  "error": null,
  "data": "退出登录成功"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultString](#schemaresultstring)|

## POST 通过验证码登录

POST /user/loginByCode

> Body 请求参数

```json
{
  "username": "admin",
  "code": "741005"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sa_token|header|string| 否 |none|
|body|body|[UserDTO](#schemauserdto)| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": {
    "tokenInfo": {
      "tokenName": "",
      "tokenValue": "",
      "isLogin": false,
      "loginId": {},
      "loginType": "",
      "tokenTimeout": 0,
      "sessionTimeout": 0,
      "tokenSessionTimeout": 0,
      "tokenActiveTimeout": 0,
      "loginDeviceType": "",
      "tag": ""
    }
  }
}
```

```json
{
  "code": 0,
  "msg": "登陆成功",
  "error": null,
  "data": {
    "tokenInfo": {
      "tokenName": "satoken",
      "tokenValue": "0b96e4f8-b449-4531-83fb-ffbc0b9fd688",
      "isLogin": true,
      "loginId": "admin",
      "loginType": "login",
      "tokenTimeout": 2591999,
      "sessionTimeout": 2591999,
      "tokenSessionTimeout": -2,
      "tokenActiveTimeout": -1,
      "loginDeviceType": "DEF",
      "tag": null
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultLoginResultVO](#schemaresultloginresultvo)|

# 订单管理

## POST 分页查询订单

POST /order/page

> Body 请求参数

```json
{
  "pageNum": 1,
  "pageSize": 5,
  "status": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sa_token|header|string| 否 |none|
|body|body|[OrderPageQueryDTO](#schemaorderpagequerydto)| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": {
    "data": [
      {
        "id": 0,
        "userId": 0,
        "itemId": 0,
        "quantity": 0,
        "totalPrice": 0,
        "status": 0,
        "address": "",
        "phone": "",
        "receiver": "",
        "createTime": "",
        "updateTime": "",
        "delFlag": 0
      }
    ],
    "total": 0,
    "pageNum": 0,
    "pageSize": 0
  }
}
```

```json
{
  "code": 0,
  "msg": "查询成功",
  "error": null,
  "data": {
    "data": [
      {
        "id": 3,
        "userId": 1,
        "itemId": 2,
        "quantity": 2,
        "totalPrice": 12849.04,
        "status": 0,
        "address": null,
        "phone": null,
        "receiver": null,
        "createTime": "2025-12-23T19:40:29",
        "updateTime": "2025-12-23T19:40:29",
        "delFlag": 0
      },
      {
        "id": 2,
        "userId": 1,
        "itemId": 2,
        "quantity": 1,
        "totalPrice": 6424.52,
        "status": 0,
        "address": null,
        "phone": null,
        "receiver": null,
        "createTime": "2025-12-23T19:40:27",
        "updateTime": "2025-12-23T19:40:27",
        "delFlag": 0
      }
    ],
    "total": 2,
    "pageNum": 1,
    "pageSize": 5
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultPageResultOrder](#schemaresultpageresultorder)|

## GET 根据id查询订单详情

GET /order/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |none|
|sa_token|header|string| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": {
    "id": 0,
    "userId": 0,
    "itemId": 0,
    "itemName": "",
    "itemDescription": "",
    "itemPrice": 0,
    "quantity": 0,
    "totalAmount": 0,
    "status": 0,
    "createTime": "",
    "updateTime": ""
  }
}
```

```json
{
  "code": 0,
  "msg": "查询成功",
  "error": null,
  "data": {
    "id": 1,
    "userId": 1,
    "itemId": 2,
    "itemName": "笔记本电脑321",
    "itemDescription": null,
    "itemPrice": 6424.52,
    "quantity": 1,
    "totalAmount": null,
    "status": 0,
    "createTime": "2025-12-23T11:30:15.000+00:00",
    "updateTime": "2025-12-23T11:30:15.000+00:00"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultOrderDetailVO](#schemaresultorderdetailvo)|

## DELETE 删除订单

DELETE /order/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |none|
|sa_token|header|string| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": ""
}
```

```json
{
  "code": 0,
  "msg": "",
  "error": null,
  "data": "删除成功"
}
```

```json
{
  "code": 0,
  "msg": "",
  "error": null,
  "data": "删除成功"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultString](#schemaresultstring)|

## POST 创建订单

POST /order

> Body 请求参数

```json
{
  "userId": 1,
  "itemId": 2,
  "quantity": 2
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sa_token|header|string| 否 |none|
|body|body|[OrderDTO](#schemaorderdto)| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": {
    "id": 0,
    "userId": 0,
    "itemId": 0,
    "quantity": 0,
    "totalPrice": 0,
    "status": 0,
    "address": "",
    "phone": "",
    "receiver": "",
    "createTime": "",
    "updateTime": "",
    "delFlag": 0
  }
}
```

```json
{
  "code": 0,
  "msg": "创建成功",
  "error": null,
  "data": {
    "id": 3,
    "userId": 1,
    "itemId": 2,
    "quantity": 2,
    "totalPrice": 12849.04,
    "status": 0,
    "address": null,
    "phone": null,
    "receiver": null,
    "createTime": null,
    "updateTime": null,
    "delFlag": null
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultOrder](#schemaresultorder)|

## PUT 更新订单状态

PUT /order/status

> Body 请求参数

```json
{
  "id": 1,
  "status": 1
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sa_token|header|string| 否 |none|
|body|body|[OrderStatusUpdateDTO](#schemaorderstatusupdatedto)| 否 |none|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": ""
}
```

```json
{
  "code": 0,
  "msg": "",
  "error": null,
  "data": "更新成功"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultString](#schemaresultstring)|

# 文件上传

## POST 文件上传

POST /upload

> Body 请求参数

```yaml
file: file://D:\zhili\src\main\resources\template\高三课表.xlsx

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|path|query|string| 是 |文件上传路径（必须要以“/”开始，“/”结束，否则会出问题）|
|sa_token|header|string| 否 |none|
|body|body|object| 否 |none|
|» file|body|string(binary)| 是 |源文件|

> 返回示例

```json
{
  "code": 0,
  "msg": "",
  "error": "",
  "data": ""
}
```

```json
{
  "code": 0,
  "msg": "文件上传成功",
  "error": null,
  "data": "https://sssycamore.cn-beijing/克劳德.png"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultString](#schemaresultstring)|

# 数据模型

<h2 id="tocS_Item">Item</h2>

<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "price": 0,
  "stock": 0,
  "userId": 0,
  "category": "string",
  "imageUrl": "string",
  "status": 0,
  "viewCount": 0,
  "createTime": "string",
  "updateTime": "string",
  "delFlag": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|false|none||none|
|name|string|false|none||none|
|description|string|false|none||none|
|price|number|false|none||none|
|stock|integer|false|none||none|
|userId|integer|false|none||none|
|category|string|false|none||none|
|imageUrl|string|false|none||none|
|status|integer|false|none||0: 上架, 1: 下架, 2: 已售出|
|viewCount|integer|false|none||none|
|createTime|string|false|none||none|
|updateTime|string|false|none||none|
|delFlag|integer|false|none||none|

<h2 id="tocS_PageResultItem">PageResultItem</h2>

<a id="schemapageresultitem"></a>
<a id="schema_PageResultItem"></a>
<a id="tocSpageresultitem"></a>
<a id="tocspageresultitem"></a>

```json
{
  "data": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "price": 0,
      "stock": 0,
      "userId": 0,
      "category": "string",
      "imageUrl": "string",
      "status": 0,
      "viewCount": 0,
      "createTime": "string",
      "updateTime": "string",
      "delFlag": 0
    }
  ],
  "total": 0,
  "pageNum": 0,
  "pageSize": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|data|[[Item](#schemaitem)]|false|none||none|
|total|integer(int64)|false|none||none|
|pageNum|integer|false|none||none|
|pageSize|integer|false|none||none|

<h2 id="tocS_ResultPageResultItem">ResultPageResultItem</h2>

<a id="schemaresultpageresultitem"></a>
<a id="schema_ResultPageResultItem"></a>
<a id="tocSresultpageresultitem"></a>
<a id="tocsresultpageresultitem"></a>

```json
{
  "code": 0,
  "msg": "string",
  "error": "string",
  "data": {
    "data": [
      {
        "id": 0,
        "name": "string",
        "description": "string",
        "price": 0,
        "stock": 0,
        "userId": 0,
        "category": "string",
        "imageUrl": "string",
        "status": 0,
        "viewCount": 0,
        "createTime": "string",
        "updateTime": "string",
        "delFlag": 0
      }
    ],
    "total": 0,
    "pageNum": 0,
    "pageSize": 0
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|msg|string|false|none||none|
|error|string|false|none||none|
|data|[PageResultItem](#schemapageresultitem)|false|none||none|

<h2 id="tocS_ItemPageQueryDTO">ItemPageQueryDTO</h2>

<a id="schemaitempagequerydto"></a>
<a id="schema_ItemPageQueryDTO"></a>
<a id="tocSitempagequerydto"></a>
<a id="tocsitempagequerydto"></a>

```json
{
  "pageNum": 1,
  "pageSize": 10,
  "name": "string",
  "category": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|pageNum|integer|false|none||none|
|pageSize|integer|false|none||none|
|name|string|false|none||none|
|category|string|false|none||none|

<h2 id="tocS_ResultItem">ResultItem</h2>

<a id="schemaresultitem"></a>
<a id="schema_ResultItem"></a>
<a id="tocSresultitem"></a>
<a id="tocsresultitem"></a>

```json
{
  "code": 0,
  "msg": "string",
  "error": "string",
  "data": {
    "id": 0,
    "name": "string",
    "description": "string",
    "price": 0,
    "stock": 0,
    "userId": 0,
    "category": "string",
    "imageUrl": "string",
    "status": 0,
    "viewCount": 0,
    "createTime": "string",
    "updateTime": "string",
    "delFlag": 0
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|msg|string|false|none||none|
|error|string|false|none||none|
|data|[Item](#schemaitem)|false|none||none|

<h2 id="tocS_ItemDTO">ItemDTO</h2>

<a id="schemaitemdto"></a>
<a id="schema_ItemDTO"></a>
<a id="tocSitemdto"></a>
<a id="tocsitemdto"></a>

```json
{
  "name": "string",
  "description": "string",
  "price": 0,
  "stock": 0,
  "category": "string",
  "status": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|false|none||none|
|description|string|false|none||none|
|price|number|false|none||none|
|stock|integer|false|none||none|
|category|string|false|none||none|
|status|integer|false|none||none|

<h2 id="tocS_ResultString">ResultString</h2>

<a id="schemaresultstring"></a>
<a id="schema_ResultString"></a>
<a id="tocSresultstring"></a>
<a id="tocsresultstring"></a>

```json
{
  "code": 0,
  "msg": "string",
  "error": "string",
  "data": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|msg|string|false|none||none|
|error|string|false|none||none|
|data|string|false|none||none|

<h2 id="tocS_ItemUpdateDTO">ItemUpdateDTO</h2>

<a id="schemaitemupdatedto"></a>
<a id="schema_ItemUpdateDTO"></a>
<a id="tocSitemupdatedto"></a>
<a id="tocsitemupdatedto"></a>

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "stock": 0,
  "category": "string",
  "status": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|false|none||none|
|name|string|false|none||none|
|description|string|false|none||none|
|stock|integer|false|none||none|
|category|string|false|none||none|
|status|integer|false|none||none|

<h2 id="tocS_ResultListItem">ResultListItem</h2>

<a id="schemaresultlistitem"></a>
<a id="schema_ResultListItem"></a>
<a id="tocSresultlistitem"></a>
<a id="tocsresultlistitem"></a>

```json
{
  "code": 0,
  "msg": "string",
  "error": "string",
  "data": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "price": 0,
      "stock": 0,
      "userId": 0,
      "category": "string",
      "imageUrl": "string",
      "status": 0,
      "viewCount": 0,
      "createTime": "string",
      "updateTime": "string",
      "delFlag": 0
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|msg|string|false|none||none|
|error|string|false|none||none|
|data|[[Item](#schemaitem)]|false|none||none|

<h2 id="tocS_SaTokenInfo">SaTokenInfo</h2>

<a id="schemasatokeninfo"></a>
<a id="schema_SaTokenInfo"></a>
<a id="tocSsatokeninfo"></a>
<a id="tocssatokeninfo"></a>

```json
{
  "tokenName": "string",
  "tokenValue": "string",
  "isLogin": true,
  "loginId": {},
  "loginType": "string",
  "tokenTimeout": 0,
  "sessionTimeout": 0,
  "tokenSessionTimeout": 0,
  "tokenActiveTimeout": 0,
  "loginDeviceType": "string",
  "tag": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|tokenName|string|false|none||none|
|tokenValue|string|false|none||none|
|isLogin|boolean|false|none||none|
|loginId|object|false|none||none|
|loginType|string|false|none||none|
|tokenTimeout|integer(int64)|false|none||none|
|sessionTimeout|integer(int64)|false|none||none|
|tokenSessionTimeout|integer(int64)|false|none||none|
|tokenActiveTimeout|integer(int64)|false|none||none|
|loginDeviceType|string|false|none||none|
|tag|string|false|none||none|

<h2 id="tocS_LoginResultVO">LoginResultVO</h2>

<a id="schemaloginresultvo"></a>
<a id="schema_LoginResultVO"></a>
<a id="tocSloginresultvo"></a>
<a id="tocsloginresultvo"></a>

```json
{
  "tokenInfo": {
    "tokenName": "string",
    "tokenValue": "string",
    "isLogin": true,
    "loginId": {},
    "loginType": "string",
    "tokenTimeout": 0,
    "sessionTimeout": 0,
    "tokenSessionTimeout": 0,
    "tokenActiveTimeout": 0,
    "loginDeviceType": "string",
    "tag": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|tokenInfo|[SaTokenInfo](#schemasatokeninfo)|false|none||none|

<h2 id="tocS_ResultLoginResultVO">ResultLoginResultVO</h2>

<a id="schemaresultloginresultvo"></a>
<a id="schema_ResultLoginResultVO"></a>
<a id="tocSresultloginresultvo"></a>
<a id="tocsresultloginresultvo"></a>

```json
{
  "code": 0,
  "msg": "string",
  "error": "string",
  "data": {
    "tokenInfo": {
      "tokenName": "string",
      "tokenValue": "string",
      "isLogin": true,
      "loginId": {},
      "loginType": "string",
      "tokenTimeout": 0,
      "sessionTimeout": 0,
      "tokenSessionTimeout": 0,
      "tokenActiveTimeout": 0,
      "loginDeviceType": "string",
      "tag": "string"
    }
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|msg|string|false|none||none|
|error|string|false|none||none|
|data|[LoginResultVO](#schemaloginresultvo)|false|none||none|

<h2 id="tocS_UserDTO">UserDTO</h2>

<a id="schemauserdto"></a>
<a id="schema_UserDTO"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "id": 0,
  "username": "string",
  "password": "string",
  "newPassword": "string",
  "code": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|false|none||none|
|username|string|false|none||none|
|password|string|false|none||none|
|newPassword|string|false|none||none|
|code|string|false|none||none|

<h2 id="tocS_Order">Order</h2>

<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "id": 0,
  "userId": 0,
  "itemId": 0,
  "quantity": 0,
  "totalPrice": 0,
  "status": 0,
  "address": "string",
  "phone": "string",
  "receiver": "string",
  "createTime": "string",
  "updateTime": "string",
  "delFlag": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|false|none||none|
|userId|integer|false|none||none|
|itemId|integer|false|none||none|
|quantity|integer|false|none||none|
|totalPrice|number|false|none||none|
|status|integer|false|none||0: 待付款, 1: 已付款, 2: 已发货, 3: 已完成, 4: 已取消|
|address|string|false|none||none|
|phone|string|false|none||none|
|receiver|string|false|none||none|
|createTime|string|false|none||none|
|updateTime|string|false|none||none|
|delFlag|integer|false|none||none|

<h2 id="tocS_PageResultOrder">PageResultOrder</h2>

<a id="schemapageresultorder"></a>
<a id="schema_PageResultOrder"></a>
<a id="tocSpageresultorder"></a>
<a id="tocspageresultorder"></a>

```json
{
  "data": [
    {
      "id": 0,
      "userId": 0,
      "itemId": 0,
      "quantity": 0,
      "totalPrice": 0,
      "status": 0,
      "address": "string",
      "phone": "string",
      "receiver": "string",
      "createTime": "string",
      "updateTime": "string",
      "delFlag": 0
    }
  ],
  "total": 0,
  "pageNum": 0,
  "pageSize": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|data|[[Order](#schemaorder)]|false|none||none|
|total|integer(int64)|false|none||none|
|pageNum|integer|false|none||none|
|pageSize|integer|false|none||none|

<h2 id="tocS_ResultPageResultOrder">ResultPageResultOrder</h2>

<a id="schemaresultpageresultorder"></a>
<a id="schema_ResultPageResultOrder"></a>
<a id="tocSresultpageresultorder"></a>
<a id="tocsresultpageresultorder"></a>

```json
{
  "code": 0,
  "msg": "string",
  "error": "string",
  "data": {
    "data": [
      {
        "id": 0,
        "userId": 0,
        "itemId": 0,
        "quantity": 0,
        "totalPrice": 0,
        "status": 0,
        "address": "string",
        "phone": "string",
        "receiver": "string",
        "createTime": "string",
        "updateTime": "string",
        "delFlag": 0
      }
    ],
    "total": 0,
    "pageNum": 0,
    "pageSize": 0
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|msg|string|false|none||none|
|error|string|false|none||none|
|data|[PageResultOrder](#schemapageresultorder)|false|none||none|

<h2 id="tocS_OrderPageQueryDTO">OrderPageQueryDTO</h2>

<a id="schemaorderpagequerydto"></a>
<a id="schema_OrderPageQueryDTO"></a>
<a id="tocSorderpagequerydto"></a>
<a id="tocsorderpagequerydto"></a>

```json
{
  "pageNum": 1,
  "pageSize": 10,
  "status": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|pageNum|integer|false|none||none|
|pageSize|integer|false|none||none|
|status|integer|false|none||none|

<h2 id="tocS_OrderDetailVO">OrderDetailVO</h2>

<a id="schemaorderdetailvo"></a>
<a id="schema_OrderDetailVO"></a>
<a id="tocSorderdetailvo"></a>
<a id="tocsorderdetailvo"></a>

```json
{
  "id": 0,
  "userId": 0,
  "itemId": 0,
  "itemName": "string",
  "itemDescription": "string",
  "itemPrice": 0,
  "quantity": 0,
  "totalAmount": 0,
  "status": 0,
  "createTime": "string",
  "updateTime": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|false|none||none|
|userId|integer|false|none||none|
|itemId|integer|false|none||none|
|itemName|string|false|none||none|
|itemDescription|string|false|none||none|
|itemPrice|number|false|none||none|
|quantity|integer|false|none||none|
|totalAmount|number|false|none||none|
|status|integer|false|none||none|
|createTime|string|false|none||none|
|updateTime|string|false|none||none|

<h2 id="tocS_ResultOrderDetailVO">ResultOrderDetailVO</h2>

<a id="schemaresultorderdetailvo"></a>
<a id="schema_ResultOrderDetailVO"></a>
<a id="tocSresultorderdetailvo"></a>
<a id="tocsresultorderdetailvo"></a>

```json
{
  "code": 0,
  "msg": "string",
  "error": "string",
  "data": {
    "id": 0,
    "userId": 0,
    "itemId": 0,
    "itemName": "string",
    "itemDescription": "string",
    "itemPrice": 0,
    "quantity": 0,
    "totalAmount": 0,
    "status": 0,
    "createTime": "string",
    "updateTime": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|msg|string|false|none||none|
|error|string|false|none||none|
|data|[OrderDetailVO](#schemaorderdetailvo)|false|none||none|

<h2 id="tocS_ResultOrder">ResultOrder</h2>

<a id="schemaresultorder"></a>
<a id="schema_ResultOrder"></a>
<a id="tocSresultorder"></a>
<a id="tocsresultorder"></a>

```json
{
  "code": 0,
  "msg": "string",
  "error": "string",
  "data": {
    "id": 0,
    "userId": 0,
    "itemId": 0,
    "quantity": 0,
    "totalPrice": 0,
    "status": 0,
    "address": "string",
    "phone": "string",
    "receiver": "string",
    "createTime": "string",
    "updateTime": "string",
    "delFlag": 0
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|msg|string|false|none||none|
|error|string|false|none||none|
|data|[Order](#schemaorder)|false|none||none|

<h2 id="tocS_OrderDTO">OrderDTO</h2>

<a id="schemaorderdto"></a>
<a id="schema_OrderDTO"></a>
<a id="tocSorderdto"></a>
<a id="tocsorderdto"></a>

```json
{
  "userId": 0,
  "itemId": 0,
  "quantity": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|userId|integer|false|none||none|
|itemId|integer|false|none||none|
|quantity|integer|false|none||none|

<h2 id="tocS_OrderStatusUpdateDTO">OrderStatusUpdateDTO</h2>

<a id="schemaorderstatusupdatedto"></a>
<a id="schema_OrderStatusUpdateDTO"></a>
<a id="tocSorderstatusupdatedto"></a>
<a id="tocsorderstatusupdatedto"></a>

```json
{
  "id": 0,
  "status": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|false|none||none|
|status|integer|false|none||none|

