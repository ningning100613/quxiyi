import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Image, Button } from '@tarojs/components'
import './index.scss'
import addMapPh from '../../images/addMapPh.png'
import imgSrc from '../../images/img.png'

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

          <View className='padding20'>
            <View className='whiteBackground padding20 borderRadius'>
              <View>2件商品</View>
              <View>

                <View className='templates goodsList alignItems'>
                  <View className='productPhOrder'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                  <View className='adaption productCenter'>
                    <View className='productName'>羽绒服</View>
                    <View className='cost'>￥45</View>
                  </View>
                  <Text className='font24'>x1</Text>
                </View>


                <View className='templates goodsList alignItems'>
                  <View className='productPhOrder'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                  <View className='adaption productCenter'>
                    <View className='productName'>羽绒服</View>
                    <View className='cost'>￥45</View>
                  </View>
                  <Text className='font24'>x1</Text>
                </View>



              </View>
            </View>
            

            
            <View className='whiteBackground padding20 marginTop borderRadius'>
            <View className='templates'>
              <View className='adaption'>订单编号</View>
              <View className=''>wx202009024559682059</View>
            </View>
            <View className='templates marginTop'>
              <View className='adaption'>下单时间</View>
              <View className='colorRed'>2020-11-12 10:34:11</View>
            </View>
            <View className='templates marginTop'>
              <View className='adaption'>支付方式</View>
              <View className='colorRed'>微信支付</View>
            </View>
            <View className='templates marginTop'>
              <View className='adaption'>订单状态</View>
              <View className='colorRed'>已付款</View>
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
            <Text className='font44 color3'>取衣码：8019</Text>
            <View className='adaption'></View>
            <Button size='mini' plain className='btn'>联系店主</Button>
            <View className='marginLeft'></View>
            <Button size='mini' className='btn-orage' type='primary' hoverClass='btn-orage-hover'>复制</Button>
            
          </View>
        </View>




      </View>
    )
  }
}
