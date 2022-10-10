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
            <View className='productPhOrder'><Image src={imgSrc} style='width:100%;height:100%' /></View>
            <View className='adaption productCenter'>
              <View className='productName font16'>普通鞋靴 3双 任洗</View>
              <View className='font13'>全年可用</View>
              <View className='templates'>
              <Text className='colorRed font14'>￥</Text><Text className='colorRed font28 fontWeight'>45</Text><Text className='font13 marginLeft colorGray'>已售2700件</Text>
              </View>
              <View className='templates'>
                <View className='joinBt'>加入购物车</View>
              </View>
              
            </View>
          </View>







        </View>
      </View>
    )
  }
}