(function() {

	var MAX_BEATS = 4;
	var MAX_SUB_BEATS = 2;

	var DELAY = 2000;

	var timer1, timer2, beat1, beat2;

	function previousBeat(beat) {
		if (beat == 1) {
			beat = MAX_BEATS;
		} else {
			beat--;
		}
		return beat;
	}

	function nextBeat(beat) {
		if (beat == MAX_BEATS) {
			beat = 1;
		} else {
			beat++;
		}
		return beat;
	}

	function nextSubBeat(beat) {
		if (beat == MAX_SUB_BEATS) {
			beat = 1;
		} else {
			beat++;
		}
		return beat;
	}

	function draw() {
		var beatPrevious = beat1;
		if (beatPrevious > 0) {
			beatPrevious = document.getElementById('beat-'+beatPrevious);
			Utils.swapClass(beatPrevious, 'On', 'Off');
			beatPrevious = undefined;
			var currentSubBeat = document.getElementById('sub-beat-'+beat1+'-'+1);
			Utils.swapClass(currentSubBeat, 'On', 'Off');
		}
		beat1 = nextBeat(beat1);
		var currentBeat = document.getElementById('beat-'+beat1);
		Utils.swapClass(currentBeat, 'Off', 'On');
		draw2();
		if (timer1 == undefined) {
			timer1 = setInterval(draw, DELAY);
		}
		//
		console.log(beat1);
		//
	}

	function draw2() {
		beat2 = nextSubBeat(beat2);
		//
		console.log(' ' + beat2);
		//
		var currentSubBeat = document.getElementById('sub-beat-'+beat1+'-'+beat2);
		Utils.swapClass(currentSubBeat, 'Off', 'On');
		timer2 = setTimeout(draw2, DELAY / 2);
	}

	function init() {
		console.log = function() {
		};
		timer1 = undefined;
		timer2 = undefined;
		beat1 = 0;
		beat2 = 0;
		draw();
	}

	addEventListener('load', init, false);

})();
