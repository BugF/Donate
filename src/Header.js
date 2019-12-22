import React from "react"
// eslint-disable-next-line
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: 'https://at.alicdn.com/t/font_1391414_7sszpif7ro.js',
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
            <Icon type="home" /> 主页
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Alipay">
          <NavLink to="/Alipay">
            <Icon type="alipay" />支付宝
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Union">
          <NavLink to="/UnionPay" >
            <IconFont type="icon-unionpay" /> 银联
        </NavLink>
        </Menu.Item>
        <SubMenu key="currency" title={
          <><Icon type="link" /> 虚拟货币 </>
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
      </SubMenu>
        <Menu.Item key="wechat" disabled>
          <NavLink to="/WeChatPay">
            <Icon type="wechat" /> 微信
              </NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
  }
}

export default Headers
