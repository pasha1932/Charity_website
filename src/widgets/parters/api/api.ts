import { api } from '@/shared/api/api';
export type Partner = {
  id: 0,
  partnerName: string,
  partnerType: string,
  cooperationGoal: string,
  legalAddress: string,
  siteUrl: string,
  identificationCode: string,
  director: {
    id: 0,
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    phoneNumber: string
  },
  partnerStatus: string,
  logoUrl: string
}
export type Page = {
  number: number,
  size: number
  totalElements: number,
  totalPages: number,
}

export type Data = {
  content: Partner[],
  page: Page,
}

export const newsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPendingPartners: build.query<Data, { page: number; size: number }>({
          query: ({ page, size }) => `/admin/partners/all?page=${page}&size=${size}`,
        }),
    getPartners: build.query<Data, { page: number; size: number }>({
          query: ({ page, size }) => `/public/partners?page=${page}&size=${size}`,
        }),
    getPartner: build.query<Partner, { id: number }>({
          query: (id) => `/public/partners/${id}`,
        }),
    // getNewsItem: build.query<News, { id: string | undefined }>({
    //   query: ({id}) => `/public/news/${id}`,
    // }),
    createPartner: build.mutation<Partner, FormData >({
      query: (formData) => ({
        url: '/admin/partners',
        method: 'POST',
        body: formData,
      }),
    }),
    updatePartnerStatus: build.mutation<any, { id: number, status: string }>({
      query: ({id, status}) => ({
        url: `/admin/partners/${id}`,
        method: 'PATCH',
        body: {status},
      }),
    }),
    becamePartner: build.mutation<any, FormData >({
      query: (formData) => ({
        url: `/public/partners`,
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useBecamePartnerMutation, useGetPendingPartnersQuery, useCreatePartnerMutation, useUpdatePartnerStatusMutation, useGetPartnersQuery, useGetPartnerQuery, useLazyGetPartnerQuery } = newsApi;
export const {
  endpoints: {

  },
} = newsApi;
export { api };

