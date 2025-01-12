import { api } from '@/shared/api/api';
import { Page } from '@/widgets/news/api/api';

export type Project = {
  id: number,
  name: string,
  description: string,
  goalAmount: number,
  collectedAmount: number,
  deadline: string,
  status: "ACTIVE" | "SUCCESSFULLY_COMPLETED",
  imageUrl: string,
}

export type Data = {
  content: Project[],
  page: Page,
}

export const projectsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query<Data, { page: number; size: number }>({
      query: ({ page, size }) => `/public/projects/all?page=${page}&size=${size}`,
    }),
    getProjectsActive: build.query<Data, { page: number; size: number }>({
      query: ({ page, size }) => `/public/projects/active?page=${page}&size=${size}`,
    }),
    createProject: build.mutation<any, FormData>({
      query: (formData) => ({
        url: '/admin/projects',
        method: 'POST',
        bod: formData,
      }),
    }),
  }),
});

export const { useGetProjectsQuery, useGetProjectsActiveQuery, useCreateProjectMutation } = projectsApi;
export { api };
