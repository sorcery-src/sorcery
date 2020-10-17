<div align="center">
  <h1>
    <br>
    <br>
    Sorcery SCSS 🔮
    <br>
    <br>
    <br>
    <br>
  </h1>
</div>

<br>

Sorcery SCSS ([v0.1](https://github.com/sorcery-src/sorcery/releases)) is utility-first framework for rapid development. Sorcery SCSS is most similar to Tailwind CSS but differentiates itself in these key ways:

- Emphasis on zero-configuration
- SCSS-based, designed to be extended
- Limited API set, oriented for responsive skeleton prototyping
- Intended to be used in conjunction with CSS or SCSS
- Multiple CDN links for prototyping, add breakpoints as needed
- Classes map to utilities but can encompass higher-order patterns like `m-gap`

The problem with almost every CSS library and framework is they attempt to _solve_ frontend. Frontend is not a solvable problem. Frontend is the amalgamation of _many_ tools coming together to create user experiences for people. How Sorcery SCSS fits into this equation is by making it dead-easy to prototype responsive skeleton UIs.

The key to understanding Sorcery SCSS is to understand that it **does not attempt** to map every CSS property to an arbitrary class name. What Sorcery SCSS does is makes it easier to reason about responsive skeletons, and encourages you to lean into CSS or SCSS when you’re ready to retrofit your skeleton-app with content.

## Table of contents (API)

- [Implementation details](#implementation-details)
- [`margin`](#margin)
- [`padding`](#padding)
- [`position`](#position)
- [`display`](#display)
- [`width` and `height`](#width-and-height)
- [`max-width`](#max-width)
<!-- - [`background-color` and dark mode `background-color`](###background-color-and-dark-mode-background-color) -->

### Implementation details

Breakpoints are defined as the following and are not currently customizable (yet):

<!-- prettier-ignore -->
```scss
$xs: 40 * 16; // ->  640px
$sm: 48 * 16; // ->  768px
$md: 56 * 16; // ->  896px
$lg: 64 * 16; // -> 1024px
$xl: 80 * 16; // -> 1280px
```

The standard scale is used for numeric utilities and the extended standard scale is used for layout utilities `width` and `height`:

<!-- prettier-ignore -->
```scss
$range:
	  0,   1,   2,   3,   4,   5,   6,   7, //  +1
	  8,  10,  12,  14,  16,  18,  20,  22, //  +2
	 24,  28,  32,  36,  40,  44,  48,  52, //  +4
	 64,  72,  80,  88,  96, 104, 112, 120, //  +8
	128, 144, 160, 176, 192, 208, 224, 240, // +16
	256;

$extended-range:
	  0,   1,   2,   3,   4,   5,   6,   7, //  +1
	  8,  10,  12,  14,  16,  18,  20,  22, //  +2
	 24,  28,  32,  36,  40,  44,  48,  52, //  +4
	 64,  72,  80,  88,  96, 104, 112, 120, //  +8
	128, 144, 160, 176, 192, 208, 224, 240, // +16
	256, 288, 320, 352, 384, 416, 448, 480, // +32
	512;
```

Note that the standard and extended scales always convert to `rem` units behind-the-scenes. This means you can think in terms of `px` units and receive the benefits of `rem` units.

If you’re unfamiliar with the benefits of `rem` units, they are essentially they are more user-friendly in terms accessibility. Sorcery SCSS almost always defers to `rem` units for this reason.

### `margin`

✅ Uses the standard range scale, `auto` and `-256-256`.<br>
✅ Resolves to `rem`.<br>
✅ Media queries are supported for this property.<br>

```scss
.m-0 {
	margin: 0;
}
.mx-0 {
	margin-left: 0;
	margin-right: 0;
}
.ml-0 {
	margin-left: 0;
}
.mr-0 {
	margin-right: 0;
}
.my-0 {
	margin-top: 0;
	margin-bottom: 0;
}
.mt-0 {
	margin-top: 0;
}
.mb-0 {
	margin-bottom: 0;
}
```

### `padding`

✅ Uses the standard range scale, `0-256`.<br>
✅ Resolves to `rem`.<br>
✅ Media queries are supported for this property.<br>

```scss
.p-0 {
	padding: 0;
}
.px-0 {
	padding-left: 0;
	padding-right: 0;
}
.pl-0 {
	padding-left: 0;
}
.pr-0 {
	padding-right: 0;
}
.py-0 {
	padding-top: 0;
	padding-bottom: 0;
}
.pt-0 {
	padding-top: 0;
}
.pb-0 {
	padding-bottom: 0;
}
```

### `position`

✅ Uses a limited scale, `auto` and `0`.<br>
✅ Media queries are supported for this property.<br>

Note that `static`, `relative`, `absolute`, `fixed`, and `sticky` are supported.

```scss
.absolute {
	position: absolute;
}
.absolute.x-0 {
	left: 0;
	right: 0;
}
.absolute.l-0 {
	left: 0;
}
.absolute.r-0 {
	right: 0;
}
.absolute.y-0 {
	top: 0;
	bottom: 0;
}
.absolute.t-0 {
	top: 0;
}
.absolute.b-0 {
	bottom: 0;
}
.absolute.tl-0 {
	top: 0;
	left: 0;
}
.absolute.tr-0 {
	top: 0;
	right: 0;
}
.absolute.bl-0 {
	bottom: 0;
	left: 0;
}
.absolute.br-0 {
	bottom: 0;
	right: 0;
}
```

### `display`

✅ Media queries are supported for this property.<br>

```scss
.block {
	display: block;
}
.inline-block {
	display: inline-block;
}
.inline {
	display: inline;
}
.flex-row {
	display: flex;
	flex-direction: row;
}
.flex-col {
	display: flex;
	flex-direction: column;
}
.inline-flex-row {
	display: inline-flex;
	flex-direction: row;
}
.inline-flex-col {
	display: inline-flex;
	flex-direction: column;
}
```

`flex-*` and `inline-flex-*` utilities also support more natural APIs for `justify-content` and `align-items`:

```scss
.flex-row.x-start,
.inline-flex-row.x-start {
	justify-content: flex-start;
}
.flex-row.x-center,
.inline-flex-row.x-center {
	justify-content: center;
}
.flex-row.x-end,
.inline-flex-row.x-end {
	justify-content: flex-end;
}
.flex-row.y-start,
.inline-flex-row.y-start {
	align-items: flex-start;
}
.flex-row.y-center,
.inline-flex-row.y-center {
	align-items: center;
}
.flex-row.y-end,
.inline-flex-row.y-end {
	align-items: flex-end;
}

/* ... */

.flex-col.x-start,
.inline-flex-col.x-start {
	align-items: flex-start;
}
.flex-col.x-center,
.inline-flex-col.x-center {
	align-items: center;
}
.flex-col.x-end,
.inline-flex-col.x-end {
	align-items: flex-end;
}
.flex-col.y-start,
.inline-flex-col.y-start {
	justify-content: flex-start;
}
.flex-col.y-center,
.inline-flex-col.y-center {
	justify-content: center;
}
.flex-col.y-end,
.inline-flex-col.y-end {
	justify-content: flex-end;
}
```

This means you can think in terms of `x` and `y` axes without worrying about the nature of `flex-direction: row;` and `flex-direction: column;`.

`no-wrap`, `wrap`, and `wrap-reverse` are also supported.

### `width` and `height`

✅ Uses the standard extended scale, `auto` and `0-512`.<br>
✅ Resolves to `rem`.<br>
✅ Adds `w-full w-screen` and `h-full h-screen` for `100%` and `100vw` or `100vh` respectively.<br>
✅ Media queries are supported for this property.<br>

### `max-width`

✅ Uses the breakpoint scale, `xs sm md lg xl`.<br>
✅ Resolves to `px`.<br>
✅ Media queries are supported for this property.<br>

## Contributing

Contribution is welcome. To get started, check out the issues page — library maintainers will often hastily create issues to document an idea and context. If you need help understanding how the library works or need some deeper orientation, don’t hesitate to DM @username_ZAYDEK on Twitter. If there’s enough demand, we can create a Discord server to better support the community.

## License

Sorcery SCSS is MIT open source.
