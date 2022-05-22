import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Shop extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='Main'>
        <View className='fixedMain'>
          shop
          <View className='templates'>
            <View className=''>qwertyuiop</View>
            <View className='adap'>attribute</View>
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
