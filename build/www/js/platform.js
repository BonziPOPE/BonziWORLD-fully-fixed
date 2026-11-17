var isChromeApp = false;
var isMobileApp = false;
var isApp = false;
var isDesktop = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) == null;

var isChromeBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var urlChrome = "https://chrome.google.com/webstore/detail/bonziworld/naiglhkfakaaialhnjabkpaiihglgnmk";

var isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null;

$(function() {
	var support = {
		AudioContext: {
			supported: typeof (
						window.AudioContext ||
						window.webkitAudioContext
					) != "undefined",
			message: "Your browser does not support the Web Audio API."
		}
	};
		
	var supported = true;
	var supportKeys = Object.keys(support);
	for (var i = 0; i < supportKeys.length; i++) {
		var key = supportKeys[i];
		var obj = support[key];
		supported = supported && obj.supported;
		if (!obj.supported) 
			$("#unsupp_reasons").append(
				"<li>" + obj.message + "</li>"
			);
	}
	
	if (!supported) {
		$("#page_unsupp").show();
	}

	 if (isChromeBrowser && isDesktop) {
	 	$(".app_showcase").append(
	 		'<a class="app_chrome" href="' + urlChrome + '">' +
	 			'<img src="./img/app/chrome.png" alt="Chrome App" width="211px" />' +
	 		'</a>'
	 	);
	 }

	if (!isiOS) {
		var googlePlayBadge = $('<a class="app_android" href="#">' +
			'<img src="./img/app/old/google-play-badge.png" width="211" alt="Get it on Google Play." />' +
		'</a>');
		googlePlayBadge.on("click", function(event) {
			event.preventDefault();
			window.alert("Coming soon...");
		});
		$(".app_showcase").append(googlePlayBadge);
	}
	
	if (!isDesktop) {
		$(".app_showcase").append(
			'<a class="app_chrome">' +
				'<img src="./img/app/desktop.png" width="211px" alt="Open on PC for the best experience." />' +
			'</a>'
		);
	}
});