import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, Select, message, Card, Upload, Modal } from 'antd';
import { UploadOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { createItem, updateItem, getItemDetail } from '../../api/item';
import { createOrder } from '../../api/order';
import { uploadFile } from '../../api/upload';
import { useNavigate, useParams } from 'react-router-dom';

const ItemDetail = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [orderModalVisible, setOrderModalVisible] = useState(false);
  const [orderForm] = Form.useForm();

  useEffect(() => {
    if (id) {
      fetchDetail();
    }
  }, [id]);

  const fetchDetail = async () => {
    try {
      const res = await getItemDetail(id);
      form.setFieldsValue(res);
      setImageUrl(res.imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      if (id) {
        await updateItem({ ...values, id, imageUrl });
        message.success('更新成功');
      } else {
        await createItem({ ...values, imageUrl });
        message.success('创建成功');
      }
      navigate('/item');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const customRequest = async ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await uploadFile(formData, '/item-images/');
      setImageUrl(res);
      onSuccess(res);
      message.success('上传成功');
    } catch (error) {
      onError(error);
      message.error('上传失败');
    }
  };

  const handleOrder = () => {
    if (!id) {
      message.error('商品信息不存在');
      return;
    }
    const itemData = form.getFieldsValue();
    if (!itemData.name || itemData.stock <= 0) {
      message.error('商品信息不完整或库存不足');
      return;
    }
    orderForm.setFieldsValue({
      itemName: itemData.name,
      price: itemData.price,
      maxStock: itemData.stock,
      quantity: 1
    });
    setOrderModalVisible(true);
  };

  const handleOrderSubmit = async (values) => {
    setOrderLoading(true);
    try {
      // 这里暂时使用固定的userId=1，实际应该从登录状态获取
      const orderData = {
        userId: 1,
        itemId: parseInt(id),
        quantity: values.quantity
      };
      await createOrder(orderData);
      message.success('下单成功！');
      setOrderModalVisible(false);
      orderForm.resetFields();
      // 跳转到订单列表
      navigate('/order');
    } catch (error) {
      console.error(error);
      message.error('下单失败，请重试');
    } finally {
      setOrderLoading(false);
    }
  };

  return (
    <>
      <Card title={id ? '编辑商品' : '新增商品'} extra={
        <div>
          {id && (
            <Button 
              type="primary" 
              icon={<ShoppingCartOutlined />} 
              onClick={handleOrder}
              style={{ marginRight: 8 }}
            >
              立即下单
            </Button>
          )}
          <Button onClick={() => navigate('/item')}>返回</Button>
        </div>
      }>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ status: 0 }}
        >
          <Form.Item name="name" label="商品名称" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="category" label="分类" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="price" label="价格" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} precision={2} />
          </Form.Item>
          <Form.Item name="stock" label="库存" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} min={0} precision={0} />
          </Form.Item>
          <Form.Item name="description" label="描述">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label="图片">
            <Upload customRequest={customRequest} showUploadList={false}>
              <Button icon={<UploadOutlined />}>上传图片</Button>
            </Upload>
            {imageUrl && <img src={imageUrl} alt="item" style={{ marginTop: 10, maxWidth: 200 }} />}
          </Form.Item>
          <Form.Item name="status" label="状态">
            <Select>
              <Select.Option value={0}>上架</Select.Option>
              <Select.Option value={1}>下架</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              保存
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={() => navigate('/item')}>
              返回
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* 下单弹窗 */}
      <Modal
        title="确认下单"
        open={orderModalVisible}
        onCancel={() => setOrderModalVisible(false)}
        footer={null}
      >
        <Form
          form={orderForm}
          layout="vertical"
          onFinish={handleOrderSubmit}
        >
          <Form.Item label="商品名称" name="itemName">
            <Input disabled />
          </Form.Item>
          <Form.Item label="商品价格" name="price">
            <InputNumber disabled style={{ width: '100%' }} precision={2} />
          </Form.Item>
          <Form.Item 
            label="购买数量" 
            name="quantity" 
            rules={[
              { required: true, message: '请输入购买数量' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const maxStock = getFieldValue('maxStock');
                  if (value && value > 0 && value <= maxStock) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(`数量必须在1-${maxStock}之间`));
                },
              }),
            ]}
          >
            <InputNumber 
              style={{ width: '100%' }} 
              min={1} 
              precision={0}
              placeholder="请输入购买数量"
            />
          </Form.Item>
          <Form.Item name="maxStock" hidden>
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={orderLoading} style={{ marginRight: 8 }}>
              确认下单
            </Button>
            <Button onClick={() => setOrderModalVisible(false)}>
              取消
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ItemDetail;
