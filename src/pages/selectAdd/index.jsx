import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Button } from '@tarojs/components'
import './index.scss'

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

          <View className='templates addList alignItems'>
            <View className='adaption'>
              <View className=''>
                <Text className='font30'>曹操</Text><Text className='font30 marginLeft'>18286888628</Text>
              </View>
              <View>
                <Text className='colorGray'>北京市朝阳区望京阜通东大街方恒国际中心a座</Text>
              </View>
            </View>
            <View className='marginLeft phoneIcon'></View>
          </View>



          <View className='templates addList alignItems'>
            <View className='adaption'>
              <View className=''>
                <Text className='font30'>曹操</Text><Text className='font30 marginLeft'>18286888628</Text>
              </View>
              <View>
                <Text className='colorGray'>北京市朝阳区望京阜通东大街方恒国际中心a座北京市朝阳区望京阜通东大街方恒国际中心a座</Text>
              </View>
            </View>
            <View className='marginLeft phoneIcon'></View>
          </View>

        </View>
        <View className='fixedButtom fixedPadding whiteBackground'>
          <Button className='btn-orage' type='primary' hoverClass='btn-orage-hover'>新建收货地址</Button>
        </View>

      </View>
    )
  }
}
