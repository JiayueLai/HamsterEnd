import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView, Navigator, Image } from "@tarojs/components";
import PropTypes from "prop-types";
import URL from "../../constants/urls";

import "./index.scss";

export default class VerticalList extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    isBook: PropTypes.bool,
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
    const { isBook, data, } = this.props;
    const url = isBook ? URL.BOOK_DETAIL : URL.BOOK_LIST_DETAIL;
    // 以rpx为单位计算图片宽高
    let imgWidth, imgHeight;
    imgWidth = 450; // 24是两张图片之间的距离
    imgHeight = 450; // 图片宽高比为218/300

    return (
      <View className='hompage-wrapper'>
      <ScrollView className='homepage-vertical-list-contatiner' scrollY>
        <View className='homepage-vertical-list'>
          {data.map(item => {
            if (item.imageURL) return (
              <Navigator>
                <Image
                  className='homepage-vertical-list_image'
                  style={{
                    width: Taro.pxTransform(imgWidth),
                    height: Taro.pxTransform(imgHeight),
                  }}
                  src={item.imageURL}
                  mode='aspectFill'
                />
                <View className='homepage-vertical-list_name'> {"My Nft"} </View>
                <View className='homepage-vertical-list_price'> {item.price} </View>
              </Navigator>


            )
          })}
        </View>
      </ScrollView>
      </View>

    );
  }
}
