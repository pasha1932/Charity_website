import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/app/appStore";
import { Project, projectsApi } from "../../api/api";

interface InitialState {
  projects: Project[] | null;
}

const initialState: InitialState = {
  projects: null,
};

const slice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(projectsApi.endpoints.getProjects.matchFulfilled, (state, action) => {
        state.projects = action.payload.content;
      })
  },
});

export default slice.reducer;

export const select = (state: RootState) =>
  state.projects.projects;