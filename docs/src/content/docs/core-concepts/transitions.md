---
title: Transition Animations
description: Learn how to use the <transition> compiler tag and CSS classes for enter/leave animations in Avenx-JS.
---

# Transition Animations

Avenx-JS features a built-in animation framework powered by the template compiler and `DomPatcher`. By wrapping elements in a `<transition>` tag, you can smoothly animate elements as they enter or leave the DOM lifecycle.

---

## The `<transition>` Tag

The `<transition>` component does not render an element itself; instead, it injects dynamic CSS classes into its immediate child element during entry and exit hooks.

```html
<transition name="fade">
    <div class="box">Animate Me!</div>
</transition>