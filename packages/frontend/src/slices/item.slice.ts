import { apiSlice } from './api.slice';

export const itemApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // The `getItems` endpoint is a "query" operation that returns data
    getItems: builder.query({
      // The URL for the request is 'http://localhost:3001/items'
      query: () => '/items',
    }),
    getItem: builder.query({
      query: (itemId) => `/items/${itemId}`,
    }),
  }),
});

// Export the auto-generated hook for the `getItems` query endpoint
export const { useGetItemsQuery, useGetItemQuery } = itemApiSlice;
