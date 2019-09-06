import React from "react"
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;
const { SubMenu } = Menu;
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: 'https://at.alicdn.com/t/font_1391414_9vqulpa9ja5.js',
});

function Headers() {
  return (
    <Header className="header" style={{ padding: "0px", height: "64px", lineHeight: "64px" }} align="center">
      <Menu theme="light" mode="horizontal" style={{ lineHeight: "64px" }} className="icons-list">
        <SubMenu title={
          <span className="submenu-title-wrapper">
            <Icon type="alipay" />
            支付宝
          </span>
        }>
          <Menu.Item key="Alipay:1">
            <NavLink to="/AlipayCoupon">
              支付宝红包
              </NavLink>
          </Menu.Item>
          <Menu.Item key="Alipay:2">
            <NavLink to="/Alipay">支付宝付款</NavLink></Menu.Item>
        </SubMenu>
        <Menu.Item key="2" disabled>
          <NavLink to="/WeChatPay">
            <Icon type="wechat" /> 微信
              </NavLink></Menu.Item>
        <SubMenu title={
          <span className="submenu-title-wrapper">
            <IconFont type="icon-yinlian1193427easyiconnet" />
            银联
          </span>
        }>
          <Menu.Item key="unionpay:1"><NavLink to="/UnionPayCoupon"> 云闪付红包</NavLink></Menu.Item>
          <Menu.Item key="unionpay:2"><NavLink to="/UnionPay"> 云闪付付款</NavLink></Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default Headers