import React, { useState } from 'react';
import { Form, Input, Button, Card, Tabs, message } from 'antd';
import { UserOutlined, LockOutlined, MobileOutlined, MailOutlined } from '@ant-design/icons';
import { login, loginByCode, sendCode } from '../api/user';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('account');

  const onFinish = async (values) => {
    setLoading(true);
    try {
      let res;
      if (activeTab === 'account') {
        res = await login(values);
      } else {
        res = await loginByCode(values);
      }
      localStorage.setItem('sa_token', res.tokenInfo.tokenValue);
      message.success('登录成功');
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendCode = async () => {
    // Implementation for sending code would require getting the username from the form
    // This is a simplified version
    message.info('请先输入用户名');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
      <Card style={{ width: 400 }}>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            {
              key: 'account',
              label: '账号密码登录',
              children: (
                <Form
                  name="account_login"
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="用户名" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                  >
                    <Input.Password prefix={<LockOutlined />} placeholder="密码" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={loading}>
                      登录
                    </Button>
                  </Form.Item>
                </Form>
              ),
            },
            {
              key: 'code',
              label: '验证码登录',
              children: (
                <Form
                  name="code_login"
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="用户名" />
                  </Form.Item>
                  <Form.Item
                    name="code"
                    rules={[{ required: true, message: '请输入验证码!' }]}
                  >
                    <div style={{ display: 'flex', gap: 8 }}>
                      <Input prefix={<MailOutlined />} placeholder="验证码" />
                      <Button onClick={handleSendCode}>获取验证码</Button>
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={loading}>
                      登录
                    </Button>
                  </Form.Item>
                </Form>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default Login;
