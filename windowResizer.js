(function (window) {

	var resizer = window.windowResizer;
	
	if (resizer) {
		console.log('[ resizer has been already initialized ]');
	}
	
	resizer = resizer || {};

	resizer.queue = (new function(){
		var storage = [];
		this.checkID = function (id) {
			var result = false;
			storage.forEach(function(el){
				if (el.id === id && !result) {
					result = true;
				}
			});
			return result;
		};

		this.remove = function(id) {
			var result = false;
			storage.forEach(function(el, index, arr){
				if (el.id === id) {
					arr.splice(index, 1);
					result = true;
				}
			});
			return result;
		};

		this.add = function (func) {

			var funcID;

			do {
				funcID = Math.floor(Math.random()*8917349726576234785);
			} while ( !this.checkID(funcID) );

			storage.push({
				id: funcID,
				func: func
			});

			return funcID;
		};

		this.run = function() {
			storage.forEach(function(func){
				setTimeout(func, 0);
			});
		};
	})();

	resizer.timerID = 0;

	window.addEventListener('resize', function() {
		clearTimeout( window.windowResizer.timerID );
		window.windowResizer.timerID = setTimeout(function() {
			window.windowResizer.queue.run();
		}, 500);
	}, false);

})(window);
