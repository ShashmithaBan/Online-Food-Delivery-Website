import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getJwtToken = () => {
  return localStorage.getItem('jwt');
};

export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5454/',
    prepareHeaders: (headers) => {
      const token = getJwtToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRestaurantByUserId: builder.query({
      query: () => 'api/admin/restaurants/user',
    }),
  }),
});

export const { useGetRestaurantByUserIdQuery } = restaurantApi;
