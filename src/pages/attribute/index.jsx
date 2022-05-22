import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Attribute extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>

        <View className='templates'>
          <View className=''>123</View>
          <View className='adap'>attribute</View>
        </View>

      </View>
    )
  }
}
