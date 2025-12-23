import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Form, Input, message, Modal } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { getItemPage, deleteItem } from '../../api/item';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const fetchData = async (params = {}) => {
    setLoading(true);
    try {
      const res = await getItemPage({
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
          await deleteItem(id);
          message.success('删除成功');
          fetchData();
        } catch (error) {
          console.error(error);
        }
      },
    });
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '名称', dataIndex: 'name', key: 'name' },
    { title: '分类', dataIndex: 'category', key: 'category' },
    { title: '价格', dataIndex: 'price', key: 'price' },
    { title: '库存', dataIndex: 'stock', key: 'stock' },
    { title: '状态', dataIndex: 'status', key: 'status', render: (status) => status === 0 ? '上架' : '下架' },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => navigate(`/item/${record.id}`)}>编辑</Button>
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
        <Form.Item name="name">
          <Input placeholder="商品名称" />
        </Form.Item>
        <Form.Item name="category">
          <Input placeholder="分类" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<SearchOutlined />} onClick={() => fetchData({ current: 1 })}>查询</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => navigate('/item/create')}>新增</Button>
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

export default ItemList;
