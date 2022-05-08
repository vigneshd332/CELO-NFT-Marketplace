let dropArea = document.getElementsByClassName("uploadBox")[0];

["dragenter", "dragover"]
	.forEach((eventName) => {
		dropArea.addEventListener(eventName, highlight, false);
	})

	[("dragleave", "drop")].forEach((eventName) => {
		dropArea.addEventListener(eventName, unhighlight, false);
	});

function highlight(e) {
	dropArea.classList.add("highlight");
}

function unhighlight(e) {
	dropArea.classList.remove("highlight");
}

dropArea.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
	let dt = e.dataTransfer;
	let files = dt.files;

	console.log(files);
}
