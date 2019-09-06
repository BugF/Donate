import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout } from 'antd';
import './App.css';

import Headers from './Header'
import Main from './Main'

const { Footer } = Layout;

function AppRouter() {
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Headers/>
        <Layout>
          <Main/>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>©2019 Created by <a href="https://uv.uy" target="_blank" rel="external">Edison Jwa</a></Footer>
      </Layout>
    </Router>
  );
}

export default AppRouter;