import React from 'react'
//菜单栏
import XMSider from './Sider'
//头部
import XMHeader from './Header'
//内容
import XMContent from './Content'

import { Layout } from 'antd';
import './style.scss'
const { Header, Sider, Content } = Layout;

export default class XMLayout extends React.Component {
  render() {
    return(
      <div className="xm-layout">
        <Layout>
          <Sider width='170'>
              < XMSider />
           </Sider>
          <Layout>
              <Header>
                  < XMHeader />
              </Header>
              <Content>
                    < XMContent />
              </Content>
           </Layout>
        </Layout>
      </div>
    )
  }
}
