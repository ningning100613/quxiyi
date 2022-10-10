import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import imgSrc from '../../images/img.png'
import nodata from '../../images/noData.png'






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

          <View className='templates coupon'>
            <View className='productPhOrder'><Image src={imgSrc} style='width:100%;height:100%' /></View>
            <View className='adaption productCenter'>
              <View className='productName font16'>普通鞋靴 3双 任洗</View>
              <View className='font13'>2023年10月31日到期</View>
              <View className='templates justifyEnd'>
                <View className='joinBt'>立即使用</View>
              </View>
              
            </View>
          </View>




          <View className='noData'>
          <View className='noDataImg'>
            <Image src={nodata} style='width:100%;height:100%' />
          </View>
          <View className='noDataText'>
          暂无卡券
          </View>

            

          </View>







        </View>
      </View>
    )
  }
}
