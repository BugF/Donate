import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Layout, Typography, Button, notification, Row, Col, Card } from 'antd';
import Headers from './Header'
import QRCode from 'qrcode.react'
import DonateTables from './DonateTables'
import Footers from './Footer'
// eslint-disable-next-line
const { Title, Text, Paragraph } = Typography;


function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Router>
        <Headers />
        <Layout>
          <Layout style={{ padding: "24px" }}>
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/Alipay" component={AlipayPage} />
                <Route path="/WeChatPay" component={WeChatPay} />
                <Route path="/UnionPay" component={UnionPayPage} />
                <Route path="/BTC" component={BTCPage} />
                <Route path="/USDT" component={USDTPage} />
                <Route path="/DOGE" component={DOGEPage} />
                <Route component={NoMatch} />
              </Switch>
          </Layout>
        </Layout>
      </Router>
      <Footers />
    </Layout>

  );
}

export default App;

class Index extends React.Component {
  render() {
    return <div id="Index" >
      <Row gutter={48}>
        <Col xs={48} sm={48} md={12} lg={12} xl={12} xxl={12} >
          <Card title="赞助与付款" hoverable headStyle={{ fontSize: 20 }} bodyStyle={{ fontSize: 16 }}>
            <Paragraph>
              <Text>感谢您的支持。</Text>
              <ul>
                <li>目前接受的付款方式有 支付宝，银联云闪付，BTC，USDT，DOGE</li>
                <li>赞助列表将展示在此处</li>
                <li>金额小于1元人民币的交易信息将不会记录。</li>
                <li>很难准时更新，但是我会尽可能避免遗漏。</li>
              </ul>
            </Paragraph>
          </Card>
          <br />
        </Col>
        <Col xs={48} sm={48} md={12} lg={12} xl={12} xxl={12}>
          <Card title="赞助列表" hoverable headStyle={{ fontSize: 20 }} bodyStyle={{ fontSize: 16 }}><br />
            <DonateTables />
          </Card>
        </Col>
      </Row>
    </div>
  }
}

function AlipayPage() {
  return <div id="Alipay">
    <Row gutter={48}>
      <AlipayCoupon />
      <AlipayOrder />
    </Row>
  </div>;
}

function AlipayOrder() {
  return <Col xs={48} sm={48} md={12} lg={12} xl={12} xxl={12}>
    <Card title="支付宝付款" hoverable headStyle={{ fontSize: 20 }} bodyStyle={{ fontSize: 16 }} align="center">
      <QRCode renderAs="svg" size={200} value="https://qr.alipay.com/00c01809qtt0c2uxrz4qp05" /><br /><br />
      <Button type="primary" href="https://qr.alipay.com/00c01809qtt0c2uxrz4qp05" target="_blank" >点击下单</Button>
    </Card><br />
  </Col>
}

function AlipayCoupon() {
  return <Col xs={48} sm={48} md={12} lg={12} xl={12} xxl={12}>
    <Card title="支付宝红包" hoverable headStyle={{ fontSize: 20 }} bodyStyle={{ fontSize: 16 }} align="center">
      <QRCode renderAs="svg" size={200} value="QUmlc1x06696td2v0womxjkz2e5eQ0" /><br />
      <Text>打开支付宝扫描上方二维码或<br />在首页搜“ <Text type="danger" strong code copyable>1380937</Text> ”领红包</Text>  </Card><br />
  </Col>
}

class WeChatPay extends React.Component {
  render() {
    const openNotificationWithIcon = type => {
      notification[type]({
        message: '暂不支持微信支付',
        description: '我们将在近期支持微信支付',
      });
    };
    return (
      <div id="WeChatPay" onAnimationStart={() => openNotificationWithIcon('warning')}>

        <Index />
      </div>
    )
  }
}

function UnionPayPage() {
  return <div id="UnionPay">
    <Row gutter={48}>
      <UnionPayCoupon />
      <UnionPay />
    </Row>
  </div>;
}
function BTCPage() {
  return <div id="BTC">
    <Row gutter={48}>
      <Col xs={48} sm={48} md={12} lg={12} xl={12} xxl={12}>
        <Card title="BTC 钱包" hoverable headStyle={{ fontSize: 20 }} bodyStyle={{ fontSize: 16 }} align="center">
          <QRCode renderAs="svg" size={200} value="bitcoin:Rq3j9hfzAXC7F4Ku47E7kt7sZXYWhqqV" /><br /><br />
            <Text strong code copyable>Rq3j9hfzAXC7F4Ku47E7kt7sZXYWhqqV</Text><br />
        </Card><br />
      </Col>
    </Row>
  </div>
  ;
}

function USDTPage() {
  return <div id="USDT">
    <Row gutter={48}>
      <Col xs={48} sm={48} md={12} lg={12} xl={12} xxl={12}>
        <Card title="USDT 钱包" hoverable headStyle={{ fontSize: 20 }} bodyStyle={{ fontSize: 16 }} align="center">
          <QRCode renderAs="svg" size={200} value="1AzxgSCYv1ohG4nUw2quSbfnb9R3Zp6uWH" /><br /><br />
            <Text strong code copyable>1AzxgSCYv1ohG4nUw2quSbfnb9R3Zp6uWH</Text><br />
        </Card><br />
      </Col>
    </Row>
  </div>;
}

function DOGEPage() {
  return <div id="DOGE">
    <Row gutter={48}>
      <Col xs={48} sm={48} md={12} lg={12} xl={12} xxl={12}>
        <Card title="DOGE 钱包" hoverable headStyle={{ fontSize: 20 }} bodyStyle={{ fontSize: 16 }} align="center">
          <QRCode renderAs="svg" size={200} value="DKjkH4Ap4xakvZ66ypZoSrRayv3WQhLXbU" /><br /><br />
            <Text strong code copyable>DKjkH4Ap4xakvZ66ypZoSrRayv3WQhLXbU</Text><br />
        </Card><br />
      </Col>
    </Row>
  </div>;
}

function UnionPayCoupon() {
  return <Col xs={48} sm={48} md={12} lg={12} xl={12} xxl={12}>
    <Card title="云闪付红包" hoverable headStyle={{ fontSize: 20 }} bodyStyle={{ fontSize: 16 }} align="center">
      <QRCode renderAs="svg" size={200} value="https://wallet.95516.com/s/wl/webV3/activity/vMarketing2/html/snsIndex.html?r=725aba45364e6cf48c6b044fb9069197" /><br /><br />
      <Button type="primary" href="https://wallet.95516.com/s/wl/webV3/activity/vMarketing2/html/snsIndex.html?r=725aba45364e6cf48c6b044fb9069197" target="_blank" >点击领取</Button>
    </Card><br />
  </Col>;
}

function UnionPay() {
  return <Col xs={48} sm={48} md={12} lg={12} xl={12} xxl={12}>
    <Card title="云闪付付款" hoverable headStyle={{ fontSize: 20 }} bodyStyle={{ fontSize: 16 }} align="center">
      <QRCode renderAs="svg" size={200} value="https://qr.95516.com/00010002/01012123571890753265718637730182" /><br />
      <Text>打开云闪付App、银行App<br />和热门App的首页扫码功能轻松支付</Text>
    </Card><br />
  </Col>;
}

class NoMatch extends React.Component {
  render() {
    const openNotificationWithIcon = type => {
      notification[type]({
        message: '错误',
        description: '找不到请求的URL ' + window.location.pathname,
      });
    };
    return (
      <div id="NoMatch" onAnimationStart={() => openNotificationWithIcon('error')}>
        <Index />
      </div>
    )
  }
}
