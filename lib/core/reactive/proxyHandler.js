/**
 * Factory for creating proxy handlers used in reactive state.
 * Handles normal property access and computed property redirection.
 */
export class ProxyHandlerFactory {
    /**
     * @param {Object} [options={}] - Configuration options.
     * @param {string[]} [options.computedKeys=[]] - List of keys that should be treated as computed properties.
     * @param {function(): void} [options.onChange=() => {}] - Callback triggered when a property is set.
     * @param {function(string, Object): any} [options.getComputedValue=() => undefined] - Function to evaluate a computed property.
     */
    constructor({
        computedKeys = [],
        onChange = () => {},
        getComputedValue = () => undefined
    } = {}) {
        /** @type {Set<string>} @private */
        this.computedKeys = new Set(computedKeys);
        /** @type {function(): void} @private */
        this.onChange = onChange;
        /** @type {function(string, Object): any} @private */
        this.getComputedValue = getComputedValue;
    }

    /**
     * Creates the proxy handler object.
     * @returns {ProxyHandler<Object>}
     */
    create() {
        return {
            set: (target, key, value) => this.set(target, key, value),
            get: (target, key) => this.get(target, key),
            ownKeys: target => this.ownKeys(target),
            getOwnPropertyDescriptor: (target, key) => this.getOwnPropertyDescriptor(target, key)
        };
    }

    /**
     * Proxy 'set' trap.
     * @param {Object} target - The target object.
     * @param {string|symbol} key - The property key.
     * @param {any} value - The new value.
     * @returns {boolean}
     */
    set(target, key, value) {
        target[key] = value;
        this.onChange();
        return true;
    }

    /**
     * Proxy 'get' trap.
     * Redirects to getComputedValue if the key is a computed property.
     * @param {Object} target - The target object.
     * @param {string|symbol} key - The property key.
     * @returns {any}
     */
    get(target, key) {
        if (this.computedKeys.has(key)) {
            return this.getComputedValue(key, target);
        }
        return target[key];
    }

    /**
     * Proxy 'ownKeys' trap.
     * Includes computed keys in the list of keys.
     * @param {Object} target - The target object.
     * @returns {Array<string|symbol>}
     */
    ownKeys(target) {
        return [...Reflect.ownKeys(target), ...this.computedKeys];
    }

    /**
     * Proxy 'getOwnPropertyDescriptor' trap.
     * Ensures computed properties appear as own properties.
     * @param {Object} target - The target object.
     * @param {string|symbol} key - The property key.
     * @returns {PropertyDescriptor|undefined}
     */
    getOwnPropertyDescriptor(target, key) {
        if (this.computedKeys.has(key)) {
            return { enumerable: true, configurable: true };
        }
        return Reflect.getOwnPropertyDescriptor(target, key);
    }
}
