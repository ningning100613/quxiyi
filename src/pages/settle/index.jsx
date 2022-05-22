import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Image, ScrollView, Button } from '@tarojs/components'
import './index.scss'
import addMapPh from '../../images/addMapPh.png'
import imgSrc from '../../images/img.png'

export default class Settle extends Component {

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
    const maskVisible = true
    const animaFlag = false


    return (
      <View className='Main'>
        <View className='fixedMain'>

          <View className='tabMain'>
            <View className='tab con'>到店送衣</View>
            <View className='tab'>
              上门取衣
              <View className='nosupport'>暂未开通</View>
            </View>
          </View>

          <View className='addMain padding20'>
            <View className='templates'>
              <View className='addIcon'></View>
              <View className='adaption paddingLR'>
                <View className='colorGray'>送衣地址</View>
                <View className='font30'>北京市朝阳区高碑店乡通惠大厦A座3层3001室</View>
                <View className='colorGray'>预留手机</View>
                <View className='templates alignItems'>
                  <Text className=''>13426060666</Text>
                  <View className='marginLeft phoneIcon'></View>
                </View>
              </View>
              <View className='mapTipMain'>
                <View className='addMapPh'><Image src={addMapPh} style='width:100%;height:100%' /></View>
                <View className='distance'>距您100米</View>
              </View>
            </View>
          </View>



          <View className='addMain padding20'>
            <View className='templates alignItems'>
              <View className='addIcon'></View>
              <View className='adaption paddingLR'>
                <View className='templates'>
                  <Text className='font30'>美美</Text><Text className='font30 marginLeft'>1342****666</Text>
                </View>

                <View className=''>收货地址：北京市朝阳区高碑店乡通惠大厦A座3层</View>
              </View>
              <View className='arrIcon'></View>
            </View>
            <View className='tipMain'>
              <Text className='font22 colorRed'>提示：为减少接触，你可以在收货地址后增加如小区北门、西村口门口等方便提货的地址，我们会尽快上门取衣</Text>
            </View>

          </View>

          <View className='whiteBackground padding20 marginTop'>
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

          <View className='templates whiteBackground padding20 marginTop alignItems'>
            <View className='adaption'>优惠卡券</View>
            <View className='colorRed font24'>有可用</View>
            <View className='downIcon'></View>
          </View>

          <View className='whiteBackground padding20 marginTop'>
            <View className='templates'>
              <View className='adaption'>商品金额</View>
              <View className=''>￥32.50</View>
            </View>
            <View className='templates marginTop'>
              <View className='adaption'>上门服务费</View>
              <View className='colorRed'>+￥10.00</View>
            </View>
            <View className='templates marginTop'>
              <View className='adaption'>优惠券</View>
              <View className='colorRed'>-￥10.00</View>
            </View>
            <View className='templates marginTop'>
              <View className='adaption'>会员折扣</View>
              <View className='colorRed'>-￥12.00</View>
            </View>
          </View>




        </View>

        <View className='fixedButtom whiteBackground'>
          <View className='templates alignItems'>
            <View className='adaption paddingLR'>
              <Text className='font34'>合计：¥32.50</Text>
            </View>
            <View className='fixRightButton'>
              <Text className='font30'>提交订单</Text>
            </View>
          </View>
        </View>




        {
          <View className={maskVisible ? 'mask' : 'mask_down'}
            // style={animaFlag ? {visibility: "hidden"} : ''}
            // 为了避免第一次加载时会出现动画效果
            style={animaFlag ? { visibility: "hidden" } : ''}
            onClick={this.changeVisible}>
            <View className={maskVisible ? 'pop' : 'pop_down'}>


              <ScrollView
                className='scrollviewPop'
                scrollY
              >
                <View className='templates paddingLR alignItems'>
                  <View className='adaption font30'>优惠券</View>
                  <View className='closeIcon'></View>
                </View>
                <View className='padding20'>

                {/* 循环 star */}
                <View className='coupon templates'>
                  <View className='couponLeft'>
                    <Text className='font30'>￥</Text><Text className='font64'>29</Text>
                  </View>
                  <View className='adaption couponCenter'>
                      <View className='couponText'>29元任洗两件29元任洗两件29元任洗两件29元任洗两件</View>
                      <View className='font22 colorGray'>有效期: 2020.01.09至2021.01.09</View>
                  </View>
                  <View className='couponRight'>
                    <View className='couponType'></View>
                  </View>
                  <View className='couponTip couponRed'>通用券</View>
                  
                </View>

                <View className='coupon templates'>
                  <View className='couponLeft'>
                    <Text className='font30'>￥</Text><Text className='font64'>29</Text>
                  </View>
                  <View className='adaption couponCenter'>
                      <View className='couponText'>29元任洗两件29元任洗两件29元任洗两件29元任洗两件</View>
                      <View className='font22 colorGray'>有效期: 2020.01.09至2021.01.09</View>
                  </View>
                  <View className='couponRight'>
                    <View className='couponType con'></View>
                  </View>
                  <View className='couponTip couponOrg'>店铺券</View>
                </View>


                {/* 循环 end */}

                </View>

              </ScrollView>
              <View className='buttonMain'>
                <Button className='btn-orage' type='primary' hoverClass='btn-orage-hover'>确定</Button>
              </View>


            </View>
          </View>
        }






      </View>
    )
  }
}
