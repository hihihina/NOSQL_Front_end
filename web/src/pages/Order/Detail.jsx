import React, { useEffect, useState } from 'react';
import { Descriptions, Button, Card, Select, message, Tag } from 'antd';
import { getOrderDetail, updateOrderStatus } from '../../api/order';
import { useNavigate, useParams } from 'react-router-dom';

const OrderDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetchDetail();
    }
  }, [id]);

  const fetchDetail = async () => {
    try {
      const res = await getOrderDetail(id);
      setDetail(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatusChange = async (value) => {
    setLoading(true);
    try {
      await updateOrderStatus({ id, status: value });
      message.success('状态更新成功');
      fetchDetail();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const statusMap = {
    0: { text: '待付款', color: 'default' },
    1: { text: '已付款', color: 'processing' },
    2: { text: '已发货', color: 'warning' },
    3: { text: '已完成', color: 'success' },
    4: { text: '已取消', color: 'error' },
  };

  if (!detail) return null;

  return (
    <Card title="订单详情" extra={<Button onClick={() => navigate('/order')}>返回</Button>}>
      <Descriptions bordered column={2}>
        <Descriptions.Item label="订单ID">{detail.id}</Descriptions.Item>
        <Descriptions.Item label="用户ID">{detail.userId}</Descriptions.Item>
        <Descriptions.Item label="商品名称">{detail.itemName}</Descriptions.Item>
        <Descriptions.Item label="商品描述">{detail.itemDescription}</Descriptions.Item>
        <Descriptions.Item label="商品价格">{detail.itemPrice}</Descriptions.Item>
        <Descriptions.Item label="数量">{detail.quantity}</Descriptions.Item>
        <Descriptions.Item label="总金额">{detail.totalAmount}</Descriptions.Item>
        <Descriptions.Item label="状态">
          <Tag color={statusMap[detail.status]?.color}>{statusMap[detail.status]?.text}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="创建时间">{detail.createTime}</Descriptions.Item>
        <Descriptions.Item label="更新时间">{detail.updateTime}</Descriptions.Item>
      </Descriptions>
      
      <div style={{ marginTop: 24 }}>
        <span style={{ marginRight: 16 }}>更新状态:</span>
        <Select
          value={detail.status}
          style={{ width: 120 }}
          onChange={handleStatusChange}
          loading={loading}
        >
          {Object.entries(statusMap).map(([key, value]) => (
            <Select.Option key={key} value={parseInt(key)}>{value.text}</Select.Option>
          ))}
        </Select>
      </div>
    </Card>
  );
};

export default OrderDetail;
