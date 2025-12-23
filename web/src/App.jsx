import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';
import ItemList from './pages/Item/List';
import ItemDetail from './pages/Item/Detail';
import OrderList from './pages/Order/List';
import OrderDetail from './pages/Order/Detail';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="item" element={<ItemList />} />
        <Route path="item/create" element={<ItemDetail />} />
        <Route path="item/:id" element={<ItemDetail />} />
        <Route path="order" element={<OrderList />} />
        <Route path="order/:id" element={<OrderDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
