/**
 * The main application class for Avenx.
 * Manages component registration, bridge registration, and mounting.
 */
export class AvenxApp {
    /** @type {AvenxComponent[]} @private */
    #activeComponents = [];
    /** @type {Element|null} @private */
    #target = null;

    /**
     * @param {Object} config - Application configuration.
     * @param {string} config.target - Selector for the main application container.
     */
    constructor(config) {
        this.#target = document.querySelector(config.target);
        /** @type {Map<string, typeof AvenxComponent>} */
        this.components = new Map();
        /** @type {Object} */
        this.bridges = {};
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
     * Registers a bridge with the application.
     * Bridges provide shared state and logic across components.
     * @param {string} name - The name of the bridge.
     * @param {Object|Function} bridgeData - The bridge data or constructor.
     */
    registerBridge(name, bridgeData) {
        const self = this;
        let instance = bridgeData;

        if (typeof bridgeData === 'function') {
            try {
                instance = new bridgeData();
            } catch (e) {
                // Keep object-style bridge behavior if construction is not possible.
            }
        }

        const reactiveState = new Proxy(instance, {
            set(target, key, value) {
                target[key] = value;
                self.updateAll();
                return true;
            },
            get(target, key, receiver) {
                const value = Reflect.get(target, key, receiver);
                if (typeof value === 'function') {
                    return value.bind(receiver);
                }
                return value;
            }
        });
        this.bridges[name] = reactiveState;
    }

    /**
     * Updates all active components in the application.
     */
    updateAll() {
        this.#activeComponents.forEach(comp => comp.update());
    }

    /**
     * Mounts a component to a target element.
     * @param {string} name - The name of the component to mount.
     * @param {string|null} [targetSelector=null] - Optional selector for the mount target.
     */
    mount(name, targetSelector = null) {
        const Comp = this.components.get(name);
        const target = targetSelector ? document.querySelector(targetSelector) : this.#target;
        if (Comp && target) {
            const compInstance = new Comp(this.bridges);
            compInstance.mount(target);
            this.#activeComponents.push(compInstance);
        }
    }
}

