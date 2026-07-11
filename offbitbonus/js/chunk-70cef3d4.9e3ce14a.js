(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-70cef3d4"], {
        "074b": function(e, o, i) {
            "use strict";
            (function(e) {
                /*! *****************************************************************************
                Copyright (c) Microsoft Corporation.

                Permission to use, copy, modify, and/or distribute this software for any
                purpose with or without fee is hereby granted.

                THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
                REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
                AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
                INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
                OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
                PERFORMANCE OF THIS SOFTWARE.
                ***************************************************************************** */
                function n(e, o, i, n) {
                    return new(i || (i = Promise))((function(t, a) {
                        function r(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function c(e) {
                            var o;
                            e.done ? t(e.value) : (o = e.value, o instanceof i ? o : new i((function(e) {
                                e(o)
                            }))).then(r, s)
                        }
                        c((n = n.apply(e, o || [])).next())
                    }))
                }
                i.d(o, "a", (function() {
                        return ri
                    })),
                    function(e, o) {
                        void 0 === o && (o = {});
                        var i = o.insertAt;
                        if (e && "undefined" != typeof document) {
                            var n = document.head || document.getElementsByTagName("head")[0],
                                t = document.createElement("style");
                            t.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(t, n.firstChild) : n.appendChild(t), t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))
                        }
                    }('@keyframes show {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes hide {\n  0% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n}\n\n@keyframes grow {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8); \n  }\n\n  100% { \n    opacity: 1;\n    transform: scale3d(1, 1, 1); \n  }\n}\n\n@keyframes shrink {\n  0% { \n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  100% { \n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8); \n  }\n}\n\n@keyframes fade-in {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@keyframes fade-out {\n  0% { opacity: 1; }\n  100% { opacity: 0; }\n}\n\n.emoji-picker {\n  --animation-duration: 0.2s;\n  --animation-easing: ease-in-out;\n\n  --emoji-size: 1.8em;\n  --emoji-size-multiplier: 1.5;\n  --emoji-preview-size: 2em;\n  --emoji-per-row: 8;\n  --row-count: 6;\n\n  --content-height: calc((var(--emoji-size) * var(--emoji-size-multiplier)) * var(--row-count) + var(--category-name-size) + var(--category-button-height) + 0.5em);\n\n  --category-name-size: 0.85em;\n\n  --category-button-height: 2em;\n  --category-button-size: 1.1em;\n  --category-border-bottom-size: 4px;\n\n  --focus-indicator-color: #999999;\n\n  --search-height: 2em;\n\n  --blue-color: #4F81E5;\n\n  --border-color: #CCCCCC;\n  --background-color: #FFFFFF;\n  --text-color: #000000;\n  --secondary-text-color: #666666;\n  --hover-color: #E8F4F9;\n  --search-focus-border-color: var(--blue-color);\n  --search-icon-color: #CCCCCC;\n  --overlay-background-color: rgba(0, 0, 0, 0.8);\n  --popup-background-color: #FFFFFF;\n  --category-button-color: #666666;\n  --category-button-active-color: var(--blue-color);\n\n  --dark-border-color: #666666;\n  --dark-background-color: #333333;\n  --dark-text-color: #FFFFFF;\n  --dark-secondary-text-color: #999999;\n  --dark-hover-color: #666666;\n  --dark-search-background-color: #666666;\n  --dark-search-border-color: #999999;\n  --dark-search-placeholder-color: #999999;\n  --dark-search-focus-border-color: #DBE5F9;\n  --dark-popup-background-color: #333333;\n  --dark-category-button-color: #FFFFFF;\n\n  --font: Arial, Helvetica, sans-serif;\n  --font-size: 16px;\n}\n\n.emoji-picker {\n  font-size: var(--font-size);\n  border: 1px solid var(--border-color);\n  border-radius: 5px;\n  background: var(--background-color);\n  width: calc(var(--emoji-per-row) * var(--emoji-size) * var(--emoji-size-multiplier) + 1em + 1.5rem);\n  font-family: var(--font);\n  overflow: hidden;\n  animation: show var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker * {\n  font-family: var(--font);\n  box-sizing: content-box;\n}\n\n.emoji-picker__overlay {\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.emoji-picker.hiding {\n  animation: hide var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker.dark {\n  background: var(--dark-background-color);\n  color: var(--dark-text-color);\n  border-color: var(--dark-border-color);\n}\n\n.emoji-picker__content {\n  padding: 0.5em;\n  height: var(--content-height);\n  position: relative;\n}\n\n.emoji-picker__preview {\n  height: var(--emoji-preview-size);\n  padding: 0.5em;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.emoji-picker.dark .emoji-picker__preview {\n  border-top-color: var(--dark-border-color);\n}\n\n.emoji-picker__preview-emoji {\n  font-size: var(--emoji-preview-size);\n  margin-right: 0.25em;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n}\n\n.emoji-picker__preview-emoji img.emoji {\n  height: 1em;\n  width: 1em;\n  margin: 0 .05em 0 .1em;\n  vertical-align: -0.1em;\n}\n\n.emoji-picker__preview-name {\n  color: var(--text-color);\n  font-size: 0.85em;\n  overflow-wrap: break-word;\n  word-break: break-all;\n}\n\n.emoji-picker.dark .emoji-picker__preview-name {\n  color: var(--dark-text-color);\n}\n\n.emoji-picker__container {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(var(--emoji-per-row), calc(var(--emoji-size) * var(--emoji-size-multiplier)));\n  grid-auto-rows: calc(var(--emoji-size) * var(--emoji-size-multiplier));\n}\n\n.emoji-picker__container.search-results {\n  height: var(--content-height);\n  overflow-y: auto;\n}\n\n.emoji-picker__custom-emoji {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__emoji {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  font-size: var(--emoji-size);\n  width: 1.5em;\n  height: 1.5em;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.emoji-picker__emoji img.emoji {\n  height: 1em;\n  width: 1em;\n  margin: 0 .05em 0 .1em;\n  vertical-align: -0.1em;\n}\n\n.emoji-picker__emoji:focus, .emoji-picker__emoji:hover {\n  background: var(--hover-color);\n}\n\n.emoji-picker__emoji:focus {\n  outline: 1px dotted var(--focus-indicator-color);\n}\n\n.emoji-picker.dark .emoji-picker__emoji:focus, .emoji-picker.dark .emoji-picker__emoji:hover {\n  background: var(--dark-hover-color);\n}\n\n.emoji-picker__plugin-container {\n  margin: 0.5em;\n  display: flex;\n  flex-direction: row;\n}\n\n.emoji-picker__search-container {\n  margin: 0.5em;\n  position: relative;\n  height: var(--search-height);\n  display: flex;\n}\n\n.emoji-picker__search {\n  box-sizing: border-box;\n  width: 100%;\n  border-radius: 3px;\n  border: 1px solid var(--border-color);\n  padding-right: 2em;\n  padding: 0.5em 2.25em 0.5em 0.5em;\n  font-size: 0.85em;\n  outline: none;\n}\n\n.emoji-picker.dark .emoji-picker__search {\n  background: var(--dark-search-background-color);\n  color: var(--dark-text-color);\n  border-color: var(--dark-search-border-color);\n}\n\n.emoji-picker.dark .emoji-picker__search::placeholder {\n  color: var(--dark-search-placeholder-color);\n}\n\n.emoji-picker__search:focus {\n  border: 1px solid var(--search-focus-border-color);\n}\n\n.emoji-picker.dark .emoji-picker__search:focus {\n  border-color: var(--dark-search-focus-border-color);\n}\n\n.emoji-picker__search-icon {\n  position: absolute;\n  color: var(--search-icon-color);\n  width: 1em;\n  height: 1em;\n  right: 0.75em;\n  top: calc(50% - 0.5em);\n}\n\n.emoji-picker__search-icon img {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__search-not-found {\n  color: var(--secondary-text-color);\n  text-align: center;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.emoji-picker__search-not-found h2 {\n  color: var(--secondary-text-color);\n}\n\n.emoji-picker.dark .emoji-picker__search-not-found {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker.dark .emoji-picker__search-not-found h2 {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker__search-not-found-icon {\n  font-size: 3em;\n}\n\n.emoji-picker__search-not-found-icon img {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__search-not-found h2 {\n  margin: 0.5em 0;\n  font-size: 1em;\n}\n\n.emoji-picker__variant-overlay {\n  background: var(--overlay-background-color);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  animation: fade-in var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker__variant-overlay.hiding {\n  animation: fade-out var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker__variant-popup {\n  background: var(--popup-background-color);\n  margin: 0.5em;\n  padding: 0.5em;\n  text-align: center;\n  border-radius: 5px;\n  animation: grow var(--animation-duration) var(--animation-easing);\n  user-select: none;\n}\n\n.emoji-picker__variant-overlay.hiding .emoji-picker__variant-popup {\n  animation: shrink var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker.dark .emoji-picker__variant-popup {\n  background: var(--dark-popup-background-color);\n}\n\n.emoji-picker__emojis {\n  overflow-y: auto;\n  position: relative;\n  height: calc((var(--emoji-size) * var(--emoji-size-multiplier)) * var(--row-count) + var(--category-name-size));\n}\n\n.emoji-picker__emojis.hiding {\n  animation: fade-out 0.05s var(--animation-easing);\n}\n\n.emoji-picker__emojis h2.emoji-picker__category-name {\n  font-size: 0.85em;\n  color: var(--secondary-text-color);\n  text-transform: uppercase;\n  margin: 0.25em 0;\n  text-align: left;\n}\n\n.emoji-picker.dark h2.emoji-picker__category-name {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker__category-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: var(--category-button-height);\n  margin-bottom: 0.5em;\n}\n\nbutton.emoji-picker__category-button {\n  flex-grow: 1;\n  background: transparent;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  font-size: var(--category-button-size);\n  vertical-align: middle;\n  color: var(--category-button-color);\n  border-bottom: var(--category-border-bottom-size) solid transparent;\n  outline: none;\n}\n\nbutton.emoji-picker__category-button img {\n  width: var(--category-button-size);\n  height: var(--category-button-size);\n}\n\n.emoji-picker.keyboard button.emoji-picker__category-button:focus {\n  outline: 1px dotted var(--focus-indicator-color);\n}\n\n.emoji-picker.dark button.emoji-picker__category-button.active {\n  color: var(--category-button-active-color);\n}\n\n.emoji-picker.dark button.emoji-picker__category-button {\n  color: var(--dark-category-button-color);\n}\n\nbutton.emoji-picker__category-button.active {\n  color: var(--category-button-active-color);\n  border-bottom: var(--category-border-bottom-size) solid var(--category-button-active-color);\n}\n\n@media (prefers-color-scheme: dark) {\n  .emoji-picker.auto {\n    background: var(--dark-background-color);\n    color: var(--dark-text-color);\n    border-color: var(--dark-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__preview {\n    border-top-color: var(--dark-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__preview-name {\n    color: var(--dark-text-color);\n  }\n\n  .emoji-picker.auto button.emoji-picker__category-button {\n    color: var(--dark-category-button-color);\n  }\n\n  .emoji-picker.auto button.emoji-picker__category-button.active {\n    color: var(--category-button-active-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__emoji:focus, .emoji-picker.auto .emoji-picker__emoji:hover {\n    background: var(--dark-hover-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search {\n    background: var(--dark-search-background-color);\n    color: var(--dark-text-color);\n    border-color: var(--dark-search-border-color);\n  }\n \n  .emoji-picker.auto h2.emoji-picker__category-name {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search::placeholder {\n    color: var(--dark-search-placeholder-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search:focus {\n    border-color: var(--dark-search-focus-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search-not-found {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search-not-found h2 {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__variant-popup {\n    background: var(--dark-popup-background-color);\n  }\n}');
                var t = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'],
                    a = t.join(","),
                    r = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

                function s(e, o) {
                    o = o || {};
                    var i, n, t, s = [],
                        m = [],
                        l = e.querySelectorAll(a);
                    for (o.includeContainer && r.call(e, a) && (l = Array.prototype.slice.apply(l)).unshift(e), i = 0; i < l.length; i++) c(n = l[i]) && (0 === (t = d(n)) ? s.push(n) : m.push({
                        documentOrder: i,
                        tabIndex: t,
                        node: n
                    }));
                    return m.sort(u).map((function(e) {
                        return e.node
                    })).concat(s)
                }

                function c(e) {
                    return !(!m(e) || function(e) {
                        return function(e) {
                            return g(e) && "radio" === e.type
                        }(e) && ! function(e) {
                            if (!e.name) return !0;
                            var o = function(e) {
                                for (var o = 0; o < e.length; o++)
                                    if (e[o].checked) return e[o]
                            }(e.ownerDocument.querySelectorAll('input[type="radio"][name="' + e.name + '"]'));
                            return !o || o === e
                        }(e)
                    }(e) || d(e) < 0)
                }

                function m(e) {
                    return !(e.disabled || function(e) {
                        return g(e) && "hidden" === e.type
                    }(e) || function(e) {
                        return null === e.offsetParent || "hidden" === getComputedStyle(e).visibility
                    }(e))
                }
                s.isTabbable = function(e) {
                    if (!e) throw new Error("No node provided");
                    return !1 !== r.call(e, a) && c(e)
                }, s.isFocusable = function(e) {
                    if (!e) throw new Error("No node provided");
                    return !1 !== r.call(e, l) && m(e)
                };
                var l = t.concat("iframe").join(",");

                function d(e) {
                    var o = parseInt(e.getAttribute("tabindex"), 10);
                    return isNaN(o) ? function(e) {
                        return "true" === e.contentEditable
                    }(e) ? 0 : e.tabIndex : o
                }

                function u(e, o) {
                    return e.tabIndex === o.tabIndex ? e.documentOrder - o.documentOrder : e.tabIndex - o.tabIndex
                }

                function g(e) {
                    return "INPUT" === e.tagName
                }
                var v, f, h = s,
                    y = function() {
                        for (var e = {}, o = 0; o < arguments.length; o++) {
                            var i = arguments[o];
                            for (var n in i) p.call(i, n) && (e[n] = i[n])
                        }
                        return e
                    },
                    p = Object.prototype.hasOwnProperty,
                    j = (f = [], {
                        activateTrap: function(e) {
                            if (f.length > 0) {
                                var o = f[f.length - 1];
                                o !== e && o.pause()
                            }
                            var i = f.indexOf(e); - 1 === i || f.splice(i, 1), f.push(e)
                        },
                        deactivateTrap: function(e) {
                            var o = f.indexOf(e); - 1 !== o && f.splice(o, 1), f.length > 0 && f[f.length - 1].unpause()
                        }
                    });

                function b(e) {
                    return setTimeout(e, 0)
                }
                var w = function(e, o) {
                    var i = document,
                        n = "string" == typeof e ? i.querySelector(e) : e,
                        t = y({
                            returnFocusOnDeactivate: !0,
                            escapeDeactivates: !0
                        }, o),
                        a = {
                            firstTabbableNode: null,
                            lastTabbableNode: null,
                            nodeFocusedBeforeActivation: null,
                            mostRecentlyFocusedNode: null,
                            active: !1,
                            paused: !1
                        },
                        r = {
                            activate: function(e) {
                                if (!a.active) {
                                    w(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = i.activeElement;
                                    var o = e && e.onActivate ? e.onActivate : t.onActivate;
                                    return o && o(), c(), r
                                }
                            },
                            deactivate: s,
                            pause: function() {
                                !a.paused && a.active && (a.paused = !0, m())
                            },
                            unpause: function() {
                                a.paused && a.active && (a.paused = !1, w(), c())
                            }
                        };
                    return r;

                    function s(e) {
                        if (a.active) {
                            clearTimeout(v), m(), a.active = !1, a.paused = !1, j.deactivateTrap(r);
                            var o = e && void 0 !== e.onDeactivate ? e.onDeactivate : t.onDeactivate;
                            return o && o(), (e && void 0 !== e.returnFocus ? e.returnFocus : t.returnFocusOnDeactivate) && b((function() {
                                var e;
                                x((e = a.nodeFocusedBeforeActivation, l("setReturnFocus") || e))
                            })), r
                        }
                    }

                    function c() {
                        if (a.active) return j.activateTrap(r), v = b((function() {
                            x(d())
                        })), i.addEventListener("focusin", g, !0), i.addEventListener("mousedown", u, {
                            capture: !0,
                            passive: !1
                        }), i.addEventListener("touchstart", u, {
                            capture: !0,
                            passive: !1
                        }), i.addEventListener("click", p, {
                            capture: !0,
                            passive: !1
                        }), i.addEventListener("keydown", f, {
                            capture: !0,
                            passive: !1
                        }), r
                    }

                    function m() {
                        if (a.active) return i.removeEventListener("focusin", g, !0), i.removeEventListener("mousedown", u, !0), i.removeEventListener("touchstart", u, !0), i.removeEventListener("click", p, !0), i.removeEventListener("keydown", f, !0), r
                    }

                    function l(e) {
                        var o = t[e],
                            n = o;
                        if (!o) return null;
                        if ("string" == typeof o && !(n = i.querySelector(o))) throw new Error("`" + e + "` refers to no known node");
                        if ("function" == typeof o && !(n = o())) throw new Error("`" + e + "` did not return a node");
                        return n
                    }

                    function d() {
                        var e;
                        if (!(e = null !== l("initialFocus") ? l("initialFocus") : n.contains(i.activeElement) ? i.activeElement : a.firstTabbableNode || l("fallbackFocus"))) throw new Error("Your focus-trap needs to have at least one focusable element");
                        return e
                    }

                    function u(e) {
                        n.contains(e.target) || (t.clickOutsideDeactivates ? s({
                            returnFocus: !h.isFocusable(e.target)
                        }) : t.allowOutsideClick && t.allowOutsideClick(e) || e.preventDefault())
                    }

                    function g(e) {
                        n.contains(e.target) || e.target instanceof Document || (e.stopImmediatePropagation(), x(a.mostRecentlyFocusedNode || d()))
                    }

                    function f(e) {
                        if (!1 !== t.escapeDeactivates && function(e) {
                                return "Escape" === e.key || "Esc" === e.key || 27 === e.keyCode
                            }(e)) return e.preventDefault(), void s();
                        (function(e) {
                            return "Tab" === e.key || 9 === e.keyCode
                        })(e) && function(e) {
                            if (w(), e.shiftKey && e.target === a.firstTabbableNode) return e.preventDefault(), void x(a.lastTabbableNode);
                            e.shiftKey || e.target !== a.lastTabbableNode || (e.preventDefault(), x(a.firstTabbableNode))
                        }(e)
                    }

                    function p(e) {
                        t.clickOutsideDeactivates || n.contains(e.target) || t.allowOutsideClick && t.allowOutsideClick(e) || (e.preventDefault(), e.stopImmediatePropagation())
                    }

                    function w() {
                        var e = h(n);
                        a.firstTabbableNode = e[0] || d(), a.lastTabbableNode = e[e.length - 1] || d()
                    }

                    function x(e) {
                        e !== i.activeElement && (e && e.focus ? (e.focus(), a.mostRecentlyFocusedNode = e, function(e) {
                            return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
                        }(e) && e.select()) : x(d()))
                    }
                };

                function x() {}
                x.prototype = {
                    on: function(e, o, i) {
                        var n = this.e || (this.e = {});
                        return (n[e] || (n[e] = [])).push({
                            fn: o,
                            ctx: i
                        }), this
                    },
                    once: function(e, o, i) {
                        var n = this;

                        function t() {
                            n.off(e, t), o.apply(i, arguments)
                        }
                        return t._ = o, this.on(e, t, i)
                    },
                    emit: function(e) {
                        for (var o = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, t = i.length; n < t; n++) i[n].fn.apply(i[n].ctx, o);
                        return this
                    },
                    off: function(e, o) {
                        var i = this.e || (this.e = {}),
                            n = i[e],
                            t = [];
                        if (n && o)
                            for (var a = 0, r = n.length; a < r; a++) n[a].fn !== o && n[a].fn._ !== o && t.push(n[a]);
                        return t.length ? i[e] = t : delete i[e], this
                    }
                };
                var k = x;

                function C(e) {
                    var o = e.getBoundingClientRect();
                    return {
                        width: o.width,
                        height: o.height,
                        top: o.top,
                        right: o.right,
                        bottom: o.bottom,
                        left: o.left,
                        x: o.left,
                        y: o.top
                    }
                }

                function T(e) {
                    if ("[object Window]" !== e.toString()) {
                        var o = e.ownerDocument;
                        return o ? o.defaultView : window
                    }
                    return e
                }

                function A(e) {
                    var o = T(e);
                    return {
                        scrollLeft: o.pageXOffset,
                        scrollTop: o.pageYOffset
                    }
                }

                function _(e) {
                    return e instanceof T(e).Element || e instanceof Element
                }

                function E(e) {
                    return e instanceof T(e).HTMLElement || e instanceof HTMLElement
                }

                function M(e) {
                    return e ? (e.nodeName || "").toLowerCase() : null
                }

                function S(e) {
                    return (_(e) ? e.ownerDocument : e.document).documentElement
                }

                function I(e) {
                    return C(S(e)).left + A(e).scrollLeft
                }

                function z(e) {
                    return T(e).getComputedStyle(e)
                }

                function O(e) {
                    var o = z(e),
                        i = o.overflow,
                        n = o.overflowX,
                        t = o.overflowY;
                    return /auto|scroll|overlay|hidden/.test(i + t + n)
                }

                function B(e, o, i) {
                    void 0 === i && (i = !1);
                    var n, t, a = S(o),
                        r = C(e),
                        s = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        c = {
                            x: 0,
                            y: 0
                        };
                    return i || (("body" !== M(o) || O(a)) && (s = (n = o) !== T(n) && E(n) ? {
                        scrollLeft: (t = n).scrollLeft,
                        scrollTop: t.scrollTop
                    } : A(n)), E(o) ? ((c = C(o)).x += o.clientLeft, c.y += o.clientTop) : a && (c.x = I(a))), {
                        x: r.left + s.scrollLeft - c.x,
                        y: r.top + s.scrollTop - c.y,
                        width: r.width,
                        height: r.height
                    }
                }

                function L(e) {
                    return {
                        x: e.offsetLeft,
                        y: e.offsetTop,
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    }
                }

                function P(e) {
                    return "html" === M(e) ? e : e.assignedSlot || e.parentNode || e.host || S(e)
                }

                function N(e) {
                    return ["html", "body", "#document"].indexOf(M(e)) >= 0 ? e.ownerDocument.body : E(e) && O(e) ? e : N(P(e))
                }

                function D(e, o) {
                    void 0 === o && (o = []);
                    var i = N(e),
                        n = "body" === M(i),
                        t = T(i),
                        a = n ? [t].concat(t.visualViewport || [], O(i) ? i : []) : i,
                        r = o.concat(a);
                    return n ? r : r.concat(D(P(a)))
                }

                function F(e) {
                    return ["table", "td", "th"].indexOf(M(e)) >= 0
                }

                function R(e) {
                    return E(e) && "fixed" !== z(e).position ? e.offsetParent : null
                }

                function q(e) {
                    for (var o = T(e), i = R(e); i && F(i);) i = R(i);
                    return i && "body" === M(i) && "static" === z(i).position ? o : i || o
                }
                x.TinyEmitter = k;
                var H = "top",
                    V = "bottom",
                    U = "right",
                    $ = "left",
                    W = [H, V, U, $],
                    J = W.reduce((function(e, o) {
                        return e.concat([o + "-start", o + "-end"])
                    }), []),
                    G = [].concat(W, ["auto"]).reduce((function(e, o) {
                        return e.concat([o, o + "-start", o + "-end"])
                    }), []),
                    K = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

                function Q(e) {
                    var o = new Map,
                        i = new Set,
                        n = [];

                    function t(e) {
                        i.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                            if (!i.has(e)) {
                                var n = o.get(e);
                                n && t(n)
                            }
                        })), n.push(e)
                    }
                    return e.forEach((function(e) {
                        o.set(e.name, e)
                    })), e.forEach((function(e) {
                        i.has(e.name) || t(e)
                    })), n
                }

                function Y(e) {
                    return e.split("-")[0]
                }
                var X = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

                function Z() {
                    for (var e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
                    return !o.some((function(e) {
                        return !(e && "function" == typeof e.getBoundingClientRect)
                    }))
                }

                function ee(e) {
                    void 0 === e && (e = {});
                    var o = e,
                        i = o.defaultModifiers,
                        n = void 0 === i ? [] : i,
                        t = o.defaultOptions,
                        a = void 0 === t ? X : t;
                    return function(e, o, i) {
                        void 0 === i && (i = a);
                        var t, r, s = {
                                placement: "bottom",
                                orderedModifiers: [],
                                options: Object.assign({}, X, {}, a),
                                modifiersData: {},
                                elements: {
                                    reference: e,
                                    popper: o
                                },
                                attributes: {},
                                styles: {}
                            },
                            c = [],
                            m = !1,
                            l = {
                                state: s,
                                setOptions: function(i) {
                                    d(), s.options = Object.assign({}, a, {}, s.options, {}, i), s.scrollParents = {
                                        reference: _(e) ? D(e) : e.contextElement ? D(e.contextElement) : [],
                                        popper: D(o)
                                    };
                                    var t, r, m = function(e) {
                                        var o = Q(e);
                                        return K.reduce((function(e, i) {
                                            return e.concat(o.filter((function(e) {
                                                return e.phase === i
                                            })))
                                        }), [])
                                    }((t = [].concat(n, s.options.modifiers), r = t.reduce((function(e, o) {
                                        var i = e[o.name];
                                        return e[o.name] = i ? Object.assign({}, i, {}, o, {
                                            options: Object.assign({}, i.options, {}, o.options),
                                            data: Object.assign({}, i.data, {}, o.data)
                                        }) : o, e
                                    }), {}), Object.keys(r).map((function(e) {
                                        return r[e]
                                    }))));
                                    return s.orderedModifiers = m.filter((function(e) {
                                        return e.enabled
                                    })), s.orderedModifiers.forEach((function(e) {
                                        var o = e.name,
                                            i = e.options,
                                            n = void 0 === i ? {} : i,
                                            t = e.effect;
                                        if ("function" == typeof t) {
                                            var a = t({
                                                    state: s,
                                                    name: o,
                                                    instance: l,
                                                    options: n
                                                }),
                                                r = function() {};
                                            c.push(a || r)
                                        }
                                    })), l.update()
                                },
                                forceUpdate: function() {
                                    if (!m) {
                                        var e = s.elements,
                                            o = e.reference,
                                            i = e.popper;
                                        if (Z(o, i)) {
                                            s.rects = {
                                                reference: B(o, q(i), "fixed" === s.options.strategy),
                                                popper: L(i)
                                            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function(e) {
                                                return s.modifiersData[e.name] = Object.assign({}, e.data)
                                            }));
                                            for (var n = 0; n < s.orderedModifiers.length; n++)
                                                if (!0 !== s.reset) {
                                                    var t = s.orderedModifiers[n],
                                                        a = t.fn,
                                                        r = t.options,
                                                        c = void 0 === r ? {} : r,
                                                        d = t.name;
                                                    "function" == typeof a && (s = a({
                                                        state: s,
                                                        options: c,
                                                        name: d,
                                                        instance: l
                                                    }) || s)
                                                } else s.reset = !1, n = -1
                                        }
                                    }
                                },
                                update: (t = function() {
                                    return new Promise((function(e) {
                                        l.forceUpdate(), e(s)
                                    }))
                                }, function() {
                                    return r || (r = new Promise((function(e) {
                                        Promise.resolve().then((function() {
                                            r = void 0, e(t())
                                        }))
                                    }))), r
                                }),
                                destroy: function() {
                                    d(), m = !0
                                }
                            };
                        if (!Z(e, o)) return l;

                        function d() {
                            c.forEach((function(e) {
                                return e()
                            })), c = []
                        }
                        return l.setOptions(i).then((function(e) {
                            !m && i.onFirstUpdate && i.onFirstUpdate(e)
                        })), l
                    }
                }
                var oe = {
                    passive: !0
                };

                function ie(e) {
                    return e.split("-")[1]
                }

                function ne(e) {
                    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
                }

                function te(e) {
                    var o, i = e.reference,
                        n = e.element,
                        t = e.placement,
                        a = t ? Y(t) : null,
                        r = t ? ie(t) : null,
                        s = i.x + i.width / 2 - n.width / 2,
                        c = i.y + i.height / 2 - n.height / 2;
                    switch (a) {
                        case H:
                            o = {
                                x: s,
                                y: i.y - n.height
                            };
                            break;
                        case V:
                            o = {
                                x: s,
                                y: i.y + i.height
                            };
                            break;
                        case U:
                            o = {
                                x: i.x + i.width,
                                y: c
                            };
                            break;
                        case $:
                            o = {
                                x: i.x - n.width,
                                y: c
                            };
                            break;
                        default:
                            o = {
                                x: i.x,
                                y: i.y
                            }
                    }
                    var m = a ? ne(a) : null;
                    if (null != m) {
                        var l = "y" === m ? "height" : "width";
                        switch (r) {
                            case "start":
                                o[m] = Math.floor(o[m]) - Math.floor(i[l] / 2 - n[l] / 2);
                                break;
                            case "end":
                                o[m] = Math.floor(o[m]) + Math.ceil(i[l] / 2 - n[l] / 2)
                        }
                    }
                    return o
                }
                var ae = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

                function re(e) {
                    var o, i = e.popper,
                        n = e.popperRect,
                        t = e.placement,
                        a = e.offsets,
                        r = e.position,
                        s = e.gpuAcceleration,
                        c = e.adaptive,
                        m = function(e) {
                            var o = e.x,
                                i = e.y,
                                n = window.devicePixelRatio || 1;
                            return {
                                x: Math.round(o * n) / n || 0,
                                y: Math.round(i * n) / n || 0
                            }
                        }(a),
                        l = m.x,
                        d = m.y,
                        u = a.hasOwnProperty("x"),
                        g = a.hasOwnProperty("y"),
                        v = $,
                        f = H,
                        h = window;
                    if (c) {
                        var y = q(i);
                        y === T(i) && (y = S(i)), t === H && (f = V, d -= y.clientHeight - n.height, d *= s ? 1 : -1), t === $ && (v = U, l -= y.clientWidth - n.width, l *= s ? 1 : -1)
                    }
                    var p, j = Object.assign({
                        position: r
                    }, c && ae);
                    return s ? Object.assign({}, j, ((p = {})[f] = g ? "0" : "", p[v] = u ? "0" : "", p.transform = (h.devicePixelRatio || 1) < 2 ? "translate(" + l + "px, " + d + "px)" : "translate3d(" + l + "px, " + d + "px, 0)", p)) : Object.assign({}, j, ((o = {})[f] = g ? d + "px" : "", o[v] = u ? l + "px" : "", o.transform = "", o))
                }
                var se = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

                function ce(e) {
                    return e.replace(/left|right|bottom|top/g, (function(e) {
                        return se[e]
                    }))
                }
                var me = {
                    start: "end",
                    end: "start"
                };

                function le(e) {
                    return e.replace(/start|end/g, (function(e) {
                        return me[e]
                    }))
                }

                function de(e) {
                    return parseFloat(e) || 0
                }

                function ue(e) {
                    var o = T(e),
                        i = function(e) {
                            var o = E(e) ? z(e) : {};
                            return {
                                top: de(o.borderTopWidth),
                                right: de(o.borderRightWidth),
                                bottom: de(o.borderBottomWidth),
                                left: de(o.borderLeftWidth)
                            }
                        }(e),
                        n = "html" === M(e),
                        t = I(e),
                        a = e.clientWidth + i.right,
                        r = e.clientHeight + i.bottom;
                    return n && o.innerHeight - e.clientHeight > 50 && (r = o.innerHeight - i.bottom), {
                        top: n ? 0 : e.clientTop,
                        right: e.clientLeft > i.left ? i.right : n ? o.innerWidth - a - t : e.offsetWidth - a,
                        bottom: n ? o.innerHeight - r : e.offsetHeight - r,
                        left: n ? t : e.clientLeft
                    }
                }

                function ge(e, o) {
                    var i = Boolean(o.getRootNode && o.getRootNode().host);
                    if (e.contains(o)) return !0;
                    if (i) {
                        var n = o;
                        do {
                            if (n && e.isSameNode(n)) return !0;
                            n = n.parentNode || n.host
                        } while (n)
                    }
                    return !1
                }

                function ve(e) {
                    return Object.assign({}, e, {
                        left: e.x,
                        top: e.y,
                        right: e.x + e.width,
                        bottom: e.y + e.height
                    })
                }

                function fe(e, o) {
                    return "viewport" === o ? ve(function(e) {
                        var o = T(e),
                            i = o.visualViewport,
                            n = o.innerWidth,
                            t = o.innerHeight;
                        return i && /iPhone|iPod|iPad/.test(navigator.platform) && (n = i.width, t = i.height), {
                            width: n,
                            height: t,
                            x: 0,
                            y: 0
                        }
                    }(e)) : E(o) ? C(o) : ve(function(e) {
                        var o = T(e),
                            i = A(e),
                            n = B(S(e), o);
                        return n.height = Math.max(n.height, o.innerHeight), n.width = Math.max(n.width, o.innerWidth), n.x = -i.scrollLeft, n.y = -i.scrollTop, n
                    }(S(e)))
                }

                function he(e, o, i) {
                    var n = "clippingParents" === o ? function(e) {
                            var o = D(e),
                                i = ["absolute", "fixed"].indexOf(z(e).position) >= 0 && E(e) ? q(e) : e;
                            return _(i) ? o.filter((function(e) {
                                return _(e) && ge(e, i)
                            })) : []
                        }(e) : [].concat(o),
                        t = [].concat(n, [i]),
                        a = t[0],
                        r = t.reduce((function(o, i) {
                            var n = fe(e, i),
                                t = ue(E(i) ? i : S(e));
                            return o.top = Math.max(n.top + t.top, o.top), o.right = Math.min(n.right - t.right, o.right), o.bottom = Math.min(n.bottom - t.bottom, o.bottom), o.left = Math.max(n.left + t.left, o.left), o
                        }), fe(e, a));
                    return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
                }

                function ye(e) {
                    return Object.assign({}, {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, {}, e)
                }

                function pe(e, o) {
                    return o.reduce((function(o, i) {
                        return o[i] = e, o
                    }), {})
                }

                function je(e, o) {
                    void 0 === o && (o = {});
                    var i = o,
                        n = i.placement,
                        t = void 0 === n ? e.placement : n,
                        a = i.boundary,
                        r = void 0 === a ? "clippingParents" : a,
                        s = i.rootBoundary,
                        c = void 0 === s ? "viewport" : s,
                        m = i.elementContext,
                        l = void 0 === m ? "popper" : m,
                        d = i.altBoundary,
                        u = void 0 !== d && d,
                        g = i.padding,
                        v = void 0 === g ? 0 : g,
                        f = ye("number" != typeof v ? v : pe(v, W)),
                        h = "popper" === l ? "reference" : "popper",
                        y = e.elements.reference,
                        p = e.rects.popper,
                        j = e.elements[u ? h : l],
                        b = he(_(j) ? j : j.contextElement || S(e.elements.popper), r, c),
                        w = C(y),
                        x = te({
                            reference: w,
                            element: p,
                            strategy: "absolute",
                            placement: t
                        }),
                        k = ve(Object.assign({}, p, {}, x)),
                        T = "popper" === l ? k : w,
                        A = {
                            top: b.top - T.top + f.top,
                            bottom: T.bottom - b.bottom + f.bottom,
                            left: b.left - T.left + f.left,
                            right: T.right - b.right + f.right
                        },
                        E = e.modifiersData.offset;
                    if ("popper" === l && E) {
                        var M = E[t];
                        Object.keys(A).forEach((function(e) {
                            var o = [U, V].indexOf(e) >= 0 ? 1 : -1,
                                i = [H, V].indexOf(e) >= 0 ? "y" : "x";
                            A[e] += M[i] * o
                        }))
                    }
                    return A
                }

                function be(e, o) {
                    void 0 === o && (o = {});
                    var i = o,
                        n = i.placement,
                        t = i.boundary,
                        a = i.rootBoundary,
                        r = i.padding,
                        s = i.flipVariations,
                        c = i.allowedAutoPlacements,
                        m = void 0 === c ? G : c,
                        l = ie(n),
                        d = (l ? s ? J : J.filter((function(e) {
                            return ie(e) === l
                        })) : W).filter((function(e) {
                            return m.indexOf(e) >= 0
                        })).reduce((function(o, i) {
                            return o[i] = je(e, {
                                placement: i,
                                boundary: t,
                                rootBoundary: a,
                                padding: r
                            })[Y(i)], o
                        }), {});
                    return Object.keys(d).sort((function(e, o) {
                        return d[e] - d[o]
                    }))
                }

                function we(e, o, i) {
                    return Math.max(e, Math.min(o, i))
                }

                function xe(e, o, i) {
                    return void 0 === i && (i = {
                        x: 0,
                        y: 0
                    }), {
                        top: e.top - o.height - i.y,
                        right: e.right - o.width + i.x,
                        bottom: e.bottom - o.height + i.y,
                        left: e.left - o.width - i.x
                    }
                }

                function ke(e) {
                    return [H, U, V, $].some((function(o) {
                        return e[o] >= 0
                    }))
                }
                var Ce = ee({
                        defaultModifiers: [{
                            name: "eventListeners",
                            enabled: !0,
                            phase: "write",
                            fn: function() {},
                            effect: function(e) {
                                var o = e.state,
                                    i = e.instance,
                                    n = e.options,
                                    t = n.scroll,
                                    a = void 0 === t || t,
                                    r = n.resize,
                                    s = void 0 === r || r,
                                    c = T(o.elements.popper),
                                    m = [].concat(o.scrollParents.reference, o.scrollParents.popper);
                                return a && m.forEach((function(e) {
                                        e.addEventListener("scroll", i.update, oe)
                                    })), s && c.addEventListener("resize", i.update, oe),
                                    function() {
                                        a && m.forEach((function(e) {
                                            e.removeEventListener("scroll", i.update, oe)
                                        })), s && c.removeEventListener("resize", i.update, oe)
                                    }
                            },
                            data: {}
                        }, {
                            name: "popperOffsets",
                            enabled: !0,
                            phase: "read",
                            fn: function(e) {
                                var o = e.state,
                                    i = e.name;
                                o.modifiersData[i] = te({
                                    reference: o.rects.reference,
                                    element: o.rects.popper,
                                    strategy: "absolute",
                                    placement: o.placement
                                })
                            },
                            data: {}
                        }, {
                            name: "computeStyles",
                            enabled: !0,
                            phase: "beforeWrite",
                            fn: function(e) {
                                var o = e.state,
                                    i = e.options,
                                    n = i.gpuAcceleration,
                                    t = void 0 === n || n,
                                    a = i.adaptive,
                                    r = void 0 === a || a,
                                    s = {
                                        placement: Y(o.placement),
                                        popper: o.elements.popper,
                                        popperRect: o.rects.popper,
                                        gpuAcceleration: t
                                    };
                                null != o.modifiersData.popperOffsets && (o.styles.popper = Object.assign({}, o.styles.popper, {}, re(Object.assign({}, s, {
                                    offsets: o.modifiersData.popperOffsets,
                                    position: o.options.strategy,
                                    adaptive: r
                                })))), null != o.modifiersData.arrow && (o.styles.arrow = Object.assign({}, o.styles.arrow, {}, re(Object.assign({}, s, {
                                    offsets: o.modifiersData.arrow,
                                    position: "absolute",
                                    adaptive: !1
                                })))), o.attributes.popper = Object.assign({}, o.attributes.popper, {
                                    "data-popper-placement": o.placement
                                })
                            },
                            data: {}
                        }, {
                            name: "applyStyles",
                            enabled: !0,
                            phase: "write",
                            fn: function(e) {
                                var o = e.state;
                                Object.keys(o.elements).forEach((function(e) {
                                    var i = o.styles[e] || {},
                                        n = o.attributes[e] || {},
                                        t = o.elements[e];
                                    E(t) && M(t) && (Object.assign(t.style, i), Object.keys(n).forEach((function(e) {
                                        var o = n[e];
                                        !1 === o ? t.removeAttribute(e) : t.setAttribute(e, !0 === o ? "" : o)
                                    })))
                                }))
                            },
                            effect: function(e) {
                                var o = e.state,
                                    i = {
                                        popper: {
                                            position: o.options.strategy,
                                            left: "0",
                                            top: "0",
                                            margin: "0"
                                        },
                                        arrow: {
                                            position: "absolute"
                                        },
                                        reference: {}
                                    };
                                return Object.assign(o.elements.popper.style, i.popper), o.elements.arrow && Object.assign(o.elements.arrow.style, i.arrow),
                                    function() {
                                        Object.keys(o.elements).forEach((function(e) {
                                            var n = o.elements[e],
                                                t = o.attributes[e] || {},
                                                a = Object.keys(o.styles.hasOwnProperty(e) ? o.styles[e] : i[e]).reduce((function(e, o) {
                                                    return e[o] = "", e
                                                }), {});
                                            E(n) && M(n) && (Object.assign(n.style, a), Object.keys(t).forEach((function(e) {
                                                n.removeAttribute(e)
                                            })))
                                        }))
                                    }
                            },
                            requires: ["computeStyles"]
                        }, {
                            name: "offset",
                            enabled: !0,
                            phase: "main",
                            requires: ["popperOffsets"],
                            fn: function(e) {
                                var o = e.state,
                                    i = e.options,
                                    n = e.name,
                                    t = i.offset,
                                    a = void 0 === t ? [0, 0] : t,
                                    r = G.reduce((function(e, i) {
                                        return e[i] = function(e, o, i) {
                                            var n = Y(e),
                                                t = [$, H].indexOf(n) >= 0 ? -1 : 1,
                                                a = "function" == typeof i ? i(Object.assign({}, o, {
                                                    placement: e
                                                })) : i,
                                                r = a[0],
                                                s = a[1];
                                            return r = r || 0, s = (s || 0) * t, [$, U].indexOf(n) >= 0 ? {
                                                x: s,
                                                y: r
                                            } : {
                                                x: r,
                                                y: s
                                            }
                                        }(i, o.rects, a), e
                                    }), {}),
                                    s = r[o.placement],
                                    c = s.x,
                                    m = s.y;
                                null != o.modifiersData.popperOffsets && (o.modifiersData.popperOffsets.x += c, o.modifiersData.popperOffsets.y += m), o.modifiersData[n] = r
                            }
                        }, {
                            name: "flip",
                            enabled: !0,
                            phase: "main",
                            fn: function(e) {
                                var o = e.state,
                                    i = e.options,
                                    n = e.name;
                                if (!o.modifiersData[n]._skip) {
                                    for (var t = i.mainAxis, a = void 0 === t || t, r = i.altAxis, s = void 0 === r || r, c = i.fallbackPlacements, m = i.padding, l = i.boundary, d = i.rootBoundary, u = i.altBoundary, g = i.flipVariations, v = void 0 === g || g, f = i.allowedAutoPlacements, h = o.options.placement, y = Y(h), p = c || (y !== h && v ? function(e) {
                                            if ("auto" === Y(e)) return [];
                                            var o = ce(e);
                                            return [le(e), o, le(o)]
                                        }(h) : [ce(h)]), j = [h].concat(p).reduce((function(e, i) {
                                            return e.concat("auto" === Y(i) ? be(o, {
                                                placement: i,
                                                boundary: l,
                                                rootBoundary: d,
                                                padding: m,
                                                flipVariations: v,
                                                allowedAutoPlacements: f
                                            }) : i)
                                        }), []), b = o.rects.reference, w = o.rects.popper, x = new Map, k = !0, C = j[0], T = 0; T < j.length; T++) {
                                        var A = j[T],
                                            _ = Y(A),
                                            E = "start" === ie(A),
                                            M = [H, V].indexOf(_) >= 0,
                                            S = M ? "width" : "height",
                                            I = je(o, {
                                                placement: A,
                                                boundary: l,
                                                rootBoundary: d,
                                                altBoundary: u,
                                                padding: m
                                            }),
                                            z = M ? E ? U : $ : E ? V : H;
                                        b[S] > w[S] && (z = ce(z));
                                        var O = ce(z),
                                            B = [];
                                        if (a && B.push(I[_] <= 0), s && B.push(I[z] <= 0, I[O] <= 0), B.every((function(e) {
                                                return e
                                            }))) {
                                            C = A, k = !1;
                                            break
                                        }
                                        x.set(A, B)
                                    }
                                    if (k)
                                        for (var L = function(e) {
                                                var o = j.find((function(o) {
                                                    var i = x.get(o);
                                                    if (i) return i.slice(0, e).every((function(e) {
                                                        return e
                                                    }))
                                                }));
                                                if (o) return C = o, "break"
                                            }, P = v ? 3 : 1; P > 0; P--)
                                            if ("break" === L(P)) break;
                                    o.placement !== C && (o.modifiersData[n]._skip = !0, o.placement = C, o.reset = !0)
                                }
                            },
                            requiresIfExists: ["offset"],
                            data: {
                                _skip: !1
                            }
                        }, {
                            name: "preventOverflow",
                            enabled: !0,
                            phase: "main",
                            fn: function(e) {
                                var o = e.state,
                                    i = e.options,
                                    n = e.name,
                                    t = i.mainAxis,
                                    a = void 0 === t || t,
                                    r = i.altAxis,
                                    s = void 0 !== r && r,
                                    c = i.boundary,
                                    m = i.rootBoundary,
                                    l = i.altBoundary,
                                    d = i.padding,
                                    u = i.tether,
                                    g = void 0 === u || u,
                                    v = i.tetherOffset,
                                    f = void 0 === v ? 0 : v,
                                    h = je(o, {
                                        boundary: c,
                                        rootBoundary: m,
                                        padding: d,
                                        altBoundary: l
                                    }),
                                    y = Y(o.placement),
                                    p = ie(o.placement),
                                    j = !p,
                                    b = ne(y),
                                    w = "x" === b ? "y" : "x",
                                    x = o.modifiersData.popperOffsets,
                                    k = o.rects.reference,
                                    C = o.rects.popper,
                                    T = "function" == typeof f ? f(Object.assign({}, o.rects, {
                                        placement: o.placement
                                    })) : f,
                                    A = {
                                        x: 0,
                                        y: 0
                                    };
                                if (x) {
                                    if (a) {
                                        var _ = "y" === b ? H : $,
                                            E = "y" === b ? V : U,
                                            M = "y" === b ? "height" : "width",
                                            S = x[b],
                                            I = x[b] + h[_],
                                            z = x[b] - h[E],
                                            O = g ? -C[M] / 2 : 0,
                                            B = "start" === p ? k[M] : C[M],
                                            P = "start" === p ? -C[M] : -k[M],
                                            N = o.elements.arrow,
                                            D = g && N ? L(N) : {
                                                width: 0,
                                                height: 0
                                            },
                                            F = o.modifiersData["arrow#persistent"] ? o.modifiersData["arrow#persistent"].padding : {
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                left: 0
                                            },
                                            R = F[_],
                                            W = F[E],
                                            J = we(0, k[M], D[M]),
                                            G = j ? k[M] / 2 - O - J - R - T : B - J - R - T,
                                            K = j ? -k[M] / 2 + O + J + W + T : P + J + W + T,
                                            Q = o.elements.arrow && q(o.elements.arrow),
                                            X = Q ? "y" === b ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
                                            Z = o.modifiersData.offset ? o.modifiersData.offset[o.placement][b] : 0,
                                            ee = x[b] + G - Z - X,
                                            oe = x[b] + K - Z,
                                            te = we(g ? Math.min(I, ee) : I, S, g ? Math.max(z, oe) : z);
                                        x[b] = te, A[b] = te - S
                                    }
                                    if (s) {
                                        var ae = "x" === b ? H : $,
                                            re = "x" === b ? V : U,
                                            se = x[w],
                                            ce = we(se + h[ae], se, se - h[re]);
                                        x[w] = ce, A[w] = ce - se
                                    }
                                    o.modifiersData[n] = A
                                }
                            },
                            requiresIfExists: ["offset"]
                        }, {
                            name: "arrow",
                            enabled: !0,
                            phase: "main",
                            fn: function(e) {
                                var o, i = e.state,
                                    n = e.name,
                                    t = i.elements.arrow,
                                    a = i.modifiersData.popperOffsets,
                                    r = Y(i.placement),
                                    s = ne(r),
                                    c = [$, U].indexOf(r) >= 0 ? "height" : "width";
                                if (t && a) {
                                    var m = i.modifiersData[n + "#persistent"].padding,
                                        l = L(t),
                                        d = "y" === s ? H : $,
                                        u = "y" === s ? V : U,
                                        g = i.rects.reference[c] + i.rects.reference[s] - a[s] - i.rects.popper[c],
                                        v = a[s] - i.rects.reference[s],
                                        f = q(t),
                                        h = f ? "y" === s ? f.clientHeight || 0 : f.clientWidth || 0 : 0,
                                        y = g / 2 - v / 2,
                                        p = m[d],
                                        j = h - l[c] - m[u],
                                        b = h / 2 - l[c] / 2 + y,
                                        w = we(p, b, j),
                                        x = s;
                                    i.modifiersData[n] = ((o = {})[x] = w, o.centerOffset = w - b, o)
                                }
                            },
                            effect: function(e) {
                                var o = e.state,
                                    i = e.options,
                                    n = e.name,
                                    t = i.element,
                                    a = void 0 === t ? "[data-popper-arrow]" : t,
                                    r = i.padding,
                                    s = void 0 === r ? 0 : r;
                                null != a && ("string" != typeof a || (a = o.elements.popper.querySelector(a))) && ge(o.elements.popper, a) && (o.elements.arrow = a, o.modifiersData[n + "#persistent"] = {
                                    padding: ye("number" != typeof s ? s : pe(s, W))
                                })
                            },
                            requires: ["popperOffsets"],
                            requiresIfExists: ["preventOverflow"]
                        }, {
                            name: "hide",
                            enabled: !0,
                            phase: "main",
                            requiresIfExists: ["preventOverflow"],
                            fn: function(e) {
                                var o = e.state,
                                    i = e.name,
                                    n = o.rects.reference,
                                    t = o.rects.popper,
                                    a = o.modifiersData.preventOverflow,
                                    r = je(o, {
                                        elementContext: "reference"
                                    }),
                                    s = je(o, {
                                        altBoundary: !0
                                    }),
                                    c = xe(r, n),
                                    m = xe(s, t, a),
                                    l = ke(c),
                                    d = ke(m);
                                o.modifiersData[i] = {
                                    referenceClippingOffsets: c,
                                    popperEscapeOffsets: m,
                                    isReferenceHidden: l,
                                    hasPopperEscaped: d
                                }, o.attributes.popper = Object.assign({}, o.attributes.popper, {
                                    "data-popper-reference-hidden": l,
                                    "data-popper-escaped": d
                                })
                            }
                        }]
                    }),
                    Te = function() {
                        var e = {
                                base: "https://twemoji.maxcdn.com/v/13.0.0/",
                                ext: ".png",
                                size: "72x72",
                                className: "emoji",
                                convert: {
                                    fromCodePoint: function(e) {
                                        var o = "string" == typeof e ? parseInt(e, 16) : e;
                                        return o < 65536 ? s(o) : s(55296 + ((o -= 65536) >> 10), 56320 + (1023 & o))
                                    },
                                    toCodePoint: y
                                },
                                onerror: function() {
                                    this.parentNode && this.parentNode.replaceChild(c(this.alt, !1), this)
                                },
                                parse: function(o, i) {
                                    return i && "function" != typeof i || (i = {
                                        callback: i
                                    }), ("string" == typeof o ? g : u)(o, {
                                        callback: i.callback || m,
                                        attributes: "function" == typeof i.attributes ? i.attributes : f,
                                        base: "string" == typeof i.base ? i.base : e.base,
                                        ext: i.ext || e.ext,
                                        size: i.folder || (n = i.size || e.size, "number" == typeof n ? n + "x" + n : n),
                                        className: i.className || e.className,
                                        onerror: i.onerror || e.onerror
                                    });
                                    var n
                                },
                                replace: h,
                                test: function(e) {
                                    i.lastIndex = 0;
                                    var o = i.test(e);
                                    return i.lastIndex = 0, o
                                }
                            },
                            o = {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                "'": "&#39;",
                                '"': "&quot;"
                            },
                            i = /(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
                            n = /\uFE0F/g,
                            t = String.fromCharCode(8205),
                            a = /[&<>'"]/g,
                            r = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
                            s = String.fromCharCode;
                        return e;

                        function c(e, o) {
                            return document.createTextNode(o ? e.replace(n, "") : e)
                        }

                        function m(e, o) {
                            return "".concat(o.base, o.size, "/", e, o.ext)
                        }

                        function l(e, o) {
                            for (var i, n, t = e.childNodes, a = t.length; a--;) 3 === (n = (i = t[a]).nodeType) ? o.push(i) : 1 !== n || "ownerSVGElement" in i || r.test(i.nodeName.toLowerCase()) || l(i, o);
                            return o
                        }

                        function d(e) {
                            return y(e.indexOf(t) < 0 ? e.replace(n, "") : e)
                        }

                        function u(e, o) {
                            for (var n, t, a, r, s, m, u, g, v, f, h, y, p, j = l(e, []), b = j.length; b--;) {
                                for (a = !1, r = document.createDocumentFragment(), m = (s = j[b]).nodeValue, g = 0; u = i.exec(m);) {
                                    if ((v = u.index) !== g && r.appendChild(c(m.slice(g, v), !0)), y = d(h = u[0]), g = v + h.length, p = o.callback(y, o), y && p) {
                                        for (t in (f = new Image).onerror = o.onerror, f.setAttribute("draggable", "false"), n = o.attributes(h, y)) n.hasOwnProperty(t) && 0 !== t.indexOf("on") && !f.hasAttribute(t) && f.setAttribute(t, n[t]);
                                        f.className = o.className, f.alt = h, f.src = p, a = !0, r.appendChild(f)
                                    }
                                    f || r.appendChild(c(h, !1)), f = null
                                }
                                a && (g < m.length && r.appendChild(c(m.slice(g), !0)), s.parentNode.replaceChild(r, s))
                            }
                            return e
                        }

                        function g(e, o) {
                            return h(e, (function(e) {
                                var i, n, t = e,
                                    r = d(e),
                                    s = o.callback(r, o);
                                if (r && s) {
                                    for (n in t = "<img ".concat('class="', o.className, '" ', 'draggable="false" ', 'alt="', e, '"', ' src="', s, '"'), i = o.attributes(e, r)) i.hasOwnProperty(n) && 0 !== n.indexOf("on") && -1 === t.indexOf(" " + n + "=") && (t = t.concat(" ", n, '="', i[n].replace(a, v), '"'));
                                    t = t.concat("/>")
                                }
                                return t
                            }))
                        }

                        function v(e) {
                            return o[e]
                        }

                        function f() {
                            return null
                        }

                        function h(e, o) {
                            return String(e).replace(i, o)
                        }

                        function y(e, o) {
                            for (var i = [], n = 0, t = 0, a = 0; a < e.length;) n = e.charCodeAt(a++), t ? (i.push((65536 + (t - 55296 << 10) + (n - 56320)).toString(16)), t = 0) : 55296 <= n && n <= 56319 ? t = n : i.push(n.toString(16));
                            return i.join(o || "-")
                        }
                    }(),
                    Ae = {
                        categories: ["smileys", "people", "animals", "food", "travel", "activities", "objects", "symbols", "flags"],
                        emoji: [{
                            emoji: "😀",
                            category: 0,
                            name: "grinning face",
                            version: "1.0"
                        }, {
                            emoji: "😃",
                            category: 0,
                            name: "grinning face with big eyes",
                            version: "1.0"
                        }, {
                            emoji: "😄",
                            category: 0,
                            name: "grinning face with smiling eyes",
                            version: "1.0"
                        }, {
                            emoji: "😁",
                            category: 0,
                            name: "beaming face with smiling eyes",
                            version: "1.0"
                        }, {
                            emoji: "😆",
                            category: 0,
                            name: "grinning squinting face",
                            version: "1.0"
                        }, {
                            emoji: "😅",
                            category: 0,
                            name: "grinning face with sweat",
                            version: "1.0"
                        }, {
                            emoji: "🤣",
                            category: 0,
                            name: "rolling on the floor laughing",
                            version: "3.0"
                        }, {
                            emoji: "😂",
                            category: 0,
                            name: "face with tears of joy",
                            version: "1.0"
                        }, {
                            emoji: "🙂",
                            category: 0,
                            name: "slightly smiling face",
                            version: "1.0"
                        }, {
                            emoji: "🙃",
                            category: 0,
                            name: "upside-down face",
                            version: "1.0"
                        }, {
                            emoji: "😉",
                            category: 0,
                            name: "winking face",
                            version: "1.0"
                        }, {
                            emoji: "😊",
                            category: 0,
                            name: "smiling face with smiling eyes",
                            version: "1.0"
                        }, {
                            emoji: "😇",
                            category: 0,
                            name: "smiling face with halo",
                            version: "1.0"
                        }, {
                            emoji: "🥰",
                            category: 0,
                            name: "smiling face with hearts",
                            version: "11.0"
                        }, {
                            emoji: "😍",
                            category: 0,
                            name: "smiling face with heart-eyes",
                            version: "1.0"
                        }, {
                            emoji: "🤩",
                            category: 0,
                            name: "star-struck",
                            version: "5.0"
                        }, {
                            emoji: "😘",
                            category: 0,
                            name: "face blowing a kiss",
                            version: "1.0"
                        }, {
                            emoji: "😗",
                            category: 0,
                            name: "kissing face",
                            version: "1.0"
                        }, {
                            emoji: "☺️",
                            category: 0,
                            name: "smiling face",
                            version: "1.0"
                        }, {
                            emoji: "😚",
                            category: 0,
                            name: "kissing face with closed eyes",
                            version: "1.0"
                        }, {
                            emoji: "😙",
                            category: 0,
                            name: "kissing face with smiling eyes",
                            version: "1.0"
                        }, {
                            emoji: "🥲",
                            category: 0,
                            name: "smiling face with tear",
                            version: "13.0"
                        }, {
                            emoji: "😋",
                            category: 0,
                            name: "face savoring food",
                            version: "1.0"
                        }, {
                            emoji: "😛",
                            category: 0,
                            name: "face with tongue",
                            version: "1.0"
                        }, {
                            emoji: "😜",
                            category: 0,
                            name: "winking face with tongue",
                            version: "1.0"
                        }, {
                            emoji: "🤪",
                            category: 0,
                            name: "zany face",
                            version: "5.0"
                        }, {
                            emoji: "😝",
                            category: 0,
                            name: "squinting face with tongue",
                            version: "1.0"
                        }, {
                            emoji: "🤑",
                            category: 0,
                            name: "money-mouth face",
                            version: "1.0"
                        }, {
                            emoji: "🤗",
                            category: 0,
                            name: "hugging face",
                            version: "1.0"
                        }, {
                            emoji: "🤭",
                            category: 0,
                            name: "face with hand over mouth",
                            version: "5.0"
                        }, {
                            emoji: "🤫",
                            category: 0,
                            name: "shushing face",
                            version: "5.0"
                        }, {
                            emoji: "🤔",
                            category: 0,
                            name: "thinking face",
                            version: "1.0"
                        }, {
                            emoji: "🤐",
                            category: 0,
                            name: "zipper-mouth face",
                            version: "1.0"
                        }, {
                            emoji: "🤨",
                            category: 0,
                            name: "face with raised eyebrow",
                            version: "5.0"
                        }, {
                            emoji: "😐",
                            category: 0,
                            name: "neutral face",
                            version: "1.0"
                        }, {
                            emoji: "😑",
                            category: 0,
                            name: "expressionless face",
                            version: "1.0"
                        }, {
                            emoji: "😶",
                            category: 0,
                            name: "face without mouth",
                            version: "1.0"
                        }, {
                            emoji: "😏",
                            category: 0,
                            name: "smirking face",
                            version: "1.0"
                        }, {
                            emoji: "😒",
                            category: 0,
                            name: "unamused face",
                            version: "1.0"
                        }, {
                            emoji: "🙄",
                            category: 0,
                            name: "face with rolling eyes",
                            version: "1.0"
                        }, {
                            emoji: "😬",
                            category: 0,
                            name: "grimacing face",
                            version: "1.0"
                        }, {
                            emoji: "🤥",
                            category: 0,
                            name: "lying face",
                            version: "3.0"
                        }, {
                            emoji: "😌",
                            category: 0,
                            name: "relieved face",
                            version: "1.0"
                        }, {
                            emoji: "😔",
                            category: 0,
                            name: "pensive face",
                            version: "1.0"
                        }, {
                            emoji: "😪",
                            category: 0,
                            name: "sleepy face",
                            version: "1.0"
                        }, {
                            emoji: "🤤",
                            category: 0,
                            name: "drooling face",
                            version: "3.0"
                        }, {
                            emoji: "😴",
                            category: 0,
                            name: "sleeping face",
                            version: "1.0"
                        }, {
                            emoji: "😷",
                            category: 0,
                            name: "face with medical mask",
                            version: "1.0"
                        }, {
                            emoji: "🤒",
                            category: 0,
                            name: "face with thermometer",
                            version: "1.0"
                        }, {
                            emoji: "🤕",
                            category: 0,
                            name: "face with head-bandage",
                            version: "1.0"
                        }, {
                            emoji: "🤢",
                            category: 0,
                            name: "nauseated face",
                            version: "3.0"
                        }, {
                            emoji: "🤮",
                            category: 0,
                            name: "face vomiting",
                            version: "5.0"
                        }, {
                            emoji: "🤧",
                            category: 0,
                            name: "sneezing face",
                            version: "3.0"
                        }, {
                            emoji: "🥵",
                            category: 0,
                            name: "hot face",
                            version: "11.0"
                        }, {
                            emoji: "🥶",
                            category: 0,
                            name: "cold face",
                            version: "11.0"
                        }, {
                            emoji: "🥴",
                            category: 0,
                            name: "woozy face",
                            version: "11.0"
                        }, {
                            emoji: "😵",
                            category: 0,
                            name: "dizzy face",
                            version: "1.0"
                        }, {
                            emoji: "🤯",
                            category: 0,
                            name: "exploding head",
                            version: "5.0"
                        }, {
                            emoji: "🤠",
                            category: 0,
                            name: "cowboy hat face",
                            version: "3.0"
                        }, {
                            emoji: "🥳",
                            category: 0,
                            name: "partying face",
                            version: "11.0"
                        }, {
                            emoji: "🥸",
                            category: 0,
                            name: "disguised face",
                            version: "13.0"
                        }, {
                            emoji: "😎",
                            category: 0,
                            name: "smiling face with sunglasses",
                            version: "1.0"
                        }, {
                            emoji: "🤓",
                            category: 0,
                            name: "nerd face",
                            version: "1.0"
                        }, {
                            emoji: "🧐",
                            category: 0,
                            name: "face with monocle",
                            version: "5.0"
                        }, {
                            emoji: "😕",
                            category: 0,
                            name: "confused face",
                            version: "1.0"
                        }, {
                            emoji: "😟",
                            category: 0,
                            name: "worried face",
                            version: "1.0"
                        }, {
                            emoji: "🙁",
                            category: 0,
                            name: "slightly frowning face",
                            version: "1.0"
                        }, {
                            emoji: "☹️",
                            category: 0,
                            name: "frowning face",
                            version: "1.0"
                        }, {
                            emoji: "😮",
                            category: 0,
                            name: "face with open mouth",
                            version: "1.0"
                        }, {
                            emoji: "😯",
                            category: 0,
                            name: "hushed face",
                            version: "1.0"
                        }, {
                            emoji: "😲",
                            category: 0,
                            name: "astonished face",
                            version: "1.0"
                        }, {
                            emoji: "😳",
                            category: 0,
                            name: "flushed face",
                            version: "1.0"
                        }, {
                            emoji: "🥺",
                            category: 0,
                            name: "pleading face",
                            version: "11.0"
                        }, {
                            emoji: "😦",
                            category: 0,
                            name: "frowning face with open mouth",
                            version: "1.0"
                        }, {
                            emoji: "😧",
                            category: 0,
                            name: "anguished face",
                            version: "1.0"
                        }, {
                            emoji: "😨",
                            category: 0,
                            name: "fearful face",
                            version: "1.0"
                        }, {
                            emoji: "😰",
                            category: 0,
                            name: "anxious face with sweat",
                            version: "1.0"
                        }, {
                            emoji: "😥",
                            category: 0,
                            name: "sad but relieved face",
                            version: "1.0"
                        }, {
                            emoji: "😢",
                            category: 0,
                            name: "crying face",
                            version: "1.0"
                        }, {
                            emoji: "😭",
                            category: 0,
                            name: "loudly crying face",
                            version: "1.0"
                        }, {
                            emoji: "😱",
                            category: 0,
                            name: "face screaming in fear",
                            version: "1.0"
                        }, {
                            emoji: "😖",
                            category: 0,
                            name: "confounded face",
                            version: "1.0"
                        }, {
                            emoji: "😣",
                            category: 0,
                            name: "persevering face",
                            version: "1.0"
                        }, {
                            emoji: "😞",
                            category: 0,
                            name: "disappointed face",
                            version: "1.0"
                        }, {
                            emoji: "😓",
                            category: 0,
                            name: "downcast face with sweat",
                            version: "1.0"
                        }, {
                            emoji: "😩",
                            category: 0,
                            name: "weary face",
                            version: "1.0"
                        }, {
                            emoji: "😫",
                            category: 0,
                            name: "tired face",
                            version: "1.0"
                        }, {
                            emoji: "🥱",
                            category: 0,
                            name: "yawning face",
                            version: "12.0"
                        }, {
                            emoji: "😤",
                            category: 0,
                            name: "face with steam from nose",
                            version: "1.0"
                        }, {
                            emoji: "😡",
                            category: 0,
                            name: "pouting face",
                            version: "1.0"
                        }, {
                            emoji: "😠",
                            category: 0,
                            name: "angry face",
                            version: "1.0"
                        }, {
                            emoji: "🤬",
                            category: 0,
                            name: "face with symbols on mouth",
                            version: "5.0"
                        }, {
                            emoji: "😈",
                            category: 0,
                            name: "smiling face with horns",
                            version: "1.0"
                        }, {
                            emoji: "👿",
                            category: 0,
                            name: "angry face with horns",
                            version: "1.0"
                        }, {
                            emoji: "💀",
                            category: 0,
                            name: "skull",
                            version: "1.0"
                        }, {
                            emoji: "☠️",
                            category: 0,
                            name: "skull and crossbones",
                            version: "1.0"
                        }, {
                            emoji: "💩",
                            category: 0,
                            name: "pile of poo",
                            version: "1.0"
                        }, {
                            emoji: "🤡",
                            category: 0,
                            name: "clown face",
                            version: "3.0"
                        }, {
                            emoji: "👹",
                            category: 0,
                            name: "ogre",
                            version: "1.0"
                        }, {
                            emoji: "👺",
                            category: 0,
                            name: "goblin",
                            version: "1.0"
                        }, {
                            emoji: "👻",
                            category: 0,
                            name: "ghost",
                            version: "1.0"
                        }, {
                            emoji: "👽",
                            category: 0,
                            name: "alien",
                            version: "1.0"
                        }, {
                            emoji: "👾",
                            category: 0,
                            name: "alien monster",
                            version: "1.0"
                        }, {
                            emoji: "🤖",
                            category: 0,
                            name: "robot",
                            version: "1.0"
                        }, {
                            emoji: "😺",
                            category: 0,
                            name: "grinning cat",
                            version: "1.0"
                        }, {
                            emoji: "😸",
                            category: 0,
                            name: "grinning cat with smiling eyes",
                            version: "1.0"
                        }, {
                            emoji: "😹",
                            category: 0,
                            name: "cat with tears of joy",
                            version: "1.0"
                        }, {
                            emoji: "😻",
                            category: 0,
                            name: "smiling cat with heart-eyes",
                            version: "1.0"
                        }, {
                            emoji: "😼",
                            category: 0,
                            name: "cat with wry smile",
                            version: "1.0"
                        }, {
                            emoji: "😽",
                            category: 0,
                            name: "kissing cat",
                            version: "1.0"
                        }, {
                            emoji: "🙀",
                            category: 0,
                            name: "weary cat",
                            version: "1.0"
                        }, {
                            emoji: "😿",
                            category: 0,
                            name: "crying cat",
                            version: "1.0"
                        }, {
                            emoji: "😾",
                            category: 0,
                            name: "pouting cat",
                            version: "1.0"
                        }, {
                            emoji: "🙈",
                            category: 0,
                            name: "see-no-evil monkey",
                            version: "1.0"
                        }, {
                            emoji: "🙉",
                            category: 0,
                            name: "hear-no-evil monkey",
                            version: "1.0"
                        }, {
                            emoji: "🙊",
                            category: 0,
                            name: "speak-no-evil monkey",
                            version: "1.0"
                        }, {
                            emoji: "💋",
                            category: 0,
                            name: "kiss mark",
                            version: "1.0"
                        }, {
                            emoji: "💌",
                            category: 0,
                            name: "love letter",
                            version: "1.0"
                        }, {
                            emoji: "💘",
                            category: 0,
                            name: "heart with arrow",
                            version: "1.0"
                        }, {
                            emoji: "💝",
                            category: 0,
                            name: "heart with ribbon",
                            version: "1.0"
                        }, {
                            emoji: "💖",
                            category: 0,
                            name: "sparkling heart",
                            version: "1.0"
                        }, {
                            emoji: "💗",
                            category: 0,
                            name: "growing heart",
                            version: "1.0"
                        }, {
                            emoji: "💓",
                            category: 0,
                            name: "beating heart",
                            version: "1.0"
                        }, {
                            emoji: "💞",
                            category: 0,
                            name: "revolving hearts",
                            version: "1.0"
                        }, {
                            emoji: "💕",
                            category: 0,
                            name: "two hearts",
                            version: "1.0"
                        }, {
                            emoji: "💟",
                            category: 0,
                            name: "heart decoration",
                            version: "1.0"
                        }, {
                            emoji: "❣️",
                            category: 0,
                            name: "heart exclamation",
                            version: "1.0"
                        }, {
                            emoji: "💔",
                            category: 0,
                            name: "broken heart",
                            version: "1.0"
                        }, {
                            emoji: "❤️",
                            category: 0,
                            name: "red heart",
                            version: "1.0"
                        }, {
                            emoji: "🧡",
                            category: 0,
                            name: "orange heart",
                            version: "5.0"
                        }, {
                            emoji: "💛",
                            category: 0,
                            name: "yellow heart",
                            version: "1.0"
                        }, {
                            emoji: "💚",
                            category: 0,
                            name: "green heart",
                            version: "1.0"
                        }, {
                            emoji: "💙",
                            category: 0,
                            name: "blue heart",
                            version: "1.0"
                        }, {
                            emoji: "💜",
                            category: 0,
                            name: "purple heart",
                            version: "1.0"
                        }, {
                            emoji: "🤎",
                            category: 0,
                            name: "brown heart",
                            version: "12.0"
                        }, {
                            emoji: "🖤",
                            category: 0,
                            name: "black heart",
                            version: "3.0"
                        }, {
                            emoji: "🤍",
                            category: 0,
                            name: "white heart",
                            version: "12.0"
                        }, {
                            emoji: "💯",
                            category: 0,
                            name: "hundred points",
                            version: "1.0"
                        }, {
                            emoji: "💢",
                            category: 0,
                            name: "anger symbol",
                            version: "1.0"
                        }, {
                            emoji: "💥",
                            category: 0,
                            name: "collision",
                            version: "1.0"
                        }, {
                            emoji: "💫",
                            category: 0,
                            name: "dizzy",
                            version: "1.0"
                        }, {
                            emoji: "💦",
                            category: 0,
                            name: "sweat droplets",
                            version: "1.0"
                        }, {
                            emoji: "💨",
                            category: 0,
                            name: "dashing away",
                            version: "1.0"
                        }, {
                            emoji: "🕳️",
                            category: 0,
                            name: "hole",
                            version: "1.0"
                        }, {
                            emoji: "💣",
                            category: 0,
                            name: "bomb",
                            version: "1.0"
                        }, {
                            emoji: "💬",
                            category: 0,
                            name: "speech balloon",
                            version: "1.0"
                        }, {
                            emoji: "👁️‍🗨️",
                            category: 0,
                            name: "eye in speech bubble",
                            version: "2.0"
                        }, {
                            emoji: "🗨️",
                            category: 0,
                            name: "left speech bubble",
                            version: "2.0"
                        }, {
                            emoji: "🗯️",
                            category: 0,
                            name: "right anger bubble",
                            version: "1.0"
                        }, {
                            emoji: "💭",
                            category: 0,
                            name: "thought balloon",
                            version: "1.0"
                        }, {
                            emoji: "💤",
                            category: 0,
                            name: "zzz",
                            version: "1.0"
                        }, {
                            emoji: "👋",
                            category: 1,
                            name: "waving hand",
                            variations: ["👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🤚",
                            category: 1,
                            name: "raised back of hand",
                            variations: ["🤚🏻", "🤚🏼", "🤚🏽", "🤚🏾", "🤚🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🖐️",
                            category: 1,
                            name: "hand with fingers splayed",
                            variations: ["🖐🏻", "🖐🏼", "🖐🏽", "🖐🏾", "🖐🏿"],
                            version: "1.0"
                        }, {
                            emoji: "✋",
                            category: 1,
                            name: "raised hand",
                            variations: ["✋🏻", "✋🏼", "✋🏽", "✋🏾", "✋🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🖖",
                            category: 1,
                            name: "vulcan salute",
                            variations: ["🖖🏻", "🖖🏼", "🖖🏽", "🖖🏾", "🖖🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👌",
                            category: 1,
                            name: "OK hand",
                            variations: ["👌🏻", "👌🏼", "👌🏽", "👌🏾", "👌🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🤌",
                            category: 1,
                            name: "pinched fingers",
                            variations: ["🤌🏻", "🤌🏼", "🤌🏽", "🤌🏾", "🤌🏿"],
                            version: "13.0"
                        }, {
                            emoji: "🤏",
                            category: 1,
                            name: "pinching hand",
                            variations: ["🤏🏻", "🤏🏼", "🤏🏽", "🤏🏾", "🤏🏿"],
                            version: "12.0"
                        }, {
                            emoji: "✌️",
                            category: 1,
                            name: "victory hand",
                            variations: ["✌🏻", "✌🏼", "✌🏽", "✌🏾", "✌🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🤞",
                            category: 1,
                            name: "crossed fingers",
                            variations: ["🤞🏻", "🤞🏼", "🤞🏽", "🤞🏾", "🤞🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🤟",
                            category: 1,
                            name: "love-you gesture",
                            variations: ["🤟🏻", "🤟🏼", "🤟🏽", "🤟🏾", "🤟🏿"],
                            version: "5.0"
                        }, {
                            emoji: "🤘",
                            category: 1,
                            name: "sign of the horns",
                            variations: ["🤘🏻", "🤘🏼", "🤘🏽", "🤘🏾", "🤘🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🤙",
                            category: 1,
                            name: "call me hand",
                            variations: ["🤙🏻", "🤙🏼", "🤙🏽", "🤙🏾", "🤙🏿"],
                            version: "3.0"
                        }, {
                            emoji: "👈",
                            category: 1,
                            name: "backhand index pointing left",
                            variations: ["👈🏻", "👈🏼", "👈🏽", "👈🏾", "👈🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👉",
                            category: 1,
                            name: "backhand index pointing right",
                            variations: ["👉🏻", "👉🏼", "👉🏽", "👉🏾", "👉🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👆",
                            category: 1,
                            name: "backhand index pointing up",
                            variations: ["👆🏻", "👆🏼", "👆🏽", "👆🏾", "👆🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🖕",
                            category: 1,
                            name: "middle finger",
                            variations: ["🖕🏻", "🖕🏼", "🖕🏽", "🖕🏾", "🖕🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👇",
                            category: 1,
                            name: "backhand index pointing down",
                            variations: ["👇🏻", "👇🏼", "👇🏽", "👇🏾", "👇🏿"],
                            version: "1.0"
                        }, {
                            emoji: "☝️",
                            category: 1,
                            name: "index pointing up",
                            variations: ["☝🏻", "☝🏼", "☝🏽", "☝🏾", "☝🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👍",
                            category: 1,
                            name: "thumbs up",
                            variations: ["👍🏻", "👍🏼", "👍🏽", "👍🏾", "👍🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👎",
                            category: 1,
                            name: "thumbs down",
                            variations: ["👎🏻", "👎🏼", "👎🏽", "👎🏾", "👎🏿"],
                            version: "1.0"
                        }, {
                            emoji: "✊",
                            category: 1,
                            name: "raised fist",
                            variations: ["✊🏻", "✊🏼", "✊🏽", "✊🏾", "✊🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👊",
                            category: 1,
                            name: "oncoming fist",
                            variations: ["👊🏻", "👊🏼", "👊🏽", "👊🏾", "👊🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🤛",
                            category: 1,
                            name: "left-facing fist",
                            variations: ["🤛🏻", "🤛🏼", "🤛🏽", "🤛🏾", "🤛🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🤜",
                            category: 1,
                            name: "right-facing fist",
                            variations: ["🤜🏻", "🤜🏼", "🤜🏽", "🤜🏾", "🤜🏿"],
                            version: "3.0"
                        }, {
                            emoji: "👏",
                            category: 1,
                            name: "clapping hands",
                            variations: ["👏🏻", "👏🏼", "👏🏽", "👏🏾", "👏🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🙌",
                            category: 1,
                            name: "raising hands",
                            variations: ["🙌🏻", "🙌🏼", "🙌🏽", "🙌🏾", "🙌🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👐",
                            category: 1,
                            name: "open hands",
                            variations: ["👐🏻", "👐🏼", "👐🏽", "👐🏾", "👐🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🤲",
                            category: 1,
                            name: "palms up together",
                            variations: ["🤲🏻", "🤲🏼", "🤲🏽", "🤲🏾", "🤲🏿"],
                            version: "5.0"
                        }, {
                            emoji: "🤝",
                            category: 1,
                            name: "handshake",
                            version: "3.0"
                        }, {
                            emoji: "🙏",
                            category: 1,
                            name: "folded hands",
                            variations: ["🙏🏻", "🙏🏼", "🙏🏽", "🙏🏾", "🙏🏿"],
                            version: "1.0"
                        }, {
                            emoji: "✍️",
                            category: 1,
                            name: "writing hand",
                            variations: ["✍🏻", "✍🏼", "✍🏽", "✍🏾", "✍🏿"],
                            version: "1.0"
                        }, {
                            emoji: "💅",
                            category: 1,
                            name: "nail polish",
                            variations: ["💅🏻", "💅🏼", "💅🏽", "💅🏾", "💅🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🤳",
                            category: 1,
                            name: "selfie",
                            variations: ["🤳🏻", "🤳🏼", "🤳🏽", "🤳🏾", "🤳🏿"],
                            version: "3.0"
                        }, {
                            emoji: "💪",
                            category: 1,
                            name: "flexed biceps",
                            variations: ["💪🏻", "💪🏼", "💪🏽", "💪🏾", "💪🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🦾",
                            category: 1,
                            name: "mechanical arm",
                            version: "12.0"
                        }, {
                            emoji: "🦿",
                            category: 1,
                            name: "mechanical leg",
                            version: "12.0"
                        }, {
                            emoji: "🦵",
                            category: 1,
                            name: "leg",
                            variations: ["🦵🏻", "🦵🏼", "🦵🏽", "🦵🏾", "🦵🏿"],
                            version: "11.0"
                        }, {
                            emoji: "🦶",
                            category: 1,
                            name: "foot",
                            variations: ["🦶🏻", "🦶🏼", "🦶🏽", "🦶🏾", "🦶🏿"],
                            version: "11.0"
                        }, {
                            emoji: "👂",
                            category: 1,
                            name: "ear",
                            variations: ["👂🏻", "👂🏼", "👂🏽", "👂🏾", "👂🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🦻",
                            category: 1,
                            name: "ear with hearing aid",
                            variations: ["🦻🏻", "🦻🏼", "🦻🏽", "🦻🏾", "🦻🏿"],
                            version: "12.0"
                        }, {
                            emoji: "👃",
                            category: 1,
                            name: "nose",
                            variations: ["👃🏻", "👃🏼", "👃🏽", "👃🏾", "👃🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🧠",
                            category: 1,
                            name: "brain",
                            version: "5.0"
                        }, {
                            emoji: "🫀",
                            category: 1,
                            name: "anatomical heart",
                            version: "13.0"
                        }, {
                            emoji: "🫁",
                            category: 1,
                            name: "lungs",
                            version: "13.0"
                        }, {
                            emoji: "🦷",
                            category: 1,
                            name: "tooth",
                            version: "11.0"
                        }, {
                            emoji: "🦴",
                            category: 1,
                            name: "bone",
                            version: "11.0"
                        }, {
                            emoji: "👀",
                            category: 1,
                            name: "eyes",
                            version: "1.0"
                        }, {
                            emoji: "👁️",
                            category: 1,
                            name: "eye",
                            version: "1.0"
                        }, {
                            emoji: "👅",
                            category: 1,
                            name: "tongue",
                            version: "1.0"
                        }, {
                            emoji: "👄",
                            category: 1,
                            name: "mouth",
                            version: "1.0"
                        }, {
                            emoji: "👶",
                            category: 1,
                            name: "baby",
                            variations: ["👶🏻", "👶🏼", "👶🏽", "👶🏾", "👶🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🧒",
                            category: 1,
                            name: "child",
                            variations: ["🧒🏻", "🧒🏼", "🧒🏽", "🧒🏾", "🧒🏿"],
                            version: "5.0"
                        }, {
                            emoji: "👦",
                            category: 1,
                            name: "boy",
                            variations: ["👦🏻", "👦🏼", "👦🏽", "👦🏾", "👦🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👧",
                            category: 1,
                            name: "girl",
                            variations: ["👧🏻", "👧🏼", "👧🏽", "👧🏾", "👧🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🧑",
                            category: 1,
                            name: "person",
                            variations: ["🧑🏻", "🧑🏼", "🧑🏽", "🧑🏾", "🧑🏿"],
                            version: "5.0"
                        }, {
                            emoji: "👱",
                            category: 1,
                            name: "person with blond hair",
                            variations: ["👱🏻", "👱🏼", "👱🏽", "👱🏾", "👱🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👨",
                            category: 1,
                            name: "man",
                            variations: ["👨🏻", "👨🏼", "👨🏽", "👨🏾", "👨🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🧔",
                            category: 1,
                            name: "man with beard",
                            variations: ["🧔🏻", "🧔🏼", "🧔🏽", "🧔🏾", "🧔🏿"],
                            version: "5.0"
                        }, {
                            emoji: "👨‍🦰",
                            category: 1,
                            name: "man with red hair",
                            variations: ["👨🏻‍🦰", "👨🏼‍🦰", "👨🏽‍🦰", "👨🏾‍🦰", "👨🏿‍🦰"],
                            version: "11.0"
                        }, {
                            emoji: "👨‍🦱",
                            category: 1,
                            name: "man with curly hair",
                            variations: ["👨🏻‍🦱", "👨🏼‍🦱", "👨🏽‍🦱", "👨🏾‍🦱", "👨🏿‍🦱"],
                            version: "11.0"
                        }, {
                            emoji: "👨‍🦳",
                            category: 1,
                            name: "man with white hair",
                            variations: ["👨🏻‍🦳", "👨🏼‍🦳", "👨🏽‍🦳", "👨🏾‍🦳", "👨🏿‍🦳"],
                            version: "11.0"
                        }, {
                            emoji: "👨‍🦲",
                            category: 1,
                            name: "man with no hair",
                            variations: ["👨🏻‍🦲", "👨🏼‍🦲", "👨🏽‍🦲", "👨🏾‍🦲", "👨🏿‍🦲"],
                            version: "11.0"
                        }, {
                            emoji: "👩",
                            category: 1,
                            name: "woman",
                            variations: ["👩🏻", "👩🏼", "👩🏽", "👩🏾", "👩🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👩‍🦰",
                            category: 1,
                            name: "woman with red hair",
                            variations: ["👩🏻‍🦰", "👩🏼‍🦰", "👩🏽‍🦰", "👩🏾‍🦰", "👩🏿‍🦰"],
                            version: "11.0"
                        }, {
                            emoji: "🧑‍🦰",
                            category: 1,
                            name: "person with red hair",
                            variations: ["🧑🏻‍🦰", "🧑🏼‍🦰", "🧑🏽‍🦰", "🧑🏾‍🦰", "🧑🏿‍🦰"],
                            version: "12.1"
                        }, {
                            emoji: "👩‍🦱",
                            category: 1,
                            name: "woman with curly hair",
                            variations: ["👩🏻‍🦱", "👩🏼‍🦱", "👩🏽‍🦱", "👩🏾‍🦱", "👩🏿‍🦱"],
                            version: "11.0"
                        }, {
                            emoji: "🧑‍🦱",
                            category: 1,
                            name: "person with curly hair",
                            variations: ["🧑🏻‍🦱", "🧑🏼‍🦱", "🧑🏽‍🦱", "🧑🏾‍🦱", "🧑🏿‍🦱"],
                            version: "12.1"
                        }, {
                            emoji: "👩‍🦳",
                            category: 1,
                            name: "woman with white hair",
                            variations: ["👩🏻‍🦳", "👩🏼‍🦳", "👩🏽‍🦳", "👩🏾‍🦳", "👩🏿‍🦳"],
                            version: "11.0"
                        }, {
                            emoji: "🧑‍🦳",
                            category: 1,
                            name: "person with white hair",
                            variations: ["🧑🏻‍🦳", "🧑🏼‍🦳", "🧑🏽‍🦳", "🧑🏾‍🦳", "🧑🏿‍🦳"],
                            version: "12.1"
                        }, {
                            emoji: "👩‍🦲",
                            category: 1,
                            name: "woman with no hair",
                            variations: ["👩🏻‍🦲", "👩🏼‍🦲", "👩🏽‍🦲", "👩🏾‍🦲", "👩🏿‍🦲"],
                            version: "11.0"
                        }, {
                            emoji: "🧑‍🦲",
                            category: 1,
                            name: "person with no hair",
                            variations: ["🧑🏻‍🦲", "🧑🏼‍🦲", "🧑🏽‍🦲", "🧑🏾‍🦲", "🧑🏿‍🦲"],
                            version: "12.1"
                        }, {
                            emoji: "👱‍♀️",
                            category: 1,
                            name: "woman with blond hair",
                            variations: ["👱🏻‍♀️", "👱🏼‍♀️", "👱🏽‍♀️", "👱🏾‍♀️", "👱🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "👱‍♂️",
                            category: 1,
                            name: "man with blond hair",
                            variations: ["👱🏻‍♂️", "👱🏼‍♂️", "👱🏽‍♂️", "👱🏾‍♂️", "👱🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🧓",
                            category: 1,
                            name: "older person",
                            variations: ["🧓🏻", "🧓🏼", "🧓🏽", "🧓🏾", "🧓🏿"],
                            version: "5.0"
                        }, {
                            emoji: "👴",
                            category: 1,
                            name: "old man",
                            variations: ["👴🏻", "👴🏼", "👴🏽", "👴🏾", "👴🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👵",
                            category: 1,
                            name: "old woman",
                            variations: ["👵🏻", "👵🏼", "👵🏽", "👵🏾", "👵🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🙍",
                            category: 1,
                            name: "person frowning",
                            variations: ["🙍🏻", "🙍🏼", "🙍🏽", "🙍🏾", "🙍🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🙍‍♂️",
                            category: 1,
                            name: "man frowning",
                            variations: ["🙍🏻‍♂️", "🙍🏼‍♂️", "🙍🏽‍♂️", "🙍🏾‍♂️", "🙍🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🙍‍♀️",
                            category: 1,
                            name: "woman frowning",
                            variations: ["🙍🏻‍♀️", "🙍🏼‍♀️", "🙍🏽‍♀️", "🙍🏾‍♀️", "🙍🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🙎",
                            category: 1,
                            name: "person pouting",
                            variations: ["🙎🏻", "🙎🏼", "🙎🏽", "🙎🏾", "🙎🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🙎‍♂️",
                            category: 1,
                            name: "man pouting",
                            variations: ["🙎🏻‍♂️", "🙎🏼‍♂️", "🙎🏽‍♂️", "🙎🏾‍♂️", "🙎🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🙎‍♀️",
                            category: 1,
                            name: "woman pouting",
                            variations: ["🙎🏻‍♀️", "🙎🏼‍♀️", "🙎🏽‍♀️", "🙎🏾‍♀️", "🙎🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🙅",
                            category: 1,
                            name: "person gesturing NO",
                            variations: ["🙅🏻", "🙅🏼", "🙅🏽", "🙅🏾", "🙅🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🙅‍♂️",
                            category: 1,
                            name: "man gesturing NO",
                            variations: ["🙅🏻‍♂️", "🙅🏼‍♂️", "🙅🏽‍♂️", "🙅🏾‍♂️", "🙅🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🙅‍♀️",
                            category: 1,
                            name: "woman gesturing NO",
                            variations: ["🙅🏻‍♀️", "🙅🏼‍♀️", "🙅🏽‍♀️", "🙅🏾‍♀️", "🙅🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🙆",
                            category: 1,
                            name: "person gesturing OK",
                            variations: ["🙆🏻", "🙆🏼", "🙆🏽", "🙆🏾", "🙆🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🙆‍♂️",
                            category: 1,
                            name: "man gesturing OK",
                            variations: ["🙆🏻‍♂️", "🙆🏼‍♂️", "🙆🏽‍♂️", "🙆🏾‍♂️", "🙆🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🙆‍♀️",
                            category: 1,
                            name: "woman gesturing OK",
                            variations: ["🙆🏻‍♀️", "🙆🏼‍♀️", "🙆🏽‍♀️", "🙆🏾‍♀️", "🙆🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "💁",
                            category: 1,
                            name: "person tipping hand",
                            variations: ["💁🏻", "💁🏼", "💁🏽", "💁🏾", "💁🏿"],
                            version: "1.0"
                        }, {
                            emoji: "💁‍♂️",
                            category: 1,
                            name: "man tipping hand",
                            variations: ["💁🏻‍♂️", "💁🏼‍♂️", "💁🏽‍♂️", "💁🏾‍♂️", "💁🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "💁‍♀️",
                            category: 1,
                            name: "woman tipping hand",
                            variations: ["💁🏻‍♀️", "💁🏼‍♀️", "💁🏽‍♀️", "💁🏾‍♀️", "💁🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🙋",
                            category: 1,
                            name: "person raising hand",
                            variations: ["🙋🏻", "🙋🏼", "🙋🏽", "🙋🏾", "🙋🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🙋‍♂️",
                            category: 1,
                            name: "man raising hand",
                            variations: ["🙋🏻‍♂️", "🙋🏼‍♂️", "🙋🏽‍♂️", "🙋🏾‍♂️", "🙋🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🙋‍♀️",
                            category: 1,
                            name: "woman raising hand",
                            variations: ["🙋🏻‍♀️", "🙋🏼‍♀️", "🙋🏽‍♀️", "🙋🏾‍♀️", "🙋🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🧏",
                            category: 1,
                            name: "deaf person",
                            variations: ["🧏🏻", "🧏🏼", "🧏🏽", "🧏🏾", "🧏🏿"],
                            version: "12.0"
                        }, {
                            emoji: "🧏‍♂️",
                            category: 1,
                            name: "deaf man",
                            variations: ["🧏🏻‍♂️", "🧏🏼‍♂️", "🧏🏽‍♂️", "🧏🏾‍♂️", "🧏🏿‍♂️"],
                            version: "12.0"
                        }, {
                            emoji: "🧏‍♀️",
                            category: 1,
                            name: "deaf woman",
                            variations: ["🧏🏻‍♀️", "🧏🏼‍♀️", "🧏🏽‍♀️", "🧏🏾‍♀️", "🧏🏿‍♀️"],
                            version: "12.0"
                        }, {
                            emoji: "🙇",
                            category: 1,
                            name: "person bowing",
                            variations: ["🙇🏻", "🙇🏼", "🙇🏽", "🙇🏾", "🙇🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🙇‍♂️",
                            category: 1,
                            name: "man bowing",
                            variations: ["🙇🏻‍♂️", "🙇🏼‍♂️", "🙇🏽‍♂️", "🙇🏾‍♂️", "🙇🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🙇‍♀️",
                            category: 1,
                            name: "woman bowing",
                            variations: ["🙇🏻‍♀️", "🙇🏼‍♀️", "🙇🏽‍♀️", "🙇🏾‍♀️", "🙇🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🤦",
                            category: 1,
                            name: "person facepalming",
                            variations: ["🤦🏻", "🤦🏼", "🤦🏽", "🤦🏾", "🤦🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🤦‍♂️",
                            category: 1,
                            name: "man facepalming",
                            variations: ["🤦🏻‍♂️", "🤦🏼‍♂️", "🤦🏽‍♂️", "🤦🏾‍♂️", "🤦🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🤦‍♀️",
                            category: 1,
                            name: "woman facepalming",
                            variations: ["🤦🏻‍♀️", "🤦🏼‍♀️", "🤦🏽‍♀️", "🤦🏾‍♀️", "🤦🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🤷",
                            category: 1,
                            name: "person shrugging",
                            variations: ["🤷🏻", "🤷🏼", "🤷🏽", "🤷🏾", "🤷🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🤷‍♂️",
                            category: 1,
                            name: "man shrugging",
                            variations: ["🤷🏻‍♂️", "🤷🏼‍♂️", "🤷🏽‍♂️", "🤷🏾‍♂️", "🤷🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🤷‍♀️",
                            category: 1,
                            name: "woman shrugging",
                            variations: ["🤷🏻‍♀️", "🤷🏼‍♀️", "🤷🏽‍♀️", "🤷🏾‍♀️", "🤷🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍⚕️",
                            category: 1,
                            name: "health worker",
                            variations: ["🧑🏻‍⚕️", "🧑🏼‍⚕️", "🧑🏽‍⚕️", "🧑🏾‍⚕️", "🧑🏿‍⚕️"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍⚕️",
                            category: 1,
                            name: "man health worker",
                            variations: ["👨🏻‍⚕️", "👨🏼‍⚕️", "👨🏽‍⚕️", "👨🏾‍⚕️", "👨🏿‍⚕️"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍⚕️",
                            category: 1,
                            name: "woman health worker",
                            variations: ["👩🏻‍⚕️", "👩🏼‍⚕️", "👩🏽‍⚕️", "👩🏾‍⚕️", "👩🏿‍⚕️"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍🎓",
                            category: 1,
                            name: "student",
                            variations: ["🧑🏻‍🎓", "🧑🏼‍🎓", "🧑🏽‍🎓", "🧑🏾‍🎓", "🧑🏿‍🎓"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🎓",
                            category: 1,
                            name: "man student",
                            variations: ["👨🏻‍🎓", "👨🏼‍🎓", "👨🏽‍🎓", "👨🏾‍🎓", "👨🏿‍🎓"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍🎓",
                            category: 1,
                            name: "woman student",
                            variations: ["👩🏻‍🎓", "👩🏼‍🎓", "👩🏽‍🎓", "👩🏾‍🎓", "👩🏿‍🎓"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍🏫",
                            category: 1,
                            name: "teacher",
                            variations: ["🧑🏻‍🏫", "🧑🏼‍🏫", "🧑🏽‍🏫", "🧑🏾‍🏫", "🧑🏿‍🏫"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🏫",
                            category: 1,
                            name: "man teacher",
                            variations: ["👨🏻‍🏫", "👨🏼‍🏫", "👨🏽‍🏫", "👨🏾‍🏫", "👨🏿‍🏫"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍🏫",
                            category: 1,
                            name: "woman teacher",
                            variations: ["👩🏻‍🏫", "👩🏼‍🏫", "👩🏽‍🏫", "👩🏾‍🏫", "👩🏿‍🏫"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍⚖️",
                            category: 1,
                            name: "judge",
                            variations: ["🧑🏻‍⚖️", "🧑🏼‍⚖️", "🧑🏽‍⚖️", "🧑🏾‍⚖️", "🧑🏿‍⚖️"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍⚖️",
                            category: 1,
                            name: "man judge",
                            variations: ["👨🏻‍⚖️", "👨🏼‍⚖️", "👨🏽‍⚖️", "👨🏾‍⚖️", "👨🏿‍⚖️"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍⚖️",
                            category: 1,
                            name: "woman judge",
                            variations: ["👩🏻‍⚖️", "👩🏼‍⚖️", "👩🏽‍⚖️", "👩🏾‍⚖️", "👩🏿‍⚖️"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍🌾",
                            category: 1,
                            name: "farmer",
                            variations: ["🧑🏻‍🌾", "🧑🏼‍🌾", "🧑🏽‍🌾", "🧑🏾‍🌾", "🧑🏿‍🌾"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🌾",
                            category: 1,
                            name: "man farmer",
                            variations: ["👨🏻‍🌾", "👨🏼‍🌾", "👨🏽‍🌾", "👨🏾‍🌾", "👨🏿‍🌾"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍🌾",
                            category: 1,
                            name: "woman farmer",
                            variations: ["👩🏻‍🌾", "👩🏼‍🌾", "👩🏽‍🌾", "👩🏾‍🌾", "👩🏿‍🌾"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍🍳",
                            category: 1,
                            name: "cook",
                            variations: ["🧑🏻‍🍳", "🧑🏼‍🍳", "🧑🏽‍🍳", "🧑🏾‍🍳", "🧑🏿‍🍳"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🍳",
                            category: 1,
                            name: "man cook",
                            variations: ["👨🏻‍🍳", "👨🏼‍🍳", "👨🏽‍🍳", "👨🏾‍🍳", "👨🏿‍🍳"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍🍳",
                            category: 1,
                            name: "woman cook",
                            variations: ["👩🏻‍🍳", "👩🏼‍🍳", "👩🏽‍🍳", "👩🏾‍🍳", "👩🏿‍🍳"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍🔧",
                            category: 1,
                            name: "mechanic",
                            variations: ["🧑🏻‍🔧", "🧑🏼‍🔧", "🧑🏽‍🔧", "🧑🏾‍🔧", "🧑🏿‍🔧"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🔧",
                            category: 1,
                            name: "man mechanic",
                            variations: ["👨🏻‍🔧", "👨🏼‍🔧", "👨🏽‍🔧", "👨🏾‍🔧", "👨🏿‍🔧"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍🔧",
                            category: 1,
                            name: "woman mechanic",
                            variations: ["👩🏻‍🔧", "👩🏼‍🔧", "👩🏽‍🔧", "👩🏾‍🔧", "👩🏿‍🔧"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍🏭",
                            category: 1,
                            name: "factory worker",
                            variations: ["🧑🏻‍🏭", "🧑🏼‍🏭", "🧑🏽‍🏭", "🧑🏾‍🏭", "🧑🏿‍🏭"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🏭",
                            category: 1,
                            name: "man factory worker",
                            variations: ["👨🏻‍🏭", "👨🏼‍🏭", "👨🏽‍🏭", "👨🏾‍🏭", "👨🏿‍🏭"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍🏭",
                            category: 1,
                            name: "woman factory worker",
                            variations: ["👩🏻‍🏭", "👩🏼‍🏭", "👩🏽‍🏭", "👩🏾‍🏭", "👩🏿‍🏭"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍💼",
                            category: 1,
                            name: "office worker",
                            variations: ["🧑🏻‍💼", "🧑🏼‍💼", "🧑🏽‍💼", "🧑🏾‍💼", "🧑🏿‍💼"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍💼",
                            category: 1,
                            name: "man office worker",
                            variations: ["👨🏻‍💼", "👨🏼‍💼", "👨🏽‍💼", "👨🏾‍💼", "👨🏿‍💼"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍💼",
                            category: 1,
                            name: "woman office worker",
                            variations: ["👩🏻‍💼", "👩🏼‍💼", "👩🏽‍💼", "👩🏾‍💼", "👩🏿‍💼"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍🔬",
                            category: 1,
                            name: "scientist",
                            variations: ["🧑🏻‍🔬", "🧑🏼‍🔬", "🧑🏽‍🔬", "🧑🏾‍🔬", "🧑🏿‍🔬"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🔬",
                            category: 1,
                            name: "man scientist",
                            variations: ["👨🏻‍🔬", "👨🏼‍🔬", "👨🏽‍🔬", "👨🏾‍🔬", "👨🏿‍🔬"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍🔬",
                            category: 1,
                            name: "woman scientist",
                            variations: ["👩🏻‍🔬", "👩🏼‍🔬", "👩🏽‍🔬", "👩🏾‍🔬", "👩🏿‍🔬"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍💻",
                            category: 1,
                            name: "technologist",
                            variations: ["🧑🏻‍💻", "🧑🏼‍💻", "🧑🏽‍💻", "🧑🏾‍💻", "🧑🏿‍💻"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍💻",
                            category: 1,
                            name: "man technologist",
                            variations: ["👨🏻‍💻", "👨🏼‍💻", "👨🏽‍💻", "👨🏾‍💻", "👨🏿‍💻"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍💻",
                            category: 1,
                            name: "woman technologist",
                            variations: ["👩🏻‍💻", "👩🏼‍💻", "👩🏽‍💻", "👩🏾‍💻", "👩🏿‍💻"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍🎤",
                            category: 1,
                            name: "singer",
                            variations: ["🧑🏻‍🎤", "🧑🏼‍🎤", "🧑🏽‍🎤", "🧑🏾‍🎤", "🧑🏿‍🎤"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🎤",
                            category: 1,
                            name: "man singer",
                            variations: ["👨🏻‍🎤", "👨🏼‍🎤", "👨🏽‍🎤", "👨🏾‍🎤", "👨🏿‍🎤"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍🎤",
                            category: 1,
                            name: "woman singer",
                            variations: ["👩🏻‍🎤", "👩🏼‍🎤", "👩🏽‍🎤", "👩🏾‍🎤", "👩🏿‍🎤"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍🎨",
                            category: 1,
                            name: "artist",
                            variations: ["🧑🏻‍🎨", "🧑🏼‍🎨", "🧑🏽‍🎨", "🧑🏾‍🎨", "🧑🏿‍🎨"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🎨",
                            category: 1,
                            name: "man artist",
                            variations: ["👨🏻‍🎨", "👨🏼‍🎨", "👨🏽‍🎨", "👨🏾‍🎨", "👨🏿‍🎨"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍🎨",
                            category: 1,
                            name: "woman artist",
                            variations: ["👩🏻‍🎨", "👩🏼‍🎨", "👩🏽‍🎨", "👩🏾‍🎨", "👩🏿‍🎨"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍✈️",
                            category: 1,
                            name: "pilot",
                            variations: ["🧑🏻‍✈️", "🧑🏼‍✈️", "🧑🏽‍✈️", "🧑🏾‍✈️", "🧑🏿‍✈️"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍✈️",
                            category: 1,
                            name: "man pilot",
                            variations: ["👨🏻‍✈️", "👨🏼‍✈️", "👨🏽‍✈️", "👨🏾‍✈️", "👨🏿‍✈️"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍✈️",
                            category: 1,
                            name: "woman pilot",
                            variations: ["👩🏻‍✈️", "👩🏼‍✈️", "👩🏽‍✈️", "👩🏾‍✈️", "👩🏿‍✈️"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍🚀",
                            category: 1,
                            name: "astronaut",
                            variations: ["🧑🏻‍🚀", "🧑🏼‍🚀", "🧑🏽‍🚀", "🧑🏾‍🚀", "🧑🏿‍🚀"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🚀",
                            category: 1,
                            name: "man astronaut",
                            variations: ["👨🏻‍🚀", "👨🏼‍🚀", "👨🏽‍🚀", "👨🏾‍🚀", "👨🏿‍🚀"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍🚀",
                            category: 1,
                            name: "woman astronaut",
                            variations: ["👩🏻‍🚀", "👩🏼‍🚀", "👩🏽‍🚀", "👩🏾‍🚀", "👩🏿‍🚀"],
                            version: "4.0"
                        }, {
                            emoji: "🧑‍🚒",
                            category: 1,
                            name: "firefighter",
                            variations: ["🧑🏻‍🚒", "🧑🏼‍🚒", "🧑🏽‍🚒", "🧑🏾‍🚒", "🧑🏿‍🚒"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🚒",
                            category: 1,
                            name: "man firefighter",
                            variations: ["👨🏻‍🚒", "👨🏼‍🚒", "👨🏽‍🚒", "👨🏾‍🚒", "👨🏿‍🚒"],
                            version: "4.0"
                        }, {
                            emoji: "👩‍🚒",
                            category: 1,
                            name: "woman firefighter",
                            variations: ["👩🏻‍🚒", "👩🏼‍🚒", "👩🏽‍🚒", "👩🏾‍🚒", "👩🏿‍🚒"],
                            version: "4.0"
                        }, {
                            emoji: "👮",
                            category: 1,
                            name: "police officer",
                            variations: ["👮🏻", "👮🏼", "👮🏽", "👮🏾", "👮🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👮‍♂️",
                            category: 1,
                            name: "man police officer",
                            variations: ["👮🏻‍♂️", "👮🏼‍♂️", "👮🏽‍♂️", "👮🏾‍♂️", "👮🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "👮‍♀️",
                            category: 1,
                            name: "woman police officer",
                            variations: ["👮🏻‍♀️", "👮🏼‍♀️", "👮🏽‍♀️", "👮🏾‍♀️", "👮🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🕵️",
                            category: 1,
                            name: "detective",
                            variations: ["🕵🏻", "🕵🏼", "🕵🏽", "🕵🏾", "🕵🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🕵️‍♂️",
                            category: 1,
                            name: "man detective",
                            variations: ["🕵🏻‍♂️", "🕵🏼‍♂️", "🕵🏽‍♂️", "🕵🏾‍♂️", "🕵🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🕵️‍♀️",
                            category: 1,
                            name: "woman detective",
                            variations: ["🕵🏻‍♀️", "🕵🏼‍♀️", "🕵🏽‍♀️", "🕵🏾‍♀️", "🕵🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "💂",
                            category: 1,
                            name: "guard",
                            variations: ["💂🏻", "💂🏼", "💂🏽", "💂🏾", "💂🏿"],
                            version: "1.0"
                        }, {
                            emoji: "💂‍♂️",
                            category: 1,
                            name: "man guard",
                            variations: ["💂🏻‍♂️", "💂🏼‍♂️", "💂🏽‍♂️", "💂🏾‍♂️", "💂🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "💂‍♀️",
                            category: 1,
                            name: "woman guard",
                            variations: ["💂🏻‍♀️", "💂🏼‍♀️", "💂🏽‍♀️", "💂🏾‍♀️", "💂🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🥷",
                            category: 1,
                            name: "ninja",
                            variations: ["🥷🏻", "🥷🏼", "🥷🏽", "🥷🏾", "🥷🏿"],
                            version: "13.0"
                        }, {
                            emoji: "👷",
                            category: 1,
                            name: "construction worker",
                            variations: ["👷🏻", "👷🏼", "👷🏽", "👷🏾", "👷🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👷‍♂️",
                            category: 1,
                            name: "man construction worker",
                            variations: ["👷🏻‍♂️", "👷🏼‍♂️", "👷🏽‍♂️", "👷🏾‍♂️", "👷🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "👷‍♀️",
                            category: 1,
                            name: "woman construction worker",
                            variations: ["👷🏻‍♀️", "👷🏼‍♀️", "👷🏽‍♀️", "👷🏾‍♀️", "👷🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🤴",
                            category: 1,
                            name: "prince",
                            variations: ["🤴🏻", "🤴🏼", "🤴🏽", "🤴🏾", "🤴🏿"],
                            version: "3.0"
                        }, {
                            emoji: "👸",
                            category: 1,
                            name: "princess",
                            variations: ["👸🏻", "👸🏼", "👸🏽", "👸🏾", "👸🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👳",
                            category: 1,
                            name: "person wearing turban",
                            variations: ["👳🏻", "👳🏼", "👳🏽", "👳🏾", "👳🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👳‍♂️",
                            category: 1,
                            name: "man wearing turban",
                            variations: ["👳🏻‍♂️", "👳🏼‍♂️", "👳🏽‍♂️", "👳🏾‍♂️", "👳🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "👳‍♀️",
                            category: 1,
                            name: "woman wearing turban",
                            variations: ["👳🏻‍♀️", "👳🏼‍♀️", "👳🏽‍♀️", "👳🏾‍♀️", "👳🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "👲",
                            category: 1,
                            name: "person with skullcap",
                            variations: ["👲🏻", "👲🏼", "👲🏽", "👲🏾", "👲🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🧕",
                            category: 1,
                            name: "woman with headscarf",
                            variations: ["🧕🏻", "🧕🏼", "🧕🏽", "🧕🏾", "🧕🏿"],
                            version: "5.0"
                        }, {
                            emoji: "🤵",
                            category: 1,
                            name: "person in tuxedo",
                            variations: ["🤵🏻", "🤵🏼", "🤵🏽", "🤵🏾", "🤵🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🤵‍♂️",
                            category: 1,
                            name: "man in tuxedo",
                            variations: ["🤵🏻‍♂️", "🤵🏼‍♂️", "🤵🏽‍♂️", "🤵🏾‍♂️", "🤵🏿‍♂️"],
                            version: "13.0"
                        }, {
                            emoji: "🤵‍♀️",
                            category: 1,
                            name: "woman in tuxedo",
                            variations: ["🤵🏻‍♀️", "🤵🏼‍♀️", "🤵🏽‍♀️", "🤵🏾‍♀️", "🤵🏿‍♀️"],
                            version: "13.0"
                        }, {
                            emoji: "👰",
                            category: 1,
                            name: "person with veil",
                            variations: ["👰🏻", "👰🏼", "👰🏽", "👰🏾", "👰🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👰‍♂️",
                            category: 1,
                            name: "man with veil",
                            variations: ["👰🏻‍♂️", "👰🏼‍♂️", "👰🏽‍♂️", "👰🏾‍♂️", "👰🏿‍♂️"],
                            version: "13.0"
                        }, {
                            emoji: "👰‍♀️",
                            category: 1,
                            name: "woman with veil",
                            variations: ["👰🏻‍♀️", "👰🏼‍♀️", "👰🏽‍♀️", "👰🏾‍♀️", "👰🏿‍♀️"],
                            version: "13.0"
                        }, {
                            emoji: "🤰",
                            category: 1,
                            name: "pregnant woman",
                            variations: ["🤰🏻", "🤰🏼", "🤰🏽", "🤰🏾", "🤰🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🤱",
                            category: 1,
                            name: "breast-feeding",
                            variations: ["🤱🏻", "🤱🏼", "🤱🏽", "🤱🏾", "🤱🏿"],
                            version: "5.0"
                        }, {
                            emoji: "👩‍🍼",
                            category: 1,
                            name: "woman feeding baby",
                            variations: ["👩🏻‍🍼", "👩🏼‍🍼", "👩🏽‍🍼", "👩🏾‍🍼", "👩🏿‍🍼"],
                            version: "13.0"
                        }, {
                            emoji: "👨‍🍼",
                            category: 1,
                            name: "man feeding baby",
                            variations: ["👨🏻‍🍼", "👨🏼‍🍼", "👨🏽‍🍼", "👨🏾‍🍼", "👨🏿‍🍼"],
                            version: "13.0"
                        }, {
                            emoji: "🧑‍🍼",
                            category: 1,
                            name: "person feeding baby",
                            variations: ["🧑🏻‍🍼", "🧑🏼‍🍼", "🧑🏽‍🍼", "🧑🏾‍🍼", "🧑🏿‍🍼"],
                            version: "13.0"
                        }, {
                            emoji: "👼",
                            category: 1,
                            name: "baby angel",
                            variations: ["👼🏻", "👼🏼", "👼🏽", "👼🏾", "👼🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🎅",
                            category: 1,
                            name: "Santa Claus",
                            variations: ["🎅🏻", "🎅🏼", "🎅🏽", "🎅🏾", "🎅🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🤶",
                            category: 1,
                            name: "Mrs. Claus",
                            variations: ["🤶🏻", "🤶🏼", "🤶🏽", "🤶🏾", "🤶🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🧑‍🎄",
                            category: 1,
                            name: "mx claus",
                            variations: ["🧑🏻‍🎄", "🧑🏼‍🎄", "🧑🏽‍🎄", "🧑🏾‍🎄", "🧑🏿‍🎄"],
                            version: "13.0"
                        }, {
                            emoji: "🦸",
                            category: 1,
                            name: "superhero",
                            variations: ["🦸🏻", "🦸🏼", "🦸🏽", "🦸🏾", "🦸🏿"],
                            version: "11.0"
                        }, {
                            emoji: "🦸‍♂️",
                            category: 1,
                            name: "man superhero",
                            variations: ["🦸🏻‍♂️", "🦸🏼‍♂️", "🦸🏽‍♂️", "🦸🏾‍♂️", "🦸🏿‍♂️"],
                            version: "11.0"
                        }, {
                            emoji: "🦸‍♀️",
                            category: 1,
                            name: "woman superhero",
                            variations: ["🦸🏻‍♀️", "🦸🏼‍♀️", "🦸🏽‍♀️", "🦸🏾‍♀️", "🦸🏿‍♀️"],
                            version: "11.0"
                        }, {
                            emoji: "🦹",
                            category: 1,
                            name: "supervillain",
                            variations: ["🦹🏻", "🦹🏼", "🦹🏽", "🦹🏾", "🦹🏿"],
                            version: "11.0"
                        }, {
                            emoji: "🦹‍♂️",
                            category: 1,
                            name: "man supervillain",
                            variations: ["🦹🏻‍♂️", "🦹🏼‍♂️", "🦹🏽‍♂️", "🦹🏾‍♂️", "🦹🏿‍♂️"],
                            version: "11.0"
                        }, {
                            emoji: "🦹‍♀️",
                            category: 1,
                            name: "woman supervillain",
                            variations: ["🦹🏻‍♀️", "🦹🏼‍♀️", "🦹🏽‍♀️", "🦹🏾‍♀️", "🦹🏿‍♀️"],
                            version: "11.0"
                        }, {
                            emoji: "🧙",
                            category: 1,
                            name: "mage",
                            variations: ["🧙🏻", "🧙🏼", "🧙🏽", "🧙🏾", "🧙🏿"],
                            version: "5.0"
                        }, {
                            emoji: "🧙‍♂️",
                            category: 1,
                            name: "man mage",
                            variations: ["🧙🏻‍♂️", "🧙🏼‍♂️", "🧙🏽‍♂️", "🧙🏾‍♂️", "🧙🏿‍♂️"],
                            version: "5.0"
                        }, {
                            emoji: "🧙‍♀️",
                            category: 1,
                            name: "woman mage",
                            variations: ["🧙🏻‍♀️", "🧙🏼‍♀️", "🧙🏽‍♀️", "🧙🏾‍♀️", "🧙🏿‍♀️"],
                            version: "5.0"
                        }, {
                            emoji: "🧚",
                            category: 1,
                            name: "fairy",
                            variations: ["🧚🏻", "🧚🏼", "🧚🏽", "🧚🏾", "🧚🏿"],
                            version: "5.0"
                        }, {
                            emoji: "🧚‍♂️",
                            category: 1,
                            name: "man fairy",
                            variations: ["🧚🏻‍♂️", "🧚🏼‍♂️", "🧚🏽‍♂️", "🧚🏾‍♂️", "🧚🏿‍♂️"],
                            version: "5.0"
                        }, {
                            emoji: "🧚‍♀️",
                            category: 1,
                            name: "woman fairy",
                            variations: ["🧚🏻‍♀️", "🧚🏼‍♀️", "🧚🏽‍♀️", "🧚🏾‍♀️", "🧚🏿‍♀️"],
                            version: "5.0"
                        }, {
                            emoji: "🧛",
                            category: 1,
                            name: "vampire",
                            variations: ["🧛🏻", "🧛🏼", "🧛🏽", "🧛🏾", "🧛🏿"],
                            version: "5.0"
                        }, {
                            emoji: "🧛‍♂️",
                            category: 1,
                            name: "man vampire",
                            variations: ["🧛🏻‍♂️", "🧛🏼‍♂️", "🧛🏽‍♂️", "🧛🏾‍♂️", "🧛🏿‍♂️"],
                            version: "5.0"
                        }, {
                            emoji: "🧛‍♀️",
                            category: 1,
                            name: "woman vampire",
                            variations: ["🧛🏻‍♀️", "🧛🏼‍♀️", "🧛🏽‍♀️", "🧛🏾‍♀️", "🧛🏿‍♀️"],
                            version: "5.0"
                        }, {
                            emoji: "🧜",
                            category: 1,
                            name: "merperson",
                            variations: ["🧜🏻", "🧜🏼", "🧜🏽", "🧜🏾", "🧜🏿"],
                            version: "5.0"
                        }, {
                            emoji: "🧜‍♂️",
                            category: 1,
                            name: "merman",
                            variations: ["🧜🏻‍♂️", "🧜🏼‍♂️", "🧜🏽‍♂️", "🧜🏾‍♂️", "🧜🏿‍♂️"],
                            version: "5.0"
                        }, {
                            emoji: "🧜‍♀️",
                            category: 1,
                            name: "mermaid",
                            variations: ["🧜🏻‍♀️", "🧜🏼‍♀️", "🧜🏽‍♀️", "🧜🏾‍♀️", "🧜🏿‍♀️"],
                            version: "5.0"
                        }, {
                            emoji: "🧝",
                            category: 1,
                            name: "elf",
                            variations: ["🧝🏻", "🧝🏼", "🧝🏽", "🧝🏾", "🧝🏿"],
                            version: "5.0"
                        }, {
                            emoji: "🧝‍♂️",
                            category: 1,
                            name: "man elf",
                            variations: ["🧝🏻‍♂️", "🧝🏼‍♂️", "🧝🏽‍♂️", "🧝🏾‍♂️", "🧝🏿‍♂️"],
                            version: "5.0"
                        }, {
                            emoji: "🧝‍♀️",
                            category: 1,
                            name: "woman elf",
                            variations: ["🧝🏻‍♀️", "🧝🏼‍♀️", "🧝🏽‍♀️", "🧝🏾‍♀️", "🧝🏿‍♀️"],
                            version: "5.0"
                        }, {
                            emoji: "🧞",
                            category: 1,
                            name: "genie",
                            version: "5.0"
                        }, {
                            emoji: "🧞‍♂️",
                            category: 1,
                            name: "man genie",
                            version: "5.0"
                        }, {
                            emoji: "🧞‍♀️",
                            category: 1,
                            name: "woman genie",
                            version: "5.0"
                        }, {
                            emoji: "🧟",
                            category: 1,
                            name: "zombie",
                            version: "5.0"
                        }, {
                            emoji: "🧟‍♂️",
                            category: 1,
                            name: "man zombie",
                            version: "5.0"
                        }, {
                            emoji: "🧟‍♀️",
                            category: 1,
                            name: "woman zombie",
                            version: "5.0"
                        }, {
                            emoji: "💆",
                            category: 1,
                            name: "person getting massage",
                            variations: ["💆🏻", "💆🏼", "💆🏽", "💆🏾", "💆🏿"],
                            version: "1.0"
                        }, {
                            emoji: "💆‍♂️",
                            category: 1,
                            name: "man getting massage",
                            variations: ["💆🏻‍♂️", "💆🏼‍♂️", "💆🏽‍♂️", "💆🏾‍♂️", "💆🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "💆‍♀️",
                            category: 1,
                            name: "woman getting massage",
                            variations: ["💆🏻‍♀️", "💆🏼‍♀️", "💆🏽‍♀️", "💆🏾‍♀️", "💆🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "💇",
                            category: 1,
                            name: "person getting haircut",
                            variations: ["💇🏻", "💇🏼", "💇🏽", "💇🏾", "💇🏿"],
                            version: "1.0"
                        }, {
                            emoji: "💇‍♂️",
                            category: 1,
                            name: "man getting haircut",
                            variations: ["💇🏻‍♂️", "💇🏼‍♂️", "💇🏽‍♂️", "💇🏾‍♂️", "💇🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "💇‍♀️",
                            category: 1,
                            name: "woman getting haircut",
                            variations: ["💇🏻‍♀️", "💇🏼‍♀️", "💇🏽‍♀️", "💇🏾‍♀️", "💇🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🚶",
                            category: 1,
                            name: "person walking",
                            variations: ["🚶🏻", "🚶🏼", "🚶🏽", "🚶🏾", "🚶🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🚶‍♂️",
                            category: 1,
                            name: "man walking",
                            variations: ["🚶🏻‍♂️", "🚶🏼‍♂️", "🚶🏽‍♂️", "🚶🏾‍♂️", "🚶🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🚶‍♀️",
                            category: 1,
                            name: "woman walking",
                            variations: ["🚶🏻‍♀️", "🚶🏼‍♀️", "🚶🏽‍♀️", "🚶🏾‍♀️", "🚶🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🧍",
                            category: 1,
                            name: "person standing",
                            variations: ["🧍🏻", "🧍🏼", "🧍🏽", "🧍🏾", "🧍🏿"],
                            version: "12.0"
                        }, {
                            emoji: "🧍‍♂️",
                            category: 1,
                            name: "man standing",
                            variations: ["🧍🏻‍♂️", "🧍🏼‍♂️", "🧍🏽‍♂️", "🧍🏾‍♂️", "🧍🏿‍♂️"],
                            version: "12.0"
                        }, {
                            emoji: "🧍‍♀️",
                            category: 1,
                            name: "woman standing",
                            variations: ["🧍🏻‍♀️", "🧍🏼‍♀️", "🧍🏽‍♀️", "🧍🏾‍♀️", "🧍🏿‍♀️"],
                            version: "12.0"
                        }, {
                            emoji: "🧎",
                            category: 1,
                            name: "person kneeling",
                            variations: ["🧎🏻", "🧎🏼", "🧎🏽", "🧎🏾", "🧎🏿"],
                            version: "12.0"
                        }, {
                            emoji: "🧎‍♂️",
                            category: 1,
                            name: "man kneeling",
                            variations: ["🧎🏻‍♂️", "🧎🏼‍♂️", "🧎🏽‍♂️", "🧎🏾‍♂️", "🧎🏿‍♂️"],
                            version: "12.0"
                        }, {
                            emoji: "🧎‍♀️",
                            category: 1,
                            name: "woman kneeling",
                            variations: ["🧎🏻‍♀️", "🧎🏼‍♀️", "🧎🏽‍♀️", "🧎🏾‍♀️", "🧎🏿‍♀️"],
                            version: "12.0"
                        }, {
                            emoji: "🧑‍🦯",
                            category: 1,
                            name: "person with white cane",
                            variations: ["🧑🏻‍🦯", "🧑🏼‍🦯", "🧑🏽‍🦯", "🧑🏾‍🦯", "🧑🏿‍🦯"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🦯",
                            category: 1,
                            name: "man with white cane",
                            variations: ["👨🏻‍🦯", "👨🏼‍🦯", "👨🏽‍🦯", "👨🏾‍🦯", "👨🏿‍🦯"],
                            version: "12.0"
                        }, {
                            emoji: "👩‍🦯",
                            category: 1,
                            name: "woman with white cane",
                            variations: ["👩🏻‍🦯", "👩🏼‍🦯", "👩🏽‍🦯", "👩🏾‍🦯", "👩🏿‍🦯"],
                            version: "12.0"
                        }, {
                            emoji: "🧑‍🦼",
                            category: 1,
                            name: "person in motorized wheelchair",
                            variations: ["🧑🏻‍🦼", "🧑🏼‍🦼", "🧑🏽‍🦼", "🧑🏾‍🦼", "🧑🏿‍🦼"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🦼",
                            category: 1,
                            name: "man in motorized wheelchair",
                            variations: ["👨🏻‍🦼", "👨🏼‍🦼", "👨🏽‍🦼", "👨🏾‍🦼", "👨🏿‍🦼"],
                            version: "12.0"
                        }, {
                            emoji: "👩‍🦼",
                            category: 1,
                            name: "woman in motorized wheelchair",
                            variations: ["👩🏻‍🦼", "👩🏼‍🦼", "👩🏽‍🦼", "👩🏾‍🦼", "👩🏿‍🦼"],
                            version: "12.0"
                        }, {
                            emoji: "🧑‍🦽",
                            category: 1,
                            name: "person in manual wheelchair",
                            variations: ["🧑🏻‍🦽", "🧑🏼‍🦽", "🧑🏽‍🦽", "🧑🏾‍🦽", "🧑🏿‍🦽"],
                            version: "12.1"
                        }, {
                            emoji: "👨‍🦽",
                            category: 1,
                            name: "man in manual wheelchair",
                            variations: ["👨🏻‍🦽", "👨🏼‍🦽", "👨🏽‍🦽", "👨🏾‍🦽", "👨🏿‍🦽"],
                            version: "12.0"
                        }, {
                            emoji: "👩‍🦽",
                            category: 1,
                            name: "woman in manual wheelchair",
                            variations: ["👩🏻‍🦽", "👩🏼‍🦽", "👩🏽‍🦽", "👩🏾‍🦽", "👩🏿‍🦽"],
                            version: "12.0"
                        }, {
                            emoji: "🏃",
                            category: 1,
                            name: "person running",
                            variations: ["🏃🏻", "🏃🏼", "🏃🏽", "🏃🏾", "🏃🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🏃‍♂️",
                            category: 1,
                            name: "man running",
                            variations: ["🏃🏻‍♂️", "🏃🏼‍♂️", "🏃🏽‍♂️", "🏃🏾‍♂️", "🏃🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🏃‍♀️",
                            category: 1,
                            name: "woman running",
                            variations: ["🏃🏻‍♀️", "🏃🏼‍♀️", "🏃🏽‍♀️", "🏃🏾‍♀️", "🏃🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "💃",
                            category: 1,
                            name: "woman dancing",
                            variations: ["💃🏻", "💃🏼", "💃🏽", "💃🏾", "💃🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🕺",
                            category: 1,
                            name: "man dancing",
                            variations: ["🕺🏻", "🕺🏼", "🕺🏽", "🕺🏾", "🕺🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🕴️",
                            category: 1,
                            name: "person in suit levitating",
                            variations: ["🕴🏻", "🕴🏼", "🕴🏽", "🕴🏾", "🕴🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👯",
                            category: 1,
                            name: "people with bunny ears",
                            version: "1.0"
                        }, {
                            emoji: "👯‍♂️",
                            category: 1,
                            name: "men with bunny ears",
                            version: "4.0"
                        }, {
                            emoji: "👯‍♀️",
                            category: 1,
                            name: "women with bunny ears",
                            version: "4.0"
                        }, {
                            emoji: "🧖",
                            category: 1,
                            name: "person in steamy room",
                            variations: ["🧖🏻", "🧖🏼", "🧖🏽", "🧖🏾", "🧖🏿"],
                            version: "5.0"
                        }, {
                            emoji: "🧖‍♂️",
                            category: 1,
                            name: "man in steamy room",
                            variations: ["🧖🏻‍♂️", "🧖🏼‍♂️", "🧖🏽‍♂️", "🧖🏾‍♂️", "🧖🏿‍♂️"],
                            version: "5.0"
                        }, {
                            emoji: "🧖‍♀️",
                            category: 1,
                            name: "woman in steamy room",
                            variations: ["🧖🏻‍♀️", "🧖🏼‍♀️", "🧖🏽‍♀️", "🧖🏾‍♀️", "🧖🏿‍♀️"],
                            version: "5.0"
                        }, {
                            emoji: "🧗",
                            category: 1,
                            name: "person climbing",
                            variations: ["🧗🏻", "🧗🏼", "🧗🏽", "🧗🏾", "🧗🏿"],
                            version: "5.0"
                        }, {
                            emoji: "🧗‍♂️",
                            category: 1,
                            name: "man climbing",
                            variations: ["🧗🏻‍♂️", "🧗🏼‍♂️", "🧗🏽‍♂️", "🧗🏾‍♂️", "🧗🏿‍♂️"],
                            version: "5.0"
                        }, {
                            emoji: "🧗‍♀️",
                            category: 1,
                            name: "woman climbing",
                            variations: ["🧗🏻‍♀️", "🧗🏼‍♀️", "🧗🏽‍♀️", "🧗🏾‍♀️", "🧗🏿‍♀️"],
                            version: "5.0"
                        }, {
                            emoji: "🤺",
                            category: 1,
                            name: "person fencing",
                            version: "3.0"
                        }, {
                            emoji: "🏇",
                            category: 1,
                            name: "horse racing",
                            variations: ["🏇🏻", "🏇🏼", "🏇🏽", "🏇🏾", "🏇🏿"],
                            version: "1.0"
                        }, {
                            emoji: "⛷️",
                            category: 1,
                            name: "skier",
                            version: "1.0"
                        }, {
                            emoji: "🏂",
                            category: 1,
                            name: "snowboarder",
                            variations: ["🏂🏻", "🏂🏼", "🏂🏽", "🏂🏾", "🏂🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🏌️",
                            category: 1,
                            name: "person golfing",
                            variations: ["🏌🏻", "🏌🏼", "🏌🏽", "🏌🏾", "🏌🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🏌️‍♂️",
                            category: 1,
                            name: "man golfing",
                            variations: ["🏌🏻‍♂️", "🏌🏼‍♂️", "🏌🏽‍♂️", "🏌🏾‍♂️", "🏌🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🏌️‍♀️",
                            category: 1,
                            name: "woman golfing",
                            variations: ["🏌🏻‍♀️", "🏌🏼‍♀️", "🏌🏽‍♀️", "🏌🏾‍♀️", "🏌🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🏄",
                            category: 1,
                            name: "person surfing",
                            variations: ["🏄🏻", "🏄🏼", "🏄🏽", "🏄🏾", "🏄🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🏄‍♂️",
                            category: 1,
                            name: "man surfing",
                            variations: ["🏄🏻‍♂️", "🏄🏼‍♂️", "🏄🏽‍♂️", "🏄🏾‍♂️", "🏄🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🏄‍♀️",
                            category: 1,
                            name: "woman surfing",
                            variations: ["🏄🏻‍♀️", "🏄🏼‍♀️", "🏄🏽‍♀️", "🏄🏾‍♀️", "🏄🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🚣",
                            category: 1,
                            name: "person rowing boat",
                            variations: ["🚣🏻", "🚣🏼", "🚣🏽", "🚣🏾", "🚣🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🚣‍♂️",
                            category: 1,
                            name: "man rowing boat",
                            variations: ["🚣🏻‍♂️", "🚣🏼‍♂️", "🚣🏽‍♂️", "🚣🏾‍♂️", "🚣🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🚣‍♀️",
                            category: 1,
                            name: "woman rowing boat",
                            variations: ["🚣🏻‍♀️", "🚣🏼‍♀️", "🚣🏽‍♀️", "🚣🏾‍♀️", "🚣🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🏊",
                            category: 1,
                            name: "person swimming",
                            variations: ["🏊🏻", "🏊🏼", "🏊🏽", "🏊🏾", "🏊🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🏊‍♂️",
                            category: 1,
                            name: "man swimming",
                            variations: ["🏊🏻‍♂️", "🏊🏼‍♂️", "🏊🏽‍♂️", "🏊🏾‍♂️", "🏊🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🏊‍♀️",
                            category: 1,
                            name: "woman swimming",
                            variations: ["🏊🏻‍♀️", "🏊🏼‍♀️", "🏊🏽‍♀️", "🏊🏾‍♀️", "🏊🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "⛹️",
                            category: 1,
                            name: "person bouncing ball",
                            variations: ["⛹🏻", "⛹🏼", "⛹🏽", "⛹🏾", "⛹🏿"],
                            version: "1.0"
                        }, {
                            emoji: "⛹️‍♂️",
                            category: 1,
                            name: "man bouncing ball",
                            variations: ["⛹🏻‍♂️", "⛹🏼‍♂️", "⛹🏽‍♂️", "⛹🏾‍♂️", "⛹🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "⛹️‍♀️",
                            category: 1,
                            name: "woman bouncing ball",
                            variations: ["⛹🏻‍♀️", "⛹🏼‍♀️", "⛹🏽‍♀️", "⛹🏾‍♀️", "⛹🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🏋️",
                            category: 1,
                            name: "person lifting weights",
                            variations: ["🏋🏻", "🏋🏼", "🏋🏽", "🏋🏾", "🏋🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🏋️‍♂️",
                            category: 1,
                            name: "man lifting weights",
                            variations: ["🏋🏻‍♂️", "🏋🏼‍♂️", "🏋🏽‍♂️", "🏋🏾‍♂️", "🏋🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🏋️‍♀️",
                            category: 1,
                            name: "woman lifting weights",
                            variations: ["🏋🏻‍♀️", "🏋🏼‍♀️", "🏋🏽‍♀️", "🏋🏾‍♀️", "🏋🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🚴",
                            category: 1,
                            name: "person biking",
                            variations: ["🚴🏻", "🚴🏼", "🚴🏽", "🚴🏾", "🚴🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🚴‍♂️",
                            category: 1,
                            name: "man biking",
                            variations: ["🚴🏻‍♂️", "🚴🏼‍♂️", "🚴🏽‍♂️", "🚴🏾‍♂️", "🚴🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🚴‍♀️",
                            category: 1,
                            name: "woman biking",
                            variations: ["🚴🏻‍♀️", "🚴🏼‍♀️", "🚴🏽‍♀️", "🚴🏾‍♀️", "🚴🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🚵",
                            category: 1,
                            name: "person mountain biking",
                            variations: ["🚵🏻", "🚵🏼", "🚵🏽", "🚵🏾", "🚵🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🚵‍♂️",
                            category: 1,
                            name: "man mountain biking",
                            variations: ["🚵🏻‍♂️", "🚵🏼‍♂️", "🚵🏽‍♂️", "🚵🏾‍♂️", "🚵🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🚵‍♀️",
                            category: 1,
                            name: "woman mountain biking",
                            variations: ["🚵🏻‍♀️", "🚵🏼‍♀️", "🚵🏽‍♀️", "🚵🏾‍♀️", "🚵🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🤸",
                            category: 1,
                            name: "person cartwheeling",
                            variations: ["🤸🏻", "🤸🏼", "🤸🏽", "🤸🏾", "🤸🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🤸‍♂️",
                            category: 1,
                            name: "man cartwheeling",
                            variations: ["🤸🏻‍♂️", "🤸🏼‍♂️", "🤸🏽‍♂️", "🤸🏾‍♂️", "🤸🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🤸‍♀️",
                            category: 1,
                            name: "woman cartwheeling",
                            variations: ["🤸🏻‍♀️", "🤸🏼‍♀️", "🤸🏽‍♀️", "🤸🏾‍♀️", "🤸🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🤼",
                            category: 1,
                            name: "people wrestling",
                            version: "3.0"
                        }, {
                            emoji: "🤼‍♂️",
                            category: 1,
                            name: "men wrestling",
                            version: "4.0"
                        }, {
                            emoji: "🤼‍♀️",
                            category: 1,
                            name: "women wrestling",
                            version: "4.0"
                        }, {
                            emoji: "🤽",
                            category: 1,
                            name: "person playing water polo",
                            variations: ["🤽🏻", "🤽🏼", "🤽🏽", "🤽🏾", "🤽🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🤽‍♂️",
                            category: 1,
                            name: "man playing water polo",
                            variations: ["🤽🏻‍♂️", "🤽🏼‍♂️", "🤽🏽‍♂️", "🤽🏾‍♂️", "🤽🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🤽‍♀️",
                            category: 1,
                            name: "woman playing water polo",
                            variations: ["🤽🏻‍♀️", "🤽🏼‍♀️", "🤽🏽‍♀️", "🤽🏾‍♀️", "🤽🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🤾",
                            category: 1,
                            name: "person playing handball",
                            variations: ["🤾🏻", "🤾🏼", "🤾🏽", "🤾🏾", "🤾🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🤾‍♂️",
                            category: 1,
                            name: "man playing handball",
                            variations: ["🤾🏻‍♂️", "🤾🏼‍♂️", "🤾🏽‍♂️", "🤾🏾‍♂️", "🤾🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🤾‍♀️",
                            category: 1,
                            name: "woman playing handball",
                            variations: ["🤾🏻‍♀️", "🤾🏼‍♀️", "🤾🏽‍♀️", "🤾🏾‍♀️", "🤾🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🤹",
                            category: 1,
                            name: "person juggling",
                            variations: ["🤹🏻", "🤹🏼", "🤹🏽", "🤹🏾", "🤹🏿"],
                            version: "3.0"
                        }, {
                            emoji: "🤹‍♂️",
                            category: 1,
                            name: "man juggling",
                            variations: ["🤹🏻‍♂️", "🤹🏼‍♂️", "🤹🏽‍♂️", "🤹🏾‍♂️", "🤹🏿‍♂️"],
                            version: "4.0"
                        }, {
                            emoji: "🤹‍♀️",
                            category: 1,
                            name: "woman juggling",
                            variations: ["🤹🏻‍♀️", "🤹🏼‍♀️", "🤹🏽‍♀️", "🤹🏾‍♀️", "🤹🏿‍♀️"],
                            version: "4.0"
                        }, {
                            emoji: "🧘",
                            category: 1,
                            name: "person in lotus position",
                            variations: ["🧘🏻", "🧘🏼", "🧘🏽", "🧘🏾", "🧘🏿"],
                            version: "5.0"
                        }, {
                            emoji: "🧘‍♂️",
                            category: 1,
                            name: "man in lotus position",
                            variations: ["🧘🏻‍♂️", "🧘🏼‍♂️", "🧘🏽‍♂️", "🧘🏾‍♂️", "🧘🏿‍♂️"],
                            version: "5.0"
                        }, {
                            emoji: "🧘‍♀️",
                            category: 1,
                            name: "woman in lotus position",
                            variations: ["🧘🏻‍♀️", "🧘🏼‍♀️", "🧘🏽‍♀️", "🧘🏾‍♀️", "🧘🏿‍♀️"],
                            version: "5.0"
                        }, {
                            emoji: "🛀",
                            category: 1,
                            name: "person taking bath",
                            variations: ["🛀🏻", "🛀🏼", "🛀🏽", "🛀🏾", "🛀🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🛌",
                            category: 1,
                            name: "person in bed",
                            variations: ["🛌🏻", "🛌🏼", "🛌🏽", "🛌🏾", "🛌🏿"],
                            version: "1.0"
                        }, {
                            emoji: "🧑‍🤝‍🧑",
                            category: 1,
                            name: "people holding hands",
                            variations: ["🧑🏻‍🤝‍🧑🏻", "🧑🏻‍🤝‍🧑🏼", "🧑🏻‍🤝‍🧑🏽", "🧑🏻‍🤝‍🧑🏾", "🧑🏻‍🤝‍🧑🏿", "🧑🏼‍🤝‍🧑🏻", "🧑🏼‍🤝‍🧑🏼", "🧑🏼‍🤝‍🧑🏽", "🧑🏼‍🤝‍🧑🏾", "🧑🏼‍🤝‍🧑🏿", "🧑🏽‍🤝‍🧑🏻", "🧑🏽‍🤝‍🧑🏼", "🧑🏽‍🤝‍🧑🏽", "🧑🏽‍🤝‍🧑🏾", "🧑🏽‍🤝‍🧑🏿", "🧑🏾‍🤝‍🧑🏻", "🧑🏾‍🤝‍🧑🏼", "🧑🏾‍🤝‍🧑🏽", "🧑🏾‍🤝‍🧑🏾", "🧑🏾‍🤝‍🧑🏿", "🧑🏿‍🤝‍🧑🏻", "🧑🏿‍🤝‍🧑🏼", "🧑🏿‍🤝‍🧑🏽", "🧑🏿‍🤝‍🧑🏾", "🧑🏿‍🤝‍🧑🏿"],
                            version: "12.0"
                        }, {
                            emoji: "👭",
                            category: 1,
                            name: "women holding hands",
                            variations: ["👭🏻", "👩🏻‍🤝‍👩🏼", "👩🏻‍🤝‍👩🏽", "👩🏻‍🤝‍👩🏾", "👩🏻‍🤝‍👩🏿", "👩🏼‍🤝‍👩🏻", "👭🏼", "👩🏼‍🤝‍👩🏽", "👩🏼‍🤝‍👩🏾", "👩🏼‍🤝‍👩🏿", "👩🏽‍🤝‍👩🏻", "👩🏽‍🤝‍👩🏼", "👭🏽", "👩🏽‍🤝‍👩🏾", "👩🏽‍🤝‍👩🏿", "👩🏾‍🤝‍👩🏻", "👩🏾‍🤝‍👩🏼", "👩🏾‍🤝‍👩🏽", "👭🏾", "👩🏾‍🤝‍👩🏿", "👩🏿‍🤝‍👩🏻", "👩🏿‍🤝‍👩🏼", "👩🏿‍🤝‍👩🏽", "👩🏿‍🤝‍👩🏾", "👭🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👫",
                            category: 1,
                            name: "woman and man holding hands",
                            variations: ["👫🏻", "👩🏻‍🤝‍👨🏼", "👩🏻‍🤝‍👨🏽", "👩🏻‍🤝‍👨🏾", "👩🏻‍🤝‍👨🏿", "👩🏼‍🤝‍👨🏻", "👫🏼", "👩🏼‍🤝‍👨🏽", "👩🏼‍🤝‍👨🏾", "👩🏼‍🤝‍👨🏿", "👩🏽‍🤝‍👨🏻", "👩🏽‍🤝‍👨🏼", "👫🏽", "👩🏽‍🤝‍👨🏾", "👩🏽‍🤝‍👨🏿", "👩🏾‍🤝‍👨🏻", "👩🏾‍🤝‍👨🏼", "👩🏾‍🤝‍👨🏽", "👫🏾", "👩🏾‍🤝‍👨🏿", "👩🏿‍🤝‍👨🏻", "👩🏿‍🤝‍👨🏼", "👩🏿‍🤝‍👨🏽", "👩🏿‍🤝‍👨🏾", "👫🏿"],
                            version: "1.0"
                        }, {
                            emoji: "👬",
                            category: 1,
                            name: "men holding hands",
                            variations: ["👬🏻", "👨🏻‍🤝‍👨🏼", "👨🏻‍🤝‍👨🏽", "👨🏻‍🤝‍👨🏾", "👨🏻‍🤝‍👨🏿", "👨🏼‍🤝‍👨🏻", "👬🏼", "👨🏼‍🤝‍👨🏽", "👨🏼‍🤝‍👨🏾", "👨🏼‍🤝‍👨🏿", "👨🏽‍🤝‍👨🏻", "👨🏽‍🤝‍👨🏼", "👬🏽", "👨🏽‍🤝‍👨🏾", "👨🏽‍🤝‍👨🏿", "👨🏾‍🤝‍👨🏻", "👨🏾‍🤝‍👨🏼", "👨🏾‍🤝‍👨🏽", "👬🏾", "👨🏾‍🤝‍👨🏿", "👨🏿‍🤝‍👨🏻", "👨🏿‍🤝‍👨🏼", "👨🏿‍🤝‍👨🏽", "👨🏿‍🤝‍👨🏾", "👬🏿"],
                            version: "1.0"
                        }, {
                            emoji: "💏",
                            category: 1,
                            name: "kiss",
                            variations: ["👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩"],
                            version: "1.0"
                        }, {
                            emoji: "💑",
                            category: 1,
                            name: "couple with heart",
                            variations: ["👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩"],
                            version: "1.0"
                        }, {
                            emoji: "👪",
                            category: 1,
                            name: "family",
                            version: "1.0"
                        }, {
                            emoji: "👨‍👩‍👦",
                            category: 1,
                            name: "family: man, woman, boy",
                            version: "2.0"
                        }, {
                            emoji: "👨‍👩‍👧",
                            category: 1,
                            name: "family: man, woman, girl",
                            version: "2.0"
                        }, {
                            emoji: "👨‍👩‍👧‍👦",
                            category: 1,
                            name: "family: man, woman, girl, boy",
                            version: "2.0"
                        }, {
                            emoji: "👨‍👩‍👦‍👦",
                            category: 1,
                            name: "family: man, woman, boy, boy",
                            version: "2.0"
                        }, {
                            emoji: "👨‍👩‍👧‍👧",
                            category: 1,
                            name: "family: man, woman, girl, girl",
                            version: "2.0"
                        }, {
                            emoji: "👨‍👨‍👦",
                            category: 1,
                            name: "family: man, man, boy",
                            version: "2.0"
                        }, {
                            emoji: "👨‍👨‍👧",
                            category: 1,
                            name: "family: man, man, girl",
                            version: "2.0"
                        }, {
                            emoji: "👨‍👨‍👧‍👦",
                            category: 1,
                            name: "family: man, man, girl, boy",
                            version: "2.0"
                        }, {
                            emoji: "👨‍👨‍👦‍👦",
                            category: 1,
                            name: "family: man, man, boy, boy",
                            version: "2.0"
                        }, {
                            emoji: "👨‍👨‍👧‍👧",
                            category: 1,
                            name: "family: man, man, girl, girl",
                            version: "2.0"
                        }, {
                            emoji: "👩‍👩‍👦",
                            category: 1,
                            name: "family: woman, woman, boy",
                            version: "2.0"
                        }, {
                            emoji: "👩‍👩‍👧",
                            category: 1,
                            name: "family: woman, woman, girl",
                            version: "2.0"
                        }, {
                            emoji: "👩‍👩‍👧‍👦",
                            category: 1,
                            name: "family: woman, woman, girl, boy",
                            version: "2.0"
                        }, {
                            emoji: "👩‍👩‍👦‍👦",
                            category: 1,
                            name: "family: woman, woman, boy, boy",
                            version: "2.0"
                        }, {
                            emoji: "👩‍👩‍👧‍👧",
                            category: 1,
                            name: "family: woman, woman, girl, girl",
                            version: "2.0"
                        }, {
                            emoji: "👨‍👦",
                            category: 1,
                            name: "family: man, boy",
                            version: "4.0"
                        }, {
                            emoji: "👨‍👦‍👦",
                            category: 1,
                            name: "family: man, boy, boy",
                            version: "4.0"
                        }, {
                            emoji: "👨‍👧",
                            category: 1,
                            name: "family: man, girl",
                            version: "4.0"
                        }, {
                            emoji: "👨‍👧‍👦",
                            category: 1,
                            name: "family: man, girl, boy",
                            version: "4.0"
                        }, {
                            emoji: "👨‍👧‍👧",
                            category: 1,
                            name: "family: man, girl, girl",
                            version: "4.0"
                        }, {
                            emoji: "👩‍👦",
                            category: 1,
                            name: "family: woman, boy",
                            version: "4.0"
                        }, {
                            emoji: "👩‍👦‍👦",
                            category: 1,
                            name: "family: woman, boy, boy",
                            version: "4.0"
                        }, {
                            emoji: "👩‍👧",
                            category: 1,
                            name: "family: woman, girl",
                            version: "4.0"
                        }, {
                            emoji: "👩‍👧‍👦",
                            category: 1,
                            name: "family: woman, girl, boy",
                            version: "4.0"
                        }, {
                            emoji: "👩‍👧‍👧",
                            category: 1,
                            name: "family: woman, girl, girl",
                            version: "4.0"
                        }, {
                            emoji: "🗣️",
                            category: 1,
                            name: "speaking head",
                            version: "1.0"
                        }, {
                            emoji: "👤",
                            category: 1,
                            name: "bust in silhouette",
                            version: "1.0"
                        }, {
                            emoji: "👥",
                            category: 1,
                            name: "busts in silhouette",
                            version: "1.0"
                        }, {
                            emoji: "🫂",
                            category: 1,
                            name: "people hugging",
                            version: "13.0"
                        }, {
                            emoji: "👣",
                            category: 1,
                            name: "footprints",
                            version: "1.0"
                        }, {
                            emoji: "🐵",
                            category: 2,
                            name: "monkey face",
                            version: "1.0"
                        }, {
                            emoji: "🐒",
                            category: 2,
                            name: "monkey",
                            version: "1.0"
                        }, {
                            emoji: "🦍",
                            category: 2,
                            name: "gorilla",
                            version: "3.0"
                        }, {
                            emoji: "🦧",
                            category: 2,
                            name: "orangutan",
                            version: "12.0"
                        }, {
                            emoji: "🐶",
                            category: 2,
                            name: "dog face",
                            version: "1.0"
                        }, {
                            emoji: "🐕",
                            category: 2,
                            name: "dog",
                            version: "1.0"
                        }, {
                            emoji: "🦮",
                            category: 2,
                            name: "guide dog",
                            version: "12.0"
                        }, {
                            emoji: "🐕‍🦺",
                            category: 2,
                            name: "service dog",
                            version: "12.0"
                        }, {
                            emoji: "🐩",
                            category: 2,
                            name: "poodle",
                            version: "1.0"
                        }, {
                            emoji: "🐺",
                            category: 2,
                            name: "wolf",
                            version: "1.0"
                        }, {
                            emoji: "🦊",
                            category: 2,
                            name: "fox",
                            version: "3.0"
                        }, {
                            emoji: "🦝",
                            category: 2,
                            name: "raccoon",
                            version: "11.0"
                        }, {
                            emoji: "🐱",
                            category: 2,
                            name: "cat face",
                            version: "1.0"
                        }, {
                            emoji: "🐈",
                            category: 2,
                            name: "cat",
                            version: "1.0"
                        }, {
                            emoji: "🐈‍⬛",
                            category: 2,
                            name: "black cat",
                            version: "13.0"
                        }, {
                            emoji: "🦁",
                            category: 2,
                            name: "lion",
                            version: "1.0"
                        }, {
                            emoji: "🐯",
                            category: 2,
                            name: "tiger face",
                            version: "1.0"
                        }, {
                            emoji: "🐅",
                            category: 2,
                            name: "tiger",
                            version: "1.0"
                        }, {
                            emoji: "🐆",
                            category: 2,
                            name: "leopard",
                            version: "1.0"
                        }, {
                            emoji: "🐴",
                            category: 2,
                            name: "horse face",
                            version: "1.0"
                        }, {
                            emoji: "🐎",
                            category: 2,
                            name: "horse",
                            version: "1.0"
                        }, {
                            emoji: "🦄",
                            category: 2,
                            name: "unicorn",
                            version: "1.0"
                        }, {
                            emoji: "🦓",
                            category: 2,
                            name: "zebra",
                            version: "5.0"
                        }, {
                            emoji: "🦌",
                            category: 2,
                            name: "deer",
                            version: "3.0"
                        }, {
                            emoji: "🦬",
                            category: 2,
                            name: "bison",
                            version: "13.0"
                        }, {
                            emoji: "🐮",
                            category: 2,
                            name: "cow face",
                            version: "1.0"
                        }, {
                            emoji: "🐂",
                            category: 2,
                            name: "ox",
                            version: "1.0"
                        }, {
                            emoji: "🐃",
                            category: 2,
                            name: "water buffalo",
                            version: "1.0"
                        }, {
                            emoji: "🐄",
                            category: 2,
                            name: "cow",
                            version: "1.0"
                        }, {
                            emoji: "🐷",
                            category: 2,
                            name: "pig face",
                            version: "1.0"
                        }, {
                            emoji: "🐖",
                            category: 2,
                            name: "pig",
                            version: "1.0"
                        }, {
                            emoji: "🐗",
                            category: 2,
                            name: "boar",
                            version: "1.0"
                        }, {
                            emoji: "🐽",
                            category: 2,
                            name: "pig nose",
                            version: "1.0"
                        }, {
                            emoji: "🐏",
                            category: 2,
                            name: "ram",
                            version: "1.0"
                        }, {
                            emoji: "🐑",
                            category: 2,
                            name: "ewe",
                            version: "1.0"
                        }, {
                            emoji: "🐐",
                            category: 2,
                            name: "goat",
                            version: "1.0"
                        }, {
                            emoji: "🐪",
                            category: 2,
                            name: "camel",
                            version: "1.0"
                        }, {
                            emoji: "🐫",
                            category: 2,
                            name: "two-hump camel",
                            version: "1.0"
                        }, {
                            emoji: "🦙",
                            category: 2,
                            name: "llama",
                            version: "11.0"
                        }, {
                            emoji: "🦒",
                            category: 2,
                            name: "giraffe",
                            version: "5.0"
                        }, {
                            emoji: "🐘",
                            category: 2,
                            name: "elephant",
                            version: "1.0"
                        }, {
                            emoji: "🦣",
                            category: 2,
                            name: "mammoth",
                            version: "13.0"
                        }, {
                            emoji: "🦏",
                            category: 2,
                            name: "rhinoceros",
                            version: "3.0"
                        }, {
                            emoji: "🦛",
                            category: 2,
                            name: "hippopotamus",
                            version: "11.0"
                        }, {
                            emoji: "🐭",
                            category: 2,
                            name: "mouse face",
                            version: "1.0"
                        }, {
                            emoji: "🐁",
                            category: 2,
                            name: "mouse",
                            version: "1.0"
                        }, {
                            emoji: "🐀",
                            category: 2,
                            name: "rat",
                            version: "1.0"
                        }, {
                            emoji: "🐹",
                            category: 2,
                            name: "hamster",
                            version: "1.0"
                        }, {
                            emoji: "🐰",
                            category: 2,
                            name: "rabbit face",
                            version: "1.0"
                        }, {
                            emoji: "🐇",
                            category: 2,
                            name: "rabbit",
                            version: "1.0"
                        }, {
                            emoji: "🐿️",
                            category: 2,
                            name: "chipmunk",
                            version: "1.0"
                        }, {
                            emoji: "🦫",
                            category: 2,
                            name: "beaver",
                            version: "13.0"
                        }, {
                            emoji: "🦔",
                            category: 2,
                            name: "hedgehog",
                            version: "5.0"
                        }, {
                            emoji: "🦇",
                            category: 2,
                            name: "bat",
                            version: "3.0"
                        }, {
                            emoji: "🐻",
                            category: 2,
                            name: "bear",
                            version: "1.0"
                        }, {
                            emoji: "🐻‍❄️",
                            category: 2,
                            name: "polar bear",
                            version: "13.0"
                        }, {
                            emoji: "🐨",
                            category: 2,
                            name: "koala",
                            version: "1.0"
                        }, {
                            emoji: "🐼",
                            category: 2,
                            name: "panda",
                            version: "1.0"
                        }, {
                            emoji: "🦥",
                            category: 2,
                            name: "sloth",
                            version: "12.0"
                        }, {
                            emoji: "🦦",
                            category: 2,
                            name: "otter",
                            version: "12.0"
                        }, {
                            emoji: "🦨",
                            category: 2,
                            name: "skunk",
                            version: "12.0"
                        }, {
                            emoji: "🦘",
                            category: 2,
                            name: "kangaroo",
                            version: "11.0"
                        }, {
                            emoji: "🦡",
                            category: 2,
                            name: "badger",
                            version: "11.0"
                        }, {
                            emoji: "🐾",
                            category: 2,
                            name: "paw prints",
                            version: "1.0"
                        }, {
                            emoji: "🦃",
                            category: 2,
                            name: "turkey",
                            version: "1.0"
                        }, {
                            emoji: "🐔",
                            category: 2,
                            name: "chicken",
                            version: "1.0"
                        }, {
                            emoji: "🐓",
                            category: 2,
                            name: "rooster",
                            version: "1.0"
                        }, {
                            emoji: "🐣",
                            category: 2,
                            name: "hatching chick",
                            version: "1.0"
                        }, {
                            emoji: "🐤",
                            category: 2,
                            name: "baby chick",
                            version: "1.0"
                        }, {
                            emoji: "🐥",
                            category: 2,
                            name: "front-facing baby chick",
                            version: "1.0"
                        }, {
                            emoji: "🐦",
                            category: 2,
                            name: "bird",
                            version: "1.0"
                        }, {
                            emoji: "🐧",
                            category: 2,
                            name: "penguin",
                            version: "1.0"
                        }, {
                            emoji: "🕊️",
                            category: 2,
                            name: "dove",
                            version: "1.0"
                        }, {
                            emoji: "🦅",
                            category: 2,
                            name: "eagle",
                            version: "3.0"
                        }, {
                            emoji: "🦆",
                            category: 2,
                            name: "duck",
                            version: "3.0"
                        }, {
                            emoji: "🦢",
                            category: 2,
                            name: "swan",
                            version: "11.0"
                        }, {
                            emoji: "🦉",
                            category: 2,
                            name: "owl",
                            version: "3.0"
                        }, {
                            emoji: "🦤",
                            category: 2,
                            name: "dodo",
                            version: "13.0"
                        }, {
                            emoji: "🪶",
                            category: 2,
                            name: "feather",
                            version: "13.0"
                        }, {
                            emoji: "🦩",
                            category: 2,
                            name: "flamingo",
                            version: "12.0"
                        }, {
                            emoji: "🦚",
                            category: 2,
                            name: "peacock",
                            version: "11.0"
                        }, {
                            emoji: "🦜",
                            category: 2,
                            name: "parrot",
                            version: "11.0"
                        }, {
                            emoji: "🐸",
                            category: 2,
                            name: "frog",
                            version: "1.0"
                        }, {
                            emoji: "🐊",
                            category: 2,
                            name: "crocodile",
                            version: "1.0"
                        }, {
                            emoji: "🐢",
                            category: 2,
                            name: "turtle",
                            version: "1.0"
                        }, {
                            emoji: "🦎",
                            category: 2,
                            name: "lizard",
                            version: "3.0"
                        }, {
                            emoji: "🐍",
                            category: 2,
                            name: "snake",
                            version: "1.0"
                        }, {
                            emoji: "🐲",
                            category: 2,
                            name: "dragon face",
                            version: "1.0"
                        }, {
                            emoji: "🐉",
                            category: 2,
                            name: "dragon",
                            version: "1.0"
                        }, {
                            emoji: "🦕",
                            category: 2,
                            name: "sauropod",
                            version: "5.0"
                        }, {
                            emoji: "🦖",
                            category: 2,
                            name: "T-Rex",
                            version: "5.0"
                        }, {
                            emoji: "🐳",
                            category: 2,
                            name: "spouting whale",
                            version: "1.0"
                        }, {
                            emoji: "🐋",
                            category: 2,
                            name: "whale",
                            version: "1.0"
                        }, {
                            emoji: "🐬",
                            category: 2,
                            name: "dolphin",
                            version: "1.0"
                        }, {
                            emoji: "🦭",
                            category: 2,
                            name: "seal",
                            version: "13.0"
                        }, {
                            emoji: "🐟",
                            category: 2,
                            name: "fish",
                            version: "1.0"
                        }, {
                            emoji: "🐠",
                            category: 2,
                            name: "tropical fish",
                            version: "1.0"
                        }, {
                            emoji: "🐡",
                            category: 2,
                            name: "blowfish",
                            version: "1.0"
                        }, {
                            emoji: "🦈",
                            category: 2,
                            name: "shark",
                            version: "3.0"
                        }, {
                            emoji: "🐙",
                            category: 2,
                            name: "octopus",
                            version: "1.0"
                        }, {
                            emoji: "🐚",
                            category: 2,
                            name: "spiral shell",
                            version: "1.0"
                        }, {
                            emoji: "🐌",
                            category: 2,
                            name: "snail",
                            version: "1.0"
                        }, {
                            emoji: "🦋",
                            category: 2,
                            name: "butterfly",
                            version: "3.0"
                        }, {
                            emoji: "🐛",
                            category: 2,
                            name: "bug",
                            version: "1.0"
                        }, {
                            emoji: "🐜",
                            category: 2,
                            name: "ant",
                            version: "1.0"
                        }, {
                            emoji: "🐝",
                            category: 2,
                            name: "honeybee",
                            version: "1.0"
                        }, {
                            emoji: "🪲",
                            category: 2,
                            name: "beetle",
                            version: "13.0"
                        }, {
                            emoji: "🐞",
                            category: 2,
                            name: "lady beetle",
                            version: "1.0"
                        }, {
                            emoji: "🦗",
                            category: 2,
                            name: "cricket",
                            version: "5.0"
                        }, {
                            emoji: "🪳",
                            category: 2,
                            name: "cockroach",
                            version: "13.0"
                        }, {
                            emoji: "🕷️",
                            category: 2,
                            name: "spider",
                            version: "1.0"
                        }, {
                            emoji: "🕸️",
                            category: 2,
                            name: "spider web",
                            version: "1.0"
                        }, {
                            emoji: "🦂",
                            category: 2,
                            name: "scorpion",
                            version: "1.0"
                        }, {
                            emoji: "🦟",
                            category: 2,
                            name: "mosquito",
                            version: "11.0"
                        }, {
                            emoji: "🪰",
                            category: 2,
                            name: "fly",
                            version: "13.0"
                        }, {
                            emoji: "🪱",
                            category: 2,
                            name: "worm",
                            version: "13.0"
                        }, {
                            emoji: "🦠",
                            category: 2,
                            name: "microbe",
                            version: "11.0"
                        }, {
                            emoji: "💐",
                            category: 2,
                            name: "bouquet",
                            version: "1.0"
                        }, {
                            emoji: "🌸",
                            category: 2,
                            name: "cherry blossom",
                            version: "1.0"
                        }, {
                            emoji: "💮",
                            category: 2,
                            name: "white flower",
                            version: "1.0"
                        }, {
                            emoji: "🏵️",
                            category: 2,
                            name: "rosette",
                            version: "1.0"
                        }, {
                            emoji: "🌹",
                            category: 2,
                            name: "rose",
                            version: "1.0"
                        }, {
                            emoji: "🥀",
                            category: 2,
                            name: "wilted flower",
                            version: "3.0"
                        }, {
                            emoji: "🌺",
                            category: 2,
                            name: "hibiscus",
                            version: "1.0"
                        }, {
                            emoji: "🌻",
                            category: 2,
                            name: "sunflower",
                            version: "1.0"
                        }, {
                            emoji: "🌼",
                            category: 2,
                            name: "blossom",
                            version: "1.0"
                        }, {
                            emoji: "🌷",
                            category: 2,
                            name: "tulip",
                            version: "1.0"
                        }, {
                            emoji: "🌱",
                            category: 2,
                            name: "seedling",
                            version: "1.0"
                        }, {
                            emoji: "🪴",
                            category: 2,
                            name: "potted plant",
                            version: "13.0"
                        }, {
                            emoji: "🌲",
                            category: 2,
                            name: "evergreen tree",
                            version: "1.0"
                        }, {
                            emoji: "🌳",
                            category: 2,
                            name: "deciduous tree",
                            version: "1.0"
                        }, {
                            emoji: "🌴",
                            category: 2,
                            name: "palm tree",
                            version: "1.0"
                        }, {
                            emoji: "🌵",
                            category: 2,
                            name: "cactus",
                            version: "1.0"
                        }, {
                            emoji: "🌾",
                            category: 2,
                            name: "sheaf of rice",
                            version: "1.0"
                        }, {
                            emoji: "🌿",
                            category: 2,
                            name: "herb",
                            version: "1.0"
                        }, {
                            emoji: "☘️",
                            category: 2,
                            name: "shamrock",
                            version: "1.0"
                        }, {
                            emoji: "🍀",
                            category: 2,
                            name: "four leaf clover",
                            version: "1.0"
                        }, {
                            emoji: "🍁",
                            category: 2,
                            name: "maple leaf",
                            version: "1.0"
                        }, {
                            emoji: "🍂",
                            category: 2,
                            name: "fallen leaf",
                            version: "1.0"
                        }, {
                            emoji: "🍃",
                            category: 2,
                            name: "leaf fluttering in wind",
                            version: "1.0"
                        }, {
                            emoji: "🍇",
                            category: 3,
                            name: "grapes",
                            version: "1.0"
                        }, {
                            emoji: "🍈",
                            category: 3,
                            name: "melon",
                            version: "1.0"
                        }, {
                            emoji: "🍉",
                            category: 3,
                            name: "watermelon",
                            version: "1.0"
                        }, {
                            emoji: "🍊",
                            category: 3,
                            name: "tangerine",
                            version: "1.0"
                        }, {
                            emoji: "🍋",
                            category: 3,
                            name: "lemon",
                            version: "1.0"
                        }, {
                            emoji: "🍌",
                            category: 3,
                            name: "banana",
                            version: "1.0"
                        }, {
                            emoji: "🍍",
                            category: 3,
                            name: "pineapple",
                            version: "1.0"
                        }, {
                            emoji: "🥭",
                            category: 3,
                            name: "mango",
                            version: "11.0"
                        }, {
                            emoji: "🍎",
                            category: 3,
                            name: "red apple",
                            version: "1.0"
                        }, {
                            emoji: "🍏",
                            category: 3,
                            name: "green apple",
                            version: "1.0"
                        }, {
                            emoji: "🍐",
                            category: 3,
                            name: "pear",
                            version: "1.0"
                        }, {
                            emoji: "🍑",
                            category: 3,
                            name: "peach",
                            version: "1.0"
                        }, {
                            emoji: "🍒",
                            category: 3,
                            name: "cherries",
                            version: "1.0"
                        }, {
                            emoji: "🍓",
                            category: 3,
                            name: "strawberry",
                            version: "1.0"
                        }, {
                            emoji: "🫐",
                            category: 3,
                            name: "blueberries",
                            version: "13.0"
                        }, {
                            emoji: "🥝",
                            category: 3,
                            name: "kiwi fruit",
                            version: "3.0"
                        }, {
                            emoji: "🍅",
                            category: 3,
                            name: "tomato",
                            version: "1.0"
                        }, {
                            emoji: "🫒",
                            category: 3,
                            name: "olive",
                            version: "13.0"
                        }, {
                            emoji: "🥥",
                            category: 3,
                            name: "coconut",
                            version: "5.0"
                        }, {
                            emoji: "🥑",
                            category: 3,
                            name: "avocado",
                            version: "3.0"
                        }, {
                            emoji: "🍆",
                            category: 3,
                            name: "eggplant",
                            version: "1.0"
                        }, {
                            emoji: "🥔",
                            category: 3,
                            name: "potato",
                            version: "3.0"
                        }, {
                            emoji: "🥕",
                            category: 3,
                            name: "carrot",
                            version: "3.0"
                        }, {
                            emoji: "🌽",
                            category: 3,
                            name: "ear of corn",
                            version: "1.0"
                        }, {
                            emoji: "🌶️",
                            category: 3,
                            name: "hot pepper",
                            version: "1.0"
                        }, {
                            emoji: "🫑",
                            category: 3,
                            name: "bell pepper",
                            version: "13.0"
                        }, {
                            emoji: "🥒",
                            category: 3,
                            name: "cucumber",
                            version: "3.0"
                        }, {
                            emoji: "🥬",
                            category: 3,
                            name: "leafy green",
                            version: "11.0"
                        }, {
                            emoji: "🥦",
                            category: 3,
                            name: "broccoli",
                            version: "5.0"
                        }, {
                            emoji: "🧄",
                            category: 3,
                            name: "garlic",
                            version: "12.0"
                        }, {
                            emoji: "🧅",
                            category: 3,
                            name: "onion",
                            version: "12.0"
                        }, {
                            emoji: "🍄",
                            category: 3,
                            name: "mushroom",
                            version: "1.0"
                        }, {
                            emoji: "🥜",
                            category: 3,
                            name: "peanuts",
                            version: "3.0"
                        }, {
                            emoji: "🌰",
                            category: 3,
                            name: "chestnut",
                            version: "1.0"
                        }, {
                            emoji: "🍞",
                            category: 3,
                            name: "bread",
                            version: "1.0"
                        }, {
                            emoji: "🥐",
                            category: 3,
                            name: "croissant",
                            version: "3.0"
                        }, {
                            emoji: "🥖",
                            category: 3,
                            name: "baguette bread",
                            version: "3.0"
                        }, {
                            emoji: "🫓",
                            category: 3,
                            name: "flatbread",
                            version: "13.0"
                        }, {
                            emoji: "🥨",
                            category: 3,
                            name: "pretzel",
                            version: "5.0"
                        }, {
                            emoji: "🥯",
                            category: 3,
                            name: "bagel",
                            version: "11.0"
                        }, {
                            emoji: "🥞",
                            category: 3,
                            name: "pancakes",
                            version: "3.0"
                        }, {
                            emoji: "🧇",
                            category: 3,
                            name: "waffle",
                            version: "12.0"
                        }, {
                            emoji: "🧀",
                            category: 3,
                            name: "cheese wedge",
                            version: "1.0"
                        }, {
                            emoji: "🍖",
                            category: 3,
                            name: "meat on bone",
                            version: "1.0"
                        }, {
                            emoji: "🍗",
                            category: 3,
                            name: "poultry leg",
                            version: "1.0"
                        }, {
                            emoji: "🥩",
                            category: 3,
                            name: "cut of meat",
                            version: "5.0"
                        }, {
                            emoji: "🥓",
                            category: 3,
                            name: "bacon",
                            version: "3.0"
                        }, {
                            emoji: "🍔",
                            category: 3,
                            name: "hamburger",
                            version: "1.0"
                        }, {
                            emoji: "🍟",
                            category: 3,
                            name: "french fries",
                            version: "1.0"
                        }, {
                            emoji: "🍕",
                            category: 3,
                            name: "pizza",
                            version: "1.0"
                        }, {
                            emoji: "🌭",
                            category: 3,
                            name: "hot dog",
                            version: "1.0"
                        }, {
                            emoji: "🥪",
                            category: 3,
                            name: "sandwich",
                            version: "5.0"
                        }, {
                            emoji: "🌮",
                            category: 3,
                            name: "taco",
                            version: "1.0"
                        }, {
                            emoji: "🌯",
                            category: 3,
                            name: "burrito",
                            version: "1.0"
                        }, {
                            emoji: "🫔",
                            category: 3,
                            name: "tamale",
                            version: "13.0"
                        }, {
                            emoji: "🥙",
                            category: 3,
                            name: "stuffed flatbread",
                            version: "3.0"
                        }, {
                            emoji: "🧆",
                            category: 3,
                            name: "falafel",
                            version: "12.0"
                        }, {
                            emoji: "🥚",
                            category: 3,
                            name: "egg",
                            version: "3.0"
                        }, {
                            emoji: "🍳",
                            category: 3,
                            name: "cooking",
                            version: "1.0"
                        }, {
                            emoji: "🥘",
                            category: 3,
                            name: "shallow pan of food",
                            version: "3.0"
                        }, {
                            emoji: "🍲",
                            category: 3,
                            name: "pot of food",
                            version: "1.0"
                        }, {
                            emoji: "🫕",
                            category: 3,
                            name: "fondue",
                            version: "13.0"
                        }, {
                            emoji: "🥣",
                            category: 3,
                            name: "bowl with spoon",
                            version: "5.0"
                        }, {
                            emoji: "🥗",
                            category: 3,
                            name: "green salad",
                            version: "3.0"
                        }, {
                            emoji: "🍿",
                            category: 3,
                            name: "popcorn",
                            version: "1.0"
                        }, {
                            emoji: "🧈",
                            category: 3,
                            name: "butter",
                            version: "12.0"
                        }, {
                            emoji: "🧂",
                            category: 3,
                            name: "salt",
                            version: "11.0"
                        }, {
                            emoji: "🥫",
                            category: 3,
                            name: "canned food",
                            version: "5.0"
                        }, {
                            emoji: "🍱",
                            category: 3,
                            name: "bento box",
                            version: "1.0"
                        }, {
                            emoji: "🍘",
                            category: 3,
                            name: "rice cracker",
                            version: "1.0"
                        }, {
                            emoji: "🍙",
                            category: 3,
                            name: "rice ball",
                            version: "1.0"
                        }, {
                            emoji: "🍚",
                            category: 3,
                            name: "cooked rice",
                            version: "1.0"
                        }, {
                            emoji: "🍛",
                            category: 3,
                            name: "curry rice",
                            version: "1.0"
                        }, {
                            emoji: "🍜",
                            category: 3,
                            name: "steaming bowl",
                            version: "1.0"
                        }, {
                            emoji: "🍝",
                            category: 3,
                            name: "spaghetti",
                            version: "1.0"
                        }, {
                            emoji: "🍠",
                            category: 3,
                            name: "roasted sweet potato",
                            version: "1.0"
                        }, {
                            emoji: "🍢",
                            category: 3,
                            name: "oden",
                            version: "1.0"
                        }, {
                            emoji: "🍣",
                            category: 3,
                            name: "sushi",
                            version: "1.0"
                        }, {
                            emoji: "🍤",
                            category: 3,
                            name: "fried shrimp",
                            version: "1.0"
                        }, {
                            emoji: "🍥",
                            category: 3,
                            name: "fish cake with swirl",
                            version: "1.0"
                        }, {
                            emoji: "🥮",
                            category: 3,
                            name: "moon cake",
                            version: "11.0"
                        }, {
                            emoji: "🍡",
                            category: 3,
                            name: "dango",
                            version: "1.0"
                        }, {
                            emoji: "🥟",
                            category: 3,
                            name: "dumpling",
                            version: "5.0"
                        }, {
                            emoji: "🥠",
                            category: 3,
                            name: "fortune cookie",
                            version: "5.0"
                        }, {
                            emoji: "🥡",
                            category: 3,
                            name: "takeout box",
                            version: "5.0"
                        }, {
                            emoji: "🦀",
                            category: 3,
                            name: "crab",
                            version: "1.0"
                        }, {
                            emoji: "🦞",
                            category: 3,
                            name: "lobster",
                            version: "11.0"
                        }, {
                            emoji: "🦐",
                            category: 3,
                            name: "shrimp",
                            version: "3.0"
                        }, {
                            emoji: "🦑",
                            category: 3,
                            name: "squid",
                            version: "3.0"
                        }, {
                            emoji: "🦪",
                            category: 3,
                            name: "oyster",
                            version: "12.0"
                        }, {
                            emoji: "🍦",
                            category: 3,
                            name: "soft ice cream",
                            version: "1.0"
                        }, {
                            emoji: "🍧",
                            category: 3,
                            name: "shaved ice",
                            version: "1.0"
                        }, {
                            emoji: "🍨",
                            category: 3,
                            name: "ice cream",
                            version: "1.0"
                        }, {
                            emoji: "🍩",
                            category: 3,
                            name: "doughnut",
                            version: "1.0"
                        }, {
                            emoji: "🍪",
                            category: 3,
                            name: "cookie",
                            version: "1.0"
                        }, {
                            emoji: "🎂",
                            category: 3,
                            name: "birthday cake",
                            version: "1.0"
                        }, {
                            emoji: "🍰",
                            category: 3,
                            name: "shortcake",
                            version: "1.0"
                        }, {
                            emoji: "🧁",
                            category: 3,
                            name: "cupcake",
                            version: "11.0"
                        }, {
                            emoji: "🥧",
                            category: 3,
                            name: "pie",
                            version: "5.0"
                        }, {
                            emoji: "🍫",
                            category: 3,
                            name: "chocolate bar",
                            version: "1.0"
                        }, {
                            emoji: "🍬",
                            category: 3,
                            name: "candy",
                            version: "1.0"
                        }, {
                            emoji: "🍭",
                            category: 3,
                            name: "lollipop",
                            version: "1.0"
                        }, {
                            emoji: "🍮",
                            category: 3,
                            name: "custard",
                            version: "1.0"
                        }, {
                            emoji: "🍯",
                            category: 3,
                            name: "honey pot",
                            version: "1.0"
                        }, {
                            emoji: "🍼",
                            category: 3,
                            name: "baby bottle",
                            version: "1.0"
                        }, {
                            emoji: "🥛",
                            category: 3,
                            name: "glass of milk",
                            version: "3.0"
                        }, {
                            emoji: "☕",
                            category: 3,
                            name: "hot beverage",
                            version: "1.0"
                        }, {
                            emoji: "🫖",
                            category: 3,
                            name: "teapot",
                            version: "13.0"
                        }, {
                            emoji: "🍵",
                            category: 3,
                            name: "teacup without handle",
                            version: "1.0"
                        }, {
                            emoji: "🍶",
                            category: 3,
                            name: "sake",
                            version: "1.0"
                        }, {
                            emoji: "🍾",
                            category: 3,
                            name: "bottle with popping cork",
                            version: "1.0"
                        }, {
                            emoji: "🍷",
                            category: 3,
                            name: "wine glass",
                            version: "1.0"
                        }, {
                            emoji: "🍸",
                            category: 3,
                            name: "cocktail glass",
                            version: "1.0"
                        }, {
                            emoji: "🍹",
                            category: 3,
                            name: "tropical drink",
                            version: "1.0"
                        }, {
                            emoji: "🍺",
                            category: 3,
                            name: "beer mug",
                            version: "1.0"
                        }, {
                            emoji: "🍻",
                            category: 3,
                            name: "clinking beer mugs",
                            version: "1.0"
                        }, {
                            emoji: "🥂",
                            category: 3,
                            name: "clinking glasses",
                            version: "3.0"
                        }, {
                            emoji: "🥃",
                            category: 3,
                            name: "tumbler glass",
                            version: "3.0"
                        }, {
                            emoji: "🥤",
                            category: 3,
                            name: "cup with straw",
                            version: "5.0"
                        }, {
                            emoji: "🧋",
                            category: 3,
                            name: "bubble tea",
                            version: "13.0"
                        }, {
                            emoji: "🧃",
                            category: 3,
                            name: "beverage box",
                            version: "12.0"
                        }, {
                            emoji: "🧉",
                            category: 3,
                            name: "mate",
                            version: "12.0"
                        }, {
                            emoji: "🧊",
                            category: 3,
                            name: "ice",
                            version: "12.0"
                        }, {
                            emoji: "🥢",
                            category: 3,
                            name: "chopsticks",
                            version: "5.0"
                        }, {
                            emoji: "🍽️",
                            category: 3,
                            name: "fork and knife with plate",
                            version: "1.0"
                        }, {
                            emoji: "🍴",
                            category: 3,
                            name: "fork and knife",
                            version: "1.0"
                        }, {
                            emoji: "🥄",
                            category: 3,
                            name: "spoon",
                            version: "3.0"
                        }, {
                            emoji: "🔪",
                            category: 3,
                            name: "kitchen knife",
                            version: "1.0"
                        }, {
                            emoji: "🏺",
                            category: 3,
                            name: "amphora",
                            version: "1.0"
                        }, {
                            emoji: "🌍",
                            category: 4,
                            name: "globe showing Europe-Africa",
                            version: "1.0"
                        }, {
                            emoji: "🌎",
                            category: 4,
                            name: "globe showing Americas",
                            version: "1.0"
                        }, {
                            emoji: "🌏",
                            category: 4,
                            name: "globe showing Asia-Australia",
                            version: "1.0"
                        }, {
                            emoji: "🌐",
                            category: 4,
                            name: "globe with meridians",
                            version: "1.0"
                        }, {
                            emoji: "🗺️",
                            category: 4,
                            name: "world map",
                            version: "1.0"
                        }, {
                            emoji: "🗾",
                            category: 4,
                            name: "map of Japan",
                            version: "1.0"
                        }, {
                            emoji: "🧭",
                            category: 4,
                            name: "compass",
                            version: "11.0"
                        }, {
                            emoji: "🏔️",
                            category: 4,
                            name: "snow-capped mountain",
                            version: "1.0"
                        }, {
                            emoji: "⛰️",
                            category: 4,
                            name: "mountain",
                            version: "1.0"
                        }, {
                            emoji: "🌋",
                            category: 4,
                            name: "volcano",
                            version: "1.0"
                        }, {
                            emoji: "🗻",
                            category: 4,
                            name: "mount fuji",
                            version: "1.0"
                        }, {
                            emoji: "🏕️",
                            category: 4,
                            name: "camping",
                            version: "1.0"
                        }, {
                            emoji: "🏖️",
                            category: 4,
                            name: "beach with umbrella",
                            version: "1.0"
                        }, {
                            emoji: "🏜️",
                            category: 4,
                            name: "desert",
                            version: "1.0"
                        }, {
                            emoji: "🏝️",
                            category: 4,
                            name: "desert island",
                            version: "1.0"
                        }, {
                            emoji: "🏞️",
                            category: 4,
                            name: "national park",
                            version: "1.0"
                        }, {
                            emoji: "🏟️",
                            category: 4,
                            name: "stadium",
                            version: "1.0"
                        }, {
                            emoji: "🏛️",
                            category: 4,
                            name: "classical building",
                            version: "1.0"
                        }, {
                            emoji: "🏗️",
                            category: 4,
                            name: "building construction",
                            version: "1.0"
                        }, {
                            emoji: "🧱",
                            category: 4,
                            name: "brick",
                            version: "11.0"
                        }, {
                            emoji: "🪨",
                            category: 4,
                            name: "rock",
                            version: "13.0"
                        }, {
                            emoji: "🪵",
                            category: 4,
                            name: "wood",
                            version: "13.0"
                        }, {
                            emoji: "🛖",
                            category: 4,
                            name: "hut",
                            version: "13.0"
                        }, {
                            emoji: "🏘️",
                            category: 4,
                            name: "houses",
                            version: "1.0"
                        }, {
                            emoji: "🏚️",
                            category: 4,
                            name: "derelict house",
                            version: "1.0"
                        }, {
                            emoji: "🏠",
                            category: 4,
                            name: "house",
                            version: "1.0"
                        }, {
                            emoji: "🏡",
                            category: 4,
                            name: "house with garden",
                            version: "1.0"
                        }, {
                            emoji: "🏢",
                            category: 4,
                            name: "office building",
                            version: "1.0"
                        }, {
                            emoji: "🏣",
                            category: 4,
                            name: "Japanese post office",
                            version: "1.0"
                        }, {
                            emoji: "🏤",
                            category: 4,
                            name: "post office",
                            version: "1.0"
                        }, {
                            emoji: "🏥",
                            category: 4,
                            name: "hospital",
                            version: "1.0"
                        }, {
                            emoji: "🏦",
                            category: 4,
                            name: "bank",
                            version: "1.0"
                        }, {
                            emoji: "🏨",
                            category: 4,
                            name: "hotel",
                            version: "1.0"
                        }, {
                            emoji: "🏩",
                            category: 4,
                            name: "love hotel",
                            version: "1.0"
                        }, {
                            emoji: "🏪",
                            category: 4,
                            name: "convenience store",
                            version: "1.0"
                        }, {
                            emoji: "🏫",
                            category: 4,
                            name: "school",
                            version: "1.0"
                        }, {
                            emoji: "🏬",
                            category: 4,
                            name: "department store",
                            version: "1.0"
                        }, {
                            emoji: "🏭",
                            category: 4,
                            name: "factory",
                            version: "1.0"
                        }, {
                            emoji: "🏯",
                            category: 4,
                            name: "Japanese castle",
                            version: "1.0"
                        }, {
                            emoji: "🏰",
                            category: 4,
                            name: "castle",
                            version: "1.0"
                        }, {
                            emoji: "💒",
                            category: 4,
                            name: "wedding",
                            version: "1.0"
                        }, {
                            emoji: "🗼",
                            category: 4,
                            name: "Tokyo tower",
                            version: "1.0"
                        }, {
                            emoji: "🗽",
                            category: 4,
                            name: "Statue of Liberty",
                            version: "1.0"
                        }, {
                            emoji: "⛪",
                            category: 4,
                            name: "church",
                            version: "1.0"
                        }, {
                            emoji: "🕌",
                            category: 4,
                            name: "mosque",
                            version: "1.0"
                        }, {
                            emoji: "🛕",
                            category: 4,
                            name: "hindu temple",
                            version: "12.0"
                        }, {
                            emoji: "🕍",
                            category: 4,
                            name: "synagogue",
                            version: "1.0"
                        }, {
                            emoji: "⛩️",
                            category: 4,
                            name: "shinto shrine",
                            version: "1.0"
                        }, {
                            emoji: "🕋",
                            category: 4,
                            name: "kaaba",
                            version: "1.0"
                        }, {
                            emoji: "⛲",
                            category: 4,
                            name: "fountain",
                            version: "1.0"
                        }, {
                            emoji: "⛺",
                            category: 4,
                            name: "tent",
                            version: "1.0"
                        }, {
                            emoji: "🌁",
                            category: 4,
                            name: "foggy",
                            version: "1.0"
                        }, {
                            emoji: "🌃",
                            category: 4,
                            name: "night with stars",
                            version: "1.0"
                        }, {
                            emoji: "🏙️",
                            category: 4,
                            name: "cityscape",
                            version: "1.0"
                        }, {
                            emoji: "🌄",
                            category: 4,
                            name: "sunrise over mountains",
                            version: "1.0"
                        }, {
                            emoji: "🌅",
                            category: 4,
                            name: "sunrise",
                            version: "1.0"
                        }, {
                            emoji: "🌆",
                            category: 4,
                            name: "cityscape at dusk",
                            version: "1.0"
                        }, {
                            emoji: "🌇",
                            category: 4,
                            name: "sunset",
                            version: "1.0"
                        }, {
                            emoji: "🌉",
                            category: 4,
                            name: "bridge at night",
                            version: "1.0"
                        }, {
                            emoji: "♨️",
                            category: 4,
                            name: "hot springs",
                            version: "1.0"
                        }, {
                            emoji: "🎠",
                            category: 4,
                            name: "carousel horse",
                            version: "1.0"
                        }, {
                            emoji: "🎡",
                            category: 4,
                            name: "ferris wheel",
                            version: "1.0"
                        }, {
                            emoji: "🎢",
                            category: 4,
                            name: "roller coaster",
                            version: "1.0"
                        }, {
                            emoji: "💈",
                            category: 4,
                            name: "barber pole",
                            version: "1.0"
                        }, {
                            emoji: "🎪",
                            category: 4,
                            name: "circus tent",
                            version: "1.0"
                        }, {
                            emoji: "🚂",
                            category: 4,
                            name: "locomotive",
                            version: "1.0"
                        }, {
                            emoji: "🚃",
                            category: 4,
                            name: "railway car",
                            version: "1.0"
                        }, {
                            emoji: "🚄",
                            category: 4,
                            name: "high-speed train",
                            version: "1.0"
                        }, {
                            emoji: "🚅",
                            category: 4,
                            name: "bullet train",
                            version: "1.0"
                        }, {
                            emoji: "🚆",
                            category: 4,
                            name: "train",
                            version: "1.0"
                        }, {
                            emoji: "🚇",
                            category: 4,
                            name: "metro",
                            version: "1.0"
                        }, {
                            emoji: "🚈",
                            category: 4,
                            name: "light rail",
                            version: "1.0"
                        }, {
                            emoji: "🚉",
                            category: 4,
                            name: "station",
                            version: "1.0"
                        }, {
                            emoji: "🚊",
                            category: 4,
                            name: "tram",
                            version: "1.0"
                        }, {
                            emoji: "🚝",
                            category: 4,
                            name: "monorail",
                            version: "1.0"
                        }, {
                            emoji: "🚞",
                            category: 4,
                            name: "mountain railway",
                            version: "1.0"
                        }, {
                            emoji: "🚋",
                            category: 4,
                            name: "tram car",
                            version: "1.0"
                        }, {
                            emoji: "🚌",
                            category: 4,
                            name: "bus",
                            version: "1.0"
                        }, {
                            emoji: "🚍",
                            category: 4,
                            name: "oncoming bus",
                            version: "1.0"
                        }, {
                            emoji: "🚎",
                            category: 4,
                            name: "trolleybus",
                            version: "1.0"
                        }, {
                            emoji: "🚐",
                            category: 4,
                            name: "minibus",
                            version: "1.0"
                        }, {
                            emoji: "🚑",
                            category: 4,
                            name: "ambulance",
                            version: "1.0"
                        }, {
                            emoji: "🚒",
                            category: 4,
                            name: "fire engine",
                            version: "1.0"
                        }, {
                            emoji: "🚓",
                            category: 4,
                            name: "police car",
                            version: "1.0"
                        }, {
                            emoji: "🚔",
                            category: 4,
                            name: "oncoming police car",
                            version: "1.0"
                        }, {
                            emoji: "🚕",
                            category: 4,
                            name: "taxi",
                            version: "1.0"
                        }, {
                            emoji: "🚖",
                            category: 4,
                            name: "oncoming taxi",
                            version: "1.0"
                        }, {
                            emoji: "🚗",
                            category: 4,
                            name: "automobile",
                            version: "1.0"
                        }, {
                            emoji: "🚘",
                            category: 4,
                            name: "oncoming automobile",
                            version: "1.0"
                        }, {
                            emoji: "🚙",
                            category: 4,
                            name: "sport utility vehicle",
                            version: "1.0"
                        }, {
                            emoji: "🛻",
                            category: 4,
                            name: "pickup truck",
                            version: "13.0"
                        }, {
                            emoji: "🚚",
                            category: 4,
                            name: "delivery truck",
                            version: "1.0"
                        }, {
                            emoji: "🚛",
                            category: 4,
                            name: "articulated lorry",
                            version: "1.0"
                        }, {
                            emoji: "🚜",
                            category: 4,
                            name: "tractor",
                            version: "1.0"
                        }, {
                            emoji: "🏎️",
                            category: 4,
                            name: "racing car",
                            version: "1.0"
                        }, {
                            emoji: "🏍️",
                            category: 4,
                            name: "motorcycle",
                            version: "1.0"
                        }, {
                            emoji: "🛵",
                            category: 4,
                            name: "motor scooter",
                            version: "3.0"
                        }, {
                            emoji: "🦽",
                            category: 4,
                            name: "manual wheelchair",
                            version: "12.0"
                        }, {
                            emoji: "🦼",
                            category: 4,
                            name: "motorized wheelchair",
                            version: "12.0"
                        }, {
                            emoji: "🛺",
                            category: 4,
                            name: "auto rickshaw",
                            version: "12.0"
                        }, {
                            emoji: "🚲",
                            category: 4,
                            name: "bicycle",
                            version: "1.0"
                        }, {
                            emoji: "🛴",
                            category: 4,
                            name: "kick scooter",
                            version: "3.0"
                        }, {
                            emoji: "🛹",
                            category: 4,
                            name: "skateboard",
                            version: "11.0"
                        }, {
                            emoji: "🛼",
                            category: 4,
                            name: "roller skate",
                            version: "13.0"
                        }, {
                            emoji: "🚏",
                            category: 4,
                            name: "bus stop",
                            version: "1.0"
                        }, {
                            emoji: "🛣️",
                            category: 4,
                            name: "motorway",
                            version: "1.0"
                        }, {
                            emoji: "🛤️",
                            category: 4,
                            name: "railway track",
                            version: "1.0"
                        }, {
                            emoji: "🛢️",
                            category: 4,
                            name: "oil drum",
                            version: "1.0"
                        }, {
                            emoji: "⛽",
                            category: 4,
                            name: "fuel pump",
                            version: "1.0"
                        }, {
                            emoji: "🚨",
                            category: 4,
                            name: "police car light",
                            version: "1.0"
                        }, {
                            emoji: "🚥",
                            category: 4,
                            name: "horizontal traffic light",
                            version: "1.0"
                        }, {
                            emoji: "🚦",
                            category: 4,
                            name: "vertical traffic light",
                            version: "1.0"
                        }, {
                            emoji: "🛑",
                            category: 4,
                            name: "stop sign",
                            version: "3.0"
                        }, {
                            emoji: "🚧",
                            category: 4,
                            name: "construction",
                            version: "1.0"
                        }, {
                            emoji: "⚓",
                            category: 4,
                            name: "anchor",
                            version: "1.0"
                        }, {
                            emoji: "⛵",
                            category: 4,
                            name: "sailboat",
                            version: "1.0"
                        }, {
                            emoji: "🛶",
                            category: 4,
                            name: "canoe",
                            version: "3.0"
                        }, {
                            emoji: "🚤",
                            category: 4,
                            name: "speedboat",
                            version: "1.0"
                        }, {
                            emoji: "🛳️",
                            category: 4,
                            name: "passenger ship",
                            version: "1.0"
                        }, {
                            emoji: "⛴️",
                            category: 4,
                            name: "ferry",
                            version: "1.0"
                        }, {
                            emoji: "🛥️",
                            category: 4,
                            name: "motor boat",
                            version: "1.0"
                        }, {
                            emoji: "🚢",
                            category: 4,
                            name: "ship",
                            version: "1.0"
                        }, {
                            emoji: "✈️",
                            category: 4,
                            name: "airplane",
                            version: "1.0"
                        }, {
                            emoji: "🛩️",
                            category: 4,
                            name: "small airplane",
                            version: "1.0"
                        }, {
                            emoji: "🛫",
                            category: 4,
                            name: "airplane departure",
                            version: "1.0"
                        }, {
                            emoji: "🛬",
                            category: 4,
                            name: "airplane arrival",
                            version: "1.0"
                        }, {
                            emoji: "🪂",
                            category: 4,
                            name: "parachute",
                            version: "12.0"
                        }, {
                            emoji: "💺",
                            category: 4,
                            name: "seat",
                            version: "1.0"
                        }, {
                            emoji: "🚁",
                            category: 4,
                            name: "helicopter",
                            version: "1.0"
                        }, {
                            emoji: "🚟",
                            category: 4,
                            name: "suspension railway",
                            version: "1.0"
                        }, {
                            emoji: "🚠",
                            category: 4,
                            name: "mountain cableway",
                            version: "1.0"
                        }, {
                            emoji: "🚡",
                            category: 4,
                            name: "aerial tramway",
                            version: "1.0"
                        }, {
                            emoji: "🛰️",
                            category: 4,
                            name: "satellite",
                            version: "1.0"
                        }, {
                            emoji: "🚀",
                            category: 4,
                            name: "rocket",
                            version: "1.0"
                        }, {
                            emoji: "🛸",
                            category: 4,
                            name: "flying saucer",
                            version: "5.0"
                        }, {
                            emoji: "🛎️",
                            category: 4,
                            name: "bellhop bell",
                            version: "1.0"
                        }, {
                            emoji: "🧳",
                            category: 4,
                            name: "luggage",
                            version: "11.0"
                        }, {
                            emoji: "⌛",
                            category: 4,
                            name: "hourglass done",
                            version: "1.0"
                        }, {
                            emoji: "⏳",
                            category: 4,
                            name: "hourglass not done",
                            version: "1.0"
                        }, {
                            emoji: "⌚",
                            category: 4,
                            name: "watch",
                            version: "1.0"
                        }, {
                            emoji: "⏰",
                            category: 4,
                            name: "alarm clock",
                            version: "1.0"
                        }, {
                            emoji: "⏱️",
                            category: 4,
                            name: "stopwatch",
                            version: "1.0"
                        }, {
                            emoji: "⏲️",
                            category: 4,
                            name: "timer clock",
                            version: "1.0"
                        }, {
                            emoji: "🕰️",
                            category: 4,
                            name: "mantelpiece clock",
                            version: "1.0"
                        }, {
                            emoji: "🕛",
                            category: 4,
                            name: "twelve o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕧",
                            category: 4,
                            name: "twelve-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🕐",
                            category: 4,
                            name: "one o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕜",
                            category: 4,
                            name: "one-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🕑",
                            category: 4,
                            name: "two o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕝",
                            category: 4,
                            name: "two-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🕒",
                            category: 4,
                            name: "three o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕞",
                            category: 4,
                            name: "three-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🕓",
                            category: 4,
                            name: "four o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕟",
                            category: 4,
                            name: "four-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🕔",
                            category: 4,
                            name: "five o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕠",
                            category: 4,
                            name: "five-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🕕",
                            category: 4,
                            name: "six o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕡",
                            category: 4,
                            name: "six-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🕖",
                            category: 4,
                            name: "seven o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕢",
                            category: 4,
                            name: "seven-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🕗",
                            category: 4,
                            name: "eight o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕣",
                            category: 4,
                            name: "eight-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🕘",
                            category: 4,
                            name: "nine o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕤",
                            category: 4,
                            name: "nine-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🕙",
                            category: 4,
                            name: "ten o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕥",
                            category: 4,
                            name: "ten-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🕚",
                            category: 4,
                            name: "eleven o’clock",
                            version: "1.0"
                        }, {
                            emoji: "🕦",
                            category: 4,
                            name: "eleven-thirty",
                            version: "1.0"
                        }, {
                            emoji: "🌑",
                            category: 4,
                            name: "new moon",
                            version: "1.0"
                        }, {
                            emoji: "🌒",
                            category: 4,
                            name: "waxing crescent moon",
                            version: "1.0"
                        }, {
                            emoji: "🌓",
                            category: 4,
                            name: "first quarter moon",
                            version: "1.0"
                        }, {
                            emoji: "🌔",
                            category: 4,
                            name: "waxing gibbous moon",
                            version: "1.0"
                        }, {
                            emoji: "🌕",
                            category: 4,
                            name: "full moon",
                            version: "1.0"
                        }, {
                            emoji: "🌖",
                            category: 4,
                            name: "waning gibbous moon",
                            version: "1.0"
                        }, {
                            emoji: "🌗",
                            category: 4,
                            name: "last quarter moon",
                            version: "1.0"
                        }, {
                            emoji: "🌘",
                            category: 4,
                            name: "waning crescent moon",
                            version: "1.0"
                        }, {
                            emoji: "🌙",
                            category: 4,
                            name: "crescent moon",
                            version: "1.0"
                        }, {
                            emoji: "🌚",
                            category: 4,
                            name: "new moon face",
                            version: "1.0"
                        }, {
                            emoji: "🌛",
                            category: 4,
                            name: "first quarter moon face",
                            version: "1.0"
                        }, {
                            emoji: "🌜",
                            category: 4,
                            name: "last quarter moon face",
                            version: "1.0"
                        }, {
                            emoji: "🌡️",
                            category: 4,
                            name: "thermometer",
                            version: "1.0"
                        }, {
                            emoji: "☀️",
                            category: 4,
                            name: "sun",
                            version: "1.0"
                        }, {
                            emoji: "🌝",
                            category: 4,
                            name: "full moon face",
                            version: "1.0"
                        }, {
                            emoji: "🌞",
                            category: 4,
                            name: "sun with face",
                            version: "1.0"
                        }, {
                            emoji: "🪐",
                            category: 4,
                            name: "ringed planet",
                            version: "12.0"
                        }, {
                            emoji: "⭐",
                            category: 4,
                            name: "star",
                            version: "1.0"
                        }, {
                            emoji: "🌟",
                            category: 4,
                            name: "glowing star",
                            version: "1.0"
                        }, {
                            emoji: "🌠",
                            category: 4,
                            name: "shooting star",
                            version: "1.0"
                        }, {
                            emoji: "🌌",
                            category: 4,
                            name: "milky way",
                            version: "1.0"
                        }, {
                            emoji: "☁️",
                            category: 4,
                            name: "cloud",
                            version: "1.0"
                        }, {
                            emoji: "⛅",
                            category: 4,
                            name: "sun behind cloud",
                            version: "1.0"
                        }, {
                            emoji: "⛈️",
                            category: 4,
                            name: "cloud with lightning and rain",
                            version: "1.0"
                        }, {
                            emoji: "🌤️",
                            category: 4,
                            name: "sun behind small cloud",
                            version: "1.0"
                        }, {
                            emoji: "🌥️",
                            category: 4,
                            name: "sun behind large cloud",
                            version: "1.0"
                        }, {
                            emoji: "🌦️",
                            category: 4,
                            name: "sun behind rain cloud",
                            version: "1.0"
                        }, {
                            emoji: "🌧️",
                            category: 4,
                            name: "cloud with rain",
                            version: "1.0"
                        }, {
                            emoji: "🌨️",
                            category: 4,
                            name: "cloud with snow",
                            version: "1.0"
                        }, {
                            emoji: "🌩️",
                            category: 4,
                            name: "cloud with lightning",
                            version: "1.0"
                        }, {
                            emoji: "🌪️",
                            category: 4,
                            name: "tornado",
                            version: "1.0"
                        }, {
                            emoji: "🌫️",
                            category: 4,
                            name: "fog",
                            version: "1.0"
                        }, {
                            emoji: "🌬️",
                            category: 4,
                            name: "wind face",
                            version: "1.0"
                        }, {
                            emoji: "🌀",
                            category: 4,
                            name: "cyclone",
                            version: "1.0"
                        }, {
                            emoji: "🌈",
                            category: 4,
                            name: "rainbow",
                            version: "1.0"
                        }, {
                            emoji: "🌂",
                            category: 4,
                            name: "closed umbrella",
                            version: "1.0"
                        }, {
                            emoji: "☂️",
                            category: 4,
                            name: "umbrella",
                            version: "1.0"
                        }, {
                            emoji: "☔",
                            category: 4,
                            name: "umbrella with rain drops",
                            version: "1.0"
                        }, {
                            emoji: "⛱️",
                            category: 4,
                            name: "umbrella on ground",
                            version: "1.0"
                        }, {
                            emoji: "⚡",
                            category: 4,
                            name: "high voltage",
                            version: "1.0"
                        }, {
                            emoji: "❄️",
                            category: 4,
                            name: "snowflake",
                            version: "1.0"
                        }, {
                            emoji: "☃️",
                            category: 4,
                            name: "snowman",
                            version: "1.0"
                        }, {
                            emoji: "⛄",
                            category: 4,
                            name: "snowman without snow",
                            version: "1.0"
                        }, {
                            emoji: "☄️",
                            category: 4,
                            name: "comet",
                            version: "1.0"
                        }, {
                            emoji: "🔥",
                            category: 4,
                            name: "fire",
                            version: "1.0"
                        }, {
                            emoji: "💧",
                            category: 4,
                            name: "droplet",
                            version: "1.0"
                        }, {
                            emoji: "🌊",
                            category: 4,
                            name: "water wave",
                            version: "1.0"
                        }, {
                            emoji: "🎃",
                            category: 5,
                            name: "jack-o-lantern",
                            version: "1.0"
                        }, {
                            emoji: "🎄",
                            category: 5,
                            name: "Christmas tree",
                            version: "1.0"
                        }, {
                            emoji: "🎆",
                            category: 5,
                            name: "fireworks",
                            version: "1.0"
                        }, {
                            emoji: "🎇",
                            category: 5,
                            name: "sparkler",
                            version: "1.0"
                        }, {
                            emoji: "🧨",
                            category: 5,
                            name: "firecracker",
                            version: "11.0"
                        }, {
                            emoji: "✨",
                            category: 5,
                            name: "sparkles",
                            version: "1.0"
                        }, {
                            emoji: "🎈",
                            category: 5,
                            name: "balloon",
                            version: "1.0"
                        }, {
                            emoji: "🎉",
                            category: 5,
                            name: "party popper",
                            version: "1.0"
                        }, {
                            emoji: "🎊",
                            category: 5,
                            name: "confetti ball",
                            version: "1.0"
                        }, {
                            emoji: "🎋",
                            category: 5,
                            name: "tanabata tree",
                            version: "1.0"
                        }, {
                            emoji: "🎍",
                            category: 5,
                            name: "pine decoration",
                            version: "1.0"
                        }, {
                            emoji: "🎎",
                            category: 5,
                            name: "Japanese dolls",
                            version: "1.0"
                        }, {
                            emoji: "🎏",
                            category: 5,
                            name: "carp streamer",
                            version: "1.0"
                        }, {
                            emoji: "🎐",
                            category: 5,
                            name: "wind chime",
                            version: "1.0"
                        }, {
                            emoji: "🎑",
                            category: 5,
                            name: "moon viewing ceremony",
                            version: "1.0"
                        }, {
                            emoji: "🧧",
                            category: 5,
                            name: "red envelope",
                            version: "11.0"
                        }, {
                            emoji: "🎀",
                            category: 5,
                            name: "ribbon",
                            version: "1.0"
                        }, {
                            emoji: "🎁",
                            category: 5,
                            name: "wrapped gift",
                            version: "1.0"
                        }, {
                            emoji: "🎗️",
                            category: 5,
                            name: "reminder ribbon",
                            version: "1.0"
                        }, {
                            emoji: "🎟️",
                            category: 5,
                            name: "admission tickets",
                            version: "1.0"
                        }, {
                            emoji: "🎫",
                            category: 5,
                            name: "ticket",
                            version: "1.0"
                        }, {
                            emoji: "🎖️",
                            category: 5,
                            name: "military medal",
                            version: "1.0"
                        }, {
                            emoji: "🏆",
                            category: 5,
                            name: "trophy",
                            version: "1.0"
                        }, {
                            emoji: "🏅",
                            category: 5,
                            name: "sports medal",
                            version: "1.0"
                        }, {
                            emoji: "🥇",
                            category: 5,
                            name: "1st place medal",
                            version: "3.0"
                        }, {
                            emoji: "🥈",
                            category: 5,
                            name: "2nd place medal",
                            version: "3.0"
                        }, {
                            emoji: "🥉",
                            category: 5,
                            name: "3rd place medal",
                            version: "3.0"
                        }, {
                            emoji: "⚽",
                            category: 5,
                            name: "soccer ball",
                            version: "1.0"
                        }, {
                            emoji: "⚾",
                            category: 5,
                            name: "baseball",
                            version: "1.0"
                        }, {
                            emoji: "🥎",
                            category: 5,
                            name: "softball",
                            version: "11.0"
                        }, {
                            emoji: "🏀",
                            category: 5,
                            name: "basketball",
                            version: "1.0"
                        }, {
                            emoji: "🏐",
                            category: 5,
                            name: "volleyball",
                            version: "1.0"
                        }, {
                            emoji: "🏈",
                            category: 5,
                            name: "american football",
                            version: "1.0"
                        }, {
                            emoji: "🏉",
                            category: 5,
                            name: "rugby football",
                            version: "1.0"
                        }, {
                            emoji: "🎾",
                            category: 5,
                            name: "tennis",
                            version: "1.0"
                        }, {
                            emoji: "🥏",
                            category: 5,
                            name: "flying disc",
                            version: "11.0"
                        }, {
                            emoji: "🎳",
                            category: 5,
                            name: "bowling",
                            version: "1.0"
                        }, {
                            emoji: "🏏",
                            category: 5,
                            name: "cricket game",
                            version: "1.0"
                        }, {
                            emoji: "🏑",
                            category: 5,
                            name: "field hockey",
                            version: "1.0"
                        }, {
                            emoji: "🏒",
                            category: 5,
                            name: "ice hockey",
                            version: "1.0"
                        }, {
                            emoji: "🥍",
                            category: 5,
                            name: "lacrosse",
                            version: "11.0"
                        }, {
                            emoji: "🏓",
                            category: 5,
                            name: "ping pong",
                            version: "1.0"
                        }, {
                            emoji: "🏸",
                            category: 5,
                            name: "badminton",
                            version: "1.0"
                        }, {
                            emoji: "🥊",
                            category: 5,
                            name: "boxing glove",
                            version: "3.0"
                        }, {
                            emoji: "🥋",
                            category: 5,
                            name: "martial arts uniform",
                            version: "3.0"
                        }, {
                            emoji: "🥅",
                            category: 5,
                            name: "goal net",
                            version: "3.0"
                        }, {
                            emoji: "⛳",
                            category: 5,
                            name: "flag in hole",
                            version: "1.0"
                        }, {
                            emoji: "⛸️",
                            category: 5,
                            name: "ice skate",
                            version: "1.0"
                        }, {
                            emoji: "🎣",
                            category: 5,
                            name: "fishing pole",
                            version: "1.0"
                        }, {
                            emoji: "🤿",
                            category: 5,
                            name: "diving mask",
                            version: "12.0"
                        }, {
                            emoji: "🎽",
                            category: 5,
                            name: "running shirt",
                            version: "1.0"
                        }, {
                            emoji: "🎿",
                            category: 5,
                            name: "skis",
                            version: "1.0"
                        }, {
                            emoji: "🛷",
                            category: 5,
                            name: "sled",
                            version: "5.0"
                        }, {
                            emoji: "🥌",
                            category: 5,
                            name: "curling stone",
                            version: "5.0"
                        }, {
                            emoji: "🎯",
                            category: 5,
                            name: "direct hit",
                            version: "1.0"
                        }, {
                            emoji: "🪀",
                            category: 5,
                            name: "yo-yo",
                            version: "12.0"
                        }, {
                            emoji: "🪁",
                            category: 5,
                            name: "kite",
                            version: "12.0"
                        }, {
                            emoji: "🎱",
                            category: 5,
                            name: "pool 8 ball",
                            version: "1.0"
                        }, {
                            emoji: "🔮",
                            category: 5,
                            name: "crystal ball",
                            version: "1.0"
                        }, {
                            emoji: "🪄",
                            category: 5,
                            name: "magic wand",
                            version: "13.0"
                        }, {
                            emoji: "🧿",
                            category: 5,
                            name: "nazar amulet",
                            version: "11.0"
                        }, {
                            emoji: "🎮",
                            category: 5,
                            name: "video game",
                            version: "1.0"
                        }, {
                            emoji: "🕹️",
                            category: 5,
                            name: "joystick",
                            version: "1.0"
                        }, {
                            emoji: "🎰",
                            category: 5,
                            name: "slot machine",
                            version: "1.0"
                        }, {
                            emoji: "🎲",
                            category: 5,
                            name: "game die",
                            version: "1.0"
                        }, {
                            emoji: "🧩",
                            category: 5,
                            name: "puzzle piece",
                            version: "11.0"
                        }, {
                            emoji: "🧸",
                            category: 5,
                            name: "teddy bear",
                            version: "11.0"
                        }, {
                            emoji: "🪅",
                            category: 5,
                            name: "piñata",
                            version: "13.0"
                        }, {
                            emoji: "🪆",
                            category: 5,
                            name: "nesting dolls",
                            version: "13.0"
                        }, {
                            emoji: "♠️",
                            category: 5,
                            name: "spade suit",
                            version: "1.0"
                        }, {
                            emoji: "♥️",
                            category: 5,
                            name: "heart suit",
                            version: "1.0"
                        }, {
                            emoji: "♦️",
                            category: 5,
                            name: "diamond suit",
                            version: "1.0"
                        }, {
                            emoji: "♣️",
                            category: 5,
                            name: "club suit",
                            version: "1.0"
                        }, {
                            emoji: "♟️",
                            category: 5,
                            name: "chess pawn",
                            version: "11.0"
                        }, {
                            emoji: "🃏",
                            category: 5,
                            name: "joker",
                            version: "1.0"
                        }, {
                            emoji: "🀄",
                            category: 5,
                            name: "mahjong red dragon",
                            version: "1.0"
                        }, {
                            emoji: "🎴",
                            category: 5,
                            name: "flower playing cards",
                            version: "1.0"
                        }, {
                            emoji: "🎭",
                            category: 5,
                            name: "performing arts",
                            version: "1.0"
                        }, {
                            emoji: "🖼️",
                            category: 5,
                            name: "framed picture",
                            version: "1.0"
                        }, {
                            emoji: "🎨",
                            category: 5,
                            name: "artist palette",
                            version: "1.0"
                        }, {
                            emoji: "🧵",
                            category: 5,
                            name: "thread",
                            version: "11.0"
                        }, {
                            emoji: "🪡",
                            category: 5,
                            name: "sewing needle",
                            version: "13.0"
                        }, {
                            emoji: "🧶",
                            category: 5,
                            name: "yarn",
                            version: "11.0"
                        }, {
                            emoji: "🪢",
                            category: 5,
                            name: "knot",
                            version: "13.0"
                        }, {
                            emoji: "👓",
                            category: 6,
                            name: "glasses",
                            version: "1.0"
                        }, {
                            emoji: "🕶️",
                            category: 6,
                            name: "sunglasses",
                            version: "1.0"
                        }, {
                            emoji: "🥽",
                            category: 6,
                            name: "goggles",
                            version: "11.0"
                        }, {
                            emoji: "🥼",
                            category: 6,
                            name: "lab coat",
                            version: "11.0"
                        }, {
                            emoji: "🦺",
                            category: 6,
                            name: "safety vest",
                            version: "12.0"
                        }, {
                            emoji: "👔",
                            category: 6,
                            name: "necktie",
                            version: "1.0"
                        }, {
                            emoji: "👕",
                            category: 6,
                            name: "t-shirt",
                            version: "1.0"
                        }, {
                            emoji: "👖",
                            category: 6,
                            name: "jeans",
                            version: "1.0"
                        }, {
                            emoji: "🧣",
                            category: 6,
                            name: "scarf",
                            version: "5.0"
                        }, {
                            emoji: "🧤",
                            category: 6,
                            name: "gloves",
                            version: "5.0"
                        }, {
                            emoji: "🧥",
                            category: 6,
                            name: "coat",
                            version: "5.0"
                        }, {
                            emoji: "🧦",
                            category: 6,
                            name: "socks",
                            version: "5.0"
                        }, {
                            emoji: "👗",
                            category: 6,
                            name: "dress",
                            version: "1.0"
                        }, {
                            emoji: "👘",
                            category: 6,
                            name: "kimono",
                            version: "1.0"
                        }, {
                            emoji: "🥻",
                            category: 6,
                            name: "sari",
                            version: "12.0"
                        }, {
                            emoji: "🩱",
                            category: 6,
                            name: "one-piece swimsuit",
                            version: "12.0"
                        }, {
                            emoji: "🩲",
                            category: 6,
                            name: "briefs",
                            version: "12.0"
                        }, {
                            emoji: "🩳",
                            category: 6,
                            name: "shorts",
                            version: "12.0"
                        }, {
                            emoji: "👙",
                            category: 6,
                            name: "bikini",
                            version: "1.0"
                        }, {
                            emoji: "👚",
                            category: 6,
                            name: "woman’s clothes",
                            version: "1.0"
                        }, {
                            emoji: "👛",
                            category: 6,
                            name: "purse",
                            version: "1.0"
                        }, {
                            emoji: "👜",
                            category: 6,
                            name: "handbag",
                            version: "1.0"
                        }, {
                            emoji: "👝",
                            category: 6,
                            name: "clutch bag",
                            version: "1.0"
                        }, {
                            emoji: "🛍️",
                            category: 6,
                            name: "shopping bags",
                            version: "1.0"
                        }, {
                            emoji: "🎒",
                            category: 6,
                            name: "backpack",
                            version: "1.0"
                        }, {
                            emoji: "🩴",
                            category: 6,
                            name: "thong sandal",
                            version: "13.0"
                        }, {
                            emoji: "👞",
                            category: 6,
                            name: "man’s shoe",
                            version: "1.0"
                        }, {
                            emoji: "👟",
                            category: 6,
                            name: "running shoe",
                            version: "1.0"
                        }, {
                            emoji: "🥾",
                            category: 6,
                            name: "hiking boot",
                            version: "11.0"
                        }, {
                            emoji: "🥿",
                            category: 6,
                            name: "flat shoe",
                            version: "11.0"
                        }, {
                            emoji: "👠",
                            category: 6,
                            name: "high-heeled shoe",
                            version: "1.0"
                        }, {
                            emoji: "👡",
                            category: 6,
                            name: "woman’s sandal",
                            version: "1.0"
                        }, {
                            emoji: "🩰",
                            category: 6,
                            name: "ballet shoes",
                            version: "12.0"
                        }, {
                            emoji: "👢",
                            category: 6,
                            name: "woman’s boot",
                            version: "1.0"
                        }, {
                            emoji: "👑",
                            category: 6,
                            name: "crown",
                            version: "1.0"
                        }, {
                            emoji: "👒",
                            category: 6,
                            name: "woman’s hat",
                            version: "1.0"
                        }, {
                            emoji: "🎩",
                            category: 6,
                            name: "top hat",
                            version: "1.0"
                        }, {
                            emoji: "🎓",
                            category: 6,
                            name: "graduation cap",
                            version: "1.0"
                        }, {
                            emoji: "🧢",
                            category: 6,
                            name: "billed cap",
                            version: "5.0"
                        }, {
                            emoji: "🪖",
                            category: 6,
                            name: "military helmet",
                            version: "13.0"
                        }, {
                            emoji: "⛑️",
                            category: 6,
                            name: "rescue worker’s helmet",
                            version: "1.0"
                        }, {
                            emoji: "📿",
                            category: 6,
                            name: "prayer beads",
                            version: "1.0"
                        }, {
                            emoji: "💄",
                            category: 6,
                            name: "lipstick",
                            version: "1.0"
                        }, {
                            emoji: "💍",
                            category: 6,
                            name: "ring",
                            version: "1.0"
                        }, {
                            emoji: "💎",
                            category: 6,
                            name: "gem stone",
                            version: "1.0"
                        }, {
                            emoji: "🔇",
                            category: 6,
                            name: "muted speaker",
                            version: "1.0"
                        }, {
                            emoji: "🔈",
                            category: 6,
                            name: "speaker low volume",
                            version: "1.0"
                        }, {
                            emoji: "🔉",
                            category: 6,
                            name: "speaker medium volume",
                            version: "1.0"
                        }, {
                            emoji: "🔊",
                            category: 6,
                            name: "speaker high volume",
                            version: "1.0"
                        }, {
                            emoji: "📢",
                            category: 6,
                            name: "loudspeaker",
                            version: "1.0"
                        }, {
                            emoji: "📣",
                            category: 6,
                            name: "megaphone",
                            version: "1.0"
                        }, {
                            emoji: "📯",
                            category: 6,
                            name: "postal horn",
                            version: "1.0"
                        }, {
                            emoji: "🔔",
                            category: 6,
                            name: "bell",
                            version: "1.0"
                        }, {
                            emoji: "🔕",
                            category: 6,
                            name: "bell with slash",
                            version: "1.0"
                        }, {
                            emoji: "🎼",
                            category: 6,
                            name: "musical score",
                            version: "1.0"
                        }, {
                            emoji: "🎵",
                            category: 6,
                            name: "musical note",
                            version: "1.0"
                        }, {
                            emoji: "🎶",
                            category: 6,
                            name: "musical notes",
                            version: "1.0"
                        }, {
                            emoji: "🎙️",
                            category: 6,
                            name: "studio microphone",
                            version: "1.0"
                        }, {
                            emoji: "🎚️",
                            category: 6,
                            name: "level slider",
                            version: "1.0"
                        }, {
                            emoji: "🎛️",
                            category: 6,
                            name: "control knobs",
                            version: "1.0"
                        }, {
                            emoji: "🎤",
                            category: 6,
                            name: "microphone",
                            version: "1.0"
                        }, {
                            emoji: "🎧",
                            category: 6,
                            name: "headphone",
                            version: "1.0"
                        }, {
                            emoji: "📻",
                            category: 6,
                            name: "radio",
                            version: "1.0"
                        }, {
                            emoji: "🎷",
                            category: 6,
                            name: "saxophone",
                            version: "1.0"
                        }, {
                            emoji: "🪗",
                            category: 6,
                            name: "accordion",
                            version: "13.0"
                        }, {
                            emoji: "🎸",
                            category: 6,
                            name: "guitar",
                            version: "1.0"
                        }, {
                            emoji: "🎹",
                            category: 6,
                            name: "musical keyboard",
                            version: "1.0"
                        }, {
                            emoji: "🎺",
                            category: 6,
                            name: "trumpet",
                            version: "1.0"
                        }, {
                            emoji: "🎻",
                            category: 6,
                            name: "violin",
                            version: "1.0"
                        }, {
                            emoji: "🪕",
                            category: 6,
                            name: "banjo",
                            version: "12.0"
                        }, {
                            emoji: "🥁",
                            category: 6,
                            name: "drum",
                            version: "3.0"
                        }, {
                            emoji: "🪘",
                            category: 6,
                            name: "long drum",
                            version: "13.0"
                        }, {
                            emoji: "📱",
                            category: 6,
                            name: "mobile phone",
                            version: "1.0"
                        }, {
                            emoji: "📲",
                            category: 6,
                            name: "mobile phone with arrow",
                            version: "1.0"
                        }, {
                            emoji: "☎️",
                            category: 6,
                            name: "telephone",
                            version: "1.0"
                        }, {
                            emoji: "📞",
                            category: 6,
                            name: "telephone receiver",
                            version: "1.0"
                        }, {
                            emoji: "📟",
                            category: 6,
                            name: "pager",
                            version: "1.0"
                        }, {
                            emoji: "📠",
                            category: 6,
                            name: "fax machine",
                            version: "1.0"
                        }, {
                            emoji: "🔋",
                            category: 6,
                            name: "battery",
                            version: "1.0"
                        }, {
                            emoji: "🔌",
                            category: 6,
                            name: "electric plug",
                            version: "1.0"
                        }, {
                            emoji: "💻",
                            category: 6,
                            name: "laptop",
                            version: "1.0"
                        }, {
                            emoji: "🖥️",
                            category: 6,
                            name: "desktop computer",
                            version: "1.0"
                        }, {
                            emoji: "🖨️",
                            category: 6,
                            name: "printer",
                            version: "1.0"
                        }, {
                            emoji: "⌨️",
                            category: 6,
                            name: "keyboard",
                            version: "1.0"
                        }, {
                            emoji: "🖱️",
                            category: 6,
                            name: "computer mouse",
                            version: "1.0"
                        }, {
                            emoji: "🖲️",
                            category: 6,
                            name: "trackball",
                            version: "1.0"
                        }, {
                            emoji: "💽",
                            category: 6,
                            name: "computer disk",
                            version: "1.0"
                        }, {
                            emoji: "💾",
                            category: 6,
                            name: "floppy disk",
                            version: "1.0"
                        }, {
                            emoji: "💿",
                            category: 6,
                            name: "optical disk",
                            version: "1.0"
                        }, {
                            emoji: "📀",
                            category: 6,
                            name: "dvd",
                            version: "1.0"
                        }, {
                            emoji: "🧮",
                            category: 6,
                            name: "abacus",
                            version: "11.0"
                        }, {
                            emoji: "🎥",
                            category: 6,
                            name: "movie camera",
                            version: "1.0"
                        }, {
                            emoji: "🎞️",
                            category: 6,
                            name: "film frames",
                            version: "1.0"
                        }, {
                            emoji: "📽️",
                            category: 6,
                            name: "film projector",
                            version: "1.0"
                        }, {
                            emoji: "🎬",
                            category: 6,
                            name: "clapper board",
                            version: "1.0"
                        }, {
                            emoji: "📺",
                            category: 6,
                            name: "television",
                            version: "1.0"
                        }, {
                            emoji: "📷",
                            category: 6,
                            name: "camera",
                            version: "1.0"
                        }, {
                            emoji: "📸",
                            category: 6,
                            name: "camera with flash",
                            version: "1.0"
                        }, {
                            emoji: "📹",
                            category: 6,
                            name: "video camera",
                            version: "1.0"
                        }, {
                            emoji: "📼",
                            category: 6,
                            name: "videocassette",
                            version: "1.0"
                        }, {
                            emoji: "🔍",
                            category: 6,
                            name: "magnifying glass tilted left",
                            version: "1.0"
                        }, {
                            emoji: "🔎",
                            category: 6,
                            name: "magnifying glass tilted right",
                            version: "1.0"
                        }, {
                            emoji: "🕯️",
                            category: 6,
                            name: "candle",
                            version: "1.0"
                        }, {
                            emoji: "💡",
                            category: 6,
                            name: "light bulb",
                            version: "1.0"
                        }, {
                            emoji: "🔦",
                            category: 6,
                            name: "flashlight",
                            version: "1.0"
                        }, {
                            emoji: "🏮",
                            category: 6,
                            name: "red paper lantern",
                            version: "1.0"
                        }, {
                            emoji: "🪔",
                            category: 6,
                            name: "diya lamp",
                            version: "12.0"
                        }, {
                            emoji: "📔",
                            category: 6,
                            name: "notebook with decorative cover",
                            version: "1.0"
                        }, {
                            emoji: "📕",
                            category: 6,
                            name: "closed book",
                            version: "1.0"
                        }, {
                            emoji: "📖",
                            category: 6,
                            name: "open book",
                            version: "1.0"
                        }, {
                            emoji: "📗",
                            category: 6,
                            name: "green book",
                            version: "1.0"
                        }, {
                            emoji: "📘",
                            category: 6,
                            name: "blue book",
                            version: "1.0"
                        }, {
                            emoji: "📙",
                            category: 6,
                            name: "orange book",
                            version: "1.0"
                        }, {
                            emoji: "📚",
                            category: 6,
                            name: "books",
                            version: "1.0"
                        }, {
                            emoji: "📓",
                            category: 6,
                            name: "notebook",
                            version: "1.0"
                        }, {
                            emoji: "📒",
                            category: 6,
                            name: "ledger",
                            version: "1.0"
                        }, {
                            emoji: "📃",
                            category: 6,
                            name: "page with curl",
                            version: "1.0"
                        }, {
                            emoji: "📜",
                            category: 6,
                            name: "scroll",
                            version: "1.0"
                        }, {
                            emoji: "📄",
                            category: 6,
                            name: "page facing up",
                            version: "1.0"
                        }, {
                            emoji: "📰",
                            category: 6,
                            name: "newspaper",
                            version: "1.0"
                        }, {
                            emoji: "🗞️",
                            category: 6,
                            name: "rolled-up newspaper",
                            version: "1.0"
                        }, {
                            emoji: "📑",
                            category: 6,
                            name: "bookmark tabs",
                            version: "1.0"
                        }, {
                            emoji: "🔖",
                            category: 6,
                            name: "bookmark",
                            version: "1.0"
                        }, {
                            emoji: "🏷️",
                            category: 6,
                            name: "label",
                            version: "1.0"
                        }, {
                            emoji: "💰",
                            category: 6,
                            name: "money bag",
                            version: "1.0"
                        }, {
                            emoji: "🪙",
                            category: 6,
                            name: "coin",
                            version: "13.0"
                        }, {
                            emoji: "💴",
                            category: 6,
                            name: "yen banknote",
                            version: "1.0"
                        }, {
                            emoji: "💵",
                            category: 6,
                            name: "dollar banknote",
                            version: "1.0"
                        }, {
                            emoji: "💶",
                            category: 6,
                            name: "euro banknote",
                            version: "1.0"
                        }, {
                            emoji: "💷",
                            category: 6,
                            name: "pound banknote",
                            version: "1.0"
                        }, {
                            emoji: "💸",
                            category: 6,
                            name: "money with wings",
                            version: "1.0"
                        }, {
                            emoji: "💳",
                            category: 6,
                            name: "credit card",
                            version: "1.0"
                        }, {
                            emoji: "🧾",
                            category: 6,
                            name: "receipt",
                            version: "11.0"
                        }, {
                            emoji: "💹",
                            category: 6,
                            name: "chart increasing with yen",
                            version: "1.0"
                        }, {
                            emoji: "✉️",
                            category: 6,
                            name: "envelope",
                            version: "1.0"
                        }, {
                            emoji: "📧",
                            category: 6,
                            name: "e-mail",
                            version: "1.0"
                        }, {
                            emoji: "📨",
                            category: 6,
                            name: "incoming envelope",
                            version: "1.0"
                        }, {
                            emoji: "📩",
                            category: 6,
                            name: "envelope with arrow",
                            version: "1.0"
                        }, {
                            emoji: "📤",
                            category: 6,
                            name: "outbox tray",
                            version: "1.0"
                        }, {
                            emoji: "📥",
                            category: 6,
                            name: "inbox tray",
                            version: "1.0"
                        }, {
                            emoji: "📦",
                            category: 6,
                            name: "package",
                            version: "1.0"
                        }, {
                            emoji: "📫",
                            category: 6,
                            name: "closed mailbox with raised flag",
                            version: "1.0"
                        }, {
                            emoji: "📪",
                            category: 6,
                            name: "closed mailbox with lowered flag",
                            version: "1.0"
                        }, {
                            emoji: "📬",
                            category: 6,
                            name: "open mailbox with raised flag",
                            version: "1.0"
                        }, {
                            emoji: "📭",
                            category: 6,
                            name: "open mailbox with lowered flag",
                            version: "1.0"
                        }, {
                            emoji: "📮",
                            category: 6,
                            name: "postbox",
                            version: "1.0"
                        }, {
                            emoji: "🗳️",
                            category: 6,
                            name: "ballot box with ballot",
                            version: "1.0"
                        }, {
                            emoji: "✏️",
                            category: 6,
                            name: "pencil",
                            version: "1.0"
                        }, {
                            emoji: "✒️",
                            category: 6,
                            name: "black nib",
                            version: "1.0"
                        }, {
                            emoji: "🖋️",
                            category: 6,
                            name: "fountain pen",
                            version: "1.0"
                        }, {
                            emoji: "🖊️",
                            category: 6,
                            name: "pen",
                            version: "1.0"
                        }, {
                            emoji: "🖌️",
                            category: 6,
                            name: "paintbrush",
                            version: "1.0"
                        }, {
                            emoji: "🖍️",
                            category: 6,
                            name: "crayon",
                            version: "1.0"
                        }, {
                            emoji: "📝",
                            category: 6,
                            name: "memo",
                            version: "1.0"
                        }, {
                            emoji: "💼",
                            category: 6,
                            name: "briefcase",
                            version: "1.0"
                        }, {
                            emoji: "📁",
                            category: 6,
                            name: "file folder",
                            version: "1.0"
                        }, {
                            emoji: "📂",
                            category: 6,
                            name: "open file folder",
                            version: "1.0"
                        }, {
                            emoji: "🗂️",
                            category: 6,
                            name: "card index dividers",
                            version: "1.0"
                        }, {
                            emoji: "📅",
                            category: 6,
                            name: "calendar",
                            version: "1.0"
                        }, {
                            emoji: "📆",
                            category: 6,
                            name: "tear-off calendar",
                            version: "1.0"
                        }, {
                            emoji: "🗒️",
                            category: 6,
                            name: "spiral notepad",
                            version: "1.0"
                        }, {
                            emoji: "🗓️",
                            category: 6,
                            name: "spiral calendar",
                            version: "1.0"
                        }, {
                            emoji: "📇",
                            category: 6,
                            name: "card index",
                            version: "1.0"
                        }, {
                            emoji: "📈",
                            category: 6,
                            name: "chart increasing",
                            version: "1.0"
                        }, {
                            emoji: "📉",
                            category: 6,
                            name: "chart decreasing",
                            version: "1.0"
                        }, {
                            emoji: "📊",
                            category: 6,
                            name: "bar chart",
                            version: "1.0"
                        }, {
                            emoji: "📋",
                            category: 6,
                            name: "clipboard",
                            version: "1.0"
                        }, {
                            emoji: "📌",
                            category: 6,
                            name: "pushpin",
                            version: "1.0"
                        }, {
                            emoji: "📍",
                            category: 6,
                            name: "round pushpin",
                            version: "1.0"
                        }, {
                            emoji: "📎",
                            category: 6,
                            name: "paperclip",
                            version: "1.0"
                        }, {
                            emoji: "🖇️",
                            category: 6,
                            name: "linked paperclips",
                            version: "1.0"
                        }, {
                            emoji: "📏",
                            category: 6,
                            name: "straight ruler",
                            version: "1.0"
                        }, {
                            emoji: "📐",
                            category: 6,
                            name: "triangular ruler",
                            version: "1.0"
                        }, {
                            emoji: "✂️",
                            category: 6,
                            name: "scissors",
                            version: "1.0"
                        }, {
                            emoji: "🗃️",
                            category: 6,
                            name: "card file box",
                            version: "1.0"
                        }, {
                            emoji: "🗄️",
                            category: 6,
                            name: "file cabinet",
                            version: "1.0"
                        }, {
                            emoji: "🗑️",
                            category: 6,
                            name: "wastebasket",
                            version: "1.0"
                        }, {
                            emoji: "🔒",
                            category: 6,
                            name: "locked",
                            version: "1.0"
                        }, {
                            emoji: "🔓",
                            category: 6,
                            name: "unlocked",
                            version: "1.0"
                        }, {
                            emoji: "🔏",
                            category: 6,
                            name: "locked with pen",
                            version: "1.0"
                        }, {
                            emoji: "🔐",
                            category: 6,
                            name: "locked with key",
                            version: "1.0"
                        }, {
                            emoji: "🔑",
                            category: 6,
                            name: "key",
                            version: "1.0"
                        }, {
                            emoji: "🗝️",
                            category: 6,
                            name: "old key",
                            version: "1.0"
                        }, {
                            emoji: "🔨",
                            category: 6,
                            name: "hammer",
                            version: "1.0"
                        }, {
                            emoji: "🪓",
                            category: 6,
                            name: "axe",
                            version: "12.0"
                        }, {
                            emoji: "⛏️",
                            category: 6,
                            name: "pick",
                            version: "1.0"
                        }, {
                            emoji: "⚒️",
                            category: 6,
                            name: "hammer and pick",
                            version: "1.0"
                        }, {
                            emoji: "🛠️",
                            category: 6,
                            name: "hammer and wrench",
                            version: "1.0"
                        }, {
                            emoji: "🗡️",
                            category: 6,
                            name: "dagger",
                            version: "1.0"
                        }, {
                            emoji: "⚔️",
                            category: 6,
                            name: "crossed swords",
                            version: "1.0"
                        }, {
                            emoji: "🔫",
                            category: 6,
                            name: "pistol",
                            version: "1.0"
                        }, {
                            emoji: "🪃",
                            category: 6,
                            name: "boomerang",
                            version: "13.0"
                        }, {
                            emoji: "🏹",
                            category: 6,
                            name: "bow and arrow",
                            version: "1.0"
                        }, {
                            emoji: "🛡️",
                            category: 6,
                            name: "shield",
                            version: "1.0"
                        }, {
                            emoji: "🪚",
                            category: 6,
                            name: "carpentry saw",
                            version: "13.0"
                        }, {
                            emoji: "🔧",
                            category: 6,
                            name: "wrench",
                            version: "1.0"
                        }, {
                            emoji: "🪛",
                            category: 6,
                            name: "screwdriver",
                            version: "13.0"
                        }, {
                            emoji: "🔩",
                            category: 6,
                            name: "nut and bolt",
                            version: "1.0"
                        }, {
                            emoji: "⚙️",
                            category: 6,
                            name: "gear",
                            version: "1.0"
                        }, {
                            emoji: "🗜️",
                            category: 6,
                            name: "clamp",
                            version: "1.0"
                        }, {
                            emoji: "⚖️",
                            category: 6,
                            name: "balance scale",
                            version: "1.0"
                        }, {
                            emoji: "🦯",
                            category: 6,
                            name: "white cane",
                            version: "12.0"
                        }, {
                            emoji: "🔗",
                            category: 6,
                            name: "link",
                            version: "1.0"
                        }, {
                            emoji: "⛓️",
                            category: 6,
                            name: "chains",
                            version: "1.0"
                        }, {
                            emoji: "🪝",
                            category: 6,
                            name: "hook",
                            version: "13.0"
                        }, {
                            emoji: "🧰",
                            category: 6,
                            name: "toolbox",
                            version: "11.0"
                        }, {
                            emoji: "🧲",
                            category: 6,
                            name: "magnet",
                            version: "11.0"
                        }, {
                            emoji: "🪜",
                            category: 6,
                            name: "ladder",
                            version: "13.0"
                        }, {
                            emoji: "⚗️",
                            category: 6,
                            name: "alembic",
                            version: "1.0"
                        }, {
                            emoji: "🧪",
                            category: 6,
                            name: "test tube",
                            version: "11.0"
                        }, {
                            emoji: "🧫",
                            category: 6,
                            name: "petri dish",
                            version: "11.0"
                        }, {
                            emoji: "🧬",
                            category: 6,
                            name: "dna",
                            version: "11.0"
                        }, {
                            emoji: "🔬",
                            category: 6,
                            name: "microscope",
                            version: "1.0"
                        }, {
                            emoji: "🔭",
                            category: 6,
                            name: "telescope",
                            version: "1.0"
                        }, {
                            emoji: "📡",
                            category: 6,
                            name: "satellite antenna",
                            version: "1.0"
                        }, {
                            emoji: "💉",
                            category: 6,
                            name: "syringe",
                            version: "1.0"
                        }, {
                            emoji: "🩸",
                            category: 6,
                            name: "drop of blood",
                            version: "12.0"
                        }, {
                            emoji: "💊",
                            category: 6,
                            name: "pill",
                            version: "1.0"
                        }, {
                            emoji: "🩹",
                            category: 6,
                            name: "adhesive bandage",
                            version: "12.0"
                        }, {
                            emoji: "🩺",
                            category: 6,
                            name: "stethoscope",
                            version: "12.0"
                        }, {
                            emoji: "🚪",
                            category: 6,
                            name: "door",
                            version: "1.0"
                        }, {
                            emoji: "🛗",
                            category: 6,
                            name: "elevator",
                            version: "13.0"
                        }, {
                            emoji: "🪞",
                            category: 6,
                            name: "mirror",
                            version: "13.0"
                        }, {
                            emoji: "🪟",
                            category: 6,
                            name: "window",
                            version: "13.0"
                        }, {
                            emoji: "🛏️",
                            category: 6,
                            name: "bed",
                            version: "1.0"
                        }, {
                            emoji: "🛋️",
                            category: 6,
                            name: "couch and lamp",
                            version: "1.0"
                        }, {
                            emoji: "🪑",
                            category: 6,
                            name: "chair",
                            version: "12.0"
                        }, {
                            emoji: "🚽",
                            category: 6,
                            name: "toilet",
                            version: "1.0"
                        }, {
                            emoji: "🪠",
                            category: 6,
                            name: "plunger",
                            version: "13.0"
                        }, {
                            emoji: "🚿",
                            category: 6,
                            name: "shower",
                            version: "1.0"
                        }, {
                            emoji: "🛁",
                            category: 6,
                            name: "bathtub",
                            version: "1.0"
                        }, {
                            emoji: "🪤",
                            category: 6,
                            name: "mouse trap",
                            version: "13.0"
                        }, {
                            emoji: "🪒",
                            category: 6,
                            name: "razor",
                            version: "12.0"
                        }, {
                            emoji: "🧴",
                            category: 6,
                            name: "lotion bottle",
                            version: "11.0"
                        }, {
                            emoji: "🧷",
                            category: 6,
                            name: "safety pin",
                            version: "11.0"
                        }, {
                            emoji: "🧹",
                            category: 6,
                            name: "broom",
                            version: "11.0"
                        }, {
                            emoji: "🧺",
                            category: 6,
                            name: "basket",
                            version: "11.0"
                        }, {
                            emoji: "🧻",
                            category: 6,
                            name: "roll of paper",
                            version: "11.0"
                        }, {
                            emoji: "🪣",
                            category: 6,
                            name: "bucket",
                            version: "13.0"
                        }, {
                            emoji: "🧼",
                            category: 6,
                            name: "soap",
                            version: "11.0"
                        }, {
                            emoji: "🪥",
                            category: 6,
                            name: "toothbrush",
                            version: "13.0"
                        }, {
                            emoji: "🧽",
                            category: 6,
                            name: "sponge",
                            version: "11.0"
                        }, {
                            emoji: "🧯",
                            category: 6,
                            name: "fire extinguisher",
                            version: "11.0"
                        }, {
                            emoji: "🛒",
                            category: 6,
                            name: "shopping cart",
                            version: "3.0"
                        }, {
                            emoji: "🚬",
                            category: 6,
                            name: "cigarette",
                            version: "1.0"
                        }, {
                            emoji: "⚰️",
                            category: 6,
                            name: "coffin",
                            version: "1.0"
                        }, {
                            emoji: "🪦",
                            category: 6,
                            name: "headstone",
                            version: "13.0"
                        }, {
                            emoji: "⚱️",
                            category: 6,
                            name: "funeral urn",
                            version: "1.0"
                        }, {
                            emoji: "🗿",
                            category: 6,
                            name: "moai",
                            version: "1.0"
                        }, {
                            emoji: "🪧",
                            category: 6,
                            name: "placard",
                            version: "13.0"
                        }, {
                            emoji: "🏧",
                            category: 7,
                            name: "ATM sign",
                            version: "1.0"
                        }, {
                            emoji: "🚮",
                            category: 7,
                            name: "litter in bin sign",
                            version: "1.0"
                        }, {
                            emoji: "🚰",
                            category: 7,
                            name: "potable water",
                            version: "1.0"
                        }, {
                            emoji: "♿",
                            category: 7,
                            name: "wheelchair symbol",
                            version: "1.0"
                        }, {
                            emoji: "🚹",
                            category: 7,
                            name: "men’s room",
                            version: "1.0"
                        }, {
                            emoji: "🚺",
                            category: 7,
                            name: "women’s room",
                            version: "1.0"
                        }, {
                            emoji: "🚻",
                            category: 7,
                            name: "restroom",
                            version: "1.0"
                        }, {
                            emoji: "🚼",
                            category: 7,
                            name: "baby symbol",
                            version: "1.0"
                        }, {
                            emoji: "🚾",
                            category: 7,
                            name: "water closet",
                            version: "1.0"
                        }, {
                            emoji: "🛂",
                            category: 7,
                            name: "passport control",
                            version: "1.0"
                        }, {
                            emoji: "🛃",
                            category: 7,
                            name: "customs",
                            version: "1.0"
                        }, {
                            emoji: "🛄",
                            category: 7,
                            name: "baggage claim",
                            version: "1.0"
                        }, {
                            emoji: "🛅",
                            category: 7,
                            name: "left luggage",
                            version: "1.0"
                        }, {
                            emoji: "⚠️",
                            category: 7,
                            name: "warning",
                            version: "1.0"
                        }, {
                            emoji: "🚸",
                            category: 7,
                            name: "children crossing",
                            version: "1.0"
                        }, {
                            emoji: "⛔",
                            category: 7,
                            name: "no entry",
                            version: "1.0"
                        }, {
                            emoji: "🚫",
                            category: 7,
                            name: "prohibited",
                            version: "1.0"
                        }, {
                            emoji: "🚳",
                            category: 7,
                            name: "no bicycles",
                            version: "1.0"
                        }, {
                            emoji: "🚭",
                            category: 7,
                            name: "no smoking",
                            version: "1.0"
                        }, {
                            emoji: "🚯",
                            category: 7,
                            name: "no littering",
                            version: "1.0"
                        }, {
                            emoji: "🚱",
                            category: 7,
                            name: "non-potable water",
                            version: "1.0"
                        }, {
                            emoji: "🚷",
                            category: 7,
                            name: "no pedestrians",
                            version: "1.0"
                        }, {
                            emoji: "📵",
                            category: 7,
                            name: "no mobile phones",
                            version: "1.0"
                        }, {
                            emoji: "🔞",
                            category: 7,
                            name: "no one under eighteen",
                            version: "1.0"
                        }, {
                            emoji: "☢️",
                            category: 7,
                            name: "radioactive",
                            version: "1.0"
                        }, {
                            emoji: "☣️",
                            category: 7,
                            name: "biohazard",
                            version: "1.0"
                        }, {
                            emoji: "⬆️",
                            category: 7,
                            name: "up arrow",
                            version: "1.0"
                        }, {
                            emoji: "↗️",
                            category: 7,
                            name: "up-right arrow",
                            version: "1.0"
                        }, {
                            emoji: "➡️",
                            category: 7,
                            name: "right arrow",
                            version: "1.0"
                        }, {
                            emoji: "↘️",
                            category: 7,
                            name: "down-right arrow",
                            version: "1.0"
                        }, {
                            emoji: "⬇️",
                            category: 7,
                            name: "down arrow",
                            version: "1.0"
                        }, {
                            emoji: "↙️",
                            category: 7,
                            name: "down-left arrow",
                            version: "1.0"
                        }, {
                            emoji: "⬅️",
                            category: 7,
                            name: "left arrow",
                            version: "1.0"
                        }, {
                            emoji: "↖️",
                            category: 7,
                            name: "up-left arrow",
                            version: "1.0"
                        }, {
                            emoji: "↕️",
                            category: 7,
                            name: "up-down arrow",
                            version: "1.0"
                        }, {
                            emoji: "↔️",
                            category: 7,
                            name: "left-right arrow",
                            version: "1.0"
                        }, {
                            emoji: "↩️",
                            category: 7,
                            name: "right arrow curving left",
                            version: "1.0"
                        }, {
                            emoji: "↪️",
                            category: 7,
                            name: "left arrow curving right",
                            version: "1.0"
                        }, {
                            emoji: "⤴️",
                            category: 7,
                            name: "right arrow curving up",
                            version: "1.0"
                        }, {
                            emoji: "⤵️",
                            category: 7,
                            name: "right arrow curving down",
                            version: "1.0"
                        }, {
                            emoji: "🔃",
                            category: 7,
                            name: "clockwise vertical arrows",
                            version: "1.0"
                        }, {
                            emoji: "🔄",
                            category: 7,
                            name: "counterclockwise arrows button",
                            version: "1.0"
                        }, {
                            emoji: "🔙",
                            category: 7,
                            name: "BACK arrow",
                            version: "1.0"
                        }, {
                            emoji: "🔚",
                            category: 7,
                            name: "END arrow",
                            version: "1.0"
                        }, {
                            emoji: "🔛",
                            category: 7,
                            name: "ON! arrow",
                            version: "1.0"
                        }, {
                            emoji: "🔜",
                            category: 7,
                            name: "SOON arrow",
                            version: "1.0"
                        }, {
                            emoji: "🔝",
                            category: 7,
                            name: "TOP arrow",
                            version: "1.0"
                        }, {
                            emoji: "🛐",
                            category: 7,
                            name: "place of worship",
                            version: "1.0"
                        }, {
                            emoji: "⚛️",
                            category: 7,
                            name: "atom symbol",
                            version: "1.0"
                        }, {
                            emoji: "🕉️",
                            category: 7,
                            name: "om",
                            version: "1.0"
                        }, {
                            emoji: "✡️",
                            category: 7,
                            name: "star of David",
                            version: "1.0"
                        }, {
                            emoji: "☸️",
                            category: 7,
                            name: "wheel of dharma",
                            version: "1.0"
                        }, {
                            emoji: "☯️",
                            category: 7,
                            name: "yin yang",
                            version: "1.0"
                        }, {
                            emoji: "✝️",
                            category: 7,
                            name: "latin cross",
                            version: "1.0"
                        }, {
                            emoji: "☦️",
                            category: 7,
                            name: "orthodox cross",
                            version: "1.0"
                        }, {
                            emoji: "☪️",
                            category: 7,
                            name: "star and crescent",
                            version: "1.0"
                        }, {
                            emoji: "☮️",
                            category: 7,
                            name: "peace symbol",
                            version: "1.0"
                        }, {
                            emoji: "🕎",
                            category: 7,
                            name: "menorah",
                            version: "1.0"
                        }, {
                            emoji: "🔯",
                            category: 7,
                            name: "dotted six-pointed star",
                            version: "1.0"
                        }, {
                            emoji: "♈",
                            category: 7,
                            name: "Aries",
                            version: "1.0"
                        }, {
                            emoji: "♉",
                            category: 7,
                            name: "Taurus",
                            version: "1.0"
                        }, {
                            emoji: "♊",
                            category: 7,
                            name: "Gemini",
                            version: "1.0"
                        }, {
                            emoji: "♋",
                            category: 7,
                            name: "Cancer",
                            version: "1.0"
                        }, {
                            emoji: "♌",
                            category: 7,
                            name: "Leo",
                            version: "1.0"
                        }, {
                            emoji: "♍",
                            category: 7,
                            name: "Virgo",
                            version: "1.0"
                        }, {
                            emoji: "♎",
                            category: 7,
                            name: "Libra",
                            version: "1.0"
                        }, {
                            emoji: "♏",
                            category: 7,
                            name: "Scorpio",
                            version: "1.0"
                        }, {
                            emoji: "♐",
                            category: 7,
                            name: "Sagittarius",
                            version: "1.0"
                        }, {
                            emoji: "♑",
                            category: 7,
                            name: "Capricorn",
                            version: "1.0"
                        }, {
                            emoji: "♒",
                            category: 7,
                            name: "Aquarius",
                            version: "1.0"
                        }, {
                            emoji: "♓",
                            category: 7,
                            name: "Pisces",
                            version: "1.0"
                        }, {
                            emoji: "⛎",
                            category: 7,
                            name: "Ophiuchus",
                            version: "1.0"
                        }, {
                            emoji: "🔀",
                            category: 7,
                            name: "shuffle tracks button",
                            version: "1.0"
                        }, {
                            emoji: "🔁",
                            category: 7,
                            name: "repeat button",
                            version: "1.0"
                        }, {
                            emoji: "🔂",
                            category: 7,
                            name: "repeat single button",
                            version: "1.0"
                        }, {
                            emoji: "▶️",
                            category: 7,
                            name: "play button",
                            version: "1.0"
                        }, {
                            emoji: "⏩",
                            category: 7,
                            name: "fast-forward button",
                            version: "1.0"
                        }, {
                            emoji: "⏭️",
                            category: 7,
                            name: "next track button",
                            version: "1.0"
                        }, {
                            emoji: "⏯️",
                            category: 7,
                            name: "play or pause button",
                            version: "1.0"
                        }, {
                            emoji: "◀️",
                            category: 7,
                            name: "reverse button",
                            version: "1.0"
                        }, {
                            emoji: "⏪",
                            category: 7,
                            name: "fast reverse button",
                            version: "1.0"
                        }, {
                            emoji: "⏮️",
                            category: 7,
                            name: "last track button",
                            version: "1.0"
                        }, {
                            emoji: "🔼",
                            category: 7,
                            name: "upwards button",
                            version: "1.0"
                        }, {
                            emoji: "⏫",
                            category: 7,
                            name: "fast up button",
                            version: "1.0"
                        }, {
                            emoji: "🔽",
                            category: 7,
                            name: "downwards button",
                            version: "1.0"
                        }, {
                            emoji: "⏬",
                            category: 7,
                            name: "fast down button",
                            version: "1.0"
                        }, {
                            emoji: "⏸️",
                            category: 7,
                            name: "pause button",
                            version: "1.0"
                        }, {
                            emoji: "⏹️",
                            category: 7,
                            name: "stop button",
                            version: "1.0"
                        }, {
                            emoji: "⏺️",
                            category: 7,
                            name: "record button",
                            version: "1.0"
                        }, {
                            emoji: "⏏️",
                            category: 7,
                            name: "eject button",
                            version: "1.0"
                        }, {
                            emoji: "🎦",
                            category: 7,
                            name: "cinema",
                            version: "1.0"
                        }, {
                            emoji: "🔅",
                            category: 7,
                            name: "dim button",
                            version: "1.0"
                        }, {
                            emoji: "🔆",
                            category: 7,
                            name: "bright button",
                            version: "1.0"
                        }, {
                            emoji: "📶",
                            category: 7,
                            name: "antenna bars",
                            version: "1.0"
                        }, {
                            emoji: "📳",
                            category: 7,
                            name: "vibration mode",
                            version: "1.0"
                        }, {
                            emoji: "📴",
                            category: 7,
                            name: "mobile phone off",
                            version: "1.0"
                        }, {
                            emoji: "♀️",
                            category: 7,
                            name: "female sign",
                            version: "4.0"
                        }, {
                            emoji: "♂️",
                            category: 7,
                            name: "male sign",
                            version: "4.0"
                        }, {
                            emoji: "⚧️",
                            category: 7,
                            name: "transgender symbol",
                            version: "13.0"
                        }, {
                            emoji: "✖️",
                            category: 7,
                            name: "multiply",
                            version: "1.0"
                        }, {
                            emoji: "➕",
                            category: 7,
                            name: "plus",
                            version: "1.0"
                        }, {
                            emoji: "➖",
                            category: 7,
                            name: "minus",
                            version: "1.0"
                        }, {
                            emoji: "➗",
                            category: 7,
                            name: "divide",
                            version: "1.0"
                        }, {
                            emoji: "♾️",
                            category: 7,
                            name: "infinity",
                            version: "11.0"
                        }, {
                            emoji: "‼️",
                            category: 7,
                            name: "double exclamation mark",
                            version: "1.0"
                        }, {
                            emoji: "⁉️",
                            category: 7,
                            name: "exclamation question mark",
                            version: "1.0"
                        }, {
                            emoji: "❓",
                            category: 7,
                            name: "question mark",
                            version: "1.0"
                        }, {
                            emoji: "❔",
                            category: 7,
                            name: "white question mark",
                            version: "1.0"
                        }, {
                            emoji: "❕",
                            category: 7,
                            name: "white exclamation mark",
                            version: "1.0"
                        }, {
                            emoji: "❗",
                            category: 7,
                            name: "exclamation mark",
                            version: "1.0"
                        }, {
                            emoji: "〰️",
                            category: 7,
                            name: "wavy dash",
                            version: "1.0"
                        }, {
                            emoji: "💱",
                            category: 7,
                            name: "currency exchange",
                            version: "1.0"
                        }, {
                            emoji: "💲",
                            category: 7,
                            name: "heavy dollar sign",
                            version: "1.0"
                        }, {
                            emoji: "⚕️",
                            category: 7,
                            name: "medical symbol",
                            version: "4.0"
                        }, {
                            emoji: "♻️",
                            category: 7,
                            name: "recycling symbol",
                            version: "1.0"
                        }, {
                            emoji: "⚜️",
                            category: 7,
                            name: "fleur-de-lis",
                            version: "1.0"
                        }, {
                            emoji: "🔱",
                            category: 7,
                            name: "trident emblem",
                            version: "1.0"
                        }, {
                            emoji: "📛",
                            category: 7,
                            name: "name badge",
                            version: "1.0"
                        }, {
                            emoji: "🔰",
                            category: 7,
                            name: "Japanese symbol for beginner",
                            version: "1.0"
                        }, {
                            emoji: "⭕",
                            category: 7,
                            name: "hollow red circle",
                            version: "1.0"
                        }, {
                            emoji: "✅",
                            category: 7,
                            name: "check mark button",
                            version: "1.0"
                        }, {
                            emoji: "☑️",
                            category: 7,
                            name: "check box with check",
                            version: "1.0"
                        }, {
                            emoji: "✔️",
                            category: 7,
                            name: "check mark",
                            version: "1.0"
                        }, {
                            emoji: "❌",
                            category: 7,
                            name: "cross mark",
                            version: "1.0"
                        }, {
                            emoji: "❎",
                            category: 7,
                            name: "cross mark button",
                            version: "1.0"
                        }, {
                            emoji: "➰",
                            category: 7,
                            name: "curly loop",
                            version: "1.0"
                        }, {
                            emoji: "➿",
                            category: 7,
                            name: "double curly loop",
                            version: "1.0"
                        }, {
                            emoji: "〽️",
                            category: 7,
                            name: "part alternation mark",
                            version: "1.0"
                        }, {
                            emoji: "✳️",
                            category: 7,
                            name: "eight-spoked asterisk",
                            version: "1.0"
                        }, {
                            emoji: "✴️",
                            category: 7,
                            name: "eight-pointed star",
                            version: "1.0"
                        }, {
                            emoji: "❇️",
                            category: 7,
                            name: "sparkle",
                            version: "1.0"
                        }, {
                            emoji: "©️",
                            category: 7,
                            name: "copyright",
                            version: "1.0"
                        }, {
                            emoji: "®️",
                            category: 7,
                            name: "registered",
                            version: "1.0"
                        }, {
                            emoji: "™️",
                            category: 7,
                            name: "trade mark",
                            version: "1.0"
                        }, {
                            emoji: "#️⃣",
                            category: 7,
                            name: "keycap: #",
                            version: "1.0"
                        }, {
                            emoji: "*️⃣",
                            category: 7,
                            name: "keycap: *",
                            version: "2.0"
                        }, {
                            emoji: "0️⃣",
                            category: 7,
                            name: "keycap: 0",
                            version: "1.0"
                        }, {
                            emoji: "1️⃣",
                            category: 7,
                            name: "keycap: 1",
                            version: "1.0"
                        }, {
                            emoji: "2️⃣",
                            category: 7,
                            name: "keycap: 2",
                            version: "1.0"
                        }, {
                            emoji: "3️⃣",
                            category: 7,
                            name: "keycap: 3",
                            version: "1.0"
                        }, {
                            emoji: "4️⃣",
                            category: 7,
                            name: "keycap: 4",
                            version: "1.0"
                        }, {
                            emoji: "5️⃣",
                            category: 7,
                            name: "keycap: 5",
                            version: "1.0"
                        }, {
                            emoji: "6️⃣",
                            category: 7,
                            name: "keycap: 6",
                            version: "1.0"
                        }, {
                            emoji: "7️⃣",
                            category: 7,
                            name: "keycap: 7",
                            version: "1.0"
                        }, {
                            emoji: "8️⃣",
                            category: 7,
                            name: "keycap: 8",
                            version: "1.0"
                        }, {
                            emoji: "9️⃣",
                            category: 7,
                            name: "keycap: 9",
                            version: "1.0"
                        }, {
                            emoji: "🔟",
                            category: 7,
                            name: "keycap: 10",
                            version: "1.0"
                        }, {
                            emoji: "🔠",
                            category: 7,
                            name: "input latin uppercase",
                            version: "1.0"
                        }, {
                            emoji: "🔡",
                            category: 7,
                            name: "input latin lowercase",
                            version: "1.0"
                        }, {
                            emoji: "🔢",
                            category: 7,
                            name: "input numbers",
                            version: "1.0"
                        }, {
                            emoji: "🔣",
                            category: 7,
                            name: "input symbols",
                            version: "1.0"
                        }, {
                            emoji: "🔤",
                            category: 7,
                            name: "input latin letters",
                            version: "1.0"
                        }, {
                            emoji: "🅰️",
                            category: 7,
                            name: "A button (blood type)",
                            version: "1.0"
                        }, {
                            emoji: "🆎",
                            category: 7,
                            name: "AB button (blood type)",
                            version: "1.0"
                        }, {
                            emoji: "🅱️",
                            category: 7,
                            name: "B button (blood type)",
                            version: "1.0"
                        }, {
                            emoji: "🆑",
                            category: 7,
                            name: "CL button",
                            version: "1.0"
                        }, {
                            emoji: "🆒",
                            category: 7,
                            name: "COOL button",
                            version: "1.0"
                        }, {
                            emoji: "🆓",
                            category: 7,
                            name: "FREE button",
                            version: "1.0"
                        }, {
                            emoji: "ℹ️",
                            category: 7,
                            name: "information",
                            version: "1.0"
                        }, {
                            emoji: "🆔",
                            category: 7,
                            name: "ID button",
                            version: "1.0"
                        }, {
                            emoji: "Ⓜ️",
                            category: 7,
                            name: "circled M",
                            version: "1.0"
                        }, {
                            emoji: "🆕",
                            category: 7,
                            name: "NEW button",
                            version: "1.0"
                        }, {
                            emoji: "🆖",
                            category: 7,
                            name: "NG button",
                            version: "1.0"
                        }, {
                            emoji: "🅾️",
                            category: 7,
                            name: "O button (blood type)",
                            version: "1.0"
                        }, {
                            emoji: "🆗",
                            category: 7,
                            name: "OK button",
                            version: "1.0"
                        }, {
                            emoji: "🅿️",
                            category: 7,
                            name: "P button",
                            version: "1.0"
                        }, {
                            emoji: "🆘",
                            category: 7,
                            name: "SOS button",
                            version: "1.0"
                        }, {
                            emoji: "🆙",
                            category: 7,
                            name: "UP! button",
                            version: "1.0"
                        }, {
                            emoji: "🆚",
                            category: 7,
                            name: "VS button",
                            version: "1.0"
                        }, {
                            emoji: "🈁",
                            category: 7,
                            name: "Japanese “here” button",
                            version: "1.0"
                        }, {
                            emoji: "🈂️",
                            category: 7,
                            name: "Japanese “service charge” button",
                            version: "1.0"
                        }, {
                            emoji: "🈷️",
                            category: 7,
                            name: "Japanese “monthly amount” button",
                            version: "1.0"
                        }, {
                            emoji: "🈶",
                            category: 7,
                            name: "Japanese “not free of charge” button",
                            version: "1.0"
                        }, {
                            emoji: "🈯",
                            category: 7,
                            name: "Japanese “reserved” button",
                            version: "1.0"
                        }, {
                            emoji: "🉐",
                            category: 7,
                            name: "Japanese “bargain” button",
                            version: "1.0"
                        }, {
                            emoji: "🈹",
                            category: 7,
                            name: "Japanese “discount” button",
                            version: "1.0"
                        }, {
                            emoji: "🈚",
                            category: 7,
                            name: "Japanese “free of charge” button",
                            version: "1.0"
                        }, {
                            emoji: "🈲",
                            category: 7,
                            name: "Japanese “prohibited” button",
                            version: "1.0"
                        }, {
                            emoji: "🉑",
                            category: 7,
                            name: "Japanese “acceptable” button",
                            version: "1.0"
                        }, {
                            emoji: "🈸",
                            category: 7,
                            name: "Japanese “application” button",
                            version: "1.0"
                        }, {
                            emoji: "🈴",
                            category: 7,
                            name: "Japanese “passing grade” button",
                            version: "1.0"
                        }, {
                            emoji: "🈳",
                            category: 7,
                            name: "Japanese “vacancy” button",
                            version: "1.0"
                        }, {
                            emoji: "㊗️",
                            category: 7,
                            name: "Japanese “congratulations” button",
                            version: "1.0"
                        }, {
                            emoji: "㊙️",
                            category: 7,
                            name: "Japanese “secret” button",
                            version: "1.0"
                        }, {
                            emoji: "🈺",
                            category: 7,
                            name: "Japanese “open for business” button",
                            version: "1.0"
                        }, {
                            emoji: "🈵",
                            category: 7,
                            name: "Japanese “no vacancy” button",
                            version: "1.0"
                        }, {
                            emoji: "🔴",
                            category: 7,
                            name: "red circle",
                            version: "1.0"
                        }, {
                            emoji: "🟠",
                            category: 7,
                            name: "orange circle",
                            version: "12.0"
                        }, {
                            emoji: "🟡",
                            category: 7,
                            name: "yellow circle",
                            version: "12.0"
                        }, {
                            emoji: "🟢",
                            category: 7,
                            name: "green circle",
                            version: "12.0"
                        }, {
                            emoji: "🔵",
                            category: 7,
                            name: "blue circle",
                            version: "1.0"
                        }, {
                            emoji: "🟣",
                            category: 7,
                            name: "purple circle",
                            version: "12.0"
                        }, {
                            emoji: "🟤",
                            category: 7,
                            name: "brown circle",
                            version: "12.0"
                        }, {
                            emoji: "⚫",
                            category: 7,
                            name: "black circle",
                            version: "1.0"
                        }, {
                            emoji: "⚪",
                            category: 7,
                            name: "white circle",
                            version: "1.0"
                        }, {
                            emoji: "🟥",
                            category: 7,
                            name: "red square",
                            version: "12.0"
                        }, {
                            emoji: "🟧",
                            category: 7,
                            name: "orange square",
                            version: "12.0"
                        }, {
                            emoji: "🟨",
                            category: 7,
                            name: "yellow square",
                            version: "12.0"
                        }, {
                            emoji: "🟩",
                            category: 7,
                            name: "green square",
                            version: "12.0"
                        }, {
                            emoji: "🟦",
                            category: 7,
                            name: "blue square",
                            version: "12.0"
                        }, {
                            emoji: "🟪",
                            category: 7,
                            name: "purple square",
                            version: "12.0"
                        }, {
                            emoji: "🟫",
                            category: 7,
                            name: "brown square",
                            version: "12.0"
                        }, {
                            emoji: "⬛",
                            category: 7,
                            name: "black large square",
                            version: "1.0"
                        }, {
                            emoji: "⬜",
                            category: 7,
                            name: "white large square",
                            version: "1.0"
                        }, {
                            emoji: "◼️",
                            category: 7,
                            name: "black medium square",
                            version: "1.0"
                        }, {
                            emoji: "◻️",
                            category: 7,
                            name: "white medium square",
                            version: "1.0"
                        }, {
                            emoji: "◾",
                            category: 7,
                            name: "black medium-small square",
                            version: "1.0"
                        }, {
                            emoji: "◽",
                            category: 7,
                            name: "white medium-small square",
                            version: "1.0"
                        }, {
                            emoji: "▪️",
                            category: 7,
                            name: "black small square",
                            version: "1.0"
                        }, {
                            emoji: "▫️",
                            category: 7,
                            name: "white small square",
                            version: "1.0"
                        }, {
                            emoji: "🔶",
                            category: 7,
                            name: "large orange diamond",
                            version: "1.0"
                        }, {
                            emoji: "🔷",
                            category: 7,
                            name: "large blue diamond",
                            version: "1.0"
                        }, {
                            emoji: "🔸",
                            category: 7,
                            name: "small orange diamond",
                            version: "1.0"
                        }, {
                            emoji: "🔹",
                            category: 7,
                            name: "small blue diamond",
                            version: "1.0"
                        }, {
                            emoji: "🔺",
                            category: 7,
                            name: "red triangle pointed up",
                            version: "1.0"
                        }, {
                            emoji: "🔻",
                            category: 7,
                            name: "red triangle pointed down",
                            version: "1.0"
                        }, {
                            emoji: "💠",
                            category: 7,
                            name: "diamond with a dot",
                            version: "1.0"
                        }, {
                            emoji: "🔘",
                            category: 7,
                            name: "radio button",
                            version: "1.0"
                        }, {
                            emoji: "🔳",
                            category: 7,
                            name: "white square button",
                            version: "1.0"
                        }, {
                            emoji: "🔲",
                            category: 7,
                            name: "black square button",
                            version: "1.0"
                        }, {
                            emoji: "🏁",
                            category: 8,
                            name: "chequered flag",
                            version: "1.0"
                        }, {
                            emoji: "🚩",
                            category: 8,
                            name: "triangular flag",
                            version: "1.0"
                        }, {
                            emoji: "🎌",
                            category: 8,
                            name: "crossed flags",
                            version: "1.0"
                        }, {
                            emoji: "🏴",
                            category: 8,
                            name: "black flag",
                            version: "1.0"
                        }, {
                            emoji: "🏳️",
                            category: 8,
                            name: "white flag",
                            version: "1.0"
                        }, {
                            emoji: "🏳️‍🌈",
                            category: 8,
                            name: "rainbow flag",
                            version: "4.0"
                        }, {
                            emoji: "🏳️‍⚧️",
                            category: 8,
                            name: "transgender flag",
                            version: "13.0"
                        }, {
                            emoji: "🏴‍☠️",
                            category: 8,
                            name: "pirate flag",
                            version: "11.0"
                        }, {
                            emoji: "🇦🇨",
                            category: 8,
                            name: "flag: Ascension Island",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇩",
                            category: 8,
                            name: "flag: Andorra",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇪",
                            category: 8,
                            name: "flag: United Arab Emirates",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇫",
                            category: 8,
                            name: "flag: Afghanistan",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇬",
                            category: 8,
                            name: "flag: Antigua & Barbuda",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇮",
                            category: 8,
                            name: "flag: Anguilla",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇱",
                            category: 8,
                            name: "flag: Albania",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇲",
                            category: 8,
                            name: "flag: Armenia",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇴",
                            category: 8,
                            name: "flag: Angola",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇶",
                            category: 8,
                            name: "flag: Antarctica",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇷",
                            category: 8,
                            name: "flag: Argentina",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇸",
                            category: 8,
                            name: "flag: American Samoa",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇹",
                            category: 8,
                            name: "flag: Austria",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇺",
                            category: 8,
                            name: "flag: Australia",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇼",
                            category: 8,
                            name: "flag: Aruba",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇽",
                            category: 8,
                            name: "flag: Åland Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇦🇿",
                            category: 8,
                            name: "flag: Azerbaijan",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇦",
                            category: 8,
                            name: "flag: Bosnia & Herzegovina",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇧",
                            category: 8,
                            name: "flag: Barbados",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇩",
                            category: 8,
                            name: "flag: Bangladesh",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇪",
                            category: 8,
                            name: "flag: Belgium",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇫",
                            category: 8,
                            name: "flag: Burkina Faso",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇬",
                            category: 8,
                            name: "flag: Bulgaria",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇭",
                            category: 8,
                            name: "flag: Bahrain",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇮",
                            category: 8,
                            name: "flag: Burundi",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇯",
                            category: 8,
                            name: "flag: Benin",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇱",
                            category: 8,
                            name: "flag: St. Barthélemy",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇲",
                            category: 8,
                            name: "flag: Bermuda",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇳",
                            category: 8,
                            name: "flag: Brunei",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇴",
                            category: 8,
                            name: "flag: Bolivia",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇶",
                            category: 8,
                            name: "flag: Caribbean Netherlands",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇷",
                            category: 8,
                            name: "flag: Brazil",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇸",
                            category: 8,
                            name: "flag: Bahamas",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇹",
                            category: 8,
                            name: "flag: Bhutan",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇻",
                            category: 8,
                            name: "flag: Bouvet Island",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇼",
                            category: 8,
                            name: "flag: Botswana",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇾",
                            category: 8,
                            name: "flag: Belarus",
                            version: "2.0"
                        }, {
                            emoji: "🇧🇿",
                            category: 8,
                            name: "flag: Belize",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇦",
                            category: 8,
                            name: "flag: Canada",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇨",
                            category: 8,
                            name: "flag: Cocos (Keeling) Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇩",
                            category: 8,
                            name: "flag: Congo - Kinshasa",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇫",
                            category: 8,
                            name: "flag: Central African Republic",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇬",
                            category: 8,
                            name: "flag: Congo - Brazzaville",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇭",
                            category: 8,
                            name: "flag: Switzerland",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇮",
                            category: 8,
                            name: "flag: Côte d’Ivoire",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇰",
                            category: 8,
                            name: "flag: Cook Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇱",
                            category: 8,
                            name: "flag: Chile",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇲",
                            category: 8,
                            name: "flag: Cameroon",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇳",
                            category: 8,
                            name: "flag: China",
                            version: "1.0"
                        }, {
                            emoji: "🇨🇴",
                            category: 8,
                            name: "flag: Colombia",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇵",
                            category: 8,
                            name: "flag: Clipperton Island",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇷",
                            category: 8,
                            name: "flag: Costa Rica",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇺",
                            category: 8,
                            name: "flag: Cuba",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇻",
                            category: 8,
                            name: "flag: Cape Verde",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇼",
                            category: 8,
                            name: "flag: Curaçao",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇽",
                            category: 8,
                            name: "flag: Christmas Island",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇾",
                            category: 8,
                            name: "flag: Cyprus",
                            version: "2.0"
                        }, {
                            emoji: "🇨🇿",
                            category: 8,
                            name: "flag: Czechia",
                            version: "2.0"
                        }, {
                            emoji: "🇩🇪",
                            category: 8,
                            name: "flag: Germany",
                            version: "1.0"
                        }, {
                            emoji: "🇩🇬",
                            category: 8,
                            name: "flag: Diego Garcia",
                            version: "2.0"
                        }, {
                            emoji: "🇩🇯",
                            category: 8,
                            name: "flag: Djibouti",
                            version: "2.0"
                        }, {
                            emoji: "🇩🇰",
                            category: 8,
                            name: "flag: Denmark",
                            version: "2.0"
                        }, {
                            emoji: "🇩🇲",
                            category: 8,
                            name: "flag: Dominica",
                            version: "2.0"
                        }, {
                            emoji: "🇩🇴",
                            category: 8,
                            name: "flag: Dominican Republic",
                            version: "2.0"
                        }, {
                            emoji: "🇩🇿",
                            category: 8,
                            name: "flag: Algeria",
                            version: "2.0"
                        }, {
                            emoji: "🇪🇦",
                            category: 8,
                            name: "flag: Ceuta & Melilla",
                            version: "2.0"
                        }, {
                            emoji: "🇪🇨",
                            category: 8,
                            name: "flag: Ecuador",
                            version: "2.0"
                        }, {
                            emoji: "🇪🇪",
                            category: 8,
                            name: "flag: Estonia",
                            version: "2.0"
                        }, {
                            emoji: "🇪🇬",
                            category: 8,
                            name: "flag: Egypt",
                            version: "2.0"
                        }, {
                            emoji: "🇪🇭",
                            category: 8,
                            name: "flag: Western Sahara",
                            version: "2.0"
                        }, {
                            emoji: "🇪🇷",
                            category: 8,
                            name: "flag: Eritrea",
                            version: "2.0"
                        }, {
                            emoji: "🇪🇸",
                            category: 8,
                            name: "flag: Spain",
                            version: "1.0"
                        }, {
                            emoji: "🇪🇹",
                            category: 8,
                            name: "flag: Ethiopia",
                            version: "2.0"
                        }, {
                            emoji: "🇪🇺",
                            category: 8,
                            name: "flag: European Union",
                            version: "2.0"
                        }, {
                            emoji: "🇫🇮",
                            category: 8,
                            name: "flag: Finland",
                            version: "2.0"
                        }, {
                            emoji: "🇫🇯",
                            category: 8,
                            name: "flag: Fiji",
                            version: "2.0"
                        }, {
                            emoji: "🇫🇰",
                            category: 8,
                            name: "flag: Falkland Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇫🇲",
                            category: 8,
                            name: "flag: Micronesia",
                            version: "2.0"
                        }, {
                            emoji: "🇫🇴",
                            category: 8,
                            name: "flag: Faroe Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇫🇷",
                            category: 8,
                            name: "flag: France",
                            version: "1.0"
                        }, {
                            emoji: "🇬🇦",
                            category: 8,
                            name: "flag: Gabon",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇧",
                            category: 8,
                            name: "flag: United Kingdom",
                            version: "1.0"
                        }, {
                            emoji: "🇬🇩",
                            category: 8,
                            name: "flag: Grenada",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇪",
                            category: 8,
                            name: "flag: Georgia",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇫",
                            category: 8,
                            name: "flag: French Guiana",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇬",
                            category: 8,
                            name: "flag: Guernsey",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇭",
                            category: 8,
                            name: "flag: Ghana",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇮",
                            category: 8,
                            name: "flag: Gibraltar",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇱",
                            category: 8,
                            name: "flag: Greenland",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇲",
                            category: 8,
                            name: "flag: Gambia",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇳",
                            category: 8,
                            name: "flag: Guinea",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇵",
                            category: 8,
                            name: "flag: Guadeloupe",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇶",
                            category: 8,
                            name: "flag: Equatorial Guinea",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇷",
                            category: 8,
                            name: "flag: Greece",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇸",
                            category: 8,
                            name: "flag: South Georgia & South Sandwich Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇹",
                            category: 8,
                            name: "flag: Guatemala",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇺",
                            category: 8,
                            name: "flag: Guam",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇼",
                            category: 8,
                            name: "flag: Guinea-Bissau",
                            version: "2.0"
                        }, {
                            emoji: "🇬🇾",
                            category: 8,
                            name: "flag: Guyana",
                            version: "2.0"
                        }, {
                            emoji: "🇭🇰",
                            category: 8,
                            name: "flag: Hong Kong SAR China",
                            version: "2.0"
                        }, {
                            emoji: "🇭🇲",
                            category: 8,
                            name: "flag: Heard & McDonald Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇭🇳",
                            category: 8,
                            name: "flag: Honduras",
                            version: "2.0"
                        }, {
                            emoji: "🇭🇷",
                            category: 8,
                            name: "flag: Croatia",
                            version: "2.0"
                        }, {
                            emoji: "🇭🇹",
                            category: 8,
                            name: "flag: Haiti",
                            version: "2.0"
                        }, {
                            emoji: "🇭🇺",
                            category: 8,
                            name: "flag: Hungary",
                            version: "2.0"
                        }, {
                            emoji: "🇮🇨",
                            category: 8,
                            name: "flag: Canary Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇮🇩",
                            category: 8,
                            name: "flag: Indonesia",
                            version: "2.0"
                        }, {
                            emoji: "🇮🇪",
                            category: 8,
                            name: "flag: Ireland",
                            version: "2.0"
                        }, {
                            emoji: "🇮🇱",
                            category: 8,
                            name: "flag: Israel",
                            version: "2.0"
                        }, {
                            emoji: "🇮🇲",
                            category: 8,
                            name: "flag: Isle of Man",
                            version: "2.0"
                        }, {
                            emoji: "🇮🇳",
                            category: 8,
                            name: "flag: India",
                            version: "2.0"
                        }, {
                            emoji: "🇮🇴",
                            category: 8,
                            name: "flag: British Indian Ocean Territory",
                            version: "2.0"
                        }, {
                            emoji: "🇮🇶",
                            category: 8,
                            name: "flag: Iraq",
                            version: "2.0"
                        }, {
                            emoji: "🇮🇷",
                            category: 8,
                            name: "flag: Iran",
                            version: "2.0"
                        }, {
                            emoji: "🇮🇸",
                            category: 8,
                            name: "flag: Iceland",
                            version: "2.0"
                        }, {
                            emoji: "🇮🇹",
                            category: 8,
                            name: "flag: Italy",
                            version: "1.0"
                        }, {
                            emoji: "🇯🇪",
                            category: 8,
                            name: "flag: Jersey",
                            version: "2.0"
                        }, {
                            emoji: "🇯🇲",
                            category: 8,
                            name: "flag: Jamaica",
                            version: "2.0"
                        }, {
                            emoji: "🇯🇴",
                            category: 8,
                            name: "flag: Jordan",
                            version: "2.0"
                        }, {
                            emoji: "🇯🇵",
                            category: 8,
                            name: "flag: Japan",
                            version: "1.0"
                        }, {
                            emoji: "🇰🇪",
                            category: 8,
                            name: "flag: Kenya",
                            version: "2.0"
                        }, {
                            emoji: "🇰🇬",
                            category: 8,
                            name: "flag: Kyrgyzstan",
                            version: "2.0"
                        }, {
                            emoji: "🇰🇭",
                            category: 8,
                            name: "flag: Cambodia",
                            version: "2.0"
                        }, {
                            emoji: "🇰🇮",
                            category: 8,
                            name: "flag: Kiribati",
                            version: "2.0"
                        }, {
                            emoji: "🇰🇲",
                            category: 8,
                            name: "flag: Comoros",
                            version: "2.0"
                        }, {
                            emoji: "🇰🇳",
                            category: 8,
                            name: "flag: St. Kitts & Nevis",
                            version: "2.0"
                        }, {
                            emoji: "🇰🇵",
                            category: 8,
                            name: "flag: North Korea",
                            version: "2.0"
                        }, {
                            emoji: "🇰🇷",
                            category: 8,
                            name: "flag: South Korea",
                            version: "1.0"
                        }, {
                            emoji: "🇰🇼",
                            category: 8,
                            name: "flag: Kuwait",
                            version: "2.0"
                        }, {
                            emoji: "🇰🇾",
                            category: 8,
                            name: "flag: Cayman Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇰🇿",
                            category: 8,
                            name: "flag: Kazakhstan",
                            version: "2.0"
                        }, {
                            emoji: "🇱🇦",
                            category: 8,
                            name: "flag: Laos",
                            version: "2.0"
                        }, {
                            emoji: "🇱🇧",
                            category: 8,
                            name: "flag: Lebanon",
                            version: "2.0"
                        }, {
                            emoji: "🇱🇨",
                            category: 8,
                            name: "flag: St. Lucia",
                            version: "2.0"
                        }, {
                            emoji: "🇱🇮",
                            category: 8,
                            name: "flag: Liechtenstein",
                            version: "2.0"
                        }, {
                            emoji: "🇱🇰",
                            category: 8,
                            name: "flag: Sri Lanka",
                            version: "2.0"
                        }, {
                            emoji: "🇱🇷",
                            category: 8,
                            name: "flag: Liberia",
                            version: "2.0"
                        }, {
                            emoji: "🇱🇸",
                            category: 8,
                            name: "flag: Lesotho",
                            version: "2.0"
                        }, {
                            emoji: "🇱🇹",
                            category: 8,
                            name: "flag: Lithuania",
                            version: "2.0"
                        }, {
                            emoji: "🇱🇺",
                            category: 8,
                            name: "flag: Luxembourg",
                            version: "2.0"
                        }, {
                            emoji: "🇱🇻",
                            category: 8,
                            name: "flag: Latvia",
                            version: "2.0"
                        }, {
                            emoji: "🇱🇾",
                            category: 8,
                            name: "flag: Libya",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇦",
                            category: 8,
                            name: "flag: Morocco",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇨",
                            category: 8,
                            name: "flag: Monaco",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇩",
                            category: 8,
                            name: "flag: Moldova",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇪",
                            category: 8,
                            name: "flag: Montenegro",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇫",
                            category: 8,
                            name: "flag: St. Martin",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇬",
                            category: 8,
                            name: "flag: Madagascar",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇭",
                            category: 8,
                            name: "flag: Marshall Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇰",
                            category: 8,
                            name: "flag: North Macedonia",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇱",
                            category: 8,
                            name: "flag: Mali",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇲",
                            category: 8,
                            name: "flag: Myanmar (Burma)",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇳",
                            category: 8,
                            name: "flag: Mongolia",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇴",
                            category: 8,
                            name: "flag: Macao SAR China",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇵",
                            category: 8,
                            name: "flag: Northern Mariana Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇶",
                            category: 8,
                            name: "flag: Martinique",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇷",
                            category: 8,
                            name: "flag: Mauritania",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇸",
                            category: 8,
                            name: "flag: Montserrat",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇹",
                            category: 8,
                            name: "flag: Malta",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇺",
                            category: 8,
                            name: "flag: Mauritius",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇻",
                            category: 8,
                            name: "flag: Maldives",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇼",
                            category: 8,
                            name: "flag: Malawi",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇽",
                            category: 8,
                            name: "flag: Mexico",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇾",
                            category: 8,
                            name: "flag: Malaysia",
                            version: "2.0"
                        }, {
                            emoji: "🇲🇿",
                            category: 8,
                            name: "flag: Mozambique",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇦",
                            category: 8,
                            name: "flag: Namibia",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇨",
                            category: 8,
                            name: "flag: New Caledonia",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇪",
                            category: 8,
                            name: "flag: Niger",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇫",
                            category: 8,
                            name: "flag: Norfolk Island",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇬",
                            category: 8,
                            name: "flag: Nigeria",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇮",
                            category: 8,
                            name: "flag: Nicaragua",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇱",
                            category: 8,
                            name: "flag: Netherlands",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇴",
                            category: 8,
                            name: "flag: Norway",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇵",
                            category: 8,
                            name: "flag: Nepal",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇷",
                            category: 8,
                            name: "flag: Nauru",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇺",
                            category: 8,
                            name: "flag: Niue",
                            version: "2.0"
                        }, {
                            emoji: "🇳🇿",
                            category: 8,
                            name: "flag: New Zealand",
                            version: "2.0"
                        }, {
                            emoji: "🇴🇲",
                            category: 8,
                            name: "flag: Oman",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇦",
                            category: 8,
                            name: "flag: Panama",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇪",
                            category: 8,
                            name: "flag: Peru",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇫",
                            category: 8,
                            name: "flag: French Polynesia",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇬",
                            category: 8,
                            name: "flag: Papua New Guinea",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇭",
                            category: 8,
                            name: "flag: Philippines",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇰",
                            category: 8,
                            name: "flag: Pakistan",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇱",
                            category: 8,
                            name: "flag: Poland",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇲",
                            category: 8,
                            name: "flag: St. Pierre & Miquelon",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇳",
                            category: 8,
                            name: "flag: Pitcairn Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇷",
                            category: 8,
                            name: "flag: Puerto Rico",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇸",
                            category: 8,
                            name: "flag: Palestinian Territories",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇹",
                            category: 8,
                            name: "flag: Portugal",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇼",
                            category: 8,
                            name: "flag: Palau",
                            version: "2.0"
                        }, {
                            emoji: "🇵🇾",
                            category: 8,
                            name: "flag: Paraguay",
                            version: "2.0"
                        }, {
                            emoji: "🇶🇦",
                            category: 8,
                            name: "flag: Qatar",
                            version: "2.0"
                        }, {
                            emoji: "🇷🇪",
                            category: 8,
                            name: "flag: Réunion",
                            version: "2.0"
                        }, {
                            emoji: "🇷🇴",
                            category: 8,
                            name: "flag: Romania",
                            version: "2.0"
                        }, {
                            emoji: "🇷🇸",
                            category: 8,
                            name: "flag: Serbia",
                            version: "2.0"
                        }, {
                            emoji: "🇷🇺",
                            category: 8,
                            name: "flag: Russia",
                            version: "1.0"
                        }, {
                            emoji: "🇷🇼",
                            category: 8,
                            name: "flag: Rwanda",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇦",
                            category: 8,
                            name: "flag: Saudi Arabia",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇧",
                            category: 8,
                            name: "flag: Solomon Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇨",
                            category: 8,
                            name: "flag: Seychelles",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇩",
                            category: 8,
                            name: "flag: Sudan",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇪",
                            category: 8,
                            name: "flag: Sweden",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇬",
                            category: 8,
                            name: "flag: Singapore",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇭",
                            category: 8,
                            name: "flag: St. Helena",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇮",
                            category: 8,
                            name: "flag: Slovenia",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇯",
                            category: 8,
                            name: "flag: Svalbard & Jan Mayen",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇰",
                            category: 8,
                            name: "flag: Slovakia",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇱",
                            category: 8,
                            name: "flag: Sierra Leone",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇲",
                            category: 8,
                            name: "flag: San Marino",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇳",
                            category: 8,
                            name: "flag: Senegal",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇴",
                            category: 8,
                            name: "flag: Somalia",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇷",
                            category: 8,
                            name: "flag: Suriname",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇸",
                            category: 8,
                            name: "flag: South Sudan",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇹",
                            category: 8,
                            name: "flag: São Tomé & Príncipe",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇻",
                            category: 8,
                            name: "flag: El Salvador",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇽",
                            category: 8,
                            name: "flag: Sint Maarten",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇾",
                            category: 8,
                            name: "flag: Syria",
                            version: "2.0"
                        }, {
                            emoji: "🇸🇿",
                            category: 8,
                            name: "flag: Eswatini",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇦",
                            category: 8,
                            name: "flag: Tristan da Cunha",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇨",
                            category: 8,
                            name: "flag: Turks & Caicos Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇩",
                            category: 8,
                            name: "flag: Chad",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇫",
                            category: 8,
                            name: "flag: French Southern Territories",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇬",
                            category: 8,
                            name: "flag: Togo",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇭",
                            category: 8,
                            name: "flag: Thailand",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇯",
                            category: 8,
                            name: "flag: Tajikistan",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇰",
                            category: 8,
                            name: "flag: Tokelau",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇱",
                            category: 8,
                            name: "flag: Timor-Leste",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇲",
                            category: 8,
                            name: "flag: Turkmenistan",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇳",
                            category: 8,
                            name: "flag: Tunisia",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇴",
                            category: 8,
                            name: "flag: Tonga",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇷",
                            category: 8,
                            name: "flag: Turkey",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇹",
                            category: 8,
                            name: "flag: Trinidad & Tobago",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇻",
                            category: 8,
                            name: "flag: Tuvalu",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇼",
                            category: 8,
                            name: "flag: Taiwan",
                            version: "2.0"
                        }, {
                            emoji: "🇹🇿",
                            category: 8,
                            name: "flag: Tanzania",
                            version: "2.0"
                        }, {
                            emoji: "🇺🇦",
                            category: 8,
                            name: "flag: Ukraine",
                            version: "2.0"
                        }, {
                            emoji: "🇺🇬",
                            category: 8,
                            name: "flag: Uganda",
                            version: "2.0"
                        }, {
                            emoji: "🇺🇲",
                            category: 8,
                            name: "flag: U.S. Outlying Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇺🇳",
                            category: 8,
                            name: "flag: United Nations",
                            version: "4.0"
                        }, {
                            emoji: "🇺🇸",
                            category: 8,
                            name: "flag: United States",
                            version: "1.0"
                        }, {
                            emoji: "🇺🇾",
                            category: 8,
                            name: "flag: Uruguay",
                            version: "2.0"
                        }, {
                            emoji: "🇺🇿",
                            category: 8,
                            name: "flag: Uzbekistan",
                            version: "2.0"
                        }, {
                            emoji: "🇻🇦",
                            category: 8,
                            name: "flag: Vatican City",
                            version: "2.0"
                        }, {
                            emoji: "🇻🇨",
                            category: 8,
                            name: "flag: St. Vincent & Grenadines",
                            version: "2.0"
                        }, {
                            emoji: "🇻🇪",
                            category: 8,
                            name: "flag: Venezuela",
                            version: "2.0"
                        }, {
                            emoji: "🇻🇬",
                            category: 8,
                            name: "flag: British Virgin Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇻🇮",
                            category: 8,
                            name: "flag: U.S. Virgin Islands",
                            version: "2.0"
                        }, {
                            emoji: "🇻🇳",
                            category: 8,
                            name: "flag: Vietnam",
                            version: "2.0"
                        }, {
                            emoji: "🇻🇺",
                            category: 8,
                            name: "flag: Vanuatu",
                            version: "2.0"
                        }, {
                            emoji: "🇼🇫",
                            category: 8,
                            name: "flag: Wallis & Futuna",
                            version: "2.0"
                        }, {
                            emoji: "🇼🇸",
                            category: 8,
                            name: "flag: Samoa",
                            version: "2.0"
                        }, {
                            emoji: "🇽🇰",
                            category: 8,
                            name: "flag: Kosovo",
                            version: "2.0"
                        }, {
                            emoji: "🇾🇪",
                            category: 8,
                            name: "flag: Yemen",
                            version: "2.0"
                        }, {
                            emoji: "🇾🇹",
                            category: 8,
                            name: "flag: Mayotte",
                            version: "2.0"
                        }, {
                            emoji: "🇿🇦",
                            category: 8,
                            name: "flag: South Africa",
                            version: "2.0"
                        }, {
                            emoji: "🇿🇲",
                            category: 8,
                            name: "flag: Zambia",
                            version: "2.0"
                        }, {
                            emoji: "🇿🇼",
                            category: 8,
                            name: "flag: Zimbabwe",
                            version: "2.0"
                        }, {
                            emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                            category: 8,
                            name: "flag: England",
                            version: "5.0"
                        }, {
                            emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
                            category: 8,
                            name: "flag: Scotland",
                            version: "5.0"
                        }, {
                            emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
                            category: 8,
                            name: "flag: Wales",
                            version: "5.0"
                        }]
                    };
                const _e = "emoji-picker__emoji";

                function Ee(e, o) {
                    const i = document.createElement(e);
                    return o && (i.className = o), i
                }

                function Me(e) {
                    for (; e.firstChild;) e.removeChild(e.firstChild)
                }

                function Se(e, o) {
                    e.dataset.loaded || (e.dataset.custom ? function(e) {
                        const o = Ee("img", "emoji-picker__custom-emoji");
                        e.dataset.emoji && (o.src = e.dataset.emoji, e.innerText = "", e.appendChild(o))
                    }(e) : "twemoji" === o.style && function(e, o) {
                        e.dataset.emoji && (e.innerHTML = Te.parse(e.dataset.emoji, o.twemojiOptions))
                    }(e, o), e.dataset.loaded = "true", e.style.opacity = "1")
                }
                class Ie {
                    constructor(e, o) {
                        this.events = e, this.options = o
                    }
                    render() {
                        const e = Ee("div", "emoji-picker__preview");
                        return this.emoji = Ee("div", "emoji-picker__preview-emoji"), e.appendChild(this.emoji), this.name = Ee("div", "emoji-picker__preview-name"), e.appendChild(this.name), this.events.on("showPreview", e => this.showPreview(e)), this.events.on("hidePreview", () => this.hidePreview()), e
                    }
                    showPreview(e) {
                        let o = e.emoji;
                        e.custom ? o = `<img class="emoji-picker__custom-emoji" src="${e.emoji}">` : "twemoji" === this.options.style && (o = Te.parse(e.emoji, this.options.twemojiOptions)), this.emoji.innerHTML = o, this.name.innerHTML = e.name
                    }
                    hidePreview() {
                        this.emoji.innerHTML = "", this.name.innerHTML = ""
                    }
                }

                function ze(e, o) {
                    for (var i = 0; i < o.length; i++) {
                        var n = o[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function Oe(e, o, i) {
                    return o in e ? Object.defineProperty(e, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[o] = i, e
                }

                function Be(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var i = null != arguments[o] ? arguments[o] : {},
                            n = Object.keys(i);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(i, e).enumerable
                        })))), n.forEach((function(o) {
                            Oe(e, o, i[o])
                        }))
                    }
                    return e
                }

                function Le(e, o) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, o) {
                        var i = [],
                            n = !0,
                            t = !1,
                            a = void 0;
                        try {
                            for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (i.push(r.value), !o || i.length !== o); n = !0);
                        } catch (e) {
                            t = !0, a = e
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (t) throw a
                            }
                        }
                        return i
                    }(e, o) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }
                var Pe = function() {},
                    Ne = {},
                    De = {},
                    Fe = {
                        mark: Pe,
                        measure: Pe
                    };
                try {
                    "undefined" != typeof window && (Ne = window), "undefined" != typeof document && (De = document), "undefined" != typeof MutationObserver && MutationObserver, "undefined" != typeof performance && (Fe = performance)
                } catch (n) {}
                var Re = (Ne.navigator || {}).userAgent,
                    qe = void 0 === Re ? "" : Re,
                    He = Ne,
                    Ve = De,
                    Ue = Fe,
                    $e = (He.document, !!Ve.documentElement && !!Ve.head && "function" == typeof Ve.addEventListener && "function" == typeof Ve.createElement),
                    We = (~qe.indexOf("MSIE") || qe.indexOf("Trident/"), "group"),
                    Je = "primary",
                    Ge = "secondary",
                    Ke = He.FontAwesomeConfig || {};
                Ve && "function" == typeof Ve.querySelector && [
                    ["data-family-prefix", "familyPrefix"],
                    ["data-replacement-class", "replacementClass"],
                    ["data-auto-replace-svg", "autoReplaceSvg"],
                    ["data-auto-add-css", "autoAddCss"],
                    ["data-auto-a11y", "autoA11y"],
                    ["data-search-pseudo-elements", "searchPseudoElements"],
                    ["data-observe-mutations", "observeMutations"],
                    ["data-mutate-approach", "mutateApproach"],
                    ["data-keep-original-source", "keepOriginalSource"],
                    ["data-measure-performance", "measurePerformance"],
                    ["data-show-missing-icons", "showMissingIcons"]
                ].forEach((function(e) {
                    var o = Le(e, 2),
                        i = o[0],
                        n = o[1],
                        t = function(e) {
                            return "" === e || "false" !== e && ("true" === e || e)
                        }(function(e) {
                            var o = Ve.querySelector("script[" + e + "]");
                            if (o) return o.getAttribute(e)
                        }(i));
                    null != t && (Ke[n] = t)
                }));
                var Qe = Be({}, {
                    familyPrefix: "fa",
                    replacementClass: "svg-inline--fa",
                    autoReplaceSvg: !0,
                    autoAddCss: !0,
                    autoA11y: !0,
                    searchPseudoElements: !1,
                    observeMutations: !0,
                    mutateApproach: "async",
                    keepOriginalSource: !0,
                    measurePerformance: !1,
                    showMissingIcons: !0
                }, Ke);
                Qe.autoReplaceSvg || (Qe.observeMutations = !1);
                var Ye = Be({}, Qe);
                He.FontAwesomeConfig = Ye;
                var Xe = He || {};
                Xe.___FONT_AWESOME___ || (Xe.___FONT_AWESOME___ = {}), Xe.___FONT_AWESOME___.styles || (Xe.___FONT_AWESOME___.styles = {}), Xe.___FONT_AWESOME___.hooks || (Xe.___FONT_AWESOME___.hooks = {}), Xe.___FONT_AWESOME___.shims || (Xe.___FONT_AWESOME___.shims = []);
                var Ze = Xe.___FONT_AWESOME___,
                    eo = [];
                $e && ((Ve.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ve.readyState) || Ve.addEventListener("DOMContentLoaded", (function e() {
                    Ve.removeEventListener("DOMContentLoaded", e), eo.map((function(e) {
                        return e()
                    }))
                }))), "undefined" != typeof e && void 0 !== e.process && e.process.emit, "undefined" == typeof setImmediate ? setTimeout : setImmediate;
                var oo = {
                    size: 16,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    flipX: !1,
                    flipY: !1
                };

                function io() {
                    for (var e = 12, o = ""; e-- > 0;) o += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
                    return o
                }

                function no(e) {
                    return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }

                function to(e) {
                    return Object.keys(e || {}).reduce((function(o, i) {
                        return o + "".concat(i, ": ").concat(e[i], ";")
                    }), "")
                }

                function ao(e) {
                    return e.size !== oo.size || e.x !== oo.x || e.y !== oo.y || e.rotate !== oo.rotate || e.flipX || e.flipY
                }

                function ro(e) {
                    var o = e.transform,
                        i = e.containerWidth,
                        n = e.iconWidth,
                        t = {
                            transform: "translate(".concat(i / 2, " 256)")
                        },
                        a = "translate(".concat(32 * o.x, ", ").concat(32 * o.y, ") "),
                        r = "scale(".concat(o.size / 16 * (o.flipX ? -1 : 1), ", ").concat(o.size / 16 * (o.flipY ? -1 : 1), ") "),
                        s = "rotate(".concat(o.rotate, " 0 0)");
                    return {
                        outer: t,
                        inner: {
                            transform: "".concat(a, " ").concat(r, " ").concat(s)
                        },
                        path: {
                            transform: "translate(".concat(n / 2 * -1, " -256)")
                        }
                    }
                }
                var so = {
                    x: 0,
                    y: 0,
                    width: "100%",
                    height: "100%"
                };

                function co(e) {
                    var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return e.attributes && (e.attributes.fill || o) && (e.attributes.fill = "black"), e
                }

                function mo(e) {
                    var o = e.icons,
                        i = o.main,
                        n = o.mask,
                        t = e.prefix,
                        a = e.iconName,
                        r = e.transform,
                        s = e.symbol,
                        c = e.title,
                        m = e.maskId,
                        l = e.titleId,
                        d = e.extra,
                        u = e.watchable,
                        g = void 0 !== u && u,
                        v = n.found ? n : i,
                        f = v.width,
                        h = v.height,
                        y = "fa-w-".concat(Math.ceil(f / h * 16)),
                        p = [Ye.replacementClass, a ? "".concat(Ye.familyPrefix, "-").concat(a) : "", y].filter((function(e) {
                            return -1 === d.classes.indexOf(e)
                        })).concat(d.classes).join(" "),
                        j = {
                            children: [],
                            attributes: Be({}, d.attributes, {
                                "data-prefix": t,
                                "data-icon": a,
                                class: p,
                                role: d.attributes.role || "img",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 ".concat(f, " ").concat(h)
                            })
                        };
                    g && (j.attributes["data-fa-i2svg"] = ""), c && j.children.push({
                        tag: "title",
                        attributes: {
                            id: j.attributes["aria-labelledby"] || "title-".concat(l || io())
                        },
                        children: [c]
                    });
                    var b = Be({}, j, {
                            prefix: t,
                            iconName: a,
                            main: i,
                            mask: n,
                            maskId: m,
                            transform: r,
                            symbol: s,
                            styles: d.styles
                        }),
                        w = n.found && i.found ? function(e) {
                            var o, i = e.children,
                                n = e.attributes,
                                t = e.main,
                                a = e.mask,
                                r = e.maskId,
                                s = e.transform,
                                c = t.width,
                                m = t.icon,
                                l = a.width,
                                d = a.icon,
                                u = ro({
                                    transform: s,
                                    containerWidth: l,
                                    iconWidth: c
                                }),
                                g = {
                                    tag: "rect",
                                    attributes: Be({}, so, {
                                        fill: "white"
                                    })
                                },
                                v = m.children ? {
                                    children: m.children.map(co)
                                } : {},
                                f = {
                                    tag: "g",
                                    attributes: Be({}, u.inner),
                                    children: [co(Be({
                                        tag: m.tag,
                                        attributes: Be({}, m.attributes, u.path)
                                    }, v))]
                                },
                                h = {
                                    tag: "g",
                                    attributes: Be({}, u.outer),
                                    children: [f]
                                },
                                y = "mask-".concat(r || io()),
                                p = "clip-".concat(r || io()),
                                j = {
                                    tag: "mask",
                                    attributes: Be({}, so, {
                                        id: y,
                                        maskUnits: "userSpaceOnUse",
                                        maskContentUnits: "userSpaceOnUse"
                                    }),
                                    children: [g, h]
                                },
                                b = {
                                    tag: "defs",
                                    children: [{
                                        tag: "clipPath",
                                        attributes: {
                                            id: p
                                        },
                                        children: (o = d, "g" === o.tag ? o.children : [o])
                                    }, j]
                                };
                            return i.push(b, {
                                tag: "rect",
                                attributes: Be({
                                    fill: "currentColor",
                                    "clip-path": "url(#".concat(p, ")"),
                                    mask: "url(#".concat(y, ")")
                                }, so)
                            }), {
                                children: i,
                                attributes: n
                            }
                        }(b) : function(e) {
                            var o = e.children,
                                i = e.attributes,
                                n = e.main,
                                t = e.transform,
                                a = to(e.styles);
                            if (a.length > 0 && (i.style = a), ao(t)) {
                                var r = ro({
                                    transform: t,
                                    containerWidth: n.width,
                                    iconWidth: n.width
                                });
                                o.push({
                                    tag: "g",
                                    attributes: Be({}, r.outer),
                                    children: [{
                                        tag: "g",
                                        attributes: Be({}, r.inner),
                                        children: [{
                                            tag: n.icon.tag,
                                            children: n.icon.children,
                                            attributes: Be({}, n.icon.attributes, r.path)
                                        }]
                                    }]
                                })
                            } else o.push(n.icon);
                            return {
                                children: o,
                                attributes: i
                            }
                        }(b),
                        x = w.children,
                        k = w.attributes;
                    return b.children = x, b.attributes = k, s ? function(e) {
                        var o = e.prefix,
                            i = e.iconName,
                            n = e.children,
                            t = e.attributes,
                            a = e.symbol;
                        return [{
                            tag: "svg",
                            attributes: {
                                style: "display: none;"
                            },
                            children: [{
                                tag: "symbol",
                                attributes: Be({}, t, {
                                    id: !0 === a ? "".concat(o, "-").concat(Ye.familyPrefix, "-").concat(i) : a
                                }),
                                children: n
                            }]
                        }]
                    }(b) : function(e) {
                        var o = e.children,
                            i = e.main,
                            n = e.mask,
                            t = e.attributes,
                            a = e.styles,
                            r = e.transform;
                        if (ao(r) && i.found && !n.found) {
                            var s = {
                                x: i.width / i.height / 2,
                                y: .5
                            };
                            t.style = to(Be({}, a, {
                                "transform-origin": "".concat(s.x + r.x / 16, "em ").concat(s.y + r.y / 16, "em")
                            }))
                        }
                        return [{
                            tag: "svg",
                            attributes: t,
                            children: o
                        }]
                    }(b)
                }
                var lo = (Ye.measurePerformance && Ue && Ue.mark && Ue.measure, function(e, o, i, n) {
                    var t, a, r, s = Object.keys(e),
                        c = s.length,
                        m = void 0 !== n ? function(e, o) {
                            return function(i, n, t, a) {
                                return e.call(o, i, n, t, a)
                            }
                        }(o, n) : o;
                    for (void 0 === i ? (t = 1, r = e[s[0]]) : (t = 0, r = i); t < c; t++) r = m(r, e[a = s[t]], a, e);
                    return r
                });

                function uo(e, o) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = i.skipHooks,
                        t = void 0 !== n && n,
                        a = Object.keys(o).reduce((function(e, i) {
                            var n = o[i];
                            return n.icon ? e[n.iconName] = n.icon : e[i] = n, e
                        }), {});
                    "function" != typeof Ze.hooks.addPack || t ? Ze.styles[e] = Be({}, Ze.styles[e] || {}, a) : Ze.hooks.addPack(e, a), "fas" === e && uo("fa", o)
                }
                var go = Ze.styles,
                    vo = Ze.shims,
                    fo = function() {
                        var e = function(e) {
                            return lo(go, (function(o, i, n) {
                                return o[n] = lo(i, e, {}), o
                            }), {})
                        };
                        e((function(e, o, i) {
                            return o[3] && (e[o[3]] = i), e
                        })), e((function(e, o, i) {
                            var n = o[2];
                            return e[i] = i, n.forEach((function(o) {
                                e[o] = i
                            })), e
                        }));
                        var o = "far" in go;
                        lo(vo, (function(e, i) {
                            var n = i[0],
                                t = i[1],
                                a = i[2];
                            return "far" !== t || o || (t = "fas"), e[n] = {
                                prefix: t,
                                iconName: a
                            }, e
                        }), {})
                    };

                function ho(e, o, i) {
                    if (e && e[o] && e[o][i]) return {
                        prefix: o,
                        iconName: i,
                        icon: e[o][i]
                    }
                }

                function yo(e) {
                    var o = e.tag,
                        i = e.attributes,
                        n = void 0 === i ? {} : i,
                        t = e.children,
                        a = void 0 === t ? [] : t;
                    return "string" == typeof e ? no(e) : "<".concat(o, " ").concat(function(e) {
                        return Object.keys(e || {}).reduce((function(o, i) {
                            return o + "".concat(i, '="').concat(no(e[i]), '" ')
                        }), "").trim()
                    }(n), ">").concat(a.map(yo).join(""), "</").concat(o, ">")
                }

                function po(e) {
                    this.name = "MissingIcon", this.message = e || "Icon unavailable", this.stack = (new Error).stack
                }
                fo(), Ze.styles, po.prototype = Object.create(Error.prototype), po.prototype.constructor = po;
                var jo = {
                        fill: "currentColor"
                    },
                    bo = {
                        attributeType: "XML",
                        repeatCount: "indefinite",
                        dur: "2s"
                    },
                    wo = (Be({}, jo, {
                        d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                    }), Be({}, bo, {
                        attributeName: "opacity"
                    }));

                function xo(e) {
                    var o = e[0],
                        i = e[1],
                        n = Le(e.slice(4), 1)[0];
                    return {
                        found: !0,
                        width: o,
                        height: i,
                        icon: Array.isArray(n) ? {
                            tag: "g",
                            attributes: {
                                class: "".concat(Ye.familyPrefix, "-").concat(We)
                            },
                            children: [{
                                tag: "path",
                                attributes: {
                                    class: "".concat(Ye.familyPrefix, "-").concat(Ge),
                                    fill: "currentColor",
                                    d: n[0]
                                }
                            }, {
                                tag: "path",
                                attributes: {
                                    class: "".concat(Ye.familyPrefix, "-").concat(Je),
                                    fill: "currentColor",
                                    d: n[1]
                                }
                            }]
                        } : {
                            tag: "path",
                            attributes: {
                                fill: "currentColor",
                                d: n
                            }
                        }
                    }
                }

                function ko() {
                    Ye.autoAddCss && !Eo && (function(e) {
                        if (e && $e) {
                            var o = Ve.createElement("style");
                            o.setAttribute("type", "text/css"), o.innerHTML = e;
                            for (var i = Ve.head.childNodes, n = null, t = i.length - 1; t > -1; t--) {
                                var a = i[t],
                                    r = (a.tagName || "").toUpperCase();
                                ["STYLE", "LINK"].indexOf(r) > -1 && (n = a)
                            }
                            Ve.head.insertBefore(o, n)
                        }
                    }(function() {
                        var e = "fa",
                            o = "svg-inline--fa",
                            i = Ye.familyPrefix,
                            n = Ye.replacementClass,
                            t = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
                        if (i !== e || n !== o) {
                            var a = new RegExp("\\.".concat(e, "\\-"), "g"),
                                r = new RegExp("\\--".concat(e, "\\-"), "g"),
                                s = new RegExp("\\.".concat(o), "g");
                            t = t.replace(a, ".".concat(i, "-")).replace(r, "--".concat(i, "-")).replace(s, ".".concat(n))
                        }
                        return t
                    }()), Eo = !0)
                }

                function Co(e, o) {
                    return Object.defineProperty(e, "abstract", {
                        get: o
                    }), Object.defineProperty(e, "html", {
                        get: function() {
                            return e.abstract.map((function(e) {
                                return yo(e)
                            }))
                        }
                    }), Object.defineProperty(e, "node", {
                        get: function() {
                            if ($e) {
                                var o = Ve.createElement("div");
                                return o.innerHTML = e.html, o.children
                            }
                        }
                    }), e
                }

                function To(e) {
                    var o = e.prefix,
                        i = void 0 === o ? "fa" : o,
                        n = e.iconName;
                    if (n) return ho(_o.definitions, i, n) || ho(Ze.styles, i, n)
                }
                Be({}, jo, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }), Be({}, bo, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                }), Be({}, wo, {
                    values: "1;0;1;1;0;1;"
                }), Be({}, jo, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }), Be({}, wo, {
                    values: "1;0;0;0;0;1;"
                }), Be({}, jo, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }), Be({}, wo, {
                    values: "0;0;1;1;0;0;"
                }), Ze.styles, Ze.styles;
                var Ao, _o = new(function() {
                        function e() {
                            ! function(e, o) {
                                if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.definitions = {}
                        }
                        var o, i, n;
                        return o = e, (i = [{
                            key: "add",
                            value: function() {
                                for (var e = this, o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
                                var t = i.reduce(this._pullDefinitions, {});
                                Object.keys(t).forEach((function(o) {
                                    e.definitions[o] = Be({}, e.definitions[o] || {}, t[o]), uo(o, t[o]), fo()
                                }))
                            }
                        }, {
                            key: "reset",
                            value: function() {
                                this.definitions = {}
                            }
                        }, {
                            key: "_pullDefinitions",
                            value: function(e, o) {
                                var i = o.prefix && o.iconName && o.icon ? {
                                    0: o
                                } : o;
                                return Object.keys(i).map((function(o) {
                                    var n = i[o],
                                        t = n.prefix,
                                        a = n.iconName,
                                        r = n.icon;
                                    e[t] || (e[t] = {}), e[t][a] = r
                                })), e
                            }
                        }]) && ze(o.prototype, i), n && ze(o, n), e
                    }()),
                    Eo = !1,
                    Mo = (Ao = function(e) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = o.transform,
                            n = void 0 === i ? oo : i,
                            t = o.symbol,
                            a = void 0 !== t && t,
                            r = o.mask,
                            s = void 0 === r ? null : r,
                            c = o.maskId,
                            m = void 0 === c ? null : c,
                            l = o.title,
                            d = void 0 === l ? null : l,
                            u = o.titleId,
                            g = void 0 === u ? null : u,
                            v = o.classes,
                            f = void 0 === v ? [] : v,
                            h = o.attributes,
                            y = void 0 === h ? {} : h,
                            p = o.styles,
                            j = void 0 === p ? {} : p;
                        if (e) {
                            var b = e.prefix,
                                w = e.iconName,
                                x = e.icon;
                            return Co(Be({
                                type: "icon"
                            }, e), (function() {
                                return ko(), Ye.autoA11y && (d ? y["aria-labelledby"] = "".concat(Ye.replacementClass, "-title-").concat(g || io()) : (y["aria-hidden"] = "true", y.focusable = "false")), mo({
                                    icons: {
                                        main: xo(x),
                                        mask: s ? xo(s.icon) : {
                                            found: !1,
                                            width: null,
                                            height: null,
                                            icon: {}
                                        }
                                    },
                                    prefix: b,
                                    iconName: w,
                                    transform: Be({}, oo, n),
                                    symbol: a,
                                    title: d,
                                    maskId: m,
                                    titleId: g,
                                    extra: {
                                        attributes: y,
                                        styles: j,
                                        classes: f
                                    }
                                })
                            }))
                        }
                    }, function(e) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = (e || {}).icon ? e : To(e || {}),
                            n = o.mask;
                        return n && (n = (n || {}).icon ? n : To(n || {})), Ao(i, Be({}, o, {
                            mask: n
                        }))
                    });
                _o.add({
                    prefix: "far",
                    iconName: "building",
                    icon: [448, 512, [], "f1ad", "M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"]
                }, {
                    prefix: "fas",
                    iconName: "cat",
                    icon: [512, 512, [], "f6be", "M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"]
                }, {
                    prefix: "fas",
                    iconName: "coffee",
                    icon: [640, 512, [], "f0f4", "M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"]
                }, {
                    prefix: "far",
                    iconName: "flag",
                    icon: [512, 512, [], "f024", "M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"]
                }, {
                    prefix: "far",
                    iconName: "frown",
                    icon: [496, 512, [], "f119", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"]
                }, {
                    prefix: "fas",
                    iconName: "futbol",
                    icon: [512, 512, [], "f1e3", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"]
                }, {
                    prefix: "fas",
                    iconName: "history",
                    icon: [512, 512, [], "f1da", "M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"]
                }, {
                    prefix: "fas",
                    iconName: "icons",
                    icon: [512, 512, [], "f86d", "M116.65 219.35a15.68 15.68 0 0 0 22.65 0l96.75-99.83c28.15-29 26.5-77.1-4.91-103.88C203.75-7.7 163-3.5 137.86 22.44L128 32.58l-9.85-10.14C93.05-3.5 52.25-7.7 24.86 15.64c-31.41 26.78-33 74.85-5 103.88zm143.92 100.49h-48l-7.08-14.24a27.39 27.39 0 0 0-25.66-17.78h-71.71a27.39 27.39 0 0 0-25.66 17.78l-7 14.24h-48A27.45 27.45 0 0 0 0 347.3v137.25A27.44 27.44 0 0 0 27.43 512h233.14A27.45 27.45 0 0 0 288 484.55V347.3a27.45 27.45 0 0 0-27.43-27.46zM144 468a52 52 0 1 1 52-52 52 52 0 0 1-52 52zm355.4-115.9h-60.58l22.36-50.75c2.1-6.65-3.93-13.21-12.18-13.21h-75.59c-6.3 0-11.66 3.9-12.5 9.1l-16.8 106.93c-1 6.3 4.88 11.89 12.5 11.89h62.31l-24.2 83c-1.89 6.65 4.2 12.9 12.23 12.9a13.26 13.26 0 0 0 10.92-5.25l92.4-138.91c4.88-6.91-1.16-15.7-10.87-15.7zM478.08.33L329.51 23.17C314.87 25.42 304 38.92 304 54.83V161.6a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V99.66l112-17.22v47.18a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V32c0-19.48-16-34.42-33.92-31.67z"]
                }, {
                    prefix: "far",
                    iconName: "lightbulb",
                    icon: [352, 512, [], "f0eb", "M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]
                }, {
                    prefix: "fas",
                    iconName: "music",
                    icon: [512, 512, [], "f001", "M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"]
                }, {
                    prefix: "fas",
                    iconName: "search",
                    icon: [512, 512, [], "f002", "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]
                }, {
                    prefix: "far",
                    iconName: "smile",
                    icon: [496, 512, [], "f118", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"]
                }, {
                    prefix: "fas",
                    iconName: "times",
                    icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]
                }, {
                    prefix: "fas",
                    iconName: "user",
                    icon: [448, 512, [], "f007", "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]
                });
                const So = Mo({
                        prefix: "far",
                        iconName: "building"
                    }).html[0],
                    Io = Mo({
                        prefix: "fas",
                        iconName: "cat"
                    }).html[0],
                    zo = Mo({
                        prefix: "fas",
                        iconName: "coffee"
                    }).html[0],
                    Oo = Mo({
                        prefix: "far",
                        iconName: "flag"
                    }).html[0],
                    Bo = Mo({
                        prefix: "fas",
                        iconName: "futbol"
                    }).html[0],
                    Lo = Mo({
                        prefix: "far",
                        iconName: "frown"
                    }).html[0],
                    Po = Mo({
                        prefix: "fas",
                        iconName: "history"
                    }).html[0],
                    No = Mo({
                        prefix: "fas",
                        iconName: "icons"
                    }).html[0],
                    Do = Mo({
                        prefix: "far",
                        iconName: "lightbulb"
                    }).html[0],
                    Fo = Mo({
                        prefix: "fas",
                        iconName: "music"
                    }).html[0],
                    Ro = Mo({
                        prefix: "fas",
                        iconName: "search"
                    }).html[0],
                    qo = Mo({
                        prefix: "far",
                        iconName: "smile"
                    }).html[0],
                    Ho = Mo({
                        prefix: "fas",
                        iconName: "times"
                    }).html[0],
                    Vo = Mo({
                        prefix: "fas",
                        iconName: "user"
                    }).html[0];

                function Uo(e) {
                    const o = document.createElement("img");
                    return o.src = e, o
                }

                function $o() {
                    const e = localStorage.getItem("emojiPicker.recent");
                    return (e ? JSON.parse(e) : []).filter(e => !!e.emoji)
                }
                class Wo {
                    constructor(e, o, i, n, t, a = !0) {
                        this.emoji = e, this.showVariants = o, this.showPreview = i, this.events = n, this.options = t, this.lazy = a
                    }
                    render() {
                        this.emojiButton = Ee("button", _e);
                        let e = this.emoji.emoji;
                        return this.emoji.custom ? e = this.lazy ? qo : `<img class="emoji-picker__custom-emoji" src="${this.emoji.emoji}">` : "twemoji" === this.options.style && (e = this.lazy ? qo : Te.parse(this.emoji.emoji, this.options.twemojiOptions)), this.emojiButton.innerHTML = e, this.emojiButton.tabIndex = -1, this.emojiButton.dataset.emoji = this.emoji.emoji, this.emoji.custom && (this.emojiButton.dataset.custom = "true"), this.emojiButton.title = this.emoji.name, this.emojiButton.addEventListener("focus", () => this.onEmojiHover()), this.emojiButton.addEventListener("blur", () => this.onEmojiLeave()), this.emojiButton.addEventListener("click", () => this.onEmojiClick()), this.emojiButton.addEventListener("mouseover", () => this.onEmojiHover()), this.emojiButton.addEventListener("mouseout", () => this.onEmojiLeave()), "twemoji" === this.options.style && this.lazy && (this.emojiButton.style.opacity = "0.25"), this.emojiButton
                    }
                    onEmojiClick() {
                        this.emoji.variations && this.showVariants && this.options.showVariants || !this.options.showRecents || function(e, o) {
                            const i = $o(),
                                n = {
                                    emoji: e.emoji,
                                    name: e.name,
                                    key: e.key || e.name,
                                    custom: e.custom
                                };
                            localStorage.setItem("emojiPicker.recent", JSON.stringify([n, ...i.filter(e => !!e.emoji && e.key !== n.key)].slice(0, o.recentsCount)))
                        }(this.emoji, this.options), this.events.emit("emoji", {
                            emoji: this.emoji,
                            showVariants: this.showVariants,
                            button: this.emojiButton
                        })
                    }
                    onEmojiHover() {
                        this.showPreview && this.events.emit("showPreview", this.emoji)
                    }
                    onEmojiLeave() {
                        this.showPreview && this.events.emit("hidePreview")
                    }
                }
                class Jo {
                    constructor(e, o, i, n, t = !0) {
                        this.showVariants = o, this.events = i, this.options = n, this.lazy = t, this.emojis = e.filter(e => !e.version || parseFloat(e.version) <= parseFloat(n.emojiVersion))
                    }
                    render() {
                        const e = Ee("div", "emoji-picker__container");
                        return this.emojis.forEach(o => e.appendChild(new Wo(o, this.showVariants, !0, this.events, this.options, this.lazy).render())), e
                    }
                }
                var Go, Ko = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof e ? e : "undefined" != typeof self ? self : {},
                    Qo = (function(e) {
                        var o, i;
                        o = Ko, i = function() {
                            var e = "undefined" == typeof window,
                                o = new Map,
                                i = new Map,
                                n = [];
                            n.total = 0;
                            var t = [],
                                a = [];

                            function r() {
                                o.clear(), i.clear(), t = [], a = []
                            }

                            function s(e) {
                                for (var o = -9007199254740991, i = e.length - 1; i >= 0; --i) {
                                    var n = e[i];
                                    if (null !== n) {
                                        var t = n.score;
                                        t > o && (o = t)
                                    }
                                }
                                return -9007199254740991 === o ? null : o
                            }

                            function c(e, o) {
                                var i = e[o];
                                if (void 0 !== i) return i;
                                var n = o;
                                Array.isArray(o) || (n = o.split("."));
                                for (var t = n.length, a = -1; e && ++a < t;) e = e[n[a]];
                                return e
                            }

                            function m(e) {
                                return "object" == typeof e
                            }
                            var l = function() {
                                    var e = [],
                                        o = 0,
                                        i = {};

                                    function n() {
                                        for (var i = 0, n = e[i], t = 1; t < o;) {
                                            var a = t + 1;
                                            i = t, a < o && e[a].score < e[t].score && (i = a), e[i - 1 >> 1] = e[i], t = 1 + (i << 1)
                                        }
                                        for (var r = i - 1 >> 1; i > 0 && n.score < e[r].score; r = (i = r) - 1 >> 1) e[i] = e[r];
                                        e[i] = n
                                    }
                                    return i.add = function(i) {
                                        var n = o;
                                        e[o++] = i;
                                        for (var t = n - 1 >> 1; n > 0 && i.score < e[t].score; t = (n = t) - 1 >> 1) e[n] = e[t];
                                        e[n] = i
                                    }, i.poll = function() {
                                        if (0 !== o) {
                                            var i = e[0];
                                            return e[0] = e[--o], n(), i
                                        }
                                    }, i.peek = function(i) {
                                        if (0 !== o) return e[0]
                                    }, i.replaceTop = function(o) {
                                        e[0] = o, n()
                                    }, i
                                },
                                d = l();
                            return function u(g) {
                                var v = {
                                    single: function(e, o, i) {
                                        return e ? (m(e) || (e = v.getPreparedSearch(e)), o ? (m(o) || (o = v.getPrepared(o)), ((i && void 0 !== i.allowTypo ? i.allowTypo : !g || void 0 === g.allowTypo || g.allowTypo) ? v.algorithm : v.algorithmNoTypo)(e, o, e[0])) : null) : null
                                    },
                                    go: function(e, o, i) {
                                        if (!e) return n;
                                        var t = (e = v.prepareSearch(e))[0],
                                            a = i && i.threshold || g && g.threshold || -9007199254740991,
                                            r = i && i.limit || g && g.limit || 9007199254740991,
                                            l = (i && void 0 !== i.allowTypo ? i.allowTypo : !g || void 0 === g.allowTypo || g.allowTypo) ? v.algorithm : v.algorithmNoTypo,
                                            u = 0,
                                            f = 0,
                                            h = o.length;
                                        if (i && i.keys)
                                            for (var y = i.scoreFn || s, p = i.keys, j = p.length, b = h - 1; b >= 0; --b) {
                                                for (var w = o[b], x = new Array(j), k = j - 1; k >= 0; --k)(A = c(w, T = p[k])) ? (m(A) || (A = v.getPrepared(A)), x[k] = l(e, A, t)) : x[k] = null;
                                                x.obj = w;
                                                var C = y(x);
                                                null !== C && (C < a || (x.score = C, u < r ? (d.add(x), ++u) : (++f, C > d.peek().score && d.replaceTop(x))))
                                            } else if (i && i.key) {
                                                var T = i.key;
                                                for (b = h - 1; b >= 0; --b)(A = c(w = o[b], T)) && (m(A) || (A = v.getPrepared(A)), null !== (_ = l(e, A, t)) && (_.score < a || (_ = {
                                                    target: _.target,
                                                    _targetLowerCodes: null,
                                                    _nextBeginningIndexes: null,
                                                    score: _.score,
                                                    indexes: _.indexes,
                                                    obj: w
                                                }, u < r ? (d.add(_), ++u) : (++f, _.score > d.peek().score && d.replaceTop(_)))))
                                            } else
                                                for (b = h - 1; b >= 0; --b) {
                                                    var A, _;
                                                    (A = o[b]) && (m(A) || (A = v.getPrepared(A)), null !== (_ = l(e, A, t)) && (_.score < a || (u < r ? (d.add(_), ++u) : (++f, _.score > d.peek().score && d.replaceTop(_)))))
                                                }
                                            if (0 === u) return n;
                                        var E = new Array(u);
                                        for (b = u - 1; b >= 0; --b) E[b] = d.poll();
                                        return E.total = u + f, E
                                    },
                                    goAsync: function(o, i, t) {
                                        var a = !1,
                                            r = new Promise((function(r, d) {
                                                if (!o) return r(n);
                                                var u = (o = v.prepareSearch(o))[0],
                                                    f = l(),
                                                    h = i.length - 1,
                                                    y = t && t.threshold || g && g.threshold || -9007199254740991,
                                                    p = t && t.limit || g && g.limit || 9007199254740991,
                                                    j = (t && void 0 !== t.allowTypo ? t.allowTypo : !g || void 0 === g.allowTypo || g.allowTypo) ? v.algorithm : v.algorithmNoTypo,
                                                    b = 0,
                                                    w = 0;

                                                function x() {
                                                    if (a) return d("canceled");
                                                    var l = Date.now();
                                                    if (t && t.keys)
                                                        for (var g = t.scoreFn || s, k = t.keys, C = k.length; h >= 0; --h) {
                                                            for (var T = i[h], A = new Array(C), _ = C - 1; _ >= 0; --_)(S = c(T, M = k[_])) ? (m(S) || (S = v.getPrepared(S)), A[_] = j(o, S, u)) : A[_] = null;
                                                            A.obj = T;
                                                            var E = g(A);
                                                            if (null !== E && !(E < y) && (A.score = E, b < p ? (f.add(A), ++b) : (++w, E > f.peek().score && f.replaceTop(A)), h % 1e3 == 0 && Date.now() - l >= 10)) return void(e ? setImmediate(x) : setTimeout(x))
                                                        } else if (t && t.key) {
                                                            for (var M = t.key; h >= 0; --h)
                                                                if ((S = c(T = i[h], M)) && (m(S) || (S = v.getPrepared(S)), null !== (I = j(o, S, u)) && !(I.score < y) && (I = {
                                                                        target: I.target,
                                                                        _targetLowerCodes: null,
                                                                        _nextBeginningIndexes: null,
                                                                        score: I.score,
                                                                        indexes: I.indexes,
                                                                        obj: T
                                                                    }, b < p ? (f.add(I), ++b) : (++w, I.score > f.peek().score && f.replaceTop(I)), h % 1e3 == 0 && Date.now() - l >= 10))) return void(e ? setImmediate(x) : setTimeout(x))
                                                        } else
                                                            for (; h >= 0; --h) {
                                                                var S, I;
                                                                if ((S = i[h]) && (m(S) || (S = v.getPrepared(S)), null !== (I = j(o, S, u)) && !(I.score < y) && (b < p ? (f.add(I), ++b) : (++w, I.score > f.peek().score && f.replaceTop(I)), h % 1e3 == 0 && Date.now() - l >= 10))) return void(e ? setImmediate(x) : setTimeout(x))
                                                            }
                                                        if (0 === b) return r(n);
                                                    for (var z = new Array(b), O = b - 1; O >= 0; --O) z[O] = f.poll();
                                                    z.total = b + w, r(z)
                                                }
                                                e ? setImmediate(x) : x()
                                            }));
                                        return r.cancel = function() {
                                            a = !0
                                        }, r
                                    },
                                    highlight: function(e, o, i) {
                                        if (null === e) return null;
                                        void 0 === o && (o = "<b>"), void 0 === i && (i = "</b>");
                                        for (var n = "", t = 0, a = !1, r = e.target, s = r.length, c = e.indexes, m = 0; m < s; ++m) {
                                            var l = r[m];
                                            if (c[t] === m) {
                                                if (a || (a = !0, n += o), ++t === c.length) {
                                                    n += l + i + r.substr(m + 1);
                                                    break
                                                }
                                            } else a && (a = !1, n += i);
                                            n += l
                                        }
                                        return n
                                    },
                                    prepare: function(e) {
                                        if (e) return {
                                            target: e,
                                            _targetLowerCodes: v.prepareLowerCodes(e),
                                            _nextBeginningIndexes: null,
                                            score: null,
                                            indexes: null,
                                            obj: null
                                        }
                                    },
                                    prepareSlow: function(e) {
                                        if (e) return {
                                            target: e,
                                            _targetLowerCodes: v.prepareLowerCodes(e),
                                            _nextBeginningIndexes: v.prepareNextBeginningIndexes(e),
                                            score: null,
                                            indexes: null,
                                            obj: null
                                        }
                                    },
                                    prepareSearch: function(e) {
                                        if (e) return v.prepareLowerCodes(e)
                                    },
                                    getPrepared: function(e) {
                                        if (e.length > 999) return v.prepare(e);
                                        var i = o.get(e);
                                        return void 0 !== i || (i = v.prepare(e), o.set(e, i)), i
                                    },
                                    getPreparedSearch: function(e) {
                                        if (e.length > 999) return v.prepareSearch(e);
                                        var o = i.get(e);
                                        return void 0 !== o || (o = v.prepareSearch(e), i.set(e, o)), o
                                    },
                                    algorithm: function(e, o, i) {
                                        for (var n = o._targetLowerCodes, r = e.length, s = n.length, c = 0, m = 0, l = 0, d = 0;;) {
                                            if (i === n[m]) {
                                                if (t[d++] = m, ++c === r) break;
                                                i = e[0 === l ? c : l === c ? c + 1 : l === c - 1 ? c - 1 : c]
                                            }
                                            if (++m >= s)
                                                for (;;) {
                                                    if (c <= 1) return null;
                                                    if (0 === l) {
                                                        if (i === e[--c]) continue;
                                                        l = c
                                                    } else {
                                                        if (1 === l) return null;
                                                        if ((i = e[1 + (c = --l)]) === e[c]) continue
                                                    }
                                                    m = t[(d = c) - 1] + 1;
                                                    break
                                                }
                                        }
                                        c = 0;
                                        var u = 0,
                                            g = !1,
                                            f = 0,
                                            h = o._nextBeginningIndexes;
                                        null === h && (h = o._nextBeginningIndexes = v.prepareNextBeginningIndexes(o.target));
                                        var y = m = 0 === t[0] ? 0 : h[t[0] - 1];
                                        if (m !== s)
                                            for (;;)
                                                if (m >= s) {
                                                    if (c <= 0) {
                                                        if (++u > r - 2) break;
                                                        if (e[u] === e[u + 1]) continue;
                                                        m = y;
                                                        continue
                                                    }--c, m = h[a[--f]]
                                                } else if (e[0 === u ? c : u === c ? c + 1 : u === c - 1 ? c - 1 : c] === n[m]) {
                                            if (a[f++] = m, ++c === r) {
                                                g = !0;
                                                break
                                            }++m
                                        } else m = h[m];
                                        if (g) var p = a,
                                            j = f;
                                        else p = t, j = d;
                                        for (var b = 0, w = -1, x = 0; x < r; ++x) w !== (m = p[x]) - 1 && (b -= m), w = m;
                                        for (g ? 0 !== u && (b += -20) : (b *= 1e3, 0 !== l && (b += -20)), b -= s - r, o.score = b, o.indexes = new Array(j), x = j - 1; x >= 0; --x) o.indexes[x] = p[x];
                                        return o
                                    },
                                    algorithmNoTypo: function(e, o, i) {
                                        for (var n = o._targetLowerCodes, r = e.length, s = n.length, c = 0, m = 0, l = 0;;) {
                                            if (i === n[m]) {
                                                if (t[l++] = m, ++c === r) break;
                                                i = e[c]
                                            }
                                            if (++m >= s) return null
                                        }
                                        c = 0;
                                        var d = !1,
                                            u = 0,
                                            g = o._nextBeginningIndexes;
                                        if (null === g && (g = o._nextBeginningIndexes = v.prepareNextBeginningIndexes(o.target)), (m = 0 === t[0] ? 0 : g[t[0] - 1]) !== s)
                                            for (;;)
                                                if (m >= s) {
                                                    if (c <= 0) break;
                                                    --c, m = g[a[--u]]
                                                } else if (e[c] === n[m]) {
                                            if (a[u++] = m, ++c === r) {
                                                d = !0;
                                                break
                                            }++m
                                        } else m = g[m];
                                        if (d) var f = a,
                                            h = u;
                                        else f = t, h = l;
                                        for (var y = 0, p = -1, j = 0; j < r; ++j) p !== (m = f[j]) - 1 && (y -= m), p = m;
                                        for (d || (y *= 1e3), y -= s - r, o.score = y, o.indexes = new Array(h), j = h - 1; j >= 0; --j) o.indexes[j] = f[j];
                                        return o
                                    },
                                    prepareLowerCodes: function(e) {
                                        for (var o = e.length, i = [], n = e.toLowerCase(), t = 0; t < o; ++t) i[t] = n.charCodeAt(t);
                                        return i
                                    },
                                    prepareBeginningIndexes: function(e) {
                                        for (var o = e.length, i = [], n = 0, t = !1, a = !1, r = 0; r < o; ++r) {
                                            var s = e.charCodeAt(r),
                                                c = s >= 65 && s <= 90,
                                                m = c || s >= 97 && s <= 122 || s >= 48 && s <= 57,
                                                l = c && !t || !a || !m;
                                            t = c, a = m, l && (i[n++] = r)
                                        }
                                        return i
                                    },
                                    prepareNextBeginningIndexes: function(e) {
                                        for (var o = e.length, i = v.prepareBeginningIndexes(e), n = [], t = i[0], a = 0, r = 0; r < o; ++r) t > r ? n[r] = t : (t = i[++a], n[r] = void 0 === t ? o : t);
                                        return n
                                    },
                                    cleanup: r,
                                    new: u
                                };
                                return v
                            }()
                        }, e.exports ? e.exports = i() : o.fuzzysort = i()
                    }(Go = {
                        exports: {}
                    }, Go.exports), Go.exports);
                class Yo {
                    constructor(e, o) {
                        this.message = e, this.iconUrl = o
                    }
                    render() {
                        const e = Ee("div", "emoji-picker__search-not-found"),
                            o = Ee("div", "emoji-picker__search-not-found-icon");
                        this.iconUrl ? o.appendChild(Uo(this.iconUrl)) : o.innerHTML = Lo, e.appendChild(o);
                        const i = Ee("h2");
                        return i.innerHTML = this.message, e.appendChild(i), e
                    }
                }
                class Xo {
                    constructor(e, o, i, n, t) {
                        if (this.events = e, this.i18n = o, this.options = i, this.focusedEmojiIndex = 0, this.emojisPerRow = this.options.emojisPerRow || 8, this.emojiData = n.filter(e => e.version && parseFloat(e.version) <= parseFloat(i.emojiVersion) && void 0 !== e.category && t.indexOf(e.category) >= 0), this.options.custom) {
                            const e = this.options.custom.map(e => Object.assign(Object.assign({}, e), {
                                custom: !0
                            }));
                            this.emojiData = [...this.emojiData, ...e]
                        }
                        this.events.on("hideVariantPopup", () => {
                            setTimeout(() => this.setFocusedEmoji(this.focusedEmojiIndex))
                        })
                    }
                    render() {
                        return this.searchContainer = Ee("div", "emoji-picker__search-container"), this.searchField = Ee("input", "emoji-picker__search"), this.searchField.placeholder = this.i18n.search, this.searchContainer.appendChild(this.searchField), this.searchIcon = Ee("span", "emoji-picker__search-icon"), this.options.icons && this.options.icons.search ? this.searchIcon.appendChild(Uo(this.options.icons.search)) : this.searchIcon.innerHTML = Ro, this.searchIcon.addEventListener("click", e => this.onClearSearch(e)), this.searchContainer.appendChild(this.searchIcon), this.searchField.addEventListener("keydown", e => this.onKeyDown(e)), this.searchField.addEventListener("keyup", e => this.onKeyUp(e)), this.searchContainer
                    }
                    clear() {
                        this.searchField.value = ""
                    }
                    focus() {
                        this.searchField.focus()
                    }
                    onClearSearch(e) {
                        e.stopPropagation(), this.searchField.value && (this.searchField.value = "", this.resultsContainer = null, this.options.icons && this.options.icons.search ? (Me(this.searchIcon), this.searchIcon.appendChild(Uo(this.options.icons.search))) : this.searchIcon.innerHTML = Ro, this.searchIcon.style.cursor = "default", this.events.emit("hideSearchResults"), setTimeout(() => this.searchField.focus()))
                    }
                    setFocusedEmoji(e) {
                        if (this.resultsContainer) {
                            const o = this.resultsContainer.querySelectorAll("." + _e);
                            o[this.focusedEmojiIndex].tabIndex = -1, this.focusedEmojiIndex = e;
                            const i = o[this.focusedEmojiIndex];
                            i.tabIndex = 0, i.focus()
                        }
                    }
                    handleResultsKeydown(e) {
                        if (this.resultsContainer) {
                            const o = this.resultsContainer.querySelectorAll("." + _e);
                            "ArrowRight" === e.key ? this.setFocusedEmoji(Math.min(this.focusedEmojiIndex + 1, o.length - 1)) : "ArrowLeft" === e.key ? this.setFocusedEmoji(Math.max(0, this.focusedEmojiIndex - 1)) : "ArrowDown" === e.key ? (e.preventDefault(), this.focusedEmojiIndex < o.length - this.emojisPerRow && this.setFocusedEmoji(this.focusedEmojiIndex + this.emojisPerRow)) : "ArrowUp" === e.key ? (e.preventDefault(), this.focusedEmojiIndex >= this.emojisPerRow && this.setFocusedEmoji(this.focusedEmojiIndex - this.emojisPerRow)) : "Escape" === e.key && this.onClearSearch(e)
                        }
                    }
                    onKeyDown(e) {
                        "Escape" === e.key && this.searchField.value && this.onClearSearch(e)
                    }
                    onKeyUp(e) {
                        if ("Tab" !== e.key && "Shift" !== e.key)
                            if (this.searchField.value) {
                                this.options.icons && this.options.icons.clearSearch ? (Me(this.searchIcon), this.searchIcon.appendChild(Uo(this.options.icons.clearSearch))) : this.searchIcon.innerHTML = Ho, this.searchIcon.style.cursor = "pointer";
                                const e = Qo.go(this.searchField.value, this.emojiData, {
                                    allowTypo: !0,
                                    limit: 100,
                                    key: "name"
                                }).map(e => e.obj);
                                this.events.emit("hidePreview"), e.length ? (this.resultsContainer = new Jo(e, !0, this.events, this.options, !1).render(), this.resultsContainer && (this.resultsContainer.querySelector("." + _e).tabIndex = 0, this.focusedEmojiIndex = 0, this.resultsContainer.addEventListener("keydown", e => this.handleResultsKeydown(e)), this.events.emit("showSearchResults", this.resultsContainer))) : this.events.emit("showSearchResults", new Yo(this.i18n.notFound, this.options.icons && this.options.icons.notFound).render())
                            } else this.options.icons && this.options.icons.search ? (Me(this.searchIcon), this.searchIcon.appendChild(Uo(this.options.icons.search))) : this.searchIcon.innerHTML = Ro, this.searchIcon.style.cursor = "default", this.events.emit("hideSearchResults")
                    }
                }
                class Zo {
                    constructor(e, o, i) {
                        this.events = e, this.emoji = o, this.options = i, this.focusedEmojiIndex = 0
                    }
                    getEmoji(e) {
                        return this.popup.querySelectorAll("." + _e)[e]
                    }
                    setFocusedEmoji(e) {
                        this.getEmoji(this.focusedEmojiIndex).tabIndex = -1, this.focusedEmojiIndex = e;
                        const o = this.getEmoji(this.focusedEmojiIndex);
                        o.tabIndex = 0, o.focus()
                    }
                    render() {
                        this.popup = Ee("div", "emoji-picker__variant-popup");
                        const e = Ee("div", "emoji-picker__variant-overlay");
                        e.addEventListener("click", e => {
                            e.stopPropagation(),
                            this.popup.contains(e.target) || this.events.emit("hideVariantPopup")
                        }), this.popup.appendChild(new Wo(this.emoji, !1, !1, this.events, this.options, !1).render()), (this.emoji.variations || []).forEach((e, o) => this.popup.appendChild(new Wo({
                            name: this.emoji.name,
                            emoji: e,
                            key: this.emoji.name + o
                        }, !1, !1, this.events, this.options, !1).render()));
                        const o = this.popup.querySelector("." + _e);
                        return this.focusedEmojiIndex = 0, o.tabIndex = 0, setTimeout(() => o.focus()), this.popup.addEventListener("keydown", e => {
                            "ArrowRight" === e.key ? this.setFocusedEmoji(Math.min(this.focusedEmojiIndex + 1, this.popup.querySelectorAll("." + _e).length - 1)) : "ArrowLeft" === e.key ? this.setFocusedEmoji(Math.max(this.focusedEmojiIndex - 1, 0)) : "Escape" === e.key && (e.stopPropagation(), this.events.emit("hideVariantPopup"))
                        }), e.appendChild(this.popup), e
                    }
                }
                const ei = {
                        search: "Search emojis...",
                        categories: {
                            recents: "Recent Emojis",
                            smileys: "Smileys & Emotion",
                            people: "People & Body",
                            animals: "Animals & Nature",
                            food: "Food & Drink",
                            activities: "Activities",
                            travel: "Travel & Places",
                            objects: "Objects",
                            symbols: "Symbols",
                            flags: "Flags",
                            custom: "Custom"
                        },
                        notFound: "No emojis found"
                    },
                    oi = {
                        recents: Po,
                        smileys: qo,
                        people: Vo,
                        animals: Io,
                        food: zo,
                        activities: Bo,
                        travel: So,
                        objects: Do,
                        symbols: Fo,
                        flags: Oo,
                        custom: No
                    };
                class ii {
                    constructor(e, o, i) {
                        this.options = e, this.events = o, this.i18n = i, this.activeButton = 0, this.buttons = []
                    }
                    render() {
                        var e;
                        const o = Ee("div", "emoji-picker__category-buttons"),
                            i = this.options.categories || (null === (e = this.options.emojiData) || void 0 === e ? void 0 : e.categories) || Ae.categories;
                        let n = this.options.showRecents ? ["recents", ...i] : i;
                        return this.options.custom && (n = [...n, "custom"]), n.forEach(e => {
                            const i = Ee("button", "emoji-picker__category-button");this.options.icons && this.options.icons.categories && this.options.icons.categories[e] ? i.appendChild(Uo(this.options.icons.categories[e])) : i.innerHTML = oi[e],
                            i.tabIndex = -1,
                            i.title = this.i18n.categories[e],
                            o.appendChild(i),
                            this.buttons.push(i),
                            i.addEventListener("click", () => {
                                this.events.emit("categoryClicked", e)
                            })
                        }), o.addEventListener("keydown", e => {
                            switch (e.key) {
                                case "ArrowRight":
                                    this.events.emit("categoryClicked", n[(this.activeButton + 1) % this.buttons.length]);
                                    break;
                                case "ArrowLeft":
                                    this.events.emit("categoryClicked", n[0 === this.activeButton ? this.buttons.length - 1 : this.activeButton - 1]);
                                    break;
                                case "ArrowUp":
                                case "ArrowDown":
                                    e.stopPropagation(), e.preventDefault()
                            }
                        }), o
                    }
                    setActiveButton(e, o = !0) {
                        let i = this.buttons[this.activeButton];
                        i.classList.remove("active"), i.tabIndex = -1, this.activeButton = e, i = this.buttons[this.activeButton], i.classList.add("active"), i.tabIndex = 0, o && i.focus()
                    }
                }
                const ni = ["recents", "smileys", "people", "animals", "food", "activities", "travel", "objects", "symbols", "flags", "custom"];
                class ti {
                    constructor(e, o, i, n) {
                        var t;
                        this.events = e, this.i18n = o, this.options = i, this.emojiCategories = n, this.currentCategory = 0, this.headers = [], this.focusedIndex = 0, this.handleKeyDown = e => {
                            switch (this.emojis.removeEventListener("scroll", this.highlightCategory), e.key) {
                                case "ArrowRight":
                                    this.focusedEmoji.tabIndex = -1, this.focusedIndex === this.currentEmojiCount - 1 && this.currentCategory < this.categories.length - 1 ? (this.options.showCategoryButtons && this.categoryButtons.setActiveButton(++this.currentCategory), this.setFocusedEmoji(0)) : this.focusedIndex < this.currentEmojiCount - 1 && this.setFocusedEmoji(this.focusedIndex + 1);
                                    break;
                                case "ArrowLeft":
                                    this.focusedEmoji.tabIndex = -1, 0 === this.focusedIndex && this.currentCategory > 0 ? (this.options.showCategoryButtons && this.categoryButtons.setActiveButton(--this.currentCategory), this.setFocusedEmoji(this.currentEmojiCount - 1)) : this.setFocusedEmoji(Math.max(0, this.focusedIndex - 1));
                                    break;
                                case "ArrowDown":
                                    e.preventDefault(), this.focusedEmoji.tabIndex = -1, this.focusedIndex + this.emojisPerRow >= this.currentEmojiCount && this.currentCategory < this.categories.length - 1 ? (this.currentCategory++, this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory), this.setFocusedEmoji(Math.min(this.focusedIndex % this.emojisPerRow, this.currentEmojiCount - 1))) : this.currentEmojiCount - this.focusedIndex > this.emojisPerRow && this.setFocusedEmoji(this.focusedIndex + this.emojisPerRow);
                                    break;
                                case "ArrowUp":
                                    if (e.preventDefault(), this.focusedEmoji.tabIndex = -1, this.focusedIndex < this.emojisPerRow && this.currentCategory > 0) {
                                        const e = this.getEmojiCount(this.currentCategory - 1);
                                        let o = e % this.emojisPerRow;
                                        0 === o && (o = this.emojisPerRow);
                                        const i = this.focusedIndex,
                                            n = i > o - 1 ? e - 1 : e - o + i;
                                        this.currentCategory--, this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory), this.setFocusedEmoji(n)
                                    } else this.setFocusedEmoji(this.focusedIndex >= this.emojisPerRow ? this.focusedIndex - this.emojisPerRow : this.focusedIndex)
                            }
                            requestAnimationFrame(() => this.emojis.addEventListener("scroll", this.highlightCategory))
                        }, this.addCategory = (e, o) => {
                            const i = Ee("h2", "emoji-picker__category-name");i.innerHTML = this.i18n.categories[e] || ei.categories[e],
                            this.emojis.appendChild(i),
                            this.headers.push(i),
                            this.emojis.appendChild(new Jo(o, !0, this.events, this.options, "recents" !== e).render())
                        }, this.selectCategory = (e, o = !0) => {
                            this.emojis.removeEventListener("scroll", this.highlightCategory),
                            this.focusedEmoji && (this.focusedEmoji.tabIndex = -1);
                            const i = this.categories.indexOf(e);this.currentCategory = i,
                            this.setFocusedEmoji(0, !1),
                            this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory, o);
                            const n = this.headerOffsets[i];this.emojis.scrollTop = n,
                            requestAnimationFrame(() => this.emojis.addEventListener("scroll", this.highlightCategory))
                        }, this.highlightCategory = () => {
                            if (document.activeElement && document.activeElement.classList.contains("emoji-picker__emoji")) return;
                            let e = this.headerOffsets.findIndex(e => e >= Math.round(this.emojis.scrollTop));this.emojis.scrollTop + this.emojis.offsetHeight === this.emojis.scrollHeight && (e = -1),
                            0 === e ? e = 1 : e < 0 && (e = this.headerOffsets.length),
                            this.headerOffsets[e] === this.emojis.scrollTop && e++,
                            this.currentCategory = e - 1,
                            this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory)
                        }, this.emojisPerRow = i.emojisPerRow || 8, this.categories = (null === (t = i.emojiData) || void 0 === t ? void 0 : t.categories) || i.categories || Ae.categories, i.showRecents && (this.categories = ["recents", ...this.categories]), i.custom && (this.categories = [...this.categories, "custom"]), this.categories.sort((e, o) => ni.indexOf(e) - ni.indexOf(o))
                    }
                    updateRecents() {
                        if (this.options.showRecents) {
                            this.emojiCategories.recents = $o();
                            const e = this.emojis.querySelector(".emoji-picker__container");
                            e && e.parentNode && e.parentNode.replaceChild(new Jo(this.emojiCategories.recents, !0, this.events, this.options, !1).render(), e)
                        }
                    }
                    render() {
                        return this.container = Ee("div", "emoji-picker__emoji-area"), this.options.showCategoryButtons && (this.categoryButtons = new ii(this.options, this.events, this.i18n), this.container.appendChild(this.categoryButtons.render())), this.emojis = Ee("div", "emoji-picker__emojis"), this.options.showRecents && (this.emojiCategories.recents = $o()), this.options.custom && (this.emojiCategories.custom = this.options.custom.map(e => Object.assign(Object.assign({}, e), {
                            custom: !0
                        }))), this.categories.forEach(e => this.addCategory(e, this.emojiCategories[e])), requestAnimationFrame(() => {
                            setTimeout(() => {
                                setTimeout(() => this.emojis.addEventListener("scroll", this.highlightCategory))
                            })
                        }), this.emojis.addEventListener("keydown", this.handleKeyDown), this.events.on("categoryClicked", this.selectCategory), this.container.appendChild(this.emojis), this.container.querySelectorAll("." + _e)[0].tabIndex = 0, this.container
                    }
                    reset() {
                        this.headerOffsets = Array.prototype.map.call(this.headers, e => e.offsetTop), this.selectCategory(this.options.initialCategory || "smileys", !1), this.currentCategory = this.categories.indexOf(this.options.initialCategory || "smileys"), this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory, !1)
                    }
                    get currentCategoryEl() {
                        return this.emojis.querySelectorAll(".emoji-picker__container")[this.currentCategory]
                    }
                    get focusedEmoji() {
                        return this.currentCategoryEl.querySelectorAll("." + _e)[this.focusedIndex]
                    }
                    get currentEmojiCount() {
                        return this.currentCategoryEl.querySelectorAll("." + _e).length
                    }
                    getEmojiCount(e) {
                        return this.emojis.querySelectorAll(".emoji-picker__container")[e].querySelectorAll("." + _e).length
                    }
                    setFocusedEmoji(e, o = !0) {
                        this.focusedIndex = e, this.focusedEmoji && (this.focusedEmoji.tabIndex = 0, o && this.focusedEmoji.focus())
                    }
                }
                const ai = {
                    position: "auto",
                    autoHide: !0,
                    autoFocusSearch: !0,
                    showAnimation: !0,
                    showPreview: !0,
                    showSearch: !0,
                    showRecents: !0,
                    showVariants: !0,
                    showCategoryButtons: !0,
                    recentsCount: 50,
                    emojiData: Ae,
                    emojiVersion: "12.1",
                    theme: "light",
                    categories: ["smileys", "people", "animals", "food", "activities", "travel", "objects", "symbols", "flags"],
                    style: "native",
                    twemojiOptions: {
                        ext: ".svg",
                        folder: "svg"
                    },
                    emojisPerRow: 8,
                    rows: 6,
                    emojiSize: "1.8em",
                    initialCategory: "smileys"
                };
                class ri {
                    constructor(e = {}) {
                        this.events = new k, this.publicEvents = new k, this.pickerVisible = !1, this.options = Object.assign(Object.assign({}, ai), e), this.options.rootElement || (this.options.rootElement = document.body), this.i18n = Object.assign(Object.assign({}, ei), e.i18n), this.onDocumentClick = this.onDocumentClick.bind(this), this.onDocumentKeydown = this.onDocumentKeydown.bind(this), this.theme = this.options.theme || "light", this.emojiCategories = function(e) {
                            const o = {};
                            return e.emoji.forEach(i => {
                                let n = o[e.categories[i.category || 0]];n || (n = o[e.categories[i.category || 0]] = []),
                                n.push(i)
                            }), o
                        }(this.options.emojiData || Ae), this.buildPicker()
                    }
                    on(e, o) {
                        this.publicEvents.on(e, o)
                    }
                    off(e, o) {
                        this.publicEvents.off(e, o)
                    }
                    setStyleProperties() {
                        this.options.showAnimation || this.pickerEl.style.setProperty("--animation-duration", "0s"), this.options.emojisPerRow && this.pickerEl.style.setProperty("--emoji-per-row", this.options.emojisPerRow.toString()), this.options.rows && this.pickerEl.style.setProperty("--row-count", this.options.rows.toString()), this.options.emojiSize && this.pickerEl.style.setProperty("--emoji-size", this.options.emojiSize), this.options.showCategoryButtons || this.pickerEl.style.setProperty("--category-button-height", "0"), this.options.styleProperties && Object.keys(this.options.styleProperties).forEach(e => {
                            this.options.styleProperties && this.pickerEl.style.setProperty(e, this.options.styleProperties[e])
                        })
                    }
                    showSearchResults(e) {
                        Me(this.pickerContent), e.classList.add("search-results"), this.pickerContent.appendChild(e)
                    }
                    hideSearchResults() {
                        this.pickerContent.firstChild !== this.emojiArea.container && (Me(this.pickerContent), this.pickerContent.appendChild(this.emojiArea.container)), this.emojiArea.reset()
                    }
                    emitEmoji({
                        emoji: e,
                        showVariants: o
                    }) {
                        return n(this, void 0, void 0, (function*() {
                            if (e.variations && o && this.options.showVariants) this.showVariantPopup(e);
                            else {
                                let o;
                                setTimeout(() => this.emojiArea.updateRecents()), o = e.custom ? this.emitCustomEmoji(e) : "twemoji" === this.options.style ? yield this.emitTwemoji(e) : this.emitNativeEmoji(e), this.publicEvents.emit("emoji", o), this.options.autoHide && this.hidePicker()
                            }
                        }))
                    }
                    emitNativeEmoji(e) {
                        return {
                            emoji: e.emoji,
                            name: e.name
                        }
                    }
                    emitCustomEmoji(e) {
                        return {
                            url: e.emoji,
                            name: e.name,
                            custom: !0
                        }
                    }
                    emitTwemoji(e) {
                        return new Promise(o => {
                            Te.parse(e.emoji, Object.assign(Object.assign({}, this.options.twemojiOptions), {
                                callback: (i, {
                                    base: n,
                                    size: t,
                                    ext: a
                                }) => {
                                    const r = `${n}${t}/${i}${a}`;
                                    return o({
                                        url: r,
                                        emoji: e.emoji,
                                        name: e.name
                                    }),
                                    r
                                }
                            }))
                        })
                    }
                    buildSearch() {
                        var e;
                        this.options.showSearch && (this.search = new Xo(this.events, this.i18n, this.options, (null === (e = this.options.emojiData) || void 0 === e ? void 0 : e.emoji) || Ae.emoji, (this.options.categories || []).map(e => (this.options.emojiData || Ae).categories.indexOf(e))), this.pickerEl.appendChild(this.search.render()))
                    }
                    buildPreview() {
                        this.options.showPreview && this.pickerEl.appendChild(new Ie(this.events, this.options).render())
                    }
                    initPlugins() {
                        if (this.options.plugins) {
                            const e = Ee("div", "emoji-picker__plugin-container");
                            this.options.plugins.forEach(o => {
                                if (!o.render) throw new Error('Emoji Button plugins must have a "render" function.');e.appendChild(o.render(this))
                            }), this.pickerEl.appendChild(e)
                        }
                    }
                    initFocusTrap() {
                        this.focusTrap = w(this.pickerEl, {
                            clickOutsideDeactivates: !0,
                            initialFocus: this.options.showSearch && this.options.autoFocusSearch ? ".emoji-picker__search" : '.emoji-picker__emoji[tabindex="0"]'
                        })
                    }
                    buildPicker() {
                        this.pickerEl = Ee("div", "emoji-picker"), this.pickerEl.classList.add(this.theme), this.setStyleProperties(), this.initFocusTrap(), this.pickerContent = Ee("div", "emoji-picker__content"), this.initPlugins(), this.buildSearch(), this.pickerEl.appendChild(this.pickerContent), this.emojiArea = new ti(this.events, this.i18n, this.options, this.emojiCategories), this.pickerContent.appendChild(this.emojiArea.render()), this.events.on("showSearchResults", this.showSearchResults.bind(this)), this.events.on("hideSearchResults", this.hideSearchResults.bind(this)), this.events.on("emoji", this.emitEmoji.bind(this)), this.buildPreview(), this.wrapper = Ee("div", "emoji-picker__wrapper"), this.wrapper.appendChild(this.pickerEl), this.wrapper.style.display = "none", this.options.zIndex && (this.wrapper.style.zIndex = this.options.zIndex + ""), this.options.rootElement && this.options.rootElement.appendChild(this.wrapper), this.observeForLazyLoad()
                    }
                    showVariantPopup(e) {
                        const o = new Zo(this.events, e, this.options).render();
                        o && this.pickerEl.appendChild(o), this.events.on("hideVariantPopup", () => {
                            o && (o.classList.add("hiding"), setTimeout(() => {
                                o && this.pickerEl.removeChild(o)
                            }, 175)),
                            this.events.off("hideVariantPopup")
                        })
                    }
                    observeForLazyLoad() {
                        this.observer = new IntersectionObserver(this.handleIntersectionChange.bind(this), {
                            root: this.emojiArea.emojis
                        }), this.emojiArea.emojis.querySelectorAll("." + _e).forEach(e => {
                            this.shouldLazyLoad(e) && this.observer.observe(e)
                        })
                    }
                    handleIntersectionChange(e) {
                        Array.prototype.filter.call(e, e => e.intersectionRatio > 0).map(e => e.target).forEach(e => {
                            Se(e, this.options)
                        })
                    }
                    shouldLazyLoad(e) {
                        return "twemoji" === this.options.style || "true" === e.dataset.custom
                    }
                    onDocumentClick(e) {
                        this.pickerEl.contains(e.target) || this.hidePicker()
                    }
                    destroyPicker() {
                        this.events.off("emoji"), this.events.off("hideVariantPopup"), this.options.rootElement && (this.options.rootElement.removeChild(this.wrapper), this.popper && this.popper.destroy()), this.observer && this.observer.disconnect(), this.options.plugins && this.options.plugins.forEach(e => {
                            e.destroy && e.destroy()
                        })
                    }
                    hidePicker() {
                        this.hideInProgress = !0, this.focusTrap.deactivate(), this.pickerVisible = !1, this.overlay && (document.body.removeChild(this.overlay), this.overlay = void 0), this.emojiArea.emojis.removeEventListener("scroll", this.emojiArea.highlightCategory), this.pickerEl.classList.add("hiding"), setTimeout(() => {
                            this.wrapper.style.display = "none",
                            this.pickerEl.classList.remove("hiding"),
                            this.pickerContent.firstChild !== this.emojiArea.container && (Me(this.pickerContent), this.pickerContent.appendChild(this.emojiArea.container)),
                            this.search && this.search.clear(),
                            this.events.emit("hideVariantPopup"),
                            this.hideInProgress = !1,
                            this.popper && this.popper.destroy(),
                            this.publicEvents.emit("hidden")
                        }, this.options.showAnimation ? 170 : 0), setTimeout(() => {
                            document.removeEventListener("click", this.onDocumentClick),
                            document.removeEventListener("keydown", this.onDocumentKeydown)
                        })
                    }
                    showPicker(e) {
                        this.hideInProgress ? setTimeout(() => this.showPicker(e), 100) : (this.pickerVisible = !0, this.wrapper.style.display = "block", this.determineDisplay(e), this.focusTrap.activate(), setTimeout(() => {
                            this.addEventListeners(),
                            this.setInitialFocus()
                        }), this.emojiArea.reset())
                    }
                    determineDisplay(e) {
                        window.matchMedia("screen and (max-width: 450px)").matches ? this.showMobileView() : "string" == typeof this.options.position ? this.setRelativePosition(e) : this.setFixedPosition()
                    }
                    setInitialFocus() {
                        this.pickerEl.querySelector(this.options.showSearch && this.options.autoFocusSearch ? ".emoji-picker__search" : `.${_e}[tabindex="0"]`).focus()
                    }
                    addEventListeners() {
                        document.addEventListener("click", this.onDocumentClick), document.addEventListener("keydown", this.onDocumentKeydown)
                    }
                    setRelativePosition(e) {
                        this.popper = Ce(e, this.wrapper, {
                            placement: this.options.position
                        })
                    }
                    setFixedPosition() {
                        var e;
                        if (null === (e = this.options) || void 0 === e ? void 0 : e.position) {
                            this.wrapper.style.position = "fixed";
                            const e = this.options.position;
                            Object.keys(e).forEach(o => {
                                this.wrapper.style[o] = e[o]
                            })
                        }
                    }
                    showMobileView() {
                        const e = window.getComputedStyle(this.pickerEl),
                            o = document.querySelector("html"),
                            i = o && o.clientHeight,
                            n = o && o.clientWidth,
                            t = parseInt(e.height),
                            a = i ? i / 2 - t / 2 : 0,
                            r = parseInt(e.width),
                            s = n ? n / 2 - r / 2 : 0;
                        this.wrapper.style.position = "fixed", this.wrapper.style.top = a + "px", this.wrapper.style.left = s + "px", this.wrapper.style.zIndex = "5000", this.overlay = Ee("div", "emoji-picker__overlay"), document.body.appendChild(this.overlay)
                    }
                    togglePicker(e) {
                        this.pickerVisible ? this.hidePicker() : this.showPicker(e)
                    }
                    isPickerVisible() {
                        return this.pickerVisible
                    }
                    onDocumentKeydown(e) {
                        "Escape" === e.key ? this.hidePicker() : "Tab" === e.key ? this.pickerEl.classList.add("keyboard") : e.key.match(/^[\w]$/) && this.search && this.search.focus()
                    }
                    setTheme(e) {
                        e !== this.theme && (this.pickerEl.classList.remove(this.theme), this.theme = e, this.pickerEl.classList.add(e))
                    }
                }
            }).call(this, i("c8ba"))
        },
        "22ae": function(e, o, i) {
            e.exports = i.p + "img/bg-chat.9c35d35b.png"
        },
        "2fd1": function(e, o, i) {
            e.exports = i.p + "img/alfa1.4471d107.jpg"
        },
        "346a": function(e, o, i) {},
        "3aa2": function(e, o, i) {
            e.exports = i.p + "img/qiwi3.61d672ed.jpg"
        },
        "3fd0": function(e, o, i) {
            e.exports = i.p + "img/rex-bit-mining-coins.8d60de76.png"
        },
        "44f2": function(e, o, i) {
            e.exports = i.p + "media/chat_income.6cf65a0c.mp3"
        },
        "4e50": function(e, o, i) {
            "use strict";
            i("c9c8")
        },
        "50ae": function(e, o, i) {},
        "593a": function(e, o, i) {
            e.exports = i.p + "img/sber.9dad4fae.jpg"
        },
        "65e3": function(e, o) {
            e.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAoACgDAREAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAACAYHBAUJ/8QAGwEAAgMBAQEAAAAAAAAAAAAABwgEBQYAAgP/2gAMAwEAAhADEAAAAO7MP7UaHL+lQrst/pvKyZ4aQLEWZeVrfyCJx1GZLSLRD67SQPyMphRw8PfUr2nT7Cj1yNmDROnJhLYnJUkuPPSV4Vu0IdvaeHtudcluciPLaTCiT//EADAQAAEDAwQABAQFBQAAAAAAAAIBAwQFBhEABxIhCBMUUSIxQYEJFUJhcTIzUpHR/9oACAEBAAE/AKZXoVYZFyJMjSQMeYq24hZH36+mt4/FTL9ZKp1rOsxY0cyYOquNeeTzo9GMdrpDQV6IyVBRfddV7de4H5D0ly47xR0jVRVucIiP8CjfFE/3j31tn46qzZsvjW31uKjNohSSNpG6hABOlcVByLzafMiDBD9R1QL4pNzUCLVIc+M5BmghMuq4iIaYzrxCVmXZ23r7TatMTZ7rUCnzo7CB6c3T4EhJnpOPsvf21VLhat91ZAQospiEig1DfNVYNtvkINGQ/FxynJVTtVXK5XW/G5k2ynbRo1B2+o9ZptXt5316C9KAYrchxtX4zRAip8a/Fk8L1rd646Zbm71Up9uvEIUkGH/7vmpGeNCUmVL3RETI+x4XX4bO4zs+XWbWaaA2gEZ1O89OaQo58SXHfyyaiiJ/gGvEvay1LbaVUYsQ2fyeQzMbjgGHJgtHzPIp+yKg+3a6ujnMnuQI7sYPU5Vhx15G2OBIpASuL0g8f1L1rfer1u7qhbpUS8UpVLp1IJqQUOtIy0682QorqoORcAERUUl6TOF1uXf9JvnccWLfdj1RiND4VKoRQQWZcxTwIASdGSCi8lTrJCmVxr8Ma0Cn3vWa4/HWXBhxUp7SiK8T4qIoqZ/qVSB7r2HOpMNhtl5yY6hgTatErqoIIK/NPv8A814ndhGbbqLx0KTCrlDkKZtxYshspNO5FkmxFV4m0qrnyyVMd8V+iXvto6bxxDOsQG/RvU/0rUB9kBYdNDdbEEbVMOEI8sLgsa2o2AqV8XHGpqmzb0Y8A9MnmMUmgx3wHvy8p1zPtP0jnWwW3Ns7c7aRbft+ZBmsRgFXXYrwlk0REQk4quETCIn8d5XKr4rqnNp8a3VikTIJKccJ8CRHGyQOIomUUcKhnn6+311dOyNN3biOOV6RcDzahkh87AfbC/LW6Xhcs+0keKM5XkjB8myqMgWz+yHrYbbam0x4HKbGmUslXkKxnnHVP9/jJe9bBwGArNPeqk2Q/KEiGnty3wIwNWzyogKZQlbQ8qq4x188a//EADARAAECBAUEAAQGAwAAAAAAAAECEQMEBSEAEjFBUQYHImETQnGhCCNigpGxssHR/9oACAECAQE/AJaoSswgLgREqBD2INucdXdzVw1Ll6YQAksVnngbk+hfckYneuaiVGIqYik8+I+xf+8dLd5Z6WiZJxfx4Y1cMtI5IcuByklrunEhWpKblUTkGIMitHIx1xORqdS1+IzWCFAM3KTfew/UHfS8/Ophx/MZkoLMd7+T+1G5xVKxLy8BkAgbM1nG7nTnEtGWMk9BdLkt7A+YP8p22tjsrW4i5qLS0JBKk50vcIAIzf5N7ZOO4NL+NSYkxLw8uQ+KRYqa5JH1ACfqTirxPzlBBsryB5CrgjEavwiqJLxYZJzAXhlViNL6EnQb6jFNpkxLyhMyCgqV4IVdSUNuNrswx2TpoNWiTcaHnSiG37lEM2xLJVbCpOHlUqaVmBDXsGOuja847j9GQJOYJk4qYkFRJGRQzwyS5AD6HXLa90kXAhwYkBdyCcwV5A5syQQkn2kE5b2xQ6GZ2cEqlaQtW61AJA5Uo6D+TwCcdG9NU6m0kSErEER/JS0nVdvIMSwDDL6AckuT+JDqGepsvTYckcueKolRDjxSwSRp5BRPrLijT01UIBiTKmLapAxXkRIBVEEXTR0o/wCYo9VmIycsQJ+3+sdrkvUEKUQNbc2OP//EACwRAAEDAgQEBQUBAAAAAAAAAAECAxEABAUhMVESQWGRBiJxocEHEzJCgfD/2gAIAQMBAT8ActnWiQ4kiN6w3BAuFPZ7CrTA2CI+2n3+Iq+8ENvJlgcCzpnKVdAciDsFa8jT1i+06plaTxJrD0IfcABMH8gTM9R7+lWdoVohJgq57bR6VheGPXDq1OOEFJ78Oh0rDWi8gtPCd/8Ab19Q8MShtF6o8+FUfsRMewn+msJuIfS04qZ1O3LLvnWHthLfEr9cjvlrlWG4Wky4rQyQasXAtauAeUc+tfUe8iyQwhUKUri/gntqKDij5WxFeFsVW8gJfSULECSDCoyE9everdhDiZIMRGREa594zrFMXbtbcuqSSBySCST8+ncgVj2MXd7fKurgFJ0APIZ5Z+9eBrJi4Nx94T5QI9TmdZygd6fDNk4EMJBz5k1gtwHk8JbGexUfmsSsWUZpJrxRkhSUDae9f//Z"
        },
        "75f7": function(e, o, i) {
            e.exports = i.p + "img/microlines-fillc2x.fd002442.svg"
        },
        7898: function(e, o, i) {
            var n = {
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

            function t(e) {
                var o = a(e);
                return i(o)
            }

            function a(e) {
                if (!i.o(n, e)) {
                    var o = new Error("Cannot find module '" + e + "'");
                    throw o.code = "MODULE_NOT_FOUND", o
                }
                return n[e]
            }
            t.keys = function() {
                return Object.keys(n)
            }, t.resolve = a, e.exports = t, t.id = "7898"
        },
        a6bd: function(e, o, i) {
            "use strict";
            i("346a")
        },
        aaca: function(e, o, i) {
            e.exports = i.p + "img/rex-bit-mobile.09d4943c.png"
        },
        b18e: function(e, o, i) {
            e.exports = i.p + "img/qiwi.a933bde8.jpg"
        },
        b44d: function(e, o, i) {
            e.exports = i.p + "img/qiwi1.397388d4.jpg"
        },
        b84e: function(e, o, i) {
            "use strict";
            i.r(o);
            var n = function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "my-4 "
                    }, [n("div", {
                        staticClass: "h3 text-dark text-center mt-4 mb-1"
                    }, [e._v("\n                Текущий баланс:\n            ")]), n("div", {
                        staticClass: "h1 text-success-highlight text-center mx-auto font-weight-normal text-numbers mb-0"
                    }, [e.$afterExchange(this.$options.name) ? e._e() : n("span", {
                        staticClass: "text-success-highlight d-inline-block"
                    }, [n("span", {
                        staticClass: "d-inline-block m-0 p-0 text-numbers"
                    }, [e._v(e._s(e.$store.getters.user.btc.toFixed(6)))]), n("span", {
                        staticClass: "h6 font-weight-normal",
                        staticStyle: {
                            opacity: "0.8"
                        }
                    }, [e._v("btc")]), n("span", [e._v("≈")])]), n("span", [e._v("$")]), n("span", {
                        domProps: {
                            innerHTML: e._s(e.$numberWithSpaces(e.$store.getters.usermoney.toFixed(2), "en"))
                        }
                    })]), n("div", {
                        staticClass: "text-center text-dark text-numbers font-weight-normal h5"
                    }, [n("span", {
                        domProps: {
                            innerHTML: e._s(e.$numberWithSpaces(e.$geoUpsellPrice(e.$store.getters.usermoney, "usd")))
                        }
                    })]), e.$store.getters.isCollectingBTC ? e._e() : n("div", {
                        staticClass: "row position-relative"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-8"
                    }, [n("div", [n("div", {
                        staticClass: "heading-icon bit-handbitcoin mx-auto lazyload",
                        class: e.$isRetina ? "heading-icon-retina" : "",
                        attrs: {
                            "data-bg": i("fbeb")("./" + (e.$isRetina ? "heading-icon-retina.png" : "heading-icon.png"))
                        }
                    }), e._m(0), n("div", [e._v("\n                            Запустится автоматический сбор биткоин бонусов. Вам будет необходимо подождать и не закрывать страницу, пока не завершится окончательный сбор. После автосбора Вы сможете вывести средства любым удобным для вас способом\n                        ")])]), n("div", {
                        staticClass: "text-center my-5 mx-auto"
                    }, [e._m(1), n("button", {
                        staticClass: "btn btn-success text-uppercase font-weight-bold pulse-button",
                        on: {
                            "~click": function(o) {
                                return e.CollectBTC()
                            }
                        }
                    }, [n("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg"
                        }],
                        staticClass: "mr-1",
                        staticStyle: {
                            "margin-bottom": "4px"
                        },
                        attrs: {
                            symbol: "auto-white",
                            size: "0 0 28 28"
                        }
                    }), e._v(" Собрать биткоин бонусы")])])]), n("div", {
                        staticClass: "col-12 col-sm-4 my-auto"
                    }, [n("img", {
                        staticClass: "w-100 h-auto lazyload",
                        attrs: {
                            "data-src": i("3fd0"),
                            alt: ""
                        }
                    })]), n("div", {
                        staticClass: "text-center mx-auto position-absolute w-100 text-bg"
                    }, [n("svg", {
                        staticClass: "font-weight-bold mx-auto text-center w-100",
                        attrs: {
                            viewBox: "0 0 83 40"
                        }
                    }, [n("text", {
                        attrs: {
                            x: "50%",
                            y: "20%",
                            "dominant-baseline": "middle",
                            "text-anchor": "middle"
                        }
                    }, [e._v("автосбор")])])])])]), e.$store.getters.isCollectingBTC && !e.$store.getters.isCollectedBTC ? n("div", {
                        staticClass: "position-relative"
                    }, [n("div", {
                        staticClass: "position-relative justify-content-center d-flex",
                        class: e.isSafari ? "bitloading-safari" : "",
                        staticStyle: {
                            "z-index": "-1"
                        }
                    }, [n("div", {
                        staticClass: "position-absolute text-center col-12 col-lg-8 mt-n7 mt-sm-n9 mt-md-n10 mt-lg-n10 px-md-9 px-lg-8 px-xl-0 w-100 h-100"
                    }, [n("img", {
                        staticClass: "lazyload mx-auto w-100",
                        staticStyle: {
                            top: "0px"
                        },
                        attrs: {
                            "data-src": i("75f7"),
                            alt: ""
                        }
                    })]), n("div", {
                        staticClass: "position-absolute",
                        staticStyle: {
                            top: "-20px"
                        }
                    }, [n("img", {
                        attrs: {
                            src: i("cd91"),
                            alt: ""
                        }
                    })])]), n("div", {
                        staticClass: "bg-white mt-13",
                        class: e.isSafari ? "" : "bitloading"
                    }, [n("div", {
                        staticClass: "progress mb-7 mt-10 ",
                        staticStyle: {
                            top: "300px",
                            height: "20px"
                        }
                    }, [n("div", {
                        staticClass: "progress-bar progress-bar-striped bg-progress progress-bar-animated text-numbers",
                        style: "width: " + e.progress + "%;",
                        attrs: {
                            role: "progressbar",
                            "aria-valuenow": e.progress,
                            "aria-valuemin": "0",
                            "aria-valuemax": "100"
                        }
                    }, [e._v(e._s(e.progress) + "%")])]), n("div", {
                        ref: "hashBlock",
                        staticClass: "w-100 mx-auto bg-white",
                        staticStyle: {
                            height: "340px",
                            "overflow-y": "hidden"
                        }
                    }, [n("table", {
                        staticClass: "table"
                    }, [e._m(2), n("tbody", e._l(e.miners, (function(o, i) {
                        return n("tr", {
                            key: i
                        }, [n("th", {
                            staticClass: "text-maximum text-left text-hash",
                            attrs: {
                                scope: "row"
                            }
                        }, [e._v(e._s(o.hash))]), n("th", {
                            staticClass: "text-numbers text-center"
                        }, [n("span", {
                            domProps: {
                                innerHTML: e._s(o.btc.toFixed(6))
                            }
                        }), e._v(" BTC")]), n("th", {
                            staticClass: "text-numbers text-center"
                        }, [n("span", {
                            domProps: {
                                innerHTML: e._s(o.usd.toFixed(2))
                            }
                        }), e._v(" $")]), n("th", {
                            staticClass: "status-width text-center",
                            class: o.status ? "text-success-highlight-full" : "text-attention-highlight-full"
                        }, [n("span", {
                            domProps: {
                                innerHTML: e._s(o.statusText)
                            }
                        })])])
                    })), 0)])])]), n("div", {
                        staticClass: "text-center mx-auto position-absolute w-100 text-bg"
                    }, [n("svg", {
                        staticClass: "font-weight-bold mx-auto text-center w-100",
                        attrs: {
                            viewBox: "0 0 83 23"
                        }
                    }, [n("text", {
                        attrs: {
                            x: "50%",
                            y: "35%",
                            "dominant-baseline": "middle",
                            "text-anchor": "middle"
                        }
                    }, [e._v("ожидайте")])])])]) : e._e(), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.$store.getters.isCollectedBTC,
                            expression: "$store.getters.isCollectedBTC"
                        }],
                        staticClass: "shadow rounded border-thin position-relative"
                    }, [n("div", {
                        staticClass: "heading-icon bit-payment mx-auto"
                    }), n("div", {
                        staticClass: "h2 font-weight-bold text-center mb-0"
                    }, [e._v("\n                    Сбор Бонусов за последние 6 дней завершен\n                ")]), n("div", {
                        staticClass: "row mx-2"
                    }, [n("div", {
                        staticClass: "col-12 col-sm-8"
                    }, [n("div", {
                        staticClass: "h2 text-dark text-center mt-4 mb-1"
                    }, [e._v("Ваш баланс")]), n("div", {
                        staticClass: "h1 text-success-highlight text-center mx-auto font-weight-normal text-numbers mb-0"
                    }, [n("span", [e._v("$")]), n("span", {
                        domProps: {
                            innerHTML: e._s(e.$store.getters.usermoney.toFixed(2))
                        }
                    })]), n("div", {
                        staticClass: "text-center text-dark text-numbers font-weight-normal h5"
                    }, [n("span", {
                        domProps: {
                            innerHTML: e._s(e.$numberWithSpaces(e.$geoUpsellPrice(e.$store.getters.usermoney, "usd")))
                        }
                    })]), n("div", {
                        staticClass: "mx-auto text-center justify-content-center d-flex"
                    }, [n("table", {
                        staticClass: "table col-10 table-result "
                    }, [e._m(3), n("tbody", [n("tr", [n("th", {
                        staticClass: "text-right",
                        attrs: {
                            scope: "col"
                        }
                    }, [e._v("Всего собрано")]), n("th", {
                        staticClass: "text-left"
                    }, [e._v(e._s(e.$numberInBTC(200.01, "usd", e.$store.getters.btcPrice)) + "BTC = $200.01")])]), n("tr", {
                        staticClass: "text-success text-success-highlight-full"
                    }, [n("th", {
                        staticClass: "text-right",
                        attrs: {
                            scope: "col"
                        }
                    }, [e._v("Подтвержденных транзакций")]), n("th", {
                        staticClass: "text-left"
                    }, [e._v(e._s(e.transactions.approve))])]), n("tr", {
                        staticClass: "text-attention-highlight-full",
                        staticStyle: {
                            color: "rgb(230 95 110)"
                        }
                    }, [n("th", {
                        staticClass: "text-right",
                        attrs: {
                            scope: "col"
                        }
                    }, [e._v("Неподтвержденных транзакций")]), n("th", {
                        staticClass: "text-left"
                    }, [e._v(e._s(e.transactions.notApprove))])])])])])]), n("div", {
                        staticClass: "col-12 col-sm-4 my-auto overflow-hidden position-relative"
                    }, [n("router-link", {
                        staticClass: "border-0 btn-href-img position-absolute",
                        staticStyle: {
                            "z-index": "1"
                        },
                        attrs: {
                            to: "/account/lawyerrequisits"
                        },
                        on: {
                            click: function(o) {
                                return e.$reachGoal("goto_lawyerswift")
                            }
                        }
                    }), n("img", {
                        staticClass: "lazyload w-100",
                        attrs: {
                            "data-src": i("aaca"),
                            alt: ""
                        }
                    })], 1)]), e._m(4), n("div", {
                        staticClass: "text-center mb-4"
                    }, [n("router-link", {
                        staticClass: "btn btn-success mx-auto pulse-button",
                        staticStyle: {
                            "min-width": "200px"
                        },
                        attrs: {
                            to: "/account/lawyerrequisits"
                        },
                        on: {
                            click: function(o) {
                                return e.$reachGoal("goto_lawyerswift")
                            }
                        }
                    }, [e._v("\n                        Да\n                    ")])], 1), e._m(5), n("div", {
                        staticClass: "text-center mx-auto position-absolute w-100 text-bg",
                        staticStyle: {
                            "z-index": "-1"
                        }
                    }, [n("svg", {
                        staticClass: "font-weight-bold mx-auto text-center w-100",
                        attrs: {
                            viewBox: "0 0 83 23"
                        }
                    }, [n("text", {
                        attrs: {
                            x: "50%",
                            y: "40%",
                            "dominant-baseline": "middle",
                            "text-anchor": "middle"
                        }
                    }, [e._v("результат")])])])]), n("hr", {
                        staticClass: "mt-10"
                    }), n("history-profit-item"), n("chat-users-item"), n("welcome-modal-item")], 1)
                },
                t = [function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return i("div", {
                        staticClass: "text-center h3 mb-2"
                    }, [e._v("\n                            Собрать бонусы за последние "), i("span", {
                        staticClass: "font-weight-bold"
                    }, [e._v("6 дней")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return i("div", {
                        staticClass: "mb-1"
                    }, [i("small", [e._v("Нажмите на кнопку ниже, чтобы собрать биткоин бонусы")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return i("thead", [i("tr", [i("th", {
                        staticClass: "col text-center"
                    }, [e._v("Хеш")]), i("th", {
                        staticClass: "col"
                    }, [e._v("Сумма (BTC)")]), i("th", {
                        staticClass: "col"
                    }, [e._v("Сумма (USD)")]), i("th", {
                        staticClass: "col"
                    }, [e._v("Статус")])])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return i("thead", [i("tr", [i("th", {
                        staticClass: "border-0 header-bg text-white",
                        staticStyle: {
                            "font-size": "2rem"
                        },
                        attrs: {
                            colspan: "2"
                        }
                    }, [e._v("Статистика автосбора")])])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return i("div", {
                        staticClass: "text-center text-uppercase text-success-highlight h3 mt-5"
                    }, [i("span", [e._v("Желаете получить выплату прямо сейчас?")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        i = e._self._c || o;
                    return i("div", {
                        staticClass: "mb-5 text-center text-noty"
                    }, [i("span", [e._v("Рекомендация: Закажите Вашу выплату прямо сейчас. Курс биткоина принес вам "), i("span", {
                        staticClass: "font-weight-bold text-numbers"
                    }, [e._v("+1457%")]), e._v(" доходности на данный момент.")])])
                }],
                a = i("16b7"),
                r = function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", {
                        staticClass: "my-5 position-relative"
                    }, [n("div", {
                        staticClass: "heading-icon bit-statmoney mx-auto lazyload",
                        class: e.$isRetina ? "heading-icon-retina" : "",
                        attrs: {
                            "data-bg": i("fbeb")("./" + (e.$isRetina ? "heading-icon-retina.png" : "heading-icon.png"))
                        }
                    }), n("div", {
                        staticClass: "h2 text-center mb-0"
                    }, [e._v("История Ваших начислений")]), n("p", {
                        staticClass: "h4 font-weight-normal text-center"
                    }, [e._v("Ваш суммарный доход по месяцам, за последние 12 месяцев")]), n("table", {
                        staticClass: "table table-profit"
                    }, [n("tbody", e._l(6, (function(o, i) {
                        return n("tr", {
                            key: i
                        }, [n("th", {
                            staticClass: "p-0 p-sm-2"
                        }, [e._v(e._s(e.monthLoc[e.sortMonth[i]]) + ":")]), n("th", {
                            staticClass: "p-0 p-sm-2 text-right"
                        }, [e._v("$" + e._s(e.sortWithdrew[i]))]), n("th", {}), n("th", {
                            staticClass: "p-0 p-sm-2"
                        }, [e._v(e._s(e.monthLoc[e.sortMonth[i + 6]]) + ":")]), n("th", {
                            staticClass: "p-0 p-sm-2 text-right"
                        }, [e._v("$" + e._s(e.sortWithdrew[i + 6]))])])
                    })), 0)]), n("div", {
                        staticClass: "text-center mx-auto position-absolute w-100 text-bg"
                    }, [n("svg", {
                        staticClass: "font-weight-bold mx-auto text-center w-100",
                        attrs: {
                            viewBox: "0 0 83 23"
                        }
                    }, [n("text", {
                        attrs: {
                            x: "50%",
                            y: "20%",
                            "dominant-baseline": "middle",
                            "text-anchor": "middle"
                        }
                    }, [e._v("история")])])])])
                },
                s = [],
                c = {
                    data: function() {
                        return {
                            profits: [],
                            monthLoc: new Array("январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"),
                            nowMonth: (new Date).getMonth() + 1,
                            sortMonth: new Array,
                            sortWithdrew: [605.88, 585.42, 620.58, 569.76, 572.96, 623.76, 655.93, 573.25, 555.58, 632.98, 607.45, 629.12]
                        }
                    },
                    methods: {
                        SetSortedMonths: function() {
                            for (var e = this.monthLoc.length, o = 0; o < e; o++) this.nowMonth + o > e ? this.sortMonth.push(this.nowMonth + o - e - 1) : this.sortMonth.push(this.nowMonth + o - 1)
                        }
                    },
                    created: function() {
                        this.SetSortedMonths()
                    }
                },
                m = c,
                l = (i("e726"), i("2877")),
                d = Object(l["a"])(m, r, s, !1, null, null, null),
                u = d.exports,
                g = function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", {
                        staticClass: "w-100 mb-14 position-relative",
                        attrs: {
                            id: "main-container"
                        }
                    }, [n("div", {
                        staticClass: "text-center mb-2"
                    }, [n("div", {
                        staticClass: "heading-icon bit-chat mx-auto lazyload",
                        class: e.$isRetina ? "heading-icon-retina" : "",
                        attrs: {
                            "data-bg": i("fbeb")("./" + (e.$isRetina ? "heading-icon-retina.png" : "heading-icon.png"))
                        }
                    }), n("div", {
                        staticClass: "h2 mb-0"
                    }, [e._v("Онлайн-чат участников сервиса")]), n("p", {
                        staticClass: "h4 font-weight-normal text-center"
                    }, [e._v("Участвуйте в обсуждении сервиса, мы рады любой обратной связи.")])]), n("div", {
                        staticClass: "row h-100"
                    }, [n("div", {
                        staticClass: "col-12 d-flex flex-column h-100 p-0 lazyload",
                        attrs: {
                            id: "message-area"
                        }
                    }, [n("div", {
                        staticClass: "row d-flex flex-row align-items-center p-0 p-sm-2 m-0 w-100",
                        attrs: {
                            id: "navbar"
                        }
                    }, [n("div", {
                        staticClass: "d-flex"
                    }, [n("div", {}, [n("img", {
                        staticClass: "rounded-circle mr-2 lazyload h-100 w-10",
                        attrs: {
                            "data-src": i("65e3"),
                            alt: "Profile Photo",
                            height: "50px",
                            width: "50px",
                            id: "pic"
                        }
                    })]), n("div", {
                        staticClass: "d-flex flex-column "
                    }, [n("div", {
                        staticClass: "text-white font-weight-bold",
                        attrs: {
                            id: "name"
                        }
                    }, [e._v("БИТКОИН БОНУС")]), n("div", {
                        staticClass: "text-white small w-75 text-group-people",
                        attrs: {
                            id: "details"
                        }
                    }, [e._v("("), n("span", {
                        staticClass: "text-numbers"
                    }, [e._v(e._s(e.onlineUsers))]), e._v(" online) Андрей, NOiSy..., Римма, Виктория, Мария, Александра, Василиса, Николай, Леонид, Тимофей, Артемий, Михаил, Валерия, Евгения, Алексей, Алиса, Илья, Ксения, Владислав")])])]), n("div", {
                        staticClass: "d-flex flex-row align-items-center ml-auto text-white position-absolute",
                        staticStyle: {
                            right: "10px",
                            top: "5px"
                        }
                    }, [n("div", [n("svg", {
                        staticClass: "cursor-pointer",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24"
                        },
                        on: {
                            click: function(o) {
                                return e.searchChat()
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            fill: "currentColor",
                            d: "M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
                        }
                    })])]), n("div", [n("svg", {
                        staticClass: "cursor-pointer",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24"
                        },
                        on: {
                            click: function(o) {
                                return e.$say("LiveWebChatCorp. v 13.49.777. Chat for corporative message. With Social  ♥ Happiness Since 2007.")
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            fill: "currentColor",
                            d: "M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                        }
                    })])])])]), n("div", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: e.ScrollActiveTrue,
                            expression: "ScrollActiveTrue"
                        }],
                        ref: "userMessages",
                        staticClass: "d-flex flex-column position-relative lazyload bg-pattern",
                        attrs: {
                            id: "messages",
                            "data-bg": i("22ae")
                        },
                        on: {
                            mouseleave: function(o) {
                                e.isScrollActive = !0
                            },
                            scroll: function(o) {
                                return e.scrollMessages(o)
                            },
                            wheel: function(o) {
                                e.isScrollActive = !1
                            },
                            mouseover: function(o) {
                                e.isScrollActive = !1
                            },
                            touchmove: function(o) {
                                e.isScrollActive = !1
                            }
                        }
                    }, [n("div", {
                        staticClass: "rounded-circle shadow-sm mx-auto shadow-sm p-1 bg-white cursor-pointer",
                        staticStyle: {
                            "z-index": "1"
                        },
                        on: {
                            click: function(o) {
                                return e.toggleLoader()
                            }
                        }
                    }, [n("div", {
                        class: e.isLoaderActive ? "" : "d-none",
                        attrs: {
                            id: "whtsp-loader"
                        }
                    }, [n("svg", {
                        staticClass: "spinner-container",
                        attrs: {
                            width: "24px",
                            height: "24px",
                            viewBox: "0 0 52 52"
                        }
                    }, [n("circle", {
                        staticClass: "path",
                        attrs: {
                            cx: "26px",
                            cy: "26px",
                            r: "20px",
                            fill: "none",
                            "stroke-width": "6px"
                        }
                    })])]), n("svg", {
                        class: e.isLoaderActive ? "d-none" : "d-block",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24"
                        }
                    }, [n("path", {
                        attrs: {
                            fill: "currentColor",
                            d: "M17.6 6.4C16.2 4.9 14.2 4 12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8c3.7 0 6.8-2.6 7.7-6h-2.1c-.8 2.3-3 4-5.6 4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.7 0 3.1.7 4.2 1.8L13 11h7V4l-2.4 2.4z"
                        }
                    })])]), n("div", {
                        staticClass: "mx-auto my-2 bg-chat-date text-dark shadow-sm small py-1 px-2 rounded"
                    }, [e._v("\n\t\t\t\t\t\tCЕГОДНЯ\n\t\t\t\t\t")]), e._l(e.inChatMessages, (function(o, t) {
                        return n("div", {
                            key: t,
                            staticClass: "d-flex flex-column col-9 col-sm-7 col-md-5 p-1 my-1 mx-3",
                            class: o.self ? "flex-row-reverse flex-0 align-self-end self" : "align-self-start other flex-0"
                        }, [0 == o.self && null !== o.attach.img ? n("div", {
                            staticClass: "message-item other p-0 bg-white shadow-sm",
                            staticStyle: {
                                "margin-bottom": "3px"
                            }
                        }, [n("span", {
                            staticClass: "corner-left"
                        }, [n("svg", {
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 8 13",
                                width: "8",
                                height: "13"
                            }
                        }, [n("path", {
                            attrs: {
                                opacity: ".13",
                                fill: "#0000000",
                                d: "M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
                            }
                        }), n("path", {
                            attrs: {
                                fill: "currentColor",
                                d: "M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                            }
                        })])]), n("div", {
                            staticClass: "w-100 mx-auto text-center position-relative"
                        }, [n("div", {
                            staticClass: "m-1 position-relative overflow-hidden"
                        }, [n("img", {
                            staticClass: "w-100",
                            attrs: {
                                src: i("7898")("./" + o.attach.img),
                                width: "330",
                                alt: ""
                            }
                        }), n("div", {
                            staticClass: "time time-img ml-auto small text-right text-white text-numbers position-absolute"
                        }, [e._v("\n\t\t\t\t\t\t\t\t\t\t" + e._s(o.time) + "\n\t\t\t\t\t\t\t\t\t")]), n("div", {
                            staticClass: "time-img-overlay rounded-bottom"
                        })])])]) : e._e(), 0 == o.self ? n("div", {
                            staticClass: "message-item bg-white shadow-sm p-1",
                            class: null !== o.attach.img ? "" : "other"
                        }, [n("div", {
                            staticClass: "d-flex flex-column-reverse"
                        }, [null == o.attach.img ? n("span", {
                            staticClass: "corner-left"
                        }, [n("svg", {
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 8 13",
                                width: "8",
                                height: "13"
                            }
                        }, [n("path", {
                            attrs: {
                                opacity: ".13",
                                fill: "#0000000",
                                d: "M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
                            }
                        }), n("path", {
                            attrs: {
                                fill: "currentColor",
                                d: "M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                            }
                        })])]) : e._e(), n("div", {
                            staticClass: "p-0"
                        }, [n("div", {
                            staticClass: "m-1 mb-0",
                            style: {
                                color: o.colorText
                            }
                        }, [e._v(e._s(o.name))]), n("div", {
                            staticClass: "body m-1 mr-4"
                        }, [e._v(e._s(o.text))])]), n("div", {
                            staticClass: "align-self-end col-3 flex-shrink-0 justify-content-end ml-auto p-0 small text-muted text-numbers text-right time position-absolute",
                            staticStyle: {
                                width: "100px"
                            }
                        }, [e._v("\n\t\t\t\t\t\t\t\t\t" + e._s(o.time) + "\n\t\t\t\t\t\t\t\t")])])]) : e._e(), !0 === o.self ? n("div", {
                            staticClass: "message-item self shadow-sm p-1 position-relative mr-3"
                        }, [n("div", {
                            staticClass: "d-flex flex-row"
                        }, [n("span", {
                            staticClass: "corner-right"
                        }, [n("svg", {
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 8 13",
                                width: "8",
                                height: "13"
                            }
                        }, [n("path", {
                            attrs: {
                                opacity: ".13",
                                d: "M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
                            }
                        }), n("path", {
                            attrs: {
                                fill: "currentColor",
                                d: "M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
                            }
                        })])]), n("div", {
                            staticClass: "body m-1 mr-2"
                        }, [e._v(e._s(o.text))]), n("div", {
                            staticClass: "time ml-auto small text-right flex-shrink-0 align-self-end text-numbers text-time",
                            staticStyle: {
                                width: "75px"
                            }
                        }, [e._v("\n\t\t\t\t\t\t\t\t\t" + e._s(e.GetFullTime()) + "\n\t\t\t\t\t\t\t\t\t"), n("svg", {
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 16 15",
                                width: "16",
                                height: "15"
                            }
                        }, [n("path", {
                            staticClass: "selfsent",
                            attrs: {
                                fill: "currentColor",
                                d: "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            }
                        })])])])]) : e._e()])
                    }))], 2), n("div", {
                        staticClass: "position-absolute bg-light border rounded-circle shadow scroll-down cursor-pointer",
                        class: e.btnToBottomClass,
                        on: {
                            click: function(o) {
                                return e.ScrollChatToEnd(!0)
                            }
                        }
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.unreadMsgCount > 0,
                            expression: "unreadMsgCount>0"
                        }],
                        staticClass: "position-absolute rounded-circle text-center text-white font-weight-light new-msg-count text-numbers"
                    }, [e._v("\n\t\t\t\t\t\t\t" + e._s(e.unreadMsgCount) + "\n\t\t\t\t\t\t")]), n("div", {
                        staticClass: "w-100 h-100 position-relative"
                    }, [n("svg", {
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
                    }, [n("path", {
                        attrs: {
                            d: "M129.007 57.819c-4.68-4.68-12.499-4.68-17.191 0L3.555 165.803c-4.74 4.74-4.74 12.427 0 17.155 4.74 4.74 12.439 4.74 17.179 0l99.683-99.406 99.671 99.418a12.17 12.17 0 0 0 17.191 0c4.74-4.74 4.74-12.427 0-17.155L129.007 57.819z",
                            fill: "#b1b1b1",
                            transform: "matrix(-.75 0 0 -.75 210.72975 210.72975)"
                        }
                    })])])]), n("div", {
                        staticClass: "justify-self-end align-items-center flex-row d-flex",
                        attrs: {
                            id: "input-area"
                        }
                    }, [n("div", {
                        staticClass: "d-flex"
                    }, [n("svg", {
                        ref: "emoji-trigger",
                        staticClass: "cursor-pointer",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24"
                        },
                        on: {
                            click: function(o) {
                                return e.picker.togglePicker(e.$refs["emoji-trigger"])
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            fill: "currentColor",
                            d: "M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
                        }
                    })]), n("svg", {
                        staticClass: "cursor-pointer",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24"
                        },
                        on: {
                            click: function(o) {
                                return e.$say("Ошибка #173 – доступ к Вашим файлам заблокирован")
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            fill: "currentColor",
                            d: "M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
                        }
                    })])]), n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.textMessage,
                            expression: "textMessage"
                        }],
                        staticClass: "flex-grow-1 border-0 px-3 py-2 my-3 rounded-pill shadow-sm",
                        attrs: {
                            type: "text",
                            name: "message",
                            id: "input",
                            placeholder: "Введите сообщение"
                        },
                        domProps: {
                            value: e.textMessage
                        },
                        on: {
                            keydown: function(o) {
                                return o.type.indexOf("key") || 13 === o.keyCode ? (o.preventDefault(), e.InsertSelfMessage.apply(null, arguments)) : null
                            },
                            input: function(o) {
                                o.target.composing || (e.textMessage = o.target.value)
                            }
                        }
                    }), n("div", {
                        staticClass: "d-flex"
                    }, [n("svg", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "" == e.textMessage,
                            expression: "textMessage==''"
                        }],
                        staticClass: "cursor-pointer",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24"
                        },
                        on: {
                            click: function(o) {
                                return e.$say("Ошибка #201 – доступ к Вашему микрофону заблокирован")
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            fill: "currentColor",
                            d: "M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"
                        }
                    })]), n("svg", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "" !== e.textMessage,
                            expression: "textMessage!==''"
                        }],
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24"
                        },
                        on: {
                            click: e.InsertSelfMessage
                        }
                    }, [n("path", {
                        attrs: {
                            fill: "currentColor",
                            d: "M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                        }
                    })])])])])]), n("div", {
                        staticClass: "text-center mx-auto position-absolute w-100 text-bg"
                    }, [n("svg", {
                        staticClass: "font-weight-bold mx-auto text-center w-100",
                        attrs: {
                            viewBox: "0 0 90 23"
                        }
                    }, [n("text", {
                        attrs: {
                            x: "50%",
                            y: "20%",
                            "dominant-baseline": "middle",
                            "text-anchor": "middle"
                        }
                    }, [e._v("онлайн-чат")])])]), n("b-toast", {
                        attrs: {
                            id: "toast-replied",
                            variant: "default",
                            "auto-hide-delay": "4000",
                            toaster: "b-toaster-top-center",
                            "no-close-button": ""
                        },
                        on: {
                            hidden: function(o) {
                                e.replied = !1
                            }
                        },
                        scopedSlots: e._u([{
                            key: "toast-title",
                            fn: function() {
                                return [n("div", {
                                    staticClass: "toast-swift-header d-block text-center w-100 font-weight-bold"
                                }, [e._v("\n\t\t\t\t\tВам ответили в чате\n\t\t\t\t")])]
                            },
                            proxy: !0
                        }])
                    })], 1)
                },
                v = [],
                f = (i("4917"), i("074b")),
                h = {
                    name: "ChatUsers",
                    components: {
                        EmojiButton: f["a"]
                    },
                    data: function() {
                        return {
                            onlineUsers: 132,
                            usersOnlineTimer: null,
                            chatAlert: new Audio(i("44f2")),
                            selfAlertTxt: "Ошибка #972 – Ваше сообщение не может быть доставлено. Обратитесь к администратору",
                            offensiveBanned: !1,
                            offensiveCounter: 0,
                            isLoaderActive: !1,
                            addMsgTimeout: null,
                            scrollBottomTimeout: null,
                            scrollMessagesTimeout: null,
                            unreadMsgCount: 0,
                            isScrollActive: !0,
                            isScrollBottom: !1,
                            textMessage: "",
                            index: 0,
                            replied: Boolean(),
                            picker: new f["a"]({
                                i18n: {
                                    search: "Найти эмодзи...",
                                    categories: {
                                        recents: "Недавние Эмодзи",
                                        smileys: "Смайлы и Эмоции",
                                        people: "Люди и Тело",
                                        animals: "Животные и Природа",
                                        food: "Еда и Напитки",
                                        activities: "Деятельность и Спорт",
                                        travel: "Путешествия и Места",
                                        objects: "Предметы",
                                        symbols: "Символы",
                                        flags: "Флаги",
                                        custom: "Пользовательские"
                                    },
                                    notFound: "Эмодзи не найдены"
                                }
                            }),
                            replies: [{
                                q: ["привет", "всем привет", "здравствуйте", "ку", "хай", "хеллоу"],
                                a: ["приветик", "и тебе привет", "здрасте", "здравствуйте", "приветствую", "хай", "хеллоу", "приветики", "перевед", "доброго времени суток", "и вам здрасте"]
                            }, {
                                q: ["что тут делать", "что делать", "как добывать", "как тут майнить", "помогите", "как вывести", "как выводить"],
                                a: ["просто нажми на кноку и добывай", "забирай биткоины и обменивай", "забери добытые биткоины и обменивай", "тут и так все понятно что нужно делать", "собери биткоин бонусы и выводи средства"]
                            }, {
                                q: ["кто получил", "кто тут выводил", "у меня", "у меня есть", "у меня было", "показывает что есть", "кто тут зарабатывает"],
                                a: ["поздравляю, выводи деньги", "я тоже 2000$, упали на карту в течении 10 минут", "я тут давно зарабатываю от 45000 руб", "не вы первый у кого уже были деньги выводите"]
                            }, {
                                q: ["лохотрон", "обман", "кидалово", "кидок", "вранье", "пиздешь", "наебалово", "это все правда", "это правда", "это обман", "это все обман", "заебал обман", "не ведитесь", "развод для лохов", "развод", "одни боты в чате", "все реально"],
                                a: ["тут все честно упали мои 10000 рублей", "мне лично все пришло после оплаты комиссии", "не может быть это честный розыгрыш", "зря так думаешь я тут по 200$ в день зарабатываю", "тут все по честному не переживай", "тоже по началу было такое мнение, но потом наймайненные деньги перевелись на карту в течении 10 минут", "ахаха ну да ну да", "смешно! Вы тут впервые а уже глупости пишете! Не обижайтесь, все через это проходили, а сейчас жить без биткоин бонус не могут", "Снова дилетанты в чате! Если не хотите зарабатывать, то уходите и все! Не мешайте зарабатывать и общаться)", "изначально было такое мнение, но после оплаты комиссии мне перевели мой выигрыш на карту"]
                            }, {
                                q: ["пидорасы", "черти", "хуй", "пизда", "долбаебы", "конченные", "мудаки", "пошли нахуй", "падлы", "эй пидоры", "пидоры", "шкуры", "залупа", "член", "черт", "чмошники", "пиздаболы", "лохи", "гниды", "говно", "дураки"],
                                a: ["вы это себе?!", "ты это про себя?", "забаньте этого придурка", "осторожней с выражениями, а то администрация забанит твой аккаунт!", "пошел нахуй", "очередной мудак, который хочет бан!", "хахах, выпишите ему бан акканута", "пиздюки зашли?!", "к чему такая злость?", "сам такой! позовите админа, и забаньте ему аккаунт!"]
                            }],
                            inChatMessages: [],
                            allMessages: [{
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Рахим",
                                text: "MAXiMUS, я более чем уверен, что вы поступаете так же))) Тут глупо майнить с одного устройства, денег мало не бывает ведь)😁",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Римма",
                                text: "😳Я так сильно еще давно не радовалась, сегодняшний курс по биткоину просто радует!",
                                attach: {
                                    img: "qiwi.jpg"
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Андрей",
                                text: "Ого, а что реально может телефон перегреться???🤭",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "NOiSy",
                                text: "Андрей, да нет же, ему ничего не будет! Вы слушайте больше этих болванов, что тут пишут! Зарабатываю на своем Айфоне уже 2ой год на полной мощности и ему ничего!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Захарчик",
                                text: "Римма, ну вот кто бы что ни говорил, а я уверен, что за криптовалютами будущее. Скоро бумажные деньги потеряют свое значение в этом мире!🤫",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Тургенеев",
                                text: "Да конечно ничего не будет! Кто такое пишет, сам в тихую покупает кучу телефонов и компов, чтобы с помощью этого сервиса собирать больше крипты!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Андрей",
                                text: "Спасибо! Убедили меня! Буду и дальше фармить.😋",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "HotPepper05",
                                text: "ауф! я тут 100 телфонов 📱📱📱 подключилб могу и ваш",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Ольга Задруцкая",
                                text: "Спасибо обойдемся!😤",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Akmal",
                                text: 'HotPepper05, вы снова горячительных напитков перепили и будите тут "клоунадо" показывать?🤡',
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "HotPepper05",
                                text: "да мге вопще по**ю хочешь",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "HotPepper05",
                                text: "я сколкьо тут регистрировал обычных зевак - ты даже не прелставляешь бл🤬",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "NOiSy",
                                text: "HotPepper05, и дай угадаю. Майнил крипту с их телефонов без их ведома?",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Системное сообщение",
                                text: "HotPepper05 - пользователь с этим логином был заблокирован",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "WhiteT: (Администратор)",
                                text: "Пользователь ID:55901228 был заблокирован за нарушение правил сервиса. IP заблокированного устройства недоступно для облачного майнинга. Приятного пользования Bitcoin Bonus!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Ольга Задруцкая",
                                text: "Спасибо! А то настроение портит, а сегодня отличный день для вывода!🤑",
                                attach: {
                                    img: "alfa1.jpg"
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "NOiSy",
                                text: "WhiteT, я же почти его раскусил, надо было подождать)",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "WhiteT: (Администратор)",
                                text: "NOiSy, нам и так все понятно по данному персонажу. Мы стараемся поддерживать на русскоязычных серверах Bitcoin Bonus не только бесперебойную работу, но и приятное общение.",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "NOiSy",
                                text: "Понимаю! Я шучу так))",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Зарина",
                                text: "Здравствуйте! Я вот тут новенькая, только перешла на сайт, а я уже оказывается тут была как целый месяц. И накопилось 45 000 рублей! Как вывести? Подскажите пожалуйста!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "NOiSy",
                                text: "Зарина, о вы не первая за сегодня, кто об этом пишет))",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Антонина Воротникова",
                                text: "Зарина, вам повезло что вы вовремя обнаружили! Так бывает, когда телефон либо новый, либо его через какое либо скачанное приложение подключили к Bitcoin Bonus. И мошенники корямятся с вашего телефона таким вот образом! Если вы зашли, значит они либо забыли, либо еще не добрались до вашего телефона.",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Андрей",
                                text: "NOiSy, вот ведь повезло!)) Мне бы так с начала, зашел и тут же 45к))",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Зарина",
                                text: "Антонина, а как вывести то??? Мошенники не заберут??!!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Рахим",
                                text: "Зарина, вам нужно указать мою карту))😈",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Антонина Воротникова",
                                text: "Зарина, да вы не переживайте, если вы смогли зайти в личный кабинет, то они доступ потеряют. Такая тут система безопасности.",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Святослав",
                                text: "Всем добра! Как успехи?)) Что с курсом, почему он так подрос?? Все деньги сегодня вывели?",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "NOiSy",
                                text: "Рахим, вы тут самый богатый и самый хитрый, в чем ваш секрет?!🤠",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Андрей",
                                text: "Началось, снова будет спорить у кого доход, телефон и тп лучше!! Хватит пожалуйста",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Зарина",
                                text: "Антонина Воротникова, КАК ВЫВЕСТИ ПОМОГИТЕ! Я заплачу вам!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Антонина Воротникова",
                                text: "Зарина, да не нужны мне ваши деньги! Я тут сама хорошо зарабатываю🙄",
                                attach: {
                                    img: "qiwi2.jpg"
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Антонина Воротникова",
                                text: "Зарина, для начала соберите все биткоин бонусы, которая просит система для вывода!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Зарина",
                                text: "Хорошо, сейчас сделаю!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Рахим",
                                text: "Да никто тут с ним спорить не собирается. Я уже ему говорил свое мнение о нем! Я думаю мы друг друга поняли!))",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "NOiSy",
                                text: "Рахим, конечно друг мой сердешный!)",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Андрей",
                                text: "Зарина, там же все очень просто! Пора просить администрацию создавать новые чаты! чтобы новечки тут не пиликали!)",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Зарина",
                                text: "Антонина Воротникова, я сделала! Мне нажимать вывод??",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Антонина Воротникова",
                                text: "Андрей, не все разбираются с самого начала что к чему! Проявите терпени пожалуйста! Или если вы тут умеете много зарабатывать делитесь с новичками опытом! Приятней будет общение в чате!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Антонина Воротникова",
                                text: "Зарина, да, нажимаете кнопку для вывода. Далее следуйте указаниям системы. Если нету Swift шлюза личного, то можете арендовать на сайте, очень удобная штука. особенно если Plus",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "NOiSy",
                                text: 'Антонина, я вас поддерживаю! Тут есть конечно куча "Стандартников", все они в один голос, будут ли сегодня выплаты)) Бедные блин',
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Захаренок Владик",
                                text: "Народ! Всем ку! А как попасть на английский сайт Bitcoin Bonus. Хочу поболтать о майнинге с пендосами)",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "LolaBTC",
                                text: "Влад, напишите менеджеру они вас могут на западные сервера отправить. Только вот это не точно, ваш IP ведь тут",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Киевский Саша",
                                text: "Владик, друг, а что там делать?! У них там такой же тупо флуд, были бы модераторы!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Зинаида Петровна",
                                text: "Здравстуйте! Подскажите пожалуйста могу ли я вывести биткоины сразу на свой кошелек в бинансе?",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "NOiSy",
                                text: 'Зинаида, нет. Такая функция тут не доступна на BTCuPAY еще возможно. Но там платят меньше на майнинг... Да и Swift там не дают, - "ищите сами как говорится как у нас вывести!"',
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Зарина",
                                text: "Антонина, СПАСИБО ВАМ ОГРОМНОЕ! Я таки смогла получить сейчас на карту все 45000 рублей! Спасибо биткоин бонус",
                                attach: {
                                    img: "sber.jpg"
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Дауд78",
                                text: "Всем Здравия и Добра!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Jscience0",
                                text: "Дауд, и вам добрый человек! Готовы сегодня снять кучу бонусов?)",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Максим Павлов",
                                text: "Зарина, продолжите пользоваться сервисом?",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Зарина",
                                text: "Максим, ну конечно же! Глупо будет отказываться до сих пор не верится в такую удачу!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Дауд78",
                                text: "Зарина, тут даже больше чем просто удача) 45тыс сегодня, в следующий раз будете по 150 тысяч рублей выводить! Мы тут все копим и курс хороший ждем)",
                                attach: {
                                    img: "tinkof1.jpg"
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "MaryMaru",
                                text: "Я стараюсь никому из знакомых не болтать, что так можно зарабатывать! Я обычно просто их телефоны привязываю к своему аккаунту и зарабатываю на этом))",
                                attach: {
                                    img: "qiwi1.jpg"
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Nikola19",
                                text: "MaryMaru, это несколько подлым не находите?!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Роберт",
                                text: "оооо. такой дичи я тут не ожидал, так вот как выглядят те кто абузит чужие телефоны",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Зарина",
                                text: "MaryMaru, мне вот повезло, что увидела во время смс на почте о блокировке акаунта!",
                                attach: {
                                    img: "tinkof2.jpg"
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "MaryMaru",
                                text: "Поздравляю блин)))",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "FranklinRus",
                                text: "Фу быть таким!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "MaryMaru",
                                text: "вообще пох на вас! денег у меня много как и аккаунтов тут!",
                                attach: {
                                    img: "qiwi3.jpg"
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Системное сообщение",
                                text: "MaryMaru - пользователь с этим логином был заблокирован",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "WhiteT: (Администратор) ",
                                text: "Пользователь ID:19901228 был заблокирован за нарушение правил сервиса. IP заблокированного устройства недоступно для облачного майнинга. Приятного пользования Bitcoin Bonus!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "FranklinRus",
                                text: "О а вот и бан подъехал!))",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Роберт",
                                text: "WhiteT, очень вовремя спасибо!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "WhiteT: (Администратор)",
                                text: "Мы следим за тем, чтобы на русскоязычных серверах была приятная атмосфера во всем.",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Дауд78",
                                text: "WhiteT, заметно!",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Дауд78",
                                text: "Друзья! курс просто фееричный! Выводите",
                                attach: {
                                    img: "tinkof3.jpg"
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "NOiSy",
                                text: "Дауд78, Он уже потихоньку снижается, лучше поторопитесь тут все уже вывели))",
                                attach: {
                                    img: null
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Наталья Кустова",
                                text: "Дауд78, Выводите скорее! Много потеряете, я уже тысяч 30 потеряла",
                                attach: {
                                    img: "sber1.jpg"
                                },
                                time: null
                            }, {
                                self: !1,
                                colorText: this.randomColorText(),
                                name: "Rich269",
                                text: "Я на этом сервисе более 14 миллионов рублей заработал! Богатейте сейчас!",
                                attach: {
                                    img: "sber2.jpg"
                                },
                                time: null
                            }]
                        }
                    },
                    methods: {
                        RandomUserOnline: function() {
                            var e = this,
                                o = this.$randInt(14e3, 18e3);
                            this.usersOnlineTimer = setTimeout((function() {
                                e.onlineUsers = e.$randInt(115, 140), e.RandomUserOnline()
                            }), o)
                        },
                        scrollMessages: function(e) {
                            var o = this;
                            this.scrollMessagesTimeout = setTimeout((function() {
                                if (void 0 !== e) var i = e.target;
                                else i = o.$refs.userMessages;
                                if (null !== i && void 0 !== i) {
                                    var n = i.clientHeight * (i.clientHeight / i.offsetHeight),
                                        t = i.scrollTop,
                                        a = i.scrollHeight,
                                        r = i.scrollHeight > i.clientHeight;
                                    if (!r) return o.isScrollBottom = !1, !1;
                                    t + n >= a - 50 ? (o.isScrollBottom = !1, o.unreadMsgCount = 0) : o.isScrollBottom = !0
                                }
                            }), 0)
                        },
                        SoundAlert: function() {
                            this.$store.getters.account.chatSoundAlert && (this.chatAlert.volume = .1, this.chatAlert.play())
                        },
                        AddMessage: function() {
                            var e = this;
                            this.addMsgTimeout = setTimeout((function() {
                                e.index % e.allMessages.length == 0 && (e.index = 0), e.OptimizeMessagesArray();
                                var o = e.allMessages[e.index];
                                o.time = e.GetFullTime(), e.inChatMessages.push(o), e.SoundAlert(), e.unreadMsgCount++, e.scrollMessages(), e.index++, e.ScrollChatToEnd(), e.AddMessage()
                            }), 0 === this.index ? 10 : this.$randInt(5e3, 2e4))
                        },
                        ScrollChatToEnd: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            (1 == this.isScrollActive || e) && this.ScrollChat()
                        },
                        ScrollChat: function() {
                            var e = this,
                                o = this.$refs["userMessages"];
                            o && (this.scrollBottomTimeout = setTimeout((function() {
                                o.scrollTop = o.scrollHeight, e.unreadMsgCount = 0
                            }), 0))
                        },
                        ScrollActiveTrue: function() {
                            this.isScrollActive = !0
                        },
                        FakeReply: function(e) {
                            for (var o = String(), i = e.toLowerCase(), n = 0; n < this.replies.length; n++)
                                for (var t = this.replies[n], a = 0; a < t.q.length; a++) {
                                    var r = t.q[a].toLowerCase();
                                    if (null !== i.match(r)) {
                                        o = t.a[Math.floor(Math.random() * t.a.length)], 4 === n && (this.offensiveCounter++, this.offensiveCounter > 1 && (this.offensiveBanned = !0));
                                        break
                                    }
                                }
                            "" !== o && this.PushMessage(o)
                        },
                        PushMessage: function(e) {
                            var o = this,
                                i = ["Рахим", "Римма", "Андрей", "NOiSy", "Захарчик", "Тургенеев", "Ольга Задруцкая", "Akmal", "Зарина", "Антонина Воротникова", "Святослав", "Захаренок Владик", "LolaBTC", "Киевский Саша", "Зинаида Петровна", "Дауд78", "Jscience0", "Максим Павлов", "MaryMaru", "Nikola19", "Роберт", "FranklinRus", "FranklinRus", "Наталья Кустова", "Rich269"],
                                n = i[Math.floor(Math.random() * i.length)],
                                t = {
                                    self: !1,
                                    colorText: this.randomColorText(),
                                    name: n,
                                    text: this.$store.getters.account.login + ", " + e,
                                    attach: {
                                        img: null
                                    },
                                    time: null
                                };
                            t.time = this.GetFullTime(), setTimeout((function() {
                                o.OptimizeMessagesArray(), o.inChatMessages.push(t), o.unreadMsgCount++, o.SoundAlert(), o.replied = !0, o.replied && o.$bvToast.show("toast-replied"), o.scrollMessages(), o.ScrollChatToEnd()
                            }), this.$randInt(3e3, 7e3)), this.offensiveBanned && setTimeout((function() {
                                var e = {
                                    self: !1,
                                    colorText: o.randomColorText(),
                                    name: "WhiteT: (Администратор)",
                                    text: o.$store.getters.account.login + ", за ненормативную лексику вы были заглушены для чата на 24 часа. Просьба не нарушать правила общения на сервисе" + o.$store.getters.sitename,
                                    attach: {
                                        img: null
                                    },
                                    time: null
                                };
                                o.OptimizeMessagesArray(), o.inChatMessages.push(e), o.unreadMsgCount++, o.SoundAlert(), o.replied = !0, o.replied && o.$bvToast.show("toast-replied"), o.scrollMessages(), o.ScrollChatToEnd()
                            }), this.$randInt(3e3, 7e3))
                        },
                        OptimizeMessagesArray: function() {
                            this.inChatMessages.length > 79 && this.inChatMessages.shift()
                        },
                        InsertSelfMessage: function() {
                            var e = this;
                            return this.offensiveBanned ? (this.$say("За ненормативную лексику вы были заглушены для чата на 24 часа."), !1) : "" != this.textMessage && (this.inChatMessages.push({
                                self: !0,
                                name: "I am",
                                text: this.textMessage
                            }), this.$reachGoal("chat_sent_msg_goal", {
                                chatMessage: this.textMessage
                            }), this.FakeReply(this.textMessage), setTimeout((function() {
                                e.ScrollChat()
                            }), 0), void(this.textMessage = ""))
                        },
                        GetFullTime: function() {
                            var e = new Date,
                                o = e.getHours();
                            o = ("0" + o).slice(-2);
                            var i = e.getMinutes();
                            return i = ("0" + i).slice(-2), o + ":" + i
                        },
                        randomColorText: function() {
                            var e = ["#ffa97a", "#6bcbef", "#e542a3", "#91ab01", "#ffa97a", "#1f7aec", "#dfb610", "#029d00", "#8b7add", "#fe7c7f", "#ba33dc", "#59d368", "#b04632", "#fd85d4", "#8393ca", "#ff8f2c", "#3bdec3", "#b4876e", "#c90379", "#ef4b4f"];
                            return e[Math.floor(Math.random() * e.length)]
                        },
                        emojiPicker: function() {
                            var e = this;
                            this.picker.on("emoji", (function(o) {
                                e.textMessage += o.emoji
                            }))
                        },
                        searchChat: function() {
                            var e = prompt("Найти в чате");
                            "" === e ? this.$say("Ошибка #481 – запрос не может быть пустым") : this.$say('Такого пользователя или сообщения с запросом "'.concat(e, '" не сушествует'))
                        },
                        toggleLoader: function() {
                            this.isLoaderActive = !this.isLoaderActive
                        }
                    },
                    computed: {
                        btnToBottomClass: function() {
                            return this.isScrollBottom ? "scrollDownOn" : ""
                        }
                    },
                    beforeDestroy: function() {
                        clearTimeout(this.addMsgTimeout), clearTimeout(this.scrollBottomTimeout), clearTimeout(this.scrollMessagesTimeout), clearTimeout(this.usersOnlineTimer)
                    },
                    mounted: function() {
                        this.AddMessage(), this.emojiPicker()
                    },
                    created: function() {
                        this.RandomUserOnline()
                    }
                },
                y = h,
                p = (i("c35d"), i("e9f8"), Object(l["a"])(y, g, v, !1, null, "a97077ea", null)),
                j = p.exports,
                b = {
                    name: "DataScript",
                    data: function() {
                        return {
                            miners: [],
                            transactions: {
                                approve: this.$store.getters.transactions.approve,
                                notApprove: this.$store.getters.transactions.notApprove
                            },
                            minerInterval: null,
                            d: new Date,
                            h: (new Date).getHours(),
                            m: (new Date).getMinutes(),
                            currentCash: 0,
                            statusApprove: !1,
                            minUserCash: 14394.00,
                            maximumCash: 14594.00,
                            progress: 0,
                            btcLevel: 5e-9,
                            operationTime: 100,
                            isCollectingBTC: this.$store.getters.isCollectingBTC,
                            isCollectedBTC: this.$store.getters.isCollectedBTC
                        }
                    },
                    components: {
                        HistoryProfitItem: u,
                        ChatUsersItem: j,
                        WelcomeModalItem: a["a"]
                    },
                    computed: {
                        isSafari: function() {
                            var e = navigator.userAgent.toLowerCase();
                            if (-1 != e.indexOf("safari")) return !(e.indexOf("chrome") > -1)
                        }
                    },
                    methods: {
                        Makeid: function(e) {
                            for (var o = [], i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = i.length, t = 0; t < e; t++) o.push(i.charAt(Math.floor(Math.random() * n)));
                            return o.join("")
                        },
                        Converter: function(e, o) {
                            var i = this.$store.getters.btcPrice;
                            return "btc" === e ? o * this.btcLevel : "usd" === e ? o * this.btcLevel * i : void 0
                        },
                        StatusTransaction: function() {
                            return Math.random() > .9 ? (this.statusApprove = !1, this.transactions.notApprove++, "He&nbsp;подтверждено") : (this.statusApprove = !0, this.transactions.approve++, "Подтверждено")
                        },
                        ScrollToBottom: function() {
                            var e = this.$refs.hashBlock;
                            e.scrollTop = e.scrollHeight
                        },
                        GetFullTime: function() {
                            var e = new Date,
                                o = e.getHours();
                            o = ("0" + o).slice(-2);
                            var i = e.getMinutes();
                            return i = ("0" + i).slice(-2), o + ":" + i
                        },
                        AddToUserMoney: function(e) {
                            !1 !== e.status && (this.$store.commit("ADD_USERMONEY", e.usd), this.$store.commit("ADD_BTC", e.btc))
                        },
                        SetProgress: function() {
                            this.progress = parseInt(100 * (this.$store.getters.usermoney - this.minUserCash) / (this.maximumCash - this.minUserCash))
                        },
                        CollectBTC: function() {
                            var e = this;
                            this.$store.commit("TRUE_COLLECTINGBTC"), this.minerInterval = setInterval((function() {
                                e.currentCash = e.$randInt(100, 1e3), e.miners.push({
                                    hash: e.Makeid(64),
                                    time: e.GetFullTime(),
                                    btc: e.Converter("btc", e.currentCash),
                                    usd: e.Converter("usd", e.currentCash),
                                    statusText: e.StatusTransaction(),
                                    status: e.statusApprove
                                }), e.AddToUserMoney(e.miners[e.miners.length - 1]), e.ScrollToBottom(), e.SetProgress(), e.$store.getters.usermoney >= e.maximumCash && (e.$store.commit("SET_MAXIMUMCASH"), clearInterval(e.minerInterval), setTimeout((function() {
                                    e.$store.commit("SET_TRANSACTIONS", {
                                        approve: e.transactions.approve,
                                        notApprove: e.transactions.notApprove
                                    }), e.$store.commit("TRUE_COLLECTEDBTC")
                                }), 2e3)), e.miners.length > 8 && e.miners.shift()
                            }), this.operationTime), this.$reachGoal("collect_btc")
                        }
                    },
                    mounted: function() {
                        this.$store.getters.isCollectingBTC && !this.$store.getters.isCollectedBTC && this.CollectBTC()
                    },
                    beforeDestroy: function() {
                        null !== this.mineInterval && clearInterval(this.minerInterval)
                    }
                },
                w = b,
                x = (i("4e50"), i("a6bd"), Object(l["a"])(w, n, t, !1, null, "714bb2b9", null));
            o["default"] = x.exports
        },
        bcf4: function(e, o, i) {
            e.exports = i.p + "img/sber1.0f0ed32b.jpg"
        },
        c35d: function(e, o, i) {
            "use strict";
            i("dd1f")
        },
        c9c8: function(e, o, i) {},
        cd91: function(e, o, i) {
            e.exports = i.p + "img/bit-200c.7fc9061f.gif"
        },
        d66e: function(e, o, i) {
            e.exports = i.p + "img/tinkof3.e3ee45e8.jpg"
        },
        dd1f: function(e, o, i) {},
        de8c: function(e, o, i) {
            e.exports = i.p + "img/qiwi2.0ad30185.jpg"
        },
        e040: function(e, o, i) {
            e.exports = i.p + "img/sber3.a277dec3.jpg"
        },
        e4b5: function(e, o, i) {
            e.exports = i.p + "img/tinkof1.68349585.jpg"
        },
        e726: function(e, o, i) {
            "use strict";
            i("fd20")
        },
        e9f8: function(e, o, i) {
            "use strict";
            i("50ae")
        },
        f33d: function(e, o, i) {
            e.exports = i.p + "img/tinkof2.80d90488.jpg"
        },
        f5e6: function(e, o, i) {
            e.exports = i.p + "img/sber2.e37d177b.jpg"
        },
        fd20: function(e, o, i) {}
    }
]);
