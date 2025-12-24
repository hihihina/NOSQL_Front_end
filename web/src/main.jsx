import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ConfigProvider locale={zhCN}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ConfigProvider>,
)
