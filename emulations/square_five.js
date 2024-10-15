window.sketch = function(p, size = 189.92125984) {
	p.setup = function() {
		p.createCanvas(size, size); // Use dynamic size
		p.noStroke();
	};

	p.draw = function() {
		let originalSize = 189.92125984; // Original size for reference
		let scale = size / originalSize; // Calculate scale factor

		p.background(1,121,174,255);
		
		// p.rectMode(p.RADIUS);
		// p.fill(42,126,217,255);
		// p.square(94, 102, 74);
		
		p.rectMode(p.RADIUS);
		p.fill(62,63,67,255);
		p.square(94 * scale, 108 * scale, 54 * scale); // Apply scale to position and size
		
		p.rectMode(p.CENTER);
		p.fill(104,45,37,255);
		p.square(94 * scale, 116 * scale, 76 * scale); // Apply scale to position and size
	};
};