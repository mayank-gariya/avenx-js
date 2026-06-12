/**
 * Responsible for binding event listeners to DOM elements based on attributes.
 */
export class EventBinder {
    /**
     * Stores bound events to avoid duplicate bindings.
     * @type {WeakMap<Element, Set<string>>}
     * @private
     */
    #boundEvents = new WeakMap();

    /**
     * Binds event listeners to all elements under the root that have attributes starting with '@'.
     * @param {Element|DocumentFragment} root - The root element to scan for event attributes.
     * @param {Object} dispatcher - The object responsible for executing the event handler.
     * @param {function(string, Event): void} dispatcher.execute - Method to execute the event.
     */
    bind(root, dispatcher) {
        root.querySelectorAll('*').forEach(el => {
            Array.from(el.attributes).forEach(attr => {
                if (attr.name.startsWith('@')) {
                    const eventName = attr.name.substring(1);
                    const signature = `${eventName}:${attr.value}`;
                    const existing = this.#boundEvents.get(el) || new Set();

                    if (!existing.has(signature)) {
                        el.addEventListener(eventName, event => dispatcher.execute(attr.value, event));
                        existing.add(signature);
                        this.#boundEvents.set(el, existing);
                    }
                }
            });
        });
    }
}
