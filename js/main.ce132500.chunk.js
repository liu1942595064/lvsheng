(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    11 : function(e, a, t) {},
    12 : function(e, a, t) {
        "use strict";
        t.r(a);
        var l = t(3),
        n = t(0),
        r = t.n(n),
        c = t(2),
        i = t.n(c),
        m = t(4),
        s = {
            dataState: "init",
            chapter: {
                name: "Prologue",
                description: "\u300e\u0020\u8c28\u817b\u5b50\u7684\u5e7b\u60f3\u4e61\u0020\u300f"
            }
        },
        d = function(e, a) {
            switch (a.type) {
            case "switch":
                return {
                    dataState:
                    "close" === e.dataState || "init" === e.dataState ? "open": "close",
                    chapter: Object(m.a)({},
                    e.chapter)
                };
            case "changeChapter":
                return {
                    dataState:
                    e.dataState,
                    chapter: {
                        name: a.payload.name,
                        description: a.payload.description
                    }
                };
            default:
                return e
            }
        },
        E = r.a.createContext(),
        u = {
            Prologue: "\u300e\u0020\u8c28\u817b\u5b50\u7684\u5e7b\u60f3\u4e61\u0020\u300f",
            Chapter_1: "\u53ef\u7231\u304f\u306a\u308a\u305f\u3044",
            Chapter_2: "\u732b\u3068\u6708",
            Chapter_3: "\u590f\u591c\u306e\u30de\u30b8\u30c3\u30af",
            LastChapter: "Main Land"
        },
        v = function(e) {
            return {
                name: e,
                description: u[e]
            }
        };
        function o() {
            var e = Object(n.useContext)(E).dispatch,
            a = v("Chapter_1"),
            t = {
                name: "LastChapter",
                description: "Main Land"
            };
            return r.a.createElement("div", {
                id: "prologue"
            },
            r.a.createElement("div", {
                className: "prologue-bg"
            },
            r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "prologue-frame"
            },
            r.a.createElement("div", null, r.a.createElement("span", null), r.a.createElement("span", null), r.a.createElement("span", null)), r.a.createElement("div", null, r.a.createElement("span", null), r.a.createElement("span", null), r.a.createElement("span", null))), r.a.createElement("div", {
                className: "prologue-stage"
            },
            r.a.createElement("div", {
                className: "prologue-stage-curtain"
            },
            r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "prologue-stage-title"
            },
            r.a.createElement("div", null), r.a.createElement("div", null))), r.a.createElement("div", {
                className: "prologue-cover"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "prologue-wave"
            }), r.a.createElement("div", {
                className: "prologue-logo"
            }), r.a.createElement("div", {
                className: "prologue-out"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", {
                onAnimationEnd: function() {
                    return e({
                        type: "changeChapter",
                        payload: a
                    })
                }
            })), r.a.createElement("div", {
                className: "prologue-skip",
                onClick: function() {
                    return e({
                        type: "changeChapter",
                        payload: t
                    })
                }
            }))
        }
        function p(e) {
            return r.a.createElement("div", {
                className: "open-chapter"
            },
            r.a.createElement("div", {
                className: "chapter-bg"
            }), r.a.createElement("div", {
                className: "chapter-title"
            },
            r.a.createElement("div", {
                className: "chapter-description"
            },
            e.chapter.description), r.a.createElement("div", {
                className: "chapter-name"
            },
            e.chapter.name.toUpperCase())))
        }
        function h() {
            var e = Object(n.useContext)(E),
            a = e.store,
            t = e.dispatch,
            l = v("Chapter_2");
            return r.a.createElement("div", {
                id: "chapter1"
            },
            r.a.createElement(p, {
                chapter: a.chapter
            }), r.a.createElement("div", {
                className: "chapter1-open"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "chapter1-effects"
            },
            r.a.createElement("div", {
                className: "chapter1-effects-outside"
            },
            r.a.createElement("div", {
                className: "lines"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "points"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null))), r.a.createElement("div", {
                className: "chapter1-effects-inside"
            },
            r.a.createElement("div", null), r.a.createElement("div", null))), r.a.createElement("div", {
                className: "chapter1-radio"
            },
            r.a.createElement("div", {
                className: "chapter1-radio-start"
            })), r.a.createElement("div", {
                className: "chapter1-night"
            },
            r.a.createElement("div", null)), r.a.createElement("div", {
                className: "chapter1-cards"
            },
            r.a.createElement("div", {
                className: "group-1"
            },
            r.a.createElement("div", null)), r.a.createElement("div", {
                className: "group-2"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "group-3"
            },
            r.a.createElement("div", {
                className: "part-1"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "part-2"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null))), r.a.createElement("div", {
                className: "group-4"
            },
            r.a.createElement("div", null), r.a.createElement("div", null))), r.a.createElement("div", {
                className: "chapter1-kurukuru"
            },
            r.a.createElement("div", {
                className: "line-wrapper"
            },
            r.a.createElement("div", {
                className: "line"
            })), r.a.createElement("div", {
                className: "line-wrapper"
            },
            r.a.createElement("div", {
                className: "line"
            })), r.a.createElement("div", {
                className: "line-wrapper"
            },
            r.a.createElement("div", {
                className: "line"
            })), r.a.createElement("div", {
                className: "line-wrapper"
            },
            r.a.createElement("div", {
                className: "line"
            })), r.a.createElement("div", {
                className: "line-wrapper"
            },
            r.a.createElement("div", {
                className: "line"
            })), r.a.createElement("div", {
                className: "line-wrapper"
            },
            r.a.createElement("div", {
                className: "line"
            })), r.a.createElement("div", {
                className: "line-wrapper"
            },
            r.a.createElement("div", {
                className: "line"
            })), r.a.createElement("div", {
                className: "line-wrapper"
            },
            r.a.createElement("div", {
                className: "line"
            }))), r.a.createElement("div", {
                className: "chapter1-close"
            },
            r.a.createElement("div", null), r.a.createElement("div", {
                onAnimationEnd: function() {
                    return t({
                        type: "changeChapter",
                        payload: l
                    })
                }
            })))
        }
        function N() {
            var e = Object(n.useContext)(E),
            a = e.store,
            t = e.dispatch,
            l = v("Chapter_3");
            return r.a.createElement("div", {
                id: "chapter2"
            },
            r.a.createElement(p, {
                chapter: a.chapter
            }), r.a.createElement("div", {
                className: "chapter2-open"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "chapter2-claws"
            },
            r.a.createElement("div", {
                className: "left"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "right"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null))), r.a.createElement("div", {
                className: "chapter2-night-fall"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "chapter2-stage"
            },
            r.a.createElement("div", {
                className: "corners corner-1"
            },
            r.a.createElement("div", {
                className: "inside-bg"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "inside-squ"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null))), r.a.createElement("div", {
                className: "corners corner-2"
            },
            r.a.createElement("div", {
                className: "inside-bg"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "inside-squ"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null))), r.a.createElement("div", {
                className: "corners corner-3"
            },
            r.a.createElement("div", {
                className: "inside-bg"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "inside-squ"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null))), r.a.createElement("div", {
                className: "corners corner-4"
            },
            r.a.createElement("div", {
                className: "inside-bg"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "inside-squ"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null))), r.a.createElement("div", {
                className: "lines"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "center"
            }), r.a.createElement("div", {
                className: "actress"
            })), r.a.createElement("div", {
                className: "chapter2-close"
            },
            r.a.createElement("div", {
                className: "groups group-1"
            },
            r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "groups group-2"
            },
            r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "groups group-3"
            },
            r.a.createElement("div", null), r.a.createElement("div", {
                onAnimationEnd: function() {
                    return t({
                        type: "changeChapter",
                        payload: l
                    })
                }
            }))))
        }
        function g() {
            var e = Object(n.useContext)(E),
            a = e.store,
            t = e.dispatch,
            l = v("LastChapter");
            return r.a.createElement("div", {
                id: "chapter3",
                onAnimationEnd: function(e) {
                    e && e.target && e.target.id && "chapter3" === e.target.id && t({
                        type: "changeChapter",
                        payload: l
                    })
                }
            },
            r.a.createElement(p, {
                chapter: a.chapter
            }), r.a.createElement("div", {
                className: "chapter3-sunny"
            },
            r.a.createElement("div", {
                className: "chapter3-sunny__in"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("div", {
                className: "chapter3-sunny__cards"
            },
            r.a.createElement("section", {
                className: "part-1"
            },
            r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("section", {
                className: "part-2"
            },
            r.a.createElement("span", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("section", {
                className: "part-3"
            },
            r.a.createElement("div", null), r.a.createElement("div", null))), r.a.createElement("div", {
                className: "chapter3-sunny__lights"
            },
            r.a.createElement("section", {
                className: "part-1"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)), r.a.createElement("section", {
                className: "part-2"
            },
            r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null), r.a.createElement("div", null)))), r.a.createElement("div", {
                className: "chapter3-shiny-wrap"
            },
            r.a.createElement("div", {
                className: "chapter3-shiny-box"
            },
            r.a.createElement("div", {
                className: "chapter3-shiny-item"
            }))))
        }
        function f() {
            var e = Object(n.useContext)(E),
            a = e.store,
            t = e.dispatch;
            return r.a.createElement("div", {
                id: "index-page"
            },
            r.a.createElement("div", {
                className: "index-bg"
            },
            r.a.createElement("span", null), r.a.createElement("span", null), r.a.createElement("span", null)), r.a.createElement("div", {
                className: "index-logo"
            }), r.a.createElement("div", {
                id: "index-button",
                "data-state": a.dataState,
                onClick: function() {
                    return t({
                        type: "switch"
                    })
                }
            },
            r.a.createElement("div", {
                className: "btn-bg"
            }), r.a.createElement("div", {
                className: "btn-main"
            },
            r.a.createElement("div", {
                className: "short-id short-id-1"
            },
            r.a.createElement("span", null), r.a.createElement("span", null), r.a.createElement("span", null), r.a.createElement("span", null)), r.a.createElement("div", {
                className: "short-id short-id-2"
            },
            r.a.createElement("span", null), r.a.createElement("span", null), r.a.createElement("span", null)))), r.a.createElement("div", {
                className: "index-sns"
            },
            r.a.createElement("div", {
                className: "inner"
            },
            r.a.createElement("a", {
                target: "_blank",
                href: "https://jonayze.top",
                title: "Blog",
                rel: "noopener noreferrer"
            },
            r.a.createElement("i", {
                className: "czs-pen-write"
            })),  r.a.createElement("a", {
                target: "_blank",
                href: "https://github.com/liu1942595064",
                title: "GitHub",
                rel: "noopener noreferrer"
            },
            r.a.createElement("i", {
                className: "czs-github-logo"
            })),  r.a.createElement("a", {
                target: "_blank",
                href: "https://space.bilibili.com/381939062",
                title: "Bilibili",
                rel: "noopener noreferrer"
            },
            r.a.createElement("i", {
                className: "czs-bilibili"
            })))))
        }
        function b() {
            var e = Object(n.useContext)(E).store;
            return r.a.createElement("div", {
                id: "profile-switch",
                "data-state": e.dataState
            },
            r.a.createElement("span", null), r.a.createElement("span", null), r.a.createElement("span", null))
        }
        var y = [{
            id: 1,
            title: "PicGo",
            intro: "便捷式图床工具",
            thumb: "https://cdn.jsdelivr.net/gh/liu1942595064/cdn@master/lvsheng/kiwi-fruit.png",
            link: "https://github.com/Molunerfinn/PicGo/releases",
            time: "2021.2.18"
        }];
        function C() {
            var e = Object(n.useContext)(E).store,
            a = y.map(function(e) {
                return r.a.createElement("a", {
                    href: e.link,
                    key: e.id,
                    target: "_blank",
                    rel: "noopener noreferrer"
                },
                r.a.createElement("img", {
                    src: e.thumb,
                    alt: e.title
                }), r.a.createElement("h4", null, e.title), r.a.createElement("p", null, e.intro), r.a.createElement("time", null, e.time))
            });
            return r.a.createElement("div", {
                id: "profile-page",
                "data-state": e.dataState
            },
            r.a.createElement("section", {
                className: "header-box"
            },
            r.a.createElement("div", {
                className: "header"
            })), r.a.createElement("section", {
                className: "description-box"
            },
            r.a.createElement("div", {
                className: "avatar"
            }), r.a.createElement("div", {
                className: "author"
            },
            "Jonayze"), r.a.createElement("div", {
                className: "description"
            },
            "\xa0", "\xa0", "\"新出的芽用它的温柔融化了少年心中的墙堵箭影，「绿生」由此而生\" —— Cyris。我希望通过 Coding 的方式来描绘自己的内心世界，因不甘平庸而奋起，因不达目标而不懈。")), r.a.createElement("section", {
                className: "information-box"
            },
            r.a.createElement("div", {
                className: "title"
            },
            "Information"), r.a.createElement("div", {
                className: "information"
            },
            r.a.createElement("div", {
                className: "inner"
            },
            r.a.createElement("p", null, "ID：Jonayze／谨腻子"), r.a.createElement("p", null, "兴趣：Detective、DIY、RPG Games"), r.a.createElement("p", null, "最喜欢的颜色：", r.a.createElement("span", {
                style: {
                    color: "#d2f0f4"
                }
            },
            "#d2f0f4")), r.a.createElement("p", null, "喜欢的食物：今天的饭、中式面条"), r.a.createElement("p", null, "工作：自由职业者"), r.a.createElement("p", null, "邮箱：jonayze.sincerely#gmail.com (# -> @)")))), r.a.createElement("section", {
                className: "project-box"
            },
            r.a.createElement("div", {
                className: "title"
            },
            "Project"), r.a.createElement("div", {
                className: "project"
            },
            a)), r.a.createElement("section", {
                className: "afterwords-box"
            },
            r.a.createElement("div", {
                className: "title"
            },
            "Afterwords"), r.a.createElement("div", {
                className: "paragraph"
            },
            "\xa0", "\xa0", "感谢 yui540 和Cyris 创作的各种作品，以及我的启蒙导师-云游君，无论是技术层面还是设计层面我都收获了很多。也感谢一直陪伴在我身边的人，我的每一段日常都是我的灵感来源。", r.a.createElement("br", null), r.a.createElement("br", null), '"\u63a2\u6c42\u771f\u7406\u8005\u4e0d\u53ef\u5fc3\u5b58\u50b2\u6162\u3002"')), r.a.createElement("section", {
                className: "footer-box"
            },
            r.a.createElement("div", {
                className: "footer"
            },
            r.a.createElement("span", null, "\xa9", (new Date).getFullYear(), " Jonayze. All rights reserved : Cyris."))))
        }
        function w() {
            return r.a.createElement("div", {
                id: "gensokyo"
            },
            r.a.createElement(f, null), r.a.createElement(b, null), r.a.createElement(C, null))
        }
        function k() {
            var e = Object(n.useContext)(E).store;
            switch ("Prologue" === e.chapter.name && (console.log("> \u300e\u0020\u8c28\u817b\u5b50\u7684\u5e7b\u60f3\u4e61\u0020\u300f"), console.log(">  Jonayze's design portfolio v2.")), e.chapter.name) {
            case "Prologue":
                return r.a.createElement(o, null);
            case "Chapter_1":
                return r.a.createElement(h, null);
            case "Chapter_2":
                return r.a.createElement(N, null);
            case "Chapter_3":
                return r.a.createElement(g, null);
            case "LastChapter":
                default:
                    return r.a.createElement(w, null)
            }
        }
        i.a.render(r.a.createElement(function() {
            var e = Object(n.useReducer)(d, s),
            a = Object(l.a)(e, 2),
            t = a[0],
            c = a[1];
            return r.a.createElement(E.Provider, {
                value: {
                    store: t,
                    dispatch: c
                }
            },
            r.a.createElement(k, null))
        },
        null), document.getElementById("root"));
        t(11)
    },
    5 : function(e, a, t) {
        e.exports = t(12)
    }
},
[[5, 1, 2]]]);
//# sourceMappingURL=main.ce132500.chunk.js.map
