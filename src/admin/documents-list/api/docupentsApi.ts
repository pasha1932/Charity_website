import { api } from '@/shared/api/api';

export type Document = {
    id: number,
    fileName: string,
    description: string,
  uploadedAt: string,
  fileUrl: string;
}
export const documentsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getReports: build.query<any, { page: number; size: number }>({
      query: ({ page, size }) => `/public/documents/reports?page=${page}&size=${size}`,
    }),
    getFoundings: build.query<any, { page: number; size: number }>({
      query: ({ page, size }) => `/public/documents/foundings?page=${page}&size=${size}`,
    }),

    createDocument: build.mutation<any, any>({
      query: (document) => ({
        url: '/admin/documents',
        method: 'POST',
        body: document,
      }),
    }),
    deleteDocument: build.mutation<void, string>({
      query: (id) => ({
        url: `/admin/documents/${id}`,
        method: 'DELETE'
      }),
    }),
  }),
});

export const { useCreateDocumentMutation, useDeleteDocumentMutation, useGetReportsQuery, useGetFoundingsQuery} = documentsApi;