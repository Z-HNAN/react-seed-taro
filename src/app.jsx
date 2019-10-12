import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Posts from './pages/Posts/index'
import Schedule from './pages/Schedule/index'
import Home from './pages/Home/index'


import configStore from './store'

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/Posts/index',
      'pages/Schedule/index',
      'pages/Home/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: 'ygbapply',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#2A8CE5',
      backgroundColor: '#FBFBFB',
      borderStyle: 'white',
      list: [{
        pagePath: 'pages/Posts/index',
        text: '岗位大厅',
        // iconPath: './asset/images/index.png',
        // selectedIconPath: './asset/images/index_focus.png'
      },{
        pagePath: 'pages/Schedule/index',
        text: '安排表',
        // iconPath: './asset/images/discovery.png',
        // selectedIconPath: './asset/images/discovery_focus.png'
      },
      {
        pagePath: 'pages/Home/index',
        text: '我的',
        // iconPath: './asset/images/ring.png',
        // selectedIconPath: './asset/images/ring_focus.png'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Posts />
        <Schedule />
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
