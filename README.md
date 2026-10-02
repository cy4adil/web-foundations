# Web Foundation

## HTML

## CSS

<img src = "https://static-assets.codecademy.com/Courses/Learn-CSS/Setup-and-Syntax/CSS_Anatomy-v2-nobgfill.svg">

<hr>

### Selectors and Visuals:

- We have several types of selectors as shown below:
  - Type Selector: also known as element or tag selector.
  - Class Selector: selection by class prepended by period.
  - ID selector: selection by id attribute prepended by # sign.
  - Attribute Selector:
    - Attributes can be selected the same way as type, class, id.
    - we can select a specific attribute as well and target some string as well
      using like:

```css
img[href='*adil'] {
  color: 'blue';
}
```

- We can use [Web safe fonts](https://www.cssfontstack.com/)

- border styles can be taken out of [10 types](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border-style#Values)

- and border colors can be selected out of [140 colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value)

## Important to Note:

- Horizontal margins between two elemnts always add up like two elements have 20 pixels of margin each, both will add up and create 40 pixels of space.

- While vertical margins are never add up thats why vertical margins are also known as collapse but same concept dont align with paddings. It is only for margins. like one element is 30px and other is 20px, in that way it wont make 50 it will only create 30px of space.

## Overflow:

- The overflow property controls what happens to content that spills, or overflows, outside its box. The most commonly used values are:

<ul>
  <li>
    hidden -- when set to this value, any content that overflows will be hidden from view.
  </li>
  <li>
    scroll -- when set to this value, a scrollbar will be added to the element’s box so that the rest of the content can be viewed by scrolling.
  </li>
  <li>
    visible -- when set to this value, the overflow content will be displayed outside of the containing element. Note, this is the default value.
  </li>
</ul>

- To learn about overflow-x and overflow-y, see [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow)


## Visibility:

- Elements can be hidden from view with the 
visibility
Preview: Docs The visibility property in CSS determines whether an element is visible or hidden within the page.
 property.

- The visibility property can be set to one of the following values:

<ul>
  <li>hidden — hides an element.</li>
  <li>visible — displays an element.</li>
  <li>collapse — collapses an element.</li>
</ul>

- Note: What’s the difference between display: none and visibility: hidden? An element with display: none will be completely removed from the web page. An element with visibility: hidden, however, will not be visible on the web page, but the space reserved for it will.

## Default Box Model setting is as below:

<img src="https://content.codecademy.com/courses/updated_images/htmlcssdiagram_contentbox_Updated_1.svg">

- Default box-sizing is set to content-box

### To reset the box model, we can do

- We can set box-sizing to border-box.

- and the division of box properties becaomes as shown in pic below

<img src="https://static-assets.codecademy.com/Courses/Learn-CSS/Border-Box/htmlcss1-diagram__borderbox.svg">