define("detail-m/mods/module-askall/index", ["mui/zepto/zepto"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  function o() {
    for (var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    t = parseInt(e.showNum) || 2, i = [], n = 0; n < t; n++) {
      var o = (e.modelList || [])[n];
      o && o.askText && i.push('<li>\n        <i class="icon-ask">\u95ee</i>\n        <span class="answer-text">' + o.askText + '</span>\n        <span class="answer-count">' + o.answerCountText + "</span>\n      </li>")
    }
    return '<a href="javascript: void(0);" class="askall-wrap" title="\u95ee\u5927\u5bb6">\n    <h3 class="askall-title">' + (e.title || "\u95ee\u5927\u5bb6") + '\n      <span class="viewall rule-color-main">\n        <span class="viewall-text">\u67e5\u770b\u5168\u90e8</span>\n        <svg t="1516605784224" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1221" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13">\n          <defs><style type="text/css"></style></defs>\n          <path d="M393.390114 512.023536l347.948667-336.348468c20.50808-19.85828 20.50808-51.997258 0-71.792093-20.507056-19.826558-53.778834-19.826558-74.28589 0L281.990954 476.135164c-20.476357 19.826558-20.476357 51.981908 0 71.746044l385.061936 372.236839c10.285251 9.91379 23.728424 14.869662 37.173644 14.869662 13.446243 0 26.889417-4.956895 37.112246-14.901385 20.50808-19.826558 20.50808-51.919487 0-71.746044L393.390114 512.023536" p-id="1222"></path>\n        </svg>\n      </span>\n    </h3>\n    <ul class="askall-list">\n      ' + i.join("") + "\n    </ul>\n  </a>"
  }
  function a(e, t, i) {
    i.product.onLoad(["askAll", "scene"],
    function(n, o) {
      "tmall" === o && new d({
        "el": e,
        "config": t,
        "app": i,
        "data": n || {}
      })
    })
  }
  var r = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  u = e("mui/zepto/zepto"),
  d = function() {
    function e(t) {
      n(this, e),
      this.el = t.el,
      this.cfg = t.config,
      this.app = t.app,
      this.data = t.data || {},
      this.smbInstance = null,
      this.init()
    }
    return r(e, [{
      "key": "init",
      "value": function() {
        this.render() ? (this.initActionBtn(), this.initEvents()) : this.hide()
      }
    },
    {
      "key": "hide",
      "value": function() {
        u(this.el).parent(".module-wrap").hide()
      }
    },
    {
      "key": "render",
      "value": function() {
        var e = this.data || {};
        if (!e || !e.linkUrl || !e.modelList || 0 === e.modelList.length) return ! 1;
        var t = o(e);
        return t ? u(this.el).html(t) : void 0
      }
    },
    {
      "key": "isAliApp",
      "value": function() {
        var e = navigator.userAgent;
        return - 1 !== e.indexOf("AliApp(TB") || -1 !== e.indexOf("AliApp(TM") || -1 !== e.indexOf("AlipayClient") || -1 !== e.indexOf("AliApp(ET") || -1 !== e.indexOf("AliApp(HTAO") || -1 !== e.indexOf("AliApp(BC")
      }
    },
    {
      "key": "initActionBtn",
      "value": function() {
        var e = this;
        e.isAliApp() ? e.directOpen = !0 : e.app.onSmartbanner(function(t, i) { ! i || !i.isShow ? e.directOpen = !0 : (e.directOpen = !1, u(e.el).find(".viewall-text").text("\u6253\u5f00APP\u67e5\u770b\u5168\u90e8"), e.smbInstance = t.getInstance({
            "type": "func",
            "bizKey": "taobao",
            "linkKey": i && i.autoLinkKey || "taobao",
            "href": window.location.href,
            "pageType": "mallDetail",
            "uiKey": "wdj"
          }))
        })
      }
    },
    {
      "key": "initEvents",
      "value": function() {
        var e = this;
        u(e.el).on("click", ".askall-wrap",
        function(t) {
          e.directOpen || !e.smbInstance ? Ali.pushWindow(e.data.linkUrl,
          function(t) {
            t.errorCode && (location.href = e.data.linkUrl)
          }) : e.smbInstance.redirect(!0)
        })
      }
    }]),
    e
  } ();
  i.exports = a
});
define("detail-m/mods/module-shop/index", ["mui/zepto/zepto", "mui/crossimage/index", "mui/datalazyload/index", "mui/xtemplate/index"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  function a(e, t, i) {
    new c({
      "el": e,
      "config": t,
      "app": i
    })
  }
  var o = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  r = e("mui/zepto/zepto"),
  l = e("mui/crossimage/index"),
  d = e("mui/datalazyload/index"),
  u = e("mui/xtemplate/index"),
  s = '<div class="shop-main" data-spm="1998338745">\n<div class="shop-logo">\n    {{#if(shopIcon)}}\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-ks-lazyload="{{shopIcon}}_120x120.jpg" aria-label="\u5e97\u94fa\u6807\u5fd7"/>\n    {{else}}\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-ks-lazyload="//img-tmdetail.alicdn.com/tps/i2/TB10ZY.HFXXXXcKXXXXorbaIVXX-80-80.jpg"  aria-label="\u5e97\u94fa\u6807\u5fd7"/>\n    {{/if}}\n</div>\n<div class="shop-info">\n    <div class="shop-name" title="{{shopName}}">{{#if(nationalIcon)}}<img src="{{nationalIcon}}" aria-label="\u6765\u6e90\u5730"/>{{/if}}{{shopName}}</div>\n    <div class="shop-title">{{#if(descIcon)}}<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-ks-lazyload="{{descIcon}}" aria-label="\u88c5\u9970\u56fe"/>{{/if}}</div>\n</div>\n<div class="shop-qualification {{#if(isYaoQualification || shopCertificateIcon)}}has-qualification{{/if}}">\n    {{#if(isYaoQualification)}}\n    <a class="yao-qualification"></a>\n    {{/if}}\n    {{#if(shopCertificateIcon)}}\n    <a class="hk-qualification">\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-ks-lazyload="{{shopCertificateIcon}}_120x120.jpg" aria-label="\u5e97\u94fa\u8d44\u8d28"/>\n    </a>\n    {{/if}}\n</div>\n\n</div>\n<ul class="score">\n{{#each(evaluates,"item","index")}}\n<li>{{item.title}}<b class="{{#if(item.level === "0")}}equal{{elseif(item.level === "-1")}}down{{elseif(item.level === "1")}}up{{/if}}">{{item.score}}</b></li>\n{{/each}}\n</ul>\n<div class="action mui-flex">\n{{#if(!(tags.isChaoshi||tags.isAutoFinancing) && allProduct)}} <a class="all-product cell" href="{{allProduct}}" target="_blank">\u5168\u90e8\u5546\u54c1</a> {{/if}}\n{{#if(shopUrl)}}<a class="go-shop cell" href="{{shopUrl}}" target="_blank">\u8fdb\u5165\u5e97\u94fa</a>{{/if}}\n{{#if(tags.isAutoFinancing && seller.wwUrl)}}<a class="support cell" href="{{seller.wwUrl}}">\u8054\u7cfb\u5356\u5bb6</a>{{/if}}\n</div>',
  c = function() {
    function t(e) {
      n(this, t),
      this.el = e.el,
      this.cfg = e.config,
      this.app = e.app,
      this.init()
    }
    return o(t, [{
      "key": "init",
      "value": function() {
        this.render()
      }
    },
    {
      "key": "render",
      "value": function() {
        var e = this;
        e.app.product.onLoad(["shopInfo", "tags", "inter", "seller"],
        function(t, i, n, a) {
          var o = null;
          i.isPrescriptionDrug || i.isOtcDrug || (o = a.creditLevelIcon, e.app.env && e.app.env.tmallApp ? o = null: e.app.env && e.app.env.alihealthApp && (o = "//img.alicdn.com/tfs/TB1FQ6BSpXXXXcBaFXXXXXXXXXX-141-42.png")),
          r(e.el).html(new u(s).render(Object.assign(t, {
            "tags": i,
            "seller": a,
            "isYaoQualification": i.isHasQualification,
            "shopCertificateIcon": !a.certShopList && n.shopCertificateIcon,
            "nationalIcon": n.suppliedByHkOfficialWebsite && n.nationalIcon,
            "descIcon": o
          }))),
          e.initEvent()
        })
      }
    },
    {
      "key": "initEvent",
      "value": function() {
        var t = this;
        setTimeout(function() {
          var e = d.instance();
          e.addStartListener(l.DatalazyPlugin(t.el, {
            "size": "120x120"
          })),
          e.addElements(t.el)
        }),
        t.app.product.onChange("shopInfo",
        function(e) {
          e && e.hideDsr && r(".score", t.el).hide(),
          e && e.hideAllProduct && r(".all-product", t.el).hide(),
          e && e.hideShopLink && r(".go-shop", t.el).hide()
        }),
        r(".yao-qualification", t.el).on("click",
        function() {
          t.shopCover ? t.shopCover.show(!0) : (t.app.onLoading(function(e) {
            e.show()
          }), e(["detail-m/mods/module-shop/cover"],
          function(e) {
            t.app.onLoading(function(e) {
              e.hide()
            }),
            t.shopCover = new e,
            t.shopCover.show(!0)
          }))
        });
        var i = navigator.userAgent; - 1 != i.indexOf("MiniProgram") && -1 != i.indexOf("AlipayClient") && (r(".go-shop", t.el).attr("target", ""), r(".all-product", t.el).attr("target", ""), r(".score", t.el).attr("target", ""))
      }
    }]),
    t
  } ();
  i.exports = a
});
define("mui/flipsnap/index",
function(e, t, n) {
  var r = document.createElement("div");
  var i = ["webkit", "moz", "o", "ms"];
  var o = {};
  var a = d.support = {};
  var s = false;
  var u = 5;
  var c = 55;
  a.transform3d = v(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
  a.transform = v(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"]);
  a.transition = v(["transitionProperty", "WebkitTransitionProperty", "MozTransitionProperty", "OTransitionProperty", "msTransitionProperty"]);
  a.addEventListener = "addEventListener" in window;
  a.mspointer = window.navigator.msPointerEnabled;
  a.cssAnimation = (a.transform3d || a.transform) && a.transition;
  var f = ["touch", "mouse"];
  var l = {
    start: {
      touch: "touchstart",
      mouse: "mousedown"
    },
    move: {
      touch: "touchmove",
      mouse: "mousemove"
    },
    end: {
      touch: "touchend",
      mouse: "mouseup"
    }
  };
  if (a.addEventListener) {
    document.addEventListener("gesturestart",
    function() {
      s = true
    });
    document.addEventListener("gestureend",
    function() {
      s = false
    })
  }
  function d(e, t) {
    return this instanceof d ? this.init(e, t) : new d(e, t)
  }
  d.prototype.init = function(e, t) {
    var n = this;
    n.element = e;
    if (typeof e === "string") {
      n.element = document.querySelector(e)
    }
    if (!n.element) {
      throw new Error("element not found")
    }
    if (a.mspointer) {
      n.element.style.msTouchAction = "pan-y"
    }
    t = t || {};
    n.distance = t.distance;
    n.maxPoint = t.maxPoint;
    n.disableTouch = t.disableTouch === undefined ? false: t.disableTouch;
    n.disable3d = t.disable3d === undefined ? false: t.disable3d;
    n.transitionDuration = t.transitionDuration === undefined ? "350ms": t.transitionDuration + "ms";
    n.threshold = t.threshold || 0;
    n.currentPoint = 0;
    n.currentX = 0;
    n.animation = false;
    n.timerId = null;
    n.use3d = a.transform3d;
    if (n.disable3d === true) {
      n.use3d = false
    }
    if (a.cssAnimation) {
      n._setStyle({
        transitionProperty: p("transform"),
        transitionTimingFunction: "cubic-bezier(0,0,0.25,1)",
        transitionDuration: "0ms",
        transform: n._getTranslate(0)
      })
    } else {
      n._setStyle({
        position: "relative",
        left: "0px"
      })
    }
    n.refresh();
    f.forEach(function(e) {
      n.element.addEventListener(l.start[e], n, false)
    });
    return n
  };
  d.prototype.handleEvent = function(e) {
    var t = this;
    switch (e.type) {
    case l.start.touch:
      t._touchStart(e, "touch");
      break;
    case l.start.mouse:
      t._touchStart(e, "mouse");
      break;
    case l.move.touch:
      t._touchMove(e, "touch");
      break;
    case l.move.mouse:
      t._touchMove(e, "mouse");
      break;
    case l.end.touch:
      t._touchEnd(e, "touch");
      break;
    case l.end.mouse:
      t._touchEnd(e, "mouse");
      break;
    case "click":
      t._click(e);
      break
    }
  };
  d.prototype.refresh = function() {
    var e = this;
    e._maxPoint = e.maxPoint === undefined ?
    function() {
      var t = e.element.childNodes,
      n = -1,
      r = 0,
      i = t.length,
      o;
      for (; r < i; r++) {
        o = t[r];
        if (o.nodeType === 1) {
          n++
        }
      }
      return n
    } () : e.maxPoint;
    if (e.distance === undefined) {
      if (e._maxPoint < 0) {
        e._distance = 0
      } else {
        e._distance = e.element.scrollWidth / (e._maxPoint + 1)
      }
    } else {
      e._distance = e.distance
    }
    e._maxX = -e._distance * e._maxPoint;
    e.moveToPoint()
  };
  d.prototype.hasNext = function() {
    var e = this;
    return e.currentPoint < e._maxPoint
  };
  d.prototype.hasPrev = function() {
    var e = this;
    return e.currentPoint > 0
  };
  d.prototype.toNext = function(e) {
    var t = this;
    if (!t.hasNext()) {
      return
    }
    t.moveToPoint(t.currentPoint + 1, e)
  };
  d.prototype.toPrev = function(e) {
    var t = this;
    if (!t.hasPrev()) {
      return
    }
    t.moveToPoint(t.currentPoint - 1, e)
  };
  d.prototype.moveToPoint = function(e, t) {
    var n = this;
    t = t === undefined ? n.transitionDuration: t + "ms";
    var r = n.currentPoint;
    if (e === undefined) {
      e = n.currentPoint
    }
    if (e < 0) {
      n.currentPoint = 0
    } else if (e > n._maxPoint) {
      n.currentPoint = n._maxPoint
    } else {
      n.currentPoint = parseInt(e, 10)
    }
    if (r !== n.currentPoint) {
      n._triggerEvent("fspointbeforemove", true, false, {
        currentPoint: n.currentPoint,
        beforePoint: r
      })
    }
    if (a.cssAnimation) {
      n._setStyle({
        transitionDuration: t
      })
    } else {
      n.animation = true
    }
    n._setX( - n.currentPoint * n._distance, t);
    if (r !== n.currentPoint) {
      n._triggerEvent("fsmoveend", true, false);
      n._triggerEvent("fspointmove", true, false)
    }
  };
  d.prototype._setX = function(e, t) {
    var n = this;
    n.currentX = e;
    if (a.cssAnimation) {
      n.element.style[o.transform] = n._getTranslate(e)
    } else {
      if (n.animation) {
        n._animate(e, t || n.transitionDuration)
      } else {
        n.element.style.left = e + "px"
      }
    }
  };
  d.prototype._touchStart = function(e, t) {
    var n = this;
    if (n.disableTouch || n.scrolling || s) {
      return
    }
    n.element.addEventListener(l.move[t], n, false);
    document.addEventListener(l.end[t], n, false);
    var r = e.target.tagName;
    if (t === "mouse" && r !== "SELECT" && r !== "INPUT" && r !== "TEXTAREA" && r !== "BUTTON") {
      e.preventDefault()
    }
    if (a.cssAnimation) {
      n._setStyle({
        transitionDuration: "0ms"
      })
    } else {
      n.animation = false
    }
    n.scrolling = true;
    n.moveReady = false;
    n.startPageX = m(e, "pageX");
    n.startPageY = m(e, "pageY");
    n.basePageX = n.startPageX;
    n.directionX = 0;
    n.startTime = e.timeStamp;
    n._triggerEvent("fstouchstart", true, false)
  };
  d.prototype._touchMove = function(e, t) {
    var n = this;
    if (!n.scrolling || s) {
      return
    }
    var r = m(e, "pageX");
    var i = m(e, "pageY");
    var o;
    var a;
    if (n.moveReady) {
      e.preventDefault();
      o = r - n.basePageX;
      a = n.currentX + o;
      if (a >= 0 || a < n._maxX) {
        a = Math.round(n.currentX + o / 3)
      }
      n.directionX = o === 0 ? n.directionX: o > 0 ? -1 : 1;
      var f = !n._triggerEvent("fstouchmove", true, true, {
        delta: o,
        direction: n.directionX
      });
      if (f) {
        n._touchAfter({
          moved: false,
          originalPoint: n.currentPoint,
          newPoint: n.currentPoint,
          cancelled: true
        })
      } else {
        n._setX(a)
      }
    } else {
      var l = g(n.startPageX, n.startPageY, r, i);
      if (l.z > u) {
        if (_(l) > c) {
          e.preventDefault();
          n.moveReady = true;
          n.element.addEventListener("click", n, true)
        } else {
          n.scrolling = false
        }
      }
    }
    n.basePageX = r
  };
  d.prototype._touchEnd = function(e, t) {
    var n = this;
    n.element.removeEventListener(l.move[t], n, false);
    document.removeEventListener(l.end[t], n, false);
    if (!n.scrolling) {
      return
    }
    var r = -n.currentX / n._distance;
    r = n.directionX > 0 ? Math.ceil(r) : n.directionX < 0 ? Math.floor(r) : Math.round(r);
    if (r < 0) {
      r = 0
    } else if (r > n._maxPoint) {
      r = n._maxPoint
    }
    if (Math.abs(n.startPageX - n.basePageX) < n.threshold) {
      r = n.currentPoint
    }
    n._touchAfter({
      moved: r !== n.currentPoint,
      originalPoint: n.currentPoint,
      newPoint: r,
      cancelled: false
    });
    n.moveToPoint(r)
  };
  d.prototype._click = function(e) {
    var t = this;
    e.stopPropagation();
    e.preventDefault()
  };
  d.prototype._touchAfter = function(e) {
    var t = this;
    t.scrolling = false;
    t.moveReady = false;
    setTimeout(function() {
      t.element.removeEventListener("click", t, true)
    },
    200);
    t._triggerEvent("fstouchend", true, false, e)
  };
  d.prototype._setStyle = function(e) {
    var t = this;
    var n = t.element.style;
    for (var r in e) {
      h(n, r, e[r])
    }
  };
  d.prototype._animate = function(e, t) {
    var n = this;
    var r = n.element;
    var i = +new Date;
    var o = parseInt(r.style.left, 10);
    var a = e;
    var s = parseInt(t, 10);
    var u = function(e, t) {
      return - (e /= t) * (e - 2)
    };
    if (n.timerId) {
      clearInterval(n.timerId)
    }
    n.timerId = setInterval(function() {
      var e = new Date - i;
      var t, c;
      if (e > s) {
        clearInterval(n.timerId);
        n.timerId = null;
        c = a
      } else {
        t = u(e, s);
        c = t * (a - o) + o
      }
      r.style.left = c + "px"
    },
    10)
  };
  d.prototype.destroy = function() {
    var e = this;
    f.forEach(function(t) {
      e.element.removeEventListener(l.start[t], e, false)
    })
  };
  d.prototype._getTranslate = function(e) {
    var t = this;
    return t.use3d ? "translate3d(" + e + "px, 0, 0)": "translate(" + e + "px, 0)"
  };
  d.prototype._triggerEvent = function(e, t, n, r) {
    var i = this;
    var o = document.createEvent("Event");
    o.initEvent(e, t, n);
    if (r) {
      for (var a in r) {
        if (r.hasOwnProperty(a)) {
          o[a] = r[a]
        }
      }
    }
    return i.element.dispatchEvent(o)
  };
  function m(e, t) {
    return e.changedTouches ? e.changedTouches[0][t] : e[t]
  }
  function v(e) {
    return y(e,
    function(e) {
      return r.style[e] !== undefined
    })
  }
  function h(e, t, n) {
    var r = o[t];
    if (r) {
      e[r] = n
    } else if (e[t] !== undefined) {
      o[t] = t;
      e[t] = n
    } else {
      y(i,
      function(r) {
        var i = P(r) + P(t);
        if (e[i] !== undefined) {
          o[t] = i;
          e[i] = n;
          return true
        }
      })
    }
  }
  function p(e) {
    if (r.style[e] !== undefined) {
      return e
    } else {
      var t;
      y(i,
      function(n) {
        var i = P(n) + P(e);
        if (r.style[i] !== undefined) {
          t = "-" + n + "-" + e;
          return true
        }
      });
      return t
    }
  }
  function P(e) {
    return e.charAt(0).toUpperCase() + e.substr(1)
  }
  function y(e, t) {
    for (var n = 0,
    r = e.length; n < r; n++) {
      if (t(e[n], n)) {
        return true
      }
    }
    return false
  }
  function g(e, t, n, r) {
    var i = Math.abs(e - n);
    var o = Math.abs(t - r);
    var a = Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2));
    return {
      x: i,
      y: o,
      z: a
    }
  }
  function _(e) {
    var t = e.y / e.z;
    var n = Math.acos(t);
    return 180 / (Math.PI / n)
  }
  n.exports = d
});
define("mui/custom-event/index",
function(t, n, e) {
  "use strict";
  var i = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
  function(t) {
    return typeof t
  }: function(t) {
    return t && typeof Symbol === "function" && t.constructor === Symbol ? "symbol": typeof t
  };
  var r = 0,
  l = function _(t) {
    var n = ++r + "";
    return t ? t + n: n
  };
  var s = Math.pow(2, 53) - 1;
  var o = function x(t) {
    var n = t !== null && t !== undefined ? t.length: null;
    return typeof n == "number" && n >= 0 && n <= s
  };
  var c = function k(t) {
    if (t == null) return true;
    var n = Object.prototype.toString.call(t);
    if (o(t) && (n === "[object Array]" || n === "[object String]" || n === "[object Arguments]")) return t.length === 0;
    return Object.keys(t).length === 0
  };
  var a = function j(t) {
    if (t == null) return 0;
    return o(t) ? t.length: Object.keys(t).length
  };
  var u = {};
  var f = /\s+/;
  var v = function m(t, n, e, r, l) {
    var s = 0,
    o;
    if (e && (typeof e === "undefined" ? "undefined": i(e)) === "object") {
      if (r !== void 0 && "context" in l && l.context === void 0) l.context = r;
      for (o = Object.keys(e); s < o.length; s++) {
        n = m(t, n, o[s], e[o[s]], l)
      }
    } else if (e && f.test(e)) {
      for (o = e.split(f); s < o.length; s++) {
        n = t(n, o[s], r, l)
      }
    } else {
      n = t(n, e, r, l)
    }
    return n
  };
  u.on = function(t, n, e) {
    return h(this, t, n, e)
  };
  var h = function T(t, n, e, i, r) {
    t._events = v(b, t._events || {},
    n, e, {
      context: i,
      ctx: t,
      listening: r
    });
    if (r) {
      var l = t._listeners || (t._listeners = {});
      l[r.id] = r
    }
    return t
  };
  u.listenTo = function(t, n, e) {
    if (!t) return this;
    var i = t._listenId || (t._listenId = l("l"));
    var r = this._listeningTo || (this._listeningTo = {});
    var s = r[i];
    if (!s) {
      var o = this._listenId || (this._listenId = l("l"));
      s = r[i] = {
        obj: t,
        objId: i,
        id: o,
        listeningTo: r,
        count: 0
      }
    }
    h(t, n, e, this, s);
    return this
  };
  var b = function I(t, n, e, i) {
    if (e) {
      var r = t[n] || (t[n] = []);
      var l = i.context,
      s = i.ctx,
      o = i.listening;
      if (o) o.count++;
      r.push({
        callback: e,
        context: l,
        ctx: l || s,
        listening: o
      })
    }
    return t
  };
  u.off = function(t, n, e) {
    if (!this._events) return this;
    this._events = v(g, this._events, t, n, {
      context: e,
      listeners: this._listeners
    });
    return this
  };
  u.stopListening = function(t, n, e) {
    var i = this._listeningTo;
    if (!i) return this;
    var r = t ? [t._listenId] : Object.keys(i);
    for (var l = 0; l < r.length; l++) {
      var s = i[r[l]];
      if (!s) break;
      s.obj.off(n, e, this)
    }
    if (c(i)) this._listeningTo = void 0;
    return this
  };
  var g = function O(t, n, e, i) {
    if (!t) return;
    var r = 0,
    l;
    var s = i.context,
    o = i.listeners;
    if (!n && !e && !s) {
      var c = Object.keys(o);
      for (; r < c.length; r++) {
        l = o[c[r]];
        delete o[l.id];
        delete l.listeningTo[l.objId]
      }
      return
    }
    var u = n ? [n] : Object.keys(t);
    for (; r < u.length; r++) {
      n = u[r];
      var f = t[n];
      if (!f) break;
      var v = [];
      for (var h = 0; h < f.length; h++) {
        var b = f[h];
        if (e && e !== b.callback && e !== b.callback._callback || s && s !== b.context) {
          v.push(b)
        } else {
          l = b.listening;
          if (l && --l.count === 0) {
            delete o[l.id];
            delete l.listeningTo[l.objId]
          }
        }
      }
      if (v.length) {
        t[n] = v
      } else {
        delete t[n]
      }
    }
    if (a(t)) return t
  };
  u.once = function(t, n, e) {
    var i = v(d, {},
    t, n, this.off.bind(this));
    return this.on(i, void 0, e)
  };
  u.listenToOnce = function(t, n, e) {
    var i = v(d, {},
    n, e,
    function() {
      this.stopListening.apply(this, arguments)
    }.bind(this));
    return this.listenTo(t, i)
  };
  var d = function w(t, n, e, i) {
    if (e) {
      var r = t[n] = function() {
        var t;
        return function() {
          if (t) {
            return
          }
          t = true;
          i(n, r);
          e.apply(this, arguments)
        }
      } ();
      r._callback = e
    }
    return t
  };
  u.trigger = function(t) {
    if (!this._events) return this;
    var n = Math.max(0, arguments.length - 1);
    var e = Array(n);
    for (var i = 0; i < n; i++) {
      e[i] = arguments[i + 1]
    }
    v(y, this._events, t, void 0, e);
    return this
  };
  var y = function S(t, n, e, i) {
    if (t) {
      var r = t[n];
      var l = t.all;
      if (r && l) l = l.slice();
      if (r) p(r, i);
      if (l) p(l, [n].concat(i))
    }
    return t
  };
  var p = function A(t, n) {
    var e, i = -1,
    r = t.length,
    l = n[0],
    s = n[1],
    o = n[2];
    switch (n.length) {
    case 0:
      while (++i < r) { (e = t[i]).callback.call(e.ctx)
      }
      return;
    case 1:
      while (++i < r) { (e = t[i]).callback.call(e.ctx, l)
      }
      return;
    case 2:
      while (++i < r) { (e = t[i]).callback.call(e.ctx, l, s)
      }
      return;
    case 3:
      while (++i < r) { (e = t[i]).callback.call(e.ctx, l, s, o)
      }
      return;
    default:
      while (++i < r) { (e = t[i]).callback.apply(e.ctx, n)
      }
      return
    }
  };
  u.bind = u.on;
  u.unbind = u.off;
  e.exports = u
});
define("mui/slider-m/index", ["mui/flipsnap/index", "mui/custom-event/index"],
function(t, e, i) {
  "use strict";
  function n(t, e) {
    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
  function(t) {
    return typeof t
  }: function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
  },
  o = function() {
    function t(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n)
      }
    }
    return function(e, i, n) {
      return i && t(e.prototype, i),
      n && t(e, n),
      e
    }
  } (),
  s = "current",
  l = window,
  a = document,
  u = t("mui/flipsnap/index"),
  c = t("mui/custom-event/index"),
  f = function() {
    function t(e, i) {
      var r = this;
      n(this, t),
      this.config = i = Object.assign({
        "scroller": ".scroller",
        "nav": ".nav",
        "transitionDuration": 350,
        "bindTrigger": !1,
        "lazyLoadImg": !1,
        "autoSlide": !1,
        "hoverStop": !0,
        "fallback": {
          "img": "",
          "width": 30,
          "height": 30
        },
        "threshold": 30,
        "timeout": 3e3
      },
      i),
      e.getDOMNode && (e = e.getDOMNode()),
      this.el = "string" == typeof e ? document.querySelector(e) : e,
      this.scroller = this.el.querySelector(i.scroller),
      this.pannels = i.pannels && this.scroller.querySelectorAll(i.pannels) || this.scroller.children,
      this.nav = this.el.querySelector(i.nav),
      this.nav && (this.triggers = this.nav.children);
      var o = u(this.scroller, i);
      this.flipsnap = o;
      var a = 0;
      if (o.element.addEventListener("fspointmove",
      function(t) {
        if (t.target === o.element) {
          var e = this.index;
          if (!isNaN(e) && a !== e) {
            if (a = e, this.triggers) {
              var i = this.triggers[e];
              this.nav.querySelector("." + s).classList.remove(s),
              i && i.classList.add(s)
            }
            this.trigger("change", {
              "index": e,
              "pannel": this.pannels[e],
              "originalEvent": t
            })
          }
        }
      }.bind(this), !1), o.element.addEventListener("fspointbeforemove",
      function(t) {
        t.target === o.element && this.trigger("beforechange", {
          "before": t.beforePoint,
          "index": t.currentPoint,
          "pannel": this.pannels[t.currentPoint],
          "originalEvent": t
        })
      }.bind(this), !1), i.autoSlide) {
        this.play(),
        i.hoverStop && (this.scroller.addEventListener("touchstart",
        function(t) {
          this.stop()
        }.bind(this)), this.scroller.addEventListener("touchend",
        function(t) {
          this.play()
        }.bind(this)));
        var c = function(t, e, i, n) {
          if (t) {
            var r = Array.prototype.slice.call(n);
            e = e || 0,
            "string" == typeof t && (t = i[t]);
            var o = function() {
              t.apply(i, r)
            },
            s = setTimeout(o, e);
            return {
              "id": s,
              "cancel": function() {
                clearTimeout(s)
              }
            }
          }
        },
        f = function(t, e, i) {
          function n() {
            n.stop(),
            r = c(t, e, i || this, arguments)
          }
          if (e = e || 150, e === -1) return function() {
            t.apply(i || this, arguments)
          };
          var r = null;
          return n.stop = function() {
            r && (r.cancel(), r = 0)
          },
          n
        };
        l.addEventListener("scroll", f(function(t) {
          this.isViewPort() ? this.play() : this.stop()
        }.bind(this), 200), !1)
      }
      if (this.triggers && i.bindTrigger) for (var h = function(t, e) {
        r.triggers[t].addEventListener("click",
        function(e) {
          this.go(t)
        }.bind(r))
      },
      d = 0, p = this.triggers.length; d < p; d++) h(d, p);
      l.addEventListener("orientationchange",
      function() {
        o.refresh(0)
      }),
      i.lazyLoadImg !== !1 && (this.lazyLoadImg(), i.fallback)
    }
    return o(t, [{
      "key": "_getRAF",
      "value": function(t) {
        for (var e = window,
        i = ["r", "webkitR", "mozR", "msR", "oR"], n = 0; n < i.length; n++) {
          var r = i[n] + "equestAnimationFrame";
          if (r in e) return e[r](t)
        }
        return function(t) {
          setTimeout(t, 0)
        }
      }
    },
    {
      "key": "play",
      "value": function() {
        var t = this;
        clearInterval(t.autoSliderTimer),
        t.autoSliderTimer = setInterval(function() {
          t._getRAF(function() {
            t.next()
          })
        },
        t.config.timeout)
      }
    },
    {
      "key": "stop",
      "value": function() {
        clearInterval(this.autoSliderTimer),
        this.trigger("stop")
      }
    },
    {
      "key": "getPoint",
      "value": function(t) {
        var e = this.size + 1;
        return (e + t % e) % e
      }
    },
    {
      "key": "go",
      "value": function(t, e, i) {
        this.flipsnap.moveToPoint.apply(this.flipsnap, [t, i]),
        e && this.once("change", e)
      }
    },
    {
      "key": "next",
      "value": function(t, e) {
        var i = this.getPoint(this.index + 1);
        this.go.apply(this, [i, t, e])
      }
    },
    {
      "key": "previous",
      "value": function(t, e) {
        var i = this.getPoint(this.index - 1);
        this.go.apply(this, [i, t, e])
      }
    },
    {
      "key": "refresh",
      "value": function(t) {
        this.flipsnap.refresh.apply(this.flipsnap, arguments)
      }
    },
    {
      "key": "destroy",
      "value": function() {
        this.autoSliderTimer && this.stop(),
        this.flipsnap.destroy()
      }
    },
    {
      "key": "lazyLoadImg",
      "value": function() {
        var t = this,
        e = [],
        i = this.config.fallback,
        n = t.pannels,
        o = void 0,
        s = void 0;
        if (i && i.img) for (var l = this.scroller.querySelectorAll("img"), a = 0, u = l.length; a < u; a++) {
          var c = l[a];
          c.setAttribute("src", i.img),
          c.style.cssText = "width:" + i.width + "px;height:" + i.height + "px"
        }
        o = function(i) {
          var o = t.index,
          l = "data-lazyload";
          if (e.length !== t.size + 1) {
            if (e.indexOf(o) === -1) {
              for (var a = n[o].querySelectorAll("img"), u = function(t, e) {
                var i = a[t],
                n = i.getAttribute(l) || i.getAttribute("data-src");
                if (!n) return {
                  "v": void 0
                };
                var r = new Image;
                r.addEventListener("load",
                function() {
                  i.src = n,
                  r = null
                }),
                r.src = n,
                i.removeAttribute(l)
              },
              c = 0, f = a.length; c < f; c++) {
                var h = u(c, f);
                if ("object" === (void 0 === h ? "undefined": r(h))) return h.v
              }
              e.push(o)
            }
          } else s()
        },
        s = function() {
          this.off("change", o, !1)
        }.bind(this),
        this.on("change", o, !1),
        o()
      }
    },
    {
      "key": "getOffset",
      "value": function(t) {
        for (var e = t,
        i = 0,
        n = 0; null != e && e != a.body;) i += e.offsetLeft,
        n += e.offsetTop,
        e = e.offsetParent;
        return {
          "left": i,
          "top": n
        }
      }
    },
    {
      "key": "isViewPort",
      "value": function() {
        var t = this.el,
        e = this.getOffset(t);
        return ! (e.top + t.clientHeight <= l.scrollY || l.innerWidth + l.scrollX <= e.left || l.innerHeight + l.scrollY <= e.top || e.left + t.clientWidth <= l.scrollX)
      }
    },
    {
      "key": "index",
      "get": function() {
        return this.flipsnap.currentPoint
      }
    },
    {
      "key": "size",
      "get": function() {
        return this.flipsnap._maxPoint
      }
    }]),
    t
  } ();
  Object.assign(f.prototype, c),
  i.exports = f
});
define("mui/zepto/event", ["mui/zepto/zepto"],
function(e, n, t) {
  "use strict";
  var r = e("mui/zepto/zepto"); !
  function(e) {
    function n(e) {
      return e._zid || (e._zid = l++)
    }
    function t(e, t, o, u) {
      if (t = r(t), t.ns) var a = i(t.ns);
      return (g[n(e)] || []).filter(function(e) {
        return e && (!t.e || e.e == t.e) && (!t.ns || a.test(e.ns)) && (!o || n(e.fn) === n(o)) && (!u || e.sel == u)
      })
    }
    function r(e) {
      var n = ("" + e).split(".");
      return {
        "e": n[0],
        "ns": n.slice(1).sort().join(" ")
      }
    }
    function i(e) {
      return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
    }
    function o(e, n) {
      return e.del && !y && e.e in E || !!n
    }
    function u(e) {
      return P[e] || y && E[e] || e
    }
    function a(t, i, a, f, c, l, d) {
      var v = n(t),
      h = g[v] || (g[v] = []);
      i.split(/\s/).forEach(function(n) {
        if ("ready" == n) return e(document).ready(a);
        var i = r(n);
        i.fn = a,
        i.sel = c,
        i.e in P && (a = function(n) {
          var t = n.relatedTarget;
          if (!t || t !== this && !e.contains(this, t)) return i.fn.apply(this, arguments)
        }),
        i.del = l;
        var v = l || a;
        i.proxy = function(e) {
          if (e = s(e), !e.isImmediatePropagationStopped()) {
            e.data = f;
            var n = v.apply(t, e._args == p ? [e] : [e].concat(e._args));
            return n === !1 && (e.preventDefault(), e.stopPropagation()),
            n
          }
        },
        i.i = h.length,
        h.push(i),
        "addEventListener" in t && t.addEventListener(u(i.e), i.proxy, o(i, d))
      })
    }
    function f(e, r, i, a, f) {
      var s = n(e); (r || "").split(/\s/).forEach(function(n) {
        t(e, n, i, a).forEach(function(n) {
          delete g[s][n.i],
          "removeEventListener" in e && e.removeEventListener(u(n.e), n.proxy, o(n, f))
        })
      })
    }
    function s(n, t) {
      return ! t && n.isDefaultPrevented || (t || (t = n), e.each(w,
      function(e, r) {
        var i = t[e];
        n[e] = function() {
          return this[r] = b,
          i && i.apply(t, arguments)
        },
        n[r] = x
      }), (t.defaultPrevented !== p ? t.defaultPrevented: "returnValue" in t ? t.returnValue === !1 : t.getPreventDefault && t.getPreventDefault()) && (n.isDefaultPrevented = b)),
      n
    }
    function c(e) {
      var n, t = {
        "originalEvent": e
      };
      for (n in e) z.test(n) || e[n] === p || (t[n] = e[n]);
      return s(t, e)
    }
    var p, l = 1,
    d = Array.prototype.slice,
    v = e.isFunction,
    h = function(e) {
      return "string" == typeof e
    },
    g = {},
    m = {},
    y = "onfocusin" in window,
    E = {
      "focus": "focusin",
      "blur": "focusout"
    },
    P = {
      "mouseenter": "mouseover",
      "mouseleave": "mouseout"
    };
    m.click = m.mousedown = m.mouseup = m.mousemove = "MouseEvents",
    e.event = {
      "add": a,
      "remove": f
    },
    e.proxy = function(t, r) {
      var i = 2 in arguments && d.call(arguments, 2);
      if (v(t)) {
        var o = function() {
          return t.apply(r, i ? i.concat(d.call(arguments)) : arguments)
        };
        return o._zid = n(t),
        o
      }
      if (h(r)) return i ? (i.unshift(t[r], t), e.proxy.apply(null, i)) : e.proxy(t[r], t);
      throw new TypeError("expected function")
    },
    e.fn.bind = function(e, n, t) {
      return this.on(e, n, t)
    },
    e.fn.unbind = function(e, n) {
      return this.off(e, n)
    },
    e.fn.one = function(e, n, t, r) {
      return this.on(e, n, t, r, 1)
    };
    var b = function() {
      return ! 0
    },
    x = function() {
      return ! 1
    },
    z = /^([A-Z]|returnValue$|layer[XY]$)/,
    w = {
      "preventDefault": "isDefaultPrevented",
      "stopImmediatePropagation": "isImmediatePropagationStopped",
      "stopPropagation": "isPropagationStopped"
    };
    e.fn.delegate = function(e, n, t) {
      return this.on(n, e, t)
    },
    e.fn.undelegate = function(e, n, t) {
      return this.off(n, e, t)
    },
    e.fn.live = function(n, t) {
      return e(document.body).delegate(this.selector, n, t),
      this
    },
    e.fn.die = function(n, t) {
      return e(document.body).undelegate(this.selector, n, t),
      this
    },
    e.fn.on = function(n, t, r, i, o) {
      var u, s, l = this;
      return n && !h(n) ? (e.each(n,
      function(e, n) {
        l.on(e, t, r, n, o)
      }), l) : (h(t) || v(i) || i === !1 || (i = r, r = t, t = p), i !== p && r !== !1 || (i = r, r = p), i === !1 && (i = x), l.each(function(p, l) {
        o && (u = function(e) {
          return f(l, e.type, i),
          i.apply(this, arguments)
        }),
        t && (s = function(n) {
          var r, o = e(n.target).closest(t, l).get(0);
          if (o && o !== l) return r = e.extend(c(n), {
            "currentTarget": o,
            "liveFired": l
          }),
          (u || i).apply(o, [r].concat(d.call(arguments, 1)))
        }),
        a(l, n, i, r, t, s || u)
      }))
    },
    e.fn.off = function(n, t, r) {
      var i = this;
      return n && !h(n) ? (e.each(n,
      function(e, n) {
        i.off(e, t, n)
      }), i) : (h(t) || v(r) || r === !1 || (r = t, t = p), r === !1 && (r = x), i.each(function() {
        f(this, n, r, t)
      }))
    },
    e.fn.trigger = function(n, t) {
      return n = h(n) || e.isPlainObject(n) ? e.Event(n) : s(n),
      n._args = t,
      this.each(function() {
        n.type in E && "function" == typeof this[n.type] ? this[n.type]() : "dispatchEvent" in this ? this.dispatchEvent(n) : e(this).triggerHandler(n, t)
      })
    },
    e.fn.triggerHandler = function(n, r) {
      var i, o;
      return this.each(function(u, a) {
        i = c(h(n) ? e.Event(n) : n),
        i._args = r,
        i.target = a,
        e.each(t(a, n.type || n),
        function(e, n) {
          if (o = n.proxy(i), i.isImmediatePropagationStopped()) return ! 1
        })
      }),
      o
    },
    "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n) {
      e.fn[n] = function(e) {
        return 0 in arguments ? this.bind(n, e) : this.trigger(n)
      }
    }),
    e.Event = function(e, n) {
      h(e) || (n = e, e = n.type);
      var t = document.createEvent(m[e] || "Events"),
      r = !0;
      if (n) for (var i in n)"bubbles" == i ? r = !!n[i] : t[i] = n[i];
      return t.initEvent(e, r, !0),
      s(t)
    }
  } (r),
  t.exports = r
});
define("mui/zepto/touch", ["mui/zepto/zepto", "mui/zepto/event"],
function(t, e, n) {
  var i = t("mui/zepto/zepto");
  t("mui/zepto/event"); !
  function(t) {
    function e(t, e, n, i) {
      return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left": "Right": n - i > 0 ? "Up": "Down"
    }
    function n() {
      u = null,
      a.last && (a.el.trigger("longTap"), a = {})
    }
    function i() {
      u && clearTimeout(u),
      u = null
    }
    function o() {
      r && clearTimeout(r),
      u && clearTimeout(u),
      r = u = null,
      a = {}
    }
    var r, u, s, a = {},
    c = 750;
    t(document).ready(function() {
      var f, p, l, d = 0,
      h = 0;
      "MSGesture" in window && (s = new MSGesture, s.target = document.body),
      t(document).bind("MSGestureEnd",
      function(t) {
        var e = t.velocityX > 1 ? "Right": t.velocityX < -1 ? "Left": t.velocityY > 1 ? "Down": t.velocityY < -1 ? "Up": null;
        e && (a.el.trigger("swipe"), a.el.trigger("swipe" + e))
      }).on("touchstart",
      function(e) {
        l = e.touches[0],
        e.touches && 1 === e.touches.length && a.x2 && (a.x2 = void 0, a.y2 = void 0),
        f = Date.now(),
        p = f - (a.last || f),
        a.el = t("tagName" in l.target ? l.target: l.target.parentNode),
        r && clearTimeout(r),
        a.x1 = l.pageX,
        a.y1 = l.pageY,
        p > 0 && p <= 250 && (a.isDoubleTap = !0),
        a.last = f,
        u = setTimeout(n, c)
      }).on("touchmove",
      function(t) {
        l = t.touches[0],
        i(),
        a.x1 ? (a.x2 = l.pageX, a.y2 = l.pageY, d += Math.abs(a.x1 - a.x2), h += Math.abs(a.y1 - a.y2)) : d = h = 0
      }).on("touchend",
      function(n) {
        if (i(), a.x2 && Math.abs(a.x1 - a.x2) > 30 || a.y2 && Math.abs(a.y1 - a.y2) > 30) a.el && (a.el.trigger("swipe"), a.el.trigger("swipe" + e(a.x1, a.x2, a.y1, a.y2))),
        a = {};
        else if ("last" in a) if (d < 30 && h < 30) {
          var u = t.Event("tap");
          u.cancelTouch = o,
          a.el && a.el.trigger(u),
          a.isDoubleTap ? (a.el && a.el.trigger("doubleTap"), a = {}) : r = setTimeout(function() {
            r = null,
            a.el && a.el.trigger("singleTap"),
            a = {}
          },
          250)
        } else a = {};
        d = h = 0
      }).on("touchcancel",
      function() {
        o(),
        d = h = 0
      })
    }),
    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
      t.fn[e] = function(t) {
        return this.on(e, t)
      }
    })
  } (i),
  n.exports = i
});
define("mui/datalazyload/index", ["mui/zepto/zepto", "mui/zepto/event"],
function(t, e, n) {
  function o(t) {
    return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
  }
  function a(t) {
    return 1 === t.nodeType || 9 === t.nodeType
  }
  function i(t) {
    return "function" == typeof t.getDOMNodes && (t = t.getDOMNodes()),
    t = o(t) ? t: [t],
    t.reduce(function(t, e) {
      return e ? o(e) ? t.concat(i(e)) : a(e) ? t.concat(e) : !e.tagName && e.length && "object" == typeof e ? t.concat(i(Array.prototype.slice.call(e))) : "string" == typeof e ? t.concat(s(e)) : "function" == typeof e.get ? (e = e.get(), t.concat(e ? i(e) : void 0)) : t: t
    },
    [])
  }
  function r(t) {
    var e = document.createElement("style");
    document.head.appendChild(e),
    e.styleSheet ? e.styleSheet.cssText = t: e.appendChild(x.createTextNode(t))
  }
  function c(t, e) {
    var n, o = "";
    try { (n = document.defaultView.getComputedStyle(t, null)) && (o = n.getPropertyValue(e) || n[e])
    } catch(a) {}
    try {
      "" === o && (o = t.currentStyle[e])
    } catch(a) {}
    return "" === o && (o = t.style[e]),
    o
  }
  function f(t, e, n) {
    T(t).on(e, n)
  }
  function d(t, e, n) {
    T(t).off(e, n)
  }
  function l(t, e) {
    return s(t, e)[0]
  }
  function s(t, e) {
    return "string" != typeof t ? t = i(t) : D(e || document).find(t).get()
  }
  function u(t, e, n) {
    return D(t).html(e)
  }
  function g() {
    var t = window,
    e = t.document;
    t.pageXOffset;
    return 1 * (t.pageXOffset || 0) + 1 * (!t.pageXOffset && e.documentElement.scrollLeft || 0) + 1 * (!t.pageXOffset && e.body.scrollLeft || 0)
  }
  function m() {
    var t = window,
    e = t.document;
    return 1 * (t.pageYOffset || 0) + 1 * (!t.pageYOffset && e.documentElement.scrollTop || 0) + 1 * (!t.pageYOffset && e.body.scrollTop || 0)
  }
  function h() {
    var t = window,
    e = t.document,
    n = e.body,
    o = e.documentElement;
    return t.innerWidth || "CSS1Compat" === e.compatMode && o.clientWidth || n && n.clientWidth || o.clientWidth
  }
  function p() {
    var t = window,
    e = t.document,
    n = e.body,
    o = e.documentElement;
    return t.innerHeight || "CSS1Compat" === e.compatMode && o.clientHeight || n && n.clientHeight || o.clientHeight
  }
  function v(t) {
    if (9 == t.nodeType) return Math.max(document.document.documentElement.scrollWidth || 0, document.body.documentElement.scrollWidth || 0, h());
    var e = t.offsetWidth;
    return e > 0 ? e: (e = c(t, "width"), (null == e || Number(e) < 0) && (e = t.style.width || 0), e = parseFloat(e) || 0, e += parseFloat(c(t, "paddingLeft")) || 0, e += parseFloat(c(t, "borderLeftWidth")) || 0, e += parseFloat(c(t, "paddingRight")) || 0, e += parseFloat(c(t, "borderRightWidth")) || 0)
  }
  function y(t) {
    if (9 == t.nodeType) return Math.max(document.document.documentElement.scrollHeight || 0, document.body.documentElement.scrollHeight || 0, p());
    var e = t.offsetHeight;
    return e > 0 ? e: (e = c(t, "height"), (null == e || Number(e) < 0) && (e = t.style.height || 0), e = parseFloat(e) || 0, e += parseFloat(c(t, "paddingTop")) || 0, e += parseFloat(c(t, "borderTopHeight")) || 0, e += parseFloat(c(t, "paddingBottom")) || 0, e += parseFloat(c(t, "borderBottomHeight")) || 0)
  }
  function b(t) {
    var e = g(),
    n = m();
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect(),
      a = document,
      i = a.body,
      r = a && a.documentElement,
      c = window.getComputedStyle && window.getComputedStyle(t).zoom || 1;
      e += o.left * c - (r.clientLeft || i.clientLeft || 0),
      n += o.top * c - (r.clientTop || i.clientTop || 0)
    }
    return {
      "left": e,
      "top": n
    }
  }
  function _(t) {
    var e, n, o, a = [];
    return function(i, r) {
      return 0 === r || r || (r = 1),
      1 & r && !n && (n = !0, t(function(t) {
        for (e = t; o = a.shift();) try {
          o && o.apply(null, [e])
        } catch(n) {
          setTimeout(function() {
            throw n
          },
          0)
        }
      })),
      e ? (i && i.apply(null, [e]), e) : (2 & r || i && a.push(i), e)
    }
  }
  function w(t, e, n) {
    function o() {
      i && (i.cancel(), i = 0),
      r = +new Date,
      t.apply(n || this, arguments),
      c = +new Date
    }
    function a(t, e) {
      var n = setTimeout(t, e);
      return {
        "cancel": function() {
          clearTimeout(n)
        }
      }
    }
    var i, r = 0,
    c = 0,
    e = e || 150,
    f = function() {
      var t = arguments; ! r || c >= r && +new Date - c > e || c < r && +new Date - r > 8 * e ? o() : (i && i.cancel(), i = a(function() {
        o.apply(null, t)
      },
      e))
    };
    return f.stop = function() {
      i && (i.cancel(), i = 0)
    },
    f
  }
  function A(t, e, n) {
    function o() {
      a ? t[--a].call(null, e, o) : n(e)
    }
    var a = t.length;
    o()
  }
  function k(t, e, n) {
    if (!t.offsetWidth && !t.offsetHeight) return ! 1;
    var o, a = b(t),
    i = window.getComputedStyle && window.getComputedStyle(t).zoom || 1,
    r = !0,
    c = a.left,
    f = a.top,
    d = {
      "left": c,
      "top": f,
      "right": c + v(t) * i,
      "bottom": f + y(t) * i
    };
    return o = F(e, d),
    o && n && (r = F(n, d)),
    r && o
  }
  function S(t) {
    return /^(loaded|complete)$/.test(document.readyState) ? t() : window.addEventListener ? window.addEventListener("load", t, !1) : window.attachEvent ? window.attachEvent("onload", t) : void 0
  }
  function C(t) {
    for (var e = ["webkit", ""], n = x.createElement("div"), o = e.length, o = 0, a = e.length; o < a; o++) if (e[o] || (t = t.toLowerCase()), void 0 !== n.style[e[o] + t]) return ! 0;
    return ! 1
  }
  function H(t, e) {
    var n = this;
    if (! (n instanceof H)) return new H(t, e);
    var a = t; (!t || t.nodeType || "string" == typeof t || "function" == typeof t.get || t.getDOMNode) && (a = e || {},
    t && (a.container = t)),
    n.set("diff", W),
    n.set("placeholder", window.ActiveXObject && !document.documentMode ? "//g.alicdn.com/s.gif": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="),
    n.set("execScript", !0),
    n.set("fade", !1),
    n.set("diff", W),
    n.set("autoDestroy", !0);
    for (var i in a) a.hasOwnProperty(i) && n.set(i, a[i]);
    n.get("container") || n.set("container", document.body),
    n._diffRatio = 0,
    n._callbacks = {},
    n._startLis = [],
    n._containerIsNotDocument = 9 != n.get("container").nodeType && n.get("container") !== document.body && n.get("container").nodeType,
    n._fade = C("Animation") && !(/Android (\d+\.\d+)/i.test(I.navigator.userAgent) && parseFloat(RegExp.$1) < 4.3),
    o(a.container) && (n._backCompact = 1),
    n._initLoadEvent(),
    a.container && n.addElements(a.container),
    n.resume(),
    f(document, "DOMContentLoaded", n._loadFn),
    S(function() {
      n._diffRatio = Math.max(j ? 2 : 1, n._diffRatio),
      n._loadFn()
    }),
    n._inited = !0
  }
  function F(t, e) {
    var n = {};
    return n.top = Math.max(t.top, e.top),
    n.bottom = Math.min(t.bottom, e.bottom),
    n.left = Math.max(t.left, e.left),
    n.right = Math.min(t.right, e.right),
    n.bottom >= n.top && n.right >= n.left
  }
  function E(t, e, n, a) {
    "img-src" === e && (e = "img"),
    o(t) || (t = [l(t)]);
    var i = new H(x, {});
    i.set("imgFlag", n || M + O),
    i.set("areaFlag", n || L + O),
    i.set("onStart", a),
    i.set("force", !0),
    i.addElements(t, e)
  }
  var R, D = t("mui/zepto/zepto"),
  T = t("mui/zepto/event"),
  I = window,
  x = I.document,
  M = "data-ks-lazyload",
  L = "ks-datalazyload",
  O = "-custom",
  W = "default",
  z = "none",
  N = "scroll",
  B = "touchmove",
  P = "resize",
  X = 100,
  V = 0,
  j = navigator.userAgent.match(/iPad|iPod|iPhone/);
  H.prototype = {
    "get": function(t) {
      return this["ATTR_" + t]
    },
    "set": function(t, e) {
      this["ATTR_" + t] = e
    },
    "addStartListener": function(t) {
      var e = this._startLis;
      if (t) {
        for (var n = e.length - 1; n >= 0; n--) if (e[n] == t) return;
        e.push(t)
      }
    },
    "_initLoadEvent": function() {
      var e = this;
      e.addStartListener(function(t, n) {
        var o = e.get("onStart");
        if (o) {
          var a = o.apply(this, arguments);
          a !== !0 && a !== !1 || (t.returnValue = a)
        }
        n()
      }),
      e.addStartListener(function(n, o) {
        if ("img" != n.type) return void o();
        var a = e.get("webpReplacer");
        "function" == typeof a ? t(["mui/datalazyload/webp"],
        function(t) {
          t.isSupport(function(t) {
            t && (n.src = a(n.src)),
            o()
          })
        }) : o()
      }),
      e.imgHandle = function() {
        var t = this,
        n = e.get("imgFlag") || M,
        o = t.getAttribute(n);
        o && A(e._startLis, {
          "type": "img",
          "elem": t,
          "src": o
        },
        function(o) {
          function a() {
            d(t, "load", a),
            D(t).removeClass(r),
            D(t).addClass(i),
            e.refresh()
          }
          if (o.returnValue !== !1) {
            if (o.src && t.src != o.src) {
              if (e.isFade) {
                var i = "img-ks-lazyload",
                r = "img-ks-beforeload";
                D(t).addClass(r),
                f(t, "load", a)
              }
              t.src = o.src
            }
            t.removeAttribute(n)
          }
        })
      },
      e.bgimgHandle = function() {
        var t = this,
        n = (e.get("imgFlag") || M) + "-bg",
        o = t.getAttribute(n);
        o && A(e._startLis, {
          "type": "bgimg",
          "elem": t,
          "bgimgSrc": o
        },
        function(e) {
          function o(t, e) {
            var n = new Image;
            n.style.position = "absolute",
            n.style.visibility = "visible",
            n.onload = n.onerror = function() {
              e(n),
              document.body.removeChild(n),
              n = null
            },
            document.body.appendChild(n),
            n.src = t
          }
          if (e.returnValue !== !1) {
            if (e.bgimgSrc) {
              var a, i, r = t && t.filters;
              try {
                a = r && r.item("DXImageTransform.Microsoft.AlphaImageLoader"),
                i = r && r.item("DXImageTransform.Microsoft.Matrix")
              } catch(c) {}
              if (a) {
                if (a.src = e.bgimgSrc, a.enabled = !0, !i || !t.offsetWidth || !t.offsetHeight) return;
                o(e.bgimgSrc,
                function(e) {
                  if (e.offsetWidth && e.offsetHeight) {
                    var n = "cover" == t.currentStyle["background-size"] ? "cover": "contain";
                    e.offsetHeight / e.offsetWidth > t.offsetHeight / t.offsetWidth == ("contain" == n) ? (i.M11 = t.offsetHeight * e.offsetWidth / (t.offsetWidth * e.offsetHeight), i.M22 = 1, i.Dx = t.offsetWidth * (1 - i.M11) / 2, i.Dy = 0) : (i.M11 = 1, i.M22 = t.offsetWidth * e.offsetHeight / (t.offsetHeight * e.offsetWidth), i.Dx = 0, i.Dy = t.offsetHeight * (1 - i.M22) / 2),
                    i.enabled = !0
                  }
                })
              } else t.style.backgroundImage = "url(" + e.bgimgSrc + ")"
            }
            t.removeAttribute(n)
          }
        })
      },
      e.textareaHandle = function() {
        var t = this;
        t.style.display = z,
        t.className = "";
        var n = document.createElement("div");
        t.parentNode.insertBefore(n, t),
        A(e._startLis, {
          "type": "textarea",
          "elem": t,
          "value": t.value
        },
        function(t) {
          t.returnValue !== !1 && (u(n, t.value, e.get("execScript")), e.addElements(n), e.refresh())
        })
      },
      e._loadFn = w(function() {
        if (e._inited && e._started && e.get("autoDestroy")) {
          var t = e._callbacks,
          n = !0;
          for (var o in t) if (t.hasOwnProperty(o) && void 0 !== t[o]) {
            n = !1;
            break
          }
          n && e.destroy()
        }
        e._started && e._loadItems()
      },
      X, e),
      e._onScroll = function(t) {
        e._diffRatio = Math.max(j ? 4 : 2, e._diffRatio),
        e._loadFn()
      }
    },
    "refresh": function() {
      this._loadFn()
    },
    "_loadItems": function() {
      var t = this,
      e = t.get("container"),
      n = t._callbacks;
      if (!t._containerIsNotDocument || e.offsetWidth) {
        t._windowRegion = t._getBoundingRect(),
        !t._backCompact && t._containerIsNotDocument && (t._containerRegion = t._getBoundingRect(t.get("container")));
        for (var o in n) if (n.hasOwnProperty(o)) {
          var a = n[o];
          a && t._loadItem(o, a)
        }
      }
    },
    "_loadItem": function(t, e) {
      var n = this,
      e = e || n._callbacks[t];
      if (!e) return ! 0;
      n._lastDiff != n.get("diff") && (n._windowRegion = n._getBoundingRect(), !n._backCompact && n._containerIsNotDocument && (n._containerRegion = n._getBoundingRect(n.get("container"))), n._lastDiff = n.get("diff"));
      var o = e.el,
      a = !1,
      i = e.fn;
      if (n.get("force") || k(o, n._windowRegion, n._containerRegion)) try {
        a = i.call(o)
      } catch(r) {
        setTimeout(function() {
          throw r
        },
        0)
      }
      return a !== !1 && delete n._callbacks[t],
      a
    },
    "addCallback": function(t, e) {
      t = l(t);
      var n = this,
      o = n._callbacks,
      a = {
        "el": t || document,
        "fn": e ||
        function() {}
      },
      i = ++V;
      return o[i] = a,
      n._windowRegion ? n._loadItem(i, a) : n.refresh(),
      i
    },
    "removeCallback": function(t, e) {
      t = l(t);
      var n = this._callbacks;
      for (var o in n) if (n.hasOwnProperty(o)) {
        var a = n[o];
        a.el == t && (e ? a.fn == e: 1) && delete n[o]
      }
    },
    "getElements": function() {
      var t = this,
      e = [],
      n = [],
      o = t._callbacks;
      for (var a in o) if (o.hasOwnProperty(a)) {
        var i = o[a];
        i.fn == t.imgHandle && e.push(i.el),
        i.fn == t.textareaHandle && n.push(i.el)
      }
      return {
        "images": this._images,
        "textareas": this._textareas
      }
    },
    "addElements": function(t, e) {
      function n(t) {
        return function(e) {
          t.src || (t.src = e)
        }
      }
      function o(t) {
        return function() {
          setTimeout(function() {
            a._loadItem(t)
          },
          0)
        }
      }
      t = i(t);
      var a = this;
      a._addStyle();
      for (var r = 0; r < t.length; r++) {
        var c = t[r];
        if (!c) return;
        if (!e || "img" === e) for (var f = [c].concat(s("img", c)), d = 0; d < f.length; d++) {
          var l = f[d];
          if (l.getAttribute && l.getAttribute(a.get("imgFlag") || M)) {
            var u = a.addCallback(l, a.imgHandle);
            l.offsetWidth || (l.onload = l.onerror = o(u), l.src || (a.onPlaceHolder = _(function(t) {
              var e = a._phImg = new Image,
              n = a.get("placeholder");
              e.onload = e.onerror = function() {
                t(n)
              },
              e.src = n
            }), a.onPlaceHolder(n(l))))
          }
        }
        if (!e || "bgimg" === e) for (var g = (a.get("imgFlag") || M) + "-bg", f = [c].concat(s("[" + g + " ]", c)), d = 0; d < f.length; d++) {
          var l = f[d];
          l.getAttribute && l.getAttribute(g) && a.addCallback(l, a.bgimgHandle)
        }
        if (!e || "textarea" === e) {
          var m = s("textarea." + (a.get("areaFlag") || L), c);
          for (var u in m) a.addCallback(m[u], a.textareaHandle)
        }
      }
    },
    "removeElements": function(t) {
      t = i(t);
      var e = this,
      n = e._callbacks;
      for (var o in n) if (n.hasOwnProperty(o)) {
        for (var a = n[o].el, r = !1, c = t.length - 1; c >= 0; c--) if (t[c] == a) {
          delete n[o],
          r = !0;
          break
        }
        if (r) break
      }
    },
    "_getBoundingRect": function(t) {
      var e, n, o, a;
      if (void 0 !== t) {
        e = y(t),
        n = v(t);
        var i = b(t);
        o = i.left,
        a = i.top
      } else e = p(),
      n = h(),
      o = g(),
      a = m();
      var r = this.get("diff"),
      c = this._diffRatio;
      return r === W ? r = {
        "left": 0,
        "top": 0,
        "right": n * c,
        "bottom": e * c
      }: "object" != typeof r && (r = {
        "left": r,
        "top": r,
        "right": r,
        "bottom": r
      }),
      {
        "left": o - (r.left || 0),
        "top": a - (r.top || 0),
        "right": o + n + (r.right || 0),
        "bottom": a + e + (r.bottom || 0)
      }
    },
    "pause": function() {
      var t = this,
      e = t._onScroll,
      n = t._loadFn;
      if (!t._destroyed && t._started) {
        if (d(I, N, e), d(I, B, e), d(I, P, n), n.stop(), t._containerIsNotDocument) {
          var o = t.get("container");
          d(o, N, e),
          d(o, B, e)
        }
        t._started = !1
      }
    },
    "resume": function() {
      var t = this,
      e = t._onScroll,
      n = t._loadFn;
      if (!t._destroyed && !t._started) {
        if (f(I, N, e), f(I, B, e), f(I, P, n), t._containerIsNotDocument) {
          var o = t.get("container");
          f(o, N, e),
          f(o, B, e)
        }
        t._started = !0,
        t._loadFn()
      }
    },
    "destroy": function() {
      var t = this;
      t.pause(),
      t._callbacks = {},
      t._destroyed = 1
    },
    "_addStyle": function() {
      var t = this;
      t._fade && (t.isFade = t.get("fade"), t.isFade && !R && (R = !0, r("@-webkit-keyframes ks-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes ks-fadeIn{0%{opacity:0}100%{opacity:1}}.img-ks-lazyload{-webkit-animation:ks-fadeIn 350ms linear 0ms 1 normal both;animation:ks-fadeIn 350ms linear 0ms 1 normal both;opacity:1}.img-ks-beforeload{opacity:0}")))
    }
  },
  H.loadCustomLazyData = E;
  var Y;
  H.instance = function() {
    return Y || (Y = new H(null, {
      "autoDestroy": !1
    }))
  },
  n.exports = H
});
define("mui/crossimage/index", ["mui/babel-polyfill/index", "./core/oss", "./core/tfs", "./utils/webp", "mui/zepto/zepto"],
function(e, t, i) {
  "use strict";
  e("mui/babel-polyfill/index");
  var r = e("./core/oss");
  var a = e("./core/tfs");
  var s = e("./utils/webp");
  var n = e("mui/zepto/zepto");
  var o = /(alicdn|taobaocdn|wimg\.taobao|img\.taobao|tbimg\.lazada)\.(com|net|sg)/;
  var c = /\/\/(ossgw|gqrcode|m|assets|g|ag|a\.dd|uaction|wwc|osdes|gjusp|gtb-fun|qianniu|gamc|glife-img|alchemy-img|alpha)\.alicdn.com/;
  var l = /(ossgw|cx)\.alicdn\.(com|net)/;
  function u(e) {
    if (!e) return "";
    var t = n(e);
    var i = t && t.parent();
    var r = t && t.data("mod-name") || "";
    var a = i && i.attr("id") || "";
    return ""
  }
  function f() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var i = this;
    function r(e, t) {
      var i = n(e).attr(t);
      if (i == "" || i) {
        return true
      }
    }
    return function(i, a) {
      var s = i && i.type == "img" && i.src && !r(i.elem, "crossimage-ignore");
      var o = !s && i && i.type == "bgimg" && i.bgimgSrc && !r(i.elem, "crossimage-ignore");
      var c = s && r(i.elem, "crossimage-force");
      try {
        var l = i.elem;
        var u = window && window.crossimageConfig || {};
        var f = e && (n.contains(n(e)[0], l) || l == e);
        var m = Object.assign({
          openSetDisplay: true
        },
        u, t, {
          isForce: c,
          imgContext: e
        });
        if (s && f) {
          if ( !! m.openSetDisplay) { (l.alt || l.title) && (l.style.display = "inline-block")
          }
          var v = i.elem.width;
          var d = i.elem.height;
          if ( !! i.elem.src && v == 1 && d == 1) {
            v = 0;
            d = 0
          }
          i.src = g(i.src, v, d, m)
        } else if (o && f) {
          i.bgimgSrc = g(i.bgimgSrc, i.elem.offsetWidth, i.elem.offsetHeight, m)
        }
      } catch(e) {
        setTimeout(function() {
          throw e
        },
        0)
      }
      a && a()
    }
  }
  function g(e, t, i) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var u = window && window.crossimageConfig || {};
    n = Object.assign(u, n);
    var f = n.ignoreReg || false;
    if (!e) e = "";
    var g = e.split("?");
    var m = g[0];
    var v = g[1] || ""; ! n.format && s.isWebp() && (n.format = "webp");
    if (f && f.test(e)) {
      return e
    } else if (l.test(m)) {
      m = r.getFitUrl(m, t, i, n)
    } else if (e == "" || o.test(m) && !c.test(m)) {
      m = a.getFitUrl(m, t, i, n)
    }
    return m + (v ? "?" + v: "")
  }
  i.exports = {
    getFitUrl: g,
    DatalazyPlugin: f
  }
});
define("mui/crossimage/core/oss", ["../utils/quality"],
function(e, t, i) {
  "use strict";
  var r = e("../utils/quality");
  var a = window.devicePixelRatio ? window.devicePixelRatio: 1;
  var s = /(ossgw|cx)\.alicdn\.(com|net)/;
  var n = /\.(svg|gif)/;
  var o = {
    sharpen: "s50",
    clean: true,
    format: "jpg",
    ossHostname: "//ossgw.alicdn.com",
    domainCList: /^(?:http:|https:)?(\/\/)?\S+\.alicdn\.com/
  };
  function c(e) {
    if (!s.test(e) || n.test(e)) {
      return e
    }
    var t = e.split("?")[0];
    return t.split("@")[0]
  }
  function l(e, t, i) {
    var r = (e || screen.width || 4096) * a;
    var s = (t || 4096) * a;
    r = r > 4096 ? 4096 : r;
    s = s > 4096 ? 4096 : s;
    var n = i.size ? i.size.split("x") : [r, s];
    return n
  }
  function u(e, t) {
    if (e != "" && e && !s.test(e) || n.test(e) && !t.isForce) {
      return e
    }
    var i = c(e);
    var r = "@";
    if (t.size) {
      r += t.size
    }
    if (t.wh) {
      r += "_" + t.wh
    }
    if (t.cut) {
      r += "_" + t.cut
    }
    if (t.circle) {
      r += "_" + t.circle
    }
    if (t.quality) {
      r += "_" + t.quality
    }
    if (t.sharpen) {
      var a = t.sharpen.replace(/[^\d]/g, "");
      r += "_" + (a > 50 && a < 399 ? a: 50 + "sh")
    }
    if (t.format) {
      r += "." + t.format
    }
    return i + r
  }
  var f = function e(t, i, a, s) {
    var n = Object.assign({},
    o, s);
    var c = l(i, a, n);
    n.quality = r.get(t, {
      size: c,
      srcSize: n.srcSize,
      quality: n.quality
    }) + "Q";
    n.size = c[0] + "w_" + c[1] + "h_1e_1l";
    var f = t && t.replace(n.domainCList, n.ossHostname);
    return u(f, n)
  };
  i.exports = {
    getFitUrl: f
  }
});
define("mui/crossimage/utils/quality",
function(e, t, i) {
  "use strict";
  var r = [90, 75, 50, 30];
  var a = r[2];
  function s(e) {
    var t = window.Ali || false;
    var i = null;
    if (t && Ali.network) {
      Ali.network.getType(function(t) {
        if (!t || !t.type) {
          a = r[2]
        } else if (/4g/gi.test(t.type)) {
          a = r[2]
        } else if (/wifi/gi.test(t.type)) {
          a = r[1]
        } else {
          a = r[3]
        }
        e && e(i)
      })
    } else {
      e && e(i)
    }
  }
  s();
  function n(e) {
    if (!e) return [];
    var t = e.split("?")[0];
    var i = /-(\d+)-(\d+)\./.exec(t);
    return i ? [parseInt(i[1], 10), parseInt(i[2], 10)] : []
  }
  function o(e, t) {
    var i = t.quality,
    a = t.size,
    s = t.srcSize;
    if (!i) {
      var o = s || n(e);
      if (o.length) {
        var c = Math.min(o[0] ? a[0] / o[0] : 1e4, o[1] ? a[1] / o[1] : 1e4);
        var i = Math.min(c < 1 ? 1 / c * r[1] : i, r[0])
      }
    }
    if (window.__tmall_crossimage_quality) {
      i = window.__tmall_crossimage_quality
    }
    if (/^(Q|q)\d+$/.test(i)) {
      i = i.replace(/(Q|q)/, "")
    } else if (/^\d+(Q|q)$/.test(i)) {
      i = i.replace(/(Q|q)/, "")
    } else if (!/^\d+$/.test(i)) {
      i = r[2]
    }
    return i
  }
  i.exports = {
    get: o,
    quality: a
  }
});
define("mui/crossimage/core/tfs", ["../utils/quality"],
function(e, t, i) {
  "use strict";
  var r = e("../utils/quality");
  var a = window.devicePixelRatio ? window.devicePixelRatio: 2;
  var s = /_(?:(sum|m|b|\d+x\d+)(xz|xc)?)?(c[xy]\d+i\d+)?(co0)?([qQ]\d+)?(g)?(s\d+)?\.jpg(_.webp)?$/;
  var n = /_(?:(sum|m|b|\d+x\d+))?((xz|xc)|g|co0|(c[xy]\d+i\d+))([qQ]\d{2})?(s\d+)?\.jpg/;
  var o = /\.(svg|gif)/;
  var c = /_\.(webp)/;
  var l = /(alicdn|taobaocdn|wimg\.taobao|img\.taobao|tbimg\.lazada)\.(com|net|sg)/;
  var u = {
    sharpen: "s50",
    clean: true,
    tfsHostname: "//img.alicdn.com",
    domainCList: /^(?:http:|https:)?(\/\/)?\S+\.alicdn\.com/
  };
  var f = {};
  f.sizeList = [[16], [20], [24], [30], [32], [36], [40], [190, 43], [90, 45], [48], [100, 50], [50], [96, 54], [90, 60], [60], [80, 60], [120, 60], [60, 90], [64], [81, 65], [70], [140, 70], [70, 1e3], [72], [121, 75], [75, 100], [75], [80], [160, 80], [80, 1e3], [230, 87], [88], [110, 90], [90], [160, 90], [180, 90], [120, 90], [90, 135], [100, 150], [100], [100, 1e3], [140, 100], [200, 100], [115, 100], [264, 100], [110, 1e4], [110], [170, 120], [120, 160], [120], [125], [128], [130], [140], [210, 140], [142], [145], [150], [150, 200], [150, 1e4], [400, 152], [160], [160, 240], [160, 180], [165, 5e3], [170], [170, 1e4], [1e4, 170], [485, 175], [180], [180, 230], [270, 180], [190], [196], [200], [210], [210, 1e3], [220, 1e4], [220], [220, 330], [1e4, 220], [220, 5e3], [250, 225], [230], [234], [240, 5e3], [240, 1e4], [240], [250], [270], [270, 450], [420, 280], [280, 410], [284], [288, 480], [290], [290, 1e4], [292], [294, 430], [300, 1e3], [300], [310], [320, 5e3], [320, 480], [320], [490, 330], [336], [1e4, 340], [350], [350, 1e3], [360], [560, 370], [400], [790, 420], [480, 420], [430], [440], [660, 440], [450, 1e4], [500, 450], [450, 600], [450, 5e3], [460], [468], [640, 480], [480], [490], [500, 1e3], [1e4, 500], [540], [560, 840], [560], [570], [570, 1e4], [580], [580, 1e4], [600], [620, 1e4], [640], [670], [720], [728], [760], [790, 1e4], [960], [970], [1080, 1800], [1152, 1920], [1200], [2200]];
  function g(e) {
    if (!l.test(e) || o.test(e)) {
      return e
    }
    return e.replace(s, "").replace(c, "")
  }
  function m(e, t) {
    if (!t && (!l.test(e) || o.test(e))) {
      return
    }
    var i, r = s.exec(e);
    i = r ? {
      size: r[1],
      crop: r[2],
      cut: r[3],
      circle: r[4],
      quality: r[5],
      rotate: r[6],
      sharpen: r[7]
    }: {};
    r = c.exec(e);
    if (r) {
      i.format = r[1]
    }
    return i
  }
  function v(e, t) {
    var i = Number.MAX_VALUE;
    var r = e || screen.width || 0;
    var s = t || 0;
    var n = f.sizeList;
    if (!r && !s) {
      return ""
    }
    i = Math.max(r, s);
    i = i * a;
    var o = 0,
    c = 0,
    l = "",
    u = n.length;
    while (i > c && o < u) {
      var e = n[o][0];
      var t = n[o][1] || e;
      o++;
      c = Math.min(e, t);
      l = e + "x" + t
    }
    return l
  }
  function d(e, t) {
    if (e.hasAttribute) {
      return e.hasAttribute(t)
    } else {
      return typeof e.getAttribute(t) == "string"
    }
  }
  function p(e, t) {
    if (e != "" && e && !l.test(e) || o.test(e) && !t.isForce) {
      return e
    }
    var i = g(e);
    var r = n.test(e);
    var a = !r && t.clean ? {}: m(e) || {};
    var t = r ? Object.assign({},
    a, {
      format: t.format
    }) : Object.assign({},
    a, t);
    var s = "",
    c = "";
    if (t.size) {
      s += t.size;
      if (t.crop) {
        s += t.crop
      }
    }
    if (t.cut) {
      s += t.cut
    }
    if (t.circle) {
      s += t.circle
    }
    if (t.quality) {
      s += t.quality
    }
    if (t.rotate) {
      s += t.rotate
    }
    if (t.sharpen) {
      s += t.sharpen
    }
    if (s) {
      s = "_" + s + ".jpg"
    }
    if (t.format && t.format === "webp") {
      c = "_." + t.format
    }
    return i + s + c
  }
  function w(e, t, i, a) {
    var s = Object.assign({},
    u, a);
    if (!s.size) {
      s.size = v(t, i)
    }
    s.quality = "Q" + r.get(e, {
      quality: s.quality,
      srcSize: s.srcSize,
      size: s.size.split("x")
    });
    var n = e && e.replace(s.domainCList, s.tfsHostname);
    return p(n, s)
  }
  i.exports = {
    getFitUrl: w
  }
});
define("mui/crossimage/utils/webp",
function(e, t, i) {
  "use strict";
  var r = false;
  var a = window.navigator.userAgent;
  var s = a.match(/AliApp\((TB|TM|JU|AP|[A-Z]+)\/([^)]+)\)/i);
  var n = a.match(/(iPhone|iPad|iPod)/);
  function o() {
    if (s && n) {
      return
    }
    try {
      var e = window.localStorage && window.localStorage.getItem("isWebpSupport");
      r = r || e === "true"
    } catch(e) {}
    if (!r) {
      var t = new Image;
      var i = new Image;
      var a = false;
      i.onload = t.onload = function() {
        if (t.height === 1 || i.height === 1) {
          r = true;
          try {
            window.localStorage && window.localStorage.setItem("isWebpSupport", true)
          } catch(e) {}
        }
      };
      i.onerror = t.onerror = function() {
        if (!a) {
          a = true;
          i.src = "//gw.alicdn.com/mt/TB11KmBXwoQMeJjy0FoXXcShVXa-1-1.png_.webp"
        }
      };
      t.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQACADQlpAADcAD++/1QAA=="
    }
  }
  o();
  i.exports = {
    isWebp: function e() {
      return r
    }
  }
});
define("mui/dlp/index",
function(e, t, a) {
  function n(e, t, a) {
    return (e.replace(/#.+/, "") + (t ? "&" + c(t) : "")).replace(/\W+/g, "_").substr( - a)
  }
  function c(e) {
    var e = e || {},
    t = [];
    for (var a in e) {
      if (e.hasOwnProperty(a)) {
        t.push(a + "=" + encodeURIComponent(e[a]))
      }
    }
    return t.join("&")
  }
  function l(e) {
    var t = e.key,
    a = e.storage || sessionStorage;
    if (t) {
      return {
        get: function(e) {
          var n;
          try {
            return (n = a.getItem(t + "_" + e)) && JSON.parse(n)
          } catch(c) {}
          return null
        },
        set: function(e, n) {
          try {
            var c = [];
            for (var l in a) {
              if (l.indexOf(t + "_") === 0) {
                c.push(l)
              }
            }
            if (c.length > 16) {
              c.sort(function(e, t) {
                return (JSON.parse(a.getItem(t)).timestamp || 0) - (JSON.parse(a.getItem(e)).timestamp || 0)
              });
              for (var r = c.length - 1; r >= 8; r--) {
                a.removeItem(c[r])
              }
            }
          } catch(o) {}
          try {
            if (!n) {
              a.removeItem(t + "_" + e)
            } else {
              a.setItem(t + "_" + e, JSON.stringify(n))
            }
          } catch(o) {}
        }
      }
    }
  }
  function r(t, a) {
    switch (t.dataType) {
    case "jsonp":
      t.method = t.dataType;
      t.callback = t.jsonpCallback;
      t.jsonpCallback = "callback";
      e(["mui/fetch/jsonp"],
      function(e) {
        a(e(t.url, t).then(function(e) {
          return e.json()
        }))
      });
      break;
    case "json":
      e(["mui/fetch/fetch"],
      function(e) {
        a(e(t.url, t).then(function(e) {
          return e.json()
        }))
      });
      break;
    case "mtop":
      t = Object.assign({
        api: "",
        v: "1.0",
        ecode: 0,
        data: {}
      },
      t.mtop);
      e(["mui/mtop/index"],
      function(e) {
        a(e.request(t))
      });
      break;
    default:
      e(["mui/fetch/fetch"],
      function(e) {
        a(e(t.url, t).then(function(e) {
          return e.text()
        }))
      });
      break
    }
  }
  var o = {
    get: function(e) {
      var t = this,
      a = null,
      c = window,
      o = +new Date,
      s = null,
      i = e.cacheExpiryTime !== undefined ? e.cacheExpiryTime: 7 * 24 * 60 * 60 * 1e3,
      u = e.cacheValidTime !== undefined ? e.cacheValidTime: 0;
      switch (e.localCacheType) {
      case "sessionStorage":
        if (c.sessionStorage) {
          a = l({
            key: "_DLP_v1",
            storage: c.sessionStorage
          })
        }
        break;
      case "localStorage":
        if (c.localStorage) {
          a = l({
            key: "_DLP_v1",
            storage: c.localStorage
          })
        }
        break
      }
      var f = e.dataType != "mtop" ? n(e.url, e.data, 1024) : n(e.mtop.api, e.mtop.data, 1024);
      var p = a && a.get(f);
      if (p && p.timestamp <= o - i) {
        p = null
      }
      function m(t) {
        if (!s || e.multipleCallback && s.level < 5) {
          var a = {
            type: "cache",
            status: t,
            level: 5,
            last: s
          };
          s = a;
          window.console && console.log(["[dlp]callback:", a]);
          e.success && e.success(p.data, "success", a);
          e.complete && e.complete(p.data, "success", a)
        }
      }
      if (p) {
        if (p.timestamp > o - u) {
          return m("init")
        }
        setTimeout(function() {
          m("loading")
        },
        e.cacheDelayTime)
      }
      function d(t, n) {
        a && (!e.localCacheVerify || e.localCacheVerify(t)) && a.set(f, {
          timestamp: +new Date,
          data: t
        });
        if (!s || e.multipleCallback && s.level < 8) {
          var c = {
            type: "regular",
            status: "success",
            level: 8,
            last: s
          };
          s = c;
          window.console && console.log(["[dlp]callback:", c]);
          e.success && e.success(t, n, c);
          e.complete && e.complete(t, n, c)
        }
      }
      function v(t, a, n) {
        if (!s || e.multipleCallback && s.level < 2) {
          if (p) {
            m("error")
          } else {
            if (e.backup && e.backup.url) {
              function c(t, a) {
                var n = {
                  type: "backup",
                  status: "backupsuccess",
                  level: 2,
                  last: s
                };
                s = n;
                window.console && console.log(["[dlp]callback:", n]);
                e.success && e.success(t, a, n);
                e.complete && e.complete(t, a, n)
              }
              function l(c, l) {
                var r = {
                  type: "error",
                  status: "backuperror",
                  level: 2,
                  last: s
                };
                s = r;
                window.console && console.log(["[dlp]callback:", r]);
                if (n === false) {
                  e.success && e.success(t, a, r)
                } else {
                  e.error && e.error(c, l, r)
                }
                e.complete && e.complete(c, l, r)
              }
              r(e.backup,
              function(t) {
                t.then(function(t, a) {
                  if (s && !(e.multipleCallback && s.level < 2)) {
                    return
                  } ! e.dataVerify || e.dataVerify(t) ? c(t, "success") : l(t, "success")
                })["catch"](function(t) {
                  if (s && !(e.multipleCallback && s.level < 2)) {
                    return
                  }
                  l(t, "error")
                })
              })
            } else {
              if (!s || e.multipleCallback && s.level < 8) {
                var o = {
                  type: "error",
                  status: "error",
                  level: 8,
                  last: s
                };
                s = o;
                window.console && console.log(["[dlp]callback:", o]);
                if (n === false) {
                  e.success && e.success(t, a, o)
                } else {
                  e.error && e.error(t, a, o)
                }
                e.complete && e.complete(t, a, o)
              }
            }
          }
        }
      }
      if (e.cache !== false) {
        e.cache = true;
        if (e.dataType === "jsonp" && !e.jsonpCallback) {
          e.jsonpCallback = "_DLP_" + parseInt( + new Date / i) + "_" + (e.dataType != "mtop" ? n(e.url, e.data, 32) : n(e.mtop.api, e.mtop.data, 32))
        }
      }
      r(e,
      function(t) {
        t.then(function(t) {
          var a = !e.dataVerify || e.dataVerify(t);
          a ? d(t, "success") : v(t, "success", a)
        })["catch"](function(e) {
          v(e, "error")
        })
      })
    },
    jsonp: function(e) {
      e.dataType = "jsonp";
      return this.get(e)
    },
    ald: function(e) {
      e.dataType = e.dataType || "jsonp";
      e.backup = e.backup || {};
      e.backup.dataType = e.dataType || "jsonp";
      return this.get(e)
    },
    mtop: function(e) {
      e.dataType = "mtop";
      return this.get(e)
    }
  };
  a.exports = o
});
define("detail-m/mods/module-recommend/index", ["mui/slider-m/index", "mui/zepto/zepto", "mui/zepto/touch", "mui/datalazyload/index", "mui/crossimage/index", "mui/dlp/index", "mui/xtemplate/index"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  function a(e, t, i) {
    new p({
      "el": e,
      "config": t,
      "app": i
    })
  }
  var o = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  r = e("mui/slider-m/index"),
  d = e("mui/zepto/zepto");
  e("mui/zepto/touch");
  var u = e("mui/datalazyload/index"),
  l = e("mui/crossimage/index"),
  s = e("mui/dlp/index"),
  c = e("mui/xtemplate/index"),
  m = '{{#if(data.error)}}\n<div class="ui-error">\u5f88\u62b1\u6b49\uff0c\u627e\u4e0d\u5230\u76f8\u5173\u7684\u5546\u54c1</div>\n{{else}}\n<div class="recommend-scroller">\n{{#each(data,"item","index")}}\n    <div class="panel">\n    {{#each(item,"child","cindex")}}\n        <div class="item">\n            <a href="{{child.url}}">\n                <div class="img-wrap"><img data-ks-lazyload="{{child.img}}" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" aria-label="{{child.title}}" /></div>\n                <div class="title">\n                    {{#if(child.activityTag && child.icon) }}<img class="act-tag" src="{{child.icon}}" role="presentation" >{{/if}}{{child.title}}\n                </div>\n                <div class="numbers">\n                    <del>{{#if(child.marketPrice !== child.price)}}&yen;{{child.marketPrice}}{{/if}}</del>\n                    <span class="price">&yen;{{child.price}}</span>\n                </div>\n            </a>\n        </div>\n    {{/each}}    \n    </div>\n{{/each}}    \n</div>\n{{/if}}',
  p = function() {
    function e(t) {
      n(this, e),
      this.el = t.el,
      this.cfg = t.config,
      this.app = t.app,
      this.init()
    }
    return o(e, [{
      "key": "init",
      "value": function() {
        var e = this;
        e.app.product.onLoad("seller",
        function(t) {
          if ("1917047079" == t.userId) return void d(e.el).hide();
          window.WindVane && window.WindVane.isAvailable ? document.addEventListener("WindVaneReady",
          function(t) {
            e.inited || (e.inited = !0, e.render())
          },
          !1) : d(window).on("load",
          function() {
            e.inited || (e.inited = !0, e.render())
          }),
          setTimeout(function() {
            u.instance().addCallback(e.el,
            function() {
              e.inited || (e.inited = !0, e.render())
            })
          })
        })
      }
    },
    {
      "key": "initSlider",
      "value": function() {
        new r(".module-recommend .scroller-wrap", {
          "scroller": ".recommend-scroller",
          "bindTrigger": !0,
          "transitionDuration": 100
        })
      }
    },
    {
      "key": "initLazyload",
      "value": function() {
        var e = this;
        setTimeout(function() {
          var t = u.instance();
          t.addStartListener(l.DatalazyPlugin(e.el, {
            "size": "320x320"
          })),
          t.addElements(e.el)
        })
      }
    },
    {
      "key": "getData",
      "value": function(e) {
        this.app.product.onLoad(["detailData", "apis", "tags"],
        function(t, i, n) {
          var a = "//aldcdn.tmall.com/recommend.htm",
          o = {
            "appId": "03080",
            "itemId": t.item.itemId,
            "categoryId": t.item.categoryId,
            "sellerId": t.seller.userId,
            "resultSize": n.isChaoshi ? 18 : 12,
            "tag": n.isHkItem ? "13186": ""
          },
          r = {};
          n.isHkDirectSale && (Object.assign(r, {
            "appId": "201705220"
          }), a = "//ald.taobao.com/recommend.htm"),
          n.showDiscountRecommend && (Object.assign(r, {
            "appId": "03333",
            "wfCode": "96905"
          }), a = "//ald.taobao.com/recommend.htm"),
          Object.assign(o, r);
          var d = a + "?" + Object.keys(o).map(function(e) {
            return e + "=" + o[e]
          }).join("&"),
          u = {
            "jsonpCallback": "detail_recommend_backUp"
          };
          s.ald({
            "url": d,
            "localCacheType": "localStorage",
            "cacheDelayTime": 1e3,
            "multipleCallback": !0,
            "dataVerify": function(e) {
              return !! (e && e.list && e.list.length) || (u.url = e.defaultBottomUrl, "")
            },
            "backup": u,
            "error": function(t, i, n) {
              e({
                "error": !0
              }),
              batTrack("jsonp.err", "bat", {
                "type": "error",
                "msg": d
              })
            },
            "success": function(t, i, n) {
              var a = [];
              for (len = 3; t.list.length;) a.push(t.list.splice(0, len));
              e(a)
            },
            "complete": function(e, t, i) {}
          })
        })
      }
    },
    {
      "key": "render",
      "value": function() {
        var e = this;
        e.getData(function(t) {
          d(".scroller-wrap", e.el).html(new c(m).render({
            "data": t
          })),
          t.error || (e.initLazyload(), e.initSlider())
        })
      }
    }]),
    e
  } ();
  i.exports = a
});
define("detail-m/mods/module-desc/index", ["mui/datalazyload/index", "mui/zepto/zepto"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  function a(e, t, i) {
    new d({
      "el": e,
      "config": t,
      "app": i
    })
  }
  var o = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  r = e("mui/datalazyload/index"),
  u = e("mui/zepto/zepto"),
  d = function() {
    function t(e) {
      n(this, t);
      var i = this;
      i.el = e.el,
      i.app = e.app,
      window.WindVane && window.WindVane.isAvailable ? document.addEventListener("WindVaneReady",
      function(t) {
        i.inited || (i.inited = !0, i.init(e))
      },
      !1) : u(window).on("load",
      function() {
        i.inited || (i.inited = !0, i.init(e))
      }),
      setTimeout(function() {
        r.instance().addCallback(i.el,
        function() {
          i.inited || (i.inited = !0, i.init(e), batTrack("desc.show", "app.init"))
        })
      })
    }
    return o(t, [{
      "key": "init",
      "value": function(t) {
        app.product.onLoad("seller",
        function(i) {
          i && "B" === i.sellerType ? e(["detail-m/mods/module-desc/desc"],
          function(e) {
            new e({
              "app": t.app,
              "el": t.el
            })
          }) : e(["detail-m/mods/module-desc/judesc"],
          function(e) {
            new e({
              "app": t.app,
              "el": t.el
            })
          })
        })
      }
    }]),
    t
  } ();
  i.exports = a
});
define("mui/desc-mods/shoprecommend/index", ["mui/zepto/zepto", "mui/datalazyload/index", "./list.xtpl"],
function(e, i, t) {
  function o(e, i) {
    if (! (e instanceof i)) throw new TypeError("Cannot call a class as a function")
  }
  var n = e("mui/zepto/zepto"),
  a = e("mui/datalazyload/index"),
  m = e("./list.xtpl"),
  u = function e(i, t, u) {
    o(this, e);
    var s = a.instance(),
    r = n(".mui-shoprecommend-wrap", i);
    r.html(m({
      "list": t.data
    })),
    s.addElements(r)
  };
  t.exports = {
    "initView": function(e, i, t, o) {
      o(new u(e, i, t))
    }
  }
});
define("mui/desc-mods/wpimagetext/index", ["mui/desc-mods/wpimagetext/index.css", "mui/zepto/zepto", "mui/datalazyload/index", "mui/crossimage/index"],
function(e, i, t) {
  function o(e, i) {
    if (! (e instanceof i)) throw new TypeError("Cannot call a class as a function")
  }
  e("mui/desc-mods/wpimagetext/index.css");
  var n = e("mui/zepto/zepto"),
  a = e("mui/datalazyload/index"),
  s = e("mui/crossimage/index"),
  r = function e(i, t, r, u) {
    o(this, e);
    var m = a.instance();
    window.WindVane && window.WindVane.isAvailable ? window.WindVane.call("TBWeakNetStatus", "getStatus", {},
    function(e) {
      e && e.WeakNetStatus && "false" !== e.WeakNetStatus ? m.addStartListener(s.DatalazyPlugin(i, {
        "width": window.screen.width,
        "quality": 50
      })) : m.addStartListener(s.DatalazyPlugin(i, {
        "width": window.screen.width,
        "quality": 90
      }))
    },
    function(e) {
      m.addStartListener(s.DatalazyPlugin(i, {
        "width": window.screen.width,
        "quality": 90
      }))
    }) : m.addStartListener(s.DatalazyPlugin(i, {
      "width": window.screen.width,
      "quality": 90
    })),
    n("img", i).not("[data-ks-lazyload]").parent().removeClass("unloaded"),
    m.addStartListener(function(e, i) {
      var t = e.elem;
      if ("IMG" === t.tagName) {
        var o = n(t).parent();
        o.hasClass("mui-wpimagetext-item") && (t.onload = t.onerror = function() {
          o.removeClass("unloaded"),
          m.refresh()
        })
      }
      i()
    }),
    m.addElements(i)
  };
  t.exports = {
    "initView": function(e, i, t, o) {
      o(new r(e, i, t, o))
    }
  }
});
define("mui/desc-mods/custommodule/index", ["mui/desc-mods/custommodule/index.css", "mui/zepto/zepto", "mui/datalazyload/index", "mui/crossimage/index"],
function(e, i, m) {
  function t(e, i) {
    if (! (e instanceof i)) throw new TypeError("Cannot call a class as a function")
  }
  e("mui/desc-mods/custommodule/index.css");
  var o = e("mui/zepto/zepto"),
  u = e("mui/datalazyload/index"),
  s = e("mui/crossimage/index"),
  d = function e(i, m, d, n) {
    t(this, e);
    var a = u.instance();
    window.WindVane && window.WindVane.isAvailable ? window.WindVane.call("TBWeakNetStatus", "getStatus", {},
    function(e) {
      e && e.WeakNetStatus && "false" !== e.WeakNetStatus ? a.addStartListener(s.DatalazyPlugin(i, {
        "width": window.screen.width,
        "quality": 50
      })) : a.addStartListener(s.DatalazyPlugin(i, {
        "width": window.screen.width,
        "quality": 90
      }))
    },
    function(e) {
      a.addStartListener(s.DatalazyPlugin(i, {
        "width": window.screen.width,
        "quality": 90
      }))
    }) : a.addStartListener(s.DatalazyPlugin(i, {
      "width": window.screen.width,
      "quality": 90
    })),
    o("img", i).not("[data-ks-lazyload]").parent().removeClass("unloaded"),
    a.addStartListener(function(e, i) {
      var m = e.elem;
      if ("IMG" === m.tagName) {
        var t = o(m).parent();
        t.hasClass("mui-custommodule-item") && (m.onload = m.onerror = function() {
          t.removeClass("unloaded"),
          a.refresh()
        })
      }
      i()
    }),
    a.addElements(i)
  };
  m.exports = {
    "initView": function(e, i, m, t) {
      t(new d(e, i, m, t))
    }
  }
});
define("detail-m/mods/module-smartjump/index", ["mui/zepto/zepto", "mui/zepto/touch"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  function a(e, t, i) {
    new u({
      "el": e,
      "config": t,
      "app": i
    })
  }
  var o = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  r = e("mui/zepto/zepto");
  e("mui/zepto/touch");
  var l = ["AliApp(TB", "AliApp(TM", "AliApp(ET", "TAOBAOLIVEAPP", "AliHealthClient"],
  d = ["disableSJ", "cloudStoreItem=1"],
  u = function() {
    function t(e) {
      n(this, t),
      this.el = e.el,
      this.cfg = e.config,
      this.app = e.app,
      this.init(),
      this.initEvent()
    }
    return o(t, [{
      "key": "init",
      "value": function() {
        for (var t = this,
        i = 0,
        n = l.length; i < n; i++) if (~navigator.userAgent.indexOf(l[i])) return ! 1;
        for (var i = 0,
        n = d.length; i < n; i++) if (~location.search.indexOf(d[i])) return ! 1;
        t.app.product.onLoad(["item", "inter", "tags"],
        function(i, n, a) {
          var o = i.itemId;
          a && a.isChaoshi && n && "HK" == n.zoneCode ? e(["detail-mods/tb-banner/jump"],
          function(e) {
            new e({
              "type": "detail",
              "params": {
                "itemId": o
              },
              "triggle": "#J_smartjump",
              "UIType": "box",
              "mmstat": "detail_upper1",
              "downloadSrc": "detailupper1",
              "showCallback": function(e) {},
              "closeBtnCallback": function() {}
            })
          }) : t.app.onLoad(function() {
            t.app.onSmartbanner(function(e) {
              try {
                if (e) {
                  var t = e.getBizText("mallDetail");
                  t.theme && t.theme.banner && (t.theme.banner.elID = "J_smartloader"),
                  t.position = "top";
                  e.sbLogic(t)
                }
              } catch(i) {}
            })
          })
        })
      }
    },
    {
      "key": "initEvent",
      "value": function() {
        r("#J_smartjump .mui-sb-box").on("click",
        function(e) {
          e.stopPropagation(),
          e.preventDefault()
        })
      }
    }]),
    t
  } ();
  i.exports = a
});
define("detail-m/mods/module-recommend-down/index", ["mui/zepto/zepto", "mui/zepto/touch", "mui/datalazyload/index", "mui/crossimage/index", "mui/fetch/jsonp", "mui/fetch/tool", "mui/xtemplate/index"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  function a(e) {
    return l.getFitUrl(e, window.screen.width * (1 / 3) * .85, window.screen.width * (1 / 3) * .85, {})
  }
  function o(e, t, i) {
    new p({
      "el": e,
      "config": t,
      "app": i
    })
  }
  var r = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  d = e("mui/zepto/zepto");
  e("mui/zepto/touch");
  var l = (e("mui/datalazyload/index"), e("mui/crossimage/index")),
  u = e("mui/fetch/jsonp"),
  s = e("mui/fetch/tool"),
  c = e("mui/xtemplate/index"),
  m = '<div class="downshelf-cover"></div>\n<div class="downshelf-content">\n    <div class="hd">\n        <div class="bg"></div>{{#if(hintText)}}{{hintText}}{{/if}}<div class="bg2"></div>\n    </div>\n    <div class="bd">\n        <span>\u731c\u4f60\u559c\u6b22</span>\n        {{#if(!isChaoshi && linkUrl) }}\n            <a href="{{linkUrl}}">{{linkText}}<i></i></a>\n        {{/if}}\n    </div>\n    <div class="ft">\n        <div class="intros">\n            {{#each(list,"item") }} \n                <div class="intro">\n                    <a class="item-link" href="{{item.url}}">\n                        <div class="img">\n                            <img data-ks-lazyload="{{item.img}}" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" aria-label="">\n                        </div>\n                    </a>\n                    <div class="info">\n                        <div class="title">{{#if(item.activityTag) }}<img class="act-tag" src="{{item.icon}}">{{/if}}{{item.title}}</div>\n                        <div class="cart"></div>\n                        <div class="numbers">\n                            <div class="price">{{currency}}{{item.price}}</div>\n                        </div>\n                    </div>\n                </div>\n            {{/each}}\n        </div>\n    </div>\n</div>';
  d("<div id='s-downshelf' class='opened'></div>").insertBefore("#s-actionBar-container");
  var p = function() {
    function e(t) {
      n(this, e),
      this.el = d(t.el),
      this.$el = d("#s-downshelf"),
      this.cfg = t.config,
      this.app = t.app,
      this.init()
    }
    return r(e, [{
      "key": "init",
      "value": function() {
        var e = this,
        t = function() {
          e.getData(function() {
            e.render.apply(e, arguments)
          })
        };
        window.WindVane && window.WindVane.isAvailable ? document.addEventListener("WindVaneReady",
        function(i) {
          e.inited || (e.inited = !0, t())
        },
        !1) : d(window).on("load",
        function() {
          e.inited || (e.inited = !0, t())
        })
      }
    },
    {
      "key": "getData",
      "value": function(e) {
        var t = this;
        t.app.product.onLoad(["disabledItem", "totalQuantity", "isChaoshi", "item", "shopInfo", "apis"],
        function(i, n, a, o, r, d) {
          var l = d.longTailUrl;
          if (l && i) {
            var c = !(0 !== n),
            m = {},
            p = {
              "hintText": i.hintText || "\u8981\u4e0d\u8981\u77a7\u77a7\u522b\u7684~",
              "linkText": i.linkText,
              "linkUrl": i.linkUrl,
              "isChaoshi": a,
              "isSoldOut": c
            },
            f = Object.assign({
              "appId": "201507135",
              "itemId": o.itemId,
              "categoryId": o.categoryId,
              "sellerId": r.userId,
              "resultSize": 16
            },
            m);
            u(l, {
              "method": "jsonp",
              "body": s.param(f)
            }).then(function(e) {
              return e.json()
            }).then(function(i) {
              i && i.resultList && i.resultList.length && i.acurl && ((new Image).src = i.acurl),
              e.apply(t, [!i.success, Object.assign({
                "rowData": i.success ? i: null
              },
              p)])
            })["catch"](function() {
              batTrack("jsonp.err", "bat", {
                "type": "error",
                "msg": l
              })
            })
          }
        }.bind(this))
      }
    },
    {
      "key": "render",
      "value": function(e, t) {
        var i, n = this;
        e || (i = t.rowData ? t.rowData.resultList: null) && i.length && (n.$el.on("click", ".hd,.downshelf-cover",
        function() {
          n.$el.toggleClass("opened"),
          n.$el.hasClass("opened") && goldlog.record("/tmalldetail.lib.ald-down-hide", "CLK", "", "H1505507020")
        }), i = i.map(function(e, t) {
          return e.title && "string" == typeof e.title && (e.title = e.title.replace("\u3010\u5929\u732b\u8d85\u5e02\u3011", "")),
          e.img = a(e.pics),
          e
        }), app.product.onLoad(["price"],
        function(e) {
          var a = e.price.priceChar || "\xa5";
          n.$el.html(new c(m).render(Object.assign(t, {
            "list": i,
            "currency": a
          }))),
          app.onDatalazyload(function(e) {
            e.addElements(d(".intros", n.$el)[0])
          }),
          n.$el.on("click", ".bd a",
          function() {
            goldlog.record("/tmalldetail.lib.ald-down-more", "CLK", "", "H1505507020")
          }),
          n.$el.on("click", ".ft .intro a",
          function() {
            goldlog.record("/tmalldetail.lib.ald-down-clk", "CLK", "", "H1485189564")
          })
        }))
      }
    }]),
    e
  } ();
  i.exports = o
});
define("detail-m/mods/trade/index", ["mui/zepto/zepto", "mui/xtemplate/index"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  function a(e, t) {
    e.query().split("&").forEach(function(e) {
      var i = e.split("=");
      if (i && 2 === i.length) {
        var n = i[0] || "",
        a = i[1];
        0 === i[0].indexOf("ex_") && (t.exParams[n.replace("ex_", "")] = a)
      }
    })
  }
  var o = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  r = e("mui/zepto/zepto"),
  u = e("mui/xtemplate/index"),
  l = '{{#if(toDecisionAction==="sku") }}\n<a class="cart {{#if(!trade.cartEnable || trade.cartEnable === "false")}}disabled{{/if}}" {{#if(!trade.cartEnable)}}aria-disabled="true"{{/if}} role="button"><p>{{{trade.cartText||"\u52a0\u5165\u8d2d\u7269\u8f66"}}}</p></a>\n<a class="info" role="button">{{#if(trade.infoText)}}{{{trade.infoText}}}{{/if}}</a>\n<a class="buy {{#if(!trade.buyEnable || trade.buyEnable === "false")}}disabled{{/if}}" {{#if(!trade.buyEnable)}}aria-disabled="true"{{/if}} role="button" {{#if(type==="index") }}style="background:linear-gradient(90deg, {{trade.buyBeginColor}},{{trade.buyEndColor}} )" {{/if}}><p>{{{trade.buyText||"\u7acb\u5373\u8d2d\u4e70"}}}</p>{{#if(type==="index" && trade.subBuyText)}}<p>{{trade.subBuyText}}</p>{{/if}}{{#if(trade.depositText)}}<p>{{trade.depositText}}</p>{{/if}}</a>\n{{elseif(toDecisionAction==="cart")}}\n<a class="ok {{#if(!trade.cartEnable || trade.cartEnable === "false")}}disabled{{/if}}" {{#if(!trade.cartEnable)}}aria-disabled="true"{{/if}} role="button"><p>{{{trade.okText||"\u786e\u5b9a"}}}</p></a>\n{{elseif(toDecisionAction==="buy")}}\n<a class="ok {{#if(!trade.buyEnable|| trade.buyEnable === "false")}}disabled{{/if}}" {{#if(!trade.buyEnable)}}aria-disabled="true"{{/if}} role="button"><p>{{{trade.okText||"\u786e\u5b9a"}}}</p></a>\n{{/if}}\n{{#if(type==="sku") }}{{#if(trade.actionText)}}<a class="action {{#if(!trade.actionEnable || trade.actionEnable === "false")}}disabled{{/if}}" role="button"><p>{{{trade.actionText}}}</p></a>{{/if}}{{/if}}\n',
  s = {
    "chaoshiCart": "\u52a0\u5165\u8d2d\u7269\u8f66",
    "addCartSuccess": "\u52a0\u5165\u8d2d\u7269\u8f66\u6210\u529f",
    "serverError": "\u670d\u52a1\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
    "joinNow": "\u7acb\u5373\u53c2\u56e2",
    "joinError": "\u53c2\u56e2\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
    "payDeposit": "\u7acb\u5373\u4ed8\u5b9a\u91d1",
    "deposit": "\u7acb\u5373\u9884\u5b9a",
    "soldOut": "\u5356\u5149\u4e86",
    "areaSold": "\u6240\u5728\u533a\u57df\u6682\u65f6\u7f3a\u8d27",
    "isBeginning": "\u5373\u5c06\u5f00\u59cb...",
    "preSellEnd": "\u9884\u552e\u5df2\u7ed3\u675f",
    "sellEnd": "\u5df2\u7ed3\u675f",
    "chanceLeft": "\u8fd8\u6709\u673a\u4f1a",
    "pushNeed": "\u63d0\u4ea4\u9700\u6c42",
    "limit": '<div class="disabled-box"><span>\u5b9a\u5236\u5546\u54c1\u4ec5\u652f\u6301\u5728\u5ba2\u6237\u7aef\u8d2d\u4e70</span><p>\u8bf7\u7528\u624b\u673a\u5929\u732b\u6253\u5f00\u5b8c\u6210\u5b9a\u5236</p></div>',
    "onlyTaoApp": "\u4ec5\u652f\u6301\u6dd8\u5b9dapp\u548c\u5929\u732bapp\u4e2d\u8d2d\u4e70"
  },
  c = function() {
    function t(e) {
      n(this, t);
      var i = this;
      i.app = e.app || app,
      i.product = e.product || app && app.product,
      i.page = e.page,
      i.$el = e.$el,
      i.type = e.type || "index",
      i.toDecisionAction = e.toDecisionAction || "sku",
      i.update(e),
      i.bindEvent(),
      i.needDecisionValidator(),
      i.redirect(),
      i.product.prepareParam = function(e) {
        var t = {};
        i.product.onLoad(["item", "selectedSku", "selectedService", "currentService", "amount", "etParams", "areaId", "addressId", "userInfo", "currentInstallment", "tags", "etm", "feature"],
        function(i, n, a, o, u, l, d, s, c, p, m, f, v) {
          if (t.itemId = i.itemId, t.exParams = {},
          n && (t.skuId = n.skuId), a) {
            var h = [];
            r.each(a,
            function(e, t) {
              h.push(e + "|" + t)
            }),
            t.service = h.join("-")
          }
          if (p && p.count && (t.exParams.installmentPay = !0, t.exParams.installmentNum = p.count, t.exParams.installmentRate = p.ratio), s && (t.exParams.addressId = s.toString()), null !== f && (t.exParams.etm = f, "post" == f ? (t.exParams.etShopId = "", t.exParams.etShopName = "") : l && (t.exParams.etShopId = l.etShopId, t.exParams.etShopName = l.etShopName)), app.query("ybhpss") && (t.exParams.ybhpss = app.query("ybhpss")), t.quantity = u, t.divisionCode = d, t.tks = app.query("tks"), t.ttid = app.query("ttid"), t.activityId = app.query("activityId"), t.from_etao = "etao" == app.query("frm") ? 1 : null, t.userId = c && c.userId, v && v.isvService) {
            for (var g = !1,
            x = o.allServices || [], y = 0; y < x.length; y++) if (x[y].uniqueServices) for (var b = x[y].uniqueServices, k = 0, w = b.length; k < w; k++) a[x[y].id] == b[k].uniqueId && b[k].isvService && (g = !0);
            else 0 == a[x[y].id] && x[y].isvService && (g = !0);
            t.customIsv = t.exParams.customIsv = g ? 1 : 0
          }
          e(t)
        })
      },
      i.product._cartInPhone = function(e, t) {
        i.product.onLoad(["scene", "isLogin", "detailData", "skipData", "trade", "tags", "feTrade", "selectedSkuPattern"],
        function(e, i, n, o, r, u, l, d) {
          if ("tmall" === e && 0 == i) return app.login();
          this.prepareParam(function(e) {
            var i = {
              "itemId": String(e.itemId),
              "quantity": String(e.quantity),
              "exParams": e.exParams || {}
            },
            o = l.cartParams || {},
            c = n.trade.tradeParams || {},
            p = r.cartParam || {},
            m = l.cartExParams || {},
            f = d ? d.buyParams || {}: {};
            if (i = Object.assign(i, r.outerCartParam || {},
            o), i.exParams = Object.assign(i.exParams, c, p, m, f), u.isPrescriptionDrug && (i.cfy_detail = 1), e.skuId && (i.skuId = String(e.skuId)), e.from_etao && (i.piggybacking = "tag:etao;"), e.divisionCode && (i.exParams.divisionId = String(e.divisionCode)), e.service && (i.exParams.serviceId = String(e.service)), i.exParams.extraAttribute && (i.exParams.extraAttribute = JSON.stringify(i.exParams.extraAttribute)), a(app, i), i.exParams && (i.exParams = JSON.stringify(i.exParams)), l && l.cartFun) return void l.cartFun(i);
            app.onLoading(function(e) {
              e.show()
            }),
            lib.mtop.request({
              "api": "mtop.trade.addBag",
              "v": "3.1",
              "ecode": 1,
              "type": "POST",
              "data": i,
              "ttid": app.query("ttid") || "tmalldetail"
            },
            function(e) {
              app.onLoading(function(e) {
                e.hide()
              }),
              app.onToast(function(e) {
                e.show(s.addCartSuccess)
              }),
              app.sku && app.sku.hide(),
              t && t({
                "level": 0,
                "type": 2
              }),
              batTrack("trade.cart.click.suc", "trade.cart.click"),
              navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("AliApp(ET") && batTrack("trade.cart.suc.ET", "trade.cart.click.suc")
            },
            function(t) {
              var i = s.serverError,
              n = t && t.ret && t.ret[0];
              if (n) {
                if ( - 1 !== n.indexOf("ERR_SID_INVALID")) return app.login();
                if ( - 1 !== n.indexOf("SESSION_EXPIRED")) return app.login();
                i = n.split("::")[1] || i
              }
              app.onLoading(function(e) {
                e.hide()
              }),
              app.onToast(function(e) {
                e.show(i)
              }),
              batTrack("trade.cart.click.fail", "trade.cart.click", {
                "type": "error",
                "msg": "addCart\u5931\u8d25,itemId:" + e.itemId + "," + i
              })
            }),
            (~location.href.indexOf("miniapp_source=miniapp_brand") || ~location.href.indexOf("miniapp_source=scan_buy") || ~location.href.indexOf("ttid=miniapp_brand")) && goldlog.record("/tmalldetail.lib.cart", "EXP", "type=miniapp_brand&itemId=" + e.itemId, "GET")
          })
        }.bind(this))
      },
      i.product._buyInPhone = function(e, t) {
        i.product.onLoad(["scene", "isLogin", "detailData", "skipData", "trade", "tags", "jhs", "apis", "feTrade", "userInfo", "limitInfo", "seller", "selectedBuyPattern", "selectedSkuPattern"],
        function(e, t, n, o, r, u, l, d, s, c, p, m, f, v) {
          if (l && 0 !== Object.keys(l).length && 0 == t) return app.login();
          this.prepareParam(function(t) {
            var l = n.trade.tradeParams || {},
            h = r.buyParam || {},
            g = s.buyParams || {},
            x = s.buyExParams || {},
            y = f.buyParams || {},
            b = v.buyParams || {},
            k = Object.assign(t, l, h, g);
            k.exParams = Object.assign({},
            k.exParams, x, y, b);
            var w;
            if (k.exParams && "post" == k.exParams.etm && (w = k.exParams.etm), p && p.unitBuy && (k.quantity = k.quantity * p.unitBuy), n.trade && n.trade.useNativeTrade && (k.exParams = k.exParams || {},
            k.exParams = Object.assign({},
            l, h, k.exParams), k.exParams = Object.assign(k.exParams, {
              "h5RandomNum123": (new Date).getTime()
            }), n.trade && n.trade.adaptedTradeParams)) try {
              var A = n.trade.adaptedTradeParams;
              for (var T in A) k.exParams[A[T]] = k.exParams[T]
            } catch(I) {
              console.log(I.stack)
            }
            return k.extraAttribute && (k.extraAttribute = JSON.stringify(k.extraAttribute)),
            (f && f.buyUrl || v && v.buyUrl) && (k.service && (k.serviceId = k.service), k.extraAttribute && (k.exParams.extraAttribute = k.extraAttribute), k.umpChannel && (k.exParams.umpChannel = k.umpChannel)),
            s && s.useTaoParams && (k.service && (k.serviceId = k.service), k.extraAttribute && (k.exParams.extraAttribute = k.extraAttribute), k.umpChannel && (k.exParams.umpChannel = k.umpChannel)),
            a(app, k),
            k.exParams && (k.exParams = JSON.stringify(k.exParams)),
            s && s.buyFunction ? void s.buyFunction(k) : s && s.buyFun ? void s.buyFun(k) : void(m && "C" === m.shopType ? i._hrefForm(e, k, n, o, r, s, u, w, d, c) : i._submitForm(e, k, n, o, r, s, u, w, d, c))
          })
        }.bind(this))
      }
    }
    return o(t, [{
      "key": "_submitForm",
      "value": function(e, t, i, n, a, o, u, l, d, s) {
        function c(e) {
          return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        function p(e) {
          return String(e).replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        }
        var m = function(e, t, i) {
          var n = "";
          i && "useTrade30" == i && (n += '<input type="hidden" name="enc" value="&#153;"/>');
          for (var a in t) {
            var o = t[a];
            o && (n += '<input name="' + a + '" value="' + c(o) + '" />')
          }
          e[0].innerHTML = e[0].innerHTML + n
        },
        f = i.trade.tradeConfig,
        h = a && a.tradeType ? a.tradeType: 2,
        g = f["default"];
        if (u.isSavingEnergy && (g = d.savingEnery), g || (g = f[h]), a && a.buyNowUrl && (g = a.buyNowUrl), o && o.buyNowUrl && (g = o.buyNowUrl), 1 === t.customIsv && (g = (location.hostname.indexOf(".wapa."), "https://open.m.tmall.com/order/wapCustomization.htm"), t.service && (t.serviceId = t.service)), t["x-itemid"] = i.item.itemId, t["x-uid"] = s && s.userId, l && "post" == l && (g = f[2], t.etm = "post", t && t.buyParam)) {
          var x = t.buyParam;
          t.buyParamEtm = x,
          delete t.buyParam
        }
        if (~g.indexOf("?")) { (g.split("?")[1] || "").split("&").forEach(function(e) {
            var i = e.split("=");
            t[i[0]] = i[1] ? i[1] : undefined
          })
        }
        var y = r('<form style="display: none;" method="get"/>');
        if (y.attr("action", g), u.useTrade30 ? (m(y, t, "useTrade30"), y.attr("accept-charset", "utf8"), r(document.body).append(y), r("input", y).forEach(function(e) {
          e.value = p(e.value)
        })) : (m(y, t), r(document.body).append(y)), batTrack("trade.buy.click.suc", "trade.buy.click"), navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("AliApp(ET") && batTrack("trade.buy.suc.ET", "trade.buy.click.suc"), e && "miniBuy" === e) {
          if (1 === t.customIsv || o.skipNativeTrade) {
            var b = function(e) {
              var t = [];
              return Object.keys(e).forEach(function(i) {
                t.push(i + "=" + encodeURIComponent(e[i]))
              }),
              t.join("&")
            },
            k = g + "?" + b(t);
            return console.log("isvUrl", k),
            void Ali.pushWindow(k,
            function(e) {
              e.errorCode && y[0].submit()
            })
          }
          t.service && (t.serviceId = t.service);
          var w = {};
          for (v in y.elements) y.elements.hasOwnProperty(v) && (w[y.elements[v].name] = y.elements[v].value);
          this.buyInNative(t)
        } else y[0].submit();
        Ali && Ali.isTmall && Ali.callWindVane("TMWVWindow.showTitle", {})
      }
    },
    {
      "key": "_hrefForm",
      "value": function(e, t, i, n, a, o, u, l, d, s) {
        var c = function(e) {
          var t = [];
          return Object.keys(e).forEach(function(i) {
            t.push(i + "=" + e[i])
          }),
          t.join("&")
        },
        p = r('meta[name="spm-id"]').attr("content"),
        m = c({
          "buyNow": !0,
          "_input_charset": "utf-8",
          "itemId": t.itemId,
          "skuId": t.skuId,
          "quantity": t.quantity,
          "service": t.service || "",
          "ttid": t.ttid || "jhs_wap",
          "spm": p + ".bottombar.4",
          "exParams": t.exParams
        }),
        f = "//h5.m.taobao.com",
        v = f + "/cart/order.html?_target=_blank&";
        location.href = v + m,
        Ali && Ali.isTmall && Ali.callWindVane("TMWVWindow.showTitle", {})
      }
    },
    {
      "key": "cart",
      "value": function(t) {
        var i = this;
        i.product.buy({
          "type": 2,
          "button": t && t.target,
          "callback": function(t) {
            t.level && e(["detail-m/widgets/toast/index"],
            function(e) {
              e.getInstance().show(t.message)
            }),
            console.log("cart ok", i),
            app.trigger("trade.cart", t)
          }
        })
      }
    },
    {
      "key": "buy",
      "value": function(t) {
        this.product.buy({
          "type": 1,
          "button": t && t.target,
          "callback": function(t) {
            t.level && e(["detail-m/widgets/toast/index"],
            function(e) {
              e.getInstance().show(t.message)
            }),
            app.trigger("trade.buy", t)
          }
        })
      }
    },
    {
      "key": "toApp",
      "value": function(e) {
        app.onSmartbanner(function(e) {
          e.getInstance({
            "type": "func",
            "bizKey": "taobao",
            "linkKey": "taobao",
            "href": window.location.href,
            "pageType": "mallDetail"
          }).redirect(!0)
        })
      }
    },
    {
      "key": "toUrl",
      "value": function(e) {}
    },
    {
      "key": "update",
      "value": function(e) {
        var t = this;
        t.$el = e.$el || t.$el,
        t.type = e.type || t.type,
        t.toDecisionAction = e.toDecisionAction || t.toDecisionAction,
        t.render(),
        t.bindUI()
      }
    },
    {
      "key": "render",
      "value": function() {
        var e = this;
        e.product.onChange(["trade", "feTrade", "tags"],
        function(t, i, n) {
          var a = {},
          o = void 0;
          i.buyEnable !== undefined && null !== i.buyEnable && (a.buyEnable = i.buyEnable),
          i.cartEnable !== undefined && null !== i.cartEnable && (a.cartEnable = i.cartEnable),
          i.buyText !== undefined && null !== i.buyText && (a.buyText = i.buyText),
          i.cartText !== undefined && null !== i.cartText && (a.cartText = i.cartText),
          i.okText !== undefined && null !== i.okText && (a.okText = i.okText),
          i.infoText !== undefined && null !== i.infoText && (a.infoText = i.infoText),
          i.depositText !== undefined && null !== i.depositText && (a.depositText = i.depositText),
          i.actionEnable !== undefined && null !== i.actionEnable && (a.actionEnable = i.actionEnable),
          i.actionText !== undefined && null !== i.actionText && (a.actionText = i.actionText),
          o = Object.assign({
            "okText": "\u786e\u5b9a"
          },
          t, a),
          r(e.$el).html(new u(l).render({
            "type": e.type,
            "toDecisionAction": e.toDecisionAction,
            "trade": o
          }))
        })
      }
    },
    {
      "key": "bindUI",
      "value": function() {
        var e = this,
        t = r(".cart", e.$el),
        i = r(".buy", e.$el);
        r(".info", e.$el);
        e.product.onLoad("tags",
        function(t) {
          t.isChaoshi && e.$el && e.$el.addClass("isChaoshi")
        }),
        e.product.onLoad("presale",
        function(t) {
          if (t.status) {
            var i = "<p>" + t.text + "</p>",
            n = t.extraText ? "<p>" + t.extraText + "</p>": "";
            1 === t.status ? (e.$el && e.$el.addClass("presale status1"), e.product.update("feTrade", {
              "load": function(e, t) {
                e.infoText = i + n,
                t(e)
              }
            })) : 2 === t.status ? (e.$el && e.$el.addClass("presale status2"), e.product.update("feTrade", {
              "load": function(e, a) {
                e.infoText = i + n,
                e.depositText = t.depositText,
                a(e)
              }
            })) : 3 === t.status && (e.$el && e.$el.addClass("presale status3"), e.product.update("feTrade", {
              "load": function(e, t) {
                e.infoText = i + n,
                t(e)
              }
            }))
          }
        }),
        e.product.onLoad("pinTuan",
        function(t) {
          if (!t || 2 != t.pageType && 1 != t.pageType) {
            if (t && 3 == t.pageType) {
              e.$el && e.$el.addClass("pintuan");
              var i = "<p>" + t.leftButtonTopText + "</p>",
              n = t.leftButtonBottomText ? "<p>" + t.leftButtonBottomText + "</p>": "";
              e.product.update("feTrade", {
                "load": function(e, a) {
                  e.infoText = i + n,
                  e.buyText = t.rightButtonTopText,
                  a(e)
                }
              })
            }
          } else if (app.env.taoxiApp) {
            e.$el && e.$el.addClass("pintuan");
            var i = "<p>" + t.leftButtonTopText + "</p>",
            n = t.leftButtonBottomText ? "<p>" + t.leftButtonBottomText + "</p>": "";
            e.product.update("feTrade", {
              "load": function(e, a) {
                e.infoText = i + n,
                e.buyText = t.rightButtonTopText,
                a(e)
              }
            })
          } else e.product.update("feTrade", {
            "load": function(e, t) {
              e.buyEnable = !1,
              e.cartEnable = !1,
              e.buyText = s.onlyTaoApp,
              t(e)
            }
          })
        }),
        e.product.onLoad(["tags", "presale"],
        function(e, t) {
          e.isCustomizedItem && (app.env.taoxiApp || app.product.update("feTrade", {
            "load": function(e, i) {
              e.buyEnable = !1,
              e.cartEnable = !1,
              t && t.status ? e.buyText = "\u4ec5\u652f\u6301APP\u8d2d\u4e70": e.buyText = s.limit,
              i(e)
            }
          }))
        }),
        e.product.onLoad("tags",
        function(t) {
          app.env.alihealthApp && e.$el && e.$el.addClass("alihealth")
        }),
        e.product.onLoad("apis",
        function(t) {~navigator.userAgent.indexOf("AliApp(BBT") && e.product.update("feTrade", {
            "load": function(e, t) {
              e.buyExParams = Object.assign({},
              e.buyExParams, {
                "babytree_source": "1"
              }),
              e.cartExParams = Object.assign({},
              e.buyExParams, {
                "babytree_source": "1"
              }),
              t(e)
            }
          })
        }),
        e.product.onLoad("apis",
        function(e) {
          e.h5OnlyAllowInApp && (app.env.taoxiApp || (t.addClass("disabled"), i.addClass("disabled"), i.text(s.onlyTaoApp)))
        }),
        e.product.onLoad("feature",
        function(t) {
          t && t.creditBuyPhone ? e.$el && e.$el.addClass("creditBuyPhone") : t && t.creditBuyClothes && e.$el && e.$el.addClass("creditBuyClothes")
        }),
        e.product.onLoad("feature",
        function(t) {
          if (t && t.creditBuy) {
            var i = !1;
            e.product.onChange(["selectedBuyPattern", "state"],
            function(t, n) {
              t && t.bizId && n && "buy" === n.decision ? (i = !0, e.product.update("feTrade", {
                "load": function(e, i) {
                  e.okText = t.okBtnText,
                  e.buyNowUrl = t.buyUrl,
                  i(e)
                }
              })) : i && e.product.update("feTrade", {
                "load": function(e, t) {
                  e.okText = null,
                  e.buyNowUrl = null,
                  t(e)
                }
              })
            }),
            window.creditPvSend || (window.creditPvSend = !0, goldlog.record("/tmalldetail.lib.credit-pv", "EXP", "", "GET"))
          }
        }),
        e.product.onLoad("item",
        function(t) {
          var i = location.href,
          n = navigator.userAgent,
          a = function(e) {
            "undefined" == typeof my ? feloader.getScript("https://appx/web-view.min.js", {
              "success": function() {
                e(my)
              },
              "error": function() {
                e(null)
              }
            }) : e(my)
          },
          o = -1 != n.indexOf("MiniProgram") && -1 != n.indexOf("AlipayClient"),
          r = -1 != n.indexOf("TB"),
          u = -1 != n.indexOf("TM"); (~i.indexOf("miniapp_source=miniapp_brand") || ~i.indexOf("miniapp_source=scan_buy") || ~i.indexOf("ttid=miniapp_brand")) && e.product.update("feTrade", {
            "load": function(e, t) {
              e.useTaoParams = !0,
              e.cartExParams = {
                "smg_trace_id": app.query("smg_trace_id")
              },
              e.buyFunction = function(e) {
                goldlog.record("/tmalldetail.lib.buy", "EXP", "type=miniapp_brand&itemId=" + e.itemId, "GET"),
                console.log("submit form");
                var t = function(e) {
                  var t = [];
                  return Object.keys(e).forEach(function(i) {
                    t.push(i + "=" + e[i])
                  }),
                  t.join("&")
                },
                i = t({
                  "buyNow": !0,
                  "_input_charset": "utf-8",
                  "itemId": e.itemId,
                  "skuId": e.skuId,
                  "quantity": e.quantity,
                  "service": e.service || "",
                  "exParams": encodeURI(e.exParams)
                }),
                n = "https://h5.m.taobao.com/awp/base/buy.htm?" + i;
                o ? location.href = n: a(function(e) {
                  e && e.postMessage && (r || u) ? e.postMessage({
                    "type": "navigateTo",
                    "mode": "outside",
                    "url": n
                  }) : location.href = n
                })
              },
              t(e)
            }
          })
        })
      }
    },
    {
      "key": "bindEvent",
      "value": function() {
        var e = this;
        batTrack("trade.init"),
        e.$el && e.$el.on("click", ".cart:not(.disabled)",
        function(t) {
          batTrack("trade.cart.click", "trade.init"),
          e.product.onLoad(["feTrade", "skuItem"],
          function(i, n) {
            if (n && n.skuH5Url) return void e.app.onSkuH5(function(e) {
              e.show()
            });
            i && i.cartClick ? i.cartClick(t) : "index" == e.type ? (e.product.needDecision(function(i) {
              i ? app.onSku(function(e) {
                e.show("cart")
              }) : e.cart(t)
            }), goldlog.record("/tmalldetail.lib.trade-index-cart", "CLK", "", "H1508277619")) : (e.cart(t), goldlog.record("/tmalldetail.lib.trade-sku-cart", "CLK", "", "H1506430577"))
          })
        }),
        e.$el && e.$el.on("click", ".buy:not(.disabled)",
        function(t) {
          var i = navigator.userAgent;
          if ("string" == typeof i) {
            if ( - 1 !== i.toLowerCase().indexOf("alibaichuan") && -1 !== location.href.indexOf("callUpTaobao=true")) return window.feloader.getScript("//g.alicdn.com/mtb/callapp-taobao/0.0.18/callTB.js",
            function() {
              return (0, window["@ali/callapp-taobao"])(location.href, {
                "callType": "scheme",
                "scheme": "tbopen",
                "package": "com.taobao.taobao"
              })
            })
          }
          batTrack("trade.buy.click", "trade.init"),
          e.product.onLoad(["feTrade", "skuItem"],
          function(i, n) {
            if (n && n.skuH5Url) return void e.app.onSkuH5(function(e) {
              e.show()
            });
            i && i.buyClick ? i.buyClick(t) : "index" == e.type ? (e.product.needDecision(function(i) {
              i ? app.onSku(function(e) {
                e.show("buy")
              }) : e.buy(t)
            }), goldlog.record("/tmalldetail.lib.trade-index-buy", "CLK", "", "H1507354124")) : (e.buy(t), goldlog.record("/tmalldetail.lib.trade-sku-buy", "CLK", "", "H1505507082"))
          })
        }),
        e.$el && e.$el.on("click", ".ok:not(.disabled)",
        function(t) {
          "cart" == e.toDecisionAction ? (batTrack("trade.cart.click", "trade.init"), e.cart(t)) : "buy" == e.toDecisionAction && (batTrack("trade.buy.click", "trade.init"), e.buy(t))
        }),
        e.$el && e.$el.on("click", ".action:not(.disabled)",
        function(t) {
          batTrack("trade.action.click", "trade.init"),
          e.product.onLoad(["trade", "feTrade"],
          function(e, t) {
            var i = t.actionUrl || e.actionUrl;
            i && Ali.pushWindow(i,
            function(e) {
              e.errorCode && (location.href = i)
            })
          })
        }),
        navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("AliApp(ET") && batTrack("trade.init.ET", "trade.init")
      }
    },
    {
      "key": "needDecisionValidator",
      "value": function() {
        var e = this;
        e.product.needDecisionValidator(function(t) {
          e.product.onLoad("feature",
          function(e) {
            t(e.showSku ? !0 : !1)
          })
        }),
        e.product.needDecisionValidator(function(t) {
          e.product.onLoad(["skuMaps", "tags"],
          function(e, i) {
            t(e ? i.isNABundleItem ? !1 : !0 : !1)
          })
        }),
        e.product.needDecisionValidator(function(t) {
          e.product.onLoad(["tags", "apis"],
          function(e, i) {
            t(e.isDianZiMendian || i.appointUrl ? !0 : !1)
          })
        }),
        e.product.needDecisionValidator(function(t) {
          e.product.onLoad("tags",
          function(e) {
            t(e.isAlicomMasterCard || e.isContractPhoneItem ? !0 : !1)
          })
        }),
        e.product.needDecisionValidator(function(t) {
          e.product.onLoad(["tags"],
          function(e) {
            t(e && e.isCarCascade ? !0 : !1)
          })
        }),
        e.product.needDecisionValidator(function(t) {
          e.product.onLoad(["tags"],
          function(e) {
            t(e && e.isZhengChe ? !0 : !1)
          })
        })
      }
    },
    {
      "key": "redirect",
      "value": function() {
        this.product.onLoad(["trade", "skipData"],
        function(e, t) {
          if (e.redirectUrl) return void(window.location.href = e.redirectUrl);
          if (t && t.dyTimeData) {
            var i, n = null,
            a = t.dyTimeData,
            o = {
              "init": function(e) {
                if (i) return i;
                i = e.startTime - (new Date).getTime()
              },
              "now": function() {
                return (new Date).getTime() + (i || 0)
              }
            };
            if (a) {
              var r = a.currentTime,
              u = a.dyEndTime,
              l = a.dyStartTime,
              d = a.dyUrl;
              o.init({
                "startTime": r
              }),
              n = setInterval(function() {
                console.log("dyTime", o.now(), l, u),
                o.now() >= l && o.now() <= u && (clearTimeout(n), d ? location.href = d: location.reload())
              },
              2e3)
            }
          }
        })
      }
    },
    {
      "key": "buyInNative",
      "value": function(e) {
        var t = function(e, t) {
          window.WindVane.call("Page_Detail", "doConfirm", -1 !== navigator.userAgent.indexOf("AliApp(TM") ? {}: null,
          function(t) {
            e && e.call(this, t)
          },
          function(i) {
            window.WindVane.call("Page_Sku", "doConfirm", null,
            function(t) {
              e && e.call(this, t)
            },
            function(e) {
              t && t.call(this, d)
            })
          }),
          console.log("doConfirm", e, t)
        },
        i = function(e, t, i) {
          window.WindVane.call("Page_Detail", "addParams", e,
          function(e) {
            t && t.call(this, e)
          },
          function(n) {
            window.WindVane.call("Page_Sku", "addParams", e,
            function(e) {
              t && t.call(this, e)
            },
            function(e) {
              i && i.call(this, d)
            })
          }),
          console.log("addParams", e, t, i)
        };
        e && e.exParams && (e = Object.assign(e, JSON.parse(e.exParams)), delete e.exParams),
        e.forceBuyNow = !0,
        i(e),
        t()
      }
    }]),
    t
  } ();
  i.exports = c
});
define("detail-m/mods/action-bar/banner", ["mui/zepto/zepto", "mui/xtemplate/index"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var o = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  a = e("mui/zepto/zepto"),
  u = e("mui/xtemplate/index"),
  r = '<div class="extraTip {{class}}" id="J_ExtraTip" style="{{#if(bgColor)}}background:{{bgColor}}{{/if}}">{{text}}{{#if(buttonText)}}<a href="{{url}}" eventId="{{eventId}}" target="_blank">{{buttonText}}</a>{{/if}}</div>',
  d = function() {
    function t(e) {
      n(this, t);
      var i = this;
      i.product = e,
      i.init(),
      i.initEvent()
    }
    return o(t, [{
      "key": "init",
      "value": function() {
        var e = this;
        e.product.onChange(["trade", "feTrade", "systemTime", "disabledItem", "entrances"],
        function(t, i, n, o, d) {
          var l = Object.assign(t, i);
          if (l.waitForStart) {
            if (n < l.startTime) {
              var s = e.formatDate(l.startTime) + "\u5f00\u552e \u656c\u8bf7\u671f\u5f85";
              a("#s-actionBar-container #J_ExtraTip").remove(),
              a("#s-actionBar-container").append(new u(r).render({
                "class": "preSale",
                "text": s
              }))
            }
          } else l.hintBanner && !o ? (a("#s-actionBar-container #J_ExtraTip").remove(), a("#s-actionBar-container").append(new u(r).render(l.hintBanner))) : d && d.alipay2taoBanner && d.alipay2taoBanner.text ? (a("#s-actionBar-container").append(new u(r).render({
            "buttonText": "\u53bb\u6dd8\u5b9d\u8d2d\u4e70",
            "text": d.alipay2taoBanner.text,
            "eventId": "go_taobao",
            "class": "priceTip"
          })), goldlog.record("/tbmini-alipay.callup.exp-callup", "EXP", "spmc=promo", "GET")) : a("#s-actionBar-container #J_ExtraTip").remove()
        })
      }
    },
    {
      "key": "initEvent",
      "value": function() {
        var t, i = this;
        a("#s-actionBar-container").on("click", "#J_ExtraTip a[eventid]",
        function(n) {
          var o = a(n.target);
          if ("open_area_chooser" === o.attr("eventId") && (n.stopPropagation(), n.preventDefault(), i.product.onLoad("feature",
          function(n) {
            n.newAddress && "false" !== n.newAddress ? e(["detail-m/widgets/uaddress/index"],
            function(t) {
              i.uadd || (i.uadd = new t({
                "title": "\u914d\u9001\u81f3"
              }), app.onAddress(function(t) {
                i.area = t,
                t.on("areaChange",
                function(t) {
                  i.uadd.close();
                  var n = t.areaNames.toString(),
                  o = /,/gi;
                  n = n.replace(o, " "),
                  n && a(".deliveryTo span", i.$el).html(n),
                  i.product.querySkip({
                    "areaId": t.code
                  },
                  function() {
                    e(["detail-m/widgets/toast/index"],
                    function(e) {
                      e.getInstance().show("\u5730\u5740\u5207\u6362\u6210\u529f")
                    })
                  })
                })
              }), i.uadd.on("select",
              function(t) {
                i.product.querySkip({
                  "areaId": t.areaId,
                  "addressId": t.addressId
                },
                function() {
                  i.product.update("addressId", {
                    "value": t.addressId
                  }),
                  e(["detail-m/widgets/toast/index"],
                  function(e) {
                    e.getInstance().show("\u5730\u5740\u5207\u6362\u6210\u529f")
                  })
                })
              }), i.uadd.on("areaSelect",
              function() {
                i.area.reset(),
                i.area.open()
              })),
              i.product.onChange("delivery",
              function(e) {
                e && (e.completedTo || e.to) && (i.uadd.currentAddress = e.completedTo || e.to)
              }),
              i.uadd.open()
            }) : t ? (t.open(), t.reset()) : app.onAddress(function(n) {
              t = n,
              t.on("areaChange",
              function(t) {
                i.product.querySkip({
                  "areaId": t.code
                },
                function() {
                  e(["detail-m/widgets/toast/index"],
                  function(e) {
                    e.getInstance().show("\u5730\u5740\u5207\u6362\u6210\u529f")
                  })
                })
              }),
              t.open()
            })
          })), "go_taobao" === o.attr("eventId")) {
            n.stopPropagation(),
            n.preventDefault();
            var u = navigator.userAgent; - 1 != u.indexOf("MiniProgram") && -1 != u.indexOf("AlipayClient") ? feloader.getScript("https://appx/web-view.min.js",
            function() {
              e(["//g.alicdn.com/mtb/alipay-app-utils/1.1.6/index.js"],
              function(e) {
                e.callupTaobao({
                  "h5Url": window.location.href,
                  "visaType": "detail",
                  "isLogin": !1,
                  "spmc": "promo"
                })
              })
            }) : app.onSmartbanner(function(e) {
              e.getInstance({
                "type": "func",
                "bizKey": "taobao",
                "linkKey": "taobao",
                "href": window.location.href,
                "pageType": "mallDetail"
              }).redirect(!0)
            })
          }
          "open_store_chooser" === o.attr("eventId") && (n.stopPropagation(), n.preventDefault(), window.addEventListener("message",
          function(t) {
            var n = t.data,
            o = n || {},
            a = o.storeId,
            u = o.freezerId,
            r = o.areaId;
            console.log("message", t),
            i.product.querySkip({
              "storeId": a,
              "freezerId": u,
              "areaId": r
            },
            function() {
              e(["detail-m/widgets/toast/index"],
              function(e) {
                e.getInstance().show("\u5730\u5740\u5207\u6362\u6210\u529f"),
                i.storeCover.hide()
              })
            })
          }), i.storeCover ? i.storeCover.show() : e(["detail-m/widgets/cover/index"],
          function(e) {
            i.product.onLoad(["seller"],
            function(t) {
              var n;
              n = -1 !== location.hostname.indexOf(".waptest.") ? "//test.waptest.tmall.com/wow/chaoshi/act/period-delivery-test#/address?&type=freezer&wh_hideNav=1&hideBackIcon=1&sellerId=" + t.userId + "&from=" + encodeURIComponent(location.href) : -1 !== location.hostname.indexOf(".wapa.") ? "//test.wapa.tmall.com/wow/chaoshi/act/period-delivery#/address?&type=freezer&wh_hideNav=1&hideBackIcon=1&sellerId=" + t.userId + "&from=" + encodeURIComponent(location.href) : "//pages.tmall.com/wow/chaoshi/act/period-delivery#/address?&type=freezer&hideBackIcon=1&sellerId=" + t.userId + "&from=" + encodeURIComponent(location.href),
              i.storeCover = new e({
                "hasFooter": !0,
                "className": "top20",
                "contentBody": '<iframe src="' + n + '"></iframe>',
                "contentFooter": "\u5173\u95ed"
              }),
              i.storeCover.show()
            })
          }), n.preventDefault()),
          "go_fun" === o.attr("eventId") && (n.stopPropagation(), n.preventDefault(), i.product.onLoad("feTrade",
          function(e) {
            e && e.hintBanner && e.hintBanner.fun && e.hintBanner.fun()
          }))
        })
      }
    },
    {
      "key": "formatDate",
      "value": function(e) {
        function t(e) {
          return parseInt(e) < 10 && (e = "0" + e),
          e
        }
        var i = new Date(parseInt(e));
        return t(i.getMonth() + 1) + "\u6708" + t(i.getDate()) + "\u65e5 " + t(i.getHours()) + ":" + t(i.getMinutes())
      }
    }]),
    t
  } ();
  i.exports = d
});
define("detail-m/mods/action-bar/index.xtpl",
function(e, t, n) {
  var i = e("mui/xtemplate/index");
  n.exports = function(e, t) {
    var n, i = function(e) {
      function t(e, t, n) {
        e.data,
        e.affix;
        return t.data += " isChaoshi ",
        t
      }
      function n(e, t, n) {
        var i = e.data,
        a = e.affix;
        t.data += '<a class="toshop cell" href="';
        var o = (u = a.detailData) !== n ? null != u ? null != (d = u.seller) ? c = d.shopUrl: d: u: (u = i.detailData) !== n ? null != u ? null != (d = u.seller) ? c = d.shopUrl: d: u: e.resolveLooseUp(["detailData", "seller", "shopUrl"]);
        return t = t.writeEscaped(o),
        t.data += '" target="_blank"><svg t="1516606376961" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1336" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M940.960749 425.143816c0.093121-17.86488-2.838651-35.791158-8.207939-52.113915-0.061398-0.463558-0.153496-0.89437-0.246617-1.26583-0.370437-1.788739-0.86367-3.517103-1.573845-5.183046L858.609159 186.54565c-12.527314-37.334303-48.50369-60.228733-90.589205-60.32083L260.369006 126.22482c-42.641169 0-75.778894 22.678512-87.781252 58.531068L94.833879 368.463909c-0.370437 1.079588-0.771573 2.684132-1.110287 4.319375-5.646604 17.339924-8.485255 35.143405-8.485255 53.008284 0.047072 47.364751 19.658735 91.617627 53.040007 123.1856l0.214894 269.90315c0 43.50484 35.452443 78.895885 79.049381 78.895885l580.622914-0.370437c43.535539-0.093121 78.957283-35.57524 78.957283-79.111802l-0.058328-260.299421C917.076782 526.08888 940.986331 477.395878 940.960749 425.143816zM798.072411 835.695287l-580.529793 0.370437c-9.564843 0-17.339924-7.713682-17.339924-17.217127l-0.185218-232.914724c16.764825 5.293563 35.163871 7.983835 55.045687 7.983835 50.632167-0.153496 97.531314-22.400173 129.496329-60.47535 31.81152 37.766139 78.340229 59.858296 128.880299 60.166311 50.138934-0.401136 96.543823-22.586414 128.200824-60.32083 31.965016 38.075177 78.926584 60.228733 129.805368 60.228733 15.559371-0.077771 30.233582-1.77646 43.916209-5.060249l0.051165 229.867318C815.413358 827.889507 807.606555 835.664587 798.072411 835.695287zM823.065641 520.114818c-13.977339 7.652284-31.410384 11.570523-51.68208 11.69332-37.58092 0-71.828932-19.068288-91.823312-51.434439-1.419326-3.055592-3.795443-8.114818-8.238638-12.989849-5.090948-5.708002-14.346753-12.464893-29.588899-12.464893-12.279674 0-23.418362 5.028527-29.712719 12.743232-4.16588 4.689812-6.448876 9.348925-8.084119 12.742209-19.74674 31.966039-53.718459 51.218522-90.527806 51.496861-37.272905-0.215918-71.335698-19.407002-91.206258-51.619658-1.388627-2.838651-3.703345-7.621585-7.312546-11.663644-14.502295-17.309224-46.960545-16.414855-59.610656-1.326205-4.659113 5.090948-7.096628 10.212596-8.670473 13.700023-19.931958 31.965016-54.211692 51.126424-91.607394 51.249221-19.931958 0-36.994566-3.734044-50.755987-11.07729l-0.030699 0c0 0 0 0-0.030699 0-35.297924-18.789948-57.235562-55.32198-57.266261-95.309716 0-11.81714 1.974981-23.727401 5.92392-35.328623 0.277316-0.832971 0.523933-1.759063 0.740874-2.715855l76.581166-181.054589c1.573845-4.628414 6.325056-18.72855 30.144554-18.72855l507.805468 0c9.780761 0.586354 26.628474 2.313695 32.613792 19.931958l71.706135 178.555675c0.278339 1.295506 0.617054 2.529613 0.926092 3.547803 3.980661 11.631922 5.954619 23.449062 5.954619 35.175127C879.375112 464.761116 857.80791 501.107929 823.065641 520.114818z" p-id="1337"></path></svg><span>\u5e97\u94fa</span> </a>',
        t
      }
      function i(e, t, n) {
        var i = e.data,
        a = e.affix;
        t.data += '<a class="support cell" href="';
        var o = (u = a.detailData) !== n ? null != u ? null != (d = u.seller) ? c = d.wwUrl: d: u: (u = i.detailData) !== n ? null != u ? null != (d = u.seller) ? c = d.wwUrl: d: u: e.resolveLooseUp(["detailData", "seller", "wwUrl"]);
        return t = t.writeEscaped(o),
        t.data += '" target="_blank"><svg t="1516606307117" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1221" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M538.118867 370.480846c-27.866674 0-50.52779 25.586748-50.52779 57.036018l0 59.471486c0 31.449269 22.661116 57.020668 50.52779 57.020668 27.868721 0 50.529837-25.571399 50.529837-57.020668l0-59.471486C588.648704 396.067594 565.987588 370.480846 538.118867 370.480846z" p-id="1222"></path><path d="M716.378807 370.480846c-27.866674 0-50.529837 25.586748-50.529837 57.036018l0 59.471486c0 31.449269 22.663162 57.020668 50.529837 57.020668 27.868721 0 50.529837-25.571399 50.529837-57.020668l0-59.471486C766.908644 396.067594 744.247528 370.480846 716.378807 370.480846z" p-id="1223"></path><path d="M507.802398 76.264964c-72.883961 0-145.43023 18.558681-209.862705 53.682643-35.33988-24.300452-95.989191-50.575886-122.984009-56.256258-3.721765-1.086751-6.874571-1.545192-10.964726-1.606591l-2.539846 0.076748c-1.316995 0.01535-2.097778 0.046049-2.894933 0.199545-8.849552 1.468444-16.550954 6.246261-21.666462 13.427824-4.777817 6.691399-6.752798 14.852266-5.465478 22.231327 0.322341 4.869914 0.948605 10.120498 3.276626 15.558347 21.545712 44.573171 18.960841 106.86796 17.174148 131.273812-49.737798 62.889329-62.730717 114.53457-64.921615 125.002992-8.037047 22.661116-17.143449 103.403045-17.143449 121.708969 0 250.409167 192.391798 446.553429 437.992449 446.553429 241.803161 0 438.529685-195.563024 438.529685-435.926394C946.332083 271.812639 749.605559 76.264964 507.802398 76.264964zM507.694951 885.735983l-5.77247 0.061398c-100.780311 0-194.58065-40.943504-264.111237-115.297956-67.923996-72.638367-105.32993-168.152744-105.32993-268.965801 0-7.65126 1.084705-20.810978 2.629897-35.247782 0.917906-6.930853 1.828648-14.406105 2.718925-22.944572 0.072655-0.568958 0.145309-1.12973 0.220011-1.694595 5.935176-55.638181 37.546128-117.515461 63.932078-154.933675 0.178055-0.298805-0.011256-0.245593 0.222057-0.598634 10.019191-15.174608 8.230452-30.619368 9.740852-35.80753 1.224898-29.016871-1.6158-55.749722-1.746784-56.941873l-0.00614 0.00614c-0.693802-13.679557-1.823532-28.180829-3.450589-42.201148 20.455891 10.107195 39.810704 23.596418 57.632605 40.162722 11.56029 9.784854 27.822672 11.990079 41.648562 5.084808 61.537542-37.805024 131.313721-57.788148 201.778586-57.788148 207.259414 0 375.87367 167.573553 375.87367 373.531322C883.676068 718.409047 718.522634 882.490056 507.694951 885.735983z" p-id="1224"></path></svg><span>\u5ba2\u670d</span> </a>',
        t
      }
      function a(e, t, n) {
        e.data,
        e.affix;
        return t.data += '<a class="addfav cell"><svg t="1516606477258" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1449" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M946.44567 407.179676c-3.706415-11.056823-13.268188-19.154245-24.823362-20.929682l-263.117606-40.614L540.930913 93.91802c-5.108345-10.93198-16.071024-17.939581-28.155247-17.971303-0.030699 0-0.062422 0-0.062422 0-12.021801 0-22.985504 6.945179-28.155247 17.84646L365.79001 345.247138l-263.917832 39.507806c-11.399631 1.961678-20.774139 10.060123-24.355711 21.054525-3.613294 10.963703-0.778736 23.047926 7.257288 31.332612l191.202717 196.684568-45.6282 277.132808c-1.930979 11.741415 3.0208 23.608697 12.769838 30.491455 9.717316 6.882757 22.549575 7.630794 32.983205 1.868557l235.366565-129.47177 234.868215 130.282229c4.703115 2.616594 9.904581 3.924379 15.106046 3.924379 6.291287 0 12.551874-1.868557 17.877159-5.699816 9.748015-6.852058 14.763239-18.687618 12.862959-30.460756L747.488339 634.635061l191.669344-195.84341C947.286828 430.476265 950.121386 418.2365 946.44567 407.179676zM691.986257 602.337471c-6.882757 7.039323-10.060123 16.974603-8.471952 26.722618l37.000706 229.480508L526.666024 751.025908c-9.343809-5.232165-20.74344-5.232165-30.117948-0.062422L302.262138 857.856006l37.779442-229.387387c1.588171-9.717316-1.52575-19.652596-8.40953-26.754341L170.703847 436.176081l220.156142-31.686676c2.191922-0.378623 4.288676-0.980327 6.274914-1.771343 7.674796-2.63092 14.32117-8.233522 18.061354-16.156982l97.392144-206.183919 96.550986 206.712969c4.422729 9.406231 13.205766 16.008602 23.483854 17.596773l219.638349 33.886785L691.986257 602.337471z" p-id="1450"></path></svg><span>\u6536\u85cf</span> </a>',
        t
      }
      function o(e, t, n) {
        var i = e.data,
        a = e.affix;
        t.data += '<a class="cart" role="button"><p>';
        var o = (u = a.trade) !== n ? null != u ? d = u.cartText: u: (u = i.trade) !== n ? null != u ? d = u.cartText: u: e.resolveLooseUp(["trade", "cartText"]),
        r = o;
        return r || (r = "\u52a0\u5165\u8d2d\u7269\u8f66"),
        t = t.write(r),
        t.data += "</p></a>",
        t
      }
      function r(e, t, n) {
        var i = e.data,
        a = e.affix;
        t.data += '<a class="buy" role="button"><p>';
        var o = (u = a.trade) !== n ? null != u ? d = u.buyText: u: (u = i.trade) !== n ? null != u ? d = u.buyText: u: e.resolveLooseUp(["trade", "buyText"]),
        r = o;
        return r || (r = "\u7acb\u5373\u8d2d\u4e70"),
        t = t.write(r),
        t.data += "</p></a>",
        t
      }
      function l(e, t, n) {
        var i = e.data,
        a = e.affix;
        t.data += '<a class="buy" role="button"><p>';
        var o = (u = a.trade) !== n ? null != u ? d = u.buyText: u: (u = i.trade) !== n ? null != u ? d = u.buyText: u: e.resolveLooseUp(["trade", "buyText"]),
        r = o;
        return r || (r = "\u7acb\u5373\u8d2d\u4e70"),
        t = t.write(r),
        t.data += "</p></a>",
        t
      }
      function s(e, s, m) {
        var f = e.data,
        h = e.affix;
        s.data += ' <section class="actionBar-bg"><div id="s-actionBar-container"><div class="action-bar-wrap j-bottom-bar ';
        var v = (u = h.tags) !== m ? null != u ? d = u.isChaoshi: u: (u = f.tags) !== m ? null != u ? d = u.isChaoshi: u: e.resolveLooseUp(["tags", "isChaoshi"]);
        s = b.call(p, e, {
          "params": [v],
          "fn": t
        },
        s),
        s.data += ' "> ';
        var g = (u = h.detailData) !== m ? null != u ? null != (d = u.seller) ? c = d.shopUrl: d: u: (u = f.detailData) !== m ? null != u ? null != (d = u.seller) ? c = d.shopUrl: d: u: e.resolveLooseUp(["detailData", "seller", "shopUrl"]);
        s = b.call(p, e, {
          "params": [g],
          "fn": n
        },
        s),
        s.data += " ";
        var y = (u = h.detailData) !== m ? null != u ? null != (d = u.seller) ? c = d.wwUrl: d: u: (u = f.detailData) !== m ? null != u ? null != (d = u.seller) ? c = d.wwUrl: d: u: e.resolveLooseUp(["detailData", "seller", "wwUrl"]);
        s = b.call(p, e, {
          "params": [y],
          "fn": i
        },
        s),
        s.data += " ";
        var x = (u = h.tags) !== m ? null != u ? d = u.isPrescriptionDrug: u: (u = f.tags) !== m ? null != u ? d = u.isPrescriptionDrug: u: e.resolveLooseUp(["tags", "isPrescriptionDrug"]),
        w = x;
        if (!w) {
          w = (u = h.tags) !== m ? null != u ? d = u.isOtcDrug: u: (u = f.tags) !== m ? null != u ? d = u.isOtcDrug: u: e.resolveLooseUp(["tags", "isOtcDrug"])
        }
        var k = w;
        if (!k) {
          k = (u = h.tags) !== m ? null != u ? d = u.isCloudShopItem: u: (u = f.tags) !== m ? null != u ? d = u.isCloudShopItem: u: e.resolveLooseUp(["tags", "isCloudShopItem"])
        }
        s = b.call(p, e, {
          "params": [!k],
          "fn": a
        },
        s),
        s.data += ' <div class="mods-wrap"></div><div class="trade"> ';
        var A = (u = h.trade) !== m ? null != u ? d = u.cartEnable: u: (u = f.trade) !== m ? null != u ? d = u.cartEnable: u: e.resolveLooseUp(["trade", "cartEnable"]),
        T = A;
        T = !1 !== A,
        s = b.call(p, e, {
          "params": [T],
          "fn": o
        },
        s),
        s.data += " ";
        var I = (u = h.trade) !== m ? null != u ? d = u.buyEnable: u: (u = f.trade) !== m ? null != u ? d = u.buyEnable: u: e.resolveLooseUp(["trade", "buyEnable"]),
        S = I;
        S = !1 !== I,
        s = b.call(p, e, {
          "params": [S],
          "fn": r
        },
        s),
        s.data += " ";
        var C = (u = h.trade) !== m ? null != u ? d = u.buyEnable: u: (u = f.trade) !== m ? null != u ? d = u.buyEnable: u: e.resolveLooseUp(["trade", "buyEnable"]),
        z = C;
        z = !1 === C;
        var _ = z;
        if (_) {
          var P = (u = h.trade) !== m ? null != u ? d = u.cartEnable: u: (u = f.trade) !== m ? null != u ? d = u.cartEnable: u: e.resolveLooseUp(["trade", "cartEnable"]),
          D = P;
          D = !1 === P,
          _ = D
        }
        return s = b.call(p, e, {
          "params": [_],
          "fn": l
        },
        s),
        s.data += " </div></div></div></section> ",
        s
      }
      var u, d, c, p = this,
      m = p.root,
      f = p.buffer,
      h = p.scope,
      v = (p.runtime, p.name, p.pos, h.data),
      g = h.affix,
      y = m.nativeCommands,
      x = m.utils,
      b = (x.callFn, x.callDataFn, x.callCommand, y.range, y["void"], y.foreach, y.forin, y.each, y["with"], y["if"]);
      y.set,
      y.include,
      y.parse,
      y.extend,
      y.block,
      y.macro,
      y["debugger"];
      f.data += " ";
      var w = (u = g.tags) !== e ? null != u ? d = u.isAutoFinancing: u: (u = v.tags) !== e ? null != u ? d = u.isAutoFinancing: u: h.resolveLooseUp(["tags", "isAutoFinancing"]);
      return f = b.call(p, h, {
        "params": [!w],
        "fn": s
      },
      f)
    };
    return function(e) {
      return (n = n || new t(i)) && n.render(e) || ""
    }
  } (0, i)
});
define("mui/fetch/fetch", ["mui/babel-polyfill/index"],
function(e, t, r) {
  "use strict";
  var n = e("mui/babel-polyfill/index"); (function() {
    "use strict";
    self.__disableNativeFetch = true;
    if (!self.__disableNativeFetch && self.fetch) {
      if (typeof r !== "undefined" && r.exports) {
        r.exports = self.fetch
      }
      return
    }
    function e(e) {
      if (typeof e !== "string") {
        e = e.toString()
      }
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) {
        throw new TypeError("Invalid character in header field name")
      }
      return e.toLowerCase()
    }
    function t(e) {
      if (typeof e !== "string") {
        e = e.toString()
      }
      return e
    }
    function n(e) {
      this.map = {};
      var t = this;
      if (e instanceof n) {
        e.forEach(function(e, r) {
          r.forEach(function(r) {
            t.append(e, r)
          })
        })
      } else if (e) {
        Object.getOwnPropertyNames(e).forEach(function(r) {
          t.append(r, e[r])
        })
      }
    }
    n.prototype.append = function(r, n) {
      r = e(r);
      n = t(n);
      var o = this.map[r];
      if (!o) {
        o = [];
        this.map[r] = o
      }
      o.push(n)
    };
    n.prototype["delete"] = function(t) {
      delete this.map[e(t)]
    };
    n.prototype.get = function(t) {
      var r = this.map[e(t)];
      return r ? r[0] : null
    };
    n.prototype.getAll = function(t) {
      return this.map[e(t)] || []
    };
    n.prototype.has = function(t) {
      return this.map.hasOwnProperty(e(t))
    };
    n.prototype.set = function(r, n) {
      this.map[e(r)] = [t(n)]
    };
    n.prototype.forEach = function(e) {
      var t = this;
      Object.getOwnPropertyNames(this.map).forEach(function(r) {
        e(r, t.map[r])
      })
    };
    function o(e) {
      if (e.bodyUsed) {
        return m.reject(new TypeError("Already read"))
      }
      e.bodyUsed = true
    }
    function i(e) {
      return new m(function(t, r) {
        e.onload = function() {
          t(e.result)
        };
        e.onerror = function() {
          r(e.error)
        }
      })
    }
    function s(e) {
      var t = new FileReader;
      t.readAsArrayBuffer(e);
      return i(t)
    }
    function a(e, t) {
      var r = new FileReader;
      var n = t.headers.map["content-type"] ? t.headers.map["content-type"].toString() : "";
      var o = /charset\=[0-9a-zA-Z\-\_]*;?/;
      var s = e.type.match(o) || n.match(o);
      var a = [e];
      if (s) {
        a.push(s[0].replace(/^charset\=/, "").replace(/;$/, ""))
      }
      r.readAsText.apply(r, a);
      return i(r)
    }
    var f = {
      blob: "FileReader" in self && "Blob" in self &&
      function() {
        try {
          new Blob;
          return true
        } catch(e) {
          return false
        }
      } (),
      formData: "FormData" in self
    };
    function u() {
      this.bodyUsed = false;
      this._initBody = function(e, t) {
        this._bodyInit = e;
        if (typeof e === "string") {
          this._bodyText = e
        } else if (f.blob && Blob.prototype.isPrototypeOf(e)) {
          this._bodyBlob = e;
          this._options = t
        } else if (f.formData && FormData.prototype.isPrototypeOf(e)) {
          this._bodyFormData = e
        } else if (!e) {
          this._bodyText = ""
        } else {
          throw new Error("unsupported BodyInit type")
        }
      };
      if (f.blob) {
        this.blob = function() {
          var e = o(this);
          if (e) {
            return e
          }
          if (this._bodyBlob) {
            return m.resolve(this._bodyBlob)
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as blob")
          } else {
            return m.resolve(new Blob([this._bodyText]))
          }
        };
        this.arrayBuffer = function() {
          return this.blob().then(s)
        };
        this.text = function() {
          var e = o(this);
          if (e) {
            return e
          }
          if (this._bodyBlob) {
            return a(this._bodyBlob, this._options)
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text")
          } else {
            return m.resolve(this._bodyText)
          }
        }
      } else {
        this.text = function() {
          var e = o(this);
          return e ? e: m.resolve(this._bodyText)
        }
      }
      if (f.formData) {
        this.formData = function() {
          return this.text().then(d)
        }
      }
      this.json = function() {
        return this.text().then(function(e) {
          return JSON.parse(e)
        })
      };
      return this
    }
    var l = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function h(e) {
      var t = e.toUpperCase();
      return l.indexOf(t) > -1 ? t: e
    }
    function p(e, t) {
      t = t || {};
      this.url = e;
      this.credentials = t.credentials || "omit";
      this.headers = new n(t.headers);
      this.method = h(t.method || "GET");
      this.mode = t.mode || null;
      this.referrer = null;
      if ((this.method === "GET" || this.method === "HEAD") && t.body) {
        throw new TypeError("Body not allowed for GET or HEAD requests")
      }
      this._initBody(t.body, t)
    }
    function d(e) {
      var t = new FormData;
      e.trim().split("&").forEach(function(e) {
        if (e) {
          var r = e.split("=");
          var n = r.shift().replace(/\+/g, " ");
          var o = r.join("=").replace(/\+/g, " ");
          t.append(decodeURIComponent(n), decodeURIComponent(o))
        }
      });
      return t
    }
    function c(e) {
      var t = new n;
      var r = e.getAllResponseHeaders().trim().split("\n");
      r.forEach(function(e) {
        var r = e.trim().split(":");
        var n = r.shift().trim();
        var o = r.join(":").trim();
        t.append(n, o)
      });
      return t
    }
    u.call(p.prototype);
    function y(e, t) {
      if (!t) {
        t = {}
      }
      this._initBody(e, t);
      this.type = "default";
      this.url = null;
      this.status = t.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = t.statusText;
      this.headers = t.headers instanceof n ? t.headers: new n(t.headers);
      this.url = t.url || ""
    }
    u.call(y.prototype);
    self.Headers = n;
    self.Request = p;
    self.Response = y;
    var b = function e(t, r) {
      var n;
      if (p.prototype.isPrototypeOf(t) && !r) {
        n = t
      } else {
        n = new p(t, r)
      }
      return new m(function(e, t) {
        var r = new XMLHttpRequest;
        function o() {
          if ("responseURL" in r) {
            return r.responseURL
          }
          if (/^X-Request-URL:/m.test(r.getAllResponseHeaders())) {
            return r.getResponseHeader("X-Request-URL")
          }
          return
        }
        function i() {
          if (r.readyState !== 4) {
            return
          }
          var n = r.status === 1223 ? 204 : r.status;
          if (n < 100 || n > 599) {
            t(new TypeError("Network request failed"));
            return
          }
          var i = {
            status: n,
            statusText: r.statusText,
            headers: c(r),
            url: o()
          };
          var s = "response" in r ? r.response: r.responseText;
          e(new y(s, i))
        }
        r.onreadystatechange = i;
        if (!self.usingActiveXhr) {
          r.onload = i;
          r.onerror = function() {
            t(new TypeError("Network request failed"))
          }
        }
        r.open(n.method, n.url, true);
        try {
          if (n.credentials === "include") {
            if ("withCredentials" in r) {
              r.withCredentials = true
            } else {
              console && console.warn && console.warn("withCredentials is not supported, you can ignore this warning")
            }
          }
        } catch(e) {
          console && console.warn && console.warn("set withCredentials error:" + e)
        }
        if ("responseType" in r && f.blob) {
          r.responseType = "blob"
        }
        n.headers.forEach(function(e, t) {
          t.forEach(function(t) {
            r.setRequestHeader(e, t)
          })
        });
        r.send(typeof n._bodyInit === "undefined" ? null: n._bodyInit)
      })
    };
    var m = self.Promise;
    self.fetch = b.bind({});
    self.fetch.polyfill = true;
    if (typeof r !== "undefined" && r.exports) {
      r.exports = b
    }
  })()
});
define("mui/fetch/tool",
function(e, t, r) {
  "use strict";
  var o = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
  function(e) {
    return typeof e
  }: function(e) {
    return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
  };
  var n = "&";
  var i = "";
  var s = "=";
  var u = true;
  var a = document;
  function f(e) {
    var t = typeof e === "undefined" ? "undefined": o(e);
    return e == null || c(e) || t !== "object" && t !== "function"
  }
  function c(e) {
    var t;
    var r = Object.prototype.toString;
    return r.call(e) === "[object Object]" && (t = Object.getPrototypeOf(e), t === null || t === Object.getPrototypeOf({}))
  }
  var p = {
    endsWith: function e(t, r) {
      var o = t.length - r.length;
      return o >= 0 && t.indexOf(r, o) === o
    },
    decode: function e(t) {
      return decodeURIComponent(t.replace(/\+/g, " "))
    },
    query: function e() {
      if (!window || !window.location || !window.location.search) {
        return ""
      }
      return window.location.search.replace(/^\?+/, "")
    },
    unparam: function e(t, r, o) {
      if (typeof t !== "string" || !t) {
        return {}
      }
      r = r || "&";
      o = o || "=";
      var n = {},
      i, s = function e(t) {
        return decodeURIComponent(t.replace(/\+/g, " "))
      },
      u = t.split(r),
      a,
      f,
      c = 0,
      l = u.length;
      for (; c < l; ++c) {
        i = u[c].indexOf(o);
        if (i === -1) {
          a = s(u[c]);
          f = undefined
        } else {
          a = s(u[c].substring(0, i));
          f = u[c].substring(i + 1);
          try {
            f = s(f)
          } catch(e) {}
          if (p.endsWith(a, "[]")) {
            a = a.substring(0, a.length - 2)
          }
        }
        if (a in n) {
          if (n[a] && n[a].push) {
            n[a].push(f)
          } else {
            n[a] = [n[a], f]
          }
        } else {
          n[a] = f
        }
      }
      return n
    },
    param: function e(t, r, a, c) {
      r = r || n;
      a = a || s;
      if (c === undefined) {
        c = u
      }
      var p = [],
      l,
      h,
      d,
      m,
      y,
      b = function e(t) {
        return encodeURIComponent(String(t))
      };
      for (l in t) {
        y = t[l];
        l = b(l);
        if (f(y)) {
          p.push(l);
          if (y !== undefined) {
            if ((typeof y === "undefined" ? "undefined": o(y)) === "object") {
              p.push(a, b(JSON.stringify(y)))
            } else {
              p.push(a, b(y + i))
            }
          }
          p.push(r)
        } else if (y && y.push && y.length) {
          for (h = 0, m = y.length; h < m; ++h) {
            d = y[h];
            if (f(d)) {
              p.push(l, c ? b("[]") : i);
              if (d !== undefined) {
                p.push(a, b(d + i))
              }
              p.push(r)
            }
          }
        }
      }
      p.pop();
      return p.join(i)
    },
    getCookie: function e(t) {
      var r, o;
      if (t && t.length) {
        if (o = String(a.cookie).match(new RegExp("(?:^| )" + t + "(?:(?:=([^;]*))|;|$)"))) {
          r = o[1] ? p.decode(o[1]) : ""
        }
      }
      return r
    }
  };
  r.exports = p
});
define("mui/fetch/jsonp", ["mui/fetch/fetch", "mui/fetch/tool"],
function(e, t, r) {
  "use strict";
  var n = e("mui/fetch/fetch");
  var o = e("mui/fetch/tool"); (function(e) {
    var t = {
      timeout: 2e3,
      jsonpCallback: "callback",
      callback: null,
      body: ""
    };
    function i() {
      return "jsonp_" + Date.now() % 1e5 + Math.ceil(Math.random() * 1e3)
    }
    function s(e) {
      var t = Object.prototype.toString.call(e).toLowerCase();
      return t.substring(8, t.length - 1)
    }
    function a(t, r) {
      var n = document.querySelectorAll("head script[id=" + r + "]");
      if (n.length < 2) {
        try {
          delete e[t]
        } catch(r) {
          e[t] = undefined
        }
      }
    }
    function f(e) {
      var t = document.getElementById(e);
      t && document.getElementsByTagName("head")[0].removeChild(t)
    }
    function u(t) {
      var r = e.document.createElement("a");
      r.setAttribute("href", t);
      return r
    }
    var c = function r(n, c) {
      c = c || {};
      e.fetch.jsonpcount++;
      var l = c.timeout ? c.timeout: t.timeout,
      d = c.jsonpCallback ? c.jsonpCallback: t.jsonpCallback,
      p;
      if (n.indexOf(d) !== -1) {
        var h = u(n),
        y = new RegExp("(" + d + "(=([^&#]*)|&|#|$))"),
        m = y.exec(h.search.substring(1));
        if (m) {
          h.search = h.search.replace(m[0], "");
          n = h.toString();
          c.callback = m[3]
        }
      }
      return new Promise(function(t, r) {
        var u = c.callback || i(),
        h = d + "_" + u + "_" + e.fetch.jsonpcount;
        if (e[u]) {
          if (p) clearTimeout(p);
          f(h);
          a(u)
        }
        e[u] = function(e) {
          t({
            ok: true,
            json: function t() {
              return Promise.resolve(e)
            },
            text: function t() {
              return Promise.resolve(JSON.stringify(e))
            }
          });
          if (p) clearTimeout(p);
          f(h);
          a(u)
        };
        n += n.indexOf("?") === -1 ? "?": "&";
        if (c.body) {
          n += s(c.body) === "object" ? o.param(c.body) : encodeURI(String(c.body));
          n += "&"
        }
        var y = document.createElement("script");
        y.setAttribute("src", n + d + "=" + u);
        y.id = h;
        document.getElementsByTagName("head")[0].appendChild(y);
        p = setTimeout(function() {
          r(new Error("JSONP request to " + n + " timed out"));
          e[u] = function() {
            a(u);
            f(h)
          }
        },
        l);
        y.onreadystatechange = y.onerror = function() {
          if (!this.readyState || (this.readyState === "loaded" || this.readyState === "complete") && !e[u]) {
            r(new Error("JSONP request to " + n + " error"));
            if (p) clearTimeout(p);
            a(u);
            f(h)
          }
        }
      })
    };
    var l = n;
    e.fetch = function(e, t) {
      if (t && t.method && t.method.toUpperCase() === "JSONP" || /\.jsonp/i.test(e)) {
        return c(e, t)
      } else {
        return l(e, t)
      }
    };
    e.fetch.jsonpcount = 0;
    if (r) {
      r.exports = e.fetch
    }
  })(window)
});
define("detail-m/widgets/server/index", ["mui/zepto/zepto", "mui/custom-event/index", "mui/fetch/jsonp"],
function(e, t, n) {
  function i(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var a = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
      }
    }
    return function(t, n, i) {
      return n && e(t.prototype, n),
      i && e(t, i),
      t
    }
  } (),
  o = e("mui/zepto/zepto"),
  r = e("mui/custom-event/index"),
  l = e("mui/fetch/jsonp"),
  u = function() {
    function e(t) {
      if (i(this, e), this.server = {
        "url": "",
        "data": {},
        "charset": "utf-8",
        "type": "POST",
        "dataType": "text",
        "timeout": 2e3
      },
      this.cache = !1, this.cacheSize = 10, this.maxAge = 36e5, this.data = {},
      this.loading = !1, Object.assign(this, t), t.loadingTarget) {
        var n, a = o(t.loadingTarget);
        this.on("beforeSend",
        function() {
          n = o('<div class="ui-loading"><i></i></div>'),
          a.empty().append(n)
        }).on("complete",
        function() {
          n.remove()
        })
      }
    }
    return a(e, [{
      "key": "getServerData",
      "value": function() {
        return this.server.data
      }
    },
    {
      "key": "updateServerData",
      "value": function(e) {
        return this.server.data = Object.assign(this.server.data, e),
        this
      }
    },
    {
      "key": "request",
      "value": function(e, t) {
        var n = this,
        i = {};
        if (Object.assign(i, this.server.data), Object.assign(i, e), this.cache) {
          var a = this.getData(i);
          if (a) return n.trigger("beforeSend"),
          n.trigger("request", {
            "err": null,
            "data": a
          }),
          t && t.call(n, null, a),
          n.trigger("complete"),
          this
        }
        if ("script" === this.server.dataType) {
          var o = {
            "success": function() {
              var e = null,
              t = window[i.globalVar];
              t || (e = {
                "code": 201
              }),
              n.validate(t) ? t = n.parse(t) : e = {
                "code": 201
              },
              n.cache && t && n.saveData(i, t),
              n.trigger("request", {
                "err": e,
                "data": t
              }),
              n.loading = !1,
              n.trigger("complete")
            },
            "error": function() {
              n.trigger("request", {
                "err": {
                  "code": 202,
                  "msg": "\u8bf7\u6c42\u5931\u8d25"
                }
              }),
              n.loading = !1,
              n.trigger("complete"),
              batTrack("jsonp.err", "bat", {
                "type": "error",
                "msg": n.server.url
              })
            }
          };
          return n.loading = !0,
          n.trigger("beforeSend"),
          feloader.getScript(this.server.url, Object.assign(o, {
            "charset": this.server.charset,
            "timeout": this.server.timeout
          })),
          this
        }
        var o = {
          "data": {
            "method": "jsonp",
            "credentials": "include",
            "cache": "default",
            "mode": "cors",
            "timeout": 3e3,
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          "beforeSend": function() {
            n.loading = !0,
            n.trigger("beforeSend")
          },
          "success": function(e) {
            try {
              e = JSON.parse(e.replace(/\x01/g, ""))
            } catch(o) {}
            var a = e ? null: {
              "code": 201
            };
            n.validate(e) ? e = n.parse(e) : a = {
              "code": 201
            },
            n.cache && e && n.saveData(i, e),
            n.trigger("request", {
              "err": a,
              "data": e
            }),
            t && t.call(n, a, e)
          },
          "error": function(e, i) {
            var a = {
              "code": 202,
              "msg": i
            };
            n.trigger("request", {
              "err": a
            }),
            t && t.call(n, a),
            batTrack("jsonp.err", "bat", {
              "type": "error",
              "msg": o.url
            })
          },
          "complete": function() {
            n.loading = !1,
            n.trigger("complete")
          }
        };
        return Object.assign(o, this.server),
        Object.assign(o.data, i),
        l(o.url, o.data).then(function(e) {
          return e.json()
        }).then(function(e) {
          console.log("parsed json", e),
          o.success(e)
        })["catch"](function(e) {
          console.log("parsing failed", e),
          o.error(e, "error")
        }),
        this
      }
    },
    {
      "key": "validate",
      "value": function(e) {
        return ! 0
      }
    },
    {
      "key": "parse",
      "value": function(e) {
        return e
      }
    },
    {
      "key": "saveData",
      "value": function(e, t) {
        try {
          e = JSON.stringify(e);
          var n = this.getCacheList();
          n = n.filter(function(t) {
            return t.key !== e
          }),
          n.push({
            "key": e,
            "data": t,
            "time": (new Date).getTime()
          }),
          n.length > this.cacheSize && n.shift(),
          this.saveCacheList(n)
        } catch(i) {}
      }
    },
    {
      "key": "getData",
      "value": function(e) {
        var t = this;
        try {
          var n = this.getCacheList();
          if (n.length && (e = JSON.stringify(e), n = n.filter(function(n) {
            if (n.key === e && (new Date).getTime() - n.time < t.maxAge) return ! 0
          }), n.length)) return n[0].data
        } catch(i) {}
      }
    },
    {
      "key": "getCacheList",
      "value": function() {
        return this.data[this.server.url] || (this.data[this.server.url] = []),
        this.data[this.server.url]
      }
    },
    {
      "key": "saveCacheList",
      "value": function(e) {
        this.data[this.server.url] = e
      }
    }]),
    e
  } ();
  Object.assign(u.prototype, r),
  n.exports = u
});
define("detail-m/mods/action-bar/fav", ["mui/zepto/zepto", "./index.xtpl", "detail-m/widgets/server/index"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var o = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  a = e("mui/zepto/zepto"),
  u = (e("./index.xtpl"), e("detail-m/widgets/server/index"), {
    "repeat": "\u60a8\u5df2\u7ecf\u6536\u85cf\u8fc7\u4e86\uff0c\u8bf7\u4e0d\u8981\u91cd\u590d\u6536\u85cf",
    "success": "\u6536\u85cf\u6210\u529f",
    "fail": "\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"
  }),
  r = function() {
    function e(t) {
      n(this, e);
      var i = this;
      i.product = t.product || app && app.product,
      i.$el = t.$el,
      i.isFaved = !1,
      i.initView(),
      i.initEvent()
    }
    return o(e, [{
      "key": "initView",
      "value": function() {
        var e = this;
        if (e.$el && e.$el.length > 0) {
          var t = function() {
            e.product.onLoad(["item", "isLogin"],
            function(t, i) {
              i && (lib.mtop.H5Request({
                "api": "com.taobao.mcl.fav.checkcollect",
                "v": "2.0",
                "ttid": "tmalldetail",
                "data": {
                  "favType": 1,
                  "itemId": String(t.itemId)
                }
              },
              function(t) {
                e.isFaved = t.data.isFav,
                e.isFaved && "false" !== e.isFaved && (e.$el.addClass("faved"), a("span", e.$el).text("\u5df2\u6536\u85cf"))
              },
              function(e) {
                batTrack("mtop.fav.check.fail", "mtop.fav.check", {
                  "type": "error"
                })
              }), batTrack("mtop.fav.check", "bat"))
            })
          };
          window.WindVane && window.WindVane.isAvailable ? document.addEventListener("WindVaneReady",
          function(e) {
            t()
          },
          !1) : window.addEventListener("load",
          function() {
            t()
          })
        }
      }
    },
    {
      "key": "initEvent",
      "value": function() {
        var e = this;
        e.$el.on("click",
        function(t) {
          e.product.onLoad(["item", "isLogin"],
          function(t, i) {
            if (!i) return app.login();
            if (app.onLoading(function(e) {
              e.show()
            }), e.isFaved && "false" !== e.isFaved) {
              var n = {
                "itemIds": String(t.itemId),
                "favType": 1
              };
              lib.mtop.H5Request({
                "api": "com.taobao.mcl.fav.delCollects",
                "v": "1.0",
                "data": n,
                "ttid": "tmalldetail"
              },
              function(t) {
                e.isFaved = t.data.isFav,
                e.isFaved && "false" !== e.isFaved || (e.$el.removeClass("faved"), a("span", e.$el).text("\u6536\u85cf")),
                app.onLoading(function(e) {
                  e.hide()
                }),
                goldlog.record("/tmalldetail.lib.fav-add", "CLK", "", "H1480571952")
              },
              function(e) {
                app.onLoading(function(e) {
                  e.hide()
                }),
                app.onToast(function(e) {
                  e.show(u.fail)
                }),
                batTrack("mtop.fav.del.fail", "mtop.fav.del", {
                  "type": "error"
                })
              }),
              batTrack("mtop.fav.del", "bat")
            } else {
              var n = {
                "itemId": String(t.itemId),
                "favType": 1
              };
              lib.mtop.H5Request({
                "api": "com.taobao.mcl.fav.addCollect",
                "v": "2.0",
                "data": n,
                "ttid": "tmalldetail"
              },
              function(t) {
                e.isFaved = !0,
                e.$el.addClass("faved"),
                a("span", e.$el).text("\u5df2\u6536\u85cf"),
                app.onLoading(function(e) {
                  e.hide()
                }),
                goldlog.record("/tmalldetail.lib.fav-add", "CLK", "", "H1480571952")
              },
              function(t) {
                var i = u.fail,
                n = t && t.ret && t.ret[0];
                if (n) if ( - 1 !== n.indexOf("ALREADY_COLLECT")) i = u.repeat,
                e.isFaved = !0,
                e.$el.addClass("faved"),
                a("span", e.$el).text("\u5df2\u6536\u85cf");
                else {
                  if ( - 1 !== n.indexOf("ERR_SID_INVALID")) return app.login();
                  if ( - 1 !== n.indexOf("SESSION_EXPIRED")) return app.login();
                  i = n.split("::")[1] || i
                }
                app.onLoading(function(e) {
                  e.hide()
                }),
                app.onToast(function(e) {
                  e.show(i)
                }),
                batTrack("mtop.fav.add.fail", "mtop.fav.add", {
                  "type": "error"
                })
              }),
              batTrack("mtop.fav.add", "bat")
            }
          })
        })
      }
    }]),
    e
  } ();
  i.exports = r
});
define("detail-m/mods/action-bar/switch", ["mui/zepto/zepto"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var o = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  a = e("mui/zepto/zepto"),
  r = function() {
    function e(t) {
      n(this, e);
      var i = this;
      i.product = t.product,
      i.$el = t.$el,
      i.app = t.app,
      i.init(),
      i.initEvent()
    }
    return o(e, [{
      "key": "init",
      "value": function() {
        var e = this,
        t = e.app.query("ttid") || "",
        i = e.app.env,
        n = navigator.userAgent,
        o = location.href;
        if (t && ( - 1 != t.indexOf("@aligaode_") ? (e._hideShop(), e._hideFav(), e._hideCart()) : -1 == t.indexOf("@alicar_android") && -1 == t.indexOf("@alicar_iphone") || e._hideShop()), i && (i.alihealthApp && (e._hideShop(), e._hideFav(), e._hideWW()), i.tmallApp && e.app.compaticVersion("4.8.0") && e._hideCart()), -1 != n.indexOf("MiniProgram") && -1 != n.indexOf("AlipayClient") && (e._onlyTrade(), e._hideShop(), e._hideFav(), e._hideWW()), ~o.indexOf("miniapp_source=miniapp_brand") || ~o.indexOf("miniapp_source=scan_buy") || ~o.indexOf("ttid=miniapp_brand")) {
          var r = function(e) {
            "undefined" == typeof my ? feloader.getScript("https://appx/web-view.min.js", {
              "success": function() {
                e(my)
              },
              "error": function() {
                e(null)
              }
            }) : e(my)
          }; - 1 !== o.indexOf("scenes=tmallshop") ? a(".toshop span", e.$el).text("\u5e97\u94fa") : a(".toshop span", e.$el).text("\u9996\u9875");
          var u = -1 != n.indexOf("MiniProgram") && -1 != n.indexOf("AlipayClient"),
          d = -1 != n.indexOf("TB"),
          l = -1 != n.indexOf("TM"); (u || d || l) && a("body").append(a('<a class="mini-brand-cart"><img src="//img.alicdn.com/tfs/TB1tA_BH9zqK1RjSZFLXXcn2XXa-180-180.png" /></a>')),
          a(".toshop", e.$el).on("click",
          function(t) {
            if ( - 1 !== o.indexOf("scenes=tmallshop")) {
              var i = a(".toshop", e.$el).attr("href");
              r(function(e) {
                e && (d || l) ? e.postMessage && e.postMessage({
                  "type": "navigateTo",
                  "mode": "outside",
                  "url": i
                }) : location.href = i
              })
            } else r(function(t) {
              var i = t && t.postMessage || null;
              i ? i({
                "type": "popToHome",
                "url": u || d || l ? "/pages/home/home": "pages/home/home"
              }) : location.href = a(".toshop", e.$el).attr("href")
            });
            t.preventDefault(),
            t.stopPropagation()
          }),
          a(".support", e.$el).on("click",
          function(t) {
            r(function(t) {
              if (t) if (d || l) {
                var i = "https:" + a(".support", e.$el).attr("href");
                t.postMessage && t.postMessage({
                  "type": "navigateTo",
                  "mode": "outside",
                  "url": i
                })
              } else location.href = a(".support", e.$el).attr("href");
              else location.href = a(".support", e.$el).attr("href")
            }),
            t.preventDefault(),
            t.stopPropagation()
          }),
          a(".mini-brand-cart").on("click",
          function() {
            e.product.onChange(["item"],
            function(e) {
              goldlog.record("/tmalldetail.lib.cart-link", "EXP", "type=miniapp_brand&itemId=" + e.itemId, "GET")
            }),
            r(function(e) {
              e.navigateTo({
                "url": u || d || l ? "/pages/webview-cart/index": "pages/webview-cart/index"
              })
            })
          }),
          app.goldlog("tmalldetail.lib.minibrandexp", {
            "source": app.query("miniapp_source"),
            "store_id": app.query("store_id")
          },
          "GET", "EXP")
        }
      }
    },
    {
      "key": "initEvent",
      "value": function() {
        var e = this;
        e.product.onChange(["actionBar", "feature"],
        function(t, i) {
          t && (t.hideActionBar && e._hideActionBar(), t.hideWW && e._hideWW(), t.hideShop && e._hideShop(), t.hideFav && e._hideFav(), t.hideTrade && e._hideTrade(), t.hideCartLink && e._hideCart(), t.cartLink && e._cartLink(t.cartLink), t.shopLink && e._shopLink(t.shopLink)),
          i && i.hideFavLink && e._hideFav()
        })
      }
    },
    {
      "key": "_hideActionBar",
      "value": function() {
        a(this.$el).hide()
      }
    },
    {
      "key": "_hideCart",
      "value": function() {
        a(".cart-link", this.$el).css("visibility", "hidden")
      }
    },
    {
      "key": "_hideWW",
      "value": function() {
        a(".support", this.$el).hide()
      }
    },
    {
      "key": "_hideShop",
      "value": function() {
        a(".toshop", this.$el).hide()
      }
    },
    {
      "key": "_hideFav",
      "value": function() {
        a(".addfav", this.$el).hide()
      }
    },
    {
      "key": "_hideTrade",
      "value": function() {
        a(".trade", this.$el).hide()
      }
    },
    {
      "key": "_cartLink",
      "value": function(e) {
        a(".cart-link", this.$el).attr("href", e)
      }
    },
    {
      "key": "_shopLink",
      "value": function(e) {
        a(".toshop", this.$el).attr("href", e)
      }
    },
    {
      "key": "_onlyTrade",
      "value": function() {
        a(this.$el).addClass("onlyTrade")
      }
    }]),
    e
  } ();
  i.exports = r
});
define("detail-m/mods/action-bar/mods", ["mui/zepto/zepto"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var o = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  a = e("mui/zepto/zepto"),
  u = function() {
    console.log("\u7981\u7528\u70b9\u51fb")
  },
  r = function() {
    function t(e) {
      n(this, t),
      this.$el = e.$el,
      this.app = e.app,
      this.product = e.product,
      this.modNum = 0,
      this.renderMods()
    }
    return o(t, [{
      "key": "initValidator",
      "value": function(e) {
        app.product.update("feTrade", {
          "load": function(t, i) {
            e < 1 ? (t.buyClick === u ? t.buyClick = null: t.buyClick, t.cartClick === u ? t.cartClick = null: t.cartClick, t = Object.assign({},
            t), i(t)) : (t.buyClick ? t.buyClick: t.buyClick = u, t.cartClick ? t.cartClick: t.cartClick = u, t = Object.assign({},
            t), i(t))
          }
        })
      }
    },
    {
      "key": "renderMods",
      "value": function() {
        var e = this;
        app.product.onLoad(["modules", "traceDatas"],
        function(t, i) {
          var n = [],
          o = [];
          t.forEach(function(t, i) {
            if (0 == t.key.indexOf("detail-mods") && t.version && "action" === t.groupId) {
              var a = t.key.replace(/^(.+\/.+)\/.+$/, "$1");
              if (!feloader.Config.packages[a] || 0 == a.indexOf("detail-mods")) {
                var u = {},
                r = app.getWhSeedVersion(a) || t.version;
                u[a] = {
                  "path": "//g.alicdn.com/" + a + "/" + r + "/",
                  "name": a,
                  "version": r,
                  "ignorePackageNameInUri": !0
                },
                window.require.config({
                  "packages": u
                })
              }
              n.push(t.key + ".xtpl"),
              o.push(t),
              e.initValidator(++e.modNum)
            }
          }),
          window.require(n,
          function() {
            for (var t = arguments.length,
            u = Array(t), r = 0; r < t; r++) u[r] = arguments[r];
            u.forEach(function(t, u) {
              var r = o[u] || {},
              d = (r.data, /([^\/]+)\/(.+).xtpl$/.exec(n[u]) || []),
              l = d[2],
              s = i[l] && JSON.stringify(i[l]) || "",
              m = "";
              try {
                m = t()
              } catch(c) {
                console.log('render "' + n[u] + '" error'),
                batTrack("mods.action.render.err", "mods.init", {
                  "type": "error",
                  "msg": 'render "' + n[u] + '" error'
                })
              }
              a('<div class="module-action-wrap "data-exp="' + s + '" data-module="' + (d[2] || "") + '">\n' + m + "\n</div>").appendTo(e.$el)
            }),
            e.initMods()
          },
          function(t) {
            e.initMods(),
            batTrack("mods.action.require.err", "mods.init", {
              "type": "error",
              "msg": t.error.exception
            })
          }),
          n.length || e.initMods()
        })
      }
    },
    {
      "key": "initMods",
      "value": function() {
        var t = this,
        i = a("div[data-mod-action-name]", this.$el);
        t.initValidator(0),
        i.length && i.forEach(function(t, i) {
          e([a(t).attr("data-mod-action-name")],
          function(e) {
            "function" == typeof e && (e(t, JSON.parse(decodeURI(a(t).attr("data-config") || a(t).parent().attr("data-config") || "{}")), app), batTrack("init." + (a(t).parent().attr("data-module") || "action"), "mods.init"))
          })
        })
      }
    }]),
    t
  } ();
  i.exports = r
});
define("detail-m/mods/action-bar/index", ["mui/zepto/zepto", "detail-m/mods/trade/index", "detail-m/mods/action-bar/banner", "detail-m/mods/action-bar/fav", "detail-m/mods/action-bar/switch", "./mods"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var o = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  a = e("mui/zepto/zepto"),
  u = e("detail-m/mods/trade/index"),
  r = e("detail-m/mods/action-bar/banner"),
  d = e("detail-m/mods/action-bar/fav"),
  l = e("detail-m/mods/action-bar/switch"),
  s = e("./mods"),
  m = function() {
    function e(t) {
      n(this, e);
      var i = this;
      i.product = t,
      i.app = app,
      i.$el = a("#s-actionBar-container"),
      this.init()
    }
    return o(e, [{
      "key": "init",
      "value": function() {
        var e = this;
        e.trade = new u({
          "product": e.product,
          "type": "index",
          "$el": a("#s-actionBar-container .trade")
        }),
        e.mods = new s({
          "product": e.product,
          "app": e.app,
          "$el": a(".mods-wrap", e.$el)
        });
        new r(e.product),
        new l({
          "product": e.product,
          "app": e.app,
          "$el": e.$el
        }),
        new d({
          "product": e.product,
          "$el": a("#s-actionBar-container .addfav")
        });
        e.app.product.onLoad(["scene", "seller"],
        function(e, t) {
          e && "tmall" !== e && (a("#s-actionBar-container .toshop").attr("href", t.shopUrl), a("#s-actionBar-container .support").attr("href", t.wwUrl))
        }),
        ~navigator.userAgent.indexOf("AliApp(ET") && a(".support", e.$el).attr("target", "")
      }
    }]),
    e
  } ();
  i.exports = m
});
define("detail-m/model/model",
function(e, i, t) {
  function n(e, i) {
    if (! (e instanceof i)) throw new TypeError("Cannot call a class as a function")
  }
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
  function(e) {
    return typeof e
  }: function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
  },
  a = function() {
    function e(e, i) {
      for (var t = 0; t < i.length; t++) {
        var n = i[t];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(i, t, n) {
      return t && e(i.prototype, t),
      n && e(i, n),
      i
    }
  } (),
  u = function() {
    function e() {
      n(this, e),
      this._modDef = [],
      this._modMap = {},
      this._children = {}
    }
    return a(e, [{
      "key": "add",
      "value": function(i, t) {
        t = t || {},
        t.value !== undefined ? this._addModel(i, e._createModel(function(e) {
          e(t.value)
        })) : t.load && this._addModel(i, e._createModel(function(e) {
          t.load(function(i) {
            e(i)
          })
        }))
      }
    },
    {
      "key": "update",
      "value": function(i, t) {
        var n = void 0;
        t = t || {},
        (n = this._getModel(i)) && (t.load ? n.then(function(i) {
          t.load(e._clone(i),
          function(t) { ! e._isEqual(i, t) && n.resolve(t)
          })
        },
        "", {
          "once": !0
        }) : t.value !== undefined && n.then(function(i) { ! e._isEqual(i, t.value) && n.resolve(t.value)
        },
        "", {
          "once": !0
        }))
      }
    },
    {
      "key": "onLoad",
      "value": function(e, i) {
        this.onChange(e, i, {
          "once": !0
        })
      }
    },
    {
      "key": "onChange",
      "value": function(i, t, n) {
        var o = this;
        if (Array.isArray(i)) {
          var a = i.map(function(e) {
            return o._getModel(e)
          });
          e._all(a, n).then(function(e) {
            t.apply(null, e)
          },
          null, n)
        } else {
          var u = this._getModel(i);
          u && u.then(function(e) {
            t(e)
          },
          null, n)
        }
      }
    },
    {
      "key": "onMap",
      "value": function(e, i, t, n) {
        if (Array.isArray(e)) {
          var o = [];
          e.map(function(a, u) {
            a.onLoad(i,
            function() {
              o[u] = t.apply(a, arguments),
              u === e.length - 1 && n(o)
            })
          })
        } else {
          var a = {};
          e.onLoad(i,
          function() {
            a = t.apply(model, arguments),
            n(a)
          })
        }
      }
    },
    {
      "key": "_map",
      "value": function(e) {
        return e && void 0 !== e && "boolean" != typeof e && "number" != typeof e && "string" != typeof e ? [e, "_dm_Mod"] : [this._modMap, e]
      }
    },
    {
      "key": "_addModel",
      "value": function(e, i, t) {
        function n(e) {
          return "string" == typeof e.filter ? 8 : e.filter.test ? 5 : 2
        }
        var o = this._modDef;
        return e && i ? (o.push({
          "filter": e,
          "creator": i,
          "level": t || 0
        }), o.sort(function(e, i) {
          return e.level != i.level ? e.level - i.level: n(e) - n(i)
        }), this) : this
      }
    },
    {
      "key": "_getModel",
      "value": function(e) {
        var i = this,
        t = this._map(e),
        n = this._modDef;
        return t[0][t[1]] || (t[0][t[1]] = function() {
          var t = i._children[e];
          if (t && t.child) return t.child()._getModel("out");
          if (t && t.process) return t.process();
          for (var o = n.length - 1; o >= 0; o--) {
            var a = void 0,
            u = !1,
            d = n[o],
            r = d.filter;
            if ("function" == typeof r ? a = r(e) : !r || "function" != typeof r.test || r instanceof RegExp && "string" != typeof e ? "boolean" == typeof r ? a = r: (a = r === e, u = !0) : a = r.test(e), a) return u && n.splice(o, 1),
            d.creator.then ? d.creator: d.creator(e)
          }
          return null
        } ())
      }
    }], [{
      "key": "_createModel",
      "value": function(i, t) {
        var n = void 0,
        o = void 0,
        a = [],
        u = {};
        t = t || {},
        t.preload && i && (o = !0, i(d.resolve));
        var d = {
          "resolve": function(e, i) {
            if (e !== undefined) {
              n = e,
              u = i || {};
              for (var t = 0,
              o = a.length; t < o; t++) {
                var d = a[t],
                r = d.handle; (u.last || d.getParams.once) && (a.splice(t, 1), t--, o--),
                r(n)
              }
            }
          },
          "then": function(t, r, l) {
            function s(i, n) {
              var o = void 0;
              try {
                o = t ? t(i) : i
              } catch(u) {
                return r && r(u),
                void setTimeout(function() {
                  throw u
                },
                0)
              }
              if (o && o.then) c != o && (c = o, o.then(function(i, t) {
                c == o && m.resolve(i, e._mix(e._mix({},
                t), {
                  "last": !1
                }))
              }));
              else {
                var a = e._mix(e._mix({},
                n));
                o = o === undefined ? i: o,
                m.resolve(o, a)
              }
            }
            l = l || {};
            l.passive || o || !i || (o = !0, i(d.resolve));
            var m = e._createModel(),
            c = void 0;
            if (n !== undefined) {
              var p = e._mix(e._mix({},
              u));
              s(n, p),
              (l.once || u.last) && (s = null)
            }
            return s && a.push({
              "handle": s,
              "getParams": l
            }),
            m
          }
        };
        return d
      }
    },
    {
      "key": "_all",
      "value": function(i, t) {
        return i && i.length ? 1 === i.length ? e._createBridge(function() {
          return i[0].then(function(e) {
            return [e]
          })
        }) : e._createModel(function(e) {
          function n(i, t, n) {
            for (a[t] = i, u = a.length - 1; u >= 0 && a[u] !== undefined; u--);
            u < 0 && e(a)
          }
          function o(e, i) {
            if (!e) return void n(null, i, {
              "last": !0
            });
            e.then(function(e, t) {
              n(e, i, t)
            },
            function(e, t) {
              n(e, i, t)
            },
            t)
          }
          for (var a = new Array(i.length), u = void 0, d = 0; d < i.length; d++) o(i[d], d)
        }) : e._createLiteral([])
      }
    },
    {
      "key": "_createLiteral",
      "value": function(i) {
        return e._createModel(function(e) {
          e(i, {
            "last": !0
          })
        })
      }
    },
    {
      "key": "_createBridge",
      "value": function(i) {
        return e._createModel(function(e) {
          return i().then(e)
        })
      }
    },
    {
      "key": "_isEqual",
      "value": function(e, i) {
        var t = this;
        if (e === i) return ! 0;
        if ((void 0 === e ? "undefined": o(e)) != (void 0 === i ? "undefined": o(i))) return ! 1;
        if ("object" === (void 0 === e ? "undefined": o(e))) {
          if (!e || !i) return e === i;
          if (e.constructor !== i.constructor) return ! 1;
          var n = !0;
          if (Array.isArray(e)) {
            if (e.length != i.length) return ! 1;
            for (var a = 0; a < e.length; ++a) if (! (n = o(e[a]) == o(i[a]) && ("object" === o(e[a]) ? t._isEqual(e[a], i[a]) : e[a] === i[a]))) return ! 1
          } else if ("[object Object]" === Object.prototype.toString.call(e)) {
            var u = 0,
            d = 0;
            for (var r in e) if (e.hasOwnProperty(r) && (n = "object" === o(e[r]) && "object" === o(i[r]) ? t._isEqual(e[r], i[r]) : e[r] === i[r], u++, !n)) return ! 1;
            if (n) {
              for (var l in i) i.hasOwnProperty(l) && d++;
              if (u != d) return ! 1
            }
          }
          return n
        }
        return e === i
      }
    },
    {
      "key": "_clone",
      "value": function(i) {
        var t = void 0;
        if ("object" === (void 0 === i ? "undefined": o(i))) if (null === i) t = null;
        else if (i instanceof Array) {
          t = [];
          for (var n = 0,
          a = i.length; n < a; n++) t.push(i[n])
        } else {
          t = {};
          for (var u in i) t[u] = e._clone(i[u])
        } else t = i;
        return t
      }
    },
    {
      "key": "_mix",
      "value": function(e, i) {
        for (var t in i) i.hasOwnProperty(t) && (e[t] = i[t]);
        return e
      }
    }]),
    e
  } ();
  t.exports = u
});
define("detail-m/model/bundleItem", ["./model"],
function(e, i, t) {
  function o(e) {
    return e && e.__esModule ? e: {
      "default": e
    }
  }
  function d(e, i) {
    if (! (e instanceof i)) throw new TypeError("Cannot call a class as a function")
  }
  function m(e, i) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return ! i || "object" != typeof i && "function" != typeof i ? e: i
  }
  function u(e, i) {
    if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function, not " + typeof i);
    e.prototype = Object.create(i && i.prototype, {
      "constructor": {
        "value": e,
        "enumerable": !1,
        "writable": !0,
        "configurable": !0
      }
    }),
    i && (Object.setPrototypeOf ? Object.setPrototypeOf(e, i) : e.__proto__ = i)
  }
  var n = function() {
    function e(e, i) {
      for (var t = 0; t < i.length; t++) {
        var o = i[t];
        o.enumerable = o.enumerable || !1,
        o.configurable = !0,
        "value" in o && (o.writable = !0),
        Object.defineProperty(e, o.key, o)
      }
    }
    return function(i, t, o) {
      return t && e(i.prototype, t),
      o && e(i, o),
      i
    }
  } (),
  a = e("./model"),
  r = o(a),
  s = function(e) {
    function i(e, t, o) {
      d(this, i);
      var u = m(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
      return u.initModel(e, t, o),
      u.initSub2Parent(),
      u
    }
    return u(i, e),
    n(i, [{
      "key": "initModel",
      "value": function(e, i, t) {
        var o = this;
        o.add("itemData", {
          "load": function(i) {
            i(e)
          }
        }),
        o.add("bundleSkuMap", {
          "load": function(e) {
            e(i)
          }
        }),
        o.add("parent", {
          "load": function(e) {
            e(t)
          }
        }),
        o.add("skuList", {
          "load": function(e) {
            o.onLoad(["skuBase"],
            function(i) {
              var t = {
                "data": []
              };
              i && i.props && i.props.forEach(function(e, i) {
                var o = {
                  "name": e.name,
                  "list": []
                }; (e.values || []).forEach(function(i, t) {
                  var d = {
                    "label": i.name,
                    "value": e.pid + ":" + i.vid,
                    "isSelected": !1
                  };
                  i.image && (d.image = i.image),
                  o.list.push(d)
                }),
                t.data.push(o)
              }),
              e(t)
            })
          }
        }),
        o.add("skuBase", {
          "load": function(e) {
            o.onLoad("itemData",
            function(i) {
              e(i.skuBase || null)
            })
          }
        }),
        o.add("skuCore", {
          "load": function(e) {
            o.onLoad("itemData",
            function(i) {
              e(i.skuCore || null)
            })
          }
        }),
        o.add("skuProps", {
          "load": function(e) {
            o.onLoad("skuBase",
            function(i) {
              e(i && i.props || null)
            })
          }
        }),
        o.add("skuMaps", {
          "load": function(e) {
            o.onLoad("skuBase",
            function(i) {
              e(i && i.skus || null)
            })
          }
        }),
        o.add("sku2info", {
          "load": function(e) {
            o.onLoad("skuCore",
            function(i) {
              e(i && i.sku2info || null)
            })
          }
        }),
        o.add("selectedSkuProp", {
          "load": function(e) {
            e({}),
            o.onLoad(["skuMaps", "skuProps"],
            function(e, i) {
              if (e && 1 === e.length) {
                var t = e[0].propPath.split(";");
                t && t.forEach(function(e) {
                  o.selectSkuProp(e)
                })
              } else i && i.forEach(function(e) {
                e && e.values && 1 == e.values.length && o.selectSkuProp(e.pid.toString(), e.values[0].vid.toString())
              })
            })
          }
        }),
        o.add("selectedSku", {
          "load": function(e) {
            o.onChange(["selectedSkuProp", "selectedSkuList"],
            function(i, t) {
              if (!t || 0 === t.length) return void e(null);
              if (1 != t.length) return void e(null);
              var o = t[0].propPath.split(";"),
              d = o.every(function(e) {
                var t = e.split(":");
                return i[t[0]] === t[1]
              });
              e(d ? t[0] : null)
            })
          }
        }),
        o.add("selectedSkuList", {
          "load": function(e) {
            o.onChange("selectedSkuProp",
            function(i) {
              o.onSkuList(i, e)
            })
          }
        }),
        o.add("selectedSkuCoreInfo", {
          "load": function(e) {
            o.onChange(["sku2info", "selectedSku"],
            function(i, t) {
              if (t && t.skuId) {
                var o = i[t.skuId];
                return o = o || i[0],
                void e({
                  "quantity": o.quantity
                })
              }
              e({
                "quantity": i && i[0] ? i[0].quantity: null
              })
            })
          }
        }),
        o.add("skuSummary", {
          "load": function(e) {
            o.onChange(["skuProps", "selectedSkuProp", "selectedSkuCoreInfo", "itemData"],
            function(i, t, o, d) {
              var m = [],
              u = [],
              n = [];
              i && i.some(function(e) {
                if (t && t[e.pid]) {
                  for (var i = !1,
                  o = 0; o < e.values.length; o++) e.values[o].vid == t[e.pid] && (i = !0, m.push(e.values[o].name));
                  i || m.push(e.name)
                } else u.push(e.name)
              }),
              0 !== u.length ? n = ["\u8bf7\u9009\u62e9:"].concat(u) : 0 !== m.length && (n = ["\u5df2\u9009\u62e9:"].concat(m)),
              e({
                "image": d.itemImages.mainImage,
                "price": o.price,
                "quantity": o.quantity,
                "selectInfo": n,
                "unSelectedTextArr": u,
                "selectedTextArr": m
              })
            })
          }
        }),
        o.add("currentInventory", {
          "load": function(e) {
            o.onChange(["selectedSku"],
            function(i) {
              o.onInventory(i && i.skuId, e)
            })
          }
        })
      }
    },
    {
      "key": "initSub2Parent",
      "value": function() {
        var e = this;
        e.onLoad(["parent", "bundleSkuMap"],
        function(i, t) {
          i.onLoad("subItems",
          function(o) {
            e.onChange(["selectedSku"],
            function() {
              e.onMap(o, ["itemData", "selectedSku"],
              function(e, i) {
                return {
                  "itemId": e.itemId,
                  "hasSku": !(!e.skuBase || !e.skuBase.skus),
                  "skuId": i && i.skuId
                }
              },
              function(e) {
                var o = "",
                d = !0;
                for (var m in e) if (e[m].hasSku && e[m].skuId) o += 0 != m ? "~" + e[m].itemId + "." + e[m].skuId: e[m].itemId + "." + e[m].skuId;
                else {
                  if (e[m].hasSku) {
                    d = !1;
                    break
                  }
                  o += 0 != m ? "~" + e[m].itemId: e[m].itemId
                }
                d ? i.selectSkuId(t[o] ? t[o] : null) : i.selectSkuId(null)
              })
            })
          })
        })
      }
    },
    {
      "key": "onSkuList",
      "value": function(e, i) {
        this.onLoad(["skuMaps"],
        function(t) {
          var o = [];
          if (!e || !t || 0 == t.length) return void i(null);
          for (var d in t) {
            var m = !0;
            for (var u in e) if (e.hasOwnProperty(u)) {
              var n = u + ":" + e[u];
              if ( - 1 === t[d].propPath.indexOf(n)) {
                m = !1;
                break
              }
            }
            m && o.push(t[d])
          }
          i(o)
        })
      }
    },
    {
      "key": "onInventory",
      "value": function(e, i) {
        e ? this.onLoad(["sku2info", "skuMaps"],
        function(t, o) {
          i(t[e])
        }) : i({})
      }
    },
    {
      "key": "selectSkuProp",
      "value": function(e, i, t) {
        if (e.indexOf(":") >= 0) {
          var o = e.split(":", 2);
          e = o[0],
          i = o[1]
        }
        var d = this;
        d.canSelectSkuProp(e, i,
        function(o) {
          if (o <= 0) return void(t && d.onLoad("selectedSkuProp",
          function(o) {
            for (var m in o) m && d.deselectSkuProp(m, "",
            function() {
              d.selectSkuProp(e, i, t)
            })
          }));
          d.onLoad(["selectedSkuProp", "selectedSku"],
          function(t, o) {
            if (t[e] != i) {
              var m = {};
              Object.assign(m, t),
              m[e] = i,
              d.update("selectedSkuProp", {
                "value": m
              })
            }
          })
        })
      }
    },
    {
      "key": "deselectSkuProp",
      "value": function(e, i, t) {
        if (e.indexOf(":") >= 0) {
          var o = e.split(":", 2);
          e = o[0],
          i = o[1]
        }
        var d = this;
        d.onLoad("selectedSkuProp",
        function(o) {
          if (!o || !o[e] || i && o[e] != i) return void(t && t());
          var m = {};
          Object.assign(m, o),
          delete m[e],
          d.update("selectedSkuProp", {
            "value": m
          }),
          t && t()
        })
      }
    },
    {
      "key": "canSelectSkuProp",
      "value": function(e, i, t, o) {
        function d(e) {
          if (o.ignoreSelection) return void e({});
          u.onLoad("selectedSkuProp", e)
        }
        if (o = o || {},
        e.indexOf(":") >= 0) {
          var m = e.split(":", 2);
          e = m[0],
          i = m[1]
        }
        if (!i) return void t(0);
        var u = this;
        d(function(o) {
          if (o[e] == i) return void t(1);
          var d = Object.assign({},
          o);
          d[e] = i,
          u.onLoad(["parent"],
          function(e) {
            u.onParentSkuList(d,
            function(i) {
              if (i) {
                var o = Object.keys(i).length;
                if (!o) return void t( - 1);
                for (var d in i) {
                  if (o < 0) return;
                  e.onInventory(i[d].skuId,
                  function(e) {
                    if (e.quantity > 0 || null === e.quantity) return t(1),
                    void(o = -1);
                    0 == --o && t(0)
                  })
                }
              }
            })
          })
        })
      }
    },
    {
      "key": "onParentSkuList",
      "value": function(e, i) {
        this.onLoad(["skuMaps", "parent", "itemData", "bundleSkuMap"],
        function(t, o, d, m) {
          var u = [],
          n = {};
          if (!e || !t || 0 == t.length) return void i(null);
          for (var a in t) {
            var r = !0;
            for (var s in e) if (e.hasOwnProperty(s)) {
              var l = s + ":" + e[s];
              if ( - 1 === t[a].propPath.indexOf(l)) {
                r = !1;
                break
              }
            }
            r && u.push(t[a])
          }
          for (var p in m) {
            var c = !1;
            for (var s in u) if (new RegExp(d.itemId + "." + u[s].skuId).test(p)) {
              c = !0;
              break
            }
            c && (n[p] = {
              "skuId": m[p]
            })
          }
          i(n)
        })
      }
    }]),
    i
  } (r["default"]);
  t.exports = s
});
define("detail-m/model/index", ["./model", "./bundleItem", "mui/fetch/jsonp", "mui/fetch/tool", "mui/custom-event/index"],
function(e, i, t) {
  function n(e) {
    return e && e.__esModule ? e: {
      "default": e
    }
  }
  function o(e, i) {
    if (! (e instanceof i)) throw new TypeError("Cannot call a class as a function")
  }
  function a(e, i) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return ! i || "object" != typeof i && "function" != typeof i ? e: i
  }
  function u(e, i) {
    if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function, not " + typeof i);
    e.prototype = Object.create(i && i.prototype, {
      "constructor": {
        "value": e,
        "enumerable": !1,
        "writable": !0,
        "configurable": !0
      }
    }),
    i && (Object.setPrototypeOf ? Object.setPrototypeOf(e, i) : e.__proto__ = i)
  }
  function d(e) {
    var i, t, n, o = [];
    return function(a, u) {
      return 0 === u || u || (u = 1),
      1 & u && !t && (t = !0, e(function(e) {
        for (i = e; n = o.shift();) n && n.apply(null, [i])
      })),
      i !== undefined ? (a && a.apply(null, [i]), i) : (2 & u || a && o.push(a), i)
    }
  }
  var r = function() {
    function e(e, i) {
      for (var t = 0; t < i.length; t++) {
        var n = i[t];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(i, t, n) {
      return t && e(i.prototype, t),
      n && e(i, n),
      i
    }
  } (),
  l = e("./model"),
  s = n(l),
  m = e("./bundleItem"),
  c = n(m),
  p = e("mui/fetch/jsonp"),
  f = n(p),
  x = e("mui/fetch/tool"),
  v = n(x),
  g = e("mui/custom-event/index"),
  h = (n(g),
  function(i) {
    function t(e, i, n) {
      o(this, t);
      var u, d = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return e.ModuleDatas ? (u = e.ModuleDatas, u.traceDatas = e.traceDatas, u.detailDesc = e.DetailDesc) : u = e,
      d.initModel(u, i, n),
      d
    }
    return u(t, i),
    r(t, [{
      "key": "initModel",
      "value": function(e, i, t) {
        var n = this;
        n.add("detailData", {
          "value": e || {}
        }),
        n.add("skipData", {
          "value": i || e && e.mock || {}
        }),
        n.add("scene", {
          "value": t || "tmall"
        }),
        n.add("wData", {
          "load": function(e) {
            n.onLoad(["skipData", "detailData"],
            function(i, t) {
              e(Object.assign({},
              t, i))
            })
          }
        }),
        n.add("juData", {
          "load": function(e) {
            n.onLoad("skipData",
            function(i) {
              e(i.juData || {})
            })
          }
        }),
        n.update("skipData", {
          "load": function(e, i) {
            e.skuCore || n.onLoad(["detailData"],
            function(e) {
              var t = {};
              try {
                t = e.mock
              } catch(n) {
                i(t)
              }
              i(t)
            });
            var t = v["default"].unparam(location.href.split("?")[1]);
            t && t.querySkip && n.onLoad("detailData",
            function(e) {
              setTimeout(function() {
                n.querySkip(t,
                function() {})
              },
              0)
            })
          }
        }),
        n.add("detailDesc", {
          "load": function(e) {
            n.onLoad(["detailData"],
            function(i) {
              e(i.detailDesc || {})
            })
          }
        }),
        n.add("item", {
          "load": function(e) {
            n.onChange(["detailData", "skipData"],
            function(i, t) {
              e(Object.assign({},
              i.item, t.item))
            })
          }
        }),
        n.add("buyer", {
          "load": function(e) {
            n.onLoad(["skipData"],
            function(i) {
              e(Object.assign({},
              i.buyer))
            })
          }
        }),
        n.add("modules", {
          "load": function(e) {
            n.onLoad(["detailData", "skipData"],
            function(i, t) {
              e(t.modules && t.modules.length > 0 ? t.modules: i.modules && i.modules.enable && i.modules.modules || [])
            })
          }
        }),
        n.add("price", {
          "load": function(e) {
            n.onChange("skipData",
            function(i) {
              e(i.price || {})
            })
          }
        }),
        n.add("delivery", {
          "load": function(e) {
            n.onChange(["skipData", "item"],
            function(i, t) {
              var n = i.delivery || {};
              n.sellCount = t.sellCount,
              e(n)
            })
          }
        }),
        n.add("soldArea", {
          "load": function(e) {
            n.onChange("skipData",
            function(i) {
              var t = i.addressData || {};
              e(t)
            })
          }
        }),
        n.add("seller", {
          "load": function(e) {
            n.onLoad("detailData",
            function(i) {
              e(i.seller || {})
            })
          }
        }),
        n.add("skuBase", {
          "load": function(e) {
            n.onLoad(["skipData", "detailData"],
            function(i, t) {
              e(Object.assign({},
              t.skuBase, i.skuBase))
            })
          }
        }),
        n.add("skuCore", {
          "load": function(e) {
            n.onChange(["skipData"],
            function(i) {
              e(i.skuCore || {})
            })
          }
        }),
        n.add("vertical", {
          "load": function(e) {
            n.onChange("skipData",
            function(i) {
              e(i.vertical || {})
            })
          }
        }),
        n.add("rate", {
          "load": function(e) {
            n.onLoad("detailData",
            function(i) {
              e(i.rate || null)
            })
          }
        }),
        n.add("askAll", {
          "load": function(e) {
            n.onLoad("vertical",
            function(i) {
              e(i.askAll || {})
            })
          }
        }),
        n.add("jumpUrl", {
          "load": function(e) {
            n.onLoad(["detailData"],
            function(i) {
              e(i.jumpUrl ? i.jumpUrl: {})
            })
          }
        }),
        n.add("tags", {
          "load": function(e) {
            n.onLoad(["detailData"],
            function(i) {
              e(i.tags.enable ? i.tags.tags: {})
            })
          }
        }),
        n.add("consumerProtection", {
          "load": function(e) {
            n.onLoad(["skipData"],
            function(i) {
              e(i.consumerProtection || {})
            })
          }
        }),
        n.add("feature", {
          "load": function(e) {
            n.onChange(["skipData"],
            function(i) {
              e(i.feature || {})
            })
          }
        }),
        n.add("systemTime", {
          "load": function(e) {
            n.onLoad(["skipData"],
            function(i) {
              e((new Date).getTime() - (g_config.data_start || 0) + (i.otherInfo ? i.otherInfo.systemTime - 0 : (new Date).getTime()) + 100)
            })
          }
        }),
        n.add("disabledItem", {
          "load": function(e) {
            n.onChange(["skipData"],
            function(i) {
              e(i.vertical ? i.vertical.disabledItem || null: null)
            })
          }
        }),
        n.add("totalQuantity", {
          "load": function(e) {
            n.onLoad(["sku2info"],
            function(i) {
              e(i[0].quantity || 0)
            })
          }
        }),
        n.add("limitInfo", {
          "load": function(e) {
            n.onChange(["selectedSkuCoreInfo", "skuItem", "selectedBuyPattern", "selectedSkuPattern", "3rdExtraInfo"],
            function(i, t, n, o, a) {
              var u = [i, n, o, a && a.amount ? {
                "limit": a.amount
              }: {}];
              u = u.sort(function(e, i) {
                return e.limit && i.limit ? e.limit < i.limit ? -1 : 1 : i.limit ? 1 : -1
              }),
              console.log(u),
              e({
                "quantity": i.quantity,
                "limit": u[0].limit,
                "limitText": u[0].limitText || (u[0].limit ? "\u6bcf\u4eba\u9650\u8d2d" + u[0].limit + "\u4ef6": ""),
                "unitBuy": t && t.unitBuy || 1,
                "unitBuyText": t && t.unitBuy ? "\u4ec5\u652f\u6301" + t.unitBuy + "\u500d\u8d2d\u4e70": ""
              })
            })
          }
        }),
        n.add("moduleScene", {
          "load": function(e) {
            n.onLoad(["skipData"],
            function(i) {
              e(i.layout && i.layout.moduleScene || {})
            })
          }
        }),
        n.add("globalSell", {
          "load": function(e) {
            n.onLoad(["skipData"],
            function(i) {
              e(i.otherInfo.systemTime || (new Date).getTime())
            })
          }
        }),
        n.add("certification", {
          "load": function(e) {
            n.onLoad(["skipData"],
            function(i) {
              e(i.certification || null)
            })
          }
        }),
        n.add("jhs", {
          "load": function(e) {
            n.onLoad(["skipData"],
            function(i) {
              e(i.vertical ? i.vertical.jhs || {}: {})
            })
          }
        }),
        n.add("meiLiHui", {
          "load": function(e) {
            n.onLoad(["skipData"],
            function(i) {
              e(i.vertical ? i.vertical.meiLiHui || {}: {})
            })
          }
        }),
        n.add("pinTuan", {
          "load": function(e) {
            n.onLoad(["skipData"],
            function(i) {
              e(i.vertical ? i.vertical.pinTuan || null: null)
            })
          }
        }),
        n.add("pinTuanInfo", {
          "load": function(e) {
            n.onLoad(["skipData"],
            function(i) {
              e(i.resource && i.resource.entrances ? i.resource.entrances.pinTuanInfo || null: null)
            })
          }
        }),
        n.add("pricedCoupon", {
          "load": function(e) {
            n.onLoad(["skipData"],
            function(i) {
              e(i.resource && i.resource.entrances ? i.resource.entrances.pricedCoupon || null: null)
            })
          }
        }),
        n.add("areaId", {
          "load": function(e) {
            n.onChange(["delivery"],
            function(i) {
              e(i.areaId || null)
            })
          }
        }),
        n.add("addressId", {
          "load": function(e) {
            n.onLoad(["trade"],
            function(i) {
              e(i && i.buyParam && i.buyParam.addressId || null)
            })
          }
        }),
        n.add("userInfo", {
          "load": function(e) {
            n.onChange("skipData",
            function(i) {
              var t = i && i.userInfo;
              e(t && !1 !== t.success ? t: null)
            })
          }
        }),
        n.add("isLogin", {
          "load": function(e) {
            n.onChange("userInfo",
            function(i) {
              i && i.userId !== undefined ? e(i.userId > 0 ? !0 : !1) : window.Ali && Ali.isLogin(function(i) {
                e(i.isLogin ? !0 : null)
              })
            })
          }
        }),
        n.add("traceDatas", {
          "load": function(e) {
            n.onLoad("detailData",
            function(i) {
              e(i.traceDatas || {})
            })
          }
        }),
        n.add("currentPriceInfo", {
          "load": function(e) {
            n.onChange("selectedSkuCoreInfo",
            function(i) {
              e({
                "value": i.price.priceMoney,
                "priceText": i.price.priceText
              })
            })
          }
        }),
        n.add("buyPrice", {
          "load": function(e) {
            n.onChange(["currentPriceInfo", "3rdExtraInfo"],
            function(i, t) {
              var n = t && t.price && Number(t.price, 10);
              if (n) return e({
                "value": (100 * n).toFixed(2),
                "priceText": n + ""
              });
              e({
                "value": i.value,
                "priceText": i.priceText
              })
            })
          }
        }),
        n.add("servicePrice", {
          "load": function(e) {
            n.onChange(["selectedService", "currentService", "3rdExtraInfo"],
            function(i, t, n) {
              var o = n && n.servicePrice && 100 * Number(n.servicePrice, 10);
              if (o) return e({
                "value": o.toFixed(2)
              });
              for (var a = 0,
              u = t.allServices || [], d = 0; d < u.length; d++) if (u[d].uniqueServices) for (var r = u[d].uniqueServices, l = 0, s = r.length; l < s; l++) i[u[d].id] == r[l].uniqueId && (a += r[l].price);
              else 0 == i[u[d].id] && (a += u[d].price);
              e({
                "value": a.toFixed(2)
              })
            })
          }
        }),
        n.add("selectedServiceInfo", {
          "load": function(e) {
            n.onChange(["selectedService", "currentService"],
            function(i, t) {
              for (var n = {},
              o = t.allServices || [], a = 0; a < o.length; a++) if (o[a].uniqueServices) for (var u = o[a].uniqueServices, d = 0, r = u.length; d < r; d++) i[o[a].id] == u[d].uniqueId && (n = u[d]);
              else 0 == i[o[a].id] && (n = o[a]);
              e(n)
            })
          }
        }),
        n.add("skuView", {
          "load": function(e) {
            n.onChange(["skuItem"],
            function(i) {
              e({
                "hideInstallment": null,
                "hideNumber": null,
                "hideSku": null,
                "hideAddress": null,
                "hideService": null
              })
            })
          }
        }),
        n.add("installmentPrice", {
          "load": function(e) {
            n.onChange(["buyPrice", "servicePrice", "amount", "skipData", "selectedSku"],
            function(i, t, n, o, a) {
              e(o.skuVertical && o.skuVertical.installment && o.skuVertical.installment.sku2Installment ? a && a.skuId ? {
                "value": (1 * o.skuVertical.installment.sku2Installment[a.skuId] + 1 * t.value) * n
              }: {
                "value": (1 * o.skuVertical.installment.sku2Installment[0] + 1 * t.value) * n,
                "priceDesc": i && i.priceText && i.priceText.indexOf("-") >= 0 ? "\u8d77": ""
              }: {
                "value": (1 * i.value + 1 * t.value) * n,
                "priceDesc": i && i.priceText && i.priceText.indexOf("-") >= 0 ? "\u8d77": ""
              })
            })
          }
        }),
        n.add("installment", {
          "load": function(e) {
            function i(e) {
              return 1 * (Math.floor(100 * e) / 100).toFixed(2)
            }
            function t(e, t, n) {
              return (i(e / t) + i(e * n / t)).toFixed(2)
            }
            n.onChange(["skipData", "installmentPrice"],
            function(n, o) {
              if (n.skuVertical && n.skuVertical.installment) {
                for (var a = n.skuVertical.installment.period,
                u = 0; u < a.length; u++) a[u].ratio = Number(a[u].ratio),
                a[u].priceMoney = t(o.value, a[u].count, a[u].ratio),
                a[u].price = i(a[u].priceMoney / 100),
                a[u].priceDesc = o.priceDesc,
                a[u].couponVisable = !(!a[u].coupon || !a[u].couponPrice) && o.value * a[u].ratio <= a[u].couponPrice;
                e(n.skuVertical.installment)
              } else e(null)
            })
          }
        }),
        n.add("currentInstallment", {
          "load": function(e) {
            e({})
          }
        }),
        n.add("trade", {
          "load": function(e) {
            n.onChange(["skipData", "detailData"],
            function(i, t) {
              e(Object.assign({
                "buyText": t.trade.buyText,
                "cartText": t.trade.cartText
              },
              i.trade))
            })
          }
        }),
        n.add("feTrade", {
          "load": function(e) {
            e({
              "cartParams": null,
              "cartExParams": null,
              "buyParams": null,
              "buyExParams": null
            })
          }
        }),
        n.add("etm", {
          "load": function(e) {
            e(null)
          }
        }),
        n.add("etParams", {
          "load": function(e) {
            e(null)
          }
        }),
        n.add("openExParams", {
          "load": function(e) {
            e(null)
          }
        }),
        n.add("pickupPoints", {
          "load": function(e) {
            n.onLoad("skuExtra",
            function(i) {
              var t = i.pickupPoints;
              e(t && t.values && t.values.length ? t.values: null)
            })
          }
        }),
        n.add("pickupPoint", {
          "load": function(e) {
            e(null)
          }
        }),
        n.add("isPickupStore", {
          "load": function(e) {
            n.onLoad(["tags"],
            function(i) {
              e(i.isDianZiMendian || !1)
            })
          }
        }),
        n.add("carSoldStore", {
          "load": function(e) {
            e(null)
          }
        }),
        n.add("carSoldFenqi", {
          "load": function(e) {
            e(null)
          }
        }),
        n.add("carSoldStoreNum", {
          "load": function(e) {
            n.onChange(["tags", "selectedSku", "carSoldStore"],
            function(i, t, n) {
              e(i && i.isZhengChe ? n && n.qtys ? t && t.skuId ? n.qtys[t.skuId] || 0 : n.qtys[0] || 0 : 0 : null)
            })
          }
        }),
        n.add("selectedBuyPattern", {
          "load": function(e) {
            n.onLoad("skuBuy",
            function(i) {
              var t = i.buyPattern;
              if (t && t.type && t.type.length) for (var n = 0; n < t.type.length; n++) if (t.type[n].selected) return e(t.type[n]);
              e({})
            })
          }
        }),
        n.add("selectedSkuPattern", {
          "load": function(e) {
            n.onLoad("skuBuy",
            function(i) {
              var t = i.skuPattern;
              if (t && t.type && t.type.length) for (var n = 0; n < t.type.length; n++) if (t.type[n].selected) return e(t.type[n]);
              e({})
            })
          }
        }),
        n.add("presale", {
          "load": function(e) {
            n.onChange("skipData",
            function(i) {
              e(i.vertical ? i.vertical.presale || {}: {})
            })
          }
        }),
        n.add("isPreSale", {
          "load": function(e) {
            n.onChange("presale",
            function(i) {
              e("undefined" != typeof i.status)
            })
          }
        }),
        n.add("bigPromotion", {
          "load": function(e) {
            n.onChange("skipData",
            function(i) {
              e(i.resource ? i.resource.bigPromotion || {}: {})
            })
          }
        }),
        n.add("newBigPromotion", {
          "load": function(e) {
            n.onChange("skipData",
            function(i) {
              e(i.resource ? i.resource.newBigPromotion || {}: {})
            })
          }
        }),
        n.add("apis", {
          "load": function(e) {
            n.onLoad("detailData",
            function(i) {
              e(i.jumpUrl && i.jumpUrl.apis)
            })
          }
        }),
        n.add("skuProps", {
          "load": function(e) {
            n.onLoad("skuBase",
            function(i) {
              e(i.props || null)
            })
          }
        }),
        n.add("propAddedInfo", {
          "load": function(e) {
            n.onLoad("skuBase",
            function(i) {
              e(i.propAddedInfo || null)
            })
          }
        }),
        n.add("skuExtra", {
          "load": function(e) {
            n.onLoad("skuBase",
            function(i) {
              e(i.skuExtra || null)
            })
          }
        }),
        n.add("skuMaps", {
          "load": function(e) {
            n.onLoad("skuBase",
            function(i) {
              e(i.skus || null)
            })
          }
        }),
        n.add("sku2info", {
          "load": function(e) {
            n.onChange("skuCore",
            function(i) {
              e(i.sku2info || [])
            })
          }
        }),
        n.add("skuItem", {
          "load": function(e) {
            n.onChange("skuCore",
            function(i) {
              e(i.skuItem || {})
            })
          }
        }),
        n.add("skuBuy", {
          "load": function(e) {
            n.onChange("skuCore",
            function(i) {
              e(i.skuBuy || {})
            })
          }
        }),
        n.add("inter", {
          "load": function(e) {
            n.onLoad("skipData",
            function(i) {
              e(i.vertical ? i.vertical.inter || {}: {})
            })
          }
        }),
        n.add("isBundleItem", {
          "load": function(e) {
            n.onLoad("detailData",
            function(i) {
              e(i.isBundleItem || !1)
            })
          }
        }),
        n.add("isChaoshi", {
          "load": function(e) {
            n.onLoad("detailData",
            function(i) {
              e(i.tags && i.tags.tags && i.tags.tags.isChaoshi || !1)
            })
          }
        }),
        n.add("isDownShelf", {
          "load": function(e) {
            n.onLoad("skipData",
            function(i) {
              e(i.isDownShelf || !1)
            })
          }
        }),
        n.add("3rdExtraInfo", {
          "load": function(e) {
            e({
              "amount": null,
              "servicePrice": null,
              "price": null
            })
          }
        }),
        n.add("skuList", {
          "load": function(e) {
            n.onLoad(["skuBase"],
            function(i) {
              var t = {
                "data": []
              };
              i && i.props && i.props.forEach(function(e, i) {
                var n = {
                  "name": e.name,
                  "pid": e.pid,
                  "list": []
                }; (e.values || []).forEach(function(i, t) {
                  var o = {
                    "label": i.name,
                    "value": e.pid + ":" + i.vid,
                    "vid": i.vid,
                    "isSelected": !1,
                    "colorValue": i.colorValue,
                    "cornerIcon": i.cornerIcon
                  };
                  i.image && (o.image = i.image),
                  n.list.push(o)
                }),
                t.data.push(n)
              }),
              e(t)
            })
          }
        }),
        n.add("currentSkuInfo", {
          "load": function(e) {
            n.onChange(["skuBase", "skuList"],
            function(i, t) {
              var n = [],
              o = [],
              a = [],
              u = {
                "currentProps": "",
                "currentSkuId": "",
                "selectedTextArr": [],
                "unSelectedTextArr": []
              };
              t.data.forEach(function(e) { ! e.list.some(function(e) {
                  if (e.isSelected) return n.push(e.value),
                  o.push(e.label),
                  !0
                }) && a.push(e.name)
              }),
              u.selectedTextArr = o,
              u.unSelectedTextArr = a,
              u.currentProps = n.join(";"),
              !(i.skus || []).some(function(e) {
                if (e.propPath.split(";").every(function(e) {
                  return n.some(function(i) {
                    if (e == i) return ! 0
                  })
                })) return u.currentSkuId = e.skuId,
                !0
              }) && (u.currentSkuId = ""),
              e(u)
            })
          }
        }),
        n.add("canSkuSelected", {
          "load": function(e) {
            n.onChange(["skuBase", "currentSkuInfo", "skuCore"],
            function(i, t, n) {
              var o = {},
              a = t.currentProps ? t.currentProps.split(";") : [],
              u = i.skus;
              i.props && i.props.forEach(function(e) {
                var i = [].concat(a);
                i = i.filter(function(i) {
                  return - 1 == i.indexOf(e.pid)
                }),
                u.forEach(function(t) {
                  var a = t.propPath.split(";");
                  n.sku2info[t.skuId].quantity && i.every(function(e) {
                    return a.some(function(i) {
                      return e == i
                    })
                  }) && a.forEach(function(i) {
                    i.indexOf(e.pid) >= 0 && (o[i] = !0)
                  })
                })
              }),
              e(o)
            })
          }
        }),
        n.add("selectedSkuProp", {
          "load": function(e) {
            function i(i) {
              n.onLoad(["skuProps", "isBundleItem", "isDownShelf"],
              function(t, o, a) {
                if (o || a) e({});
                else if (i) {
                  for (var u in i) if (i.hasOwnProperty(u)) {
                    var d = !1;
                    t && t.forEach(function(e) { (e.pid == u || e.values.some(function(e) {
                        return e.vid == i[u]
                      })) && (d = !0)
                    }),
                    d || delete i[u]
                  }
                  e(i)
                } else {
                  var r = {};
                  t && t.forEach(function(e) {
                    e.values && 1 === e.values.length && n.onLoad("skuMaps",
                    function(i) {
                      for (var t = !1,
                      n = 0; n < i.length; n++) if (i[n].images) {
                        t = !0;
                        break
                      }
                      t || (r[e.pid] = String(e.values[0].vid))
                    })
                  }),
                  e(r)
                }
              })
            }
            function t(e) {
              if (!e) return null;
              var i, t = {},
              n = !1;
              return (e.split ? e.split(";") : e).forEach(function(e) {
                e && (i = e.split(":")) && 2 == i.length && i[0] && i[1] && (t[i[0]] = i[1], n = !0)
              }),
              n ? t: null
            }
            function o() {
              var e = t(u.sku);
              return (a = u.sku_properties) && (a = t(a)) ? void i(e ? Object.assign(e, a) : a) : (a = "") ? void i(e ? Object.assign(e, a) : a) : void i(e || null)
            }
            var a, u = v["default"].unparam(location.href.split("?")[1]); (a = u.skuId) ? n.onLoad("skuMaps",
            function(e) {
              if (e) {
                var n = !1;
                e.forEach(function(e, o) {
                  if (e.skuId == a) return i(t(e.propPath)),
                  void(n = !0)
                }),
                n || o()
              } else o()
            }) : o()
          }
        }),
        n.onLoad("selectedSkuProp",
        function(e) {}),
        n.add("selectedSkuList", {
          "load": function(e) {
            n.onChange("selectedSkuProp",
            function(i) {
              n.onSkuList(i, e)
            })
          }
        }),
        n.add("selectedSku", {
          "load": function(e) {
            n.onChange(["selectedSkuProp", "selectedSkuList"],
            function(i, t) {
              if (!t || 0 === t.length) return void e(null);
              if (1 != t.length) return void e(null);
              var n = t[0].propPath.split(";"),
              o = n.every(function(e) {
                var t = e.split(":");
                return i[t[0]] === t[1]
              });
              e(o ? t[0] : null)
            })
          }
        }),
        n.add("selectedSkuPic", {
          "load": function(e) {
            n.onChange(["item", "selectedSkuProp", "skuProps", "skuMaps", "selectedSkuList", "sku2info"],
            function(i, t, n, o, a, u) {
              var d, r = [];
              d = i.images && i.images[0] || "//img.alicdn.com/tps/i2/TB10ZY.HFXXXXcKXXXXorbaIVXX-80-80.jpg",
              r.push(d);
              for (var l in n) for (var s in n[l].values) if (n[l].values[s].image) {
                var m = n[l].values[s].image;
                r.push(m);
                for (var c in t) n[l].pid == c && n[l].values[s].vid == t[c] && (d = m)
              }
              if (t && Object.keys(t).length > 0 && a && a.length > 0) {
                for (var p = [], f = !1, x = 0; x < a.length; x++) if (a[x].images && a[x].images[0] && u[a[x].skuId].quantity) {
                  d = a[x].images[0],
                  p.push(i.images && i.images[0] || "//img.alicdn.com/tps/i2/TB10ZY.HFXXXXcKXXXXorbaIVXX-80-80.jpg"),
                  p = p.concat(a[x].images),
                  f = !0;
                  break
                }
                f && (r = p)
              }
              e({
                "image": d,
                "skuPics": r
              })
            })
          }
        }),
        n.add("selectedSkuCoreInfo", {
          "load": function(e) {
            n.onChange(["sku2info", "selectedSku"],
            function(i, t) {
              if (t && t.skuId) {
                var n = i[t.skuId];
                return n = n || i[0],
                void e({
                  "limit": n.limit,
                  "limitText": n.limitText,
                  "priceMoney": n.price.priceMoney,
                  "price": n.price,
                  "subPrice": n.subPrice,
                  "quantity": n.quantity,
                  "quantityText": n.quantityText,
                  "priceChar": n.priceChar
                })
              }
              e({
                "limit": i[0].limit,
                "limitText": i[0].limitText,
                "priceMoney": i[0].price.priceMoney,
                "price": i[0].price,
                "subPrice": i[0].subPrice,
                "quantity": i[0].quantity,
                "quantityText": i[0].quantityText,
                "priceChar": i[0].price.priceChar
              })
            })
          }
        }),
        n.add("currentInventory", {
          "load": function(e) {
            n.onChange(["selectedSku", "skipData"],
            function(i) {
              n.onInventory(i && i.skuId, e)
            })
          }
        }),
        n.add("amount", {
          "validator": function(e) {
            return ! isNaN(e = parseInt(e, 10)) && e > 0
          },
          "setter": function(e) {
            return parseInt(e, 10)
          },
          "load": function(e) {
            e(1)
          }
        }),
        n.onChange("limitInfo",
        function() {
          n.onLoad("amount",
          function(e) {
            n.setAmount(e)
          })
        }),
        n.add("services", {
          "load": function(e) {
            n.onChange(["skipData"],
            function(i) {
              e(i.services || null)
            })
          }
        }),
        n.add("currentService", {
          "load": function(e) {
            n.onChange(["services", "sku2serviceMap", "selectedSku"],
            function(i, t, n) {
              if (!t) return e(null);
              var o = 0;
              n && (o = n.skuId);
              var a = Object.assign({},
              i);
              delete a.sku2serviceMap;
              var u = t[o];
              u && u.forEach(function(e, i) {
                a.allServices[i] && a.allServices[i].serviceId === e.serviceId && (Object.assign(a.allServices[i], e), delete a.allServices[i].serviceSkuPrices),
                e.serviceSkuPrices && e.serviceSkuPrices.forEach(function(t, n) {
                  var o = a.allServices[i].uniqueServices[n],
                  u = e.serviceSkuPrices.findIndex(function(e) {
                    return e.uniqueId === o.uniqueId
                  }); - 1 !== u && Object.assign(o, e.serviceSkuPrices[u])
                })
              }),
              e(a)
            })
          }
        }),
        n.add("sku2serviceMap", {
          "load": function(e) {
            n.onChange(["services"],
            function(i) {
              e(i && i.sku2serviceMap || {})
            })
          }
        }),
        n.add("cacheSelectedService", {
          "load": function(e) {
            n.onChange(["currentService"],
            function(i) {
              n.onLoad("services",
              function(t) {
                if (! (t = i || t) || !t.allServices || !t.allServices.length) return void e(null);
                var n = {},
                o = t.allServices;
                if (t.multiSelect) for (var a = 0; a < o.length; a++) {
                  var u = o[a];
                  if (u.id = u.id || u.serviceId, u.uniqueServices && u.uniqueServices.length >= 1) for (var d = 0,
                  r = u.uniqueServices.length; d < r; d++) {
                    var l = u.uniqueServices[d];
                    n[u.id] = {
                      "key": u.id,
                      "value": l.uniqueId,
                      "checked": !1
                    },
                    (l.autoSelect || l.free || l.isFree) && (n[u.id].checked = !0)
                  } else n[u.id] = {
                    "key": u.id,
                    "value": u.uniqueId || "0",
                    "checked": !1
                  },
                  (u.autoSelect || u.isFree || u.free) && (n[u.id].checked = !0)
                } else {
                  for (var a = 0; a < o.length; a++) {
                    var u = o[a];
                    if (u.id = u.id || u.serviceId, u.uniqueServices && u.uniqueServices.length >= 1) for (var d = 0,
                    r = u.uniqueServices.length; d < r; d++) {
                      var l = u.uniqueServices[d];
                      if (n[u.id] = {
                        "key": u.id,
                        "value": l.uniqueId,
                        "checked": !1
                      },
                      l.autoSelect) return n[u.id].checked = !0,
                      e(n)
                    } else if (n[u.id] = {
                      "key": u.id,
                      "value": u.uniqueId || "0",
                      "checked": !1
                    },
                    u.autoSelect) return n[u.id].checked = !0,
                    e(n)
                  }
                  for (var a = 0; a < o.length; a++) {
                    var u = o[a];
                    if (u.id = u.id || u.serviceId, u.uniqueServices && u.uniqueServices.length >= 1) for (var d = 0,
                    r = u.uniqueServices.length; d < r; d++) {
                      var l = u.uniqueServices[d];
                      if (l.free || l.isFree) return n[u.id].checked = !0,
                      e(n)
                    } else if (u.isFree || u.free || 0 === a && "house" == t.serviceType) return n[u.id].checked = !0,
                    e(n)
                  }
                }
                e(n)
              })
            })
          }
        }),
        n.add("selectedService", {
          "load": function(e) {
            n.onChange(["services", "currentService", "cacheSelectedService"],
            function(i, t, n) {
              if (! (i = t || i) || !i.allServices || !i.allServices.length) return void e(null);
              var o = {},
              a = i.allServices;
              if (n) for (var u = 0; u < a.length; u++) {
                var d = a[u];
                if (d.id = d.id || d.serviceId, d.uniqueServices && d.uniqueServices.length >= 1) for (var r = 0,
                l = d.uniqueServices.length; r < l; r++) {
                  var s = d.uniqueServices[r],
                  m = n[d.id];
                  m && !1 !== m.checked && m.value == s.uniqueId && (o[d.id] = s.uniqueId)
                } else {
                  var m = n[d.id];
                  m && !0 === m.checked && (m.value != d.uniqueId && "0" != m.value || (o[d.id] = d.uniqueId || "0"))
                }
              }
              e(o)
            })
          }
        }),
        n.add("tradeResult", {
          "load": function(e) {
            e(null)
          }
        }),
        n.add("skuSummary", {
          "load": function(e) {
            n.onChange(["skuProps", "selectedSkuProp", "selectedSkuCoreInfo", "selectedSkuPic", "skuItem", "carSoldStoreNum", "3rdExtraInfo"],
            function(i, t, n, o, a, u, d) {
              var r, l, s = d && d.price,
              m = d && d.amount;
              if (null != s || null != m) try {
                s && (s = Number(s, 10), r = {
                  "priceMoney": (100 * s).toFixed(2),
                  "priceText": s
                }),
                m && m != undefined && null != m && "" != m && (l = Number(m, 10))
              } catch(x) {}
              var c = [],
              p = [],
              f = [];
              i && i.some(function(e) {
                if (t && t[e.pid]) {
                  for (var i = !1,
                  n = 0; n < e.values.length; n++) e.values[n].vid == t[e.pid] && (i = !0, c.push(e.values[n].name));
                  i || c.push(e.name)
                } else p.push(e.name)
              }),
              0 !== p.length ? f = ["\u8bf7\u9009\u62e9:"].concat(p) : 0 !== c.length && (f = ["\u5df2\u9009\u62e9:"].concat(c)),
              e({
                "image": o.image,
                "price": r || n.price,
                "subPrice": n.subPrice,
                "quantity": n.quantity,
                "quantityText": l ? "\u5e93\u5b58 " + l + "\u4ef6": null != u ? u ? "\u5e93\u5b58 " + u + "\u4ef6": "": n.quantityText,
                "hideQuantity": a.hideQuantity,
                "selectInfo": f
              })
            })
          }
        }),
        n.add("skuSelectedPic", {
          "load": function(e) {
            n.onLoad("item",
            function(i) {
              e({
                "image": i.images[0]
              })
            })
          }
        }),
        n.add("sellCount", {
          "load": function(e) {
            n.onLoad(["item"],
            function(i) {
              e(i.vagueSellCount || i.sellCount || null)
            })
          }
        }),
        n.add("module-adds/index", {
          "load": function(e) {
            n.onChange(["delivery", "sellCount"],
            function(i, t) {
              e({
                "postage": i.postage,
                "sellCount": null !== t ? t: i.sellCount,
                "from": i.from
              })
            })
          }
        }),
        n.add("double11Banner", {
          "load": function(e) {
            n.onLoad("skipData",
            function(i) {
              e(i.resource && i.resource.entrances ? i.resource.entrances.double11Banner: {})
            })
          }
        }),
        n.add("props", {
          "load": function(e) {
            n.onChange("detailData",
            function(i) {
              e(i.props)
            })
          }
        }),
        n.add("entrances", {
          "load": function(e) {
            n.onLoad("skipData",
            function(i) {
              e(i.resource ? i.resource.entrances || {}: {})
            })
          }
        }),
        n.add("relatedAuctions", {
          "load": function(e) {
            n.onChange("skipData",
            function(i) {
              e(i && i.resource ? i.resource.relatedAuctions: null)
            })
          }
        }),
        n.add("coupon", {
          "load": function(e) {
            n.onChange("skipData",
            function(i) {
              e(i && i.resource && i.resource.coupon ? i.resource.coupon: null)
            })
          }
        }),
        n.add("shopProm", {
          "load": function(e) {
            n.onChange(["price", "skipData", "seller"],
            function(i, t, n) {
              e(n && "C" === n.shopType ? t && t.resource && t.resource.shopProm ? t.resource.shopProm: null: i && i.shopProm ? i.shopProm: null)
            })
          }
        }),
        n.add("shopInfo", {
          "load": function(e) {
            n.onLoad("detailData",
            function(i) {
              var t = i.seller || {};
              e({
                "userId": t.userId,
                "shopIcon": t.shopIcon,
                "shopName": t.shopName,
                "shopUrl": t.shopUrl,
                "allProduct": t.allProduct,
                "evaluates": t.evaluates,
                "hideDsr": null,
                "hideAllProduct": null,
                "hideShopLink": null
              })
            })
          }
        }),
        n.add("actionBar", {
          "load": function(e) {
            e({
              "hideWW": null,
              "hideShop": null,
              "hideFav": null,
              "hideCartLink": null,
              "cartLink": null,
              "shopLink": null
            })
          }
        }),
        n.add("state", {
          "load": function(e) {
            e(v["default"].unparam(location.href.split("?")[1]))
          }
        }),
        n.add("subItems", {
          "load": function(e) { !
            function(e) {
              n.onLoad(["item"],
              function(i) {
                lib.mtop.H5Request({
                  "api": "mtop.tmall.detail.bundleitem",
                  "v": "1.0",
                  "data": {
                    "itemId": i.itemId
                  },
                  "ttid": "tmalldetail"
                },
                function(i) {
                  i && i.data && i.data.success ? e.apply(this, [null, i.data]) : e.apply(this, [null, null])
                },
                function(i) {
                  e.apply(this, [null, null]),
                  batTrack && batTrack("mtop.bundleitem.fail", "mtop.bundleitem.init", {
                    "type": "error"
                  })
                }),
                batTrack && batTrack("mtop.bundleitem.init", "bat")
              })
            } (function(i, t) {
              var o = [];
              if (t && t.bundleItemList) for (var a = 0,
              u = t.bundleItemList.length; a < u; a++) o[a] = new c["default"](t.bundleItemList[a], t.bundleSkuMap, n);
              e(o)
            })
          }
        }),
        n.add("subItemsSkuSummary", {
          "load": function(e) {
            n.onLoad("subItems",
            function(i) {
              for (var t = 0; t < i.length; t++) i[t].onChange("skuSummary",
              function() {
                n.onMap(i, ["skuSummary"],
                function(e) {
                  return {
                    "skuSummary": e
                  }
                },
                function(i) {
                  for (var t = [], n = [], o = [], a = 0; a < i.length; a++) n = n.concat(i[a].skuSummary.unSelectedTextArr),
                  t = t.concat(i[a].skuSummary.selectedTextArr);
                  o = 0 !== n.length ? ["\u8bf7\u9009\u62e9:"].concat(n) : 0 !== t.length ? ["\u5df2\u9009\u62e9:"].concat(t) : ["\u9009\u62e9\u7ec4\u5408\u5957\u9910"],
                  e({
                    "selectInfo": o
                  })
                })
              })
            })
          }
        }),
        n.addBuyValidator(function(e, i) {
          n.onLoad(["trade"],
          function(t) {
            return i(t ? 1 == e.type ? t.buyEnable ? null: {
              "level": 8,
              "name": "init",
              "message": "\u5546\u54c1\u4e0d\u80fd\u8d2d\u4e70"
            }: 2 == e.type ? t.cartEnable ? null: {
              "level": 8,
              "name": "init",
              "message": "\u5546\u54c1\u4e0d\u80fd\u52a0\u5165\u8d2d\u7269\u8f66"
            }: null: null)
          })
        },
        8),
        n.addBuyValidator(function(e, i) {
          n.onLoad(["currentInventory"],
          function(e) {
            if (!e) return i();
            var t = ["", "\u6b64\u5546\u54c1\u6682\u65f6\u7f3a\u8d27", "\u6240\u9009\u533a\u57df\u6682\u65f6\u7f3a\u8d27\uff0c\u8bf7\u67e5\u770b\u5176\u4ed6\u533a\u57df", "\u6709\u4eba\u8fd8\u672a\u4ed8\u6b3e\uff0c\u82e515\u5206\u949f\u540e\u4ecd\u672a\u4ed8\u6b3e\uff0c\u60a8\u5c06\u6709\u8d2d\u4e70\u673a\u4f1a"];
            0 === e.quantity ? i({
              "level": 8,
              "name": "stock",
              "message": t[2],
              "stockType": 2
            }) : i()
          })
        },
        8),
        n.addBuyValidator(function(e, i) {
          n.onLoad(["skuMaps", "selectedSku", "skuProps", "selectedSkuProp"],
          function(e, t, n, o) {
            if (e && !t) {
              var a = {
                "level": 2,
                "name": "sku",
                "message": "\u8bf7\u9009\u62e9\u5546\u54c1\u5c5e\u6027"
              };
              if (n) {
                var u = [];
                n.forEach(function(e) {
                  o[e.pid] || u.push(e.name)
                }),
                u.length && (a.message = "\u8bf7\u9009\u62e9" + u.join("\u3001"))
              }
              return i(a)
            }
            i()
          })
        },
        2),
        n.addBuyValidator(function(e, i) {
          n.onLoad(["amount", "currentInventory", "limitInfo"],
          function(e, t, n) {
            return e && (e * n.unitBuy > t.limit || e * n.unitBuy > t.quantity) ? void i(t.limit < t.quantity ? {
              "level": 2,
              "name": "limitedCheck",
              "message": "\u5f88\u62b1\u6b49\uff0c\u5f53\u524d\u53ea\u53ef\u4ee5\u8d2d\u4e70" + t.limit + "\u4ef6\u5546\u54c1"
            }: {
              "level": 2,
              "name": "limitedCheck",
              "message": "\u5f88\u62b1\u6b49\uff0c\u5f53\u524d\u53ea\u53ef\u4ee5\u8d2d\u4e70" + t.quantity + "\u4ef6\u5546\u54c1"
            }) : void i()
          })
        },
        2),
        n.addBuyValidator(function(e, i) {
          n.onLoad(["amount", "3rdExtraInfo"],
          function(e, t) {
            return t && t && t.amount != undefined && null != t.amount && "" != t.amount ? void(t.amount < e ? i({
              "level": 2,
              "name": "limitedCheck",
              "message": "\u5f88\u62b1\u6b49\uff0c\u5f53\u524d\u53ea\u53ef\u4ee5\u8d2d\u4e70" + t.amount + "\u4ef6\u5546\u54c1"
            }) : i()) : void i()
          })
        },
        2),
        n.addBuyValidator(function(e, i) {
          n.onLoad(["amount", "selectedServiceInfo"],
          function(e, t) {
            return t && t && t.limit != undefined && null != t.limit && "" != t.limit ? void(t.limit < e ? i({
              "level": 2,
              "name": "limitedCheck",
              "message": "\u5f53\u524d\u9009\u62e9\u670d\u52a1\uff0c\u53ea\u53ef\u4ee5\u8d2d\u4e70" + t.limit + "\u4ef6\u5546\u54c1"
            }) : i()) : void i()
          })
        },
        2)
      }
    },
    {
      "key": "buy",
      "value": function(e) {
        function i(i) {
          t.update("tradeResult", {
            "value": i
          }),
          e.callback && e.callback(i),
          clearTimeout(n)
        }
        var t = this;
        e = e || {};
        var n;
        n = setTimeout(function() {
          console.log("trade.cart.lose"),
          batTrack("trade." + e.type == 1 ? "buy": "cart.lose", "bat", {
            "type": "error",
            "msg": "url," + location.href
          })
        },
        4096),
        t.canBuy(e,
        function(n) {
          if (n.type = e.type || 1, n.level > 0) return void i(n);
          1 == e.type ? t._buyInPhone(e, i) : 2 == e.type && t._cartInPhone(e, i)
        })
      }
    },
    {
      "key": "canBuy",
      "value": function(e, i) {
        function t(n) {
          var d, r, l = !1;
          if (n < u || a.level >= n) i && i(a);
          else if ((d = o[n]) && (r = d.length)) for (var s = r - 1; s >= 0; s--) d[s](e,
          function(e) {
            if (e || (e = {
              "level": 0
            }), !l) {
              if (r--, e.level) {
                if (e.level >= n) return i && i(a = e),
                void(l = !0);
                e.level > a.level && (a = e)
              }
              0 === r && t(n - 1)
            }
          });
          else t(n - 1)
        }
        e = e || {};
        var n = this,
        o = n._bvList,
        a = {
          "level": 0,
          "checkType": e.type
        };
        o && o.maxLevel || i && i(a);
        var u = e.level || 0;
        t(o.maxLevel)
      }
    },
    {
      "key": "addBuyValidator",
      "value": function(e, i) {
        i = i || 0;
        var t = this,
        n = t._bvList || (t._bvList = {}),
        o = n[i] || (n[i] = []); (n.maxLevel === undefined || i > n.maxLevel) && (n.maxLevel = i),
        o.push(e)
      }
    },
    {
      "key": "needDecision",
      "value": function(e) {
        function i() {
          for (var i = 0,
          t = n.length; i < t; i++) n[i](function(i) {
            if (!a) {
              if (o--, i) return a = !0,
              e(!0);
              0 === o && e(!1)
            }
          })
        }
        var t = this,
        n = t._decisionVList,
        o = n.length,
        a = !1;
        i()
      }
    },
    {
      "key": "needDecisionValidator",
      "value": function(e) {
        var i = this;
        i._decisionVList = i._decisionVList || [],
        i._decisionVList.push(e)
      }
    },
    {
      "key": "canSaveSkuValidator",
      "value": function(e) {
        this.onLoad(["skuMap", "selectedSku", "skuNames", "selectedSkuProp", "config"],
        function(i, t, n, o, a) {
          if (i && !t) return e(!1);
          e(!0)
        })
      }
    },
    {
      "key": "safeGet",
      "value": function(e) {
        var i, t = this;
        e = e.split(".");
        for (var n = 0,
        o = e.length; n < o && (void 0 !== (i = 0 === n ? t.get(e[n]) : i[e[n]]) && null !== i); n++);
        return i
      }
    },
    {
      "key": "canSelectSkuProp",
      "value": function(e, i, t, n) {
        function o(e) {
          if (n.ignoreSelection) return void e({});
          u.onLoad("selectedSkuProp", e)
        }
        if (n = n || {},
        e.indexOf(":") >= 0) {
          var a = e.split(":", 2);
          e = a[0],
          i = a[1]
        }
        if (!i) return void t(0);
        var u = this;
        o(function(n) {
          if (n[e] == i) return void t(1);
          var o = Object.assign({},
          n);
          o[e] = i,
          u.onSkuList(o,
          function(e) {
            if (e) {
              var i = e.length;
              if (!i) return void t( - 1);
              e.forEach(function(e, n) {
                i < 0 || u.onInventory(e.skuId,
                function(e) {
                  if (! (i < 0)) return e && (e.quantity > 0 || null === e.quantity) ? (t(1), void(i = -1)) : void(0 == --i && t(0))
                })
              })
            }
          })
        })
      }
    },
    {
      "key": "selectSkuProp",
      "value": function(e, i, t) {
        if (e.indexOf(":") >= 0) {
          var n = e.split(":", 2);
          e = n[0],
          i = n[1]
        }
        var o = this;
        this.canSelectSkuProp(e, i,
        function(n) {
          if (n <= 0) return void(t && o.onLoad("selectedSkuProp",
          function(n) {
            for (var a in n) a && o.deselectSkuProp(a, "",
            function() {
              o.selectSkuProp(e, i, t)
            })
          }));
          o.onLoad("selectedSkuProp",
          function(t) {
            if (t[e] != i) {
              var n = {};
              Object.assign(n, t),
              n[e] = i,
              o.update("selectedSkuProp", {
                "value": n
              })
            }
          })
        })
      }
    },
    {
      "key": "deselectSkuProp",
      "value": function(e, i, t) {
        if (e.indexOf(":") >= 0) {
          var n = e.split(":", 2);
          e = n[0],
          i = n[1]
        }
        var o = this;
        o.onLoad("selectedSkuProp",
        function(n) {
          if (!n[e] || i && n[e] != i) return void(t && t());
          var a = {};
          Object.assign(a, n),
          delete a[e],
          o.update("selectedSkuProp", {
            "value": a
          }),
          t && t()
        })
      }
    },
    {
      "key": "selectService",
      "value": function(e, i) {
        if (e) {
          if (e.indexOf("-") >= 0) {
            var t = e.split("-", 2);
            e = t[0],
            i = t[1]
          }
          i = i || "0";
          var n = this;
          n.onLoad(["cacheSelectedService", "currentService"],
          function(t, o) {
            if (t = t || {},
            !t[e] || t[e].value != i || !t[e].checked) {
              var a = {};
              if (o.multiSelect) for (var u in t) t.hasOwnProperty(u) && u != e && (a[u] = t[u]);
              a[e] = {
                "key": e,
                "value": i,
                "checked": !0
              },
              n.update("cacheSelectedService", {
                "value": a
              })
            }
          })
        }
      }
    },
    {
      "key": "deselectService",
      "value": function(e, i, t) {
        if (e) {
          if (e.indexOf("-") >= 0) {
            var n = e.split("-", 2);
            e = n[0],
            i = n[1]
          }
          i = i || "0";
          var o = this;
          o.onLoad(["cacheSelectedService", "currentService"],
          function(n, a) {
            n = n || {};
            var u = {};
            for (var d in n) n.hasOwnProperty(d) && d != e && (u[d] = n[d]);
            a.mustSelect && 0 === Object.keys(u).length || (u[e] = {
              "key": e,
              "value": i,
              "checked": !1
            },
            o.update("cacheSelectedService", {
              "value": u
            }), t && t())
          })
        }
      }
    },
    {
      "key": "onSkuList",
      "value": function(e, i) {
        this.onLoad(["skuMaps"],
        function(t) {
          var n = [];
          if (!e || !t || 0 == t.length) return void i(null);
          for (var o in t) {
            var a = !0;
            for (var u in e) if (e.hasOwnProperty(u)) {
              var d = u + ":" + e[u],
              r = new RegExp(d + "\\d");
              if ( - 1 === t[o].propPath.indexOf(d)) {
                a = !1;
                break
              }
              if (r.test(t[o].propPath)) {
                console.log(t[o].propPath, d),
                a = !1;
                break
              }
            }
            a && n.push(t[o])
          }
          i(n)
        })
      }
    },
    {
      "key": "onInventory",
      "value": function(e, i) {
        e ? this.onLoad(["sku2info", "skuMaps"],
        function(t, n) {
          i(t[e])
        }) : i({})
      }
    },
    {
      "key": "querySkip",
      "value": function(e, i) {
        var t = this;
        t.onLoad(["detailData", "apis", "scene"],
        function(n, o, a) {
          if ("tmall" !== a && "miniBuy" !== a) {
            var u = Object.assign({
              "scene": a
            },
            e);
            lib.mtop.request({
              "api": "mtop.tmall.detail.getcommondetail",
              "v": "1.0",
              "data": {
                "itemId": n.item.itemId,
                "exParams": JSON.stringify(u),
                "id": n.item.itemId,
                "isCommonDetail": !0
              },
              "ecode": 1,
              "ttid": v["default"].unparam(location.href.split("?")[1]).ttid || "2017@taobao_h5_6.6.0"
            },
            function(e) {
              t.update("skipData", {
                "load": function(i, t) {
                  t(JSON.parse(e.data.ModuleDatas.apiStack.value)),
                  console.log("update,skipData")
                }
              }),
              i && i()
            },
            function(e) {})
          } else {
            var d = o.skipEsi || "https://ext.mdskip.taobao.com/mobile/queryH5Detail.htm";
            0 == d.indexOf("http://") ? d = d.substr(5) : 0 == d.indexOf("https://") && (d = d.substr(6));
            var r = v["default"].unparam(location.href.split("?")[1]) || {};
            delete r.id,
            delete r.spm,
            delete r.utparam,
            delete r.pvid,
            delete r.scm,
            r.itemId = n.item.itemId;
            var l = Object.assign(r, e); (0, f["default"])(d, {
              "method": "jsonp",
              "body": v["default"].param(l)
            }).then(function(e) {
              return e.json()
            }).then(function(e) {
              t.update("skipData", {
                "load": function(i, t) {
                  t(e),
                  console.log("update,skipData")
                }
              }),
              i && i()
            })["catch"](function() {
              batTrack("jsonp.err", "bat", {
                "type": "error",
                "msg": d
              })
            })
          }
        })
      }
    },
    {
      "key": "changeLocation",
      "value": function(e, i) {
        var t = this,
        n = {
          "areaId": e
        };
        t.querySkip(n, i)
      }
    },
    {
      "key": "selectInstallment",
      "value": function(e) {
        var i = this;
        i.onLoad(["installment"],
        function(t) {
          for (var n = !0,
          o = 0,
          a = t.period.length; o < a; o++) t.period[o].count == e && (n = !1, i.update("currentInstallment", {
            "value": t.period[o]
          }));
          n && i.update("currentInstallment", {
            "value": {}
          })
        })
      }
    },
    {
      "key": "selectSkuId",
      "value": function(e) {
        var i = this;
        i.onLoad("skuMaps",
        function(t) {
          if (t && 0 != t.length) {
            var n = !1;
            for (var o in t) if (t[o].skuId == e) {
              n = !0;
              var a = {},
              u = t[o].propPath.split(";");
              u && u.forEach(function(e, i) {
                var t = e.split(":");
                a[t[0]] = t[1]
              }),
              i.update("selectedSkuProp", {
                "value": a
              }),
              i.update("selectedSkuList", {
                "value": [t[o]]
              }),
              i.update("selectedSku", {
                "value": t[o]
              });
              break
            }
            n || i.update("selectedSkuProp", {
              "value": {}
            })
          }
        })
      }
    },
    {
      "key": "setAmount",
      "value": function(e) {
        var i = this;
        i.onLoad("limitInfo",
        function(t) {
          try {
            e = parseInt(e, 10)
          } catch(n) {} finally {
            isNaN(e) ? i.update("amount", {
              "load": function(e, i) {
                i(1)
              }
            }) : e >= 1 && (!t.limit || e * t.unitBuy <= t.limit) && e * t.unitBuy <= t.quantity ? i.update("amount", {
              "load": function(i, t) {
                t(e)
              }
            }) : e >= 1 && t.limit && e * t.unitBuy > t.limit && e * t.unitBuy <= t.quantity ? i.update("amount", {
              "load": function(e, i) {
                parseInt(t.limit / t.unitBuy) > 0 && i(parseInt(t.limit / t.unitBuy))
              }
            }) : e >= 1 && (!t.limit || e * t.unitBuy <= t.limit) && e * t.unitBuy >= t.quantity ? i.update("amount", {
              "load": function(e, i) {
                parseInt(t.quantity / t.unitBuy) > 0 && i(parseInt(t.quantity / t.unitBuy))
              }
            }) : i.update("amount", {
              "load": function(e, i) {
                i(e)
              }
            })
          }
        })
      }
    },
    {
      "key": "canSoldArea",
      "value": function(e, i, t) {
        var n = this,
        e = String(e);
        n.onLoad(["soldArea", "tags", "item", "apis"],
        function(t, o, a, u) {
          var r = t && t.cityData;
          if (!r || r.allAreaSold) return i(!0);
          var l = r.soldAreas || [];
          return - 1 !== l.indexOf(parseInt(e, 10)) ? i(!0) : -1 !== ((t && t.regionData).soldAreas || []).indexOf(parseInt(e, 10)) ? i(!0) : /^\d\d0000$/.test(e) ? i( !! l.some(function(i) {
            return String(i).substr(0, 2) == e.substr(0, 2)
          })) : -1 !== [110100, 120100, 310100, 500100, 13e4, 14e4, 15e4, 21e4, 22e4, 23e4, 32e4, 33e4, 34e4, 35e4, 36e4, 37e4, 41e4, 42e4, 43e4, 44e4, 45e4, 46e4, 51e4, 52e4, 53e4, 54e4, 61e4, 62e4, 63e4, 64e4, 65e4, 71e4, 81e4, 82e4, 990100].indexOf(parseInt(e, 10)) ? i(!1) : e.length <= 6 ? void n.onAreaInfo(e,
          function(t) {
            if (!t) return i(!0);
            if (t.level <= 2) return i(!1);
            var r = t.parent;
            n.canSoldArea(r,
            function(t) {
              if (!1 === t) return i(t);
              var l = n._cityLoadMap || (n._cityLoadMap = {});
              l[r] = l[r] || d(function(e) {
                var i = u.newSelectCityApi || "//mdskip.taobao.com/json/detailSelectCity.do?isAreaSell=true" + a.itemId;
                if (o && o.isAreaSell && i) {
                  var t = {
                    "itemId": a.itemId,
                    "city": r
                  }; (0, f["default"])(i, {
                    "method": "jsonp",
                    "timeout": 3e3,
                    "body": v["default"].param(t)
                  }).then(function(e) {
                    return e.json()
                  }).then(function(i) {
                    e(i.isSuccess ? i.selectCityDO.regionSoldArea ? i.selectCityDO.regionSoldArea: null: null)
                  })["catch"](function() {
                    e(null),
                    batTrack("jsonp.err", "bat", {
                      "type": "error",
                      "msg": i
                    })
                  })
                } else e(null)
              }),
              l[r](function(t) {
                return i(t && t.soldAreas ? -1 !== t.soldAreas.indexOf(parseInt(e, 10)) : !0)
              })
            })
          }) : void n.onAreaInfo(e,
          function(t) {
            if (!t) return i(!0);
            var r = t.parent;
            n.canSoldArea(r,
            function(t) {
              if (!1 === t) return i(t);
              var l = n._areaLoadMap || (n._areaLoadMap = {});
              l[r] = l[r] || d(function(e) {
                var i = u.newSelectCityApi || "//mdskip.taobao.com/json/detailSelectCity.do?isAreaSell=true" + a.itemId;
                if (o && o.isAreaSell && i) {
                  var t = {
                    "itemId": a.itemId,
                    "regionId": r,
                    "areaSold": r
                  }; (0, f["default"])(i, {
                    "method": "jsonp",
                    "timeout": 3e3,
                    "body": v["default"].param(t)
                  }).then(function(e) {
                    return e.json()
                  }).then(function(i) {
                    e(i.isSuccess ? i.selectRegionDO.soldAreas || null: null)
                  })["catch"](function() {
                    e(null),
                    batTrack("jsonp.err", "bat", {
                      "type": "error",
                      "msg": i
                    })
                  })
                } else e(!0)
              }),
              l[r](function(t) {
                return i(t && t.soldAreas ? -1 !== t.soldAreas.indexOf(e) : !0)
              })
            })
          })
        })
      }
    },
    {
      "key": "onAreaInfo",
      "value": function(i, t, n) {
        var o = this,
        a = o._areaMap || (o._areaMap = {});
        if (!n && a[i] !== undefined || a[i] && a[i].children !== undefined) return void t(a[i]);
        var u = o._areaLoadMap || (o._areaLoadMap = {});
        u[i] = u[i] || d(function(o) {
          if (!n && a[i] !== undefined || a[i] && a[i].children !== undefined) return void t(a[i]);
          e(["../widgets/address/queryAreaInfo"],
          function(e) {
            e.getAreaInfo({
              "id": i,
              "addProvs": !a[1] || !a[1].children,
              "success": function(e) {
                Object.assign(a, e.list),
                o(a[i] || null)
              },
              "error": function() {
                o(a[i] || null)
              }
            })
          })
        }),
        u[i](t)
      }
    }]),
    t
  } (s["default"]));
  t.exports = h
});
define("detail-m/widgets/loading/index", ["mui/zepto/zepto"],
function(e, t, i) {
  function n(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var a, o = function() {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i),
      n && e(t, n),
      t
    }
  } (),
  r = e("mui/zepto/zepto"),
  u = function() {
    function e(t) {
      return n(this, e),
      this
    }
    return o(e, [{
      "key": "show",
      "value": function(e) {
        return this.fixed = !e,
        e = e || "body",
        this.$el || (this.$el = r('<div class="mui-loading"><i></i></div>')),
        this.fixed ? this.$el.addClass("mui-loading-fixed") : this.$el.removeClass("mui-loading-fixed"),
        this.$el.appendTo(e),
        this.$el.show(),
        this
      }
    },
    {
      "key": "hide",
      "value": function() {
        return this.$el && this.$el.hide(),
        this
      }
    }]),
    e
  } ();
  u.getInstance = function(e) {
    return a || (a = new u(e))
  },
  i.exports = u
});
define("detail-m/app", ["mui/slider-m/index", "mui/zepto/zepto", "mui/zepto/touch", "mui/zepto/event", "mui/xtemplate/index", "mui/mtop/index", "mui/fetch/jsonp", "mui/fetch/tool", "mui/crossimage/index", "detail-m/widgets/loading/index", "mui/datalazyload/index", "mui/custom-event/index"],
function(e, t, n) {
  function i(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
  function(e) {
    return typeof e
  }: function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
  },
  o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
      }
    }
    return function(t, n, i) {
      return n && e(t.prototype, n),
      i && e(t, i),
      t
    }
  } (),
  r = (e("mui/slider-m/index"), e("mui/zepto/zepto"));
  e("mui/zepto/touch"),
  e("mui/zepto/event"),
  e("mui/xtemplate/index"),
  e("mui/mtop/index");
  var l = (e("mui/fetch/jsonp"), e("mui/fetch/tool")),
  d = (e("mui/crossimage/index"), e("detail-m/widgets/loading/index")),
  u = e("mui/datalazyload/index"),
  s = e("mui/custom-event/index");
  window.batTrack = window.batTrack ||
  function() {};
  var c = function() {
    function t(n) {
      i(this, t),
      this.pages = {},
      this.product = n,
      this.initEnv(),
      this.initMtop(),
      this.initModSeed(),
      this.initSkuUrl(),
      this.initDecisionUrl(),
      this.initPage(),
      this.initTBKStat(),
      this.initOpenAPI(),
      this.registerSW(),
      this.tesReady(),
      this.initAtp(),
      this.r = e
    }
    return o(t, [{
      "key": "initPage",
      "value": function() {
        batTrack("app.init");
        var e = this;
        u.instance().set("diff", {
          "top": 50,
          "bottom": 20,
          "left": 20,
          "right": 0
        }),
        "undefined" == typeof _DATA_Mdskip && batTrack("esi.err", "app.init", {
          "type": "error",
          "msg": "skip\u6302\u4e86,Id:" + e.query("id") + "itemId:" + e.query("itemId")
        }),
        window._DATA_Detail && window._DATA_Detail.seller && window._DATA_Detail.seller.userId && (document.body.className = document.body.className + " seller-" + window._DATA_Detail.seller.userId),
        batTrack("app.init")
      }
    },
    {
      "key": "seedConfig",
      "value": function(e) {
        Object.keys(e.packages).forEach(function(t) {
          if (!feloader.Config.packages[t]) {
            var n = {};
            n[t] = e.packages[t],
            window.require.config({
              "packages": n
            })
          }
        }),
        Object.keys(e.modules).forEach(function(t) {
          if (0 === feloader.getModule(t).status && !feloader.getModule(t).requires) {
            var n = {};
            n[t] = e.modules[t],
            window.require.config({
              "modules": n
            })
          }
        })
      }
    },
    {
      "key": "initEnv",
      "value": function() {
        var e = this.query("ttid") || "";
        "object" === (void 0 === e ? "undefined": a(e)) && (e = e[0]);
        var t = navigator.userAgent,
        n = {
          "iphoneApp": -1 !== e.indexOf("@taobao_iphone") || -1 !== e.indexOf("@tmall_iphone"),
          "ipadApp": -1 !== e.indexOf("@taobao_ipad") || -1 !== e.indexOf("@tmall_ipad"),
          "androidApp": -1 !== e.indexOf("@taobao_android") || -1 !== e.indexOf("@tmall_android"),
          "androidPadApp": -1 !== e.indexOf("@taobao_apad") || -1 !== e.indexOf("@tmall_apad"),
          "tmallApp": -1 !== e.indexOf("tmall_"),
          "taobaoApp": -1 !== e.indexOf("@taobao_"),
          "juhuasuanApp": -1 !== e.indexOf("@juhuasuan_android") || -1 !== e.indexOf("@juhuasuan_iphone") || -1 !== t.indexOf("AliApp(JU"),
          "alipayApp": -1 !== t.indexOf("AlipayClient"),
          "alihealthApp": -1 !== t.indexOf("AliHealthClient"),
          "taoxiApp": -1 !== t.indexOf("AliApp(TB") || -1 !== t.indexOf("AliApp(TM"),
          "uc": null != t.match(/UC/i)
        },
        i = e.match(/[\d]+\.[\d]+\.[\d]+/);
        if (i) {
          var o = i[0];
          n.versionCode = o,
          n.versionNumber = 0,
          n.version = o.split(".").map(function(e, t) {
            return parseInt(e, 10)
          })
        }
        n.padApp = n.ipadApp || n.androidPadApp,
        n.phoneApp = n.iphoneApp || n.androidApp,
        n.taobaoApp = n.padApp || n.phoneApp,
        n.taoxiApp = n.taoxiApp || n.taobaoApp || n.tmallApp,
        this.env = n
      }
    },
    {
      "key": "initMtop",
      "value": function() {
        lib.mtop.config.name = "h5ApiUpdate.do",
        lib.mtop.config.mainDomain = "tmall.com",
        -1 !== location.hostname.indexOf(".waptest.") ? lib.mtop.config.subDomain = "waptest": -1 !== location.hostname.indexOf(".wapa.") ? lib.mtop.config.subDomain = "wapa": (lib.mtop.config.dangerouslySetProtocol = "https", lib.mtop.config.subDomain = "m"),
        -1 !== location.hostname.indexOf(".liangxinyao.") && (lib.mtop.config.mainDomain = "liangxinyao.com"),
        -1 !== location.hostname.indexOf("tmall.hk") ? (lib.mtop.config.mainDomain = "tmall.hk", lib.mtop.config.prefix = "h5api") : -1 !== location.hostname.indexOf("taobao.com") && (lib.mtop.config.mainDomain = "taobao.com")
      }
    },
    {
      "key": "initModSeed",
      "value": function() {
        var e = this;
        e.product.onLoad(["detailData"],
        function(t) {
          t.modules.modules.forEach(function(t, n) {
            if (0 == t.key.indexOf("detail-mods") && t.version) {
              var i = t.key.replace(/^(.+\/.+)\/.+$/, "$1"),
              a = e.getWhSeedVersion(i) || t.version;
              if (!feloader.Config.packages[i] || 0 == i.indexOf("detail-mods")) {
                var o = {};
                o[i] = {
                  "path": "//g.alicdn.com/" + i + "/" + a + "/",
                  "name": i,
                  "version": a,
                  "ignorePackageNameInUri": !0
                },
                window.require.config({
                  "packages": o
                })
              }
            }
          })
        })
      }
    },
    {
      "key": "getWhSeedVersion",
      "value": function(e) {
        if (!e || !/wh_debugger=true/.test(window.location.href)) return ! 1;
        for (var t = (this.query("wh_seed") || "").split(","), n = 0; n < t.length; n++) if (t[n] && 0 === t[n].indexOf(e + "/")) {
          var i = t[n].split("/")[2] || "";
          if (/^(\d+)\.(\d+)\.(\d+)$/.test(i)) return i;
          break
        }
      }
    },
    {
      "key": "toggleDisAppSlider",
      "value": function(e, t) {}
    },
    {
      "key": "initSkuUrl",
      "value": function() {
        var e = this.product,
        t = window.history;
        if (t && t.replaceState) {
          var n = location.href.split("?")[0] + "?";
          e.onChange("state",
          function(e) {
            var i = [];
            for (var a in e) e[a] && (Array.isArray(e[a]) ? e[a].forEach(function(e) {
              i.push(a + "=" + e)
            }) : i.push(a + "=" + e[a]));
            var o = n + i.join("&");
            t.replaceState(null, null, o)
          }),
          e.onChange(["selectedSku", "selectedSkuProp"],
          function(t, n) {
            e.update("state", {
              "load": function(e, i) {
                var a = null;
                if (t) a = Object.assign(e, {
                  "sku_properties": null,
                  "skuId": t.skuId
                });
                else {
                  var o = [];
                  for (var r in n) o.push(r + ":" + n[r]);
                  a = Object.assign(e, {
                    "skuId": null,
                    "sku_properties": o.join(";")
                  })
                }
                i(a)
              }
            })
          })
        }
      }
    },
    {
      "key": "initDecisionUrl",
      "value": function() {
        var e = this;
        e.query("decision") && setTimeout(function() {
          e.onSku(function(t) {
            t.show(e.query("decision"))
          })
        },
        512)
      }
    },
    {
      "key": "tabClickAtp",
      "value": function(e) {
        var t = this;
        switch (e) {
        case "p-desc":
          t.atp.sendAtpanel("mtmalldetail.1.7");
          break;
        case "p-attr":
          t.atp.sendAtpanel("mtmalldetail.1.5");
          break;
        case "p-review":
          t.atp.sendAtpanel("mtmalldetail.1.8");
          break;
        case "p-summary":
          t.atp.sendAtpanel("mtmalldetail.1.13");
          break;
        case "p-decision":
          t.atp.sendAtpanel("mtmalldetail.1.41")
        }
      }
    },
    {
      "key": "createLoader",
      "value": function(e) {
        var t, n, i, a = [];
        return function(o, r) {
          return 0 === r || r || (r = 1),
          1 & r && !n && (n = !0, e(function(e) {
            for (t = e; i = a.shift();) i && i.apply(null, [t])
          })),
          t !== undefined ? (o && o.apply(null, [t]), t) : (2 & r || o && a.push(o), t)
        }
      }
    },
    {
      "key": "onLoad",
      "value": function(e) {
        var t = this;
        t._isLoaded ? e() : window.WindVane && window.WindVane.isAvailable ? document.addEventListener("WindVaneReady",
        function(n) { ! t._isLoaded && (t._isLoaded = !0),
          e()
        },
        !1) : r(window).on("load",
        function() { ! t._isLoaded && (t._isLoaded = !0),
          e()
        })
      }
    },
    {
      "key": "onSku",
      "value": function(t, n) {
        var i = this; ! i.sku && i.onLoading(function(e) {
          e.show()
        }),
        this.createLoader(function(t) {
          e(["detail-m/mods/sku/index"],
          function(e) { ! i.sku && i.onLoading(function(e) {
              e.hide()
            }),
            i.sku = i.sku ? i.sku: new e(i.product, n),
            t(i.sku)
          })
        })(t)
      }
    },
    {
      "key": "onSkuH5",
      "value": function(t) {
        var n = this;
        this.createLoader(function(t) {
          e(["detail-m/widgets/cover/index"],
          function(e) {
            n.product.onLoad("skuItem",
            function(e) {
              var t = e.skuH5Url;
              Ali.pushWindow(t,
              function(e) {
                e.errorCode && (location.href = t)
              })
            })
          })
        })(t)
      }
    },
    {
      "key": "compaticVersion",
      "value": function(e) {
        if (!e) return ! 1;
        try {
          var t = this.env,
          n = t.version,
          i = 0,
          a = 0;
          return e.split(".").map(function(e, t) {
            var n = parseInt(e, 10) > 127 ? 127 : parseInt(e, 10);
            i += n << 32 - 8 * (t + 1)
          }),
          n.map(function(e, t) {
            var n = parseInt(e, 10) > 127 ? 127 : parseInt(e, 10);
            a += n << 32 - 8 * (t + 1)
          }),
          a >= i
        } catch(o) {
          return ! 1
        }
      }
    },
    {
      "key": "getGeoLocation",
      "value": function(e) {
        if (batTrack("app.getGeoLocation"), window.navigator.userAgent.match(/WindVane/i)) {
          var t = function() {
            window.WindVane.call("WVLocation", "getLocation", {
              "enableHighAcuracy": !0,
              "address": !1
            },
            function(t) {
              e(t)
            },
            function(t) {
              e(null)
            })
          }; - 1 !== navigator.userAgent.indexOf("AliApp(JU") ? feloader.getScript("//g.alicdn.com/mtb/lib-windvane/2.1.1/windvane.js", t) : t()
        } else if (navigator.geolocation) {
          var n = setTimeout(function() {
            e(null)
          },
          3e3);
          navigator.geolocation.getCurrentPosition(function(t) {
            clearTimeout(n),
            e(t)
          },
          function(t) {
            clearTimeout(n),
            e(null)
          })
        } else e(null)
      }
    },
    {
      "key": "onDatalazyload",
      "value": function(t) {
        var n = this;
        this.createLoader(function(t) {
          e(["mui/datalazyload/index"],
          function(e) {
            n.dl = n.dl ? n.dl: new e({
              "autoDestroy": !1,
              "diff": {
                "top": 0,
                "bottom": 10,
                "left": 20,
                "right": 20
              }
            }),
            t(n.dl)
          })
        })(t)
      }
    },
    {
      "key": "initTBKStat",
      "value": function() {
        batTrack("app.initTBKStat", "app.init"),
        this.product.onLoad(["item", "seller", "scene"],
        function(e, t, n) {
          n && "tmall" === n && feloader.getScript("//g.alicdn.com/mm/cps/trace.js", {
            "success": function() {
              try {
                CPS.trace({
                  "type": 2,
                  "subtype": 2,
                  "itemid": e.itemId,
                  "sellerid": t.userId
                })
              } catch(n) {}
            }
          })
        })
      }
    },
    {
      "key": "initOpenAPI",
      "value": function() {}
    },
    {
      "key": "onSmartbanner",
      "value": function(e) {
        function t(e) {
          window["@ali/lib-smartbanner-plus-loader"].ready(function(t, n) {
            n.autoLinkKey,
            n.isInvoke,
            n.isShow,
            clearTimeout(a),
            i = !i && e(t, n)
          })
        }
        var n = this,
        i = !1,
        a = setTimeout(function() {
          i = !i && e({},
          {
            "isShow": !1,
            "isInvoke": !1,
            "autoLinkKey": "taobao"
          })
        },
        2e3);
        window["@ali/lib-smartbanner-plus-loader"] ? t(e) : n.product.onLoad("item",
        function(n) {
          var i;
          i = -1 !== location.hostname.indexOf(".wapa.") ? "//g-assets.daily.taobao.net/mtb/lib-smartbanner-plus-loader/smartbanner-loader.js": "//g.alicdn.com/mtb/lib-smartbanner-plus-loader/smartbanner-loader.js",
          feloader.getScript(i + "?t=" + parseInt( + new Date / 432e5, 10),
          function() {
            window["@ali/lib-smartbanner-plus-loader"].init({
              "bizKey": "taobao",
              "pageCode": "mallDetail",
              "params": {
                "itemId": n.itemId
              }
            }),
            t(e)
          })
        })
      }
    },
    {
      "key": "onDownloadPopup",
      "value": function(e) {}
    },
    {
      "key": "onAddress",
      "value": function(t) {
        var n = this;
        this.createLoader(function(t) {
          n.product.onLoad("item",
          function(i) {
            e(["detail-m/widgets/address/index"],
            function(e) {
              var a = {
                "l2": "",
                "l3": "",
                "l4": ""
              },
              o = new e({
                "title": "\u914d\u9001\u533a\u57df",
                "level": i.extData && i.extData.addressLevel || 2,
                "disableCanClick": !1,
                "getAreaStatus": function(e, t) {
                  n.product.canSoldArea(e,
                  function(e) {
                    t({
                      "disabled": !e
                    })
                  },
                  a)
                }
              });
              t(o)
            })
          })
        })(t)
      }
    },
    {
      "key": "onLoading",
      "value": function(e) {
        e(d.getInstance())
      }
    },
    {
      "key": "onToast",
      "value": function(t) {
        this.createLoader(function(t) {
          e(["detail-m/widgets/toast/index"],
          function(e) {
            var n = e.getInstance();
            t(n)
          })
        })(t)
      }
    },
    {
      "key": "onCover",
      "value": function(t) {
        this.createLoader(function(t) {
          e(["detail-m/widgets/cover/index"],
          function(e) {
            t(e)
          })
        })(t)
      }
    },
    {
      "key": "onImageViewer",
      "value": function(t) {
        this.createLoader(function(t) {
          e(["detail-m/widgets/photoSwipe/index"],
          function(e) {
            t(e)
          })
        })(t)
      }
    },
    {
      "key": "login",
      "value": function() {
        this.env.taoxiApp ? location.href = "https://login.m.taobao.com/login.htm?redirectURL=" + encodeURIComponent(location.href.split("#")[0]) : this.product.onLoad(["apis"],
        function(e) {
          location.href = e && e.loginUrl ? e.loginUrl + "&redirectURL=" + encodeURIComponent(location.href.split("#")[0]) : "//login.tmall.com/?redirectURL=&redirectURL=" + encodeURIComponent(location.href.split("#")[0])
        })
      }
    },
    {
      "key": "query",
      "value": function(e) {
        var t;
        return window && window.location && window.location.query || (t = ""),
        t = window.location.search.replace(/^\?+/, ""),
        e ? l.unparam(t)[e] : t
      }
    },
    {
      "key": "getCityId",
      "value": function(t) {
        this.product.onLoad(["delivery"],
        function(n) {
          e(["detail-m/widgets/address/queryAreaInfo"],
          function(e) {
            e.getCityId(n.areaId || 330100,
            function(e) {
              t(e.cityId || 330100)
            })
          })
        })
      }
    },
    {
      "key": "getAddressData",
      "value": function(t) {
        e(["detail-m/widgets/address/queryAreaInfo"],
        function(e) {
          e.getTdist(function(e) {
            t(e)
          })
        })
      }
    },
    {
      "key": "_sendImg",
      "value": function(e, t) {
        var n = this;
        e && this.product.onLoad(["item", "shopInfo", "userInfo"],
        function(i, a, o) {
          var r = {
            "catid": i.categoryId,
            "itemId": i.itemId,
            "rn": this.query("rn"),
            "sellerId": a.userId,
            "uid": o ? o.userId: ""
          };
          return this.sendImg = function(e, t) {
            if (e) {
              var t = t || {};
              t = Object.assign(t, r, !1),
              -1 == e.indexOf("?") ? e += "?" + l.param(t) : e += "&" + l.param(t),
              n.sendImage(e + "&_tm_cache=" + (new Date).getTime())
            }
          },
          this.sendImg(e, t)
        }.bind(this))
      }
    },
    {
      "key": "sendImage",
      "value": function(e) {
        var t = window,
        n = "jsFeImage_" + (new Date).getTime(),
        i = t[n] = new Image;
        i.onload = i.onerror = function() {
          t[n] = null
        },
        i.src = e,
        i = null
      }
    },
    {
      "key": "sendAtpanel",
      "value": function(e, t, n) {
        var i = n;
        if ("number" == typeof t && (i = t, t = undefined), !((i = 0) && Math.floor(Math.random() * i) > 0)) {
          var a = "//gm.mmstat.com/" + e;
          this._sendImg(a, t)
        }
      }
    },
    {
      "key": "getSearchString",
      "value": function(e) {
        var t = [];
        return r.each(e,
        function(e, n) {
          t.push(e + "=" + n)
        }),
        t.join("&")
      }
    },
    {
      "key": "goldlog",
      "value": function(e) {
        function t(t, n, i, a) {
          return e.apply(this, arguments)
        }
        return t.toString = function() {
          return e.toString()
        },
        t
      } (function(e, t, n, i) {
        var a = this;
        t = Object.assign(t, {
          "pre": document.referrer
        });
        var o = this.getSearchString(t);
        i = i || "",
        n = n || "XXX";
        var r = arguments,
        l = r.callee;
        window.goldlog ? goldlog.record("/" + e, i, o, n) : setTimeout(function() {
          l.apply(a, r)
        },
        500)
      })
    },
    {
      "key": "sendStat",
      "value": function(e) {
        var t = new Image;
        t.onload = function() {
          t = null
        },
        t.src = e
      }
    },
    {
      "key": "isHttps",
      "value": function() {
        return location.href.startsWith("https://")
      }
    },
    {
      "key": "itemHref",
      "value": function(e) {
        return - 1 !== location.hostname.indexOf(".waptest.") ? "//detail.waptest.tmall.com/item.htm?id=" + e: -1 !== location.hostname.indexOf(".wapa.") ? "//detail.wapa.tmall.com/item.htm?id=" + e: "//detail.m.tmall.com/item.htm?id=" + e
      }
    },
    {
      "key": "registerSW",
      "value": function() {
        var t = this,
        n = function() {
          if ("serviceWorker" in navigator && (batTrack("SW", "app.init"), window.location && ("https:" == window.location.protocol || "HTTPS:" == window.location.protocol))) {
            var n = navigator.userAgent; - 1 != n.indexOf("MiniProgram") && -1 != n.indexOf("AlipayClient") || -1 != n.indexOf("AliApp(TB") || -1 != n.indexOf("AliApp(TM") || -1 != n.indexOf("AliApp(ET") || -1 != n.indexOf("AliApp(BC") || "/item.htm" !== location.pathname || "detail.m.tmall.com" != location.host && "detail.m.tmall.hk" != location.host || (t.goldlog("tmalldetail.lib.sw-js", {},
            "H1478724946", "EXP"), e(["detail-m/widgets/registerSW"],
            function(e) {
              e.register(),
              t.goldlog("tmalldetail.lib.sw-js-ok", {},
              "H1478724946", "EXP")
            }))
          }
        };
        t.onLoad(n)
      }
    },
    {
      "key": "tesReady",
      "value": function() {}
    },
    {
      "key": "initAtp",
      "value": function() {
        var t = this,
        n = function() {
          e(["detail-m/widgets/atp/index"],
          function(e) {
            t.atp = new e(t),
            t.atp.start()
          })
        };
        t.onLoad(n)
      }
    }]),
    t
  } ();
  Object.assign(c.prototype, s),
  n.exports = c
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
function(e) {
  return typeof e
}: function(e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
}; !
function() {
  if (window.feloader && feloader.config) {
    var e = location.host;
    "detail.wapa.tmall.com" !== e && "detail.wapa.tmall.hk" !== e && "detail.waptest.tmall.com" !== e || feloader.config({
      "useDailyAssets": !0
    })
  }
  window.batTrack = window.batTrack ||
  function() {},
  window.goldlog = window.goldlog || {
    "record": function() {
      var e = this,
      t = arguments,
      n = 0; !
      function i() {
        if (n++, window.goldlog.send) goldlog.record.apply(e, t);
        else {
          if (n > 10) return;
          setTimeout(function() {
            i()
          },
          500)
        }
      } ()
    }
  };
  var t = require,
  n = function e(t) {
    var n;
    if ("object" == (void 0 === t ? "undefined": _typeof(t))) if (null === t) n = null;
    else if (t instanceof Array) {
      n = [];
      for (var i = 0,
      o = t.length; i < o; i++) n.push(e(t[i]))
    } else {
      n = {};
      for (var a in t) n[a] = e(t[a])
    } else n = t;
    return n
  };
  t(["detail-m/app", "detail-m/model/index", "detail-m/mods/action-bar/index", "detail-m/mods/trade/index", "detail-m/mods/head/index", "detail-m/mods/content/index"],
  function(e, t, i, o, a, r) {
    var l = new t(n(_DATA_Detail || {}), n("undefined" != typeof _DATA_Mdskip ? _DATA_Mdskip: null));
    window.app = new e(l),
    new i(l),
    new a(l),
    new r(l)
  })
} ();