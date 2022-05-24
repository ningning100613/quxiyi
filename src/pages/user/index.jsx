import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import imgSrc from '../../images/img.png'

export default class User extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='Main'>


        <View className='userTop templates alignItems'>
          <View className='userPh'><Image src={imgSrc} style='width:100%;height:100%' /></View>
          <Text className='font32 colorWhite marginLeft'>美美</Text>
          <View className='adaption'></View>
          <Text className='font28 colorWhite'>VIP/普通会员</Text>
        </View>

        <View className='padding20'>
          <View className='borderRadius padding20 whiteBackground marginTop'>

            <View className='userList'>我的订单</View>
            <View className='userList'>我的卡券</View>
            <View className='userList'>关于我们</View>
          </View>
        </View>


      </View>
    )
  }
}
