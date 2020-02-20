ext = false;

function distortFilter() {
    if (ext == false) { 
		document.body.style.filter = "hue-rotate(120deg) sepia(30%) saturate(0.5)"
		ext = true
	} else { 
		document.body.style.filter = "none"
		ext = false
	}
} 

browser.runtime.onConnect.addListener(distortFilter);