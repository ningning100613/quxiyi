import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text } from '@tarojs/components'
import './index.scss'

export default class SelectAdd extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='Main'>
        <View className='fixedMain'>

          <View className='templates'>
            <View className=''>123</View>
            <View className='adap'>attribute</View>
          </View>

        </View>
      </View>
    )
  }
}
