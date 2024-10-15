document.addEventListener('DOMContentLoaded', () => {
    const sketches = document.querySelectorAll('.sketch');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const close = document.querySelector('.close');

    sketches.forEach((sketchLink, index) => {
        const sketchFile = sketchLink.dataset.sketch;
        const canvasId = `canvas${index}`;

        const canvasHolder = document.createElement('div');
        canvasHolder.id = canvasId;
        sketchLink.appendChild(canvasHolder);

        loadSketch(sketchFile, canvasId);

        sketchLink.addEventListener('focus', () => {
            modalContent.innerHTML = ''; // Clear previous content
            const largeCanvasHolder = document.createElement('div');
            largeCanvasHolder.id = `large-${canvasId}`;
            modalContent.appendChild(largeCanvasHolder);
            loadSketch(sketchFile, `large-${canvasId}`, window.innerHeight * 0.8);
            modal.style.display = 'block';
        });
    });

    close.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal || event.target == modalContent) {
            modal.style.display = "none";
        }
    };
});

function loadSketch(sketchFile, canvasId, size = 189.92125984) {
    const script = document.createElement('script');
    script.src = sketchFile;
    script.onload = () => {
        new p5((p) => {
            window.sketch(p, size); // Pass size to the sketch function
        }, document.getElementById(canvasId));
    };
    document.body.appendChild(script);
}
