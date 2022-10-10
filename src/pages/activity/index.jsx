import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import imgSrc from '../../images/img.png'

export default class Attribute extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='Main'>
        <View className='padding20'>

          <View className='templates activity'>
            <View className='productPhOrder marginLeft'><Image src={imgSrc} style='width:100%;height:100%' /></View>
            <View className='adaption productCenter'>
              <View className='productName'>羽绒服</View>
              <View className='templates alignItems'>
                <View className='cost'>￥45</View>
                <View className='adaption'></View>
                <View className='reduceIcon'>减</View>
                <View className='numberTip'>1</View>
                <View className='plusIcon'>加</View>
              </View>
            </View>
          </View>







        </View>
      </View>
    )
  }
}
