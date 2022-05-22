import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Image, ScrollView, Button } from '@tarojs/components'
import './index.scss'
import imgSrc from '../../images/img.png'

export default class Index extends Component {
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onScrollToUpper() { }

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e) {
    console.log(e.detail)
  }


  render() {

    const scrollStyle = {
      height: Taro.windowHeight + 'px',
    }
    const scrollStyleWidth = {
      width: Taro.windowWidth - (170 / Taro.pixel) + 'px'
    }

    const scrollRightStyle = {
      height: Taro.windowHeight - 50 - (78 / Taro.pixel) + 'px'
    }






    const scrollTop = 0
    const Threshold = 20
    const vStyleA = {
      height: '150px',
      'background-color': 'rgb(26, 173, 25)'
    }
    // const vStyleB = {
    //   height: '150px',
    //   'background-color': 'rgb(39,130,215)'
    // }


    const maskVisible = true
    const animaFlag = false



    return (
      <View className='Main index'>

        <View className='templates'>
          <View className='leftMenu'>

            <ScrollView
              className='scrollviewLeft'
              scrollY
              scrollWithAnimation
              scrollTop={scrollTop}
              style={scrollStyle}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
              onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
              onScroll={this.onScroll}
            >
              <View className='menu'>
                <Text className='menuText con'>洗衣</Text>
              </View>
              <View className='menu'>
                <Text className='menuText'>鞋包</Text>
              </View>
              <View className='menu'>
                <Text className='menuText'>家纺</Text>
              </View>






            </ScrollView>


          </View>
          <View className='adaption'>

            <View className='rightTitle'>

              <ScrollView
                className='scrollviewRight'
                scrollLeft={scrollTop} scrollX style={scrollStyleWidth}
              >
                <View className='subMenu'>
                  <View className='subMain con'>
                    <Text>上衣</Text><Text className='line'></Text>
                  </View>
                </View>
                <View className='subMenu'>
                  <View className='subMain'>
                    <Text>上衣</Text><Text className='line'></Text>
                  </View>
                </View>
                <View className='subMenu'>
                  <View className='subMain'>
                    <Text>上衣</Text><Text className='line'></Text>
                  </View>
                </View>
                <View className='subMenu'>
                  <View className='subMain'>
                    <Text>上衣</Text><Text className='line'></Text>
                  </View>
                </View>
                <View className='subMenu'>
                  <View className='subMain'>
                    <Text>上衣</Text><Text className='line'></Text>
                  </View>
                </View>
              </ScrollView>

            </View>




            <ScrollView
              className='scrollviewLeft'
              scrollY
              scrollWithAnimation
              scrollTop={scrollTop}
              style={scrollRightStyle}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
              onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
              onScroll={this.onScroll}
            >
              <View className='nodeMenu'>上衣</View>

              <View className='templates goodsList' onClick={this.onShowPop}>
                <View className='productPhOrder'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                <View className='adaption productCenter'>
                  <View className='productName'>羽绒服</View>
                  <View className='cost'>￥45</View>
                </View>
                <View className='mainIcon'><View className='addIcon'></View></View>
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


            </ScrollView>





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
                    {/* 循环 star */}
                    <View className='paddingLR marginTop'>
                      <View className='templates goodsList' onClick={this.onShowPop}>
                        <View className='productPhOrder'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                        <View className='adaption productCenter'>
                          <View className='productName'>羽绒服</View>
                          <View className='cost'>￥45</View>
                        </View>
                      </View>
                      <View className='templates padding20'>
                        <View className=''>数量</View>
                        <View className='adaption'></View>
                        <View className='reduceIcon'>减</View>
                        <View className='numberTip'>1</View>
                        <View className='plusIcon'>加</View>
                      </View>
                    </View>
                    {/* 循环 end */}
                    


                  </ScrollView>
                  <View className='buttonMain'>
                      <Button className='btn-orage' type='primary' hoverClass='btn-orage-hover'>确认添加</Button>
                    </View>


                </View>
              </View>
            }




          </View>
        </View>


      </View>
    )
  }
}
