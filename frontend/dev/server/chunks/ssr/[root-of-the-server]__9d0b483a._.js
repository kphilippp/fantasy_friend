module.exports = [
"[project]/Documents/Development/Projects/fantasy-friend/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/Development/Projects/fantasy-friend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Development/Projects/fantasy-friend/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/Development/Projects/fantasy-friend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/Development/Projects/fantasy-friend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Development/Projects/fantasy-friend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/Development/Projects/fantasy-friend/lib/mockData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockLeagues",
    ()=>mockLeagues,
    "mockTrades",
    ()=>mockTrades
]);
const mockLeagues = [
    {
        id: 1,
        name: "MTCFB",
        season: "2025",
        teams: [
            {
                id: 101,
                name: "Holy Hail Marys",
                owner: "Kevin",
                roster: [
                    {
                        id: 1,
                        name: "CeeDee Lamb",
                        position: "WR",
                        team: "DAL"
                    },
                    {
                        id: 2,
                        name: "Bijan Robinson",
                        position: "RB",
                        team: "ATL"
                    },
                    {
                        id: 3,
                        name: "Anthony Richardson",
                        position: "QB",
                        team: "IND"
                    },
                    {
                        id: 4,
                        name: "Sam LaPorta",
                        position: "TE",
                        team: "DET"
                    }
                ]
            },
            {
                id: 102,
                name: "Sunday School Sweepers",
                owner: "Jadon",
                roster: [
                    {
                        id: 5,
                        name: "Justin Jefferson",
                        position: "WR",
                        team: "MIN"
                    },
                    {
                        id: 6,
                        name: "Breece Hall",
                        position: "RB",
                        team: "NYJ"
                    },
                    {
                        id: 7,
                        name: "CJ Stroud",
                        position: "QB",
                        team: "HOU"
                    },
                    {
                        id: 8,
                        name: "Kyle Pitts",
                        position: "TE",
                        team: "ATL"
                    }
                ]
            },
            {
                id: 103,
                name: "Choir Loft Champions",
                owner: "Mahdi",
                roster: [
                    {
                        id: 9,
                        name: "Amon-Ra St. Brown",
                        position: "WR",
                        team: "DET"
                    },
                    {
                        id: 10,
                        name: "Saquon Barkley",
                        position: "RB",
                        team: "PHI"
                    },
                    {
                        id: 11,
                        name: "Jalen Hurts",
                        position: "QB",
                        team: "PHI"
                    },
                    {
                        id: 12,
                        name: "George Kittle",
                        position: "TE",
                        team: "SF"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Work Friends League",
        season: "2025",
        teams: [
            {
                id: 201,
                name: "Office Offense",
                owner: "Alex",
                roster: [
                    {
                        id: 13,
                        name: "Ja'Marr Chase",
                        position: "WR",
                        team: "CIN"
                    },
                    {
                        id: 14,
                        name: "Jonathan Taylor",
                        position: "RB",
                        team: "IND"
                    },
                    {
                        id: 15,
                        name: "Josh Allen",
                        position: "QB",
                        team: "BUF"
                    },
                    {
                        id: 16,
                        name: "Mark Andrews",
                        position: "TE",
                        team: "BAL"
                    }
                ]
            },
            {
                id: 202,
                name: "Desk Job Defense",
                owner: "Sam",
                roster: [
                    {
                        id: 17,
                        name: "Garrett Wilson",
                        position: "WR",
                        team: "NYJ"
                    },
                    {
                        id: 18,
                        name: "Tony Pollard",
                        position: "RB",
                        team: "TEN"
                    },
                    {
                        id: 19,
                        name: "Joe Burrow",
                        position: "QB",
                        team: "CIN"
                    },
                    {
                        id: 20,
                        name: "Dallas Goedert",
                        position: "TE",
                        team: "PHI"
                    }
                ]
            }
        ]
    }
];
const mockTrades = [
    {
        id: "trade-1",
        leagueId: "1",
        title: "Lamb + Bijan for Jefferson + Hall",
        userTeamName: "Holy Hail Marys",
        tradingWithTeamName: "Sunday School Sweepers",
        aiScore: "0.78",
        aiBreakdown: "This trade slightly favors you. You upgrade at WR with Jefferson while giving up a small amount of RB depth. Overall, your weekly ceiling increases but your RB position becomes thinner."
    },
    {
        id: "trade-2",
        leagueId: "1",
        title: "Anthony Richardson for CJ Stroud",
        userTeamName: "Holy Hail Marys",
        tradingWithTeamName: "Sunday School Sweepers",
        aiScore: "0.52",
        aiBreakdown: "This trade is close to even. Richardson offers more rushing upside but higher injury and volatility risk, while Stroud gives a safer weekly floor in most projections."
    },
    {
        id: "trade-3",
        leagueId: "2",
        title: "Ja'Marr Chase for Garrett Wilson + Pollard",
        userTeamName: "Office Offense",
        tradingWithTeamName: "Desk Job Defense",
        aiScore: "0.60",
        aiBreakdown: "You gain depth with a starting RB and WR while giving up the best player in the deal. This is solid if your roster is thin, but a slight downgrade in pure top-end talent."
    }
];
}),
"[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/dashboard/page.tsx
__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Projects/fantasy-friend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Projects/fantasy-friend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Projects/fantasy-friend/lib/mockData.ts [app-rsc] (ecmascript)");
;
;
;
function DashboardPage() {
    const totalLeagues = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockLeagues"].length;
    const totalTrades = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockTrades"].length;
    const latestTrade = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockTrades"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-8 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold",
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mt-2",
                        children: "Overview of your fantasy leagues and recent trade activity."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-4 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-gray-800 rounded-xl p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm text-gray-400 uppercase tracking-wide",
                                children: "Connected Leagues"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-3xl font-semibold",
                                children: totalLeagues
                            }, void 0, false, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-gray-800 rounded-xl p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm text-gray-400 uppercase tracking-wide",
                                children: "Analyzed Trades"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-3xl font-semibold",
                                children: totalTrades
                            }, void 0, false, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-gray-800 rounded-xl p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm text-gray-400 uppercase tracking-wide",
                                children: "Last Trade Score"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-3xl font-semibold",
                                children: latestTrade ? `${Math.round(parseFloat(latestTrade.aiScore) * 100)}%` : "—"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            latestTrade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-gray-500",
                                children: latestTrade.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Quick Links"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/leagues",
                                className: "px-4 py-2 rounded-md border border-gray-700 hover:border-gray-500 transition",
                                children: "View all leagues"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockLeagues"][0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/leagues/${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockLeagues"][0].id}/trade-builder`,
                                className: "px-4 py-2 rounded-md border border-gray-700 hover:border-gray-500 transition",
                                children: [
                                    "Open trade builder for ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockLeagues"][0].name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/trades",
                                className: "px-4 py-2 rounded-md border border-gray-700 hover:border-gray-500 transition",
                                children: "View trade history"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Development/Projects/fantasy-friend/app/dashboard/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9d0b483a._.js.map