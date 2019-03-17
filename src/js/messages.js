const Message = {
	interval: 5000,
	container: document.getElementById('messages'),
	remove: function() {
		container.style.display = "none";
	},
	error: function(text) {
		container.className = "";
		container.classList.add("error-message");
		setTimeout(this.remove(),this.interval);
	},
	success: function(text) {
		container.className = "";
		container.classList.add('success-message');
		setTimeout(this.remove(),this.interval);
	}
}