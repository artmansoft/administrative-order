angular.module('administrative-order.utils', [])


.factory('common', function() {
	return {
		cn: function(text) {
			var numberMap = {
				'0': '٠',
				'1': '١',
				'2': '٢',
				'3': '٣',
				'4': '٤',
				'5': '٥',
				'6': '٦',
				'7': '٧',
				'8': '٨',
				'9': '٩',
			};
			
			angular.forEach(numberMap, function(value, key) {
				text = text.replace(key, value);
			});
			return text;
		}
	}
})
