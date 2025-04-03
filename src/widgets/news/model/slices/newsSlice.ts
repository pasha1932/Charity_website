import { createSlice } from "@reduxjs/toolkit";
import { News, newsApi } from "../../api/api";
import { RootState } from "@/app/appStore";

interface InitialState {
  news: News[] | null;
}

const initialState: InitialState = {
  news: null,
};

const slice = createSlice({
  name: "news",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(newsApi.endpoints.getNews.matchFulfilled, (state, action) => {
        state.news = action.payload.content;
      })
  },
});

export default slice.reducer;

export const select = (state: RootState) =>
  state.news.news;