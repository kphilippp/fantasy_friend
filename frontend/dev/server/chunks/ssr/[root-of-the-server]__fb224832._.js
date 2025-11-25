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
"[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/leagues/page.tsx
__turbopack_context__.s([
    "default",
    ()=>LeaguesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Projects/fantasy-friend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Projects/fantasy-friend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Development/Projects/fantasy-friend/lib/mockData.ts [app-rsc] (ecmascript)");
;
;
;
function LeaguesPage() {
    const hasLeagues = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockLeagues"].length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-8 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold",
                        children: "Your Leagues"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mt-2",
                        children: "These are the leagues currently connected to Fantasy Friend."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            !hasLeagues && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "No leagues connected yet. Once you sync your ESPN account, they'll show up here."
            }, void 0, false, {
                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this),
            hasLeagues && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-4 md:grid-cols-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockLeagues"].map((league)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/leagues/${league.id}`,
                        className: "border border-gray-800 rounded-xl p-4 hover:border-gray-500 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: league.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400",
                                children: [
                                    "Season ",
                                    league.season
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Development$2f$Projects$2f$fantasy$2d$friend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 mt-2",
                                children: [
                                    "Teams: ",
                                    league.teams.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this)
                        ]
                    }, league.id, true, {
                        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Development/Projects/fantasy-friend/app/leagues/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fb224832._.js.map