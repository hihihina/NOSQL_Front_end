import React, { useEffect, useState } from 'react';
import { Card, List, Row, Col, Tag, Avatar, Typography } from 'antd';
import { FireOutlined, HistoryOutlined, EyeOutlined, ShoppingOutlined } from '@ant-design/icons';
import { getHotItems, getViewHistory } from '../../api/item';

const { Text } = Typography;

const Dashboard = () => {
  const [hotItems, setHotItems] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hotRes, historyRes] = await Promise.all([
          getHotItems({ limit: 10 }),
          getViewHistory()
        ]);
        setHotItems(hotRes || []);
        setHistoryItems(historyRes || []);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card 
            title={<><FireOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />热门商品榜单 (Top 10)</>} 
            loading={loading}
            bordered={false}
            style={{ height: '100%' }}
          >
            <List
              itemLayout="horizontal"
              dataSource={hotItems}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <div style={{ position: 'relative' }}>
                        <Avatar src={item.imageUrl} shape="square" size={64} icon={<ShoppingOutlined />} />
                        <Tag 
                          color={index < 3 ? '#f50' : '#d9d9d9'} 
                          style={{ 
                            position: 'absolute', 
                            top: -8, 
                            left: -8, 
                            margin: 0,
                            borderRadius: '50%',
                            width: 24,
                            height: 24,
                            textAlign: 'center',
                            lineHeight: '22px',
                            padding: 0
                          }}
                        >
                          {index + 1}
                        </Tag>
                      </div>
                    }
                    title={<Text strong>{item.name}</Text>}
                    description={
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Text type="secondary" style={{ fontSize: 12 }}>{item.description || '暂无描述'}</Text>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Text type="danger" strong>¥{item.price}</Text>
                          <Text type="secondary"><EyeOutlined /> {item.viewCount} 次浏览</Text>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card 
            title={<><HistoryOutlined style={{ color: '#1890ff', marginRight: 8 }} />最近浏览记录</>} 
            loading={loading}
            bordered={false}
            style={{ height: '100%' }}
          >
            <List
              itemLayout="horizontal"
              dataSource={historyItems}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.imageUrl} shape="square" size="large" icon={<ShoppingOutlined />} />}
                    title={item.name}
                    description={
                      <div>
                        <Tag>{item.category}</Tag>
                        <Text type="secondary" style={{ marginLeft: 8 }}>¥{item.price}</Text>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
