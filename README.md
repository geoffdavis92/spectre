# Spectre.css
Spectre.css is a lightweight, responsive and modern CSS framework for faster and extensible development.

- lightweight and clean starting point for your project and prototype
- flexbox, responsive and mobile-friendly layout
- carefully designed elements
- built in useful components and utilities
- patterns and html templates (soon)
- email templates (soon)

Spectre is a side project based on years of CSS development work on a large web service project. Spectre only includes modern base styles, responsive layout system, CSS components and utilities, and it can be modified for your project with LESS compiler.

Read [the documentation](http://picturepan2.github.io/spectre/) to learn more.

### Getting started

There are 3 ways to get started with Spectre CSS framework in your projects. You can either manually install or use NPM and Bower.
##### Install manually
Download the compiled and minified [Spectre CSS file](https://github.com/picturepan2/spectre/tree/master/dist).
##### Install with NPM
`$ npm install spectre.css --save`
##### Install with Bower
`$ bower install spectre.css --save`

And include it in your website or Web app &lt;head&gt; part.

`<link rel="stylesheet" href="dist/css/spectre.min.css" />`

To include the javascript files, include it at the end of your document near your other javascript files.

`<script src="dist/js/FILE.spectre.min.js"></script>`

The following javascript files are available for linking:

* `menu.spectre.js`
* `modal.spectre.js`
* `toast.spectre.js`

### Compiling custom version

You can compiling your custom version of Spectre.css. Read [the documentation](http://picturepan2.github.io/spectre/#compiling).

### Documentation and demos

#### Elements

- [typography](http://picturepan2.github.io/spectre/#typography) - headings, paragraphs, blockquote, lists and code elements, optimized for asian fonts
- [layout](http://picturepan2.github.io/spectre/#layout) - flexbox based responsive layout system
- [tables](http://picturepan2.github.io/spectre/#tables) - organize and display data
- [buttons](http://picturepan2.github.io/spectre/#buttons) - button styles in different types and sizes, and even button groups
- [forms](http://picturepan2.github.io/spectre/#forms) - input, radio, checkbox, switch and other form elements
- [media](http://picturepan2.github.io/spectre/#media) - responsive image and video class

#### Components

- [avatars](http://picturepan2.github.io/spectre/#avatars) - user profile pictures or name initials rendered avatar
- [chips](http://picturepan2.github.io/spectre/#chips) - complex entities in small blocks
- [autocomplete](http://picturepan2.github.io/spectre/#autocomplete) - form component provides suggestions while you type
- [tooltips](http://picturepan2.github.io/spectre/#tooltips) - simple tooltip built entirely in CSS
- [labels](http://picturepan2.github.io/spectre/#labels) - formatted text tags for highlighted, informative information
- [badges](http://picturepan2.github.io/spectre/#badges) - unread number indicators
- [toasts](http://picturepan2.github.io/spectre/#toasts) - showing alerts or notifications
- [menus](http://picturepan2.github.io/spectre/#menus) - list of links or buttons for actions and navigation
- [navigation](http://picturepan2.github.io/spectre/#navigation) - breadcrumb, tabs and pagination
- [modals](http://picturepan2.github.io/spectre/#modals) - flexible dialog prompts
- [cards](http://picturepan2.github.io/spectre/#cards) - flexible content containers

#### Utilities

- [utilities](http://picturepan2.github.io/spectre/#utilities) - layout, positions, display, text, shapes, loading things

### Browser support
Spectre uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make most styles compatible with earlier browsers and [Normalize.css](https://necolas.github.io/normalize.css/) for CSS resets. Spectre is designed for modern browsers. For best compatiblity, these browsers are recommended:
- Chrome (last two)
- Edge (last two)
- Firefox (last two)
- Internet Explorer 10+
- Microsoft Edge
- Opera (last two)
- Safari 6+

Currently maintained by [Yan Zhu](https://twitter.com/picturepan2). Feel free to submit a pull request. Help is always appreciated.