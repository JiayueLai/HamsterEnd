import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import PropTypes from "prop-types";
import { connect } from "@tarojs/redux";
import {
  getMarket,
} from "@store/home/action";

import FakeSearchBar from "../../components/fake-search-bar";
import URL from "../../constants/urls";

import "./index.scss";
import HorizontalList from "../../components/horizontal-list";


@connect(
  ({ home }) => ({
    marketNFT: home.marketNFT
  }),
  {
    dispatchGetMarketNFT: getMarket
  }
)
export default class MarketPlace extends Component {
  config = {
    navigationBarTitleText: "市场"
  };

  static propTypes = {
    marketNFT: PropTypes.arrayOf(PropTypes.object),
  };

  constructor() {
    super(...arguments);
    this.onClickSearchBar = this.onClickSearchBar.bind(this);
  }

  componentDidMount() {
    this.props.dispatchGetMarketNFT()
    console.log("lydia at marker"+ this.props.marketNFT)
  }

  onClickSearchBar() {
    Taro.navigateTo({ url: URL.SEARCH });
  }

  render() {
    console.log("lydia at marker"+ this.props.marketNFT)
    return (
      <View>
        <FakeSearchBar onClick={this.onClickSearchBar} />
        <HorizontalList data={this.props.marketNFT} />
      </View>
    );
  }
}
