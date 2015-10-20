# Sass mixin for multiple animations
Despite lots of Googling, I couldn't find a Sass mixin that receives a comma-separated list of animations. **This assumes you already have keyframes defined.**

## The code
```sass
@mixin multiple-animations($list) {
	$webkit: null;
	$moz: null;
	$o: null;
	$normal: null;
	
	@for $i from 1 through length($list) {
		$anim: nth($list, $i);
		
		@if $i == length($list) {
			$webkit: $webkit $anim;
			$moz: $moz + $anim;
			$o: $o + $anim;
			$normal: $normal + $anim;
		}
		@else {
			$webkit: $webkit $anim unquote(',');
			$moz: $moz $anim unquote(',');
			$o: $o $anim unquote(',');
			$normal: $normal $anim unquote(',');
		}
	}

  	-webkit-animation: $webkit;
  	-moz-animation: $moz;
  	-o-animation: $o;
  	animation: $normal;      
}
```

## Usage
```sass
@include multiple-animations(((first-animation 2s), (second-animation 1s)));
```

## Test it
+ Download the zip file
+ Install grunt and grunt-contrib-sass: `npm install --save-dev`
+ `grunt sass`
+ Open /example/index.html

## Thoughts?
Tell me.

## License
MIT