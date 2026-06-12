/**
 * Provides utility for escaping HTML characters to prevent XSS.
 */
export class HtmlEscaper {
    /**
     * Escapes special HTML characters in a string.
     * @param {any} value - The value to escape.
     * @returns {string} The escaped string.
     */
    escape(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
