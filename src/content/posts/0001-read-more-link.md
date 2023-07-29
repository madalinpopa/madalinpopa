---
title: "Making a 'Read More' Link Simply with Alpine.js"
date: 2023-07-29T18:58:18Z
draft: true
tags: ["alpinejs"]
---

For those of us working with websites, we've probably come across big names like React, Vue, or Angular. These are tools that help us make our websites more interactive. Today, though, let's chat about a lesser-known but very simple tool called Alpine.js.

We'll look at how to make a 'Read More' link using Alpine.js. This is a common feature you see on websites where a short preview of text is shown, and you can click a link to see the rest of it.

Here's our starting code:

```html
<div
    x-data="{ isCollapsed: false, maxLength: 300, originalContent: '', content: '' }"
    x-init="originalContent = $el.firstElementChild.textContent.trim(); content = originalContent.slice(0, maxLength)">
    <p class="text-justify text-ellipsis overflow-hidden" x-text="isCollapsed ? originalContent : content">
        {{ value.text }}
    </p>
    <button @click="isCollapsed = !isCollapsed"
        x-show="originalContent.length > maxLength"
        x-text="isCollapsed ? 'Hide' : 'Show more'" class="text-blue">
    </button>
</div>
```

This bit of code helps us limit how much of our content shows on the screen and gives us a button to either show everything or go back to the short preview.

Let's break it down:

1. We start with a `div` tag with `x-data` and `x-init`. The `x-data` attribute lets us declare the rules for our 'Read More' feature. We have `isCollapsed` which tells us whether the content is currently hidden or not, `maxLength` which is the maximum length of the preview, and `originalContent` and `content` to hold the full text and the preview text.
2. The `x-init` attribute sets up our initial state. In our case, `originalContent` starts off as the full text that we want to display. content starts off as the preview, or the first 300 characters of `originalContent`.
3. The `p` tag includes `x-text`, which helps us switch between showing the full text or the preview based on whether `isCollapsed` is true or false.
4. The button tag includes `@click` to switch `isCollapsed` from true to false or vice versa every time the button is clicked. The `x-show `attribute makes sure the button is only visible if the text is long enough to be shortened. Finally, `x-text` changes the button text based on whether the text is collapsed or not.
5. And that's it! With just these few lines of code and Alpine.js, we can create a 'Read More' link. This is a great example of how useful and simple Alpine.js can be. It's a great tool for when you need a little bit of interactivity on your website but don't want to pull in a bigger tool.
