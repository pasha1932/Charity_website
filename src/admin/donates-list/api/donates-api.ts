import { api } from '@/shared/api/api';


export type Donate = {
  id: number,
  amount: number,
  currency: string,
  donationDate: string,
  donorName: string,
  donorEmail: string
}

export type Page = {
  number: number,
  size: number
  totalElements: number,
  totalPages: number,
}

export type Data = {
  content: Donate[],
  page: Page,
}
export const donationsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDonates: build.query<Data, { page: number; size: number }>({
      query: ({ page, size }) => `/admin/donations?page=${page}&size=${size}`,
    }),
  }),
});
export const {useGetDonatesQuery, } = donationsApi;

