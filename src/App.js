import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Layout, Typography, Button, Alert } from 'antd';
import Headers from './Header'
import QRCodeReact from 'qrcode.react'
import DonateTables from './DonateTables'

const { Title, Text } = Typography;
const { Footer } = Layout;

function App() {
  return (
      <Layout style={{ minHeight:"100vh" }}>
        <Router>
          <Headers />
          <Layout>
            <Layout style={{ padding: "24px" }}>
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/Alipay" component={Alipay} />
                <Route path="/AlipayOrder" component={AlipayOrder} />
                <Route path="/AlipayCoupon" component={AlipayCoupon} />
                <Route path="/WeChatPay" component={WeChatPay} />
                <Route path="/UnionPayCoupon" component={UnionPayCoupon} />
                <Route path="/UnionPay" component={UnionPay} />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Layout>
        </Router>
        <Footer style={{ textAlign: 'center' }}>Copyright © 2015 - 2019 <a href="https://uv.uy" target="_blank" rel="external noopener noreferrer">Edison Jwa</a>. All rights reserved.</Footer>
      </Layout>
    
  );
}

export default App;

function Index() {
  return <div id="Index" >
    <div align="center">
    <Title level={3}>赞助与付款</Title><br />
    <Text>感谢您的支持。</Text><br /><br />
    <Text>目前接受的付款方式有 支付宝，<Text delete>微信</Text>，银联云闪付</Text><br /><br />
    <Text>赞助列表将展示在此处</Text><br /><br />
    <Text>金额小于1元人民币的交易信息将不会记录。</Text><br /><br />
    <Text>很难准时更新，但是我会尽可能避免遗漏。</Text><br /><br />
    <Title level={4}>赞助列表</Title><br />
    </div>
    <DonateTables />
    
  </div>;
}

function Alipay() {
  return <div id="Alipay" align="center">
    <Title level={3}>支付宝付款</Title><br />
    <QRCodeReact renderAs="svg" size="200" value="https://qr.alipay.com/tsx0030028m0ppqbhreqs8e" /><br /><br />
    <Button type="primary" href="https://qr.alipay.com/tsx0030028m0ppqbhreqs8e" target="_blank" >点击付款</Button>
  </div>;
}

function AlipayOrder() {
  return <div id="AlipayOrder" align="center">
    <Title level={3}>支付宝点单</Title><br />
    <QRCodeReact renderAs="svg" size='200' value="https://qr.alipay.com/00c01809qtt0c2uxrz4qp05" /><br /><br />
    <Button type="primary" href="https://qr.alipay.com/00c01809qtt0c2uxrz4qp05" target="_blank" >点击下单</Button>
  </div>;
}

function AlipayCoupon() {
  return <div id="AlipayCoupon" align="center">
    <Title level={3}>支付宝红包</Title><br />
    <QRCodeReact renderAs="svg" size="200" value="QUmlc1x06696td2v0womxjkz2e5eQ0" /><br /><br />
    <Text>打开支付宝扫描上方二维码或<br />在首页搜“ <Text type="danger" strong code copyable>1380937</Text> ”领红包</Text>
  </div>;
}

function WeChatPay() {
  return <div id="WeChatPay" align="center">
    <Title type="danger" level={3}>暂不支持微信收款</Title>

  </div>;
}

function UnionPayCoupon() {
  return <div id="UnionPayCoupon" align="center">
    <Title level={3}>云闪付红包</Title><br />
    <QRCodeReact renderAs="svg" size="200" value="https://wallet.95516.com/s/wl/webV3/activity/vMarketing2/html/snsIndex.html?r=725aba45364e6cf48c6b044fb9069197" /><br /><br />
    <Button type="primary" href="https://wallet.95516.com/s/wl/webV3/activity/vMarketing2/html/snsIndex.html?r=725aba45364e6cf48c6b044fb9069197" target="_blank" >点击领取</Button>
  </div>;
}

function UnionPay() {
  return <div id="UnionPay" align="center">
    <Title level={3}> 云闪付付款</Title><br />
    <QRCodeReact renderAs="svg" size="200" value="https://qr.95516.com/00010002/01012123571890753265718637730182" /><br /><br />
    <Text>打开云闪付App、银行App<br />和热门App的首页扫码功能轻松支付</Text>
  </div>;
}

function NoMatch({ location }) {

  let errorMessage = "找不到请求的URL " + location.pathname;

  return (
    <div id="NoMatch" align="center">
      <Alert
        message="错误"
        description={errorMessage}
        type="error"
        closable /><br />
        <Index />
    </div>
  );
}