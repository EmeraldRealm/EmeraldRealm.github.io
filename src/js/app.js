(function() {
	
	const app = {

		name: "Emerald Realm",
		
		loadHTMLComponents: () => {
			const components = document.querySelectorAll('.html-component')
			const loadComponent = async c => {
				const { name, ext } = c.dataset
				const response = await fetch('/src/html/' + name + '.' + ext)
				const html = await response.text()
				c.innerHTML = html
			}
			[...components].forEach(loadComponent)
		}

	};
	
	document.getElementsByTagName('title')[0].innerText = app.name;

	app.loadHTMLComponents();
	
})();