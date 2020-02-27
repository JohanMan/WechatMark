const helper = (function () {
	var isWeiXin = function() {
		return navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1 ? true : false;
	};
	var isAndroid = function() {
		const agent = (navigator.userAgent || navigator.vendor || window.opera);
		const agentName = agent.toLowerCase();
		return agent != null && /android/i.test(agentName);
	};
	var isIOS = function() {
		const agent = (navigator.userAgent || navigator.vendor || window.opera);
		const agentName = agent.toLowerCase();
		return agent != null && /iphone/i.test(agentName);
	};
	return {
		isWeiXin: isWeiXin,
		isAndroid: isAndroid,
		isIOS: isIOS
	}
})();
$(document).ready(function(){
	const openMarkHtml = '<img id="open-mark" class="open-mark-dialog" />';
	$("body").append(openMarkHtml);
	if (!helper.isWeiXin()) return;
	$("#open-mark").css("display", "block");
	if (helper.isAndroid()) {
		$("#open-mark").attr("src", "img/open-mark-android.png");
	}
	if (helper.isIOS()) {
		$("#open-mark").attr("src", "img/open-mark-ios.png");
	}
});