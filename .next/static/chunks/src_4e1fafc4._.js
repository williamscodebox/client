(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_4e1fafc4._.js", {

"[project]/src/state/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "globalSlice": (()=>globalSlice),
    "initialState": (()=>initialState),
    "setFilters": (()=>setFilters),
    "setViewMode": (()=>setViewMode),
    "toggleFiltersFullOpen": (()=>toggleFiltersFullOpen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    isFiltersFullOpen: false,
    filters: {
        location: "Los Angeles",
        beds: "any",
        baths: "any",
        propertyType: "any",
        amenities: [],
        availableFrom: "any",
        priceRange: [
            null,
            null
        ],
        squareFeet: [
            null,
            null
        ],
        coordinates: [
            -118.2437,
            34.0522
        ]
    },
    viewmode: "grid"
};
const globalSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "global",
    initialState,
    reducers: {
        setFilters: (state, action)=>{
            state.filters = {
                ...state.filters,
                ...action.payload
            };
        },
        setViewMode: (state, action)=>{
            state.viewmode = action.payload;
        },
        toggleFiltersFullOpen: (state)=>{
            state.isFiltersFullOpen = !state.isFiltersFullOpen;
        }
    }
});
const { setFilters, toggleFiltersFullOpen, setViewMode } = globalSlice.actions;
const __TURBOPACK__default__export__ = globalSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cleanParams": (()=>cleanParams),
    "cn": (()=>cn),
    "createNewUserInDatabase": (()=>createNewUserInDatabase),
    "formatEnumString": (()=>formatEnumString),
    "formatPriceValue": (()=>formatPriceValue),
    "withToast": (()=>withToast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatEnumString(str) {
    return str.replace(/([A-Z])/g, " $1").trim();
}
function formatPriceValue(value, isMin) {
    if (value === null || value === 0) return isMin ? "Min Price" : "Max Price";
    if (value >= 1000) {
        const kValue = value / 1000;
        return isMin ? `$${kValue}k+` : `<$${kValue}k`;
    }
    return isMin ? `$${value}+` : `<$${value}`;
}
function cleanParams(params) {
    return Object.fromEntries(Object.entries(params).filter(([_, value] // eslint-disable-line @typescript-eslint/no-unused-vars
    )=>value !== undefined && value !== "any" && value !== "" && (Array.isArray(value) ? value.some((v)=>v !== null) : value !== null)));
}
const withToast = async (mutationFn, messages)=>{
    const { success, error } = messages;
    try {
        const result = await mutationFn;
        if (success) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(success);
        return result;
    } catch (err) {
        if (error) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error);
        throw err;
    }
};
const createNewUserInDatabase = async (user, idToken, userRole, fetchWithBQ)=>{
    const createEndpoint = userRole?.toLowerCase() === "manager" ? "/managers" : "/tenants";
    const createUserResponse = await fetchWithBQ({
        url: createEndpoint,
        method: "POST",
        body: {
            cognitoId: user.userId,
            name: user.username,
            email: idToken?.payload?.email || "",
            phoneNumber: ""
        }
    });
    if (createUserResponse.error) {
        throw new Error("Failed to create user record");
    }
    return createUserResponse;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/state/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "api": (()=>api),
    "useAddFavoritePropertyMutation": (()=>useAddFavoritePropertyMutation),
    "useCreateApplicationMutation": (()=>useCreateApplicationMutation),
    "useCreatePropertyMutation": (()=>useCreatePropertyMutation),
    "useGetApplicationsQuery": (()=>useGetApplicationsQuery),
    "useGetAuthUserQuery": (()=>useGetAuthUserQuery),
    "useGetCurrentResidencesQuery": (()=>useGetCurrentResidencesQuery),
    "useGetLeasesQuery": (()=>useGetLeasesQuery),
    "useGetManagerPropertiesQuery": (()=>useGetManagerPropertiesQuery),
    "useGetPaymentsQuery": (()=>useGetPaymentsQuery),
    "useGetPropertiesQuery": (()=>useGetPropertiesQuery),
    "useGetPropertyLeasesQuery": (()=>useGetPropertyLeasesQuery),
    "useGetPropertyQuery": (()=>useGetPropertyQuery),
    "useGetTenantQuery": (()=>useGetTenantQuery),
    "useRemoveFavoritePropertyMutation": (()=>useRemoveFavoritePropertyMutation),
    "useUpdateApplicationStatusMutation": (()=>useUpdateApplicationStatusMutation),
    "useUpdateManagerSettingsMutation": (()=>useUpdateManagerSettingsMutation),
    "useUpdateTenantSettingsMutation": (()=>useUpdateTenantSettingsMutation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$fetchAuthSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$getCurrentUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/getCurrentUser.mjs [app-client] (ecmascript)");
;
;
;
const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL,
        prepareHeaders: async (headers)=>{
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$fetchAuthSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAuthSession"])();
            const { idToken } = session.tokens ?? {};
            if (idToken) {
                headers.set("Authorization", `Bearer ${idToken}`);
            }
            return headers;
        }
    }),
    reducerPath: "api",
    tagTypes: [
        "Managers",
        "Tenants",
        "Properties",
        "PropertyDetails",
        "Leases",
        "Payments",
        "Applications"
    ],
    endpoints: (build)=>({
            getAuthUser: build.query({
                queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ)=>{
                    try {
                        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$core$2f$dist$2f$esm$2f$singleton$2f$apis$2f$fetchAuthSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAuthSession"])();
                        const { idToken } = session.tokens ?? {};
                        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$getCurrentUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                        const userRole = idToken?.payload["custom:role"];
                        const endpoint = userRole === "manager" ? `/managers/${user.userId}` : `/tenants/${user.userId}`;
                        let userDetailsResponse = await fetchWithBQ(endpoint);
                        // if user doesn't exist, create new user
                        if (userDetailsResponse.error && userDetailsResponse.error.status === 404) {
                            userDetailsResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNewUserInDatabase"])(user, idToken, userRole, fetchWithBQ);
                        }
                        return {
                            data: {
                                cognitoInfo: {
                                    ...user
                                },
                                userInfo: userDetailsResponse.data,
                                userRole
                            }
                        };
                    } catch (error) {
                        return {
                            error: error.message || "Could not fetch user data"
                        };
                    }
                }
            }),
            // property related endpoints
            getProperties: build.query({
                query: (filters)=>{
                    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanParams"])({
                        location: filters.location,
                        priceMin: filters.priceRange?.[0],
                        priceMax: filters.priceRange?.[1],
                        beds: filters.beds,
                        baths: filters.baths,
                        propertyType: filters.propertyType,
                        squareFeetMin: filters.squareFeet?.[0],
                        squareFeetMax: filters.squareFeet?.[1],
                        amenities: filters.amenities?.join(","),
                        availableFrom: filters.availableFrom,
                        favoriteIds: filters.favoriteIds?.join(","),
                        latitude: filters.coordinates?.[1],
                        longitude: filters.coordinates?.[0]
                    });
                    return {
                        url: "properties",
                        params
                    };
                },
                providesTags: (result)=>result ? [
                        ...result.map(({ id })=>({
                                type: "Properties",
                                id
                            })),
                        {
                            type: "Properties",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Properties",
                            id: "LIST"
                        }
                    ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        error: "Failed to fetch properties."
                    });
                }
            }),
            getProperty: build.query({
                query: (id)=>`properties/${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "PropertyDetails",
                            id
                        }
                    ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        error: "Failed to load property details."
                    });
                }
            }),
            // tenant related endpoints
            getTenant: build.query({
                query: (cognitoId)=>`tenants/${cognitoId}`,
                providesTags: (result)=>[
                        {
                            type: "Tenants",
                            id: result?.id
                        }
                    ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        error: "Failed to load tenant profile."
                    });
                }
            }),
            getCurrentResidences: build.query({
                query: (cognitoId)=>`tenants/${cognitoId}/current-residences`,
                providesTags: (result)=>result ? [
                        ...result.map(({ id })=>({
                                type: "Properties",
                                id
                            })),
                        {
                            type: "Properties",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Properties",
                            id: "LIST"
                        }
                    ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        error: "Failed to fetch current residences."
                    });
                }
            }),
            updateTenantSettings: build.mutation({
                query: ({ cognitoId, ...updatedTenant })=>({
                        url: `tenants/${cognitoId}`,
                        method: "PUT",
                        body: updatedTenant
                    }),
                invalidatesTags: (result)=>[
                        {
                            type: "Tenants",
                            id: result?.id
                        }
                    ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        success: "Settings updated successfully!",
                        error: "Failed to update settings."
                    });
                }
            }),
            addFavoriteProperty: build.mutation({
                query: ({ cognitoId, propertyId })=>({
                        url: `tenants/${cognitoId}/favorites/${propertyId}`,
                        method: "POST"
                    }),
                invalidatesTags: (result)=>[
                        {
                            type: "Tenants",
                            id: result?.id
                        },
                        {
                            type: "Properties",
                            id: "LIST"
                        }
                    ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        success: "Added to favorites!!",
                        error: "Failed to add to favorites"
                    });
                }
            }),
            removeFavoriteProperty: build.mutation({
                query: ({ cognitoId, propertyId })=>({
                        url: `tenants/${cognitoId}/favorites/${propertyId}`,
                        method: "DELETE"
                    }),
                invalidatesTags: (result)=>[
                        {
                            type: "Tenants",
                            id: result?.id
                        },
                        {
                            type: "Properties",
                            id: "LIST"
                        }
                    ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        success: "Removed from favorites!",
                        error: "Failed to remove from favorites."
                    });
                }
            }),
            // manager related endpoints
            getManagerProperties: build.query({
                query: (cognitoId)=>`managers/${cognitoId}/properties`,
                providesTags: (result)=>result ? [
                        ...result.map(({ id })=>({
                                type: "Properties",
                                id
                            })),
                        {
                            type: "Properties",
                            id: "LIST"
                        }
                    ] : [
                        {
                            type: "Properties",
                            id: "LIST"
                        }
                    ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        error: "Failed to load manager profile."
                    });
                }
            }),
            updateManagerSettings: build.mutation({
                query: ({ cognitoId, ...updatedManager })=>({
                        url: `managers/${cognitoId}`,
                        method: "PUT",
                        body: updatedManager
                    }),
                invalidatesTags: (result)=>[
                        {
                            type: "Managers",
                            id: result?.id
                        }
                    ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        success: "Settings updated successfully!",
                        error: "Failed to update settings."
                    });
                }
            }),
            createProperty: build.mutation({
                query: (newProperty)=>({
                        url: `properties`,
                        method: "POST",
                        body: newProperty
                    }),
                invalidatesTags: (result)=>[
                        {
                            type: "Properties",
                            id: "LIST"
                        },
                        {
                            type: "Managers",
                            id: result?.manager?.id
                        }
                    ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        success: "Property created successfully!",
                        error: "Failed to create property."
                    });
                }
            }),
            // lease related enpoints
            getLeases: build.query({
                query: ()=>"leases",
                providesTags: [
                    "Leases"
                ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        error: "Failed to fetch leases."
                    });
                }
            }),
            getPropertyLeases: build.query({
                query: (propertyId)=>`properties/${propertyId}/leases`,
                providesTags: [
                    "Leases"
                ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        error: "Failed to fetch property leases."
                    });
                }
            }),
            getPayments: build.query({
                query: (leaseId)=>`leases/${leaseId}/payments`,
                providesTags: [
                    "Payments"
                ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        error: "Failed to fetch payment info."
                    });
                }
            }),
            // application related endpoints
            getApplications: build.query({
                query: (params)=>{
                    const queryParams = new URLSearchParams();
                    if (params.userId) {
                        queryParams.append("userId", params.userId.toString());
                    }
                    if (params.userType) {
                        queryParams.append("userType", params.userType);
                    }
                    return `applications?${queryParams.toString()}`;
                },
                providesTags: [
                    "Applications"
                ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        error: "Failed to fetch applications."
                    });
                }
            }),
            updateApplicationStatus: build.mutation({
                query: ({ id, status })=>({
                        url: `applications/${id}/status`,
                        method: "PUT",
                        body: {
                            status
                        }
                    }),
                invalidatesTags: [
                    "Applications",
                    "Leases"
                ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        success: "Application status updated successfully!",
                        error: "Failed to update application settings."
                    });
                }
            }),
            createApplication: build.mutation({
                query: (body)=>({
                        url: `applications`,
                        method: "POST",
                        body: body
                    }),
                invalidatesTags: [
                    "Applications"
                ],
                async onQueryStarted (_, { queryFulfilled }) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withToast"])(queryFulfilled, {
                        success: "Application created successfully!",
                        error: "Failed to create applications."
                    });
                }
            })
        })
});
const { useGetAuthUserQuery, useUpdateTenantSettingsMutation, useUpdateManagerSettingsMutation, useGetPropertiesQuery, useGetPropertyQuery, useGetTenantQuery, useAddFavoritePropertyMutation, useRemoveFavoritePropertyMutation, useGetCurrentResidencesQuery, useGetLeasesQuery, useGetPaymentsQuery, useGetManagerPropertiesQuery, useGetPropertyLeasesQuery, useGetApplicationsQuery, useUpdateApplicationStatusMutation, useCreateApplicationMutation, useCreatePropertyMutation } = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/state/redux.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StoreProvider),
    "makeStore": (()=>makeStore),
    "useAppDispatch": (()=>useAppDispatch),
    "useAppSelector": (()=>useAppSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/dist/redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* REDUX STORE */ const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineReducers"])({
    global: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].reducer
});
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].middleware)
    });
};
const useAppDispatch = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
};
_s(useAppDispatch, "jI3HA1r1Cumjdbu14H7G+TUj798=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"];
function StoreProvider({ children }) {
    _s1();
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupListeners"])(storeRef.current.dispatch);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: storeRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/state/redux.tsx",
        lineNumber: 43,
        columnNumber: 10
    }, this);
}
_s1(StoreProvider, "EtiU7pDwGhTDZwMnrKEqZbxjqXE=");
_c = StoreProvider;
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(auth)/authProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aws$2d$amplify$2f$dist$2f$esm$2f$initSingleton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__DefaultAmplify__as__Amplify$3e$__ = __turbopack_context__.i("[project]/node_modules/aws-amplify/dist/esm/initSingleton.mjs [app-client] (ecmascript) <export DefaultAmplify as Amplify>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Authenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/Authenticator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Heading/Heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Radio$2f$Radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-amplify/ui-react/dist/esm/primitives/Radio/Radio.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$RadioGroupField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-amplify/ui-react/dist/esm/primitives/RadioGroupField/RadioGroupField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__ = __turbopack_context__.i("[project]/node_modules/@aws-amplify/ui-react-core/dist/esm/Authenticator/hooks/useAuthenticator/useAuthenticator.mjs [app-client] (ecmascript) <export default as useAuthenticator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-amplify/ui-react/dist/esm/primitives/View/View.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
// https://docs.amplify.aws/gen1/javascript/tools/libraries/configure-categories/
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aws$2d$amplify$2f$dist$2f$esm$2f$initSingleton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__DefaultAmplify__as__Amplify$3e$__["Amplify"].configure({
    Auth: {
        Cognito: {
            userPoolId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID,
            userPoolClientId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID
        }
    }
});
const components = {
    Header () {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
            className: "mt-4 mb-7",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Heading$2f$Heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                    level: 3,
                    className: "!text-2xl !font-bold",
                    children: [
                        "RENT",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-secondary-500 font-light hover:!text-primary-300",
                            children: "FIND"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/authProvider.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/authProvider.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold",
                            children: "Welcome!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/authProvider.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        " Please sign in to continue"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/authProvider.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(auth)/authProvider.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    },
    SignIn: {
        Footer () {
            const { toSignUp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                className: "text-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: [
                        "Don't have an account?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toSignUp,
                            className: "text-primary hover:underline bg-transparent border-none p-0",
                            children: "Sign up here"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/authProvider.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/authProvider.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/authProvider.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this);
        }
    },
    SignUp: {
        FormFields () {
            const { validationErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Authenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Authenticator"].SignUp.FormFields, {}, void 0, false, {
                        fileName: "[project]/src/app/(auth)/authProvider.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$RadioGroupField$2f$RadioGroupField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupField"], {
                        legend: "Role",
                        name: "custom:role",
                        errorMessage: validationErrors?.["custom:role"],
                        hasError: !!validationErrors?.["custom:role"],
                        isRequired: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Radio$2f$Radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radio"], {
                                value: "tenant",
                                children: "Tenant"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/authProvider.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$Radio$2f$Radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radio"], {
                                value: "manager",
                                children: "Manager"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/authProvider.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/authProvider.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true);
        },
        Footer () {
            const { toSignIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$primitives$2f$View$2f$View$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["View"], {
                className: "text-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: [
                        "Already have an account?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toSignIn,
                            className: "text-primary hover:underline bg-transparent border-none p-0",
                            children: "Sign in"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(auth)/authProvider.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(auth)/authProvider.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(auth)/authProvider.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this);
        }
    }
};
const formFields = {
    signIn: {
        username: {
            placeholder: "Enter your email",
            label: "Email",
            isRequired: true
        },
        password: {
            placeholder: "Enter your password",
            label: "Password",
            isRequired: true
        }
    },
    signUp: {
        username: {
            order: 1,
            placeholder: "Choose a username",
            label: "Username",
            isRequired: true
        },
        email: {
            order: 2,
            placeholder: "Enter your email address",
            label: "Email",
            isRequired: true
        },
        password: {
            order: 3,
            placeholder: "Create a password",
            label: "Password",
            isRequired: true
        },
        confirm_password: {
            order: 4,
            placeholder: "Confirm your password",
            label: "Confirm Password",
            isRequired: true
        }
    }
};
const Auth = ({ children })=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"])({
        "Auth.useAuthenticator": (context)=>[
                context.user
            ]
    }["Auth.useAuthenticator"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isAuthPage = pathname.match(/^\/(signin|signup)$/);
    const isDashboardPage = pathname.startsWith("/manager") || pathname.startsWith("/tenants");
    // Redirect authenticated users away from auth pages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Auth.useEffect": ()=>{
            if (user && isAuthPage) {
                router.push("/");
            }
        }
    }["Auth.useEffect"], [
        user,
        isAuthPage,
        router
    ]);
    // Allow access to public pages without authentication
    if (!isAuthPage && !isDashboardPage) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Authenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Authenticator"], {
            initialState: pathname.includes("signup") ? "signUp" : "signIn",
            components: components,
            formFields: formFields,
            children: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: children
                }, void 0, false)
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/authProvider.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/authProvider.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
};
_s(Auth, "kcT5PVDO8Pamf+C6SKWzMRMGR9Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2d$core$2f$dist$2f$esm$2f$Authenticator$2f$hooks$2f$useAuthenticator$2f$useAuthenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthenticator$3e$__["useAuthenticator"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Auth;
const __TURBOPACK__default__export__ = Auth;
var _c;
__turbopack_context__.k.register(_c, "Auth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/providers.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$redux$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/redux.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Authenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-amplify/ui-react/dist/esm/components/Authenticator/Authenticator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$authProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/authProvider.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const Providers = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$redux$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$ui$2d$react$2f$dist$2f$esm$2f$components$2f$Authenticator$2f$Authenticator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Authenticator"].Provider, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$authProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/providers.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/providers.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = Providers;
const __TURBOPACK__default__export__ = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/sonner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Toaster = ({ ...props })=>{
    _s();
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_s(Toaster, "EriOrahfenYKDCErPq+L6926Dw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_4e1fafc4._.js.map