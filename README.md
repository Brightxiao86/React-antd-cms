# 项目创建

cnpm install create-react-app -g
create-react-app react-antd-cms
cd react-antd-cms

npm start  // 启动项目
npm run build  // 打包上线

注意：暴露隐藏文件的做法
git init
git add .
git commit -m 'first'
npm run eject  // 把隐藏文件都暴露出来

npm start  // 运行项目


# 环境配置

1、自定义端口号 /scripts/start.js 搜索 PORT

2、配置 @ 别名 /config/webpack.config.js 里找到 resolve.alias

3、favicon制作 找免费在线制作网站，下载 32*32的尺寸。

4、sass安装 只用安装 node-sass 这个包即可。

5、本地环境怎么配置代码

安装 cnpm install http-proxy-middleware -D 新建代理文件 src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://xxx.com',   // 目标服务器
      changeOrigin: true
    })
  );
};
重启服务


# 项目架构

安装antd
axios封装与跨域处理
layout布局：路由的安装与配置
