(function() {

    /*
    The MIT License (MIT)

    Copyright (c) 2014 Chris Wilson

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */

    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    var audioContext = null;
    var isPlaying = false;
    var sourceNode = null;
    var analyser = null;
    var theBuffer = null;
    var DEBUGCANVAS = null;
    var mediaStreamSource = null;
    var detectorElem, 
        canvasElem,
        waveCanvas,
        pitchElem,
        noteElem,
        detuneElem,
        detuneAmount;

    window.onload = function() {
        audioContext = new AudioContext();
        MAX_SIZE = Math.max(4,Math.floor(audioContext.sampleRate/5000));    // corresponds to a 5kHz signal
        var request = new XMLHttpRequest();
        request.open("GET", "../sounds/whistling3.ogg", true);
        request.responseType = "arraybuffer";
        request.onload = function() {
          audioContext.decodeAudioData( request.response, function(buffer) { 
                theBuffer = buffer;
            } );
        }
        request.send();

        detectorElem = document.getElementById( "detector" );
        canvasElem = document.getElementById( "output" );
        DEBUGCANVAS = document.getElementById( "waveform" );
        if (DEBUGCANVAS) {
            waveCanvas = DEBUGCANVAS.getContext("2d");
            waveCanvas.strokeStyle = "black";
            waveCanvas.lineWidth = 1;
        }
        pitchElem = document.getElementById( "pitch" );
        noteElem = document.getElementById( "note" );
        detuneElem = document.getElementById( "detune" );
        detuneAmount = document.getElementById( "detune_amt" );

        element.addEventListener("dragover", function(e) {
            e.preventDefault();
            return false;
        });

        element.addEventListener("drop", function (e) {
            e.preventDefault();
            e.stopPropagation();
            theBuffer = null;

            var reader = new FileReader();
            reader.onload = function (event) {
                audioContext.decodeAudioData( event.target.result, function(buffer) {
                    theBuffer = buffer;
                    togglePlayback();
                }, function(){
                    alert("error loading!");
                }); 

            };
            reader.onerror = function (event) {
                alert("Error: " + reader.error );
            };
            reader.readAsArrayBuffer(e.dataTransfer.files[0]);
        }, false);



    }

    function error() {
        alert('Stream generation failed.');
    }

    function getUserMedia(dictionary, callback) {
        try {
            navigator.getUserMedia = 
                navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia;
            navigator.getUserMedia(dictionary, callback, error);
        } catch (e) {
            alert('getUserMedia threw exception :' + e);
        }
    }

    function gotStream(stream) {
        // Create an AudioNode from the stream.
        mediaStreamSource = audioContext.createMediaStreamSource(stream);

        // Connect it to the destination.
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        mediaStreamSource.connect( analyser );
        updatePitch();
    }

    function toggleOscillator() {
        if (isPlaying) {
            //stop playing and return
            sourceNode.stop( 0 );
            sourceNode = null;
            analyser = null;
            isPlaying = false;
            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
            window.cancelAnimationFrame( rafID );
            return "play oscillator";
        }
        sourceNode = audioContext.createOscillator();

        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        sourceNode.connect( analyser );
        analyser.connect( audioContext.destination );
        sourceNode.start(0);
        isPlaying = true;
        isLiveInput = false;
        updatePitch();

        return "stop";
    }

    function toggleLiveInput() {
        if (isPlaying) {
            //stop playing and return
            sourceNode.stop( 0 );
            sourceNode = null;
            analyser = null;
            isPlaying = false;
            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
            window.cancelAnimationFrame( rafID );
        }
        getUserMedia(
            {
                "audio": {
                    "mandatory": {
                        "googEchoCancellation": "false",
                        "googAutoGainControl": "false",
                        "googNoiseSuppression": "false",
                        "googHighpassFilter": "false"
                    },
                    "optional": []
                },
            }, gotStream);
    }

    function togglePlayback() {
        if (isPlaying) {
            //stop playing and return
            sourceNode.stop( 0 );
            sourceNode = null;
            analyser = null;
            isPlaying = false;
            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
            window.cancelAnimationFrame( rafID );
            return "start";
        }

        sourceNode = audioContext.createBufferSource();
        sourceNode.buffer = theBuffer;
        sourceNode.loop = true;

        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        sourceNode.connect( analyser );
        analyser.connect( audioContext.destination );
        sourceNode.start( 0 );
        isPlaying = true;
        isLiveInput = false;

        return "stop";
    }

    var rafID = null;
    var tracks = null;
    var buflen = 1024;
    var buf = new Float32Array( buflen );

    var noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    function noteFromPitch( frequency ) {
        var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
        return Math.round( noteNum ) + 69;
    }

    function frequencyFromNoteNumber( note ) {
        return 440 * Math.pow(2,(note-69)/12);
    }

    function centsOffFromPitch( frequency, note ) {
        return Math.floor( 1200 * Math.log( frequency / frequencyFromNoteNumber( note ))/Math.log(2) );
    }

    function range(start, count) {
        return Array.apply(0, Array(count))
                    .map(function (element, index) { 
                             return index + start;
                         });
    }

    var frequencyBins = range(0, 80).map(function(note) {
        return frequencyFromNoteNumber(note);
    });

    var frequencyAmplitudes = range(0, 80).map(function(i) {
        return 0;
    });

    var MIN_SAMPLES = 0;  // will be initialized when AudioContext is created.

    function autoCorrelate( buf, sampleRate ) {
        var SIZE = buf.length;
        var MAX_SAMPLES = Math.floor(SIZE/2);
        var best_offset = -1;
        var best_correlation = 0;
        var rms = 0;
        var foundGoodCorrelation = false;
        var correlations = new Array(MAX_SAMPLES);

        for (var i=0;i<SIZE;i++) {
            var val = buf[i];
            rms += val*val;
        }
        rms = Math.sqrt(rms/SIZE);
        if (rms<0.01) // not enough signal
            return -1;

        frequencyAmplitudes = frequencyAmplitudes.map(function(f) {
            return (f * 0.98) - 0.01;
        });

        var lastCorrelation=1;
        for (var offset = MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {

            if (buf[offset] > rms * 1.6) {
                var found = false;
                var binIndex = 0;
                for (; binIndex < frequencyBins.length; ++binIndex) {
                    if (frequencyBins[binIndex] > offset) {
                        binIndex -= 1;
                        found = true;
                        break;
                    }
                }

                if (found) {
                    frequencyAmplitudes[binIndex] = Math.max(buf[offset] * 2,
                                                             frequencyAmplitudes[binIndex]);
                }
            }/*
            var correlation = 0;

            for (var i=0; i<MAX_SAMPLES; i++) {
                correlation += Math.abs((buf[i])-(buf[i+offset]));
            }
            correlation = 1 - (correlation/MAX_SAMPLES);
            correlations[offset] = correlation; // store it, for the tweaking we need to do below.
            if ((correlation>0.7) && (correlation > lastCorrelation)) {
                results.push(sampleRate / best_offset);
            }
            lastCorrelation = correlation;
            */
        }

        for (i = 0; i < cubes.length; ++i) {
            cubes[i].target.y = frequencyAmplitudes[i] - 1;
            cubes[i].scale.x = 0.02 * (1 + frequencyAmplitudes[i] * 10);
        }
    }


    var element = document.getElementById("trinity-wrapper");
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, element.clientWidth / element.clientHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.sortObjects = false;
    renderer.setSize( element.clientWidth, element.clientHeight );
    renderer.domElement.className = renderer.domElement.className + " emscripten-canvas";

    element.appendChild(renderer.domElement);

    //camera.position.z = 6;
    //camera.position.y = 5;
    camera.rotation.x = -0.3;

    camera.position.z = 1.3;

    var geometry = new THREE.BoxGeometry(1, 0.1, 1);
    var material = new THREE.MeshBasicMaterial({color: 0xffffff});

    var platforms = new Array();

    var cubes = [];

    for (var i = 0; i < 80; ++i) {
        var cube = new THREE.Mesh(geometry, material);
        cube.position.y = -1;
        cube.position.x = -1.2 + 0.03 * i;
        cube.rotation.x = 0.04;
        cube.scale.x = 0.02;
        cube.scale.y = 0.2;
        cube.scale.z = 0.2;

        scene.add(cube);
        platforms.push(cube);

        cube.velocity = {
            x: 0,
            y: 0,
            z: 0
        };

        cube.target = {
            x: 0,
            y: 0,
            z: 0
        };
        cubes.push(cube);
    }


    function render(time) {
        if (analyser) {
            var cycles = new Array;
            analyser.getFloatTimeDomainData( buf );
            autoCorrelate( buf, audioContext.sampleRate );
            cubes.forEach(function(cube) {
                cube.velocity.y = (cube.target.y - cube.position.y) / 10.0;
                cube.position.y = cube.position.y + cube.velocity.y;
            })
        }

        var r = Date.now() * 0.0005;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    render();
})();