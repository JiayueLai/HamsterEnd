import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import PropTypes from "prop-types";
import { connect } from "@tarojs/redux";
import {
  getHome,
} from "@store/home/action";
import VerticalList from "../../components/vertical-list";
import URL from "../../constants/urls";

import "./index.scss";
import Banner from "../../components/banner";

@connect(
  ({ home }) => ({
    homeNFT: home.homeNFT,
    banner: home.banner
  }),
  {
    dispatchGetHomeNFT: getHome
  }
)
export default class Home extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  static propTypes = {
    homeNFT: PropTypes.arrayOf(PropTypes.object),
  };

  constructor() {
    super(...arguments);
    this.onClickSearchBar = this.onClickSearchBar.bind(this);
  }

  componentDidMount() {
    // Taro.showModal({
    //   title: '说明',
    //   content: "本项目是一个开源项目，数据均为随机生成，仅供演示使用。",
    //   showCancel: false
    // })
    this.props.dispatchGetHomeNFT()
    // this.props.dispatchGetNewBooks();
    // this.props.dispatchGetHotBooks();
    // this.props.dispatchGetRecommendBooks();
  }

  onClickSearchBar() {
    Taro.navigateTo({ url: URL.SEARCH });
  }

  render() {
    return (
      <View>
        {/*<FakeSearchBar onClick={this.onClickSearchBar} />*/}
        <Banner data={this.props.banner} />
        <VerticalList data={this.props.homeNFT} />

        {/*<HorizonList data={this.props.homeNFT} />*/}
        {/*<Panel*/}
          {/*url={`${URL.BOOK_LIST}?type=new`}*/}
          {/*title='新书速递'*/}
          {/*className='panel--first'*/}
        {/*>*/}
          {/**/}
        {/*</Panel>*/}
        {/*<Panel*/}
          {/*url={`${URL.BOOK_LIST}?type=hot`}*/}
          {/*title='近期热门'*/}
          {/*className='margin-top-lg'*/}
        {/*>*/}
          {/*<HorizonList data={this.props.hotBooks} />*/}
        {/*</Panel>*/}
        {/*<Panel*/}
          {/*url={`${URL.BOOK_LIST}?type=recommend`}*/}
          {/*title='为你推荐'*/}
          {/*className='margin-top-lg'*/}
        {/*>*/}
          {/*<HorizonList data={this.props.recommendBooks} />*/}
        {/*</Panel>*/}
      </View>
    );
  }
}
