(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];


    (lib.AnMovieClip = function() {
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function(positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
        }
        this.play = function() {
            cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function(positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
        }
        this.stop = function() {
            cjs.MovieClip.prototype.stop.call(this);
        }
    }).prototype = p = new cjs.MovieClip();
    // symbols:
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.welldone = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AHBC4QgjgOgdgbQgcgbgOglQgOgjAAgsQAAgrAOgjQAOgkAcgbQAdgcAjgOQAjgOAqAAQApAAAjAOQAjAOAcAcQAcAbAPAkQAOAkAAAqQAAAsgOAjQgOAlgcAbQgdAbgjAOQgiAOgqAAQgrAAgigOgAHjhoQgTAHgPAPQgOAQgHAUQgHAVAAAZQAAAyAcAfQAPAQATAHQATAIAYAAQAXAAATgIQATgHAOgQQAPgPAHgVQAIgUAAgZQAAgZgIgVQgHgUgPgQQgOgPgTgHQgTgJgXABQgYgBgTAJgAW+C2QgNgOAAgUQAAgUANgNQANgNAUAAQATAAAOANQAMAOABATQgBAUgMAOQgOANgTAAQgUAAgNgNgAy0DAQgLgBgJgGQgIgGgFgJQgGgIgCgIIg3iUIg5CUIgIASQgGAIgJAGQgJAGgOAAQgMAAgIgHQgIgFgFgJQgFgJgDgIIhkkWQgHgaAHgQQAHgQASgFQASgHAPAIQAQAIAIAZIA+C+IA3iUIAHgPQADgGADgDQAFgGAIgFQAIgDAJAAIAKABIAJACQAJADAFAHQAGAHAGASIA3CUIA+i+QAIgZAQgIQAPgIASAHQASAFAHAQQAHAQgIAaIhjEWIgIASQgFAIgIAGQgJAGgOAAIgCAAgAPzC4QgMgHgLgPIiCi7IACCiQAAAbgMAMQgMANgTAAQgTAAgMgNQgMgMAAgbIAAkeQAAgVALgLQALgKAVgBQANAAAMAIQAMAHALAOICDDAIgDimQAAgbAMgNQAMgNATABQATgBAMANQAMANAAAbIAAEeQAAAUgLAMQgLAKgUABQgOAAgMgIgAR/C2QgKgHABgXIAAkxQgBgWAKgHQAKgIAWABICwAAQATAAALAKQALAKAAAUQAAATgLAKQgLAKgTAAIiDAAIAABFIB2AAQAUAAALAKQALAKAAAUQAAASgLALQgLAKgUAAIh2AAIAABIICHAAQAUAAALAKQALAKAAATQAAAUgLAJQgLALgUAAIi0AAIgDAAQgUAAgJgHgAgJC2QgLgHAAgXIAAkxQAAgWALgHQAKgIAUABIBCAAQAwAAAlANQAkANAZAbQAzA2ACBXQABAogMAhQgMAhgZAaQgZAagnANQgoANg4AAIg5AAIgDAAQgRAAgKgHgABCBtIAWAAQA5gBAbgZQAbgbAAgyQAAg4gageQgbgdg4gBIgYAAgAvsC2QgKgHAAgXIAAkxQAAgWAKgHQAJgIAXABICvAAQAUAAALAKQALAKAAAUQAAATgLAKQgLAKgUAAIiCAAIAABFIB2AAQAUAAALAKQAKAKABAUQgBASgKALQgLAKgUAAIh2AAIAABIICHAAQAUAAAKAKQALAKABATQgBAUgLAJQgKALgUAAIi0AAIgDAAQgUAAgJgHgAl5C9QgcAAgMgNQgMgMAAgbIAAkSQAAgbAMgMQAMgNATAAQATAAAMANQAMAMAAAbIAAD3IBeAAQAUAAALAKQAKAKABATQgBAUgKAJQgLALgUAAgAqGC9QgbAAgNgNQgMgMAAgbIAAkSQABgbALgMQAMgNATAAQAUAAALANQAMAMABAbIAAD3IBdAAQAUAAALAKQALAKAAATQAAAUgLAJQgLALgUAAgAXfBPQgUABgMgMQgLgNgBgbIAAiqQABgbALgNQAMgMAUAAQASAAAMAMQAMANABAbIAACqQgBAbgMANQgLAMgSAAIgBgBg");
        this.shape.setTransform(-0.019, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.welldone, new cjs.Rectangle(-154.9, -19.8, 309.8, 39.6), null);


    (lib.Símbolo5 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#BC2F27").s().p("AgBB5Qg0gBgkglQgkgkABgxQABgyAlgiQAmgjAyABQA1ABAjAkQAkAkgBAxQgBAygmAjQgjAigzAAIgBAAg");
        this.shape.setTransform(35.6391, 35.6534, 0.4647, 0.4813);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F8EB53").s().p("AgHGAQilgDhyhzQhyhzADieQADigB3huQB3huCkAEQClADByBzQBzBzgECeQgDCfh3BuQhzBrifAAIgJAAg");
        this.shape_1.setTransform(35.63, 35.6466, 0.4646, 0.4813);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#666666").s().p("AgcFjIgIgkQgZgDgWgGIgUAeQgegIgdgPIAHgkQgVgMgTgPIgeAVQgYgUgWgZIAUgeQgPgTgMgWIgkAIQgPgegKgdIAfgUQgHgXgDgYIgkgHQgDgiADgdIAkgHQACgYAHgXIgfgUQAJgeAPgeIAkAIQALgVAPgTIgUgfQAUgYAZgWIAeAVQATgPAVgMIgIgjQAdgQAegJIAVAeQAWgGAZgEIAGgkQAhgDAfADIAHAkQAYACAXAHIAUgfQAhALAaANIgHAkQAWAMATAOIAegUQAZAVAUAYIgUAeQAPATAMAWIAkgIQAPAdAKAeIgfAUQAHAXADAYIAkAHQADAhgDAeIgkAHQgCAXgHAZIAfAUQgJAdgPAeIgkgHQgMAVgOASIAUAfQgTAYgZAVIgfgUQgSAOgWANIAIAkQgdAPgeAJIgUgeQgZAHgXADIgGAkQgSABgRAAIgcgBg");
        this.shape_2.setTransform(35.6432, 35.6498);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(0, 0, 71.3, 71.3), null);


    (lib.Símbolo4 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#BC2F27").s().p("AgBB5Qg0gBgkglQgkgkABgxQABgyAlgiQAmgjAzABQAzABAkAkQAkAkgBAxQgBAyglAjQgkAigyAAIgCAAg");
        this.shape.setTransform(35.6431, 35.6534, 0.4647, 0.4813);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F8EB53").s().p("AgHGAQilgDhyhzQhzhzAEieQADigB3huQB3huCkAEQClADByBzQBzBzgECeQgDCfh3BuQhzBrifAAIgJAAg");
        this.shape_1.setTransform(35.6413, 35.6466, 0.4646, 0.4813);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#666666").s().p("AgdFjIgGgkQgagDgWgGIgUAeQgegIgegPIAIgkQgVgMgTgPIgfAVQgYgVgWgYIAVgeQgOgTgNgWIgjAIQgQgcgJgfIAegUQgHgYgDgXIgkgHQgDghACgeIAkgHQAEgYAFgXIgegUQAJgeAPgeIAjAIQANgWAOgSIgVgfQAUgYAZgWIAfAVQAUgPAUgMIgIgjQAdgQAegJIAVAeQAVgGAagEIAHgkQAggDAfADIAHAkQAXACAYAHIATgfQAiALAaANIgHAkQAWAMASAOIAfgUQAaAWATAXIgUAeQAPATAMAWIAkgIQAPAcAJAfIgeAUQAHAXADAYIAkAHQADAggDAfIgkAHQgCAXgHAZIAfAUQgKAggOAbIgkgHQgMAVgOASIAUAfQgUAZgZAUIgegUQgTAPgVAMIAIAkQgeAPgdAJIgVgeQgYAHgXADIgHAkQgRABgRAAIgdgBg");
        this.shape_2.setTransform(35.65, 35.6498);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0, 0, 71.3, 71.3), null);


    (lib.puerta2 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // FlashAICB
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#88AA1D").s().p("AS9Z/IAAhTMhK3gARMAAAglGIg7AAIAAluIA7AAIAAmPMAzWAAAIAAhWIHQAAIAABWIQbAAIAAhWIHMAAIAABWIPFAAIAAhMIHMAAIAABMIHIAAIAUGtIA2AAIAAGgIgmAAIAAUDIAcAAIAAHrIgsAAIARIZInFAAIAAA/IpEAAIAAg+ItSAAIAABSgEAqiAOfIAAKKIEvAAIAAqKIIqAAIAAkvIoqAAIAA14IInAAIAAkvIonAAIAAnkIkvAAIAAHkIx7AAIAAnpIkvAAIAAHpIs4AAIAAQ0Il8AAIAA4YIktAAIAAYYIltAAIAApwIkvAAIAAJwI7RAAIAAxvIukAAIAAEuIJ2AAIAARvIf/AAIAAFFIpSAAIAAEvMArPAAAIAAKGIEvAAIAAqGgAYnJwIAA14IR7AAIAAV4gALuJwIAA14IIKAAIAAV4gABEJwIAAlFIF8AAIAAFFgApWJwIAAlFIFtAAIAAFFg");
        this.shape.setTransform(-0.225, 9.775);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.puerta2, new cjs.Rectangle(-364, -156.5, 727.6, 332.6), null);


    (lib.puerta = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFE800").s().p("Ah7B8IAAj3ID3AAIAAD3g");
        this.shape.setTransform(-0.0241, 0, 0.9659, 0.9639);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.puerta, new cjs.Rectangle(-12, -12, 24, 24), null);


    (lib.playagainbtn = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Capa 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AmeFEQgIgDgDgIIgBgHIAAgFIAQiKQADgcAWgHQAKgDAKAEQAJAEAHALIBQBxIAFAHIABAGQADAJgEAGQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhEATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAl7D0IAsgMIgmg2gAi7EJQgRgCgQgKQgQgKgKgPQgLgPgFgUQgGgVACgTQABgSAJgQQAJgRAOgLQAOgKATgFQALgDALgBQAKAAAKACQASAFAEAMQACAJgDAHQgDAHgHADQgDABgFgBIgKgBQgFgCgGAAQgHAAgGACQgKACgIAGQgHAGgFAJQgEAJgBALQAAAKADAMQADAMAGAJQAFAIAJAGQAIAGAKABQAJACALgDQAJgCAGgFQAGgEAEgGIAEgNQACgGgBgFIgjAJQgJADgHgEQgGgEgDgJQgCgIAEgHQADgGAKgCIA1gPQANgDAGAFQAGAFAEAMQAFAUgCAQQgCARgIAOQgQAdghAJQgNAEgNAAIgMgBgAgvDiQgHgEgDgIIgBgHIAAgFIAPiJQADgdAWgGQALgDAIAEQAJAEAIALIBQBxIAEAHIACAFQACAJgEAGQgEAHgJADQgIACgGgEQgHgEgGgIIgJgPIhEASIAAATQgBAKgEAGIgEAFIgGADIgGABQgGAAgFgDgAgMCSIArgMIgkg2gACJCtQgHgEgEgNIgih+QgEgPAEgIQAEgHAJgCQAJgCAHAEQAHADAEANIAjCBQADANgEAHQgEAIgJACIgHABQgFAAgEgDgADWCYQgHgEgEgNIgkiHQgCgIADgHQAEgGAKgDQAGgBAHACQAGABAHAGIBWBIIgXhMQgDgNAEgHQAEgIAJgCQAJgDAHAFQAHAEAEANIAkCGQACAJgEAHQgDAHgKACQgGACgHgCQgHgCgGgGIhVhIIAWBMQADANgEAHQgEAIgJACIgHABQgFAAgEgDgAGKBrQgIgFgDgJQgCgKAFgHQAEgIAJgDQAJgCAIAFQAIAEADAJQACAKgFAIQgEAIgJACIgGABQgGAAgFgDgAF8A1QgHgEgEgNIgVhPQgDgNADgHQAEgIAKgCQAIgDAIAFQAHAEAEANIAVBPQADANgEAHQgEAIgIACIgIABQgFAAgEgDgAljAAQgHgDgDgNIgliIQgDgLAEgEQAFgFAJgCIAhgJQAWgGARADQARAEALALQALAMAFASQAIAdgMAUQgNAUghAKIgNADIAJAgQADANgEAHQgEAHgJACIgGABQgFAAgFgDgAlYiUIgNADIAOAxIAMgDQAOgEAFgHQAFgIgDgMQgDgMgJgFQgFgDgGAAQgFAAgGACgAjOgkQgGgCgCgLIgkiIQgEgNAEgHQAEgHAJgDQAJgCAHAEQAHAEAEANIAfB0IAsgMQAJgCAHADQAGADADAJQACAKgEAGQgEAGgJADIhBARQgHADgEAAIgFgCgAhShFQgIgDgDgIIgBgHIAAgFIAQiKQADgdAWgGQAKgDAKAEQAJAEAHALIBPBxIAFAHIABAGQADAIgEAHQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhDATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAgviVIAsgMIgmg2gACTiGQgHgEgEgMIgKgnIhIhCQgKgIgBgJQgCgIAGgHQAGgIAIgBQAIAAALAIIA3A1IAWhKQAFgMAIgEQAIgDAIADQAIAEAEAIQADAIgFAMIgeBdIALAnQADANgEAHQgEAHgJADIgGABQgFAAgFgEg");
        this.shape.setTransform(60.4433, 47.5504);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CC3300").s().p("Aheh5IC9B5Ii9B6g");
        this.shape_1.setTransform(63.725, 87.925);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFCC00").s().p("Aj/G9Qi5hrg3jNQg3jMBqi5QBri4DNg3QDNg3C4BqQC4BrA4DNQA2DNhqC4QhqC4jOA3QhGAThDAAQiDAAh4hGg");
        this.shape_2.setTransform(58.8971, 58.9142);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CC3300").s().p("AklH9QjTh6g/jrQg/jqB6jTQB6jTDrg/QDqg/DSB6QDTB6A/DrQA/Dqh5DTQh6DSjrA/QhQAWhNAAQiVAAiLhQg");
        this.shape_3.setTransform(58.9029, 58.9029);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#333333").s().p("AmeFEQgIgDgDgIIgBgHIAAgFIAQiKQADgcAWgHQAKgDAKAEQAJAEAHALIBQBxIAFAHIABAGQADAJgEAGQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhEATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAl7D0IAsgMIgmg2gAi7EJQgRgCgQgKQgQgKgKgPQgLgPgFgUQgGgVACgTQABgSAJgQQAJgRAOgLQAOgKATgFQALgDALgBQAKAAAKACQASAFAEAMQACAJgDAHQgDAHgHADQgDABgFgBIgKgBQgFgCgGAAQgHAAgGACQgKACgIAGQgHAGgFAJQgEAJgBALQAAAKADAMQADAMAGAJQAFAIAJAGQAIAGAKABQAJACALgDQAJgCAGgFQAGgEAEgGIAEgNQACgGgBgFIgjAJQgJADgHgEQgGgEgDgJQgCgIAEgHQADgGAKgCIA1gPQANgDAGAFQAGAFAEAMQAFAUgCAQQgCARgIAOQgQAdghAJQgNAEgNAAIgMgBgAgvDiQgHgEgDgIIgBgHIAAgFIAPiJQADgdAWgGQALgDAIAEQAJAEAIALIBQBxIAEAHIACAFQACAJgEAGQgEAHgJADQgIACgGgEQgHgEgGgIIgJgPIhEASIAAATQgBAKgEAGIgEAFIgGADIgGABQgGAAgFgDgAgMCSIArgMIgkg2gACJCtQgHgEgEgNIgih+QgEgPAEgIQAEgHAJgCQAJgCAHAEQAHADAEANIAjCBQADANgEAHQgEAIgJACIgHABQgFAAgEgDgADWCYQgHgEgEgNIgkiHQgCgIADgHQAEgGAKgDQAGgBAHACQAGABAHAGIBWBIIgXhMQgDgNAEgHQAEgIAJgCQAJgDAHAFQAHAEAEANIAkCGQACAJgEAHQgDAHgKACQgGACgHgCQgHgCgGgGIhVhIIAWBMQADANgEAHQgEAIgJACIgHABQgFAAgEgDgAGKBrQgIgFgDgJQgCgKAFgHQAEgIAJgDQAJgCAIAFQAIAEADAJQACAKgFAIQgEAIgJACIgGABQgGAAgFgDgAF8A1QgHgEgEgNIgVhPQgDgNADgHQAEgIAKgCQAIgDAIAFQAHAEAEANIAVBPQADANgEAHQgEAIgIACIgIABQgFAAgEgDgAljAAQgHgDgDgNIgliIQgDgLAEgEQAFgFAJgCIAhgJQAWgGARADQARAEALALQALAMAFASQAIAdgMAUQgNAUghAKIgNADIAJAgQADANgEAHQgEAHgJACIgGABQgFAAgFgDgAlYiUIgNADIAOAxIAMgDQAOgEAFgHQAFgIgDgMQgDgMgJgFQgFgDgGAAQgFAAgGACgAjOgkQgGgCgCgLIgkiIQgEgNAEgHQAEgHAJgDQAJgCAHAEQAHAEAEANIAfB0IAsgMQAJgCAHADQAGADADAJQACAKgEAGQgEAGgJADIhBARQgHADgEAAIgFgCgAhShFQgIgDgDgIIgBgHIAAgFIAQiKQADgdAWgGQAKgDAKAEQAJAEAHALIBPBxIAFAHIABAGQADAIgEAHQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhDATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAgviVIAsgMIgmg2gACTiGQgHgEgEgMIgKgnIhIhCQgKgIgBgJQgCgIAGgHQAGgIAIgBQAIAAALAIIA3A1IAWhKQAFgMAIgEQAIgDAIADQAIAEAEAIQADAIgFAMIgeBdIALAnQADANgEAHQgEAHgJADIgGABQgFAAgFgEg");
        this.shape_4.setTransform(60.4433, 47.5504);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CC3300").s().p("AvNPqIAA/TIebAAIAAfTg");
        this.shape_5.setTransform(38.6, 64.675);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 2).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-58.8, -35.5, 194.8, 200.4);


    (lib.play_btn = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Capa 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AmTBqQgKgCgJgGQgJgFgFgFQgEgHAAgGQAAgKAGgGQAHgHALAAIAHACIAJAEIAMAFIAKABQANAAAHgGQAHgGgBgIQAAgGgBgEQgCgFgEgDIgKgFIgQgHQgagJgNgNQgOgQAAgWQAAgOAFgMQAFgKAJgJQAVgRAeABQAZgBAOAIQAOAJAAAOQAAAKgFAGQgFAGgLgBQgFABgIgFQgDgDgFgBQgFgBgFAAQgLAAgFAFQgHAFAAAJQAAAOAcAKQAQAGALAGQAMAHAHAGQAGAHAEAJQAEAKAAAMQgBAQgFAMQgGAMgKAJQgLAJgNAFQgOAEgRAAQgNAAgLgCgAGOBiQgHgHAAgKQAAgLAIgHQAGgIALAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAHgKABQgMAAgGgIgAALBkQgGgGgEgLIgFgTIhPAAIgGAUQgEALgFAFIgHAFQgDABgEAAQgLAAgHgHQgHgHgBgJIACgHIABgGIA4iQQAMgdAZAAQANgBAJAHQAJAHAEAOIA1CQIACAKIACAFQgBALgGAGQgHAFgKABQgJAAgGgGgAhFAWIA0ABIgahFgAjZBnQgLgBgHgGQgFgHgBgPIABiFIgdAAQgLAAgGgGQgGgFAAgLQAAgKAGgGQAGgGALABIBoAAQAKAAAGAFQAFAFACALQgBALgGAFQgGAFgLABIgcAAIABCFQgCAPgGAHQgGAHgJAAIgBAAgAEYBgQgGgHAAgPIAAiFIgdAAQgLgBgFgFQgHgFABgLQAAgLAGgEQAFgGAMAAIBngBQALABAGAFQAFAGABAKQAAALgHAFQgFAGgLgBIgcABIAACGQgBAOgGAHQgGAHgLAAQgKgBgHgGgABLBhQgGgIAAgPIAAidQAAgMAGgDQAFgFALABIApAAQAlAAAUARQAUARAAAeQAAAMgDALQgDAKgHAIQgFAHgHAFQgHAFgHACIAdAkIAHAJQADAGAAAIQgBAJgFAGQgGAGgJAAQgHAAgFgDQgGgCgFgHIgxhCIAAAyQgBAPgGAHQgGAHgLAAQgKgBgHgFgAB0gMIAQAAQAOAAAIgGQAHgGABgLQgBgLgHgHQgIgGgOAAIgQAAgAGPAkQgHgHAAgOIAAhcQABgPAGgHQAGgHALAAQAKAAAHAHQAGAGAAAQIAABbQAAAPgHAHQgGAHgLAAQgKAAgGgHg");
        this.shape.setTransform(58.9516, 58.6223);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFCC00").s().p("Aj/G9Qi5hrg3jNQg3jMBqi5QBri4DNg3QDNg3C4BqQC4BrA4DNQA2DNhqC4QhqC4jOA3QhGAThDAAQiDAAh4hGg");
        this.shape_1.setTransform(58.8971, 58.9142);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#CC3300").s().p("AklH9QjTh6g/jrQg/jqB6jTQB6jTDrg/QDqg/DSB6QDTB6A/DrQA/Dqh5DTQh6DSjrA/QhQAWhNAAQiVAAiLhQg");
        this.shape_2.setTransform(58.9029, 58.9029);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CC3300").s().p("AEuC8QgKgDgFgJQgFgIADgKQACgLAJgFQAIgEALACQAKADAFAJQAFAIgCAKQgEAKgIAGQgGADgGAAIgHgBgACvCXQgJgDgFgIQgFgIAEgOIAMgrIghhlQgFgOAEgIQADgJAJgEQAKgEAIAEQAJAEAFAOIAYBQIA9g5QAMgKAJABQAJABAGAIQAGAIgBAJQgBAJgLAJIhQBIIgLArQgEAOgIAFQgFADgGAAIgHgBgAE+CBQgKgDgEgIQgEgIADgPIAYhXQAEgNAIgGQAHgEAKADQAKACAFAIQAEAHgEAPIgXBXQgEAOgIAFQgFAEgHAAIgGgBgAFMA4IAAABIABgCIAAgBIgBACgAA9B7QgIgCgFgGQgEgIgBgLIgBgUIhJgUIgMARQgGAKgGAEQgEACgDAAIgHgBQgLgCgFgIQgGgJADgIIACgIIAEgFIBYh5QAUgaAYAHQAMADAGAJQAHAJABAOIAOCXIAAAJIgBAGQgDAJgHAEQgFADgFAAIgIgCgAgHAUIAvANIgGhHgAh9BGIhIgTQgNgDgDgFQgEgGADgKIApiWQADgOAJgEQAHgGAKAEQAKACAFAIQAEAIgEAOIgiB/IAxAMQAKADAEAHQAEAHgCAKQgDAKgHAEQgEACgFAAIgIgBgAliAJQgKgDgFgHQgFgIAEgOIAoiWQAEgMAHgCQAGgCAKACIAkAKQAYAGAOANQAPANAEARQAFARgGAVQgIAfgXANQgWAMgmgKIgOgDIgJAkQgEANgIAEQgFAEgGAAIgGgBgAkxhYIAOAEQAPAEAKgFQAJgEAEgNQADgNgFgKQgGgJgPgEIgOgEg");
        this.shape_3.setTransform(58.0928, 58.9222);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#CC3300").s().p("AutOYIAA8vIdbAAIAAcvg");
        this.shape_4.setTransform(43.75, 62.775);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 2).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50.5, -29.2, 188.5, 184);


    (lib.pared3 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // FlashAICB
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#88AA1D").s().p("AQzZ3IAAh4MhIyAAAMAAAgklIg2AAIAAmQIA2AAIAAmBMBfIAAAIAAg/IF1AAIAAA/IKwAAIAAFyIBIAAIAAGNIhIAAIAAYQIA5AAIAAIGIg5AAIAAEhI/vAAIAAB4gA/rjoIIOAAIAAUyMAplAAAIAAGyIEvAAIAAmyMAgzAAAIAAkvMggzAAAIAAlYIVlAAIAA0gILSAAIAAkuIrSAAIAAmsIkuAAIAAGsMhftAAAIAAEuMA/aAAAIAAFHMgnGAAAgAMKMbIAAlYIF+AAIAAFYgAyuMbIAAlYIaJAAIAAFYgEAhsACUIAAvxIGCAAIAAPxgAW3CUIAAvxIGHAAIAAPxgAMKCUIAAvxIF+AAIAAPxgAyuCUIAAl8IaJAAIAAF8g");
        this.shape.setTransform(0.5, 11.225);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.pared3, new cjs.Rectangle(-363.3, -154.3, 727.6, 331.1), null);


    (lib.pared = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // FlashAICB
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#88AA1D").s().p("EgrRAVuMAAAgrcMBWjAAAMAAAArcgEAglAK2IAAJQIDkAAIAApQIFtAAIAAjkIltAAIAAuuIFsAAIAAjlIlsAAIAAlTIjkAAIAAFTIvBAAIAAlTIjlAAIAAFTIkZAAIAADlIEZAAIAADhI7kAAIAAkOIE3AAIAAjkIk3AAIAAlBIjkAAIAAFBI4jAAIAADkIYjAAIAAS/MAqVAAAIAAJQIDkAAIAApQgAcwHSIAAuuID1AAIAAOugAi1HSIAAnpIUYAAIAAgDIABAAIAAnCIHoAAIAAOugAtlHSIAAnpIHLAAIAAHpg");
        this.shape.setTransform(-34.25, -16.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.pared, new cjs.Rectangle(-311.2, -155.7, 553.9, 278.1), null);


    (lib.obstaculo = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Capa_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhIBmIAJgnIABgCIB9AAIAAACIAKAngAgzAVIAKgoIBTAAIAKAogAgeg8IALgoIAnAAIALAog");
        this.shape.setTransform(29.95, 23.35);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F29100").s().p("AhvCOIAAgfIAkAAIADgJICSAAIACAJIAkAAIAAAfgAg+A9IALgoIBnAAIALAogAgpgTIAFgPIABgHIAEgOIABgFIA9AAIALApgAgThkIAHgeQADgMAJAAQAKAAAEAMIAHAeg");
        this.shape_1.setTransform(29.925, 23.35);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#3C3C3B").s().p("AhxCRIAAkhIDiAAIAAEhg");
        this.shape_2.setTransform(29.9, 23.375);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.obstaculo, new cjs.Rectangle(18.6, 8.9, 22.699999999999996, 29), null);


    (lib.jugador = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

        // Capa_5
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#BC2F27").s().p("AgGAIQgDgDAAgFQAAgEADgDQADgDADgBQAEABADADQADAEAAADQAAAFgDADQgDAEgEAAQgEAAgCgEg");
        this.shape.setTransform(-9.025, 7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFE800").s().p("AgWAaQgLgMABgOQAAgPAKgKQALgLAMABQAOAAAJALQAJAKAAAPQAAAPgJAKQgLAKgNAAQgNAAgJgKgAgGgHQgDADAAAEQAAAFADADQACADAEAAQAEAAADgDQAEgDAAgFQAAgEgDgDQgDgDgFgBQgDAAgDAEg");
        this.shape_1.setTransform(-9.0761, 7.0458);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#CCCCCC").s().p("AgFBGIgBgHIgIgCIgEAGIgLgFIACgHIgIgFIgGAEIgIgJIAFgGIgFgHIgGABIgGgMIAGgEIgBgJIgHgBIAAgDIAAgJIAHgCIABgIIgGgFIAGgLIAFABIAGgHIgFgHIAIgJIAGAEIAIgFIgCgHIAKgFIADAGIAKgCIABgHIALAAIAAAHIAKACIADgGIAKAFIgBAHIAIAFIAEgEQAGAEADAFIgEAGIAFAIIAHgCIAEAMIgFADIABAKIAHABIAAAKIAAACIgHABIgBAKIAFADQgCAIgCAEIgGgCIgFAJIADAGIgHAIIgGgEIgHAGIABAHIgKAEIgEgFIgIACIgCAGIgHABIgEAAgAgWgZQgKAKgBAPQAAAOAKAMQAKAKANAAQANAAALgKQAJgKAAgPQAAgPgJgKQgJgLgPAAIgBAAQgLAAgKAKg");
        this.shape_2.setTransform(-9.05, 7.0438);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#BC2F27").s().p("AgGAIQgEgDAAgFQABgEADgDQADgDAEgBQAEABACADQAEAEAAADQgBAFgDADQgDAEgEAAQgDAAgDgEg");
        this.shape_3.setTransform(9.1, 7);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFE800").s().p("AgYAaQgIgMAAgOQAAgPAKgKQAKgLAMABQAOAAAKALQAJAKAAAPQAAAPgKAKQgKAKgNAAQgOAAgKgKgAgHgHQgDADAAAEQAAAFADADQADADAEAAQAEAAADgDQADgDABgFQAAgEgEgDQgDgDgEgBQgDAAgEAEg");
        this.shape_4.setTransform(9.1013, 7.0458);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CCCCCC").s().p("AgEBGIgCgHIgIgCIgDAGIgLgFIABgHIgHgFIgFAEQgFgEgEgFIAEgGIgFgHIgGABQgDgGgCgGIAGgEIgCgJIgHgBIAAgEQgBgEABgEIAGgCIADgIIgHgFIAFgLIAGABIAFgHIgDgHIAIgJIAFAEIAHgFIgBgHIALgFIADAGIAJgCIABgHIALAAIABAHIAIACIADgGQAHACAEADIgBAHIAIAFIAFgEQAFAEADAFIgDAGIAFAIIAGgCIAFAMIgGADIABAKIAHABIAAAMIgGABIgCAKIAGADIgFAMIgGgCIgFAJIAEAGIgIAIIgFgEIgIAGIABAHQgFADgFABIgDgFIgKACIAAAGIgIABIgDAAgAgVgZQgLAKAAAPQAAAOAJAMQAJAKAOAAQAOAAAJgKQAKgKAAgPQABgPgJgKQgKgLgOAAIgCAAQgMAAgIAKg");
        this.shape_5.setTransform(9.0875, 7.0438);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#EDB44F").s().p("Ag8AlIAKhJIBuAAIAABJg");
        this.shape_6.setTransform(-7, -4.775);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#BEDFEA").s().p("AAAAJQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQACgEAFAAIABABIAAABQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAIgCACIgCACIgBABIgBgBgAgGAEQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQACgEAEgDQADgDAEACIACABIAAACQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgEAAIAAAAIgBAAIgBACIgBABIgBAAIAAABQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIgBAAIgBAAg");
        this.shape_7.setTransform(2.78, -10.7281);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#86C5D3").s().p("AgpgnIAzAAIAABNIgzACgAgXgNQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAIADABIABgBIACgCIACgCIAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAgBIgBgBIgBgBQgEAAgEAEgAgXgZQgEADgCAFQAAAAAAABQAAABAAAAQAAABAAAAQAAAAABABIABAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABgBIABAAIAAgBIADgDIABAAIAAAAIADAAQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAgBIAAgCIgBgBIgDgBQgDAAgCACgAASAlIAAhMIAHAAIARBMg");
        this.shape_8.setTransform(5, -8.925);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFE800").s().p("AhvBhIgDABIAAAJIgEAAIAAhVIB4AAIAJAAIAAh/IAugBIAdABQADgBADAEIADAJIAYBkIAAAEIAAAnIgEADIgFgDIAAA5IjdAAgAhwBTIABABIAAgEIgBADgAAUgPIAzgCIAAhOIgzAAgABPgSIAYAAIgRhNIgHAAg");
        this.shape_9.setTransform(-1.125, -3.325);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_9,
                p: {
                    skewY: 0,
                    x: -1.125,
                    skewX: 0,
                    y: -3.325,
                    rotation: 0
                }
            }, {
                t: this.shape_8,
                p: {
                    skewY: 0,
                    x: 5,
                    skewX: 0,
                    y: -8.925,
                    rotation: 0
                }
            }, {
                t: this.shape_7,
                p: {
                    skewY: 0,
                    x: 2.78,
                    skewX: 0,
                    y: -10.7281,
                    rotation: 0
                }
            }, {
                t: this.shape_6,
                p: {
                    skewY: 0,
                    x: -7,
                    skewX: 0,
                    y: -4.775,
                    rotation: 0
                }
            }, {
                t: this.shape_5,
                p: {
                    skewY: 0,
                    x: 9.0875,
                    skewX: 0,
                    y: 7.0438,
                    rotation: 0
                }
            }, {
                t: this.shape_4,
                p: {
                    skewY: 0,
                    x: 9.1013,
                    skewX: 0,
                    y: 7.0458,
                    rotation: 0
                }
            }, {
                t: this.shape_3,
                p: {
                    skewY: 0,
                    x: 9.1,
                    skewX: 0,
                    y: 7,
                    rotation: 0
                }
            }, {
                t: this.shape_2,
                p: {
                    skewY: 0,
                    x: -9.05,
                    skewX: 0,
                    y: 7.0438,
                    rotation: 0
                }
            }, {
                t: this.shape_1,
                p: {
                    skewY: 0,
                    x: -9.0761,
                    skewX: 0,
                    y: 7.0458,
                    rotation: 0
                }
            }, {
                t: this.shape,
                p: {
                    skewY: 0,
                    x: -9.025,
                    skewX: 0,
                    y: 7,
                    rotation: 0
                }
            }]
        }).to({
            state: [{
                t: this.shape_9,
                p: {
                    skewY: 180,
                    x: 1.175,
                    skewX: 0,
                    y: -3.325,
                    rotation: 0
                }
            }, {
                t: this.shape_8,
                p: {
                    skewY: 180,
                    x: -4.95,
                    skewX: 0,
                    y: -8.925,
                    rotation: 0
                }
            }, {
                t: this.shape_7,
                p: {
                    skewY: 180,
                    x: -2.73,
                    skewX: 0,
                    y: -10.7281,
                    rotation: 0
                }
            }, {
                t: this.shape_6,
                p: {
                    skewY: 180,
                    x: 7.05,
                    skewX: 0,
                    y: -4.775,
                    rotation: 0
                }
            }, {
                t: this.shape_5,
                p: {
                    skewY: 180,
                    x: -9.0375,
                    skewX: 0,
                    y: 7.0438,
                    rotation: 0
                }
            }, {
                t: this.shape_4,
                p: {
                    skewY: 180,
                    x: -9.0513,
                    skewX: 0,
                    y: 7.0458,
                    rotation: 0
                }
            }, {
                t: this.shape_3,
                p: {
                    skewY: 180,
                    x: -9.05,
                    skewX: 0,
                    y: 7,
                    rotation: 0
                }
            }, {
                t: this.shape_2,
                p: {
                    skewY: 180,
                    x: 9.1,
                    skewX: 0,
                    y: 7.0438,
                    rotation: 0
                }
            }, {
                t: this.shape_1,
                p: {
                    skewY: 180,
                    x: 9.1261,
                    skewX: 0,
                    y: 7.0458,
                    rotation: 0
                }
            }, {
                t: this.shape,
                p: {
                    skewY: 180,
                    x: 9.075,
                    skewX: 0,
                    y: 7,
                    rotation: 0
                }
            }]
        }, 1).to({
            state: [{
                t: this.shape_9,
                p: {
                    skewY: -90,
                    x: 3.325,
                    skewX: 90,
                    y: 1.175,
                    rotation: 0
                }
            }, {
                t: this.shape_8,
                p: {
                    skewY: -90,
                    x: 8.925,
                    skewX: 90,
                    y: -4.95,
                    rotation: 0
                }
            }, {
                t: this.shape_7,
                p: {
                    skewY: -90,
                    x: 10.7281,
                    skewX: 90,
                    y: -2.73,
                    rotation: 0
                }
            }, {
                t: this.shape_6,
                p: {
                    skewY: -90,
                    x: 4.775,
                    skewX: 90,
                    y: 7.05,
                    rotation: 0
                }
            }, {
                t: this.shape_5,
                p: {
                    skewY: -90,
                    x: -7.0437,
                    skewX: 90,
                    y: -9.0375,
                    rotation: 0
                }
            }, {
                t: this.shape_4,
                p: {
                    skewY: -90,
                    x: -7.0458,
                    skewX: 90,
                    y: -9.0513,
                    rotation: 0
                }
            }, {
                t: this.shape_3,
                p: {
                    skewY: -90,
                    x: -7,
                    skewX: 90,
                    y: -9.05,
                    rotation: 0
                }
            }, {
                t: this.shape_2,
                p: {
                    skewY: -90,
                    x: -7.0437,
                    skewX: 90,
                    y: 9.1,
                    rotation: 0
                }
            }, {
                t: this.shape_1,
                p: {
                    skewY: -90,
                    x: -7.0458,
                    skewX: 90,
                    y: 9.1261,
                    rotation: 0
                }
            }, {
                t: this.shape,
                p: {
                    skewY: -90,
                    x: -7,
                    skewX: 90,
                    y: 9.075,
                    rotation: 0
                }
            }]
        }, 1).to({
            state: [{
                t: this.shape_9,
                p: {
                    skewY: 0,
                    x: 3.325,
                    skewX: 0,
                    y: -1.175,
                    rotation: 90
                }
            }, {
                t: this.shape_8,
                p: {
                    skewY: 0,
                    x: 8.925,
                    skewX: 0,
                    y: 4.95,
                    rotation: 90
                }
            }, {
                t: this.shape_7,
                p: {
                    skewY: 0,
                    x: 10.7281,
                    skewX: 0,
                    y: 2.73,
                    rotation: 90
                }
            }, {
                t: this.shape_6,
                p: {
                    skewY: 0,
                    x: 4.775,
                    skewX: 0,
                    y: -7.05,
                    rotation: 90
                }
            }, {
                t: this.shape_5,
                p: {
                    skewY: 0,
                    x: -7.0437,
                    skewX: 0,
                    y: 9.0375,
                    rotation: 90
                }
            }, {
                t: this.shape_4,
                p: {
                    skewY: 0,
                    x: -7.0458,
                    skewX: 0,
                    y: 9.0513,
                    rotation: 90
                }
            }, {
                t: this.shape_3,
                p: {
                    skewY: 0,
                    x: -7,
                    skewX: 0,
                    y: 9.05,
                    rotation: 90
                }
            }, {
                t: this.shape_2,
                p: {
                    skewY: 0,
                    x: -7.0437,
                    skewX: 0,
                    y: -9.1,
                    rotation: 90
                }
            }, {
                t: this.shape_1,
                p: {
                    skewY: 0,
                    x: -7.0458,
                    skewX: 0,
                    y: -9.1261,
                    rotation: 90
                }
            }, {
                t: this.shape,
                p: {
                    skewY: 0,
                    x: -7,
                    skewX: 0,
                    y: -9.075,
                    rotation: 90
                }
            }]
        }, 1).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.5, -15.5, 31, 31);


    (lib.btn_menu = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#009999").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape.setTransform(43.275, 9.925);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AkMBcIhRhSQgKgKAKgKIBRhRQAGgFAGABIABAAIAABDQAFgCAGAAIAwAAIABAAIAAgSQABgvAxAAIHCAAQAyAAAAAyIAABbQAAAygyAAInCAAQgwAAgCgvIAAgSIgBAAIgwAAQgGAAgFgCIAABDIgBAAIgBAAQgGAAgFgEg");
        this.shape_1.setTransform(35.5125, 9.625);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#333333").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape_2.setTransform(43.275, 9.925);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgXAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIAvAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
        this.shape_3.setTransform(13.4, 9.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AAlBcIhQhSQgLgKALgKIBQhRQAFgFAGABIABAAIAAC/IgBAAIgBAAQgFAAgFgEg");
        this.shape_4.setTransform(4.9625, 9.625);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AjgBgQgxAAgBgvIAAhhQABgvAxAAIHBAAQAyAAAAAyIAABbQAAAygyAAg");
        this.shape_5.setTransform(43.475, 9.625);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#009999").s().p("ApDC0IAAlnISHAAIAAFng");
        this.shape_6.setTransform(49.475, 10.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 2).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.5, -7.4, 116, 36);


    (lib.botonvirtual = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AgkCYIAAi1IgwAAIBUh6IBWB6IgxAAIAAC1g");
        this.shape.setTransform(0.05, -0.025);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CCCCCC").s().p("AjYD7QgiAAAAgiIAAmxQAAgiAiAAIGxAAQAiAAAAAiIAAGxQAAAigiAAg");

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(4));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-25.1, -25.1, 50.3, 50.3);


    (lib.asfasf = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CCCCCC").s().p("Ak1FoQgyAAAAgyIAAprQAAgyAyAAIJrAAQAyAAAAAyIAAJrQAAAygyAAg");
        this.shape.setTransform(36, 36);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.asfasf, new cjs.Rectangle(0, 0, 72, 72), null);


    (lib.Símbolo3 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // rueda1
        this.instance = new lib.Símbolo4();
        this.instance.setTransform(38.2, 177.85, 1, 1, 0, 0, 0, 37, 35.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            rotation: 90,
            y: 177.95
        }, 9).to({
            rotation: 180,
            x: 38.1
        }, 10).to({
            rotation: 270,
            y: 177.85
        }, 10).to({
            rotation: 360,
            x: 38.2
        }, 10).wait(1));

        // rueda2
        this.instance_1 = new lib.Símbolo5();
        this.instance_1.setTransform(132.95, 177.85, 1, 1, 0, 0, 0, 36.9, 35.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            rotation: 90,
            x: 133,
            y: 177.9
        }, 9).to({
            rotation: 180,
            x: 132.95,
            y: 177.95
        }, 10).to({
            rotation: 270,
            x: 132.9,
            y: 177.9
        }, 10).to({
            rotation: 360,
            x: 132.95,
            y: 177.85
        }, 10).wait(1));

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#C99541").s().p("Ag7EmQgSgDgKgQQgKgQADgSIBlnzQAEgTAPgKQAPgKATADQASAEAKAQQALAPgEASIhlH0QgDAQgMAKQgNAKgQAAg");
        this.shape.setTransform(18.0148, 114.9742, 0.4812, 0.4812);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#C99541").s().p("Ag7EmQgSgDgKgQQgKgQADgSIBlnzQAEgTAPgKQAPgKATADQASAEAKAQQALAPgEASIhlH0QgDAQgMAKQgNAKgQAAg");
        this.shape_1.setTransform(75.8589, 114.9742, 0.4812, 0.4812);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#C99541").s().p("Ag7EmQgSgDgLgQQgKgQAEgSIBknzQAEgTAQgKQAPgKASADQATAEAKAQQALAPgEASIhlH0QgDAQgNAKQgMAKgQAAg");
        this.shape_2.setTransform(64.2973, 114.9742, 0.4812, 0.4812);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#C99541").s().p("Ag7EmQgSgDgKgQQgKgQADgSIBlnzQAEgTAPgKQAPgKATADQASAEAKAQQALAPgEASIhlH0QgDAQgNAKQgMAKgQAAg");
        this.shape_3.setTransform(41.1621, 114.9742, 0.4812, 0.4812);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#C99541").s().p("Ag7EmQgSgDgKgQQgLgQAEgSIBknzQAEgTAQgKQAPgKATADQASAEAKAQQALAPgEASIhlH0QgDAQgNAKQgMAKgQAAg");
        this.shape_4.setTransform(52.7244, 114.9742, 0.4812, 0.4812);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#C99541").s().p("Ag7EmQgSgDgKgQQgKgQADgSIBlnzQAEgTAPgKQAPgKATADQASAEAKAQQALAPgEASIhlH0QgDAQgMAKQgNAKgQAAg");
        this.shape_5.setTransform(29.5884, 114.9742, 0.4812, 0.4812);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#EDB44F").s().p("At1GAICPr/IZcAAIgFL/g");
        this.shape_6.setTransform(42.6266, 114.9868, 0.4814, 0.4814);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#F9EB50").s().p("Ag4HSIAAujIBxAAIAAOjg");
        this.shape_7.setTransform(136.7733, 94.1549, 0.4814, 0.4814);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#BEDFEA").s().p("AhCAsQgKgJAAgNQAAgNAJgJQAVgXAdgNQAcgOAggBQANgBALAJQAKAKAAAMQgBAOgIAIQgJAJgOABIgIAAQgMACgMAFIgBAAQgKAFgIAHQgGAFgIAIQgIAKgPAAQgPAAgIgJg");
        this.shape_8.setTransform(113.7517, 87.2103, 0.4814, 0.4814);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#BEDFEA").s().p("AhkBFQgLgHgEgMQgEgNAHgLQAcg0A6gbQA5gaA9ALQANACAHAMQAIAMgEAMQgEANgLAGQgLAGgOgCIgHgCIgLAAIgTABIgIACIgXAGIgBAAIgFACQgLAGgIAGIgFADIgCABIgGAGIgJAIQgIAIABABIABgBIgKAQQgGALgOAEIgKACQgIAAgHgEg");
        this.shape_9.setTransform(111.2327, 83.4994, 0.4814, 0.4814);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#86C5D3").s().p("ApXmhIO9AAIDyMiIyvAgg");
        this.shape_10.setTransform(126.9651, 94.1429, 0.4814, 0.4814);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#F9EB50").s().p("AvjHDIAAuHIdoAAIBeOJg");
        this.shape_11.setTransform(47.9066, 155.2751, 0.4812, 0.4812);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#F9EB50").s().p("AsdxoQFSgFLwAFQA2gBAjAkQAcAdAaBFIFWQrQAGAVAAATIAOOtQABAvipAIIjiAAIyxAYg");
        this.shape_12.setTransform(129.656, 122.5454, 0.4812, 0.4812);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#575756").s().p("AhbBOICpipIAOAOIipCpg");
        this.shape_13.setTransform(47.9646, 20.8125, 2.0813, 2.0813);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#575756").s().p("AhjBkIAAjHIDHAAIAADHgAhFBGICLAAIAAiLIiLAAg");
        this.shape_14.setTransform(47.9125, 20.8125, 2.0813, 2.0813);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#C3A392").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_15.setTransform(47.9125, 20.8125, 2.0813, 2.0813);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#575756").s().p("AhbhNIAOgOICpCpIgOAOg");
        this.shape_16.setTransform(55.9254, 61.501, 2.0813, 2.0813);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#575756").s().p("AhjBkIAAjHIDHAAIAADHgAhFBGICLAAIAAiLIiLAAg");
        this.shape_17.setTransform(55.9254, 61.501, 2.0813, 2.0813);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#BD986F").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_18.setTransform(55.9254, 61.501, 2.0813, 2.0813);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#575756").s().p("AhbBOICpipIAOAOIipCpg");
        this.shape_19.setTransform(47.9646, 102.1895, 2.0813, 2.0813);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#575756").s().p("AhjBkIAAjHIDHAAIAADHgAhFBGICLAAIAAiLIiLAAg");
        this.shape_20.setTransform(47.9125, 102.1895, 2.0813, 2.0813);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#C29F6E").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_21.setTransform(47.9125, 102.1895, 2.0813, 2.0813);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_21
            }, {
                t: this.shape_20
            }, {
                t: this.shape_19
            }, {
                t: this.shape_18
            }, {
                t: this.shape_17
            }, {
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(40));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 169.9, 214.9);


    (lib.Símbolo2 = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Capa_1
        this.instance = new lib.Símbolo3();
        this.instance.setTransform(90.55, 105.4, 1, 1, 0, 0, 0, 90.5, 105.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            x: 1018.55
        }, 119).wait(1).to({
            skewY: 180,
            x: 1018.65
        }, 0).to({
            x: 85.85
        }, 119).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.1, 0, 1109.1000000000001, 213.6);


    (lib.sdfasfd = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_47 = function() {
            this.stop();

            this.play_again.removeAllEventListeners();

            this.play_again.on("click", onReplay.bind(this));


            function onReplay(e) {
                this.parent.gotoAndStop(1);

            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

        // camion
        this.instance = new lib.Símbolo2();
        this.instance.setTransform(-462.65, 122.1, 1, 1, 0, 0, 0, 90.6, 105.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

        // muy bien
        this.instance_1 = new lib.welldone();
        this.instance_1.setTransform(0, 0, 1.6525, 1.6525);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            scaleX: 1,
            scaleY: 1
        }, 20).to({
            alpha: 0
        }, 8).to({
            _off: true
        }, 1).wait(19));

        // otra vez
        this.play_again = new lib.playagainbtn();
        this.play_again.name = "play_again";
        this.play_again.setTransform(271.05, 22.75, 1, 1, 0, 0, 0, 64, 64);
        this.play_again._off = true;
        new cjs.ButtonHelper(this.play_again, 0, 1, 2, false, new lib.playagainbtn(), 3);

        this.timeline.addTween(cjs.Tween.get(this.play_again).wait(47).to({
            _off: false
        }, 0).wait(1));

        // Capa_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgoBFIBJiOIAIAFIhICOg");
        this.shape.setTransform(-472.6463, -90.5508, 1.5612, 1.5612, 0, 0, 180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgwBGIBZiRIAIAFIhYCSg");
        this.shape_1.setTransform(-455.7075, -86.6869, 1.5612, 1.5612, 0, 0, 180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AgwBGIBYiRIAJAFIhZCSg");
        this.shape_2.setTransform(-437.5196, -82.5887, 1.5612, 1.5612, 0, 0, 180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgwBHIBYiSIAJAFIhZCSg");
        this.shape_3.setTransform(-419.3318, -78.4906, 1.5612, 1.5612, 0, 0, 180);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AgwBHIBZiSIAIAFIhYCSg");
        this.shape_4.setTransform(-401.1439, -74.3535, 1.5612, 1.5612, 0, 0, 180);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AgwBHIBYiSIAJAFIhZCSg");
        this.shape_5.setTransform(-382.9561, -70.2554, 1.5612, 1.5612, 0, 0, 180);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgSg6IAKgCIAaB3IgKACg");
        this.shape_6.setTransform(-464.8404, -88.7554, 1.5612, 1.5612, 0, 0, 180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_7.setTransform(-446.6526, -84.6573, 1.5612, 1.5612, 0, 0, 180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AgSg6IAKgCIAbB3IgLACg");
        this.shape_8.setTransform(-428.4647, -80.5202, 1.5612, 1.5612, 0, 0, 180);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgKACg");
        this.shape_9.setTransform(-410.2769, -76.422, 1.5612, 1.5612, 0, 0, 180);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_10.setTransform(-392.05, -72.3239, 1.5612, 1.5612, 0, 0, 180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_11.setTransform(-373.8622, -68.1868, 1.5612, 1.5612, 0, 0, 180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AloAOIK0icIAdCCIq0CbgAlcAVIAZBvIKgiYIgZhug");
        this.shape_12.setTransform(-427.1767, -80.286, 1.5612, 1.5612, 0, 0, 180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgoBFIBIiOIAJAFIhICOg");
        this.shape_13.setTransform(-365.0024, -66.1182, 1.5612, 1.5612, 0, 0, 180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#FFFFFF").s().p("AgwBHIBYiSIAJAGIhZCRg");
        this.shape_14.setTransform(-346.7365, -61.942, 1.5612, 1.5612, 0, 0, 180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#FFFFFF").s().p("AgwBHIBZiSIAIAFIhYCSg");
        this.shape_15.setTransform(-328.5487, -57.8049, 1.5612, 1.5612, 0, 0, 180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#FFFFFF").s().p("AgwBGIBYiRIAJAFIhZCSg");
        this.shape_16.setTransform(-310.3609, -53.6677, 1.5612, 1.5612, 0, 0, 180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#FFFFFF").s().p("AgwBGIBYiRIAJAFIhZCSg");
        this.shape_17.setTransform(-292.173, -49.5696, 1.5612, 1.5612, 0, 0, 180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#FFFFFF").s().p("AgwBHIBZiSIAIAFIhYCSg");
        this.shape_18.setTransform(-273.9852, -45.4715, 1.5612, 1.5612, 0, 0, 180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAbB3IgKACg");
        this.shape_19.setTransform(-355.8695, -63.9716, 1.5612, 1.5612, 0, 0, 180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_20.setTransform(-337.6426, -59.8735, 1.5612, 1.5612, 0, 0, 180);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_21.setTransform(-319.4548, -55.7363, 1.5612, 1.5612, 0, 0, 180);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_22.setTransform(-301.267, -51.6382, 1.5612, 1.5612, 0, 0, 180);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#FFFFFF").s().p("AgSg6IALgCIAaB3IgKACg");
        this.shape_23.setTransform(-283.0401, -47.501, 1.5612, 1.5612, 0, 0, 180);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#FFFFFF").s().p("AgSg6IAKgCIAaB3IgJACg");
        this.shape_24.setTransform(-264.8522, -43.4029, 1.5612, 1.5612, 0, 0, 180);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#FFFFFF").s().p("AlDACILAifIAdCCIs0C5gAk9ALIhJCFIMUizIgZhug");
        this.shape_25.setTransform(-312.8588, -53.8239, 1.5612, 1.5612, 0, 0, 180);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#FFFFFF").s().p("AgtAAIBWgUIAEAVIhUAUg");
        this.shape_26.setTransform(-264.8634, -31.2026, 1.5617, 1.5617, 0, 0, 180);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#575756").s().p("AgGBAQgDgDAAgEIAAhxQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABxQAAAEgDADQgDADgEAAQgDAAgDgDg");
        this.shape_27.setTransform(-265.3319, 20.7627, 1.5617, 1.5617, 0, 0, 180);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#575756").s().p("AhbhNIAOgOICpCpIgOAOg");
        this.shape_28.setTransform(-265.3278, 42.9606, 1.5615, 1.5615, 0, 0, 180);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#575756").s().p("AhbBOICpipIAOAOIipCpg");
        this.shape_29.setTransform(-265.3278, 42.9606, 1.5615, 1.5615, 0, 0, 180);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#575756").s().p("AheBfIAAi9IC9AAIAAC9gAhKBLICVAAIAAiVIiVAAg");
        this.shape_30.setTransform(-265.3278, 42.9606, 1.5615, 1.5615, 0, 0, 180);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#C29F6E").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_31.setTransform(-265.3278, 42.9606, 1.5615, 1.5615, 0, 0, 180);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#FFFFFF").s().p("AgGAUQgIAAAAgFIgGgfQAAgDAOAAIALAAQAQAAAAADIgIAfQAAAFgIAAg");
        this.shape_32.setTransform(-265.6121, -5.3767, 1.562, 1.562, 0, 0, 180);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#FFFFFF").s().p("AgEBTIAAilIAJAAIAAClg");
        this.shape_33.setTransform(-265.7292, -16.8573, 1.562, 1.562, 0, 0, 180);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#FFFFFF").s().p("AgdAzQgNgJgFgQQgBgEACgDQACgEADgBQAEgCAEACQAEACABAEQAEALALAGQALAGALgEQALgEAGgLQAFgLgEgMQgGgSgUgBIgIgBIAAgeQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAMQAaAIAIAZQAHASgKATQgJASgTAHQgJACgGAAQgQAAgNgJg");
        this.shape_34.setTransform(-265.3237, 5.8697, 1.562, 1.562, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_34
            }, {
                t: this.shape_33
            }, {
                t: this.shape_32
            }, {
                t: this.shape_31
            }, {
                t: this.shape_30
            }, {
                t: this.shape_29
            }, {
                t: this.shape_28
            }, {
                t: this.shape_27
            }, {
                t: this.shape_26
            }, {
                t: this.shape_25
            }, {
                t: this.shape_24
            }, {
                t: this.shape_23
            }, {
                t: this.shape_22
            }, {
                t: this.shape_21
            }, {
                t: this.shape_20
            }, {
                t: this.shape_19
            }, {
                t: this.shape_18
            }, {
                t: this.shape_17
            }, {
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(48));

        // Capa_5
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#CCCCCC").s().p("Eg5EADoIAAnPMByJAAAIAAHPg");
        this.shape_35.setTransform(-3.575, 239.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(48));

        // Capa_4
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#88AA1D").s().p("Eg4UAacMAAAg03MBwpAAAMAAAA03g");
        this.shape_36.setTransform(1.2, 91.675);

        this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(48));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-553.2, -102.6, 914.9000000000001, 365.1);


    // stage content:
    (lib._13laberintocamion = function(mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        this.actionFrames = [0, 1, 2, 3, 4];
        // timeline functions:
        this.frame_0 = function() {
            this.stop();


            createjs.Touch.enable(stage, true);

            this.play_btn.removeAllEventListeners();
            this.play_btn.on("click", onPlay.bind(this));


            function onPlay(e) {
                this.gotoAndStop(1);
            }



            this.menu_btn.addEventListener("click", navega);

            function navega() {
                window.open("//www.freshteacher.software", "_parent");
            }
        }
        this.frame_1 = function() {
            this.stop();
            playSound("silbato22");


            var player = new Player(this.personaje, this.pared, this.puerta, onEndLevel.bind(this), [this.o1, this.o2, this.o3, this.o4]);

            this.on("tick", update.bind(this));

            function update(e) {
                player.update();
            }

            function onEndLevel(e) {
                player.clear();
                this.removeAllEventListeners();
                this.gotoAndStop(2);
                playSound("pop2");
            }
        }
        this.frame_2 = function() {
            this.stop();



            var player = new Player(this.personaje, this.pared2, this.puerta2, onEndLevel.bind(this), [this.o1_b, this.o2_b, this.o3_b]);

            this.on("tick", update.bind(this));

            function update(e) {
                player.update();
            }

            function onEndLevel(e) {
                player.clear();
                this.removeAllEventListeners();
                this.gotoAndStop(3);
                playSound("pop2");
            }
        }
        this.frame_3 = function() {
            this.stop();

            var player = new Player(this.personaje, this.pared3, this.puerta3, onEndLevel.bind(this), [this.o1_c, this.o2_c, this.o3_c, this.o4_c]);

            this.on("tick", update.bind(this));

            function update(e) {
                player.update();
            }

            function onEndLevel(e) {

                player.clear();
                this.removeAllEventListeners();
                this.personaje.visible = false;


                // hidden buttons virtual
                if (this["btn_up"]) {
                    this.btn_up.visible = false;
                }
                if (this["btn_down"]) {
                    this.btn_down.visible = false;
                }
                if (this["btn_left"]) {
                    this.btn_left.visible = false;
                }
                if (this["btn_right"]) {
                    this.btn_right.visible = false;
                }


                this.gotoAndStop(4);




            }
        }
        this.frame_4 = function() {
            playSound("aplauso");
            this.stop();


            this.removeAllEventListeners();

            /*
            this.on("tick" , onRotation.bind(this));
		
		
            function onRotation(e) 
            {
            	this.puerta4.rotation -= 5;
            	this.puerta5.rotation += 5;
            	this.puerta6.rotation -= 5;
            	this.puerta7.rotation += 5;
            }
            */
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

        // virtual deco
        this.btn_right = new lib.botonvirtual();
        this.btn_right.name = "btn_right";
        this.btn_right.setTransform(156.7, 325.55, 1, 1, 90);
        this.btn_right.alpha = 0.8008;
        new cjs.ButtonHelper(this.btn_right, 0, 1, 2, false, new lib.botonvirtual(), 3);

        this.btn_left = new lib.botonvirtual();
        this.btn_left.name = "btn_left";
        this.btn_left.setTransform(39.45, 325.75, 1, 1, -90);
        this.btn_left.alpha = 0.8008;
        new cjs.ButtonHelper(this.btn_left, 0, 1, 2, false, new lib.botonvirtual(), 3);

        this.btn_down = new lib.botonvirtual();
        this.btn_down.name = "btn_down";
        this.btn_down.setTransform(98.45, 325.75, 1, 1, 180);
        this.btn_down.alpha = 0.8008;
        new cjs.ButtonHelper(this.btn_down, 0, 1, 2, false, new lib.botonvirtual(), 3);

        this.btn_up = new lib.botonvirtual();
        this.btn_up.name = "btn_up";
        this.btn_up.setTransform(98.45, 268.3);
        this.btn_up.alpha = 0.8008;
        new cjs.ButtonHelper(this.btn_up, 0, 1, 2, false, new lib.botonvirtual(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.btn_up
            }, {
                t: this.btn_down
            }, {
                t: this.btn_left
            }, {
                t: this.btn_right
            }]
        }, 1).wait(4));

        // fondo de los virtuales
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#009999").s().p("AuuF3IgFAAIAArtIAFAAIccAAQBGAAAABGIAAJhQAABGhGAAg");
        this.shape.setTransform(95.3, 329.475);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#009999").s().p("Ak+KOIgBgRIAAzEQAAhGBGAAIHzAAQBGAAAABGIAATEIgBARg");
        this.shape_1.setTransform(98.05, 300.825);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }, 1).to({
            state: []
        }, 3).wait(1));

        // marco
        this.shape_2 = new cjs.Shape();
        // this.shape_2.graphics.f("#FFFFFF").s().p("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");
        this.shape_2.setTransform(379.95, 357.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFCC00").s().p("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");
        this.shape_3.setTransform(393.975, 20.8);

        this.menu_btn = new lib.btn_menu();
        this.menu_btn.name = "menu_btn";
        this.menu_btn.setTransform(52.05, 26.45, 1, 1, 0, 0, 0, 41.4, 17.4);
        new cjs.ButtonHelper(this.menu_btn, 0, 1, 2, false, new lib.btn_menu(), 3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#009999").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5VgEg2ZAYAQAiBvCtAAMBmKAAAIACgwIA9AAIgHglIAnAFQAvAEAogJQB9geABiYMAAAgodIg3gDIAAg0IgrAFIAIghQADgqgKgjQgjhuitAAMhmJAAAIgDAwIg8AAIAHAlQg+gPhAAPQh9AegBCYMAAAAocIA4AEIAAA1IAqgGQgSA2ARA3g");
        this.shape_4.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_4
            }, {
                t: this.menu_btn
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).wait(5));

        // intro jugar
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AhIBmIAJgnIABgCIB9AAIAAACIAKAngAgzAVIAKgoIBTAAIAKAogAgeg8IALgoIAnAAIALAog");
        this.shape_5.setTransform(185.6949, 316.8959, 1.583, 1.5854);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#F29100").s().p("AhvCOIAAgfIAkAAIADgJICSAAIACAJIAkAAIAAAfgAg+A9IALgoIBnAAIALAogAgpgTIAFgPIABgHIAEgOIABgFIA9AAIALApgAgThkIAHgeQADgMAJAAQAKAAAEAMIAHAeg");
        this.shape_6.setTransform(185.6554, 316.8959, 1.583, 1.5854);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AhIBmIAJgnIABgCIB9AAIAAACIAKAngAgzAVIAKgoIBTAAIAKAogAgeg8IALgoIAnAAIALAog");
        this.shape_7.setTransform(544.3949, 316.8959, 1.583, 1.5854);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#F29100").s().p("AhvCOIAAgfIAkAAIADgJICSAAIACAJIAkAAIAAAfgAg+A9IALgoIBnAAIALAogAgpgTIAFgPIABgHIAEgOIABgFIA9AAIALApgAgThkIAHgeQADgMAJAAQAKAAAEAMIAHAeg");
        this.shape_8.setTransform(544.3554, 316.8959, 1.583, 1.5854);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AX9BKQgEgEAAgIQAAgGAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgGAAQgHAAgFgEgAV8BFQgLgGgGgKQgHgKAAgJQABgGAEgEQAEgEAFAAQAFAAAEADQADADACAGQADAIADAEQADAFAHADQAGADAJAAQAOAAAJgGQAIgGAAgKQAAgHgEgFQgFgEgHgDIgUgFQgQgEgLgFQgKgEgHgJQgGgJAAgNQgBgMAIgKQAGgJANgGQANgFARAAQAOAAAKAEQAKADAHAGQAGAFAEAHQACAGAAAGQAAAFgDAFQgEAEgFAAQgGAAgCgCQgEgDgDgGQgEgJgFgEQgGgFgNAAQgMAAgHAFQgHAFAAAIQAAAEACADQACAEAFACIAJAEIAPAEIAWAGQALAEAHAFQAHAEAEAIQAFAIAAALQAAAOgIALQgHAKgNAHQgOAGgTAAQgWAAgOgJgASkBNIgGgEIgFgGIg+heIAABXQAAAJgEAEQgEAFgHAAQgGAAgEgFQgEgEABgJIAAhzQgBgHACgEQACgFAFgDQAEgDAFAAQAFAAADACIAEADIAFAGIBABfIAAhYQgBgJAEgEQAEgFAGAAQAGAAAEAFQAFAEAAAJIAAB1QAAAUgRAAIgIgBgAO7BIQgOgGgJgKQgKgKgEgPQgFgOAAgRQAAgRAFgOQAFgPAKgKQAJgKANgFQAOgGARAAQAYAAAQAKQARAJAJASQAJARAAAXQAAARgGAPQgEAOgJAKQgKALgOAFQgNAGgSAAQgSAAgOgGgAPKgxQgJADgFAHQgGAGgDALQgDAKAAAMQAAAMADALQAEAKAFAHQAGAHAIADQAIAEAJAAQALAAAKgGQAKgGAGgMQAFgNAAgRQABgQgGgMQgFgMgKgGQgKgHgNAAQgJAAgHAEgAMpBMQgJgDgJgEQgIgFgGgIQgGgHgEgJQgFgJgBgKQgDgKAAgLQAAgRAGgOQAFgPAKgKQAKgKANgFQANgGAPAAQASAAAPAHQAOAIAHALQAIAKAAAKQAAAFgDAEQgEAEgFAAQgGAAgDgDQgDgDgEgGQgFgLgIgGQgJgGgMAAQgSAAgMAPQgLAOABAZQAAASAEALQAFAMAKAGQAJAGALAAQANAAAKgHQAIgGAFgNQACgGADgEQADgEAHAAQAFAAAEAEQADAEAAAGQABAHgEAIQgDAJgIAIQgHAIgNAFQgLAFgQAAQgMAAgKgCgAIBBJQgEgFAAgJIAAgyIhCAAIAAAyQAAAKgEAEQgFAFgGAAQgHAAgFgFQgDgFAAgJIAAh1QAAgKADgEQAFgFAHAAQAGAAAFAFQAEAEAAAKIAAArIBCAAIAAgrQAAgKAEgEQAEgFAHAAQAHAAAEAFQAEAEAAAKIAAB1QAAAKgEAEQgEAFgHAAQgHAAgEgFgAFABJQgFgEAAgKIAAhsIgiAAQgHAAgEgDQgEgEABgGQAAgFADgEQAEgDAHAAIBhAAQAJAAADADQAFAEAAAFQAAAGgFAEQgDADgJAAIghAAIAABsQABAKgFAEQgEAFgGAAQgIAAgDgFgACzBLIgGgGIgTgfQgGgLgFgGQgGgGgEgCQgGgCgIAAIgLAAIAAAwQAAAKgEAEQgEAFgHAAQgIAAgEgFQgDgFAAgJIAAhzQgBgJAFgFQAEgEALAAIBCABQAIABAGACQAHADAFAGQAGAFACAIQADAHAAAIQAAARgJAKQgKAJgTAEQAIAFAIAIQAHAIAFAKIAKARQADAIAAADQAAADgCADIgFAEQgEACgEAAQgFAAgEgDgABsgKIAbAAQALAAAIgCQAHgCAEgEQAFgFAAgIQgBgGgDgFQgDgFgFgCQgGgCgQAAIgcAAgAg1BIQgOgGgIgKQgKgKgFgPQgEgOgBgRQABgRAEgOQAFgPAKgKQAKgKANgFQANgGASAAQAWAAARAKQARAJAIASQAJARAAAXQAAARgFAPQgFAOgJAKQgJALgOAFQgNAGgRAAQgTAAgOgGgAgmgxQgIADgGAHQgFAGgEALQgCAKAAAMQAAAMACALQAEAKAGAHQAFAHAJADQAHAEAJAAQALAAAKgGQAKgGAFgMQAGgNAAgRQAAgQgFgMQgGgMgKgGQgJgHgMAAQgJAAgIAEgAjSBJQgEgEAAgKIAAhzQAAgGACgEQABgEAFgCQAEgCAGAAIBIAAQAIAAADADQADADABAFQgBAGgDADQgDADgIAAIg7AAIAAAnIAxAAQAIAAADADQAEADAAAFQAAAEgEAEQgDADgIAAIgxAAIAAAxQAAAKgFAEQgEAFgHAAQgHAAgEgFgAlnBJQgFgEABgKIAAhsIgiAAQgHAAgEgDQgEgEAAgGQAAgFAEgEQAEgDAHAAIBhAAQAIAAAEADQAEAEAAAFQAAAGgEAEQgEADgIAAIghAAIAABsQAAAKgFAEQgEAFgGAAQgHAAgEgFgAoJBKQgNgEgHgHQgJgIgDgNQgEgMAAgRIAAhHQAAgKAFgEQAEgFAGAAQAIAAADAFQAEAEAAAKIAABJQABAMADAJQACAIAIAFQAGAFANAAQASAAAIgKQAHgJAAgUIAAhJQAAgKAEgEQAFgFAGAAQAHAAAFAFQADAEAAAKIAABHQAAASgCAMQgEALgKAJQgIAIgLADQgLAEgPAAQgRAAgMgEgAqxBIQgNgGgJgKQgKgKgFgPQgEgOAAgRQAAgRAEgOQAGgPAJgKQAJgKAOgFQAOgGARAAQAXAAARAKQAQAJAJASQAJARAAAXQAAARgFAPQgFAOgJAKQgKALgNAFQgOAGgSAAQgRAAgPgGgAqigxQgIADgFAHQgGAGgDALQgEAKAAAMQAAAMAEALQADAKAGAHQAGAHAHADQAIAEAJAAQAMAAAJgGQAKgGAGgMQAGgNAAgRQAAgQgGgMQgEgMgLgGQgJgHgNAAQgKAAgHAEgAtDBJQgEgFAAgJIAAgyIhCAAIAAAyQAAAKgEAEQgFAFgGAAQgHAAgFgFQgEgFAAgJIAAh1QAAgKAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAKIAAArIBCAAIAAgrQAAgKAEgEQAEgFAHAAQAHAAAEAFQAEAEAAAKIAAB1QAAAKgEAEQgEAFgHAAQgHAAgEgFgAwVBMQgLgDgHgEQgJgFgGgIQgGgHgEgJQgFgJgCgKQgCgKAAgLQABgRAFgOQAFgPAKgKQAKgKANgFQANgGAPAAQASAAAPAHQAOAIAHALQAIAKAAAKQAAAFgDAEQgEAEgFAAQgGAAgDgDQgDgDgDgGQgHgLgIgGQgIgGgMAAQgSAAgLAPQgLAOAAAZQAAASAEALQAFAMAKAGQAIAGAMAAQAOAAAIgHQAKgGAEgNQACgGADgEQADgEAHAAQAFAAAEAEQADAEAAAGQAAAHgDAIQgEAJgHAIQgIAIgMAFQgLAFgQAAQgMAAgJgCgAyaBJQgFgEABgKIAAhsIgiAAQgHAAgEgDQgEgEAAgGQAAgFAEgEQAEgDAHAAIBhAAQAIAAAEADQAEAEAAAFQAAAGgEAEQgEADgIAAIghAAIAABsQAAAKgFAEQgEAFgGAAQgHAAgEgFgAzaBNIgDgEIgFgHIgKgbIg9AAIgIAUQgDALgDAEQgEAEgHAAQgFAAgFgEQgEgFAAgFIABgGIAuh0IAFgKQADgEAEgCQAEgDAHAAQAFAAAFADIAHAGIAEAIIAsBsQAFALAAAFQAAAFgEAFQgFAEgGAAIgHgBgAz0AQIgXg9IgWA9IAtAAgA2VBKQgFgDgBgEIgdhpIgdBoQgCAFgEADQgEAEgHAAQgGAAgEgCQgDgCgDgEIgDgJIgchvQgCgIAAgFQAAgGAEgEQAFgEAFAAQAIAAAEAGQADAFABAKIAUBXIAbhgQACgFAEgDQAFgEAHAAQAIAAAEAEQAEAEACAEIAaBgIAXhiQABgEADgDQADgDAGAAQAHAAAEAEQAEAEAAAGQAAAEgCAJIgeB0QgCAFgDADQgFAEgHAAQgHAAgEgEgATwBLQgKAAgEgEQgFgFAAgJIAAhxQABgGACgEQACgEADgCQAFgCAGAAIBQAAQAIAAAEADQADADAAAFQAAAGgDADQgEADgIAAIhEAAIAAAlIA/AAQAHAAADADQAEADAAAGQAAAEgEADQgDADgHAAIg/AAIAAArIBHAAQAHAAAEADQAEAEgBAFQABAGgEADQgEADgHAAgAJPBLQgLAAgEgEQgEgFAAgJIAAhxQAAgGACgEQACgEAEgCQAEgCAHAAIBQAAQAIAAADADQAEADgBAFQABAGgEADQgDADgIAAIhFAAIAAAlIA/AAQAHAAAEADQAEADAAAGQAAAEgEADQgEADgHAAIg/AAIAAArIBIAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAgAYBAYQgDgEgBgKIgEhFQAAgIAEgFQAFgFAHAAQAJAAADAGQADAGAAAMIgFA/QgBAJgCAFQgCAFgGAAQgFAAgCgFg");
        this.shape_9.setTransform(365, 315.575);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("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QAAgIgFgEQgEgFgHgCIgUgFQgQgEgLgFQgLgGgGgIQgHgJAAgNQAAgNAHgJQAHgJANgGQANgFARAAQAOAAAKADQAKAEAHAFQAGAGADAHQADAGAAAFQAAAGgDAEQgEAFgGAAQgFAAgDgDQgDgCgDgHQgEgIgGgFQgFgEgNgBQgMAAgHAGQgHAFAAAHQAAAFACADQACAEAFACIAJADIAOAFIAXAGQAKADAIAFQAHAFAEAJQAEAHAAAMQAAAOgHALQgHAKgOAHQgNAFgTAAQgWABgOgJgAwQjRQgMgEgIgHQgIgJgEgMQgEgMAAgRIAAhJQAAgJAFgEQAEgFAGAAQAIAAAEAFQAEAEAAAJIAABKQAAANADAJQADAIAHAEQAHAFANABQASAAAHgKQAHgKAAgTIAAhLQAAgJAFgEQAEgFAHAAQAGAAAFAFQAEAEAAAJIAABJQAAASgDALQgEAMgJAJQgJAIgLADQgKAEgPgBQgRABgNgEgAgWjQQgKAAgEgEQgFgFAAgKIAAhxQAAgGACgFQACgDAEgCQAEgDAHAAIBPAAQAIAAADAEQAEADAAAFQAAAGgEADQgDADgIAAIhDAAIAAAlIA+AAQAHAAADADQAEADAAAFQAAAGgEADQgDADgHAAIg+AAIAAArIBGAAQAHAAAEADQADADAAAGQAAAFgDAEQgEADgHAAg");
        this.shape_10.setTransform(365.025, 229.45);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#BC2F27").s().p("AgGAIQgDgDAAgFQAAgEADgDQADgDADgBQAEABADADQADAEAAADQAAAFgDADQgDAEgEAAQgEAAgCgEg");
        this.shape_11.setTransform(145.8242, 147.6924, 4.2743, 3.8275);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFE800").s().p("AgWAaQgLgMABgOQAAgPAKgKQALgLAMABQAOAAAJALQAJAKAAAPQAAAPgJAKQgLAKgNAAQgNAAgJgKgAgGgHQgDADAAAEQAAAFADADQACADAEAAQAEAAADgDQAEgDAAgFQAAgEgDgDQgDgDgFgBQgDAAgDAEg");
        this.shape_12.setTransform(145.6057, 147.8678, 4.2743, 3.8275);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#CCCCCC").s().p("AgFBGIgBgHIgIgCIgEAGIgLgFIACgHIgIgFIgGAEIgIgJIAFgGIgFgHIgGABIgGgMIAGgEIgBgJIgHgBIAAgDIAAgJIAHgCIABgIIgGgFIAGgLIAFABIAGgHIgFgHIAIgJIAGAEIAIgFIgCgHIAKgFIADAGIAKgCIABgHIALAAIAAAHIAKACIADgGIAKAFIgBAHIAIAFIAEgEQAGAEADAFIgEAGIAFAIIAHgCIAEAMIgFADIABAKIAHABIAAAKIAAACIgHABIgBAKIAFADQgCAIgCAEIgGgCIgFAJIADAGIgHAIIgGgEIgHAGIABAHIgKAEIgEgFIgIACIgCAGIgHABIgEAAgAgWgZQgKAKgBAPQAAAOAKAMQAKAKANAAQANAAALgKQAJgKAAgPQAAgPgJgKQgJgLgPAAIgBAAQgLAAgKAKg");
        this.shape_13.setTransform(145.7174, 147.8598, 4.2743, 3.8275);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#BC2F27").s().p("AgGAIQgEgDAAgFQABgEADgDQADgDAEgBQAEABACADQAEAEAAADQgBAFgDADQgDAEgEAAQgDAAgDgEg");
        this.shape_14.setTransform(223.2963, 147.6924, 4.2743, 3.8275);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#FFE800").s().p("AgYAaQgIgMAAgOQAAgPAKgKQAKgLAMABQAOAAAKALQAJAKAAAPQAAAPgKAKQgKAKgNAAQgOAAgKgKgAgHgHQgDADAAAEQAAAFADADQADADAEAAQAEAAADgDQADgDABgFQAAgEgEgDQgDgDgEgBQgDAAgEAEg");
        this.shape_15.setTransform(223.302, 147.8678, 4.2743, 3.8275);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#CCCCCC").s().p("AgEBGIgCgHIgIgCIgDAGIgLgFIABgHIgHgFIgFAEQgFgEgEgFIAEgGIgFgHIgGABQgDgGgCgGIAGgEIgCgJIgHgBIAAgEQgBgEABgEIAGgCIADgIIgHgFIAFgLIAGABIAFgHIgDgHIAIgJIAFAEIAHgFIgBgHIALgFIADAGIAJgCIABgHIALAAIABAHIAIACIADgGQAHACAEADIgBAHIAIAFIAFgEQAFAEADAFIgDAGIAFAIIAGgCIAFAMIgGADIABAKIAHABIAAAMIgGABIgCAKIAGADIgFAMIgGgCIgFAJIAEAGIgIAIIgFgEIgIAGIABAHQgFADgFABIgDgFIgKACIAAAGIgIABIgDAAgAgVgZQgLAKAAAPQAAAOAJAMQAJAKAOAAQAOAAAJgKQAKgKAAgPQABgPgJgKQgKgLgOAAIgCAAQgMAAgIAKg");
        this.shape_16.setTransform(223.2429, 147.8598, 4.2743, 3.8275);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#EDB44F").s().p("Ag8AlIAKhJIBuAAIAABJg");
        this.shape_17.setTransform(154.4751, 102.6218, 4.275, 3.8279);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#BEDFEA").s().p("AAAAJQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQACgEAFAAIABABIAAABQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAIgCACIgCACIgBABIgBgBgAgGAEQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQACgEAEgDQADgDAEACIACABIAAACQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgEAAIAAAAIgBAAIgBACIgBABIgBAAIAAABQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIgBAAIgBAAg");
        this.shape_18.setTransform(196.2844, 79.8339, 4.275, 3.8279);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#86C5D3").s().p("AgpgnIAzAAIAABNIgzACgAgXgNQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAIADABIABgBIACgCIACgCIAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAgBIgBgBIgBgBQgEAAgEAEgAgXgZQgEADgCAFQAAAAAAABQAAABAAAAQAAABAAAAQAAAAABABIABAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABgBIABAAIAAgBIADgDIABAAIAAAAIADAAQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAgBIAAgCIgBgBIgDgBQgDAAgCACgAASAlIAAhMIAHAAIARBMg");
        this.shape_19.setTransform(205.7749, 86.736, 4.275, 3.8279);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#FFE800").s().p("AhvBhIgDABIAAAJIgEAAIAAhVIB4AAIAJAAIAAh/IAugBIAdABQADgBADAEIADAJIAYBkIAAAEIAAAnIgEADIgFgDIAAA5IjdAAgAhwBTIABABIAAgEIgBADgAAUgPIAzgCIAAhOIgzAAgABPgSIAYAAIgRhNIgHAAg");
        this.shape_20.setTransform(179.5906, 108.1722, 4.275, 3.8279);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#FFE800").s().p("Ah7B8IAAj3ID3AAIAAD3g");
        this.shape_21.setTransform(523.6274, 125.2, 2.9048, 2.8915);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#CC3300").s().p("AgpCpIAAjJIg1AAIBeiIIBfCIIg1AAIAADJg");
        this.shape_22.setTransform(365, 83.025);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#CC3300").s().p("AAhAqIjJAAIAAhSIDJAAIAAg2ICIBeIiIBfg");
        this.shape_23.setTransform(430.675, 146.7);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#CC3300").s().p("AheAhIA2AAIAAjJIBSAAIAADJIA1AAIhfCIg");
        this.shape_24.setTransform(365.1, 146.675);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#CC3300").s().p("AioAAICIheIAAA2IDJAAIAABSIjJAAIAAA1g");
        this.shape_25.setTransform(297.925, 146.7);

        this.instance = new lib.asfasf();
        this.instance.setTransform(300.1, 146.8, 0.7778, 0.778, 0, 0, 0, 36, 36.1);

        this.instance_1 = new lib.asfasf();
        this.instance_1.setTransform(430, 146.8, 0.7778, 0.778, 0, 0, 0, 36.1, 36.1);

        this.instance_2 = new lib.asfasf();
        this.instance_2.setTransform(365.05, 83, 0.7778, 0.778, 0, 0, 0, 36.2, 36);

        this.instance_3 = new lib.asfasf();
        this.instance_3.setTransform(365.05, 146.8, 0.7778, 0.778, 0, 0, 0, 36.2, 36.1);

        this.play_btn = new lib.play_btn();
        this.play_btn.name = "play_btn";
        this.play_btn.setTransform(644.9, 264.55, 1, 1.0002, 0, 0, 0, 59.1, 59);
        new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#666666").s().p("Eg4eAUNMAAAgoZMBw9AAAMAAAAoZg");
        this.shape_26.setTransform(368.525, 148.725);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#3C3C3C").s().p("Eg5BAF3IAArtIBGAAMBw9AAAIAALtg");
        this.shape_27.setTransform(365, 315.55);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_27
            }, {
                t: this.shape_26
            }, {
                t: this.play_btn
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }, {
                t: this.shape_25
            }, {
                t: this.shape_24
            }, {
                t: this.shape_23
            }, {
                t: this.shape_22
            }, {
                t: this.shape_21
            }, {
                t: this.shape_20
            }, {
                t: this.shape_19
            }, {
                t: this.shape_18
            }, {
                t: this.shape_17
            }, {
                t: this.shape_16
            }, {
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }]
        }).to({
            state: []
        }, 1).wait(4));

        // personaje
        this.personaje = new lib.jugador();
        this.personaje.name = "personaje";
        this.personaje.setTransform(28.45, 90.6, 1, 1.0004);
        this.personaje._off = true;

        this.timeline.addTween(cjs.Tween.get(this.personaje).wait(1).to({
            _off: false
        }, 0).wait(1).to({
            x: 24.55,
            y: 93.05
        }, 0).wait(1).to({
            x: 26.1,
            y: 94.1
        }, 0).to({
            _off: true
        }, 1).wait(1));

        // obstaculos
        this.o4 = new lib.obstaculo();
        this.o4.name = "o4";
        this.o4.setTransform(469.95, 132.35, 0.9982, 1, 0, 0, 0, 0, 0.1);

        this.o3 = new lib.obstaculo();
        this.o3.name = "o3";
        this.o3.setTransform(664.1, 230.1, 0.9982, 1, 0, 0, 0, 0.1, 0.1);

        this.o1 = new lib.obstaculo();
        this.o1.name = "o1";
        this.o1.setTransform(565.1, 73.7, 0.9959, 1, 0, 0, 0, 0.1, 0.1);

        this.o2 = new lib.obstaculo();
        this.o2.name = "o2";
        this.o2.setTransform(200.4, 227.9, 0.9982, 1, 0, 0, 0, 0.1, 0.1);

        this.o3_b = new lib.obstaculo();
        this.o3_b.name = "o3_b";
        this.o3_b.setTransform(665.65, 245.2);

        this.o2_b = new lib.obstaculo();
        this.o2_b.name = "o2_b";
        this.o2_b.setTransform(549.1, 75.15);

        this.o1_b = new lib.obstaculo();
        this.o1_b.name = "o1_b";
        this.o1_b.setTransform(258.35, 243.8, 0.9982, 1, 0, 0, 0, 0.1, 0.1);

        this.o3_c = new lib.obstaculo();
        this.o3_c.name = "o3_c";
        this.o3_c.setTransform(467.25, 233.6);

        this.o4_c = new lib.obstaculo();
        this.o4_c.name = "o4_c";
        this.o4_c.setTransform(398.35, 171.2);

        this.o2_c = new lib.obstaculo();
        this.o2_c.name = "o2_c";
        this.o2_c.setTransform(148.6, 132.7);

        this.o1_c = new lib.obstaculo();
        this.o1_c.name = "o1_c";
        this.o1_c.setTransform(315.1, 265.7);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.o2
            }, {
                t: this.o1
            }, {
                t: this.o3
            }, {
                t: this.o4
            }]
        }, 1).to({
            state: [{
                t: this.o1_b
            }, {
                t: this.o2_b
            }, {
                t: this.o3_b
            }]
        }, 1).to({
            state: [{
                t: this.o1_c
            }, {
                t: this.o2_c
            }, {
                t: this.o4_c
            }, {
                t: this.o3_c
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // puerta
        this.puerta = new lib.puerta();
        this.puerta.name = "puerta";
        this.puerta.setTransform(699.4, 96.55, 1, 0.9975, 0, 0, 0, 0.1, 0.1);

        this.puerta2 = new lib.puerta();
        this.puerta2.name = "puerta2";
        this.puerta2.setTransform(704.4, 98.65, 1, 0.9975, 0, 0, 0, 0.1, 0.1);

        this.puerta3 = new lib.puerta();
        this.puerta3.name = "puerta3";
        this.puerta3.setTransform(703.8, 289.2, 1, 0.9975, 0, 0, 0, 0.1, 0.1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.puerta
            }]
        }, 1).to({
            state: [{
                t: this.puerta2
            }]
        }, 1).to({
            state: [{
                t: this.puerta3
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // DECO
        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#575756").s().p("AggANIAAgZIBBAAIAAAZg");
        this.shape_28.setTransform(296.4683, 344.8305, 1.3386, 1.3386);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#575756").s().p("AgtAFQgFAAAAgFQAAgEAFAAIBbAAQAFAAAAAEQAAAFgFAAg");
        this.shape_29.setTransform(296.4349, 346.9389, 1.3386, 1.3386);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#575756").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgIgHgAgLgLQgGAFAAAGQAAAHAGAFQAFAFAGAAQAHAAAFgFQAGgFAAgHQAAgGgGgFQgFgFgHAAQgGAAgFAFg");
        this.shape_30.setTransform(296.5018, 308.42, 1.3386, 1.3386);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#EDB44F").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgHAAgHgGg");
        this.shape_31.setTransform(296.5018, 308.42, 1.3386, 1.3386);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#EA3323").s().p("AgRAOIAAgLIAkgQIAAAbg");
        this.shape_32.setTransform(296.3839, 344.9986, 1.3382, 1.3382);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#FFFFFF").s().p("AgRgEIAkgRIAAAbIgkARg");
        this.shape_33.setTransform(296.3839, 342.3557, 1.3382, 1.3382);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#FFFFFF").s().p("AgRgFIAkgRIAAAcIgkAQg");
        this.shape_34.setTransform(296.3839, 334.7952, 1.3382, 1.3382);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#FFFFFF").s().p("AgRgFIAkgRIAAAcIgkAQg");
        this.shape_35.setTransform(296.3839, 327.2346, 1.3382, 1.3382);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#FFFFFF").s().p("AgRgFIAkgQIAAAbIgkARg");
        this.shape_36.setTransform(296.3839, 319.6741, 1.3382, 1.3382);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#FFFFFF").s().p("AgRgJIAkAAIAAAEIgkAPg");
        this.shape_37.setTransform(296.3839, 313.6859, 1.3382, 1.3382);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#EA3323").s().p("AgRgFIAkgQIAAAbIgkARg");
        this.shape_38.setTransform(296.3839, 338.6089, 1.3382, 1.3382);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#EA3323").s().p("AgRgFIAkgRIAAAbIgkARg");
        this.shape_39.setTransform(296.3839, 331.0484, 1.3382, 1.3382);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#EA3323").s().p("AgRgEIAkgRIAAAbIgkARg");
        this.shape_40.setTransform(296.3839, 323.4209, 1.3382, 1.3382);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#EA3323").s().p("AgRgFIAkgRIAAAcIgkARg");
        this.shape_41.setTransform(296.3839, 315.8604, 1.3382, 1.3382);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#575756").s().p("AggAMIAAgYIBBAAIAAAYg");
        this.shape_42.setTransform(510.9157, 234.2938, 1.3386, 1.3386);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#575756").s().p("AgtAFQgFAAAAgFQAAgEAFAAIBbAAQAFAAAAAEQAAAFgFAAg");
        this.shape_43.setTransform(510.9157, 236.4355, 1.3386, 1.3386);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#575756").s().p("AgQARQgIgHAAgKQAAgJAIgHQAGgIAKAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgKAAgGgIgAgMgMQgEAGAAAGQAAAHAEAGQAGAEAGAAQAHAAAGgEQAEgGAAgHQAAgGgEgGQgGgEgHAAQgGAAgGAEg");
        this.shape_44.setTransform(511.0161, 197.8832, 1.3386, 1.3386);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#EDB44F").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
        this.shape_45.setTransform(511.0161, 197.8832, 1.3386, 1.3386);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#EA3323").s().p("AgSAOIAAgLIAlgQIAAAbg");
        this.shape_46.setTransform(510.8224, 234.5343, 1.3382, 1.3382);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#FFFFFF").s().p("AgSgFIAlgQIAAAbIglARg");
        this.shape_47.setTransform(510.8224, 231.8914, 1.3382, 1.3382);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#FFFFFF").s().p("AgSgFIAlgRIAAAcIglAQg");
        this.shape_48.setTransform(510.8224, 224.3309, 1.3382, 1.3382);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#FFFFFF").s().p("AgSgFIAlgRIAAAbIglARg");
        this.shape_49.setTransform(510.8224, 216.7703, 1.3382, 1.3382);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#FFFFFF").s().p("AgSgFIAlgQIAAAbIglARg");
        this.shape_50.setTransform(510.8224, 209.1429, 1.3382, 1.3382);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#FFFFFF").s().p("AgSgJIAlAAIAAADIglAQg");
        this.shape_51.setTransform(510.8224, 203.1881, 1.3382, 1.3382);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#EA3323").s().p("AgSgFIAlgQIAAAbIglAQg");
        this.shape_52.setTransform(510.8224, 228.1112, 1.3382, 1.3382);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#EA3323").s().p("AgSgFIAlgRIAAAcIglAQg");
        this.shape_53.setTransform(510.8224, 220.5172, 1.3382, 1.3382);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#EA3323").s().p("AgSgFIAlgQIAAAbIglARg");
        this.shape_54.setTransform(510.8224, 212.9566, 1.3382, 1.3382);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#EA3323").s().p("AgSgFIAlgRIAAAcIglAQg");
        this.shape_55.setTransform(510.8224, 205.3292, 1.3382, 1.3382);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#F7ECE0").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_56.setTransform(454.5549, 200.8403, 1.3391, 1.3391);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#F7ECE0").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_57.setTransform(444.8132, 204.3888, 1.3391, 1.3391);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#F7ECE0").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_58.setTransform(449.4999, 200.1707, 1.3391, 1.3391);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#F7ECE0").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_59.setTransform(450.9059, 196.1535, 1.3391, 1.3391);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#AE9875").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_60.setTransform(468.5816, 231.9066, 1.3391, 1.3391);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#AE9875").s().p("AgFAAQAAgEAFAAQAGAAAAAEQAAAFgGAAQgFAAAAgFg");
        this.shape_61.setTransform(482.2066, 233.5135, 1.3391, 1.3391);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#AE9875").s().p("AgEAAQAAgEAEgBQAFABAAAEQAAAGgFgBQgEABAAgGg");
        this.shape_62.setTransform(478.022, 234.953, 1.3391, 1.3391);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#AE9875").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_63.setTransform(477.3525, 229.0946, 1.3391, 1.3391);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#AE9875").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_64.setTransform(470.5232, 235.656, 1.3391, 1.3391);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#AE9875").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_65.setTransform(474.4735, 232.5761, 1.3391, 1.3391);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#ECECEC").s().p("AgjAhQgIAAgEgFQgGgFAAgIIAAgPQAAgYA1gIIAYAFQAZAKAFARIAAAPQAAAIgFAFQgFAFgIAAg");
        this.shape_66.setTransform(376.8891, 233.5135, 1.3391, 1.3391);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#B1B1B1").s().p("AgqAoQgJAAgGgHQgHgGAAgJIAAgSQAAgeBAgJIAdAHQAeAKAGAWIAAASQAAAJgGAGQgHAHgJAAg");
        this.shape_67.setTransform(353.8237, 232.4087, 1.3391, 1.3391);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#6F6F6E").s().p("AgzA5QgKAAgIgJQgIgJABgNIAAgaQAAgqBMgOIAiAJQAkAQAIAfIAAAaQAAANgIAJQgHAJgLAAg");
        this.shape_68.setTransform(368.5869, 230.0989, 1.3391, 1.3391);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#ECECEC").s().p("AgZAXQgFAAgEgEQgEgEAAgFIAAgKQAAgQAmgGIARAEQASAGAEAMIAAAKQgBAFgEAEQgDAEgGAAg");
        this.shape_69.setTransform(268.09, 138.8415, 1.3391, 1.3391);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#B1B1B1").s().p("AgqAoQgJAAgGgGQgHgGAAgKIAAgSQAAgdBAgKIAdAGQAeALAGAWIAAASQAAAKgGAGQgHAGgJAAg");
        this.shape_70.setTransform(276.7604, 136.5317, 1.3391, 1.3391);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#575756").s().p("AgqAoQgJAAgHgGQgGgGAAgKIAAgSQAAgdBAgKIAdAGQAeALAGAWIAAASQAAAKgHAGQgGAGgIAAg");
        this.shape_71.setTransform(261.3947, 136.5317, 1.3391, 1.3391);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#3C3C3B").s().p("AhgAGQgGAAAAgGQAAgFAGAAIDCAAQAFAAAAAFQAAAGgFAAg");
        this.shape_72.setTransform(552.2457, 235.7662, 1.3386, 1.3386);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#575756").s().p("AhgAFQgGAAAAgFQAAgEAGAAIDCAAQAFAAAAAEQAAAFgFAAg");
        this.shape_73.setTransform(552.2457, 237.2053, 1.3386, 1.3386);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#FFFF55").s().p("AgNANIAbgaIAAAQQAAAEgDAEQgDACgDAAg");
        this.shape_74.setTransform(565.6866, 229.282, 1.3382, 1.3382);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#000000").s().p("AgeAdIA9g5IAAAeIgcAbg");
        this.shape_75.setTransform(563.4452, 227.141, 1.3382, 1.3382);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#FFFF55").s().p("AgxAuIBehbQAFADAAAHIAAAXIg8A6g");
        this.shape_76.setTransform(560.8023, 224.9665, 1.3382, 1.3382);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#000000").s().p("AhCAuIBfhbIAjAAIAEABIhfBag");
        this.shape_77.setTransform(557.7915, 224.8996, 1.3382, 1.3382);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#FFFF55").s().p("AhDAuIBfhbIAoAAIhfBbg");
        this.shape_78.setTransform(552.5727, 224.8996, 1.3382, 1.3382);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#000000").s().p("AhDAuIBfhbIAoAAIhgBbg");
        this.shape_79.setTransform(547.287, 224.8996, 1.3382, 1.3382);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#FFFF55").s().p("AgtAuQgDAAgDgDQgDgDAAgFIAAgPIBFhBIAnAAIhfBbg");
        this.shape_80.setTransform(543.8078, 224.8996, 1.3382, 1.3382);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#000000").s().p("AgigEIAegcIAnAAIhFBBg");
        this.shape_81.setTransform(541.165, 223.16, 1.3382, 1.3382);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#FFFF55").s().p("AgOgCQAAgFACgDQADgDAEAAIAUAAIgdAbg");
        this.shape_82.setTransform(538.5221, 220.6175, 1.3382, 1.3382);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#3C3C3B").s().p("AgRATQgIgIAAgLQAAgKAIgHQAHgIAKAAQALAAAIAIQAHAHAAAKQAAALgHAIQgIAHgLAAQgKAAgHgHgAgKgKQgFAEAAAGQAAAHAFAEQAFAFAFAAQAHAAAEgFQAFgEAAgHQAAgGgFgEQgEgFgHAAQgFAAgFAFg");
        this.shape_83.setTransform(561.242, 210.7762, 1.3372, 1.3372);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#EDB44F").s().p("AgOAPQgGgGAAgJQAAgHAGgHQAHgGAHAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAQgHAAgHgGg");
        this.shape_84.setTransform(561.242, 210.7762, 1.3372, 1.3372);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#575756").s().p("AgGBeIAAi7QAAgHAGAAQAHAAAAAHIAAC7QAAAHgHAAQgGAAAAgHg");
        this.shape_85.setTransform(561.2754, 224.2484, 1.3372, 1.3372);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#3C3C3B").s().p("AgSATQgHgIAAgLQAAgKAHgHQAIgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHgAgLgKQgEAEAAAGQAAAHAEAEQAFAFAGAAQAHAAAFgFQAEgEAAgHQAAgGgEgEQgGgFgGAAQgGAAgFAFg");
        this.shape_86.setTransform(541.8494, 210.8437, 1.3378, 1.3378);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#EDB44F").s().p("AgOAPQgGgGAAgJQAAgHAGgHQAHgGAHAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAQgHAAgHgGg");
        this.shape_87.setTransform(541.8494, 210.8437, 1.3378, 1.3378);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#575756").s().p("AgFBeIAAi7QgBgHAGAAQAGAAAAAHIAAC7QAAAHgGAAQgGAAABgHg");
        this.shape_88.setTransform(541.8494, 224.322, 1.3378, 1.3378);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#FFFFFF").s().p("Ag1AXIAAgtIBrAAIAAAtg");
        this.shape_89.setTransform(399.2746, 86.6102, 1.3386, 1.3386);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAhAhAQgbAbAAAlQAAAmAbAbQAbAbAlAAQAmAAAbgbQAbgbAAgmQAAglgbgbQgbgbgmAAQglAAgbAbg");
        this.shape_90.setTransform(399.2746, 86.5098, 1.3386, 1.3386);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#D75930").s().p("AhEBFQgcgcAAgpQAAgnAcgdQAdgcAnAAQAoAAAdAcQAcAdAAAnQAAApgcAcQgdAcgoAAQgnAAgdgcg");
        this.shape_91.setTransform(399.2746, 86.5098, 1.3386, 1.3386);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#575756").s().p("AgeAHQgHAAAAgHQAAgGAHAAIA9AAQAHAAAAAGQAAAHgHAAg");
        this.shape_92.setTransform(399.2746, 140.8913, 1.3386, 1.3386);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#575756").s().p("AgFC5QgDgCAAgEIAAllQAAgEADgCQADgDACAAQAEAAACADQADACAAAEIAAFlQAAAEgDACQgCADgEAAQgCAAgDgDg");
        this.shape_93.setTransform(399.2746, 116.7292, 1.3386, 1.3386);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#F3DEBB").s().p("AijByQBHhjBwiFQAWgfAcAkIBeBvQgKAfgnAcQgcAVg9AeQgzAYgzABIgDAAQgvAAglgTg");
        this.shape_94.setTransform(446.528, 208.8043, 1.3386, 1.3386);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#F1D19A").s().p("AkGB7QgZAABKhoQAlAUA0gEQA0gEA0gcQAqgWAegiQAeghALgkQDMD1ghAAg");
        this.shape_95.setTransform(453.1979, 221.4764, 1.3386, 1.3386);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#FFFFFF").s().p("Ag2g5IAHgHIBmB6IgHAHg");
        this.shape_96.setTransform(-29.556, 141.5329, 1.3382, 1.3382);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#FFFFFF").s().p("Ag+g5IAHgHIB2B6IgHAHg");
        this.shape_97.setTransform(-14.7025, 141.5663, 1.3382, 1.3382);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#FFFFFF").s().p("Ag+g5IAHgHIB2B6IgHAHg");
        this.shape_98.setTransform(1.2884, 141.5663, 1.3382, 1.3382);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#FFFFFF").s().p("Ag+g5IAHgHIB2B6IgHAHg");
        this.shape_99.setTransform(17.2793, 141.5663, 1.3382, 1.3382);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#FFFFFF").s().p("Ag+g5IAHgHIB2B6IgHAHg");
        this.shape_100.setTransform(33.2701, 141.5663, 1.3382, 1.3382);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#FFFFFF").s().p("Ag+g5IAHgHIB2B6IgHAHg");
        this.shape_101.setTransform(49.261, 141.5663, 1.3382, 1.3382);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#FFFFFF").s().p("AgEA9IAAh6IAJAAIAAB6g");
        this.shape_102.setTransform(-22.698, 141.5663, 1.3382, 1.3382);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#FFFFFF").s().p("AgEA9IAAh6IAJAAIAAB6g");
        this.shape_103.setTransform(-6.7071, 141.5663, 1.3382, 1.3382);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#FFFFFF").s().p("AgEA9IAAh6IAJAAIAAB6g");
        this.shape_104.setTransform(9.2838, 141.5663, 1.3382, 1.3382);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#FFFFFF").s().p("AgEA9IAAh6IAJAAIAAB6g");
        this.shape_105.setTransform(25.2747, 141.5663, 1.3382, 1.3382);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#FFFFFF").s().p("AgEA9IAAh6IAJAAIAAB6g");
        this.shape_106.setTransform(41.2656, 141.5663, 1.3382, 1.3382);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#FFFFFF").s().p("AgEA9IAAh6IAJAAIAAB6g");
        this.shape_107.setTransform(57.2565, 141.5663, 1.3382, 1.3382);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#FFFFFF").s().p("AliBDIAAiEILFAAIAACEgAlYA5IKxAAIAAhxIqxAAg");
        this.shape_108.setTransform(10.3878, 141.5663, 1.3382, 1.3382);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#FFFFFF").s().p("Ag2g5IAHgHIBmB6IgHAHg");
        this.shape_109.setTransform(65.0512, 141.5998, 1.3382, 1.3382);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#FFFFFF").s().p("Ag+g5IAHgHIB2B6IgHAHg");
        this.shape_110.setTransform(81.109, 141.6667, 1.3382, 1.3382);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#FFFFFF").s().p("Ag+g5IAHgHIB2B6IgHAHg");
        this.shape_111.setTransform(97.0999, 141.6667, 1.3382, 1.3382);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#FFFFFF").s().p("Ag+g5IAHgHIB2B6IgHAHg");
        this.shape_112.setTransform(113.0908, 141.6667, 1.3382, 1.3382);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#FFFFFF").s().p("Ag+g5IAHgHIB2B6IgHAHg");
        this.shape_113.setTransform(129.0817, 141.6667, 1.3382, 1.3382);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#FFFFFF").s().p("Ag+g5IAHgHIB2B6IgHAHg");
        this.shape_114.setTransform(145.0726, 141.6667, 1.3382, 1.3382);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#FFFFFF").s().p("AgEA+IAAh7IAJAAIAAB7g");
        this.shape_115.setTransform(73.1136, 141.6667, 1.3382, 1.3382);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#FFFFFF").s().p("AgEA+IAAh7IAJAAIAAB7g");
        this.shape_116.setTransform(89.1045, 141.6667, 1.3382, 1.3382);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#FFFFFF").s().p("AgEA+IAAh7IAJAAIAAB7g");
        this.shape_117.setTransform(105.0953, 141.6667, 1.3382, 1.3382);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#FFFFFF").s().p("AgEA+IAAh7IAJAAIAAB7g");
        this.shape_118.setTransform(121.0862, 141.6667, 1.3382, 1.3382);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#FFFFFF").s().p("AgEA+IAAh7IAJAAIAAB7g");
        this.shape_119.setTransform(137.0771, 141.6667, 1.3382, 1.3382);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#FFFFFF").s().p("AgEA+IAAh7IAJAAIAAB7g");
        this.shape_120.setTransform(153.068, 141.6667, 1.3382, 1.3382);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f("#FFFFFF").s().p("AmkBCIAAiEILSAAIB3CFgAmaA4IMpABIhlhwIrEgBg");
        this.shape_121.setTransform(112.9235, 141.6332, 1.3382, 1.3382);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f("#575756").s().p("AgGBAQgDgDAAgEIAAhxQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABxQAAAEgDADQgDADgEAAQgDAAgDgDg");
        this.shape_122.setTransform(155.8125, 196.1095, 1.3386, 1.3386);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f("#575756").s().p("AhbBOICpipIAOAOIipCpg");
        this.shape_123.setTransform(155.7443, 215.0977, 1.3382, 1.3382);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f("#575756").s().p("AhbhNIAOgOICpCpIgOAOg");
        this.shape_124.setTransform(155.7443, 215.0977, 1.3382, 1.3382);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f("#575756").s().p("AheBfIAAi9IC9AAIAAC9gAhKBLICVAAIAAiVIiVAAg");
        this.shape_125.setTransform(155.7443, 215.0977, 1.3382, 1.3382);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f("#C29F6E").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_126.setTransform(155.7443, 215.0977, 1.3382, 1.3382);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f("#FFFFFF").s().p("AgEAUQgIAAAAgFIgIgfQAAgDAQAAIALAAQAOAAAAACIgGAgQAAAFgIAAg");
        this.shape_127.setTransform(155.5783, 173.7211, 1.3386, 1.3386);

        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f("#FFFFFF").s().p("AgEBTIAAilIAJAAIAAClg");
        this.shape_128.setTransform(155.4779, 163.8487, 1.3386, 1.3386);

        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f("#FFFFFF").s().p("AgrAMIAAgXIBXAAIAAAXg");
        this.shape_129.setTransform(155.4444, 151.868, 1.3386, 1.3386);

        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f("#FFFFFF").s().p("AgOA5QgTgGgJgSQgJgTAGgTQAJgZAagGIAAgOQAAgDADgDQADgDAEAAQADAAADADQADADAAAEIgBAeIgIABQgTABgHASQgEALAGAMQAFAKAMAEQAKAFAMgGQAKgFAFgMQABgEAEgCQADgCAEABQAEACACADQACAEgCAEQgGAUgTAJQgKAFgMAAQgGAAgJgDg");
        this.shape_130.setTransform(155.807, 183.3591, 1.3386, 1.3386);

        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f("#575756").s().p("AhbhNIAOgOICpCpIgOAOg");
        this.shape_131.setTransform(625.8031, 224.4549, 1.3386, 1.3386);

        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f("#575756").s().p("AhjBkIAAjHIDHAAIAADHgAhFBGICLAAIAAiLIiLAAg");
        this.shape_132.setTransform(625.8031, 224.4549, 1.3386, 1.3386);

        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f("#C29F6E").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_133.setTransform(625.8031, 224.4549, 1.3386, 1.3386);

        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f("#575756").s().p("AgsDdQgEgBgDgDQgCgEABgEIBVmlQABgEAEgDQADgCAEABQAEABADADQACAEgBAEIhWGlQgCAIgHAAg");
        this.shape_134.setTransform(418.5998, 317.7346, 1.3386, 1.3386);

        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f("#575756").s().p("ABmCqIjclIQgCgDABgEQAAgEAEgDQADgCAEABQAFAAACAEIDcFIQACAEgBAEQgBAEgDACQgCACgEAAQgFAAgDgFg");
        this.shape_135.setTransform(418.9523, 317.2693, 1.3386, 1.3386);

        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f("#575756").s().p("AiMi8IDDgoIBWGgIjDApgAhoikIBKFlICHgcIhJllg");
        this.shape_136.setTransform(418.5842, 317.7234, 1.3386, 1.3386);

        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f("#A98152").s().p("Ah6iwIClgiIBQGDIilAig");
        this.shape_137.setTransform(418.6177, 317.7234, 1.3386, 1.3386);

        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f("#575756").s().p("AhbBOICpipIAOAOIipCpg");
        this.shape_138.setTransform(392.0795, 334.6235, 1.3386, 1.3386);

        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f("#575756").s().p("AhbhNIAOgOICpCpIgOAOg");
        this.shape_139.setTransform(392.0795, 334.6235, 1.3386, 1.3386);

        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f("#575756").s().p("AhjBkIAAjHIDHAAIAADHgAhFBGICLAAIAAiLIiLAAg");
        this.shape_140.setTransform(392.0795, 334.6235, 1.3386, 1.3386);

        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f("#C29F6E").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_141.setTransform(392.0795, 334.6235, 1.3386, 1.3386);

        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f("#575756").s().p("AhbhNIAOgOICpCpIgOAOg");
        this.shape_142.setTransform(360.1868, 76.3362, 1.3386, 1.3386);

        this.shape_143 = new cjs.Shape();
        this.shape_143.graphics.f("#575756").s().p("AhjBkIAAjHIDHAAIAADHgAhFBGICLAAIAAiLIiLAAg");
        this.shape_143.setTransform(360.2203, 76.3362, 1.3386, 1.3386);

        this.shape_144 = new cjs.Shape();
        this.shape_144.graphics.f("#9F8A7C").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_144.setTransform(360.2203, 76.3362, 1.3386, 1.3386);

        this.shape_145 = new cjs.Shape();
        this.shape_145.graphics.f("#575756").s().p("AhbBOICpipIAOAOIipCpg");
        this.shape_145.setTransform(355.0666, 102.5063, 1.3386, 1.3386);

        this.shape_146 = new cjs.Shape();
        this.shape_146.graphics.f("#575756").s().p("AhjBkIAAjHIDHAAIAADHgAhFBGICLAAIAAiLIiLAAg");
        this.shape_146.setTransform(355.0666, 102.5063, 1.3386, 1.3386);

        this.shape_147 = new cjs.Shape();
        this.shape_147.graphics.f("#A98152").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_147.setTransform(355.0666, 102.5063, 1.3386, 1.3386);

        this.shape_148 = new cjs.Shape();
        this.shape_148.graphics.f("#575756").s().p("AhbhNIAOgOICpCpIgOAOg");
        this.shape_148.setTransform(360.1868, 128.6764, 1.3386, 1.3386);

        this.shape_149 = new cjs.Shape();
        this.shape_149.graphics.f("#575756").s().p("AhjBkIAAjHIDHAAIAADHgAhFBGICLAAIAAiLIiLAAg");
        this.shape_149.setTransform(360.2203, 128.6764, 1.3386, 1.3386);

        this.shape_150 = new cjs.Shape();
        this.shape_150.graphics.f("#C29F6E").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_150.setTransform(360.2203, 128.6764, 1.3386, 1.3386);

        this.shape_151 = new cjs.Shape();
        this.shape_151.graphics.f("#FFFFFF").s().p("AgoBFIBJiOIAIAFIhICOg");
        this.shape_151.setTransform(330.5988, 19.0815, 1.3396, 1.3396);

        this.shape_152 = new cjs.Shape();
        this.shape_152.graphics.f("#FFFFFF").s().p("AgwBGIBZiRIAIAFIhYCSg");
        this.shape_152.setTransform(316.0646, 22.3969, 1.3396, 1.3396);

        this.shape_153 = new cjs.Shape();
        this.shape_153.graphics.f("#FFFFFF").s().p("AgwBGIBYiRIAJAFIhZCSg");
        this.shape_153.setTransform(300.4588, 25.9133, 1.3396, 1.3396);

        this.shape_154 = new cjs.Shape();
        this.shape_154.graphics.f("#FFFFFF").s().p("AgwBHIBYiSIAJAFIhZCSg");
        this.shape_154.setTransform(284.853, 29.4296, 1.3396, 1.3396);

        this.shape_155 = new cjs.Shape();
        this.shape_155.graphics.f("#FFFFFF").s().p("AgwBHIBZiSIAIAFIhYCSg");
        this.shape_155.setTransform(269.2472, 32.9794, 1.3396, 1.3396);

        this.shape_156 = new cjs.Shape();
        this.shape_156.graphics.f("#FFFFFF").s().p("AgwBHIBYiSIAJAFIhZCSg");
        this.shape_156.setTransform(253.6414, 36.4957, 1.3396, 1.3396);

        this.shape_157 = new cjs.Shape();
        this.shape_157.graphics.f("#FFFFFF").s().p("AgSg6IAKgCIAaB3IgKACg");
        this.shape_157.setTransform(323.901, 20.622, 1.3396, 1.3396);

        this.shape_158 = new cjs.Shape();
        this.shape_158.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_158.setTransform(308.2952, 24.1384, 1.3396, 1.3396);

        this.shape_159 = new cjs.Shape();
        this.shape_159.graphics.f("#FFFFFF").s().p("AgSg6IAKgCIAbB3IgLACg");
        this.shape_159.setTransform(292.6894, 27.6882, 1.3396, 1.3396);

        this.shape_160 = new cjs.Shape();
        this.shape_160.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgKACg");
        this.shape_160.setTransform(277.0836, 31.2045, 1.3396, 1.3396);

        this.shape_161 = new cjs.Shape();
        this.shape_161.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_161.setTransform(261.4443, 34.7208, 1.3396, 1.3396);

        this.shape_162 = new cjs.Shape();
        this.shape_162.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_162.setTransform(245.8385, 38.2707, 1.3396, 1.3396);

        this.shape_163 = new cjs.Shape();
        this.shape_163.graphics.f("#FFFFFF").s().p("AloAOIK0icIAdCCIq0CbgAlcAVIAZBvIKgiYIgZhug");
        this.shape_163.setTransform(291.5842, 27.8891, 1.3396, 1.3396);

        this.shape_164 = new cjs.Shape();
        this.shape_164.graphics.f("#FFFFFF").s().p("AgoBFIBIiOIAJAFIhICOg");
        this.shape_164.setTransform(238.2365, 40.0456, 1.3396, 1.3396);

        this.shape_165 = new cjs.Shape();
        this.shape_165.graphics.f("#FFFFFF").s().p("AgwBHIBYiSIAJAGIhZCRg");
        this.shape_165.setTransform(222.5637, 43.6289, 1.3396, 1.3396);

        this.shape_166 = new cjs.Shape();
        this.shape_166.graphics.f("#FFFFFF").s().p("AgwBHIBZiSIAIAFIhYCSg");
        this.shape_166.setTransform(206.9579, 47.1787, 1.3396, 1.3396);

        this.shape_167 = new cjs.Shape();
        this.shape_167.graphics.f("#FFFFFF").s().p("AgwBGIBYiRIAJAFIhZCSg");
        this.shape_167.setTransform(191.3521, 50.7285, 1.3396, 1.3396);

        this.shape_168 = new cjs.Shape();
        this.shape_168.graphics.f("#FFFFFF").s().p("AgwBGIBYiRIAJAFIhZCSg");
        this.shape_168.setTransform(175.7463, 54.2448, 1.3396, 1.3396);

        this.shape_169 = new cjs.Shape();
        this.shape_169.graphics.f("#FFFFFF").s().p("AgwBHIBZiSIAIAFIhYCSg");
        this.shape_169.setTransform(160.1405, 57.7612, 1.3396, 1.3396);

        this.shape_170 = new cjs.Shape();
        this.shape_170.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAbB3IgKACg");
        this.shape_170.setTransform(230.4001, 41.8874, 1.3396, 1.3396);

        this.shape_171 = new cjs.Shape();
        this.shape_171.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_171.setTransform(214.7608, 45.4038, 1.3396, 1.3396);

        this.shape_172 = new cjs.Shape();
        this.shape_172.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_172.setTransform(199.155, 48.9536, 1.3396, 1.3396);

        this.shape_173 = new cjs.Shape();
        this.shape_173.graphics.f("#FFFFFF").s().p("AgRg6IAJgCIAaB3IgJACg");
        this.shape_173.setTransform(183.5492, 52.4699, 1.3396, 1.3396);

        this.shape_174 = new cjs.Shape();
        this.shape_174.graphics.f("#FFFFFF").s().p("AgSg6IALgCIAaB3IgKACg");
        this.shape_174.setTransform(167.9099, 56.0197, 1.3396, 1.3396);

        this.shape_175 = new cjs.Shape();
        this.shape_175.graphics.f("#FFFFFF").s().p("AgSg6IAKgCIAaB3IgJACg");
        this.shape_175.setTransform(152.3041, 59.5361, 1.3396, 1.3396);

        this.shape_176 = new cjs.Shape();
        this.shape_176.graphics.f("#FFFFFF").s().p("AlDACILAifIAdCCIs0C5gAk9ALIhJCFIMUizIgZhug");
        this.shape_176.setTransform(193.4954, 50.5945, 1.3396, 1.3396);

        this.shape_177 = new cjs.Shape();
        this.shape_177.graphics.f("#FFFFFF").s().p("AgtAAIBWgUIAEAVIhUAUg");
        this.shape_177.setTransform(152.3301, 70.0383, 1.3407, 1.3407);

        this.shape_178 = new cjs.Shape();
        this.shape_178.graphics.f("#FFFFFF").s().p("AgGAUQgIAAAAgFIgGgfQAAgDAOAAIALAAQAQAAAAADIgIAfQAAAFgIAAg");
        this.shape_178.setTransform(152.9756, 92.2176, 1.3411, 1.3411);

        this.shape_179 = new cjs.Shape();
        this.shape_179.graphics.f("#FFFFFF").s().p("AgdAzQgNgJgFgQQgBgEACgDQACgEADgBQAEgCAEACQAEACABAEQAEALALAGQALAGALgEQALgEAGgLQAFgLgEgMQgGgSgUgBIgIgBIAAgeQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAMQAaAIAIAZQAHASgKATQgJASgTAHQgJACgGAAQgQAAgNgJg");
        this.shape_179.setTransform(152.7279, 101.8736, 1.3411, 1.3411);

        this.shape_180 = new cjs.Shape();
        this.shape_180.graphics.f("#575756").s().p("AggANIAAgYIBBAAIAAAYg");
        this.shape_180.setTransform(541.0409, 250.9697, 1.3407, 1.3407);

        this.shape_181 = new cjs.Shape();
        this.shape_181.graphics.f("#575756").s().p("AgQASQgIgIAAgKQAAgJAIgIQAHgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgHgHgAgLgLQgFAFAAAGQAAAHAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgHQAAgGgFgFQgFgGgHAAQgGAAgFAGg");
        this.shape_181.setTransform(541.1079, 214.5019, 1.3407, 1.3407);

        this.shape_182 = new cjs.Shape();
        this.shape_182.graphics.f("#EDB44F").s().p("AgOAPQgGgHAAgIQAAgIAGgGQAHgGAHAAQAIAAAHAGQAGAGAAAIQAAAIgGAHQgHAGgIAAQgHAAgHgGg");
        this.shape_182.setTransform(541.1414, 214.5019, 1.3407, 1.3407);

        this.shape_183 = new cjs.Shape();
        this.shape_183.graphics.f("#EA3323").s().p("AgSAOIAAgLIAkgQIAAAbg");
        this.shape_183.setTransform(540.9843, 251.1802, 1.3402, 1.3402);

        this.shape_184 = new cjs.Shape();
        this.shape_184.graphics.f("#FFFFFF").s().p("AgSgFIAkgRIAAAcIgkAQg");
        this.shape_184.setTransform(540.9843, 248.5333, 1.3402, 1.3402);

        this.shape_185 = new cjs.Shape();
        this.shape_185.graphics.f("#FFFFFF").s().p("AgSgFIAkgQIAAAbIgkARg");
        this.shape_185.setTransform(540.9843, 240.961, 1.3402, 1.3402);

        this.shape_186 = new cjs.Shape();
        this.shape_186.graphics.f("#FFFFFF").s().p("AgSgFIAkgQIAAAbIgkARg");
        this.shape_186.setTransform(540.9843, 233.3888, 1.3402, 1.3402);

        this.shape_187 = new cjs.Shape();
        this.shape_187.graphics.f("#FFFFFF").s().p("AgSgFIAkgRIAAAcIgkAQg");
        this.shape_187.setTransform(540.9843, 225.7495, 1.3402, 1.3402);

        this.shape_188 = new cjs.Shape();
        this.shape_188.graphics.f("#FFFFFF").s().p("AgSgKIAkAAIAAAFIgkAQg");
        this.shape_188.setTransform(540.9843, 219.7855, 1.3402, 1.3402);

        this.shape_189 = new cjs.Shape();
        this.shape_189.graphics.f("#EA3323").s().p("AgSgFIAkgQIAAAbIgkAQg");
        this.shape_189.setTransform(540.9843, 244.7472, 1.3402, 1.3402);

        this.shape_190 = new cjs.Shape();
        this.shape_190.graphics.f("#EA3323").s().p("AgSgEIAkgRIAAAbIgkARg");
        this.shape_190.setTransform(540.9843, 237.1414, 1.3402, 1.3402);

        this.shape_191 = new cjs.Shape();
        this.shape_191.graphics.f("#EA3323").s().p("AgSgFIAkgRIAAAcIgkAQg");
        this.shape_191.setTransform(540.9843, 229.5691, 1.3402, 1.3402);

        this.shape_192 = new cjs.Shape();
        this.shape_192.graphics.f("#EA3323").s().p("AgSgEIAkgRIAAAbIgkARg");
        this.shape_192.setTransform(540.9843, 221.9298, 1.3402, 1.3402);

        this.shape_193 = new cjs.Shape();
        this.shape_193.graphics.f("#D9D9D9").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_193.setTransform(591.2512, 216.4124, 1.3407, 1.3407);

        this.shape_194 = new cjs.Shape();
        this.shape_194.graphics.f("#D9D9D9").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_194.setTransform(581.5309, 219.8983, 1.3407, 1.3407);

        this.shape_195 = new cjs.Shape();
        this.shape_195.graphics.f("#D9D9D9").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_195.setTransform(586.2235, 215.675, 1.3407, 1.3407);

        this.shape_196 = new cjs.Shape();
        this.shape_196.graphics.f("#D9D9D9").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_196.setTransform(587.6312, 211.6528, 1.3407, 1.3407);

        this.shape_197 = new cjs.Shape();
        this.shape_197.graphics.f("#6F6F6E").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_197.setTransform(605.1476, 247.3606, 1.3402, 1.3402);

        this.shape_198 = new cjs.Shape();
        this.shape_198.graphics.f("#6F6F6E").s().p("AgEAAQgBgEAFAAQAFAAABAEQgBAFgFAAQgFAAABgFg");
        this.shape_198.setTransform(618.7844, 249.0359, 1.3402, 1.3402);

        this.shape_199 = new cjs.Shape();
        this.shape_199.graphics.f("#6F6F6E").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_199.setTransform(614.5962, 250.4431, 1.3402, 1.3402);

        this.shape_200 = new cjs.Shape();
        this.shape_200.graphics.f("#6F6F6E").s().p("AgFAAQABgEAEAAQAGAAgBAEQABAFgGAAQgEAAgBgFg");
        this.shape_200.setTransform(613.8925, 244.5461, 1.3402, 1.3402);

        this.shape_201 = new cjs.Shape();
        this.shape_201.graphics.f("#6F6F6E").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
        this.shape_201.setTransform(607.0909, 251.1467, 1.3402, 1.3402);

        this.shape_202 = new cjs.Shape();
        this.shape_202.graphics.f("#6F6F6E").s().p("AgFAAQABgEAEAAQAGAAgBAEQABAFgGAAQgEAAgBgFg");
        this.shape_202.setTransform(611.0111, 248.0977, 1.3402, 1.3402);

        this.shape_203 = new cjs.Shape();
        this.shape_203.graphics.f("#C1C1BF").s().p("AijByQBHhjBwiFQAWgfAcAkIBeBvQgKAfgnAdQgcAUg9AeQgzAYgzABIgFAAQguAAgkgTg");
        this.shape_203.setTransform(583.2349, 224.3224, 1.3402, 1.3402);

        this.shape_204 = new cjs.Shape();
        this.shape_204.graphics.f("#B1B1B1").s().p("AkFB7QgaAABLhoQAlAUAzgEQA1gEAzgbQAqgXAfgiQAdghALgkQDMD1ggAAg");
        this.shape_204.setTransform(589.8922, 237.0074, 1.3402, 1.3402);

        this.shape_205 = new cjs.Shape();
        this.shape_205.graphics.f("#3C3C3B").s().p("AhgAGQgGgBAAgFQAAgFAGABIDBAAQAGgBAAAFQAAAFgGABg");
        this.shape_205.setTransform(606.569, 346.1614, 1.3407, 1.3407);

        this.shape_206 = new cjs.Shape();
        this.shape_206.graphics.f("#575756").s().p("AhgAFQgGAAAAgFQAAgEAGAAIDBAAQAGAAAAAEQAAAFgGAAg");
        this.shape_206.setTransform(606.569, 347.6027, 1.3407, 1.3407);

        this.shape_207 = new cjs.Shape();
        this.shape_207.graphics.f("#FFFF55").s().p("AgNANIAbgaIAAAPQAAAFgCADQgDADgEAAg");
        this.shape_207.setTransform(620.0241, 339.6016, 1.3402, 1.3402);

        this.shape_208 = new cjs.Shape();
        this.shape_208.graphics.f("#000000").s().p("AgeAdIA9g5IAAAeIgdAbg");
        this.shape_208.setTransform(617.8127, 337.4572, 1.3402, 1.3402);

        this.shape_209 = new cjs.Shape();
        this.shape_209.graphics.f("#FFFF55").s().p("AgxAuIBehbQAFADABAHIAAAXIg9A6g");
        this.shape_209.setTransform(615.1658, 335.2794, 1.3402, 1.3402);

        this.shape_210 = new cjs.Shape();
        this.shape_210.graphics.f("#000000").s().p("AhDAuIBfhbIAoAAIhfBbg");
        this.shape_210.setTransform(601.6295, 335.2124, 1.3402, 1.3402);

        this.shape_211 = new cjs.Shape();
        this.shape_211.graphics.f("#FFFF55").s().p("AgtAuQgDAAgDgDQgCgDgBgFIAAgPIBFhBIAnAAIhfBbg");
        this.shape_211.setTransform(598.1449, 335.2124, 1.3402, 1.3402);

        this.shape_212 = new cjs.Shape();
        this.shape_212.graphics.f("#FFFF55").s().p("AgOgCQAAgFADgDQADgDADAAIAUAAIgdAbg");
        this.shape_212.setTransform(592.851, 330.9236, 1.3402, 1.3402);

        this.shape_213 = new cjs.Shape();
        this.shape_213.graphics.f("#3C3C3B").s().p("AgSASQgHgHAAgLQAAgKAHgHQAIgIAKAAQALAAAIAIQAHAHAAAKQAAALgHAHQgIAIgLAAQgKAAgIgIgAgLgKQgEAEAAAGQAAAHAEAEQAFAFAGAAQAHAAAFgFQAEgEAAgHQAAgGgEgEQgFgFgHAAQgGAAgFAFg");
        this.shape_213.setTransform(615.6606, 320.9352, 1.3392, 1.3392);

        this.shape_214 = new cjs.Shape();
        this.shape_214.graphics.f("#EDB44F").s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAHQgGAGgJAAQgIAAgGgGg");
        this.shape_214.setTransform(615.6606, 320.9352, 1.3392, 1.3392);

        this.shape_215 = new cjs.Shape();
        this.shape_215.graphics.f("#3C3C3B").s().p("AgSASQgHgHAAgLQAAgKAHgHQAIgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgIAIgKAAQgKAAgIgIgAgKgKQgFAEAAAGQAAAHAFAEQAEAFAGAAQAHAAAEgFQAFgFAAgGQAAgGgFgEQgEgFgHAAQgGAAgEAFg");
        this.shape_215.setTransform(596.0983, 321.017, 1.3396, 1.3396);

        this.shape_216 = new cjs.Shape();
        this.shape_216.graphics.f("#EDB44F").s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAIAAAHAGQAGAGAAAIQAAAIgGAHQgHAGgIAAQgIAAgGgGg");
        this.shape_216.setTransform(596.0983, 321.017, 1.3396, 1.3396);

        this.shape_217 = new cjs.Shape();
        this.shape_217.graphics.f("#3C3C3B").s().p("AhgAFQgGAAAAgFQAAgEAGAAIDCAAQAFAAAAAEQAAAFgFAAg");
        this.shape_217.setTransform(462.6418, 251.4054, 1.3407, 1.3407);

        this.shape_218 = new cjs.Shape();
        this.shape_218.graphics.f("#575756").s().p("AhgAFQgGABAAgGQAAgEAGgBIDCAAQAFABAAAEQAAAGgFgBg");
        this.shape_218.setTransform(462.6418, 252.8467, 1.3407, 1.3407);

        this.shape_219 = new cjs.Shape();
        this.shape_219.graphics.f("#FFFF55").s().p("AgNAOIAbgaIAAAPQAAAEgCADQgDAEgEAAg");
        this.shape_219.setTransform(476.1509, 244.8477, 1.3402, 1.3402);

        this.shape_220 = new cjs.Shape();
        this.shape_220.graphics.f("#000000").s().p("AgeAdIA9g5IAAAeIgdAbg");
        this.shape_220.setTransform(473.9395, 242.7368, 1.3402, 1.3402);

        this.shape_221 = new cjs.Shape();
        this.shape_221.graphics.f("#FFFF55").s().p("AgxAuIBehaQAFADAAAGIAAAXIg8A6g");
        this.shape_221.setTransform(471.2926, 240.559, 1.3402, 1.3402);

        this.shape_222 = new cjs.Shape();
        this.shape_222.graphics.f("#000000").s().p("AhCAuIBfhbIAjAAIAEABIhfBag");
        this.shape_222.setTransform(468.2771, 240.492, 1.3402, 1.3402);

        this.shape_223 = new cjs.Shape();
        this.shape_223.graphics.f("#FFFF55").s().p("AhDAuIBfhbIAoAAIhfBbg");
        this.shape_223.setTransform(463.0502, 240.492, 1.3402, 1.3402);

        this.shape_224 = new cjs.Shape();
        this.shape_224.graphics.f("#FFFF55").s().p("AgtAuQgEAAgCgDQgDgDAAgFIAAgPIBFhBIAnAAIhfBbg");
        this.shape_224.setTransform(454.2717, 240.492, 1.3402, 1.3402);

        this.shape_225 = new cjs.Shape();
        this.shape_225.graphics.f("#000000").s().p("AgigEIAegcIAnAAIhFBBg");
        this.shape_225.setTransform(451.6248, 238.7832, 1.3402, 1.3402);

        this.shape_226 = new cjs.Shape();
        this.shape_226.graphics.f("#FFFF55").s().p("AgOgDQAAgEACgDQADgDAEAAIAUAAIgdAbg");
        this.shape_226.setTransform(448.9778, 236.2367, 1.3402, 1.3402);

        this.shape_227 = new cjs.Shape();
        this.shape_227.graphics.f("#3C3C3B").s().p("AgRASQgIgHAAgLQAAgKAIgIQAHgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgHgIgAgLgKQgEAEAAAGQAAAHAEAEQAGAFAFAAQAHAAAEgFQAFgEAAgHQAAgGgFgEQgEgFgHAAQgFAAgGAFg");
        this.shape_227.setTransform(471.8972, 226.3205, 1.3392, 1.3392);

        this.shape_228 = new cjs.Shape();
        this.shape_228.graphics.f("#EDB44F").s().p("AgOAPQgGgHAAgIQAAgIAGgGQAHgGAHAAQAIAAAHAGQAGAGAAAIQAAAIgGAHQgHAGgIAAQgHAAgHgGg");
        this.shape_228.setTransform(471.8972, 226.3205, 1.3392, 1.3392);

        this.shape_229 = new cjs.Shape();
        this.shape_229.graphics.f("#575756").s().p("AgFBeIAAi7QAAgHAFAAQAHAAgBAHIAAC7QABAHgHAAQgFAAAAgHg");
        this.shape_229.setTransform(471.8972, 239.8129, 1.3392, 1.3392);

        this.shape_230 = new cjs.Shape();
        this.shape_230.graphics.f("#3C3C3B").s().p("AgRASQgIgHAAgLQAAgKAIgIQAHgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgHgIgAgKgKQgFAEAAAGQAAAGAFAFQAEAFAGAAQAHAAAEgFQAFgFAAgGQAAgGgFgEQgEgFgHAAQgGAAgEAFg");
        this.shape_230.setTransform(452.2637, 226.3775, 1.3396, 1.3396);

        this.shape_231 = new cjs.Shape();
        this.shape_231.graphics.f("#EDB44F").s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAHQgGAGgJAAQgIAAgGgGg");
        this.shape_231.setTransform(452.2637, 226.3775, 1.3396, 1.3396);

        this.shape_232 = new cjs.Shape();
        this.shape_232.graphics.f("#575756").s().p("AgGBeIAAi7QAAgHAGAAQAHAAAAAHIAAC7QAAAHgHAAQgGAAAAgHg");
        this.shape_232.setTransform(452.2637, 239.8735, 1.3396, 1.3396);

        this.shape_233 = new cjs.Shape();
        this.shape_233.graphics.f("#FFFFFF").s().p("AgGAAQAAgCACgCQACgCACAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
        this.shape_233.setTransform(234.0504, 141.2786, 1.3396, 1.3396);

        this.shape_234 = new cjs.Shape();
        this.shape_234.graphics.f("#FFFFFF").s().p("AgEAlQgCgCAAgDIAAg/QAAgHAGAAQAHAAAAAHIAAA/QAAAHgHAAQgCAAgCgCg");
        this.shape_234.setTransform(234.0504, 132.9734, 1.3396, 1.3396);

        this.shape_235 = new cjs.Shape();
        this.shape_235.graphics.f("#FFFFFF").s().p("AhZBjQgKAAgFgJQgGgJAFgJIBTibQAHgPAPAAQAQAAAIAPIBSCbQAFAIgFAKQgGAJgKAAgAgOhPIhSCbQgCAFACAEQADAEAEAAICzAAQAEAAADgEQADgEgDgFIhSibQgFgJgKAAQgJAAgFAJg");
        this.shape_235.setTransform(234.123, 133.6384, 1.3402, 1.3402);

        this.shape_236 = new cjs.Shape();
        this.shape_236.graphics.f("#D75930").s().p("AhZBdQgHABgEgHQgEgGAEgHIBSibQAGgLAMAAQANAAAGALIBTCbQADAHgEAGQgEAHgHgBg");
        this.shape_236.setTransform(234.1319, 133.6719, 1.3402, 1.3402);

        this.shape_237 = new cjs.Shape();
        this.shape_237.graphics.f("#575756").s().p("AgeAHQgIAAAAgHQAAgGAIAAIA9AAQADAAACACQADACAAACQAAAHgIAAg");
        this.shape_237.setTransform(234.1816, 190.0626, 1.3407, 1.3407);

        this.shape_238 = new cjs.Shape();
        this.shape_238.graphics.f("#575756").s().p("AgICzIAAllQAAgEADgCQADgDACAAQAEAAACADQADACAAAEIAAFlQAAAJgJAAQgIAAAAgJg");
        this.shape_238.setTransform(234.1481, 165.8625, 1.3407, 1.3407);

        this.shape_239 = new cjs.Shape();
        this.shape_239.graphics.f("#ECECEC").s().p("Ag2AzQgMAAgIgIQgIgIAAgMIAAgXQAAgmBSgMIAlAIQAmAOAIAcIAAAXQAAAMgIAIQgIAIgMAAg");
        this.shape_239.setTransform(301.2516, 341.9046, 1.3407, 1.3407);

        this.shape_240 = new cjs.Shape();
        this.shape_240.graphics.f("#B1B1B1").s().p("AhAA8QgOAAgJgKQgJgJAAgNIAAgcQAAgsBggPIAsAKQAsARAKAgIAAAcQAAANgKAJQgKAKgNAAg");
        this.shape_240.setTransform(291.2966, 340.3293, 1.3407, 1.3407);

        this.shape_241 = new cjs.Shape();
        this.shape_241.graphics.f("#6F6F6E").s().p("AhBA9QgOAAgKgKQgKgJAAgOIAAgcQAAgtBjgPIAsAKQAuAQAKAiIAAAcQAAAOgKAJQgKAKgNAAg");
        this.shape_241.setTransform(320.2899, 340.5304, 1.3407, 1.3407);

        this.shape_242 = new cjs.Shape();
        this.shape_242.graphics.f("#575756").s().p("AAiDVIhWmlQgBgEACgEQADgDAEgBQAEgBADACQAEADABAEIBVGlQABAEgCAEQgDADgEABIgCAAQgHAAgCgIg");
        this.shape_242.setTransform(599.8638, 178.824, 1.3313, 1.3313);

        this.shape_243 = new cjs.Shape();
        this.shape_243.graphics.f("#575756").s().p("AhzCtQgEgCAAgEQgBgEACgEIDclIQACgEAEAAQAEgBAEACQADADABAEQABAEgDADIjbFIQgDAFgGAAQgDAAgCgCg");
        this.shape_243.setTransform(599.5539, 178.3612, 1.3313, 1.3313);

        this.shape_244 = new cjs.Shape();
        this.shape_244.graphics.f("#575756").s().p("AiMC8IBWmgIDDAoIhWGhgAhpClICIAcIBLllIiJgcg");
        this.shape_244.setTransform(599.8669, 178.8129, 1.3313, 1.3313);

        this.shape_245 = new cjs.Shape();
        this.shape_245.graphics.f("#C39563").s().p("Ah6CxIBQmDIClAiIhQGDg");
        this.shape_245.setTransform(599.8337, 178.8129, 1.3313, 1.3313);

        this.shape_246 = new cjs.Shape();
        this.shape_246.graphics.f("#FFFFFF").s().p("AgohEIAJgFIBICOIgJAFg");
        this.shape_246.setTransform(-10.7528, 155.7114, 1.3305, 1.3305);

        this.shape_247 = new cjs.Shape();
        this.shape_247.graphics.f("#FFFFFF").s().p("AgwhFIAJgGIBYCSIgIAFg");
        this.shape_247.setTransform(3.6835, 158.9713, 1.3305, 1.3305);

        this.shape_248 = new cjs.Shape();
        this.shape_248.graphics.f("#FFFFFF").s().p("AgwhGIAIgFIBZCSIgJAFg");
        this.shape_248.setTransform(19.1843, 162.4972, 1.3305, 1.3305);

        this.shape_249 = new cjs.Shape();
        this.shape_249.graphics.f("#FFFFFF").s().p("AgwhGIAJgFIBYCRIgIAGg");
        this.shape_249.setTransform(34.685, 166.0231, 1.3305, 1.3305);

        this.shape_250 = new cjs.Shape();
        this.shape_250.graphics.f("#FFFFFF").s().p("AgwhGIAIgFIBZCRIgJAGg");
        this.shape_250.setTransform(50.1858, 169.5158, 1.3305, 1.3305);

        this.shape_251 = new cjs.Shape();
        this.shape_251.graphics.f("#FFFFFF").s().p("AgwhGIAJgFIBYCSIgIAFg");
        this.shape_251.setTransform(65.6865, 173.0084, 1.3305, 1.3305);

        this.shape_252 = new cjs.Shape();
        this.shape_252.graphics.f("#FFFFFF").s().p("AgRA7IAah3IAJACIgaB3g");
        this.shape_252.setTransform(-4.0668, 157.2416, 1.3305, 1.3305);

        this.shape_253 = new cjs.Shape();
        this.shape_253.graphics.f("#FFFFFF").s().p("AgRA7IAah3IAJACIgaB3g");
        this.shape_253.setTransform(11.4339, 160.7342, 1.3305, 1.3305);

        this.shape_254 = new cjs.Shape();
        this.shape_254.graphics.f("#FFFFFF").s().p("AgRA7IAah3IAJACIgaB3g");
        this.shape_254.setTransform(26.9347, 164.2601, 1.3305, 1.3305);

        this.shape_255 = new cjs.Shape();
        this.shape_255.graphics.f("#FFFFFF").s().p("AgSA7IAah3IAKACIgaB3g");
        this.shape_255.setTransform(42.4687, 167.7528, 1.3305, 1.3305);

        this.shape_256 = new cjs.Shape();
        this.shape_256.graphics.f("#FFFFFF").s().p("AgRA7IAah3IAKACIgbB3g");
        this.shape_256.setTransform(57.9694, 171.2787, 1.3305, 1.3305);

        this.shape_257 = new cjs.Shape();
        this.shape_257.graphics.f("#FFFFFF").s().p("AgRA7IAZh3IAKACIgaB3g");
        this.shape_257.setTransform(73.4701, 174.7714, 1.3305, 1.3305);

        this.shape_258 = new cjs.Shape();
        this.shape_258.graphics.f("#FFFFFF").s().p("AlogMIAdiCIK0CbIgeCCgAlcgUIKgCXIAZhuIqgiXg");
        this.shape_258.setTransform(28.0323, 164.493, 1.3305, 1.3305);

        this.shape_259 = new cjs.Shape();
        this.shape_259.graphics.f("#FFFFFF").s().p("AgohEIAJgFIBICOIgJAFg");
        this.shape_259.setTransform(81.0209, 176.5343, 1.3305, 1.3305);

        this.shape_260 = new cjs.Shape();
        this.shape_260.graphics.f("#FFFFFF").s().p("AgwhGIAIgFIBZCSIgJAFg");
        this.shape_260.setTransform(96.5549, 180.1268, 1.3305, 1.3305);

        this.shape_261 = new cjs.Shape();
        this.shape_261.graphics.f("#FFFFFF").s().p("AgwhGIAJgFIBYCSIgIAFg");
        this.shape_261.setTransform(112.0557, 183.6194, 1.3305, 1.3305);

        this.shape_262 = new cjs.Shape();
        this.shape_262.graphics.f("#FFFFFF").s().p("AgwhFIAIgGIBZCSIgJAFg");
        this.shape_262.setTransform(127.5564, 187.1121, 1.3305, 1.3305);

        this.shape_263 = new cjs.Shape();
        this.shape_263.graphics.f("#FFFFFF").s().p("AgwhGIAJgFIBYCSIgIAFg");
        this.shape_263.setTransform(143.0572, 190.638, 1.3305, 1.3305);

        this.shape_264 = new cjs.Shape();
        this.shape_264.graphics.f("#FFFFFF").s().p("AgwhGIAJgFIBYCRIgJAGg");
        this.shape_264.setTransform(158.5912, 194.1639, 1.3305, 1.3305);

        this.shape_265 = new cjs.Shape();
        this.shape_265.graphics.f("#FFFFFF").s().p("AgSA7IAah3IAKACIgaB3g");
        this.shape_265.setTransform(88.8378, 178.3638, 1.3305, 1.3305);

        this.shape_266 = new cjs.Shape();
        this.shape_266.graphics.f("#FFFFFF").s().p("AgRA7IAah3IAKACIgbB3g");
        this.shape_266.setTransform(104.3386, 181.8565, 1.3305, 1.3305);

        this.shape_267 = new cjs.Shape();
        this.shape_267.graphics.f("#FFFFFF").s().p("AgSA7IAah3IAKACIgaB3g");
        this.shape_267.setTransform(119.8393, 185.3824, 1.3305, 1.3305);

        this.shape_268 = new cjs.Shape();
        this.shape_268.graphics.f("#FFFFFF").s().p("AgRA7IAah3IAKACIgbB3g");
        this.shape_268.setTransform(135.3401, 188.8751, 1.3305, 1.3305);

        this.shape_269 = new cjs.Shape();
        this.shape_269.graphics.f("#FFFFFF").s().p("AgSA7IAah3IAKACIgaB3g");
        this.shape_269.setTransform(150.8408, 192.401, 1.3305, 1.3305);

        this.shape_270 = new cjs.Shape();
        this.shape_270.graphics.f("#FFFFFF").s().p("AgRA7IAah3IAKACIgaB3g");
        this.shape_270.setTransform(166.3416, 195.8936, 1.3305, 1.3305);

        this.shape_271 = new cjs.Shape();
        this.shape_271.graphics.f("#FFFFFF").s().p("AmZgbIAdiCILACfIBWCcgAmNgjIMUCyIhJiEIqzicg");
        this.shape_271.setTransform(125.4608, 187.0456, 1.3305, 1.3305);

        this.shape_272 = new cjs.Shape();
        this.shape_272.graphics.f("#FFFFFF").s().p("AgtACIAFgWIBWATIgGAWg");
        this.shape_272.setTransform(166.486, 206.3696, 1.3313, 1.3313);

        this.shape_273 = new cjs.Shape();
        this.shape_273.graphics.f("#575756").s().p("AgJA5IAAhxQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABxQAAAKgKAAQgJAAAAgKg");
        this.shape_273.setTransform(166.0533, 250.6696, 1.3313, 1.3313);

        this.shape_274 = new cjs.Shape();
        this.shape_274.graphics.f("#FFFFFF").s().p("AgEAUQgIAAAAgGIgIgeQAAgDAQAAIAMAAQANAAAAADIgGAeQAAAGgHAAg");
        this.shape_274.setTransform(165.897, 228.4466, 1.3319, 1.3319);

        this.shape_275 = new cjs.Shape();
        this.shape_275.graphics.f("#FFFFFF").s().p("AgOA5QgTgGgJgTQgKgSAHgTQAJgZAZgGIAAgNQAAgEADgDQADgDAFAAQADAAADADQACADAAAEIAAAeIgIABQgUABgGASQgEAMAGAKQAFAMAMADQAKAEALgFQALgGAEgLQABgDAEgDQAEgCAEABQAJAEgDAKQgHATgSAJQgKAFgMAAQgIAAgHgDg");
        this.shape_275.setTransform(166.1569, 238.0362, 1.3319, 1.3319);

        this.shape_276 = new cjs.Shape();
        this.shape_276.graphics.f("#ECECEC").s().p("AgZAXQgFAAgEgEQgDgDgBgFIAAgLQAAgRAmgFIARAEQASAGAEAMIAAALQgBAEgEAEQgDAEgGAAg");
        this.shape_276.setTransform(563.8545, 73.8025, 1.3313, 1.3313);

        this.shape_277 = new cjs.Shape();
        this.shape_277.graphics.f("#B1B1B1").s().p("AgqAoQgJAAgHgGQgGgHAAgIIAAgTQAAgdBAgKIAdAGQAeAMAGAVIAAATQAAAIgHAHQgGAGgIAAg");
        this.shape_277.setTransform(572.4416, 71.5392, 1.3313, 1.3313);

        this.shape_278 = new cjs.Shape();
        this.shape_278.graphics.f("#575756").s().p("AgqAoQgJAAgHgGQgGgHAAgIIAAgTQAAgdBAgKIAdAGQAeAMAGAVIAAATQAAAIgHAHQgGAGgJAAg");
        this.shape_278.setTransform(557.1978, 71.5392, 1.3313, 1.3313);

        this.shape_279 = new cjs.Shape();
        this.shape_279.graphics.f("#F7ECE0").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
        this.shape_279.setTransform(227.4631, 51.0421, 1.3319, 1.3319);

        this.shape_280 = new cjs.Shape();
        this.shape_280.graphics.f("#F7ECE0").s().p("AgDAAQAAgDADAAQABAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAAEgEAAQgDAAAAgEg");
        this.shape_280.setTransform(220.3708, 53.606, 1.3319, 1.3319);

        this.shape_281 = new cjs.Shape();
        this.shape_281.graphics.f("#F7ECE0").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
        this.shape_281.setTransform(223.8004, 50.5094, 1.3319, 1.3319);

        this.shape_282 = new cjs.Shape();
        this.shape_282.graphics.f("#F7ECE0").s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
        this.shape_282.setTransform(224.8326, 47.6126, 1.3319, 1.3319);

        this.shape_283 = new cjs.Shape();
        this.shape_283.graphics.f("#AE9875").s().p("AgDAAQAAgDADAAQAEAAAAADQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAQgDAAAAgEg");
        this.shape_283.setTransform(237.6852, 73.5842, 1.3319, 1.3319);

        this.shape_284 = new cjs.Shape();
        this.shape_284.graphics.f("#AE9875").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
        this.shape_284.setTransform(247.5744, 74.7829, 1.3319, 1.3319);

        this.shape_285 = new cjs.Shape();
        this.shape_285.graphics.f("#AE9875").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
        this.shape_285.setTransform(244.0116, 71.5531, 1.3319, 1.3319);

        this.shape_286 = new cjs.Shape();
        this.shape_286.graphics.f("#AE9875").s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
        this.shape_286.setTransform(241.9472, 74.1169, 1.3319, 1.3319);

        this.shape_287 = new cjs.Shape();
        this.shape_287.graphics.f("#F3DEBB").s().p("Ah3BTQA0hIBShhQAPgXAVAaIBFBSQgIAWgcAVQgVAPgsAVQglASgmABIgCAAQgiAAgbgOg");
        this.shape_287.setTransform(221.6696, 56.8357, 1.3313, 1.3313);

        this.shape_288 = new cjs.Shape();
        this.shape_288.graphics.f("#F1D19A").s().p("Ai+BaQgTAAA2hMQAbAOAmgCQAmgDAmgVQAegQAXgYQAVgYAIgbQCVCzgYAAg");
        this.shape_288.setTransform(226.495, 66.0499, 1.3313, 1.3313);

        this.shape_289 = new cjs.Shape();
        this.shape_289.graphics.f("#C3A392").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_289.setTransform(694.1283, 209.0862, 1.331, 1.331);

        this.shape_290 = new cjs.Shape();
        this.shape_290.graphics.f("#BD986F").s().p("AhUBVIAAipICpAAIAACpg");
        this.shape_290.setTransform(699.2525, 235.1066, 1.331, 1.331);

        this.shape_291 = new cjs.Shape();
        this.shape_291.graphics.f("#ECECEC").s().p("AgeAdQgHAAgFgFQgEgEAAgHIAAgNQAAgUAugIIAVAFQAWAIAEAPIAAANQAAAHgEAEQgFAFgHAAg");
        this.shape_291.setTransform(432.3524, 344.1295, 1.3313, 1.3313);

        this.shape_292 = new cjs.Shape();
        this.shape_292.graphics.f("#B1B1B1").s().p("AgsApQgJAAgHgGQgGgHAAgJIAAgTQAAgeBCgKIAeAGQAfAMAGAWIAAATQAAAJgGAHQgHAGgJAAg");
        this.shape_292.setTransform(424.2313, 342.2324, 1.3313, 1.3313);

        this.shape_293 = new cjs.Shape();
        this.shape_293.graphics.f("#6F6F6E").s().p("AgtAqQgKAAgGgGQgHgHABgKIAAgTQAAgfBDgKIAfAHQAfALAHAXIAAATQAAAKgIAHQgGAGgKAAg");
        this.shape_293.setTransform(444.0348, 342.3655, 1.3313, 1.3313);

        this.shape_294 = new cjs.Shape();
        this.shape_294.graphics.f("#575756").s().p("AgRARQgHgHAAgKQAAgJAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAAKgIAHQgHAIgKAAQgJAAgIgIgAgMgLQgEAFgBAGQABAHAEAGQAGAEAGAAQAHAAAGgEQAEgGAAgHQAAgGgEgFQgGgFgHgBQgGABgGAFg");
        this.shape_294.setTransform(666.4334, 235.0265, 1.3313, 1.3313);

        this.shape_295 = new cjs.Shape();
        this.shape_295.graphics.f("#EA3323").s().p("AgSANIAAgKIAkgQIAAAag");
        this.shape_295.setTransform(666.2446, 271.4419, 1.331, 1.331);

        this.shape_296 = new cjs.Shape();
        this.shape_296.graphics.f("#FFFFFF").s().p("AgSgFIAkgQIAAAaIgkASg");
        this.shape_296.setTransform(666.2446, 261.3265, 1.331, 1.331);

        this.shape_297 = new cjs.Shape();
        this.shape_297.graphics.f("#FFFFFF").s().p("AgSgFIAkgQIAAAbIgkARg");
        this.shape_297.setTransform(666.2446, 246.2201, 1.331, 1.331);

        this.shape_298 = new cjs.Shape();
        this.shape_298.graphics.f("#FFFFFF").s().p("AgSgJIAkAAIAAADIgkAQg");
        this.shape_298.setTransform(666.2446, 240.2973, 1.331, 1.331);

        this.shape_299 = new cjs.Shape();
        this.shape_299.graphics.f("#EA3323").s().p("AgSgEIAkgSIAAAcIgkAQg");
        this.shape_299.setTransform(666.2446, 265.0532, 1.331, 1.331);

        this.shape_300 = new cjs.Shape();
        this.shape_300.graphics.f("#EA3323").s().p("AgSgFIAkgRIAAAcIgkAQg");
        this.shape_300.setTransform(666.2446, 250.0133, 1.331, 1.331);

        this.shape_301 = new cjs.Shape();
        this.shape_301.graphics.f("#EA3323").s().p("AgSgFIAkgRIAAAcIgkAQg");
        this.shape_301.setTransform(666.2446, 242.4269, 1.331, 1.331);

        this.shape_302 = new cjs.Shape();
        this.shape_302.graphics.f("#575756").s().p("AggANIAAgZIBBAAIAAAZg");
        this.shape_302.setTransform(530.0054, 206.6377, 1.3313, 1.3313);

        this.shape_303 = new cjs.Shape();
        this.shape_303.graphics.f("#575756").s().p("AgRASQgHgIAAgKQAAgJAHgHQAIgIAJAAQAKAAAIAIQAHAHAAAJQAAAKgHAIQgIAHgKAAQgJAAgIgHgAgLgLQgFAFAAAGQAAAHAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgHQAAgGgFgFQgFgFgHAAQgGAAgFAFg");
        this.shape_303.setTransform(530.072, 170.4255, 1.3313, 1.3313);

        this.shape_304 = new cjs.Shape();
        this.shape_304.graphics.f("#FFFFFF").s().p("AgSgFIAkgQIAAAbIgkARg");
        this.shape_304.setTransform(529.8874, 204.2969, 1.331, 1.331);

        this.shape_305 = new cjs.Shape();
        this.shape_305.graphics.f("#FFFFFF").s().p("AgSgFIAkgRIAAAbIgkARg");
        this.shape_305.setTransform(529.8874, 196.777, 1.331, 1.331);

        this.shape_306 = new cjs.Shape();
        this.shape_306.graphics.f("#FFFFFF").s().p("AgSgEIAkgRIAAAbIgkARg");
        this.shape_306.setTransform(529.8874, 189.1905, 1.331, 1.331);

        this.shape_307 = new cjs.Shape();
        this.shape_307.graphics.f("#FFFFFF").s().p("AgSgFIAkgQIAAAbIgkARg");
        this.shape_307.setTransform(529.8874, 181.6705, 1.331, 1.331);

        this.shape_308 = new cjs.Shape();
        this.shape_308.graphics.f("#FFFFFF").s().p("AgSgJIAkAAIAAADIgkAQg");
        this.shape_308.setTransform(529.8874, 175.7477, 1.331, 1.331);

        this.shape_309 = new cjs.Shape();
        this.shape_309.graphics.f("#EA3323").s().p("AgSgFIAkgRIAAAcIgkAQg");
        this.shape_309.setTransform(529.8874, 200.5036, 1.331, 1.331);

        this.shape_310 = new cjs.Shape();
        this.shape_310.graphics.f("#EA3323").s().p("AgSgFIAkgRIAAAcIgkAQg");
        this.shape_310.setTransform(529.8874, 192.9837, 1.331, 1.331);

        this.shape_311 = new cjs.Shape();
        this.shape_311.graphics.f("#EA3323").s().p("AgSgFIAkgQIAAAbIgkARg");
        this.shape_311.setTransform(529.8874, 185.4638, 1.331, 1.331);

        this.shape_312 = new cjs.Shape();
        this.shape_312.graphics.f("#EA3323").s().p("AgSgFIAkgRIAAAcIgkAQg");
        this.shape_312.setTransform(529.8874, 177.8773, 1.331, 1.331);

        this.shape_313 = new cjs.Shape();
        this.shape_313.graphics.f("#ECECEC").s().p("AgZAXQgFAAgEgEQgEgDAAgGIAAgKQAAgQAmgGIARAEQASAGAEAMIAAAKQAAAFgFAEQgDAEgGAAg");
        this.shape_313.setTransform(364.9129, 206.5048, 1.3319, 1.3319);

        this.shape_314 = new cjs.Shape();
        this.shape_314.graphics.f("#B1B1B1").s().p("AgqAoQgJAAgGgGQgHgGAAgKIAAgSQAAgdBAgKIAdAGQAeAMAGAVIAAASQAAAKgGAGQgHAGgJAAg");
        this.shape_314.setTransform(373.5036, 204.2073, 1.3319, 1.3319);

        this.shape_315 = new cjs.Shape();
        this.shape_315.graphics.f("#575756").s().p("AgqAoQgJAAgGgGQgHgGAAgKIAAgSQAAgdBAgKIAdAGQAeAMAGAVIAAASQAAAKgGAGQgHAGgJAAg");
        this.shape_315.setTransform(358.2535, 204.2073, 1.3319, 1.3319);

        this.shape_316 = new cjs.Shape();
        this.shape_316.graphics.f("#3C3C3B").s().p("AhgAGQgGgBAAgFQAAgFAGABIDCAAQAFgBAAAFQAAAFgFABg");
        this.shape_316.setTransform(363.9221, 76.1341, 1.3313, 1.3313);

        this.shape_317 = new cjs.Shape();
        this.shape_317.graphics.f("#FFFF55").s().p("AgNANIAbgaIAAAPQAAAFgDADQgCADgEAAg");
        this.shape_317.setTransform(377.359, 69.7365, 1.331, 1.331);

        this.shape_318 = new cjs.Shape();
        this.shape_318.graphics.f("#000000").s().p("AgdAdIA8g5IAAAeIgcAbg");
        this.shape_318.setTransform(375.163, 67.607, 1.331, 1.331);

        this.shape_319 = new cjs.Shape();
        this.shape_319.graphics.f("#000000").s().p("AhDAuIBghbIAjAAIADABIheBag");
        this.shape_319.setTransform(369.5729, 65.3776, 1.331, 1.331);

        this.shape_320 = new cjs.Shape();
        this.shape_320.graphics.f("#FFFF55").s().p("AhDAuIBghbIAnAAIhgBbg");
        this.shape_320.setTransform(364.3822, 65.3776, 1.331, 1.331);

        this.shape_321 = new cjs.Shape();
        this.shape_321.graphics.f("#000000").s().p("AhDAuIBghbIAnAAIhgBbg");
        this.shape_321.setTransform(359.1248, 65.3776, 1.331, 1.331);

        this.shape_322 = new cjs.Shape();
        this.shape_322.graphics.f("#FFFF55").s().p("AgtAuQgDAAgDgDQgCgDAAgFIAAgPIBEhBIAoAAIhgBbg");
        this.shape_322.setTransform(355.6643, 65.3776, 1.331, 1.331);

        this.shape_323 = new cjs.Shape();
        this.shape_323.graphics.f("#FFFF55").s().p("AgOgCQAAgFACgDQADgDADAAIAVAAIgdAbg");
        this.shape_323.setTransform(350.407, 61.1185, 1.331, 1.331);

        this.shape_324 = new cjs.Shape();
        this.shape_324.graphics.f("#3C3C3B").s().p("AgRASQgIgHAAgLQAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIgAgKgKQgFAEAAAGQAAAHAFAEQAFAFAFAAQAHAAAEgFQAFgEAAgHQAAgGgFgEQgEgFgHAAQgFAAgFAFg");
        this.shape_324.setTransform(373.144, 51.4299, 1.33, 1.33);

        this.shape_325 = new cjs.Shape();
        this.shape_325.graphics.f("#575756").s().p("AgGBeIAAi7QABgHAFAAQAHAAAAAHIAAC7QAAAHgHAAQgFAAgBgHg");
        this.shape_325.setTransform(373.144, 64.8295, 1.33, 1.33);

        this.shape_326 = new cjs.Shape();
        this.shape_326.graphics.f("#3C3C3B").s().p("AgRASQgIgHAAgLQAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIgAgKgKQgFAEAAAGQAAAGAFAFQAEAFAGAAQAHAAAEgFQAFgFAAgGQAAgGgFgEQgEgFgHAAQgGAAgEAFg");
        this.shape_326.setTransform(353.7143, 51.4332, 1.3305, 1.3305);

        this.shape_327 = new cjs.Shape();
        this.shape_327.graphics.f("#3C3C3B").s().p("AhgAGQgGgBAAgFQAAgFAGABIDCAAQAFgBAAAFQAAAFgFABg");
        this.shape_327.setTransform(275.7881, 207.3366, 1.3313, 1.3313);

        this.shape_328 = new cjs.Shape();
        this.shape_328.graphics.f("#575756").s().p("AhgAFQgGAAAAgFQAAgEAGAAIDCAAQAFAAAAAEQAAAFgFAAg");
        this.shape_328.setTransform(275.7881, 208.7678, 1.3313, 1.3313);

        this.shape_329 = new cjs.Shape();
        this.shape_329.graphics.f("#FFFF55").s().p("AgNANIAbgaIAAAPQAAAFgDADQgCADgDAAg");
        this.shape_329.setTransform(289.2493, 200.9029, 1.331, 1.331);

        this.shape_330 = new cjs.Shape();
        this.shape_330.graphics.f("#000000").s().p("AgeAdIA8g5IAAAeIgcAbg");
        this.shape_330.setTransform(287.0532, 198.8067, 1.331, 1.331);

        this.shape_331 = new cjs.Shape();
        this.shape_331.graphics.f("#FFFF55").s().p("AgxAuIBehbQAFADAAAHIAAAXIg8A6g");
        this.shape_331.setTransform(284.4245, 196.6106, 1.331, 1.331);

        this.shape_332 = new cjs.Shape();
        this.shape_332.graphics.f("#FFFF55").s().p("AgtAuQgEAAgCgDQgCgDgBgFIAAgPIBFhBIAnAAIhfBbg");
        this.shape_332.setTransform(267.5546, 196.544, 1.331, 1.331);

        this.shape_333 = new cjs.Shape();
        this.shape_333.graphics.f("#FFFF55").s().p("AgOgCQAAgFADgDQACgDADAAIAVAAIgdAbg");
        this.shape_333.setTransform(262.2973, 192.285, 1.331, 1.331);

        this.shape_334 = new cjs.Shape();
        this.shape_334.graphics.f("#3C3C3B").s().p("AgSASQgHgHAAgLQAAgKAHgHQAIgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIgAgLgKQgEAFAAAFQAAAHAEAEQAFAFAGAAQAHAAAFgFQAEgEAAgHQAAgFgEgFQgGgFgGAAQgGAAgFAFg");
        this.shape_334.setTransform(285.0989, 182.5001, 1.33, 1.33);

        this.shape_335 = new cjs.Shape();
        this.shape_335.graphics.f("#3C3C3B").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAIAIQAHAHAAAKQAAALgHAHQgIAIgLAAQgJAAgIgIgAgKgKQgFAFAAAFQAAAGAFAFQAFAFAFAAQAHAAAFgFQAEgEAAgHQAAgFgEgFQgGgFgGAAQgFAAgFAFg");
        this.shape_335.setTransform(265.5995, 182.5575, 1.3305, 1.3305);

        this.shape_336 = new cjs.Shape();
        this.shape_336.graphics.f("#EDB44F").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
        this.shape_336.setTransform(265.5995, 182.5575, 1.3305, 1.3305);

        this.shape_337 = new cjs.Shape();
        this.shape_337.graphics.f("#FFFFFF").s().p("AgfgkIA/AkIg/Alg");
        this.shape_337.setTransform(464.6244, 150.8761, 1.3296, 1.3296);

        this.shape_338 = new cjs.Shape();
        this.shape_338.graphics.f("#FFFFFF").s().p("AgpASIAAgjIBTAAIAAAjg");
        this.shape_338.setTransform(456.9129, 150.8761, 1.3296, 1.3296);

        this.shape_339 = new cjs.Shape();
        this.shape_339.graphics.f("#FFFFFF").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQArAAAfAfQAfAfAAAqQAAArgfAfQgfAfgrAAQgqAAgfgfgAhChCQgcAcAAAmQAAAnAcAcQAcAcAmAAQAnAAAcgcQAcgcAAgnQAAgmgcgcQgcgcgnAAQgmAAgcAcg");
        this.shape_339.setTransform(460.2914, 150.8777, 1.33, 1.33);

        this.shape_340 = new cjs.Shape();
        this.shape_340.graphics.f("#D75930").s().p("AhGBHQgdgdAAgqQAAgoAdgdQAegeAoAAQApAAAeAeQAdAdAAAoQAAAqgdAdQgdAdgqAAQgoAAgegdg");
        this.shape_340.setTransform(460.2914, 150.8777, 1.33, 1.33);

        this.shape_341 = new cjs.Shape();
        this.shape_341.graphics.f("#575756").s().p("AgFC6QgDgDAAgEIAAllQAAgDADgDQADgDACAAQAEAAACADQADADAAADIAAFlQAAAEgDADQgCACgEAAQgCAAgDgCg");
        this.shape_341.setTransform(460.6441, 184.1979, 1.331, 1.331);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.shape_150
            }, {
                t: this.shape_149
            }, {
                t: this.shape_148
            }, {
                t: this.shape_147,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 355.0666,
                    y: 102.5063
                }
            }, {
                t: this.shape_146
            }, {
                t: this.shape_145,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 355.0666,
                    y: 102.5063
                }
            }, {
                t: this.shape_144
            }, {
                t: this.shape_143,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 360.2203,
                    y: 76.3362
                }
            }, {
                t: this.shape_142
            }, {
                t: this.shape_141
            }, {
                t: this.shape_140,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 392.0795,
                    y: 334.6235
                }
            }, {
                t: this.shape_139
            }, {
                t: this.shape_138,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 392.0795,
                    y: 334.6235
                }
            }, {
                t: this.shape_137
            }, {
                t: this.shape_136
            }, {
                t: this.shape_135
            }, {
                t: this.shape_134
            }, {
                t: this.shape_133,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 625.8031,
                    y: 224.4549
                }
            }, {
                t: this.shape_132,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 625.8031,
                    y: 224.4549
                }
            }, {
                t: this.shape_131,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 625.8031,
                    y: 224.4549
                }
            }, {
                t: this.shape_130
            }, {
                t: this.shape_129
            }, {
                t: this.shape_128,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 155.4779,
                    y: 163.8487
                }
            }, {
                t: this.shape_127
            }, {
                t: this.shape_126,
                p: {
                    scaleX: 1.3382,
                    scaleY: 1.3382,
                    x: 155.7443,
                    y: 215.0977
                }
            }, {
                t: this.shape_125,
                p: {
                    scaleX: 1.3382,
                    scaleY: 1.3382,
                    x: 155.7443,
                    y: 215.0977
                }
            }, {
                t: this.shape_124,
                p: {
                    scaleX: 1.3382,
                    scaleY: 1.3382,
                    x: 155.7443,
                    y: 215.0977
                }
            }, {
                t: this.shape_123,
                p: {
                    scaleX: 1.3382,
                    scaleY: 1.3382,
                    x: 155.7443,
                    y: 215.0977
                }
            }, {
                t: this.shape_122,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 155.8125,
                    y: 196.1095
                }
            }, {
                t: this.shape_121
            }, {
                t: this.shape_120
            }, {
                t: this.shape_119
            }, {
                t: this.shape_118
            }, {
                t: this.shape_117
            }, {
                t: this.shape_116
            }, {
                t: this.shape_115
            }, {
                t: this.shape_114
            }, {
                t: this.shape_113
            }, {
                t: this.shape_112
            }, {
                t: this.shape_111
            }, {
                t: this.shape_110
            }, {
                t: this.shape_109
            }, {
                t: this.shape_108
            }, {
                t: this.shape_107
            }, {
                t: this.shape_106
            }, {
                t: this.shape_105
            }, {
                t: this.shape_104
            }, {
                t: this.shape_103
            }, {
                t: this.shape_102
            }, {
                t: this.shape_101
            }, {
                t: this.shape_100
            }, {
                t: this.shape_99
            }, {
                t: this.shape_98
            }, {
                t: this.shape_97
            }, {
                t: this.shape_96
            }, {
                t: this.shape_95
            }, {
                t: this.shape_94
            }, {
                t: this.shape_93
            }, {
                t: this.shape_92,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 399.2746,
                    y: 140.8913
                }
            }, {
                t: this.shape_91
            }, {
                t: this.shape_90
            }, {
                t: this.shape_89
            }, {
                t: this.shape_88,
                p: {
                    scaleX: 1.3378,
                    scaleY: 1.3378,
                    x: 541.8494,
                    y: 224.322
                }
            }, {
                t: this.shape_87
            }, {
                t: this.shape_86
            }, {
                t: this.shape_85,
                p: {
                    scaleX: 1.3372,
                    scaleY: 1.3372,
                    x: 561.2754,
                    y: 224.2484
                }
            }, {
                t: this.shape_84,
                p: {
                    scaleX: 1.3372,
                    scaleY: 1.3372,
                    x: 561.242,
                    y: 210.7762
                }
            }, {
                t: this.shape_83
            }, {
                t: this.shape_82
            }, {
                t: this.shape_81,
                p: {
                    scaleX: 1.3382,
                    scaleY: 1.3382,
                    x: 541.165,
                    y: 223.16
                }
            }, {
                t: this.shape_80
            }, {
                t: this.shape_79,
                p: {
                    scaleX: 1.3382,
                    scaleY: 1.3382,
                    x: 547.287,
                    y: 224.8996
                }
            }, {
                t: this.shape_78,
                p: {
                    scaleX: 1.3382,
                    scaleY: 1.3382,
                    x: 552.5727,
                    y: 224.8996
                }
            }, {
                t: this.shape_77,
                p: {
                    scaleX: 1.3382,
                    scaleY: 1.3382,
                    x: 557.7915,
                    y: 224.8996
                }
            }, {
                t: this.shape_76,
                p: {
                    scaleX: 1.3382,
                    scaleY: 1.3382,
                    x: 560.8023,
                    y: 224.9665
                }
            }, {
                t: this.shape_75
            }, {
                t: this.shape_74
            }, {
                t: this.shape_73,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 552.2457,
                    y: 237.2053
                }
            }, {
                t: this.shape_72
            }, {
                t: this.shape_71
            }, {
                t: this.shape_70
            }, {
                t: this.shape_69
            }, {
                t: this.shape_68
            }, {
                t: this.shape_67
            }, {
                t: this.shape_66
            }, {
                t: this.shape_65
            }, {
                t: this.shape_64
            }, {
                t: this.shape_63
            }, {
                t: this.shape_62
            }, {
                t: this.shape_61
            }, {
                t: this.shape_60
            }, {
                t: this.shape_59
            }, {
                t: this.shape_58
            }, {
                t: this.shape_57
            }, {
                t: this.shape_56
            }, {
                t: this.shape_55
            }, {
                t: this.shape_54
            }, {
                t: this.shape_53
            }, {
                t: this.shape_52
            }, {
                t: this.shape_51
            }, {
                t: this.shape_50
            }, {
                t: this.shape_49
            }, {
                t: this.shape_48
            }, {
                t: this.shape_47
            }, {
                t: this.shape_46
            }, {
                t: this.shape_45,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 511.0161,
                    y: 197.8832
                }
            }, {
                t: this.shape_44
            }, {
                t: this.shape_43,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 510.9157,
                    y: 236.4355
                }
            }, {
                t: this.shape_42
            }, {
                t: this.shape_41
            }, {
                t: this.shape_40
            }, {
                t: this.shape_39
            }, {
                t: this.shape_38
            }, {
                t: this.shape_37
            }, {
                t: this.shape_36
            }, {
                t: this.shape_35
            }, {
                t: this.shape_34
            }, {
                t: this.shape_33
            }, {
                t: this.shape_32
            }, {
                t: this.shape_31,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 296.5018,
                    y: 308.42
                }
            }, {
                t: this.shape_30
            }, {
                t: this.shape_29,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 296.4349,
                    y: 346.9389
                }
            }, {
                t: this.shape_28,
                p: {
                    scaleX: 1.3386,
                    scaleY: 1.3386,
                    x: 296.4683,
                    y: 344.8305
                }
            }]
        }, 1).to({
            state: [{
                t: this.shape_241
            }, {
                t: this.shape_240
            }, {
                t: this.shape_239
            }, {
                t: this.shape_238
            }, {
                t: this.shape_237
            }, {
                t: this.shape_236
            }, {
                t: this.shape_235
            }, {
                t: this.shape_234
            }, {
                t: this.shape_233
            }, {
                t: this.shape_232,
                p: {
                    scaleX: 1.3396,
                    scaleY: 1.3396,
                    x: 452.2637,
                    y: 239.8735
                }
            }, {
                t: this.shape_231,
                p: {
                    scaleX: 1.3396,
                    scaleY: 1.3396,
                    x: 452.2637,
                    y: 226.3775
                }
            }, {
                t: this.shape_230
            }, {
                t: this.shape_229
            }, {
                t: this.shape_228
            }, {
                t: this.shape_227
            }, {
                t: this.shape_226
            }, {
                t: this.shape_225,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 451.6248,
                    y: 238.7832
                }
            }, {
                t: this.shape_224
            }, {
                t: this.shape_79,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 457.7563,
                    y: 240.492
                }
            }, {
                t: this.shape_223
            }, {
                t: this.shape_222
            }, {
                t: this.shape_221
            }, {
                t: this.shape_220
            }, {
                t: this.shape_219
            }, {
                t: this.shape_218
            }, {
                t: this.shape_217
            }, {
                t: this.shape_85,
                p: {
                    scaleX: 1.3396,
                    scaleY: 1.3396,
                    x: 596.0648,
                    y: 334.513
                }
            }, {
                t: this.shape_216
            }, {
                t: this.shape_215
            }, {
                t: this.shape_88,
                p: {
                    scaleX: 1.3392,
                    scaleY: 1.3392,
                    x: 615.6606,
                    y: 334.4276
                }
            }, {
                t: this.shape_214,
                p: {
                    scaleX: 1.3392,
                    scaleY: 1.3392,
                    x: 615.6606,
                    y: 320.9352
                }
            }, {
                t: this.shape_213
            }, {
                t: this.shape_212
            }, {
                t: this.shape_81,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 595.498,
                    y: 333.4701
                }
            }, {
                t: this.shape_211
            }, {
                t: this.shape_210,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 601.6295,
                    y: 335.2124
                }
            }, {
                t: this.shape_78,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 606.9234,
                    y: 335.2124
                }
            }, {
                t: this.shape_77,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 612.1503,
                    y: 335.2124
                }
            }, {
                t: this.shape_209
            }, {
                t: this.shape_208
            }, {
                t: this.shape_207
            }, {
                t: this.shape_206
            }, {
                t: this.shape_205
            }, {
                t: this.shape_204
            }, {
                t: this.shape_203
            }, {
                t: this.shape_202
            }, {
                t: this.shape_201
            }, {
                t: this.shape_200
            }, {
                t: this.shape_199
            }, {
                t: this.shape_198
            }, {
                t: this.shape_197
            }, {
                t: this.shape_196
            }, {
                t: this.shape_195
            }, {
                t: this.shape_194
            }, {
                t: this.shape_193
            }, {
                t: this.shape_192
            }, {
                t: this.shape_191,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 540.9843,
                    y: 229.5691
                }
            }, {
                t: this.shape_190
            }, {
                t: this.shape_189
            }, {
                t: this.shape_188
            }, {
                t: this.shape_187
            }, {
                t: this.shape_186,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 540.9843,
                    y: 233.3888
                }
            }, {
                t: this.shape_185,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 540.9843,
                    y: 240.961
                }
            }, {
                t: this.shape_184
            }, {
                t: this.shape_183,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 540.9843,
                    y: 251.1802
                }
            }, {
                t: this.shape_182
            }, {
                t: this.shape_181
            }, {
                t: this.shape_29,
                p: {
                    scaleX: 1.3407,
                    scaleY: 1.3407,
                    x: 541.0409,
                    y: 253.1149
                }
            }, {
                t: this.shape_180
            }, {
                t: this.shape_179
            }, {
                t: this.shape_128,
                p: {
                    scaleX: 1.3411,
                    scaleY: 1.3411,
                    x: 153.0761,
                    y: 82.3605
                }
            }, {
                t: this.shape_178
            }, {
                t: this.shape_133,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 152.721,
                    y: 133.676
                }
            }, {
                t: this.shape_125,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 152.721,
                    y: 133.676
                }
            }, {
                t: this.shape_138,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 152.721,
                    y: 133.676
                }
            }, {
                t: this.shape_131,
                p: {
                    scaleX: 1.3402,
                    scaleY: 1.3402,
                    x: 152.721,
                    y: 133.676
                }
            }, {
                t: this.shape_122,
                p: {
                    scaleX: 1.3407,
                    scaleY: 1.3407,
                    x: 152.7323,
                    y: 114.6511
                }
            }, {
                t: this.shape_177
            }, {
                t: this.shape_176
            }, {
                t: this.shape_175
            }, {
                t: this.shape_174
            }, {
                t: this.shape_173
            }, {
                t: this.shape_172
            }, {
                t: this.shape_171
            }, {
                t: this.shape_170
            }, {
                t: this.shape_169
            }, {
                t: this.shape_168
            }, {
                t: this.shape_167
            }, {
                t: this.shape_166
            }, {
                t: this.shape_165
            }, {
                t: this.shape_164
            }, {
                t: this.shape_163
            }, {
                t: this.shape_162
            }, {
                t: this.shape_161
            }, {
                t: this.shape_160
            }, {
                t: this.shape_159
            }, {
                t: this.shape_158
            }, {
                t: this.shape_157
            }, {
                t: this.shape_156
            }, {
                t: this.shape_155
            }, {
                t: this.shape_154
            }, {
                t: this.shape_153
            }, {
                t: this.shape_152
            }, {
                t: this.shape_151
            }, {
                t: this.shape_126,
                p: {
                    scaleX: 1.3407,
                    scaleY: 1.3407,
                    x: 165,
                    y: 177.6944
                }
            }, {
                t: this.shape_140,
                p: {
                    scaleX: 1.3407,
                    scaleY: 1.3407,
                    x: 165,
                    y: 177.6944
                }
            }, {
                t: this.shape_124,
                p: {
                    scaleX: 1.3407,
                    scaleY: 1.3407,
                    x: 165.0335,
                    y: 177.6944
                }
            }, {
                t: this.shape_147,
                p: {
                    scaleX: 1.3407,
                    scaleY: 1.3407,
                    x: 136.1073,
                    y: 177.6944
                }
            }, {
                t: this.shape_132,
                p: {
                    scaleX: 1.3407,
                    scaleY: 1.3407,
                    x: 136.1073,
                    y: 177.6944
                }
            }, {
                t: this.shape_123,
                p: {
                    scaleX: 1.3407,
                    scaleY: 1.3407,
                    x: 136.1408,
                    y: 177.6944
                }
            }]
        }, 1).to({
            state: [{
                t: this.shape_92,
                p: {
                    scaleX: 1.3313,
                    scaleY: 1.3313,
                    x: 460.7763,
                    y: 208.3007
                }
            }, {
                t: this.shape_341
            }, {
                t: this.shape_340
            }, {
                t: this.shape_339
            }, {
                t: this.shape_338
            }, {
                t: this.shape_337
            }, {
                t: this.shape_232,
                p: {
                    scaleX: 1.3305,
                    scaleY: 1.3305,
                    x: 265.6328,
                    y: 195.9627
                }
            }, {
                t: this.shape_336
            }, {
                t: this.shape_335
            }, {
                t: this.shape_88,
                p: {
                    scaleX: 1.33,
                    scaleY: 1.33,
                    x: 285.0989,
                    y: 195.8997
                }
            }, {
                t: this.shape_31,
                p: {
                    scaleX: 1.33,
                    scaleY: 1.33,
                    x: 285.0989,
                    y: 182.5001
                }
            }, {
                t: this.shape_334
            }, {
                t: this.shape_333
            }, {
                t: this.shape_225,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 264.9259,
                    y: 194.8138
                }
            }, {
                t: this.shape_332
            }, {
                t: this.shape_210,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 271.0151,
                    y: 196.544
                }
            }, {
                t: this.shape_78,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 276.2724,
                    y: 196.544
                }
            }, {
                t: this.shape_77,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 281.4632,
                    y: 196.544
                }
            }, {
                t: this.shape_331
            }, {
                t: this.shape_330
            }, {
                t: this.shape_329
            }, {
                t: this.shape_328
            }, {
                t: this.shape_327
            }, {
                t: this.shape_85,
                p: {
                    scaleX: 1.3305,
                    scaleY: 1.3305,
                    x: 353.7143,
                    y: 64.8384
                }
            }, {
                t: this.shape_231,
                p: {
                    scaleX: 1.3305,
                    scaleY: 1.3305,
                    x: 353.7143,
                    y: 51.4332
                }
            }, {
                t: this.shape_326
            }, {
                t: this.shape_325
            }, {
                t: this.shape_214,
                p: {
                    scaleX: 1.33,
                    scaleY: 1.33,
                    x: 373.144,
                    y: 51.4299
                }
            }, {
                t: this.shape_324
            }, {
                t: this.shape_323
            }, {
                t: this.shape_81,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 353.0357,
                    y: 63.6474
                }
            }, {
                t: this.shape_322
            }, {
                t: this.shape_321
            }, {
                t: this.shape_320
            }, {
                t: this.shape_319
            }, {
                t: this.shape_76,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 372.5343,
                    y: 65.4442
                }
            }, {
                t: this.shape_318
            }, {
                t: this.shape_317
            }, {
                t: this.shape_73,
                p: {
                    scaleX: 1.3313,
                    scaleY: 1.3313,
                    x: 363.9221,
                    y: 77.5653
                }
            }, {
                t: this.shape_316
            }, {
                t: this.shape_315
            }, {
                t: this.shape_314
            }, {
                t: this.shape_313
            }, {
                t: this.shape_312
            }, {
                t: this.shape_311
            }, {
                t: this.shape_310
            }, {
                t: this.shape_309
            }, {
                t: this.shape_308
            }, {
                t: this.shape_307
            }, {
                t: this.shape_306
            }, {
                t: this.shape_305
            }, {
                t: this.shape_304
            }, {
                t: this.shape_183,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 529.8874,
                    y: 206.859
                }
            }, {
                t: this.shape_45,
                p: {
                    scaleX: 1.3313,
                    scaleY: 1.3313,
                    x: 530.072,
                    y: 170.4588
                }
            }, {
                t: this.shape_303
            }, {
                t: this.shape_43,
                p: {
                    scaleX: 1.3313,
                    scaleY: 1.3313,
                    x: 530.0054,
                    y: 208.7345
                }
            }, {
                t: this.shape_302
            }, {
                t: this.shape_301
            }, {
                t: this.shape_300
            }, {
                t: this.shape_191,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 666.2446,
                    y: 257.5333
                }
            }, {
                t: this.shape_299
            }, {
                t: this.shape_298
            }, {
                t: this.shape_297
            }, {
                t: this.shape_186,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 666.2446,
                    y: 253.74
                }
            }, {
                t: this.shape_296
            }, {
                t: this.shape_185,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 666.2446,
                    y: 268.8465
                }
            }, {
                t: this.shape_295
            }, {
                t: this.shape_84,
                p: {
                    scaleX: 1.3313,
                    scaleY: 1.3313,
                    x: 666.4334,
                    y: 235.0265
                }
            }, {
                t: this.shape_294
            }, {
                t: this.shape_29,
                p: {
                    scaleX: 1.3313,
                    scaleY: 1.3313,
                    x: 666.3668,
                    y: 273.3022
                }
            }, {
                t: this.shape_28,
                p: {
                    scaleX: 1.3313,
                    scaleY: 1.3313,
                    x: 666.4001,
                    y: 271.2054
                }
            }, {
                t: this.shape_293
            }, {
                t: this.shape_292
            }, {
                t: this.shape_291
            }, {
                t: this.shape_133,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 694.1283,
                    y: 261.1269
                }
            }, {
                t: this.shape_143,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 694.1283,
                    y: 261.1269
                }
            }, {
                t: this.shape_145,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 694.1615,
                    y: 261.1269
                }
            }, {
                t: this.shape_290
            }, {
                t: this.shape_140,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 699.2525,
                    y: 235.1066
                }
            }, {
                t: this.shape_131,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 699.2525,
                    y: 235.1066
                }
            }, {
                t: this.shape_289
            }, {
                t: this.shape_132,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 694.1283,
                    y: 209.0862
                }
            }, {
                t: this.shape_138,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 694.1615,
                    y: 209.0862
                }
            }, {
                t: this.shape_288
            }, {
                t: this.shape_287
            }, {
                t: this.shape_286
            }, {
                t: this.shape_285
            }, {
                t: this.shape_284
            }, {
                t: this.shape_283
            }, {
                t: this.shape_282
            }, {
                t: this.shape_281
            }, {
                t: this.shape_280
            }, {
                t: this.shape_279
            }, {
                t: this.shape_278
            }, {
                t: this.shape_277
            }, {
                t: this.shape_276
            }, {
                t: this.shape_275
            }, {
                t: this.shape_128,
                p: {
                    scaleX: 1.3319,
                    scaleY: 1.3319,
                    x: 165.7971,
                    y: 218.6906
                }
            }, {
                t: this.shape_274
            }, {
                t: this.shape_126,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 166.0354,
                    y: 269.5452
                }
            }, {
                t: this.shape_125,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 166.0354,
                    y: 269.5452
                }
            }, {
                t: this.shape_124,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 166.0354,
                    y: 269.5452
                }
            }, {
                t: this.shape_123,
                p: {
                    scaleX: 1.331,
                    scaleY: 1.331,
                    x: 166.0354,
                    y: 269.5452
                }
            }, {
                t: this.shape_273
            }, {
                t: this.shape_272
            }, {
                t: this.shape_271
            }, {
                t: this.shape_270
            }, {
                t: this.shape_269
            }, {
                t: this.shape_268
            }, {
                t: this.shape_267
            }, {
                t: this.shape_266
            }, {
                t: this.shape_265
            }, {
                t: this.shape_264
            }, {
                t: this.shape_263
            }, {
                t: this.shape_262
            }, {
                t: this.shape_261
            }, {
                t: this.shape_260
            }, {
                t: this.shape_259
            }, {
                t: this.shape_258
            }, {
                t: this.shape_257
            }, {
                t: this.shape_256
            }, {
                t: this.shape_255
            }, {
                t: this.shape_254
            }, {
                t: this.shape_253
            }, {
                t: this.shape_252
            }, {
                t: this.shape_251
            }, {
                t: this.shape_250
            }, {
                t: this.shape_249
            }, {
                t: this.shape_248
            }, {
                t: this.shape_247
            }, {
                t: this.shape_246
            }, {
                t: this.shape_245
            }, {
                t: this.shape_244
            }, {
                t: this.shape_243
            }, {
                t: this.shape_242
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // wall
        this.pared = new lib.pared();
        this.pared.name = "pared";
        this.pared.setTransform(409.55, 198.05, 1.3413, 1.3413, 0, 0, 0, 0.1, 0.1);

        this.pared2 = new lib.puerta2();
        this.pared2.name = "pared2";
        this.pared2.setTransform(365, 181.5);

        this.pared3 = new lib.pared3();
        this.pared3.name = "pared3";
        this.pared3.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.pared
            }]
        }, 1).to({
            state: [{
                t: this.pared2
            }]
        }, 1).to({
            state: [{
                t: this.pared3
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // well done
        this.opciones = new lib.sdfasfd();
        this.opciones.name = "opciones";
        this.opciones.setTransform(579.5, 230.15, 1, 1, 0, 0, 0, 214.5, 126.5);
        this.opciones._off = true;

        this.timeline.addTween(cjs.Tween.get(this.opciones).wait(4).to({
            _off: false
        }, 0).wait(1));

        // fondo
        this.shape_342 = new cjs.Shape();
        this.shape_342.graphics.f("#3C3C3B").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5Vg");
        this.shape_342.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_342).wait(5));

        this._renderFirstFrame();

    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(176.9, 172.5, 558.1, 194.5);
    // library properties:
    lib.properties = {
        id: '961C296F70897F4AAEF666856D75D3AA',
        width: 730,
        height: 367,
        fps: 20,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [{
                src: "sounds/toing.mp3",
                id: "toing"
            },
            {
                src: "sounds/silbato22.mp3",
                id: "silbato22"
            },
            {
                src: "sounds/aplauso.mp3",
                id: "aplauso"
            },
            {
                src: "sounds/pop2.mp3",
                id: "pop2"
            }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['961C296F70897F4AAEF666856D75D3AA'] = {
        getStage: function() {
            return exportRoot.stage;
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }


    an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            var w = lib.properties.width,
                h = lib.properties.height;
            var iw = window.innerWidth,
                ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1,
                xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            domContainers[0].width = w * pRatio * sRatio;
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function(container) {
                container.style.width = w * sRatio + 'px';
                container.style.height = h * sRatio + 'px';
            });
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    an.handleSoundStreamOnTick = function(event) {
        if (!event.paused) {
            var stageChild = stage.getChildAt(0);
            if (!stageChild.paused || stageChild.ignorePause) {
                stageChild.syncStreamSounds();
            }
        }
    }
    an.handleFilterCache = function(event) {
        if (!event.paused) {
            var target = event.target;
            if (target) {
                if (target.filterCacheList) {
                    for (var index = 0; index < target.filterCacheList.length; index++) {
                        var cacheInst = target.filterCacheList[index];
                        if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
                            cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                        }
                    }
                }
            }
        }
    }


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;