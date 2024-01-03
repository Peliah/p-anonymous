// actions/diaryActions.js
export const saveDiaryPageData = (pageNumber, data) => ({
    type: 'SAVE_DIARY_PAGE_DATA',
    payload: { pageNumber, data },
  });
  