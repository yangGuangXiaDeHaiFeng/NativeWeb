/*! screenlog - v0.3.0 - 2019-01-25
 * https://github.com/chinchang/screenlog.js
 * Copyright (c) 2019 Kushagra Gour; Licensed  */

!(function () {
  function a(a, b) {
    var c = document.createElement(a);
    return (c.style.cssText = b), c;
  }
  function b() {
    var b = a(
      "div",
      "z-index:2147483647;font-family:Helvetica,Arial,sans-serif;font-size:" +
        _options.fontSize +
        ";padding:5px;text-align:left;opacity:0.8;background:" +
        _options.bgColor +
        ";" +
        _options.css
    );
    return b;
  }
  function c(b) {
    return function () {
      var c = a(
          "div",
          "line-height:1.7em;min-height:1.7em;background:" +
            (o.children.length % 2 ? "rgba(255,255,255,0.1)" : "") +
            ";color:" +
            b
        ),
        d = [].slice.call(arguments).reduce(function (a, b) {
          return a + " " + ("object" == typeof b ? JSON.stringify(b) : b);
        }, "");
      (c.textContent = d),
        o.appendChild(c),
        _options.autoScroll && (o.scrollTop = o.scrollHeight - o.clientHeight);
    };
  }
  function d() {
    o.innerHTML = "";
  }
  function e() {
    return c(_options.logColor).apply(null, arguments);
  }
  function f() {
    return c(_options.infoColor).apply(null, arguments);
  }
  function g() {
    return c(_options.warnColor).apply(null, arguments);
  }
  function h() {
    return c(_options.errorColor).apply(null, arguments);
  }
  function i(a) {
    for (var b in a)
      a.hasOwnProperty(b) && _options.hasOwnProperty(b) && (_options[b] = a[b]);
  }
  function j(a) {
    p ||
      ((p = !0),
      a && i(a),
      (o = b()),
      document.body.appendChild(o),
      _options.freeConsole ||
        ((q.log = console.log),
        (q.clear = console.clear),
        (q.info = console.info),
        (q.warn = console.warn),
        (q.error = console.error),
        (console.log = n(e, "log")),
        (console.clear = n(d, "clear")),
        (console.info = n(f, "info")),
        (console.warn = n(g, "warn")),
        (console.error = n(h, "error"))));
  }
  function k() {
    (p = !1),
      (console.log = q.log),
      (console.clear = q.clear),
      (console.info = q.info),
      (console.warn = q.warn),
      (console.error = q.error),
      o.remove();
  }
  function l() {
    if (!p) throw "You need to call `screenLog.init()` first.";
  }
  function m(a) {
    return function () {
      return l(), a.apply(this, arguments);
    };
  }
  function n(a, b) {
    return function () {
      a.apply(this, arguments),
        "function" == typeof q[b] && q[b].apply(console, arguments);
    };
  }
  var o,
    p = !1,
    q = {};
  (_options = {
    bgColor: "black",
    logColor: "lightgreen",
    infoColor: "blue",
    warnColor: "orange",
    errorColor: "red",
    fontSize: "1em",
    freeConsole: !1,
    css: "",
    autoScroll: !0,
  }),
    (window.screenLog = {
      init: j,
      log: n(m(e), "log"),
      clear: n(m(d), "clear"),
      info: n(m(d), "info"),
      warn: n(m(g), "warn"),
      error: n(m(h), "error"),
      destroy: m(k),
    });
})();
