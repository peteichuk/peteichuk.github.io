"use strict";
window.onload = function () {
  (function (w) {
    var loadCSS = function (href, before, media) {
      var doc = w.document;
      var ss = doc.createElement("link");
      var ref;
      if (before) {
        ref = before;
      }
      else {
        var refs = ( doc.body || doc.getElementsByTagName("head")[0] ).childNodes;
        ref = refs[refs.length - 1];
      }
      var sheets = doc.styleSheets;
      ss.rel = "stylesheet";
      ss.href = href;
      ss.media = "only x";

      function ready(cb) {
        if (doc.body) {
          return cb();
        }
        setTimeout(function () {
          ready(cb);
        });
      }

      ready(function () {
        ref.parentNode.insertBefore(ss, ( before ? ref : ref.nextSibling ));
      });
      var onloadcssdefined = function (cb) {
        var resolvedHref = ss.href;
        var i = sheets.length;
        while (i--) {
          if (sheets[i].href === resolvedHref) {
            return cb();
          }
        }
        setTimeout(function () {
          onloadcssdefined(cb);
        });
      };

      function loadCB() {
        if (ss.addEventListener) {
          ss.removeEventListener("load", loadCB);
        }
        ss.media = media || "all";
      }

      if (ss.addEventListener) {
        ss.addEventListener("load", loadCB);
      }
      ss.onloadcssdefined = onloadcssdefined;
      onloadcssdefined(loadCB);
      return ss;
    };
    if (typeof exports !== "undefined") {
      exports.loadCSS = loadCSS;
    }
    else {
      w.loadCSS = loadCSS;
    }
  }(typeof global !== "undefined" ? global : this));

  function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
      var ua = navigator.userAgent;
      var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
        rv = parseFloat(RegExp.$1);
    }
    else if (navigator.appName == 'Netscape') {
      var ua = navigator.userAgent;
      var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
        rv = parseFloat(RegExp.$1);
    }
    return rv;
  }
  if (getInternetExplorerVersion() !== -1) {
    document.getElementById('page-preloader').style.display = 'none';
  } else {
    var spinner = document.getElementById('page-preloader');
    spinner.querySelector('.spinner').style.opacity = 0;
    setTimeout(function () {
      spinner.style.display = 'none';
    }, 200);
  }
}
