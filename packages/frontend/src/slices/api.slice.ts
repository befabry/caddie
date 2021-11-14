// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with 'http://localhost:3001/'
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getItems` endpoint is a "query" operation that returns data
    getItems: builder.query({
      // The URL for the request is 'http://localhost:3001/items'
      query: () => '/items',
    }),
  }),
});

// Export the auto-generated hook for the `getItems` query endpoint
export const { useGetItemsQuery } = apiSlice;
