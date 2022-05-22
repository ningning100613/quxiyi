import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Image, ScrollView, Button } from '@tarojs/components'
import './index.scss'
import imgSrc from '../../images/img.png'

export default class Success extends Component {

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
      <View className='Main success'>
        <View className='fixedMain'>

          <View className='successTip'>
            <View className='templates alignItems'>
              <View className='successIcon'></View>
              <Text className='font36 colorWhite'>完成</Text>
            </View>
            <Text className='font24 colorWhite marginTop'>
              已完成，感谢您的下单
            </Text>
          </View>

          <View className='padding20'>


            <View className='borderRadius padding20 whiteBackground'>
              <View>所购商品</View>
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
            </View>


            <View className='borderRadius padding20 whiteBackground marginTop'>
              <View className='templates'>
                <View className='adaption'>订单编号</View>
                <Text className='colorGray'>wx202009024559682059</Text>
              </View>
              <View className='templates marginTop10'>
                <View className='adaption'>下单时间</View>
                <Text className='colorGray'>2020-11-12 10:34:11</Text>
              </View>
              <View className='templates marginTop10'>
                <View className='adaption'>支付方式</View>
                <Text className='colorGray'>微信支付</Text>
              </View>
              <View className='templates marginTop10'>
                <View className='adaption'>订单状态</View>
                <Text className='colorGray'>已付款</Text>
              </View>
            </View>


            <View className='borderRadius padding20 whiteBackground marginTop'>
            <View className='templates'>
                <View className='adaption'>支付金额</View>
                <Text className=''>￥15.20</Text>
              </View>
              <View className='templates marginTop10'>
                <View className='adaption'></View>
                <Text className=''>实付款：</Text>
                <Text className='marginLeft colorRed'>￥15.20</Text>
              </View>
            </View>



          </View>

        </View>


        <View className='fixedButtom whiteBackground padding20'>
          <View className='templates alignItems'>
            <View className='adaption'></View>
            <Button size='mini' plain className='btn'>查看订单</Button>
            <View className='marginLeft'></View>
            <Button size='mini' className='btn-orage' type='primary' hoverClass='btn-orage-hover'>继续下单</Button>
            
          </View>
        </View>






      </View>
    )
  }
}
