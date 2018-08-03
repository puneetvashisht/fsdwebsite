		Reveal.initialize({
			dependencies: [{
				src: 'reveal/plugin/markdown/marked.js'
			}, {
				src: 'reveal/plugin/markdown/markdown.js'
			}],
			markdown: {
				smartypants: true
			},
			// Display controls in the bottom right corner
			controls: true,
			// Display a presentation progress bar
			progress: true,
			// Display the page number of the current slide
			slideNumber: true,
			// Push each slide change to the browser history
			history: true,
            center: true
		});
// Reveal.configure({ transition: 'none', transitionSpeed: 'fast'});
Reveal.getConfig().transitionSpeed = "fast";
