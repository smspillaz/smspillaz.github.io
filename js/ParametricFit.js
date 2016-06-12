(function() {
    var gradientCanvas = document.createElement("canvas");
    var gradientSize = 512;
    var halfGradientSize = gradientSize / 2;
    gradientCanvas.width = gradientSize;
    gradientCanvas.height = gradientSize;

    var gradientCanvasContext = gradientCanvas.getContext("2d");
    var gradient = gradientCanvasContext.createRadialGradient(halfGradientSize,
                                                              halfGradientSize,
                                                              halfGradientSize,
                                                              halfGradientSize,
                                                              halfGradientSize,
                                                              0);
    gradient.addColorStop(0, "transparent");
    gradient.addColorStop(1, "white");
    gradientCanvasContext.fillStyle = gradient;
    gradientCanvasContext.fillRect(0, 0, gradientSize, gradientSize);

    function SampleCurveAt(coeffs, x) {
        var highestOrder = coeffs.length - 1;
        var vector = coeffs.map(function(c, i) {
            return c * Math.pow(x, highestOrder - i);
        });
        return vector.reduce(function(prev, next) {
            return prev + next;
        });
    }

    var lineData = {
        coeffs: [],
        inputData: []
    };

    function SampleGeneratedCurve() {
        var array = [];
        for (var i = -20; i < 50; ++i) {
            array.push(new THREE.Vector3(i,
                                         SampleCurveAt(lineData.coeffs, i),
                                         0));
        }

        return array;
    }

    function LeastSquares(inputData, coeffs) {
        var squareDeltas = inputData.map(function(p) {
            return Math.pow(SampleCurveAt(coeffs, p[0]) - p[1], 2);
        });

        return Math.sqrt(squareDeltas.reduce(function(prev, next) {
            return prev + next;
        }));
    }

    function GenerateCurveEquationText(coeffs) {
        var highestOrder = coeffs.length - 1;
        return coeffs.reduce(function(prev, coeff, i) {
            var order = highestOrder - i;
            return prev + String(coeff) +
                          (order > 0 ? "x" : "") +
                          (order > 1 ? "^" + order : "") +
                          (order > 0 ? " + " : "");
        }, "");
    }

    function IterateLineFit() {
        /* Get the current curve and sample it at each of the data points,
         * printing out the total least squares distance. Attempt to move
         * each of the coefficients until we get a better fit overall. */
        var bestCoeffs = lineData.coeffs.slice();
        var bestLeastSquares = LeastSquares(lineData.inputData, bestCoeffs);

        /* A simple binary approach */
        for (var coeffIndex = 0; coeffIndex < lineData.coeffs.length; ++coeffIndex) {
            var value = 10.0;
            var multiplier = 1.0;
            for (var i = 0; i < 50; ++i) {
                var attemptCoeffs = bestCoeffs.slice();
                attemptCoeffs[coeffIndex] = attemptCoeffs[coeffIndex] + value * multiplier;

                var leastSquares = LeastSquares(lineData.inputData,
                                                attemptCoeffs);

                if (leastSquares < bestLeastSquares) {
                    bestLeastSquares = leastSquares;
                    bestCoeffs = attemptCoeffs.slice();
                }

                value /= 2.0;
                multiplier *= -1.0;
            }
        }

        return {
            coeffs: bestCoeffs,
            leastSquares: bestLeastSquares
        };
    }

    function GenerateCoeffsForData() {
        var inputData = document.getElementById("input-coefficients")
                                .value
                                .split(",")
                                .map(function(c) {
                                    return Number.parseFloat(c);
                                });
        if (inputData.length % 2 !== 0)
            return false;

        var inputDataPairs = [];
        for (var i = 0; i < inputData.length; i += 2) {
            inputDataPairs.push([inputData[i], inputData[i + 1]]);
        }

        var coeffs = inputDataPairs.map(function() {
            return 1.0;
        });

        lineData.coeffs = coeffs;
        lineData.inputData = inputDataPairs;

        return true;
    }

    function CurveWave(color, points) {
        var curve = new THREE.SplineCurve3(points);
        var geometry = new THREE.Geometry();
        geometry.vertices = curve.getPoints(200);
        var pointsMaterial = new THREE.PointsMaterial({
            color: color,
            size: 3,
            map: gradientTexture,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthTest: false
        });
        var lineMaterial = new THREE.LineBasicMaterial({
            color: color,
            linewidth: 3.0
        });
        return [
            new THREE.Line(geometry, lineMaterial),
            new THREE.Points(geometry, pointsMaterial)
        ];
    }

    function GeneratePoints(color, points) {
        var geometry = new THREE.Geometry();
        geometry.vertices = points.map(function(p) {
            return new THREE.Vector3(p[0], p[1], 0.0);
        });
        var pointsMaterial = new THREE.PointsMaterial({
            color: color,
            size: 3,
            map: gradientTexture,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthTest: false
        });

        return new THREE.Points(geometry, pointsMaterial);
    }

    var element = document.getElementById("parametric-fit-wrapper");
    var camera = new THREE.PerspectiveCamera(45,
                                             element.clientWidth / element.clientHeight,
                                             0.1,
                                             1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.sortObjects = false;
    renderer.setSize( element.clientWidth, element.clientHeight );
    renderer.domElement.className = renderer.domElement.className + " emscripten-canvas";

    var gradientTexture = new THREE.Texture(gradientCanvas);
    gradientTexture.anisotropy  = renderer.getMaxAnisotropy();
    gradientTexture.magFilter = THREE.NearestFilter;
    gradientTexture.needsUpdate = true;

    element.appendChild(renderer.domElement);

    camera.position.z = 10;
    camera.position.y = 0;
    camera.rotation.x = -0.1;

    function render() {
        var scene = new THREE.Scene();
        var waves = [];
        Array.prototype.push.apply(waves, CurveWave(0xff0000, SampleGeneratedCurve()));

        waves.forEach(function(w) {
            scene.add(w);
        });

        scene.add(GeneratePoints(0x00ff00, lineData.inputData));
        renderer.render(scene, camera);
    }

    if (GenerateCoeffsForData())
        render();

    var iterateFitIntervalTracker = {
        id: 0
    };

    function ChangeIterateButtonText(text) {
        document.getElementById("iterate-fit-button").textContent = text;
    }

    function StartIterating() {
        iterateFitIntervalTracker.id = setInterval(function () {
            var result = IterateLineFit();

            lineData.coeffs = result.coeffs;

            document.getElementById("curve-equation")
                    .textContent = GenerateCurveEquationText(lineData.coeffs);
            document.getElementById("least-squares-regression")
                    .textContent = result.leastSquares;
            render();

            /* Stop when we're at a threshold of less than 10^-2; */
            if (result.leastSquares < Math.pow(10, -2)) {
                StopIterating();
            }
        }, 100);
        ChangeIterateButtonText("Stop Iterating");
    }

    function StopIterating() {
        if (iterateFitIntervalTracker.id) {
            clearInterval(iterateFitIntervalTracker.id);
            iterateFitIntervalTracker.id = 0;
        }

        ChangeIterateButtonText("Iterate Fit");
    }

    document.getElementById("input-coefficients")
            .addEventListener("change", function(e) {
                if (GenerateCoeffsForData())
                    render();
            });
    document.getElementById("iterate-fit-button")
            .addEventListener("click", function(e) {
                if (iterateFitIntervalTracker.id) {
                    StopIterating();
                } else {
                    StartIterating();
                }
            });
    render();
})();