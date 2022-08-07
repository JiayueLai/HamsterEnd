import * as HOME from "./action-type";

// export interface homePage {
//   homePageEdition: [],
//   banners: []
// }

export class homeSinglePage{
  constructor(id, imageURL, price, sha) {
    this.id = id;
    this.imageURL = imageURL;
    this.price = price;
    this.sha = sha;
  }
}

export class homePage{
  constructor(homePageEdition, banners) {
    this.homePageEdition = homePageEdition;
    this.banners = banners;
  }
}

const defaultState = {
  /**
   * 新上架图书列表
   * @type {Array}
   * example: [{
       "id": 62,
       "title": "霍乱时期的爱情",
       "isbn": 9860238195343,
       "publisher": "上海人民出版社",
       "pubdate": "2011-12-24",
       "author": "[哥]加西亚·马尔克斯",
       "translator": "杨玲",
       "binding": "精装",
       "price": 63.37,
       "pages": 69,
       "words": 78,
       "tags": [
         "小说",
         "文学",
         "名著"
       ],
       "score": 5.2,
       "review_num": 63,
       "image": "https://img3.doubanio.com/mpic/s11284102.jpg",
       "introduction": "...",
       "related_books": []
   * }]
   */
  newBooks: [],
  hotBooks: [],
  recommendBooks: [],
  homeNFT: [homeSinglePage],
  banner: "",
  marketNFT: [homeSinglePage]
};

const home = (state = defaultState, action) => {
  switch (action.type) {
    case HOME.GET_MARKETPLACE:
      return { ...state, marketNFT: state.marketNFT.concat(action.marketNFT)};
    case HOME.GET_HOMEPAGE:
      return { ...state, homeNFT: state.homeNFT.concat(action.nft), banner: action.banner};
    case HOME.GET_NEW_BOOK:
      return { ...state, newBooks: state.newBooks.concat(action.books) };
    case HOME.GET_HOT_BOOK:
      return { ...state, hotBooks: state.hotBooks.concat(action.books) };
    case HOME.GET_RECOMMEND_BOOK:
      return {
        ...state,
        recommendBooks: state.recommendBooks.concat(action.books)
      };
    case HOME.DISFAVOR:
      switch (action.bookType) {
        case "new":
          return {
            ...state,
            newBooks: state.newBooks.filter(i => i.id != action.id)
          };
        case "hot":
          return {
            ...state,
            hotBooks: state.hotBooks.filter(i => i.id != action.id)
          };
        case "recommend":
          return {
            ...state,
            recommendBooks: state.recommendBooks.filter(i => i.id != action.id)
          };
      }
    default:
      return state;
  }
};

export default home;
