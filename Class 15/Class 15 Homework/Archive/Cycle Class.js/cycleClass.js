(function( $ ){
  $.fn.cycleClass = function(args) {
		if($.fn.cycleClass.arguments.length == 0) {return this;}
		return this.each(function() {
			var currentObject = $(this);
			var farthestClass = -1;
			var classList = currentObject.attr('class').split(/\s+/);
			$.each(classList, function(index, item){
				var position = $.inArray(item, args);
				if(position > farthestClass){farthestClass = position;}
			});
			if(farthestClass > -1){
				$.each(args,function(index,item) {
					currentObject.removeClass(item)
				});
				nextClass = (farthestClass + 1) % args.length;
				currentObject.addClass(args[nextClass]);
			}else{
				currentObject.addClass(args[0]);
			}
		});
  };
})( jQuery );