import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Form, Switch, Button, Input, Textarea} from '@tarojs/components'
import './index.scss'

export default class SelectAdd extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  formSubmit = e => {
    console.log(e)
  }

  formReset = e => {
    console.log(e)
  }
  render() {
    return (
      <View className='Main'>
        <View className='fixedMain'>

          <View className='inputMain'>

        <Form onSubmit={this.formSubmit} onReset={this.formReset} >

          <View className='templates inputList'>
            <View className='fromTit font30'>收件人</View>
            <View className='adaption templates alignItems'><Input type='text' placeholder='请输入'/></View>
          </View>
          <View className='templates inputList'>
            <View className='fromTit font30'>电话</View>
            <View className='adaption templates alignItems'><Input type='number' placeholder='请输入'/></View>
          </View>
          <View className='templates inputList'>
            <View className='fromTit font30'>地址</View>
            <View className='adaption templates alignItems'><Textarea placeholder='请输入' style="width:100%"  autoHeight/>
        </View>
          </View>
          <View className='templates inputList'>
            <View className='fromTit font30'>设为默认地址</View>
            <View className='adaption templates alignItems'></View>
            <Switch name='switch' className='form-switch' color='#FE3B30' style="transform: scale(0.8) " ></Switch>
          </View>

          <View className='fixedButtom fixedPadding whiteBackground'>
          <Button className='btn-orage' type='primary' hoverClass='btn-orage-hover'>提交</Button>
        </View>

        </Form>


        </View>

        </View>
      </View>
    )
  }
}
