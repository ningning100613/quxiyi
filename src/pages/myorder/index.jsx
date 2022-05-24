import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Image, Button, ScrollView } from '@tarojs/components'
import './index.scss'
import imgSrc from '../../images/img.png'

export default class Myorder extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const scrollStyleWidth = {
      width: Taro.windowWidth - (150 / Taro.pixel) + 'px'
    }
    const scrollTop = 0
    const Threshold = 20

    return (
      <View className='Main'>
        <View className='fixedMain myorder'>

          <View className='subMain'>
            <View className='templates'>
              <View className='adaption subNav con'>
                <Text className='font30'>全部</Text>
                <View className='line'></View>
              </View>

              <View className='adaption subNav'>
                <Text className='font30'>待支付</Text>
                <View className='line'></View>
              </View>

              <View className='adaption subNav'>
                <Text className='font30'>洗涤中</Text>
                <View className='line'></View>
              </View>

              <View className='adaption subNav'>
                <Text className='font30'>已完成</Text>
                <View className='line'></View>
              </View>

            </View>
          </View>




          <View className='paddingLR'>




            <View className='borderRadius padding20 whiteBackground marginTop'>
              <View className='templates'>
                <View className='adaption'>所购商品</View>
                <Text className='colorRed'>待支付</Text>
              </View>
              <View className='templates alignItems'>
                <View className='adaption'>
                  <ScrollView
                    className='scrollviewGoods'
                    scrollLeft={scrollTop} scrollX style={scrollStyleWidth}
                  >
                    <View className='goodInfo'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                    <View className='goodInfo'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                    <View className='goodInfo'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                    <View className='goodInfo'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                    <View className='goodInfo'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                  </ScrollView>
                </View>
                <View className='font24'>共5件</View>
              </View>
              <View className='templates'>
                <Text>订单时间：</Text>
                <Text>2022-05-11</Text>
                <View className='adaption'></View>
                <Text className=''>实付: ¥ 29</Text>
              </View>

            </View>






          </View>

        </View>
        <View className='fixedButtom fixedPadding whiteBackground'>
          <Button className='btn-orage' type='primary' hoverClass='btn-orage-hover'>新建收货地址</Button>
        </View>


      </View>
    )
  }
}
