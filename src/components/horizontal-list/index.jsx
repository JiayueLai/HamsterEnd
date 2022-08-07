import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView, Navigator, Image } from "@tarojs/components";
import PropTypes from "prop-types";

import "./index.scss";

export default class HorizontalList extends Component {
  // static options = {
  //   addGlobalClass: true
  // };

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    sideSpace: PropTypes.number // 组件左侧到屏幕左侧的间距，单位为rpx
  };

  static defaultProps = {
    isBook: true,
    data: [],
    sideSpace: 100
  };

  componentWillMount() {}

  render() {
    const { data, } = this.props;

    console.log("lydia at marker"+ data)
    return (
      <ScrollView className='marketplace-horizontal-list-container' enable-flex='true' scrollY>
          {data.map(item => {
            if (item.imageURL) return (
              <Navigator className='marketplace-horizontal-list-item'>
                <Image
                  style={{
                    width: Taro.pxTransform(300),
                    height: Taro.pxTransform(300),
                  }}
                  className='marketplace-horizontal-list-item_image'
                  src={item.imageURL}
                  mode='aspectFill'
                />
                <View className='marketplace-horizontal-list-item_name'> {"My NFT"} </View>
                <View className='marketplace-horizontal-list-item_price'> {item.price} </View>
              </Navigator>


            )
          })}
      </ScrollView>

    );
  }
}
