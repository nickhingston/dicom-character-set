/*! dicom-character-set - 1.0.2 - 2019-11-10 | (c) 2018 Radialogica, LLC | https://github.com/radialogica/dicom-character-set */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dicom-character-set"] = factory();
	else
		root["dicom-character-set"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/inherits/inherits_browser.js":
/*!****************************************************!*\
  !*** ../node_modules/inherits/inherits_browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/util/support/isBufferBrowser.js":
/*!*******************************************************!*\
  !*** ../node_modules/util/support/isBufferBrowser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../node_modules/util/util.js":
/*!************************************!*\
  !*** ../node_modules/util/util.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "../node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "./character-sets.js":
/*!***************************!*\
  !*** ./character-sets.js ***!
  \***************************/
/*! exports provided: characterSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterSets", function() { return characterSets; });
var asciiElement = { codeElement: 'G0',
  escapeSequence: [0x1B, 0x28, 0x42],
  encoding: 'windows-1254',
  isASCII: true,
  bytesPerCodePoint: 1 };

var characterSets = {

  /** ********************************
   * Single-byte without extensions *
   **********************************/

  // Default
  'ISO_IR 6': { encoding: 'utf-8' },

  // Latin alphabet No. 1
  'ISO_IR 100': { encoding: 'windows-1254' },

  // Latin alphabet No. 2
  'ISO_IR 101': { encoding: 'iso-8859-2' },

  // Latin alphabet No. 3
  'ISO_IR 109': { encoding: 'iso-8859-3' },

  // Latin alphabet No. 4
  'ISO_IR 110': { encoding: 'iso-8859-4' },

  // Cyrillic
  'ISO_IR 144': { encoding: 'iso-8859-5' },

  // Arabic
  'ISO_IR 127': { encoding: 'iso-8859-6' },

  // Greek
  'ISO_IR 126': { encoding: 'iso-8859-7' },

  // Hebrew
  'ISO_IR 138': { encoding: 'iso-8859-8' },

  // Latin alphabet No. 5
  'ISO_IR 148': { encoding: 'windows-1254' },

  // Japanese
  'ISO_IR 13': { encoding: 'shift-jis' },

  // Thai
  'ISO_IR 166': { encoding: 'tis-620' },

  /** *****************************
   * Single-byte with extensions *
   *******************************/

  // Default
  'ISO 2022 IR 6': {
    extension: true,
    elements: [asciiElement]
  },

  // Latin alphabet No. 1
  'ISO 2022 IR 100': {
    extension: true,
    elements: [asciiElement, { codeElement: 'G1',
      escapeSequence: [0x1B, 0x2D, 0x41],
      encoding: 'windows-1254',
      bytesPerCodePoint: 1 }]
  },

  // Latin alphabet No. 2
  'ISO 2022 IR 101': {
    extension: true,
    elements: [asciiElement, { codeElement: 'G1',
      escapeSequence: [0x1B, 0x2D, 0x42],
      encoding: 'iso-8859-2',
      bytesPerCodePoint: 1 }]
  },

  // Latin alphabet No. 3
  'ISO 2022 IR 109': {
    extension: true,
    elements: [asciiElement, { codeElement: 'G1',
      escapeSequence: [0x1B, 0x2D, 0x43],
      encoding: 'iso-8859-3',
      bytesPerCodePoint: 1 }]
  },

  // Latin alphabet No. 4
  'ISO 2022 IR 110': {
    extension: true,
    elements: [asciiElement, { codeElement: 'G1',
      escapeSequence: [0x1B, 0x2D, 0x44],
      encoding: 'iso-8859-4',
      bytesPerCodePoint: 1 }]
  },

  // Cyrillic
  'ISO 2022 IR 144': {
    extension: true,
    elements: [asciiElement, { codeElement: 'G1',
      escapeSequence: [0x1B, 0x2D, 0x4C],
      encoding: 'iso-8859-5',
      bytesPerCodePoint: 1 }]
  },

  // Arabic
  'ISO 2022 IR 127': {
    extension: true,
    elements: [asciiElement, { codeElement: 'G1',
      escapeSequence: [0x1B, 0x2D, 0x47],
      encoding: 'iso-8859-6',
      bytesPerCodePoint: 1 }]
  },

  // Greek
  'ISO 2022 IR 126': {
    extension: true,
    elements: [asciiElement, { codeElement: 'G1',
      escapeSequence: [0x1B, 0x2D, 0x46],
      encoding: 'iso-8859-7',
      bytesPerCodePoint: 1 }]
  },

  // Hebrew
  'ISO 2022 IR 138': {
    extension: true,
    elements: [asciiElement, { codeElement: 'G1',
      escapeSequence: [0x1B, 0x2D, 0x48],
      encoding: 'iso-8859-8',
      bytesPerCodePoint: 1 }]
  },

  // Latin alphabet No. 5
  'ISO 2022 IR 148': {
    extension: true,
    elements: [asciiElement, { codeElement: 'G1',
      escapeSequence: [0x1B, 0x2D, 0x4D],
      encoding: 'windows-1254',
      bytesPerCodePoint: 1 }]
  },

  // Japanese
  'ISO 2022 IR 13': {
    extension: true,
    elements: [{ codeElement: 'G0',
      escapeSequence: [0x1B, 0x28, 0x4A],
      encoding: 'shift-jis',
      bytesPerCodePoint: 1 }, { codeElement: 'G1',
      escapeSequence: [0x1B, 0x29, 0x49],
      encoding: 'shift-jis',
      bytesPerCodePoint: 1 }]
  },

  // Thai
  'ISO 2022 IR 166': {
    extension: true,
    elements: [asciiElement, { codeElement: 'G1',
      escapeSequence: [0x1B, 0x2D, 0x54],
      encoding: 'tis-620',
      bytesPerCodePoint: 1 }]
  },

  /** ****************************
   * Multi-byte with extensions *
   ******************************/

  // Japanese
  'ISO 2022 IR 87': {
    extension: true,
    multiByte: true,
    elements: [{ codeElement: 'G0',
      escapeSequence: [0x1B, 0x24, 0x42],
      encoding: 'euc-jp',
      setHighBit: true,
      bytesPerCodePoint: 2 }]
  },

  'ISO 2022 IR 159': {
    extension: true,
    multiByte: true,
    elements: [{ codeElement: 'G0',
      escapeSequence: [0x1B, 0x24, 0x28, 0x44],
      encoding: 'euc-jp',
      isJISX0212: true,
      bytesPerCodePoint: 2 }]
  },

  // Korean
  'ISO 2022 IR 149': {
    extension: true,
    multiByte: true,
    elements: [{ codeElement: 'G1',
      escapeSequence: [0x1B, 0x24, 0x29, 0x43],
      encoding: 'euc-kr',
      bytesPerCodePoint: 2 }]
  },

  // Simplified Chinese
  'ISO 2022 IR 58': {
    extension: true,
    multiByte: true,
    elements: [{ codeElement: 'G1',
      escapeSequence: [0x1B, 0x24, 0x29, 0x41],
      encoding: 'gb18030',
      bytesPerCodePoint: 2 }]
  },

  /** *******************************
   * Multi-byte without extensions *
   *********************************/

  'ISO_IR 192': { encoding: 'utf-8',
    multiByte: true },

  GB18030: { encoding: 'gb18030',
    multiByte: true },

  GBK: { encoding: 'gbk',
    multiByte: true }
};

/***/ }),

/***/ "./convert-bytes.js":
/*!**************************!*\
  !*** ./convert-bytes.js ***!
  \**************************/
/*! exports provided: convertBytes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertBytes", function() { return convertBytes; });
/* harmony import */ var _character_sets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character-sets.js */ "./character-sets.js");


var ESCAPE_BYTE = 0x1B;

var CARRIAGE_RETURN = 0xA;
var LINE_FEED = 0xC;
var FORM_FEED = 0xD;
var TAB = 0x9;
// Aka yen symbol in Romaji
var BACKSLASH = 0x5C;
var EQUAL_SIGN = 0x3D;
var CARET = 0x5E;

var Decoder = typeof TextDecoder === 'undefined' && "function" !== 'undefined' ? __webpack_require__(/*! util */ "../node_modules/util/util.js").TextDecoder : TextDecoder;

function adjustShiftJISResult(str) {
  // browsers do strict ASCII for these characters, so to be compliant with Shift JIS we replace them
  return str.replace(/~/g, '‾').replace(/\\/g, '¥');
}

function appendRunWithoutPromise(output, byteRunCharacterSet, bytes, byteRunStart, byteRunEnd) {
  var oneRunBytes = preprocessBytes(byteRunCharacterSet, bytes, byteRunStart, byteRunEnd);

  return output + convertWithoutExtensions(byteRunCharacterSet.encoding, oneRunBytes);
}

function checkParameters(specificCharacterSet, bytes) {
  if (bytes && !(bytes instanceof Uint8Array)) {
    throw new Error('bytes must be a Uint8Array');
  }
  if (specificCharacterSet && typeof specificCharacterSet !== 'string') {
    throw new Error('specificCharacterSet must be a string');
  }
}

function convertBytesCore(withoutExtensionsFunc, appendFunc, specificCharacterSet, bytes, options) {
  checkParameters(specificCharacterSet, bytes);

  var characterSetStrings = getCharacterSetStrings(specificCharacterSet);

  if (characterSetStrings.length === 1 && !characterSetStrings[0].startsWith('ISO 2022')) {
    return withoutExtensionsFunc(_character_sets_js__WEBPACK_IMPORTED_MODULE_0__["characterSets"][characterSetStrings[0]].encoding, bytes);
  }

  var checkedOptions = options || {};

  return convertWithExtensions(characterSetStrings.map(function (characterSet) {
    return _character_sets_js__WEBPACK_IMPORTED_MODULE_0__["characterSets"][characterSet];
  }), bytes, getDelimitersForVR(checkedOptions.vr), appendFunc);
}

function convertWithExtensions(allowedCharacterSets, bytes, delimiters, appendRun) {
  var output = '';

  if (!bytes || bytes.length === 0) {
    return output;
  }

  var initialCharacterSets = {
    G0: allowedCharacterSets[0].elements.find(function (element) {
      return element.codeElement === 'G0';
    }),
    G1: allowedCharacterSets[0].elements.find(function (element) {
      return element.codeElement === 'G1';
    })
  };

  var activeCharacterSets = Object.assign({}, initialCharacterSets);
  var byteRunStart = 0;
  var byteRunCharacterSet = void 0;
  var nextSetIndex = 0;

  // Group bytes into runs based on their encoding so we don't have to use a different
  // decoder for each character. Note that G0 and G1 planes can be different encodings,
  // so we can't just group by character set.

  while (nextSetIndex < bytes.length) {
    if (!byteRunCharacterSet) {
      byteRunCharacterSet = getCharacterSet(bytes[byteRunStart], activeCharacterSets);
    }

    var next = findNextCharacterSet(bytes, byteRunStart, byteRunCharacterSet, activeCharacterSets, initialCharacterSets, delimiters);

    nextSetIndex = next.index;

    if (nextSetIndex > byteRunStart) {
      output = appendRun(output, byteRunCharacterSet, bytes, byteRunStart, nextSetIndex);
    }

    byteRunStart = nextSetIndex;
    byteRunCharacterSet = next.characterSet;

    if (next.escapeSequence) {
      var nextCharacterSet = readEscapeSequence(bytes, nextSetIndex, allowedCharacterSets);

      activeCharacterSets[nextCharacterSet.codeElement] = nextCharacterSet;
      byteRunStart += nextCharacterSet.escapeSequence.length;
    }
  }

  return output;
}

function convertWithoutExtensions(encoding, bytes) {
  var retVal = new Decoder(encoding).decode(bytes);

  return encoding === 'shift-jis' ? adjustShiftJISResult(retVal) : retVal;
}

// Multibyte non-extension character sets must stand on their own or else be ignored. This method enforces that.
function filterMultiByteCharacterSetStrings(characterSetStrings) {
  var initialCharacterSet = _character_sets_js__WEBPACK_IMPORTED_MODULE_0__["characterSets"][characterSetStrings[0]];

  if (initialCharacterSet.multiByte && !initialCharacterSet.extension) {
    return [characterSetStrings[0]];
  }

  return characterSetStrings.filter(function (str) {
    return !_character_sets_js__WEBPACK_IMPORTED_MODULE_0__["characterSets"][str].multiByte || _character_sets_js__WEBPACK_IMPORTED_MODULE_0__["characterSets"][str].extension;
  });
}

function findNextCharacterSet(bytes, start, currentCodeElement, activeCodeElements, initialCharacterSets, delimiters) {
  for (var i = start; i < bytes.length; i += currentCodeElement.bytesPerCodePoint) {
    if (bytes[i] === ESCAPE_BYTE) {
      return { escapeSequence: true,
        index: i };
    }
    if (currentCodeElement.bytesPerCodePoint === 1 && delimiters.includes(bytes[i])) {
      Object.assign(activeCodeElements, initialCharacterSets);
    }
    var nextCodeElement = getCharacterSet(bytes[i], activeCodeElements);

    if (currentCodeElement && nextCodeElement !== currentCodeElement) {
      return { characterSet: nextCodeElement,
        index: i };
    }
  }

  return { index: bytes.length };
}

function forceExtensionsIfApplicable(characterSetStrings) {
  var forceExtensions = characterSetStrings.length > 1;

  var returnValue = [];

  for (var i = 0; i < characterSetStrings.length; i++) {
    var characterSetString = characterSetStrings[i];

    if (!returnValue.includes(characterSetString)) {
      returnValue.push(forceExtensions ? characterSetString.replace('ISO_IR', 'ISO 2022 IR') : characterSetString);
    }
  }

  return returnValue;
}

function getCharacterSet(byte, activeCharacterSets) {
  if (byte > 0x7F && activeCharacterSets.G1) {
    return activeCharacterSets.G1;
  }
  if (activeCharacterSets.G0) {
    return activeCharacterSets.G0;
  }
  // for robustness if byte <= 0x7F, try to output using G1 if no G0 is selected
  if (activeCharacterSets.G1 && activeCharacterSets.G1.bytesPerCodePoint === 1) {
    return activeCharacterSets.G1;
  }
  // If G1 is multibyte, default to ASCII

  return _character_sets_js__WEBPACK_IMPORTED_MODULE_0__["characterSets"]['ISO 2022 IR 6'].elements[0];
}

function getCharacterSetStrings(specificCharacterSet) {
  var characterSetStrings = specificCharacterSet ? specificCharacterSet.split('\\').map(function (characterSet) {
    return characterSet.trim().toUpperCase();
  }) : [''];

  if (characterSetStrings[0] === '') {
    characterSetStrings[0] = characterSetStrings.length > 1 ? 'ISO 2022 IR 6' : 'ISO_IR 6';
  }

  if (characterSetStrings.some(function (characterSet) {
    return _character_sets_js__WEBPACK_IMPORTED_MODULE_0__["characterSets"][characterSet] === undefined;
  })) {
    throw new Error('Invalid specific character set specified.');
  }

  characterSetStrings = filterMultiByteCharacterSetStrings(characterSetStrings);

  return forceExtensionsIfApplicable(characterSetStrings);
}

function getDelimitersForVR(incomingVR) {
  var vr = (incomingVR || '').trim().toUpperCase();

  var delimiters = [CARRIAGE_RETURN, LINE_FEED, FORM_FEED, TAB];

  if (!['UT', 'ST', 'LT'].includes(vr)) {
    // for delimiting multi-valued items
    delimiters.push(BACKSLASH);
  }
  if (vr === 'PN') {
    delimiters.push(EQUAL_SIGN);
    delimiters.push(CARET);
  }

  return delimiters;
}

function preprocessBytes(characterSet, bytes, byteStart, byteEnd) {
  var oneEncodingBytes = void 0;

  if (characterSet.isJISX0212) {
    oneEncodingBytes = processJISX0212(bytes, byteStart, byteEnd);
  } else {
    oneEncodingBytes = bytes.slice(byteStart, byteEnd);
    if (characterSet.setHighBit) {
      setHighBit(oneEncodingBytes);
    }
  }

  return oneEncodingBytes;
}

function processJISX0212(bytes, bytesStart, bytesEnd) {
  var length = bytesEnd - bytesStart;

  if (length % 2 !== 0) {
    throw new Error('JIS X string with a character not having exactly two bytes!');
  }

  var processedBytes = new Uint8Array(length + length / 2);
  var outIndex = 0;

  for (var i = bytesStart; i < bytesEnd; i += 2) {
    processedBytes[outIndex++] = 0x8F;
    processedBytes[outIndex++] = bytes[i] | 0x80;
    processedBytes[outIndex++] = bytes[i + 1] | 0x80;
  }

  return processedBytes;
}

function escapeSequenceMatches(escapeSequence, bytes, startIndex) {
  for (var escapeByteIndex = 0; escapeByteIndex < escapeSequence.length; escapeByteIndex++) {
    if (startIndex + escapeByteIndex >= bytes.length) {
      return false;
    } else if (bytes[startIndex + escapeByteIndex] !== escapeSequence[escapeByteIndex]) {
      return false;
    }
  }

  return true;
}

function readEscapeSequence(bytes, start, extensionSets) {
  for (var setIndex = 0; setIndex < extensionSets.length; setIndex++) {
    var extensionSet = extensionSets[setIndex];

    for (var elementIndex = 0; elementIndex < extensionSet.elements.length; elementIndex++) {
      var element = extensionSet.elements[elementIndex];

      if (escapeSequenceMatches(element.escapeSequence, bytes, start)) {
        return element;
      }
    }
  }

  throw new Error('Unknown escape sequence encountered at byte ' + start);
}

function setHighBit(bytes) {
  for (var i = 0; i < bytes.length; i++) {
    bytes[i] |= 0x80;
  }
}

function convertBytes(specificCharacterSet, bytes, options) {
  return convertBytesCore(convertWithoutExtensions, appendRunWithoutPromise, specificCharacterSet, bytes, options);
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: convertBytes, characterSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _convert_bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert-bytes.js */ "./convert-bytes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertBytes", function() { return _convert_bytes_js__WEBPACK_IMPORTED_MODULE_0__["convertBytes"]; });

/* harmony import */ var _character_sets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-sets.js */ "./character-sets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterSets", function() { return _character_sets_js__WEBPACK_IMPORTED_MODULE_1__["characterSets"]; });




/***/ })

/******/ });
});
//# sourceMappingURL=dicom-character-set.js.map