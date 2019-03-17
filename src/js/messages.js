const Messages = {
	show: function(type,text) {
		let interval = 5000;
		let container = document.getElementById('messages');
		console.log('container',container);
		let msgClass = type + '-message';
		let remove = function() { 
			console.log('Inside remove')
			container.style.display = 'none';
		};
		container.className = "";
		container.classList.add(msgClass);
		container.style.display = 'block';
		container.innerText = text;
		setTimeout(remove,interval);
	},
	error: function(text) {
		this.show('error',text);
	},
	success: function(text) {
		this.show('success',text);
	}
}