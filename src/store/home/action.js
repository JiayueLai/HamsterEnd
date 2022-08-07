import * as HOME from "./action-type";
import API from "../../service/api";
import {homePage, homeSinglePage} from "./reducer";

// 不感兴趣
export const disfavorBookById = (id, bookType) => {
  return {
    type: HOME.DISFAVOR,
    id,
    bookType
  };
};

// 新书上架
export const getHome = () => {
  // 返回函数，异步dispatch
  return async dispatch => {
    let result = await API.get("/homepage");
    var homeEdition = result["homepage_edition"];
    var homeArray = homeEdition.map(element => new homeSinglePage(element["id"],
      element["image_url"], element["price"], element["sha_hash"]));
    const nft = new homePage(homeArray, result["banners"]);
    console.log("lydia homeArray: "+ nft.homePageEdition[0].imageURL);
    dispatch({
      type: HOME.GET_HOMEPAGE,
      nft: homeArray,
      banner: result["banners"],
    });
  };
};

// 新书上架
export const getMarket = () => {
  // 返回函数，异步dispatch
  return async dispatch => {
    let result = await API.get("/market_space");

    var normalEdition = result["normal_edition"];
    var limitedEdition = result["limited_edition"];

    var normalErray = normalEdition.map(element => new homeSinglePage(element["id"],
      element["image_url"], element["price"], element["sha_hash"]));

    var limitedArray = limitedEdition.map(element => new homeSinglePage(element["id"],
      element["image_url"], element["price"], element["sha_hash"]));

    var output = limitedArray.concat(normalErray)
    console.log("lydia marketarray first element url: "+ output[0].imageURL);
    dispatch({
      type: HOME.GET_MARKETPLACE,
      marketNFT: output
    });
  };
};


// 新书上架
export const getNewBooks = () => {
  // 返回函数，异步dispatch
  return async dispatch => {
    let result = await API.get("/books/new");
    dispatch({
      type: HOME.GET_NEW_BOOK,
      books: result.data
    });
  };
};

// 热门图书
export const getHotBooks = () => {
  // 返回函数，异步dispatch
  return async dispatch => {
    let result = await API.get("/books/hot");
    dispatch({
      type: HOME.GET_HOT_BOOK,
      books: result.data
    });
  };
};

// 推荐图书
export const getRecommendBooks = () => {
  // 返回函数，异步dispatch
  return async dispatch => {
    let result = await API.get("/books/recommend");
    dispatch({
      type: HOME.GET_RECOMMEND_BOOK,
      books: result.data
    });
  };
};
