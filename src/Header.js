import React from "react"
// eslint-disable-next-line
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { HomeOutlined, AlipayOutlined, LinkOutlined, WechatOutlined, createFromIconfontCN } from '@ant-design/icons';

const { Header } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1391414_3pgia1sjdte.js',
});

class Headers extends React.Component {

  render(){ 
    const { SubMenu } = Menu;

      function handleClick(e) {
      }
    return (
    <Header className="header" style={{ padding: "0px", height: "64px", lineHeight: "64px" }}>
      <Menu theme="light" mode="horizontal" style={{ lineHeight: "64px" }} className="icons-list" onClick={handleClick}>
        <Menu.Item key="home">
          <NavLink to="/">
            <HomeOutlined /> 主页
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Alipay">
          <NavLink to="/Alipay">
            <AlipayOutlined />支付宝
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Union">
          <NavLink to="/UnionPay" >
            <IconFont type="icon-unionpay" /> 银联
        </NavLink>
        </Menu.Item>
        <SubMenu key="currency" title={
          <><LinkOutlined /> 虚拟货币 </>
        }>
          
        <Menu.Item key="BTC">
      <NavLink to="/BTC" >
        <IconFont type="icon-bitcoin" /> BTC
        </NavLink>
    </Menu.Item>
    <Menu.Item key="USDT">
      <NavLink to="/USDT" >
        <IconFont type="icon-USDT" /> USDT
        </NavLink>
    </Menu.Item>
    <Menu.Item key="DOGE">
      <NavLink to="/DOGE" >
        <IconFont type="icon-DOGE" /> DOGE
        </NavLink>
    </Menu.Item>
      </SubMenu>
        <Menu.Item key="wechat" disabled>
          <NavLink to="/WeChatPay">
            <WechatOutlined /> 微信
          </NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
  }
}

export default Headers
