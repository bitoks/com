(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-12c60cd5"], {
        "014b": function(e, t, s) {
            "use strict";
            var i = s("e53d"),
                a = s("07e3"),
                n = s("8e60"),
                r = s("63b6"),
                o = s("9138"),
                l = s("ebfd").KEY,
                c = s("294c"),
                u = s("dbdb"),
                p = s("45f2"),
                m = s("62a0"),
                h = s("5168"),
                g = s("ccb9"),
                d = s("6718"),
                f = s("47ee"),
                y = s("9003"),
                v = s("e4ae"),
                b = s("f772"),
                w = s("241e"),
                C = s("36c3"),
                x = s("1bc3"),
                k = s("aebd"),
                S = s("a159"),
                _ = s("0395"),
                $ = s("bf0b"),
                M = s("9aa9"),
                P = s("d9f6"),
                L = s("c3a1"),
                T = $.f,
                j = P.f,
                U = _.f,
                E = i.Symbol,
                A = i.JSON,
                D = A && A.stringify,
                I = "prototype",
                O = h("_hidden"),
                N = h("toPrimitive"),
                B = {}.propertyIsEnumerable,
                H = u("symbol-registry"),
                W = u("symbols"),
                q = u("op-symbols"),
                R = Object[I],
                F = "function" == typeof E && !!M.f,
                z = i.QObject,
                G = !z || !z[I] || !z[I].findChild,
                V = n && c((function() {
                    return 7 != S(j({}, "a", {
                        get: function() {
                            return j(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                })) ? function(e, t, s) {
                    var i = T(R, t);
                    i && delete R[t], j(e, t, s), i && e !== R && j(R, t, i)
                } : j,
                Y = function(e) {
                    var t = W[e] = S(E[I]);
                    return t._k = e, t
                },
                X = F && "symbol" == typeof E.iterator ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    return e instanceof E
                },
                K = function(e, t, s) {
                    return e === R && K(q, t, s), v(e), t = x(t, !0), v(s), a(W, t) ? (s.enumerable ? (a(e, O) && e[O][t] && (e[O][t] = !1), s = S(s, {
                        enumerable: k(0, !1)
                    })) : (a(e, O) || j(e, O, k(1, {})), e[O][t] = !0), V(e, t, s)) : j(e, t, s)
                },
                J = function(e, t) {
                    v(e);
                    var s, i = f(t = C(t)),
                        a = 0,
                        n = i.length;
                    while (n > a) K(e, s = i[a++], t[s]);
                    return e
                },
                Q = function(e, t) {
                    return void 0 === t ? S(e) : J(S(e), t)
                },
                Z = function(e) {
                    var t = B.call(this, e = x(e, !0));
                    return !(this === R && a(W, e) && !a(q, e)) && (!(t || !a(this, e) || !a(W, e) || a(this, O) && this[O][e]) || t)
                },
                ee = function(e, t) {
                    if (e = C(e), t = x(t, !0), e !== R || !a(W, t) || a(q, t)) {
                        var s = T(e, t);
                        return !s || !a(W, t) || a(e, O) && e[O][t] || (s.enumerable = !0), s
                    }
                },
                te = function(e) {
                    var t, s = U(C(e)),
                        i = [],
                        n = 0;
                    while (s.length > n) a(W, t = s[n++]) || t == O || t == l || i.push(t);
                    return i
                },
                se = function(e) {
                    var t, s = e === R,
                        i = U(s ? q : C(e)),
                        n = [],
                        r = 0;
                    while (i.length > r) !a(W, t = i[r++]) || s && !a(R, t) || n.push(W[t]);
                    return n
                };
            F || (E = function() {
                if (this instanceof E) throw TypeError("Symbol is not a constructor!");
                var e = m(arguments.length > 0 ? arguments[0] : void 0),
                    t = function(s) {
                        this === R && t.call(q, s), a(this, O) && a(this[O], e) && (this[O][e] = !1), V(this, e, k(1, s))
                    };
                return n && G && V(R, e, {
                    configurable: !0,
                    set: t
                }), Y(e)
            }, o(E[I], "toString", (function() {
                return this._k
            })), $.f = ee, P.f = K, s("6abf").f = _.f = te, s("355d").f = Z, M.f = se, n && !s("b8e3") && o(R, "propertyIsEnumerable", Z, !0), g.f = function(e) {
                return Y(h(e))
            }), r(r.G + r.W + r.F * !F, {
                Symbol: E
            });
            for (var ie = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ae = 0; ie.length > ae;) h(ie[ae++]);
            for (var ne = L(h.store), re = 0; ne.length > re;) d(ne[re++]);
            r(r.S + r.F * !F, "Symbol", {
                for: function(e) {
                    return a(H, e += "") ? H[e] : H[e] = E(e)
                },
                keyFor: function(e) {
                    if (!X(e)) throw TypeError(e + " is not a symbol!");
                    for (var t in H)
                        if (H[t] === e) return t
                },
                useSetter: function() {
                    G = !0
                },
                useSimple: function() {
                    G = !1
                }
            }), r(r.S + r.F * !F, "Object", {
                create: Q,
                defineProperty: K,
                defineProperties: J,
                getOwnPropertyDescriptor: ee,
                getOwnPropertyNames: te,
                getOwnPropertySymbols: se
            });
            var oe = c((function() {
                M.f(1)
            }));
            r(r.S + r.F * oe, "Object", {
                getOwnPropertySymbols: function(e) {
                    return M.f(w(e))
                }
            }), A && r(r.S + r.F * (!F || c((function() {
                var e = E();
                return "[null]" != D([e]) || "{}" != D({
                    a: e
                }) || "{}" != D(Object(e))
            }))), "JSON", {
                stringify: function(e) {
                    var t, s, i = [e],
                        a = 1;
                    while (arguments.length > a) i.push(arguments[a++]);
                    if (s = t = i[1], (b(t) || void 0 !== e) && !X(e)) return y(t) || (t = function(e, t) {
                        if ("function" == typeof s && (t = s.call(this, e, t)), !X(t)) return t
                    }), i[1] = t, D.apply(A, i)
                }
            }), E[I][N] || s("35e8")(E[I], N, E[I].valueOf), p(E, "Symbol"), p(Math, "Math", !0), p(i.JSON, "JSON", !0)
        },
        "0395": function(e, t, s) {
            var i = s("36c3"),
                a = s("6abf").f,
                n = {}.toString,
                r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                o = function(e) {
                    try {
                        return a(e)
                    } catch (t) {
                        return r.slice()
                    }
                };
            e.exports.f = function(e) {
                return r && "[object Window]" == n.call(e) ? o(e) : a(i(e))
            }
        },
        "0fc9": function(e, t, s) {
            var i = s("3a38"),
                a = Math.max,
                n = Math.min;
            e.exports = function(e, t) {
                return e = i(e), e < 0 ? a(e + t, 0) : n(e, t)
            }
        },
        1654: function(e, t, s) {
            "use strict";
            var i = s("71c1")(!0);
            s("30f1")(String, "String", (function(e) {
                this._t = String(e), this._i = 0
            }), (function() {
                var e, t = this._t,
                    s = this._i;
                return s >= t.length ? {
                    value: void 0,
                    done: !0
                } : (e = i(t, s), this._i += e.length, {
                    value: e,
                    done: !1
                })
            }))
        },
        1691: function(e, t) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        },
        "23c68": function(e, t, s) {
            "use strict";
            s("2d45")
        },
        "241e": function(e, t, s) {
            var i = s("25eb");
            e.exports = function(e) {
                return Object(i(e))
            }
        },
        "25eb": function(e, t) {
            e.exports = function(e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e);
                return e
            }
        },
        "2d45": function(e, t, s) {},
        "2f0e": function(e, t, s) {
            "use strict";
            s("e5ff")
        },
        "2fd1": function(e, t, s) {
            e.exports = s.p + "img/alfa1.4471d107.jpg"
        },
        "30f1": function(e, t, s) {
            "use strict";
            var i = s("b8e3"),
                a = s("63b6"),
                n = s("9138"),
                r = s("35e8"),
                o = s("481b"),
                l = s("8f60"),
                c = s("45f2"),
                u = s("53e2"),
                p = s("5168")("iterator"),
                m = !([].keys && "next" in [].keys()),
                h = "@@iterator",
                g = "keys",
                d = "values",
                f = function() {
                    return this
                };
            e.exports = function(e, t, s, y, v, b, w) {
                l(s, t, y);
                var C, x, k, S = function(e) {
                        if (!m && e in P) return P[e];
                        switch (e) {
                            case g:
                                return function() {
                                    return new s(this, e)
                                };
                            case d:
                                return function() {
                                    return new s(this, e)
                                }
                        }
                        return function() {
                            return new s(this, e)
                        }
                    },
                    _ = t + " Iterator",
                    $ = v == d,
                    M = !1,
                    P = e.prototype,
                    L = P[p] || P[h] || v && P[v],
                    T = L || S(v),
                    j = v ? $ ? S("entries") : T : void 0,
                    U = "Array" == t && P.entries || L;
                if (U && (k = u(U.call(new e)), k !== Object.prototype && k.next && (c(k, _, !0), i || "function" == typeof k[p] || r(k, p, f))), $ && L && L.name !== d && (M = !0, T = function() {
                        return L.call(this)
                    }), i && !w || !m && !M && P[p] || r(P, p, T), o[t] = T, o[_] = f, v)
                    if (C = {
                            values: $ ? T : S(d),
                            keys: b ? T : S(g),
                            entries: j
                        }, w)
                        for (x in C) x in P || n(P, x, C[x]);
                    else a(a.P + a.F * (m || M), t, C);
                return C
            }
        },
        "32fc": function(e, t, s) {
            var i = s("e53d").document;
            e.exports = i && i.documentElement
        },
        "335c": function(e, t, s) {
            var i = s("6b4c");
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == i(e) ? e.split("") : Object(e)
            }
        },
        "33bd": function(e, t, s) {
            "use strict";
            s("4d6c")
        },
        "355d": function(e, t) {
            t.f = {}.propertyIsEnumerable
        },
        "36c3": function(e, t, s) {
            var i = s("335c"),
                a = s("25eb");
            e.exports = function(e) {
                return i(a(e))
            }
        },
        "3a38": function(e, t) {
            var s = Math.ceil,
                i = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? i : s)(e)
            }
        },
        "3aa2": function(e, t, s) {
            e.exports = s.p + "img/qiwi3.61d672ed.jpg"
        },
        "3e26": function(e, t, s) {},
        "45f2": function(e, t, s) {
            var i = s("d9f6").f,
                a = s("07e3"),
                n = s("5168")("toStringTag");
            e.exports = function(e, t, s) {
                e && !a(e = s ? e : e.prototype, n) && i(e, n, {
                    configurable: !0,
                    value: t
                })
            }
        },
        "46ba": function(e, t, s) {
            "use strict";
            s.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", [s("account-content")], 1)
                },
                a = [],
                n = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", [s("div", {
                        style: e.loadingStyle
                    }, [s("loading-bar", {
                        ref: "loadbar",
                        attrs: {
                            message: e.loadingMessage
                        }
                    })], 1), "swift" === e.$route.params.product ? s("swift-item", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isLoading,
                            expression: "!isLoading"
                        }],
                        attrs: {
                            upsell: e.upsell,
                            publicPath: e.publicPath,
                            isEpayUpsell: e.isEpayUpsell,
                            redirectingClass: e.redirectingClass,
                            psAlias: e.psAlias
                        }
                    }) : s("section", {
                        staticClass: "calc pt-2",
                        attrs: {
                            id: "block"
                        }
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isLoading && "chat" == e.upsell.upsellType,
                            expression: "!isLoading && upsell.upsellType=='chat'"
                        }]
                    }, [s("div", {
                        staticClass: "container comments-area"
                    }, [s("div", {
                        staticClass: "alert shadow alert-success alert-status font-2r",
                        class: e.isError ? "alert-red" : "",
                        staticStyle: {
                            display: "block"
                        }
                    }, [e._v("\n        " + e._s(e.statusMessage) + "\n      ")])]), e.upsell.chat ? s("ChatManager", {
                        attrs: {
                            upsell: e.upsell,
                            publicPath: e.publicPath,
                            isEpayUpsell: e.isEpayUpsell,
                            redirectingClass: e.redirectingClass
                        }
                    }) : e._e()], 1), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isLoading && "text" == e.upsell.upsellType,
                            expression: "!isLoading && upsell.upsellType=='text'"
                        }],
                        staticClass: "container shadow-lg bg-white"
                    }, [s("div", {
                        staticClass: "container calculate"
                    }, [s("div", {
                        staticClass: "alert alert-success alert-status",
                        class: e.isError ? "alert-red" : "",
                        staticStyle: {
                            display: "block"
                        }
                    }, [e._v("\n        " + e._s(e.statusMessage) + "\n      ")]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isAccountFin,
                            expression: "!isAccountFin"
                        }],
                        staticClass: "calculate_wrap mb-2"
                    }, [s("div", {
                        staticClass: "calculate_total"
                    }, [s("p", {
                        staticClass: "total_head text-center mb-2",
                        staticStyle: {
                            "font-size": "28px"
                        }
                    }, [e._v("Ваша выплата составляет:")]), s("div", {
                        staticClass: "text-success-highlight text-center mx-auto font-weight-normal text-numbers mb-0",
                        staticStyle: {
                            "line-height": "1"
                        },
                        style: e.$afterExchange(this.$options.name) ? "font-size:3rem" : "font-size:6.2rem"
                    }, [s("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.$afterExchange(this.$options.name),
                            expression: "!$afterExchange(this.$options.name)"
                        }],
                        staticClass: "h1 font-weight-normal",
                        staticStyle: {
                            opacity: "0.8"
                        },
                        domProps: {
                            innerHTML: e._s("&nbsp;" + e.$usermoney().curName)
                        }
                    }), s("span", {
                        domProps: {
                            innerHTML: e._s(e.$usermoney().value)
                        }
                    }), s("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.$afterExchange(this.$options.name),
                            expression: "$afterExchange(this.$options.name)"
                        }],
                        staticClass: "font-weight-normal",
                        staticStyle: {
                            opacity: "0.8"
                        },
                        domProps: {
                            innerHTML: e._s("&nbsp;" + e.$usermoney().curName)
                        }
                    })]), e.$afterExchange(this.$options.name) ? e._e() : s("div", {
                        staticClass: "text-center  mb-4 h6 font-weight-normal text-numbers"
                    }, [s("span", {
                        domProps: {
                            innerHTML: e._s(e.$usermoney().geoValue)
                        }
                    })]), s("p", {
                        staticClass: "total_txt text-center mb-0",
                        staticStyle: {
                            padding: "0 20px"
                        }
                    }, [e._v("Вам необходимо вывести деньги в течении "), s("span", {
                        staticClass: "text-numbers font-weight-lighter"
                    }, [e._v("24")]), e._v(" часов!\n            ")])])])]), s("div", {
                        staticClass: "row"
                    }, [s("div", {
                        staticClass: "form-wrap mx-auto pt-0"
                    }, [s("div", {
                        staticClass: "form px-1 px-sm-3"
                    }, [s("h2", {
                        staticClass: "form-title text-center text-dark mb-0 text-numbers",
                        staticStyle: {
                            "font-size": "26px",
                            "font-weight": "600"
                        },
                        domProps: {
                            innerHTML: e._s(e.upsell.title.replace(/{{converting_geoCur}}/gi, e.converting_geoCur))
                        }
                    }), e.upsell.description ? s("div", e._l(e.upsell.description, (function(t, i) {
                        return s("div", {
                            key: i
                        }, [s("p", {
                            staticClass: "text-left text-sm-justify text-md-left",
                            domProps: {
                                innerHTML: e._s(t.replace(/{{geoMoneyHalfLimit}}/gi, e.geoMoneyHalfLimit).replace(/{{geoMoney10Percent}}/gi, e.geoMoney10Percent).replace(/{{upsellPrice}}/gm, e.upsell.amount[e.psAlias]).replace(/{{geoUpsellPrice}}/gm, e.geoUpsellPrice).replace(/{{usernamePlaceholder}}/gm, e.usernamePlaceholder).replace(/{{useremailPlaceholder}}/gm, e.useremailPlaceholder).replace(/{{moneyUSDorEUR}}/gi, e.moneyUSDorEUR).replace(/{{moneyBTC}}/gi, e.moneyBTC).replace(/{{convertedAmountRUB}}/gi, e.convertedAmountRUB).replace(/{{convertedAmountUSD}}/gi, e.convertedAmountUSD).replace(/{{converted_USD_or_EUR}}/gi, e.converted_USD_or_EUR).replace(/{{converting_geoCur_or_USD}}/gi, e.converting_geoCur_or_USD).replace(/{{converting_geoCur}}/gi, e.converting_geoCur).replace(/{{geoCurrency}}/gi, e.$store.getters.geoCurrency.toUpperCase()).replace(/{{geoAmount}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(e.upsell.amount[e.psAlias]))).replace(/{{geoMoney}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(e.$store.getters.rescueMoney))).replace(/{{moneyPageBased}}/gi, e.moneyPageBased).replace(/{{firstPart}}/gi, e.$numberWithSpaces(e.$geoNum(Math.floor(e.$store.getters.rescueMoney / 2), "usd"))).replace(/{{secondPart}}/gi, e.$numberWithSpaces(e.$geoNum(Math.ceil(e.$store.getters.rescueMoney / 2), "usd"))).replace(/{{geoFirstPart}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(Math.floor(e.$store.getters.rescueMoney / 2), "usd"))).replace(/{{geoSecondPart}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(Math.ceil(e.$store.getters.rescueMoney / 2), "usd"))))
                            }
                        })])
                    })), 0) : e._e(), e.upsell.product ? s("p", {
                        staticClass: "text-left"
                    }, [s("span", {
                        domProps: {
                            innerHTML: e._s(e.upsell.product.replace(/{{moneyUSDorEUR}}/gi, e.moneyUSDorEUR).replace(/{{moneyBTC}}/gi, e.moneyBTC).replace(/{{converting_geoCur_or_USD}}/gi, e.converting_geoCur_or_USD).replace(/{{converting_geoCur}}/gi, e.converting_geoCur).replace(/{{geoCurrency}}/gi, e.$store.getters.geoCurrency.toUpperCase()).replace(/{{firstPart}}/gi, e.$numberWithSpaces(e.$geoNum(Math.floor(e.$store.getters.rescueMoney / 2), "usd"))).replace(/{{secondPart}}/gi, e.$numberWithSpaces(e.$geoNum(Math.ceil(e.$store.getters.rescueMoney / 2), "usd"))).replace(/{{geoFirstPart}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(Math.floor(e.$store.getters.rescueMoney / 2)), "usd")).replace(/{{geoSecondPart}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(Math.ceil(e.$store.getters.rescueMoney / 2)), "usd")))
                        }
                    }), e._v(" \n            "), e.upsell.amount[e.psAlias] > 0 ? s("span", {
                        staticClass: "badge badge-primary text-numbers",
                        class: e.sale ? "onSaleRed" : ""
                    }, [e._v(" " + e._s(2 * e.upsell.amount[e.psAlias]) + " руб")]) : e._e(), e._v("\n             \n            "), e.upsell.amount[e.psAlias] > 0 && e.sale ? s("span", {
                        staticClass: "badge badge-primary onSaleBlue text-numbers"
                    }, [e._v(" " + e._s(e.upsell.amount[e.psAlias]) + " руб")]) : e._e()]) : e._e(), e.upsell.amount[e.psAlias] > 0 && !e.sale ? s("div", {
                        staticClass: "text-justify text-md-center mb-2 font-weight-bold",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.saleOn.apply(null, arguments)
                            }
                        }
                    }, [s("a", {
                        staticClass1: "getSaleOnClick",
                        attrs: {
                            href: ""
                        }
                    }, [e._v("Нажмите сюда, чтобы "), s("span", {
                        staticStyle: {
                            color: "#28a645",
                            "font-weight": "700"
                        }
                    }, [e._v("получить огромную скидку")]), e._v(" за свой первый вывод!")]), s("p", {
                        staticStyle: {
                            "font-weight": "500",
                            color: "#b3058c",
                            "font-size": "15px"
                        }
                    }, [e._v("Скидка доступна "), s("span", {
                        staticClass: "text-numbers font-weight-lighter"
                    }, [e._v("24")]), e._v(" часа!")])]) : e._e(), e.upsell.customItem ? s("div", {
                        domProps: {
                            innerHTML: e._s(e.customItem().replace(/{{geoMoneyHalfLimit}}/gi, e.geoMoneyHalfLimit).replace(/{{moneyUSDorEUR}}/gi, e.moneyUSDorEUR).replace(/{{moneyUSDorEUR}}/gi, e.moneyUSDorEUR).replace(/{{moneyBTC}}/gi, e.moneyBTC).replace(/{{convertedAmountRUB}}/gi, e.convertedAmountRUB).replace(/{{convertedAmountUSD}}/gi, e.convertedAmountUSD).replace(/{{converting_geoCur_or_USD}}/gi, e.converting_geoCur_or_USD).replace(/{{converted_USD_or_EUR}}/gi, e.converted_USD_or_EUR).replace(/{{usernamePlaceholder}}/gm, e.usernamePlaceholder).replace(/{{useremailPlaceholder}}/gm, e.useremailPlaceholder).replace(/{{userphonePlaceholder}}/gm, e.userphonePlaceholder).replace(/{{paymentMethod}}/gm, e.paymentMethod).replace(/{{paymentNumberPlaceholder}}/gm, e.paymentNumberPlaceholder).replace(/{{geoAmount}}/gi, e.geoAmount).replace(/{{geoMoney}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(e.$store.getters.rescueMoney))).replace(/{{moneyPageBased}}/gi, e.moneyPageBased).replace(/{receiptAmount}/gi, e.getReceiptAmount).replace(/{{geoReceiptAmount}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(e.getReceiptAmount))).replace(/{{todayFull}}/gi, e.todayFull).replace(/{{sitename}}/gm, this.$store.getters.sitename))
                        }
                    }) : e._e(), s("ul", {
                        staticClass: "list-unstyled list_ok"
                    }, e._l(e.upsell.instructions, (function(t, i) {
                        return s("li", {
                            key: i,
                            staticClass: "mb-1"
                        }, [s("svg", {
                            directives: [{
                                name: "svg",
                                rawName: "v-svg"
                            }],
                            staticClass: "text-success",
                            staticStyle: {
                                "font-size": "21px"
                            },
                            attrs: {
                                symbol: "check-circle",
                                size: "0 0 21 21"
                            }
                        }), s("span", {
                            staticClass: "ml-2",
                            domProps: {
                                innerHTML: e._s(t.replace(/{{converting_geoCur}}/gi, e.converting_geoCur))
                            }
                        })])
                    })), 0), e.isError ? s("div", {
                        staticStyle: {
                            color: "#f93c3c",
                            "font-size": "15px"
                        }
                    }, [s("b", [e._v("*Если не получается оплатить банковской картой, воспользуйтесь электронным кошельком или другой банковской картой")])]) : e._e(), s("div", {
                        staticClass: "w-100 text-center"
                    }, [s("a", {
                        staticClass: "button_outer-blue text-center upsell-btn p-3 btn btn-success dependent-on-consent pulse-button pre-wrap position-relative",
                        attrs: {
                            "data-href": e.isEpayUpsell ? e.upsell.paymentLinks.e : "",
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(t) {
                                return e.goPay(t)
                            }
                        }
                    }, [s("span", {
                        domProps: {
                            innerHTML: e._s(e.upsell.buttonText.replace(/{{converting_geoCur}}/gi, e.converting_geoCur))
                        }
                    }), s("span", {
                        class: e.redirectingClass
                    })])]), s("center", {
                        staticStyle: {
                            "padding-top": "25px",
                            opacity: "0.3"
                        }
                    }, [s("img", {
                        attrs: {
                            src: e.publicPath + "img/sps.png",
                            alt: ""
                        }
                    })])], 1)])])])]), s("comments-item", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isLoading,
                            expression: "!isLoading"
                        }]
                    }), s("b-modal", {
                        ref: "modal-fail",
                        attrs: {
                            "hide-footer": "",
                            "modal-class": "spin-modal-welcome",
                            "header-class": "text-center p-0 mb-1 text-uppercase close-right bg-close position-absolute"
                        },
                        on: {
                            hide: e.scrollToUpsellBtn
                        }
                    }, [s("div", {
                        staticClass: "w-100 m-auto pt-2 pb-0 text-center"
                    }, [s("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg"
                        }],
                        staticStyle: {
                            width: "90px",
                            height: "90px"
                        },
                        attrs: {
                            symbol: "warning-sign",
                            size: "0 0 90 90"
                        }
                    })]), s("h1", {
                        staticClass: "text-center mb-2",
                        staticStyle: {
                            "line-height": "1.0"
                        }
                    }, [e._v("Завершите вывод средств")]), s("div", {
                        staticClass: "d-block text-center spin-description",
                        staticStyle: {
                            "line-height": "1.2"
                        }
                    }, [s("p", [e._v("Вывод средств для Вас будет доступен после оплаты услуг.")]), s("p", [e._v("Ваш платеж не поступил, попробуйте еще раз!")]), s("p", {
                        staticClass: "mb-0"
                    }, [e._v("Средства поступят на реквизиты, что вы указали в квитанции.")])]), s("b-button", {
                        staticClass: "mt-1 btn-success text-uppercase w-100",
                        attrs: {
                            variant: "primary",
                            block: ""
                        },
                        on: {
                            click: function(t) {
                                return e.tryToPayUpsell("modal-fail")
                            }
                        }
                    }, [e._v("Попробовать снова")]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isReceiptAvailable,
                            expression: "isReceiptAvailable"
                        }],
                        domProps: {
                            innerHTML: e._s(this.upsells[this.lang]["receipt"].customItem.replace(/{{moneyPageBased}}/gi, e.moneyPageBased).replace(/{{geoAmount}}/gi, this.geoAmount).replace(/{{d-none}}/gi, "d-none").replace(/{{sitename}}/gm, this.$store.getters.sitename).replace(/{{usernamePlaceholder}}/gm, e.usernamePlaceholder).replace(/{{paymentMethod}}/gm, e.paymentMethod).replace(/{{paymentNumberPlaceholder}}/gm, e.paymentNumberPlaceholder))
                        }
                    })], 1)], 1)
                },
                r = [],
                o = (s("28a5"), s("4917"), s("7f7f"), s("67bb")),
                l = s.n(o),
                c = s("5d58"),
                u = s.n(c);

            function p(e) {
                return p = "function" === typeof l.a && "symbol" === typeof u.a ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof l.a && e.constructor === l.a && e !== l.a.prototype ? "symbol" : typeof e
                }, p(e)
            }
            s("a481"), s("6762"), s("2fdb"), s("6b54");
            var m = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {}, [s("div", {
                        staticClass: "chat mx-auto position-relative"
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isOverlayLoading,
                            expression: "isOverlayLoading"
                        }],
                        staticClass: "chatoverlay position-fixed w-100 h-100 overflow-hidden"
                    }, [s("div", {
                        staticClass: "h-100 d-flex justify-content-center align-items-center"
                    }, [e._m(0), s("p", {
                        staticClass: "my-0 text-center text-light"
                    }, [e._v(e._s(e.overlayLoadingText))])])]), s("div", {
                        staticClass: "bg-insta chat-title bg-primary-chat"
                    }, [s("h1", {
                        staticClass: "text-light"
                    }, [e._v(e._s(e.upsell.chat.name))]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isTyping,
                            expression: "isTyping"
                        }]
                    }, [e._m(1)]), s("h2", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isTyping,
                            expression: "!isTyping"
                        }],
                        staticClass: "text-light mt-1 text-capitalize",
                        domProps: {
                            innerHTML: e._s(e.upsell.chat.job)
                        }
                    }), s("figure", {
                        staticClass: "avatar"
                    }, [s("img", {
                        staticClass: "lazyload",
                        attrs: {
                            "data-src": e.publicPath + "img/" + e.upsell.chat.avatar
                        }
                    })])]), s("div", {
                        ref: "chatMessages",
                        staticClass: "messages bg-secondary pr-1  h-100 position-relative",
                        staticStyle: {
                            "box-sizing": "border-box"
                        },
                        attrs: {
                            id: "chatMessages"
                        },
                        on: {
                            scroll: function(t) {
                                return e.scrollMessages(t)
                            }
                        }
                    }, e._l(e.insertMessages, (function(t, i) {
                        return t.managerMsg ? s("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: null == t.managerMsg.match(/^{{loading.*}}$/gm),
                                expression: "message.managerMsg.match(/^{{loading.*}}$/gm)==null"
                            }],
                            key: i,
                            staticClass: "new bg-light shadow text-dark",
                            class: t.managerMsg.includes("{{answerBtn:") ? "answerMsgBtn text-right message-personal" : "message"
                        }, [s("figure", {
                            staticClass: "avatar"
                        }, [s("img", {
                            staticClass: "lazyload",
                            attrs: {
                                "data-src": e.publicPath + "img/" + e.upsell.chat.avatar
                            }
                        })]), s("span", {
                            staticClass: "font-2r",
                            domProps: {
                                innerHTML: e._s(t.managerMsg.replace(/{{geoMoneyHalfLimit}}/gi, e.geoMoneyHalfLimit).replace(/{{secondPart}}/gi, e.$numberWithSpaces(e.$geoNum(Math.ceil(e.$store.getters.rescueMoney / 2), "usd"))).replace(/{{converting_geoCur}}/gi, e.converting_geoCur.toUpperCase()).replace(/{{prevDayYear}}/gi, e.prevDayYear).replace(/{{moneyPageBased}}/gi, e.moneyPageBased).replace(/{{upsellbtn}}/gi, "").replace(/{{nextbtn.*}}/gi, "").replace(/{{answerBtn.*}}/gi, "").replace(/{{waitfor.*}}/gi, "").replace(/{{next}}/gi, "").replace(/{{wait}}/gi, "").replace(/{{geoMoney}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(e.$store.getters.getNumberFromMoney))).replace(/{{geoMoneyHard}}/gi, e.$numberWithSpaces(e.$geoUpsellPriceOnlyNum(e.$store.getters.rescueMoney, "usd"))).replace(/({{loading:.*}})/gi, "").replace(/{{greetingTime}}/gi, e.greetingOnTime).replace(/{{nextDay}}/gi, e.nextDay).replace(/{{userName}}/gi, e.getUserName).replace(/{{paymentMethod}}/gi, e.paymentMethod).replace(/{{geoAmountChat}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(e.upsell.amount[e.psAlias]))))
                            }
                        }), t.managerMsg.includes("{{nextbtn") ? s("span", {
                            staticClass: "d-inline font-2r",
                            on: {
                                "~click": function(t) {
                                    return e.goNextMsg.apply(null, arguments)
                                }
                            }
                        }, [s("a", {
                            staticClass: "btn btn-success rounded",
                            attrs: {
                                href: "javascript:void(0);"
                            }
                        }, [e._v(e._s(t.managerMsg.match(/".*"/gm)[0].replace(/"/g, "")))])]) : e._e(), t.managerMsg.includes("{{answerBtn:") ? s("span", e._l(JSON.parse(t.managerMsg.match(/\[.*\]/gm)[0]), (function(t, i) {
                            return s("span", {
                                key: i,
                                staticClass: "d-inline font-2r message-personal",
                                on: {
                                    "~click": function(s) {
                                        e.goNextMsg(t), e.$reachGoal("lawyerswift_answer", {
                                            answer: t
                                        })
                                    }
                                }
                            }, [s("a", {
                                staticClass: "py-3 mx-2 my-1",
                                attrs: {
                                    href: "javascript:void(0);"
                                }
                            }, [e._v(e._s(t))])])
                        })), 0) : e._e(), t.managerMsg.includes("{{upsellbtn}}") ? s("span", {
                            staticClass: "d-inline font-2r",
                            on: {
                                click: function(t) {
                                    return e.goPayEmit(t)
                                }
                            }
                        }, [s("a", {
                            staticClass: "btn btn-success rounded p-1 position-relative upsell-btn",
                            attrs: {
                                "data-href": e.isEpayUpsell ? e.upsell.paymentLinks.e : "",
                                href: "javascript:void(0);"
                            }
                        }, [s("span", {
                            class: e.redirectingClass
                        }), s("span", {
                            domProps: {
                                innerHTML: e._s(e.upsell.buttonText.replace(/{{amountChat}}/gi, e.upsell.amount[e.psAlias]).replace(/{{geoAmountChat}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(e.upsell.amount[e.psAlias]))))
                            }
                        })])]) : e._e()]) : t.myMsg ? s("div", {
                            staticClass: "message message-personal new text-light shadow"
                        }, [s("span", {
                            staticClass: "font-2r",
                            domProps: {
                                innerHTML: e._s(t.myMsg.replace("{{answered:", ""))
                            }
                        })]) : t.managerTyping ? s("div", {
                            staticClass: "message new bg-light shadow text-dark"
                        }, [s("figure", {
                            staticClass: "avatar"
                        }, [s("img", {
                            staticClass: "lazyload",
                            attrs: {
                                "data-src": e.publicPath + "img/" + e.upsell.chat.avatar
                            }
                        })]), e._m(2)]) : e._e()
                    })), 0), s("div", {
                        staticClass: "position-absolute bg-light border rounded-circle shadow scroll-down cursor-pointer",
                        class: e.btnToBottomClass,
                        style: e.disableSend ? "bottom:10px;" : "bottom:55px;",
                        on: {
                            click: e.scrollChatToEnd
                        }
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.unreadCount > 0,
                            expression: "unreadCount>0"
                        }],
                        staticClass: "position-absolute rounded-circle text-center text-white font-weight-light new-msg-count"
                    }, [e._v("\n        " + e._s(e.unreadCount) + "\n      ")]), s("div", {
                        staticClass: "w-100 h-100 position-relative"
                    }, [s("svg", {
                        staticClass: "position-absolute",
                        staticStyle: {
                            height: "60%",
                            top: "29%"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "38",
                            height: "38",
                            viewBox: "0 0 240.835 240.835"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M129.007 57.819c-4.68-4.68-12.499-4.68-17.191 0L3.555 165.803c-4.74 4.74-4.74 12.427 0 17.155 4.74 4.74 12.439 4.74 17.179 0l99.683-99.406 99.671 99.418a12.17 12.17 0 0 0 17.191 0c4.74-4.74 4.74-12.427 0-17.155L129.007 57.819z",
                            fill: "#b1b1b1",
                            transform: "matrix(-.75 0 0 -.75 210.72975 210.72975)"
                        }
                    })])])]), s("div", {
                        staticClass: "message-box bg-light d-none"
                    }, [s("input", {
                        ref: "messageInput",
                        staticClass: "message-input text-dark border",
                        class: e.messageInputClass,
                        attrs: {
                            type: "text",
                            placeholder: "Ответьте на вопрос",
                            maxlength: "60",
                            disabled: e.disableSend
                        },
                        on: {
                            keydown: function(t) {
                                return t.type.indexOf("key") || 13 === t.keyCode ? (t.preventDefault(), e.insertMessage()) : null
                            }
                        }
                    }), s("button", {
                        staticClass: "message-submit bg-primary-chat text-light shadow px-4 py-3",
                        attrs: {
                            type: "submit",
                            disabled: e.disableSend
                        },
                        on: {
                            click: function(t) {
                                return e.insertMessage()
                            }
                        }
                    }, [e._v("Отправить")])])]), e.showUpsellbtnUnderChat ? s("div", {
                        staticClass: "text-center"
                    }, [s("div", {
                        staticClass: "font-2r mt-5 m-1"
                    }, [s("a", {
                        staticClass: "d-inline-block mx-auto btn-success rounded blob-pulse green py-3 px-5 upsell-btn position-relative cursor-pointer",
                        attrs: {
                            "data-href": e.isEpayUpsell ? e.upsell.paymentLinks.e : "",
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(t) {
                                return e.goPayEmit(t)
                            }
                        }
                    }, [s("span", {
                        class: e.redirectingClass
                    }), s("span", {
                        domProps: {
                            innerHTML: e._s(e.upsell.buttonText.replace(/{{amountChat}}/gi, e.upsell.amount[e.psAlias]).replace(/{{geoAmountChat}}/gi, e.$numberWithSpaces(e.$geoUpsellPrice(e.upsell.amount[e.psAlias]))))
                        }
                    })])])]) : e._e()])
                },
                h = [function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "no-click"
                    }, [s("div", {
                        staticClass: "spinner"
                    }, [s("div", {
                        staticClass: "bar1"
                    }), s("div", {
                        staticClass: "bar2"
                    }), s("div", {
                        staticClass: "bar3"
                    }), s("div", {
                        staticClass: "bar4"
                    }), s("div", {
                        staticClass: "bar5"
                    }), s("div", {
                        staticClass: "bar6"
                    }), s("div", {
                        staticClass: "bar7"
                    }), s("div", {
                        staticClass: "bar8"
                    }), s("div", {
                        staticClass: "bar9"
                    }), s("div", {
                        staticClass: "bar10"
                    }), s("div", {
                        staticClass: "bar11"
                    }), s("div", {
                        staticClass: "bar12"
                    })])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "d-flex"
                    }, [s("span", {
                        staticClass: "text-lowercase font-weight-light"
                    }, [e._v("печатает")]), s("div", {
                        staticClass: "ml-1 ",
                        attrs: {
                            id: "typing-wave"
                        }
                    }, [s("span", {
                        staticClass: "dot bg-white"
                    }), s("span", {
                        staticClass: "dot bg-white"
                    }), s("span", {
                        staticClass: "dot bg-white"
                    })])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "d-flex"
                    }, [s("span", [e._v("печатает")]), s("div", {
                        staticClass: "ml-1",
                        attrs: {
                            id: "typing-wave"
                        }
                    }, [s("span", {
                        staticClass: "dot"
                    }), s("span", {
                        staticClass: "dot"
                    }), s("span", {
                        staticClass: "dot"
                    })])])
                }],
                g = s("7707"),
                d = s.n(g);
            d.a.polyfill();
            var f, y = {
                    data: function() {
                        return {
                            unreadCount: 0,
                            isScrollBottom: !1,
                            messageInputClass: "",
                            isTyping: !1,
                            isOverlayLoading: !1,
                            overlayLoadingText: "",
                            disableSend: localStorage.getItem("/offbitbonus/disableSend") || !1,
                            insertMessages: this.chatPullStore() || new Array,
                            d: null,
                            h: null,
                            m: null,
                            date: new Date,
                            i: !!this.chatPullStore() && this.chatPullStore().length - 1 || 0,
                            msg: "",
                            nextDay: "завтра",
                            greetingOnTime: "Доброго времени суток",
                            months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
                            showUpsellbtnUnderChat: !1,
                            paymentMethod: localStorage.getItem("/offbitbonus/paymentMethod") || "Банковская карта (Россия)"
                        }
                    },
                    computed: {
                        geoMoneyHalfLimit: function() {
                            for (var e = Math.ceil(this.$geoNum(this.$store.getters.rescueMoney / 2, "usd", !1)), t = e.toString().length - 1, s = String(), i = 0; i < t; i++) s += "0";
                            var a = e.toString()[0],
                                n = a + s;
                            return this.$numberWithSpaces(parseInt(n)) + "&nbsp;" + this.$store.getters.geoCurrency.toUpperCase()
                        },
                        converting_geoCur: function() {
                            return this.$store.getters.geoCurrency
                        },
                        moneyPageBased: function() {
                            return ["lawyerswift", "swift", "lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"].includes(this.$route.params.product) ? this.$store.getters.user.usdMoney + "&nbsp;" + this.$numberWithSpaces(this.$geoUpsellPrice(this.$store.getters.rescueMoney, "usd")) : this.$numberWithSpaces(this.$geoNum(this.$store.getters.rescueMoney, "usd"))
                        },
                        prevDayYear: function() {
                            return this.leapYear(this.date.getFullYear()) ? 365 : 364
                        },
                        btnToBottomClass: function() {
                            return this.isScrollBottom ? "scrollDownOn" : ""
                        },
                        upsellAmount: function() {
                            return this.upsell.amount[window.psAlias]
                        },
                        psAlias: function() {
                            return window.psAlias
                        },
                        messageLastEl: function() {
                            return document.querySelector(".message:last-child")
                        },
                        simpleBar: function() {
                            return document.querySelector(".messages .simplebar-content-wrapper")
                        },
                        getUserName: function() {
                            return window.localStorage.getItem(this.publicPath + "username") ? window.localStorage.getItem(this.publicPath + "username") + "," : ""
                        }
                    },
                    props: ["upsell", "publicPath", "isEpayUpsell", "redirectingClass"],
                    methods: {
                        geoMoneyHalfLimit2: function() {
                            for (var e = Math.ceil(this.$geoNum(this.$store.getters.rescueMoney / 2, "usd", !1)), t = e.toString().length - 1, s = String(), i = 0; i < t; i++) s += "0";
                            var a = e.toString()[0],
                                n = a + s;
                            return this.$numberWithSpaces(parseInt(n)) + "&nbsp;" + this.$store.getters.geoCurrency
                        },
                        leapYear: function(e) {
                            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                        },
                        scrollMessages: function(e) {
                            var t = this;
                            setTimeout((function() {
                                if (e) var s = e.target;
                                else s = t.$refs.chatMessages;
                                if (void 0 === s || "undefined" === s) return !1;
                                var i = s.clientHeight * (s.clientHeight / s.offsetHeight),
                                    a = s.scrollTop,
                                    n = s.scrollHeight,
                                    r = s.scrollHeight > s.clientHeight;
                                if (!r) return t.isScrollBottom = !1, !1;
                                a + i >= n - 50 ? (t.isScrollBottom = !1, t.unreadCount = 0) : t.isScrollBottom = !0
                            }), 0)
                        },
                        addUnread: function() {
                            var e = this;
                            setTimeout((function() {
                                e.IsInViewport(document.querySelector("#chatMessages .message:nth-last-child(1), #chatMessages .message-personal:nth-last-child(1)")) || e.unreadCount++
                            }), 100)
                        },
                        IsInViewport: function(e) {
                            if (e) {
                                var t = e.getBoundingClientRect();
                                return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
                            }
                            return !0
                        },
                        GetNextDay: function() {
                            var e = new Date((new Date).setDate((new Date).getDate() + 1));
                            this.nextDay = e.getDate() + " " + this.months[e.getMonth()]
                        },
                        greetingsBaseOnTime: function() {
                            var e = new Date,
                                t = e.getHours();
                            this.greetingOnTime = t >= 0 && t < 6 ? "Доброй ночи" : t >= 6 && t < 12 ? "Доброе утро" : t >= 12 && t < 18 ? "Добрый день" : "Добрый вечер", "" !== this.$store.getters.account.login && "user-id81214293" !== this.$store.getters.account.login && (this.greetingOnTime += ", " + this.$store.getters.account.login)
                        },
                        chatPullStore: function() {
                            return this.$store.state[this.publicPath].chat["chatSent-" + this.$route.params.product]
                        },
                        goPayEmit: function(e) {
                            this.$parent.goPay(e)
                        },
                        goNextMsg: function(e) {
                            this.insertMessages.pop(), e ? this.insertMessages.push({
                                myMsg: "{{answered:" + e
                            }) : this.insertMessages.push({
                                myMsg: "Согласие отправлено"
                            }), this.$store.commit("CHANGE_OR_ADD", {
                                key: "chatSent-" + this.$route.params.product,
                                value: this.insertMessages
                            }), this.chatCommands()
                        },
                        waitForTimer: function(e) {
                            var t = this;
                            setTimeout((function() {
                                t.fakeMessage()
                            }), 1e3 * e)
                        },
                        updateScrollbar: function() {},
                        setDate: function() {
                            this.d = new Date, this.m != this.d.getMinutes() && (this.m = this.d.getMinutes())
                        },
                        insertMessage: function() {
                            var e = this;
                            if (this.msg = this.$refs.messageInput.value, "" == this.msg.trim()) return this.messageInputClass = "input-empty", !1;
                            this.messageInputClass = "", this.insertMessages.push({
                                myMsg: this.msg
                            }), this.$store.commit("CHANGE_OR_ADD", {
                                key: "chatSent-" + this.$route.params.product,
                                value: this.insertMessages
                            }), this.disableSend = !0, localStorage.setItem(this.publicPath + "disableSend", !0), this.setDate(), this.$refs.messageInput.value = null, this.$isIE() || window.dispatchEvent(new Event("resize")), this.scrollChatToEnd(), setTimeout((function() {
                                e.chatCommands()
                            }), 1e3 + 20 * Math.random() * 100)
                        },
                        scrolltoChat: function() {
                            setTimeout((function() {
                                document.body.contains(document.querySelector(".chat")) && document.querySelector(".chat").scrollIntoView({
                                    block: "center",
                                    behavior: "smooth"
                                })
                            }), 100)
                        },
                        scrollChatToEnd: function() {
                            var e = this.$refs.chatMessages;
                            e.scrollTop = e.scrollHeight
                        },
                        fakeMessage: function() {
                            var e = this;
                            this.upsell.chat.chatPull[this.i] && setTimeout((function() {
                                null != e.insertMessages[e.insertMessages.length - 1] && null != e.insertMessages[e.insertMessages.length - 1].managerTyping && (e.insertMessages.pop(), e.isTyping = !1), e.insertMessages.push({
                                    managerTyping: "<span></span>"
                                }), e.isTyping = !0, e.$store.commit("CHANGE_OR_ADD", {
                                    key: "chatSent-" + e.$route.params.product,
                                    value: e.insertMessages
                                }), window.chatDelay = setTimeout((function() {
                                    null != e.insertMessages[e.insertMessages.length - 1] && null != e.insertMessages[e.insertMessages.length - 1].managerTyping && (e.insertMessages.pop(), e.$store.commit("CHANGE_OR_ADD", {
                                        key: "chatSent-" + e.$route.params.product,
                                        value: e.insertMessages
                                    }), e.isTyping = !1), e.insertMessages.push({
                                        managerMsg: e.upsell.chat.chatPull[e.i]
                                    }), e.$store.commit("CHANGE_OR_ADD", {
                                        key: "chatSent-" + e.$route.params.product,
                                        value: e.insertMessages
                                    }), e.addUnread(), e.scrollMessages(), e.upsell.chat.chatPull[e.i + 1] && e.i++, e.showBtnUnderChat(), e.chatCommands()
                                }), 1e3 * e.upsell.chat.delay[e.i])
                            }), this.chatPullStore() ? 2e3 : 0)
                        },
                        chatCommands: function() {
                            if (this.chatPullStore()) {
                                var e = this.chatPullStore()[this.chatPullStore().length - 1];
                                if (e.managerMsg && e.managerMsg.includes("{{wait}}") && (this.disableSend = !1, localStorage.setItem(this.publicPath + "disableSend", !1)), e.managerMsg && e.managerMsg.includes("{{next}}") && this.fakeMessage(), e.myMsg && this.fakeMessage(), e.managerMsg && e.managerMsg.includes("{{loading:")) {
                                    var t = e.managerMsg.match(/({duration:)(\d.|\d)}/gm)[0];
                                    t = parseInt(t.match(/(\d.|\d)/gm));
                                    var s = e.managerMsg.match(/({delay:)(\d.|\d)}/gm)[0];
                                    s = parseInt(s.match(/(\d.|\d)/gm));
                                    var i = e.managerMsg.match(/".*"/gm)[0].replace(/"/g, "");
                                    this.overlayLoading(t, i, s)
                                }
                                if (e.managerMsg && e.managerMsg.includes("{{waitfor")) {
                                    var a = e.managerMsg.match(/({{waitfor:)(\d.|\d).*(}})/gm)[0];
                                    a = parseInt(a.match(/(\d.|\d)/gm)), this.waitForTimer(a)
                                }
                                e.managerTyping && e.managerTyping.includes("<span></span>") && this.fakeMessage()
                            } else this.fakeMessage()
                        },
                        overlayLoading: function(e, t) {
                            var s = this,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e3;
                            setTimeout((function() {
                                s.isOverlayLoading = !0, s.overlayLoadingText = t, setTimeout((function() {
                                    s.isOverlayLoading = !1, s.fakeMessage(), s.$isIE() || window.dispatchEvent(new Event("resize"))
                                }), 1e3 * e)
                            }), 1e3 * i)
                        },
                        initCookies: function() {
                            this.chatPullStore() ? (this.insertMessages.concat(this.chatPullStore()), this.i = this.chatPullStore().filter((function(e) {
                                return e.managerMsg
                            })).length, this.chatPullStore().filter((function(e) {
                                return e.myMsg
                            })).length > 0 && (this.i = this.i + 1)) : this.i = 0
                        },
                        firstMsgTimer: function() {
                            return !this.upsell.isLoading || this.chatPullStore() || localStorage.getItem(this.publicPath + "isLoading-" + this.$route.params.product) ? 100 : 1e3 * this.upsell.loadtime + 100
                        },
                        showBtnUnderChat: function() {
                            var e = this.insertMessages.length - 1;
                            this.insertMessages[e] && this.insertMessages[e].managerMsg && this.insertMessages[e].managerMsg.includes("{{upsellbtn}}") && (this.showUpsellbtnUnderChat = !0)
                        }
                    },
                    created: function() {
                        this.showUpsellbtnUnderChat = !1, this.greetingsBaseOnTime(), this.GetNextDay(), this.initCookies(), this.disableSend = !0, localStorage.setItem(this.publicPath + "disableSend", !0)
                    },
                    mounted: function() {
                        var e = this;
                        this.scrolltoChat(), this.scrollChatToEnd(), window.chatFirstDelay = setTimeout((function() {
                            e.chatCommands()
                        }), this.firstMsgTimer()), this.showBtnUnderChat()
                    },
                    watch: {
                        $route: function(e, t) {
                            var s = this;
                            this.scrolltoChat(), this.showUpsellbtnUnderChat = !1, clearTimeout(window.chatDelay), clearTimeout(window.chatFirstDelay), this.insertMessages = this.chatPullStore() || new Array, this.initCookies(), setTimeout((function() {
                                s.i < 1 && s.chatCommands()
                            }), this.firstMsgTimer())
                        }
                    }
                },
                v = y,
                b = (s("589d"), s("2877")),
                w = Object(b["a"])(v, m, h, !1, null, null, null),
                C = w.exports,
                x = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "mb-10 mb-sm-1"
                    }, [s("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [s("div", {
                        staticClass: "position-relative mt-9",
                        staticStyle: {
                            width: "117px",
                            height: "88px"
                        }
                    }, [s("div", {
                        staticClass: "cssload-container"
                    }, [s("div", {
                        staticClass: "cssload-dot bit-loading text-center my-auto"
                    }, [s("svg", {
                        staticStyle: {
                            width: "0.75em",
                            "font-size": "em"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 384 512",
                            fill: "#fff"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M310.204 242.638c27.73-14.18 45.377-39.39 41.28-81.3-5.358-57.351-52.458-76.573-114.85-81.929V0h-48.528v77.203c-12.605 0-25.525.315-38.444.63V0h-48.528v79.409c-17.842.539-38.622.276-97.37 0v51.678c38.314-.678 58.417-3.14 63.023 21.427v217.429c-2.925 19.492-18.524 16.685-53.255 16.071L3.765 443.68l97.37.315V512h48.528v-67.06c13.234.315 26.154.315 38.444.315V512h48.528v-68.005c81.299-4.412 135.647-24.894 142.895-101.467 5.671-61.446-23.32-88.862-69.326-99.89zM150.608 134.553c27.415 0 113.126-8.507 113.126 48.528 0 54.515-85.71 48.212-113.126 48.212v-96.74zm0 251.776V279.821c32.772 0 133.127-9.138 133.127 53.255-.001 60.186-100.355 53.253-133.127 53.253z"
                        }
                    })])]), s("div", {
                        staticClass: "step",
                        attrs: {
                            id: "cssload-s1"
                        }
                    }), s("div", {
                        staticClass: "step",
                        attrs: {
                            id: "cssload-s2"
                        }
                    }), s("div", {
                        staticClass: "step",
                        attrs: {
                            id: "cssload-s3"
                        }
                    })])])]), e._m(0), s("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [s("div", {
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [s("span", {
                        staticClass: "message position-relative"
                    }, ["landing" !== e.$route.name ? s("span") : e._e(), s("span", {
                        staticClass: "message",
                        domProps: {
                            innerHTML: e._s(e.message.replace(/{{converting_geoCur_or_USD}}/gi, e.converting_geoCur_or_USD).replace(/{{converted_USD_or_EUR}}/gi, e.converted_USD_or_EUR).replace(/{{converting_geoCur}}/gi, e.converting_geoCur))
                        }
                    }), s("span", {
                        staticClass: "position-absolute"
                    }, [e._v(e._s(e.dots))])])])]), s("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [s("div", {
                        staticClass: "timer",
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [s("span", {
                        staticClass: "message"
                    }, [e._v("До завершения осталось примерно: "), s("span", {
                        staticClass: "text-numbers font-weight-light"
                    }, [e._v(e._s(e.time))]), e._v(" сек")])])])])
                },
                k = [function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "d-flex justify-content-center",
                        staticStyle: {
                            "padding-bottom": "5px"
                        }
                    }, [s("div", {
                        staticClass: "p-2"
                    }, [s("span", {
                        staticStyle: {
                            color: "#e80000",
                            "font-weight": "200"
                        }
                    }, [e._v("Не закрывайте страницу!")])])])
                }],
                S = {
                    name: "LoadingBar",
                    data: function() {
                        return {
                            publicPath: "/offbitbonus/",
                            dots: ".",
                            time: 15
                        }
                    },
                    props: ["message", "timer"],
                    mounted: function() {
                        var e = this;
                        setInterval((function() {
                            var t = e.dots.length;
                            e.dots = t < 3 ? e.dots + "." : ""
                        }), 500)
                    },
                    computed: {
                        converting_geoCur_or_USD: function() {
                            return "usd" !== this.$store.getters.geoCurrency.toLowerCase() ? this.$store.getters.geoCurrency.toUpperCase() : "USD (доллары США)"
                        },
                        converting_geoCur: function() {
                            return this.$store.getters.geoCurrency
                        },
                        converted_USD_or_EUR: function() {
                            return "usd" == this.$store.getters.geoCurrency.toLowerCase() ? "EUR (евро)" : "USD (доллары США)"
                        }
                    },
                    methods: {
                        setTime: function(e) {
                            var t = this;
                            this.time = e, localStorage.getItem(this.publicPath + "test") && (this.time = 1500);
                            var s = function e(s) {
                                s == t.time && t.time > 0 && (t.time = t.time - 1, setTimeout(e.bind(null, t.time), 1e3))
                            };
                            setTimeout(s.bind(null, this.time), 1e3)
                        }
                    },
                    watch: {
                        $route: function(e, t) {
                            clearInterval(window.interval)
                        }
                    }
                },
                _ = S,
                $ = (s("33bd"), Object(b["a"])(_, x, k, !1, null, "4fa71a38", null)),
                M = $.exports,
                P = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return e.showComments ? i("section", {
                        staticClass: "comments pb-3",
                        on: {
                            hideComments: e.hideComments
                        }
                    }, [i("div", {
                        staticClass: "container"
                    }, [i("div", {
                        staticClass: "row"
                    }, [i("div", {
                        staticClass: "col-12"
                    }, [i("div", {
                        staticClass: "blog-details-desc shadow-lg"
                    }, [i("div", {
                        staticClass: "comments-area"
                    }, [e._m(0), i("h3", {
                        staticClass: "comments-title text-numbers"
                    }, [e._v(e._s(e.comments.length) + " из " + e._s(e.totalComments) + ":")]), i("ul", {
                        ref: "commentForm",
                        staticClass: "fb-comment-fake-box py-2"
                    }, [i("li", {
                        staticClass: "write-new mt-0 w-100 px-2"
                    }, [i("div", {
                        staticClass: "align-items-end d-flex flex-row justify-content-center"
                    }, [i("div", ["" === e.$store.getters.account.avatar ? i("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg"
                        }],
                        staticClass: "fb-user-avatar rounded-circle",
                        attrs: {
                            symbol: "profile-user",
                            size: "0 0 40 40"
                        }
                    }) : i("img", {
                        staticClass: "lazyload fb-user-avatar",
                        attrs: {
                            "data-src": e.userAvatar,
                            height: "40",
                            width: "40",
                            alt: ""
                        }
                    })]), i("div", {
                        staticClass: "fb-comment-fake-input cut-text text-numbers",
                        on: {
                            click: function(t) {
                                return e.$refs["modal-newcomment"].show()
                            }
                        }
                    }, [e._v("Напишите отзыв, " + e._s(e.$store.getters.account.login) + "...")])])])]), i("ol", {
                        staticClass: "comment-list"
                    }, [i("div", {}, e._l(e.comments, (function(t, a) {
                        return i("li", {
                            key: a,
                            staticClass: "fb-comment",
                            class: "user" === t.type ? "user-comment" : "support" === t.type ? "fb-support" : "author-comment"
                        }, [i("div", {
                            staticClass: "d-flex flex-row"
                        }, [i("div", {
                            staticClass: "fb-comment-avatar"
                        }, [null === t.pic || "support" === t.type || "author" === t.type ? i("svg", {
                            directives: [{
                                name: "svg",
                                rawName: "v-svg"
                            }],
                            staticClass: "avatar",
                            attrs: {
                                symbol: null === t.pic ? "profile-user" : "support" === t.type ? "support" : "profile-user",
                                size: "0 0 40 40"
                            }
                        }) : i("img", {
                            staticClass: "avatar",
                            attrs: {
                                src: e.publicPath + "img/comments/ava/" + t.pic,
                                width: "40",
                                height: "40"
                            }
                        })]), i("div", {
                            staticClass: "d-flex flex-column w-100 ml-2 justify-content-center"
                        }, [i("div", {
                            staticClass: "fb-comment-name"
                        }, [e._v(e._s(t.name))]), i("div", {
                            staticClass: "d-block"
                        }, [i("div", {
                            staticClass: "d-flex flex-row text-numbers"
                        }, [i("div", {
                            staticClass: "fb-comment-time",
                            domProps: {
                                innerHTML: e._s(e.CommentsSequence(t.timeh, t.type))
                            }
                        }), i("div", {
                            staticClass: "my-auto"
                        }, [e._v(" · ")]), e._m(1, !0)])])]), i("div", [i("b-dropdown", {
                            attrs: {
                                size: "lg",
                                variant: "link",
                                "toggle-class": "text-decoration-none p-1",
                                "no-caret": "",
                                dropleft: ""
                            },
                            scopedSlots: e._u([{
                                key: "button-content",
                                fn: function() {
                                    return [i("div", {
                                        staticClass: "fb-icon fb-actions"
                                    })]
                                },
                                proxy: !0
                            }], null, !0)
                        }, [i("b-dropdown-item", {
                            attrs: {
                                href: "javascript:void(0);"
                            },
                            on: {
                                click: function(t) {
                                    return e.$say("Ваша жалоба принята")
                                }
                            }
                        }, [i("i", {
                            staticClass: "fb-icon fb-abuse position-relative"
                        }), e._v(" Пожаловаться на комментарий")]), i("b-dropdown-item", {
                            attrs: {
                                href: "javascript:void(0);"
                            },
                            on: {
                                click: function(t) {
                                    return e.$say("Комментарий добавлен в избранное")
                                }
                            }
                        }, [i("i", {
                            staticClass: "fb-icon fb-bookmark mr-1 position-relative"
                        }), e._v("Добавить в избранное")]), i("hr"), i("b-dropdown-item", {
                            attrs: {
                                href: "javascript:void(0);"
                            }
                        }, [i("i", {
                            staticClass: "fb-icon fb-hide mr-1 position-relative"
                        }), e._v("Скрыть меню")]), i("div", {
                            staticClass: "caret"
                        })], 1)], 1)]), i("div", {
                            staticClass: "fb-comment-body"
                        }, [i("div", [e._v("\n                     " + e._s(e.commentText(t.text)) + "\n                   ")]), null !== t.screenshot ? i("div", {
                            staticClass: "col-9 col-sm-7 col-md-3"
                        }, [i("img", {
                            staticClass: "w-100 lazyload",
                            attrs: {
                                "data-src": s("7898")("./" + t.screenshot),
                                alt: ""
                            }
                        })]) : e._e()]), i("div", [i("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.likes > 0 || t.liked,
                                expression: "comment.likes>0 || comment.liked"
                            }],
                            staticClass: "position-relative"
                        }, [i("div", {
                            staticClass: "position-absolute",
                            staticStyle: {
                                "border-left": "2px solid #1976f2",
                                top: "0",
                                left: "0",
                                bottom: "0"
                            }
                        }), i("div", {
                            staticClass: "fb-reaction-stat d-flex align-items-center"
                        }, [e._m(2, !0), i("div", {
                            staticClass: "ml-1 text-numbers"
                        }, [e._v("\n                         " + e._s(e.commentLikes(t.liked, t.likes)) + "\n                       ")])])]), i("div", [e._m(3, !0), i("div", {
                            staticClass: "row mx-4 text-numbers fb-reaction-action py-2"
                        }, [i("div", {
                            staticClass: "col-6 text-center",
                            class: "author" === t.type ? "item-noactive" : "",
                            on: {
                                click: function(s) {
                                    return e.toggleLike(t, a)
                                }
                            }
                        }, [i("i", {
                            staticClass: "mr-1 cursor-pointer fb-icon",
                            class: t.liked ? "fb-icon-liked fb-liked" : "fb-like"
                        }), i("span", {
                            staticClass: "py-1 pr-1 cursor-pointer",
                            class: t.liked ? "fb-text-liked" : "fb-text-like"
                        }, [e._v("Нравится")])]), i("div", {
                            staticClass: "col-6 text-center",
                            on: {
                                click: function(s) {
                                    return e.reply(t.name)
                                }
                            }
                        }, [i("i", {
                            staticClass: "mr-1 cursor-pointer fb-icon fb-reply"
                        }), i("span", {
                            staticClass: "py-1 pr-1 cursor-pointer"
                        }, [e._v("Ответить")])])])])])])
                    })), 0)])])])])])]), i("b-modal", {
                        ref: "modal-newcomment",
                        attrs: {
                            "modal-class": "",
                            "content-class": "fb-review-body",
                            "body-class": "p-0 p-sm-2",
                            size: "md",
                            "ok-only": "",
                            "ok-variant": "success",
                            "footer-class": "pb-2 mx-auto",
                            "ok-title": "Вернуться назад",
                            "header-class": "text-center p-0 mb-1 text-uppercase",
                            "hide-header": "",
                            "hide-footer": ""
                        },
                        on: {
                            shown: function(t) {
                                return e.$reachGoal("comment_open_modal")
                            }
                        }
                    }, [i("div", {
                        staticClass: "d-flex"
                    }, [i("div", {
                        staticClass: "w-100 text-center my-auto h5 text-dark"
                    }, [e._v("Публикация отзыва")]), i("div", [i("div", {
                        staticClass: "align-items-center d-flex icon-close-review justify-content-center rounded-circle cursor-pointer",
                        on: {
                            click: function(t) {
                                return e.$refs["modal-newcomment"].hide()
                            }
                        }
                    }, [i("i", {
                        staticClass: "fb-icon fb-close"
                    })])])]), i("div", {
                        staticClass: "position-absolute w-100",
                        staticStyle: {
                            left: "0"
                        }
                    }, [i("div", {
                        staticClass: "fb-hr mt-3"
                    })]), i("div", {
                        staticStyle: {
                            height: "20px"
                        }
                    }), i("div", {
                        staticClass: "align-items-end d-flex flex-row"
                    }, [i("div", ["" === e.$store.getters.account.avatar ? i("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg"
                        }],
                        staticClass: "fb-user-avatar rounded-circle",
                        attrs: {
                            symbol: "profile-user",
                            size: "0 0 40 40"
                        }
                    }) : i("img", {
                        staticClass: "lazyload fb-user-avatar rounded-circle",
                        attrs: {
                            "data-src": e.userAvatar,
                            height: "40",
                            width: "40",
                            alt: ""
                        }
                    })]), i("div", [i("div", {
                        staticClass: "text-numbers text-black"
                    }, [e._v("\n             " + e._s(e.$store.getters.account.login) + "\n           ")]), i("div", {
                        staticClass: "fb-badge"
                    }, [i("i", {
                        staticClass: "fb-icon fb-globus"
                    }), i("span", [e._v("Доступно всем")])])])]), i("div", {
                        ref: "commentForm"
                    }, [i("div", {
                        staticClass: "w-100"
                    }, [i("form", {
                        staticClass: "comment-respond mt-2 fb-form-review"
                    }, [i("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.userComment,
                            expression: "userComment"
                        }],
                        staticClass: "w-100",
                        attrs: {
                            id: "usertext",
                            placeholder: "Напишите Ваш отзыв, " + e.$store.getters.account.login,
                            name: "comment"
                        },
                        domProps: {
                            value: e.userComment
                        },
                        on: {
                            keydown: function(t) {
                                return t.type.indexOf("key") || 13 === t.keyCode ? t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : e.newCommentary.apply(null, arguments) : null
                            },
                            input: function(t) {
                                t.target.composing || (e.userComment = t.target.value)
                            }
                        }
                    }), i("p", {
                        staticClass: "form-submit mt-2",
                        class: "" === e.userComment ? "not-allowed" : ""
                    }, [i("input", {
                        staticClass: "px-2 btn w-100 py-1",
                        class: "" === e.userComment ? "fb-submit-noactive" : "fb-submit-active",
                        attrs: {
                            type: "submit",
                            name: "submit",
                            id: "submit",
                            value: "Опубликовать"
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.newCommentary.apply(null, arguments)
                            }
                        }
                    })])])])])])], 1) : e._e()
                },
                L = [function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "col"
                    }, [s("h2", {
                        staticClass: "title"
                    }, [e._v("Последние комментарии на этой странице ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", [s("i", {
                        staticClass: "fb-icon-lighter fb-icon fb-globus"
                    })])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "fb-box-like"
                    }, [s("i", {
                        staticClass: "d-inline-block fb-icon fb-likefb"
                    })])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "fb-comment-hr"
                    }, [s("div", [s("div")])])
                }],
                T = (s("c5f6"), s("bd86")),
                j = [{
                    page: ["lawyerswift", "swift"],
                    name: "Тимофей",
                    text: "Спасибо за помощь в первом выводе средств с bitcoin bonus, Марии Беляевой! Получил на карту за 3 минуты 25 000 рублей",
                    type: "user",
                    likes: 3,
                    timeh: 1,
                    liked: !1,
                    screenshot: "sber1.jpg",
                    pic: "male/man-old-4.jpg",
                    stars: 5
                }, {
                    page: ["lawyerswift", "swift"],
                    name: "Дарья Бирюкова",
                    text: "Я всю жизнь ищу новые заработки в интернете. И дважды попадалась на мошенников, которые не собирались платить мне заработанные деньги и возвращать потраченные. Уже отчаялась, думалось, что в интеренете пассивно не заработать! Пригласил молодой человек в Bitcoin Bonus. С ним давно рассталась, а вот пассивно благодаря ему зарабатывать не перестала! Делюсь скрином))",
                    type: "user",
                    likes: 325,
                    timeh: 3,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-young.jpg",
                    stars: 5
                }, {
                    page: ["lawyerswift", "swift"],
                    name: "София",
                    text: "Подскажите, кто пользуется Swift Standart, долго выплату ждете?",
                    type: "user",
                    likes: 0,
                    timeh: 4,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-adult.jpg",
                    stars: 5
                }, {
                    page: ["lawyerswift", "swift"],
                    name: "Даниил",
                    text: "София, не рекомендую Standart, ждать устанете, да и второй телефон не сможете на него подключить. Стандарт не окупается.",
                    type: "user",
                    likes: 7,
                    timeh: 4,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-old-1.jpg",
                    stars: 5
                }, {
                    page: ["lawyerswift", "swift"],
                    name: "Вероника",
                    text: "Ребят, вы конечно простите! Но это похоже на надувательство! Я жду перевод уже 3ий час!",
                    type: "user",
                    likes: 0,
                    timeh: 5,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-adult-1.jpg",
                    stars: 1
                }, {
                    page: ["lawyerswift", "swift"],
                    name: "Служба Поддержки",
                    text: "Вероника, мы проверили ваш запрос и аккаунт. Вы используете Стандарт Swift. Для того, чтобы ждать выплаты меньше вы всегда можете подключить Swift Plus",
                    type: "support",
                    likes: 320,
                    timeh: 5,
                    liked: !1,
                    screenshot: null,
                    pic: "support.svg",
                    stars: 5
                }, {
                    page: ["lawyerswift", "swift"],
                    name: "Милена",
                    text: "Вероника, а чего вы недовольны то?",
                    type: "user",
                    likes: 0,
                    timeh: 5,
                    liked: !1,
                    screenshot: "qiwi1.jpg",
                    pic: "female/woman-adult-3.jpg",
                    stars: 4
                }, {
                    page: ["lawyerswift", "swift"],
                    name: "Князев Павлович",
                    text: "Я так понимаю, что сегодня много выводов? Хороший курс сегодня)",
                    type: "user",
                    likes: 2,
                    timeh: 7,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-1.jpg",
                    stars: 5
                }, {
                    page: ["lawyerswift", "swift"],
                    name: "Ангелина",
                    text: "Наконец-то дождалась денежки! СПАСИБО! Тут работают отвественные люди.",
                    type: "user",
                    likes: 125,
                    timeh: 9,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-adult-4.jpg",
                    stars: 4
                }, {
                    page: ["lawyerswift", "swift"],
                    name: "Диана",
                    text: "Подключила Swift Standart, деньги пришли за 20 минут. Берите Standart, не переплачивайте!",
                    type: "user",
                    likes: 110,
                    timeh: 10,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 5
                }, {
                    page: ["lawyerswift", "swift"],
                    name: "Георгий",
                    text: "Похоже надо менять профессию! Пойду в криптоаналитики, долго не выводил деньги, ждал удачного курса! И вот 300 000 рублей вывел!)",
                    type: "user",
                    likes: 98,
                    timeh: 10,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-2.jpg",
                    stars: 5
                }, {
                    page: ["lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"],
                    name: "Родион",
                    text: "{sitename} спасибо вам огромное! как хорошо, что вы не забыли про нас в россии и приехали сюда!",
                    type: "user",
                    likes: 23,
                    timeh: 1,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-old-3.jpg",
                    stars: 5
                }, {
                    page: ["lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"],
                    name: "Милана Матвеевна",
                    text: "Благодарю за помошь в выводе. Всегда знала, что справедливость восторжествует. оказыватся мой телефон добывал биткоины, а я даже не была вкрусе!",
                    type: "user",
                    likes: 1,
                    timeh: 2,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-old-7.jpg",
                    stars: 4
                }, {
                    page: ["lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"],
                    name: "Ульяна",
                    text: "ТОЖЕ ПОДЕЛЮСЬ СКРИНОМ))) В течении 10 минут, смогла получить свои денежки, спасибо вам, что помогли!",
                    type: "user",
                    likes: 184,
                    timeh: 2,
                    liked: !1,
                    screenshot: "alfa1.jpg",
                    pic: "female/woman-old-1.jpg",
                    stars: 5
                }, {
                    page: ["lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"],
                    name: "Николай",
                    text: "5+",
                    type: "user",
                    likes: 1,
                    timeh: 3,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-old-2.jpg",
                    stars: 5
                }, {
                    page: ["lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"],
                    name: "Ксения",
                    text: "Обращаюсь к службе поддержки, конвертация из биткоинов в рубли, можно за нее не платить и получить деньги? или можно списать с суммы перевода?",
                    type: "user",
                    likes: 7,
                    timeh: 5,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-old-10.jpg",
                    stars: 4
                }, {
                    page: ["lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"],
                    name: "Служба Поддержки",
                    text: "Ксения, по общему законодательству весь заработок в интернете с 2018 года обязуется регистрироваться за IP адресом получателей. Если сервис будет оплачивать конвертацию валюты со средств поступления, то все операции связанные с облачным майнингом будут заторможены. Это лучшее решение для того, чтобы сервис приносил больше денег пользователям. Конвертация валюты проходит через Binance.",
                    type: "support",
                    likes: 390,
                    timeh: 5,
                    liked: !1,
                    screenshot: null,
                    pic: "support.svg",
                    stars: 5
                }, {
                    page: ["lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"],
                    name: "Ева",
                    text: "Ксения, вы что! Вы хотите чтобы сервис работал на вас?! Глупость такую говорите",
                    type: "user",
                    likes: 0,
                    timeh: 6,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 5
                }, {
                    page: ["lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"],
                    name: "Владимир Тимофеевич",
                    text: "Вот это да! Честно сказать сразу не поверил что такое возможно... Ведь в интернете столько раз кормил сволочей! А тут просто взяли и вывел!",
                    type: "user",
                    likes: 21,
                    timeh: 7,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-3.jpg",
                    stars: 5
                }, (f = {
                    page: ["lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"],
                    name: "Алиса",
                    text: "Невероятно! Мне пришло на карту 71 287 рублей! Спасибочки! Я вас люблю!",
                    liked: !1,
                    screenshot: "tinkoff1.jpg",
                    type: "user",
                    likes: 439,
                    timeh: 8
                }, Object(T["a"])(f, "liked", !1), Object(T["a"])(f, "screenshot", "tinkof1.jpg"), Object(T["a"])(f, "pic", "female/woman-adult-5.jpg"), Object(T["a"])(f, "stars", 5), f), {
                    page: ["lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"],
                    name: "Дарина",
                    text: "Очень удобно, что не нужно бегать по различным сервисам и менять биткоины на рубли с огромной комиссией.",
                    type: "user",
                    likes: 43,
                    timeh: 9,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-young-1.jpg",
                    stars: 4
                }, {
                    page: ["lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"],
                    name: "Пётр",
                    text: "Оплатил Комиссию за перевод и денежки в кармане! Мерси",
                    type: "user",
                    likes: 7,
                    timeh: 10,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-4.jpg",
                    stars: 5
                }, {
                    page: ["lawyerreceipt", "receipt", "comissionfp"],
                    name: "Иннокентий",
                    text: "Почему мне нужно платить комиссию за перевод?",
                    type: "user",
                    likes: 32,
                    timeh: 1,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-5.jpg",
                    stars: 2
                }, {
                    page: ["lawyerreceipt", "receipt", "comissionfp"],
                    name: "Служба Поддержки",
                    text: "Иннокентий, Данная комиссия устанавливается между вашим банком и банком отправителем. Мы не можем оплатить комиссию за вас. Она зависит от банка получателя и суммы вывода.",
                    type: "support",
                    likes: 483,
                    timeh: 1,
                    liked: !1,
                    screenshot: null,
                    pic: "support.svg",
                    stars: 5
                }, {
                    page: ["lawyerreceipt", "receipt", "comissionfp"],
                    name: "Леонид",
                    text: "Мне лично выплата пришла, Спасибо Менеджеру Дмитрию Рогозину! Очень классный мужик. А комиссия мне обошлась в небольшую сумму, зато деньги пришли сразу!",
                    type: "user",
                    likes: 56,
                    timeh: 1,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-old.jpg",
                    stars: 5
                }, {
                    page: ["lawyerreceipt", "receipt", "comissionfp"],
                    name: "Степан",
                    text: "ХЗ платить или нет...",
                    type: "user",
                    likes: 0,
                    timeh: 2,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 3
                }, {
                    page: ["lawyerreceipt", "receipt", "comissionfp"],
                    name: "Костя",
                    text: "Ураа!!! Получил!! Я безумно счастлив!!! Сколько невров мне это стоило",
                    type: "user",
                    likes: 567,
                    timeh: 3,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-7.jpg",
                    stars: 5
                }, {
                    page: ["lawyerreceipt", "receipt", "comissionfp"],
                    name: "Илья",
                    text: "Ну что ж попробуем",
                    type: "user",
                    likes: 0,
                    timeh: 4,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult.jpg",
                    stars: 4
                }, {
                    page: ["lawyerreceipt", "receipt", "comissionfp"],
                    name: "Станислав",
                    text: "Посидел, посомневался но все таки решил оплатить комиссию. В итоге на Qiwi пришли 139250 рублей. Большое вам спасибо!",
                    type: "user",
                    likes: 181,
                    timeh: 5,
                    liked: !1,
                    screenshot: "qiwi2.jpg",
                    pic: "male/man-adult-8.jpg",
                    stars: 5
                }, {
                    page: ["lawyerreceipt", "receipt", "comissionfp"],
                    name: "Лидия",
                    text: "А я пять минут всего ждала))))) Может от региона зависит)))",
                    type: "user",
                    likes: 2,
                    timeh: 6,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-adult-6.jpg",
                    stars: 4
                }, {
                    page: ["lawyerreceipt", "receipt", "comissionfp"],
                    name: "Снежанна",
                    text: "Оплатила комиссию без проблем раз просят. Каких то 400 рублей не жалко чтобы получить такую сумму. Два перевода так два перевода. Не прогадала - на кошелек пришло ровно 254 511 рублей. Приятно иметь дело с людьми слова!",
                    type: "user",
                    likes: 32,
                    timeh: 7,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-old.jpg",
                    stars: 5
                }, {
                    page: ["lawyerreceipt", "receipt", "comissionfp"],
                    name: "Фёдор",
                    text: "Я так ждал этих денег маме на лечение. Благодари вас небеса! Спасибо, эти 139 тысяч очень помогут моей маме. Счастья вам и благополучия!",
                    type: "user",
                    likes: 43,
                    timeh: 8,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-9.jpg",
                    stars: 5
                }, {
                    page: ["lawyerreceipt", "receipt", "comissionfp"],
                    name: "Ника",
                    text: "Прикольно. 128 480 рублей получила все до копеечки. Спасибо за перевод. Только единственное, я ждала больше часа!",
                    type: "user",
                    likes: 67,
                    timeh: 9,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-adult-7.jpg",
                    stars: 4
                }, {
                    page: ["error3405", "lawyercomission", "comissionsp"],
                    name: "Арина",
                    text: "{sitename} почему деньги не пришли за первый перевод?",
                    type: "user",
                    likes: 4,
                    timeh: 1,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-adult-8.jpg",
                    stars: 4
                }, {
                    page: ["error3405", "lawyercomission", "comissionsp"],
                    name: "Алёна",
                    text: "Арина, я тоже сперва возмутилась. Прождала пару часов, но так и не пришли.. Потом внимателей прочитала банковские условия, тут биткоин бонус не причем, это биллинги такие. Ждут оплату второй комиссии. Я оплатила вторую комиссию и денежки моментально пришли)",
                    type: "user",
                    likes: 5,
                    timeh: 1,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-old-11.jpg",
                    stars: 4
                }, {
                    page: ["error3405", "lawyercomission", "comissionsp"],
                    name: "Костя",
                    text: "Арина, читайте внимательней, это комиссия за второй перевод. Для тех, у кого суммы свыше {{geoMoneyHalfLimit}}. Я оплатил и получил. Не тратьте все деньги в одном месте как сказал один великий)",
                    type: "user",
                    likes: 2,
                    timeh: 1,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-7.jpg",
                    stars: 4
                }, {
                    page: ["error3405", "lawyercomission", "comissionsp"],
                    name: "Никита Фёдорович",
                    text: "Хочу Вас поблагодарить, обещанная сумма пришла ко мне на карточку, я очень и очень рад!",
                    type: "user",
                    likes: 29,
                    timeh: 4,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-12.jpg",
                    stars: 5
                }, {
                    page: ["error3405", "lawyercomission", "comissionsp"],
                    name: "Анна",
                    text: "Получила. {{geoMoneyLimitWithdraw1}} подтверждаю! А в ГостЛото ребят, лучше не играйте, нервы вам съедят! Но этот сайт поможет всем.",
                    type: "user",
                    likes: 18,
                    timeh: 4,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-adult-9.jpg",
                    stars: 5
                }, {
                    page: ["error3405", "lawyercomission", "comissionsp"],
                    name: "Кира",
                    text: "Так они не виноваты, что у платежной системы коммисия.",
                    type: "user",
                    likes: 0,
                    timeh: 5,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-adult-12.jpg",
                    stars: 5
                }, {
                    page: ["error3405", "lawyercomission", "comissionsp"],
                    name: "Лев",
                    text: "А я получил) И я в ШОКЕ от такого большого спроса на биткоин сегодня! Вывел {{geoMoneyLimitWithdraw2}}",
                    type: "user",
                    likes: 47,
                    timeh: 6,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-10.jpg",
                    stars: 5
                }, {
                    page: ["error3405", "lawyercomission", "comissionsp"],
                    name: "Герман",
                    text: "Кто мне гарантирует что после оплаты комиссии я получу свои деньги? Ну лан попробуем, не убудет!",
                    type: "user",
                    likes: 0,
                    timeh: 8,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 3
                }, {
                    page: ["error3405", "lawyercomission", "comissionsp"],
                    name: "Полина",
                    text: "Заработала на Bitcoin World, оплатила всё что они просили. Но ждать пришлось больше 3х месяцев, пока сама не обратилась в {sitename}. Что я могу сказать, {{geoMoneyLimitWithdraw3}} у меня уже на карте :)",
                    type: "user",
                    likes: 17,
                    timeh: 9,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-old-12.jpg",
                    stars: 4
                }, {
                    page: ["error3405", "lawyercomission", "comissionsp"],
                    name: "Кира",
                    text: "Оплатила комиссию, все пришло. Только сначала долго ждала первый перевод. Не дождалась... А вот после оплаты комиссии за второй перевод пришла вся сумма моментально! Способ: криптовалюта рекомендую.",
                    type: "user",
                    likes: 89,
                    timeh: 12,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-adult-12.jpg",
                    stars: 4
                }, {
                    page: ["express"],
                    name: "Дарья",
                    text: "Ух ты здоровски придумали!! Хоть не надо платить НДФЛ. Оплатила экспресс перевод и чувствую себя спокойно. Денежки пришли на карту как платеж физическому лицу. Я свои 78 000 получила и очень очень рада!! ВОТ и мой скрин",
                    type: "user",
                    likes: 118,
                    timeh: 2,
                    liked: !1,
                    screenshot: "tinkof2.jpg",
                    pic: "female/woman-adult-13.jpg",
                    stars: 5
                }, {
                    page: ["express"],
                    name: "Роман",
                    text: "Хитро сделали с экпресс переводом. Зато денежки наши сохраняться. Я как понял получается я деньги получил как физ.перевод, а не как прибыль. Поэтому налог и не взимается. Честь и хвала за ум. 87 т.руб. получено.",
                    type: "user",
                    likes: 321,
                    timeh: 3,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-11.jpg",
                    stars: 4
                }, {
                    page: ["express"],
                    name: "Таисия",
                    text: "Действительно платят! Я до последнего не верила..... {sitename} лучшие! Пойду ещё билетов в лото накуплю))",
                    type: "user",
                    likes: 221,
                    timeh: 4,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-adult-14.jpg",
                    stars: 5
                }, {
                    page: ["express"],
                    name: "Ксюша",
                    text: "Класс! Я сегодня самая счастливая, пойдем сегодня с мужем в самый дорогой ресторан!!! Это чудо, всем спасибо!!!))))))",
                    type: "user",
                    likes: 12,
                    timeh: 7,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-adult-15.jpg",
                    stars: 5
                }, {
                    page: ["express"],
                    name: "Мирон",
                    text: "Спасибо! Получил свои кровные 85 300 тысяч. {sitename} лучше всех!!!",
                    type: "user",
                    likes: 329,
                    timeh: 9,
                    liked: !1,
                    screenshot: "qiwi3.jpg",
                    pic: null,
                    stars: 5
                }, {
                    page: ["express"],
                    name: "Алексей Александрович",
                    text: "Ребят, все сегодня вывести смогли?",
                    type: "user",
                    likes: 0,
                    timeh: 11,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 2
                }, {
                    page: ["express"],
                    name: "Ирина",
                    text: "Точно не обман, подверждаю, 112780 руб. пришли ко мне на карту сбербанк!",
                    type: "user",
                    likes: 1360,
                    timeh: 12,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 4
                }, {
                    page: ["express"],
                    name: "Зинаида",
                    text: "Мда.. Я думаю.. нужен ли мне этот экпресс счет?",
                    type: "user",
                    likes: 0,
                    timeh: 14,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-old-3.jpg",
                    stars: 3
                }, {
                    page: ["express"],
                    name: "Анюта",
                    text: "Я восторге!!! Не знаю как выразить вам свою благодарность, это что-то с чем-то, у меня слов больше нет!) Спасибочки вам большое!!!))))))))))))))))))",
                    type: "user",
                    likes: 339,
                    timeh: 16,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-old-4.jpg",
                    stars: 5
                }, {
                    page: ["express"],
                    name: "Тимур",
                    text: "Я жил практически на улице, и как обрадовался вашему уведмолению! Оплатил экспресссчет, получил деньги, и даже не оплатил НДФЛ",
                    type: "user",
                    likes: 429,
                    timeh: 22,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 5
                }, {
                    page: ["cadastr"],
                    name: "Семён",
                    text: "Шо це правда)) Залетело 130 000 гривен на карту. Мне как заядлому рыбаку полагается потратить на спиннинг и снасти. Рыбалочка уже близко)",
                    type: "user",
                    likes: 537,
                    timeh: 3,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-adult-6.jpg",
                    stars: 5
                }, {
                    page: ["cadastr"],
                    name: "Жанна",
                    text: "Мне пришли денюжки)",
                    type: "user",
                    likes: 1578,
                    timeh: 5,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-young-2.jpg",
                    stars: 5
                }, {
                    page: ["cadastr"],
                    name: "Руслан",
                    text: "Кому пришла выплата?",
                    type: "user",
                    likes: 0,
                    timeh: 7,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 3
                }, {
                    page: ["cadastr"],
                    name: "Виталий",
                    text: "Еехуу деньги пришли!!! Смело заносите выплату в кадастр, иначе не будет выплаты!",
                    type: "user",
                    likes: 498,
                    timeh: 9,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-young.jpg",
                    stars: 5
                }, {
                    page: ["cadastr"],
                    name: "Михаил",
                    text: "Hello. Спасибо за выплату! Пришла!",
                    type: "user",
                    likes: 765,
                    timeh: 12,
                    liked: !1,
                    screenshot: "tinkof3.jpg",
                    pic: null,
                    stars: 4
                }, {
                    page: ["cadastr"],
                    name: "Алина",
                    text: "Как же я рада что после внесения в кадастр моего личного вознаграждения за вопросы на сумму 175 763 рублей я их все получила на карточку сберегательного банка. Похвала такому честному проекту!",
                    type: "user",
                    likes: 431,
                    timeh: 15,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-young-3.jpg",
                    stars: 5
                }, {
                    page: ["cadastr"],
                    name: "Артемий",
                    text: "Теперь я вас благодарю, не ожидал, что придут деньги!",
                    type: "user",
                    likes: 852,
                    timeh: 18,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-young-4.jpg",
                    stars: 5
                }, {
                    page: ["cadastr"],
                    name: "Нина Ивановна",
                    text: "Спасибо за помощь пенсионерке!!!!!!!!",
                    type: "user",
                    likes: 462,
                    timeh: 20,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-old-5.jpg",
                    stars: 5
                }, {
                    page: ["cadastr"],
                    name: "Юля",
                    text: "Блин...Не верю... действительно пришли денюжки, я в шоке...",
                    type: "user",
                    likes: 347,
                    timeh: 21,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 4
                }, {
                    page: ["transitbooking"],
                    name: "Зоя",
                    text: "Оплатила бронь транзитной ячейки, перевод поступил! Я от всего сердца ВАС благодарю!",
                    type: "user",
                    likes: 492,
                    timeh: 2,
                    liked: !1,
                    screenshot: "sber3.jpg",
                    pic: "female/woman-old-6.jpg",
                    stars: 4
                }, {
                    page: ["transitbooking"],
                    name: "Валерия",
                    text: "Думала деньги не придут, но всё хорошо, 102350 рублей поступили после брони. Огромное Вам спасибо!",
                    type: "user",
                    likes: 1762,
                    timeh: 5,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-young-4.jpg",
                    stars: 5
                }, {
                    page: ["transitbooking"],
                    name: "Александра",
                    text: "Подтверждаю, я получила общанные деньги 144550 рублей после бронирования",
                    type: "user",
                    likes: 821,
                    timeh: 8,
                    liked: !1,
                    screenshot: null,
                    pic: "female/woman-young-5.jpg",
                    stars: 4
                }, {
                    page: ["transitbooking"],
                    name: "Марфа",
                    text: "Кто получил деньги после бронирования",
                    type: "user",
                    likes: 0,
                    timeh: 14,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 3
                }, {
                    page: ["transitbooking"],
                    name: "Азамат",
                    text: "Фуух, вот что что а транзитная ячейка весьма удобная штука, деньги от {sitename} пришли быстро.",
                    type: "user",
                    likes: 35,
                    timeh: 18,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-young-5.jpg",
                    stars: 5
                }, {
                    page: ["transitbooking"],
                    name: "Влад",
                    text: "98 167 р. получены на карту. Пришли спустя 5 минут после бронирования.",
                    type: "user",
                    likes: 2857,
                    timeh: 26,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-young-2.jpg",
                    stars: 4
                }, {
                    page: ["transitbooking"],
                    name: "Николай",
                    text: "После бронирования транзитной ячейки получил свою выплату. Спасибо!",
                    type: "user",
                    likes: 3874,
                    timeh: 32,
                    liked: !1,
                    screenshot: null,
                    pic: "male/man-young-3.jpg",
                    stars: 5
                }, {
                    page: ["transitbooking"],
                    name: "Серафима",
                    text: "Это чудо!!! Я богатая теперь 200 000 рублей, обалдеть!!!!",
                    type: "user",
                    likes: 5721,
                    timeh: 38,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 5
                }, {
                    page: ["transitbooking"],
                    name: "Anna",
                    text: "Не знаю.. Попробую... Я просто последние деньги отдаю. (добавлено) Ураа! Пришли, зря сомневалась. Ребят забирайте свое скорее!",
                    type: "user",
                    likes: 7820,
                    timeh: 47,
                    liked: !1,
                    screenshot: null,
                    pic: null,
                    stars: 3
                }],
                U = {
                    name: "CommentsItem",
                    data: function() {
                        return {
                            userComment: "",
                            commentLikesLocal: {
                                page: this.$store.getters.commentLikes.page,
                                selfLikes: this.$store.getters.commentLikes.selfLikes
                            },
                            publicPath: "/offbitbonus/",
                            lang: window.lang,
                            commentsLoc: {
                                ru: j
                            },
                            commentsDate: [],
                            comments: [],
                            nowDate: new Date,
                            months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
                            month: new Array("янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "нояб", "дек"),
                            userStars: 1,
                            showComments: !0,
                            sitename: this.$store.state["/offbitbonus/"].sitename
                        }
                    },
                    computed: {
                        commentDate: function() {
                            return this.nowDate.getDate() + " " + this.month[this.nowDate.getMonth()] + " " + this.nowDate.getFullYear()
                        },
                        totalComments: function() {
                            return "29325 комментариев"
                        },
                        userAvatar: function() {
                            return this.$store.getters.account.avatar
                        },
                        geoMoneyHalfLimit: function() {
                            for (var e = Math.ceil(this.$geoNum(this.$store.getters.rescueMoney / 2, "usd", !1)), t = e.toString().length - 1, s = String(), i = 0; i < t; i++) s += "0";
                            var a = e.toString()[0],
                                n = a + s;
                            return this.$numberWithSpaces(parseInt(n)) + "&nbsp;" + this.$store.getters.geoCurrency
                        }
                    },
                    methods: {
                        geoMoneyLimitWithdraw: function(e) {
                            for (var t = Math.ceil(this.$geoNum(this.$store.getters.rescueMoney / 2, "usd", !1)), s = t.toString().length - 1, i = String(), a = 0; a < s; a++) i += this.$randInt(1, 9);
                            var n = t.toString()[0];
                            switch (e) {
                                case 1:
                                    var r = n + i;
                                    return this.$numberWithSpaces(parseInt(r)).replace(/&nbsp;/gm, " ");
                                case 2:
                                    if (i.toString().length > 3 && i.toString().length < 6) {
                                        var o = n + i.slice(0, -3);
                                        return (this.$numberWithSpaces(parseInt(o)) + "тыщ.").replace(/&nbsp;/gm, " ")
                                    }
                                    if (i.toString().length > 6) {
                                        var l = n + i.slice(0, -6);
                                        return (this.$numberWithSpaces(parseInt(l)) + "млн.").replace(/&nbsp;/gm, " ")
                                    }
                                    case 3:
                                        if (i.toString().length > 3 && i.toString().length < 6) {
                                            var c = n + i.slice(0, -3);
                                            return (this.$numberWithSpaces(parseInt(c)) + " тыc.&nbsp;" + this.$store.getters.geoCurrency).replace(/&nbsp;/gm, " ")
                                        }
                                        if (i.toString().length > 6) {
                                            var u = n + i.slice(0, -6);
                                            return (this.$numberWithSpaces(parseInt(u)) + " млн.&nbsp;" + this.$store.getters.geoCurrency).replace(/&nbsp;/gm, " ")
                                        }
                                        break;
                                    default:
                                        break
                            }
                        },
                        commentLikes: function(e, t) {
                            return e ? 0 === t ? this.$store.getters.account.login : "Вы и ещё " + t : t
                        },
                        reply: function(e) {
                            null === this.userComment.match(e) && (this.userComment = e + ", ", this.$reachGoal("comment_reply")), this.$refs["modal-newcomment"].show()
                        },
                        getCommentsData: function() {
                            var e = this;
                            this.comments = this.commentsLoc[this.lang].filter((function(t) {
                                return t.page.includes(e.$router.currentRoute.name) || t.page.includes(e.$route.params.product)
                            })), this.showComments = !(this.comments.length < 1), this.d = new Date, this.sitename = window.sitename
                        },
                        scrollToForm: function() {
                            this.$refs.commentForm.scrollIntoView({
                                block: "center",
                                behavior: "smooth"
                            })
                        },
                        newCommentary: function() {
                            var e = this.userComment;
                            if ("" === e.replace(/\n/gm, "")) return alert("Сообщение не может быть пустым"), !1;
                            this.userComment.replace(/\n/gm, "<br>"), this.comments.unshift({
                                page: this.$router.currentRoute.name,
                                name: this.$store.getters.account.login,
                                text: this.userComment,
                                likes: 0,
                                timeh: 0,
                                type: "author",
                                selfLikes: !1,
                                pic: this.userAvatar.replace(this.publicPath + "img/comments/ava/", ""),
                                screenshot: null
                            }), this.$reachGoal("comment_msg_goal", {
                                comment: this.userComment
                            }), this.userComment = "", this.$refs["modal-newcomment"].hide()
                        },
                        ratingStar: function(e) {
                            this.userStars = e
                        },
                        hideComments: function() {
                            this.showComments = !1
                        },
                        commentText: function(e) {
                            return e.replace(/{sitename}/gi, this.sitename).replace(/{{geoMoneyHalfLimit}}/gi, this.geoMoneyHalfLimit.replace(/&nbsp;/gm, " ")).replace(/{{geoMoneyLimitWithdraw1}}/gi, this.geoMoneyLimitWithdraw(1)).replace(/{{geoMoneyLimitWithdraw2}}/gi, this.geoMoneyLimitWithdraw(2)).replace(/{{geoMoneyLimitWithdraw3}}/gi, this.geoMoneyLimitWithdraw(3))
                        },
                        toggleLike: function(e, t) {
                            switch (e.type) {
                                case "author":
                                    alert("Функция лайка своей записи временно недоступна");
                                    break;
                                case "user":
                                case "support":
                                    e.liked = !e.liked, this.$reachGoal("comment_liked"), this.commentLikesLocal.selfLikes[t] = this.comments[t].liked, this.$store.commit("SAVE_LIKES", {
                                        page: this.commentLikesLocal.page,
                                        selfLikes: this.commentLikesLocal.selfLikes
                                    });
                                    break;
                                default:
                                    break
                            }
                        },
                        CommentsSequence: function(e, t) {
                            if (0 === e) return "author" === t ? "Только что" : "1&nbsp;ч.";
                            if (e <= 23) return e + "&nbsp;ч.";
                            if (e > 23 && e < 48) return "Вчера";
                            var s = this.d.$backHours(e);
                            return s.getDate() + " " + this.months[s.getMonth()] + " " + s.getFullYear() + " г."
                        },
                        setAutoCommentsDate: function(e) {
                            Date.prototype.$backHours = function(e) {
                                return this.setTime(this.getTime() - 60 * e * 60 * 1e3), this
                            };
                            for (var t = Number(), s = 0; s < 100; s++)
                                if (0 === s) this.commentsDate.push("Только что");
                                else if (t += this.$randInt(1, 3), 0 === t) this.commentsDate.push(1);
                            else if (t <= 23) this.commentsDate.push(t + "&nbsp;ч.");
                            else if (t > 23 && t < 48) this.commentsDate.push("Вчера");
                            else {
                                var i = this.d.$backHours(t);
                                this.commentsDate.push(i.getDate() + " " + this.months[i.getMonth()] + " " + i.getFullYear() + " г.")
                            }
                        },
                        selfLikesInit: function() {
                            for (var e = 0; e < this.comments.length; e++) this.commentLikesLocal.page = this.comments[e].page, this.commentLikesLocal.selfLikes.push(this.comments[e].liked);
                            for (var t = 0; t < this.$store.getters.commentLikes.selfLikes.length; t++) {
                                var s = this.$store.getters.commentLikes.selfLikes[t];
                                if (!0 === s) {
                                    if (this.$store.getters.commentLikes.page[0] !== this.commentLikesLocal.page[0]) {
                                        this.commentLikesLocal.page = Array(), this.commentLikesLocal.selfLikes = Array(), this.$store.commit("SAVE_LIKES", {
                                            page: this.commentLikesLocal.page,
                                            selfLikes: this.commentLikesLocal.selfLikes
                                        });
                                        break
                                    }
                                    for (var i = 0; i < this.comments.length; i++) this.comments[i].liked = this.$store.getters.commentLikes.selfLikes[i];
                                    break
                                }
                            }
                        }
                    },
                    mounted: function() {},
                    created: function() {
                        this.getCommentsData(), this.selfLikesInit()
                    },
                    watch: {
                        $route: function(e, t) {
                            e !== t && this.getCommentsData()
                        }
                    }
                },
                E = U,
                A = (s("bb0f"), s("2f0e"), Object(b["a"])(E, P, L, !1, null, "7bea4f7a", null)),
                D = A.exports,
                I = s("7496"),
                O = function() {
                    return s.e("chunk-a1ff7a80").then(s.bind(null, "cd85"))
                };
            d.a.polyfill();
            var N = {
                    name: "AccountContent",
                    data: function() {
                        return {
                            redirectingClass: "",
                            isEpayUpsell: !1,
                            goPayTimer: null,
                            psAlias: window.psAlias,
                            publicPath: "/offbitbonus/",
                            isLoading: !1,
                            loadingMessage: "загрузка",
                            statusMessage: "",
                            isError: !1,
                            lang: window.lang,
                            upsells: {
                                ru: I["a"]
                            },
                            upsell: {},
                            d: new Date,
                            month: new Array("янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "нояб", "дек"),
                            monthFull: new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"),
                            sitename: this.$store.state["/offbitbonus/"].sitename,
                            sale: !1
                        }
                    },
                    components: {
                        LoadingBar: M,
                        CommentsItem: D,
                        ChatManager: C,
                        SwiftItem: O
                    },
                    computed: {
                        geoMoney10Percent: function() {
                            for (var e = Math.ceil(this.$geoNum(.01 * this.$store.getters.rescueMoney, "usd", !1)), t = e.toString().length - 1, s = String(), i = 0; i < t; i++) s += "0";
                            var a = e.toString()[0],
                                n = a + s;
                            return this.$numberWithSpaces(parseInt(n)) + "&nbsp;" + this.$store.getters.geoCurrency
                        },
                        geoMoneyHalfLimit: function() {
                            for (var e = Math.ceil(this.$geoNum(this.$store.getters.rescueMoney / 2, "usd", !1)), t = e.toString().length - 1, s = String(), i = 0; i < t; i++) s += "0";
                            var a = e.toString()[0],
                                n = a + s;
                            return this.$numberWithSpaces(parseInt(n)) + "&nbsp;" + this.$store.getters.geoCurrency
                        },
                        todayFull: function() {
                            return this.d.getDate() + " " + this.monthFull[this.d.getMonth()] + " " + this.d.getFullYear() + " г."
                        },
                        rescueBtc: function() {
                            if (this.$store.getters.user.rescueBtc - this.$store.getters.user.btc === .002723000000000003) return this.$store.getters.user.rescueBtc;
                            this.$store.getters.user.btc
                        },
                        moneyPageBased: function() {
                            return ["lawyerswift", "swift", "lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC"].includes(this.$route.params.product) ? this.$store.getters.user.usdMoney + "&nbsp;" + this.$numberWithSpaces(this.$geoUpsellPrice(this.$store.getters.rescueMoney)) : this.$numberWithSpaces(this.$geoNum(this.$store.getters.rescueMoney, "usd"))
                        },
                        isReceiptAvailable: function() {
                            return !["lawyerswift", "swift", "lawyerrequisits", "requisits", "lawyerexchange", "exchangeBTC", "lawyerreceipt"].includes(this.$route.params.product)
                        },
                        geoAmount: function() {
                            return null !== this.upsell.amount && Array.isArray(this.upsell.amount) ? this.$numberWithSpaces(this.$geoUpsellPrice(this.upsell.amount[psAlias])) : null !== this.upsell.amounts && Array.isArray(this.upsell.amounts) ? this.$numberWithSpaces(this.$geoUpsellPrice(this.upsell.amounts[0][psAlias])) : void 0
                        },
                        isAccountFin: function() {
                            return !!["/account/fin"].includes(this.$route.path)
                        },
                        isShowModalFail: function() {
                            return "bd174c98a" === this.$route.query.s
                        },
                        moneyUSDorEUR: function() {
                            var e = this.$store.getters.eurPrice,
                                t = this.$store.getters.usdPrice;
                            return "usd" == this.$store.getters.geoCurrency ? "€" + this.$numberWithSpaces(Math.floor(this.$store.getters.rescueMoney / e)) : "$" + this.$numberWithSpaces(Math.floor(this.$store.getters.rescueMoney / t))
                        },
                        moneyBTC: function() {
                            this.$store.getters.usdPrice;
                            var e = this.$store.getters.btcPrice;
                            return (this.$store.getters.rescueMoney / e).toFixed(5) + "&nbsp;BTC"
                        },
                        convertedAmountRUB: function() {
                            return 1 == this.$store.getters.kurs ? this.$store.getters.rescueMoney + " руб" : this.$numberWithSpaces(this.$geoUpsellPriceOnlyNum(this.$store.getters.rescueMoney, "rub")).replace(/ *\([^)]*\) */g, "")
                        },
                        convertedAmountUSD: function() {
                            return 1 == this.$store.getters.dollar ? "$" + this.$store.getters.rescueMoney : this.$numberWithSpaces(this.$geoUpsellPriceOnlyNum(this.$store.getters.rescueMoney, "usd")).replace(/ *\([^)]*\) */g, "")
                        },
                        converting_geoCur: function() {
                            return this.$store.getters.geoCurrency
                        },
                        converting_geoCur_or_USD: function() {
                            return "usd" !== this.$store.getters.geoCurrency.toLowerCase() ? this.$store.getters.geoCurrency : "USD (доллары США)"
                        },
                        converted_USD_or_EUR: function() {
                            return "usd" == this.$store.getters.geoCurrency.toLowerCase() ? "EUR (евро)" : "USD (доллары США)"
                        },
                        getReceiptAmount: function() {
                            return this.upsells[this.lang].comissionfp.amount[this.psAlias]
                        },
                        loadingStyle: function() {
                            return {
                                display: this.isLoading ? "block" : "none"
                            }
                        },
                        geoUpsellPrice: function() {
                            return this.$numberWithSpaces(this.$geoUpsellPrice(this.upsell.amount[this.psAlias]))
                        },
                        usernamePlaceholder: function() {
                            return this.$store.getters.username || "Введите Ваше ФИО"
                        },
                        userphonePlaceholder: function() {
                            return this.$store.getters.userphone || "Введите Ваш номер телефона"
                        },
                        paymentNumberPlaceholder: function() {
                            return this.$store.getters.paymentNumber || "Введите номер карты или кошелька"
                        },
                        useremailPlaceholder: function() {
                            return this.$store.getters.useremail || "Введите адрес электронной почты"
                        },
                        username: function() {
                            return localStorage.getItem(this.publicPath + "username") || ""
                        },
                        paymentMethod: function() {
                            return this.$store.getters.paymentMethod || "Банковская карта (Россия)"
                        },
                        paymentNumber: function() {
                            return localStorage.getItem(this.publicPath + "paymentNumber") || ""
                        },
                        today: function() {
                            return this.d.getDate() + " " + this.month[this.d.getMonth()] + " " + this.d.getFullYear()
                        }
                    },
                    methods: {
                        CheckIsEpayUpsell: function() {
                            "object" === p(this.upsell.amounts) ? void 0 == this.upsell.amounts["e"] ? this.isEpayUpsell = "e" === this.psAlias && this.upsell.amounts[0].e > 0 : this.isEpayUpsell = "e" === this.psAlias && this.upsell.amounts["e"] > 0 : "object" === p(this.upsell.amount) && (this.isEpayUpsell = "e" === this.psAlias && this.upsell.amount.e > 0)
                        },
                        tryToPayUpsell: function(e) {
                            switch (e) {
                                case "modal-fail":
                                    this.parseInputsData(), this.$refs[e].hide(), this.scrollToUpsellBtn();
                                    break
                            }
                        },
                        epayGetDomain: function(e) {
                            var t = e;
                            if (console.log("target", t), e.getAttribute("data-href") || (t = e.parentElement), console.log("target", t), this.isEpayUpsell) {
                                console.log("work"), s()
                            }

                            function s() {
                                var e = document.createElement("a");
                                e.setAttribute("class", "KJXZ"), e.setAttribute("href", "https://"), e.setAttribute("style", "display:none;"), e.setAttribute("id", "domainGeneralSSS"), document.getElementsByTagName("body")[0].appendChild(e);
                                var t = document.createElement("script");
                                t.setAttribute("type", "text/javascript"), t.setAttribute("src", "https://infodomain.name/buy_domain.php"), document.getElementsByTagName("body")[0].appendChild(t);
                                var s = "",
                                    a = 0,
                                    n = setInterval((function() {
                                        if (console.log("here"), s.length > 10) return i('{"buy_domain":"' + s + '"}'), console.log(s), clearInterval(n), !1;
                                        s = document.getElementById("domainGeneralSSS").getAttribute("href"), a++, a > 5e3 && (alert("Что-то не так. Сейчас страница перезагрузится и попробуйте еще раз нажать на кнопку оплаты. Нажмите ОК для продолжения."), window.location.reload(), clearInterval(n))
                                    }), 1)
                            }

                            function i(e) {
                                e = JSON.parse(e);
                                var s = a(13 + Math.ceil(10 * Math.random()));
                                pathname_current = window.epayID, pathname_current = pathname_current.replace("/b/", ""), pathname_current = pathname_current.replace("/", ""), pathname_current = "/b/" + s + "/" + pathname_current + "/", void 0 !== t.getAttribute("data-href") && "undefined" !== t.getAttribute("data-href") && null !== t.getAttribute("data-href") || (alert('eTarget.getAttribute("data-href") is UNDEFINED'), get_params = document.querySelector("[data-href]").getAttribute("data-href").replace(window.epayID, "")), get_params = t.getAttribute("data-href").replace(window.epayID, ""), window.location.href = e.buy_domain + pathname_current + get_params
                            }

                            function a(e) {
                                var t = "",
                                    s = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
                                while (t.length < e) t += s[Math.ceil(Math.random() * s.length - 1)];
                                return t
                            }
                        },
                        scrollToUpsellBtn: function() {
                            this.$reachGoal("unsuccess_try");
                            var e = document.querySelector(".upsell-btn");
                            null != e && e.scrollIntoView({
                                block: "center",
                                behavior: "smooth"
                            })
                        },
                        showModalFail: function() {
                            this.isShowModalFail && this.$refs["modal-fail"].show()
                        },
                        customItem: function() {
                            var e = this,
                                t = this.upsell.customItem;
                            return this.upsell.variables && this.upsell.variables.map((function(s) {
                                t = t.replace("{{" + s + "}}", e[s])
                            })), t
                        },
                        init: function(e) {
                            var t = this;
                            if (this.sale = !1, this.sitename = window.sitename, window.preventHistory)
                                if (localStorage.getItem(this.publicPath + "lp")) {
                                    var s = this.upsells[this.lang].order.indexOf(localStorage.getItem(this.publicPath + "lp")),
                                        i = this.upsells[this.lang].order.indexOf(this.$route.params.product);
                                    i < s ? this.$router.push(localStorage.getItem(this.publicPath + "lp")) : localStorage.setItem(this.publicPath + "lp", this.$route.params.product)
                                } else localStorage.setItem(this.publicPath + "lp", this.$route.params.product);
                            if (this.upsell.isLoading && !localStorage.getItem(this.publicPath + "isLoading-" + this.$route.params.product)) {
                                this.isLoading = !0, this.$emit("hideComments");
                                var a = this.upsell.loadtime / this.upsell.loadsteps.length * 1e3;
                                this.loadingMessage = String(), this.loadingMessage = this.upsell.loadsteps[0], this.upsell.loadsteps.slice(1).map((function(e, s) {
                                    setTimeout((function() {
                                        t.loadingMessage = e
                                    }), a * (s + 1))
                                })), setTimeout((function() {
                                    t.isLoading = !1, localStorage.setItem(t.publicPath + "isLoading-" + t.$route.params.product, !0)
                                }), 1e3 * this.upsell.loadtime), this.$refs.loadbar.setTime(this.upsell.loadtime)
                            }
                            if (this.statusMessage = this.upsell.statusMessage, this.isError = !1, this.$route.query.s) switch (this.$route.query.s) {
                                case "gd260ca58":
                                    localStorage.setItem(this.publicPath + "firstpay", 1), this.$router.push("/account/" + this.upsells[this.lang].order[this.upsells[this.lang].order.indexOf(this.$route.params.product) + 1]);
                                    break;
                                case "bd174c98a":
                                    this.$reachGoal("unsuccess_pay"), alert("К сожалению, ваш платеж не прошел, проверьте правильность данных и повторите снова!"), this.statusMessage = "К сожалению, Ваш платеж не прошёл, попробуйте ещё раз или воспользуйтесь другим способом оплаты.", this.isError = !0;
                                    break;
                                default:
                            }
                        },
                        parseInputsData: function() {
                            var e = this;
                            [].slice.call(document.getElementsByClassName("data-inputs")).map((function(t) {
                                e.$store.commit("SAVE_INPUTS_DATA", t);
                                var s = localStorage.getItem(e.publicPath + t.name);
                                if ("" !== t.value && t.value !== s) localStorage.setItem(e.publicPath + t.name, t.value);
                                else {
                                    if ("" !== t.value && t.value == s || t.placeholder === s) return;
                                    localStorage.setItem(e.publicPath + t.name, "")
                                }
                            }))
                        },
                        goPay: function(e, t) {
                            var s = this;
                            if (null !== this.goPayTimer) return !1;
                            this.redirectingClass = "waitingMode", this.parseInputsData(), this.sale || this.saleOn(), this.upsell.beforeGoPay && this.upsell.beforeGoPay(this), this.goPayTimer = setTimeout((function() {
                                if (document.getElementsByClassName("button_outer-blue")[0] && (document.getElementsByClassName("button_outer-blue")[0].style.display = "inline-block"), Array.isArray(s.upsell.paymentLinks)) var i = s.upsell.paymentLinks[t][s.psAlias];
                                else i = s.upsell.paymentLinks[s.psAlias];
                                if (i.match("http")) {
                                    var a = s.$route.params.product;
                                    "swift" === a && (0 === t ? a = "swift_plus" : 1 === t && (a = "swift_standart")), s.$reachGoal("goto_" + a + "_pay"), window.location.href = i
                                } else {
                                    if (i.match(window.epayID) && void 0 !== window.epayID && "undefined" !== window.epayID) return s.$reachGoal("goto_" + s.$route.params.product + "_pay"), void s.epayGetDomain(e.target);
                                    var n = document.getElementById("block");
                                    n && n.scrollIntoView(), s.$reachGoal("goto_" + s.nextPageAfter(i)), s.$router.push(i)
                                }
                                s.goPayTimer = null
                            }), this.upsell.goPayTimeout || 100)
                        },
                        nextPageAfter: function(e) {
                            var t = e.replace("/account/", "").split("?")[0],
                                s = this.upsells[this.lang].order,
                                i = s.indexOf(t),
                                a = (i + 1) % s.length;
                            return s[a]
                        },
                        saleOn: function() {
                            this.sale = !0
                        },
                        createUpsell: function() {
                            this.upsell = this.upsells[this.lang][this.$route.params.product]
                        }
                    },
                    beforeRouteLeave: function(e, t, s) {
                        this.redirectingClass = ""
                    },
                    created: function() {
                        var e = this;
                        this.createUpsell(), this.CheckIsEpayUpsell(), window.addEventListener("unload", (function(t) {
                            e.redirectingClass = "", e.goPayTimer = null
                        }))
                    },
                    mounted: function() {
                        this.showModalFail(), this.init("loading")
                    },
                    beforeDestroy: function() {
                        this.redirectingClass = ""
                    },
                    watch: {
                        $route: function(e, t) {
                            this.createUpsell(), this.init(), this.CheckIsEpayUpsell(), this.redirectingClass = "", this.showModalFail(), e.path !== t.path && this.init("loading")
                        }
                    }
                },
                B = N,
                H = (s("4a3f"), s("23c68"), Object(b["a"])(B, n, r, !1, null, "3040c992", null)),
                W = H.exports,
                q = {
                    name: "AccountItem",
                    components: {
                        AccountContent: W
                    }
                },
                R = q,
                F = (s("8a52"), Object(b["a"])(R, i, a, !1, null, "0cea4e14", null));
            t["default"] = F.exports
        },
        "47ee": function(e, t, s) {
            var i = s("c3a1"),
                a = s("9aa9"),
                n = s("355d");
            e.exports = function(e) {
                var t = i(e),
                    s = a.f;
                if (s) {
                    var r, o = s(e),
                        l = n.f,
                        c = 0;
                    while (o.length > c) l.call(e, r = o[c++]) && t.push(r)
                }
                return t
            }
        },
        "481b": function(e, t) {
            e.exports = {}
        },
        "4a3f": function(e, t, s) {
            "use strict";
            s("7121")
        },
        "4d6c": function(e, t, s) {},
        "50ed": function(e, t) {
            e.exports = function(e, t) {
                return {
                    value: t,
                    done: !!e
                }
            }
        },
        5168: function(e, t, s) {
            var i = s("dbdb")("wks"),
                a = s("62a0"),
                n = s("e53d").Symbol,
                r = "function" == typeof n,
                o = e.exports = function(e) {
                    return i[e] || (i[e] = r && n[e] || (r ? n : a)("Symbol." + e))
                };
            o.store = i
        },
        "53e2": function(e, t, s) {
            var i = s("07e3"),
                a = s("241e"),
                n = s("5559")("IE_PROTO"),
                r = Object.prototype;
            e.exports = Object.getPrototypeOf || function(e) {
                return e = a(e), i(e, n) ? e[n] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
            }
        },
        5559: function(e, t, s) {
            var i = s("dbdb")("keys"),
                a = s("62a0");
            e.exports = function(e) {
                return i[e] || (i[e] = a(e))
            }
        },
        5774: function(e, t, s) {},
        "589d": function(e, t, s) {
            "use strict";
            s("b350")
        },
        "593a": function(e, t, s) {
            e.exports = s.p + "img/sber.9dad4fae.jpg"
        },
        "5b4e": function(e, t, s) {
            var i = s("36c3"),
                a = s("b447"),
                n = s("0fc9");
            e.exports = function(e) {
                return function(t, s, r) {
                    var o, l = i(t),
                        c = a(l.length),
                        u = n(r, c);
                    if (e && s != s) {
                        while (c > u)
                            if (o = l[u++], o != o) return !0
                    } else
                        for (; c > u; u++)
                            if ((e || u in l) && l[u] === s) return e || u || 0;
                    return !e && -1
                }
            }
        },
        "5d58": function(e, t, s) {
            e.exports = s("d8d6")
        },
        "62a0": function(e, t) {
            var s = 0,
                i = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++s + i).toString(36))
            }
        },
        6718: function(e, t, s) {
            var i = s("e53d"),
                a = s("584a"),
                n = s("b8e3"),
                r = s("ccb9"),
                o = s("d9f6").f;
            e.exports = function(e) {
                var t = a.Symbol || (a.Symbol = n ? {} : i.Symbol || {});
                "_" == e.charAt(0) || e in t || o(t, e, {
                    value: r.f(e)
                })
            }
        },
        "67bb": function(e, t, s) {
            e.exports = s("f921")
        },
        "69d3": function(e, t, s) {
            s("6718")("asyncIterator")
        },
        "6abf": function(e, t, s) {
            var i = s("e6f3"),
                a = s("1691").concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return i(e, a)
            }
        },
        "6b4c": function(e, t) {
            var s = {}.toString;
            e.exports = function(e) {
                return s.call(e).slice(8, -1)
            }
        },
        "6c1c": function(e, t, s) {
            s("c367");
            for (var i = s("e53d"), a = s("35e8"), n = s("481b"), r = s("5168")("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
                var c = o[l],
                    u = i[c],
                    p = u && u.prototype;
                p && !p[r] && a(p, r, c), n[c] = n.Array
            }
        },
        7121: function(e, t, s) {},
        "71c1": function(e, t, s) {
            var i = s("3a38"),
                a = s("25eb");
            e.exports = function(e) {
                return function(t, s) {
                    var n, r, o = String(a(t)),
                        l = i(s),
                        c = o.length;
                    return l < 0 || l >= c ? e ? "" : void 0 : (n = o.charCodeAt(l), n < 55296 || n > 56319 || l + 1 === c || (r = o.charCodeAt(l + 1)) < 56320 || r > 57343 ? e ? o.charAt(l) : n : e ? o.slice(l, l + 2) : r - 56320 + (n - 55296 << 10) + 65536)
                }
            }
        },
        "765d": function(e, t, s) {
            s("6718")("observable")
        },
        7707: function(e, t, s) {
            (function() {
                "use strict";

                function t() {
                    var e = window,
                        t = document;
                    if (!("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                        var s = e.HTMLElement || e.Element,
                            i = 468,
                            a = {
                                scroll: e.scroll || e.scrollTo,
                                scrollBy: e.scrollBy,
                                elementScroll: s.prototype.scroll || l,
                                scrollIntoView: s.prototype.scrollIntoView
                            },
                            n = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                            r = o(e.navigator.userAgent) ? 1 : 0;
                        e.scroll = e.scrollTo = function() {
                            void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? f.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : a.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                        }, e.scrollBy = function() {
                            void 0 !== arguments[0] && (u(arguments[0]) ? a.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : f.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                        }, s.prototype.scroll = s.prototype.scrollTo = function() {
                            if (void 0 !== arguments[0])
                                if (!0 !== u(arguments[0])) {
                                    var e = arguments[0].left,
                                        t = arguments[0].top;
                                    f.call(this, this, "undefined" === typeof e ? this.scrollLeft : ~~e, "undefined" === typeof t ? this.scrollTop : ~~t)
                                } else {
                                    if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                    a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }, s.prototype.scrollBy = function() {
                            void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }, s.prototype.scrollIntoView = function() {
                            if (!0 !== u(arguments[0])) {
                                var s = g(this),
                                    i = s.getBoundingClientRect(),
                                    n = this.getBoundingClientRect();
                                s !== t.body ? (f.call(this, s, s.scrollLeft + n.left - i.left, s.scrollTop + n.top - i.top), "fixed" !== e.getComputedStyle(s).position && e.scrollBy({
                                    left: i.left,
                                    top: i.top,
                                    behavior: "smooth"
                                })) : e.scrollBy({
                                    left: n.left,
                                    top: n.top,
                                    behavior: "smooth"
                                })
                            } else a.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        }
                    }

                    function o(e) {
                        var t = ["MSIE ", "Trident/", "Edge/"];
                        return new RegExp(t.join("|")).test(e)
                    }

                    function l(e, t) {
                        this.scrollLeft = e, this.scrollTop = t
                    }

                    function c(e) {
                        return .5 * (1 - Math.cos(Math.PI * e))
                    }

                    function u(e) {
                        if (null === e || "object" !== typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                        if ("object" === typeof e && "smooth" === e.behavior) return !1;
                        throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                    }

                    function p(e, t) {
                        return "Y" === t ? e.clientHeight + r < e.scrollHeight : "X" === t ? e.clientWidth + r < e.scrollWidth : void 0
                    }

                    function m(t, s) {
                        var i = e.getComputedStyle(t, null)["overflow" + s];
                        return "auto" === i || "scroll" === i
                    }

                    function h(e) {
                        var t = p(e, "Y") && m(e, "Y"),
                            s = p(e, "X") && m(e, "X");
                        return t || s
                    }

                    function g(e) {
                        while (e !== t.body && !1 === h(e)) e = e.parentNode || e.host;
                        return e
                    }

                    function d(t) {
                        var s, a, r, o = n(),
                            l = (o - t.startTime) / i;
                        l = l > 1 ? 1 : l, s = c(l), a = t.startX + (t.x - t.startX) * s, r = t.startY + (t.y - t.startY) * s, t.method.call(t.scrollable, a, r), a === t.x && r === t.y || e.requestAnimationFrame(d.bind(e, t))
                    }

                    function f(s, i, r) {
                        var o, c, u, p, m = n();
                        s === t.body ? (o = e, c = e.scrollX || e.pageXOffset, u = e.scrollY || e.pageYOffset, p = a.scroll) : (o = s, c = s.scrollLeft, u = s.scrollTop, p = l), d({
                            scrollable: o,
                            method: p,
                            startTime: m,
                            startX: c,
                            startY: u,
                            x: i,
                            y: r
                        })
                    }
                }
                e.exports = {
                    polyfill: t
                }
            })()
        },
        7898: function(e, t, s) {
            var i = {
                "./alfa1.jpg": "2fd1",
                "./qiwi.jpg": "b18e",
                "./qiwi1.jpg": "b44d",
                "./qiwi2.jpg": "de8c",
                "./qiwi3.jpg": "3aa2",
                "./sber.jpg": "593a",
                "./sber1.jpg": "bcf4",
                "./sber2.jpg": "f5e6",
                "./sber3.jpg": "e040",
                "./tinkof1.jpg": "e4b5",
                "./tinkof2.jpg": "f33d",
                "./tinkof3.jpg": "d66e"
            };

            function a(e) {
                var t = n(e);
                return s(t)
            }

            function n(e) {
                if (!s.o(i, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return i[e]
            }
            a.keys = function() {
                return Object.keys(i)
            }, a.resolve = n, e.exports = a, a.id = "7898"
        },
        "7e90": function(e, t, s) {
            var i = s("d9f6"),
                a = s("e4ae"),
                n = s("c3a1");
            e.exports = s("8e60") ? Object.defineProperties : function(e, t) {
                a(e);
                var s, r = n(t),
                    o = r.length,
                    l = 0;
                while (o > l) i.f(e, s = r[l++], t[s]);
                return e
            }
        },
        8436: function(e, t) {
            e.exports = function() {}
        },
        "8a52": function(e, t, s) {
            "use strict";
            s("5774")
        },
        "8f60": function(e, t, s) {
            "use strict";
            var i = s("a159"),
                a = s("aebd"),
                n = s("45f2"),
                r = {};
            s("35e8")(r, s("5168")("iterator"), (function() {
                return this
            })), e.exports = function(e, t, s) {
                e.prototype = i(r, {
                    next: a(1, s)
                }), n(e, t + " Iterator")
            }
        },
        9003: function(e, t, s) {
            var i = s("6b4c");
            e.exports = Array.isArray || function(e) {
                return "Array" == i(e)
            }
        },
        9138: function(e, t, s) {
            e.exports = s("35e8")
        },
        "9aa9": function(e, t) {
            t.f = Object.getOwnPropertySymbols
        },
        a159: function(e, t, s) {
            var i = s("e4ae"),
                a = s("7e90"),
                n = s("1691"),
                r = s("5559")("IE_PROTO"),
                o = function() {},
                l = "prototype",
                c = function() {
                    var e, t = s("1ec9")("iframe"),
                        i = n.length,
                        a = "<",
                        r = ">";
                    t.style.display = "none", s("32fc").appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(a + "script" + r + "document.F=Object" + a + "/script" + r), e.close(), c = e.F;
                    while (i--) delete c[l][n[i]];
                    return c()
                };
            e.exports = Object.create || function(e, t) {
                var s;
                return null !== e ? (o[l] = i(e), s = new o, o[l] = null, s[r] = e) : s = c(), void 0 === t ? s : a(s, t)
            }
        },
        b18e: function(e, t, s) {
            e.exports = s.p + "img/qiwi.a933bde8.jpg"
        },
        b350: function(e, t, s) {},
        b447: function(e, t, s) {
            var i = s("3a38"),
                a = Math.min;
            e.exports = function(e) {
                return e > 0 ? a(i(e), 9007199254740991) : 0
            }
        },
        b44d: function(e, t, s) {
            e.exports = s.p + "img/qiwi1.397388d4.jpg"
        },
        b8e3: function(e, t) {
            e.exports = !0
        },
        bb0f: function(e, t, s) {
            "use strict";
            s("3e26")
        },
        bcf4: function(e, t, s) {
            e.exports = s.p + "img/sber1.0f0ed32b.jpg"
        },
        bf0b: function(e, t, s) {
            var i = s("355d"),
                a = s("aebd"),
                n = s("36c3"),
                r = s("1bc3"),
                o = s("07e3"),
                l = s("794b"),
                c = Object.getOwnPropertyDescriptor;
            t.f = s("8e60") ? c : function(e, t) {
                if (e = n(e), t = r(t, !0), l) try {
                    return c(e, t)
                } catch (s) {}
                if (o(e, t)) return a(!i.f.call(e, t), e[t])
            }
        },
        c207: function(e, t) {},
        c367: function(e, t, s) {
            "use strict";
            var i = s("8436"),
                a = s("50ed"),
                n = s("481b"),
                r = s("36c3");
            e.exports = s("30f1")(Array, "Array", (function(e, t) {
                this._t = r(e), this._i = 0, this._k = t
            }), (function() {
                var e = this._t,
                    t = this._k,
                    s = this._i++;
                return !e || s >= e.length ? (this._t = void 0, a(1)) : a(0, "keys" == t ? s : "values" == t ? e[s] : [s, e[s]])
            }), "values"), n.Arguments = n.Array, i("keys"), i("values"), i("entries")
        },
        c3a1: function(e, t, s) {
            var i = s("e6f3"),
                a = s("1691");
            e.exports = Object.keys || function(e) {
                return i(e, a)
            }
        },
        ccb9: function(e, t, s) {
            t.f = s("5168")
        },
        d66e: function(e, t, s) {
            e.exports = s.p + "img/tinkof3.e3ee45e8.jpg"
        },
        d8d6: function(e, t, s) {
            s("1654"), s("6c1c"), e.exports = s("ccb9").f("iterator")
        },
        dbdb: function(e, t, s) {
            var i = s("584a"),
                a = s("e53d"),
                n = "__core-js_shared__",
                r = a[n] || (a[n] = {});
            (e.exports = function(e, t) {
                return r[e] || (r[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: i.version,
                mode: s("b8e3") ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        },
        de8c: function(e, t, s) {
            e.exports = s.p + "img/qiwi2.0ad30185.jpg"
        },
        e040: function(e, t, s) {
            e.exports = s.p + "img/sber3.a277dec3.jpg"
        },
        e4b5: function(e, t, s) {
            e.exports = s.p + "img/tinkof1.68349585.jpg"
        },
        e5ff: function(e, t, s) {},
        e6f3: function(e, t, s) {
            var i = s("07e3"),
                a = s("36c3"),
                n = s("5b4e")(!1),
                r = s("5559")("IE_PROTO");
            e.exports = function(e, t) {
                var s, o = a(e),
                    l = 0,
                    c = [];
                for (s in o) s != r && i(o, s) && c.push(s);
                while (t.length > l) i(o, s = t[l++]) && (~n(c, s) || c.push(s));
                return c
            }
        },
        ebfd: function(e, t, s) {
            var i = s("62a0")("meta"),
                a = s("f772"),
                n = s("07e3"),
                r = s("d9f6").f,
                o = 0,
                l = Object.isExtensible || function() {
                    return !0
                },
                c = !s("294c")((function() {
                    return l(Object.preventExtensions({}))
                })),
                u = function(e) {
                    r(e, i, {
                        value: {
                            i: "O" + ++o,
                            w: {}
                        }
                    })
                },
                p = function(e, t) {
                    if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!n(e, i)) {
                        if (!l(e)) return "F";
                        if (!t) return "E";
                        u(e)
                    }
                    return e[i].i
                },
                m = function(e, t) {
                    if (!n(e, i)) {
                        if (!l(e)) return !0;
                        if (!t) return !1;
                        u(e)
                    }
                    return e[i].w
                },
                h = function(e) {
                    return c && g.NEED && l(e) && !n(e, i) && u(e), e
                },
                g = e.exports = {
                    KEY: i,
                    NEED: !1,
                    fastKey: p,
                    getWeak: m,
                    onFreeze: h
                }
        },
        f33d: function(e, t, s) {
            e.exports = s.p + "img/tinkof2.80d90488.jpg"
        },
        f5e6: function(e, t, s) {
            e.exports = s.p + "img/sber2.e37d177b.jpg"
        },
        f921: function(e, t, s) {
            s("014b"), s("c207"), s("69d3"), s("765d"), e.exports = s("584a").Symbol
        }
    }
]);