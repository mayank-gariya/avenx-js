/**
 * Handles patching the DOM with new HTML content.
 * Currently performs a simple innerHTML swap if the content has changed.
 */
export class DomPatcher {
    /**
     * Patches the target element with the provided HTML.
     * @param {Element} target - The element to patch.
     * @param {string} html - The new HTML content.
     */
    patch(target, html) {
        if (target.innerHTML !== html) {
            target.innerHTML = html;
        }
    }
}
