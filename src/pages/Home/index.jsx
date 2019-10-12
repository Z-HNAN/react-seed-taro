import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { async, sync } from '@/src/actions'

const {
  asyncAdd
} = async

import './index.less'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAsyncAdd: () => {
      dispatch(asyncAdd({ number: 1 }))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button onClick={this.props.onAsyncAdd}> saga-demo click </Button>
        <View>Home</View>
      </View>
    )
  }
}

export default Home
