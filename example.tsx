import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import ButtonExample from "./lib/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import {Layout, Header, Aside, Content, Footer} from "./lib/layout/layout";
import './example.scss';
import IconDemo from "./lib/icon/icon.demo";
import FormExample from "./lib/form/form.example";
import ScrollExample from './lib/scroll/scroll.example';


const logo = require('./logo.png'); // 动态加载

ReactDOM.render(
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    <img src={logo} width="48" height="48" alt=""/>
                    <span>react-ui</span>
                </div>
            </Header>
            <Layout>
                <Aside className="site-aside">
                    <h2>组件</h2>
                    <ul>
                        <li><NavLink to="/icon">Icon</NavLink></li>
                        <li><NavLink to="/dialog">对话框</NavLink></li>
                        <li><NavLink to="/layout">布局</NavLink></li>
                        <li><NavLink to="/form">表单</NavLink></li>
                        <li><NavLink to="/scroll">滚动条</NavLink></li>
                    </ul>
                </Aside>
                <Content className="site-main">
                    <Route path="/icon" component={IconDemo}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                    <Route path="/form" component={FormExample}/>
                    <Route path="/scroll" component={ScrollExample}/>
                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; 张永旺
            </Footer>
        </Layout>
    </Router>
    , document.querySelector('#root'));

