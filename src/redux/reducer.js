// reducers/diaryReducer.js
const initialState = {
  pageData: Array(100).fill(null).map(() => ({ title: "", date: "", text: "" })),
};

const diaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_DIARY_PAGE_DATA':
      const { pageNumber, data } = action.payload;
      return {
        ...state,
        pageData: state.pageData.map((page, index) => (index === pageNumber ? data : page)),
      };
    default:
      return state;
  }
};

export default diaryReducer;
