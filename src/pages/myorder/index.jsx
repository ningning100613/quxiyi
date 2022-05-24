import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Myorder extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
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
                <View className=''>123</View>
                <View className='adaption'>attribute</View>
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
