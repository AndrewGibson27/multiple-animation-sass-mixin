# Sass mixin for multiple animations
Despite lots of Googling, I couldn't find a Sass mixin that receives a comma-separated list of animations. **This assumes you already have keyframes defined.**

## The code
```sass
@mixin multiple-animations($list) {
	$webkit: '';
	$moz: '';
	$o: '';
	$normal: '';
	
	@for $i from 1 through length($list) {
		$anim: nth($list, $i);
		
		@if $i == length($list) {
			$webkit: unquote($webkit + $anim);
			$moz: unquote($moz + $anim);
			$o: unquote($o + $anim);
			$normal: unquote($normal + $anim);
		}
		@else {
			$webkit: unquote($webkit + $anim + ',');
			$moz: unquote($moz + $anim + ',');
			$o: unquote($o + $anim + ',');
			$normal: unquote($normal + $anim + ',');
		}
	}

  	-webkit-animation: unquote($webkit);
  	-moz-animation: unquote($moz);
  	-o-animation: unquote($o);
  	animation: unquote($normal);      
}
```

## Usage
```sass
@include multiple-animations(('first-animation 3s ease-in 2s 2 forwards', 'second-animation 3s linear 2s 2 forwards'));
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