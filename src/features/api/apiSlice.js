import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    // baseQuery: fetchBaseQuery({ baseUrl: "https://pedrotech-davegray-mern.onrender.com" }),
    baseQuery: fetchBaseQuery({ baseUrl: "https://pedrotech-davegray-mern-backend.vercel.app" }),
    tagTypes: ["Products", "Users"],
    endpoints: (builder) => ({}),
});
