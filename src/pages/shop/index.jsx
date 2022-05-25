import { Component } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import './index.scss'

import imgSrc from '../../images/img.png'


export default class Shop extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='Main shop'>
        <View className='fixedMain'>


          <View className='templates shoplist'>
            <View className='couponType'></View>
            <View className='productPhOrder marginLeft'><Image src={imgSrc} style='width:100%;height:100%' /></View>
            <View className='adaption productCenter'>
              <View className='productName'>羽绒服</View>
              <View className='templates alignItems'>
                <View className='cost'>￥45</View>
                <View className='adaption'></View>
                <View className='reduceIcon'>减</View>
                <View className='numberTip'>1</View>
                <View className='plusIcon'>加</View>
              </View>
            </View>
          </View>


          <View className='templates shoplist'>
            <View className='couponType con'></View>
            <View className='productPhOrder marginLeft'><Image src={imgSrc} style='width:100%;height:100%' /></View>
            <View className='adaption productCenter'>
              <View className='productName'>羽绒服</View>
              <View className='templates alignItems'>
                <View className='cost'>￥45</View>
                <View className='adaption'></View>
                <View className='reduceIcon'>减</View>
                <View className='numberTip'>1</View>
                <View className='plusIcon'>加</View>
              </View>
            </View>
          </View>



          <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>
            <View style='height:100px'>1</View>


        </View>



        <View className='fixedButtom whiteBackground padding20'>
          <View className='templates alignItems'>
            <View className='templates alignItems'>
              <View className='couponType'></View><Text className='font24 marginLeft'>全选</Text>
            </View>
            <View className='adaption'></View>
            <Text className='font24'>合计：</Text>
            <Text className='colorRed'>￥ 32.50</Text>
            <View className='marginLeft'></View>
            <Button size='mini' className='btn-orage' type='primary' hoverClass='btn-orage-hover'>去结算</Button>

          </View>
        </View>



      </View>
    )
  }
}
