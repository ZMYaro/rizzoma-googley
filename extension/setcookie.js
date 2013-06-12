function checkCookie() {
	chrome.cookies.get({
		url: "rizzoma.com",
		name: "uiv"
	}, function(cookie) {
		if(cookie && cookie.value == 1) {
			return;
		}
		
		var SECONDS_IN_A_MONTH = 2600000000; // Approximately
	
		chrome.cookies.set({
			url: "https://rizzoma.com/topic/",
			domain: "rizzoma.com",
			path: "/",
			name: "uiv",
			value: "1",
			expirationDate: Math.floor((new Date((new Date()).getTime() +
					SECONDS_IN_A_MONTH)).getTime() / 1000)
		}, function(newCookie) {
			if(!newCookie) {
				console.log("Unable to set UI version cookie - " + chrome.runtime.lastError);
			} else {
				console.log("Set UI version cookie - " + newCookie);
			}
		});
	});
}

chrome.runtime.onInstalled.addListener(checkCookie);
chrome.runtime.onStartup.addListener(checkCookie);

checkCookie();
