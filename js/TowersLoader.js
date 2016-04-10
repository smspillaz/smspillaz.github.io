var TowersModuleInstance = TowersModule({
    preRun: [],
    postRun: [],
    onRuntimeInitialized: function() {
        this._run_towers(this.canvas.clientWidth,
                         this.canvas.clientHeight);
    },

    locateFile: function(file) {
        if (file === "towers.js.mem") {
            return "/js/towers.js.mem";
        }
    },

    printErr: function(message) {
        console.error(Array.prototype.slice.call(arguments).join(' '));
    },

    print: function(message) {
        console.log(Array.prototype.slice.call(arguments).join(' '));
    },

    canvas: document.getElementById('towers-module'),

    setStatus: function(message) {
        var status = document.getElementById('towers-status');
        if(status) status.innerHTML = message;
    },

    totalDependencies: 0,

    monitorRunDependencies: function(left) {
        this.totalDependencies = Math.max(this.totalDependencies, left);

        if(left) {
            this.setStatus('Downloading... ' + (this.totalDependencies - left) + '/' + this.totalDependencies);
        } else {
            this.setStatus('Download complete');
        }
    }
});

TowersModuleInstance.setStatus('Downloading...');

