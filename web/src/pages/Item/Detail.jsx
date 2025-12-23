import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, Select, message, Card, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { createItem, updateItem, getItemDetail } from '../../api/item';
import { uploadFile } from '../../api/upload';
import { useNavigate, useParams } from 'react-router-dom';

const ItemDetail = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

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

  return (
    <Card title={id ? '编辑商品' : '新增商品'}>
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
  );
};

export default ItemDetail;
