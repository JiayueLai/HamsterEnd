import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView, Navigator, Image } from "@tarojs/components";
import PropTypes from "prop-types";
import URL from "../../constants/urls";

import "./index.scss";

export default class Banner extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    data: "",
  };

  componentWillMount() {}

  render() {
    const { data, } = this.props;
    return (
      <View className='homepage-banner-wrapper'>
        <Image className='homepage-banner' src={data} mode='aspectFill' />
      </View>

    );
  }
}
