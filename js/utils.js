function Utils() {
}

Utils.swapClass = function(element, oldClassName, newClassName) {
	Utils.removeClass(element, oldClassName);
	Utils.addClass(element, newClassName);
}

Utils.addClass = function(element, className) {
	var classNames = element.getAttribute('class');
	if (classNames != null && classNames != '') {
		var classes = classNames.split(' ');
		var length = classes.length;
		for (var i = 0 ; i < length ; i++) {
			var clazz = classes[i];
			if (clazz == className) {
				return;
			}
		}
		var newClassNames = classNames + ' ' + className;
		element.setAttribute('class', newClassNames);
	} else {
		element.setAttribute('class', className);	
	}
}

Utils.removeClass = function(element, className) {
	var classNames = element.getAttribute('class');
	if (classNames != null) {
		var classes = classNames.split(' ');
		var length = classes.length;
		for (var i = 0 ; i < length ; i++) {
			var clazz = classes[i];
			if (clazz == className) {
				classes[i] = '';
				break;
			}
		}
		var newClassNames = classes.join(' ');
		element.setAttribute('class', newClassNames);
	}
}

