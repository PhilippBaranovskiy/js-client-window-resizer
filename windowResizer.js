(function () {
	
	if (window.windowResizer) {
		console.log('[ window.windowResizer has been already initialized ]');
		return;
	}
	
	var resizer = window.windowResizer || {};

	resizer.queue = (new function(){
		var storage = [];
		this.checkID = function (id) {
			var result = false;
			storage.forEach(function(el){
				if (!el) return;
				if (el.id === id && !result) {
					result = true;
				}
			});
			return result;
		};

		this.remove = function(id) {
			var result = false;
			storage.forEach(function(el, index, arr){
				if (!el) return;
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
			} while ( this.checkID(funcID) );

			storage.push({
				id: funcID,
				func: func
			});

			return funcID;
		};

		this.run = function() {
			storage.forEach(function(el){
				setTimeout(el.func, 0);
			});
		};
	}());

	resizer.timerID = 0;

	window.windowResizer = resizer;

	window.addEventListener('resize', function() {
		clearTimeout( windowResizer.timerID );
		windowResizer.timerID = setTimeout(function() {
			windowResizer.queue.run();
		}, 500);
	}, false);

})();
