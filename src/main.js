import Vue from 'vue'
import App from './App'
import fly from './utils/request.js'

Vue.config.productionTip = false
Vue.prototype.$fly = fly
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main', 'pages/counter/main'],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#ff5d23',
      navigationBarTitleText: 'gsbTV',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      'color': '#1d1d1d',
      'selectedColor': '#ff5d23',
      'borderStyle': 'white',
      'backgroundColor': '#f9f9f9',
      'list': [
        {
          'text': '首页',
          'pagePath': 'pages/index/main',
          'iconPath': 'static/images/tab-home-off.png',
          'selectedIconPath': 'static/images/tab-home-on.png'
        },
        {
          'text': '分类',
          'pagePath': 'pages/index/main',
          'iconPath': 'static/images/tab-catalog-off.png',
          'selectedIconPath': 'static/images/tab-catalog-on.png'
        },
        {
          'text': '视频',
          'pagePath': 'pages/index/main',
          'iconPath': 'static/images/tab-video-off.png',
          'selectedIconPath': 'static/images/tab-video-on.png'
        },
        {
          'text': '我的',
          'pagePath': 'pages/index/main',
          'iconPath': 'static/images/tab-me-off.png',
          'selectedIconPath': 'static/images/tab-me-on.png'
        }
      ]
    }
  }
}
