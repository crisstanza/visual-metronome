(function() {

	var MAX_BEATS = 4;
	var MAX_SUB_BEATS = MAX_BEATS * 2;

	var DELAY = 1000;

	var timer1, timer2, beat1, beat2;

	function previousBeat(beat) {
		if (beat == 1) {
			beat = MAX_BEATS;
		} else {
			beat--;
		}
		return beat;
	}

	function previousSubBeat(beat) {
		if (beat == 1) {
			beat = MAX_SUB_BEATS;
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

	function draw1() {
		var beatPrevious = beat1;
		if (beatPrevious > 0) {
			beatPrevious = document.getElementById('beat-'+beatPrevious);
			Utils.swapClass(beatPrevious, 'On', 'Off');
			beatPrevious = undefined;
		}
		beat1 = nextBeat(beat1);
		var currentBeat = document.getElementById('beat-'+beat1);
		Utils.swapClass(currentBeat, 'Off', 'On');
		if (timer1 == undefined) {
			timer1 = setInterval(draw1, DELAY);
		}
		//
		console.log(beat1);
		//
	}

	function draw2() {
		var beatPrevious = beat2;
		if (beatPrevious > 0) {
			beatPrevious = document.getElementById('sub-beat-'+beatPrevious);
			Utils.swapClass(beatPrevious, 'On', 'Off');
			beatPrevious = undefined;
		}
		beat2 = nextSubBeat(beat2);
		var currentBeat = document.getElementById('sub-beat-'+beat2);
		Utils.swapClass(currentBeat, 'Off', 'On');
		if (timer2 == undefined) {
			timer2 = setInterval(draw2, DELAY / 2);
		}
		//
		console.log(' '+beat2);
		//
	}

	function init() {
		console.log = function() {};
		timer1 = undefined;
		timer2 = undefined;
		beat1 = 0;
		beat2 = 0;
		draw1();
		draw2();
	}

	addEventListener('load', init, false);

})();
