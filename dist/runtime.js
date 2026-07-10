var Avenx = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  // lib/core/index.js
  var index_exports = {};
  __export(index_exports, {
    AvenxApp: () => AvenxApp,
    AvenxBridge: () => AvenxBridge,
    AvenxComponent: () => AvenxComponent,
    AvenxGuard: () => AvenxGuard,
    AvenxLogger: () => AvenxLogger,
    AvenxMock: () => AvenxMock,
    AvenxSandbox: () => AvenxSandbox2,
    AvenxWatcher: () => AvenxWatcher,
    ComputedRegistry: () => ComputedRegistry,
    DomPatcher: () => DomPatcher,
    DynamicEvaluator: () => DynamicEvaluator,
    EventBinder: () => EventBinder,
    EventExecutor: () => EventExecutor,
    HtmlDiff: () => HtmlDiff,
    HtmlEscaper: () => HtmlEscaper,
    LifecycleManager: () => LifecycleManager,
    ListManager: () => ListManager,
    LogLevels: () => LogLevels,
    ProxyHandlerFactory: () => ProxyHandlerFactory,
    SafeHtml: () => SafeHtml,
    Sanitizer: () => Sanitizer,
    StateFactory: () => StateFactory,
    TemplateRenderer: () => TemplateRenderer,
    consoleTransport: () => consoleTransport,
    defaultFormatter: () => defaultFormatter,
    html: () => html,
    logger: () => logger
  });

  // lib/core/reactive/createComputed.js
  var ComputedRegistry = class {
    /**
     * @param {object} [computed] - An object containing computed property definitions (expressions).
     */
    constructor(computed = {}) {
      this.computed = computed || {};
    }
    /**
     * Returns the keys of all registered computed properties.
     * @returns {string[]}
     */
    keys() {
      return Object.keys(this.computed);
    }
    /**
     * Checks if a computed property with the given key exists.
     * @param {string} key - The key to check.
     * @returns {boolean}
     */
    has(key) {
      return Object.prototype.hasOwnProperty.call(this.computed, key);
    }
    /**
     * Returns the expression for a given computed property key.
     * @param {string} key - The key to retrieve.
     * @returns {string|undefined}
     */
    get(key) {
      return this.computed[key];
    }
    /**
     * Returns all registered computed property definitions.
     * @returns {object}
     */
    all() {
      return this.computed;
    }
  };

  // lib/core/runtime/AvenxError.js
  var AvenxErrorCodes = {
    // Compiler Errors (AVX_C*)
    COMPILER_DIST_CREATION_FAILED: "AVX_C01",
    COMPILER_SRC_DIR_MISSING: "AVX_C02",
    // Runtime Errors (AVX_R*)
    MOUNT_TARGET_NOT_FOUND: "AVX_R01",
    PAGE_NOT_FOUND: "AVX_R02",
    COMPONENT_NOT_FOUND: "AVX_R03",
    COMPUTED_CIRCULAR_DEPENDENCY: "AVX_R04",
    COMPUTED_EVALUTION_FAILED: "AVX_R05",
    ROUTER_GUARD_DENIED: "AVX_R06",
    ROUTER_GUARD_ERROR: "AVX_R07",
    TEMPLATE_RENDER_ERROR: "AVX_R08",
    EVENT_HANDLER_ERROR: "AVX_R09",
    BRIDGE_ALREADY_EXISTS: "AVX_R10",
    STATE_MUTATION_IN_UPDATE: "AVX_R11",
    LIFECYCLE_HOOK_ERROR: "AVX_R12",
    DOM_PARSING_FAILED: "AVX_R13",
    ROUTER_GUARD_TIMEOUT: "AVX_R14",
    SANDBOX_VIOLATION: "AVX_R15"
  };
  var AvenxErrorMessages = {
    [AvenxErrorCodes.COMPILER_DIST_CREATION_FAILED]: 'Could not create dist directory at "{0}".',
    [AvenxErrorCodes.COMPILER_SRC_DIR_MISSING]: '"src" directory not found at "{0}". Run "avenx init" to scaffold a project.',
    [AvenxErrorCodes.MOUNT_TARGET_NOT_FOUND]: 'Mount target selector "{0}" was not found in the DOM.',
    [AvenxErrorCodes.PAGE_NOT_FOUND]: 'Page "{0}" is not registered. Ensure page class is named correctly.',
    [AvenxErrorCodes.COMPONENT_NOT_FOUND]: 'Component "{0}" is not registered. Registered components: {1}',
    [AvenxErrorCodes.COMPUTED_CIRCULAR_DEPENDENCY]: 'Circular dependency detected in computed property "{0}".',
    [AvenxErrorCodes.COMPUTED_EVALUTION_FAILED]: 'Failed to evaluate computed property "{0}". Expression: "{1}". Error: {2}',
    [AvenxErrorCodes.ROUTER_GUARD_DENIED]: 'Navigation guard denied transition to route "{0}".',
    [AvenxErrorCodes.ROUTER_GUARD_ERROR]: 'Navigation guard threw an error during evaluation for route "{0}": {1}',
    [AvenxErrorCodes.TEMPLATE_RENDER_ERROR]: 'Failed to render interpolation expression "{0}". Error: {1}',
    [AvenxErrorCodes.EVENT_HANDLER_ERROR]: 'Event handler execution failed for statement "{0}". Error: {1}',
    [AvenxErrorCodes.BRIDGE_ALREADY_EXISTS]: 'Bridge "{0}" is already registered. Available bridges: {1}. Suggestion: {2}',
    [AvenxErrorCodes.STATE_MUTATION_IN_UPDATE]: "State mutation detected during the update/render lifecycle. Avoid modifying component state inside templates, getters, computed property definitions, or lifecycle hooks like onUpdate.",
    [AvenxErrorCodes.LIFECYCLE_HOOK_ERROR]: 'Error in component "{0}" during lifecycle hook "{1}": {2}',
    [AvenxErrorCodes.DOM_PARSING_FAILED]: 'DOM parsing failed due to malformed HTML. Parser error: {0}. HTML context: "{1}"',
    [AvenxErrorCodes.ROUTER_GUARD_TIMEOUT]: 'Navigation guard timed out after {0}ms for route "{1}".',
    [AvenxErrorCodes.SANDBOX_VIOLATION]: "Sandbox security violation: {0}"
  };
  var AvenxError = class extends Error {
    /**
     * Creates an instance of AvenxError.
     * @param {string} code - The AvenxErrorCode identifier.
     * @param {...any} args - Arguments to format within the template message.
     */
    constructor(code, ...args) {
      let message = AvenxErrorMessages[code] || "An unknown framework error occurred.";
      args.forEach((arg, idx) => {
        message = message.replace(`{${idx}}`, String(arg));
      });
      super(`[${code}] ${message}`);
      this.code = code;
      this.name = "AvenxError";
    }
  };
  function formatMessage(code, ...args) {
    let message = AvenxErrorMessages[code] || "An unknown framework error occurred.";
    args.forEach((arg, idx) => {
      message = message.replace(`{${idx}}`, String(arg));
    });
    return `[${code}] ${message}`;
  }

  // lib/core/security/escapeHtml.js
  var HtmlEscaper = class {
    /**
     * Escapes special HTML characters in a string.
     * @param {any} value - The value to escape.
     * @returns {string} The escaped string.
     */
    escape(value) {
      if (value === null || value === void 0) {
        return "";
      }
      return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
  };
  var SafeHtml = class {
    /**
     * @param {any} value
     */
    constructor(value) {
      this.value = String(value);
    }
    /**
     * @returns {string}
     */
    toString() {
      return this.value;
    }
  };
  function html(strings, ...values) {
    if (Array.isArray(strings) && strings.raw) {
      const escaper2 = new HtmlEscaper();
      let result = "";
      for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
          const val = values[i];
          if (val instanceof SafeHtml) {
            result += val.toString();
          } else if (val == null) {
            result += "";
          } else {
            result += escaper2.escape(val);
          }
        }
      }
      return new SafeHtml(result);
    }
    return new SafeHtml(strings);
  }

  // lib/core/runtime/AvenxLogger.js
  var LogLevels = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5,
    off: 6,
    silent: 6
  };
  function defaultFormatter(level, args) {
    const prefix = `[Avenx ${level}]`;
    if (args.length > 0) {
      if (typeof args[0] === "string") {
        return [`${prefix} ${args[0]}`, ...args.slice(1)];
      }
      if (args[0] instanceof Error) {
        return args;
      }
    }
    return [prefix, ...args];
  }
  var consoleTransport = {
    log(level, formattedArgs) {
      const method = level === "fatal" ? "error" : level === "trace" ? "debug" : console[level] ? level : "log";
      if (typeof console !== "undefined" && console[method]) {
        console[method](...formattedArgs);
      }
    }
  };
  var AvenxLogger = class {
    /**
     * Creates an instance of AvenxLogger.
     * @param {object} [config] - Application logger configuration options.
     */
    constructor(config = {}) {
      this.config = {
        level: "info",
        silent: false,
        formatter: defaultFormatter,
        transports: [consoleTransport]
      };
      this.configure(config);
    }
    /**
     * Configures the logger instance options.
     * @param {object} config - Configuration options.
     */
    configure(config) {
      if (!config) return;
      this.config = {
        ...this.config,
        ...config
      };
      if (typeof this.config.level === "string") {
        this.config.level = this.config.level.toLowerCase();
      }
    }
    /**
     * Helper to check if a specific level should be logged.
     * @param {string} level - Log level to test.
     * @returns {boolean} True if logger should log the given level.
     */
    shouldLog(level) {
      if (this.config.silent || this.config.level === "silent" || this.config.level === "off") {
        return false;
      }
      const currentPriority = LogLevels[this.config.level] !== void 0 ? LogLevels[this.config.level] : LogLevels.info;
      const targetPriority = LogLevels[level] !== void 0 ? LogLevels[level] : LogLevels.info;
      return targetPriority >= currentPriority;
    }
    /**
     * Writes the log statement through configured formatter and transports.
     * @param {string} level - Log level name.
     * @param {...any} args - Arguments to log.
     */
    write(level, ...args) {
      if (!this.shouldLog(level)) {
        return;
      }
      const formatted = this.config.formatter ? this.config.formatter(level, args) : args;
      const transports = Array.isArray(this.config.transports) ? this.config.transports : [consoleTransport];
      for (const transport of transports) {
        if (typeof transport === "function") {
          transport(level, formatted, args);
        } else if (transport && typeof transport.log === "function") {
          transport.log(level, formatted, args);
        }
      }
    }
    /**
     * Logs a message with trace level.
     * @param {...any} args - Arguments to log.
     */
    trace(...args) {
      this.write("trace", ...args);
    }
    /**
     * Logs a message with debug level.
     * @param {...any} args - Arguments to log.
     */
    debug(...args) {
      this.write("debug", ...args);
    }
    /**
     * Logs a message with info level.
     * @param {...any} args - Arguments to log.
     */
    info(...args) {
      this.write("info", ...args);
    }
    /**
     * Alias for info level logging.
     * @param {...any} args - Arguments to log.
     */
    log(...args) {
      this.write("info", ...args);
    }
    /**
     * Logs a message with warn level.
     * @param {...any} args - Arguments to log.
     */
    warn(...args) {
      this.write("warn", ...args);
    }
    /**
     * Logs a message with error level.
     * @param {...any} args - Arguments to log.
     */
    error(...args) {
      this.write("error", ...args);
    }
    /**
     * Logs a message with fatal level.
     * @param {...any} args - Arguments to log.
     */
    fatal(...args) {
      this.write("fatal", ...args);
    }
  };
  var logger = new AvenxLogger();

  // lib/core/renderer/renderTemplate.js
  var templateEscaper = new HtmlEscaper();
  var TemplateRenderer = class {
    /**
     * Renders the template by replacing {{ expression }} and {{{ expression }}} with evaluated values.
     * @param {string} template - The HTML template string.
     * @param {function(string): any} resolveExpression - Function to evaluate expressions.
     * @returns {string} The rendered HTML string.
     */
    render(template, resolveExpression) {
      return template.replace(/\{\{\{\s*(.*?)\s*\}\}\}|\{\{\s*(.*?)\s*\}\}/g, (match, gp1, gp2) => {
        const isRaw = gp1 !== void 0;
        const expression = isRaw ? gp1 : gp2;
        try {
          const value = resolveExpression(expression);
          if (value == null) {
            return "";
          }
          if (isRaw || value instanceof SafeHtml) {
            return String(value);
          }
          return templateEscaper.escape(value);
        } catch (error) {
          if (error && error.code === AvenxErrorCodes.STATE_MUTATION_IN_UPDATE) {
            throw error;
          }
          logger.warn(formatMessage(AvenxErrorCodes.TEMPLATE_RENDER_ERROR, expression, error));
          return "";
        }
      });
    }
  };

  // lib/core/renderer/domPatch.js
  var escaper = new HtmlEscaper();
  var BOOLEAN_ATTRIBUTES = /* @__PURE__ */ new Set([
    "checked",
    "disabled",
    "required",
    "readonly",
    "selected",
    "multiple",
    "autofocus",
    "novalidate",
    "formnovalidate",
    "hidden",
    "open",
    "reversed",
    "loop",
    "controls",
    "autoplay",
    "muted",
    "default",
    "ismap",
    "async",
    "defer"
  ]);
  function getTransitionDuration(el) {
    if (!el || typeof window === "undefined" || !window.getComputedStyle) return 0;
    const styles = window.getComputedStyle(el);
    const transitionDelay = styles.transitionDelay || "";
    const transitionDuration = styles.transitionDuration || "";
    const animationDelay = styles.animationDelay || "";
    const animationDuration = styles.animationDuration || "";
    const parseTime = (timeStr) => {
      if (!timeStr) return 0;
      const times = timeStr.split(",").map((t) => {
        const match = t.trim().match(/^([0-9.]+)(s|ms)$/i);
        if (!match) return 0;
        const val = parseFloat(match[1]);
        const unit = match[2].toLowerCase();
        return unit === "ms" ? val : val * 1e3;
      });
      return Math.max(...times, 0);
    };
    const tDuration = parseTime(transitionDuration);
    const tDelay = parseTime(transitionDelay);
    const aDuration = parseTime(animationDuration);
    const aDelay = parseTime(animationDelay);
    return Math.max(tDuration + tDelay, aDuration + aDelay);
  }
  var _DomPatcher_instances, patchNode_fn, isSameNodeType_fn, patchAttributes_fn, cleanBooleanAttributes_fn, cleanBooleanAttributesForNode_fn, prepareNode_fn, applyDirectives_fn;
  var DomPatcher = class {
    constructor() {
      __privateAdd(this, _DomPatcher_instances);
    }
    /**
     * Patches the target element with the provided HTML.
     * @param {Element} target - The element to patch.
     * @param {string} html - The new HTML content.
     * @param {function(string): any} [resolveExpression] - Function to evaluate expressions.
     */
    patch(target, html2, resolveExpression) {
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(html2, "text/html");
      const parserError = newDoc && typeof newDoc.querySelector === "function" ? newDoc.querySelector("parsererror") : null;
      if (parserError) {
        const errorMsg = parserError.textContent ? parserError.textContent.trim() : "Unknown parsing error";
        logger.warn(formatMessage(AvenxErrorCodes.DOM_PARSING_FAILED, errorMsg, html2));
        return;
      }
      const newRoot = newDoc.body;
      this.flattenTransitionTags(newRoot);
      __privateMethod(this, _DomPatcher_instances, patchNode_fn).call(this, target, newRoot, true, true, resolveExpression);
    }
    /**
     * Patches an existing element with a new element structure in-place.
     * @param {Element} oldElement - The existing element.
     * @param {Element} newElement - The new element structure.
     * @param {function(string): any} [resolveExpression] - Function to evaluate expressions.
     */
    patchElement(oldElement, newElement, resolveExpression) {
      this.flattenTransitionTags(newElement);
      __privateMethod(this, _DomPatcher_instances, patchNode_fn).call(this, oldElement, newElement, false, true, resolveExpression);
    }
    /**
     * Cleans an element by removing boolean attributes that evaluate to false.
     * @param {Element} element - The element to clean.
     * @returns {Element} The cleaned element.
     */
    cleanElement(element) {
      if (element && element.nodeType === Node.ELEMENT_NODE) {
        this.flattenTransitionTags(element);
        __privateMethod(this, _DomPatcher_instances, cleanBooleanAttributes_fn).call(this, element);
      }
      return element;
    }
    /**
     * Recursively applies custom directives to an element and its children.
     * @param {Element} element - The element tree root.
     * @param {function(string): any} resolveExpression - The expression evaluator.
     */
    applyDirectives(element, resolveExpression) {
      const skip = __privateMethod(this, _DomPatcher_instances, applyDirectives_fn).call(this, element, resolveExpression);
      if (!skip) {
        const children = Array.from(element.childNodes);
        for (const child of children) {
          if (child.nodeType === Node.ELEMENT_NODE) {
            this.applyDirectives(child, resolveExpression);
          }
        }
      }
    }
    /**
     * Applies the enter transition classes and triggers animation/transition.
     * @param {Element} el - The element to animate.
     * @param {string} transitionName - The transition name (e.g. 'fade').
     */
    enter(el, transitionName) {
      if (el.nodeType !== Node.ELEMENT_NODE) return;
      const name = transitionName || "ax";
      const enterClass = `${name}-enter`;
      const enterActiveClass = `${name}-enter-active`;
      const enterToClass = `${name}-enter-to`;
      if (el._cleanupTransition) {
        el._cleanupTransition();
      }
      el.classList.add(enterClass);
      el.classList.add(enterActiveClass);
      let resolved = false;
      let timeoutId = null;
      const done = () => {
        if (resolved) return;
        resolved = true;
        el.classList.remove(enterActiveClass);
        el.classList.remove(enterToClass);
        el.removeEventListener("transitionend", done);
        el.removeEventListener("animationend", done);
        if (timeoutId) clearTimeout(timeoutId);
        delete el._cleanupTransition;
      };
      el._cleanupTransition = done;
      el.addEventListener("transitionend", done);
      el.addEventListener("animationend", done);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (resolved) return;
          el.classList.remove(enterClass);
          el.classList.add(enterToClass);
          const duration = getTransitionDuration(el);
          if (duration === 0) {
            done();
          } else {
            timeoutId = setTimeout(done, duration + 50);
          }
        });
      });
    }
    /**
     * Applies the leave transition classes, triggers animation, and cleans up when complete.
     * @param {Element} el - The element to animate.
     * @param {string} transitionName - The transition name (e.g. 'fade').
     * @param {function(): void} removeCallback - Callback invoked when the leave transition completes.
     */
    leave(el, transitionName, removeCallback) {
      if (el.nodeType !== Node.ELEMENT_NODE) {
        if (removeCallback) removeCallback();
        return;
      }
      const name = transitionName || "ax";
      const leaveClass = `${name}-leave`;
      const leaveActiveClass = `${name}-leave-active`;
      const leaveToClass = `${name}-leave-to`;
      if (el._cleanupTransition) {
        el._cleanupTransition();
      }
      el._isLeaving = true;
      el.classList.add(leaveClass);
      el.classList.add(leaveActiveClass);
      let resolved = false;
      let timeoutId = null;
      const done = () => {
        if (resolved) return;
        resolved = true;
        el.classList.remove(leaveActiveClass);
        el.classList.remove(leaveToClass);
        el.removeEventListener("transitionend", done);
        el.removeEventListener("animationend", done);
        if (timeoutId) clearTimeout(timeoutId);
        delete el._cleanupTransition;
        delete el._isLeaving;
        if (removeCallback) removeCallback();
      };
      el._cleanupTransition = done;
      el.addEventListener("transitionend", done);
      el.addEventListener("animationend", done);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (resolved) return;
          el.classList.remove(leaveClass);
          el.classList.add(leaveToClass);
          const duration = getTransitionDuration(el);
          if (duration === 0) {
            done();
          } else {
            timeoutId = setTimeout(done, duration + 50);
          }
        });
      });
    }
    /**
     * Resolves the transition name for an element.
     * @param {Element} el - The element.
     * @param {function(string): any} [resolveExpression] - The expression evaluator.
     * @returns {string|null} The resolved transition name, or null.
     */
    getTransitionName(el, resolveExpression) {
      if (!el || el.nodeType !== Node.ELEMENT_NODE) return null;
      if (!el.hasAttribute("data-ax-transition")) return null;
      const expr = el.getAttribute("data-ax-transition");
      if (!expr) return "ax";
      if (!resolveExpression) return expr;
      try {
        const val = resolveExpression(expr);
        return typeof val === "string" ? val : expr;
      } catch {
        return expr;
      }
    }
    /**
     * Triggers the enter transition if transition configurations are present.
     * @param {Element} el - The element.
     * @param {function(string): any} [resolveExpression] - The expression evaluator.
     */
    triggerEnter(el, resolveExpression) {
      if (el.nodeType !== Node.ELEMENT_NODE) return;
      const transitionName = this.getTransitionName(el, resolveExpression);
      if (transitionName) {
        el._transitionName = transitionName;
        this.enter(el, transitionName);
      }
    }
    /**
     * Triggers the leave transition if transition configurations are present.
     * @param {Element} el - The element.
     * @param {function(string): any} [resolveExpression] - The expression evaluator.
     * @param {function(): void} removeCallback - Callback invoked when transition completes or immediately.
     */
    triggerLeave(el, resolveExpression, removeCallback) {
      if (el.nodeType !== Node.ELEMENT_NODE) {
        if (removeCallback) removeCallback();
        return;
      }
      const transitionName = el._transitionName || this.getTransitionName(el, resolveExpression);
      if (transitionName) {
        this.leave(el, transitionName, removeCallback);
      } else {
        if (removeCallback) removeCallback();
      }
    }
    /**
     * Flattens <transition> elements inside a root element.
     * @param {Element} node - The root element.
     */
    flattenTransitionTags(node) {
      if (!node || node.nodeType !== Node.ELEMENT_NODE) return;
      const transitions = Array.from(node.querySelectorAll("transition"));
      for (const trans of transitions) {
        const nameAttr = trans.getAttribute("name");
        let transitionValue = "ax";
        if (nameAttr) {
          if (nameAttr.startsWith("{{") && nameAttr.endsWith("}}")) {
            transitionValue = nameAttr.slice(2, -2).trim();
          } else {
            transitionValue = nameAttr;
          }
        }
        const children = Array.from(trans.childNodes);
        for (const child of children) {
          if (child.nodeType === Node.ELEMENT_NODE) {
            child.setAttribute("data-ax-transition", transitionValue);
          }
          trans.parentNode.insertBefore(child, trans);
        }
        trans.parentNode.removeChild(trans);
      }
    }
  };
  _DomPatcher_instances = new WeakSet();
  /**
   * Recursively diffs and patches two nodes.
   * @param {Node} oldNode - The existing DOM node.
   * @param {Node} newNode - The new node structure.
   * @param {boolean} [isBodyWrapper] - Whether the new node is a temporary body wrapper.
   * @param {boolean} [isPatchRoot] - Whether this is the root node of the patching operation.
   * @param {function(string): any} [resolveExpression] - Function to evaluate expressions.
   * @private
   */
  patchNode_fn = function(oldNode, newNode, isBodyWrapper = false, isPatchRoot = false, resolveExpression) {
    if (!isPatchRoot && oldNode.nodeType === Node.ELEMENT_NODE && oldNode.nodeName === "SLOT" && oldNode.hasAttribute("data-avenx-transcluded")) {
      if (newNode.nodeType === Node.ELEMENT_NODE) {
        __privateMethod(this, _DomPatcher_instances, patchAttributes_fn).call(this, oldNode, newNode);
        oldNode.setAttribute("data-avenx-transcluded", "true");
        if (resolveExpression) {
          __privateMethod(this, _DomPatcher_instances, applyDirectives_fn).call(this, oldNode, resolveExpression);
        }
      }
      return;
    }
    if (!isPatchRoot && oldNode.nodeType === Node.ELEMENT_NODE && oldNode.hasAttribute("data-avenx-comp")) {
      if (newNode.nodeType === Node.ELEMENT_NODE) {
        __privateMethod(this, _DomPatcher_instances, patchAttributes_fn).call(this, oldNode, newNode);
        const compInstance = oldNode.__avenx_comp_instance;
        if (compInstance && typeof compInstance.__updateTranscludedContent === "function") {
          compInstance.__updateTranscludedContent(newNode.childNodes);
        }
        if (resolveExpression) {
          __privateMethod(this, _DomPatcher_instances, applyDirectives_fn).call(this, oldNode, resolveExpression);
        }
      }
      return;
    }
    if (!isPatchRoot && oldNode.nodeType === Node.ELEMENT_NODE && (oldNode.tagName.toLowerCase() === "template" || oldNode.tagName.toLowerCase() === "@for")) {
      if (newNode.nodeType === Node.ELEMENT_NODE) {
        __privateMethod(this, _DomPatcher_instances, patchAttributes_fn).call(this, oldNode, newNode);
      }
      return;
    }
    if (!isPatchRoot && oldNode.nodeType === Node.ELEMENT_NODE && oldNode.hasAttribute("data-ax-static")) {
      return;
    }
    let skipChildren = false;
    if (!isBodyWrapper && oldNode.nodeType === Node.ELEMENT_NODE && newNode.nodeType === Node.ELEMENT_NODE) {
      __privateMethod(this, _DomPatcher_instances, patchAttributes_fn).call(this, oldNode, newNode);
      if (resolveExpression) {
        skipChildren = __privateMethod(this, _DomPatcher_instances, applyDirectives_fn).call(this, oldNode, resolveExpression);
      }
    }
    if (skipChildren) {
      return;
    }
    const oldChildren = Array.from(oldNode.childNodes).filter((child) => !child._isLeaving);
    const newChildren = Array.from(newNode.childNodes);
    let oldIndex = 0;
    let newIndex = 0;
    while (newIndex < newChildren.length) {
      const newChild = newChildren[newIndex];
      let oldChild = oldChildren[oldIndex];
      while (oldChild && oldChild.nodeType === Node.ELEMENT_NODE && oldChild.hasAttribute("data-ax-list-item")) {
        oldIndex++;
        oldChild = oldChildren[oldIndex];
      }
      if (!oldChild) {
        const isParentSvg = oldNode && oldNode.nodeType === Node.ELEMENT_NODE && (oldNode.namespaceURI === "http://www.w3.org/2000/svg" || oldNode.tagName.toLowerCase() === "svg");
        const prepared = __privateMethod(this, _DomPatcher_instances, prepareNode_fn).call(this, newChild, isParentSvg, resolveExpression);
        oldNode.appendChild(prepared);
        this.triggerEnter(prepared, resolveExpression);
      } else if (__privateMethod(this, _DomPatcher_instances, isSameNodeType_fn).call(this, oldChild, newChild)) {
        if (oldChild.nodeType === Node.TEXT_NODE) {
          if (oldChild.textContent !== newChild.textContent) {
            oldChild.textContent = newChild.textContent;
          }
        } else {
          __privateMethod(this, _DomPatcher_instances, patchNode_fn).call(this, oldChild, newChild, false, false, resolveExpression);
        }
        oldIndex++;
      } else {
        const isParentSvg = oldNode && oldNode.nodeType === Node.ELEMENT_NODE && (oldNode.namespaceURI === "http://www.w3.org/2000/svg" || oldNode.tagName.toLowerCase() === "svg");
        const prepared = __privateMethod(this, _DomPatcher_instances, prepareNode_fn).call(this, newChild, isParentSvg, resolveExpression);
        const transitionName = this.getTransitionName(oldChild, resolveExpression);
        if (transitionName) {
          oldNode.insertBefore(prepared, oldChild);
          this.triggerLeave(oldChild, resolveExpression, () => {
            if (oldChild.parentNode === oldNode) {
              oldNode.removeChild(oldChild);
            }
          });
        } else {
          oldNode.replaceChild(prepared, oldChild);
        }
        this.triggerEnter(prepared, resolveExpression);
        oldIndex++;
      }
      newIndex++;
    }
    while (oldIndex < oldChildren.length) {
      const oldChild = oldChildren[oldIndex];
      if (!(oldChild.nodeType === Node.ELEMENT_NODE && oldChild.hasAttribute("data-ax-list-item"))) {
        this.triggerLeave(oldChild, resolveExpression, () => {
          if (oldChild.parentNode === oldNode) {
            oldNode.removeChild(oldChild);
          }
        });
      }
      oldIndex++;
    }
  };
  /**
   * Checks if two nodes are of the same type and name.
   * @param {Node} nodeA
   * @param {Node} nodeB
   * @private
   */
  isSameNodeType_fn = function(nodeA, nodeB) {
    return nodeA.nodeType === nodeB.nodeType && nodeA.nodeName === nodeB.nodeName;
  };
  /**
   * Syncs attributes from newNode to oldNode.
   * @param {Element} oldNode
   * @param {Element} newNode
   * @private
   */
  patchAttributes_fn = function(oldNode, newNode) {
    const oldAttrs = oldNode.attributes;
    const newAttrs = newNode.attributes;
    for (let i = oldAttrs.length - 1; i >= 0; i--) {
      const attr = oldAttrs[i];
      if (!newNode.hasAttribute(attr.name)) {
        oldNode.removeAttribute(attr.name);
        if (BOOLEAN_ATTRIBUTES.has(attr.name.toLowerCase())) {
          oldNode[attr.name] = false;
        }
        if (attr.name === "value" && ["INPUT", "TEXTAREA", "SELECT"].includes(oldNode.nodeName)) {
          oldNode.value = "";
        }
      }
    }
    for (let i = 0; i < newAttrs.length; i++) {
      const attr = newAttrs[i];
      const isBoolean = BOOLEAN_ATTRIBUTES.has(attr.name.toLowerCase());
      if (isBoolean) {
        const isFalsy = attr.value === "false" || attr.value === null || attr.value === void 0;
        if (isFalsy) {
          if (oldNode.hasAttribute(attr.name)) {
            oldNode.removeAttribute(attr.name);
          }
          oldNode[attr.name] = false;
        } else {
          if (oldNode.getAttribute(attr.name) !== attr.value) {
            oldNode.setAttribute(attr.name, attr.value);
          }
          oldNode[attr.name] = true;
        }
      } else {
        if (oldNode.getAttribute(attr.name) !== attr.value) {
          oldNode.setAttribute(attr.name, attr.value);
        }
        if (attr.name === "value" && ["INPUT", "TEXTAREA", "SELECT"].includes(oldNode.nodeName)) {
          if (oldNode.value !== attr.value) {
            oldNode.value = attr.value;
          }
        }
      }
    }
  };
  /**
   * Recursively finds and cleans boolean attributes that evaluate to false in a subtree.
   * @param {Element} element - The root element to clean.
   * @private
   */
  cleanBooleanAttributes_fn = function(element) {
    const elements = [element, ...element.querySelectorAll("*")];
    for (const el of elements) {
      const attrs = Array.from(el.attributes);
      for (const attr of attrs) {
        if (BOOLEAN_ATTRIBUTES.has(attr.name.toLowerCase())) {
          const isFalsy = attr.value === "false" || attr.value === null || attr.value === void 0;
          if (isFalsy) {
            el.removeAttribute(attr.name);
            el[attr.name] = false;
          } else {
            el[attr.name] = true;
          }
        }
      }
    }
  };
  /**
   * Cleans boolean attributes of a single element in-place.
   * @param {Element} el
   * @private
   */
  cleanBooleanAttributesForNode_fn = function(el) {
    const attrs = Array.from(el.attributes);
    for (const attr of attrs) {
      if (BOOLEAN_ATTRIBUTES.has(attr.name.toLowerCase())) {
        const isFalsy = attr.value === "false" || attr.value === null || attr.value === void 0;
        if (isFalsy) {
          el.removeAttribute(attr.name);
          el[attr.name] = false;
        } else {
          el[attr.name] = true;
        }
      }
    }
  };
  /**
   * Prepares a node for insertion into the DOM by cleaning its boolean attributes
   * and ensuring correct namespaces for SVG elements.
   * If a node already has the correct namespace, it is prepared in-place without cloning.
   * @param {Node} node - The node to prepare.
   * @param {boolean} [isSvg] - Whether the node is within an SVG context.
   * @param {function(string): any} [resolveExpression] - Function to evaluate expressions.
   * @returns {Node} The prepared node.
   * @private
   */
  prepareNode_fn = function(node, isSvg = false, resolveExpression) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase();
      if (tagName === "template" || tagName === "@for") {
        return node;
      }
      const currentIsSvg = isSvg || tagName === "svg";
      let skipChildren = false;
      if (resolveExpression) {
        skipChildren = __privateMethod(this, _DomPatcher_instances, applyDirectives_fn).call(this, node, resolveExpression);
      }
      if (currentIsSvg) {
        if (node.namespaceURI === "http://www.w3.org/2000/svg") {
          __privateMethod(this, _DomPatcher_instances, cleanBooleanAttributesForNode_fn).call(this, node);
          if (!skipChildren) {
            const children = Array.from(node.childNodes);
            for (const child of children) {
              __privateMethod(this, _DomPatcher_instances, prepareNode_fn).call(this, child, currentIsSvg, resolveExpression);
            }
          }
          return node;
        } else {
          const svgElement = document.createElementNS("http://www.w3.org/2000/svg", tagName);
          const attrs = node.attributes;
          if (attrs) {
            for (let i = 0; i < attrs.length; i++) {
              const attr = attrs[i];
              const isBoolean = BOOLEAN_ATTRIBUTES.has(attr.name.toLowerCase());
              const isFalsy = attr.value === "false" || attr.value === null || attr.value === void 0;
              if (isBoolean && isFalsy) {
                svgElement[attr.name] = false;
              } else {
                svgElement.setAttribute(attr.name, attr.value);
                if (isBoolean) {
                  svgElement[attr.name] = true;
                }
              }
            }
          }
          if (resolveExpression) {
            __privateMethod(this, _DomPatcher_instances, applyDirectives_fn).call(this, svgElement, resolveExpression);
          }
          if (!skipChildren) {
            const children = Array.from(node.childNodes);
            for (const child of children) {
              svgElement.appendChild(__privateMethod(this, _DomPatcher_instances, prepareNode_fn).call(this, child, currentIsSvg, resolveExpression));
            }
          }
          return svgElement;
        }
      } else {
        __privateMethod(this, _DomPatcher_instances, cleanBooleanAttributesForNode_fn).call(this, node);
        if (!skipChildren) {
          const children = Array.from(node.childNodes);
          for (const child of children) {
            __privateMethod(this, _DomPatcher_instances, prepareNode_fn).call(this, child, false, resolveExpression);
          }
        }
        return node;
      }
    }
    return node;
  };
  /**
   * Evaluates and applies directives on a single element.
   * @param {Element} el - The element to evaluate directives on.
   * @param {function(string): any} resolveExpression - The expression evaluator.
   * @returns {boolean} Whether children evaluation/diffing should be skipped.
   * @private
   */
  applyDirectives_fn = function(el, resolveExpression) {
    if (!resolveExpression || el.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }
    let skipChildren = false;
    if (el.hasAttribute("data-ax-html")) {
      const expr = el.getAttribute("data-ax-html");
      try {
        const value = resolveExpression(expr);
        let resolvedHtml = "";
        if (value instanceof SafeHtml) {
          resolvedHtml = value.toString();
        } else if (value == null) {
          resolvedHtml = "";
        } else {
          resolvedHtml = escaper.escape(value);
        }
        if (el.innerHTML !== resolvedHtml) {
          el.innerHTML = resolvedHtml;
        }
        skipChildren = true;
      } catch (err) {
        logger.warn(`[DomPatcher Error] Failed to evaluate data-ax-html: ${expr}`, err);
      }
    }
    if (el.hasAttribute("data-ax-show")) {
      const expr = el.getAttribute("data-ax-show");
      try {
        const value = !!resolveExpression(expr);
        const hasOriginal = typeof el.__originalDisplay !== "undefined";
        if (!hasOriginal) {
          el.__originalDisplay = el.style.display || "";
        }
        const isCurrentlyVisible = el.style.display !== "none";
        if (!el.axShowInitialized) {
          el.style.display = value ? el.__originalDisplay : "none";
          el.axShowInitialized = true;
        } else if (value !== isCurrentlyVisible) {
          const transitionName = this.getTransitionName(el, resolveExpression);
          if (transitionName) {
            if (value) {
              el.style.display = el.__originalDisplay;
              this.enter(el, transitionName);
            } else {
              this.leave(el, transitionName, () => {
                el.style.display = "none";
              });
            }
          } else {
            el.style.display = value ? el.__originalDisplay : "none";
          }
        }
      } catch (err) {
        logger.warn(`[DomPatcher Error] Failed to evaluate data-ax-show: ${expr}`, err);
      }
    }
    if (el.hasAttribute("data-ax-class")) {
      const expr = el.getAttribute("data-ax-class");
      try {
        const value = resolveExpression(expr);
        if (el.__lastAxClasses) {
          for (const cls of el.__lastAxClasses) {
            el.classList.remove(cls);
          }
        }
        const newClasses = [];
        if (typeof value === "string") {
          newClasses.push(...value.split(/\s+/).filter(Boolean));
        } else if (value && typeof value === "object") {
          for (const [cls, enabled] of Object.entries(value)) {
            if (enabled) {
              newClasses.push(cls);
            }
          }
        }
        for (const cls of newClasses) {
          el.classList.add(cls);
        }
        el.__lastAxClasses = newClasses;
      } catch (err) {
        logger.warn(`[DomPatcher Error] Failed to evaluate data-ax-class: ${expr}`, err);
      }
    }
    return skipChildren;
  };

  // lib/core/events/bindEvents.js
  function belongsToComponent(element, root) {
    let current = element;
    let isTranscluded = false;
    while (current && current !== root) {
      if (current.nodeType === 1) {
        if (current.nodeName === "SLOT" && current.hasAttribute && current.hasAttribute("data-avenx-transcluded")) {
          isTranscluded = true;
        } else if (current.hasAttribute && current.hasAttribute("data-avenx-comp")) {
          if (isTranscluded) {
            isTranscluded = false;
          } else {
            return false;
          }
        }
      }
      current = current.parentNode;
    }
    return !isTranscluded;
  }
  var _boundEvents, _onceExecuted, _EventBinder_instances, bindDelegated_fn, unbindDelegated_fn, bindDirect_fn, executeWithModifiers_fn, unbindDirect_fn;
  var EventBinder = class {
    constructor() {
      __privateAdd(this, _EventBinder_instances);
      /**
       * Stores bound events and handlers.
       * @type {WeakMap<Element, Map<string, Function>>}
       * @private
       */
      __privateAdd(this, _boundEvents, /* @__PURE__ */ new WeakMap());
      /**
       * Stores elements and executed modifier keys for once handlers.
       * @type {WeakMap<Element, Set<string>>}
       * @private
       */
      __privateAdd(this, _onceExecuted, /* @__PURE__ */ new WeakMap());
    }
    /**
     * Binds event listeners to all elements under the root that have attributes starting with '@'.
     * Uses event delegation on Element roots, falls back to direct binding on DocumentFragments.
     * @param {Element|DocumentFragment} root - The root element to bind events on.
     * @param {object} dispatcher - The object responsible for executing the event handler.
     * @param {function(string, Event): void} dispatcher.execute - Method to execute the event.
     */
    bind(root, dispatcher) {
      if (!root) return;
      if (root.nodeType === 11) {
        __privateMethod(this, _EventBinder_instances, bindDirect_fn).call(this, root, dispatcher);
      } else {
        __privateMethod(this, _EventBinder_instances, bindDelegated_fn).call(this, root, dispatcher);
      }
    }
    /**
     * Removes all event listeners for the given root.
     * @param {Element|DocumentFragment} root
     */
    unbind(root) {
      if (!root) return;
      if (root.nodeType === 11) {
        __privateMethod(this, _EventBinder_instances, unbindDirect_fn).call(this, root);
      } else {
        __privateMethod(this, _EventBinder_instances, unbindDelegated_fn).call(this, root);
        __privateMethod(this, _EventBinder_instances, unbindDirect_fn).call(this, root);
      }
    }
  };
  _boundEvents = new WeakMap();
  _onceExecuted = new WeakMap();
  _EventBinder_instances = new WeakSet();
  /**
   * @param {Element} root
   * @param {object} dispatcher
   */
  bindDelegated_fn = function(root, dispatcher) {
    const eventNames = /* @__PURE__ */ new Set();
    const traverse = (node) => {
      if (node.nodeType !== 1) return;
      if (node.attributes) {
        Array.from(node.attributes).forEach((attr) => {
          if (attr.name.startsWith("@")) {
            const fullEventName = attr.name.substring(1);
            const baseEventName = fullEventName.split(".")[0];
            eventNames.add(baseEventName);
          }
        });
      }
      if (node.nodeName === "SLOT" && node.hasAttribute && node.hasAttribute("data-avenx-transcluded")) {
        return;
      }
      if (node !== root && node.hasAttribute && node.hasAttribute("data-avenx-comp")) {
        return;
      }
      const children = node.childNodes || node.children;
      if (children) {
        for (let i = 0; i < children.length; i++) {
          traverse(children[i]);
        }
      }
    };
    traverse(root);
    eventNames.forEach((eventName) => {
      const existing = __privateGet(this, _boundEvents).get(root) || /* @__PURE__ */ new Map();
      if (!existing.has(eventName)) {
        const handler = (event) => {
          let current = event && event.target || root;
          while (current) {
            if (belongsToComponent(current, root)) {
              if (current.attributes) {
                Array.from(current.attributes).forEach((attr) => {
                  if (attr.name.startsWith("@")) {
                    const fullEventName = attr.name.substring(1);
                    const parts = fullEventName.split(".");
                    const baseEventName = parts[0];
                    if (baseEventName === eventName) {
                      const modifiers = parts.slice(1);
                      const handlerExpression = attr.value;
                      if (handlerExpression) {
                        __privateMethod(this, _EventBinder_instances, executeWithModifiers_fn).call(this, dispatcher, handlerExpression, event, modifiers, current, attr.name);
                      }
                    }
                  }
                });
              }
            }
            if (current === root) {
              break;
            }
            current = current.parentNode;
            if (event.cancelBubble) {
              break;
            }
          }
        };
        root.addEventListener(eventName, handler);
        existing.set(eventName, handler);
        __privateGet(this, _boundEvents).set(root, existing);
      }
    });
  };
  /**
   * @param {Element} root
   */
  unbindDelegated_fn = function(root) {
    const existing = __privateGet(this, _boundEvents).get(root);
    if (!existing) return;
    existing.forEach((handler, eventName) => {
      root.removeEventListener(eventName, handler);
    });
    __privateGet(this, _boundEvents).delete(root);
  };
  /**
   * @param {Element|DocumentFragment} root
   * @param {object} dispatcher
   */
  bindDirect_fn = function(root, dispatcher) {
    const elements = [];
    const traverse = (node) => {
      if (node.nodeType !== 1 && node.nodeType !== 11) return;
      if (node.nodeType === 1) {
        elements.push(node);
      }
      if (node.nodeName === "SLOT" && node.hasAttribute && node.hasAttribute("data-avenx-transcluded")) {
        return;
      }
      const children = node.childNodes || node.children;
      if (children) {
        for (let i = 0; i < children.length; i++) {
          traverse(children[i]);
        }
      }
    };
    traverse(root);
    elements.forEach((el) => {
      if (el.nodeType !== 1) return;
      if (!el.attributes) return;
      Array.from(el.attributes).forEach((attr) => {
        if (attr.name.startsWith("@")) {
          const fullEventName = attr.name.substring(1);
          const parts = fullEventName.split(".");
          const baseEventName = parts[0];
          const existing = __privateGet(this, _boundEvents).get(el) || /* @__PURE__ */ new Map();
          if (!existing.has(baseEventName)) {
            const handler = (event) => {
              if (el.attributes) {
                Array.from(el.attributes).forEach((a) => {
                  if (a.name.startsWith("@")) {
                    const fEventName = a.name.substring(1);
                    const p = fEventName.split(".");
                    const bEventName = p[0];
                    if (bEventName === baseEventName) {
                      const mods = p.slice(1);
                      const handlerExpression = a.value;
                      if (handlerExpression) {
                        __privateMethod(this, _EventBinder_instances, executeWithModifiers_fn).call(this, dispatcher, handlerExpression, event, mods, el, a.name);
                      }
                    }
                  }
                });
              }
            };
            el.addEventListener(baseEventName, handler);
            existing.set(baseEventName, handler);
            __privateGet(this, _boundEvents).set(el, existing);
          }
        }
      });
    });
  };
  /**
   * Executes the handler expression if modifiers permit, and applies modifier effects.
   * @param {object} dispatcher
   * @param {string} handlerExpression
   * @param {Event} event
   * @param {string[]} modifiers
   * @param {Element} el
   * @param {string} attrName
   * @private
   */
  executeWithModifiers_fn = function(dispatcher, handlerExpression, event, modifiers, el, attrName) {
    if (modifiers.includes("once")) {
      let executedSet = __privateGet(this, _onceExecuted).get(el);
      if (!executedSet) {
        executedSet = /* @__PURE__ */ new Set();
        __privateGet(this, _onceExecuted).set(el, executedSet);
      }
      if (executedSet.has(attrName)) {
        return;
      }
      executedSet.add(attrName);
    }
    if (event && typeof event.key === "string") {
      const hasKeyModifier = modifiers.includes("enter") || modifiers.includes("escape");
      if (hasKeyModifier) {
        const key = event.key.toLowerCase();
        if (modifiers.includes("enter") && key !== "enter") {
          return;
        }
        if (modifiers.includes("escape") && key !== "escape" && key !== "esc") {
          return;
        }
      }
    }
    if (modifiers.includes("prevent") && event && typeof event.preventDefault === "function") {
      event.preventDefault();
    }
    if (modifiers.includes("stop") && event && typeof event.stopPropagation === "function") {
      event.stopPropagation();
    }
    dispatcher.execute(handlerExpression, event);
  };
  /**
   * @param {Element|DocumentFragment} root
   */
  unbindDirect_fn = function(root) {
    const elements = [];
    const traverse = (node) => {
      if (node.nodeType !== 1 && node.nodeType !== 11) return;
      if (node.nodeType === 1) {
        elements.push(node);
      }
      if (node.nodeName === "SLOT" && node.hasAttribute && node.hasAttribute("data-avenx-transcluded")) {
        return;
      }
      const children = node.childNodes || node.children;
      if (children) {
        for (let i = 0; i < children.length; i++) {
          traverse(children[i]);
        }
      }
    };
    traverse(root);
    elements.forEach((el) => {
      const existing = __privateGet(this, _boundEvents).get(el);
      if (!existing) return;
      existing.forEach((handler, eventName) => {
        el.removeEventListener(eventName, handler);
      });
      __privateGet(this, _boundEvents).delete(el);
    });
  };

  // lib/core/events/eventExecutor.js
  var EventExecutor = class {
    /**
     * @param {function(string, Event|null): any} runHandler - Function that executes the event logic.
     */
    constructor(runHandler) {
      this.runHandler = runHandler;
    }
    /**
     * Executes the event handler for a given source.
     * @param {string} source - The source code or identifier for the event handler.
     * @param {Event|null} [event] - The event object, if any.
     * @returns {any} The result of the event handler execution.
     */
    execute(source, event = null) {
      return this.runHandler(source, event);
    }
  };

  // lib/core/security/sandbox.js
  var ALLOWED_GLOBALS = /* @__PURE__ */ new Set([
    "Math",
    "JSON",
    "Array",
    "Object",
    "String",
    "Number",
    "Boolean",
    "Date",
    "Error",
    "Map",
    "Set",
    "Promise",
    "console",
    "parseInt",
    "parseFloat",
    "isNaN",
    "isFinite",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "undefined",
    "NaN",
    "Infinity"
  ]);
  var RAW_TARGET = /* @__PURE__ */ Symbol.for("rawTarget");
  var proxyCache = /* @__PURE__ */ new WeakMap();
  try {
    Object.defineProperty(Function.prototype, "constructor", {
      get() {
        throw new AvenxError(
          AvenxErrorCodes.SANDBOX_VIOLATION,
          "Access to Function constructor is blocked for security reasons."
        );
      },
      configurable: true
    });
  } catch {
  }
  function unwrap(val) {
    if (val && typeof val === "object" && val[RAW_TARGET]) {
      return val[RAW_TARGET];
    }
    return val;
  }
  function wrapValue(val) {
    if (val === null || val === void 0) {
      return val;
    }
    if (typeof val !== "object" && typeof val !== "function") {
      return val;
    }
    if (proxyCache.has(val)) {
      return proxyCache.get(val);
    }
    const traps = {
      /**
       * Intercepts property retrieval.
       * @param {object} target - The target object.
       * @param {string|symbol} key - The property name.
       * @param {object} receiver - The Proxy or inherits from it.
       * @returns {any}
       */
      get(target, key, receiver) {
        if (key === RAW_TARGET) {
          return target;
        }
        if (key === "__proto__") {
          throw new AvenxError(
            AvenxErrorCodes.SANDBOX_VIOLATION,
            'Access to property "__proto__" is blocked for security reasons.'
          );
        }
        if (key === "constructor" && typeof target === "function") {
          throw new AvenxError(
            AvenxErrorCodes.SANDBOX_VIOLATION,
            'Access to property "constructor" on functions is blocked for security reasons.'
          );
        }
        let res = Reflect.get(target, key, receiver);
        const desc = Reflect.getOwnPropertyDescriptor(target, key);
        if (desc && !desc.configurable && !desc.writable) {
          return res;
        }
        if (typeof res === "function") {
          res = res.bind(target);
        }
        return wrapValue(res);
      },
      /**
       * Intercepts property assignment.
       * @param {object} target - The target object.
       * @param {string|symbol} key - The property name.
       * @param {any} value - The new value.
       * @param {object} receiver - The object originally targeted.
       * @returns {boolean}
       */
      set(target, key, value, receiver) {
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          throw new AvenxError(
            AvenxErrorCodes.SANDBOX_VIOLATION,
            `Writing to property "${String(key)}" is blocked for security reasons.`
          );
        }
        return Reflect.set(target, key, value, receiver);
      }
    };
    if (typeof val === "function") {
      traps.apply = function(target, thisArg, argumentsList) {
        const rawThis = unwrap(thisArg);
        const rawArgs = argumentsList.map(unwrap);
        const result = Reflect.apply(target, rawThis, rawArgs);
        return wrapValue(result);
      };
    }
    const wrapped = new Proxy(val, traps);
    proxyCache.set(val, wrapped);
    return wrapped;
  }
  var AvenxSandbox = class {
    /**
     * Statically validates an expression or statement string to ensure it does not contain
     * forbidden property names.
     * @param {string} source - The source code to check.
     */
    static validateSource(source) {
      const FORBIDDEN_WORDS = /\b(constructor|__proto__|prototype)\b/;
      if (typeof source === "string" && FORBIDDEN_WORDS.test(source)) {
        throw new AvenxError(
          AvenxErrorCodes.SANDBOX_VIOLATION,
          'Access to "constructor", "__proto__", or "prototype" is blocked for security reasons.'
        );
      }
    }
    /**
     * Creates a sandboxed Proxy context representing the combined scope and thisArg.
     * @param {object} scope - The scope variables.
     * @param {object} thisArg - The active 'this' context.
     * @returns {Proxy} The sandboxed Proxy object.
     */
    static createProxy(scope, thisArg) {
      const target = {};
      const activeThis = thisArg || scope || {};
      return new Proxy(target, {
        /**
         * Intercepts `has` check, claiming to have all properties to capture lookups in `with`.
         * @param {object} t - The target object.
         * @param {string|symbol} key - The property checked.
         * @returns {boolean}
         */
        has(t, key) {
          if (key === Symbol.unscopables) {
            return false;
          }
          return true;
        },
        /**
         * Intercepts property retrieval.
         * @param {object} t - The target object.
         * @param {string|symbol} key - The property name.
         * @returns {any}
         */
        get(t, key) {
          if (key === Symbol.unscopables) {
            return void 0;
          }
          if (key === RAW_TARGET) {
            return activeThis;
          }
          if (key === "__proto__") {
            throw new AvenxError(
              AvenxErrorCodes.SANDBOX_VIOLATION,
              'Access to property "__proto__" is blocked for security reasons.'
            );
          }
          if (key === "constructor" && typeof activeThis === "function") {
            throw new AvenxError(
              AvenxErrorCodes.SANDBOX_VIOLATION,
              'Access to property "constructor" on functions is blocked for security reasons.'
            );
          }
          if (scope && key in scope) {
            return wrapValue(scope[key]);
          }
          if (thisArg && key in thisArg) {
            return wrapValue(thisArg[key]);
          }
          if (ALLOWED_GLOBALS.has(key)) {
            return wrapValue(globalThis[key]);
          }
          return void 0;
        },
        /**
         * Intercepts property assignment.
         * @param {object} t - The target object.
         * @param {string|symbol} key - The property name.
         * @param {any} value - The new value.
         * @returns {boolean}
         */
        set(t, key, value) {
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            throw new AvenxError(
              AvenxErrorCodes.SANDBOX_VIOLATION,
              `Writing to property "${String(key)}" is blocked for security reasons.`
            );
          }
          if (thisArg && key in thisArg) {
            thisArg[key] = value;
            return true;
          }
          if (scope && key in scope) {
            scope[key] = value;
            return true;
          }
          if (scope) {
            scope[key] = value;
            return true;
          }
          return false;
        },
        /**
         * Intercepts `getPrototypeOf` check.
         * @returns {object}
         */
        getPrototypeOf() {
          return Reflect.getPrototypeOf(activeThis);
        },
        /**
         * Intercepts `getOwnPropertyDescriptor` check.
         * @param {object} t - The target.
         * @param {string|symbol} key - The property.
         * @returns {object}
         */
        getOwnPropertyDescriptor(t, key) {
          const desc = Reflect.getOwnPropertyDescriptor(activeThis, key);
          if (desc) return desc;
          return { configurable: true, enumerable: true, writable: true };
        }
      });
    }
  };

  // lib/core/security/evaluator.js
  var DynamicEvaluator = class {
    /**
     * Evaluates a JavaScript expression within a scope.
     * @param {string} expression - The expression to evaluate.
     * @param {object} [scope] - The scope variables.
     * @param {object} [thisArg] - The 'this' context for evaluation.
     * @returns {any} The result of evaluation.
     */
    evaluateExpression(expression, scope = {}, thisArg = scope) {
      AvenxSandbox.validateSource(expression);
      const sandbox = AvenxSandbox.createProxy(scope, thisArg);
      const fn = new Function(`with(this) { return (${expression}) }`);
      return fn.call(sandbox);
    }
    /**
     * Executes a JavaScript statement within a scope.
     * @param {string} source - The statement(s) to execute.
     * @param {object} [scope] - The scope variables.
     * @param {object} [thisArg] - The 'this' context for execution.
     * @returns {any} The result of execution.
     */
    executeStatement(source, scope = {}, thisArg = scope) {
      AvenxSandbox.validateSource(source);
      const sandbox = AvenxSandbox.createProxy(scope, thisArg);
      const fn = new Function(`with(this) { ${source} }`);
      return fn.call(sandbox);
    }
    /**
     * Creates a map of executable methods from string definitions.
     * @param {object} [methods] - An object containing method name and source code pairs.
     * @param {function(object): object} getScope - Function to retrieve the scope for a method.
     * @param {function(): object} getThisArg - Function to retrieve the 'this' context for methods.
     * @returns {object} A map of functions.
     */
    createMethodMap(methods = {}, getScope, getThisArg) {
      const executable = {};
      for (const [name, source] of Object.entries(methods)) {
        if (typeof source === "function") {
          executable[name] = source.bind(getThisArg());
        } else {
          executable[name] = (...args) => this.executeStatement(source, { ...getScope(executable), args }, getThisArg());
        }
      }
      return executable;
    }
  };

  // lib/core/runtime/lifecycle.js
  var LifecycleManager = class {
    /**
     * Mounts a component to a target element and performs the initial update.
     * @param {AvenxComponent} component - The component instance to mount.
     * @param {Element|string} target - The target DOM element or selector.
     */
    mount(component, target) {
      const targetEl = typeof target === "string" ? document.querySelector(target) : target;
      component.__setMountTarget(targetEl);
      component.update();
      if (component.__afterMount) {
        component.__afterMount();
      }
    }
  };

  // lib/core/renderer/listManager.js
  var _listCache, _ListManager_instances, updateList_fn, getCurrentItems_fn;
  var ListManager = class {
    /**
     * @param {DynamicEvaluator} evaluator - The expression evaluator.
     * @param {TemplateRenderer} renderer - The template renderer.
     * @param {EventBinder} [eventBinder] - The event binder to unbind removed elements.
     */
    constructor(evaluator, renderer, eventBinder) {
      __privateAdd(this, _ListManager_instances);
      /** @type {WeakMap<HTMLTemplateElement, {listRef: Array, items: Array}>} */
      __privateAdd(this, _listCache, /* @__PURE__ */ new WeakMap());
      this.evaluator = evaluator;
      this.renderer = renderer;
      this.eventBinder = eventBinder;
      this.patcher = new DomPatcher();
    }
    /**
     * Processes all template-based lists within a root element.
     * @param {Element} root - The root element to search in.
     * @param {object} scope - The evaluation scope.
     * @param {object} state - The component state.
     */
    process(root, scope, state) {
      const templates = root.querySelectorAll("template[data-ax-for]");
      templates.forEach((template) => {
        let parent = template.parentNode;
        let insideSlot = false;
        while (parent) {
          if (parent.nodeName === "SLOT" && parent.hasAttribute && parent.hasAttribute("data-avenx-transcluded")) {
            insideSlot = true;
            break;
          }
          parent = parent.parentNode;
        }
        if (!insideSlot) {
          __privateMethod(this, _ListManager_instances, updateList_fn).call(this, template, scope, state);
        }
      });
    }
  };
  _listCache = new WeakMap();
  _ListManager_instances = new WeakSet();
  /**
   * Updates a specific list based on its template and current state.
   * @param {HTMLTemplateElement} template - The list template.
   * @param {object} scope - The evaluation scope.
   * @param {object} state - The component state.
   * @private
   */
  updateList_fn = function(template, scope, state) {
    const listExpr = template.getAttribute("data-ax-for");
    const itemVar = template.getAttribute("data-ax-as");
    const keyExpr = template.getAttribute("data-ax-key");
    let list;
    try {
      list = this.evaluator.evaluateExpression(listExpr, scope, state);
    } catch (e) {
      logger.warn(`[ListManager] Failed to evaluate list expression: ${listExpr}`, e);
      return;
    }
    if (!Array.isArray(list)) {
      list = [];
    }
    const cached = __privateGet(this, _listCache).get(template);
    if (cached && cached.listRef === list && cached.items.length === list.length && cached.items.every((item, i) => item === list[i])) {
      return;
    }
    const currentItems = __privateMethod(this, _ListManager_instances, getCurrentItems_fn).call(this, template);
    const rawItems = list.map((item, index) => {
      const itemScope = { ...scope, [itemVar]: item, index };
      let key = index;
      if (keyExpr) {
        try {
          key = this.evaluator.evaluateExpression(keyExpr, itemScope, state);
        } catch (e) {
          logger.warn(`[ListManager] Failed to evaluate key expression: ${keyExpr}`, e);
        }
      }
      return { item, key: String(key), itemScope, index };
    });
    const keyCounts = {};
    for (const entry of rawItems) {
      keyCounts[entry.key] = (keyCounts[entry.key] || 0) + 1;
    }
    const warnedKeys = /* @__PURE__ */ new Set();
    const nextItems = rawItems.map((entry) => {
      let finalKey = entry.key;
      if (keyCounts[entry.key] > 1) {
        if (!warnedKeys.has(entry.key)) {
          logger.warn(
            `[ListManager] Duplicate key "${entry.key}" detected in list expression "${listExpr}". Appending index suffix to prevent node reuse conflict.`
          );
          warnedKeys.add(entry.key);
        }
        finalKey = `${entry.key}_${entry.index}`;
      }
      return { item: entry.item, key: finalKey, itemScope: entry.itemScope };
    });
    const nextKeys = new Set(nextItems.map((i) => i.key));
    for (const [key, element] of currentItems.entries()) {
      if (!nextKeys.has(key)) {
        if (this.eventBinder) {
          this.eventBinder.unbind(element);
        }
        this.patcher.triggerLeave(element, null, () => {
          element.remove();
        });
      }
    }
    let lastElement = template;
    const itemTemplate = template.innerHTML.replace(/{%/g, "{{").replace(/%}/g, "}}");
    nextItems.forEach(({ key, itemScope }) => {
      let element = currentItems.get(key);
      const resolver = (expr) => this.evaluator.evaluateExpression(expr, itemScope, state);
      const html2 = this.renderer.render(itemTemplate, resolver).trim();
      if (element) {
        const temp = document.createElement("div");
        temp.innerHTML = html2;
        let newElement = temp.firstElementChild;
        if (newElement) {
          newElement = this.patcher.cleanElement(newElement);
          newElement.setAttribute("data-ax-list-item", "");
          newElement.setAttribute("data-ax-key-val", key);
          let needsPatch = element.outerHTML !== newElement.outerHTML;
          if (!needsPatch) {
            const hasDirectives = element.hasAttribute("data-ax-show") || element.hasAttribute("data-ax-class") || element.hasAttribute("data-ax-html") || typeof element.querySelector === "function" && (element.querySelector("[data-ax-show]") || element.querySelector("[data-ax-class]") || element.querySelector("[data-ax-html]"));
            if (hasDirectives) {
              needsPatch = true;
            }
          }
          if (needsPatch) {
            this.patcher.patchElement(element, newElement, resolver);
          }
        }
      } else {
        const temp = document.createElement("div");
        temp.innerHTML = html2;
        element = temp.firstElementChild;
        if (element) {
          element = this.patcher.cleanElement(element);
          element.setAttribute("data-ax-list-item", "");
          element.setAttribute("data-ax-key-val", key);
          this.patcher.applyDirectives(element, resolver);
          this.patcher.triggerEnter(element, resolver);
        }
      }
      if (element) {
        if (element.previousElementSibling !== lastElement) {
          lastElement.after(element);
        }
        lastElement = element;
      }
    });
    __privateGet(this, _listCache).set(template, {
      listRef: list,
      items: [...list]
    });
  };
  /**
   * Retrieves currently rendered items for a template by scanning subsequent siblings.
   * @param {HTMLTemplateElement} template - The template.
   * @returns {Map<string, Element>}
   * @private
   */
  getCurrentItems_fn = function(template) {
    const items = /* @__PURE__ */ new Map();
    let current = template.nextElementSibling;
    while (current && current.hasAttribute("data-ax-list-item")) {
      if (!current._isLeaving) {
        const key = current.getAttribute("data-ax-key-val");
        items.set(key, current);
      }
      current = current.nextElementSibling;
    }
    return items;
  };

  // lib/core/reactive/scheduler.js
  var queue = /* @__PURE__ */ new Set();
  var isPending = false;
  var isFlushing = false;
  function queueJob(job) {
    if (!queue.has(job)) {
      queue.add(job);
      if (!isPending && !isFlushing) {
        isPending = true;
        Promise.resolve().then(flushJobs);
      }
    }
  }
  function flushJobs() {
    isPending = false;
    isFlushing = true;
    try {
      while (queue.size > 0) {
        const jobs = Array.from(queue);
        queue.clear();
        for (const job of jobs) {
          try {
            job();
          } catch (error) {
            logger.error("Error executing scheduled job:", error);
          }
        }
      }
    } finally {
      isFlushing = false;
    }
  }

  // lib/core/reactive/watcher.js
  var depMap = /* @__PURE__ */ new WeakMap();
  var parentMap = /* @__PURE__ */ new WeakMap();
  var activeWatcher = null;
  var watcherStack = [];
  function pushWatcher(watcher) {
    watcherStack.push(activeWatcher);
    activeWatcher = watcher;
  }
  function popWatcher() {
    activeWatcher = watcherStack.pop();
  }
  function track(target, key) {
    if (activeWatcher) {
      let keysMap = depMap.get(target);
      if (!keysMap) {
        keysMap = /* @__PURE__ */ new Map();
        depMap.set(target, keysMap);
      }
      let watchers = keysMap.get(key);
      if (!watchers) {
        watchers = /* @__PURE__ */ new Set();
        keysMap.set(key, watchers);
      }
      watchers.add(activeWatcher);
      activeWatcher.addDep(target, key, watchers);
    }
  }
  function trigger(target, key) {
    const keysMap = depMap.get(target);
    if (keysMap) {
      const watchers = keysMap.get(key);
      if (watchers) {
        const toRun = new Set(watchers);
        for (const watcher of toRun) {
          if (typeof watcher.update === "function") {
            watcher.update();
          }
        }
      }
    }
    const parentRelation = parentMap.get(target);
    if (parentRelation) {
      const { parentTarget, parentKey } = parentRelation;
      trigger(parentTarget, parentKey);
    }
  }
  var AvenxWatcher = class {
    /**
     * @param {function(): any} getter - The reactive evaluation function.
     * @param {function(any, any): void|null} [callback] - Callback triggered when evaluated value changes.
     * @param {object} [options] - Configuration options.
     * @param {boolean} [options.immediate] - Run the callback immediately with initial value.
     * @param {boolean} [options.lazy] - Postpone the initial evaluation until first accessed.
     */
    constructor(getter, callback = null, options = {}) {
      this.getter = getter;
      this.callback = callback;
      this.options = options;
      this.deps = /* @__PURE__ */ new Set();
      this.dirty = true;
      this.value = void 0;
      if (!options.lazy) {
        this.value = this.get();
        this.dirty = false;
      }
      if (options.immediate && this.callback) {
        this.callback(this.value, void 0);
      }
    }
    /**
     * Evaluates the getter function inside the watcher context to track reactive dependencies.
     * @returns {any}
     */
    get() {
      pushWatcher(this);
      try {
        return this.getter();
      } finally {
        popWatcher();
      }
    }
    /**
     * Evaluates a lazy computed watcher if it is dirty.
     * @returns {any}
     */
    evaluate() {
      if (this.dirty) {
        this.value = this.get();
        this.dirty = false;
      }
      return this.value;
    }
    /**
     * Registers a target property dependency on this watcher.
     * @param {object} target - Reactive object target.
     * @param {string} key - Property key.
     * @param {Set<AvenxWatcher>} watchersSet - Set mapping to this dependency.
     */
    addDep(target, key, watchersSet) {
      this.deps.add({ target, key, watchersSet });
    }
    /**
     * Triggers re-evaluation when a tracked dependency changes, firing the callback if needed.
     */
    update() {
      if (this.options.lazy) {
        this.dirty = true;
        if (this.callback) {
          this.callback(this.value, this.value);
        }
      } else {
        const oldValue = this.value;
        const newValue = this.get();
        if (newValue !== oldValue || newValue && typeof newValue === "object") {
          this.value = newValue;
          if (this.callback) {
            this.callback(newValue, oldValue);
          }
        }
      }
    }
    /**
     * Cleans up all registered dependencies of this watcher to prevent memory leaks.
     */
    teardown() {
      for (const dep of this.deps) {
        dep.watchersSet.delete(this);
      }
      this.deps.clear();
    }
  };

  // lib/core/reactive/proxyHandler.js
  var RAW_SYMBOL = /* @__PURE__ */ Symbol("raw");
  var IS_REACTIVE_PROXY = /* @__PURE__ */ Symbol("avenx.reactive.proxy");
  var mutatingArrayMethods = /* @__PURE__ */ new Set([
    "push",
    "pop",
    "shift",
    "unshift",
    "splice",
    "sort",
    "reverse",
    "copyWithin",
    "fill"
  ]);
  function isReactiveTarget(value) {
    if (value === null || typeof value !== "object") {
      return false;
    }
    const proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype || proto === Array.prototype;
  }
  var ProxyHandlerFactory = class {
    /**
     * @param {object} [options] - Configuration options.
     * @param {string[]} [options.computedKeys] - List of keys that should be treated as computed properties.
     * @param {function(): void} [options.onChange] - Callback triggered when a property is set.
     * @param {function(string, object): any} [options.getComputedValue] - Function to evaluate a computed property.
     */
    constructor({ computedKeys = [], onChange = () => {
    }, getComputedValue = () => void 0 } = {}) {
      this.computedKeys = new Set(computedKeys);
      this.onChange = onChange;
      this.getComputedValueReal = getComputedValue;
      this.proxyCache = /* @__PURE__ */ new WeakMap();
      this.computedWatchers = /* @__PURE__ */ new Map();
    }
    /**
     * Evaluates and caches a computed property using an internal AvenxWatcher.
     * @param {string} key - The computed key.
     * @param {object} receiver - The proxy receiver.
     * @returns {any}
     */
    evaluateComputedWatcher(key, receiver) {
      const target = receiver[RAW_SYMBOL] || receiver;
      track(target, key);
      let watcher = this.computedWatchers.get(key);
      if (!watcher) {
        watcher = new AvenxWatcher(
          () => this.getComputedValueReal(key, receiver),
          () => {
            trigger(target, key);
            this.onChange();
          },
          { lazy: true }
        );
        this.computedWatchers.set(key, watcher);
      }
      return watcher.evaluate();
    }
    /**
     * Cleans up all computed watchers created by this proxy handler.
     */
    teardown() {
      for (const watcher of this.computedWatchers.values()) {
        watcher.teardown();
      }
      this.computedWatchers.clear();
    }
    /**
     * Creates the proxy handler object.
     * @returns {ProxyHandler<object>}
     */
    create() {
      return {
        set: (target, key, value) => this.set(target, key, value),
        get: (target, key, receiver) => this.get(target, key, receiver),
        ownKeys: (target) => this.ownKeys(target),
        getOwnPropertyDescriptor: (target, key) => this.getOwnPropertyDescriptor(target, key),
        deleteProperty: (target, key) => this.deleteProperty(target, key)
      };
    }
    /**
     * Proxy 'set' trap.
     * @param {object} target - The target object.
     * @param {string|symbol} key - The property key.
     * @param {any} value - The new value.
     * @returns {boolean}
     */
    set(target, key, value) {
      if (value && value[RAW_SYMBOL]) {
        value = value[RAW_SYMBOL];
      }
      const oldValue = target[key];
      target[key] = value;
      if (isReactiveTarget(value)) {
        parentMap.set(value, { parentTarget: target, parentKey: key });
      }
      if (typeof key !== "symbol" && (oldValue !== value || Array.isArray(target) && key === "length")) {
        trigger(target, key);
        this.onChange();
      }
      return true;
    }
    /**
     * Proxy 'get' trap.
     * Redirects to evaluateComputedWatcher if the key is a computed property.
     * @param {object} target - The target object.
     * @param {string|symbol} key - The property key.
     * @param {object} receiver - The proxy or object inheriting from the proxy.
     * @returns {any}
     */
    get(target, key, receiver) {
      if (key === IS_REACTIVE_PROXY) {
        return true;
      }
      if (key === RAW_SYMBOL) {
        return target;
      }
      if (this.computedKeys.has(key)) {
        return this.evaluateComputedWatcher(key, receiver);
      }
      if (typeof key !== "symbol") {
        track(target, key);
      }
      const value = Reflect.get(target, key, receiver);
      if (typeof value === "function") {
        if (Array.isArray(target) && mutatingArrayMethods.has(key)) {
          return (...args) => {
            const result = target[key](...args);
            trigger(target, "length");
            this.onChange();
            return result;
          };
        }
        return value.bind(receiver);
      }
      if (isReactiveTarget(value)) {
        parentMap.set(value, { parentTarget: target, parentKey: key });
        return this.getOrCreateProxy(value);
      }
      return value;
    }
    /**
     * Proxy 'deleteProperty' trap.
     * @param {object} target - The target object.
     * @param {string|symbol} key - The property key.
     * @returns {boolean}
     */
    deleteProperty(target, key) {
      const hasKey = Reflect.has(target, key);
      const result = Reflect.deleteProperty(target, key);
      if (hasKey) {
        trigger(target, key);
        this.onChange();
      }
      return result;
    }
    /**
     * Proxy 'ownKeys' trap.
     * Includes computed keys in the list of keys.
     * @param {object} target - The target object.
     * @returns {Array<string|symbol>}
     */
    ownKeys(target) {
      return [...Reflect.ownKeys(target), ...this.computedKeys];
    }
    /**
     * Proxy 'getOwnPropertyDescriptor' trap.
     * Ensures computed properties appear as own properties.
     * @param {object} target - The target object.
     * @param {string|symbol} key - The property key.
     * @returns {PropertyDescriptor|undefined}
     */
    getOwnPropertyDescriptor(target, key) {
      if (this.computedKeys.has(key)) {
        return { enumerable: true, configurable: true };
      }
      return Reflect.getOwnPropertyDescriptor(target, key);
    }
    /**
     * Returns a cached proxy or creates a new proxy for a nested object/array.
     * @param {object | Array} val - The nested object or array.
     * @returns {Proxy} The reactive proxy.
     * @private
     */
    getOrCreateProxy(val) {
      if (val && val[IS_REACTIVE_PROXY]) {
        return val;
      }
      if (this.proxyCache.has(val)) {
        return this.proxyCache.get(val);
      }
      const handler = {
        get: (target, key, receiver) => {
          if (key === IS_REACTIVE_PROXY) {
            return true;
          }
          if (key === RAW_SYMBOL) {
            return target;
          }
          if (typeof key !== "symbol") {
            track(target, key);
          }
          const value = Reflect.get(target, key, receiver);
          if (typeof value === "function") {
            if (Array.isArray(target) && mutatingArrayMethods.has(key)) {
              return (...args) => {
                const result = target[key](...args);
                trigger(target, "length");
                this.onChange();
                return result;
              };
            }
            return value.bind(receiver);
          }
          if (isReactiveTarget(value)) {
            parentMap.set(value, { parentTarget: target, parentKey: key });
            return this.getOrCreateProxy(value);
          }
          return value;
        },
        set: (target, key, value) => {
          if (value && value[RAW_SYMBOL]) {
            value = value[RAW_SYMBOL];
          }
          const oldValue = target[key];
          target[key] = value;
          if (isReactiveTarget(value)) {
            parentMap.set(value, { parentTarget: target, parentKey: key });
          }
          if (typeof key !== "symbol" && (oldValue !== value || Array.isArray(target) && key === "length")) {
            trigger(target, key);
            this.onChange();
          }
          return true;
        },
        deleteProperty: (target, key) => {
          const hasKey = Reflect.has(target, key);
          const result = Reflect.deleteProperty(target, key);
          if (hasKey) {
            trigger(target, key);
            this.onChange();
          }
          return result;
        }
      };
      const proxy = new Proxy(val, handler);
      this.proxyCache.set(val, proxy);
      return proxy;
    }
  };

  // lib/core/runtime/AvenxComponent.js
  var currentMicrotaskPromise = null;
  function processBindDirectives(template) {
    if (typeof template !== "string") return template;
    const tagRegex = /<(input|textarea|select)\b([^>]*?)>/gi;
    return template.replace(tagRegex, (match, tagName, attrs) => {
      const bindRegex = /\bdata-ax-bind\s*=\s*(?:"([^"]*)"|'([^']*)')/i;
      const bindMatch = attrs.match(bindRegex);
      if (!bindMatch) {
        return match;
      }
      const bindExpr = (bindMatch[1] !== void 0 ? bindMatch[1] : bindMatch[2]).trim();
      let cleanAttrs = attrs.replace(bindRegex, "").trim();
      let isSelfClosing = false;
      if (cleanAttrs.endsWith("/")) {
        isSelfClosing = true;
        cleanAttrs = cleanAttrs.slice(0, -1).trim();
      }
      const eventName = tagName.toLowerCase() === "select" ? "change" : "input";
      const valueAttr = `value="{{ ${bindExpr} }}"`;
      const eventAttr = `@${eventName}="${bindExpr} = event.target.value"`;
      const suffix = isSelfClosing ? " />" : ">";
      return `<${tagName} ${cleanAttrs} ${valueAttr} ${eventAttr}`.trim().replace(/\s+/g, " ") + suffix;
    });
  }
  var _element, _template, _methods, _bridges, _computed, _renderer, _patcher, _listManager, _eventBinder, _eventExecutor, _evaluator, _lifecycle, _isMounted, _isUpdating, _evaluating, _transcludedGroups, _updateQueued, _updateJob, _lastUpdatedPromise, _AvenxComponent_instances, createScope_fn, resolveTemplateExpression_fn, runEventHandler_fn, resolveSlotName_fn, getDefaultSlotChildren_fn, fillSlots_fn, getOwnSlots_fn, findAncestorProviding_fn, componentProvides_fn, getAncestorProvidedValue_fn;
  var AvenxComponent = class {
    /**
     * @param {object} [initialState] - The initial state of the component.
     * @param {object} [computed] - Computed properties definitions.
     * @param {object} [bridges] - External bridges accessible to the component.
     * @param {string} [template] - The HTML template string.
     * @param {object} [methods] - Component methods.
     * @param {object} [props] - Component properties.
     */
    constructor(initialState = {}, computed = {}, bridges = {}, template = "", methods = {}, props = {}) {
      __privateAdd(this, _AvenxComponent_instances);
      /** @type {Element|null} @private */
      __privateAdd(this, _element, null);
      /** @type {string} @private */
      __privateAdd(this, _template, "");
      /** @type {object} @private */
      __privateAdd(this, _methods, {});
      /** @type {object} @private */
      __privateAdd(this, _bridges, {});
      /** @type {ComputedRegistry} @private */
      __privateAdd(this, _computed);
      /** @type {TemplateRenderer} @private */
      __privateAdd(this, _renderer);
      /** @type {DomPatcher} @private */
      __privateAdd(this, _patcher);
      /** @type {ListManager} @private */
      __privateAdd(this, _listManager);
      /** @type {EventBinder} @private */
      __privateAdd(this, _eventBinder);
      /** @type {EventExecutor} @private */
      __privateAdd(this, _eventExecutor);
      /** @type {DynamicEvaluator} @private */
      __privateAdd(this, _evaluator);
      /** @type {LifecycleManager} @private */
      __privateAdd(this, _lifecycle);
      /** @type {boolean} @private */
      __privateAdd(this, _isMounted, false);
      /** @type {boolean} @private */
      __privateAdd(this, _isUpdating, false);
      /** @type {Set<string>} @private */
      __privateAdd(this, _evaluating, /* @__PURE__ */ new Set());
      /** @type {object | null} @private */
      __privateAdd(this, _transcludedGroups, null);
      /** @type {boolean} @private */
      __privateAdd(this, _updateQueued, false);
      /** @type {Function} @private */
      __privateAdd(this, _updateJob, () => {
        __privateSet(this, _updateQueued, false);
        this.update();
      });
      /** @type {Promise|null} @private */
      __privateAdd(this, _lastUpdatedPromise, null);
      __privateSet(this, _template, processBindDirectives(template));
      __privateSet(this, _bridges, bridges);
      __privateSet(this, _computed, new ComputedRegistry(computed));
      __privateSet(this, _renderer, new TemplateRenderer());
      __privateSet(this, _patcher, new DomPatcher());
      __privateSet(this, _eventBinder, new EventBinder());
      __privateSet(this, _evaluator, new DynamicEvaluator());
      __privateSet(this, _lifecycle, new LifecycleManager());
      __privateSet(this, _listManager, new ListManager(__privateGet(this, _evaluator), __privateGet(this, _renderer), __privateGet(this, _eventBinder)));
      this._watchers = [];
      this._stateHandler = new ProxyHandlerFactory({
        computedKeys: __privateGet(this, _computed).keys(),
        onChange: () => this.scheduleUpdate(),
        getComputedValue: (key) => {
          if (__privateGet(this, _evaluating).has(key)) {
            logger.warn(formatMessage(AvenxErrorCodes.COMPUTED_CIRCULAR_DEPENDENCY, key));
            return void 0;
          }
          __privateGet(this, _evaluating).add(key);
          const expression = __privateGet(this, _computed).get(key);
          try {
            return __privateGet(this, _evaluator).evaluateExpression(expression, __privateMethod(this, _AvenxComponent_instances, createScope_fn).call(this), this.state);
          } catch (error) {
            if (error && error.code === AvenxErrorCodes.STATE_MUTATION_IN_UPDATE) {
              throw error;
            }
            logger.warn(formatMessage(AvenxErrorCodes.COMPUTED_EVALUTION_FAILED, key, expression, error));
            return void 0;
          } finally {
            __privateGet(this, _evaluating).delete(key);
          }
        }
      });
      this.state = new Proxy(initialState, this._stateHandler.create());
      this._propsHandler = new ProxyHandlerFactory({
        onChange: () => this.scheduleUpdate()
      });
      this.props = new Proxy(props, this._propsHandler.create());
      __privateSet(this, _methods, __privateGet(this, _evaluator).createMethodMap(
        methods,
        (executableMethods) => __privateMethod(this, _AvenxComponent_instances, createScope_fn).call(this, executableMethods),
        () => this.state
      ));
      for (const [name, fn] of Object.entries(__privateGet(this, _methods))) {
        if (!(name in this)) {
          this[name] = fn;
        }
      }
      __privateSet(this, _eventExecutor, new EventExecutor((source, event) => __privateMethod(this, _AvenxComponent_instances, runEventHandler_fn).call(this, source, event)));
    }
    /**
     * Programmatically registers a watcher on a reactive expression/function.
     * @param {function(): any} getter - Evaluation function returning the value to watch.
     * @param {function(any, any): void} callback - Triggered when the value changes.
     * @param {object} [options] - Config options.
     * @returns {AvenxWatcher}
     */
    watch(getter, callback, options = {}) {
      const watcher = new AvenxWatcher(getter, callback, options);
      this._watchers.push(watcher);
      return watcher;
    }
    /**
     * Renders the component template with current state.
     * @returns {string} The rendered HTML string.
     */
    render() {
      return __privateGet(this, _renderer).render(__privateGet(this, _template), (expression) => __privateMethod(this, _AvenxComponent_instances, resolveTemplateExpression_fn).call(this, expression));
    }
    /**
     * Triggers a synchronous DOM patch update and registers event/list bindings.
     */
    update() {
      if (!this.renderWatcher) {
        this.renderWatcher = new AvenxWatcher(
          () => this.runUpdate(),
          () => this.scheduleUpdate(),
          { lazy: true }
        );
      }
      this.renderWatcher.evaluate();
    }
    /**
     * Performs the actual update/render of the component.
     */
    runUpdate() {
      if (!currentMicrotaskPromise) {
        currentMicrotaskPromise = Promise.resolve();
        Promise.resolve().then(() => {
          currentMicrotaskPromise = null;
        });
      }
      if (__privateGet(this, _lastUpdatedPromise) === currentMicrotaskPromise) {
        return;
      }
      __privateSet(this, _lastUpdatedPromise, currentMicrotaskPromise);
      if (!__privateGet(this, _element)) return;
      __privateSet(this, _isUpdating, true);
      try {
        __privateGet(this, _patcher).patch(__privateGet(this, _element), this.render(), (expression) => __privateMethod(this, _AvenxComponent_instances, resolveTemplateExpression_fn).call(this, expression));
        __privateMethod(this, _AvenxComponent_instances, fillSlots_fn).call(this);
        __privateGet(this, _listManager).process(__privateGet(this, _element), __privateMethod(this, _AvenxComponent_instances, createScope_fn).call(this), this.state);
        __privateGet(this, _eventBinder).bind(__privateGet(this, _element), __privateGet(this, _eventExecutor));
        if (__privateGet(this, _isMounted) && __privateGet(this, _element)?.dispatchEvent) {
          __privateGet(this, _element).dispatchEvent(new CustomEvent("avenx:update"));
        }
        if (__privateGet(this, _isMounted) && __privateGet(this, _methods).onUpdate) {
          try {
            __privateGet(this, _methods).onUpdate();
          } catch (error) {
            if (error && error.code === AvenxErrorCodes.STATE_MUTATION_IN_UPDATE) {
              throw error;
            }
            logger.error(
              formatMessage(AvenxErrorCodes.LIFECYCLE_HOOK_ERROR, this.constructor.name, "onUpdate", error)
            );
          }
        }
      } finally {
        __privateSet(this, _isUpdating, false);
      }
    }
    /**
     * Schedules an update to run asynchronously in a microtask.
     */
    scheduleUpdate() {
      if (__privateGet(this, _isUpdating)) {
        throw new AvenxError(AvenxErrorCodes.STATE_MUTATION_IN_UPDATE);
      }
      if (this.renderWatcher) {
        this.renderWatcher.dirty = true;
      }
      if (__privateGet(this, _updateQueued)) return;
      __privateSet(this, _updateQueued, true);
      queueJob(__privateGet(this, _updateJob));
    }
    /**
     * Internal method to set the mount target.
     * @param {Element} target - The target element.
     * @private
     */
    __setMountTarget(target) {
      __privateSet(this, _element, target);
      if (target) {
        target.__avenx_comp_instance = this;
        this.__initProvide();
        this.__initInjection();
        const children = Array.from(target.childNodes);
        __privateSet(this, _transcludedGroups, {
          default: [],
          named: {}
        });
        children.forEach((child) => {
          if (child.nodeType === 1 && child.hasAttribute("slot")) {
            const name = child.getAttribute("slot");
            if (!__privateGet(this, _transcludedGroups).named[name]) {
              __privateGet(this, _transcludedGroups).named[name] = [];
            }
            __privateGet(this, _transcludedGroups).named[name].push(child);
          } else {
            __privateGet(this, _transcludedGroups).default.push(child);
          }
        });
        target.innerHTML = "";
      }
    }
    /**
     * Updates the transcluded content when the parent template updates.
     * @param {NodeList|Array} virtualChildNodes - The new virtual transcluded nodes from parent.
     * @private
     */
    __updateTranscludedContent(virtualChildNodes) {
      const grouped = {
        default: [],
        named: {}
      };
      Array.from(virtualChildNodes || []).forEach((node) => {
        if (node.nodeType === 1 && node.hasAttribute("slot")) {
          const name = node.getAttribute("slot");
          if (!grouped.named[name]) {
            grouped.named[name] = [];
          }
          grouped.named[name].push(node);
        } else {
          grouped.default.push(node);
        }
      });
      __privateSet(this, _transcludedGroups, grouped);
      if (__privateGet(this, _element)) {
        const slots = __privateMethod(this, _AvenxComponent_instances, getOwnSlots_fn).call(this);
        slots.forEach((slotEl) => {
          const name = __privateMethod(this, _AvenxComponent_instances, resolveSlotName_fn).call(this, slotEl);
          const newChildren = name ? grouped.named[name] || [] : grouped.default || [];
          const newSlotWrapper = slotEl.cloneNode(false);
          newChildren.forEach((child) => {
            newSlotWrapper.appendChild(child.cloneNode(true));
          });
          const hasContent = newChildren.some((node) => {
            if (node.nodeType === 1 && node.nodeName !== "!--" && node.nodeName !== "#comment") return true;
            if (node.nodeType === 3 && node.textContent.trim().length > 0) return true;
            return false;
          });
          if (hasContent) {
            newSlotWrapper.setAttribute("data-avenx-transcluded", "true");
          } else {
            newSlotWrapper.removeAttribute("data-avenx-transcluded");
            __privateMethod(this, _AvenxComponent_instances, getDefaultSlotChildren_fn).call(this, name).forEach((child) => {
              newSlotWrapper.appendChild(child);
            });
          }
          __privateGet(this, _patcher).patchElement(slotEl, newSlotWrapper, (expression) => __privateMethod(this, _AvenxComponent_instances, resolveTemplateExpression_fn).call(this, expression));
        });
      }
    }
    /**
     * Internal method called after the component is mounted to the DOM.
     * @private
     */
    __afterMount() {
      __privateSet(this, _isMounted, true);
      if (__privateGet(this, _element)?.dispatchEvent) {
        __privateGet(this, _element).dispatchEvent(new CustomEvent("avenx:mount"));
      }
      if (__privateGet(this, _methods).onMount) {
        try {
          __privateGet(this, _methods).onMount();
        } catch (error) {
          logger.error(
            formatMessage(AvenxErrorCodes.LIFECYCLE_HOOK_ERROR, this.constructor.name, "onMount", error)
          );
        }
      }
    }
    /**
     * Unmounts the component and triggers cleanup.
     */
    unmount() {
      __privateGet(this, _eventBinder).unbind(__privateGet(this, _element));
      if (__privateGet(this, _element)?.dispatchEvent) {
        __privateGet(this, _element).dispatchEvent(new CustomEvent("avenx:unmount"));
      }
      if (__privateGet(this, _methods).onUnmount) {
        try {
          __privateGet(this, _methods).onUnmount();
        } catch (error) {
          logger.error(
            formatMessage(AvenxErrorCodes.LIFECYCLE_HOOK_ERROR, this.constructor.name, "onUnmount", error)
          );
        }
      }
      if (this.renderWatcher) {
        this.renderWatcher.teardown();
      }
      if (this._watchers) {
        for (const watcher of this._watchers) {
          watcher.teardown();
        }
        this._watchers = [];
      }
      if (this._stateHandler) {
        this._stateHandler.teardown();
      }
      if (this._propsHandler) {
        this._propsHandler.teardown();
      }
      if (__privateGet(this, _element)) {
        delete __privateGet(this, _element).__avenx_comp_instance;
        __privateGet(this, _element).innerHTML = "";
      }
      __privateSet(this, _isMounted, false);
    }
    /**
     * Updates the component's props and triggers an update if they changed.
     * @param {object} newProps - The new props to apply.
     */
    setProps(newProps) {
      const currentProps = this.props;
      for (const key of Object.keys(newProps)) {
        if (currentProps[key] !== newProps[key]) {
          currentProps[key] = newProps[key];
        }
      }
      for (const key of Object.keys(currentProps)) {
        if (!(key in newProps)) {
          delete currentProps[key];
        }
      }
    }
    /**
     * The current active route metadata.
     * @returns {{hash: string, page: string, params: Record<string, any>}} The route details.
     */
    get $route() {
      if (typeof window !== "undefined" && window.__avenx_routers) {
        for (const router of window.__avenx_routers) {
          if (router.currentRoute && router.currentRoute.hash) {
            return router.currentRoute;
          }
        }
      }
      return { hash: "", page: "", params: {} };
    }
    /**
     * Evaluates an expression in the component's scope.
     * @param {string} expression - The expression to evaluate.
     * @param {object} [extraScope] - Additional scope variables.
     * @returns {any} The result of the evaluation.
     * @protected
     */
    _evaluate(expression, extraScope = {}) {
      return __privateGet(this, _evaluator).evaluateExpression(expression, __privateMethod(this, _AvenxComponent_instances, createScope_fn).call(this, __privateGet(this, _methods), extraScope), this.state);
    }
    /**
     * @returns {Element|null} The component's root element.
     * @protected
     */
    _getElement() {
      return __privateGet(this, _element);
    }
    /**
     * @returns {object} The bridges accessible to the component.
     * @protected
     */
    _getBridges() {
      return __privateGet(this, _bridges);
    }
    /**
     * Mounts the component to a target element.
     * @param {Element|string} target - The target element or selector.
     */
    mount(target) {
      __privateGet(this, _lifecycle).mount(this, target);
    }
    /**
     * Internal method to initialize injected properties from ancestors.
     * @private
     */
    __initInjection() {
      const injectOption = this.inject || (typeof this.constructor.inject === "function" ? this.constructor.inject() : this.constructor.inject);
      if (!injectOption) return;
      let injectMap = {};
      const resolvedOption = typeof injectOption === "function" ? injectOption.call(this) : injectOption;
      if (Array.isArray(resolvedOption)) {
        for (const key of resolvedOption) {
          injectMap[key] = key;
        }
      } else if (resolvedOption && typeof resolvedOption === "object") {
        injectMap = resolvedOption;
      }
      for (const [localKey, provideKey] of Object.entries(injectMap)) {
        Object.defineProperty(this, localKey, {
          get: () => {
            const ancestor = __privateMethod(this, _AvenxComponent_instances, findAncestorProviding_fn).call(this, provideKey);
            if (!ancestor) {
              logger.warn(`[AvenxComponent] Injected key "${provideKey}" not found in any ancestor component.`);
              return void 0;
            }
            return __privateMethod(this, _AvenxComponent_instances, getAncestorProvidedValue_fn).call(this, ancestor, provideKey);
          },
          enumerable: true,
          configurable: true
        });
      }
    }
    /**
     * Internal method to initialize provided properties as a reactive proxy.
     * @private
     */
    __initProvide() {
      const provideOption = this.provide || (typeof this.constructor.provide === "function" ? this.constructor.provide() : this.constructor.provide);
      if (!provideOption) return;
      const resolved = typeof provideOption === "function" ? provideOption.call(this) : provideOption;
      if (resolved && typeof resolved === "object" && !Array.isArray(resolved)) {
        const handlerFactory = new ProxyHandlerFactory({
          onChange: () => {
          }
        });
        this._providedState = new Proxy(resolved, handlerFactory.create());
      }
    }
    /**
     * Retrieves a property or method from the component's scope.
     * Used for array-based provide to resolve keys dynamically.
     * @param {string} key - The key to retrieve.
     * @returns {any} The value.
     * @protected
     */
    _getScopeValue(key) {
      if (this.state && key in this.state) {
        return this.state[key];
      }
      if (this.props && key in this.props) {
        return this.props[key];
      }
      if (__privateGet(this, _methods) && key in __privateGet(this, _methods)) {
        return __privateGet(this, _methods)[key];
      }
      if (__privateGet(this, _bridges) && key in __privateGet(this, _bridges)) {
        return __privateGet(this, _bridges)[key];
      }
      if (key in this) {
        return this[key];
      }
      return void 0;
    }
  };
  _element = new WeakMap();
  _template = new WeakMap();
  _methods = new WeakMap();
  _bridges = new WeakMap();
  _computed = new WeakMap();
  _renderer = new WeakMap();
  _patcher = new WeakMap();
  _listManager = new WeakMap();
  _eventBinder = new WeakMap();
  _eventExecutor = new WeakMap();
  _evaluator = new WeakMap();
  _lifecycle = new WeakMap();
  _isMounted = new WeakMap();
  _isUpdating = new WeakMap();
  _evaluating = new WeakMap();
  _transcludedGroups = new WeakMap();
  _updateQueued = new WeakMap();
  _updateJob = new WeakMap();
  _lastUpdatedPromise = new WeakMap();
  _AvenxComponent_instances = new WeakSet();
  /**
   * Creates a scope object for expression evaluation.
   * @param {object} [methods] - Methods to include in the scope.
   * @param {object} [extras] - Additional variables to include.
   * @returns {object} The combined scope.
   * @private
   */
  createScope_fn = function(methods = __privateGet(this, _methods), extras = {}) {
    const injected = {};
    const injectOption = this.inject || (typeof this.constructor.inject === "function" ? this.constructor.inject() : this.constructor.inject);
    if (injectOption) {
      const resolvedOption = typeof injectOption === "function" ? injectOption.call(this) : injectOption;
      let keys = [];
      if (Array.isArray(resolvedOption)) {
        keys = resolvedOption;
      } else if (resolvedOption && typeof resolvedOption === "object") {
        keys = Object.keys(resolvedOption);
      }
      for (const key of keys) {
        if (key in this) {
          injected[key] = this[key];
        }
      }
    }
    return { state: this.state, ...this.state, ...methods, ...__privateGet(this, _bridges), props: this.props, $route: this.$route, ...injected, ...extras };
  };
  /**
   * Resolves an expression within the template.
   * @param {string} expression - The expression to evaluate.
   * @returns {any} The result of the evaluation.
   * @private
   */
  resolveTemplateExpression_fn = function(expression) {
    return __privateGet(this, _evaluator).evaluateExpression(expression, __privateMethod(this, _AvenxComponent_instances, createScope_fn).call(this), this.state);
  };
  /**
   * Runs an event handler.
   * @param {string} source - The source code of the handler.
   * @param {Event} event - The event object.
   * @returns {any} The result of the execution.
   * @private
   */
  runEventHandler_fn = function(source, event) {
    try {
      return __privateGet(this, _evaluator).executeStatement(source, __privateMethod(this, _AvenxComponent_instances, createScope_fn).call(this, __privateGet(this, _methods), { event }), this.state);
    } catch (error) {
      logger.error(formatMessage(AvenxErrorCodes.EVENT_HANDLER_ERROR, source, error));
      return void 0;
    }
  };
  /**
   * Resolves the current name of a slot element.
   * Dynamic slot names are evaluated during template rendering, so the
   * rendered name attribute contains the value used for transclusion.
   * @param {Element} slotEl - The slot element.
   * @returns {string|null} The resolved slot name.
   * @private
   */
  resolveSlotName_fn = function(slotEl) {
    const name = slotEl.getAttribute("name");
    return name && name.trim() ? name.trim() : null;
  };
  /**
   * Fills <slot> elements with transcluded child nodes.
   * Supports both static and dynamically rendered slot names.
   * @private
   */
  /**
   * Retrieves default children of a slot by parsing the rendered template.
   * @param {string|null} name - The name of the slot.
   * @returns {Node[]} Cloned child nodes.
   * @private
   */
  getDefaultSlotChildren_fn = function(name) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(this.render(), "text/html");
      const rootDoc = doc.body || doc;
      const defaultSlot = Array.from(rootDoc.querySelectorAll("slot")).find((s) => {
        const sName = __privateMethod(this, _AvenxComponent_instances, resolveSlotName_fn).call(this, s);
        return name ? sName === name : !sName;
      });
      if (defaultSlot) {
        return Array.from(defaultSlot.childNodes).map((child) => child.cloneNode(true));
      }
    } catch (e) {
      logger.warn("[AvenxComponent] Failed to restore default slot content", e);
    }
    return [];
  };
  /**
   * Fills <slot> elements with transcluded child nodes.
   * Supports both static and dynamically rendered slot names.
   * @private
   */
  fillSlots_fn = function() {
    if (!__privateGet(this, _element) || !__privateGet(this, _transcludedGroups)) return;
    const slots = __privateMethod(this, _AvenxComponent_instances, getOwnSlots_fn).call(this);
    slots.forEach((slotEl) => {
      const name = __privateMethod(this, _AvenxComponent_instances, resolveSlotName_fn).call(this, slotEl);
      const nodes = name ? __privateGet(this, _transcludedGroups).named[name] || [] : __privateGet(this, _transcludedGroups).default || [];
      const hasContent = nodes.some((node) => {
        if (node.nodeType === 1 && node.nodeName !== "!--" && node.nodeName !== "#comment") return true;
        if (node.nodeType === 3 && node.textContent.trim().length > 0) return true;
        return false;
      });
      if (hasContent) {
        slotEl.innerHTML = "";
        nodes.forEach((node) => {
          slotEl.appendChild(node);
        });
        slotEl.setAttribute("data-avenx-transcluded", "true");
      } else {
        slotEl.removeAttribute("data-avenx-transcluded");
        slotEl.innerHTML = "";
        __privateMethod(this, _AvenxComponent_instances, getDefaultSlotChildren_fn).call(this, name).forEach((child) => {
          slotEl.appendChild(child);
        });
      }
    });
  };
  /**
   * Retrieves slot elements belonging to this component.
   * @returns {Element[]}
   * @private
   */
  getOwnSlots_fn = function() {
    if (!__privateGet(this, _element)) return [];
    const slots = __privateGet(this, _element).querySelectorAll("slot");
    const root = __privateGet(this, _element);
    return Array.from(slots).filter((slot) => {
      let parent = slot.parentNode;
      while (parent && parent !== root) {
        if (parent.hasAttribute && parent.hasAttribute("data-avenx-comp")) {
          return false;
        }
        parent = parent.parentNode;
      }
      return true;
    });
  };
  /**
   * Finds the nearest ancestor component that provides the specified key.
   * @param {string} key - The provided key to search for.
   * @returns {AvenxComponent|null} The ancestor component instance, or null.
   * @private
   */
  findAncestorProviding_fn = function(key) {
    const el = this._getElement();
    if (!el) return null;
    let parentEl = el.parentNode;
    while (parentEl) {
      if (parentEl.__avenx_comp_instance) {
        const comp = parentEl.__avenx_comp_instance;
        if (__privateMethod(this, _AvenxComponent_instances, componentProvides_fn).call(this, comp, key)) {
          return comp;
        }
      }
      parentEl = parentEl.parentNode;
    }
    return null;
  };
  /**
   * Checks if a component provides the specified key.
   * @param {AvenxComponent} comp - The component to check.
   * @param {string} key - The provided key.
   * @returns {boolean} True if the component provides the key.
   * @private
   */
  componentProvides_fn = function(comp, key) {
    const provideOption = comp.provide || (typeof comp.constructor.provide === "function" ? comp.constructor.provide() : comp.constructor.provide);
    if (!provideOption) return false;
    const resolved = typeof provideOption === "function" ? provideOption.call(comp) : provideOption;
    if (Array.isArray(resolved)) {
      return resolved.includes(key);
    } else if (resolved && typeof resolved === "object") {
      return key in resolved;
    }
    return false;
  };
  /**
   * Retrieves the provided value for a key from an ancestor component.
   * @param {AvenxComponent} comp - The ancestor component instance.
   * @param {string} key - The provided key.
   * @returns {any} The value.
   * @private
   */
  getAncestorProvidedValue_fn = function(comp, key) {
    if (comp._providedState && key in comp._providedState) {
      const val = comp._providedState[key];
      if (typeof val === "function") {
        return val;
      }
      return val;
    }
    const provideOption = comp.provide || (typeof comp.constructor.provide === "function" ? comp.constructor.provide() : comp.constructor.provide);
    if (!provideOption) return void 0;
    const resolved = typeof provideOption === "function" ? provideOption.call(comp) : provideOption;
    if (Array.isArray(resolved)) {
      return comp._getScopeValue(key);
    } else if (resolved && typeof resolved === "object") {
      const val = resolved[key];
      if (typeof val === "function") {
        return val.bind(comp);
      }
      return val;
    }
    return void 0;
  };

  // lib/core/runtime/AvenxRouter.js
  var _AvenxRouter_instances, runGuards_fn, handleRoute_fn, _currentRouteProxy, _currentRouteIsNull;
  var AvenxRouter = class {
    /**
     * @param {AvenxApp} app - The main application instance.
     * @param {Object<string, string | object>} routes - A map of hash routes to page names or route definitions.
     * @param {object} [options] - Optional router configurations (e.g. prefix).
     */
    constructor(app, routes = {}, options = {}) {
      __privateAdd(this, _AvenxRouter_instances);
      __privateAdd(this, _currentRouteProxy, null);
      __privateAdd(this, _currentRouteIsNull, true);
      this.app = app;
      this.routes = routes;
      this.options = options;
      this.currentRoute = null;
      this.hashToIgnore = null;
      if (!window.__avenx_routers) {
        window.__avenx_routers = /* @__PURE__ */ new Set();
      }
      window.__avenx_routers.add(this);
      this.hashChangeHandler = () => __privateMethod(this, _AvenxRouter_instances, handleRoute_fn).call(this);
      window.addEventListener("hashchange", this.hashChangeHandler);
    }
    /**
     * Starts the router and handles the initial route.
     */
    start() {
      __privateMethod(this, _AvenxRouter_instances, handleRoute_fn).call(this);
    }
    /**
     * Navigates to a specific hash route.
     * @param {string} hash - The target hash (e.g., '#/about').
     */
    navigate(hash) {
      let targetHash = hash;
      if (this.options && this.options.prefix) {
        const prefix = this.options.prefix;
        if (targetHash.startsWith("#/")) {
          targetHash = "#" + prefix + targetHash.substring(1);
        } else if (targetHash.startsWith("#")) {
          targetHash = "#" + prefix + "/" + targetHash.substring(1);
        }
      }
      window.location.hash = targetHash;
    }
    /**
     * Destroys the router and cleans up event listeners.
     */
    destroy() {
      window.removeEventListener("hashchange", this.hashChangeHandler);
      if (window.__avenx_routers) {
        window.__avenx_routers.delete(this);
      }
    }
    /**
     * Checks if this router has a matching route (excluding fallback) for the given hash.
     * @param {string} hash - The URL hash.
     * @returns {boolean} True if a non-fallback route matches.
     */
    matches(hash) {
      let normalizedHash = hash || "#/";
      const secondHashIndex = normalizedHash.indexOf("#", 1);
      if (secondHashIndex !== -1) {
        normalizedHash = normalizedHash.substring(0, secondHashIndex);
      }
      if (this.options && this.options.prefix) {
        const prefix = this.options.prefix;
        const expectedStart = "#" + prefix;
        if (!normalizedHash.startsWith(expectedStart)) {
          return false;
        }
        normalizedHash = "#" + normalizedHash.substring(expectedStart.length);
        if (!normalizedHash.startsWith("#/")) {
          normalizedHash = "#/" + normalizedHash.substring(1);
        }
      }
      for (const routePattern of Object.keys(this.routes)) {
        if (routePattern === "*") continue;
        const regexStr = routePattern.replace(/[.*+^${}()|[\]\\]/g, "\\$&").replace(/:([a-zA-Z0-9_$]+)/g, "([^/]+)");
        const regex = new RegExp(`^${regexStr}$`);
        const [pathPart] = normalizedHash.split("?");
        if (pathPart.match(regex)) {
          return true;
        }
      }
      return false;
    }
    /**
     * Getter for currentRoute. Returns null if null was assigned, or the stable reactive proxy.
     * @returns {object|null}
     */
    get currentRoute() {
      return __privateGet(this, _currentRouteIsNull) ? null : __privateGet(this, _currentRouteProxy);
    }
    /**
     * Setter for currentRoute. Reactively updates the stable proxy properties.
     * @param {object|null} val
     */
    set currentRoute(val) {
      if (val === null) {
        __privateSet(this, _currentRouteIsNull, true);
        if (__privateGet(this, _currentRouteProxy)) {
          __privateGet(this, _currentRouteProxy).hash = "";
          __privateGet(this, _currentRouteProxy).page = "";
          for (const key of Object.keys(__privateGet(this, _currentRouteProxy).params)) {
            delete __privateGet(this, _currentRouteProxy).params[key];
          }
        }
      } else {
        __privateSet(this, _currentRouteIsNull, false);
        if (!__privateGet(this, _currentRouteProxy)) {
          const handlerFactory = new ProxyHandlerFactory();
          __privateSet(this, _currentRouteProxy, new Proxy({ hash: "", page: "", params: {} }, handlerFactory.create()));
        }
        __privateGet(this, _currentRouteProxy).hash = val.hash;
        __privateGet(this, _currentRouteProxy).page = val.page;
        for (const key of Object.keys(__privateGet(this, _currentRouteProxy).params)) {
          delete __privateGet(this, _currentRouteProxy).params[key];
        }
        for (const [key, v] of Object.entries(val.params || {})) {
          __privateGet(this, _currentRouteProxy).params[key] = v;
        }
      }
    }
  };
  _AvenxRouter_instances = new WeakSet();
  /**
   * Sequentially executes an array of guards for a route transition.
   * @param {Array<typeof AvenxGuard|AvenxGuard>} guards - Route guards.
   * @param {object} to - Target route details.
   * @param {object | null} from - Current route details.
   * @returns {Promise<boolean|string>} Result of the guard checks (true, false, or redirect path).
   * @private
   */
  runGuards_fn = function(guards, to, from) {
    return new Promise((resolve, reject) => {
      const nextGuard = (index) => {
        if (index >= guards.length) {
          resolve(true);
          return;
        }
        const Guard = guards[index];
        const instance = typeof Guard === "function" ? new Guard() : Guard;
        const guardTimeout = this.options && this.options.guardTimeout !== void 0 ? this.options.guardTimeout : 5e3;
        let timeoutId;
        const timeoutPromise = new Promise((_, reqReject) => {
          timeoutId = setTimeout(() => {
            reqReject(new AvenxError(AvenxErrorCodes.ROUTER_GUARD_TIMEOUT, guardTimeout, to.hash));
          }, guardTimeout);
        });
        Promise.race([Promise.resolve(instance.canActivate(to, from)), timeoutPromise]).then((result) => {
          clearTimeout(timeoutId);
          if (result === false || typeof result === "string") {
            resolve(result);
          } else {
            nextGuard(index + 1);
          }
        }).catch((err) => {
          clearTimeout(timeoutId);
          if (err.code === AvenxErrorCodes.ROUTER_GUARD_TIMEOUT) {
            reject(err);
          } else {
            logger.error(formatMessage(AvenxErrorCodes.ROUTER_GUARD_ERROR, to.hash, err));
            resolve(false);
          }
        });
      };
      nextGuard(0);
    });
  };
  /**
   * Handles the current route by matching it against patterns, executing guards,
   * and mounting the corresponding page.
   * @private
   */
  handleRoute_fn = function() {
    let hash = window.location.hash || "#/";
    const secondHashIndex = hash.indexOf("#", 1);
    if (secondHashIndex !== -1) {
      hash = hash.substring(0, secondHashIndex);
    }
    if (this.options && this.options.prefix) {
      const prefix = this.options.prefix;
      const expectedStart = "#" + prefix;
      if (!hash.startsWith(expectedStart)) {
        return;
      }
      hash = "#" + hash.substring(expectedStart.length);
      if (!hash.startsWith("#/")) {
        hash = "#/" + hash.substring(1);
      }
    }
    if (this.hashToIgnore === hash) {
      this.hashToIgnore = null;
      return;
    }
    let matchedRoute = null;
    const params = {};
    for (const [routePattern, routeDef] of Object.entries(this.routes)) {
      if (routePattern === "*") continue;
      const paramNames = [];
      const regexStr = routePattern.replace(/[.*+^${}()|[\]\\]/g, "\\$&").replace(/:([a-zA-Z0-9_$]+)/g, (_, name) => {
        paramNames.push(name);
        return "([^/]+)";
      });
      const regex = new RegExp(`^${regexStr}$`);
      const [pathPart, queryPart] = hash.split("?");
      const match = pathPart.match(regex);
      if (match) {
        matchedRoute = { pattern: routePattern, definition: routeDef };
        paramNames.forEach((name, idx) => {
          const value = match[idx + 1];
          try {
            params[name] = decodeURIComponent(value);
          } catch {
            logger.warn(`[AvenxRouter] Failed to decode route parameter "${name}": ${value}`);
            params[name] = value;
          }
        });
        if (queryPart) {
          const queryParams = new URLSearchParams(queryPart);
          params.query = Object.fromEntries(queryParams.entries());
        }
        break;
      }
    }
    let otherRouterMatches = false;
    if (!matchedRoute && this.routes["*"]) {
      const rawHash = window.location.hash || "#/";
      otherRouterMatches = Array.from(window.__avenx_routers || []).some((r) => r !== this && r.matches(rawHash));
      if (!otherRouterMatches) {
        matchedRoute = { pattern: "*", definition: this.routes["*"] };
      }
    }
    if (!matchedRoute) {
      if (!otherRouterMatches) {
        logger.warn(`[AvenxRouter] No route defined for hash: ${hash}`);
      }
      return;
    }
    const def = matchedRoute.definition;
    const pageName = typeof def === "string" ? def : def.page;
    const guards = typeof def === "object" ? def.guards || [] : [];
    const to = { hash, page: pageName, params };
    const from = this.currentRoute;
    __privateMethod(this, _AvenxRouter_instances, runGuards_fn).call(this, guards, to, from).then((result) => {
      if (result === false) {
        logger.warn(formatMessage(AvenxErrorCodes.ROUTER_GUARD_DENIED, to.hash));
        if (from && from.hash !== window.location.hash) {
          this.hashToIgnore = from.hash;
          window.location.hash = from.hash;
        }
      } else if (typeof result === "string") {
        this.navigate(result);
      } else {
        this.currentRoute = to;
        const transitionName = typeof def === "object" && def.transition || this.options.transition;
        this.app.mountPage(pageName, params, { transition: transitionName });
      }
    }).catch((err) => {
      logger.error(err);
      if (this.options && this.options.guardTimeoutRedirect) {
        this.navigate(this.options.guardTimeoutRedirect);
      } else {
        if (from && from.hash !== window.location.hash) {
          this.hashToIgnore = from.hash;
          window.location.hash = from.hash;
        }
      }
    });
  };
  _currentRouteProxy = new WeakMap();
  _currentRouteIsNull = new WeakMap();

  // lib/core/runtime/AvenxApp.js
  var _activeComponents, _target;
  var AvenxApp = class {
    /**
     * @param {object} config - Application configuration.
     * @param {string} config.target - Selector for the main application container.
     */
    constructor(config) {
      /** @type {AvenxComponent[]} @private */
      __privateAdd(this, _activeComponents, []);
      /** @type {Element|null} @private */
      __privateAdd(this, _target, null);
      __privateSet(this, _target, document.querySelector(config.target));
      if (!__privateGet(this, _target)) {
        throw new AvenxError(AvenxErrorCodes.MOUNT_TARGET_NOT_FOUND, config.target);
      }
      this.components = /* @__PURE__ */ new Map();
      this.pages = /* @__PURE__ */ new Map();
      this.bridges = {};
      this.router = null;
      this.updateAll = this.updateAll.bind(this);
      if (config.logging) {
        logger.configure(config.logging);
      }
    }
    /**
     * Registers a component with the application.
     * @param {string} name - The name of the component.
     * @param {typeof AvenxComponent} compClass - The component class.
     */
    register(name, compClass) {
      this.components.set(name, compClass);
    }
    /**
     * Registers a page with the application.
     * @param {string} name - The name of the page.
     * @param {typeof AvenxPage} pageClass - The page class.
     */
    registerPage(name, pageClass) {
      if (this.pages.has(name)) {
        logger.warn(`Page "${name}" is already registered and will be overwritten.`);
      }
      this.pages.set(name, pageClass);
    }
    /**
     * Initializes the router for the application.
     * @param {Object<string, string>} routes - Route mapping.
     * @param {object} [options] - Router options.
     * @returns {AvenxRouter} The router instance.
     */
    initRouter(routes, options = {}) {
      this.router = new AvenxRouter(this, routes, options);
      this.router.start();
      return this.router;
    }
    /**
     * Registers a bridge with the application.
     * Bridges provide shared state and logic across components.
     * @param {string} name - The name of the bridge.
     * @param {object | Function} bridgeData - The bridge data or constructor.
     */
    registerBridge(name, bridgeData) {
      if (Object.prototype.hasOwnProperty.call(this.bridges, name)) {
        const availableBridges = Object.keys(this.bridges).join(",");
        const suggestion = `Please use a unique name`;
        throw new AvenxError(AvenxErrorCodes.BRIDGE_ALREADY_EXISTS, name, availableBridges || "none", suggestion);
      }
      let instance = bridgeData;
      if (typeof bridgeData === "function") {
        try {
          instance = new bridgeData();
        } catch {
        }
      }
      const handlerFactory = new ProxyHandlerFactory({
        onChange: () => {
        }
      });
      const reactiveState = new Proxy(instance, handlerFactory.create());
      this.bridges[name] = reactiveState;
    }
    /**
     * Updates all active components in the application.
     */
    updateAll() {
      __privateGet(this, _activeComponents).forEach((comp) => comp.update());
    }
    /**
     * Mounts a page to the main application container.
     * @param {string} name - The name of the page to mount.
     * @param {object} [params] - Dynamic route parameters to inject.
     * @param {object} [options] - Mount options, e.g., transition options.
     */
    mountPage(name, params = {}, options = {}) {
      const PageClass = this.pages.get(name);
      if (!PageClass) {
        throw new AvenxError(AvenxErrorCodes.PAGE_NOT_FOUND, name);
      }
      if (__privateGet(this, _target)) {
        const activePage = __privateGet(this, _activeComponents)[0];
        if (activePage && activePage instanceof PageClass) {
          if (activePage.params) {
            for (const key of Object.keys(activePage.params)) {
              if (!(key in params)) {
                delete activePage.state[key];
                delete activePage.params[key];
              }
            }
          } else {
            activePage.params = {};
          }
          for (const [key, val] of Object.entries(params)) {
            activePage.state[key] = val;
            activePage.params[key] = val;
          }
          return;
        }
        const transitionName = options.transition;
        __privateGet(this, _activeComponents).forEach((comp) => {
          if (typeof comp.unmount === "function") {
            comp.unmount();
          }
        });
        __privateSet(this, _activeComponents, []);
        let exitWrapper = null;
        if (transitionName && __privateGet(this, _target).childNodes.length > 0 && __privateGet(this, _target).parentNode) {
          exitWrapper = document.createElement("div");
          exitWrapper.className = "ax-page-exit-wrapper";
          const children = Array.from(__privateGet(this, _target).childNodes);
          children.forEach((child) => exitWrapper.appendChild(child));
          __privateGet(this, _target).parentNode.insertBefore(exitWrapper, __privateGet(this, _target));
        }
        __privateGet(this, _target).innerHTML = "";
        const pageInstance = new PageClass(this.bridges, this.components);
        pageInstance.params = params;
        for (const [key, val] of Object.entries(params)) {
          pageInstance.state[key] = val;
        }
        pageInstance.mount(__privateGet(this, _target));
        __privateGet(this, _activeComponents).push(pageInstance);
        if (transitionName) {
          const patcher = new DomPatcher();
          if (exitWrapper) {
            patcher.leave(exitWrapper, transitionName, () => {
              if (exitWrapper.parentNode) {
                exitWrapper.parentNode.removeChild(exitWrapper);
              }
            });
          }
          const newPageChildren = Array.from(__privateGet(this, _target).childNodes).filter((node) => node.nodeType === Node.ELEMENT_NODE);
          newPageChildren.forEach((child) => {
            patcher.enter(child, transitionName);
          });
        }
      }
    }
    /**
     * Mounts a component to a target element.
     * @param {string} name - The name of the component to mount.
     * @param {string|null} [targetSelector] - Optional selector for the mount target.
     */
    mount(name, targetSelector = null) {
      const Comp = this.components.get(name);
      if (!Comp) {
        const registeredList = Array.from(this.components.keys()).join(", ");
        throw new AvenxError(AvenxErrorCodes.COMPONENT_NOT_FOUND, name, registeredList);
      }
      const target = targetSelector ? document.querySelector(targetSelector) : __privateGet(this, _target);
      if (!target) {
        throw new AvenxError(AvenxErrorCodes.MOUNT_TARGET_NOT_FOUND, targetSelector || "default target");
      }
      const compInstance = new Comp(this.bridges);
      compInstance.mount(target);
      __privateGet(this, _activeComponents).push(compInstance);
    }
  };
  _activeComponents = new WeakMap();
  _target = new WeakMap();

  // lib/core/runtime/AvenxBridge.js
  var AvenxBridge = class {
    /**
     * Initializes the bridge instance.
     */
    constructor() {
    }
  };

  // lib/core/runtime/AvenxGuard.js
  var AvenxGuard = class {
    /**
     * Determines whether the route can be activated.
     * Can return a boolean (true to allow, false to abort), a string (to redirect),
     * or a Promise resolving to either.
     * @returns {boolean|string|Promise<boolean|string>}
     */
    canActivate() {
      return true;
    }
  };

  // lib/core/reactive/createState.js
  var StateFactory = class {
    /**
     * @param {typeof ProxyHandlerFactory} [handlerFactoryClass] - The factory class to create proxy handlers.
     */
    constructor(handlerFactoryClass = ProxyHandlerFactory) {
      this.handlerFactoryClass = handlerFactoryClass;
    }
    /**
     * Creates a reactive proxy for the given initial state.
     * @param {object} [initialState] - The initial state object.
     * @param {object} [options] - Configuration options for the proxy handler.
     * @returns {Proxy} The reactive state proxy.
     */
    create(initialState = {}, options = {}) {
      if (initialState && initialState[IS_REACTIVE_PROXY]) {
        return initialState;
      }
      const handlerFactory = new this.handlerFactoryClass(options);
      return new Proxy(initialState, handlerFactory.create());
    }
  };

  // lib/core/renderer/diff.js
  var HtmlDiff = class {
    /**
     * Compares two HTML strings and returns the next HTML if they differ.
     * @param {string} currentHtml - The current HTML content.
     * @param {string} nextHtml - The next HTML content.
     * @returns {string|null} The next HTML if it differs from current, otherwise null.
     */
    diff(currentHtml, nextHtml) {
      return currentHtml === nextHtml ? null : nextHtml;
    }
  };

  // lib/core/security/sanitize.js
  var DEFAULT_ALLOWED_TAGS = /* @__PURE__ */ new Set([
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "del",
    "ins",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "img"
  ]);
  var DEFAULT_ALLOWED_ATTRIBUTES = {
    "*": ["class", "id", "title", "lang", "dir"],
    a: ["href", "target", "rel", "title"],
    img: ["src", "alt", "title", "width", "height"],
    col: ["span", "width"],
    colgroup: ["span", "width"],
    td: ["colspan", "rowspan", "headers"],
    th: ["colspan", "rowspan", "headers", "scope"]
  };
  var VOID_ELEMENTS = /* @__PURE__ */ new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "source",
    "track",
    "wbr"
  ]);
  var STRIP_CONTENT_TAGS = /* @__PURE__ */ new Set([
    "script",
    "style",
    "iframe",
    "object",
    "embed",
    "noscript",
    "template",
    "canvas",
    "video",
    "audio",
    "svg",
    "math"
  ]);
  var URL_ATTRIBUTES = /* @__PURE__ */ new Set(["href", "src", "cite", "poster", "formaction"]);
  var INVALID_URL_PROTOCOL = /^(?:javascript|data|vbscript):/i;
  function isSafeUrl(url, tagName) {
    if (!url) return true;
    const sanitizedUrl = url.replace(/[\u0000-\u001F\u007F-\u009F\s]/g, "");
    if (INVALID_URL_PROTOCOL.test(sanitizedUrl)) {
      if (tagName === "img" && /^data:image\//i.test(sanitizedUrl)) {
        return true;
      }
      return false;
    }
    return true;
  }
  function escapeText(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function escapeAttrValue(str) {
    return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  var Sanitizer = class {
    /**
     * Constructs the Sanitizer with configuration options.
     * @param {object} [config] - Sanitization configuration.
     * @param {string[]} [config.allowedTags] - Array of allowed tag names.
     * @param {Record<string, string[]>} [config.allowedAttributes] - Map of tag names to allowed attribute lists.
     */
    constructor(config = {}) {
      this.allowedTags = config.allowedTags ? new Set(config.allowedTags.map((t) => t.toLowerCase())) : DEFAULT_ALLOWED_TAGS;
      this.allowedAttributes = {};
      const attributesSource = config.allowedAttributes || DEFAULT_ALLOWED_ATTRIBUTES;
      for (const [tag, attrs] of Object.entries(attributesSource)) {
        this.allowedAttributes[tag.toLowerCase()] = attrs.map((a) => a.toLowerCase());
      }
    }
    /**
     * Sanitizes a value.
     * @param {any} value - The value to sanitize.
     * @returns {string} The sanitized string.
     */
    sanitize(value) {
      if (value == null) return "";
      const htmlString = String(value);
      if (typeof DOMParser !== "undefined") {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        return this._sanitizeNode(doc.body);
      } else if (typeof document !== "undefined" && document.implementation && document.implementation.createHTMLDocument) {
        const doc = document.implementation.createHTMLDocument("");
        doc.body.innerHTML = htmlString;
        return this._sanitizeNode(doc.body);
      } else {
        return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
      }
    }
    /**
     * Recursively sanitizes a DOM node and returns the clean HTML string.
     * @param {any} node - The DOM node or mock DOM element to sanitize.
     * @returns {string} The sanitized inner HTML.
     * @private
     */
    _sanitizeNode(node) {
      let result = "";
      const childNodes = node.childNodes || [];
      for (let i = 0; i < childNodes.length; i++) {
        const child = childNodes[i];
        if (child.nodeType === 3) {
          const text = child.textContent !== void 0 ? child.textContent : child.nodeValue || child.data || "";
          result += escapeText(text);
        } else if (child.nodeType === 1) {
          const tagName = child.tagName.toLowerCase();
          if (this.allowedTags.has(tagName)) {
            const isVoid = VOID_ELEMENTS.has(tagName);
            result += `<${tagName}`;
            const attrs = child.attributes || [];
            for (let j = 0; j < attrs.length; j++) {
              const attr = attrs[j];
              const attrName = attr.name;
              const attrValue = attr.value;
              const lowerAttrName = attrName.toLowerCase();
              const allowedAttrsForTag = this.allowedAttributes[tagName] || [];
              const globalAllowedAttrs = this.allowedAttributes["*"] || [];
              const isAllowed = allowedAttrsForTag.includes(lowerAttrName) || globalAllowedAttrs.includes(lowerAttrName);
              if (isAllowed) {
                if (URL_ATTRIBUTES.has(lowerAttrName)) {
                  if (!isSafeUrl(attrValue, tagName)) {
                    continue;
                  }
                }
                result += ` ${lowerAttrName}="${escapeAttrValue(attrValue)}"`;
              }
            }
            if (isVoid) {
              result += " />";
            } else {
              result += ">";
              result += this._sanitizeNode(child);
              result += `</${tagName}>`;
            }
          } else {
            if (!STRIP_CONTENT_TAGS.has(tagName)) {
              result += this._sanitizeNode(child);
            }
          }
        }
      }
      return result;
    }
  };

  // lib/core/runtime/AvenxPage.js
  var _componentRegistry, _childComponents, _AvenxPage_instances, mountChildComponents_fn, getRegistry_fn;
  var AvenxPage = class extends AvenxComponent {
    /**
     * @param {object} initialState - Initial state.
     * @param {object} computed - Computed properties.
     * @param {object} bridges - Shared bridges.
     * @param {string} template - HTML template.
     * @param {object} methods - Component methods.
     * @param {Map<string, typeof AvenxComponent>} componentRegistry - Registry of available components.
     * @param {object} props - Component properties.
     */
    constructor(initialState = {}, computed = {}, bridges = {}, template = "", methods = {}, componentRegistry = /* @__PURE__ */ new Map(), props = {}) {
      super(initialState, computed, bridges, template, methods, props);
      __privateAdd(this, _AvenxPage_instances);
      /** @type {Map<string, typeof AvenxComponent>} @private */
      __privateAdd(this, _componentRegistry);
      /** @type {Map<Element, AvenxComponent>} @private */
      __privateAdd(this, _childComponents, /* @__PURE__ */ new Map());
      __privateSet(this, _componentRegistry, componentRegistry);
    }
    /**
     * Updates the page and then mounts/updates child components.
     */
    update() {
      super.update();
      __privateMethod(this, _AvenxPage_instances, mountChildComponents_fn).call(this);
    }
    /**
     * Unmounts the page and all child components.
     */
    unmount() {
      for (const compInstance of __privateGet(this, _childComponents).values()) {
        if (typeof compInstance.unmount === "function") {
          compInstance.unmount();
        }
      }
      __privateGet(this, _childComponents).clear();
      super.unmount();
    }
    /**
     * Retrieves the component registry.
     * @returns {Map<string, typeof AvenxComponent>}
     * @protected
     */
    _getComponentRegistry() {
      return __privateGet(this, _componentRegistry);
    }
  };
  _componentRegistry = new WeakMap();
  _childComponents = new WeakMap();
  _AvenxPage_instances = new WeakSet();
  /**
   * Finds all mount points for child components and initializes or updates them.
   * @private
   */
  mountChildComponents_fn = function() {
    const root = this._getElement();
    if (!root) return;
    const mountPoints = root.querySelectorAll("[data-avenx-comp]");
    const currentElements = new Set(mountPoints);
    for (const [el, compInstance] of __privateGet(this, _childComponents).entries()) {
      if (!currentElements.has(el) || !root.contains(el)) {
        if (typeof compInstance.unmount === "function") {
          compInstance.unmount();
        }
        __privateGet(this, _childComponents).delete(el);
      }
    }
    const registry = __privateMethod(this, _AvenxPage_instances, getRegistry_fn).call(this);
    mountPoints.forEach((el) => {
      const compName = el.getAttribute("data-avenx-comp");
      const CompClass = registry.get(compName);
      if (CompClass) {
        const props = {};
        for (const attr of el.attributes) {
          if (attr.name.startsWith("data-props-")) {
            const propName = attr.name.slice("data-props-".length);
            try {
              props[propName] = this._evaluate(attr.value);
            } catch (e) {
              logger.warn(`[AvenxPage] Failed to evaluate prop expression: ${attr.value}`, e);
            }
          }
        }
        if (__privateGet(this, _childComponents).has(el)) {
          const compInstance = __privateGet(this, _childComponents).get(el);
          if (typeof compInstance.setProps === "function") {
            compInstance.setProps(props);
          } else if (typeof compInstance.update === "function") {
            compInstance.update();
          }
        } else {
          const compInstance = new CompClass(this._getBridges(), props);
          compInstance.mount(el);
          __privateGet(this, _childComponents).set(el, compInstance);
        }
      } else {
        logger.warn(`[AvenxPage] Component '${compName}' not found in registry.`);
      }
    });
  };
  /**
   * Resolves the component registry dynamically by traversing parent page instances.
   * @returns {Map<string, typeof AvenxComponent>}
   * @private
   */
  getRegistry_fn = function() {
    if (__privateGet(this, _componentRegistry) instanceof Map) {
      return __privateGet(this, _componentRegistry);
    }
    const root = this._getElement();
    if (root) {
      let parentEl = root.parentNode;
      while (parentEl) {
        if (parentEl.__avenx_comp_instance && typeof parentEl.__avenx_comp_instance._getComponentRegistry === "function") {
          const reg = parentEl.__avenx_comp_instance._getComponentRegistry();
          if (reg instanceof Map) {
            return reg;
          }
        }
        parentEl = parentEl.parentNode;
      }
    }
    return /* @__PURE__ */ new Map();
  };

  // lib/core/runtime/AvenxMock.js
  function createDeepMockProxy(target, path = [], options) {
    return new Proxy(target, {
      get(t, prop, receiver) {
        if (prop === "$calls") return options.calls;
        if (prop === "$stateChanges") return options.stateChanges;
        if (prop === "$onStateChange") {
          return (cb) => {
            options.stateChangeCallbacks.push(cb);
            return () => {
              const idx = options.stateChangeCallbacks.indexOf(cb);
              if (idx !== -1) options.stateChangeCallbacks.splice(idx, 1);
            };
          };
        }
        if (prop === "$onCall") {
          return (cb) => {
            options.callCallbacks.push(cb);
            return () => {
              const idx = options.callCallbacks.indexOf(cb);
              if (idx !== -1) options.callCallbacks.splice(idx, 1);
            };
          };
        }
        if (prop === "$reset") {
          return () => {
            options.calls.length = 0;
            options.stateChanges.length = 0;
          };
        }
        if (prop === "$isMock") return true;
        if (typeof prop === "symbol" || prop === "constructor" || prop === "prototype") {
          return Reflect.get(t, prop, receiver);
        }
        const val = Reflect.get(t, prop, receiver);
        if (typeof val === "function") {
          return function(...args) {
            if (path.length === 0) {
              options.calls.push({ method: prop, args });
              options.callCallbacks.forEach((cb) => cb(prop, args));
            }
            return val.apply(receiver, args);
          };
        }
        if (val && typeof val === "object" && !(val instanceof Date) && !(val instanceof RegExp)) {
          return createDeepMockProxy(val, [...path, prop], options);
        }
        return val;
      },
      set(t, prop, value, receiver) {
        if (typeof prop === "symbol") {
          return Reflect.set(t, prop, value, receiver);
        }
        const fullPath = [...path, prop];
        const pathStr = fullPath.join(".");
        options.stateChanges.push({ prop: pathStr, value });
        options.stateChangeCallbacks.forEach((cb) => cb(pathStr, value));
        return Reflect.set(t, prop, value, receiver);
      }
    });
  }
  function getHTML(el) {
    if (!el) return "";
    if (typeof Element !== "undefined" && el instanceof Element) {
      return el.innerHTML;
    }
    const desc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el) || {}, "innerHTML") || Object.getOwnPropertyDescriptor(el, "innerHTML");
    if (desc && typeof desc.get === "function") {
      return el.innerHTML;
    }
    if (el.childNodes && el.childNodes.length > 0) {
      return el.childNodes.map((c) => {
        if (c.nodeType === 3) return c.textContent;
        if (c.nodeType === 1) {
          const attrsStr = (c.attributes || []).map((attr) => ` ${attr.name}="${attr.value}"`).join("");
          const tag = c.tagName.toLowerCase();
          return `<${tag}${attrsStr}>${getHTML(c)}</${tag}>`;
        }
        return "";
      }).join("");
    }
    return el.innerHTML || "";
  }
  var AvenxMock = class {
    /**
     * Creates a mock bridge proxy.
     * @param {typeof AvenxBridge|object} bridgeClassOrObject - The bridge class or object to mock.
     * @param {object} [initialData] - Initial state override.
     * @returns {object} The mock bridge proxy.
     */
    static createMockBridge(bridgeClassOrObject, initialData = {}) {
      let instance;
      if (typeof bridgeClassOrObject === "function") {
        instance = new bridgeClassOrObject();
      } else if (bridgeClassOrObject && typeof bridgeClassOrObject === "object") {
        instance = Object.create(Object.getPrototypeOf(bridgeClassOrObject));
        Object.defineProperties(instance, Object.getOwnPropertyDescriptors(bridgeClassOrObject));
      } else {
        instance = {};
      }
      if (initialData) {
        Object.assign(instance, initialData);
      }
      const calls = [];
      const stateChanges = [];
      const stateChangeCallbacks = [];
      const callCallbacks = [];
      const options = {
        calls,
        stateChanges,
        stateChangeCallbacks,
        callCallbacks
      };
      return createDeepMockProxy(instance, [], options);
    }
    /**
     * Creates a new testing sandbox.
     * @returns {AvenxSandbox}
     */
    static createSandbox() {
      return new AvenxSandbox2();
    }
    /**
     * Triggers an event on an element.
     * Supports standard DOM Event/CustomEvent and custom MockNode trigger method.
     * @param {Element} element
     * @param {string} eventName
     * @param {object} [eventData]
     */
    static trigger(element, eventName, eventData = {}) {
      if (typeof Event !== "undefined" && element.dispatchEvent) {
        let event;
        if (typeof CustomEvent !== "undefined") {
          event = new CustomEvent(eventName, { bubbles: true, cancelable: true, detail: eventData });
        } else {
          event = new Event(eventName, { bubbles: true, cancelable: true });
        }
        Object.assign(event, eventData);
        element.dispatchEvent(event);
      } else if (typeof element.trigger === "function") {
        element.trigger(eventName, eventData);
      } else {
        let current = element;
        const event = {
          target: element,
          type: eventName,
          preventDefault() {
            this.defaultPrevented = true;
          },
          stopPropagation() {
            this.cancelBubble = true;
          },
          ...eventData
        };
        while (current) {
          if (current.listeners && typeof current.listeners[eventName] === "function") {
            current.listeners[eventName](event);
          } else if (current.addEventListener && typeof current.listeners === "object" && current.listeners[eventName]) {
            current.listeners[eventName](event);
          }
          if (event.cancelBubble) break;
          current = current.parentNode;
        }
      }
    }
  };
  var AvenxSandbox2 = class {
    /**
     * Initializes the AvenxSandbox instance.
     */
    constructor() {
      this.components = /* @__PURE__ */ new Map();
      this.bridges = {};
    }
    /**
     * Registers a component class with the sandbox.
     * @param {string} name
     * @param {typeof AvenxComponent} compClass
     * @returns {AvenxSandbox}
     */
    register(name, compClass) {
      this.components.set(name, compClass);
      return this;
    }
    /**
     * Registers a bridge with the sandbox.
     * @param {string} name
     * @param {object} bridgeInstance
     * @returns {AvenxSandbox}
     */
    registerBridge(name, bridgeInstance) {
      this.bridges[name] = bridgeInstance;
      return this;
    }
    /**
     * Mocks the router state.
     * @param {object} route
     * @returns {AvenxSandbox}
     */
    setRoute(route) {
      if (typeof window === "undefined") {
        global.window = {};
      }
      window.__avenx_routers = [{
        currentRoute: route
      }];
      return this;
    }
    /**
     * Waits for any pending scheduled updates to complete.
     * @returns {Promise<void>}
     */
    async waitForUpdate() {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    /**
     * Mounts a component in isolation.
     * @param {typeof AvenxComponent} compClass
     * @param {object} [props]
     * @param {Element} [container]
     * @returns {object} Sandbox mount helper instance.
     */
    mount(compClass, props = {}, container = null) {
      let target = container;
      if (!target) {
        if (typeof document !== "undefined" && typeof document.createElement === "function") {
          target = document.createElement("div");
        } else {
          target = this._createMockElement("div");
        }
      }
      let instance;
      if (compClass.prototype instanceof AvenxPage) {
        instance = new compClass(this.bridges, this.components, props);
      } else {
        instance = new compClass(this.bridges, props);
      }
      instance.mount(target);
      return {
        instance,
        container: target,
        get html() {
          return getHTML(target);
        },
        update: () => {
          instance.update();
        },
        trigger: (selectorOrElement, eventName, eventData = {}) => {
          let el = selectorOrElement;
          if (typeof selectorOrElement === "string") {
            if (typeof target.querySelector === "function") {
              el = target.querySelector(selectorOrElement);
            } else {
              el = this._findMockElementBySelector(target, selectorOrElement);
            }
          }
          if (!el) {
            throw new Error(`Element not found: ${selectorOrElement}`);
          }
          AvenxMock.trigger(el, eventName, eventData);
        }
      };
    }
    /**
     * Internal helper to resolve mock DOM selector fallback.
     * @param {object} root - Root node to start traversal.
     * @param {string} selector - CSS selector string.
     * @returns {object|null} Matched element or null.
     * @private
     */
    _findMockElementBySelector(root, selector) {
      if (!root) return null;
      if (selector.startsWith("#")) {
        const id = selector.substring(1);
        const traverse = (node) => {
          if (node.getAttribute && node.getAttribute("id") === id) return node;
          if (node.attrs && node.attrs.id === id) return node;
          const children = node.childNodes || node.children || [];
          for (const child of children) {
            const res = traverse(child);
            if (res) return res;
          }
          return null;
        };
        return traverse(root);
      } else if (selector.startsWith(".")) {
        const className = selector.substring(1);
        const traverse = (node) => {
          if (node.getAttribute && node.getAttribute("class") === className) return node;
          if (node.attrs && node.attrs.class === className) return node;
          const children = node.childNodes || node.children || [];
          for (const child of children) {
            const res = traverse(child);
            if (res) return res;
          }
          return null;
        };
        return traverse(root);
      } else {
        const tag = selector.toUpperCase();
        const traverse = (node) => {
          if (node.tagName === tag) return node;
          const children = node.childNodes || node.children || [];
          for (const child of children) {
            const res = traverse(child);
            if (res) return res;
          }
          return null;
        };
        return traverse(root);
      }
    }
    /**
     * Helper to create a fallback mock element.
     * @param {string} tagName - Tag name of the element.
     * @returns {object} Fallback element object.
     * @private
     */
    _createMockElement(tagName) {
      const listeners = {};
      const element = {
        nodeType: 1,
        tagName: tagName.toUpperCase(),
        attrs: {},
        attributes: [],
        childNodes: [],
        children: [],
        listeners,
        hasAttribute(name) {
          return name in this.attrs;
        },
        getAttribute(name) {
          return this.attrs[name] !== void 0 ? this.attrs[name] : null;
        },
        setAttribute(name, val) {
          this.attrs[name] = val;
        },
        removeAttribute(name) {
          delete this.attrs[name];
        },
        appendChild(child) {
          if (child.parentNode) {
            child.parentNode.removeChild(child);
          }
          child.parentNode = this;
          this.childNodes.push(child);
          if (child.nodeType === 1) {
            this.children.push(child);
          }
          return child;
        },
        removeChild(child) {
          const idx = this.childNodes.indexOf(child);
          if (idx !== -1) {
            this.childNodes.splice(idx, 1);
            child.parentNode = null;
          }
          const cIdx = this.children.indexOf(child);
          if (cIdx !== -1) {
            this.children.splice(cIdx, 1);
          }
          return child;
        },
        addEventListener(event, callback) {
          listeners[event] = callback;
        },
        removeEventListener(event, callback) {
          if (listeners[event] === callback) {
            delete listeners[event];
          }
        },
        querySelectorAll(selector) {
          if (selector === "*") {
            const result = [];
            const traverse = (node) => {
              const children = node.childNodes || node.children || [];
              children.forEach((child) => {
                if (child.nodeType === 1) {
                  result.push(child);
                }
                traverse(child);
              });
            };
            traverse(this);
            return result;
          }
          return [];
        },
        get innerHTML() {
          return this.childNodes.map((c) => {
            if (c.nodeType === 3) return c.textContent;
            if (c.nodeType === 1) return c.outerHTML || `<${c.tagName.toLowerCase()}></${c.tagName.toLowerCase()}>`;
            return "";
          }).join("");
        },
        set innerHTML(val) {
          this.childNodes.forEach((c) => {
            c.parentNode = null;
          });
          this.childNodes = [];
          this.children = [];
        }
      };
      return element;
    }
  };
  return __toCommonJS(index_exports);
})();

if (typeof globalThis !== 'undefined') {
  Object.assign(globalThis, Avenx);
} else if (typeof window !== 'undefined') {
  Object.assign(window, Avenx);
} else if (typeof global !== 'undefined') {
  Object.assign(global, Avenx);
}

