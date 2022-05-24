import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Map, CoverView, CoverImage } from '@tarojs/components'
import './index.scss'
import imgSrc from '../../images/img.png'

export default class Store extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onReady() {
    this.mapCtx = wx.createMapContext('mymap');
     this.includePoints();
   }
   includePoints() {
    var that = this;
    that.mapCtx.includePoints({
      padding: [ 70,],
      points: [{
        latitude: 39.959952,
        longitude: 116.485415
      }, {
        latitude: 39.917852,
        longitude: 116.482669
      }]
  
      })
  }

  render() {
    const mapCss = {
      width: Taro.windowWidth + 'px',
      height:Taro.windowHeight + 'px',
    }

    let mapKey = "a382ef6a3c4a492b56f4844fe45249ff";


    let markers = [
      {
        // iconPath: now,
        id: 1,
        // anchor: { x: 0.5, y: 0.8 },
        latitude: 39.959952,
        longitude: 116.485415,
        width:30,
        height:30
      },
      {
        id: 2,
        latitude: 39.917852,
        longitude: 116.482669,
        width:30,
        height:30

      }
    ];


    return (
      <View className='Main'>



        <Map
        style={mapCss}
          className='curMap'
          id='mymap'
          subkey={mapKey}
          longitude={markers[0].longitude}
          latitude={markers[0].latitude}
          scale='16'
          markers={markers}
        >
          <CoverView class='controls'>
          <CoverView className='font36'>
            <CoverView className='font36'>四季鲜便利店</CoverView>
            <CoverView className='font24 colorGray'>地址: 北京市朝阳区高碑店乡通惠大厦A座底商1003</CoverView>
          </CoverView>
          

            地址: 北京市朝阳区高碑店乡通惠大厦A座底商1003
                  <CoverImage
                    class='img'
                    src={imgSrc}
                    // onClick={this.noteCheck}
                  />
                </CoverView>
        </Map>

      </View>
    )
  }
}
