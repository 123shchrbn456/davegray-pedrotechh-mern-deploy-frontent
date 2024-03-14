import { apiSlice } from "../api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (searchParams) => "/getProducts",
            providesTags: (result, error, arg) => [
                { type: "Products", id: "LIST" },
                ...result.map((item) => ({ type: "Products", id: item.id })),
            ],
        }),
        getUsers: builder.query({
            query: (searchParams) => "/getUsers",
            providesTags: (result, error, arg) => [
                { type: "Users", id: "LIST" },
                ...result.map((item) => ({ type: "Users", id: item.id })),
            ],
        }),
        // getSingleDevice: builder.query({
        //     query: (singleGoodsId) => `/merchandise-improved?id=${singleGoodsId}`,
        //     transformResponse: (responseDataArr) => {
        //         const [singleObj] = responseDataArr;
        //         return { ...singleObj };
        //     },
        //     providesTags: (result, error, arg) => [{ type: "Devices", id: arg }],
        // }),
    }),
});

export const { useGetProductsQuery, useGetUsersQuery } = productsApiSlice;
