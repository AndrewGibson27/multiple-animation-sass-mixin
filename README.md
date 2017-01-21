# SCSS/Sass mixin for multiple animations
Despite lots of Googling, I couldn't find a Sass mixin that receives a comma-separated list of animations. This assumes you already have keyframes defined. It also doesn't handle vendor prefixes, which is better suited for [Autoprefixer](https://github.com/postcss/autoprefixer).

## The code
```sass
@mixin multiple_animations($list) {
	$combined: '';

	@for $i from 1 through length($list) {
		$anim: nth($list, $i);

		@if $i == length($list) {
			$combined: $combined + $anim;
		}
		@else {
			$combined: $combined + $anim + ',';
		}
	}

	animation: unquote($combined);
}
```

## Usage
```sass
$animations: (
	bg 3s ease-in 2s 2 forwards,
	size 3s linear 2s 2 forwards
);

div {
	@include multiple_animations($animations);
	width: 100px;
	height: 100px;
}
```

## Test it
+ `npm install`
+ `grunt sass`
+ Open **/example/index.html**
