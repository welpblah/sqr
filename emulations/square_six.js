window.sketch = function(p, size = 189.92125984) {
	p.setup = function() {
		p.createCanvas(size, size); // Use dynamic size
		p.noStroke();
	};

	p.draw = function() {
		let originalSize = 189.92125984; // Original size for reference
		let scale = size / originalSize; // Calculate scale factor

		p.background(251,156,0,255);
		
		p.rectMode(p.RADIUS);
		p.fill(253,162,89,255);
		p.square(94 * scale, 102 * scale, 74 * scale); // Apply scale to position and size
		
		p.rectMode(p.RADIUS);
		p.fill(238,202,124,255);
		p.square(94 * scale, 108 * scale, 54 * scale); // Apply scale to position and size
		
		p.rectMode(p.CENTER);
		p.fill(245,214,71,255);
		p.square(94 * scale, 116 * scale, 76 * scale); // Apply scale to position and size
	};
};