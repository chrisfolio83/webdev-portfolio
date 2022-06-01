(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib = {};
	var ss = {};
	var img = {};
	lib.ssMetadata = [
		{
			name: "asrock-banner-atlas",
			frames: [[0, 0, 800, 998], [802, 0, 454, 743], [0, 1000, 1000, 657]]
		}
];

	// symbols:

	(lib.Motherboard1 = function () {
		this.initialize(ss["asrock-banner-atlas"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.Motherboards2 = function () {
		this.initialize(ss["asrock-banner-atlas"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.TextureGrunge = function () {
		this.initialize(ss["asrock-banner-atlas"]);
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	// helper functions:

	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


	(lib.MB2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.instance = new lib.Motherboards2();
		this.instance.parent = this;
		this.instance.setTransform(-112.95, -184.9, 0.4977, 0.4977);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.MB2, new cjs.Rectangle(-112.9, -184.9, 225.9, 369.8), null);


	(lib.MB1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// MB1
		this.instance = new lib.Motherboard1();
		this.instance.parent = this;
		this.instance.setTransform(-197.7, -246.6, 0.4942, 0.4942);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.MB1, new cjs.Rectangle(-197.7, -246.6, 395.4, 493.29999999999995), null);


	(lib.Glow = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.rf(["#FF0000", "rgba(255,0,0,0)", "rgba(255,0,0,0)"], [0, 1, 1], -64, -14, 0, -64, -14, 565.9).s().p("EhcyA8xUgmdgZLAAAgjmUAAAgjlAmdgZLUAmcgZLA2WAAAUA2XAAAAmdAZLUAmcAZLAAAAjlUAAAAjmgmcAZLUgmdAZLg2XAAAUg2WAAAgmcgZLg");
		this.shape.setTransform(2, 0);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Glow, new cjs.Rectangle(-838, -550, 1680, 1100), null);


	(lib.Expectation = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AXRCXQgZgLgRgVQgSgWgKgeQgKgfAAglQAAgmAKgeQAKgeASgUQARgVAZgLQAZgLAeAAQAdAAAZALQAZALASAVQASAVAKAeQAJAeAAAlQAAAlgJAfQgKAegSAWQgSAVgZALQgZAMgdAAQgeAAgZgMgAXhh3QgRAJgMARQgMAQgHAYQgGAXAAAdQAAAdAGAYQAHAYAMARQAMARARAJQASAJAVAAQAVAAARgJQARgJAMgRQAMgRAHgYQAHgYAAgdQAAgdgHgXQgHgYgMgQQgMgRgRgJQgRgIgVAAQgVAAgSAIgAmwCYQgZgLgTgVQgSgVgKgeQgLgfAAgmQAAglALgeQAKgeATgWQATgVAZgLQAagLAeAAQAdAAAWALQAVAMAOAQIgVAZQgNgNgQgIQgPgIgVAAQgWAAgTAIQgSAJgNARQgNARgHAXQgGAYAAAdQAAAdAGAXQAHAYANARQAMARASAJQASAJAXAAQAXAAARgJQASgKAPgQIAWAYQgTAWgXAMQgYAMgfAAQgdAAgZgLgEAgfACdIiUkGIgCAAIAFBjIAACjIgmAAIAAk6IApAAICUEGIACAAIgFkGIAmAAIAAE6gAR/CdIAAk6IAoAAIAAE6gAMqCdIAAkYIhfAAIAAgiIDmAAIAAAiIhfAAIAAEYgAH7CdIgdhgIhzAAIgfBgIgoAAIBqk6IAtAAIBrE6gAHTAdIguiZIgCAAIguCZIBeAAgAgHCdIAAkYIhfAAIAAgiIDlAAIAAAiIhfAAIAAEYgAuDCdIAAk6IC1AAIAAAiIiNAAIAABjIB3AAIAAAhIh3AAIAAByICSAAIAAAigA0pCdIAAk6IBaAAQAbAAAVAFQAWAFAQALQAPALAJARQAIASAAAaQAAAZgIASQgJASgPALQgPAMgWAGQgVAHgaAAIg0AAIAAB8gA0BAAIAvAAQAqAAAUgPQATgPAAgiQAAgigUgNQgVgNgqAAIgtAAgA4dCdIhJiHIgCAAIhGCHIgqAAIBbihIhViZIAsAAIBDB/IACAAIBAh/IAqAAIhVCaIBbCggEghHACdIAAk6IC1AAIAAAiIiNAAIAABjIB3AAIAAAhIh3AAIAAByICSAAIAAAig");
		this.shape.setTransform(0.025, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Expectation, new cjs.Rectangle(-212, -16.3, 424.1, 32.7), null);


	(lib.Beyond = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AA4C8Qg4gOgpgaQgpgbgWglQgXgmAAgvQAAgwAXglQAWgmApgZQApgaA4gOQA5gNBFAAQBFAAA5ANQA5AOApAaQApAaAWAlQAXAlAAAwQAAAvgXAmQgXAlgoAbQgpAag5AOQg5APhFAAQhFAAg5gPgABHhdQgpAhAAA7QAAA7ApAiQApAjBGAAQBGAAApgjQAogiAAg7QAAg7goghQgpghhGAAQhGAAgpAhgAUjDDIAAmFIDAAAQBPAAA+ALQA/ALAtAYQAtAXAYAlQAYAlAAAyQAAAygYAlQgYAlgsAYQgsAYg9ANQg9AMhLgBgAW9B8IAdAAQAsAAAjgGQAkgHAZgPQAZgOAOgYQAOgZAAgiQAAgjgOgXQgOgYgZgOQgZgOgkgHQgjgFgsAAIgdAAgAPkDDIixjCIhDhVIgEAAIALBGQAHAkAAAjIAACKIiSAAIAAmFICeAAICxDBIBDBWIAEAAIgLhGQgHglAAgjIAAiJICSAAIAAGFgAoODDIAAiKIjOj7IClAAIB0CwIAFAAIB2iwICiAAIjOD7IAACKgAzADDIAAmFIGrAAIAABKIkRAAIAABPIDoAAIAABIIjoAAIAABaIEbAAIAABKgA84DDIAAmFIDpAAQA1gBAuAFQAtAEAiALQAiAMAUATQATASAAAdQAAANgGANIgSAYQgMAMgQAJQgQAJgVAEIAAACQAaAEAWAHQAWAHARAMQARALAJAPQAJAQAAATQAAAegUAWQgUAVgkAOQglAPgwAGQgwAIg3gBgA6eB/IBWAAQB/AAAAg1QAAgagggKQgfgMhAAAIhWAAgA6egmIBIAAQA4AAAagNQAZgNAAgUQAAgXgagKQgagJg2gBIhJAAg");
		this.shape.setTransform(0.025, 0);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Beyond, new cjs.Rectangle(-184.9, -20.3, 369.9, 40.6), null);


	(lib.ASRockLogo = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("ACZFaQgVgMgRgbQhBhngvg+QgigxgjgUQgygbgcAQQgbARgBA4IAABQQAAAzgBAdQgBApgNAKQgNAJgyABQgkAAgPgKQgTgOAAgkIABjSIAAjRIAAi0QgBgcANgNQANgLAdAAICqAAQBmAABDAGQBkAIAwBAQAvA+gPBlQgOBghkAqIgVAKIgNAIIDXE0IhBADQgfABgTACIgKAAQgZAAgSgKgAihjgQgLALAABAQgBBGALALQAMAMBFABIAeAAIAAgCIAoABQAXAAAQgCQAngFAVgVQAVgVACgkQADglgWgYQgXgZgqgFQgXgDgfAAIg3AAQhDAAgMALg");
		this.shape.setTransform(2384.8494, -336.0052);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("ArNSZQk8ipjVlDQjxltApm1QApm1Evk/QDbjmEih8QEYh3ExgCQEwgCEYBzQEjB4DcDkQC/DGBdD3QBbDwgKD+QgLD/hvDpQhyDxjOC5QjXDBkGBeQkEBdlIADQlvgPknidg");
		this.shape_1.setTransform(563.3813, 105.4983);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("AkMJ/Qh8g1hghgQjKjMAAkfQABkbDJjLQDKjLEagCQCLgBCBA2QB9A1BhBgQBgBgA1B8QA4CBAACMQAAEfjKDLQjJDMkgAAQiLAAiBg2gAmAmTQioCfgEDrQgDDnCfCnQCgCnDmAFQDlAFCniiQCnihAEjnQAFjkieinQidinjigGIgRAAQjiAAiiCZg");
		this.shape_2.setTransform(2381.175, -336.1509);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("EA1gAyEIwBgDQpcgDmlgOQoigSnohIQoUhOniiQQn6iXmjjQQnNjll4kxQotnFkepMQnQu+H6vAQFjqjLRn2QGDkNHIjEQGmi2Hrh7QLXi0L6grQD+gOFtgOIJrgZIABANIRCAAQBCAAALALQAMAMAABAQABKogBKoQAABDgNALQgMAMhJAAQrdAAlvACQlPABkRAaQlCAekYBEQruC2nlHeQlZFUgiHGQgbFfC3E0QBdCcCLCJQB8B7ClBxQIWFtLMBuQEGAoE2ASQDyAOFMADQEiADJEgCQA6AAAKAKQAKALABA4QABKygBKyQgBA7gKAKQgKALgxAAIgIAAg");
		this.shape_3.setTransform(1349.1341, 105.029);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("EgeqAsJQuPlupLp/QkbkzivlMQi8lihGmGQiSsrF3rvQFzrmMMoMQMnodQZi6QJahqJjAgQK+AlJmC+QKIDIIuF0QL/IAF4LeQD1HdAeIFQA6PgqpNCQk5F/mkElQmFEQnqDHQq2EarsBAQhrAJidAKIkIAPQwlgKuNltgA4gwbQjDDzheEqQhbEhAOEwQAPExB3EWQB7EgDaDfQKuK/PSheQM/hPISqLQC1jeBgkRQBdkJADkbQADkahZkLQhbkSixjhQpKrovggYQvbASpMLeg");
		this.shape_4.setTransform(563.2717, 105.7701);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFFFF").s().p("EA7CBC/QgMgCgSABIgeAAMgj7AAAQg/gBgKgKQgLgKgBg8IgGlZQgEjLgIiNQgRkvg0kFQg6kihnj/Ql9uxv8jOQlrhJmnAQIgkAAQgUAAgNAGQgNAFgMANQgMANgDANQgFASABAaIABAuMAAHAsgQAABKgNANQgMAMhKAAMgm5AAAQgyACABgxMAAAiDpIADhjMAoHgACQAOAAAVADIAiAFMgABA4QIACBaQAAAmAVAUQATASApAEQGQAoFWgkQF/goFRiJQJGjqE/n+QCOjlAshPQBiiwAyiXQAIgbAPgLQAPgMAaACIeyAAQBMAAAQAMQARANASBHQCyK3mvJ8Qi4EQkCDeQjvDMk2CoQg3AdhVAqIiYBKIAtAjIAqAfQGkEhEuFFQJFJvCnN3QBNGXAKG/IAAMgIgDAZQgCAPABAKQADAjgOAQQgMAOgaAAIgNgBg");
		this.shape_5.setTransform(2112.2728, -3.186);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FFFFFF").s().p("Eg8jBC0QgJgJgBgZIAAhFMAAAiCmQAAgiADhCMBNgAACIB3gEIDcANQCCAIBYANQEXAnEgBiQECBYEXCNQFjCxEDEIQHMHUA8KWQArHOheGIQhLE6iqEHQilD9kADTQiwCQjoBrQi5BWkIBPQhgAciSAmIj/BDIBSAzQEGCZDQCWQDvCsC/C5QJPI9DcNoQB2HTAZGtQANDVALEeIATHzQACBBgMAMQgMALhCAAQ0AAB0AgBQhHAAgMgNQgNgMgBhMQgFlqgikyQgolehSk0QhIkShrjkQh2j6ikjLQl8nWqAjGQkLhSksgkQkLghk3ACQg3ABgKAKQgJALgCA7MAAAAwRQABAygwAAI9sABQhbAAgKgMgEgcjgiXIAARzIgBAfQAAASADALQAEAMAKALQALALAKACQAQAEAXAAIApgBISvAAIGKAAQDigBCogDQEwgGDdhjQCuhOBXiOQBUiJACjAQADi9hbiEQhaiEiyhHQkAhmkOgBQjGgCkYAAIngABIAAgBIv7AAIhGAAIgDAAQgtAAABAxg");
		this.shape_6.setTransform(-231.5752, -3.325);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFFFFF").s().p("EBhiBDYIhkgDMiDNAAAQgIhVgBgrMAABhjBQAAhggPgSQgRgThbgEQi+gKioALQkHARjJDlQi8DZiAELMgqHBXTIgxBjQgdA6gRApQgPAmgZAPQgXANgrAAQlogBrQAHI2zAOQh4ABhkgHQgpgCgHgMQgGgLAPgkQAGgOAWgnMA3whqpIColKQBkjBBOiCQEhndGtkGQFijXGegwICogWICgADMA3cAABQAWAAAhACIA2ADMgAYA9uQgJVZgHVaIgBBNQABAcAJAJQAIAIAbABIBMAAMBaJgAVQHBgDEVkrQCYijApi2QAqi+hRjLQhVjSich0Qieh0jhgPQk5gWlagCQtigC7GACQtfgBqKm0Qn1lPkonJQkunUhSpIQhPo0B9n1QCCoGFbm3QFtnOJvj3QHQi6H6gmQE4gYEegBUANmgABBD+AAAIBTAAQAcABAKAKQAJAJABAbIgBBPIABYsIgBBKQgBAbgJAJQgIAIgaABQgQABg4gBUg2DAABgbCgACQiaAAh7AjQiKAnhvBUQimB+hbCxQhXCpgDC8QgDC6BQCpQBTCwCfB9QC9CUECAAISRAAIN/gCQIVgCFqAIQQ4AXMdIfQMMIUC8NGQBaGTgpGOQgqGJiqF7QkwKmoPGUQoKGQriB/QhHANhqALIizASg");
		this.shape_7.setTransform(-1573.5687, -0.8);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FFFFFF").s().p("EhCbAAKIAGgTMCDOAAAIBkACQgGAHAAAKg");
		this.shape_8.setTransform(-1374.6, 431.15);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
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
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.ASRockLogo, new cjs.Rectangle(-2496.5, -432.1, 4993.2, 864.3), null);


	(lib.LogoSocketTR4 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// txt
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#16100E").ss(2.6, 1, 1).p("AAAkXIAAIv");
		this.shape.setTransform(91.2, 51.75);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#ABABAB").s().p("A46HqIAAvTMAiXAAAIPePTgAqqEzIAAovgAGECjQAAAoAHAcQAHAcAPAPQARATAZAHQAZAHAyAAIA3gDQAXgDAQgIQAQgHALgMQALgMAIgRQAMgcADgnQAEgnAAh3QAAhigDglQgDgngJgaQgHgXgKgOQgLgOgQgJQgQgIgYgEIg5gEQgvAAgaAIQgaAIgRAUQgQATgHAjQgIAjAAA4QAAAxAGAdQAHAgAOASQAPARAaAIQAYAHApAAQAvAAARgKQASgKAMgiIABAAIAABRQAAApgCARQgDAXgIAKQgHAKgRAEIgsACQgmAAgNgDQgNgEgFgMQgIgRABglIhJAAgAA9CjQAAAoAHAcQAHAcAPAPQARATAZAHQAZAHAyAAIA3gDQAYgDAPgIQAQgHALgMQALgMAIgRQAMgcADgnQAEgnAAh3QAAhigDglQgDgngJgaQgHgXgKgOQgLgOgQgJQgPgIgZgEIg5gEQgvAAgaAIQgaAIgRAUQgQATgHAjQgHAjAAA4QAAAxAGAdQAGAgAPASQAOARAaAIQAYAHApAAQAvAAARgKQASgKAMgiIABAAIAABRQAAApgCARQgDAXgIAKQgHAKgRAEIgsACQgmAAgNgDQgMgEgGgMQgIgRABglIhJAAgAkKCSQAAAuAJAgQAHAgARARQARATAbAHQAcAIA1AAQAyAAAagJQAbgIAQgVQAPgTAHgeQAHgdAAguQAAghgEgVQgDgXgJgOQgIgOgNgJQgNgHgUgEIAAgDQASgEAMgIQAMgIAHgPQAIgPAEgXQADgWAAghQAAgqgHgbQgIgcgRgRQgQgQgdgIQgcgHgrAAQhFAEgVAKQgPAHgLANQgKALgHARQgHAVgDAVQgCAVAAA6IBHAAIAAgNQAAgeADgOQACgRAIgIQAJgMAygCIAqACQAQADAHAIQAIAIACAQQACAOAAAdQAAAagDANQgEANgJAHQgHAGgPABIgeABIAAABIhZAAIAABQIA3AAIAiAAIAAABQAqAAAIAEQANAHAGAPQAFAPAAAfQAAAegCAQQgDARgIAJQgIAJgPAEIhXAAQgRgDgIgKQgIgJgCgWQgCgRAAgqIhIAAgAmxA/IBiDvIBWAAIh9keIB2kLIhYAAIhaDcIgBAAIhajcIhYAAIB3ELIiBEeIBaAAIBjjvgAweBpIAKAAIAABFIABAQQABAHAFAEQAEAEAJAAQAFAAAEgCQADgCADgEQACgEACgGIABgPIAAgJIgKAAIAAAHQAAAMgCAEQgCAFgGAAQgGAAgCgEQgCgDAAgKIAAhFIAbAAIAAgNIgbAAIAAgbIgKAAIAAAbIgKAAgAxRBdQgHACgDAGQgDAHgCALQgBAKAAASQAAATABAKQABALAEAGQADAHAGACQAGADAKAAQAJAAAFgCQAGgCADgDQAEgEACgFQABgHAAgIIAAgEIgLAAQABAHgBAEQgBAEgCACQgCACgEABIgKABQgHAAgEgCQgEgBgCgEQgCgEgBgJIAAgUIAyAAIAAgbIgCgMQgBgHgCgEIgGgGIgIgEIgLgBQgKAAgFADgAzaBdQgGADgEAFQgDAHgCALQgBAKAAARQAAATABAKQABAMAEAGQADAHAGACQAGADAKAAQAKAAAGgEQAGgCADgHQADgFAAgGIABgTIgKAAIgBAPQAAAGgCACQgCAEgDAAQgEACgFAAQgJAAgEgCQgEgBgBgDQgCgFgBgJQgCgJAAgPIABgYQABgKACgDQACgDAEgCQADgBAHAAIAJABQAEABACACQACADABAEIABAKIAAADIAKAAQAAgOgCgGQgBgFgCgDIgGgGQgDgCgEgBIgKgBQgKAAgFADgA0mBdQgGACgEAGQgDAGgBALQgCAKAAATQAAATACAKQABAMADAFQADAHAHACQAFADAKAAQAKAAAGgDQAGgCADgGQAEgGABgLQABgLAAgTIgBgcQgBgMgEgGQgDgGgGgCQgGgDgKAAQgKAAgFADgA2MCzQABAGACAFQACAGADACQAFAEAEACIAQABQAPAAAHgCQAHgCAEgEQAEgEACgKQACgJAAgQQAAgPgBgIQgCgHgEgFQgDgEgGgDQgGgBgNgBQgRgCgEgBQgEgDgCgGQgBgFAAgLIABgMQAAgGACgDQADgEAFgCQAEgBAMAAQAKAAAFACQAEACACAEQACAGAAAPIALAAIAAgCIgBgSIgDgMIgEgGIgGgEQgMgCgJAAQgNAAgGABQgHADgEAFQgEAEgCAJQgCAJAAAOQAAAPADAJQADAIAGAFQAEADADAAIASACQASACADACQADACACAFIABAPIgBASQgBAHgCADQgDADgFABQgFABgKAAQgNAAgEgBQgFgDgCgFQgBgEAAgFIgBgRIgLAAQAAAQABAJgAs/CRIAAAVIA4AAIAAAlIALAAIAAglIAPAAIAAgPIgPAAIAAhrIgRAAgAtgCMQADACADADQACADABAGQABAFAAAHIAAAlIALAAIAAgpIgBgMIgDgKIgFgFQgDgDgEAAIAAgBQAFAAAEgDQADgDACgFQACgEABgIIABgTQAAgMgCgIQgCgJgDgGQgEgFgFgCQgGgDgIAAIgvAAIAACfIALAAIAAhAIAiAAIADAAIAGABgAvsA9IAgAAIAACOIALAAIAAiOIAhAAIAAgRIhMAAgAxmDLIgjg8IAegzIgNAAIgZAsIgFAAIAAhcIgKAAIAACfIAKAAIAAg2IAFAAIAdA2IAOAAgAt/hAIAAA0IA0AAIAkglIgzAAIAAg0gAtahtIA7AAIAAA7IAjAlIAAiEIiCAAgAwDgVIAvAAQAgAAASgQQAQgPAAgaQAAgZgQgQQgRgRgeAAIgyAAgAw1gVIAcAAIAAhzIgZAAIgkArIglgrIgYAAIAABzIAcAAIAAhIIAfAkIAEAAIAfgkgAzIgsIAJAXIAeAAIgyhzIghAAIguBzIAeAAIAJgXgA0iC9QgEgBgCgEQgCgEgBgKIAAgXIABgXQAAgIACgEQACgEAEgDQAEgBAHAAQAIAAADABQAEACACAEQACAEABAJIABAXIgBAXQgBAKgCAEQgCAEgEABQgDACgIAAQgHAAgEgCgAs2CXIAvhgIAAAAIAABggAxWCKIAAgSQABgHACgEQADgDAEgCQAEgBAGAAQAJAAAEACQAEADABAGIABAYgAuLB8IAAhBIAkAAQAGAAAEADQAEABACAEIACAKIAAASIgBANQgBAGgCADQgDADgEACQgEACgHAAgAHzAAQgPgDgIgJQgIgJgCgRQgCgQAAggQAAgdACgOQADgRAIgIQAHgJAPgDIAngDIArADQARADAHAKQAIAKADATQACARAAAjQAAAZgCAOQgEAOgHAIQgJAIgPADIgoABgACsAAQgPgDgIgJQgHgJgDgRQgCgQAAggQAAgdACgOQADgRAIgIQAHgJAPgDIAngDIArADQARADAHAKQAIAKADATQADARAAAjQAAAZgDAOQgDAOgIAIQgIAIgQADIgoABgAvngqIAAhJIASAAQATAAAKALQAIAJAAAQQAAAPgHAKQgKAMgUAAgAz0hAIARgsIASAsg");
		this.shape_1.setTransform(159.525, 49.025);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#16100E").s().p("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");
		this.shape_2.setTransform(50.925, 51.975);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#585858").s().p("AGpETQgZgHgSgTQgPgPgHgcQgHgcAAgoIAAgRIBJAAQgBAlAIARQAGAMANAEQAMADAmAAIAsgCQARgEAIgKQAIgKACgXQACgRAAgpIAAhRIgBAAQgMAigRAKQgSAKguAAQgpAAgZgHQgagIgOgRQgPgSgGgfQgGgeAAgxQAAg4AHgjQAIgjAQgTQAQgUAagIQAagIAvAAIA6AEQAYAEAQAIQAQAJAKAOQALAOAHAXQAJAaADAnQACAlAABjQAAB2gDAnQgEAngMAcQgIARgLAMQgKAMgQAHQgQAIgXADIg3ADQgyAAgZgHgAHRi/QgPADgIAJQgHAIgEARQgCAOAAAdQAAAgACAQQADARAHAJQAIAJAQADIAqACIAngCQAQgDAIgIQAIgIADgOQADgOAAgZQAAgjgDgRQgCgTgJgKQgHgKgRgDIgqgDgABiETQgZgHgSgTQgPgPgHgcQgHgcAAgoIAAgRIBJAAQgBAlAIARQAGAMANAEQAMADAmAAIAsgCQARgEAIgKQAIgKACgXQACgRAAgpIAAhRIgBAAQgMAigRAKQgSAKguAAQgpAAgZgHQgZgIgPgRQgPgSgGgfQgGgeAAgxQAAg4AIgjQAHgjAQgTQARgUAZgIQAagIAwAAIA5AEQAYAEAQAIQAQAJALAOQAKAOAHAXQAJAaADAnQACAlAABjQAAB2gDAnQgEAngMAcQgIARgKAMQgLAMgQAHQgQAIgXADIg3ADQgyAAgZgHgACKi/QgPADgIAJQgHAIgDARQgDAOAAAdQAAAgACAQQADARAIAJQAHAJAQADIAqACIAngCQAQgDAIgIQAIgIADgOQADgOAAgZQAAgjgCgRQgDgTgIgKQgIgKgRgDIgqgDgAjfESQgcgHgRgTQgQgRgIggQgIggAAguIAAggIBJAAQAAAqACARQACAWAIAJQAIAKARADIBWAAQAQgEAHgJQAIgJADgRQADgQAAgeQAAgfgGgPQgFgPgOgHQgHgEgqAAIAAgBIgiAAIg3AAIAAhQIBZAAIAAgBIAegBQAOgBAIgGQAJgHADgNQAEgNAAgaQAAgdgCgOQgDgQgIgIQgHgIgQgDIgpgCQgyACgKAMQgHAIgDARQgCAOAAAeIAAANIhIAAQABg6ACgVQACgVAIgVQAGgRALgLQAKgNAQgHQAVgKBEgEQAsAAAbAHQAdAIARAQQARARAIAcQAHAbAAAqQAAAhgDAWQgDAXgIAPQgIAPgMAJQgNAIgSAEIAAADQAVAEANAGQAOAJAIAOQAIAOADAXQADAVAAAhQAAAugFAdQgIAegOATQgSAVgaAIQgbAJgyAAQg1AAgbgIgAlyEVIhijvIgBAAIhjDvIhZAAICBkdIh3kMIBYAAIBaDcIABAAIBajcIBYAAIh2EMIB9Edg");
		this.shape_3.setTransform(162.975, 51.525);

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
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.LogoSocketTR4, new cjs.Rectangle(0, 0, 319.1, 98.1), null);


	(lib.LogoRyzen = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AipAjIAAhEIFJAAQAIAAABABQABABAAAHIAAAyQAAAGgBABQgCACgFAAg");
		this.shape.setTransform(41.15, -15.1);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AgXCrQgGAAgCgCQgCgBAAgHIABhzQAAgLgIgKIiDi2IgHgLIAIgBIBCAAQAJAAAGAIIBXB5QACAFAEgFIBXh3QAHgLANABIA7AAIAJABQgCAHgCADIgsA9IhaB7QgGAJAAAKIAAB1QAAAGgBABQgBACgHAAg");
		this.shape_1.setTransform(-44.55, -1.5011);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("AikBnQgFAAAAgGIAAjBIAAgGIFKAAQAHABABABQABABAAAGIAAAzQAAAGgBACQgCACgGAAIkGAAIAABCIEFAAQAIABABAAQABACAAAHIAAAxQAAAGgBACQgCABgHABg");
		this.shape_2.setTransform(41.125, 5.3);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("ABfCjIjBjhIgCABIAADnIhFAAIAAlTIA7AAQAKgBAHAIIC7DaIAFAIIADgCIAAjnIBEAAIAAFTIg6AAIgBAAQgKAAgGgHg");
		this.shape_3.setTransform(85.425, -1.475);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AikCqIgFAAIAAg8QgBgJAIgGIDijCIgCgCIjnAAIAAhEIFTAAIABAFIAAA3QAAAJgIAGIjhDCIABABIDnAAIABAGIAAA5QgBAGgFAAg");
		this.shape_4.setTransform(-2.4, -1.475);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFFFF").s().p("ABbChIhHh6QgEgFgEAAIh2AAIAACIIhFAAIAAjMIEEAAQAIAAABgBQACgCAAgIIAAgvQAAgFgCgCQgCgCgFAAIkGAAIAAhEIAHgBIEGABQAbAAASAPQATAOAGAZIAAAFIAAArQABAZgBARQgCAWgPAQQgQAQgWAEIgLACIBNCHIhEAAIgBABQgKAAgFgKg");
		this.shape_5.setTransform(-84.85, -1.4987);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.lf(["#ED7D08", "#EE7F07", "#CE4D0D", "#A91312"], [0, 0.208, 0.412, 0.643], 42.8, -51.8, -42.1, 49.5).s().p("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");
		this.shape_6.setTransform(-0.0023, 0.0096);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
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
		}).wait(1));

		// bg-button
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#000000").s().p("AxAKgIAA0/MAiCAAAIAAU/g");
		this.shape_7.setTransform(3.8, -2.275);

		this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	}).prototype = getMCSymbolPrototype(lib.LogoRyzen, new cjs.Rectangle(-105.1, -69.4, 217.89999999999998, 134.3), null);


	(lib.LogoRgbLed = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// txt
		this.shape = new cjs.Shape();
		this.shape.graphics.f().ls(["#DC0911", "#FFFF00", "#86BF2E", "#19ADDF", "#3963B3"], [0, 0.267, 0.498, 0.757, 1], -60.2, 0, 60.3, 0).ss(4, 1, 1).p("ApGAAISNAA");
		this.shape.setTransform(58.275, 38.35);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("ACiBFIAAiJIBuAAQAXAAAPAJQARAKAAAMIAABLQAAAMgRAKQgPAJgXAAgADZA2IAbAAQALAAAJgFQAIgFAAgGIAAhLQAAgGgIgFQgJgEgLAAIgbAAgAhSBFIAAiJICJAAIAAAQIhSAAIAAAtIA3AAIAAAPIg3AAIAAAuIBSAAIAAAPgAlGBFIAAiJIA3AAIAAB6IBTAAIAAAPg");
		this.shape_1.setTransform(61.325, 55.375);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#DC0911").s().p("ABVCXIighnIgjAAIAABnIg8AAIAAktICzAAQA4gBAcAJQAyAPAAAsIAABJQAAAdgiAQQgbANggAAIgPAAICIBngAhugKICgAAQALAAAJgDQANgFAAgJIAAgtQAAgThKAAIh3AAg");
		this.shape_2.setTransform(17.175, 15.2);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#86BF2E").s().p("AgrCXQgWABgYgDQgWgDgPgFQgzgSAAgnIAAinQAAgYAGgLQAHgQAXgIQAIgCAngDQAkgDAPAAIDdAAIAAA7IjdAAQgmAAgSAHQgSAGAAAMIAACFQAAAMASAHQASAGAmAAIChAAIAAg7IiMAAIAAg7ICqAAQAMABAJAIQAJAKAAALIAACTg");
		this.shape_3.setTransform(60.325, 15.2);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#005BBD").s().p("AiiCYIAAkvIDQAAQAqAAAeANQAtARAAAmIAAAsQAAAPgHAKQgHAKgPAEQANACAJAMQAHALAAAMIAAAvQAAAlguATQgQAGgSADQgTADgUAAgAhcBcICIAAQBCAAAAgWIAAgXQAAgSgtAAIidAAgAhcgeICxAAQAJAAAGgDQAKgEAAgHIAAgZQAAgGgHgEQgGgFgNgDQgTgEgTAAIiKAAg");
		this.shape_4.setTransform(102.475, 15.175);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
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
		}).wait(1));

		// button-bg
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#000000").s().p("ApkFPIAAqdITJAAIAAKdg");
		this.shape_5.setTransform(59.825, 32.05);

		this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	}).prototype = getMCSymbolPrototype(lib.LogoRgbLed, new cjs.Rectangle(-2, -1.4, 123.1, 67), null);


	(lib.LogoGigabitEthernet = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// logo elements
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("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AJAEQAIAEAJgBQAJAAAHgDQAHgEAEgGQAFgGACgIQACgHAAgHQAAgJgCgGQgDgIgEgGQgFgGgGgDQgHgDgIgBQgKABgJAEgAF/gGQgJgEgHgFQgHgGgEgJQgFgIAAgLQAAgNAGgJQAFgIAJgGQAJgFALgDQAKgCAMAAQAMAAAOADIAAgCQAAgHgCgFQgBgFgDgEQgEgDgFgCQgGgCgHAAQgLgBgMAEQgJADgLAGIgKgcQAOgHAPgDQAQgFAQAAQAOAAALAFQALAEAIAIQAHAHAEALQADAMAAANIAABWIghAAIgDgMQgHAIgKADQgJAFgNAAQgKAAgJgDgAGPhCQgFACgCAEQgDAEAAAHQAAAIAGAFQAGAGAKAAQAHgBAIgDQAGgDAHgFIAAgbQgLgCgJAAQgMAAgIAFgAAAgFQgJgCgJgEQgJgEgIgFQgIgEgHgHIgMgOQgFgIgEgJQgEgJgCgKQgCgJAAgLQAAgKADgKQACgKADgJQAEgJAGgIIAMgOIAPgMQAIgFAJgEQAJgEAJgCQAKgBAKAAQAMAAALACQALADAKAEQAKAFAJAHQAJAHAIAJIgbAYQgOgPgJgFIgOgGQgIgBgIAAQgMAAgLAEQgKAGgIAIQgIAJgFALQgEAMAAAOQAAANAEANQAEALAIAIQAIAJALAFQAKAEANAAQAMAAALgEQAMgFAJgIIAAgdIgtAAIAAggIBUAAIAABKQgIAJgJAIQgJAHgLAFQgKAFgMACQgLACgNABQgLAAgKgCgAKagHIAAiOIAnAAIAACOgACCgHIAAiOIAmAAIAACOgAKaipIAAggIAnAAIAAAggACCipIAAggIAmAAIAAAgg");
		this.shape.setTransform(7.975, 21.05);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		// bg-button
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("AtHDhIAAnBIaPAAIAAHBg");
		this.shape_1.setTransform(9.05, 20.55);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	}).prototype = getMCSymbolPrototype(lib.LogoGigabitEthernet, new cjs.Rectangle(-74.9, -1.9, 168, 45), null);


	// stage content:
	(lib.HE4BannerCHRISTIAN2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_0 = function () {
			// Vul de global variabele root met dit tijdlijn Object (hoofd tijdlijn) 
			root = this;

			var mainTimeline = new TimelineMax({ // create new timeline in GSAP
				delay: 0, // global delay in animation?
				repeat: 0, // global repeat in animation?
				onComplete: startGlow // after playing all, which animation to start?
			});

			function getTextTimeline() { // create a custom function that builds and returns a textTimeline
				var textTimeline = new TimelineMax( // initialise textTimeline with an TimeLine(Max) instance with options
					{
						delay: 0, // main delay in textTimeLine animation
						repeat: 0, // main repeat in textTimeLine animation
						yoyo: false // yoyo the textTimeLine animation?
					}
				);

				textTimeline
					.from( // From Tween start
						root.logoASRock_mc, // Logo element
						0.5, // duration in sec
						{ // fromVars start
							y: 2000, // from Y-value	
							ease: Power4.easeOut // easing type 			
						}, // fromVars end
						// add this tween overlapping the previous with 0.5 sec
					) // From Tween end (not terminated)
					.from( // From Tween start chained on previous
						root.beyond_mc, // Logo element
						0.5, // duration in sec
						{ // fromVars start
							y: 2000, // from Y-value
							ease: Power4.easeOut // easing type 	
						}, // fromVars end
						// add this tween overlapping the previous with 0 sec
					) // From Tween end (not terminated)
					.from( // From Tween start chained on previous
						root.expectation_mc, // Logo element
						0.5, // duration in sec
						{ // fromVars start
							y: 2000, // Y from	
							ease: Power4.easeOut // easing type
						}, // fromVars end
						// add this tween overlapping the previous with 0 sec
					); // from Tween end (and chain terminated)

				return textTimeline; // return the timeLine (not played yet!)
			} // end of the custom function

			function getMotherboardTimeline() { // create a custom function that builds and returns a motherboardTimeline
				var motherboardTimeline = new TimelineMax({
					delay: 0.2, // delay of motherboard animation
					repeat: 0, // repeat motherboard animation
					yoyo: false // yoyo effect
				});

				motherboardTimeline.staggerFrom( // Stagger Tween start (opvolgend)
				[ // start Array of objects to animate
					root.mb2_mc, // object 1
					root.mb1_mc // object 2
				], // end of objects Array
					1, // duration in sec
					{ // collective fromVars start
						x: -3000, // x from
						ease: Power4.easeOut // easing type
					}, // collective fromVars end
					0.2 // stagger delay
				); // stagger Tween end (and terminated)

				return motherboardTimeline; // return the timeLine (not played yet!)
			} // end of the custom function

			function getLogosTimeline() { // create a custom function that builds and returns a LogosTimeline
				var logosTimeline = new TimelineMax();
				var logoLijst = [ // start Array of objects in separate var logoLijst
				root.logoAmd_mc, // object 1
				root.logoRyzen_mc, // object 2
				root.logoGigabit_mc, // object 3
				root.logoRgb_mc // object 4
			]; // end of objects Array

				logosTimeline.staggerFrom(
					logoLijst, // list of objects to animate
					0.5, // duration of animation
					{
						y: 900,
						ease: Power4.easeOut // y from and easing type
					},
					0.1 // delay in sec
				);

				return logosTimeline; // return the timeLine (not played yet!)
			} // end of the custom function

			mainTimeline // still an empty timeline
				.add(getTextTimeline()) // now add the textTimeline...
				.add(getLogosTimeline()) // and add the logosTimeline...
				.add(getMotherboardTimeline(), '-=0.4'); // and add the motherboardTimeline with a 0.4 sec overlap on the logosTimeline...
			// and now all 3 timelines will play in sequence!


			/*   #############################################################
				 ### Glow function voor de achtergrond van de boards	   ###
				 ### Pas alleen de animTempo aan, dit is in frames!        ###
				 #############################################################
			*/
			var animTempo = 10;


			function startGlow() {
				root.addEventListener('tick', randomize);
			}

			var counter = 0;
			var animDuration = animTempo / 30;

			function randomize() {
				// 30fps = 10 frames = 0.33 sec
				if (counter % animTempo == 0) {
					var randomAlpha = ((Math.random() * 40) + 20) / 100;
					// het mag minimaal 0.2 (20%) en max 0.6 (60%) zijn
					// root.glow_mc.alpha = randomAlpha;
					var currentAlpha = root.glow_mc.alpha;
					TweenMax.fromTo(root.glow_mc, animDuration, {
						'alpha': currentAlpha
					}, {
						'alpha': randomAlpha
					});
				}
				counter++;
			}

			/*   #################################
				 ### 	Einde Glow function	   ###
				 #################################
			*/



			/*   ########################################################################
				 ###	De volgende code maakt alle logo's op de bottom interactief   ###
				 ########################################################################
			*/

			// AMD-logo-button BEGIN
			this.logoAmd_mc.cursor = "pointer";
			this.logoAmd_mc.addEventListener("click", fl_ClickToGoToWebPage);

			function fl_ClickToGoToWebPage() {
				window.open("http://www.amd.com", "_blank");
			}
			var frequency = 30;
			stage.enableMouseOver(frequency);
			// AMD-logo-button END


			// RYZEN-logo-button BEGIN
			this.logoRyzen_mc.cursor = "pointer";
			this.logoRyzen_mc.addEventListener("click", fl_ClickToGoToWebPage_2);

			function fl_ClickToGoToWebPage_2() {
				window.open("https://www.amd.com/en/ryzen", "_blank");
			}
			var frequency = 30;
			stage.enableMouseOver(frequency);
			// RYZEN-logo-button END


			// Gigabit-logo-button BEGIN
			this.logoGigabit_mc.cursor = "pointer";
			this.logoGigabit_mc.addEventListener("click", fl_ClickToGoToWebPage_3);

			function fl_ClickToGoToWebPage_3() {
				window.open("https://www.tp-link.com", "_blank");
			}
			var frequency = 30;
			stage.enableMouseOver(frequency);
			// Gigabit-logo-button END


			// RGB-logo-button BEGIN
			this.logoRgb_mc.cursor = "pointer";
			this.logoRgb_mc.addEventListener("click", fl_ClickToGoToWebPage_4);

			function fl_ClickToGoToWebPage_4() {
				window.open("https://www.asrock.com/microsite/PolychromeRGB", "_blank");
			}
			var frequency = 30;
			stage.enableMouseOver(frequency);
			// RGB-logo-button END


			/*   ##############################################
				 ###	EINDE interactieve bottom-logo's    ###
				 ##############################################
			*/
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

		// Expectation
		this.expectation_mc = new lib.Expectation();
		this.expectation_mc.name = "expectation_mc";
		this.expectation_mc.parent = this;
		this.expectation_mc.setTransform(481.5, 370.5, 1.5565, 1, 0, 0, 0, 0.1, 0);

		this.timeline.addTween(cjs.Tween.get(this.expectation_mc).wait(1));

		// Beyond
		this.beyond_mc = new lib.Beyond();
		this.beyond_mc.name = "beyond_mc";
		this.beyond_mc.parent = this;
		this.beyond_mc.setTransform(495.6, 299.15);

		this.timeline.addTween(cjs.Tween.get(this.beyond_mc).wait(1));

		// Logo
		this.logoASRock_mc = new lib.ASRockLogo();
		this.logoASRock_mc.name = "logoASRock_mc";
		this.logoASRock_mc.parent = this;
		this.logoASRock_mc.setTransform(493.15, 168.95, 0.06, 0.06, 0, 0, 0, 0.8, 0.8);

		this.timeline.addTween(cjs.Tween.get(this.logoASRock_mc).wait(1));

		// MB-2
		this.mb2_mc = new lib.MB2();
		this.mb2_mc.name = "mb2_mc";
		this.mb2_mc.parent = this;
		this.mb2_mc.setTransform(1650.95, 386.9);

		this.timeline.addTween(cjs.Tween.get(this.mb2_mc).wait(1));

		// MB-1
		this.mb1_mc = new lib.MB1();
		this.mb1_mc.name = "mb1_mc";
		this.mb1_mc.parent = this;
		this.mb1_mc.setTransform(1296.7, 386.6);

		this.timeline.addTween(cjs.Tween.get(this.mb1_mc).wait(1));

		// LogoAMD
		this.logoAmd_mc = new lib.LogoSocketTR4();
		this.logoAmd_mc.name = "logoAmd_mc";
		this.logoAmd_mc.parent = this;
		this.logoAmd_mc.setTransform(153.5, 702.25, 1, 1, 0, 0, 0, 159.5, 49);

		this.timeline.addTween(cjs.Tween.get(this.logoAmd_mc).wait(1));

		// LogoRyzen
		this.logoRyzen_mc = new lib.LogoRyzen();
		this.logoRyzen_mc.name = "logoRyzen_mc";
		this.logoRyzen_mc.parent = this;
		this.logoRyzen_mc.setTransform(405, 703.3, 0.5327, 0.5327, 0, 0, 0, 0.2, 0.2);

		this.timeline.addTween(cjs.Tween.get(this.logoRyzen_mc).wait(1));

		// LogoGigabit
		this.logoGigabit_mc = new lib.LogoGigabitEthernet();
		this.logoGigabit_mc.name = "logoGigabit_mc";
		this.logoGigabit_mc.parent = this;
		this.logoGigabit_mc.setTransform(610.65, 702.35, 1, 1, 0, 0, 0, 7.7, 21);

		this.timeline.addTween(cjs.Tween.get(this.logoGigabit_mc).wait(1));

		// LogoLED
		this.logoRgb_mc = new lib.LogoRgbLed();
		this.logoRgb_mc.name = "logoRgb_mc";
		this.logoRgb_mc.parent = this;
		this.logoRgb_mc.setTransform(810.25, 702.35, 1, 1, 0, 0, 0, 58.4, 31.1);

		this.timeline.addTween(cjs.Tween.get(this.logoRgb_mc).wait(1));

		// BG_effect
		this.glow_mc = new lib.Glow();
		this.glow_mc.name = "glow_mc";
		this.glow_mc.parent = this;
		this.glow_mc.setTransform(1446.85, 398);
		this.glow_mc.alpha = 0.6016;

		this.timeline.addTween(cjs.Tween.get(this.glow_mc).wait(1));

		// GrungeBG
		this.instance = new lib.TextureGrunge();
		this.instance.parent = this;
		this.instance.setTransform(909, 220, 1, 0.9147);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(954, 223, 1334.9, 725);
	// library properties:
	lib.properties = {
		id: 'FDAA3566CDFE46DC9A23BD86F56C05AE',
		width: 1920,
		height: 750,
		fps: 30,
		color: "#000000",
		opacity: 1.00,
		manifest: [
			{
				src: "images/asrock-banner-atlas.png?1559031731839",
				id: "asrock-banner-atlas"
			}
	],
		preloads: []
	};



	// bootstrap callback support:

	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();

	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function () {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
	}
	p.stop = function (ms) {
		if (ms) this.seek(ms);
		this.tickEnabled = false;
	}
	p.seek = function (ms) {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
	}
	p.getDuration = function () {
		return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
	}

	p.getTimelinePosition = function () {
		return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
	}

	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}

	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};

	an.compositions = an.compositions || {};
	an.compositions['FDAA3566CDFE46DC9A23BD86F56C05AE'] = {
		getStage: function () {
			return exportRoot.getStage();
		},
		getLibrary: function () {
			return lib;
		},
		getSpriteSheet: function () {
			return ss;
		},
		getImages: function () {
			return img;
		}
	};

	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}

	an.getComposition = function (id) {
		return an.compositions[id];
	}


	an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
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
			domContainers.forEach(function (container) {
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

})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp = AdobeAn.getComposition("FDAA3566CDFE46DC9A23BD86F56C05AE");
	var lib = comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function (evt) {
		handleFileLoad(evt, comp)
	});
	loader.addEventListener("complete", function (evt) {
		handleComplete(evt, comp)
	});
	var lib = comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt, comp) {
	var images = comp.getImages();
	if (evt && (evt.item.type == "image")) {
		images[evt.item.id] = evt.result;
	}
}

function handleComplete(evt, comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib = comp.getLibrary();
	var ss = comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for (i = 0; i < ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet({
			"images": [queue.getResult(ssMetadata[i].name)],
			"frames": ssMetadata[i].frames
		})
	}
	exportRoot = new lib.HE4BannerCHRISTIAN2();
	stage = new lib.Stage(canvas);
	//Registers the "tick" event listener.
	fnStartAnimation = function () {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true, 'both', true, 1, [canvas, anim_container, dom_overlay_container]);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}