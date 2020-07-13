// 子应用配置
export default [
  {
    path: '/sub1',
    assets: {
      js: ['http://127.0.0.1:9901/index.2e016db5.js'],
      css: [],
    },
    // 优先级高
    html: ''
  },
  {
    path: '/sub2',
    assets: {
      js: [],
      css: [],
    },
    // 优先级高
    html: ''
  }
]