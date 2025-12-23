import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Form, Select, message, Modal, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getOrderPage, deleteOrder } from '../../api/order';
import { useNavigate } from 'react-router-dom';

const OrderList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const fetchData = async (params = {}) => {
    setLoading(true);
    try {
      const res = await getOrderPage({
        pageNum: params.current || pagination.current,
        pageSize: params.pageSize || pagination.pageSize,
        ...form.getFieldsValue(),
      });
      setData(res.data);
      setPagination({
        ...pagination,
        current: res.pageNum,
        pageSize: res.pageSize,
        total: res.total,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    Modal.confirm({
      title: '确认删除?',
      onOk: async () => {
        try {
          await deleteOrder(id);
          message.success('删除成功');
          fetchData();
        } catch (error) {
          console.error(error);
        }
      },
    });
  };

  const statusMap = {
    0: { text: '待付款', color: 'default' },
    1: { text: '已付款', color: 'processing' },
    2: { text: '已发货', color: 'warning' },
    3: { text: '已完成', color: 'success' },
    4: { text: '已取消', color: 'error' },
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '用户ID', dataIndex: 'userId', key: 'userId' },
    { title: '商品ID', dataIndex: 'itemId', key: 'itemId' },
    { title: '数量', dataIndex: 'quantity', key: 'quantity' },
    { title: '总价', dataIndex: 'totalPrice', key: 'totalPrice' },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <Tag color={statusMap[status]?.color}>{statusMap[status]?.text}</Tag>
    },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => navigate(`/order/${record.id}`)}>详情</Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>删除</Button>
        </Space>
      ),
    },
  ];

  const handleTableChange = (pagination) => {
    fetchData({ current: pagination.current, pageSize: pagination.pageSize });
  };

  return (
    <div>
      <Form form={form} layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item name="status">
          <Select placeholder="订单状态" style={{ width: 120 }} allowClear>
            {Object.entries(statusMap).map(([key, value]) => (
              <Select.Option key={key} value={parseInt(key)}>{value.text}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<SearchOutlined />} onClick={() => fetchData({ current: 1 })}>查询</Button>
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default OrderList;
