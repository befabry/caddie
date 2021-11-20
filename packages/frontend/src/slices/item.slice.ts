import { BaseItems as Item } from '@caddie/common';
import { apiSlice } from './api.slice';

export const itemApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // The `getItems` endpoint is a "query" operation that returns data
    getItems: builder.query<Item[], void>({
      // The URL for the request is 'http://localhost:3001/items'
      query: () => '/items',
    }),
    getItem: builder.query<Item, number>({
      query: (itemId) => `/items/${itemId}`,
    }),
    addItem: builder.mutation<Item, Omit<Item, 'id'>>({
      query: (body) => ({
        url: '/items',
        method: 'POST',
        body,
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getItems` query endpoint
export const { useAddItemMutation, useGetItemQuery, useGetItemsQuery } =
  itemApiSlice;
