window.sketch = function(p, size = 189.92125984) {
	p.setup = function() {
		p.createCanvas(size, size); // Use dynamic size
		p.noStroke();
	};

	p.draw = function() {
		let originalSize = 189.92125984; // Original size for reference
		let scale = size / originalSize; // Calculate scale factor

		p.background(40,112,61,255);
		
		p.rectMode(p.RADIUS);
		p.fill(26,133,132,255);
		p.square(94 * scale, 102 * scale, 74 * scale); // Apply scale to position and size
		
		p.rectMode(p.RADIUS);
		p.fill(157,156,147);
		p.square(94 * scale, 108 * scale, 54 * scale); // Apply scale to position and size
		
		p.rectMode(p.CENTER);
		p.fill(224,178,59,255);
		p.square(94 * scale, 116 * scale, 76 * scale); // Apply scale to position and size
	};
};