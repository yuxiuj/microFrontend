// 子应用配置
export default [
  {
    path: 'sub1',
    assets: {
      js: ['http://127.0.0.1:9904/index.js'],
      css: [],
    },
    // 优先级高
    html: ''
  },
  {
    path: 'sub2',
    assets: {
      js: [],
      css: [],
    },
    // 优先级高
    html: ''
  }
]