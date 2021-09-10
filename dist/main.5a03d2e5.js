// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var string = "/* \u5411\u5C4F\u5E55\u524D\u7684\u4F60\u9053\u58F0\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n * \u6211\u4F1A\u5728\u9875\u9762\u4E0A\u753B\u4E00\u4E2A\u516B\u5366\u56FE\n * \u5148\u751F\u6210\u4E00\u4E2Adiv\n **/\n#div1{\n  border:1px solid ;\n  width:200px;\n  height:200px;\n}\n/* \u63A5\u4E0B\u6765\u5F00\u59CB\u5C06 div \u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n * \u628A div \u7531\u65B9\u53D8\u5706\n **/\n#div1{\n  border-radius:50%;\n  border-radius: 50%;\n  box-shadow: 0 0 3px rgba(0,0,0,0.5);\n  border:none;\n}\n/* \u516B\u5366\u662F\u9634\u9633\u5F62\u6210\u7684\n * \u6709\u4E00\u9ED1\u4E00\u767D\u4E24\u79CD\u989C\u8272\n **/\n#div1{\n  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* \u5C06\u9ED1\u767D\u534A\u5706\u53D8\u6210\u53CC\u9C7C*/\n#div1::before {\n  width: 100px;\n  height: 100px;\n  top:0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #000000;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after {\n  width: 100px;\n  height: 100px;\n  bottom:0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #ffffff;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n";
var string2 = "";
var n = 0;
var step = function step() {
  setTimeout(function () {
    if (string[n] === "\n") {
      //如果是回车，替换成<br>标签拼接到string2上
      string2 += "<br>";
      //  如果有空格，就替换成HTML空格转义符
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      //如果不是回车。就拼接到到string2上
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scroll(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 10);
};
step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.5a03d2e5.map