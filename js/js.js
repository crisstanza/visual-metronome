(function() {

	var timer1, timer2;

	var beat1 = 0;
	var beat2 = 0;

	function draw() {
		if ( beat1 > 0 ) {
			var beat = document.getElementById('beat-'+beat1);
			Utils.swapClass(beat, 'Off', 'On');
		}
		beat1++;
		if ( beat1 > 4 ) {
			beat1 = 1;
		}			
		Utils.swapClass(beat, 'On', 'Off');
		console.log(beat1);
		timer2 = setTimeout(draw2, 0);
	}

	function draw2() {
		beat2 = 1;
		console.log(' ' + beat2);
	}

	function init() {
		timer1 = setInterval(draw, 1000);
	}

	addEventListener('load', init, false);

})();
